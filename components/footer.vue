<template>
    <footer class="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <FooterContact/>
          <FooterMenu/>
        </div>
        <Copyright/>
      </div>
    </footer>
</template>

<script>
import Copyright from "@/components/copyright";
import FooterMenu from '@/components/footermenu';
import FooterContact from '@/components/footercontact';

export default {
  name: "Footer",
  components:{
    Copyright,
    FooterMenu,
    FooterContact
  }
}
</script>