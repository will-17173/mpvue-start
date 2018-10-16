<template>
  <div class="container">
  </div>
</template>

<script>
import utils from '@/utils';

var app = getApp();

export default {
  data() {
    return {};
  },

  components: {},

  methods: {},

  created() {},
  async mounted() {
    // console.log(process.env.NODE_ENV)

    let pages = getCurrentPages(); // 获取加载的页面
    let currentPage = pages[pages.length - 1];
    // console.log(app)
    this.$http.testGet().then(res => {
      // console.log(res)
    });
    const res = await this.$http.testGet();
  },
  onShareAppMessage() {
    let title = '',
      path = '/pages/index/main';
    return utils.onShareAppMessage(title, path, function() {
      console.log('分享成功');
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #000;
  color: #fff;
  a {
    color: #fff;
  }
}
</style>
