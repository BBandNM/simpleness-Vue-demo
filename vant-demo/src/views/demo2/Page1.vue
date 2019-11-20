<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch" class="baidu">百度学术</div>
    </van-search>
    <div class="contain">
      <div>
      <h5>学术导航</h5>
      <van-grid square :column-num="3" :border=false>
          <van-grid-item icon="printer" text="文字" />
          <van-grid-item icon="column" text="文字" />
          <van-grid-item icon="coupon" text="文字" />
          <van-grid-item icon="column" text="文字" />
          <van-grid-item icon="printer" text="文字" />
          <van-grid-item icon="coupon" text="文字" />
      </van-grid>
    </div>
    <div>
      <h5>地学论坛</h5>
      <van-grid square :column-num="3" :border=false>
          <van-grid-item icon="printer" text="文字" />
          <van-grid-item icon="column" text="文字" />
          <van-grid-item icon="coupon" text="文字" />
          <van-grid-item icon="column" text="文字" />
          <van-grid-item icon="printer" text="文字" />
          <van-grid-item icon="coupon" text="文字" />
      </van-grid>
    </div>
    </div>
    
    <Tab></Tab>
  </div>
  
</template>

<script>
  import Vue from 'vue'
  import { Search, Grid, GridItem } from 'vant'
  Vue.use(Search)
     .use(Grid)
     .use(GridItem);
  import Tab from "../../components/tabBar.vue";
  export default {
      data(){
        return{
          value:'',
        }
      },
      methods: {
        onSearch:()=>{

        }
      },
      components: {
        Tab
      }
  }
</script>

<style  scoped>
.baidu{
  border: 1px solid #555;
  padding: 5px;
  height: 20px;
  line-height: 18px;
}
h5{
  border-bottom: 1px solid #f1f1f1;
  text-align: left;
  margin-left: 10px;
  padding-bottom: 10px;
}
.contain{
  padding-bottom: 80px;
}
</style>