<template>
    <div class="login">
        <el-container>
            <el-header>
                <div class="title">FZU欢迎你</div>
            </el-header>
            <el-main>
                <div class="login-form">
                    <form action="#">
                        <div class="user-name common-div">  
                            <el-input type="text" name="email" v-model="email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>   
                        </div>
                        <div class="user-pasw common-div"> 
                            <el-input type="text" name="password" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-key"></el-input>  
                        </div>
                        <el-button type="primary" class="login-btn" @click="_login">登录</el-button>
                    </form>
                </div>
            </el-main>
            <el-footer>
                <div class="forgets">
                    <router-link to="/reset"><el-button type="text">忘记密码</el-button></router-link>
                    <router-link to="/regist"><el-button type="text">注册</el-button></router-link>
                </div>
            </el-footer>
        </el-container>
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
            var data = {
                "email":this.email,
                "password":this.password
            }
            if(!data.email || !data.password){
                _.alert('请填写完整')
                return;
            }
            if(!REG_EAMIL.test(data.email)){
                _.alert('邮箱格式错误')
            }
            
            this.$axios.post('/api/login',JSON.stringify(data))
            .then(res => {
                console.log(res)
                if(res.data.msg){
                    _.loginInfo({
                        state:true,
                        token:data.data.token,
                        user:data.email
                    });
                    _.alert(res.data.msg)
                    setTimeout(()=>{
                        this.$router.push('/');//跳转到主页界面
                    },1000)
                    
                }else{
                    
                    _.alert(res.data.msg);
                }
            })
            .catch(err => {
                 _.alert('系统错误')
            })
            
        }
    }
}
</script>

<style >

</style>