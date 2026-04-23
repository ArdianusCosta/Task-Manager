"use client";

import { Plus, Inbox, Calendar, Folder, Archive, Settings, Trash2, LayoutGrid, X } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./SidebarProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
    const { isOpen, close } = useSidebar();

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={close}
                />
            )}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200/60
                transform transition-transform duration-300 ease-in-out flex flex-col p-6 gap-8
                lg:translate-x-0 lg:static lg:h-full
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <button
                    onClick={close}
                    className="absolute top-6 right-4 p-2 lg:hidden hover:bg-gray-50 rounded-xl transition-colors"
                >
                    <X className="w-5 h-5 text-gray-400" />
                </button>
                <div className="flex items-center gap-3 group cursor-pointer mt-2 lg:mt-0">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-105 transition-transform duration-300">
                        <LayoutGrid className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black tracking-tight text-black leading-tight">Workspace</span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Productivity Suite</span>
                    </div>
                </div>
                <Button className="w-full h-12 bg-black hover:bg-black/90 text-white font-black rounded-xl shadow-xl shadow-black/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                    <Plus className="w-4 h-4 stroke-[3.5px]" />
                    <span>New Task</span>
                </Button>
                <nav className="flex-1 space-y-1.5">
                    <SidebarItem icon={<Inbox className="w-4 h-4" />} label="Inbox" href="/inbox" />
                    <SidebarItem icon={<Calendar className="w-4 h-4" />} label="Today" href="/today" />
                    <SidebarItem icon={<Folder className="w-4 h-4" />} label="Projects" href="/projects" />
                    <SidebarItem icon={<Archive className="w-4 h-4" />} label="Archive" href="/archived" />
                </nav>
                <div className="pt-6 border-t border-gray-100 flex flex-col gap-1.5">
                    <SidebarItem icon={<Settings className="w-4 h-4" />} label="Settings" href="/settings" />
                    <SidebarItem icon={<Trash2 className="w-4 h-4" />} label="Trash" className="text-gray-400 hover:text-red-500 hover:bg-red-50/50" href="/trash" />
                </div>
            </aside>
        </>
    )
}

function SidebarItem({ icon, label, className, href, }: { icon: React.ReactNode, label: string, className?: string, href?: string }) {
    const pathname = usePathname()
    const active = href ? pathname === href : false

    const baseClass = `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
        ${active
            ? "bg-gray-50 text-black font-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]"
            : "text-gray-600 hover:bg-gray-50/80 hover:text-black font-bold"}
        ${className}
    `

    if (href) {
        return (
            <Link href={href} className={baseClass}>
                <span className={`transition-colors ${active ? "text-black" : "text-gray-400 group-hover:text-black"}`}>
                    {icon}
                </span>
                <span className="text-sm tracking-tight">{label}</span>
            </Link>
        )
    }

    return (
        <button type="button" className={baseClass}>
            <span className="text-gray-400">{icon}</span>
            <span className="text-sm tracking-tight">{label}</span>
        </button>
    )
}
