<template>
    <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
    <div class="md:grid md:grid-cols-2 md:gap-8">
        <FooterMenuSection v-bind="about"/>
        <FooterMenuSection v-bind="team"/>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-8">
        <FooterMenuSection v-bind="legal"/>
    </div>
    </div>
</template>

<script>
import FooterMenuSection from "@/components/footermenusection";
export default {
    name: "FooterMenu",
    components: {
        FooterMenuSection
    },
    data() {
        return {
            about : {
                classLst : '',
                name : 'About',
                items : [
                    {
                        id: 1, 
                        text: 'Research', 
                        url: '/research'
                    },
                    {
                        id: 2, 
                        text: 'Publications', 
                        url: '/publications'
                    },
                    {
                        id: 3,
                        text: 'Contact',
                        url: "/contact"                        
                    },
                    {
                        id: 4,
                        text: 'Bio',
                        url: "/bio"                        
                    }
                ]                
            },
            team : {
                classLst : 'mt-12 md:mt-0',
                name : 'Team',
                items : [
                    {
                        id: 1,
                        text: 'People',
                        url: "/people"
                    },
                    {
                        id: 2,
                        text: 'Collaborations',
                        url: "/collaborations"
                    }
                ]
            },
            legal : {
                classLst : '',
                name : 'Legal',
                items : [
                    {
                        id: 1,
                        text: 'Terms',
                        url: "/terms"
                    },
                    {
                        id: 2,
                        text: 'Privacy',
                        url: "/privacy"
                    }
                ]
            }
        }
    }
}
</script>