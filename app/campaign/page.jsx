"use client"
import { useState } from "react"
import VercelNavbar from "./_components/VercelNavbar"
import CampaignCard from "./_components/CampaignCard"
import { DemoCampaigns } from "@/data/BrandDashboard/DemoCampaigns"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ListFilterIcon, ArrowUpDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CampaignPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("none")
  const campaigns = DemoCampaigns

  const filteredCampaigns = campaigns
    .filter(campaign => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === "all" || campaign.status.toLowerCase() === statusFilter.toLowerCase()
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === "asc") {
        return new Date(a.createdAt) - new Date(b.createdAt)
      } else if (sortBy === "desc") {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <VercelNavbar />
      <div>
        <div className="px-6 py-4 font-raleway max-w-[1400px] mx-auto flex items-center gap-3">
          <div className="flex-1">
            <Input
              placeholder="Search campaigns by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-neutral-950 border-neutral-700 text-neutral-200 placeholder-neutral-500 w-full"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline"
                className="cursor-pointer bg-neutral-950 border-neutral-700 text-neutral-200 hover:bg-neutral-800"
              >
                <ListFilterIcon className=" h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-neutral-950 border-neutral-800" align="start">
              <DropdownMenuLabel className="text-neutral-200">Status</DropdownMenuLabel>
              <DropdownMenuItem 
                className={`cursor-pointer text-neutral-200 hover:bg-neutral-900 focus:bg-neutral-900 ${statusFilter === "all" ? "bg-neutral-800" : ""}`}
                onClick={() => setStatusFilter("all")}
              >
                All
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`cursor-pointer text-neutral-200 hover:bg-neutral-900 focus:bg-neutral-900 ${statusFilter === "active" ? "bg-neutral-800" : ""}`}
                onClick={() => setStatusFilter("active")}
              >
                Active
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`cursor-pointer text-neutral-200 hover:bg-neutral-900 focus:bg-neutral-900 ${statusFilter === "in progress" ? "bg-neutral-800" : ""}`}
                onClick={() => setStatusFilter("in progress")}
              >
                In progress
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`cursor-pointer text-neutral-200 hover:bg-neutral-900 focus:bg-neutral-900 ${statusFilter === "draft" ? "bg-neutral-800" : ""}`}
                onClick={() => setStatusFilter("draft")}
              >
                Draft
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-neutral-800" />
              <DropdownMenuLabel className="text-neutral-200">Sort by</DropdownMenuLabel>
              <DropdownMenuItem 
                className={`cursor-pointer text-neutral-200 hover:bg-neutral-900 focus:bg-neutral-900 flex justify-between items-center ${sortBy === "asc" ? "bg-neutral-800" : ""}`}
                onClick={() => setSortBy(sortBy === "asc" ? "none" : "asc")}
              >
                <span>Created At Asc</span>
                <ArrowUpDown className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`cursor-pointer text-neutral-200 hover:bg-neutral-900 focus:bg-neutral-900 flex justify-between items-center ${sortBy === "desc" ? "bg-neutral-800" : ""}`}
                onClick={() => setSortBy(sortBy === "desc" ? "none" : "desc")}
              >
                <span>Created At Desc</span>
                <ArrowUpDown className="h-4 w-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            Create Campaign
          </Button>
        </div>
      </div>
      <div className="px-6 py-8 font-raleway max-w-[1400px] mx-auto">
        {filteredCampaigns.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-800 bg-neutral-950/50 text-neutral-500">
            <p className="text-sm">No campaigns found</p>
            <p className="text-xs text-neutral-600 mt-1">Try adjusting your search or create a new campaign.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                logoUrl={campaign.logoUrl}
                name={campaign.name}
                website={campaign.productUrl}
                status={campaign.status}
                createdAt={campaign.createdAt}
                onEdit={() => console.log("edit", campaign.id)}
                onDelete={() => console.log("delete", campaign.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CampaignPage