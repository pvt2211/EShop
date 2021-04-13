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
                        <font-awesome-icon :icon="['fas', 'question-circle']" class="button-icon"/>
                </div>
                <div class="delete-text">Bạn có chắc chắn muốn xóa abc khỏi danh sách cửa hàng.</div>
            </div>
            <div class="form-button delete-dialog-button">
                <div class="form-button-right">
                    <div class="button-common button-support button-delete">
                        <font-awesome-icon :icon="['fas', 'save']" class="button-icon"/>
                        <div class="button-text">Xóa</div>
                    </div>
                    <div @click="closeOnClick" class="button-common button-support">
                        <font-awesome-icon :icon="['fas', 'times']" class="button-icon"/>
                        <div class="button-text">Hủy</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeOnClick() {
            this.$emit('handleClose');
        },
    }
}
</script>

<style scoped>
.delete-dialog-container {
    width: 400px;
    border:1px solid #ccc;
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
    width: 44px;
    font-size: 44px;
    background-color:white;
    color: #0088c1;
    margin-right: 16px;
}

.delete-dialog-button {
    justify-content: flex-end;
    padding: 6px;
}
</style>