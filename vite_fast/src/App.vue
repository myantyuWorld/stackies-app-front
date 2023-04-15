<script setup lang="ts">
import { RouterView } from 'vue-router'
import Stepper from '@/components/Stepper.vue'
import Rating from '@/components/Rating.vue'
import { Amplify, Auth, I18n } from 'aws-amplify';
import { Authenticator, translations } from '@aws-amplify/ui-vue';
import "@aws-amplify/ui-vue/styles.css";
import awsconfig from '@/aws-exports';
import { useStacikesStore } from '@/stores/store'

Amplify.configure(awsconfig);
I18n.putVocabularies(translations)
I18n.setLanguage('ja')
I18n.putVocabularies({
  ja: {
    'Sign In': 'ログイン',
    'Create Account': 'アカウント作成',
    Username: 'ユーザー名を入力してください。', // Username label
    Password: 'パスワードを入力してください。', // Password label
  }
})

const stakiesStore = useStacikesStore();
const services = {
  // https://ui.docs.amplify.aws/vue/connected-components/authenticator/customization#override-function-calls
  async handleSignIn(formData) {
    let { username, password } = formData;
    // custom username
    console.log("hello amplify singin!")
    var promise = Auth.signIn({
      username,
      password
    });

    // 各種データ取得系API 実行
    stakiesStore.fetchTechnologies()
    stakiesStore.fetchExperienceTechnologies(username)
    stakiesStore.fetchBaseInfo(username)
    stakiesStore.fetchProjectInfo(username)

    return promise
  },
};
</script>
<template>
  <div class="bg-gradient-to-br ">
    <authenticator :services="services" initial-state="signIn">
      <template v-slot="{ user, signOut }">

        <div class="mx-auto max-w-7xl px-6 bg-gray-200">
          <div class="flex items-center justify-between border-b-2 border-gray-300  md:justify-start md:space-x-10">
            <div class="flex">
              <div class="w-1/2">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="80" style="">
                  <path fill="#"
                    d="M24.512,57.214l0.87,4.872s2.32,1.218,5.684,1.218c3.712,0,7.018-1.624,7.018-4.698c0-6.786-19.604-3.77-19.604-18.096c0-8.004,6.322-12.296,14.732-12.296c6.554,0,12.76,2.32,12.76,2.32l-0.29,10.556l-5.336,0l-1.45-4.93s-2.61-0.87-5.104-0.87c-4.118,0-6.148,1.798-6.148,4.118c0,6.728,19.546,4.06,19.546,17.69c0,8.7-6.728,13.456-15.66,13.456c-6.554,0-12.934-2.204-12.934-2.204l0-11.136l5.916,0z M76.74158,62.376l2.088,4.408c-2.842,2.088-6.09,3.596-9.86,3.596c-6.67,0-8.584-4.64-8.584-11.31l0-13.34l-5.394,0l0-5.626l5.394-0.754l0-8.004l8.7-1.566l0,9.57l8.12,0l0,6.38l-8.12,0l0,12.76c0,3.712,0.638,5.22,3.074,5.22c1.566,0,3.828-0.928,4.582-1.334z M105.24916,69.8l-1.044-3.77s-4.466,4.35-9.396,4.35c-5.626,0-9.048-3.306-9.048-9.106c0-6.844,5.162-9.57,13.978-9.57l4.06,0l0-3.19c0-2.958-1.566-4.234-4.466-4.234c-2.958,0-5.104,0.87-5.104,0.87l-0.87,3.654l-5.22,0l-0.406-8.584s7.018-2.32,12.586-2.32c8.816,0,12.18,3.074,12.18,11.484l0,14.326l4.35,1.044l0,4.64z M103.79916,56.634l-3.306,0c-4.524,0-6.322,1.16-6.322,3.77c0,2.204,1.218,3.48,3.422,3.48c3.074,0,6.206-3.364,6.206-3.364l0-3.886z M149.01074,60.346l2.9,5.104c-1.45,1.276-5.974,4.93-12.47,4.93c-9.57,0-15.08-5.916-15.08-15.776c0-10.324,5.8-16.704,15.95-16.704c4.988,0,10.15,2.03,10.15,2.03l-0.29,9.512l-5.22,0l-0.812-4.118s-1.682-0.464-4.002-0.464c-4.176,0-6.786,2.784-6.786,8.584c0,6.322,2.436,9.976,7.25,9.976c4.06,0,6.612-2.03,8.41-3.074z M171.31232,50.138l3.828,0l3.944-5.916l-2.552-0.812l0-4.64l14.964-0.29l0,4.93l-4.06,0.754l-5.394,7.598l6.496,12.006l4.408,1.392l0,4.64l-10.73,0l-7.192-14.152l-3.712,0l0,8.062l3.19,1.45l0,4.64l-16.53,0l0-4.64l4.64-1.45l0-32.596l-4.64-1.16l0-4.64l13.34-0.464l0,25.288z M203.1839,28.91c0-3.306,2.378-5.22,4.988-5.22c3.016,0,4.872,1.566,4.872,5.22c0,3.422-2.494,5.278-4.872,5.278c-3.132,0-4.988-1.856-4.988-5.278z M212.9279,63.71l4.06,1.45l0,4.64l-17.4,0l0-4.64l4.64-1.45l0-18.85l-4.64-1.45l0-4.64l13.34-0.29l0,25.23z M253.09348,56.054l-19.256,0c0.348,4.64,3.016,7.366,7.018,7.366c4.814,0,9.744-2.726,9.744-2.726l2.494,4.814s-5.8,4.872-13.224,4.872c-9.976,0-15.08-5.8-15.08-15.66c0-10.15,5.742-16.82,15.486-16.82c8.642,0,13.166,5.336,13.166,13.63c0,2.204-0.348,4.35-0.348,4.524z M233.95348,50.66l10.498,0c0-3.306-1.392-5.8-4.756-5.8c-3.248,0-5.278,2.378-5.742,5.8z M266.92706,59.65l0.464,3.77s2.03,0.58,4.872,0.58c3.19,0,4.756-0.986,4.756-2.842c0-4.756-15.486-3.016-15.486-13.34c0-7.25,5.8-9.918,11.948-9.918c5.22,0,10.788,1.74,10.788,1.74l-0.232,8.7l-4.93,0l-0.87-3.48s-1.682-0.58-4.002-0.58c-2.494,0-4.002,1.044-4.002,2.958c0,4.698,15.486,2.668,15.486,12.702c0,6.67-5.394,10.44-13.34,10.44c-5.51,0-10.672-1.276-10.672-1.276l0-9.454l5.22,0z M298.10264,54.952l-1.044-29.522l9.048,0l-1.044,29.232z M296.71064,65.276c0-3.306,2.378-5.22,4.988-5.22c3.19,0,4.872,1.914,4.872,5.22c0,3.364-2.436,5.278-5.046,5.278c-3.19,0-4.814-1.914-4.814-5.278z" />
                  <path fill="#" d="" />
                </svg>
              </div>
            </div>
            <div class="-my-2 -mr-2 md:hidden">
              <button type="button"
                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: outline/bars-3 -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <nav class="hidden space-x-10 md:flex">
            </nav>
            <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <button type="button" data-modal-target="helpModal" data-modal-toggle="helpModal"
                class="text-gray-200   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <!-- icon666.com - MILLIONS vector ICONS FREE --><svg version="1.1" id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;" xml:space="preserve">
                  <g>
                    <g>
                      <g>
                        <circle cx="245.333" cy="362.667" r="21.333" />
                        <path
                          d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333 S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224 S368.853,469.333,245.333,469.333z" />
                        <path
                          d="M245.333,96C207.104,96,176,127.904,176,167.115c0,5.891,4.776,10.667,10.667,10.667c5.891,0,10.667-4.776,10.667-10.667 c0-27.445,21.536-49.781,48-49.781s48,21.792,48,48.597c0,25.888-22.4,48.587-48,48.587c-5.891,0-10.667,4.776-10.667,10.667V288 c0,5.891,4.776,10.667,10.667,10.667c5.891,0,10.667-4.776,10.667-10.667v-53.013c32.736-5.333,58.667-34.805,58.667-69.056 C314.667,127.371,283.563,96,245.333,96z" />
                      </g>
                    </g>
                  </g>
                </svg>
                Help Modal
              </button>
              <div
                class="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 shadow-lg">
                <span class="font-medium text-gray-600 dark:text-gray-300">{{ user.username }}</span>
              </div>
              <button type="button" @click="signOut"
                class="text-gray-200  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <!-- icon666.com - MILLIONS vector ICONS FREE --><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g id="Layer_2" data-name="Layer 2">
                    <path d="M8,13a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                    <path d="M22,12.75H8a.75.75,0,0,1,0-1.5H22a.75.75,0,0,1,0,1.5Z" />
                    <path
                      d="M18,17a1,1,0,0,1-.708-1.706L20.577,12,17.292,8.707a1,1,0,1,1,1.416-1.413l3.989,4a1,1,0,0,1,0,1.413l-3.99,4A.994.994,0,0,1,18,17Z" />
                    <path
                      d="M18,16.75a.75.75,0,0,1-.531-1.28L20.93,12,17.469,8.53a.75.75,0,0,1,1.062-1.059l3.99,4a.751.751,0,0,1,0,1.06l-3.99,4A.748.748,0,0,1,18,16.75Z" />
                    <path
                      d="M4,23a3,3,0,0,1-3-3V5A3,3,0,0,1,4,2h9a3,3,0,0,1,3,3V7a1,1,0,0,1-2,0V5a1,1,0,0,0-1-1H4A1,1,0,0,0,3,5V20a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V17a1,1,0,0,1,2,0v3a3,3,0,0,1-3,3Z" />
                    <path
                      d="M13,22.75H4A2.752,2.752,0,0,1,1.25,20V5A2.752,2.752,0,0,1,4,2.25h9A2.752,2.752,0,0,1,15.75,5V7a.75.75,0,0,1-1.5,0V5A1.252,1.252,0,0,0,13,3.75H4A1.252,1.252,0,0,0,2.75,5V20A1.252,1.252,0,0,0,4,21.25h9A1.252,1.252,0,0,0,14.25,20V17a.75.75,0,0,1,1.5,0v3A2.752,2.752,0,0,1,13,22.75Z" />
                  </g>
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <!-- <h1>Hello {{ user }}!</h1> -->
        <!-- メインコンテンツ -->
        <div class="w-full pt-8 pl-4">
          <Stepper />
        </div>
        <hr class="my-6">
        <div class="w-full pl-4">
          <RouterView />
        </div>
      </template>
    </authenticator>

    <!-- Main modal -->
    <div id="helpModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full shadow-lg">
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              技術レベルの目安
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="helpModal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="w-full px-4 shadow-none flex flex-wrap ">
            <div id="" class="m-3 ">
              <div class="flex flex-wrap justify-items-center">
                <div class="w-1/2 p-1">
                  <Rating rate="1" />
                </div>
                <div class="w-1/2 p-1">
                  知識レベル
                </div>
                <div class="w-1/2 p-1">
                  <Rating rate="2" />
                </div>
                <div class="w-1/2 p-1">
                  開発経験あり
                </div>
              </div>
              <div class="flex flex-wrap justify-items-center">
                <div class="w-1/2 p-1">
                  <Rating rate="3" />
                </div>
                <div class="w-1/2 p-1">
                  開発可能
                </div>
                <div class="w-1/2 p-1">
                  <Rating rate="4" />
                </div>
                <div class="w-1/2 p-1">
                  技術精通
                </div>
              </div>
              <div class="flex flex-wrap justify-items-center">
                <div class="w-1/2 p-1">
                  <Rating rate="5" />
                </div>
                <div class="w-1/2 p-1">
                  指導可能
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
        </div>
      </div>
    </div>

  </div>
</template>


