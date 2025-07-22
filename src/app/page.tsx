
import { use } from 'react'
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Posts from "@/components/ui/posts";
import Featured from "@/components/ui/featured";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const section = use(searchParams).section
  return (
    <main className="bg-[#0a0a0a] min-h-screen flex p-4 font-mono text-white/10">
      <section className="max-w-7xl mx-auto  w-full space-y-4 ">
       <div className="flex flex-col lg:flex-row lg:items-center gap-2 ">
        <h3 className="text-7xl lg:text-9xl font-light text-white/80 font-aer animate-text-color ">
          AERWYRM
        </h3>
        
        <p className=" max-w-md lg:max-w-[150px] lg:text-sm text-white/70 hidden lg:block">
          A blog about sound, music, and digital signal processing.
        </p>
       </div>
       <div className="border-t-2 border-b-2 border-white/10 py-5 space-y-2">
       <Badge>
        A project by <Link href="https://portfolio.braxtonjones.dev/" className="hover:cursor-pointer">@brxjonesdev</Link>
       </Badge>
       <div className='space-y-2'>
        <p className="text-sm max-w-5xl text-white/70">
          Aerwyrm is a living notebook of my journey of learning about digital signal processing, 
          sound design, and music production. Starting from the basics, I&apos;ll be documenting my progress,
          experiments, and discoveries.
        </p>
        <div className='flex items-baseline space-y-2 flex-col lg:flex-row '>
          <p className='text-sm text-white/70'>Currently working on a DSP tutorial using <code>Web Audio API</code> and <code>WASM</code></p>
          <Button variant="outline" className="ml-2 text-xs w-full lg:w-fit py-1"  size={"sm"} asChild>
            <Link href="/dsp-tutorial" className="text-white/80 hover:text-white">
              View <ArrowRight className="inline h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
       </div>
       </div>
       <div className="lg:grid lg:grid-cols-[.75fr_1fr] gap-4 space-y-4">
        <Featured />
        <div className='space-y-4'>
          {section && (
            <Link href={`/`} className="text-sm text-white/70 hover:underline py-4">
              Show all posts
            </Link>
          )}
          <Posts filter={section as string} />
        </div>
       </div>
      </section>

    </main>
  );
}
