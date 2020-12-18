<template>
  <div class="flex items-center justify-center bg-grey-lighter">
    <label
      class="relative flex py-12 flex-col items-center bg-white text-gray-800 rounded-lg shadow-lg box-border tracking-wide uppercase border border-blue cursor-pointer overflow-hidden hover:bg-blue hover:text-black"
      :class="{ blur: blur }"
      @dragover.prevent="blurInput"
      @drop.prevent="onFileChange"
    >
      <svg
        class="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
        />
      </svg>
      <span class="block mt-3 px-6 text-base leading-normal">Choose a file or drag it.</span>
      <input type="file" class="hidden" @change="onFileChange" />
      <img
        v-if="uploadedImage"
        :src="uploadedImage"
        class="absolute w-full h-full object-cover inset-0"
      />
    </label>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      uploadedImage: '',
      blur: false
    }
  },
  methods: {
    onFileChange(e: any) {
      this.blur = false
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    // アップロードした画像を表示
    createImage(file: any) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.uploadedImage = e?.target?.result as string
        this.$emit('parseImage', this.uploadedImage)
      }
      reader.readAsDataURL(file)
    },
    blurInput() {
      this.blur = true
    }
  }
})
</script>

<style scoped>
.blur {
  filter: blur(2px);
}
</style>
