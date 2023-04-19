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

            <div class="rounded-xl bg-white shadow-xl">
              <div class="rounded-xl bg-white shadow-xl">


                <div class="w-full px-4 shadow-none flex flex-wrap ">
                  <div class="p-1 w-1/2">
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
                  <div class="p-1 w-1/2">
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
                </div>


                <div class="w-full px-4 shadow-none flex flex-wrap ">
                  <div class="p-1 w-1/2">
                    <div>
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
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
                  <div class="p-1 w-1/2">
                    <div>
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
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
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        システム名
                      </label>
                      <InputComponent :input-mode="false" placeholder="" />
                    </div>
                  </div>
                  <div class="p-1 w-1/2">
                    <div>
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        氏名
                      </label>
                      <InputComponent :input-mode="false" placeholder="" />
                    </div>
                  </div>
                </div>


                <div class="w-full px-4 shadow-none flex flex-wrap ">
                  <div class="p-1 w-1/2">
                    <div>
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        システム名
                      </label>
                      <input type="date" name="date"
                        class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800">
                    </div>
                  </div>
                  <div class="p-1 w-1/2">
                    <div>
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        氏名
                      </label>
                      <input type="date" name="date"
                        class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800">
                    </div>
                  </div>
                </div>


                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button type="button" @click="clickSearchProjects"
                    class=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">追加</button>
                  <button data-modal-hide="staticModal" type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">キャンセル</button>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
