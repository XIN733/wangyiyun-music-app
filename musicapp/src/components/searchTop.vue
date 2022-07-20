<template>
  <div class="searchTop">
    <div class="searchTopNav">
      <div class="black" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="search-box">
        <input
          type="text"
          v-model="searchKeyword"
          :placeholder="placeholder"
          @keydown.enter="saveKeyWord"
        />
      </div>
    </div>
    <div class="history" v-show="keywordList.length>0">
      <div class="historyLeft">
        <div class="label">历史</div>
        <div class="keywordList">
          <div class="keyItem" v-for="(item, i) in keywordList" :key="i" @click="setSearchKeyword(item)">{{ item }}</div>
        </div>
      </div>
      <div class="historyRight" @click="clearKeywordList">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lajitong"></use>
        </svg>
      </div>
    </div>
    <div class="playList" v-show="songs.length>0">
      <div class="playList-top">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yunhang"></use>
          </svg>
          <div class="text">
            <span class="title">播放全部</span>
            <span class="num">(共{{ songs.length }}首)</span>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="playItem" v-for="(item, i) in songs" :key="i">
          <div class="left">
            <div class="index">{{ i + 1 }}</div>
            <div class="content">
              <div class="title line">{{ item.name }}</div>
              <div class="author">
                <span class="text line">{{ item.ar[0].name }}-{{ item.name }}</span>
              </div>
            </div>
          </div>
          <div class="right">
            <svg class="icon play" aria-hidden="true" @click="setPlay(item)">
              <use xlink:href="#icon-bofangshu"></use>
            </svg>
            <svg class="icon more" aria-hidden="true">
              <use xlink:href="#icon-diandiandianshu"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchMusic,getSongDetail } from "@/api/index.js";

export default {
  data() {
    return {
      placeholder: "陈奕迅",
      searchKeyword: "",
      keywordList: [],
      songs: [],
    };
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList?JSON.parse(localStorage.keywordList):[];
  },
  methods: {
    async saveKeyWord() {
      if(this.searchKeyword.trim()){
          this.keywordList.unshift(this.searchKeyword.trim());
          this.keywordList = Array.from(new Set(this.keywordList))
          if(this.keywordList.length>10){
            this.keywordList = this.keywordList.slice(0,10)
          } 
          localStorage.keywordList = JSON.stringify(this.keywordList);
          let res = await searchMusic(this.searchKeyword);
          // console.log(res.data.result.songs);
          if(res.data.result.songs){
            let ids =''
            res.data.result.songs.forEach((item,i)=>{
              if(i==0){
                ids+=item.id
              }else{
                ids+= ','+item.id
              }
            })
            let res2 = await getSongDetail(ids);
            res2.data.songs.forEach((item,i)=>{
              item.al.name = item.name
            })
            this.songs = res2.data.songs
            // console.log(res2.data.songs)
            // console.log(this.songs)
          }else{
            this.songs=[]
          }
      }
    },
    clearKeywordList() {
      this.keywordList = [];
      localStorage.keywordList = [];
    },
    setSearchKeyword(keyword) {
      this.searchKeyword = keyword;
      this.saveKeyWord();
    },
    async setPlay(item){
      this.$store.commit('pushPlayList',item)
      this.$store.commit('setPlayCurrentIndex',this.$store.state.playlist.length-1)
      // console.log(this.$store.state.playlist)
    }
  },
};
</script>

<style lang="less">
.searchTop {
  width: 7.5rem;
  .searchTopNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.2rem;
    padding: 0 0.2rem;
    > div {
      display: flex;
      align-items: center;
      justify-self: center;
    }
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #000;
    }
    .search-box {
      width: 6.2rem;
      height: 100%;
      input {
        width: 100%;
        height: 70%;
        border-bottom: 1px solid #999;
        font-size: 0.35rem;
      }
    }
  }
  .history {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem 0;
    .historyLeft {
      display: flex;
      .label {
        font-size: 0.3rem;
        font-weight: bold;
        margin-top: 0.02rem;
      }
      .keywordList {
        margin-left: 0.3rem;
        display: flex;
        flex-wrap: wrap;
        width: 5.5rem;
        .keyItem {
          font-size: 0.28rem;
          background-color: #eee;
          color: #666;
          padding: 0.05rem 0.2rem 0.08rem;
          border-radius: 0.4rem;
          margin: 0 0.12rem 0.2rem 0;
        }
      }
    }
    .historyRight {
      .icon {
        width: 0.35rem;
        height: 0.35rem;
        margin-top: 0.05rem;
      }
    }
  }
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
    }
    .list {
      padding: 0 0.2rem;
      .playItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1rem;
        .left {
          display: flex;
          align-items: center;
          width: 5.3rem;
          .index {
            color: #666;
            width: 0.45rem;
            font-size: 0.28rem;
          }
          .content {
            .title {
              font-size: 0.3rem;
              font-weight: 999;
              margin-bottom: 0.1rem;
              width: 4.5rem;
            }
            .author {
              font-size: 0.2rem;
              color: #666;
              display: flex;
              align-items: center;  
              .text {
                display: inline-block;
                width: 3.6rem;
              }
            }
          }
        }
        .right {
          .icon {
            width: 0.35rem;
            height: 0.35rem;
          }
          .play {
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
}
</style>