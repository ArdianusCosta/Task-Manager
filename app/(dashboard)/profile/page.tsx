"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
    return (
        <div className="w-full space-y-12 pb-20">
            <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight text-black">Profile</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                    Manage your personal information, workspace environment, and billing preferences from one systematic dashboard.
                </p>
            </div>

            <div className="space-y-8">
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 bg-white px-8 py-6">
                        <CardTitle className="text-xl font-bold tracking-tight">Personal Details</CardTitle>
                        <Button variant="secondary" className="h-9 px-6 font-bold rounded-lg bg-gray-100 hover:bg-gray-200 text-black border-none transition-all">
                            Edit
                        </Button>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2.5">
                                <Label htmlFor="fullname" className="text-sm font-bold text-gray-400">Full Name</Label>
                                <Input
                                    id="fullname"
                                    placeholder="Elena Sterling"
                                    className="h-12 rounded-xl border-gray-200 focus:ring-black focus:border-black font-medium px-4"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <Label htmlFor="email" className="text-sm font-bold text-gray-400">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="elena.s@taskflow.io"
                                    className="h-12 rounded-xl border-gray-200 focus:ring-black focus:border-black font-medium px-4"
                                />
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <Label htmlFor="bio" className="text-sm font-bold text-gray-400">Professional Bio</Label>
                            <Textarea
                                id="bio"
                                placeholder="Design Lead and Productivity enthusiast. Obsessed with systematic workflows and minimalist interfaces."
                                className="min-h-[120px] rounded-xl border-gray-200 focus:ring-black focus:border-black font-medium p-4 resize-none leading-relaxed"
                            />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <CardHeader className="border-b border-gray-50 bg-white px-8 py-6">
                        <CardTitle className="text-xl font-bold tracking-tight">Workspace Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-0">
                        <PreferenceItem
                            title="Dark Mode"
                            description="Adjust the interface for low-light environments."
                        />
                        <Separator className="bg-gray-50" />
                        <PreferenceItem
                            title="Email Notifications"
                            description="Daily digest of tasks and activity."
                            defaultChecked
                        />
                        <Separator className="bg-gray-50" />
                        <PreferenceItem
                            title="Focus Sounds"
                            description="Ambient background noise during focus sessions."
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function PreferenceItem({ title, description, defaultChecked }: { title: string, description: string, defaultChecked?: boolean }) {
    return (
        <div className="flex items-center justify-between py-6 group transition-all">
            <div className="space-y-1">
                <h4 className="text-base font-bold text-black tracking-tight group-hover:text-black transition-colors">{title}</h4>
                <p className="text-sm font-medium text-gray-400 leading-relaxed">{description}</p>
            </div>
            <Switch defaultChecked={defaultChecked} className="data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-200" />
        </div>
    );
}