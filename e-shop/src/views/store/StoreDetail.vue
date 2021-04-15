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
      <div class="form-content" id="form">
        <div class="row-1">
          <label class="form-label" for="StoreCode"
            >Mã cửa hàng <span class="red-color">*</span></label
          >
          <input
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
            <div
              @click="select.Country = !select.Country"
              class="form-select-container"
            >
              <input
                class="select-input"
                type="text"
                v-model="country.CountryName"
              />
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
              />
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
            >
              <input
                
                class="select-input"
                type="text"
                v-model="district.DistrictName"
              />
              <ul v-if="select.District" class="select-option-container">
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
              <input
                
                class="select-input"
                type="text"
                v-model="ward.WardName"
              />
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
    };
  },

  methods: {
    closeOnClick() {
      this.$emit("handleClose");
    },

    saveOnClick(saveAndAddState) {
      var isValid = this.validateForm();
      if (isValid == true) {
        this.$emit("handleSave", this.store, saveAndAddState);
        if (saveAndAddState == true) {
          this.$refs["StoreCode"].focus();
        }
      }
      /// Focus ô nhập chưa đúng
      else {
        document.getElementsByClassName("blur")[0].focus();
      }
    },

    saveAndAddOnClick() {
      var isValid = this.validateForm();
      if (isValid == true) {
        this.$emit("handleSaveAndAdd", this.store);
      }
    },

    onBlur(param, propertyName) {
      if (param == null || param == "") {
        this.exclamation[propertyName] = true;
        event.currentTarget.classList.add("blur");
      } else {
        this.exclamation[propertyName] = false;
        event.currentTarget.classList.remove("blur");
      }
    },

    validateForm() {
      var isValid = true;
      // var isDuplicate = this.checkDuplicateStore(this.store);
      // if (isDuplicate == true) {
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

    checkDuplicateStore(store) {
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/stores/valid",
        data: store,
      })
        .then((res) => {
          return res;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    showNotification(param) {
      this.notification[param] = true;
    },

    hideNotification(param) {
      this.notification[param] = false;
    },

    handleCountry(e) {
      this.filterCountry = e;
    },

    optionCountryOnClick(country) {
      this.country = country;
      this.store.CountryId = country.CountryId;
      this.province = {};
      this.district = {};
      this.ward = {};
      this.getProvinces();
    },

    optionProvinceOnClick(Province) {
      this.province = Province;
      this.store.ProvinceId = Province.ProvinceId;
      this.district = {};
      this.ward = {};
      this.getDistricts();
    },

    optionDistrictOnClick(district) {
      this.district = district;
      this.store.DistrictId = district.DistrictId;
      this.ward = {};
      this.getWards();
    },

    optionWardOnClick(ward) {
      this.ward = ward;
      this.store.WardId = ward.WardId;
    },

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

    getProvinces() {
      var params = {
        CountryId: this.store.CountryId,
      };
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Provinces",
        params: params,
      })
        .then((res) => {
          this.provinces = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    getDistricts() {
      console.log(this.store);
      var params = {
        ProvinceId: this.store.ProvinceId,
      };
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Districts",
        params: params,
      })
        .then((res) => {
          this.districts = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    getWards() {
      var params = {
        DistrictId: this.store.DistrictId,
      };
      axios({
        method: "get",
        url: "https://localhost:44399/api/v1/Wards",
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
    this.getCountrys();
    if (this.store.CountryId != null && this.store.CountryId !="") {
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
   
    if (this.store.ProvinceId != null && this.store.ProvinceId !="") {
       axios({
      method: "get",
      url: "https://localhost:44399/api/v1/provinces/" + this.store.ProvinceId,
    })
      .then((res) => {
        this.province = res.data;
      })
      .catch((res) => {
        console.log(res);
      });
      this.getDistricts();
    }

    if (this.store.District != null && this.store.District !="") {
       axios({
      method: "get",
      url: "https://localhost:44399/api/v1/districts/" + this.store.District,
    })
      .then((res) => {
        this.district = res.data;
      })
      .catch((res) => {
        console.log(res);
      });
      this.getWards();
    }

    if (this.store.WardId != null && this.store.WardId !="") {
       axios({
      method: "get",
      url: "https://localhost:44399/api/v1/countrys/" + this.store.WardId,
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

    // provinces() {
    //   if (this.store.CountryId == null || this.store.CountryId == "") {
    //     return [];
    //   } else {
    //     var params = {
    //       Id: this.store.CountryId,
    //     };
    //     var temp = [];
    //     axios({
    //       method: "get",
    //       url: "https://localhost:44399/api/v1/Provinces/a",
    //       params: params,
    //     }).then(res =>{
    //       temp = res.data;
    //     }).catch(res => {
    //       console.log(res);
    //     })
    //     return temp;
    //   }
    // },
    // filteredList() {
    //   if (this.filterCountry) {
    //     return this.list.filter(e => e.toLowerCase().indexOf(this.filterInput.toLowerCase()) !== -1)
    //   } else {
    //     return this.list
    //   }
    // }
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

.form-select-container {
  width: 162px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 31px;
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
</style>