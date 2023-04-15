<script setup lang="ts">
import MasterData from '../components/MasterData.vue'
import { toRefs } from 'vue';
import { useAuthenticator } from '@aws-amplify/ui-vue';
import { useStacikesStore } from '@/stores/store'

const stakiesStore = useStacikesStore();
stakiesStore.stepperStatus = 1
// https://ui.docs.amplify.aws/vue/connected-components/authenticator/headless
const { user } = toRefs(useAuthenticator());

const click_regist = () => {
  stakiesStore.putExperienceTechnologies(user.value.username)
}

</script>

<template>
  <div class="bg-gradient-to-br ">
    <div class="flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
      <div class="text-gray-500 md:px-0 xl:px-12">
        <div class="m-auto">
          <div class="rounded-xl bg-white shadow-xl">
            <div class="p-3 sm:p-8">
              <div class="">
                <h2 class="text-2xl text-cyan-900 font-bold">経験技術の登録</h2>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  あなたがこれまで経験してきた技術を選択して、登録しましょう。
                </p>
              </div>

              <MasterData :list=stakiesStore.languageList name="言語" itemBadgeColor="blue" />
              <MasterData :list=stakiesStore.toolList name="DB・ツール" itemBadgeColor="rose" />
              <MasterData :list=stakiesStore.infraList name="動作環境" itemBadgeColor="lime" />

            </div>
            <button @click="click_regist"
              class="m-3 p-3 bg-green-500 text-white w-full rounded hover:bg-green-600">更新</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>