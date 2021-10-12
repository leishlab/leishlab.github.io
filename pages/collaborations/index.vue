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
                    name: 'Roberto K. Salinas',
                    role: 'Professor at the Institute of Chemistry of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Roberto K. Salinas | Professor @ USP'                
                },
                {
                    id: 2,
                    name: 'Norma W. Andrews',
                    role: 'Professor at the University of Maryland',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Norma W. Andrews | Professor @ UMD'                
                },
                {
                    id: 3,
                    name: 'Iqbal Hamza',
                    role: 'Professor at the University of Maryland',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Iqbal Hamza | Professor @ UMD'                
                }
            ]
        }
    }
}
</script>
