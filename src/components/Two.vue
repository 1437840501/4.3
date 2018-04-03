<template>
  <div class="about-1">
    <div class="right">
            <div class="right-1">
               <span>楼市动向 - NEWS</span>
               <span>阅读更多</span>
            </div>
            <ul v-for="i in arr">
            <li>
            <span>{{i.tit}}</span>
            <p>{{i.nr}}</p>
            </li>
            </ul>
        </div>
  </div>
</template>
<script>
export default {

  props: {
    msg: String
  },
   created(){
      this.$http.get('http://localhost:3000/two').then(e=>this.arr=e.body)
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
.about-1{
float:left;
}
.right{
width:290px;
height:490px;
margin-top:110px;
margin-left:30px;
background:#f7f7f7;
}
.right-1{
width:100%;
height:65px;
}
.right-1 span:nth-child(1){
margin-left:30px;
line-height:65px;
font-size:12px;
font-size:bold;
}
.right-1 span:nth-child(2){
padding:5px 10px;
border:solid 1px #000;
font-size:12px;
margin-left:50px;
}
.right ul li{
list-style:none;
font-size:14px;
margin-left:30px;
margin-top:20px;
line-height:25px;
}
.right ul li span{
color:#000;
}
</style>