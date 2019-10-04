<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container-fluid ">
    <form class="form-horizontal" role="form">
      <div class="form-group ">
        <span class="col-md-2 control-label" id="basic-addon1">   姓名  </span>
        <div class="col-md-4">
          <input class="form-control" type="text" placeholder="姓名" aria-describedby="basic-addon1"
                 v-model="paiPanDTO.name">
        </div>
      </div>

      <div class="form-group">
        <span class="col-md-2 control-label" id="basic-addon2">性别</span>
        <div class="col-md-4">
          <label class="radio-inline">
            <input type="radio" value="1" name="sex" v-model="paiPanDTO.sex">男性
          </label>
          <label class="radio-inline">
            <input type="radio" value="2" name="sex" v-model="paiPanDTO.sex">女性
          </label>
        </div>
      </div>

      <div class="form-group">
        <span class="col-md-2 control-label">出生时间</span>
        <div class="col-md-4">
          <date-picker width="100%" height="100%" v-model="paiPanDTO.birthDateTime"
                       :format="datePicker.format"
                       :confirm="datePicker.confirm" confirm-text="确定" :clearable="datePicker.clearable" type="datetime"
                       placeholder="请选择出生时间" input-class="form-control" value-type="format"
                       default-value="1981-01-01 12:00"
          ></date-picker>
        </div>
      </div>

      <div class="form-group">
        <span class="col-md-2 control-label" id="basic-addon4">出生地</span>
        <div class="col-md-4">
          <div class="col-md-4">
            <select id="selProvince" changeFor="selCity" class="form-control" ref="selProvince"
                    v-model="paiPanDTO.birthPlace.province"
                    @change="selectRegionInfo($event)">
              <option value="" selected>请选择省</option>
              <option v-for="(x,i) of provinceList" :value="x.criCode">{{x.criName}}</option>
            </select>
          </div>
          <div class="col-md-4">
            <select id="selCity" changeFor="selArea" class="form-control"  ref="selCity"
                    v-model="paiPanDTO.birthPlace.city"
                    @change="selectRegionInfo($event)">
              <option value="" selected>请选择市</option>
              <option v-for="(x,i) of cityList" :value="x.criCode">{{x.criName}}</option>
            </select>
          </div>
          <div class="col-md-4">
            <select id="selArea" class="form-control" v-model="paiPanDTO.birthPlace.area" ref="selArea">
              <option value="" selected>请选择区县</option>
              <option v-for="(x,i) of areaList" :value="x.criCode">{{x.criName}}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-1 col-md-offset-3 ">
          <button class=" btn btn-success btn-block" type="submit" v-on:click="paiPan">提交</button>
        </div>
      </div>

    </form>
    <!--<p>消息：{{ paiPanDTO }}</p>-->
  </div>
</template>

<!-- 你的HTML代码 -->
<script>
  import PaiPanDTO from '../model/PaiPanDTO'

  var paiPanDTO = new PaiPanDTO();

  export default {
    name: 'EightCharPage',
    data() {
      return {
        paiPanDTO: paiPanDTO,
        datePicker: {
          format: "YYYY-MM-DD HH:mm",
          confirm: true,
          clearable: false
        },
        timeBefore: false,
        provinceList:[],
        cityList:[],
        areaList:[],
      }
    },
    mounted:function(){
      this.selectRegionInfo()
      debugger
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
            if (changeFor == "selProvince"){
              that.provinceList = response.data.data
              that.cityList = []
              that.areaList = []
            }
            if (changeFor == "selCity"){
              that.cityList = response.data.data
              that.areaList = []
            }
            if (changeFor == "selArea"){
              that.areaList = response.data.data
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      paiPan:function (datas) {
        var that = this;
        var proName = this.provinceList.find(item => item.criCode === paiPanDTO.birthPlace.province)['criName']
        var cityName = this.cityList.find(item => item.criCode === paiPanDTO.birthPlace.city)['criName']
        var areaName = this.areaList.find(item => item.criCode === paiPanDTO.birthPlace.area)['criName']
        paiPanDTO.birthPlace.provinceName = proName
        paiPanDTO.birthPlace.cityName = cityName
        paiPanDTO.birthPlace.areaName = areaName
        debugger
        this.$ajax.post('/paiPan/paiPan',
          paiPanDTO
        )
          .then(function (response) {
            console.log(response);
            that.$router.push({
              name: 'EightCharResultPage',
              params: {
                paiPanRunDTO: response.data.data
              }
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    watch: {}
  }
</script>
</body>
</html>
