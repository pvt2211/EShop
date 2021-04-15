<template>
  <div>
    <input v-model="input" @input="handleInput" />
    <div class="bordered" v-if="input">
      <ul>
        <li v-for="(item, i) in list" :key="i" @click="setInput(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: ['list'],
  data() {
    return {
      input: null
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    setInput(value) {
      this.input = value
      this.$emit('input', value)
    }
  },
}
</script>

<style scopped>
</style>