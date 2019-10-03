var  InsertRecord = function () {

}
var insertRecord = new InsertRecord()

var UUID = require('uuid');

InsertRecord.prototype.insert = function(json){

  var  sql = "INSERT INTO `hs_person_horoscope_recd`(`id`, `name`, `sex`, `year_heavenly`, " +
    "`year_branch`, `month_heavenly`, `month_branch`, `day_heavenly`, `day_branch`, `hours_heavenly`, " +
    "`hours_branch`, `zi_ping_pattern`, `comment_main`, `main_experience`) VALUES (%s);";
  json["id"] = UUID.v4()
  var s = "";
  s=s+"'"+json.id+"',";
  s=s+"'"+json.name+"',";
  s=s+"'"+json.sex+"',";
  s=s+"'"+json.year_heavenly+"',";
  s=s+"'"+json.year_branch+"',";
  s=s+"'"+json.month_heavenly+"',";
  s=s+"'"+json.month_branch+"',";
  s=s+"'"+json.day_heavenly+"',";
  s=s+"'"+json.day_branch+"',";
  s=s+"'"+json.hours_heavenly+"',";
  s=s+"'"+json.hours_branch+"',";
  s=s+"'"+json.zi_ping_pattern+"',";
  s=s+"'"+json.comment_main+"',";
  s=s+"'"+json.main_experience+"'";

  sql = sql.replace("%s",s)

  connection.insert(sql,function (err, result) {
    if(err){
      console.log('[insert ERROR] - ',err.message);
      return;
    }

    console.log('--------------------------insert----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
  });
  connection.end();
}
