<script setup lang="ts">
import ProjectListDetail from './ProjectListDetail.vue'

defineProps<{
  businessHistories: Object
}>()

</script>
<template>
  <div class="m-4">
    <!-- https://flowbite.com/docs/components/tables/#table-caption -->
    <div class="w-full flex">
      <caption class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        あなたがこれまで経験してきた案件です。
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          hogehogeふがふが
        </p>
      </caption>
    </div>
    <!-- https://flowbite.com/docs/components/tables/#table-filter -->
    <table
      class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 table-auto">
      <thead class="text-cyan-900">

        <!-- SP版にした際に、表示する場合、明細件数と同じ数のヘッダーが必要 -->
        <tr class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
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
</template>