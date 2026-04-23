"use client"

import { useState } from "react"
import { MoreHorizontal, TrendingUp, Zap, FileText, MessageSquare, CheckCircle2, UserPlus, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const upcomingTasks = [
    { label: "Prepare Q4 Stakeholder Report", sub: "Marketing · 2:00 PM", priority: "HIGH", done: false },
    { label: "Weekly Team Standup", sub: "Operations · 10:30 AM", priority: "MEDIUM", done: false },
    { label: "Review PR #1284 - Dashboard Fixes", sub: "Engineering · 4:15 PM", priority: "LOW", done: false },
    { label: "Send invoice to Client AV2", sub: "Finance · Done", priority: null, done: true },
]

const activityFeed = [
    { icon: <FileText className="w-3.5 h-3.5" />, text: "Sarah uploaded Project_Specs_V2.pdf", time: "34 minutes ago", color: "bg-blue-500" },
    { icon: <MessageSquare className="w-3.5 h-3.5" />, text: "New comment in Design Sprint", time: "1 hour ago", color: "bg-gray-400" },
    { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "Task Database Migration marked as complete", time: "3 hours ago", color: "bg-green-500" },
    { icon: <UserPlus className="w-3.5 h-3.5" />, text: "James added 2 members to the team", time: "Yesterday", color: "bg-gray-400" },
]

const priorityStyles: Record<string, string> = {
    HIGH: "bg-red-50 text-red-500",
    MEDIUM: "bg-amber-50 text-amber-500",
    LOW: "bg-gray-50 text-gray-400",
}

export default function TodayPage() {
    const [tasks, setTasks] = useState(upcomingTasks)

    const toggleTask = (i: number) => {
        setTasks(prev => prev.map((t, idx) => idx === i ? { ...t, done: !t.done } : t))
    }

    return (
        <div className="w-full space-y-8 pb-20">
            <div className="space-y-1.5">
                <h1 className="text-4xl font-black tracking-tight text-black">Good Morning, Alex</h1>
                <p className="text-gray-400 font-medium text-base">
                    You have 4 tasks scheduled for today and 2 overdue items.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <Card className="lg:col-span-2 border-gray-100 shadow-sm rounded-2xl">
                    <CardContent className="p-7 space-y-6">
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2 flex-1">
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">Primary Focus</span>
                                <div className="flex items-start justify-between gap-4 pt-1">
                                    <h2 className="text-2xl font-black tracking-tight text-black leading-tight">Redesign System Architecture</h2>
                                    <div className="text-right flex-shrink-0">
                                        <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Deadline</p>
                                        <p className="text-sm font-black text-black">Dec 24, 2023</p>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                        <div className="bg-black h-full rounded-full" style={{ width: "65%" }} />
                                    </div>
                                    <p className="text-xs font-bold text-gray-400 text-right">65%</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-2 border-t border-gray-50">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Subtasks</p>
                                <p className="text-2xl font-black text-black">12/18</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Collaborators</p>
                                <div className="flex items-center -space-x-2 pt-1">
                                    {[1, 3, 5].map((i) => (
                                        <img key={i} src={`https://i.pravatar.cc/24?img=${i}`} className="w-7 h-7 rounded-full border-2 border-white" alt="member" />
                                    ))}
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[9px] font-black text-gray-500">+1</div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Time Tracked</p>
                                <p className="text-2xl font-black text-black">24.5h</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex flex-col gap-5">
                    <Card className="border-0 bg-gray-900 text-white rounded-2xl shadow-sm flex-1">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 bg-white/10 px-2 py-1 rounded-full">Live</span>
                            </div>
                            <div>
                                <p className="text-5xl font-black tracking-tight">84%</p>
                                <p className="text-sm font-bold text-white/50 mt-1">Productivity Score</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-100 shadow-sm rounded-2xl flex-1">
                        <CardContent className="p-6 space-y-1">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <p className="text-4xl font-black text-black">+12</p>
                            </div>
                            <p className="text-sm font-bold text-gray-400">Tasks finished this week</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
                            <h2 className="text-base font-black tracking-tight text-black">Upcoming Tasks</h2>
                            <button className="text-xs font-black text-blue-500 hover:text-blue-700 transition-colors">View All</button>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {tasks.map((task, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer" onClick={() => toggleTask(i)}>
                                    <div className={`w-4 h-4 rounded border-2 flex-shrink-0 transition-all flex items-center justify-center ${task.done ? 'bg-black border-black' : 'border-gray-300'}`}>
                                        {task.done && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-bold transition-colors ${task.done ? "line-through text-gray-400" : "text-black"}`}>{task.label}</p>
                                        <p className="text-xs font-medium text-gray-400">{task.sub}</p>
                                    </div>
                                    {task.priority && (
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg flex-shrink-0 ${priorityStyles[task.priority]}`}>
                                            {task.priority}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
                            <h2 className="text-base font-black tracking-tight text-black">Activity Feed</h2>
                            <button className="text-gray-300 hover:text-gray-600 transition-colors">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {activityFeed.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                                    <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center text-white flex-shrink-0 mt-0.5`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-black leading-snug">{item.text}</p>
                                        <p className="text-xs font-medium text-gray-400 mt-0.5">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
