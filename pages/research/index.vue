<template>
  <WithTestimonialStats 
    v-bind:img_src="img_src"
    v-bind:img_alt="img_alt"
    v-bind:testimonial="testimonial"
    v-bind:person_title="person_title"
    v-bind:stats="stats"
  />
</template>

<script>
import WithTestimonialStats from "@/components/content/withtestimonialstats"
export default {
  components: {
    WithTestimonialStats
  },
  data() {
    return {
      img_src: 'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634047046/foto_lab_jove_rad0rj.png',
      img_alt: 'Alt text',
      testimonial: 'Our studies have been designed to further our understanding of the molecular mechanisms through which Leishmania acquires essential nutrients from the host. Using this understanding we aim to establish these pathways as strong candidates for the design of molecules that specifically target parasite proteins without impacting host metabolism. As a next step, 3D structure determination of these parasite proteins will enable the screening of ligands, which will be evaluated as alternative chemotherapies against Leishmaniasis.',
      person_title: 'Maria Fernanda Laranjeira-Silva',
      stats : [
        { id: 1, label: 'Publications', value: '30' },
        { id: 2, label: 'Citations', value: '1043' },
        ]
      }
    }
}
</script>
