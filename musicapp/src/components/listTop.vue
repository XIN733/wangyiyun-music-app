<template>
  <div class="listTop">
    <img :src="playlist.coverImgUrl" alt="" class="bg" />
    <div class="listTopNav">
      <div class="black" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-diandiandianshu"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyousanjiaoxing"></use>
          </svg>
          <span>{{ changeValue(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentRight">
        <h3 class="line2">{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" alt="" class="header" />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description line2">{{ playlist.description }}</div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xinxi"></use>
        </svg>
        <div>{{ playlist.commentCount }}</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <div>{{ playlist.shareCount }}</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
        </svg>
        <div>下载</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuankuang"></use>
        </svg>
        <div>多选</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
  setup(props, content) {
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
      changeValue,
    };
  },
};
</script>

<style lang="less">
.listTop {
  width: 7.5rem;
  padding:0  0.2rem ;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    filter: blur(40px);
  }
  .listTopNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.2rem;
    > div {
      display: flex;
      align-items: center;
      justify-self: center;
    }
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .black {
      .title {
        font-size: 0.35rem;
        color: #fff;
        margin-left: 0.4rem;
      }
    }
    .right {
      .search {
        margin-right: 0.5rem;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0 0.4rem;
    .contentLeft {
      position: relative;
      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }
      .count {
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
        color: rgb(236, 234, 234);
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        font-weight: 900;
        .icon {
          width: 0.3rem;
          height: 0.25rem;
          margin-right: 0.05rem;
        }
      }
    }
    .contentRight {
      width: 4rem;
      h3 {
        color: #fff;
      }
      .author {
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        .header {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          margin-right: 0.2rem;
        }
        span {
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.26rem;
        }
      }
      .description {
        font-size: 0.24rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 0.38rem;
      }
    }
  }
  .iconList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem 0.3rem ;
    width: 100%;
    .iconItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        fill: #fff;
      }
      div {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.24rem;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>