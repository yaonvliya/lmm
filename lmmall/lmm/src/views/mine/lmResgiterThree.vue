<template>
    <div class="con">
        <span class="back" @click="back()"></span>
        <lm-log-or-register-header text="3"></lm-log-or-register-header>
        <p class="secret">验证成功，请输入密码</p>
        <div class="reserect">
            <input type="password" placeholder="请输入密码" class="sec" v-model="pwd" @blur="fpwd()" @input="funmiss()">
            <!-- 密码不能为空 -->
            <span class="redphone" v-if="pwdbool" id="pwdspan">{{pwdspan}}</span>
            <!-- 密码格式不正确 -->
            <span class="redphone" v-if="pwdrulbool">{{pwdspan}}</span>
        </div>
        <p class="rerule">密码长度为8到16位,数字、字母、字符至少包含两种</p>
        <div>
            <p class="loginbtn" @click="submit()">完成注册</p>
        </div>
        <lm-log-or-register-fotter></lm-log-or-register-fotter>
    </div>
</template>

<script>
import lmLogOrRegisterHeader from '../../components/lmLogOrRegister/lmLogOrRegisterHeader';
import lmLogOrRegisterNext from '../../components/lmLogOrRegister/lmLogOrRegisterNext';
import lmLogOrRegisterFotter from '../../components/lmLogOrRegister/lmLogOrRegisterFotter';
export default {
    name:"lmResgiterThree",
    components:{
        lmLogOrRegisterHeader,lmLogOrRegisterNext,lmLogOrRegisterFotter
    },
    data(){
        return{
            pwd:"",
            upwdReg:/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/,
            pwdbool:false,
            pwdspan:"",
            pwdrulbool:false
        };
    },
    mounted(){
        this.tel=this.$route.query.tel
   },
    methods:{
        back(){
            this.$router.push("/lmResgiterTwo");
            console.log("hahahahahaha");
        },

        fpwd(){
            // if(this.pwd==""){
            //     this.pwdbool=true;
            //     this.pwdspan="密码不能为空";
            // }else if(!this.upwdReg.test(this.pwd)){
            //     this.pwdrulbool=true;
            //     this.pwdspan="密码格式不正确";
            // }
            // else{
            //     this.pwdbool=false;
            //     this.ispwd=true;
            // }
            if(this.pwd==""){
                this.pwdbool=true;
                this.pwdspan="密码不能为空";
            }else if(!this.upwdReg.test(this.pwd)){
                this.pwdrulbool=true;
                this.pwdspan="密码格式不正确";
            }
        },
        funmiss(){
            this.pwdbool=false;
            this.pwdrulbool=false;
        },
        submit(){
            if(this.pwd!=""){
                console.log(this.pwd);
                this.$router.push({path:'/lmMineAfter',query:{tel:this.tel}})
                console.log(this.tel);
                this.$axios({
                url:"http://39.100.241.148:8000/user/password/?password="+this.pwd+"&phonename="+this.tel,
                method:"post"
                }).then((ok)=>{
                    this.$router.push({path:'/lmMineAfter',query:{tel:this.tel}})
                    alert("注册成功")
                }).catch((err)=>{
                    console.log(err);
                })
            }else{
                alert("注册失败")
            }

        }
    }
}
</script>


<style scoped>

.secret{
    font-size:.16rem;
    margin-top:.1rem;
    margin-bottom:.14rem;
    padding-right:.47rem;
    padding-left:.35rem;
    text-align: center;
}
.con input{
    display: block;
    height: .58rem;
    width:100%;
    border:none;
    outline: none;
    border-bottom:1px solid #d3d3d3;
}
.sec,.resec,.username{
    font-size:.18rem;
    color:#9b9b9b;

}
.reserect{
     padding-right:.47rem;
    padding-left:.35rem;
}
.rerule{
    font-size:.16rem;
    padding-right:.47rem;
    padding-left:.35rem;
    margin-top:.39rem;
    color:#555555;
}
.submi{
    margin-right:.27rem;
    margin-left:.28rem;
    height:.58rem;
    background:#ff6801;
    font-size:.25rem;
    border-radius: 14px;
    text-align: center;
    line-height: .58rem;
    margin-top:.67rem;
    margin-bottom:.98rem;
}
 .redphone{
    font-size: .11rem;
    color: red;
    display: block;
    margin-top: 10px;;
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
