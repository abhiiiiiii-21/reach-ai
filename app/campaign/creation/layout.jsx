import React from "react";

// Layout for /campaign/creation
// Keep this a Server Component (no "use client") so it can wrap children from the App Router.
export default function CampaignCreationLayout({ children }) {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="px-4 md:px-6 lg:px-8">
				{children}
			</main>
		</div>
	);
}