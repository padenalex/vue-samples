<template>
  <div class="select-option">
    <label>{{ labelName }}</label>
    <div>
      test123
      <select :value="value" @input="$emit('input', $event.target.value)">
        <option v-if="placeholder" value>{{placeholder}}</option>
        <option v-for="o in options" :value="o.value" :key="`opt-${o.value}-{o.text}`">{{ o.text }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String
    },
    labelName: {
      required: false,
      type: String
    },
    placeholder: {
      required: false,
      type: String
    },
    options: {
      required: true,
      type: Array
    }
  },
  watch: {},
  computed: {}
};
</script>

<style></style>
