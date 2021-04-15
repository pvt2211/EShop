<template>
  <div class="navbar">
    <div class="logo">
      <img
        class="default-img logo-img"
        src="../../assets/img/Logo_Full_White.png"
      />
    </div>
    <div class="nav-item">
      <div class="nav-item-icon nav-1"></div>
      <div class="nav-item-text">Tổng quan</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon nav-2"></div>
      <div class="nav-item-text">Báo cáo</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon nav-3"></div>
      <div class="nav-item-text">Đơn hàng</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon nav-4"></div>
      <div class="nav-item-text">Mua hàng</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon nav-5"></div>
      <div class="nav-item-text">Khuyến mại</div>
    </div>
    <div class="nav-item focus-item">
      <div class="nav-item-icon nav-6"></div>
      <div class="nav-item-text">Danh Mục</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.navbar {
  width: 150px;
  background-color: #2b3173;
  height: 100vh;
  cursor: pointer;
}

.navbar .logo {
  height: 52px;
  width: 100%;
  background-color: #1e235a;
  padding-top: 1px;
}

.navbar .nav-item {
  color: #aaacc7;
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  transition: 0.2s;
}

.navbar .focus-item {
  background-color: #1e235a;
}

.navbar .nav-item:hover {
  background-color: #1e235a;
  color: white;
}

.navbar .nav-item .nav-item-icon {
  margin: 0px 10px;
  background-image: url("../../assets/img/slibarmenu.png");
  height: 38px;
  width: 22px;
  background-repeat: no-repeat;
  margin-top: 2px;
}

.nav-1 {
  background-position: 0 6px;
}

.nav-2 {
  background-position: 0 -273px;
}

.nav-3 {
  background-position: 4px 9px;
  background-image: url("../../assets/img/ic_sogiaohang.png");
}

.nav-4 {
  background-position: 0 -33px;
}

.nav-5 {
  background-position: 0 -193px;
}

.nav-6 {
  background-position: 0 -233px;
}
</style>