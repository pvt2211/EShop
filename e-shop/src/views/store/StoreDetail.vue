<template>
  <div class="dialog-container">
    <div class="dialog-modal"></div>
    <div class="form-container">
      <div class="form-header">
        <div class="form-header-title"><span>Thêm mới cửa hàng</span></div>
        <div class="close-btn" @click="closeOnClick">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
      </div>
      <div class="form-content">
        <div class="row-1">
          <label class="form-label" for="StoreCode"
            >Mã cửa hàng <span class="red-color">*</span></label
          >
          <input
            class="form-input"
            type="text"
            @blur="onBlur(store.StoreCode)"
            v-model="store.StoreCode"
            ref="autoFocus"
            name="StoreCode"
          />
          <div class="exclamation"></div>
        </div>
        <div class="row-1">
          <label class="form-label" for="StoreName"
            >Tên cửa hàng <span class="red-color">*</span></label
          >
          <input
            class="form-input"
            type="text"
            @blur="onBlur(store.StoreName)"
            v-model="store.StoreName"
            name="StoreName"
          />
          <div v-html="exclamation.StoreName"></div>
        </div>
        <div class="row-1 address-container">
          <label class="form-label" for="Address"
            >Địa chỉ <span class="red-color">*</span></label
          >
          <textarea
            class="form-input address-input"
            type="text"
            @blur="onBlur(store.Address)"
            v-model="store.Address"
            name="Address"
          ></textarea>
          <div v-html="exclamation.Address"></div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="PhoneNumber">Số điện thoại</label>
            <input class="form-input mr-15" type="text" name="PhoneNumber" />
          </div>
          <div class="col-1-2">
            <label class="form-label" for="StoreTaxCode">Mã số thuế</label>
            <input class="form-input" type="text" name="StoreTaxCode" />
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="Country">Quốc gia</label>
            <input class="form-input mr-15" type="text" name="Country" />
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="Province">Tỉnh/Thành phố</label>
            <input class="form-input mr-15" type="text" name="Province" />
          </div>
          <div class="col-1-2">
            <label class="form-label" for="District">Quận/Huyện</label>
            <input class="form-input" type="text" name="District" />
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="Province">Xã/Phường</label>
            <input class="form-input mr-15" type="text" name="District" />
          </div>
          <div class="col-1-2">
            <label class="form-label" for="District">Đường phố</label>
            <input class="form-input" type="text" name="District" />
          </div>
        </div>
      </div>
      <div class="form-button">
        <div class="form-button-left">
          <div class="button-common button-support">
            <font-awesome-icon
              :icon="['fas', 'question-circle']"
              class="button-icon"
            />
            <div class="button-text">Trợ giúp</div>
          </div>
        </div>
        <div class="form-button-right">
          <div class="button-common button-support button-save">
            <font-awesome-icon :icon="['fas', 'save']" class="button-icon" />
            <div class="button-text">Lưu</div>
          </div>
          <div
            @click="saveOnClick"
            class="button-common button-support border-primary"
          >
            <font-awesome-icon :icon="['fas', 'plus']" class="button-icon" />
            <div class="button-text">Lưu và thêm mới</div>
          </div>
          <div @click="closeOnClick" class="button-common button-support">
            <font-awesome-icon :icon="['fas', 'times']" class="button-icon" />
            <div class="button-text">Hủy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    store: Object,
  },

  data() {
    return {
      exclamation: {},
    };
  },

  methods: {
    closeOnClick() {
      this.$emit("handleClose");
    },

    saveOnClick() {
      this.$emit("handleSave");
    },

    onBlur(param) {
      if (param == null || param == "") {
        // this.exclamation[propertyName] = `1`;
      } else {
        // this.exclamation[propertyName] = ``;
      }
    },
  },

  mounted() {
    this.$refs.autoFocus.focus();
  },
};
</script>

<style scoped>
.form-container {
  width: 600px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 999;
  height: 486px;
}

.form-container .form-content {
  display: flex;
  padding: 16px 16px 0px;
  width: calc(100% - 32px);
  flex-wrap: wrap;
}

.form-container .form-content .row-1,
.row-2 {
  display: flex;
  align-items: center;
  justify-self: center;
  width: 100%;
  height: 35px;
  margin: 5px 0px;
}

.form-container .form-content .address-container {
  height: 80px;
}

.form-container .form-content .row-1 .form-label {
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 35px;
  min-width: 105px;
}

.form-container .form-content .row-1 .form-input {
  outline: none;
  height: calc(100% - 4px);
  padding: 0px 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Roboto, Tahoma, sans-serif;
  font-size: 13px;
}

.form-container .form-content .address-container .address-input {
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  resize: none;
}

.form-container .form-content .row-1 .form-input:focus {
  border-color: blue;
}

.row-1 .col-1-2 {
  display: flex;
  width: 50%;
  height: 100%;
}
</style>