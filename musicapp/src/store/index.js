import { createStore } from 'vuex'
import api from '@/api/index.js'
// import { resolve } from 'core-js/fn/promise'

export default createStore({
  state: {
    playlist:[{
      id:'1474411443',
      al:{
        name:'爱你',
        picUrl:'http://p3.music.126.net/vVNZDKMKb6mMEXxNljaA_g==/109951165274426604.jpg',
      }
    }],
    playCurrentIndex:0, //当前播放到哪里
    lyric:'',    //歌词
    currentTime:0,  //当前音乐的时间
    intervalId:0,   //时间间隔函数id
    user:{  //用户信息
      isLogin:false,  //是否登录状态
      loginMsg:'未登录',
      account:{},
      detail:{}
    },
  },
  getters: {
    lyricList:function(state){
      let arr = state.lyric.split(/\n/igs).map((item,i,arr)=>{
        let millLength = item.split(']')[0].split('.')[1]
        if(millLength){
          millLength = millLength.length
        }else{
          millLength = 0
        }
        let min = parseInt(item.slice(1,3))
        let sec = parseInt(item.slice(4,6))
        let mill,lyric
        if(millLength == 3){
          mill = parseInt(item.slice(7,10))
          lyric = item.slice(11,item.length)
        }else{
          mill = parseInt(item.slice(7,9))
          lyric = item.slice(10,item.length)
        }
        return {
          min,sec,mill,
          lyric,
          time:mill+sec*1000+min*60*1000,
          content:item
        }
      })
      arr.forEach((item,i)=>{
        if(i == arr.length-2){
          item.next = item.time
        }else if(i == arr.length-1){
          item.next = 0
        }else{
          item.next = arr[i+1].time
        }
        // console.log(arr[i].time)
      })
      // console.log(arr)
      return arr
    }
  },
  mutations: {
    setPlayList:function(state,value){
       state.playlist = value
    },
    pushPlayList:function(state,value){
      state.playlist.push(value)
    },
    setPlayCurrentIndex:function(state,index){
       state.playCurrentIndex = index
    },
    setLyric:function(state,value){
      state.lyric = value
    },
    setCurrentTime(state,value){
      state.currentTime = value
    },
    setUser(state,value){
      state.user = value
    }
  },
  actions: {
    async reqLyric(context,payload){
      let res = await api.getLyric(payload.id)
      context.commit('setLyric',res.data.lrc.lyric)
      // console.log(res.data.lrc.lyric)
    },
    async phoneLogin(context,payload){
      let res = await api.phoneLogin(payload.phone,payload.password)
      if(res.data.code==200){
        context.state.user.isLogin = true
        context.state.user.loginMsg = '已登录'
        context.state.user.account = res.data.account
        let userDetail = await api.getUserDetail(context.state.user.account.id)
        console.log(userDetail)
        context.state.user.detail = userDetail.data
        localStorage.userData = JSON.stringify(context.state.user)
        context.commit('setUser',context.state.user)
      }
      console.log(res)
      return res
    }
  },
  modules: {
  }
})
