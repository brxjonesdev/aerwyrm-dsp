import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react';
import CourseContent from './components/course-content';

export default function DSP() {
  return (
    <main className="bg-[#0a0a0a] flex-1 flex p-4 font-mono text-white/10">
      <section className="max-w-5xl mx-auto  w-full space-y-4 flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 ">
          <h3 className="text-6xl lg:text-8xl font-light text-white/80 font-aer animate-text-color ">
            AERWYRM-DSP
          </h3>
          <p className=" max-w-md lg:max-w-[150px] lg:text-sm text-white/70 hidden lg:block">
            A guide to digital signal processing for audio developers.
          </p>
        </div>
        <section className="flex flex-col lg:flex-row gap-4 h-full flex-1">
          <div className="border-t-2 border-b-2 border-white/10 py-5 space-y-2 lg:w-4/12">
            <Badge>
              See full code @{' '}
              <Link
                href="https://github.com/brxjonesdev/aerwyrm-dsp"
                className="hover:cursor-pointer"
              >
                Aerwyrm/DSP
              </Link>
            </Badge>
            <div className="space-y-2">
              <p className="text-sm max-w-5xl text-white/70">
                This tutorial series will cover the basics of digital signal
                processing, starting from the fundamentals and moving towards
                more advanced topics. It will include practical examples and
                experiments using the Web Audio API and WebAssembly. This
                references the following resources:
              </p>
              <ul className="list-disc px-2 text-cyan-300 text-xs">
                <li>
                  <Link
                    href="https://www.pearson.com/en-us/subject-catalog/p/understanding-digital-signal-processing/P200000005760"
                    className="text-cyan-200 hover:underline"
                  >
                    Understanding Digital Signal Processing – Richard G. Lyons
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://msp.ucsd.edu/techniques.htm"
                    className="text-cyan-200 hover:underline"
                  >
                    The Theory and Technique of Electronic Music – Miller
                    Puckette
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <CourseContent />
        </section>
      </section>
    </main>
  );
}
