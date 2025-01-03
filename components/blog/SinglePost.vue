<template>
  <div class="single-post">
    <h2 class="text-xl font-bold">{{ postData.title }}</h2>
    <p class="mt-2">{{ postData.description }}</p>
    <time class="date-section">
      {{ new Date(postData.created_at).toLocaleDateString() }}
    </time>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  postData: { type: Object, required: true, default: {} },
});
</script>
<style scoped lang="scss">
.single-post {
  padding: 1rem;
  border: 1px solid rgb(234, 234, 234);
  border-radius: $radius-16;
  margin-bottom: 1rem;
  .date-section {
    color: rgb(172, 172, 172);
    font-size: 12px;
  }
}
</style>
