<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        menu: [
          {
            title:"首页",
            path:"homePage",
            id:"homePage",
            sort:1
          },
          {
            title:"八字算命",
            path:"character",
            id:"character",
            sort:2
          },
          {
            title:"姓名分析",
            path:"nameAnalysis",
            id:"nameAnalysis",
            sort:3
          },

          {
            title:"属相星座",
            path:"genusConstellation",
            id:"genusConstellation",
            sort:4
          },
          {
            title:"手相面相",
            path:"handFace",
            id:"handFace",
            sort:5
          },
          {
            title:"抽签占卜",
            path:"sortilege",
            id:"sortilege",
            sort:6
          },
          {
            title:"玄空风水",
            path:"mysterious",
            id:"mysterious",
            sort:7
          },
          {
            title:"案例录入",
            path:"record",
            id:"record",
            sort:8
          },
        ]
      }
    }
  }
</script>
