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
      img_src: 'https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100',
      img_alt: 'Alt text',
      testimonial: 'Our studies have been designed to further our understanding of the molecular mechanisms through which Leishmania acquires essential nutrients from the host for the disease to become established. Using this understanding we aim to establish these pathways as strong candidates for the design of molecules that specifically target parasite proteins without impacting host metabolism. As a next step, 3D structure determination of these parasite proteins will enable the screening of ligands, which will be evaluated as alternative chemotherapies against Leishmaniasis.',
      person_title: 'Maria Fernanda Laranjeira-Silva',
      stats : [
        { id: 1, label: 'Founded', value: '2021' },
        { id: 2, label: 'Employees', value: '5' },
        { id: 3, label: 'Beta Users', value: '521' },
        { id: 4, label: 'Raised', value: '$25M' },
        ]
      }
    }
}
</script>
