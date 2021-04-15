<template>
  <div class="store-container">
    <ButtonBar
      :selectEntities="selectStores"
      @handleDuplicate="handleDuplicate"
      @handleEdit="handleEdit"
      @handleReload="handleReload"
      @handleAdd="handleAdd"
      @handleDelete="handleDelete"
    />
    <Paging />
    <div class="table-container">
      <table class="table">
        <tr class="th-thread">
          <th
            class="colum-container"
            v-for="(storeDisplay, index) in storeDisplays"
            :key="index"
            v-bind:style="{
              minWidth: storeDisplay.MinWidth,
              width: storeDisplay.Width,
            }"
          >
            <div class="table-colum-title">{{ storeDisplay.DisplayName }}</div>
            <div class="table-filter">
              <div class="filter-criteria">
                {{ storeDisplay.FilterCriteria }}
              </div>
              <input type="text" class="filter-text" />
            </div>
          </th>
          <th class="colum-container store-status">
            <div class="table-colum-title">Trạng thái</div>
            <input
              type="text"
              class="filter-text status-filter"
              value="Tất cả"
            />
          </th>
        </tr>
        <tr
          class="table-tr"
          v-for="(store, index) in stores"
          :key="store[0]"
          @click="trOnClick(store, index)"
        >
          <td
            class="table-row"
            v-for="(storeDisplay, index) in storeDisplays"
            :key="index"
          >
            {{ store[storeDisplay.PropertyName] }}
          </td>
          <td class="table-row">
            {{ store.Status | filterStatus(store.Status) }}
          </td>
        </tr>
      </table>
    </div>

    <StoreDetail
      :selectStores="selectStores"
      @handleSaveAndAdd="handleSaveAndAdd"
      @handleSave="handleSave"
      @handleClose="handleClose"
      v-if="detailShow"
    />

    <DeleteDialog
      :selectStores="selectStores"
      @handleConfirmDelete="handleConfirmDelete"
      @handleClose="handleClose"
      v-if="deleteShow"
    />
  </div>
</template>

<script>
import axios from "axios";
import ButtonBar from "../../components/base/ButtonBar.vue";
import Paging from "../../components/base/Paging";
// import Table from "../../components/base/Table";
import StoreDetail from "./StoreDetail";
import DeleteDialog from "./DeleteDialog";

export default {
  components: {
    ButtonBar,
    Paging,
    StoreDetail,
    DeleteDialog,
  },

  data() {
    return {
      stores: [],
      selectStores: [],
      dynamicMethod: "",
      dynamicLink: "",
      urlLink: "https://localhost:44399/api/v1/Stores",
      detailShow: false,
      deleteShow: false,
      storeDisplays: [
        {
          PropertyName: "StoreCode",
          DisplayName: "Mã cửa hàng",
          MinWidth: "149px",
          Width: "149px",
          TextAlign: "left",
          FilterCriteria: "*",
          CriteriaState: "false",
        },
        {
          PropertyName: "StoreName",
          DisplayName: "Tên cửa hàng",
          MinWidth: "249px",
          Width: "249px",
          TextAlign: "left",
          FilterCriteria: "*",
          CriteriaState: "false",
        },
        {
          PropertyName: "Address",
          DisplayName: "Địa chỉ",
          MinWidth: "",
          Width: "",
          TextAlign: "left",
          FilterCriteria: "*",
          CriteriaState: "false",
        },
        {
          PropertyName: "PhoneNumber",
          DisplayName: "Số điện thoại",
          MinWidth: "129px",
          Width: "129px",
          TextAlign: "left",
          FilterCriteria: "*",
          CriteriaState: "false",
        },
      ],
    };
  },

  methods: {
    /**
     * Hàm lấy dữ liệu
     */
    getData() {
      axios({
        method: "get",
        url: this.urlLink,
      })
        .then((res) => {
          this.stores = res.data;
          for (let i = 0; i < res.data.length; i++) {
            this.stores[i].isSelect = false;
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },

    handleDelete() {
      this.deleteShow = true;
    },

    handleAdd() {
      this.resetSelect();
      this.detailShow = true;
      this.dynamicMethod = "post";
    },

    handleReload() {
      this.getData();
      this.resetSelect();
    },

    handleEdit() {
      this.detailShow = true;
      this.dynamicMethod = "put";
    },

    handleDuplicate() {},

    handleSave(store, saveAndAddState) {
      var urlLink = "";
      if (this.dynamicMethod == "put") {
        urlLink = this.urlLink + "/" + this.selectStores[0].StoreId;
      } else {
        urlLink = this.urlLink;
      }
      axios({
        method: this.dynamicMethod,
        url: urlLink,
        data: store,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.getData();
          this.resetSelect();
          if (saveAndAddState == false) {
            this.detailShow = false;
          } else {
            this.dynamicMethod = "post";
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },

    handleSaveAndAdd(store) {
      var urlLink = "";
      if (this.dynamicMethod == "put") {
        urlLink = this.urlLink + "/" + this.selectStores[0].StoreId;
      } else {
        urlLink = this.urlLink;
      }
      axios({
        method: this.dynamicMethod,
        url: urlLink,
        data: store,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        this.getData();
        this.resetSelect();
      })
      .catch((res) => {
        console.log(res);
      });
    },

    handleConfirmDelete() {
      if (this.selectStores.length >= 1) {
        this.selectStores.forEach((selectStore) => {
          axios({
            method: "delete",
            url: this.urlLink + "/" + selectStore.StoreId,
          })
            .then(() => {
              this.getData();
              this.resetSelect();
              this.deleteShow = false;
            })
            .catch((res) => {
              console.log(res);
            });
        });
      }
    },

    handleClose() {
      this.detailShow = false;
      this.deleteShow = false;
    },
    trOnClick(store, index) {
      if (this.stores[index].isSelect == false) {
        event.currentTarget.classList.add("is-select");
        this.selectStores.push(store);
      } else {
        event.currentTarget.classList.remove("is-select");
        for (var i = 0; i < this.selectStores.length; i++) {
          if (this.selectStores[i] === store) {
            this.selectStores.splice(i, 1);
          }
        }
      }
      this.stores[index].isSelect = !this.stores[index].isSelect;
      this.store = store;
    },

    resetSelect() {
      this.selectStores = [];
      this.getTrs.forEach((tr) => {
        tr.classList.remove("is-select");
      });
    },
  },

  computed: {
    getTrs() {
      var trs = document.getElementsByClassName("table-tr");
      return trs;
    },
  },

  created() {
    this.getData();
  },

  filters: {
    filterStatus(param) {
      if (param == 1) {
        return "Đang hoạt động";
      } else {
        return "Ngừng hoạt động";
      }
    },
  },
};
</script>

<style scoped>
.store-container {
  background-color: #e5e6eb;
  padding: 8px;
  height: 100%;
  position: relative;
}

.table-container {
  background-color: #ffffff;
  width: 100%;
  height: calc(100% - 90px);
  border-top: 1px solid #e9e9e9;
  overflow: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.table .table-row {
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  height: 18px;
  padding: 7px 10px;
}
/* filter bar */
.th-thread {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #e9e9e9;
}

.th-thread th {
  position: sticky;
  top: 0px;
  background-color: #f0f0f0;
  padding: 0;
}

.table-tr {
  cursor: pointer;
}

.table-tr:nth-child(even) {
  background-color: #f6f6f6;
}

.table-tr:hover {
  background-color: #eaeff4;
}

.th-thread .colum-container {
  border-right: 1px solid #d0d0d0;
}

.th-thread .colum-container .table-colum-title {
  text-align: center;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  font-weight: 600;
}

.th-thread .colum-container .table-filter {
  display: flex;
  border-top: 1px solid #d0d0d0;
  width: 100%;
}
.th-thread .colum-container .table-filter .filter-criteria {
  background-color: #ffffff;
  text-align: center;
  height: 100%;
  min-width: 33px;
  border-right: 1px solid #d0d0d0;
  border-left: 1px solid #d0d0d0;
  line-height: 32px;
  cursor: pointer;
  margin: 0;
  outline: none;
  margin-left: 1px;
}

.th-thread .colum-container .filter-text {
  padding: 0px;
  width: calc(100% - 32px);
  outline: none;
  border: none;
  /* border-top: 1px solid #e9e9e9; */
  padding: 8px;
}

.th-thread .colum-container .filter-text:focus {
  border: 1px solid blue;
  border-bottom: none;
}

.th-thread .store-status {
  min-width: 150px;
  width: 150px;
}

.th-thread .colum-container .status-filter {
  border: 1px solid #e9e9e9;
  border-bottom: 0px;
  width: calc(100% - 20px);
}

.is-select {
  background-color: #e2e4f1 !important;
  border: none !important;
  border-top: 1px solid #f2e3b2 !important;
  border-bottom: 1px solid #f2e3b2 !important;
}
/* ------------------------------------------------------- */
</style>>
