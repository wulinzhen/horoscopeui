var UUID = require('uuid');
export default class  HsPersonHoroscopeRecd  {
  constructor(id, name, sex, yearHeavenly, yearBranch, monthHeavenly, monthBranch, dayHeavenly,
              dayBranch, hoursHeavenly, hoursBranch, ziPingPattern, commentMain, mainExperience){
    var id2 = UUID.v4()
    id2 = id2.replace(/-/g,'')
    this.id=id2;
    this.name=name;
    this.sex=1;
    this.bigLuck = "";
    this.eightCharacter = ""
    this.birthatetime="1981-01-01 12:00";
    this.yearHeavenly=yearHeavenly;
    this.yearBranch=yearBranch;
    this.monthHeavenly=monthHeavenly;
    this.monthBranch=monthBranch;
    this.dayHeavenly=dayHeavenly;
    this.dayBranch=dayBranch;
    this.hoursHeavenly=hoursHeavenly;
    this.hoursBranch=hoursBranch;
    this.ziPingPattern=ziPingPattern;
    this.commentMain=commentMain;
    this.mainExperience=mainExperience;
  }
}
