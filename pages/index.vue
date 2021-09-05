<template>
  <div class="bg-white">
    <main>

      <!-- Hero Section -->
      <Hero/>

      <!-- Feature section with screenshot -->
      <!--FeatureScreenShot/-->

      <!-- Feature section with grid -->
      <!--FeatureGrid/-->

      <!-- Testimonial section -->
      <!--Testimonial/-->

      <!-- Blog section -->
      <BlogSection/>

      <!-- CTA Section -->
      <CTASection1/>

    </main>  
  </div>
</template>

<script>
//import FeatureScreenShot from "@/components/homepage/featurescreenshot";
//import FeatureGrid from "@/components/homepage/featuregrid";
import Hero from "@/components/homepage/hero";
//import Testimonial from "@/components/homepage/testimonial";
import CTASection1 from "@/components/homepage/ctasection1";
import BlogSection from "@/components/homepage/blogsection";

export default {
  components: {
    //FeatureScreenShot,
    //FeatureGrid,
    Hero,
    //Testimonial,
    BlogSection,
    CTASection1
  }
}
</script>