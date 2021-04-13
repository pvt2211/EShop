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
body {
  font-family: Roboto, Tahoma, sans-serif;
  font-size: 13px;
  color: #404040;
}

.main-containter {
  width: calc(100vw - 150px);
}

@import url("./assets/style/base.css");
@import url("./assets/style/button.css");
@import url("./assets/style/dialog.css");
</style>
