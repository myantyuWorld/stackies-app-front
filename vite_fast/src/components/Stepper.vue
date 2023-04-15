<script setup lang="ts">
</script>
<template>
  <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
    <li class="w-1/3 flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
      <span
        class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
        1
      </span>
      <span>
        <RouterLink to="/master">経験技術の登録
          <p class="text-sm">経験のある言語、ツールを選択し、登録ボタンをクリック</p>
        </RouterLink>
      </span>
    </li>
    <li class="w-1/3 flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
      <span
        class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
        2
      </span>
      <span>
        <RouterLink to="/register">基本能力の登録
          <p class="text-sm">あなたの経歴概要と、「経験技術の登録」で選択した技術のレベルを選択し、登録ボタンをクリック</p>
        </RouterLink>
      </span>
    </li>
    <li class="w-1/3 flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
      <span
        class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
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