<template>
    <div class="mt-12 border-t border-gray-200 py-8">
        <p class="text-base text-gray-400 xl:text-center">
        &copy; 2018 - {{year}} FeLab. All rights reserved.
        </p>
    </div>
</template>

<script>
let m_year = new Date().getFullYear();
export default {
  name: "CopyRight",
  data(){
      return {
          year: m_year
      }
  }
}
</script>