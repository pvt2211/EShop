<template>
    <div class="button-bar">
        <button class="button-common" style="border:none;" @click="addOnClick">
            <font-awesome-icon :icon="['fas', 'plus']" class="button-icon"/>
            <div class="button-text">Thêm mới</div>
        </button>
        <button :disabled="editDisable" class="button-common border-black-left" @click="duplicateOnClick">
            <font-awesome-icon :icon="['fas', 'clone']" class="button-icon"/>
            <div class="button-text">Nhân bản</div>
        </button>
        <button :disabled="editDisable" class="button-common border-black-left" @click="editOnClick">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" class="button-icon"/>
            <div class="button-text">Sửa</div>
        </button>
        <button :disabled="deleteDisable" @click="deleteOnClick" class="button-common border-black-left">
            <font-awesome-icon :icon="['fas', 'trash']" class="button-icon"/>
            <div class="button-text">Xóa</div>
        </button>
        <button @click="reloadOnClick" class="button-common border-black-left">
            <font-awesome-icon :icon="['fas', 'sync-alt']" class="button-icon"/>
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
    },

    computed: {
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