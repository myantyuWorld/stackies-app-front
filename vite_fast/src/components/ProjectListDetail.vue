<script setup lang="ts">
const data = defineProps<{
  businessHistory: Object,
}>()

const { industries, systemName, period, businessOverview, language, tools, infra, workProcess, role } = data.businessHistory
const convertWorkProcess = (isRep: boolean) => {
  return isRep ? "●" : ""
}
</script>
<template>
  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
    <td colspan="2" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
      {{ systemName }}</td>
    <td colspan="12" class="border-grey-light border hover:bg-gray-100 p-3 text-sm">
      {{ businessOverview }}</td>
  </tr>
  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ industries }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ period }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ language }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ tools }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ infra }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.rd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.bd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.dd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.cd) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.ut) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.it) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm text-center">
      {{ convertWorkProcess(workProcess.op) }}</td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 text-sm">{{ role }}</td>
  </tr>


</template>