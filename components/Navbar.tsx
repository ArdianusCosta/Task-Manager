"use client";

import { Bell, HelpCircle, Search, Menu, X } from "lucide-react";
import { Input } from "./ui/input";
import { useSidebar } from "./SidebarProvider";
import Link from "next/link";

export default function Navbar() {
    const { toggle } = useSidebar();

    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-100 bg-white z-20">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-16 flex-1">
                <button
                    onClick={toggle}
                    className="p-2 -ml-2 lg:hidd\en hover:bg-gray-50 rounded-xl transition-colors"
                >
                    <Menu className="w-6 h-6 text-black" />
                </button>

                <h1 className="text-lg md:text-xl font-black tracking-tighter text-black uppercase whitespace-nowrap">TaskFlow</h1>

                <div className="relative w-full max-w-[180px] sm:max-w-sm group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
                    <Input
                        placeholder="Search..."
                        className="pl-11 h-10 bg-gray-50/80 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-black/10 placeholder:text-gray-400 font-medium text-sm transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-1.5 md:gap-4 ml-4">
                <button className="hidden sm:flex p-2 hover:bg-gray-50 rounded-full transition-colors relative group">
                    <Bell className="w-5 h-5 text-gray-500 group-hover:text-black" />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button className="hidden sm:flex p-2 hover:bg-gray-50 rounded-full transition-colors group">
                    <HelpCircle className="w-5 h-5 text-gray-500 group-hover:text-black" />
                </button>
                <Link href="/profile">
                    <div className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded-full transition-all ml-1 cursor-pointer">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}