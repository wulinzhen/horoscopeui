<template>
  <div class="container-fluid ">
    <form class="form-horizontal" role="form">
      <div class="form-group ">
        <strong>
          <span class="col-md-1 control-label" id="basic-addon1">姓名:</span>
          <div class="col-md-3">
            <span class="col-md-3 control-label">{{ paiPanRunDTO.paipanDTO.name }}</span>
          </div>
        </strong>
      </div>
      <div class="form-group ">
        <strong>
          <span class="col-md-1 control-label">性别:</span>
          <div class="col-md-3">
            <span class="col-md-3 control-label">{{ paiPanRunDTO.paipanDTO.sex == 1 ? '男':'女' }}</span>
            <span class="col-md-9 control-label"></span>
          </div>
        </strong>
      </div>
      <div class="form-group ">
        <strong>
          <span class="col-md-1 control-label">出生地:</span>
          <div class="col-md-4">
            <span class="col-md-4 control-label">{{ paiPanRunDTO.paipanDTO.birthPlace.provinceName }}</span>
            <span class="col-md-4 control-label">{{ paiPanRunDTO.paipanDTO.birthPlace.cityName }}</span>
            <span class="col-md-4 control-label">{{ paiPanRunDTO.paipanDTO.birthPlace.areaName }}</span>
          </div>
        </strong>
      </div>
    </form>
  </div>
</template>

<!-- 你的HTML代码 -->
<script>
  export default {
    name: 'EightCharResultPage',
    data() {
      return {
        paiPanRunDTO: this.$route.params.paiPanRunDTO,
        datePicker: {
          format: "YYYY-MM-DD HH:mm",
          confirm: true,
          clearable: false
        },
        timeBefore: false,
        provinceList: [],
        cityList: [],
        areaList: [],
      }
    },
    mounted: function () {
      this.selectRegionInfo()
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
            }
            if (changeFor == "selCity") {
              that.cityList = response.data.data
              that.areaList = []
            }
            if (changeFor == "selArea") {
              that.areaList = response.data.data
            }
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
