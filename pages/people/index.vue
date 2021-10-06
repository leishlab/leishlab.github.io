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
                },                   
                {
                    id: 2,
                    name: 'Ahyun Avery Hong',
                    role: 'PhD Student at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Ahyun Avery Hong | PhD Student @ USP'                
                },
                {
                    id: 3,
                    name: 'Romario Lopes Boy',
                    role: 'MS Student at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Romario Lopes Boy | MS Student @ USP' 
                    ,                   
                {
                    id: 4,
                    name: 'Giovana Aquino Parreira',
                    role: 'Undergrad Student at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Giovana Aquino Parreira | Undergrad Student @ USP'                
                },
                {
                    id: 5,
                    name: 'Marco Antonio Mendes Gomes',
                    role: 'Undergrad Student at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Marco Antonio Mendes Gomes | Undergrad Student @ USP' 
                    ,
                {
                    id: 6,
                    name: 'Lucas Felipe Almeida Athayde',
                    role: 'MS Student at the Institute of Bioscience of the University of São Paulo',
                    twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Lucas Felipe Almeida Athayde | MS Student @ USP' 
            ]
        }
    }
}
</script>
