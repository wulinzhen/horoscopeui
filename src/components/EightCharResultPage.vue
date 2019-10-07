<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container-fluid">
    <div class="panel panel-default">
      <div class="panel-body">
        <span class="glyphicon glyphicon-floppy-save pull-left" aria-hidden="true" v-on:click="downloadResult"></span>
      </div>
      <div class="clearfix"></div>
      <div class="panel-body bg-warning" ref="paiPanResult">
        <strong>
          <p class="text-left">姓名: {{ paiPanRunDTO.paipanDTO.name }}</p>
          <p class="text-left">性别: {{ paiPanRunDTO.paipanDTO.sex == 1 ? '男':'女' }}</p>
          <p class="text-left">出生地: {{ paiPanRunDTO.paipanDTO.birthPlace.provinceName }}
            {{ paiPanRunDTO.paipanDTO.birthPlace.cityName }} {{ paiPanRunDTO.paipanDTO.birthPlace.areaName }}</p>
          <p class="text-left">公历: {{ paiPanRunDTO.paipanDTO.trueSunbirthDateTime }}
            农历: {{ paiPanRunDTO.lunarDate }}</p>
        </strong>
        <p class="text-left text-info">节气: {{ paiPanRunDTO.preSolarTerm.termName }}{{ paiPanRunDTO.preSolarTerm.termDate
          }} -
          {{ paiPanRunDTO.nextSolarTerm.termName }}{{ paiPanRunDTO.nextSolarTerm.termDate }}</p>
        <p class="text-left text-info">起运: 命主出生后 <strong>{{ paiPanRunDTO.qiyunDay}}</strong> 开始起运</p>
        <p class="text-left text-info">交运: 命主于公历 <strong>{{ paiPanRunDTO.jiaoyunDate }}</strong> 开始交运</p>
        <p class="text-left text-blue" style="color: 	#5599FF">
          十神
          <span style="margin-left: 2%"></span>{{ paiPanRunDTO.eightCharacterDTO.yearHevGod }}
          <span style="margin-left: 4%"></span>{{ paiPanRunDTO.eightCharacterDTO.monthHevGod }}
          <span style="margin-left: 4%"></span>{{ paiPanRunDTO.eightCharacterDTO.dayHevGod }}
          <span style="margin-left: 4%"></span>{{ paiPanRunDTO.eightCharacterDTO.hourHevGod }}
        </p>
        <p class="text-left text-blue" style="color: #CC0000">
          {{ paiPanRunDTO.paipanDTO.sex == 1 ? '乾造:':'坤造:' }}
          <span style="font-size: 20px">
            <span style="margin-left: 1.8%"></span>{{ paiPanRunDTO.eightCharacterDTO.yearHeavenly }}
            <span style="margin-left: 4.5%"></span>{{ paiPanRunDTO.eightCharacterDTO.monthHeavenly }}
            <span style="margin-left: 4.5%"></span>{{ paiPanRunDTO.eightCharacterDTO.dayHeavenly }}
            <span style="margin-left: 4.5%"></span>{{ paiPanRunDTO.eightCharacterDTO.hourHeavenly }}
          </span>
        </p>
        <p class="text-left text-blue" style="color: #CC0000">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span style="font-size: 20px">
            <span style="margin-left: 1.8%"></span>{{ paiPanRunDTO.eightCharacterDTO.yearBranch }}
            <span style="margin-left: 4.5%"></span>{{ paiPanRunDTO.eightCharacterDTO.monthBranch }}
            <span style="margin-left: 4.5%"></span>{{ paiPanRunDTO.eightCharacterDTO.dayBranch }}
            <span style="margin-left: 4.5%"></span>{{ paiPanRunDTO.eightCharacterDTO.hourBranch }}
          </span>
        </p>
        <p class="text-left text-blue" style="color: 	#5599FF">
          地势:
          <span style="margin-left: 1.7%;display:-moz-inline-box; display:inline-block; width:40px;">
            {{ paiPanRunDTO.eightCharacterDTO.yearChangSheng }}</span>
          <span style="margin-left: 3.2%;display:-moz-inline-box; display:inline-block; width:40px;">
          {{ paiPanRunDTO.eightCharacterDTO.monthChangSheng }}</span>
          <span style="margin-left: 3%;display:-moz-inline-box; display:inline-block; width:40px;">
          {{ paiPanRunDTO.eightCharacterDTO.dayChangSheng }} </span>
          <span style="margin-left: 3%;display:-moz-inline-box; display:inline-block; width:40px;">
          {{ paiPanRunDTO.eightCharacterDTO.hourChangSheng }}</span>
        </p>
        <p class="text-left text-blue" style="color: 	#5599FF">
          纳音:
          <span style="margin-left: 1.6%;display:-moz-inline-box; display:inline-block; width:60px;">
            {{ paiPanRunDTO.eightCharacterDTO.yearNaYin }}</span>
          <span style="margin-left: 1.4%;display:-moz-inline-box; display:inline-block; width:60px;">
          {{ paiPanRunDTO.eightCharacterDTO.monthNaYin }}</span>
          <span style="margin-left: 1.4%;display:-moz-inline-box; display:inline-block; width:60px;">
          {{ paiPanRunDTO.eightCharacterDTO.dayNaYin }} </span>
          <span style="margin-left: 1.4%;display:-moz-inline-box; display:inline-block; width:60px;">
          {{ paiPanRunDTO.eightCharacterDTO.hourNaYin }}</span>
        </p>
        <p class="text-left text-blue" style="color: 	#5599FF">
          <span class="col-md-1"
                style="padding-left: 0px;padding-right: 0%;display:inline-block; width:60px;">藏干:</span>

          <span  class="col-md-1" style="margin-left: -1.55%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.yearBranchHevsGod">
               {{ paiPanRunDTO.eightCharacterDTO.yearBranchHevs[i] }}{{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: 0.3%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.monthBranchHevsGod">
               {{ paiPanRunDTO.eightCharacterDTO.monthBranchHevs[i] }}{{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: 0.3%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.dayBranchHevsGod">
               {{ paiPanRunDTO.eightCharacterDTO.dayBranchHevs[i] }}{{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="display:-moz-inline-box; display:inline-block; width:80px;">
               <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.hourBranchHevsGod">
                 {{ paiPanRunDTO.eightCharacterDTO.hourBranchHevs[i] }}{{ x }}
             </span>
          </span>
        </p>
        <p class="clearfix"></p>
        <p class="text-left text-blue" style="color: 	#5599FF">
          <span class="col-md-1"
                style="padding-left: 0px;padding-right: 0%;display:inline-block; width:60px;">神煞&nbsp;</span>
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
            <span v-on:click="glyphiconUp = !glyphiconUp" v-if="glyphiconUp" id="glyphiconUp" class="glyphicon glyphicon-chevron-up"></span>
            <span v-on:click="glyphiconUp = !glyphiconUp" v-if="!glyphiconUp" id="glyphiconDown" class="glyphicon glyphicon-chevron-down"></span>
          </a>
        </p>
        <p class="clearfix"></p>
        <p v-if="glyphiconUp" id="collapseOne" class="text-left text-blue" style="color: 	#5599FF;margin-top: -1%">
          <span class="col-md-1"
                style="padding-left: 0px;padding-right: 0%;display:inline-block; width:60px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span style="color: 	black">
            <span  class="col-md-1" style="margin-left: -1.55%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.yearShenShas">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: 0.3%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.monthShenShas">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: 0.3%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.dayShenShas">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: 0.3%;display:-moz-inline-box; display:inline-block; width:80px;">
               <span style="display:block;" v-for="(x,i) of paiPanRunDTO.eightCharacterDTO.hourShenShas">
                 {{ x }}
             </span>
          </span>
          </span>
        </p>
        <p class="clearfix"></p>
        <p class="text-left text-blue" style="color: 	#5599FF">
          十神:
          <span style="margin-left: 1%" v-for="(x,i) of paiPanRunDTO.daYunDTOS">
            {{ x.heavGod }}
          </span>
        </p>
        <p class="text-left text-blue" style="color: 	#5599FF;">
          大运:
          <span style="margin-left: 1%;font-weight: bold" v-for="(x,i) of paiPanRunDTO.daYunDTOS">
            {{ x.heavenly }}{{ x.branch }}
          </span>
        </p>
        <p class="text-left text-blue" style="color: 	black">
          交运:
          <span style="margin-left: 0.75%" v-for="(x,i) of paiPanRunDTO.daYunDTOS">
            {{ x.dayunDate.split('-')[0] }}
          </span>
        </p>
        <p class="text-left text-blue" style="color: 	black">
          实岁:
          <span style="margin-left: 0.95%" v-for="(x,i) of paiPanRunDTO.daYunDTOS">
            {{ x.age }}岁
          </span>
        </p>


        <p class="text-left text-blue" style="color: 	black">
          <span class="col-md-1"
                style="padding-left: 0px;padding-right: 0%;display:inline-block; width:60px;">流年:</span>

          <span  class="col-md-1" style="margin-left: -2%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[0].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -3%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[1].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.7%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[2].liuNian">
               {{ x }}
             </span>
          </span>
          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[3].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[4].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[5].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[6].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[7].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[8].liuNian">
               {{ x }}
             </span>
          </span>

          <span  class="col-md-1" style="margin-left: -2.5%;display:-moz-inline-box; display:inline-block; width:80px;">
             <span style="display:block;" v-for="(x,i) of paiPanRunDTO.daYunDTOS[9].liuNian">
               {{ x }}
             </span>
          </span>

        </p>
      </div>
    </div>

    <div class="alert alert-success alert-dismissable hide">
      <button type="button" class="close" data-dismiss="alert"
                 aria-hidden="true">
           ×
      </button>
        成功！很好地完成了提交。
    </div>
  </div>
</template>

<!-- 你的HTML代码 -->
<script>

  import html2canvas from 'html2canvas';

  import wxapi from '@/common/wxapi.js'

  export default {
    name: 'EightCharResultPage',
    data() {
      return {
        paiPanRunDTO: this.$route.params.paiPanRunDTO ||{},
        datePicker: {
          format: "YYYY-MM-DD HH:mm",
          confirm: true,
          clearable: false
        },
        timeBefore: false,
        provinceList: [],
        cityList: [],
        areaList: [],
        glyphiconUp:true,
        dataURL:''
      }
    },
    mounted: function () {
      this.selectRegionInfo()
      wxapi.wxRegister(this.wxRegCallback)
    },
    methods: {
      selectRegionInfo: function (e) {
        var value = "000000"
        var changeFor = "selProvince"
        if (e) {
          value = e.target.value
          changeFor = e.target.getAttribute('changeFor')
        }
        var that = this;
        this.$ajax.get('/regionInfo/select/' + value)
          .then(function (response) {
            console.log(response);
            if (changeFor == "selProvince") {
              that.provinceList = response.data.data
              that.cityList = []
              that.areaList = []
              if (!e){
                $("#selProvince").trigger('change')
              }
            }
            if (changeFor == "selCity") {
              that.cityList = response.data.data
              that.areaList = []
              if (!e){
                $("#selCity").trigger('change')
              }
            }
            if (changeFor == "selArea") {
              that.areaList = response.data.data
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      paiPanJieTu:function () {
        let self = this
        let ref = this.$refs.paiPanResult // 截图区域
        debugger
        html2canvas(ref, {
          backgroundColor: '#142E48'
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png")
          console.log("dataURL.imgUrl........_>", dataURL.imgUrl)
          debugger
          self.dataURL = dataURL
        })
      },
      wxRegCallback () {
        // 用于微信JS-SDK回调
        this.wxShareTimeline()
        this.wxShareAppMessage()
      },
      wxShareTimeline () {
        // 微信自定义分享到朋友圈
        let option = {
          title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
          link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
          imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
          success: () => {
            alert('分享成功')
          },
          error: () => {
            alert('已取消分享')
          }
        }
        // 将配置注入通用方法
        wxapi.ShareTimeline(option)
      },
      wxShareAppMessage () {
        // 微信自定义分享给朋友
        let option = {
          title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
          desc: '限时团购周 挑战最低价', // 分享描述, 请自行替换
          link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
          imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
          success: () => {
            alert('分享成功')
          },
          error: () => {
            alert('已取消分享')
          }
        }
        // 将配置注入通用方法
        wxapi.ShareAppMessage(option)
      },
      dataURLToBlob(dataurl) {//ie 图片转格式
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime})
      },
      downloadResult() {
        let canvasID = this.$refs.paiPanResult;
        let that = this;
        let a = document.createElement('a');
        debugger
        var jieTuName = that.paiPanRunDTO.paipanDTO.name +that. paiPanRunDTO.paipanDTO.trueSunbirthDateTime
        html2canvas(canvasID).then(canvas => {
          let dom = document.body.appendChild(canvas);
          dom.style.display = "none";
          a.style.display = "none";
          document.body.removeChild(dom);
          let blob = that.dataURLToBlob(dom.toDataURL("image/png"));
          a.setAttribute("href", URL.createObjectURL(blob));
          a.setAttribute("download", jieTuName+".png")
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(blob);
          document.body.removeChild(a);
        });
      },
    },
    watch: {}
  }
</script>
</body>
</html>
