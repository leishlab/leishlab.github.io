<template>
    <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
        <img class="absolute inset-0 h-full w-full object-cover" :src="img_src" :alt="img_alt" />
        <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
        <div class="relative px-8">
            <!--div>
            <img class="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation" />
            </div-->
            <blockquote class="mt-8">
            <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                    {{testimonial}}
                </p>
            </div>

            <footer class="mt-4">
                <p class="text-base font-semibold text-indigo-200">{{person_title}}</p>
            </footer>
            </blockquote>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BackGroundImage',
    props: {
        img_src: {
            type: String,
            required: true,
        },
        img_alt: {
            type: String,
            required: true,
        },
        testimonial: {
            type: String,
            required: true,
        },
        person_title: {
            type: String,
            required: true,
        }
    }
}
</script>