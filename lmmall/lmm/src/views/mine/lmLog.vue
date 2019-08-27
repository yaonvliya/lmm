<template>
  <div>
    <div class="main_login">
      <div class="close" @click="close()">
        <img src="../../assets/img/logimg/close.png"/>
      </div>
      <div class="lmpic">
        <img src="../../assets/img/logimg/logo.png"/>
      </div>
      <div class="login_header">
        <a href="#" class="zhanghao">账号密码登录</a>
      </div>
      <div class="login_con">
        <div class="regcon">
          <input
            type="text"
            name="tel"
            placeholder="请输入11位手机号码"
            v-model="telname"
            @blur="funb"
            @input="func()"
          />
          <p id="redphone" v-if="isNull">{{redphone}}</p>
        </div>
        <div class="regcon">
          <input
            type="password"
            name="pwd"
            placeholder="请输入密码"
            v-model="pwd"
            @blur="fpwd"
            @input="func()"
          />
          <i></i>
          <p id="redphone" v-if="isNull">{{redpwd}}</p>
        </div>
        <div class="regcon test">
          <div>
            <input
              type="text"
              id="code"
              v-model="inputcode"
              class="code"
              placeholder="请输入您的验证码"
              @blur="yanzheng"
              @input="func()"
            />
            <p id="redphone" v-if="isNull">{{redinspect}}</p>
          </div>
          <div class="login-code" @click="refreshCode">
            <!--验证码组件-->
            <sidentify :identifyCode="identifyCode"></sidentify>
          </div>
        </div>

        <div class="for">
          <a href="#">忘记密码</a>
        </div>

        <div class="logreg">
          <p class="loginbtn" @click="success()">登录</p>
          <router-link to="lmResgiterOne" class="resgiterbtn">注册</router-link>
        </div>
      </div>
    </div>
    <lm-log-or-register-fotter></lm-log-or-register-fotter>
  </div>
</template>
<script>
import lmLogOrRegisterFotter from "../../components/lmLogOrRegister/lmLogOrRegisterFotter";
import sidentify from "../../components/common/sidentify";
// import loading from "../../components/common/loading";
export default {
  name: "lmLog",
  components: {
    lmLogOrRegisterFotter,
    sidentify,
  },
  data() {
    return {
      ifdel:false,
      telname: "",
      phoneReg: /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/,
      upwdReg:/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/,
      redphone: "",
      redpwd:"",
      pwd:"",
      isNull: "false",
      redinspect: "",
      identifyCodes: "1234567890",
      identifyCode: "",
      inputcode: "",
      rep:"" //text框输入的验证码
    };
  },
   mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  created() {
    //初始化验证码
    this.refreshCode();
    this.lmloading();
  },
  methods: {

    lmloading(){
      setTimeout(()=>{
          // CartApi.getCartInfoByUserId(data => {
          //   console.log(data)
          //   let total = this._count(data)
          //   data.totalPrice = total;
          //   this.cartInfo = data;
          //   console.log(this.cartInfo)
          //   this.isLoading = false;
          // })
          this.isLoading = false;
        },3000)
    },


    funb() {//失去焦點
      // console.log("hahah")
      if (this.telname == "" && !this.phoneReg.test(this.telname)) {
        this.isNull = true;
        this.redphone = "请输入11位手机号";
      }
    },
    fpwd(){//密碼失去焦點
      this.ispwd=null;
      if(this.pwd==""){
          this.pwdbool=true;
          this.redpwd="密码不能为空";
          this.ispwd=false;
      }else if(!this.upwdReg.test(this.pwd)){
          this.pwdrulbool=true;
          this.redpwd="请输入正确的密码格式";
          this.ispwd=false;
      }
    },
    func(){
      this.isNull=false;
    },
    yanzheng() {//验证码
      if(this.identifyCode !==this.inputcode && this.inputcode == ""){
        this.isNull = true;
      }
      // }
    },
    close() {//退出
      this.$router.back();
      console.log("aaa");
    },
    success() {//登录成功时
      // this.$router.push({path:'/lmMineAfter',query:{tel:this.telname}});
      let fail = this.telname == ""||this.pwd == "" || this.inputcode == "";
      let success = this.phoneReg.test(this.telname) && this.identifyCode !==this.code ||this.pwd == "";
      if(fail){
        confirm("手机号输入不正确或密码错误或验证码错误");
      }else if(success){
        // if()
        // this.$router.push({path:'/lmMineAfter',query:{tel:this.telname}});
        this.$axios({
          url:"//39.100.241.148:8000/user/login/?phonename=" + this.telname+"&password="+this.pwd,
          method:"post"
        }).then((ok)=>{
          console.log("123");
          this.$router.push({path:'/lmMineAfter',query:{tel:this.telname}})
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>
<style scoped>
.main_login {
  overflow: hidden;
}
.close {
  height: 40px;
  width: 50px;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.close img {
  width: 18px;
  height: 18px;
}
.lmpic {
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.lmpic img {
  width: 144px;
  height: 108px;
}
.login_header {
  width: 100%;
  height: 0.45rem;
}
.regcon {
  margin: 0 0.3rem;
  border-bottom: 1px solid #eee;
}
.regcon input {
  width: 100%;
  border: none;
  outline: none;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: block;
  margin-top: 0.2rem;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
#redphone {
  width: 100%;
  font-size: 10px;
  color: #ff5465;
  height: 20px;
  line-height: 20px;
}
.inspect {
  width: 60%;
}
.test {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login_header a {
  width: 45%;
  font-size: 0.18rem;
  display: block;
  color: #666;
  line-height: 0.45rem;
  font-weight: bold;
  margin: 0 0.3rem;
}

.login_con {
  width: 100%;
}
.logreg {
  margin: 0 0.3rem;
}
/*验证码样式*/
.code {
  width: 124px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgba(186, 186, 186, 1);
}
.login-code {
  cursor: pointer;
}
.loginbtn {
  background-image: linear-gradient(156deg, #ff7f6a 0, #fd3c71 100%);
  box-shadow: 0 2px 6px 0 rgba(253, 60, 113, 0.4);
  color: #fff;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.18rem;
  display: block;
  padding: 0.1rem 0;
  border-radius: 20px;
  margin-top: 0.2rem;
}
.resgiterbtn {
  color: #333;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.18rem;
  display: block;
  padding: 0.1rem 0;
  border-radius: 20px;
  margin-top: 0.2rem;
  border: 1px solid #999;
}
.for a {
  color: #999;
  display: block;
  font-size: 14px;
  text-align: right;
  margin-top: 0.1rem;
  margin-right: .3rem;
}
.for a::after {
  content: "";
  width: 7px;
  height: 7px;
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  display: inline-block;
  transform: rotate(45deg);
  margin-left: 5px;
}
</style>>
