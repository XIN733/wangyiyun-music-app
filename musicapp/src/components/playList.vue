<template>
  <div class="playList">
    <div class="playList-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yunhang"></use>
        </svg>
        <div class="text">
          <span class="title">播放全部</span>
          <span class="num">(共{{ playlist.tracks.length }}首)</span>
        </div>
      </div>
      <div class="btn">+ 收藏({{ changeValue(playlist.subscribedCount) }})</div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title line">{{ item.name }}</div>
            <div class="author">
                <span class="tag">{{playlist.tags[0]}}</span>
                <span class="text line">{{ item.ar[0].name }}-{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon play" aria-hidden="true" @click="setPlayCurrentIndex(i)">
            <use xlink:href="#icon-bofangshu"></use>
          </svg>
          <svg class="icon more" aria-hidden="true">
            <use xlink:href="#icon-diandiandianshu"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ["playlist"],
  setup() {
    function changeValue(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 1000000000;
        res = res.toFixed(2) + "亿";
      } else if (num >= 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      } else {
        res = num;
      }
      return res;
    }
    return {
      changeValue,...mapMutations(['setPlayCurrentIndex'])
    };
  },
};
</script>

<style lang="less">
.playList {
  width: 7.5rem;
  padding: 0 0.2rem;
  background-color: #fff;
  border-radius: 0.4rem 0.4rem 0 0;
  padding-bottom: 1.2rem;
  .playList-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1rem;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
      .text {
        display: flex;
        align-items: center;
        .title {
          font-size: 0.34rem;
          font-weight: 900;
          margin-left: 0.2rem;
        }
        .num {
          font-size: 0.24rem;
          color: #666;
          margin: 0.02rem 0 0 0.1rem;
        }
      }
    }
    .btn {
      font-size: 0.24rem;
      background-color: #ff4d39;
      color: #fff;
      border-radius: 0.4rem;
      height: 0.6rem;
      line-height: 0.6rem;
      padding: 0 0.2rem;
    }
  }
  .list{
    padding: 0 0.2rem;
     .playItem{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1rem;
        .left{
            display: flex;
            align-items: center;
            width: 5.3rem;
            .index{
               color: #666;
               width: 0.45rem;
               font-size: 0.28rem;
            }
            .content{
                .title{
                    font-size: 0.3rem;
                    font-weight: 999;
                    margin-bottom: 0.1rem;
                    width: 4.5rem;
                }
                .author{
                    font-size: 0.2rem;
                    color: #666;
                    display: flex;
                    align-items: center;
                    .tag{
                       border: 1px solid #fc5546;
                       border-radius: 0.05rem;
                       color: #fa3422;
                       margin-right: 0.1rem;
                       padding: 0 0.02rem;
                    }
                    .text{
                        display: inline-block;
                        width: 3.6rem;
                    }
                }
            }
        }
        .right{
            .icon{
                width: 0.35rem;
                height: 0.35rem;
            }
            .play{
                margin-right: 0.2rem;
            }
        }
     }
  }
}
</style>