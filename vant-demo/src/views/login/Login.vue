
<template>
    <div>
        <van-image
            width="100"
            height="100"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            class="loginImg"
        />
        <div class="content">
            <div class="userName">
                <div style="width:20%">用户名:</div>
                <van-field 
                    v-model="value"
                    class="usernameInput"
                    placeholder="请输入用户名"
                    right-icon="question-o"
                    @click-right-icon="$toast('用户名必须是手机号')"/>
            
            </div>
             <div class="password">
                <div style="width:20%">密码:</div>
                <van-field 
                    class="passwordInput"
                    placeholder="请输入密码" 
                    right-icon="eye"
                    />
            
            </div>
             <div class="authcode">
                <div style="width:20%">验证码:</div>
                <van-field 
                    class="authcodeInput"
                    placeholder="请输入验证码" 
                    maxlength='4'
                    />
            <van-image
                width="22%"
                height='45px'
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573721983143&di=b8a0b31ebdaf8db725fae06e20ab8d3f&imgtype=0&src=http%3A%2F%2Fimg11.360buyimg.com%2Fwanxiang%2Fs340x340_jfs%2Ft17110%2F34%2F144592244%2F13762%2Fe86d2dfe%2F5a5f6cffN1a8b9b01.jpg"
            />
            </div>
        </div>
        
        <van-button 
            round 
            type="primary" 
            size="normal"
            icon="wap-home-o"
            to="/store"
        >登录</van-button>
    </div>
</template>


<script>
import Vue from 'vue'
import { Button, Image, Cell, CellGroup, Field, } from 'vant'
Vue.use(Button).use(Image).use(Cell).use(CellGroup).use(Field)

export default {
    name:'login',
   data(){
       return{
           value:''
       }
   }
}


</script>

<style  scoped>
    .loginImg{
  
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
        border: 1px solid #f2f2f2;
        padding: 5px
    }
    .userName,.password,.authcode{
        display: flex;
        align-items: center;
    }
    .password,.authcode{
        margin-top: 20px;
    }
    .content{
        padding: 20px 70px
    }
    .usernameInput,.passwordInput{
        width: 80%;
        border: 1px solid #f2f2f2;
       margin-left: 10px;
    }
    .authcodeInput{
        width: 50%;
        border: 1px solid #f2f2f2;
       margin-left: 10px;
       margin-right: 3%;
    }
    .van-button--normal{
        width: 80%;
        margin-top: 30px;
    }
        
</style>