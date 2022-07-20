<template>
  <div class="playMusic">
    <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">
            <!-- 走马灯 -->
            <marquee behavior="scroll" direction="left">{{ playDetail.al.name }}</marquee>
        </div>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
    <div class="playContent" v-show="!isShowLyric">
        <img src="@/assets/images/disc-plus.png" alt="" class="discPlus">
        <img src="@/assets/images/needle-plus.png" alt="" class="needlePlus" :class="{active:!paused}">
        <img :src="playDetail.al.picUrl" alt="" class="picUrl">
    </div>
    <div class="playLyric" v-show="isShowLyric" ref="playLyric" >
       <p :class="{active:(currentTime*1000>(item.time-400)&&currentTime*1000<=(item.next-400))}" v-for="(item,i) in $store.getters.lyricList" :key="i">{{item.lyric}}</p>
    </div>
    <div class="progress"></div>
    <div class="playFooer">
       <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-xunhuan"></use>
        </svg>
         <svg class="icon prevBtn" aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-shangyishoushangyige"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" @click="play" v-if="paused">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" @click="play" v-else>
          <use xlink:href="#icon-24gl-pauseCircle"></use>
        </svg>
         <svg class="icon nextBtn" aria-hidden="true" @click="goPlay(1)">
          <use xlink:href="#icon-xiayigexiayishou"></use>
        </svg>
         <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-24gf-playlist"></use>
        </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  props: ["playDetail","paused","play"],
  data(){
    return{
       isShowLyric:true
    }
  },
  mounted(){
    // console.log(this.playDetail)
  },
  computed:{
    ...mapState(['lyric','currentTime','playCurrentIndex','playlist'])
  },
  methods:{
    goPlay(num){
       let currentIndex = this.playCurrentIndex
       let list = this.playlist
       let index = currentIndex + num
       if(index < 0){
         index = list.length-1
       }else if(index == list.length){
         index = 0
       }
       this.$store.commit('setPlayCurrentIndex',index)
    } 
  },
  watch:{
     currentTime:function(newVal){
      //  console.log([this.$refs.playLyric])
       let p = document.querySelector('p.active')
       let offsetTop = p.offsetTop
       let h = this.$refs.playLyric.offsetHeight
       if(offsetTop>h/2){
          this.$refs.playLyric.scrollTop = offsetTop-(h/2)
       }
     }
  }
};
</script>

<style lang="less">
.playMusic {
  width: 7.5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: calc(50% - 3.75rem);
  background-color: #fff;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    filter: blur(60px);
    background-color: #fff;
    background-position: center;
  }
  .playTop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.2rem;
    .icon {
        width: 0.5rem;
        height: 0.5rem;
        fill: #fff;
    }
    .back {
       display: flex;
       align-items: center;
       height: 100%;
      .title {
        font-size: 0.35rem;
        color: #fff;
        margin-left: 0.3rem;
        width: 4.5rem;
        marquee{
            width: 100%;
        }
      }
    }
  }
  .playContent{
    width: 100%;
    height: 7rem;
    position: absolute;
    top: 1.5rem;
    left: 0;
    .needlePlus{
        width:1.7rem;
        height: auto;
        position: absolute;
        top:0;
        left: 50%;
        transform-origin: 0.1rem 0;
        transform: rotate(-20deg);
        transition:  all 1s;
    }
    .needlePlus.active{
        transform: rotate(5deg);
    }
    .discPlus{
        width:5.3rem ;
        height: auto;
        position: absolute;
        top: 1.5rem;
        left: calc(50% - 2.65rem);
    }
    .picUrl{
      position: absolute;
      top: 2.38rem;
      left: calc(50% - 1.75rem);
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
    }
  }
  .playLyric{
    width: 100%;
    height: 8rem;
    position: absolute;
    top: calc(50% - 4rem);
    left: 0;
    padding: 0 .55rem;
    text-align: center;
    overflow-y: scroll;
    color: rgba(255, 255, 255, .7);
    p{
      margin: 0.2rem 0;
    }
    .active{
      color:pink;
    }
  }
  .playFooer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to bottom,rgba(250, 249, 249,.1),rgba(0,0,0,.5));
    padding: 0 0.4rem;
    .icon{
      width: 0.45rem;
      height: 0.45rem;
      fill: #fff;
    }
    .play{
      width: 0.8rem;
      height: 0.8rem;
    }
    .prevBtn{
      margin-right: -0.3rem;
    }
    .nextBtn{
      margin-left: -0.3rem;
    }
  }
}
</style>