<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { onMounted } from 'vue'
import { initModals } from 'flowbite'
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, minLength, alpha } from '@vuelidate/validators';

import ExperienceRating from '../components/ExperienceRating.vue'
import Loading from '../components/Loading.vue'
import Rating from '../components/Rating.vue'
import BaseInfo from '../components/BaseInfo.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initModals();
})

/**
 * データ
 */
const data = ref({
  baseinfo: {
    initial: "",
    birth_date: "1990-08-20",
    last_educational_background: "ほげほげ専門学校",
    qualification: "応用情報技術者, AWS CLF",
    postcode: "7310102",
    address: "広島県広島市hogehogeのほげ",
    self_pr: ""
  },
  experienceRateInfo: [
    {
      id: "1",
      name: "Java",
      level: "3",
    },
    {
      id: "2",
      name: "C#",
      level: "3",
    },
    {
      id: "3",
      name: "javascript",
      level: "3",
    }
  ]
})
const isShowLoading = ref(false)
const inputMode = ref(false)

/**
 * バリデーションルール
 */
const rules = {
  initial: { required, minLength: minLength(2), maxLength: maxLength(2), alpha },
  birth_date: { required },
  last_educational_background: { required },
  qualification: { required },
  postcode: { required, minLength: minLength(7), maxLength: maxLength(7) },
  address: { required },
  self_pr: { required }
}
const v$ = useVuelidate(rules, data.value.baseinfo)

const click_regist = async () => {
  inputMode.value = true
  console.log(data.value)
  const result = await v$.value.$validate();
  console.log('result', result);
  console.log('$errors', v$.value.$errors);

  if (!result) {
    inputMode.value = false
    return
  }
  new Promise((resolve) => {
    isShowLoading.value = true
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => {
    isShowLoading.value = false
    // TODO : バリデーションエラーがない場合、APIリクエストする
    router.push('projects')
  });

}

</script>

<template>
  <div class="py-8 bg-gradient-to-br">
    <div class="flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="relative container m-auto px-0 text-gray-500 md:px-0 xl:px-12">
        <Loading :is-show="isShowLoading" />
        <div class="m-auto">
          <div class="rounded-xl bg-white shadow-xl">
            <div class="p-6 sm:p-6">
              <div class="space-y-4">
                <h2 class="mb-0 text-2xl text-cyan-900 font-bold" :class="[isShowLoading ? 'opacity-40' : '']">基本能力登録
                </h2>
              </div>
              <div class="flex bg-white">
                <BaseInfo :v$="v$" :inputMode="inputMode" :baseInfo="data.baseinfo"
                  :class="[isShowLoading ? 'opacity-40' : '']" />
              </div>
            </div>
            <div class="p-6 sm:p-6">

              <div class="space-y-0">
                <h2 class="mb-0 text-2xl text-cyan-900 font-bold" :class="[isShowLoading ? 'opacity-40' : '']">
                  経験技術
                  <!-- <button data-modal-toggle="defaultModal" data-modal-target="defaultModal"
                    class="text-sm ml-6 px-4 py-2 bg-gray-400  text-white rounded-lg  tracking-wider hover:bg-gray-500 outline-none">ToggleModal</button> -->
                </h2>
                <div id="accordion-flush" data-accordion="collapse"
                  data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  data-inactive-classes="text-gray-500 dark:text-gray-400">
                  <h2 id="accordion-flush-heading-1" :class="[isShowLoading ? 'opacity-40' : '']">
                    <button type="button"
                      class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                      data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                      aria-controls="accordion-flush-body-1">
                      <span>技術レベルの目安</span>
                      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1" class=" bg-gray-50"
                    aria-labelledby="accordion-flush-heading-1"
                    :class="[isShowLoading ? 'opacity-40' : '']">
                    <div class="flex flex-wrap justify-items-center"
                    >

                      <div class="w-1/4 p-1">
                        <Rating rate="1" />
                      </div>
                      <div class="w-1/4 p-1">
                        知識レベル
                      </div>
                      <div class="w-1/4 p-1">
                        <Rating rate="2" />
                      </div>
                      <div class="w-1/4 p-1">
                        開発経験あり
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-items-center">
                      <div class="w-1/4 p-1">
                        <Rating rate="3" />
                      </div>
                      <div class="w-1/4 p-1">
                        開発可能
                      </div>
                      <div class="w-1/4 p-1">
                        <Rating rate="4" />
                      </div>
                      <div class="w-1/4 p-1">
                        技術精通
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-items-center">
                      <div class="w-1/4 p-1">
                        <Rating rate="5" />
                      </div>
                      <div class="w-1/4 p-1">
                        指導可能
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div class="flex bg-white">
                <div class="w-full px-4 shadow-none">
                  <!-- イニシャル、住所、資格（名前、取得時期）、学歴、生年月日、自己PR） -->

                  <div class="mt-5">
                    <!-- tabs -->
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password" :class="[isShowLoading ? 'opacity-40' : '']">
                      経験
                    </label>
                    <div class="grid grid-cols-2">

                      <div v-for="item in data.experienceRateInfo" :key="item.id">
                        <ExperienceRating :is-show="true" :rate="item" v-model="item.level"
                        :class="[isShowLoading ? 'opacity-40' : '']" />
                      </div>
                    </div>
                  </div>

                  <div class="mt-10">
                    <button @click="click_regist"
                      class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600">登録</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>





</template>