<template>
  <div>
    <span class="back" @click="back1()"></span>
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
     <!-- 点击回退是的提示框 -->
       <transition>
           <div v-show="bool6" class="modal">
                <p>距离注册成功只有一步之遥,你确定放弃吗</p>
                <div class="modal-sure" >
                    <span @click="backsure()">确定</span>
                    <span @click="noback()">手滑了</span>
                </div>
            </div>
       </transition>
  </div>
</template>

<script>
import lmLogOrRegisterHeader from "../../components/lmLogOrRegister/lmLogOrRegisterHeader";
import lmLogOrRegisterFotter from "../../components/lmLogOrRegister/lmLogOrRegisterFotter";
import sidentify from "../../components/common/sidentify";
// import back from "../../components/common/back";
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
      rep:{},//text框输入的验证码
      bool6:false
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
        // console.log("asd");
        // this.$router.push({path:'/lmResgiterTwo',query:{tel:this.tel}})
        // console.log(typeof(this.tel))
        this.$axios({
          url:"http://39.100.241.148:8000/user/phone/?phonename="+this.tel,
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
    //   back(){
    //   this.$router.push("/lmLog");
    //   console.log("hahahahahaha");
    // },

    back1(){
          this.bool6=true;
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
    },// 确定后退
        backsure(){
              this.bool6=false; 
              this.$router.go(-1);
        },
        // 取消后退
        noback(){
              this.bool6=false;  
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

 /*  点击回退是的提示框 */
.modal{
    width:75%;
    margin:2rem auto;
    text-align: center;
    height:1.2rem;
    font-size:0.2rem;
    background:white;
    letter-spacing:0.007rem;
    color:rgb(114, 109, 109);
    border-radius:0.1rem;
    box-shadow: 0 0 0.1rem #FF5465;
    padding-top:0.1rem;
    position:absolute;
    top:0.1rem;
    left:0.4rem;
    opacity: 0.9;
}
.modal>p{
    margin-left:0.1rem;
    margin-right:0.1rem;
    margin-bottom:0.15rem;
}
.modal-sure{
    display:flex;
    justify-content: space-around;
}
.modal-sure>span{
    display:block;
    width:50%;
    height:0.5rem;
    line-height:0.5rem; 
}
.modal-sure>span:nth-of-type(1){
    border-top:0.005rem solid #ccc;
}
.modal-sure>span:nth-of-type(2){
    border-top:0.005rem solid #ccc;
    border-left:0.005rem solid #ccc;
    color:orange;
}
</style>
