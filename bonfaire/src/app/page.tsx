"use client";

import { useState } from 'react'


// navigation menu (don't need for now)
// const navigation = [
//   { name: 'About Us', href: '#' },
// ]

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1 items-center">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">bonfAIre</span>
                <img
                  className="h-8 w-auto"
                  src="/assets/images/logo1.png"
                  alt="bonfaire logo"
                />
                <span className="text-gray-300 ml-2 text-x1 font-semibold">
                  bonf<b>AI</b>re
                </span>
              </a>
            </div>
            {/* <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-400">
                  {item.name}
                </a>
              ))}
            </div> */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="rounded-md hover:bg-slate-300 hover:text-gray-900 px-2 py-1.5 text-sm font-semibold leading-6 text-gray-400">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"> 
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }} />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                bonfAIre
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              🌐 Real-Time Inclusive Communication: AI-powered chat with text-to-speech, text-to-image for accessibility. 🗨️👥
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="rounded-md px-2.5 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-orange-500 hover:text-black">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
