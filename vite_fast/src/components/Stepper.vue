<script setup lang="ts">
import { useStacikesStore } from '@/stores/store'
const stakiesStore = useStacikesStore();
</script>
<template>
  <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
    <li 
      class="w-1/3 flex items-center space-x-2.5"
      :class="[stakiesStore.stepperStatus == 1 ? 'text-purple-700 dark:text-purple-600' : 'text-gray-600 dark:text-gray-400']"
      >
      <span
        class="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 "
        :class="[stakiesStore.stepperStatus == 1 ? 'border-purple-700 dark:border-purple-600' : 'border-gray-600 dark:border-gray-400']"
        >
        1
      </span>
      <span>
        <RouterLink to="/master">経験技術の登録
          <p class="text-sm">経験のある言語、ツールを選択し、登録ボタンをクリック</p>
        </RouterLink>
      </span>
    </li>
    <li 
      class="w-1/3 flex items-center space-x-2.5"
      :class="[stakiesStore.stepperStatus == 2 ? 'text-purple-700 dark:text-purple-600' : 'text-gray-600 dark:text-gray-400']"
      >
      <span
        class="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 "
        :class="[stakiesStore.stepperStatus == 2 ? 'border-purple-700 dark:border-purple-600' : 'border-gray-600 dark:border-gray-400']"
        >
        2
      </span>
      <span>
        <RouterLink to="/register">基本能力の登録
          <p class="text-sm">あなたの経歴概要と、「経験技術の登録」で選択した技術のレベルを選択し、登録ボタンをクリック</p>
        </RouterLink>
      </span>
    </li>
    <li 
      class="w-1/3 flex items-center space-x-2.5"
      :class="[stakiesStore.stepperStatus == 3 ? 'text-purple-700 dark:text-purple-600' : 'text-gray-600 dark:text-gray-400']"
      >
      <span
        class="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 "
        :class="[stakiesStore.stepperStatus == 3 ? 'border-purple-700 dark:border-purple-600' : 'border-gray-600 dark:border-gray-400']"
        >
        3
      </span>
      <span>
        <RouterLink to="/projects">案件対応履歴の表示
          <p class="text-sm">新規で案件対応を追加したい場合は、「業務履歴」横の追加ボタンから登録</p>
        </RouterLink>
      </span>
    </li>
  </ol>
</template>