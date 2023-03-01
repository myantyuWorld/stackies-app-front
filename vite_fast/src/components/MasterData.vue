<script setup lang="ts">
import { ref } from 'vue';

const data = defineProps<{
  itemBadgeColor: string,
  name: string,
  list: object
}>()

</script>
<template>
  <div class="rounded-xl bg-white shadow-xl p-6 my-6">
    <div class="container px-5 py-1 mx-auto my-auto">
      <h2 class="mb-8 text-xl text-cyan-900 font-bold">{{ name }}
        <!-- TODO：本画面で、言語など追加できるようにする -->
        <!-- <button
          class="text-sm ml-6 px-4 py-2 bg-gray-400  text-white rounded-lg  tracking-wider hover:bg-gray-500 outline-none">Add</button> -->
      </h2>
    </div>
    <div class="flex flex-wrap w-full">
      <!-- // TODO: MasterDataItemのチェック状態を、"checkedValues"に格納できない -->
      <!-- <MasterDataItem :id="item.name" :value="item.value" :name=item.name :checked="item.checked" v-for="item of itemList" :key="item.name" @checkValue="checkItem" v-model="checkedValues"/> -->

      <!-- この書き方なら、"checkedValues"に値を配列で格納できる -->
      <div class="w-1/4 items-center mb-4" v-for="item of list" :key="item.name">
        <input :id="item.id" type="checkbox" :value="item.id" v-model="item.checked"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label :for="item.id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.name }}</label>
      </div>
    </div>
  </div>

</template>