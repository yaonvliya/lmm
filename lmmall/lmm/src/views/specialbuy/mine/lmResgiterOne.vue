<template>
  <div>
    <span class="back" @click="back()"></span>
    <lm-log-or-register-header text="1"></lm-log-or-register-header>
    <div class="regcon">
      <input type="text" name="tel" placeholder="请输入11位手机号码" v-model="tel" @blur="funb" @input="func()"/>
      <p id="redphone" v-if="isNull">{{redphone}}</p>
    </div>
    <div class="regcon test">
      <div>
        <input type="text" id="code" v-model="inputcode" class="code" placeholder="请输入您的验证码" @blur="yanzheng"/>
        <p id="redphone" v-if="isNull">{{redinspect}}</p>
      </div>
      <div class="login-code" @click="refreshCode">
        <!--验证码组件-->
        <sidentify :identifyCode="identifyCode"></sidentify>
      </div>
    </div>
    <div>
      <p class="loginbtn" @click="regtwo()">下一步</p>
    </div>
    <lm-log-or-register-fotter></lm-log-or-register-fotter>
  </div>
</template>

<script>
import lmLogOrRegisterHeader from "../../components/lmLogOrRegister/lmLogOrRegisterHeader";
import lmLogOrRegisterFotter from "../../components/lmLogOrRegister/lmLogOrRegisterFotter";
import sidentify from "../../components/common/sidentify";
export default {
  name:"lmResgiterOne",
  components: {
    lmLogOrRegisterHeader,
    lmLogOrRegisterFotter,
    sidentify
  },
  data() {
    return {
      tel: "",
      phoneReg: /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/,
      redphone: "",
      isNull: "false",
      redinspect: "",
      identifyCodes: "1234567890",
      identifyCode: "",
      inputcode: "",
      rep:{} //text框输入的验证码
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  created() {
    //初始化验证码
    this.refreshCode();
  },
  methods: {
    regtwo(){
      // this.$router.push({path:'/lmResgiterTwo',query:{tel:this.tel}})
      let success =  this.phoneReg.test(this.tel) && this.identifyCode !==this.code;
      let fail = this.tel == ""|| this.inputcode == "";
      if (success){
        // confirm("正确");
        console.log("asd");
        // this.$router.push({path:'/lmResgiterTwo',query:{tel:this.tel}})
        console.log(typeof(this.tel))
        this.$axios({
          url:"http://10.35.170.5:8000/user/phone/?phonename="+this.tel,
          method:"post"
        }).then((ok)=>{
          this.rep=ok.data;
          console.log(ok.data);
          console.log(this.rep);
          if(this.rep.code==100){
          alert("存在");
          }else{
            this.$router.push({path:'/lmResgiterTwo',query:{tel:this.tel}})
          }

          // console.log("123");
          // this.$router.push({path:'/lmResgiterTwo',query:{tel:this.tel}})
        }).catch((error)=>{
          console.log(error);
        })
      }else if(fail){
        confirm("手机或验证码输入不正确");
      }
    },
    funb() {
      if (this.tel == "" && !this.phoneReg.test(this.tel)) {
        this.isNull = true;
        this.redphone = "请输入11位手机号";
      }
    },
    func(){
      this.isNull=false;
    },
    yanzheng() {
      // // if(this.inspect==''){
      // // this.inspectinnull=true;
      // console.log("1");
      // this.redinspect = "请输入验证码";
      // console.log("uxsjx");
      if(this.identifyCode !==this.inputcode && this.inputcode == ""){
        this.isNull = true;
        this.redinspect = "请输入正确的验证码";
      }
      // }
    },
      back(){
      this.$router.push("/lmLog");
      console.log("hahahahahaha");
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
.test{
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.register_con {
  width: 100%;
  margin: 70px 0;
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
  margin: 1rem 0.2rem 0;
}
.back {
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
