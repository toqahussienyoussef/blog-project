<template>
  <div class="single-post px-3 pa-3 ma-3">
    <h2 class="text-xl font-bold">{{ postData.title }}</h2>
    <p class="mt-2">{{ postData.description }}</p>
    <time class="date-section">
      {{ formatDate(postData.created_at) }}
    </time>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  postData: { type: Object, required: true, default: {} },
});

const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped lang="scss">
// Post container styles
.single-post {
  border: 1px solid rgb(234, 234, 234);
  border-radius: $radius-16;

  .date-section {
    color: rgb(172, 172, 172);
    font-size: 12px;
  }
}
</style>
