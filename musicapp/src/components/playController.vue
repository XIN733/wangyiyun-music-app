<template>
  <div class="playController">
      <div class="left" @click="isShowDetail=!isShowDetail">
         <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
         <div class="content">
            <div class="title">{{playlist[playCurrentIndex].name}}</div>
            <div class="tips">横滑可以切换上下首哦</div>
         </div> 
      </div>
      <div class="right">
        <svg class="icon play" aria-hidden="true" @click="play" v-if="paused">
          <use xlink:href="#icon-24gl-playCircle"></use>
        </svg>
         <svg class="icon play" aria-hidden="true" @click="play" v-else>
          <use xlink:href="#icon-24gl-pauseCircle"></use>
        </svg>
         <svg class="icon more" aria-hidden="true">
          <use xlink:href="#icon-24gf-playlist"></use>
        </svg>
      </div>
       <play-music v-show="isShowDetail" @back="isShowDetail=!isShowDetail" :play="play" :playDetail="playlist[playCurrentIndex]" :paused="paused"></play-music>
      <audio ref="audio"  :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import playMusic from '@/components/playMusic.vue'

export default{
    computed:{
        ...mapState(['playlist','playCurrentIndex'])
    },
    data(){
       return{
         paused:true,
         isShowDetail:false
       }
    },
    components:{
      playMusic
    },
    mounted(){
       this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
    },
    updated(){
       this.UpdateTime()
    },
    methods:{
       play(){ 
            // console.log(this.$refs.audio.paused) //判断是否播放
            // console.log(this.$refs.audio.currentTime)
            if(this.$refs.audio.paused){
               this.$refs.audio.play()
               this.UpdateTime()
            }else{
               this.$refs.audio.pause()
               clearInterval(this.$store.state.intervalId)
            }
            this.paused = !this.paused
       },
       UpdateTime(){
            this.$store.state.intervalId = setInterval(()=>{
              this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
            },1000)
       }
    },
    watch:{
        playCurrentIndex:function(){  
           this.paused = true
           this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
        },
    }
}
</script>

<style lang="less">
.playController{
    width: 7.5rem;
    height: 1.1rem;
    position: fixed;
    bottom: 0;
    left: calc(50% - 3.75rem);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-top: 1px solid #ccc;
    padding: 0 0.2rem;
    .left{
        display: flex;
        align-items: center;
      >img{
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
      }
      .content{
        margin-left: 0.1rem;
        .title{
           font-size: 0.28rem;
        }
        .tips{
           font-size: 0.24rem;
           color: #999;
           margin-top: 0.05rem;
        }
      }
    }
    .right{
        display: flex;
        align-items: center;
        .icon{
            width: 0.45rem;
            height: 0.45rem;
            color: #000;
        }
       .play{
            width: 0.55rem;
            height: 0.55rem;
            margin-right: 0.4rem;
       }
    }
}
</style>