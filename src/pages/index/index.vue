<template>
  <div class="container">
    aabbccddeeffgg
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},

  created() {},
  mounted() {
    console.log(this.$root.$mp);
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
