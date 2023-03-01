<script setup lang="ts">
import InputComponent from './InputComponent.vue'

defineProps<{
  inputMode: boolean,
  baseInfo: Object,
  v$: Object
}>()
</script>
<template>
  <div class="w-full px-4 shadow-none flex flex-wrap ">
    <!-- イニシャル、住所、資格（名前、取得時期）、学歴、生年月日、自己PR） -->
    <div class="p-1 w-1/2">
      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          イニシャル
        </label>
        <InputComponent :input-mode="inputMode" placeholder="イニシャル" :value="baseInfo.initial"
          v-model="baseInfo.initial" />
        <div v-for="error of v$.initial.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>
    <div class="p-1 w-1/2">

      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          生年月日
        </label>
        <InputComponent :input-mode="inputMode" placeholder="生年月日" :value="baseInfo.birth_date"
          v-model="baseInfo.birth_date" />
        <div v-for="error of v$.birth_date.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>
    <div class="p-1 w-1/2">

      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          最終学歴
        </label>
        <InputComponent :input-mode="inputMode" placeholder="最終学歴" :value="baseInfo.last_educational_background"
          v-model="baseInfo.last_educational_background" />
        <div v-for="error of v$.last_educational_background.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>
    <div class="p-1 w-1/2">
      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          資格
        </label>
        <InputComponent :input-mode="inputMode" placeholder="資格" :value="baseInfo.qualification"
          v-model="baseInfo.qualification" />
        <div v-for="error of v$.qualification.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>
    <div class="p-1 w-3/12">
      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          郵便番号
        </label>
        <InputComponent :input-mode="inputMode" placeholder="郵便番号" :value="baseInfo.postcode"
          v-model="baseInfo.postcode" />
        <div v-for="error of v$.postcode.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>
    <div class="p-1 w-9/12">

      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          住所
        </label>
        <InputComponent :input-mode="inputMode" placeholder="住所" :value="baseInfo.address" v-model="baseInfo.address" />
        <div v-for="error of v$.address.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>


    <div class="p-1 w-full">

      <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          自己PR
        </label>
        <textarea type="text"
          class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-black-800"
          placeholder="Email" v-model="baseInfo.self_pr"
          :class="{ 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none': inputMode }"
          :disabled="inputMode"></textarea>
        <div v-for="error of v$.self_pr.$errors" :key="error.$uid">
          <div class="text-red-700 font-bold">{{ error.$message }}</div>
        </div>
      </div>

    </div>

  </div>
</template>