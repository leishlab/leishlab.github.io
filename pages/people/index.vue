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
                    name: 'Maria Fernanda Laranjeira-Silva',
                    role: 'Research Associate - USP',
                    lattesUrl: 'https://lattes.cnpq.br/5423200994091318',
                    linkedinUrl: 'https://www.linkedin.com/in/maria-fernanda-laranjeira-da-silva-91a14526/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634053130/MFLS_FeLAB_foto_square_fryjvc.jpg',
                    imageAlt: 'Maria Fernanda Laranjeira | Research Scientist @ USP'                
                },                   
                {
                    id: 2,
                    name: 'Ahyun Avery Hong',
                    role: 'PhD Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/6341417420423481',
                    linkedinUrl: 'https://www.linkedin.com/in/ahyun-avery-hong/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634046365/Avery_feLAB_yc7iwc.jpg',
                    imageAlt: 'Ahyun Avery Hong | PhD Student @ USP'                
                },
                {
                    id: 3,
                    name: 'Romario Lopes Boy',
                    role: 'MS Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/6780260214719643',
                    linkedinUrl: 'https://www.linkedin.com/in/rom%C3%A1rio-lopes-boy-44113674/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633544219/Romario_hfrf9m.jpg',
                    imageAlt: 'Romario Lopes Boy | MS Student @ USP' 
                }, 
                {
                    id: 4,
                    name: 'Lucas Felipe Almeida Athayde',
                    role: 'MS Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/1590201488081535',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634070695/Lucas_FeLAB_mjjmef.jpg',
                    imageAlt: 'Lucas Felipe Almeida Athayde | MS Student @ USP' 
                },
                {
                    id: 5,
                    name: 'Giovana Aquino Parreira',
                    role: 'Undergrad Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/0418647232202748',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633544270/Giovana_zju6pm.jpg',
                    imageAlt: 'Giovana Aquino Parreira | Undergrad Student @ USP'                
                },
                {
                    id: 6,
                    name: 'Marco Antonio Mendes Gomes',
                    role: 'Undergrad Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/2681040462942756',
                    linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633540924/Marco_nk6zbe.jpg',
                    imageAlt: 'Marco Antonio Mendes Gomes | Undergrad Student @ USP' 
                },
                {
                    id: 7,
                    name: 'Lucile Maria Floeter-Winter',
                    role: 'Professor - USP',
                    lattesUrl: 'http://lattes.cnpq.br/9468443035508043',
                    linkedinUrl: 'https://www.linkedin.com/in/lucile-floeter-winter-b5b91a48/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634045145/Lucile_FeLAB_foto_xvtn8b.jpg',
                    imageAlt: 'Lucile Maria Floeter-Winter | Professor @ USP'                
                },
                {
                    id: 8,
                    name: 'Juliana Ide Aoki',
                    role: 'Post-Doc - USP',
                    lattesUrl: 'http://lattes.cnpq.br/3300018120206040',
                    linkedinUrl: 'https://www.linkedin.com/in/juliana-aoki-880669153/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633481980/foto_JuAoki_site_wqvx5j.png',
                    imageAlt: 'Juliana Ide Aoki | Post-Doc @ USP'                
                },
                {
                    id: 9,
                    name: 'Ricardo Andrade Zampieri',
                    role: 'Researcher - USP',
                    lattesUrl: 'http://lattes.cnpq.br/6456862196184646',
                    linkedinUrl: 'https://www.linkedin.com/in/ricardo-andrade-zampieri-6440274a/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633540924/Ricardo_lodike.jpg',
                    imageAlt: 'Ricardo Andrade Zampieri | Researcher @ USP'  
                }
            ]
        }
    }
}
</script>
