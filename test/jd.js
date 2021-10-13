const axios = require('axios')
const url = 'https://api.m.jd.com/client.action?functionId=signBeanAct&body=%7B%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22rnVersion%22%3A%223.9%22%7D&appid=ld&client=apple&clientVersion=10.0.10&networkType=wifi&osVersion=13.6&uuid=2fc6e51bff1b1d893a0ee2d9c232be4d28114cda&openudid=2fc6e51bff1b1d893a0ee2d9c232be4d28114cda&jsonp=jsonp_1628012528120_40667'
const userAgent = 'jdapp;iPhone;10.0.10;13.6;2fc6e51bff1b1d893a0ee2d9c232be4d28114cda;network/wifi;ADID/3516E152-7849-43F9-953D-924814F65F15;model/iPhone11,8;addressid/345415946;appBuild/167764;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'


const cookies = [
  {
    key: 'AAJhHqt4ADDfh7M5_mTWgP7xB-DvvHBH-4VoB6aTCRDdzwsSopY_IkA1LopWr8uzWVtDxADxfnk', // 6524
    pin: '%E6%88%91%E5%88%98%E5%B0%8F%E6%B0%93'
  },
  {
    key: 'AAJhCYljADCktSpZr1AOixblK7UZvAqQTngO1DjTT_2bAWKLIO8ceeuwN99lizXNVs0QfEJd740', // 7178
    pin: 'jd_ZIQnyiPjQDEI'
  },
  {
    key: 'AAJhH8ExADBJNELIBOOvcWv4Ikik8xELL7-vf_PvAbSzwyaUb_n0aYGNfnZztp_raZBWgMArQ0g', // 0273
    pin: 'jd_626d0e575fca0'
  }, {
    key: 'AAJhH8F4ADASPJhlCnP025KXtI7x8a_szVJpj0-bKpmdJaF44eMlIyW5oB-F-3oooulHxeFQJwc', // 7178
    pin: 'jd_698f6333cfe1a'
  },
]

cookies.forEach((item) => {
  requestJD(`pt_key=${item.key};pt_pin=${item.pin}`)
})

function requestJD (cookie) {
  axios.get('https://api.m.jd.com/client.action', {
    headers: {
      'Accept': 'application/json,text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-cn',
      'Connection': 'keep-alive',
      'Cookie': cookie,
      'Referer': 'https://api.m.jd.com/client.action?functionId=signBeanAct&body=%7B%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22rnVersion%22%3A%223.9%22%7D&appid=ld&client=apple&clientVersion=10.0.10&networkType=wifi&osVersion=13.6&uuid=2fc6e51bff1b1d893a0ee2d9c232be4d28114cda&openudid=2fc6e51bff1b1d893a0ee2d9c232be4d28114cda&jsonp=jsonp_1628012528120_40667',
      'User-Agent': userAgent
    },
    params: {
      functionId: 'signBeanAct',
      appid: 'ld',
      client: 'apple',
      clientVersion: '10.0.10',
      networkType: 'wifi',
      osVersion: '13.6',
      uuid: '2fc6e51bff1b1d893a0ee2d9c232be4d28114cda',
      openudid: '2fc6e51bff1b1d893a0ee2d9c232be4d28114cda',
      jsonp: 'jsonp_1628012528120_40667',
    }
  }).then((res) => {
    if (res.status == 200) {
      console.log(res.data)
    } else {
      console.log(`请求错误${res.statusText}`)
    }

    console.log('\n\n')
  })
}
