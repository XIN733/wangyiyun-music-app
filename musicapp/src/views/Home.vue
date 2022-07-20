<template>
  <div class="container">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import topNav  from "@/components/topNav.vue";
import swiperCom from '@/components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'


export default {
  components: {
    topNav,
    swiperCom,
    iconList,
    musicList
  }
};
</script>


