<template>
  <div class="navbar">
    <div class="logo">
      <img
        class="default-img logo-img"
        src="../../assets/img/Logo_Full_White.png"
      />
    </div>
    <div class="nav-item">
      <div class="nav-item-icon">
        a
      </div>
      <div class="nav-item-text">Tổng quan</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon">
        a
      </div>
      <div class="nav-item-text">Báo cáo</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon">
        a
      </div>
      <div class="nav-item-text">Đơn hàng</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon">
        a
      </div>
      <div class="nav-item-text">Mua hàng</div>
    </div>
    <div class="nav-item">
      <div class="nav-item-icon">
        a
      </div>
      <div class="nav-item-text">Khuyến mại</div>
    </div>
    <div class="nav-item focus-item">
      <div class="nav-item-icon">
        a
      </div>
      <div class="nav-item-text">Quản lý hàng hóa</div>
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
  background-color: #026b97;
  height: 100vh;
  cursor: pointer;
}

.navbar .logo {
  height: 52px;
  width: 100%;
  background-color: #00577b;
}

.navbar .nav-item {
    color: #ffffff;
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    transition: 0.2s;
}

.navbar .nav-item:hover {
    background-color: #0088c1;
    color: white;
}

.navbar .nav-item .nav-item-icon {
    margin:0px 10px;
}
</style>