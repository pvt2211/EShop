<template>
    <div class="dialog-container">
        <div class="dialog-modal"></div>
        <div class="delete-dialog-container">
            <div class="form-header">
                <div class="form-header-title"><span>Xóa dữ liêụ</span></div>
                <div class="close-btn" @click="closeOnClick"><font-awesome-icon :icon="['fas', 'times']" /></div>
            </div>
            <div class="delte-dialog-content">
                <div class="delete-notify">
                    
                </div>
                <div class="delete-text">Bạn có chắc chắn muốn xóa <span v-bind:class="{'is-bold':isBold}">{{ entityDelete }}</span> khỏi danh sách cửa hàng.</div>
            </div>
            <div class="form-button delete-dialog-button">
                <div class="form-button-right">
                    <div @click="deleteOnClick" class="common-btn btn-confirm-delete">
                        <div class="btn-icon delete-icon"></div>
                        <div class="button-text">Xóa</div>
                    </div>
                    <div @click="closeOnClick" class="common-btn btn-cancel btn-cancel-2">
                        <div class="btn-icon cancel-icon"></div>
                        <div class="button-text">Hủy bỏ</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selectStores:Array,
    },
    methods: {
        /**
         * Sự kiện trả về cho component cha khi click hủy
         */
        closeOnClick() {
            this.$emit('handleClose');
        },
        /**
         * Sự kiện trả về cho component cha khi click xác nhận xóa
         */
        deleteOnClick() {
            this.$emit('handleConfirmDelete')
        }
    },

    computed: {
        /**
         * Giá trị hiển thị khi muốn xóa
         */
        entityDelete() {
            if (this.selectStores.length == 1) {
                return this.selectStores[0].StoreCode;
            } else {
                return "các cửa hàng đã chọn";
            }
        },
        /**
         * Giá trị để css thuộc tính
         */
        isBold() {
            if (this.selectStores.length == 1) {
                return true;
            } else {
                return false;
            }
        }
    },

}
</script>

<style scoped>
.delete-dialog-container {
    width: 400px;
    border:1px solid #e9e9e9;
    border-radius: 4px;
    background-color: #ffffff;
    z-index: 999;
    height: 158px;
}

.delte-dialog-content {
    display: flex;
    padding: 10px;
    align-items: center;
    height: 44px;
}

.delete-notify {
    line-height: 44px;
    height: 100%;
    min-width: 44px;
    background-color:white;
    color: #6b6f9d;
    margin-right: 16px;
    background: url("../../assets/img/icon-popup.png") no-repeat -165px -2px;
}

.delete-dialog-button {
    justify-content: flex-end;
    padding: 6px;
}

.is-bold {
    font-weight: bold;
}
</style>