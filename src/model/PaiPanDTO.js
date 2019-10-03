class PaiPanDTO {
  // 姓名
  name:string;
  // 性别 1-男 2女
  sex:number;
  // 出生时间-阳历
  birthDateTime:string;
  /**
   * 出生时间是阴历还是阳历
   * 1-阳历
   * 2-阴历
   */
  sunOrlun:number;
  //出生地
  birthPlace:BirthPlaceDTO;
  constructor(){

  }

  // 方法
  disp():void {
    console.log("PaiPanDTO :   "+this)
  }
}
