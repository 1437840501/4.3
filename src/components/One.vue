<template>
  <div class="about">
       <div class="tu">
     <img src="../assets/2.jpg">
     <img src="../assets/3.jpg">
     <img src="../assets/4.jpg">
     <img src="../assets/5.jpg">
     </div>
     <div v-for="i in arr" class="qx">
     <div class="qx-top">
     <h2>{{i.tit}}</h2>
     <p>- New Apartment -</p>
     </div>
     <div v-for="i in arr" class="qx-1">
     <div class="qx-tu">
     <img :src="i.img"/>
     </div>
        <h3>{{i.name}}</h3>
        <span>地区：{{i.arga}}</span>
        <span>户型：{{i.des}}</span>
        <span>价格：{{i.price}}元/m²</span>
     </div>
     <div class="ll">
        <div class="ll-1">浏览更多商铺</div>
     </div>
     </div>
  </div>

</template>
<script>
export default {

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
    width:830px;
    float:left;
    margin-left:8%;
}
.tu{
    width:830px;
    height:296px;
    margin-top:100px;
}
.tu img{
    width:405px;
    height:138px;
    margin-top:10px;
    margin-left:10px;
}
.qx{
    width:830px;
    height:505px;
    border:solid 1px #e2e2e2;
    margin-top:50px;
    float:left;
}
.qx-top{
    width:100%;
    height:96px;
    background:#e5e5e5;
    text-align: center;
    float:left;
}
.qx-top h2{
    line-height:60px;
    color:#000;
    font-size:22px;
}
.qx-top p{
    font-size: 12px;;
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
.ll{
    width:100%;
    height:94px;
    background:#e5e5e5;
    float:left;
}
.ll-1{
    width:135px;
    height:35px;
    border: solid 1px #3a79e8;
    line-height:35px;
    text-align: center;
    margin:30px auto;
}
</style>