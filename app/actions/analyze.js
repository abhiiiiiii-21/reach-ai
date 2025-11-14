"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { z } from "zod";

 const ProjectSchema = z.object({
  businessBasicInfo: z.object({
    name: z.string().optional(),
    industry: z.string().optional(),
    location: z.string().optional(),
    websiteType: z.string().optional(),
  }),

  competitorBrands: z.array(z.string()).optional(),

  businessIntroduction: z.string().optional(),

  coreSellingPoints: z.array(z.string()).optional(),

  coreAudiences: z.array(z.string()).optional(),
});

 function prompt(dataForGemini) {
  return `
Analyze and return a JSON object with:
- Business Basic Information
- Competitor Brands
- Business Introduction
- Core Selling Points
- Core Audiences

Content:
${dataForGemini}
      `
    }

export async function analyzeWebsite(url) {
  try {
    if (!url || typeof url !== "string") {
      return { error: "Invalid or missing URL." };
    }

    console.log(`Scraping ${url} using Apify...`);

    // 1. SCRAPE USING APIFY
    const scrapeRes = await fetch(
      "https://api.apify.com/v2/acts/apify~website-content-crawler/run-sync-get-dataset-items?token="+process.env.APIFY_API_TOKEN,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startUrls: [{ url }],
          maxDepth: 1,
          crawlerType: "playwright:chrome",
        }),
      }
    );

    if (!scrapeRes.ok) {
      return { error: `Apify failed with status ${scrapeRes.status}.` };
    }

    const scrapedData = await scrapeRes.json();

    if (!scrapedData || scrapedData.length === 0) {
      return { error: "Apify returned no content for this URL." };
    }

    const siteData = scrapedData[0];

    const dataForGemini = `
Title: ${siteData?.metadata?.title || ""}
Description: ${siteData?.metadata?.description || ""}
Keywords: ${siteData?.metadata?.keywords || ""}
OpenGraph: ${
      siteData?.metadata?.openGraph
        ?.map((o) => `${o.property}: ${o.content}`)
        .join("\n") || ""
    }
Main Text: ${siteData?.text || siteData?.markdown || ""}
`;

    if (!dataForGemini.trim()) {
      return { error: "Unable to extract readable content from Apify." };
    }

    console.log("Scraping done. Sending content to Gemini...");
    const model = google("gemini-2.5-flash", {
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const { object } = await generateObject({
      model,
      schema: ProjectSchema,
      prompt: prompt(dataForGemini),
    });

    return object

  } catch (err) {
  console.error(err);
  return { error: err.message || "Unexpected server error." };
}

}
