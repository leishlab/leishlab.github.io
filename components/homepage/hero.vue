<template>
    <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div class="lg:py-24">
                <!--NuxtLink to="/research" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"-->
                  <!--span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">We're hiring</span>
                  <span class="ml-4 text-sm">Visit our careers page</span-->
                  <!-- Heroicon name: solid/chevron-right -->
                  <!--svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </NuxtLink-->
                <h1 class="mt-4 tracking-tight font-extrabold text-white sm:mt-5 lg:mt-6">
                  <span class="block text-4xl sm:text-6xl xl:text-6xl">Laranjeira Lab</span>
                  <span class="mt-4 pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5 text-2xl sm:text-4xl xl:text-4xl">Leishmaniasis Research</span>
                </h1>
                <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Neglected tropical diseases such as leishmaniasis have a huge impact on global health but are under researched and under-funded. Treatment and diagnostic techniques remain expensive and difficult to implement in remote areas. 
                  Our goal is to further understand <span class="italic">Leishmania</span> pathogenesis to define better therapeutic targets for leishmaniasis treatment.
                </p>
              </div>
            </div>
            <div class="mt-6 sm:mt-2 lg:m-0 lg:relative">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://res.cloudinary.com/dppi8hoxw/image/upload/v1634046923/Photo_Jul_12_2_00_21_PM_fq61vr.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>
