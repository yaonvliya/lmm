<template>
  <footer>
    <div class="vipAgree">
        <span>
          <em></em>
          同意驴妈妈旅游网
          <i>《会员服务条款》</i>
          <i>《免责声明》</i>
          <i>《驴妈妈隐私保护声明》</i>
        </span>
    </div>
  </footer>
</template>

<script>

export default {
  name:"lmLogOrRegisterFotter",
};
</script>

<style  scoped>
footer {
  position: absolute;
  bottom: 10px;
  color: #b2b2b2;
  font-size: 0.14rem;
  margin: 0 0.3rem;
}
.vipAgree {
  width: 100%;
}

.vipAgree span {
  display: inline-block;
  line-height: 20px;
}
.vipAgree span i {
  text-decoration: none;
  outline: 0;
  color: #151515;
  font-style: normal;
  text-align: left;
}
.vipAgree span em {
  background: url(../../../static/img/logimg/choose.png);
  background-size: 12px 12px;
  display: inline-block;
  width: 12px;
  height: 12px;
}
</style>