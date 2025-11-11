"use client";
import React, { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [businessName, setBusinessName] = useState("Reach AI"); // Mock Data
  const [productType, setProductType] = useState("web app"); // Mock Data
  const [benchmarkBrands, setBenchmarkBrands] = useState([
    "Brand A",
    "Brand B",
    "Brand C",
  ]); // Mock Data
  const [logoPreview, setLogoPreview] = useState(null);
  const [businessIntro, setBusinessIntro] = useState(
    "Reach AI is an intelligent platform designed to connect businesses with high-impact influencers based on deep audience matching and predictive ROI analysis."
  ); // Mock Data
  const [sellingPoints, setSellingPoints] = useState([
    { id: 1, text: "AI-Powered Audience Matching for optimal campaigns." },
    { id: 2, text: "Predictive ROI calculation before campaign launch." },
    { id: 3, text: "Seamless collaboration tools and payment integration." },
  ]); // Mock Data
  const [coreAudiences, setCoreAudiences] = useState([
    { id: 1, text: "Marketing Directors (30-55, US/EU)" },
    { id: 2, text: "Startup Founders (Tech, Seed/Series A)" },
  ]); // Mock Data

  const handleGenerate = async () => {
    if (!url.trim()) return;
    setLoading(true);
    try {
      // Placeholder: wire real generation logic here
      console.log("Generate for:", url);
      // Simulate a small delay to show loading state
      await new Promise((r) => setTimeout(r, 600));
    } finally {
      setLoading(false);
    }
  };

  const handleBenchmarkRemove = (brandToRemove) => {
    setBenchmarkBrands(benchmarkBrands.filter((b) => b !== brandToRemove));
  };

  const handleAddListItem = (setter, list) => {
    setter([...list, { id: Date.now() + Math.random(), text: "" }]);
  };

  const handleDeleteListItem = (setter, list, idxToRemove) => {
    setter(list.filter((_, i) => i !== idxToRemove));
  };

  const handleUpdateListItem = (setter, list, idxToUpdate, newText) => {
    const copy = [...list];
    copy[idxToUpdate] = { ...copy[idxToUpdate], text: newText };
    setter(copy);
  };

  // Vercel-like Input/Select style with updated color scheme
  const inputStyle =
    "mt-2 w-full px-4 py-2 border border-neutral-800 rounded-lg text-sm bg-neutral-950 text-white outline-none focus:border-white transition duration-150 font-raleway";

  // Vercel-like Card style with updated color scheme and more rounded corners
  const cardStyle =
    "w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-6";

  return (
    // Container with vertical spacing only
    <div className="min-h-screen bg-black text-white py-12 space-y-8 font-raleway">
        
        {/* Section 1: URL Input & Title */}
        <div className={cardStyle}>
          <h2 className="text-xl font-bold">Hello Krish </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Enter a website URL here to automatically generate your marketing profile.
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex items-stretch rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
                  <div className="px-3 py-2 bg-neutral-950 text-neutral-400 text-sm flex items-center">
                    https://
                  </div>
                  <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="reach.ai"
                    className="flex-1 px-4 py-2 bg-neutral-950 text-sm outline-none text-white placeholder:text-neutral-600 font-raleway"
                  />
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={loading || !url.trim()}
                className="px-6 py-2 bg-white text-black hover:bg-white disabled:bg-white disabled:opacity-100 disabled:cursor-not-allowed text-sm font-bold transition duration-150 rounded-lg font-raleway"
              >
                {loading ? "Generating…" : "Generate "}
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Basic information */}
        <div className={cardStyle}>
          <h3 className="text-lg font-semibold">Basic Information</h3>
          <p className="mt-1 text-sm text-neutral-400">Essential details about your business.</p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Logo upload */}
            <div className="lg:col-span-1">
              <label className="text-sm font-medium text-neutral-300">Business Logo</label>
              <div className="mt-3 flex items-start gap-4">
                <div className="w-20 h-20 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800 shadow-inner">
                  {/* Logo preview or placeholder */}
                  {logoPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={logoPreview} alt="logo" className="w-16 h-16 object-cover rounded-md" />
                  ) : (
                    // Placeholder 'R' with a subtle gradient/color
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold bg-gradient-to-br from-blue-500 to-sky-600 text-white shadow-lg">
                      R
                    </div>
                  )}
                </div>
                <div className="pt-2">
                  <label
                    className="inline-flex items-center px-4 py-2 border border-neutral-800 rounded-lg text-sm text-white cursor-pointer hover:bg-neutral-900 transition duration-150 font-raleway"
                  >
                    Upload SVG
                    <input
                      type="file"
                      accept="image/svg+xml"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) {
                          setLogoPreview(URL.createObjectURL(f));
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  <p className="mt-2 text-xs text-neutral-600">Only SVG is recommended for optimal quality.</p>
                </div>
              </div>
            </div>

            {/* Right: Name & product type */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-neutral-300">
                    Business name<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={`${inputStyle} font-raleway`}
                    placeholder="e.g., Reach AI"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-300">
                    Product / Service type<span className="text-red-500">*</span>
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className={`${inputStyle} appearance-none cursor-pointer font-raleway`}
                  >
                    <option className="bg-neutral-900" value="mobile">Mobile app</option>
                    <option className="bg-neutral-900" value="web app">Web app</option>
                    <option className="bg-neutral-900" value="desktop app">Desktop app</option>
                    <option className="bg-neutral-900" value="browser extension">Browser Extension</option>
                    <option className="bg-neutral-900" value="physical product">Physical product</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmark brands row */}
          <div className="mt-8">
            <label className="text-sm font-medium text-neutral-300">Benchmark Brands</label>
            <div className="mt-3 w-full px-4 py-3 border border-neutral-800 rounded-lg bg-neutral-950 min-h-[44px]">
              <div className="flex flex-wrap gap-2">
                {benchmarkBrands.length === 0 ? (
                  <span className="text-sm text-neutral-600 py-1">No benchmark brands added</span>
                ) : (
                  benchmarkBrands.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-900 text-sm text-neutral-300 border border-neutral-800 font-raleway"
                    >
                      {b}
                      <button
                        onClick={() => handleBenchmarkRemove(b)}
                        className="ml-2 text-neutral-500 hover:text-white transition duration-150"
                        aria-label={`Remove ${b}`}
                      >
                        ✕
                      </button>
                    </span>
                  ))
                )}
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-600">
              We'll recommend influencers who have worked with these brands or reached similar audiences.
            </p>
          </div>
        </div>

        {/* Section 3: Business introduction */}
        <div className={cardStyle}>
          <h3 className="text-lg font-semibold">Business Introduction</h3>
          <p className="mt-1 text-sm text-neutral-400">A brief, compelling overview of what you do.</p>

          <div className="mt-6">
            <label className="text-sm font-medium text-neutral-300">
              Company Elevator Pitch<span className="text-red-500">*</span>
            </label>
            <textarea
              value={businessIntro}
              onChange={(e) => setBusinessIntro(e.target.value)}
              placeholder="e.g., We help companies connect with their ideal audience..."
              rows={5}
              className={`${inputStyle} resize-none font-raleway`}
            />
          </div>
        </div>

        {/* Section 4: Core selling points */}
        <div className={cardStyle}>
          <h3 className="text-lg font-semibold">Core Selling Points</h3>
          <p className="mt-1 text-sm text-neutral-400">List what makes your product uniquely valuable.</p>

          <div className="mt-6">
            <div className="w-full rounded-lg bg-neutral-950">
              {sellingPoints.length === 0 ? (
                <div className="p-4 text-sm text-neutral-600">
                  No selling points yet. Click + Add to create one.
                </div>
              ) : (
                <div className="">
                  {sellingPoints.map((p, idx) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-4 py-3 px-4"
                    >
                      <div className="w-6 text-center text-sm font-mono text-neutral-600">
                        {idx + 1}
                      </div>
                      <input
                        value={p.text}
                        onChange={(e) =>
                          handleUpdateListItem(setSellingPoints, sellingPoints, idx, e.target.value)
                        }
                        className="flex-1 px-3 py-1.5 rounded border border-neutral-800 text-sm bg-neutral-950 text-white outline-none focus:border-white transition font-raleway"
                        placeholder={`Value Proposition ${idx + 1}`}
                      />
                      <button
                        onClick={() =>
                          handleDeleteListItem(setSellingPoints, sellingPoints, idx)
                        }
                        className="text-neutral-500 hover:text-white p-1"
                        aria-label={`Delete point ${idx + 1}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 100 2v6a1 1 0 100-2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-3">
              <button
                onClick={() => handleAddListItem(setSellingPoints, sellingPoints)}
                className="text-sm text-blue-500 font-medium hover:text-blue-400 transition font-raleway"
              >
                + Add Selling Point
              </button>
            </div>
          </div>
        </div>

        {/* Section 5: Core Audiences */}
        <div className={cardStyle}>
          <h3 className="text-lg font-semibold">Core Audiences<span className="text-red-500">*</span></h3>
          <p className="mt-1 text-sm text-neutral-400">Who are the people you are trying to reach?</p>

          <div className="mt-6">
            <div className="w-full rounded-lg bg-neutral-950">
              {coreAudiences.length === 0 ? (
                <div className="p-4 text-sm text-neutral-600">
                  No audiences yet. Click + Add to create one.
                </div>
              ) : (
                <div className="">
                  {coreAudiences.map((a, idx) => (
                    <div
                      key={a.id}
                      className="flex items-center gap-4 py-3 px-4"
                    >
                      <div className="w-6 text-center text-sm font-mono text-neutral-600">
                        {idx + 1}
                      </div>
                      <input
                        value={a.text}
                        onChange={(e) =>
                          handleUpdateListItem(setCoreAudiences, coreAudiences, idx, e.target.value)
                        }
                        className="flex-1 px-3 py-1.5 rounded border border-neutral-800 text-sm bg-neutral-950 text-white outline-none focus:border-white transition font-raleway"
                        placeholder={`Target Audience ${idx + 1}`}
                      />
                      <button
                        onClick={() =>
                          handleDeleteListItem(setCoreAudiences, coreAudiences, idx)
                        }
                        className="text-neutral-500 hover:text-white p-1"
                        aria-label={`Delete audience ${idx + 1}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 100 2v6a1 1 0 100-2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-3">
              <button
                onClick={() => handleAddListItem(setCoreAudiences, coreAudiences)}
                className="text-sm text-blue-500 font-medium hover:text-blue-400 transition font-raleway"
              >
                + Add Core Audience
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}