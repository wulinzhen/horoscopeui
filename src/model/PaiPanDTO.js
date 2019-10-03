import BirthPlaceDTO from '../model/BirthPlaceDTO'
export default class  PaiPanDTO {
  constructor(){
    this.birthPlace = new BirthPlaceDTO();
  }
  // 姓名
  name;
  // 性别 1-男 2女
  sex;
  // 出生时间-阳历
  birthDateTime;
  /**
   * 出生时间是阴历还是阳历
   * 1-阳历
   * 2-阴历
   */
  sunOrlun;
  //出生地
  birthPlace;
}
