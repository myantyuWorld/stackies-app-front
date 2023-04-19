<script setup lang="ts">
import { useStacikesStore } from '@/stores/store'
import InputComponent from '@/components/InputComponent.vue'
const stakiesStore = useStacikesStore();
</script>

<template>
  <main>
    <div class="bg-gradient-to-br ">
      <div class="flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <div class="text-gray-500 md:px-0 xl:px-12">
          <div class="m-auto">

            <div class="rounded-xl bg-white shadow-xl p-3">


              <!-- 検索条件 start -->
              <div class="w-full px-4 shadow-none flex flex-wrap ">
                <div class="p-1 w-full">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    業種
                  </label>
                  <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0">公共</option>
                    <option value="1">建築</option>
                    <option value="2">金融</option>
                    <option value="3">新聞</option>
                    <option value="4">フィットネス</option>
                    <option value="5">業種５</option>
                    <option value="6">業種６</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 shadow-none flex flex-wrap ">
                <div class="p-1 w-1/3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    言語
                  </label>
                  <select multiple id="languagies"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="stakiesStore.projectInfo.language">
                    <option v-for="item of stakiesStore.languageList" :key="item.name" :value="item.name">{{ item.name
                    }}
                    </option>
                  </select>
                </div>
                <div class="p-1 w-1/3">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      DB/Tool
                    </label>
                    <select multiple id="tools"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="stakiesStore.projectInfo.tools">
                      <option v-for="item of stakiesStore.toolList" :key="item.name" :value="item.name">{{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="p-1 w-1/3">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      動作環境
                    </label>
                    <select multiple id="infra"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="stakiesStore.projectInfo.infra">
                      <option v-for="item of stakiesStore.infraList" :key="item.name" :value="item.name">{{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>


              <div class="w-full px-4 shadow-none flex flex-wrap ">
                <div class="p-1 w-1/2">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      システム名
                    </label>
                    <InputComponent :input-mode="false" placeholder="" />
                  </div>
                </div>
                <div class="p-1 w-1/2">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      氏名
                    </label>
                    <InputComponent :input-mode="false" placeholder="" />
                  </div>
                </div>
              </div>


              <div class="w-full px-4 shadow-none flex flex-wrap ">
                <div class="p-1 w-1/2">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      期間(From)
                    </label>
                    <input type="date" name="date"
                      class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800">
                  </div>
                </div>
                <div class="p-1 w-1/2">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      期間(To)
                    </label>
                    <input type="date" name="date"
                      class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800">
                  </div>
                </div>
              </div>
              <div class="w-full px-4 shadow-none flex flex-wrap ">
                <div class="p-1 w-1/2">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    フェーズで検索
                  </label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                  <input type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1">
                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">要件定義</label>
                </div>
                <div class="p-1 w-1/2">
                  <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      役割
                    </label>
                    <select id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="stakiesStore.projectInfo.role">
                      <option value="0">メンバー</option>
                      <option value="1">テックリード</option>
                      <option value="2">SPL</option>
                      <option value="3">PL</option>
                      <option value="4">PM</option>
                    </select>
                  </div>
                </div>
              </div>


              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button type="button" @click="clickSearchProjects"
                  class=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">追加</button>
                <button data-modal-hide="staticModal" type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">キャンセル</button>
              </div>


              <div class="w-full px-4 shadow-none flex flex-wrap ">
                <div class="m-1">
                  <button type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    公共
                    <span
                      class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                      2
                    </span>
                  </button>
                </div>
                <div class="m-1">
                  <button type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    C#
                    <span
                      class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                      10
                    </span>
                  </button>
                </div>
                <div class="m-1">
                  <button type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    AWS Lambda
                    <span
                      class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                      10
                    </span>
                  </button>
                </div>

              </div>
              <!-- 案件対応履歴　検索結果 -->

              <div class="m-4">
                <!-- https://flowbite.com/docs/components/tables/#table-caption -->
                <div class="w-full flex">
                  <caption
                    class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    会社にスタックされた案件・技術情報の結果です。
                  </caption>
                </div>
                <!-- https://flowbite.com/docs/components/tables/#table-filter -->
                <table
                  class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 table-auto">
                  <thead class="text-cyan-900">

                    <!-- SP版にした際に、表示する場合、明細件数と同じ数のヘッダーが必要 -->
                    <tr
                      class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th colspan="2" class="p-4 text-center text-sm">システム名</th>
                      <th colspan="2" class="p-4 text-center text-sm">対応者</th>
                      <th colspan="12" class="p-4 text-center text-sm">業務概要</th>
                    </tr>
                    <tr
                      class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th rowspan="2" class="p-2 text-center text-sm">業種</th>
                      <th rowspan="2" class="p-2 text-center text-sm">期間</th>
                      <th rowspan="2" class="p-2 text-center text-sm">言語</th>
                      <th rowspan="2" class="p-2 text-center text-sm">DB/Tool</th>
                      <th rowspan="2" class="p-2 text-center text-sm">動作環境</th>
                      <th colspan="7" class="p-2 text-center text-sm">作業工程</th>
                      <th rowspan="2" class="p-2 text-center text-sm">役割</th>
                    </tr>
                    <tr
                      class="bg-gray-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
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
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">建材</td>
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">ほげたろう</td>
                      <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
                        階段、床の拾い、および、その見積もりデータ作成サブシステムの開発を実施</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">建材</td>
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">ほげたろう</td>
                      <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
                        階段、床の拾い、および、その見積もりデータ作成サブシステムの開発を実施</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">建材</td>
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">ほげたろう</td>
                      <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
                        階段、床の拾い、および、その見積もりデータ作成サブシステムの開発を実施</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">建材</td>
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">ほげたろう</td>
                      <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
                        階段、床の拾い、および、その見積もりデータ作成サブシステムの開発を実施</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">建材</td>
                      <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">ほげたろう</td>
                      <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
                        階段、床の拾い、および、その見積もりデータ作成サブシステムの開発を実施</td>
                    </tr>
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">Test}</td>
                      <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">Test</td>
                    </tr>
                  </tbody>
                </table>
                <div class="flex flex-col items-center">
                  <!-- Help text -->
                  <span class="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span
                      class="font-semibold text-gray-900 dark:text-white">10</span> of <span
                      class="font-semibold text-gray-900 dark:text-white">100</span> Entries
                  </span>
                  <!-- Buttons -->
                  <div class="inline-flex mt-2 xs:mt-0">
                    <button
                      class="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Prev
                    </button>
                    <button
                      class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Next
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
