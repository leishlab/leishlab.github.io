<template>
    <div class="relative overflow-hidden">
        <cheader />
        <Nuxt />
        <cfooter />
    </div>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";

export default {
  components: {
    cheader: header,
    cfooter: footer,
  },
};
</script>
