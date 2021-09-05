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
      testimonial: 'Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.',
      person_title: 'Maria Fernanda Laranjeira',
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