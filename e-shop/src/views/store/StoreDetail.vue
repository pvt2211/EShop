<template>
  <div class="dialog-container">
    <div class="dialog-modal"></div>
    <div class="form-container">
      <div class="form-header">
        <div class="form-header-title">
          <span>{{ formTitleDisplay }}</span>
        </div>
        <div class="close-btn" @click="closeOnClick">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
      </div>
      <div class="form-content" id="form">
        <div class="row-1">
          <label class="form-label" for="StoreCode"
            >Mã cửa hàng <span class="red-color">*</span></label
          >
          <input
            id="required"
            class="form-input"
            required
            type="text"
            @blur="onBlur(store.StoreCode, 'StoreCode')"
            v-model="store.StoreCode"
            ref="StoreCode"
            name="StoreCode"
          />
          <div
            class="exclamation"
            v-if="exclamation.StoreCode"
            @mouseenter="showNotification('StoreCode')"
            @mouseleave="hideNotification('StoreCode')"
          >
            <div class="notification" v-if="notification.StoreCode">
              {{ storeCodeNotify }}
            </div>
          </div>
        </div>
        <div class="row-1">
          <label class="form-label" for="StoreName"
            >Tên cửa hàng <span class="red-color">*</span></label
          >
          <input
            class="form-input"
            required
            type="text"
            ref="StoreName"
            @blur="onBlur(store.StoreName, 'StoreName')"
            v-model="store.StoreName"
            name="StoreName"
          />
          <div
            class="exclamation"
            v-if="exclamation.StoreName"
            @mouseenter="showNotification('StoreName')"
            @mouseleave="hideNotification('StoreName')"
          >
            <div class="notification" v-if="notification.StoreName">
              Trường này không được để trống.
            </div>
          </div>
        </div>
        <div class="row-1 address-container">
          <label class="form-label" for="Address"
            >Địa chỉ <span class="red-color">*</span></label
          >
          <textarea
            class="form-input address-input"
            required
            type="text"
            ref="Address"
            @blur="onBlur(store.Address, 'Address')"
            v-model="store.Address"
            name="Address"
          ></textarea>
          <div
            class="exclamation"
            v-if="exclamation.Address"
            @mouseenter="showNotification('Address')"
            @mouseleave="hideNotification('Address')"
          >
            <div class="notification" v-if="notification.Address">
              Trường này không được để trống.
            </div>
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="PhoneNumber">Số điện thoại</label>
            <input v-model="store.PhoneNumber" class="form-input mr-15" type="text" name="PhoneNumber" />
          </div>
          <div class="col-1-2">
            <label class="form-label" for="StoreTaxCode">Mã số thuế</label>
            <input v-model="store.StoreTaxCode" class="form-input" type="text" name="StoreTaxCode" />
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="Country">Quốc gia</label>
            <div
              @click="select.Country = !select.Country"
              class="form-select-container"
            >
              <input
                class="select-input"
                type="text"
                v-model="country.CountryName"
                disabled
              />
              <div class="select-header-arrow2"></div>
              <ul v-if="select.Country" class="select-option-container">
                <li
                  @click="optionCountryOnClick(country)"
                  v-for="country in countrys"
                  :key="country.countryId"
                  class="select-option"
                >
                  {{ country.CountryName }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="Province">Tỉnh/Thành phố</label>
            <div
              @click="select.Province = !select.Province"
              class="form-select-container"
            >
              <input
                class="select-input"
                type="text"
                v-model="province.ProvinceName"
                disabled
              />
              <div class="select-header-arrow2"></div>
              <ul v-if="select.Province" class="select-option-container">
                <li
                  @click="optionProvinceOnClick(province)"
                  v-for="province in provinces"
                  :key="province.ProvinceId"
                  class="select-option"
                >
                  {{ province.ProvinceName }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-2">
            <label class="form-label" for="District">Quận/Huyện</label>
            <div
              @click="select.District = !select.District"
              class="form-select-container"
              style="width:177px"
            >
              <input
                class="select-input"
                type="text"
                v-model="district.DistrictName"
                disabled
              />
              <div class="select-header-arrow2"></div>
              <ul v-if="select.District" class="select-option-container" style="width:177px">
                <li
                  @click="optionDistrictOnClick(district)"
                  v-for="district in districts"
                  :key="district.DistrictId"
                  class="select-option"
                >
                  {{ district.DistrictName }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row-1">
          <div class="col-1-2">
            <label class="form-label" for="Province">Xã/Phường</label>
            <div
              @click="select.Ward = !select.Ward"
              class="form-select-container"
            >
              <input class="select-input" type="text" v-model="ward.WardName" />
              <ul v-if="select.Ward" class="select-option-container">
                <li
                  @click="optionWardOnClick(ward)"
                  v-for="ward in wards"
                  :key="ward.WardId"
                  class="select-option"
                >
                  {{ ward.WardName }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-2">
            <label class="form-label" for="District">Đường phố</label>
            <input
              @focus="getProvinces"
              class="form-input"
              type="text"
              name="District"
            />
          </div>
        </div>
        <div class="row-1" v-if="showStatus">
          <div class="col-1-2">
            <label class="form-label"></label>
            <div class="form-checkbox">
              <input
              type="checkbox"
              id="status"
              v-model="store.Status"
              @click="checkBoxOnClick"
            />
            <label> Ngừng hoạt động</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-button">
        <div class="form-button-left">
          <a
            class="common-btn btn-support"
            target="_blank"
            href="http://help.mshopkeeper.vn/vi/kb/chuyen_quy_mo_cua_hang_sang_dang_chuoi"
          >
            <div class="btn-icon support-icon"></div>
            <div class="button-text">Trợ giúp</div>
          </a>
        </div>
        <div class="form-button-right">
          <button class="common-btn btn btn-save" @click="saveOnClick(false)">
            <div class="btn-icon save-icon"></div>
            <div class="button-text">Lưu</div>
          </button>
          <button class="common-btn btn-save-add" @click="saveOnClick(true)">
            <div class="btn-icon save-add-icon"></div>
            <div class="button-text">Lưu và thêm mới</div>
          </button>
          <button
            ref="CloseButton"
            class="common-btn btn-cancel"
            @click="closeOnClick"
          >
            <div class="btn-icon cancel-icon"></div>
            <div class="button-text">Hủy bỏ</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import AutoComplete from "../../components/base/AutoComplete";
export default {
  components: {
    // AutoComplete,
  },
  props: {
    selectStores: Array,
    method: String,
  },

  data() {
    return {
      exclamation: { StoreCode: false, StoreName: false, Address: false },
      notification: { StoreCode: false, StoreName: false, Address: false },
      select: { Province: false, Country: false, District: false, Ward: false },
      storeCodeNotify: "Trường này không được để trống.",
      countrys: [],
      country: {},
      provinces: [],
      province: {},
      districts: [],
      district: {},
      wards: [],
      ward: {},
      test:{},
    };
  },

  methods: {
    /**
     * Hàm trả ra cho component cha sự kiện hủy
     */
    closeOnClick() {
      this.$emit("handleClose");
    },
    /**
     * Hàm ra cho component cha sự kiện lưu
     * param name: <saveAndAddState> trạng thái lưu và thêm mới
     */
    saveOnClick(saveAndAddState) {
      var isValid = this.validateForm();
      if (isValid == true) {
        this.$emit("handleSave", this.store, saveAndAddState);
        if (saveAndAddState == true) {
          this.$refs["StoreCode"].focus();
          this.clearAddress();
        }
      }
      /// Focus ô nhập chưa đúng
      else {
        document.getElementsByClassName("blur")[0].focus();
      }
    },
    /**
     * Sự kiện blur và cảnh báo khi chưa nhập vào các trường cần nhập
     */
    onBlur(param, propertyName) {
      if (param == null || param == "") {
        this.exclamation[propertyName] = true;
        event.currentTarget.classList.add("blur");
      } else {
        this.exclamation[propertyName] = false;
        event.currentTarget.classList.remove("blur");
      }
    },
    /**
     * Hàm validate Form
     */
    validateForm() {
      var isDuplicate = this.checkDuplicateStore();
      console.log(isDuplicate);
      var isValid = true;
      // if (isDuplicate == true) {
      //   console.log(isDuplicate);
      //   this.exclamation.StoreCode = true;
      //   this.notification.StoreCode = true;
      //   document.querySelector('[name="StoreCode"]').classList.add("blur");
      //   isValid = false;
      //   this.storeCodeNotify = "Mã Cửa hàng đã tồn tại trên hệ thống";
      // }
      if (this.store.StoreCode == null || this.store.StoreCode == "") {
        this.exclamation.StoreCode = true;
        this.notification.StoreCode = true;
        document.querySelector('[name="StoreCode"]').classList.add("blur");
        isValid = false;
      }
      if (this.store.StoreName == null || this.store.StoreName == "") {
        this.exclamation.StoreName = true;
        this.notification.StoreName = true;
        document.querySelector('[name="StoreName"]').classList.add("blur");
        isValid = false;
      }
      if (this.store.Address == null || this.store.Address == "") {
        this.exclamation.Address = true;
        this.notification.Address = true;
        document.querySelector('[name="Address"]').classList.add("blur");
        isValid = false;
      }
      return isValid;
    },
    /**
     * Hàm check trùng mã cửa hàng
     */
    checkDuplicateStore() {
      var isDuplicate = false
      var test={};
      if (this.method == "post") {
        var params = {
          StoreCode : this.store.StoreCode,
        }
        axios({
          method: "get",
          url: "https://localhost:44399/api/v1/stores/code",
          param: params,
        }).then((res) => {
          test = res
          console.log(test);
        }) .catch((res) => {
          console.log(res.response);
        })
      }
      console.log(test);
      return isDuplicate;
    },
    /**
     * Hàm lấy giá trị trạng thái cửa hàng
     */
    checkBoxOnClick() {
      if (this.store.Status == true) {
        this.store.Status = 0;
      }
      else {
        this.store.Status = 1;
      }
    },
    /**
     * hàm show ra hiển thị cảnh báo khi chưa nhập trường hoặc mã bị trùng
     */
    showNotification(param) {
      this.notification[param] = true;
    },
    /**
     * hàm ẩn  cảnh báo khi chưa nhập trường hoặc mã bị trùng
     */
    hideNotification(param) {
      this.notification[param] = false;
    },

    /**
     * Hàm clear các data địa chỉ
     */
    clearAddress() {
      (this.countrys = []),
        (this.provinces = []),
        (this.districts = []),
        (this.wards = []),
        (this.country = {}),
        (this.province = {}),
        (this.district = {}),
        (this.ward = {});
    },

    /**
     * Sự kiện xảy ra khi chọn dự liệu trong ô quốc gia
     */
    optionCountryOnClick(country) {
      this.country = country;
      this.store.CountryId = country.CountryId;
      this.province = {};
      this.district = {};
      this.ward = {};
      this.getProvinces();
    },
    /**
     * Sự kiện xảy ra khi chọn dự liệu trong tỉnh thành
     */
    optionProvinceOnClick(Province) {
      this.province = Province;
      this.store.ProvinceId = Province.ProvinceId;
      this.district = {};
      this.ward = {};
      this.getDistricts();
    },
    /**
     * Sự kiện xảy ra khi chọn dự liệu trong ô quận huyện
     */
    optionDistrictOnClick(district) {
      this.district = district;
      this.store.DistrictId = district.DistrictId;
      this.ward = {};
      this.getWards();
    },
    /**
     * Sự kiện xảy ra khi chọn dự liệu trong ô phường/xã
     */
    optionWardOnClick(ward) {
      this.ward = ward;
      this.store.WardId = ward.WardId;
    },

    /**
     * Hàm lấy danh sách quốc gia
     */
    getCountrys() {
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Countrys",
      })
        .then((res) => {
          this.countrys = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    /**
     * Hàm lấy danh sách tỉnh thành theo quốc gia đã chọn
     */
    getProvinces() {
      var params = {
        CountryId: this.store.CountryId,
      };
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Provinces/a",
        params: params,
      })
        .then((res) => {
          this.provinces = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    /**
     * Hàm lấy danh sách quận/huyện theo tỉnh thành đã chọn
     */
    getDistricts() {
      var params = {
        ProvinceId: this.store.ProvinceId,
      };
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Districts/a",
        params: params,
      })
        .then((res) => {
          this.districts = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    /**
     * Hàm lấy danh sach phường xã theo quận/huyện đã chọn
     */
    getWards() {
      var params = {
        DistrictId: this.store.DistrictId,
      };
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Wards/a",
        params: params,
      })
        .then((res) => {
          this.wards = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },

  created() {
    /**
     * Khởi tạo lấy danh sách quốc gia và quốc gia đã chọn
     */
    this.getCountrys();
    if (this.store.CountryId) {
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/countrys/" + this.store.CountryId,
      })
        .then((res) => {
          this.country = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
      this.getProvinces();
    }
    /**
     * Khởi tạo lấy danh sách tỉnh/ thành theo quốc gia đã chọn và tỉnh thành đã chọn
     */
    if (this.store.ProvinceId) {
      axios({
        method: "get",
        url:
          "https://localhost:44399/api/v1/provinces/" + this.store.ProvinceId,
      })
        .then((res) => {
          this.province = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
      this.getDistricts();
    }
    /**
     * Khởi tạo lấy danh sách quận/huyện theo tỉnh/thành đã chọn và quận/huyện đã chọn
     */
    if (this.store.DistrictId) {
      axios({
        method: "get",
        url:
          "https://localhost:44399/api/v1/districts/" + this.store.DistrictId,
      })
        .then((res) => {
          this.district = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
      this.getWards();
    }
    /**
     * Khởi tạo lấy danh sách phường/xã theo quận huyện đã chọn và phường/xã đã chọn
     */
    if (this.store.WardId) {
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/wards/" + this.store.WardId,
      })
        .then((res) => {
          this.ward = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    }
  },

  mounted() {
    this.$refs["StoreCode"].focus();
  },

  computed: {
    store() {
      if (this.selectStores == null || this.selectStores == []) {
        return {};
      } else if (this.selectStores.length >= 1) {
        return this.selectStores[0];
      } else {
        return {};
      }
    },

    formTitleDisplay() {
      if (this.method == "put") {
        return "Sửa cửa hàng";
      } else {
        return "Thêm mới cửa hàng";
      }
    },

   showStatus() {
     if (this.method == "put") {
       return true;
     }
     else {
       return false;
     }
   }
  },
};
</script>

<style scoped>
.form-container {
  width: 600px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 999;
  min-height: 486px;
}

.form-container .form-content {
  display: flex;
  padding: 16px 16px 0px;
  width: calc(100% - 32px);
  flex-wrap: wrap;
  margin-bottom: 8px;
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

.form-container .form-content .row-1 .form-checkbox {
  height: calc(100% - 4px);
  width: 100%;
  font-family: Roboto, Tahoma, sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
}

#status {
  margin: 0;
  margin-right: 8px;
  color: #2b3173;
  border-color: #2b3173;
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

.form-select-container {
  width: 162px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 31px;
  display: flex;
  cursor: pointer;
}

.select-option-container {
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 33px;
  background-color: white;
  width: 162px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  list-style: none;
}

.select-option {
  height: 33px;
  line-height: 33px;
  cursor: pointer;
  padding: 0 10px;
}

.select-option:hover {
  background-color: #2b3173;
  color: white;
}

.select-input {
  outline: none;
  border: none;
  height: 100%;
  width: calc(100% - 22px);
  z-index: 1;
  padding: 0 10px;
  margin: 0;
}

.form-container .form-content .address-container .address-input {
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  resize: none;
}

.form-container .form-content .row-1 .form-input:focus {
  border-color: blue !important;
}

.row-1 .col-1-2 {
  display: flex;
  width: 50%;
  height: 100%;
}

.exclamation {
  background-image: url("../../assets/img/exclamation.png");
  background-repeat: no-repeat;
  min-width: 16px;
  height: 16px;
  margin: 0 4px;
  position: relative;
}

.exclamation .notification {
  position: absolute;
  left: 30px;
  bottom: -36px;
  background-color: red;
  color: white;
  z-index: 1000;
  width: 200px;
  padding: 6px 10px;
  font-size: 13px;
}

.select-header-arrow2{
  background-image: url("../../assets/img/arrow-down-line.png");
  background-repeat: no-repeat;
  background-position: 8px;
  height: 100%;
  min-width: 24px;
}
</style>