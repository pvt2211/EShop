<template>
  <div class="paging">
    <div class="left-paging">
      <div class="paging-button">
        <div class="btn-icon first-icon"></div>
      </div>
      <div class="paging-button">
        <div class="btn-icon back-icon"></div>
      </div>
      <div class="paging-text">Trang</div>
      <input type="text" v-model="currentPage" class="paging-input" @keydown.enter="getCurrentPage"/>
      <div class="paging-text"> trên {{ totalPage }}</div>
      <div class="paging-button">
        <div class="btn-icon next-icon"></div>
      </div>
      <div class="paging-button">
        <div class="btn-icon last-icon"></div>
      </div>
      <div class="paging-button"><div class="btn-icon paging-reload-icon"></div></div>
      <select class="paging-limit" v-model="limit">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
    <div class="right-paging">Hiển thị {{ positionFirstCurrentEntity  }} - {{ positionLastCurrentEntity }} trên {{ countEntities }} kết quả</div>
  </div>
</template>

<script>
export default {
  props: ['countEntities'],
  data() {
    return {
      options:[15,25,50,100],
      currentPage:1,
      limit:15,
    }
  },

  methods: {
    /**
     * Hàm trả về cho component cha khi gọi đến trang hiện tại
     */
    getCurrentPage() {
      this.$emit('handleGetCurrentPage',this.positionFirstCurrentEntity,this.limit);
    }
  },

  computed: {
    //Tổng số trang
    totalPage() {
      return Math.ceil(this.countEntities / this.limit)
    },
    //vị trí bắt đầu hiện tại trên tổng số entities
    positionFirstCurrentEntity() {
      if (this.currentPage == 1) {
        return 1;
      }
      else {
        return ( this.currentPage - 1 ) * this.limit;
      }
    },
    //vị trí kết thúc hiện tại trên tổng số entities
    positionLastCurrentEntity() {
      return this.currentPage * this.limit;
    },
  },

  created() {
    this.litmit = 15;
    this.currentPage = 1;
  }
}
</script>

<style scoped>
.paging {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  position: absolute;
  bottom: 8px;
  border-top: 1px solid #e9e9e9;
  /* border-left: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1; */
  background-color: #ffffff;
  padding: 10px;
  width: calc(100% - 36px);
  color: #4b4c4c;
}

.left-paging {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-paging .paging-button {
  height: 24px;
  width: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  margin-right: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-paging .paging-text {
  margin-right: 8px;
  margin-left: 2px;
}

.left-paging .paging-input {
  outline: none;
  height: 24px;
  width: 46px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  text-align: center;
  padding: 0;
}

.left-paging .paging-limit {
  outline: none;
  height: 26px;
  width: 46px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
}

.right-paging {
  padding: 0 8px;
}
</style>