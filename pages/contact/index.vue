<template>
  <SplitTwoTone 
    v-bind:contact_h1="contact_h1"
    v-bind:contact_p="contact_p"
    v-bind:contact_address_street="contact_address_street"
    v-bind:contact_address_place="contact_address_place"
    v-bind:contact_address_zip="contact_address_zip"
    v-bind:contact_phone="contact_phone"
    v-bind:contact_email="contact_email"
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
          contact_p: 'Contact friendly message',
          contact_address_street: "Rua do Matão, 1000",
          contact_address_place: 'Cid Universitária - São Paulo - SP',
          contact_address_zip: '00000 000',
          contact_phone: '+55 11 9 9999 9999',
          contact_email: 'email@usp.br'
        }
  }
}
</script>