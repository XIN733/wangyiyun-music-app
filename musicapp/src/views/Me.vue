<template>
    <div class="me-wrap">
        <div class="nav-top">
             <div class="black" @click="$router.push('/')">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuojiantou"></use>
                </svg>
            </div>
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
        <div class="user-info">
            <img :src="userInfo.profile.avatarUrl" alt="" class="avatar">
            <div class="name-box">
                <span class="name line">{{userInfo.profile.nickname}}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-vip"></use>
                </svg>
            </div>
            <div class="label-box">
                <div class="item">{{userInfo.profile.follows}} 关注</div>
                <div class="item">{{userInfo.profile.followeds}} 粉丝</div>
                <div class="item">Lv.{{userInfo.level}}</div>
            </div>
        </div>
        <div class="icon-box">
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <div class="text">最近播放</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wenjianyinle"></use>
                </svg>
                <div class="text">本地/下载</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shangchuanyunpan"></use>
                </svg>
                <div class="text">云盘</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwudai"></use>
                </svg>
                <div class="text">已购</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-huiyi"></use>
                </svg>
                <div class="text">我的好友</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang"></use>
                </svg>
                <div class="text">收藏和赞</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weibiaoti--"></use>
                </svg>
                <div class="text">我的播客</div>
            </div>
            <div class="item">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guojiangguanzi"></use>
                </svg>
                <div class="text">音乐罐子</div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
   data(){
    return{
        userInfo:this.$store.state.user.detail
    }
   }
}
</script>

<style lang="less">
.me-wrap{
    width: 7.5rem;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0 0.2rem;
    background-color: #eee;
    .nav-top{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1rem;
        .icon {
            width: 0.5rem;
            height: 0.5rem;
        }
    }
    .user-info{
        width: 100%;
        height: 2rem;
        background-color: #fff;
        border-radius: 0.2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 0.3rem;            
        .avatar{
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            position: absolute;
            top: -0.6rem;
            left: calc(50% - 0.6rem);
        }
        .name-box{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.34rem;
            font-weight: bold;
            .name{
                max-width: 5rem;
            }
            .icon{
                width: 0.6rem;
                margin-left: 0.1rem;
            }
        }
        .label-box{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.24rem;
            color: #666;
            margin-top: 0.1rem;
            div{
                margin: 0 0.15rem;
            }
        }
    }
    .icon-box{
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 0.2rem;
        margin-top: 0.3rem;
        padding: 0.3rem 0.05rem;
        .item{
            width: 25%;
            height: 1.4rem;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 0.24rem;
            color: #666;
            .icon{
                width: 0.5rem;
                height: 0.5rem;
                margin-bottom: 0.1rem;
            }
        }
    }
}
</style>