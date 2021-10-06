<template>
    <header class="relative">
      <div class="bg-gray-900">
        <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6" aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg" alt="">
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button type="button" class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <!-- Heroicon name: outline/menu -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <ul class="hidden space-x-8 md:flex md:ml-10">
              <li 
                v-for="item in menus"
                :key="item.id"
              >
                <NuxtLink
                  class="text-base font-medium text-white hover:text-gray-300"
                  :to="'/' + item.page"
                >{{ item.text }}</NuxtLink>
              </li>
            </ul>
          </div>
          <!--div class="hidden md:flex md:items-center md:space-x-6">
            <a href="#" class="text-base font-medium text-white hover:text-gray-300">
              Log in
            </a>
            <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
              Start free trial
            </a>
          </div-->
        </nav>
      </div>

      <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg" alt="">
            </div>
            <div class="-mr-2">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="pt-5 pb-6">
            <div class="px-2 space-y-1">
              <NuxtLink
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                v-for="item in menus"
                :key="item.id"
                :to="'/' + item.page"
                >{{ item.text }}
                </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      menus: [
        {
          id: 1,
          text: "Research",
          page: "research"
        },
        {
          id: 2,
          text: "Publications",
          page: "publications"
        },
        {
          id: 3,
          text: "Contact",
          page: "contact"
        },
        {
          id: 4,
          text: "People",
          page: "people"
        }
      ]
    };
  },

}
</script>