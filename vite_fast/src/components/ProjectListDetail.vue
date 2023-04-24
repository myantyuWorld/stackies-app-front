<script setup lang="ts">
const data = defineProps<{
  businessHistory: Object,
}>()

const { industries, systemName, period, businessOverview, language, tools, infra, workProcess, role, user_id } = data.businessHistory
const workProcessJson = JSON.parse(workProcess)
const rolesMap = ["メンバー","テックリード","SPL","PL","PM"]
const industriesMap = ["公共","建築","金融","新聞","フィットネス","業種５","業種６"]
const convertWorkProcess = (isRep: boolean) => {
  return isRep ? "●" : ""
}
</script>
<template>
  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
    <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm font-bold">
      {{ user_id }}</td>
    <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
      {{ systemName }}</td>
    <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
      {{ businessOverview }}</td>
  </tr>
  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ industriesMap[industries] }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ period }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ language }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ tools }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ infra }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.rd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.bd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.dd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.cd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.ut) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.it) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcessJson.op) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ rolesMap[role] }}</td>
  </tr>


</template>