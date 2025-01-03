<template>
  <div class="single-post">
    <h2 class="text-xl font-bold">{{ postData.title }}</h2>
    <p class="mt-2">{{ postData.description }}</p>
    <time class="date-section">
      {{ formatDate(postData.created_at) }}
    </time>
  </div>
</template>

<script setup lang="ts">
// Define props for post data structure
const props = defineProps({
  postData: { type: Object, required: true, default: {} },
});

// Format date helper function
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
  padding: 1rem;
  border: 1px solid rgb(234, 234, 234);
  border-radius: $radius-16;
  margin-bottom: 1rem;

  // Date display styles
  .date-section {
    color: rgb(172, 172, 172);
    font-size: 12px;
  }
}
</style>
