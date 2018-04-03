<template>
  <div class="about">
    <div class="lp">
    <div class="lp-1">
    <span>首页 ＞ 全新楼盘</span>
    </div>
    </div>
    <div class="warp">
    <div class="new">

    <div class=new-1>
    <h3>全新楼盘 /<span> NEW APARTMENT</span></h3>
    </div>
    <div class="new1" v-for="i in arr">
    <div v-for="i in arr" class="qx-1">
         <div class="qx-tu">
         <img :src="i.img"/>
         </div>
            <h3>{{i.name}}</h3>
            <span>地区：{{i.arga}}</span>
            <span>户型：{{i.des}}</span>
            <span>价格：{{i.price}}元/m²</span>
         </div>
    </div>
    </div>



    </div>
     <Quan/>
  </div>
</template>

<script>
import Quan from '@/components/Quan.vue'
export default {
  components:{
  Quan
  },
  props: {
    msg: String
  },
   created(){
      this.$http.get('http://localhost:3000').then(e=>this.arr=e.body)
      },
      data(){
      return{
      keyword:'fa',
      arr:[]

      }
      },
       methods:{
        a(e){
        this.show=e;
        },
        }
      }
</script>

<style>
.about{
    width:100%;
    float:left;
}
.lp{
width:100%;
height:80px;
background:#f4f4f4;
float:left;
}
.lp-1{
width:87%;
margin:0 auto;
}
.lp-1 span{
line-height:80px;
}
.warp{
width:87%;
margin:0 auto;
}
.new{
width:830px;
float:left;
}
.new-1{
    margin-top:30px;
    width:100%;
    height:96px;
    float:left;
}
.new-1 h3{
    font-size:14px;
    line-height:96px;
}

.qx-1{
    width:33.3%;
    height:315px;
    float:left;
}
.qx-tu{
    width:100%;
    height:175px;
}
.qx-1 h3{
    color:#000;
    font-size:16px;
    line-height:60px;
    margin-left:10px;
}
.qx-1 span{
    display: block;
    margin-left:10px;
    color:#000;
    font-size:12px;
    line-height:20px;
}

</style>