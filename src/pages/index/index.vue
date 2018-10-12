<template>
  <div class="container">
    ccc
  </div>
</template>

<script>
import utils from '@/utils';

export default {
  data() {
    return {};
  },

  components: {},

  methods: {},

  created() {},
  async mounted() {
    this.$http.testGet().then(res => {
      console.log(res)
    })

    const res = await this.$http.testGet()
    console.log(res)
    console.log(this.$root.$mp);
  },
  onShareAppMessage(){
    let title = '', 
      path = '/pages/index/main';
    return utils.onShareAppMessage(title, path, function(){
      console.log('分享成功')
    })
  }
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
