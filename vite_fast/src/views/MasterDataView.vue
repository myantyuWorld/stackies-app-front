<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import MasterData from '../components/MasterData.vue'
import Loading from '../components/Loading.vue'



const languageList = ref([
  // {
  //   name: "Java",
  //   value: "1",
  //   checked: false
  // },
  // {
  //   name: "C#",
  //   value: "2",
  //   checked: false
  // },
  // {
  //   name: "Python",
  //   value: "3",
  //   checked: false
  // },
  // {
  //   name: "Javascript",
  //   value: "4",
  //   checked: false
  // },
  // {
  //   name: "aaa",
  //   value: "5",
  //   checked: false
  // },
  // {
  //   name: "bbb",
  //   value: "6",
  //   checked: false
  // },
  // {
  //   name: "ccc",
  //   value: "7",
  //   checked: false
  // },
])
const toolList = ref([
  // {
  //   name: "Docker",
  //   value: "1",
  //   checked: false
  // },
  // {
  //   name: "AWS CLI",
  //   value: "2",
  //   checked: false
  // },
  // {
  //   name: "VS Code",
  //   value: "3",
  //   checked: false
  // },
])
const infraList = ref([
  // {
  //   name: "Windows",
  //   value: "1",
  //   checked: false
  // },
  // {
  //   name: "Linux",
  //   value: "2",
  //   checked: false
  // },
  // {
  //   name: "AWS ECS",
  //   value: "3",
  //   checked: false
  // },
])

const isShowLoading = ref(false)

const fetchTechnologies = () => {
  const promise = axios.get("http://localhost:18000/api/v2/technologies")
  promise
    .then((response) => {
      console.log(response.data)
      languageList.value = response.data.languageList
      toolList.value = response.data.toolList
      infraList.value = response.data.infraList
    })
    .then(() => {
      // TODO : reactiveな変数に取得結果を格納する
    })
    .catch((e) => {
      alert(e.message)
    })
}
fetchTechnologies()
const click_regist = () => {
  console.log(languageList.value.filter(x => x.checked))
  console.log(toolList.value.filter(x => x.checked))
  console.log(infraList.value.filter(x => x.checked))
  new Promise((resolve) => {
    isShowLoading.value = true
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => {
    isShowLoading.value = false
    // TODO : バリデーションエラーがない場合、APIリクエストする
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
              <MasterData :list=languageList name="言語" itemBadgeColor="blue"
                :class="[isShowLoading ? 'opacity-40' : '']" />

              <MasterData :list=toolList name="DB・ツール" itemBadgeColor="rose"
                :class="[isShowLoading ? 'opacity-40' : '']" />

              <MasterData :list=infraList name="動作環境" itemBadgeColor="lime"
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