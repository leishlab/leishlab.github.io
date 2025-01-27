<template>
  <GridPeopleRounded 
      v-bind:people_h1="people_h1" v-bind:people_p="people_p" v-bind:people="people" v-bind:alumni="null"
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
            people_p: 'Principal Investigators and Researchers that we work with',
            people : [
                {
                    id: 1,
                    name: 'Lucile Maria Floeter-Winter',
                    role: 'Professor - Institute of Biosciences of the University of São Paulo',
                    lattesUrl: 'http://lattes.cnpq.br/9468443035508043',
                    linkedinUrl: 'https://www.linkedin.com/in/lucile-floeter-winter-b5b91a48/',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634045145/Lucile_FeLAB_foto_xvtn8b.jpg',
                    //imageAlt: 'Lucile Maria Floeter-Winter | Professor @ USP' 
                },
                {
                    id: 2,
                    name: 'Roberto K. Salinas',
                    role: 'Professor - Institute of Chemistry of the University of São Paulo',
                    lattesUrl: 'https://lattes.cnpq.br/6171517695707255',
                    linkedinUrl: 'https://www.linkedin.com/in/roberto-salinas-33914ba6/',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Roberto K. Salinas | Professor @ USP'                
                },
                {
                    id: 3,
                    name: 'Norma W. Andrews',
                    role: 'Professor - University of Maryland',
                    //twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://www.linkedin.com/in/norma-andrews-87260869/',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Norma W. Andrews | Professor @ UMD'                
                },
                {
                    id: 4,
                    name: 'Iqbal Hamza',
                    role: 'Professor - University of Maryland',
                    //twitterUrl: 'https://twitter.com',
                    linkedinUrl: 'https://www.linkedin.com/in/iqbal-hamza-ba30a718/',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Iqbal Hamza | Professor @ UMD'                
                },
                 {
                    id: 5,
                    name: 'Juliana Ide Aoki',
                    role: 'Technologist - Butantan',
                    lattesUrl: 'http://lattes.cnpq.br/3300018120206040',
                    linkedinUrl: 'https://www.linkedin.com/in/juliana-aoki-880669153/',
                    //imageUrl:
                    //'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    //imageAlt: 'Juliana Ide Aoki | Post-Doc @ USP'                
                },
            ]
        }
    }
}
</script>
