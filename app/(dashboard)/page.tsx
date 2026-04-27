import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl space-y-8">
        {/* HEADER */}
        <section className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">
              Good morning, Agent.
            </h1>
            <p className="mt-2 text-zinc-500">
              You have 5 tasks to focus on today.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-600 shadow-sm">
            Friday, April 24
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card className="h-44 rounded-3xl bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-xl">
                ⏰
              </div>

              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                +2 From Yesterday
              </span>
            </CardHeader>

            <CardContent className="space-y-1">
              <h2 className="text-5xl font-bold text-zinc-900">5</h2>
              <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                Daily Focus
              </p>
            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card className="h-44 rounded-3xl bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl">
                ✓
              </div>

              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                85% Completion Rate
              </span>
            </CardHeader>

            <CardContent className="space-y-1">
              <h2 className="text-5xl font-bold text-zinc-900">12</h2>
              <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                Completed
              </p>
            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card className="h-44 rounded-3x bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                📊
              </div>

              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                Top 5% in Workspace
              </span>
            </CardHeader>

            <CardContent className="space-y-1">
              <h2 className="text-5xl font-bold text-zinc-900">92%</h2>
              <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                Efficiency
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CONTENT */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* TASK LIST */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-zinc-900">
                Today&apos;s Priorities
              </h2>

              <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                5 Tasks
              </span>
            </div>

            {[
              ["System Architecture Review", "10:00 AM", "HIGH"],
              ["Developer Roadmap Implementation", "01:30 PM", "MEDIUM"],
              ["Database Migration: Task Table", "03:00 PM", "HIGH"],
              ["UI Component Polish: Dashboard", "04:30 PM", "LOW"],
              ["Weekly Sync with Development Team", "05:15 PM", "MEDIUM"],
            ].map((task, i) => (
              <Card
                key={i}
                className="rounded-3xl bg-white py-5 "
              >

                <CardContent className="flex items-center justify-between">
                  <div className="flex space-x-4">
                  <Checkbox />
                  <div>
                    <h3 className="font-semibold text-zinc-900">{task[0]}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{task[1]}</p>
                  </div>
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                    {task[2]}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-zinc-900">
              Active Focus
            </h2>

            <Card className="rounded-[2rem] border-0 bg-black text-white shadow-xl">
              <CardContent className="space-y-6 p-8">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
                    Current Sprint
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    UI Modernization Phase 1
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-800">
                    <div className="h-2 w-[65%] rounded-full bg-white" />
                  </div>
                </div>

                <button className="w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:bg-zinc-200">
                  Continue Working
                </button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}