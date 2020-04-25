<template>
    <div class="login">
        <div class="title">welcome to FZU</div>
        <div class="login-form">
            <form action="#">
                <div class="user-name common-div">
                    <input type="text" v-model="email" placeholder="邮箱" />  
                </div>
                <div class="user-pasw common-div">
                    <input type="password" v-model="password" placeholder="密码" />        
                </div>
                <div class="user-code common-div">
                    <input type="text" style="width: 50%;" v-model="codeEmail" placeholder="验证码" />
                    <span class="verifi-code" @click="getCodeEmail" v-show="!sendCode">
                        获取验证码
                    </span>
                    <span class="verifi-code readonly" v-show="sendCode">
                        {{timeOut}}秒重新获取
                    </span>
                </div>
                <div class="login-btn" @click="regist">注册</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to="/Login">已有账号?登录>></router-link>
        </div>
        <div class="prompt">
            <p>注：若未收到验证码，请查看垃圾箱</p>
        </div>
    </div>
</template>

<script>
import * as _ from '../util/index'
const REG_EAMIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export default {
    name:'regist',
    data() {
        return {
            email: '',
            password: '',
            codeEmail: '',
            sendCode: false,
            timeOut: 60
        }
    },
    computed: {
    },
    methods: {
        getCodeEmail () {
            let me = this;
            if (!this.email) {
                _.alert('请输入邮箱')
                return
            }
            if(!REG_EAMIL.test(this.email)){
                _.alert('邮箱格式错误');
                return 
            }
            /* this.$axios.get('/api/getValidEmail',{
                params:{
                    email: this.email
                }
            }).then(res => {
                if(res.data.succ){
                    _.alert(res.data.msg);
                    me.sendCode = true;
                    me.timeOut = 60;
                    me.setTimeOut()
                }else{
                    _.alert('系统错误')
                }
            }).catch(res => {
                    _.alert('系统错误')
            }); */
        },
        setTimeOut () {
            let me = this;
            let timer = setTimeout(() => {
                if(me.timeOut < 0) return;
                me.timeOut--
                me.setTimeOut()
            }, 1000)
            if(me.timeOut <= 0) {
                me.sendCode = false;
            }
        },
        regist () {
            var me = this;
            if (!this.email || !this.password || !this.codeEmail) {
                alert('请填写完整')
                return
            }
            if(!REG_EAMIL.test(this.email)){
                _.alert('邮箱格式错误');
                return 
            }
            if(this.password.length <　6 || this.password.length > 16){
                _.alert('密码长度6-16之间');
                return
            }
            if(/^\d$/.test(this.password)){
                _.alert('密码不能全为数字');
            }
            let params = {
                email:this.email,
                password:this.password,
                codeEmail:this.codeEmail
            }
            /* this.$axio.post('/api/register',this.$qs.stringify(params))
            .then(res => {
                if(res.data.succ){
                    _.alert(res.data.msg)
                    setTimeout(function(){
                        me.$router.push('/');//跳转到登录界面
                    },1000)
                    
                }else{
                    _.alert(res.data.msg);
                }
            })
            .catch(res => {
                 _.alert('邮件发送失败')
            }); */
        }
    }
}
</script>

<style>

</style>