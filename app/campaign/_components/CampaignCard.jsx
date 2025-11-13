"use client"

import { MoreHorizontal, ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export default function CampaignCard({
  logoUrl,
  name,
  website,
  createdAt,
  status = "draft", // "draft" | "in progress" | "completed"
  onEdit,
  onDelete,
}) {
  const statusVariants = {
    draft: "secondary",
    "in progress": "default",
    completed: "outline",
  }

  const statusColors = {
    draft: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20 hover:bg-neutral-500/20",
    "in progress": "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
    completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="font-raleway"
    >
      <Card className="group relative overflow-hidden border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md">
        <CardHeader className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5 flex-1 min-w-0">
              <div className="h-12 w-12 rounded-lg border border-neutral-800 bg-neutral-900 overflow-hidden flex items-center justify-center shrink-0">
                {logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logoUrl}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-medium text-neutral-600">Logo</span>
                )}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <CardTitle className="text-[15px] font-semibold text-white truncate">
                    {name}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`text-[11px] font-medium ${statusColors[status] || statusColors.draft}`}
                  >
                    {status === "in progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-1 text-[13px]">
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors group/link"
                  >
                    <ExternalLink size={12} className="shrink-0 opacity-60 group-hover/link:opacity-100" />
                    <span className="truncate">{website.replace(/^https?:\/\//, '')}</span>
                  </a>
                </CardDescription>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900 transition-colors"
                >
                  <MoreHorizontal size={16} />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={onEdit} className="text-[13px] font-medium cursor-pointer">
                  Edit Campaign
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={onDelete} 
                  className="text-[13px] font-medium text-red-400 focus:text-red-400 cursor-pointer"
                >
                  Delete Campaign
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-6 pt-0">
          <div className="flex items-center gap-1.5 text-[13px] text-neutral-500">
            <span>Created</span>
            <span className="text-neutral-400 font-medium">{createdAt}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}