const axios = require('axios')
const url = 'https://api.m.jd.com/client.action?functionId=signBeanAct&body=%7B%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22rnVersion%22%3A%223.9%22%7D&appid=ld&client=apple&clientVersion=10.0.10&networkType=wifi&osVersion=13.6&uuid=2fc6e51bff1b1d893a0ee2d9c232be4d28114cda&openudid=2fc6e51bff1b1d893a0ee2d9c232be4d28114cda&jsonp=jsonp_1628012528120_40667'
const userAgent = 'jdapp;iPhone;10.0.10;13.6;2fc6e51bff1b1d893a0ee2d9c232be4d28114cda;network/wifi;ADID/3516E152-7849-43F9-953D-924814F65F15;model/iPhone11,8;addressid/345415946;appBuild/167764;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
let cookie = 'pt_key=app_openAAJhA1EHADBdfd31QawyK1owhootmcIyZM8p27LybBN27cKwP8-qHLJMbHv9kpbpb6-tcNcHQ14;pt_pin=%E6%88%91%E5%88%98%E5%B0%8F%E6%B0%93'
cookie  = "pt_key=AAJhCYljADCktSpZr1AOixblK7UZvAqQTngO1DjTT_2bAWKLIO8ceeuwN99lizXNVs0QfEJd740;pt_pin=jd_ZIQnyiPjQDEI"
console.log(decodeURI("%E6%88%91%E5%88%98%E5%B0%8F%E6%B0%93"))
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
  console.log(res.data)
})
