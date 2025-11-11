"use client"
import VercelNavbar from "./_components/VercelNavbar"
import { SearchToolbar } from "./_components/SearchToolbar"
import CampaignCard from "./_components/CampaignCard"


const page = () => {
  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <VercelNavbar />
      <SearchToolbar />
      <div className="px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CampaignCard
          logoUrl=""
          name="inventory-management"
          website="https://inventory-management-dun-eight.vercel.app"
          createdAt="Sep 14 on main"
          onEdit={() => console.log("edit")}
          onDelete={() => console.log("delete")}
        />
      </div>
    </div>
  )
}

export default page