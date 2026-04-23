"use client";

import { useState } from "react";
import { Bell, Monitor, Moon, Palette, Sliders, Sun, User, Trash2, CheckCircle2, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

export default function Settings() {
    const [appearance, setAppearance] = useState("light");
    return (
        <div className="w-full space-y-12 pb-20">
            <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight text-black">Settings</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                    Manage your workspace preferences and account security.
                </p>
            </div>
            <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2 border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 bg-white px-8 py-6">
                            <Sliders className="w-5 h-5 text-gray-500" />
                            <CardTitle className="text-xl font-bold tracking-tight">General</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2.5">
                                <Label htmlFor="workspace-name" className="text-sm font-bold text-gray-400">Workspace Name</Label>
                                <Input
                                    id="workspace-name"
                                    placeholder="TaskFlow Studio"
                                    className="h-12 rounded-xl border-gray-200 focus:ring-black focus:border-black font-medium px-4"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <Label htmlFor="timezone" className="text-sm font-bold text-gray-400">Timezone</Label>
                                <Select defaultValue="pt">
                                    <SelectTrigger id="timezone" className="h-12 rounded-xl border-gray-200 focus:ring-black font-medium">
                                        <SelectValue placeholder="Select timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pt">Pacific Time (PT) - Los Angeles</SelectItem>
                                        <SelectItem value="et">Eastern Time (ET) - New York</SelectItem>
                                        <SelectItem value="utc">Universal Coordinated Time (UTC)</SelectItem>
                                        <SelectItem value="wib">Western Indonesia Time (WIB) - Jakarta</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Separator className="bg-gray-50" />
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-black tracking-tight">Compact Mode</h4>
                                    <p className="text-xs font-medium text-gray-400">Reduce spacing in task lists.</p>
                                </div>
                                <Switch className="data-[state=checked]:bg-black" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 bg-white px-8 py-6">
                            <Palette className="w-5 h-5 text-gray-500" />
                            <CardTitle className="text-xl font-bold tracking-tight">Appearance</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <AppearanceOption
                                icon={<Sun className="w-4 h-4" />}
                                label="Light Mode"
                                selected={appearance === "light"}
                                onClick={() => setAppearance("light")}
                            />
                            <AppearanceOption
                                icon={<Moon className="w-4 h-4" />}
                                label="Dark Mode"
                                selected={appearance === "dark"}
                                onClick={() => setAppearance("dark")}
                            />
                            <AppearanceOption
                                icon={<Monitor className="w-4 h-4" />}
                                label="System Default"
                                selected={appearance === "system"}
                                onClick={() => setAppearance("system")}
                            />
                        </CardContent>
                    </Card>
                </div>
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 bg-white px-8 py-6">
                        <Bell className="w-5 h-5 text-gray-500" />
                        <CardTitle className="text-xl font-bold tracking-tight">Notifications</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Desktop Notifications</h5>
                                <div className="space-y-4">
                                    <NotificationToggle label="New Task Assigned" checked />
                                    <NotificationToggle label="Due Date Reminders" checked />
                                    <NotificationToggle label="Direct Messages" checked />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Email Digests</h5>
                                <div className="space-y-4">
                                    <NotificationToggle label="Daily Productivity Summary" />
                                    <NotificationToggle label="Weekly Project Reports" checked />
                                    <NotificationToggle label="Marketing & Updates" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 bg-white px-8 py-6">
                        <User className="w-5 h-5 text-gray-500" />
                        <CardTitle className="text-xl font-bold tracking-tight">Account</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="p-8 flex flex-col md:flex-row gap-10 items-start md:items-center">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm flex-shrink-0 relative group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    alt="Profile Picture"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Settings2 className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                <div className="space-y-2.5">
                                    <Label className="text-sm font-bold text-gray-400">Full Name</Label>
                                    <Input defaultValue="Felix Henderson" className="h-12 rounded-xl" />
                                </div>
                                <div className="space-y-2.5">
                                    <Label className="text-sm font-bold text-gray-400">Email Address</Label>
                                    <Input defaultValue="felix.h@taskflow.com" className="h-12 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FAF8F1] px-8 py-5 border-t border-gray-100 flex items-center justify-between">
                            <button className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors group">
                                <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>Delete Account</span>
                            </button>
                            <Button className="bg-black hover:bg-black/90 text-white font-black px-8 h-12 rounded-xl shadow-xl shadow-black/10">
                                Save Changes
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function AppearanceOption({ icon, label, selected, onClick }: { icon: React.ReactNode, label: string, selected?: boolean, onClick?: () => void }) {
    return (
        <button onClick={onClick} className={`
      w-full flex items-center justify-between p-3.5 rounded-xl border transition-all group
      ${selected
                ? "bg-[#FAF8F1] border-gray-900 shadow-sm"
                : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50"}
    `}>
            <div className="flex items-center gap-3">
                <span className={`${selected ? "text-black" : "text-gray-400 group-hover:text-black"} transition-colors`}>
                    {icon}
                </span>
                <span className={`text-sm tracking-tight ${selected ? "font-black text-black" : "font-semibold text-gray-500 group-hover:text-black"}`}>
                    {label}
                </span>
            </div>
            {selected && <CheckCircle2 className="w-4 h-4 text-black" />}
        </button>
    );
}

function NotificationToggle({ label, checked }: { label: string, checked?: boolean }) {
    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-sm font-bold text-gray-600 group-hover:text-black transition-colors">{label}</span>
            <Checkbox defaultChecked={checked} className="rounded-[6px] border-gray-200 data-[state=checked]:bg-black data-[state=checked]:border-black" />
        </div>
    );
}