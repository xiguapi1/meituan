<template>
  <div class="body">
    <div class="container">
      <div class="box1">
        <p><img :src="data.avatar_url" /></p>
        <span>{{ data.loginname }}</span>
        <p>{{ data.score }}积分</p>
        <p>注册事件{{ data.create_at | parseTime }}</p>
      </div>
      <div class="box2">
        <p>回复的主题</p>
        <ul>
          <li v-for="(item, index) in data.recent_replies" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="box3">
        <p>创建的主题</p>
        <ul>
          <li v-for="(item, index) in data.recent_topics" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/user/" + this.$route.params.name)
        .then((res) => {
          this.data = res.data.data;
          console.log(this.data);
        });
    },
  },
  created() {
    this.getData();
  },
//   filters: {
//     parseTime(str) {
//       let createYear = new Date(str).getFullYear();
//       let nowYear = new Date().getFullYear();
//       return nowYear - createYear;
//     },
//   },
};
</script>
<style scoped>
.body{
  background: gray;
  min-height:calc(100% - 50px);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container div {
  background: white;
  width: 90%;
  margin: 10px;
  padding: 10px;
}
.box1 img{
    width: 50px;
    height: 50px;
}
li {
  list-style: none;
}
p,span,li{
    display: flex;

}
</style>
