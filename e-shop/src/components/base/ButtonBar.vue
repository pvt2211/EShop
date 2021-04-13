<template>
    <div class="button-bar">
        <div class="button-common" style="border:none;" @click="addOnClick">
            <font-awesome-icon :icon="['fas', 'plus']" class="button-icon"/>
            <div class="button-text">Thêm mới</div>
        </div>
        <div class="button-common border-black-left" @click="duplicateOnClick">
            <font-awesome-icon :icon="['fas', 'clone']" class="button-icon"/>
            <div class="button-text">Nhân bản</div>
        </div>
        <div class="button-common border-black-left" @click="editOnClick">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" class="button-icon"/>
            <div class="button-text">Sửa</div>
        </div>
        <div  @click="deleteOnClick" class="button-common border-black-left">
            <font-awesome-icon :icon="['fas', 'trash']" class="button-icon"/>
            <div class="button-text">Xóa</div>
        </div>
        <div @click="reloadOnClick" class="button-common border-black-left">
            <font-awesome-icon :icon="['fas', 'sync-alt']" class="button-icon"/>
            <div class="button-text">Nạp</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addOnClick() {
            this.$emit('handleAdd');
        },

        deleteOnClick() {
            this.$emit('handleDelete');
        },

        reloadOnClick() {
            this.$emit('handleReload');
        },

        duplicateOnClick() {
            this.$emit('handleDuplicate');
        },

        editOnClick() {
            this.$emit('handleEdit');
        },
    }
}
</script>

<style scoped>

.button-bar {
    background-color: #026b97;
    color:#ffffff;
    height: 36px;
    display: flex;
    align-items: center;
}

</style>