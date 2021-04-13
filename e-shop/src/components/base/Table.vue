<template>
  <div class="table-container">
    <table class="table">
      <tr class="th-thread">
        <th
          class="colum-container"
          v-for="(entityDisplay, index) in entityDisplays"
          :key="index"
          v-bind:style="{
            minWidth: entityDisplay.MinWidth,
            width: entityDisplay.Width,
          }"
        >
          <div class="table-colum-title">{{ entityDisplay.DisplayName }}</div>
          <div class="table-filter">
            <div
              class="filter-criteria"
              @click="showFilterCriteria(entityDisplay.CriteriaState)"
            >
              {{ entityDisplay.FilterCriteria }}
            </div>
            <input type="text" class="filter-text" />
          </div>
        </th>
      </tr>
      <tr class="table-tr" v-bind:class="{'is-select': entities[index].isSelect }" 
      v-for="(entity,index) in entities" :key="entity[0]" @click="trOnClick(entity,index)">
        <td
          class="table-row"
          v-for="(entityDisplay, index) in entityDisplays"
          :key="index"
        >
          {{ entity[entityDisplay.PropertyName] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    entityDisplays: Array,
    entities: Array,
  },

  data() {
    return {
      entitiesSelect:this.entities,
    }
  },

  methods: {
    trOnClick(entity,index) {
      this.entities[index].isSelect = true;
      this.$emit('handleTr',entity)
    }
  }
};
</script>

<style scoped>
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

.table-tr:hover {
  background-color: #d1f1ff;
}

tr:nth-child(even) {
  background-color: #f6f6f6;
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
  background-color: #c3ecff;
}
/* ------------------------------------------------------- */
</style>