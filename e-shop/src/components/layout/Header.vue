<template>
  <div class="header">
    <label class="header-title">Cửa hàng</label>
    <div class="right-header">
      <div class="select-header">
        <input class="header-input" type="text" value="K2">
        <div class="select-header-arrow"></div>
      </div>
      <div class="header-avartar">
        <img class="default-img" src="../../assets/img/Avartar.png" />
      </div>
      <div class="user">
        <div class="user-name">Phùng Văn Tùng</div>
        <div class="select-header-arrow"></div>
      </div>
      <div class="support-page-btn primary-background"></div>
      <div class="header-btn" style="border-right: 1px solid #e9e9e9">
        <font-awesome-icon :icon="['fas', 'bell']" />
      </div>
      <div class="header-btn">
        <font-awesome-icon :icon="['fas', 'question-circle']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding-left: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
}

.header-title {
  font-size: 18px!important;
  font-weight: 700;
  color: #212121
}

.right-header {
  display: flex;
  align-items: center;
}

.right-header .select-header {
  outline: none;
  border: 1px solid #e9e9e9;
  text-align: center;
  font-family: roboto, Tahoma, sans-serif;
  border-radius: 3px;
  margin-right: 16px;
  height: 33px;
  cursor: pointer;
  min-width: 198px;
  display: flex;
  align-items: center;
}

.right-header .select-header:focus-within{
  border-color: blue;
}

.right-header .select-header .header-input {
  outline: none;
  border: none;
  padding: 5px 1px 4px 8px;
  font-weight: 400;
  font-size: 13px;
  font-family: roboto, Tahoma, sans-serif;
  width: 100%;
}

.select-header-arrow {
  background-image: url("../../assets/img/arrow-down-line.png");
  background-repeat: no-repeat;
  background-position: 8px;
  height: 100%;
  min-width: 24px;
}

.right-header .header-avartar {
  width: 28px;
  height: 28px;
  margin-right: 6px;
  cursor: pointer;
}

.right-header .user {
  outline: none;
  text-align: center;
  font-family: roboto, Tahoma, sans-serif;
  margin-right: 16px;
  font-weight: 700;
  height: 33px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.right-header .header-btn,
.support-page-btn {
  font-size: 18px;
  color: #2b3173;
  height: 52px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.right-header .support-page-btn {
  background-image: url("../../assets/img/misasupport_1.png");
  background-repeat: no-repeat;
}

.right-header .header-btn:hover {
  color: #5897ce;
}

.right-header .support-page-btn {
  color: white;
}
</style>>

