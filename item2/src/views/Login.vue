<template>
    <div class="login">
        <div class="title">FZU欢迎你</div>
        <div class="login-form">
            <form action="#">
                <div class="user-name common-div">
                    <input type="text" name="email" v-model="email" placeholder="邮箱" />        
                </div>
                <div class="user-pasw common-div">
                    <input type="password" name="password" v-model="password" placeholder="密码" />        
                </div>
                <div class="login-btn" @click="_login">登录</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to="/reset">忘记密码?</router-link>
            <router-link to="/regist">新来的?注册</router-link>
        </div>
    </div>
</template>

<script>
import * as _ from '../util/index'
const REG_EAMIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export default {
    name:'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        // 用户登录
        _login() {
            console.log(this)
            let params = {
                email:this.email,
                password:this.password
            }
            if(!params.email || !params.password){
                _.alert('请填写完整')
                return;
            }
            if(!REG_EAMIL.test(params.email)){
                _.alert('邮箱格式错误')
            }
            
            /* this.$axios.post('/api/login',this.stringify(params))
            .then(res => {
                if(res.data.succ){
                    _.loginInfo({
                        state:true,
                        user:params.email
                    });
                    _.alert(res.data.msg)
                    setTimeout(()=>{
                        this.$router.push('/home');//跳转到主页界面
                    },1000)
                    
                }else{
                    
                    _.alert(res.data.msg);
                }
            })
            .catch(res => {
                 _.alert('系统错误')
            }); */
            
        }
    }
}
</script>

<style >

</style>