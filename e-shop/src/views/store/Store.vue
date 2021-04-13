<template>
  <div class="store-container">
    <ButtonBar @handleAdd="handleAdd" @handleDelete="handleDelete" />
    <!-- <StoreFilterBar
      :entityDisplays="storeDisplays"
      :filterEntitys="filterStores"
    /> -->
    <Paging />
    <Table @handleTr="handleTr" :entityDisplays="storeDisplays" :entities="stores" />

    <StoreDetail :store="store" @handleClose="handleClose" v-if="detailShow" />

    <DeleteDialog @handleClose="handleClose" v-if="deleteShow" />
  </div>
</template>

<script>
import axios from "axios";
import ButtonBar from "../../components/base/ButtonBar.vue";
import Paging from "../../components/base/Paging";
import Table from "../../components/base/Table";
import StoreDetail from "./StoreDetail";
import DeleteDialog from "./DeleteDialog";

// import StoreFilterBar from "./StoreFilterBar.vue";

export default {
  components: {
    ButtonBar,
    // StoreFilterBar,
    Paging,
    Table,
    StoreDetail,
    DeleteDialog,
  },

  data() {
    return {
      store: {},
      detailShow: false,
      deleteShow: false,
      stores: [],
      urlLink: "https://localhost:44399/api/v1/Stores",
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
        })
        .catch((res) => {
          console.log(res);
        });
    },

    handleDelete() {
      this.deleteShow = true;
    },

    handleAdd() {
      this.detailShow = true;
    },

    handleClose() {
      this.detailShow = false;
      this.deleteShow = false;
    },

    handleTr(entity) {
      this.store = entity;
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
</style>>
