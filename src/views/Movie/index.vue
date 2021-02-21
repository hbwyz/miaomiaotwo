<!--  -->
<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>大连</span><i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link class="hot_item " tag="div" to="/movie/nowPlaying"
            >正在热映</router-link
          >
          <router-link class="hot_item" tag="div" to="/movie/comingSoon"
            >即将上映</router-link
          >
        </div>
        <router-link class="search_entry" to="/movie/search" tag="div">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<script>
//第一步 引入
//第二步 挂载
//第三部 使用
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Movie",
  components: {
    Header,
    TabBar,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>
<style lang="scss" scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
