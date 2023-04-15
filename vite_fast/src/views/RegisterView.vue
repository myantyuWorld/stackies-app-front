<script setup lang="ts">
import router from '@/router';
import { ref, toRefs } from 'vue';
import { onMounted } from 'vue'
import { initModals } from 'flowbite'
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, minLength, alpha } from '@vuelidate/validators';
import { useStacikesStore } from '@/stores/store'
import axios from 'axios';
import ExperienceRating from '../components/ExperienceRating.vue'
import Loading from '../components/Loading.vue'
import Rating from '../components/Rating.vue'
import BaseInfo from '../components/BaseInfo.vue'
import { rejects } from 'assert';
const stakiesStore = useStacikesStore();

// initialize components based on data attribute selectors
onMounted(() => {
  initModals();
})
stakiesStore.hideLoading()
stakiesStore.stepperStatus = 2

/**
 * データ
 */
const rules = {
  initial: { required, minLength: minLength(2), maxLength: maxLength(2), alpha },
  birth_date: { required },
  last_educational_background: { required },
  qualification: { required },
  self_pr: { required }
}
const v$ = useVuelidate(rules, stakiesStore.baseinfo)
const isShowLoading = ref(false)
const inputMode = ref(false)

/**
 * バリデーションルール
 */

const click_regist = async () => {
  inputMode.value = true
  const result = await v$.value.$validate();

  if (!result) {
    inputMode.value = false
    stakiesStore.hideLoading();

    return
  }
  new Promise((resolve, reject) => {
    stakiesStore.showLoading();
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    axios.post(`${import.meta.env.VITE_APP_API_URL}base_info`, {
      data: {
        baseinfo: stakiesStore.baseinfo,
        experienceRateInfo: stakiesStore.experienceRateInfo
      }
    })
      .then((response) => {
        console.log(response)
        router.push('projects')
      })
      .catch((e) => {
        console.log(e);
        inputMode.value = false;
        stakiesStore.hideLoading();
      })
  });
}

</script>

<template>
  <div class="py-8 bg-gradient-to-br">
    <div class="flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0">
      <div class="text-gray-500 md:px-0 xl:px-12">
        <Loading :is-show="stakiesStore.isLoading()" />
        <div class="m-auto">
          <div class="rounded-xl bg-white shadow-xl">
            <div class="p-3 sm:p-3">
              <div class="space-y-4">
              </div>
              <div class="flex bg-white">
                <BaseInfo :v$="v$" :inputMode="inputMode" :baseInfo="stakiesStore.baseinfo" />
              </div>
            </div>
            <div class="p-6 sm:p-6">
              <div class="flex bg-white">
                <div class="w-full px-4 shadow-none">
                  <!-- イニシャル、住所、資格（名前、取得時期）、学歴、生年月日、自己PR） -->

                  <div class="mt-5">
                    <!-- tabs -->
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      経験
                    </label>
                    <div class="grid grid-cols-2">
                      <div v-for="item in stakiesStore.experienceRateInfo" :key="item.id">
                        <ExperienceRating :is-show="true" :rate="item" v-model="item.level" />
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