<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  <legend>八字案例录入</legend>
</fieldset>

<form class="layui-form" action="">
  <div class="layui-form-item">
    <label class="layui-form-label">姓名</label>
    <div class="layui-input-block">
      <input type="text" name="name" lay-verify="name" autocomplete="off" placeholder="姓名" class="layui-input"
        v-model="hsPersonHoroscopeRecd.name">
    </div>
  </div>

  <div class="layui-form-item">
    <label class="layui-form-label">性别</label>
    <div class="layui-input-block">
      <select name="sex" lay-filter="sex">
        <option value="1" selected="selected">男</option>
        <option value="2" >女</option>
      </select>
    </div>
  </div>

  <div class="layui-inline">
    <label class="layui-form-label">出生时间</label>
    <div class="layui-input-inline">
      <input type="text" name="birth_date_time" id="birth_date_time" lay-verify="datetime" placeholder="yyyy-MM-dd HH:mm:ss" autocomplete="off" class="layui-input">
    </div>
  </div>

  <div class="layui-form-item">
    <label class="layui-form-label">验证必填项</label>
    <div class="layui-input-block">
      <input type="text" name="username" lay-verify="required" lay-reqtext="用户名是必填项，岂能为空？" placeholder="请输入" autocomplete="off" class="layui-input">
    </div>
  </div>

  <div class="layui-form-item">
    <div class="layui-inline">
      <label class="layui-form-label">验证手机</label>
      <div class="layui-input-inline">
        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-inline">
      <label class="layui-form-label">验证邮箱</label>
      <div class="layui-input-inline">
        <input type="text" name="email" lay-verify="email" autocomplete="off" class="layui-input">
      </div>
    </div>
  </div>
</form>

<!-- 你的HTML代码 -->
<script>

  var HsPersonHoroscopeRecd = require('../model/HsPersonHoroscopeRecd');
  var hsPersonHoroscopeRecd = new HsPersonHoroscopeRecd();
  //一般直接写在一个js文件中
  layui.use(['layer', 'form'], function(){
    var layer = layui.layer
      ,form = layui.form;

    layer.msg('Hello World');
  });


  export default {
    name: 'hello',
    data () {
      return {
        hsPersonHoroscopeRecd: hsPersonHoroscopeRecd
      }
    }
  }
</script>
</body>
</html>
