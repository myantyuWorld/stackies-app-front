<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import MasterData from '../components/MasterData.vue'
import Loading from '../components/Loading.vue'
import { toRefs } from 'vue';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import {useStacikesStore} from '@/stores/store'

const stakiesStore = useStacikesStore();
// https://ui.docs.amplify.aws/vue/connected-components/authenticator/headless
const { route, user, signOut } = toRefs(useAuthenticator());

const init = () => {
  stakiesStore.fetchTechnologies()
  stakiesStore.fetchExperienceTechnologies(user.value.username)
}
init()

/**
 * 経験のある技術を選択した結果を、APIリクエストする
 */
const click_regist = () => {
  console.log("=====")
  console.log("click_regist")
  console.log("=====")

  var selected_list = stakiesStore.languageList.filter(x => x.checked)
  selected_list.push(stakiesStore.toolList.filter(x => x.checked))
  selected_list.push(stakiesStore.infraList.filter(x => x.checked))
  console.log(selected_list.flat(2))

  var data: { name: any; category: any; level: string; }[] = []
  selected_list.flat(2).forEach((item) => {
    data.push({
      "name" : item.name,
      "category" : item.category,
      "level" : "1"
    })
  })

  new Promise((resolve) => {
    stakiesStore.showLoading()
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    axios.post(`${import.meta.env.VITE_APP_API_URL}experience_technology`, {
      "user_id" : user.value.username,
      "data" : data
    })
    .then((response) => {
      stakiesStore.hideLoading()

      router.push('menu')
    }).catch(error => {
      stakiesStore.hideLoading()
    })
  });
}

// TODO : Vue.js: 子コンポーネントのチェックボックスを双方向にデータバインディングする | https://qiita.com/FumioNonaka/items/709360072e9f645447f8
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