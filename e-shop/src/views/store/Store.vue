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
        </tr>
      </table>
    </div>

    <StoreDetail
      :store="store"
      @handleSave="handleSave"
      @handleClose="handleClose"
      v-if="detailShow"
    />

    <DeleteDialog
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
      store: {},
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
          MinWidth: "199px",
          Width: "199px",
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
          MinWidth: "149px",
          Width: "149px",
          TextAlign: "left",
          FilterCriteria: "*",
          CriteriaState: "false",
        },
        {
          PropertyName: "Status",
          DisplayName: "Trạng thái",
          MinWidth: "199px",
          Width: "199px",
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
      this.store = {};
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

    handleSave() {
      var urlLink = "";
      if (this.dynamicMethod == "put") {
        urlLink = this.urlLink + "/" + this.store.StoreId;
      } else {
        urlLink = this.urlLink;
      }
      axios({
        method: this.dynamicMethod,
        url: urlLink,
        data: this.store,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.getData();
          this.resetSelect();
          this.detailShow = false;
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
  border-top: 1px solid #ccc;
  overflow: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.table .table-row {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 18px;
  padding: 7px 10px;
}
/* filter bar */
.th-thread {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #ccc;
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
  background-color: #ccc;
}

.table-tr:hover {
  background-color: #d1f1ff;
}

.th-thread .colum-container {
  border-right: 1px solid #ccc;
}

.th-thread .colum-container .table-colum-title {
  text-align: center;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
}

.th-thread .colum-container .table-filter {
  display: flex;
  border-top: 1px solid #ccc;
}
.th-thread .colum-container .table-filter .filter-criteria {
  background-color: #ffffff;
  text-align: center;
  height: 100%;
  width: 32px;
  border-right: 1px solid #ccc;
  /* border-top: 1px solid #ccc; */
  line-height: 32px;
  cursor: pointer;
  margin: 0;
  outline: none;
}

.th-thread .colum-container .table-filter .filter-text {
  padding: 0px;
  width: 100%;
  outline: none;
  border: none;
  /* border-top: 1px solid #ccc; */
  padding: 8px;
}

.is-select {
  background-color: #c3ecff !important;
}
/* ------------------------------------------------------- */
</style>>
