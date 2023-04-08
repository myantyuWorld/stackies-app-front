import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router';

export const useStacikesStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const isShowLoading = ref(true)
  // 技術マスタ
  const languageList = ref([])
  const toolList = ref([])
  const infraList = ref([])
  const baseinfo = ref({})
  const experienceRateInfo = ref([])

  function increment() {
    count.value++
  }
  /***
   * 技術マスタ取得
   */
  const fetchTechnologies = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}technologies`)
      .then((response) => {
        console.log(response.data)
        let list: { category: string; name: string; }[] = []
        let list2: { category: string; name: string; }[] = []
        let list3: { category: string; name: string; }[] = []
        response.data.filter((value: String) => {
          return value["category"]["S"] === "1"
        }).forEach((item: any) => {
          list.push({
            "category": item["category"]["S"],
            "name": item["name"]["S"]
          })
        });
        response.data.filter((value: String) => {
          return value["category"]["S"] === "2"
        }).forEach((item: any) => {
          list2.push({
            "category": item["category"]["S"],
            "name": item["name"]["S"]
          })
        });
        response.data.filter((value: String) => {
          return value["category"]["S"] === "3"
        }).forEach((item: any) => {
          list3.push({
            "category": item["category"]["S"],
            "name": item["name"]["S"]
          })
        });
        // データ加工
        return Promise.resolve({
          list,
          list2,
          list3
        })
      })
      .then((data) => {
        languageList.value = data.list
        infraList.value = data.list2
        toolList.value = data.list3
      })
      .finally(
        hideLoading()
      )
  }
  /***
   * 経験技術リスト取得
   */
  const fetchExperienceTechnologies = (user_id: any) => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}experience_technology?user_id=${user_id}`)
      .then((response) => {
        experienceRateInfo.value = response.data
      })
      .finally(
        hideLoading()
      )
  }

  const putExperienceTechnologies = (user_id: any) => {
    var selected_list = languageList.value.filter(x => x.checked)
    selected_list.push(toolList.value.filter(x => x.checked))
    selected_list.push(infraList.value.filter(x => x.checked))
    console.log(selected_list.flat(2))

    var data: { name: any; category: any; level: string; }[] = []
    selected_list.flat(2).forEach((item:any) => {
      data.push({
        "name": item.name,
        "category": item.category,
        "level": "1"
      })
    })

    new Promise((resolve) => {
      showLoading()
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      axios.post(`${import.meta.env.VITE_APP_API_URL}experience_technology`, {
        "user_id": user_id,
        "data": data
      })
        .then((response) => {
          hideLoading()

          router.push('register')
        }).catch(error => {
          hideLoading()
        })
    });
  }
  /***
   * 基本情報の取得
   */
  const fetchBaseInfo = (user_id: any) => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}base_info?user_id=${user_id}`)
      .then((response) => {
        console.log(response.data)
        baseinfo.value = response.data[0]
      })
  }

  const showLoading = () => {
    isShowLoading.value = false
  }
  const hideLoading = () => {
    isShowLoading.value = false
  }
  const isLoading = () => {
    return isShowLoading.value
  }

  return {
    count,
    doubleCount,
    increment,
    languageList,
    toolList,
    infraList,
    baseinfo,
    experienceRateInfo,
    fetchBaseInfo,
    fetchTechnologies,
    fetchExperienceTechnologies,
    putExperienceTechnologies,
    showLoading,
    hideLoading,
    isLoading,
  }
})
