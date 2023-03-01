<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue'
import { initDropdowns, initModals, Modal } from 'flowbite'
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, minLength, alpha } from '@vuelidate/validators';

import ProjectListTable from '../components/ProjectListTable.vue'
import Loading from '../components/Loading.vue'
import BaseInfo from '../components/BaseInfo.vue'
import ExperienceRating from '../components/ExperienceRating.vue'
import InputComponent from '../components/InputComponent.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();
  initModals();
})

// https://flowbite.com/docs/components/modal/
const $targetEl = document.getElementById('modalEl');
// options with default values
const options = {
  placement: 'bottom-right',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  closable: true,
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};
const modal = new Modal($targetEl, options);

const data = {
  baseinfo: {
    initial: "あああ",
    birth_date: "1990-08-20",
    last_educational_background: "ほげほげ専門学校",
    qualification: "応用情報技術者, AWS CLF",
    postcode: "7310102",
    address: "広島県広島市hogehogeのほげ",
    self_pr: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
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
    },
    {
      id: "3",
      name: "javascript",
      level: "3",
    },
    {
      id: "3",
      name: "javascript",
      level: "3",
    },
    {
      id: "3",
      name: "javascript",
      level: "3",
    },
  ],
  businessHistories: [
    {
      industries: "建設",
      systemName: "AAA管理システム",
      period: "2021/01/01(22021/03/30)",
      businessOverview: "AAAの管理システムを作成、BBBというパッケージソフトとデータ連携を行い、hogehogeしたもの",
      language: [
        "Java", "JQuery",
      ],
      tools: [
        "Copilot", "Fargate", "ECS", "Django",
      ],
      infra: [
        "Docker",
      ],
      workProcess: {
        rd: false,
        bd: true,
        dd: true,
        cd: true,
        ut: true,
        it: true,
        op: false,
      },
      role: "member"
    },
    {
      industries: "情報通信",
      systemName: "遠隔監視支援システム",
      period: "2021/01/01(22021/03/30)",
      businessOverview: "AIの解析結果を、フロント（Vue.js）に表示したもの、Vuetifyを使用",
      language: [
        "Vue.js", "Python", "graphql"
      ],
      tools: [
        "Nuxt.js", "Flask",
      ],
      infra: [
        "Linux",
      ],
      workProcess: {
        rd: false,
        bd: true,
        dd: true,
        cd: true,
        ut: true,
        it: true,
        op: false,
      },
      role: "member"
    }
  ]

}

const projectInfo = ref({
  industries: "",
  systemName: "",
  period: "",
  businessOverview: "",
  language: "",
  tools: "",
  infra: "",
  workProcess: {
    rd: false,
    bd: false,
    dd: false,
    cd: false,
    ut: false,
    it: false,
    op: false,
  },
  role: ""
})
const isShowLoading = ref(false)
const inputMode = ref(false)
/**
 * バリデーションルール
 */
const rulesForProject = {
  industries: { required },
  systemName: { required },
  period: { required },
  businessOverview: { required },
  language: { required },
  tools: { required },
  infra: { required },
  // workProcess: { required },
  role: { required },
}
// TODO : BaseInfo, 表示モード時、バリデーション不要だが、コンポーネントの作りが悪く、指定しないとエラーとなる
const rules = {
  initial: {},
  birth_date: {},
  last_educational_background: {},
  qualification: {},
  postcode: {},
  address: {},
  self_pr: {}
}
const v$ = useVuelidate(rules, data.baseinfo)
const projectValidate = useVuelidate(rulesForProject, projectInfo)

const clickAddProject = async () => {
  inputMode.value = true
  console.log(projectInfo.value)
  const result = await projectValidate.value.$validate();
  console.log('result', result);
  console.log('$errors', projectValidate.value.$errors);
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
    // TODO : API request
    modal.hide()
  });
}

</script>

<template>
  <div class="py-8 bg-gradient-to-br ">
    <div class="flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="relative container m-auto px-0 text-gray-500 md:px-0 xl:px-12">
        <div class="m-auto">
          <div class="rounded-xl bg-white shadow-xl">
            <div class="p-3 sm:p-3">
              <div class="space-y-4">
                <h2 class="mb-0 text-2xl text-cyan-900 font-bold">案件対応履歴</h2>
              </div>
              <div class="flex bg-white">
                <BaseInfo :v$="v$" :inputMode="true" :base-info="data.baseinfo" />
              </div>
            </div>
            <div class="p-3 sm:p-3">
              <!-- tabs -->
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                経験
              </label>
              <div class="grid grid-cols-3">
                <div v-for="item in data.experienceRateInfo" :key="item.id">
                  <ExperienceRating :is-show="false" :rate="item" v-model="item.level" />
                </div>
              </div>
            </div>
            <div class="p-3 sm:p-3">

              <div class="space-y-0">
                <div class="flex">
                  <h2 class="mb-0 text-2xl text-cyan-900 font-bold">
                    業務履歴
                  </h2>
                  <button type="button" data-modal-target="staticModal" data-modal-toggle="staticModal"
                    class="ml-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">追加</button>
                </div>
              </div>
              <div class="flex bg-white">
                <div class="w-full px-4 shadow-none">
                  <ProjectListTable :business-histories="data.businessHistories" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Main modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full shadow-lg">
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div 
          class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700"
          >
          <Loading :is-show="isShowLoading"/>
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white" :class="[isShowLoading ? 'opacity-40' : '']">
              対応案件を追加
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="w-full px-4 shadow-none flex flex-wrap ">
            <div class="p-1 w-1/2">
              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  業種
                </label>
                <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.industries"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  v-model="projectInfo.industries" />
                <div v-for="error of projectValidate.industries.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>
            <div class="p-1 w-1/2">

              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  システム名
                </label>
                <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.systemName"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  v-model="projectInfo.systemName" />
                <div v-for="error of projectValidate.systemName.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>
            <div class="p-1 w-1/2">

              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  期間（To）
                </label>
                <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.period"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  v-model="projectInfo.period" />
                <div v-for="error of projectValidate.period.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>
            <div class="p-1 w-full">

              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  システム概要
                </label>
                <textarea type="text" v-model="projectInfo.businessOverview"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800"></textarea>
                <div v-for="error of projectValidate.businessOverview.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>
            <div class="p-1 w-full">
              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  言語
                </label>
                <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.language"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  v-model="projectInfo.language" />
                <div v-for="error of projectValidate.language.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>
            <div class="p-1 w-full">
              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  DB/Tool
                </label>
                <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.tools"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  v-model="projectInfo.tools" />
                <div v-for="error of projectValidate.tools.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>
            <div class="p-1 w-full">

              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  動作環境
                </label>
                <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.infra"
                :class="[isShowLoading ? 'opacity-40' : '']"
                  v-model="projectInfo.infra" />
                <div v-for="error of projectValidate.infra.$errors" :key="error.$uid">
                  <div class="text-red-700 font-bold">{{ error.$message }}</div>
                </div>
              </div>

            </div>



            <div class="p-1 w-full mb-2">

              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  作業工程
                </label>

                <ul class="grid w-full gap-6 md:grid-cols-4"
                :class="[isShowLoading ? 'opacity-40' : '']">
                  <li>
                    <input type="checkbox" id="aaa" v-model="projectInfo.workProcess.rd" class="hidden peer"
                      required="">
                    <label for="aaa"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">要件定義</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="bbb" v-model="projectInfo.workProcess.bd" class="hidden peer">
                    <label for="bbb"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">基本設計</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ccc" v-model="projectInfo.workProcess.dd" class="hidden peer">
                    <label for="ccc"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">詳細設計</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ddd" v-model="projectInfo.workProcess.cd" class="hidden peer">
                    <label for="ddd"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">コーディング</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="eee" v-model="projectInfo.workProcess.ut" class="hidden peer">
                    <label for="eee"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">単体評価</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="fff" v-model="projectInfo.workProcess.it" class="hidden peer">
                    <label for="fff"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">結合評価</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ggg" v-model="projectInfo.workProcess.op" class="hidden peer">
                    <label for="ggg"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full text-sm">運用保守</div>
                      </div>
                    </label>
                  </li>
                </ul>

              </div>

            </div>

            <div class="p-1 w-full">

              <div>
                <div>
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                  :class="[isShowLoading ? 'opacity-40' : '']">
                    役割
                  </label>
                  <InputComponent :input-mode="inputMode" placeholder="" :value="projectInfo.role"
                  :class="[isShowLoading ? 'opacity-40' : '']"
                    v-model="projectInfo.role" />
                  <div v-for="error of projectValidate.role.$errors" :key="error.$uid">
                    <div class="text-red-700 font-bold">{{ error.$message }}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button type="button" @click="clickAddProject"
            :class="[isShowLoading ? 'opacity-40' : '']"
              class=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">追加</button>
            <button data-modal-hide="staticModal" type="button"
            :class="[isShowLoading ? 'opacity-40' : '']"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">キャンセル</button>
          </div>
        </div>
      </div>
    </div>

  </div>





</template>

<style>
html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  /* thead tr:not(:first-child) {
    display: none;
  } */
}

td:not(:last-child) {
  border-bottom: 0;
}

/* th:not(:last-child) {
  border: 1px solid rgba(0, 0, 0, .1);
} */
th {
  border: 1px solid rgba(0, 0, 0, .1);
}
</style>