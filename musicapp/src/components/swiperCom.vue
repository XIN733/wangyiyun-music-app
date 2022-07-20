<template>
  <div id="swiperCom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in bannerList" :key="i">
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"; //版本5
import "swiper/css/swiper.min.css";
import { getBanner } from "@/api/index";

export default {
  data() {
    return {
      bannerList: [
        { pic: require("@/assets/images/home/banner1.jpg") },
        { pic: require("@/assets/images/home/banner2.jpg") },
        { pic: require("@/assets/images/home/banner3.jpg") },
        { pic: require("@/assets/images/home/banner4.jpg") },
        { pic: require("@/assets/images/home/banner5.jpg") },
      ],
    };
  },
  async mounted() {
    // async es6异步函数
    var mySwiper = new Swiper("#swiperIndex", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    let res = await getBanner(2);
    // console.log(res)
    this.bannerList = res.data.banners;
  },
  updated(){
    
  }
};
</script>

<style lang="less">
#swiperCom {
  width: 7.5rem;
  #swiperIndex {
    width: 7.1rem;
    height: 3rem;
    border-radius: 0.1rem;
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet-active {
      background: #fb4637;
    }
  }
}
</style>
