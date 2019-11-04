<template>
  <div class="page">
    <HelloWorld msg="Hello World!" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 10px;
}
</style>
