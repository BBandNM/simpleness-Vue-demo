<template>
  <div>
    <van-nav-bar title="太平洋保险" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 轮播 -->
    <div class="swipeDiv">
      <van-swipe :autoplay="3000">
        <van-swipe-item><img src="../../assets/1.jpeg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../assets/2.jpeg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../assets/3.jpeg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../assets/4.jpeg" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <div>
        <ul class="box">
            <li v-for="(name, index) in liname" 
            :key="index">
                <van-icon name="friends" />
                <span v-text="name">
                </span>
            </li>
        </ul>
           

           
    </div>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" v-for="(v,i) in tabName" :key='i'>
            <span v-text="v"></span>
        </van-tabbar-item>
       
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Swipe, SwipeItem, Icon, Tabbar, TabbarItem } from "vant";

Vue.use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Icon)
  .use(Tabbar).use(TabbarItem);
export default {
  name: "taibao",
  data() {
    return {
         
        active: 0,
    
        liname:[
            '车险投保',
            '非车投保',
            '智能测评',
            '美好生活',
            '服务中心',
            '本地热门'
        ],
        tabName:[
            '首页',
            '产品',
            '服务',
            '我的'
        ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
.swipeDiv{
    
    
}
.van-swipe{
    width: 100%;
    height: 200px;
    position: relative;
}
.van-swipe img{
    width:100%;
    height: 100%;
}
.box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.box li{
    width: 30%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

 
}
</style>