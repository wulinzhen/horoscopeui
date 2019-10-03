<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <ul class="nav navbar-nav" v-for="item in menu" :key="item.id">
            <router-link class="list-group-item" :to="item.path">{{ item.title }}</router-link>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        menu: [
          {
            title: "首页",
            path: "homePage",
            id: "homePage",
            sort: 1
          },
          {
            title: "八字算命",
            path: "EightCharPage",
            id: "character",
            sort: 2
          },
          {
            title: "姓名分析",
            path: "nameAnalysis",
            id: "nameAnalysis",
            sort: 3
          },

          {
            title: "属相星座",
            path: "genusConstellation",
            id: "genusConstellation",
            sort: 4
          },
          {
            title: "手相面相",
            path: "handFace",
            id: "handFace",
            sort: 5
          },
          {
            title: "抽签占卜",
            path: "sortilege",
            id: "sortilege",
            sort: 6
          },
          {
            title: "玄空风水",
            path: "mysterious",
            id: "mysterious",
            sort: 7
          },
          {
            title: "案例录入",
            path: "/InsertRecordPage",
            id: "record",
            sort: 8
          },
        ]
      }
    }
  }
</script>
