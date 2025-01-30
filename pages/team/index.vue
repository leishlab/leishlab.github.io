<template>
  <GridPeopleRounded 
      v-bind:people_h1="people_h1" v-bind:people_p="people_p" v-bind:people="people" v-bind:alumni="alumni"
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
                    role: 'Associate Professor - USP',
                    lattesUrl: 'https://lattes.cnpq.br/5423200994091318',
                    linkedinUrl: 'https://www.linkedin.com/in/maria-fernanda-laranjeira-da-silva-91a14526/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634053130/MFLS_FeLAB_foto_square_fryjvc.jpg',
                    imageAlt: 'Maria Fernanda Laranjeira | Associate Professor @ USP'                
                },     
                {
                    id: 2,
                    name: 'Romario Lopes Boy',
                    role: 'PhD Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/6780260214719643',
                    linkedinUrl: 'https://www.linkedin.com/in/rom%C3%A1rio-lopes-boy-44113674/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633544753/Romario_hfrf9m.jpg',
                    imageAlt: 'Romario Lopes Boy | PhD Student @ USP' 
                }, 
                {
                    id: 3,
                    name: 'Lucas Felipe Almeida Athayde',
                    role: 'PhD Student - USP',
                    lattesUrl: 'http://lattes.cnpq.br/1590201488081535',
                    //linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634070695/Lucas_FeLAB_mjjmef.jpg',
                    imageAlt: 'Lucas Felipe Almeida Athayde | PhD Student @ USP' 
                },
              {
                    id: 4,
                    name: 'João Moraes',
                    role: 'MSc Student - USP',
                    //lattesUrl: 'http://lattes.cnpq.br/1590201488081535',
                    //linkedinUrl: 'https://linkedin.com',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1737739877/Foto_Joao_Moraes_qekua8.jpg',
                    imageAlt: 'João Moraes | MSc Student @ USP' 
                },
              {
                    id: 5,
                    name: 'Nassib Saab Daniel',
                    role: 'Undergraduate Student',
                    lattesUrl: 'http://lattes.cnpq.br/0357196525810493',
                    linkedinUrl: 'https://www.linkedin.com/in/nassib-saab-daniel-4ba0292ab/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1738256993/Foto_Nassib_heqwjm.jpg',
                    imageAlt: 'Nassib Saab Daniel | Undergrad Student @ USP'  
                },
              {
                      id: 6,
                    name: 'Victor Abade Ramos',
                    role: 'Undergraduate Student',
                    lattesUrl: 'http://lattes.cnpq.br/6936461161231890',
                    linkedinUrl: 'https://www.linkedin.com/in/victor-abade-de-carvalho-ramos-640655343/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1737744888/Foto_Victor_h46gry.jpg',
                    imageAlt: 'Victor Abade Ramos | Undergrad Student @ USP'   
                },
                {
                    id: 7,
                    name: 'Ricardo Andrade Zampieri',
                    role: 'Researcher - USP',
                    lattesUrl: 'http://lattes.cnpq.br/6456862196184646',
                    linkedinUrl: 'https://www.linkedin.com/in/ricardo-andrade-zampieri-6440274a/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1633540924/Ricardo_lodike.jpg',
                    imageAlt: 'Ricardo Andrade Zampieri | Researcher @ USP'  
                },
                {
                    id: 8,
                    name: 'Lucile Maria Floeter-Winter',
                    role: 'Professor - USP',
                    lattesUrl: 'http://lattes.cnpq.br/9468443035508043',
                    linkedinUrl: 'https://www.linkedin.com/in/lucile-floeter-winter-b5b91a48/',
                    imageUrl:
                    'https://res.cloudinary.com/dppi8hoxw/image/upload/v1634045145/Lucile_FeLAB_foto_xvtn8b.jpg',
                    imageAlt: 'Lucile Maria Floeter-Winter | Professor @ USP'                
                }               
            ], 
          
            alumni : [
              {
                    id: 1,
                    name: 'Ahyun Avery Hong PhD 2024',
                    //role: 'PhD Student - USP',
                    //lattesUrl: 'http://lattes.cnpq.br/6341417420423481',
                    //linkedinUrl: 'https://www.linkedin.com/in/ahyun-avery-hong/',             
                }, 
              {
                    id: 2,
                    name: 'Lucas Felipe Almeida Athayde MSc 2023',
                }, 
              {
                    id: 3,
                    name: 'Romario Lopes Boy MSc 2022',
                }, 
              {
                    id: 4,
                    name: 'Marco Antonio Mendes Gomes Undergrad 2020-2022',
                       }, 
              {
                    id: 5,
                    name: 'Giovana Parreira de Aquino Undergrad 2019-2022',       
                }, 
              
            ]
        }
    }
}
</script>
