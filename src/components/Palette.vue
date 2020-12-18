<template>
  <div
    id="palette"
    v-clipboard:copy="getColor"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
    class="relative h-10 w-10"
    :style="{ backgroundColor: getColor }"
  >
    <p class="absolute hidden px-2 py-1 rounded-md" :style="{ color: getColor }">
      {{ getColor }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    getColor() {
      return this.color
    }
  },
  methods: {
    onCopy(): void {
      alert('コピーしました！')
    },
    onError(): void {
      alert('対応していないブラウザです。')
    }
  }
})
</script>

<style scoped>
#palette > p {
  top: -2.5rem;
  left: 0.5rem;
  background-color: rgba(17, 24, 39, 1);
}
#palette > p::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0.5rem;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgba(17, 24, 39, 1);
}
#palette:hover > p {
  display: inline-block;
}
</style>
