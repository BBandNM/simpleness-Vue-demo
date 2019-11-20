<template>
    <div>
         <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" v-for="(v,i) in tabName" :key='i'>
            <span v-text="v"></span>
        </van-tabbar-item>
       
    </van-tabbar>
    </div>
</template>

<script>
import Vue from "vue";
    import {Icon, Tabbar, TabbarItem } from "vant";

    Vue.use(Tabbar).use(TabbarItem).use(Icon);
export default {
    data() {
    return {
        name:'Tab',
        active: 0,
        tabName:[
            '首页',
            '地学机构',
            '地学期刊',
            '地学进展'
        ],
    };
  },
}
</script>