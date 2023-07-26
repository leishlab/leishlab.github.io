<template>
  <SplitTwoTone 
    v-bind:contact_h1="contact_h1"
    v-bind:contact_p="contact_p"
    v-bind:contact_address_street="contact_address_street"
    v-bind:contact_address_place="contact_address_place"
    v-bind:contact_address_zip="contact_address_zip"
    v-bind:contact_phone="contact_phone"
    v-bind:contact_email="contact_email"
    v-bind:page_illustration="page_illustration"
    />
</template>

<script>
import SplitTwoTone from "@/components/contact/splittwotone"; 
export default {
  components: {
    SplitTwoTone
  },
  data() {
        return {
          contact_h1: 'Contact Us',
          contact_p: 'Institute of Biosciences - University of São Paulo',
          contact_address_street: "Rua do Matão, travessa 14, 101",
          contact_address_place: 'Cidade Universitária - São Paulo - SP',
          contact_address_zip: '05508-090',
          contact_phone: '+55 (11) 3091-7503',
          contact_email: 'mfernandals@usp.br',
          page_illustration: "https://res.cloudinary.com/dppi8hoxw/image/upload/v1634655327/undraw_alien_science_nonm_m4fwoe.svg"
        }
  }
}
</script>
