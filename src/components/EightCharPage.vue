<template>
  <div class="container-fluid ">
    <form class="form-horizontal" role="form">
      <div class="form-group ">
        <span class="col-md-2 control-label" id="basic-addon1">   姓名  </span>
        <div class="col-md-4">
          <input class="form-control" type="text" placeholder="姓名" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.name">
        </div>
      </div>

      <div class="form-group">
        <span class="col-md-2 control-label" id="basic-addon2">性别</span>
        <div class="col-md-4">
          <label class="radio-inline">
            <input type="radio" value="1" name="sex" v-model="hsPersonHoroscopeRecd.sex">男性
          </label>
          <label class="radio-inline">
            <input type="radio" value="2" name="sex" v-model="hsPersonHoroscopeRecd.sex">女性
          </label>
        </div>
      </div>

      <div class="form-group">
        <span class="col-md-2 control-label">出生时间</span>
        <div class="col-md-4">
          <date-picker width="100%" height="100%" v-model="hsPersonHoroscopeRecd.birthDatetime"
                       :format="datePicker.format"
                       :confirm="datePicker.confirm" confirm-text="确定" :clearable="datePicker.clearable" type="datetime"
                       placeholder="请选择出生时间" input-class="form-control" value-type="format"
                       default-value="1981-01-01 12:00"
          ></date-picker>
        </div>
      </div>

      <div class="form-group ">
        <span class="col-md-2 control-label">八字</span>
        <div class="col-md-3">
          <input class="form-control" type="text" placeholder="八字"
                 v-model="hsPersonHoroscopeRecd.eightCharacter">
        </div>
        <div class="col-md-1 checkbox">
          <label>
            <input type="checkbox" value="true" placeholder="时在前" aria-describedby="basic-addon1"
                   v-model="timeBefore">时在前
          </label>
        </div>
      </div>

      <div class="form-group">
        <span class="col-md-2 control-label" id="basic-addon4">乾造</span>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="年干" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.yearHeavenly" ref="yearHeavenly" nextf="yearBranch"
                 @keyup="nextFocus($event)">
        </div>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="月干" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.monthHeavenly" ref="monthHeavenly" nextf="monthBranch"
                 @keyup="nextFocus($event)"
          >
        </div>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="日元" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.dayHeavenly" ref="dayHeavenly" nextf="dayBranch"
                 @keyup="nextFocus($event)">
        </div>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="时干" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.hoursHeavenly" ref="hoursHeavenly" nextf="hoursBranch"
                 @keyup="nextFocus($event)">
        </div>
        <br/>
        <br/>
        <br/>
        <span class="col-md-2 control-label" id="basic-addon5"></span>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="年支" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.yearBranch" ref="yearBranch" nextf="monthHeavenly"
                 @keyup="nextFocus($event)">
        </div>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="月支" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.monthBranch" ref="monthBranch" nextf="dayHeavenly"
                 @keyup="nextFocus($event)">
        </div>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="日支" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.dayBranch" ref="dayBranch" nextf="hoursHeavenly"
                 @keyup="nextFocus($event)">
        </div>
        <div class="col-md-1">
          <input class="form-control" type="text" placeholder="时支" aria-describedby="basic-addon1"
                 v-model="hsPersonHoroscopeRecd.hoursBranch" ref="hoursBranch"
                 @keyup="nextFocus($event)">
        </div>
      </div>

      <div class="form-group ">
        <span class="col-md-2 control-label">大运</span>
        <div class="col-md-4">
          <input class="form-control" type="text" placeholder="大运"
                 v-model="hsPersonHoroscopeRecd.bigLuck">
        </div>
      </div>

      <div class="form-group ">
        <span class="col-md-2 control-label">子平格局</span>
        <div class="col-md-4">
          <input class="form-control" type="text" placeholder="子平格局"
                 v-model="hsPersonHoroscopeRecd.ziPingPattern">
        </div>
      </div>

      <div class="form-group ">
        <span class="col-md-2 control-label">批命要点</span>
        <div class="col-md-8">
          <textarea class="form-control" rows="5" type="text" placeholder="主要经历"
                    v-model="hsPersonHoroscopeRecd.commentMain">

          </textarea>
        </div>
      </div>


      <div class="form-group ">
        <span class="col-md-2 control-label">主要经历</span>
        <div class="col-md-8">
          <textarea class="form-control" rows="10" type="text" placeholder="主要经历"
                    v-model="hsPersonHoroscopeRecd.mainExperience">

          </textarea>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-1 col-md-offset-3 ">
          <button class=" btn btn-success btn-block" type="submit" v-on:click="insertRecord">提交</button>
        </div>
        <div class="col-md-1  col-md-offset-1 ">
          <button class=" btn btn-success btn-block">取消</button>
        </div>
      </div>

    </form>
    <p>消息：{{ hsPersonHoroscopeRecd }}</p>
  </div>
</template>

<!-- 你的HTML代码 -->
<script>
  import HsPersonHoroscopeRecd from '../model/HsPersonHoroscopeRecd.js'

  import InsertRecord from '../mysql/InsertRecord.js'

  var hsPersonHoroscopeRecd = new HsPersonHoroscopeRecd();

  const insertRecord = new InsertRecord();

  const heavenlys = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']

  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']


  export default {
    name: 'InsertRecordPage',
    data() {
      return {
        hsPersonHoroscopeRecd: hsPersonHoroscopeRecd,
        datePicker: {
          format: "YYYY-MM-DD HH:mm",
          confirm: true,
          clearable: false
        },
        timeBefore: false
      }
    },
    methods: {
      insertRecord: function () {
        this.$ajax.post('/horoscopeRecd/insert',
          hsPersonHoroscopeRecd
        )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      nextFocus(e) {
        var nextf = e.target.getAttribute('nextf')

        var value = e.target.value
        console.log(nextf)
        debugger
        if (nextf.indexOf("Branch") >= 0 && heavenlys.indexOf(value) >= 0) {
          this.$refs[nextf].focus()
        } else if (nextf.indexOf("Branch") >= 0 && heavenlys.indexOf(value) < 0) {
          e.target.value = ""
        }
        if (nextf.indexOf("Heavenly") >= 0 && branches.indexOf(value) >= 0) {
          this.$refs[nextf].focus()
        } else if (nextf.indexOf("Heavenly") >= 0 && branches.indexOf(value) < 0) {
          e.target.value = ""
        }

      },
      makeHeavenly(newVal){
        newVal = newVal.replace(/\s+/g, "");
        var newValArr = newVal.split('')
        if (!this.$data.timeBefore) {
          newValArr.forEach(function (val, i) {
            if (val && i == 0) {
              hsPersonHoroscopeRecd.yearHeavenly = val
            }
            if (val && i == 1) {
              hsPersonHoroscopeRecd.yearBranch = val
            }
            if (val && i == 2) {
              hsPersonHoroscopeRecd.monthHeavenly = val
            }
            if (val && i == 3) {
              hsPersonHoroscopeRecd.monthBranch = val
            }
            if (val && i == 4) {
              hsPersonHoroscopeRecd.dayHeavenly = val
            }
            if (val && i == 5) {
              hsPersonHoroscopeRecd.dayBranch = val
            }
            if (val && i == 6) {
              hsPersonHoroscopeRecd.hoursHeavenly = val
            }
            if (val && i == 7) {
              hsPersonHoroscopeRecd.hoursBranch = val
            }
          })
        }else {
          newValArr.forEach(function (val, i) {
            if (val && i == 0) {
              hsPersonHoroscopeRecd.hoursHeavenly = val
            }
            if (val && i == 1) {
              hsPersonHoroscopeRecd.hoursBranch = val
            }
            if (val && i == 2) {
              hsPersonHoroscopeRecd.dayHeavenly = val
            }
            if (val && i == 3) {
              hsPersonHoroscopeRecd.dayBranch = val
            }
            if (val && i == 4) {
              hsPersonHoroscopeRecd.monthHeavenly = val
            }
            if (val && i == 5) {
              hsPersonHoroscopeRecd.monthHeavenly = val
            }
            if (val && i == 6) {
              hsPersonHoroscopeRecd.yearHeavenly = val
            }
            if (val && i == 7) {
              hsPersonHoroscopeRecd.yearBranch = val
            }
          })
        }
      }
    },
    watch: {
      'hsPersonHoroscopeRecd.eightCharacter': {
        handler(newVal, oldVal) {
          debugger
          if (!newVal) {
            return
          }
          this.makeHeavenly(newVal)
        },
        immediate: true
      },
      timeBefore:{
        handler(){
          this.makeHeavenly(hsPersonHoroscopeRecd.eightCharacter)
        }
      }
    }
  }
</script>
</body>
</html>
