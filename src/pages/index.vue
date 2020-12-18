<template>
  <div class="container mx-auto -mt-16">
    <InputPreview @parseImage="parseImage" />
    <div class="palette h-12 mt-8">
      <ul v-if="modelColors.length" class="flex justify-center">
        <li v-for="color in modelColors" :key="color.id">
          <Palette :color="color" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vibrant from 'node-vibrant'

type localData = {
  input: boolean
  modelColors: string[]
}

export default Vue.extend({
  components: {},
  data(): localData {
    return {
      input: true,
      modelColors: []
    }
  },
  methods: {
    rgb2hex(rgb: number[]) {
      return `#${rgb
        .map(function (value: number) {
          return `0${value.toString(16)}`.slice(-2)
        })
        .join('')}`
    },
    async parseImage(file: string) {
      const v = await Vibrant.from(file)
        .getPalette()
        .then((palette) => {
          const _palette: { [key: string]: any } = { ...palette }
          const arr = Object.keys(palette).map((key): string => {
            return this.rgb2hex(_palette[key]._rgb)
          })
          return arr
        })

      this.modelColors = v
    }
  }
})
</script>
