import utils from './utils';
/**
 * Created by ASUS on 2017/8/16.
 */

describe('Utils', () => {
  it('getApiPrefix .', () => {
    const str: string = utils.getApiPrefix();
    console.debug(str);
  });


  // 将一个结构解析成参数
  it('parseParam .', () => {
    const param: any = {
      account: 13544489954,
      codes: 1234,
      pwd: '465fzxvd'
    };
    const form: any = utils.parseParam(param);
    console.debug(form);
    expect(form).toBe('account=13544489954&codes=1234&pwd=465fzxvd');
  });

  // 将一个结构解析成参数 失败
  it('parseParam param null.', () => {
    const form: any = utils.parseParam(null);
    console.debug(form);
    expect(form).toBe('');
  });


  //手机号码合法性检查
  it('isPhoneNum Normal.', () => {
    const phoneNum = '13544478945';
    const fun: any = utils.isPhoneNum;
    expect(fun(phoneNum)).toBe(true);
  });

  it('isPhoneNum not string.', () => {
    const phoneNum = 13544478945;
    const fun: any = utils.isPhoneNum;
    expect(fun(phoneNum)).toBe(false);
  });

  it('isPhoneNum not phone num.', () => {
    const phoneNum = '75144478945';
    const fun: any = utils.isPhoneNum;
    expect(fun(phoneNum)).toBe(false);
  });

  it('isPhoneNum too long.', () => {
    const phoneNum = '13544478945541567545';
    const fun: any = utils.isPhoneNum;
    expect(fun(phoneNum)).toBe(false);
  });


  // 密码合法性检查
  it('isLegalPwd Normal.', () => {
    const pwd = 'abd8456';
    const fun: any = utils.isLegalPwd;
    expect(fun(pwd)).toBe(true);
  });




});
