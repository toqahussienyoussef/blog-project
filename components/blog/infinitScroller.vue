<template>
  <div class="blog-posts-container py-5 px-5">
    <TitleComponent :boxTitle="boxTitle" :title="title" :desc="desc" />

    <p class="posts-counter">
      {{ activeItems }} of {{ totalItems }} posts loaded
    </p>

    <v-infinite-scroll
      :items="items"
      :loading="isLoading"
      :onLoad="fetchData"
      class="posts-scroll-container"
    >
      <template v-for="post in items" :key="post.id">
        <v-lazy
          v-model="post.isActive"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <BlogSinglePost :post-data="post" />
        </v-lazy>
      </template>

      <template #loading>
        <div class="text-center pa-3">
          <v-progress-circular indeterminate color="primary" />
        </div>
      </template>

      <template #error>
        <v-alert type="error" class="m-3">{{ fetchError }}</v-alert>
      </template>

      <template #empty>
        <v-alert type="info" class="m-3">No more posts to load.</v-alert>
      </template>
    </v-infinite-scroll>
  </div>
</template>

<script setup>
import { ref } from "vue";

const boxTitle = ref("Our Blog");
const title = ref("What You Need To Know");
const desc = ref(
  "lorem your career with leading finance and accounting certifications..."
);

const { items, isLoading, fetchError, totalItems, activeItems, fetchData } =
  useInfiniteFetch("posts", {
    transform: (post) => ({
      ...post,
      isActive: false,
    }),
  });
</script>

<style scoped lang="scss">
.fade-transition {
  transition: opacity 0.3s ease;

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>
