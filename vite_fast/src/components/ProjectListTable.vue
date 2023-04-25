<script setup lang="ts">
import { useStacikesStore } from '@/stores/store'
import ProjectListDetail from './ProjectListDetail.vue'
const stakiesStore = useStacikesStore();

defineProps<{
  businessHistories: Object
}>()

</script>
<template>
  <div class="m-4">
    <!-- https://flowbite.com/docs/components/tables/#table-caption -->
    <div class="relative overflow-x-auto shadow-lg sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Our products
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed
            to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              対応者、システム名
            </label>
            <!-- <InputComponent :value="stakiesStore.search" :input-mode="false" placeholder=""/> -->
            <input
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800"
              type="text" v-model="stakiesStore.search">
        </caption>
        <thead class="text-cyan-900">

          <!-- SP版にした際に、表示する場合、明細件数と同じ数のヘッダーが必要 -->
          <tr class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th colspan="2" class="p-4 text-center text-sm">対応者</th>
            <th colspan="2" class="p-4 text-center text-sm">システム名</th>
            <th colspan="12" class="p-4 text-center text-sm">業務概要</th>
          </tr>
          <tr class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th rowspan="2" class="p-2 text-center text-sm">業種</th>
            <th rowspan="2" class="p-2 text-center text-sm">期間</th>
            <th rowspan="2" class="p-2 text-center text-sm">言語</th>
            <th rowspan="2" class="p-2 text-center text-sm">DB/Tool</th>
            <th rowspan="2" class="p-2 text-center text-sm">動作環境</th>
            <th colspan="7" class="p-2 text-center text-sm">作業工程</th>
            <th rowspan="2" class="p-2 text-center text-sm">役割</th>
          </tr>
          <tr class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th rowspan="" class="p-2 text-center text-sm">分析</th>
            <th rowspan="" class="p-2 text-center text-sm">要件</th>
            <th rowspan="" class="p-2 text-center text-sm">基本</th>
            <th rowspan="" class="p-2 text-center text-sm">詳細</th>
            <th rowspan="" class="p-2 text-center text-sm">製造</th>
            <th rowspan="" class="p-2 text-center text-sm">評価</th>
            <th rowspan="" class="p-2 text-center text-sm">運用</th>
          </tr>


        </thead>
        <tbody class="flex-1 sm:flex-none">
          <ProjectListDetail v-for="item in businessHistories" :key="item" :business-history="item" />
        </tbody>
      </table>
    </div>
  </div>
</template>