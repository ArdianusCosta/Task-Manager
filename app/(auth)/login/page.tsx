"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react"
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
)
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

export default function Login() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-10 max-w-md mx-auto lg:mx-0 w-full">
          <div className="flex items-center gap-3 group cursor-pointer w-fit">
            <div className="bg-black p-2 rounded-xl shadow-lg shadow-black/10 transition-transform group-hover:scale-105 active:scale-95">
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase transition-colors group-hover:text-black/80">My Tasks</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-[1.1]">Organize your <br />workspace today.</h1>
            <p className="text-gray-400 font-medium text-lg leading-relaxed">
              Experience the art of minimalism in task management.
            </p>
          </div>
          <Card className="border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white rounded-[2rem] overflow-hidden">
            <CardContent className="p-10">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="outline" className="flex-1 font-bold h-12 border-gray-200 transition-all hover:bg-gray-50 active:scale-95 rounded-xl">
                  <GoogleIcon className="w-4 h-4 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="flex-1 font-bold h-12 border-gray-200 transition-all hover:bg-gray-50 active:scale-95 rounded-xl">
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full opacity-50" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-white px-4 text-gray-400 font-black tracking-[0.2em]">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>
              <div className="space-y-2 mb-5">
                <Label className="text-xs font-black uppercase tracking-wider text-gray-500 ml-1">Email Address</Label>
                <Input
                  placeholder="name@company.com"
                  className="h-12 border-gray-200 bg-gray-50/30 focus-visible:ring-black rounded-xl transition-all font-medium placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between items-center ml-1">
                  <Label className="text-xs font-black uppercase tracking-wider text-gray-500">Password</Label>
                  <button className="text-[11px] font-black text-gray-400 hover:text-black uppercase tracking-wider transition-colors">Forgot?</button>
                </div>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-12 border-gray-200 bg-gray-50/30 focus-visible:ring-black rounded-xl transition-all font-mono placeholder:text-gray-300"
                />
              </div>
              <div className="flex items-center space-x-3 mb-8 ml-1">
                <Checkbox id="remember" className="w-5 h-5 border-gray-300 rounded-md data-[state=checked]:bg-black data-[state=checked]:border-black transition-all" />
                <label
                  htmlFor="remember"
                  className="text-xs font-bold text-gray-400 cursor-pointer select-none hover:text-gray-600 transition-colors"
                >
                  Remember this device for 30 days
                </label>
              </div>
              <Button className="w-full h-12 bg-black hover:bg-black/90 text-white font-black rounded-xl shadow-xl shadow-black/10 transition-transform active:scale-[0.98]">
                Sign In to Workspace
              </Button>
              <p className="text-xs text-center text-gray-400 mt-8 font-bold">
                New user? <button className="text-black font-black hover:underline underline-offset-4 tracking-tight">Generate access</button>
              </p>
            </CardContent>
          </Card>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-300 mt-2 ml-1">
            <button className="hover:text-gray-900 transition-colors">Privacy</button>
            <button className="hover:text-gray-900 transition-colors">Terms</button>
            <button className="hover:text-gray-900 transition-colors">Security</button>
          </div>
        </div>
        <div className="hidden lg:block relative group">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[11/14] transform transition-transform group-hover:scale-[1.01] duration-700">
            <img
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop"
              alt="workspace"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-12 space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-white/30 rounded-full" />
                <blockquote className="text-3xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                  "The secret of getting ahead is getting started."
                </blockquote>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-14 h-14 rounded-2xl border-2 border-white/20 overflow-hidden bg-gray-500 shadow-xl p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                    alt="Marcus Aurelius"
                    className="w-full h-full object-cover rounded-[inherit]"
                  />
                </div>
                <div>
                  <p className="text-white font-black text-sm tracking-tight">Marcus Aurelius</p>
                  <p className="text-white/50 text-[11px] font-black uppercase tracking-[0.15em]">Workspace Director</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-100/10 rounded-full blur-3xl" />
        </div>

      </div>
    </div>
  )
}
