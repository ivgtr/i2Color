<template>
  <div class="root relative overflow-hidden bg-gray-800">
    <h1 class="text-4xl text-white font-bold text-center mt-4">i2Color</h1>
    <p class="text-white text-sm text-center">画像から特徴色を抽出し表示するサイト</p>
    <main class="main w-full min-h-full flex items-center justify-center">
      <nuxt />
    </main>
  </div>
</template>

<style scoped>
.root {
  justify-items: center;
  width: 100%;
  min-height: 100vh;
  height: 1px;
}
/* stylelint-disable */
_::-webkit-full-page-media,
_:future,
:root .root {
  min-height: -webkit-fill-available;
}
/* stylelint-enable */
</style>
