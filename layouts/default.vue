<template>
    <div class="relative overflow-hidden">
        <cheader />
        <slot />
        <cfooter />
    </div>
</template>

<script>

import header from "@/components/header";
import footer from "@/components/footer";

export default {
    components: {
        cheader: header,
        cfooter: footer,
    }
};
</script>
