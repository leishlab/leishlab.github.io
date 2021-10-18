<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <!-- Testimonial card-->
          <BackGroundImage
            v-bind:img_src="img_src"
            v-bind:img_alt="img_alt"
            v-bind:testimonial="testimonial"
            v-bind:person_title="person_title"
          />
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h1 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Ongoing Research Projects
          </h1>
          <div class="mt-6 text-gray-500 space-y-6">
            <p class="text-lg">
              Identification and characterization of membrane proteins involved in iron transport and metabolism in Leishmania:
            <ul role="list">
                <li>Study of the regulation of iron and heme transporters at the Leishmania-host interface - effect of iron deficiency anemia on the virulence of Leishmania (L.) amazonensis.</li>
                <li>Identification and characterization of iron transporters in the glycossomes of Leishmania.</li>
                <li>Characterization of manganese transport mediated by the iron transporter LIR1 in Leishmania.</li>
            </ul>
            </p>
            <p class="text-base leading-7">
              Trypanosomatids' FABP-like proteins as potential targets for the development of new antiparasitic drugs:
               <ul role="list">
                <li>Determination of LeiFABP subcellular location in L. amazonensis.</li>
            </ul>
            </p>
            <p class="text-base leading-7">
              The Leishmania-host relationship from the "omics" perspective.
            </p>
          </div>
        </div>

        <!-- Stats section -->
        <StatsSection 
          v-bind:stats="stats"
        />

        <div class="mt-10">
            <NuxtLink 
                :to="'/publications'"
                class="text-base font-medium text-indigo-600"> Learn more about our results <span aria-hidden="true">&rarr;</span> </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackGroundImage from "@/components/testimonials/backgroundimage";
import StatsSection from "@/components/stats/statsection";
export default {
    name: 'WithTestimonialStats',
    components: {
    BackGroundImage,
    StatsSection
  },
  props: {
    img_src: {
        type: String,
        required: true,
    },
    img_alt: {
        type: String,
        required: true,
    },
    testimonial: {
        type: String,
        required: true,
    },    
    person_title: {
        type: String,
        required: true,
    },
    stats: {
        type: Array,
        required: true,
        default: () => [
            {
                id: 0,
                label: 'Label',
                value: 'Value'
        }]
    }
  }
}
</script>
