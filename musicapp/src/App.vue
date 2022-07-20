<template>
  <router-view></router-view>
  <play-controller></play-controller>
</template>

<script>
import playController from '@/components/playController'

export default{
  components:{
    playController
  },
  mounted(){
    if(localStorage.userData){
        let userData = JSON.parse(localStorage.userData)   
        this.$store.commit('setUser',userData)
        console.log(userData)
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.container{
  width: 7.5rem;
  margin: 0 auto;
}
.icon{
	 width: 0.3rem;
   height: 0.3rem;
}
.line{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap ;
}
.line2{
  overflow: hidden;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 2;	
  -webkit-box-orient: vertical;
}
a{
  color: #333;
  text-decoration: none;
}
input{
  outline: none;
}

</style>
