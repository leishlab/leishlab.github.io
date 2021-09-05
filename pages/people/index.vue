<template>
  <GridPeopleRounded 
      v-bind:people_h1="people_h1" v-bind:people_p="people_p" v-bind:people="people" 
  />
</template>

<script>
import GridPeopleRounded from "@/components/people/gridpeoplerounded"; 
export default {
  components: {
    GridPeopleRounded
  },
  data() {
        return {
            people_h1: 'Meet our Team',
            people_p: 'Team description',
            people : [
                {
                    id: 1,
                    name: 'Maria Fernanda Laranjeira',
                    role: 'Research Scientist / USP',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                    imageAlt: 'Maria Fernanda Laranjeira | Research Scientist @ USP'                
                }
            ]
        }
    }
}
</script>
