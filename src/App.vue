<template>
  <div id="app">
    <div id="nav">
   <div class="nav-1">
 <div class="logo">
 <img src="./assets/1.png">
 </div>
 <div class="ly">
 <router-link to="/">首页</router-link>
 <router-link to="/about">全新楼盘</router-link>
 <router-link to="/one">二手楼盘</router-link>
 <router-link to="/two">全新商铺</router-link>
 <router-link to="/">楼市动态</router-link>
 <router-link to="/">联系动态</router-link>
 </div>
 <div class="dh">
 <span class="d">008-6666 6666</span>
 <span class="h">咨讯电话</span>
 </div>
 </div>
    </div>
    <router-view/>
  </div>
</template>

    <style>
    *{
        margin:0;
        padding:0;
    }
#app{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;

}
#nav{
    width:100%;
    float:left;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-1{
    width:1300px;
    margin:0 auto;
}
.logo{
    float: left;
    margin-left:60px;
}
.logo img{
    padding-top:25px;
}
.ly{
    float: left;
    margin-left:80px;
    font-size: 19px;
    line-height: 100px;
}
.ly a{
    padding-left:30px;
    color:#000;
    text-decoration: none;
}
.dh{
width:240px;
height:100px;
margin-left:50px;
float: left;
}
.d{
    line-height:100px;
}
.h{
margin-left:20px;
padding:6px 16px;
background:#3a79e8;
border-radius: 5px;
}
</style>
