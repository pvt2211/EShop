<template>
  <div class="flex">
    <Navbar />
    <div class="main-containter">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Navbar from "./components/layout/Navbar.vue";
import Content from "./components/layout/Content.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Content,
  },
};
</script>

<style>

.main-containter {
  width: calc(100vw - 150px);
}

@import url("./assets/style/base.css");
@import url("./assets/style/button.css");
@import url("./assets/style/dialog.css");
</style>
