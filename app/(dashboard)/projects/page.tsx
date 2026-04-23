"use client"

import { CheckCircle2, Circle, Lock, FolderOpen, Edit3, MessageSquare, Check, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const recentActivity = [
    {
        icon: <Edit3 className="w-3.5 h-3.5" />,
        action: "Updated Homepage Layout v2",
        member: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/32?img=1" },
        date: "2h ago",
    },
    {
        icon: <MessageSquare className="w-3.5 h-3.5" />,
        action: "Commented on Typography System",
        member: { name: "Marcus Wright", avatar: "https://i.pravatar.cc/32?img=3" },
        date: "5h ago",
    },
    {
        icon: <Check className="w-3.5 h-3.5" />,
        action: "Completed task Mobile Navigation Logic",
        member: { name: "Leo Garcia", avatar: "https://i.pravatar.cc/32?img=5" },
        date: "Yesterday",
    },
]

export default function ProjectsPage() {
    return (
        <div className="w-full space-y-8 pb-20">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    <span>Projects</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-black">Website Redesign</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                        <h1 className="text-3xl font-black tracking-tight text-black">Website Redesign</h1>
                        <p className="text-gray-400 font-medium max-w-xl leading-relaxed text-sm">
                            Modernizing the digital footprint of the corporate brand with a focus on accessibility, speed, and minimalist design patterns.
                        </p>
                    </div>
                    <div className="flex items-center -space-x-2 flex-shrink-0 mt-1">
                        {[1, 3, 5, 7].map((i) => (
                            <img key={i} src={`https://i.pravatar.cc/32?img=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="member" />
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-500">+4</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-gray-100 shadow-sm rounded-2xl">
                    <CardContent className="p-5 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Completion</p>
                        <p className="text-2xl font-black text-black">66%</p>
                        <p className="text-xs font-bold text-green-500">+12% from last week</p>
                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                            <div className="bg-black h-full rounded-full" style={{ width: "66%" }} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm rounded-2xl">
                    <CardContent className="p-5 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Active Tasks</p>
                        <p className="text-2xl font-black text-black">24</p>
                        <p className="text-xs font-bold text-gray-400">12 assigned to you</p>
                    </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm rounded-2xl">
                    <CardContent className="p-5 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Next Deadline</p>
                        <p className="text-2xl font-black text-black">Oct 24</p>
                        <p className="text-xs font-black text-blue-500">Design Review Phase</p>
                    </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm rounded-2xl">
                    <CardContent className="p-5 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
                            <p className="text-xl font-black text-black">On Track</p>
                        </div>
                        <p className="text-xs font-bold text-gray-400">Updated 2h ago</p>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-black tracking-tight text-black">Project Phases</h2>
                    <button className="text-[11px] font-black text-blue-500 hover:text-blue-700 transition-colors uppercase tracking-wider">View Roadmap →</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border-gray-100 shadow-sm rounded-2xl">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">Phase 01</span>
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base font-black text-black">Discovery</h3>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">Requirements gathering, user research, and stakeholder interviews.</p>
                            </div>
                            <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                                <p className="text-xs font-bold text-gray-400">12 Tasks Completed</p>
                                <span className="text-xs font-black text-black">100%</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-black shadow-lg rounded-2xl bg-white ring-1 ring-black">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1 rounded-lg">Phase 02</span>
                                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-black">• Current Phase</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base font-black text-black">Design & Prototyping</h3>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">Creating high-fidelity mockups, design systems, and interactive prototypes.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-gray-500">Progress</span>
                                    <span className="text-black">75%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-1.5">
                                    <div className="bg-black h-full rounded-full" style={{ width: "75%" }} />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                    Visual Style Guide
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                    <Circle className="w-3.5 h-3.5 flex-shrink-0" />
                                    Mobile App Prototype
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col gap-4">
                        <Card className="border-gray-100 shadow-sm rounded-2xl opacity-70">
                            <CardContent className="p-5 space-y-2">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">Phase 03</span>
                                <h3 className="text-sm font-black text-black pt-1">Development</h3>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">Front-end coding, CMS integration, and responsive testing.</p>
                                <div className="flex items-center gap-1.5 pt-1 text-[10px] font-bold text-gray-400">
                                    <Lock className="w-3 h-3" />
                                    <span>Starts Nov 15</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-gray-100 shadow-sm rounded-2xl opacity-70">
                            <CardContent className="p-5 space-y-2">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">Phase 04</span>
                                <h3 className="text-sm font-black text-black pt-1">QA & Launch</h3>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">Security audit, performance optimization, and final deployment.</p>
                                <div className="flex items-center gap-1.5 pt-1 text-[10px] font-bold text-gray-400">
                                    <Lock className="w-3 h-3" />
                                    <span>Starts Jan 2024</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-0 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                            <CardContent className="p-5 space-y-3">
                                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                                    <FolderOpen className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-black">Project Assets</h3>
                                    <p className="text-xs text-blue-200 font-medium leading-relaxed">Access shared design files, brand assets, and documentation.</p>
                                </div>
                                <a
                                    href="https://drive.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-white/15 hover:bg-white/30 text-white font-black text-xs h-9 rounded-xl border-0 transition-all flex items-center justify-center"
                                >
                                    Open Drive
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-base font-black tracking-tight text-black">Recent Activity</h2>
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                        <div className="grid grid-cols-3 px-6 py-3 border-b border-gray-50 bg-gray-50/50">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Action</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Member</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right">Date</p>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {recentActivity.map((item, i) => (
                                <div key={i} className="grid grid-cols-3 items-center px-6 py-4 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">{item.icon}</span>
                                        <span className="text-sm font-bold text-black">{item.action}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <img src={item.member.avatar} className="w-7 h-7 rounded-full" alt={item.member.name} />
                                        <span className="text-sm font-bold text-gray-600">{item.member.name}</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-400 text-right">{item.date}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
