"use client"

import { Search, Grid3x3, List, LayoutList, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function SearchToolbar() {
  const [view, setView] = useState("grid")

  return (
    <div className="flex items-center justify-between gap-4 px-6 py-4 bg-black border-b border-neutral-900 text-neutral-200">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
        <Input
          placeholder="Search Projects..."
          className="w-full bg-neutral-900 border-neutral-800 pl-10 text-sm text-neutral-300 placeholder-neutral-500"
        />
      </div>

      {/* View toggles and actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded border border-neutral-800/80">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded transition-colors ${
              view === "list" ? "bg-neutral-800 text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <List size={18} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded transition-colors ${
              view === "grid" ? "bg-neutral-800 text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Grid3x3 size={18} />
          </button>
          <button
            onClick={() => setView("table")}
            className={`p-2 rounded transition-colors ${
              view === "table" ? "bg-neutral-800 text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <LayoutList size={18} />
          </button>
        </div>

        <Button variant="secondary" className="flex items-center gap-2 border border-neutral-800/80">
          Add New...
          <ChevronDown size={16} />
        </Button>
      </div>
    </div>
  )
}
