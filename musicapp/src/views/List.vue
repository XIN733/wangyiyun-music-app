<template>
    <div class="container">
        <list-top :playlist="state.playlist"></list-top>
        <play-list :playlist="state.playlist"></play-list>
    </div>
</template>

<script>
import { reactive , onMounted } from 'vue'
import { useRoute , useRouter } from 'vue-router' //useRouter（跳转）router.push('/'), useRoute（获取路由参数）
import { getPlayListDetail } from '@/api/index'
import listTop from '@/components/listTop.vue'
import playList from '@/components/playList.vue'
import store from '@/store/index.js'

export default{
    components:{
        listTop,
        playList
    },
    setup(){
        let state = reactive({
            list:[],
            playlist:{
              creator:{},
              tracks:[]
            }
        })
        const route = useRoute()
        // console.log(route.query.id)
        onMounted( async ()=>{
           let id = route.query.id
           let res = await getPlayListDetail(id)
        //    console.log(res)
           state.playlist = res.data.playlist
           store.commit('setPlayList',state.playlist.tracks)
           store.dispatch('reqLyric',{id:res.data.playlist.tracks[0].id})
        })
        return {
            state
        }
    }
}
</script>