<script setup lang="ts">
import router from '@/router';
import { ref, toRefs } from 'vue';
import { onMounted } from 'vue'
import { initModals } from 'flowbite'
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, minLength, alpha } from '@vuelidate/validators';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import { DataAlreadyAcceptedException } from '@aws-sdk/client-cloudwatch-logs';
const { route, user, signOut } = toRefs(useAuthenticator());
console.log(user.value.username) // "hogehoge"
import axios from 'axios';

import ExperienceRating from '../components/ExperienceRating.vue'
import Loading from '../components/Loading.vue'
import Rating from '../components/Rating.vue'
import BaseInfo from '../components/BaseInfo.vue'
import { respond } from 'xstate/lib/actions';

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
    self_pr: ""
  },
  experienceRateInfo: []
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
  self_pr: { required }
}
const v$ = useVuelidate(rules, data.value.baseinfo)

const fetchExperienceTechnologies = () => {
  axios.get(`${import.meta.env.VITE_APP_API_URL}experience_technology?user_id=${user.value.username}`)
  .then((response) => {
    data.value.experienceRateInfo = response.data
  }) 
}
fetchExperienceTechnologies()

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
    // router.push('projects')
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
            <div class="p-3 sm:p-3">
              <div class="space-y-4">
              </div>
              <div class="flex bg-white">
                <BaseInfo :v$="v$" :inputMode="inputMode" :baseInfo="data.baseinfo"
                  :class="[isShowLoading ? 'opacity-40' : '']" />
              </div>
            </div>
            <div class="p-6 sm:p-6">
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