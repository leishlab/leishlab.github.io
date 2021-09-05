<template>
    <div :class="classLst" class="">
        <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {{name}}
        </h3>
        <ul role="list" class="mt-4 space-y-4">
            <li v-for="item in items" :key="item.id">
                <a :href="item.url" class="text-base text-gray-500 hover:text-gray-900">
                    {{item.text}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "FooterMenuSection",
    props: {
        classLst : { 
            type: String,
            required: true
            },
        name : {
            type: String,
            required: true
        },
        items : {
            type: Array,
            required: true,
            default: () => [{
                id: 0,
                url: '',
                text: ''
            }]
        }
    }
}
</script>