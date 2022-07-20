<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanjutuijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon--FMRadio"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinlegedan-"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang-"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<style lang="less">
.iconList{
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.3rem  0.4rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon{
            width: 0.7rem;
            height: 0.7rem;
        }
        span{
            font-size: 0.26rem;
            margin-top: 0.1rem;
        }
    }
}
</style>