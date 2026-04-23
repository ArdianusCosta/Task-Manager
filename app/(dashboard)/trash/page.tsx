"use client"

import { Trash2, FileText, CheckSquare, Image, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const deletedTasks = [
    {
        icon: <FileText className="w-4 h-4" />,
        title: "Update Q4 Marketing Roadmap",
        meta: 'Deleted 2 days ago • From: "Marketing 2024"',
    },
    {
        icon: <CheckSquare className="w-4 h-4" />,
        title: "Vendor contract review",
        meta: 'Deleted 4 days ago • From: "Legal"',
    },
    {
        icon: <Image className="w-4 h-4" />,
        title: "Homepage Hero Illustrations",
        meta: 'Deleted 1 week ago • From: "Design Assets"',
    },
]

const deletedProjects = [
    { title: "Alpha Brand Refresh", meta: "Deleted yesterday" },
    { title: "Customer Outreach Phase 2", meta: "Deleted 12 days ago" },
]

export default function TrashPage() {
    return (
        <div className="w-full space-y-10 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="space-y-1.5">
                    <h1 className="text-4xl font-black tracking-tight text-black">Trash</h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Items in trash will be permanently deleted after 30 days.
                    </p>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-500/10 transition-all active:scale-[0.98] flex items-center gap-2 text-sm h-11 px-6 w-fit">
                    <Trash2 className="w-4 h-4" />
                    Empty Trash
                </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Recently Deleted Tasks
                        </h2>
                        <span className="text-[11px] font-bold text-gray-400">12 items found</span>
                    </div>
                    <div className="space-y-3">
                        {deletedTasks.map((task, i) => (
                            <Card key={i} className="border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow group cursor-pointer">
                                <CardContent className="flex items-center gap-4 p-5">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-gray-100 transition-colors flex-shrink-0">
                                        {task.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold text-black truncate">{task.title}</p>
                                        <p className="text-xs text-gray-400 font-medium mt-0.5">{task.meta}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1 flex flex-col">
                    <div className="h-[30px] hidden lg:block flex-shrink-0" />
                    <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden flex-1">
                        <CardContent className="p-8 flex flex-col justify-between h-full gap-5">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black tracking-tight text-black">Trash Insight</h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                    Deleted items are currently occupying 1.2GB of your workspace storage.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-xl font-black text-black">12</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Items</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-xl font-black text-black">3</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tasks</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-xl font-black text-black">2</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Projects</p>
                                </div>
                                <div className="bg-red-50 rounded-xl p-3 text-center">
                                    <p className="text-xl font-black text-red-500">5</p>
                                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Expiring Soon</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                    <div className="bg-blue-500 h-full rounded-full transition-all" style={{ width: "65%" }} />
                                </div>
                                <div className="flex justify-between text-xs font-bold text-gray-400">
                                    <span>65% of Trash Capacity</span>
                                    <span>800MB free</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="space-y-5">
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Deleted Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {deletedProjects.map((project, i) => (
                        <Card key={i} className="border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow group cursor-pointer">
                            <CardContent className="flex items-center gap-4 p-5">
                                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                                    <Folder className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-black truncate group-hover:underline underline-offset-2">{project.title}</p>
                                    <p className="text-[11px] text-gray-400 font-medium">{project.meta}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
