<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import MasterData from '../components/MasterData.vue'
import Loading from '../components/Loading.vue'
import { useStore } from '@/stores/store' 
import { toRefs } from 'vue';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import {useStacikesStore} from '@/stores/store'

const stakiesStore = useStacikesStore();
// https://ui.docs.amplify.aws/vue/connected-components/authenticator/headless
const { route, user, signOut } = toRefs(useAuthenticator());
const isShowLoading = ref(false)

const init = () => {
  stakiesStore.fetchTechnologies()
  stakiesStore.fetchExperienceTechnologies(user.value.username)
}
init()

// const languageList = ref([])
// const toolList = ref([])
// const infraList = ref([])


/**
 * 技術マスタから技術レコードを取得する
 */
// const fetchTechnologies = () => {
//   isShowLoading.value = true
//   const promise = axios.get(`${import.meta.env.VITE_APP_API_URL}technologies`)
//   promise
//     .then((response) => {
//       console.log(response.data)
//       let list: { category: string; name: string; }[] = []
//       let list2: { category: string; name: string; }[] = []
//       let list3: { category: string; name: string; }[] = []
//       response.data.filter((value: String) => {
//         return value["category"]["S"] === "1"
//       }).forEach((item: any) => {
//         list.push({
//           "category": item["category"]["S"],
//           "name": item["name"]["S"]
//         })
//       });
//       response.data.filter((value: String) => {
//         return value["category"]["S"] === "2"
//       }).forEach((item: any) => {
//         list2.push({
//           "category": item["category"]["S"],
//           "name": item["name"]["S"]
//         })
//       });
//       response.data.filter((value: String) => {
//         return value["category"]["S"] === "3"
//       }).forEach((item: any) => {
//         list3.push({
//           "category": item["category"]["S"],
//           "name": item["name"]["S"]
//         })
//       });
//       // データ加工
//       return Promise.resolve({
//         list,
//         list2,
//         list3
//       })
//     })
//     .then((data) => {
//       languageList.value = data.list
//       infraList.value = data.list2
//       toolList.value = data.list3
//       isShowLoading.value = false
//     })
//     .catch((e) => {
//       alert(e.message)
//       isShowLoading.value = false
//     })
// }
// fetchTechnologies()

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
    isShowLoading.value = true
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    axios.post(`${import.meta.env.VITE_APP_API_URL}experience_technology`, {
      "user_id" : user.value.username,
      "data" : data
    })
    .then((response) => {
      console.log(response)
      isShowLoading.value = false
    }).catch(error => {
      isShowLoading.value = false
    })
  });
  // router.push('menu')
}

// TODO : Vue.js: 子コンポーネントのチェックボックスを双方向にデータバインディングする | https://qiita.com/FumioNonaka/items/709360072e9f645447f8
</script>

<template>
  <div class="bg-gradient-to-br ">
    <div class="flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="relative container m-auto px-0 text-gray-500 md:px-0 xl:px-12">
        <div class="m-auto">
          <Loading :is-show="isShowLoading" />

          <div class="rounded-xl bg-white shadow-xl">

            <div class="p-3 sm:p-8">

              <div class="">
                <h2 class="text-2xl text-cyan-900 font-bold" :class="[isShowLoading ? 'opacity-40' : '']">経験技術の登録</h2>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  :class="[isShowLoading ? 'opacity-40' : '']">
                  あなたがこれまで経験してきた技術を選択して、登録しましょう。
                </p>
              </div>
              <MasterData :list=stakiesStore.languageList name="言語" itemBadgeColor="blue"
                :class="[isShowLoading ? 'opacity-40' : '']" />

              <MasterData :list=stakiesStore.toolList name="DB・ツール" itemBadgeColor="rose"
                :class="[isShowLoading ? 'opacity-40' : '']" />

              <MasterData :list=stakiesStore.infraList name="動作環境" itemBadgeColor="lime"
                :class="[isShowLoading ? 'opacity-40' : '']" />

            </div>
            <button @click="click_regist" :class="[isShowLoading ? 'opacity-40' : '']"
              class="m-3 p-3 bg-green-500 text-white w-full rounded hover:bg-green-600">更新</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>