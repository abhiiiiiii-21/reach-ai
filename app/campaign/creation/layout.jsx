import { SessionNavBar } from "@/components/ui/sidebar";
import React from "react";

// Layout for /campaign/creation
// Keep this a Server Component (no "use client") so it can wrap children from the App Router.
export default function CampaignCreationLayout({ children }) {
	return (
 <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto">
		{children}
      </main>
    </div>
	);
}

