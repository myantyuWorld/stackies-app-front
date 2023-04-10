<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { toRefs } from 'vue';
import Stepper from './components/Stepper.vue'
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import "@aws-amplify/ui-vue/styles.css";
import awsconfig from '@/aws-exports';
import {useStacikesStore} from '@/stores/store'

Amplify.configure(awsconfig);

const stakiesStore = useStacikesStore();
const services = {
    async handleSignIn(formData) {
      let { username, password } = formData;
      // custom username
      console.log("hello amplify singin!")
      var promise = Auth.signIn({
        username,
        password
      });

      const { route, user, signOut } = toRefs(useAuthenticator());

      stakiesStore.fetchTechnologies()
      stakiesStore.fetchExperienceTechnologies(user.value.username)

      return promise
    },
  };

// TODO : SignInをオーバーライドして、認証されたら、stackiesStoreのinit()を行う >>> 技術マスタ、基本情報、案件対応履歴などを取得しておく（画面でいちいちAPI実行させないようにするため）
// https://ui.docs.amplify.aws/vue/connected-components/authenticator/customization#override-function-calls

</script>

<template>
  <div class="bg-gradient-to-br ">
    <authenticator :services="services" initial-state="signIn">
      <template v-slot="{ user, signOut }">
      <div class="mx-auto max-w-7xl px-6 my-5">
        <div class="flex items-center justify-between border-b-2 border-gray-300  md:justify-start md:space-x-10">
          <div class="flex">
            <div class="w-1/2">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img alt="Vue logo" class="h-8 w-auto sm:h-10" src="@/assets/sample.jpeg" />
              </a>
            </div>
            <div class="w-1/3">
              <h1>Stackies!</h1>
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
            <h1>{{ user.username }}!</h1>
          </nav>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <!-- <RouterLink
              class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              to="/login">LogOff</RouterLink> -->
              <button class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" @click="signOut">Sign Out</button>
          </div>
        </div>
      </div>
        <!-- <h1>Hello {{ user }}!</h1> -->
        <!-- メインコンテンツ -->
        <div class="flex p-5">
          <div class="w-1/4 pt-8 pl-4  rounded-xl shadow-lg">
            <Stepper />
        </div>
        <div class="w-3/4">
          <RouterView />
        </div>
      </div>
    </template>
    </authenticator>

  </div>
</template>


