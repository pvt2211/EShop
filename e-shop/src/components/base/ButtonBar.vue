<template>
    <div class="button-bar">
        <button class="common-btn" style="border:none;" @click="addOnClick">
            <div class="btn-icon add-icon"></div>
            <div class="button-text">Thêm mới</div>
        </button>
        <button :disabled="editDisable" v-bind:class="{ 'is-disable': editDisable }" class="common-btn button-bar-border" @click="duplicateOnClick">
            <div class="btn-icon dup-icon"></div>
            <div class="button-text">Nhân bản</div>
        </button>
        <button :disabled="editDisable" v-bind:class="{ 'is-disable': editDisable }" class="common-btn button-bar-border" @click="editOnClick">
            <div class="btn-icon edit-icon"></div>
            <div class="button-text">Sửa</div>
        </button>
        <button :disabled="deleteDisable" v-bind:class="{ 'is-disable': deleteDisable }" @click="deleteOnClick" class="common-btn button-bar-border">
            <div class="btn-icon delete-icon"></div>
            <div class="button-text">Xóa</div>
        </button>
        <button @click="reloadOnClick" class="common-btn button-bar-border">
            <div class="btn-icon reload-icon"></div>
            <div class="button-text">Nạp</div>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        selectEntities:Array,
    },

    data() {
        return {
        }
    },

    methods: {
        /**
         * Sự kiện trả về cho component cha khi click nút thêm mới
         */
        addOnClick() {
            this.$emit('handleAdd');
        },
        /**
         * Sự kiện trả về cho component cha khi click nút xóa
         */
        deleteOnClick() {
            this.$emit('handleDelete');
        },
        /**
         * Sự kiện trả về cho component cha khi click nút reset
         */
        reloadOnClick() {
            this.$emit('handleReload');
        },
        /**
         * Sự kiện trả về cho component cha khi click nút nhân bản
         */
        duplicateOnClick() {
            this.$emit('handleDuplicate');
        },
        /**
         * Sự kiện trả về cho component cha khi click nút sửa
         */
        editOnClick() {
            this.$emit('handleEdit');
        },
    },

    computed: {
        /**
         * Giá trị để disable nút xóa
         */
        deleteDisable() {
            if (this.selectEntities == null) {
                return true;
            } 
            else if (this.selectEntities.length == 0) {
                return true;
            }
            else {
                return false;
            }
        },
        /**
         * Giá trị để disable nút sửa
         */
        editDisable() {
            if (this.selectEntities == null) {
                return true;
            } 
            else if (this.selectEntities.length == 1) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}
</script>

<style scoped>

.button-bar {
    background-color: #2b3173;
    color:#ffffff;
    height: 36px;
    display: flex;
    align-items: center;
}


</style>