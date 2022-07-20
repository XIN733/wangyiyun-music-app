<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="mlist">
            <div class="swiper-container" id="musicSwiper">
                <div class="swiper-wrapper">
                    <router-link :to="{path:'/list',query:{id:item.id}}" class="swiper-slide" v-for="(item,i) in state.musicList" :key="i">
                       <img :src="item.picUrl" :alt="item.name">
                       <div class="name line2">{{item.name}}</div>
                       <div class="count">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xiangyousanjiaoxing"></use>
                            </svg>
                            <span>{{changeValue(item.playCount)}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';  //版本5
import 'swiper/css/swiper.min.css';
import  { getMusicList } from '@/api/index'
import { reactive,onMounted,onUpdated } from 'vue'; //响应式

// vue3
export default{
    setup(){
        let state = reactive({musicList:[]})
        function changeValue(num){
            let res = 0
            if(num>=100000000){
                res = num/1000000000
                res =  res.toFixed(2) + '亿'
            }else if(num>=10000){
                res = num/10000
                res = res.toFixed(2) + '万'
            }else{
                res = num
            }
            return res
        }
        onMounted(async ()=>{
            let res = await getMusicList(15)
            state.musicList= res.data.result
            // console.log(res.data.result)
        })
        onUpdated(()=>{
            var mySwiper = new Swiper('#musicSwiper', { 
                slidesPerView:3.1,
                spaceBetween:8,
            });
        })
        return {
            state,changeValue,onUpdated
        }
    },
}

/*  vue2
export default {
  data(){
     return{
        musicList:[]
     }
  },
  methods:{
     changeValue(num){
        let res = 0
        if(num>=100000000){
            res = num/1000000000
            res =  res.toFixed(2) + '亿'
        }else if(num>=10000){
            res = num/10000
            res = res.toFixed(2) + '万'
        }else{
            res = num
        }
        return res
     }
  },
  async mounted(){
    let res = await getMusicList(10)
    this.musicList = res.data.result
  },
  updated(){
    var mySwiper = new Swiper('#musicSwiper', { 
        slidesPerView:3.1,
        spaceBetween:8,
    });
  },
};
*/
</script>

<style lang="less">
.musicList{
    width: 7.5rem;
    .musicList-top{
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.4rem;
        .title{
            font-size: 0.4rem;
            font-weight: bold;
        }
        .more{
            border: 1px solid #ccc;
            padding: 0.06rem;
            border-radius: 0.2rem;
            font-size: 0.24rem;
        }
    }
    .mlist{
        #musicSwiper{
           width: 100%;
           height:3rem;
           padding: 0 0.4rem;
           .swiper-slide{
              display: flex;
              flex-direction: column;
              img{
                width: 100%;
                border-radius: 0.1rem;
              }
              div{
                font-size: 0.24rem;
              }
              .name{
                line-height: 0.36rem;
                width: 100%;
                margin-top: 0.08rem;
              }
              .count{
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                color: rgb(236, 234, 234);
                display: flex;
                align-items:center;
                .icon{
                    width: 0.3rem;
                    height: 0.25rem;
                    margin-right: 0.05rem;
                    fill: #fff;
                }
              }
           }
        }
    }
}
</style>