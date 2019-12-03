<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World component"
    };
  }
};
</script>

<style scoped>
div {
  color: blue;
}
</style>
