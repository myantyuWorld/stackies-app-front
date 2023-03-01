<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Stepper from './components/Stepper.vue'
</script>

<template>
  <div class="bg-gradient-to-br ">
    <div class="mx-auto max-w-7xl px-6">
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
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <RouterLink
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            to="/login">LogOff</RouterLink>
        </div>
      </div>
    </div>
    
    <!-- メインコンテンツ -->
    <div class="flex p-5">
      <div class="w-1/4 pt-8 pl-4  rounded-xl shadow-lg">
        <Stepper/>
      </div>
      <div class="w-3/4">
        <RouterView />
      </div>
    </div>

  </div>
</template>


