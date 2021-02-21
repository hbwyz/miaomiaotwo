<!--  -->
<template>
  <div id="main">
    <Header title="我的喵喵" />
    <div id="content">
      <Login />
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
import Login from "../../components/Login";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Mine",
  components: {
    Header,
    TabBar,
    Login,
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
<style lang="scss" scoped></style>
