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
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Maria Fernanda Laranjeira | Research Scientist @ USP'                
                }
            ]
        }
    }
}
</script>
