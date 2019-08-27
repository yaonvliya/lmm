
<template>
    <div>
        <span class="back" @click="back()"></span>
        <lm-log-or-register-header text="2"></lm-log-or-register-header>
        <p class="message">
            <span>验证码已发送到手机  {{telphone}}</span>
        </p>

        <div class="textSend">
            <div class="yanzheng">
                <span>请输入验证码</span>
                <input type="text" class="textInput" v-model="textCode">
            </div>
            <p class="send" v-show="bool" @click="ressend()">重新发送</p>  
            <p class="send" v-show="!bool">{{autotime}}s后重新获取</p>
        </div>
        <div>
            <p class="loginbtn" @click="regthree()">下一步</p> 
        </div>
        <lm-log-or-register-fotter></lm-log-or-register-fotter>
    </div>
</template>

<script>
import lmLogOrRegisterHeader from '../../components/lmLogOrRegister/lmLogOrRegisterHeader';
import lmLogOrRegisterFotter from '../../components/lmLogOrRegister/lmLogOrRegisterFotter';
import lmLogOrRegisterNext from '../../components/lmLogOrRegister/lmLogOrRegisterNext';
export default {
    name:"lmResgiterTwo",
    components:{
        lmLogOrRegisterHeader,lmLogOrRegisterFotter,lmLogOrRegisterNext
    },
    data(){
        return {
            autotime:0,
            bool:true,
            phoneNumber:"",
            textCode:"",
            telphone:"",
            rep:{}
        }
        
    },
    mounted(){
        this.getCode();
        this.telphone=this.$route.query.tel
    },
    methods:{
        regthree(){
            // this.$router.push("/lmResgiterThree"); 
            this.$axios({
                url:"http://10.35.170.5:8000/user/code/?phonename="+this.telphone+"&code="+this.textCode,
                method:"post"
            }).then((ok)=>{ 
                this.rep=ok.data;
                console.log(ok.data);
                console.log(this.rep);
                if(this.rep.code==100){
                    alert("错误");
                }else{
                    this.$router.push({path:"/lmResgiterThree",query:{tel:this.telphone}})
                }
            }).catch((err)=>{
                console.log(err);
            })
        },
        back(){
            this.$router.push("/lmResgiterOne"); 

            console.log("hahahahahaha");
        },
        getCode(){
            this.bool=false;
            this.autotime=59;
            let timeint=setInterval(()=>{
                this.autotime--;
                if(this.autotime<=-1){
                    this.bool=true;
                    window.clearInterval(timeint);
                }
            },1000)

        },
        ressend(){
            this.getCode();
            this.$axios({
                url:"http://10.35.170.5:8000/user/code/"+this.tel,
                method:"post"
            }).then((ok)=>{
                console.log(ok);
                alert("发送成功");
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.message{
    font-size: 16px;
    color: #333;
    text-align: center;
    margin-top: 72px;
}
.send{
    /* padding-left:.22rem;
    height:.35rem; */
    text-align: right;
    margin-top: 10px;
}
.textSend{
    margin:1rem .4rem;
    font-size: 16px;
    color: #333;
}
.yanzheng{
    display: -webkit-flex;
    justify-content: space-between;
    border-bottom:1px solid #d4d4d4;
    padding-bottom: 10px;
}
.textInput{
    width: 65%;
    border:none;
    outline: none;
    font-size: 16px;  
}
.loginbtn{
	background-image: linear-gradient(156deg,#ff7f6a 0,#fd3c71 100%);
	box-shadow: 0 2px 6px 0 rgba(253,60,113,.4);
	color: #fff;
	height: .2rem;
	line-height: .2rem;
	text-align: center;
	font-size: .18rem;
	display: block;
	padding: .1rem 0;
	border-radius: 20px;
	margin: 1rem .2rem 0;
}
.back{
    position: absolute;
    left: 7px;
    top: 4%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: url(../../assets/img/logimg/backicon.png) no-repeat;
    display: inline-block;
    background-size: 30px 30px;
}
</style>
