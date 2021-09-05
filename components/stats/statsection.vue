<template>
    <div class="mt-10">
        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
        <div v-for="stat in stats" :key="stat.id" class="border-t-2 border-gray-100 pt-6">
            <dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>
            <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ stat.value }}</dd>
        </div>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'StatsSection',
    props: {
        stats: {
            type: Array,
            required: false,
            default: () => [
                {
                    id: 0,
                    label: 'Label',
                    value: 'Value'
            }]
        }
    }
}
</script>