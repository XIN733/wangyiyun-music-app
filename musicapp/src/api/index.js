import axios from 'axios';

// let baseUrl = 'http://localhost:3000'
let baseUrl = 'http://music.cpengx.cn'

// 获取轮播图api, type:资源类型 ,  0:pc  1:android  2:iphone  3:ipad
export function getBanner(type=0){
    return  axios.get(`${baseUrl}/banner?type=${type}`)
}

// 获取推荐歌单api, limit:取出数量 , 默认为 30 (不支持 offset)
export function getMusicList(limit=30){
    return  axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单详情api,  必选参数:id  歌单id ，可选参数:s 歌单最近的 s 个收藏者,默认为 8
export function getPlayListDetail(id){
    return  axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 获取歌词api,  必选参数:id  音乐 id 
export function getLyric(id){
    return  axios.get(`${baseUrl}/lyric?id=${id}`)
}

// 搜索歌曲api,  必选参数:keywords : 关键词 
// 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
export function searchMusic(keywords){
    return  axios.get(`${baseUrl}/search?keywords=${keywords}`)
}

// 获取歌曲详情api, 必选参数 : ids: 音乐 id, 如 ids=347230
export function getSongDetail(ids){
    return  axios.get(`${baseUrl}/song/detail?ids=${ids}`)
}

// 登录api, 必选参数 :phone: 手机号码  password: 密码
// 可选参数 : countrycode: 国家码，用于国外手机号登录，例如美国传入：1  md5_password: md5 加密后的密码,传入后 password 参数将失效
// captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效
export function phoneLogin(phone,password){
    return  axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户详情api, 必选参数 : uid : 用户 id
export function getUserDetail(uid){
    return  axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}

export default{
    getBanner,getMusicList,getPlayListDetail,getLyric,searchMusic,getSongDetail,phoneLogin,getUserDetail
}