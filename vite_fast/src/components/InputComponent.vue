<script setup lang="ts">

const data = defineProps<{
  inputMode: boolean,
  value: string,
  placeholder: string
}>()

</script>
<template>
  <input type="text"
    class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800"
    :placeholder="data.placeholder" v-model="data.value"
    :class="{'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none' : data.inputMode}"
    :disabled="data.inputMode">
</template>