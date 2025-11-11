"use client"

import { MoreHorizontal, ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CampaignCard({
  logoUrl,
  name,
  website,
  createdAt,
  onEdit,
  onDelete,
}) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [])

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="font-raleway"
    >
      <Card className="relative overflow-hidden border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 hover:border-neutral-700 transition-all duration-300 rounded-2xl shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]">
        <CardHeader className="p-5 pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden flex items-center justify-center shadow-inner">
                {logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logoUrl}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-neutral-500">Logo</span>
                )}
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  {name}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm mt-0.5">
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span className="truncate max-w-[180px]">{website}</span>
                  </a>
                </CardDescription>
              </div>
            </div>

            <div ref={menuRef} className="relative">
              <Button
                variant="ghost"
                size="icon"
                aria-label="More"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen((v) => !v)
                }}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <MoreHorizontal size={18} />
              </Button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 rounded-md border border-neutral-800 bg-neutral-950/95 shadow-lg z-10 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => {
                        setOpen(false)
                        onEdit && onEdit()
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-900 rounded-t-md transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setOpen(false)
                        onDelete && onDelete()
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-red-400 hover:bg-neutral-900 rounded-b-md transition-colors"
                    >
                      Delete
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-5 pb-5 pt-0">
          <div className="text-xs text-neutral-500">
            Created on <span className="text-neutral-300">{createdAt}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
