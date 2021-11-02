<template>
<div class="relative bg-white">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {{contact_h1}}
        </h1>
        <p class="mt-3 text-lg leading-6 text-gray-500">
          {{contact_p}}
        </p>
        <dl class="mt-8 text-base text-gray-500">
          <div>
            <dt class="sr-only">Postal address</dt>
            <dd>
              <p>{{contact_address_street}}</p>
              <p>{{contact_address_place}}</p>
              <p>{{contact_address_zip}}</p>
            </dd>
          </div>
          <div class="mt-6">
            <dt class="sr-only">Phone number</dt>
            <dd class="flex">
              <!-- Heroicon name: outline/phone -->
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-3">
                {{contact_phone}}
              </span>
            </dd>
          </div>
          <div class="mt-3">
            <dt class="sr-only">Email</dt>
            <dd class="flex">
              <!-- Heroicon name: outline/mail -->
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="ml-3">
                {{contact_email}}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
      <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
        <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
        <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" :src="page_illustration" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'SplitTwoTone',
    props: {
        contact_h1: {
            type: String, 
            required: true
        },
        contact_p: {
            type: String, 
            required: true
        },
        contact_address_street: {
            type: String, 
            required: true
        },
        contact_address_place: {
            type: String, 
            required: true
        },
        contact_address_zip: {
            type: String, 
            required: true
        },
        contact_phone: {
            type: String, 
            required: true
        },
        contact_email: {
            type: String, 
            required: true
        },
        page_illustration: {
          type: String,
          required: true
        }
    }
}
</script>