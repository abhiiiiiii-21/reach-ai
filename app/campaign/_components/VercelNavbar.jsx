import { Search, Bell, BookOpen, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
    const navItems = ["Campaigns"]

    return (
        <div className="bg-black text-neutral-200">
            {/* Header */}
            <header className="border-b border-neutral-900 bg-black">
                <div className="flex h-16 items-center justify-between px-6">
                    {/* Left section */}
                    <div className="flex items-center gap-4">
                        <div className="text-white text-xl font-bold">▲</div>
                        <div className="h-5 w-px bg-neutral-800"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_0_2px_rgba(9,9,9,0.9)]"></div>
                            <span className="text-sm text-neutral-300">abhishekkumapatel's projects</span>
                            <span className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500 border border-neutral-800">
                                Hobby
                            </span>
                        </div>
                        <button className="text-neutral-500 hover:text-neutral-200 transition-colors">
                            <Menu size={18} />
                        </button>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                            <Input
                                placeholder="Find..."
                                className="w-48 bg-neutral-900 border-neutral-800 pl-10 text-sm text-neutral-200 placeholder-neutral-500"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-600">F</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-neutral-100">
                            Feedback
                        </Button>
                        <button className="text-neutral-500 hover:text-neutral-200 transition-colors">
                            <Bell size={20} />
                        </button>
                        <button className="text-neutral-500 hover:text-neutral-200 transition-colors">
                            <BookOpen size={20} />
                        </button>
                        <button className="text-neutral-500 hover:text-neutral-200 transition-colors">
                            <Menu size={20} />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 via-pink-500 to-purple-500 shadow-[0_0_0_2px_rgba(12,12,12,0.7)]"></div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="border-b border-neutral-900 bg-black">
                <div className="px-6 flex items-center overflow-x-auto">
                    {navItems.map((item, index) => (
                        <button
                            key={item}
                            className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                                index === 0
                                    ? "text-white border-b-neutral-100/15"
                                    : "text-neutral-500 border-b-transparent hover:text-neutral-300"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    )
}
