<template>
  <div class="sta">
    <a href="#" v-for="(v,i) in arr" :key="i">
      <img :src="v.imgurl" />
      <span>{{v.title}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          imgurl: "../../../static/img/logimg/dsh_new.png",
          title: "待审核"
        },
        {
          imgurl: "../../../static/img/logimg/dzf_new.png",
          title: "待支付"
        },
        {
          imgurl: "../../../static/img/logimg/dcx_new.png",
          title: "待出行"
        },
        {
          imgurl: "../../../static/img/logimg/ddp_new.png",
          title: "待点评"
        },
        {
          imgurl: "../../../static/img/logimg/tk_new.png",
          title: "待退款"
        }
      ]
    };
  }
};
</script>

<style scoped>
.sta {
  display: -webkit-flex;
  background: white;
  padding-bottom: 0.18rem;
}
.sta a {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 12px;
}
.sta img {
  display: block;
  margin: 0.18rem auto 0.09rem;
  background-size: 100% 100%;
  width: 26px;
  height: 26px;
  max-width: 100%;
  border: 0;
}
</style>
