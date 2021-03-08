<template>
  <div class="box" id="box">
    <div v-if="loading">
      加载中...
    </div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <router-link :to="{name:'userinfo',params:{name:item.author.loginname}}">
          <img :src="item.author.avatar_url" alt="" />
        </router-link>
        <span class="span1">{{ item.reply_count }}/{{ item.visit_count }}</span>
        <!-- <router-link :to="{name:content,params:{name:item.author.loginname}}"> -->
          <span class="content" @click="gotoMain(item)">{{ item.title | parseTitle }}</span>
        <!-- </router-link> -->
        <span class="span3">{{ item.last_reply_at | parseTime }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      page: 1,
      loading: true,
    };
  },
  methods: {
    change() {
      let windowHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
      let pageHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop);
      if (windowHeight + scrollTop >= pageHeight) {
        this.getData();
        // console.log(44444444);
      }
    },
    gotoMain(item){
      console.log(item);
      this.$router.push({name:'content',params:{id:item.author_id,name:item.author.loginname}})
    },
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: { page: this.page, limit: 15 },
        })
        .then((res) => {
          //   console.log(res);
          if (this.page <= 3) {
            this.data = [...this.data, ...res.data.data];
            this.page++;
          }
          this.loading = false;
        });
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    window.addEventListener("scroll", this.change);
  },
  filters: {
    parseTitle(str) {
      if (str.length > 20) {
        return str.substr(0, 18) + "...";
      } else {
        return str;
      }
    },
  },
};
</script>
<style scoped>
body {
  background: red;
}
.box {
  background: white;
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
ul {
  width: 100%;
  background-color: white;
  padding: 0.5rem;
}
li {
  height: 25px;
  width: 100%;
  list-style: none;
  padding: 5px;
  border-bottom: 1px solid black;
  position: relative;
}
.span1 {
  margin-left: 10px;
  margin-right: 50px;
  position: absolute;
  left: 15%;
  display: flex;
  justify-content: center;
  width: 50px;
}
.span3 {
  margin-left: 60px;
  margin-right: 10px;
  position: absolute;
  right: 5%;
  width: 100px;
}
li img {
  width: 25px;
  height: 25px;
  position: absolute;
  left: 5%;
}
.content{
  cursor: pointer;
}
</style>
