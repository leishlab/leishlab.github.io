<template>
    <TwoColumns 
        v-bind:content_h1="content_h1"
        v-bind:content_p="content_p"
    />
</template>

<script>
import TwoColumns from "@/components/content/twocolumns";

export default {
    components: {
        TwoColumns
    }, 
    data() {
        return {
            content_h1: 'Terms',
            content_p: 'We respect your rights'
        }
    }
}
</script>