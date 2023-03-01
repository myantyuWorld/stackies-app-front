<script setup lang="ts">
import { ref } from 'vue';

const data = defineProps<{
  name:string,
  value:string,
}>()

// $emit('checkValue', $event.target.value)
// emit = 子から、親に値を渡すときに使用
// こういうイベントで、こういう値を渡すので、親側で、それをフックするイベントで値を取得する、という感じ
</script>
<template>
  <div class="w-1/4 items-center mb-4">
    <input :id="name" type="checkbox" :value="value" @input="$emit('checkValue', $event.target.value)" 
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label :for="name" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ name }}</label>
  </div>
</template>