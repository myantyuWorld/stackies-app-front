import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router';

export const useStacikesStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const isShowLoading = ref(true)

  // 現在のステッパー状態
  const stepperStatus = ref(1)
  // 言語
  const languageList = ref([])
  // DB・ツール
  const toolList = ref([])
  // 動作環境
  const infraList = ref([])
  // 基本能力
  const baseinfo = ref({
    initial: "",
    birth_date: "",
    last_educational_background: "",
    qualification: "",
    postcode: "",
    address: "",
    self_pr: ""
  })
  // 経験技術
  const experienceRateInfo = ref([])
  // 案件対応情報
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
  // 案件対応履歴
  const businessHistories = ref([])

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
  /**
   * 経験技術リスト更新
   * @param user_id ユーザーID
   */
  const putExperienceTechnologies = (user_id: any) => {
    var selected_list = languageList.value.filter(x => x.checked)
    selected_list.push(toolList.value.filter(x => x.checked))
    selected_list.push(infraList.value.filter(x => x.checked))
    console.log(selected_list.flat(2))

    var data: { name: any; category: any; level: string; }[] = []
    selected_list.flat(2).forEach((item: any) => {
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
  /**
   * 基本情報取得
   * @param user_id ユーザーID
   */
  const fetchBaseInfo = (user_id: any) => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}base_info?user_id=${user_id}`)
      .then((response) => {
        baseinfo.value = response.data[0]
      })
  }
  /**
   * 案件対応情報取得
   * @param user_id ユーザーID
   */
  const fetchProjectInfo = (user_id: any) => {
    console.log("call fetchProjectInfo")
    axios.get(`${import.meta.env.VITE_APP_API_URL}project_info?user_id=${user_id}`)
      .then((response) => {
        businessHistories.value = response.data
      })
      .finally(
    )
  }
  /**
   * 案件対応情報取得
   * @param user_id ユーザーID
   */
  const putProjectInfo = (user_id: any) => {
    console.log("call putProjectInfo")

    axios.post(`${import.meta.env.VITE_APP_API_URL}project_info`, {
      "user_id": user_id,
      "data": projectInfo.value
    })
      .then((response) => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  const showLoading = () => {
    isShowLoading.value = true
  }
  const hideLoading = () => {
    isShowLoading.value = false
  }
  const isLoading = () => {
    return isShowLoading.value
  }

  // https://pinia.vuejs.org/core-concepts/state.html#resetting-the-state
  function $reset() {
    stepperStatus.value = 1
    languageList.value = []
    baseinfo.value = {
      initial: "",
      birth_date: "",
      last_educational_background: "",
      qualification: "",
      postcode: "",
      address: "",
      self_pr: ""
    }
    toolList.value = []
    infraList.value = []
    experienceRateInfo.value = []
    projectInfo.value = {
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
    },
    businessHistories.value = []
  }


  return {
    // Variables
    count,
    doubleCount,
    increment,
    stepperStatus,
    languageList,
    toolList,
    infraList,
    baseinfo,
    experienceRateInfo,
    projectInfo,
    businessHistories,

    // API
    fetchBaseInfo,
    fetchTechnologies,
    fetchExperienceTechnologies,
    putExperienceTechnologies,
    fetchProjectInfo,
    putProjectInfo,

    // Method
    showLoading,
    hideLoading,
    isLoading,

    // 
    $reset,

  }
},
  {
    persist: true // データの永続化
  }
);
