"use client"

import { MoreHorizontal, Plus, ExternalLink, Circle, Check, Pencil, Archive, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef, useEffect } from "react"
import { Switch } from "@/components/ui/switch"

const quickTasks = [
    { label: "Buy anniversary gift", sub: "Captured via Voice", done: false },
    { label: "Review Q3 projections", sub: "Due tomorrow", done: false },
]

const unsortedLinks = [
    { label: "figma.com/design-system-v2", href: "#" },
    { label: "newsletter.marketing.co/trends", href: "#" },
]

export default function InboxPage() {
    const [tasks, setTasks] = useState(quickTasks)
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const toggleTask = (i: number) => {
        setTasks(prev => prev.map((t, idx) => idx === i ? { ...t, done: !t.done } : t))
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="w-full space-y-8 pb-20">
            <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight text-black">Inbox</h1>
                <p className="text-gray-400 font-medium text-base leading-relaxed max-w-lg">
                    A temporary landing spot for everything on your mind. Sort, organize, or discard when you're ready.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <Card className="lg:col-span-2 border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                    <CardContent className="p-7 space-y-5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 bg-gray-50 px-3 py-1 rounded-full">Spark Idea</span>
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setShowMenu(prev => !prev)}
                                    className="text-gray-300 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-50"
                                >
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                                {showMenu && (
                                    <div className="absolute right-0 top-8 z-50 w-44 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                                        <button onClick={() => setShowMenu(false)} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                            <Pencil className="w-3.5 h-3.5 text-gray-400" />
                                            Edit Idea
                                        </button>
                                        <button onClick={() => setShowMenu(false)} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                            <Archive className="w-3.5 h-3.5 text-gray-400" />
                                            Move to Archive
                                        </button>
                                        <div className="border-t border-gray-50" />
                                        <button onClick={() => setShowMenu(false)} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">
                                            <Trash2 className="w-3.5 h-3.5" />
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-black tracking-tight text-black leading-tight">
                                Redesigning the onboarding flow for mobile users
                            </h2>
                            <p className="text-gray-400 font-medium text-sm leading-relaxed">
                                The current experience feels fragmented. We should explore a card-based swipe interface to reduce friction during user setup.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                            <Switch />
                            <span className="text-xs font-bold text-gray-400">Shared with Design Team</span>
                        </div>
                    </CardContent>
                </Card>
                <div className="space-y-3">
                    {tasks.map((task, i) => (
                        <Card key={i} className="border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow cursor-pointer" onClick={() => toggleTask(i)}>
                            <CardContent className="p-5 flex items-start gap-3">
                                <div className={`w-4 h-4 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${task.done ? 'bg-black border-black' : 'border-gray-300'}`}>
                                    {task.done && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                                </div>
                                <div>
                                    <p className={`text-sm font-bold transition-colors ${task.done ? "line-through text-gray-400" : "text-black"}`}>{task.label}</p>
                                    <p className="text-xs font-medium text-gray-400 mt-0.5">{task.sub}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                        alt="Workspace Aesthetic"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50">Visual Ref</p>
                        <p className="text-white font-black text-base tracking-tight">Workspace Aesthetic</p>
                    </div>
                </div>
                <Card className="border-gray-100 shadow-sm rounded-2xl">
                    <CardContent className="p-7 flex flex-col justify-between h-full min-h-[180px]">
                        <div className="space-y-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Thought Fragment</p>
                            <blockquote className="text-base font-bold text-gray-700 leading-relaxed italic">
                                "Simplicity is the ultimate sophistication." — Leonardo da Vinci. How does this apply to our typography scale?
                            </blockquote>
                        </div>
                    </CardContent>
                </Card>
                <div className="space-y-3">
                    <Card className="border-gray-100 shadow-sm rounded-2xl">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-black text-black tracking-tight">Unsorted Links</h3>
                            <div className="space-y-2.5">
                                {unsortedLinks.map((link, i) => (
                                    <a key={i} href={link.href} className="flex items-center gap-2 group">
                                        <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0 group-hover:text-black transition-colors" />
                                        <span className="text-xs font-bold text-gray-500 group-hover:text-black transition-colors truncate underline underline-offset-4 decoration-gray-200 group-hover:decoration-black">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <label className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center py-8 gap-2 hover:border-gray-400 transition-colors cursor-pointer group">
                        <input type="file" multiple className="hidden" onChange={(e) => console.log(e.target.files)} />
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <Plus className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">Drop more ideas here</p>
                    </label>
                </div>
            </div>
        </div>
    )
}
