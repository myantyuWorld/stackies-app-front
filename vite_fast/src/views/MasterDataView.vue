<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import MasterData from '../components/MasterData.vue'
import Loading from '../components/Loading.vue'
import { toRefs } from 'vue';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import {useStacikesStore} from '@/stores/store'
import { staticBlock } from '@babel/types';

const stakiesStore = useStacikesStore();
// https://ui.docs.amplify.aws/vue/connected-components/authenticator/headless
const { route, user, signOut } = toRefs(useAuthenticator());

const init = () => {
  stakiesStore.fetchTechnologies()
  stakiesStore.fetchExperienceTechnologies(user.value.username)
}
const click_regist = () => {
  stakiesStore.putExperienceTechnologies(user.value.username)
}

init()

// TODO : piniaにローディング変数を移植して、ローディングアニメーションが効かなくなった
</script>

<template>
  <div class="bg-gradient-to-br ">
    <div class="flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="relative container m-auto px-0 text-gray-500 md:px-0 xl:px-12">
        <div class="m-auto">
          <Loading :is-show="stakiesStore.isLoading()" />

          <div class="rounded-xl bg-white shadow-xl">

            <div class="p-3 sm:p-8">

              <div class="">
                <h2 class="text-2xl text-cyan-900 font-bold" :class="[stakiesStore.isLoading() ? 'opacity-40' : '']">経験技術の登録</h2>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  :class="[stakiesStore.isLoading() ? 'opacity-40' : '']">
                  あなたがこれまで経験してきた技術を選択して、登録しましょう。
                </p>
              </div>
              <MasterData :list=stakiesStore.languageList name="言語" itemBadgeColor="blue"
                :class="[stakiesStore.isLoading() ? 'opacity-40' : '']" />

              <MasterData :list=stakiesStore.toolList name="DB・ツール" itemBadgeColor="rose"
                :class="[stakiesStore.isLoading() ? 'opacity-40' : '']" />

              <MasterData :list=stakiesStore.infraList name="動作環境" itemBadgeColor="lime"
                :class="[stakiesStore.isLoading() ? 'opacity-40' : '']" />

            </div>
            <button @click="click_regist" :class="[stakiesStore.isLoading() ? 'opacity-40' : '']"
              class="m-3 p-3 bg-green-500 text-white w-full rounded hover:bg-green-600">更新</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>