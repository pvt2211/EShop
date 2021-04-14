<template>
  <div class="header">
    <h1 class="header-title">Cửa hàng</h1>
    <div class="right-header">
      <select name="headerSelect" class="select-header">
        <option value="volvo">Kho tổng</option>
        <option value="saab">Kho phụ</option>
      </select>
      <div class="header-avartar">
        <img class="default-img" src="../../assets/img/Avartar.png" />
      </div>
      <select name="headerSelect" class="user">
        <option value="volvo">Nguyễn Văn Mạnh</option>
      </select>
      <div class="support-page-btn active-bgcolor"></div>
      <div class="header-btn" style="border-right: 1px solid #ccc">
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
  padding-left: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
}

.header-title {
  font-weight: 700;
}

.right-header {
  display: flex;
  align-items: center;
}

.right-header .select-header {
  padding: 6px 42px;
  outline: none;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 13px;
  font-family: Roboto, Tahoma, sans-serif;
  font-weight: bold;
  border-radius: 3px;
  margin-right: 16px;
  cursor: pointer;
}

.right-header .header-avartar {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  cursor: pointer;
}

.right-header .user {
  padding-right: 16px;
  outline: none;
  border: none;
  text-align: center;
  font-size: 13px;
  font-family: Roboto, Tahoma, sans-serif;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
}

.right-header .header-btn,
.support-page-btn {
  font-size: 18px;
  color: #1e235a;
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
  color: #6b6f9d;
}

.right-header .support-page-btn {
  color: white;
}
</style>>

