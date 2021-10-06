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
            people_h1: 'Collaborations',
            people_p: 'Principal Investigators that we work with',
            people : [
                {
                    id: 1,
                    name: 'Lucile Maria Floeter-Winter',
                    role: 'Professor at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Lucile Maria Floeter-Winter | Professor @ USP'                
                },
                {
                    id: 2,
                    name: 'Juliana Ide Aoki',
                    role: 'Post-Doc at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Juliana Ide Aoki | Post-Doc @ USP'                
                },
                {
                    id: 3,
                    name: 'Ricardo Andrade Zampieri',
                    role: 'Researcher at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Ricardo Andrade Zampieri | Researcher @ USP'                
                }
            ]
        }
    }
}
</script>
