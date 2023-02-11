import React from "react";

function Home() {
  return (
    <div class="flex h-screen justify-center items-center">
    {/* <div class="text-center bg-blue-400">
        <h1 class="text-3xl">HEADING</h1>
        <p class="text-xl">Sub text</p>
    </div> */}
    <div data-testid="container" class="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
    <ul role="list" class="divide-y divide-gray-200">
    <li><a class="block hover:bg-gray-50" href="/details/1"><div class="flex items-center px-4 py-4 sm:px-6">
    <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"><div class="truncate">
    <div class="flex"><p class="truncate font-medium text-indigo-600">Top gainers</p></div></div>
    </div><div class="ml-16 flex flex-shrink-0"><p class="bg-green-100 text-green-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Intraday Bullish</p>
    </div><div class="ml-5 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></div></a></li>
    <li><a class="block hover:bg-gray-50" href="/details/2"><div class="flex items-center px-4 py-4 sm:px-6"><div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
    <div class="truncate"><div class="flex"><p class="truncate font-medium text-indigo-600">Intraday buying seen in last 15 minutes</p></div></div></div>
    <div class="ml-16 flex flex-shrink-0">
    <p class="bg-green-100 text-green-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bullish</p></div>
    <div class="ml-5 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></div></a></li><li><a class="block hover:bg-gray-50" href="/details/3">
      <div class="flex items-center px-4 py-4 sm:px-6"><div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"><div class="truncate">
        <div class="flex"><p class="truncate font-medium text-indigo-600">Open = High</p></div></div></div>
        <div class="ml-16 flex flex-shrink-0"><p class="bg-green-100 text-green-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bullish</p></div>
        <div class="ml-5 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></div></a></li>
          <li><a class="block hover:bg-gray-50" href="/details/4"><div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"><div class="truncate"><div class="flex">
              <p class="truncate font-medium text-indigo-600">CCI Reversal</p></div></div></div><div class="ml-16 flex flex-shrink-0">
                <p class="bg-red-100 text-red-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bearish</p></div>
                <div class="ml-5 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></div></a></li><li>
                    <a class="block hover:bg-gray-50" href="/details/5"><div class="flex items-center px-4 py-4 sm:px-6"><div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div class="truncate"><div class="flex"><p class="truncate font-medium text-indigo-600">RSI Overbought</p></div></div></div><div class="ml-16 flex flex-shrink-0">
                        <p class="bg-red-100 text-red-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bearish</p></div><div class="ml-5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></div></a></li></ul></div>
  </div>
  );
}

export default Home;



