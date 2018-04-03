<template>
<div class="Home">
  <div class="banner">
 <img src="../assets/banner.jpg">
 </div>
<One>

</One>
<Two>

</Two>

</div>


</template>

<script>
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
export default {
  name: 'Home',
  components: {
    One,
    Two
  }
}
</script>
<style>
  .banner{
      width:1300px;
      margin:0 auto;
  }
.banner img{
    width:100%;
    height:100%;
}

</style>