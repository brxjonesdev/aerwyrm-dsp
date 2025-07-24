import Link from 'next/link';
import React from 'react';
import CourseContent from './components/course-content';

export default function Synthesis() {
  return (
    <main className="bg-[#0a0a0a] flex-1 flex p-4 font-mono text-white/10">
      <section className="max-w-5xl mx-auto  w-full space-y-4 flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 ">
          <h3 className="text-6xl lg:text-8xl font-light text-white/80 font-aer animate-text-color ">
            AERWYRM-JUNI
          </h3>
          <p className=" max-w-md lg:max-w-[150px] lg:text-sm text-white/70 hidden lg:block">
            A guide to modern synthesis techniques and electronic music theory.
          </p>
        </div>
        <section className="flex flex-col lg:flex-row gap-4 h-full flex-1">
  <div className="border-t-2 border-b-2 border-white/10 py-5 space-y-2 lg:w-4/12">
    <div className="space-y-2">
      <p className="text-sm max-w-5xl text-white/70">
        This tutorial series begins with the fundamentals of synthesizers and sound design — exploring oscillators, filters, envelopes, and modulation.  All examples are implemented with modern web technologies, including the Web Audio API and Tone.js.
        Key tools and references include:
      </p>
      <ul className="list-disc pl-5 text-cyan-300 text-xs">
        <li>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
            className="text-cyan-200 hover:underline"
          >
            MDN Web Audio API Documentation
          </Link>
        </li>
        <li>
          <Link
            href="https://tonejs.github.io/"
            className="text-cyan-200 hover:underline"
          >
            Tone.js – A Web Audio framework for creating interactive music in the browser
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
