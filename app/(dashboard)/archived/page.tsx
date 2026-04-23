"use client"

import { Calendar, User, BookOpen, Globe, FileCode, Filter, Download, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const completedProjects = [
    {
        icon: <BookOpen className="w-4 h-4" />,
        title: "Brand Identity 2023",
        description: "Complete visual overhaul for Northern Lights branding, including style guides and assets.",
        date: "Archived Oct 12, 2023",
        author: "Sarah Miller",
    },
    {
        icon: <Globe className="w-4 h-4" />,
        title: "Marketing Website V2",
        description: "The original landing page and blog migration project. Replaced by the 2024 redesign.",
        date: "Archived Aug 30, 2023",
        author: "James Chen",
    },
    {
        icon: <FileCode className="w-4 h-4" />,
        title: "API Documentation",
        description: "Technical reference for the deprecated v1 endpoints and legacy authentication methods.",
        date: "Archived Jul 15, 2023",
        author: "Alex Rivera",
    },
]

const recentlyFinished = [
    { title: "Update Q4 roadmap", time: "2d ago" },
    { title: "Server maintenance", time: "3d ago" },
    { title: "Team holiday prep", time: "1w ago" },
    { title: "Budget approval", time: "2w ago" },
]

export default function ArchivePage() {
    return (
        <div className="w-full space-y-8 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="space-y-0.5">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Storage History</p>
                    <h1 className="text-3xl font-black tracking-tight text-black">Project Archive</h1>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-10 px-5 rounded-xl font-bold text-sm border-gray-200 gap-2 hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        Filter
                    </Button>
                    <Button variant="outline" className="h-10 px-5 rounded-xl font-bold text-sm border-gray-200 gap-2 hover:bg-gray-50">
                        <Download className="w-4 h-4" />
                        Export
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
                                <h2 className="text-base font-black tracking-tight text-black">Completed Projects</h2>
                                <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 bg-gray-50 px-3 py-1 rounded-lg">12 Total</span>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {completedProjects.map((project, i) => (
                                    <div key={i} className="flex gap-4 px-6 py-5 hover:bg-gray-50/50 transition-colors group cursor-pointer">
                                        <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 mt-0.5 group-hover:bg-gray-200 transition-colors">
                                            {project.icon}
                                        </div>
                                        <div className="min-w-0 space-y-1.5 flex-1">
                                            <p className="text-sm font-black text-black tracking-tight">{project.title}</p>
                                            <p className="text-sm text-gray-400 font-medium leading-relaxed">{project.description}</p>
                                            <div className="flex items-center gap-4 pt-0.5">
                                                <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                                                    <Calendar className="w-3 h-3" />
                                                    {project.date}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                                                    <User className="w-3 h-3" />
                                                    {project.author}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-6 py-4 border-t border-gray-50 flex justify-center">
                                <button className="text-sm font-bold text-gray-400 hover:text-black transition-colors">
                                    View All Archived Projects
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-5">
                    <Card className="border-0 shadow-sm rounded-2xl overflow-hidden bg-gray-900 text-white">
                        <CardContent className="p-7 space-y-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">Archive Summary</p>
                            <div className="space-y-1">
                                <p className="text-4xl font-black tracking-tight">1.2 GB</p>
                                <p className="text-sm text-white/50 font-medium">Saved from total capacity</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                                <div>
                                    <p className="text-2xl font-black">142</p>
                                    <p className="text-[11px] text-white/40 font-bold uppercase tracking-wider">Tasks</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black">12</p>
                                    <p className="text-[11px] text-white/40 font-bold uppercase tracking-wider">Projects</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-black tracking-tight text-black">Recently Finished</h3>
                                <CheckCircle2 className="w-4 h-4 text-gray-300" />
                            </div>
                            <div className="space-y-3">
                                {recentlyFinished.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                                            <span className="text-sm font-bold text-gray-700 group-hover:text-black transition-colors">{item.title}</span>
                                        </div>
                                        <span className="text-[11px] font-bold text-gray-400">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden bg-[#FAF8F1]">
                        <CardContent className="p-6 space-y-3">
                            <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                                "Archive content is kept for 2 years before moving to long-term storage."
                            </p>
                            <button className="text-sm font-black text-black underline underline-offset-4 hover:text-gray-600 transition-colors">
                                Learn about data policy
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
