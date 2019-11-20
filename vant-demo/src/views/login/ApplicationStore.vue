<template>
  <div>
    <van-nav-bar 
        title="企业移动应用商店" left-text="返回" left-arrow @click-left="onClickLeft" 
    />
    <van-grid 
        :column-num="3" 
        :border=false
        :square =true  
        class="content"
    >
      <van-grid-item 
        v-for="value in 9" 
        :key="value" 
        icon="photo-o" 
        text="文字"
        to='/taibao'
        />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Grid, GridItem } from "vant";

Vue.use(NavBar)
    .use(Grid)
    .use(GridItem);
export default {
  name: "store",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
.content{
    margin-top: 30px;
}
</style>