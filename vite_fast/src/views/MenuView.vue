<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="relative py-16 bg-gradient-to-br ">
        <div class="flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div class="rounded-xl bg-white shadow-xl">
                        <div class="p-6 sm:p-16">
                            <div class="space-y-4">
                                <h2 class="mb-8 text-2xl text-cyan-900 font-bold">メニュー</h2>
                            </div>
                            <div class="mt-4 grid space-y-4">
                                <button
                                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <RouterLink to="/master">
                                            <span
                                                class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">経験技術登録</span>
                                        </RouterLink>
                                    </div>
                                </button>
                                <button
                                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <RouterLink to="/projects">
                                            <span
                                                class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">案件対応履歴</span>
                                        </RouterLink>
                                    </div>
                                </button>
                                <button
                                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <RouterLink to="/register">
                                            <span
                                                class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">会員登録(暫定）</span>
                                        </RouterLink>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>