import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Posts from '@/components/ui/posts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen flex p-4 font-mono text-white/10">
      <section className="max-w-5xl mx-auto  w-full space-y-4 ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 ">
          <h3 className="text-7xl lg:text-8xl font-light text-white/80 font-aer animate-text-color ">
            AERWYRM
          </h3>

          <p className=" max-w-md lg:max-w-[150px] lg:text-sm text-white/70 hidden lg:block">
            A blog about sound, music, and digital signal processing.
          </p>
        </div>
        <div className="border-t-2 border-b-2 border-white/10 py-5 space-y-2">
          <Badge>
            A project by{' '}
            <Link
              href="https://portfolio.braxtonjones.dev/"
              className="hover:cursor-pointer"
            >
              @brxjonesdev
            </Link>
          </Badge>
          <div className="space-y-2">
            <p className="text-sm max-w-5xl text-white/70">
              Aerwyrm is a living notebook of my journey into building audio
              software. This project documents my progress, experiments, and
              discoveries as I gradually dive deeper into digital signal
              processing and music production.
            </p>
            <div className="flex items-baseline space-y-2 flex-col lg:flex-row ">
              <p className="text-sm text-white/70">
                Currently I’m exploring how synthesizers work — from waveforms
                and filters to modulation and envelopes.
              </p>
              <Button
                variant="outline"
                className="ml-2 text-xs w-full lg:w-fit py-1"
                size={'sm'}
                asChild
              >
                <Link
                  href="/juni"
                  className="text-white/80 hover:text-white"
                >
                  View <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Posts />
      </section>
    </main>
  );
}
