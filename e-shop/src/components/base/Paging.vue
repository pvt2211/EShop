<template>
    <div class="paging">
        <div class="left-paging">
            <div class="paging-button"><font-awesome-icon :icon="['fas', 'angle-double-left']" class="button-icon"/></div>
            <div class="paging-button"><font-awesome-icon :icon="['fas', 'angle-left']" class="button-icon"/></div>
            <div class="paging-text">Trang</div>
            <input type="text" value="1" class="paging-input">
            <div class="paging-text">trên 1</div>
            <div class="paging-button"><font-awesome-icon :icon="['fas', 'angle-right']" class="button-icon"/></div>
            <div class="paging-button"><font-awesome-icon :icon="['fas', 'angle-double-right']" class="button-icon"/></div>
            <div class="paging-button"><font-awesome-icon :icon="['fas', 'sync-alt']" class="button-icon"/></div>
            <select name="pagingLimit" class="paging-limit">
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="50" selected>50</option>
                <option value="100">100</option>
            </select>
        </div>
        <div class="right-paging">Hiển thị 1 - 6 trên 6 kết quả</div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
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
    border-top: 1px solid #ccc;
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
        border:1px solid #ccc;
        border-radius: 4px;
        text-align: center;
        line-height: 24px;
        font-size: 16px;
        margin-right: 4px;
        cursor: pointer;
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