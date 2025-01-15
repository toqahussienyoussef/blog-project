<template>
  <div class="blog-posts-container py-5 px-5">
    <!-- Header Section -->

    <TitleComponent :boxTitle="boxTitle" :title="title" :desc="desc" />

    <p class="posts-counter">{{ visiblePosts }} of {{ total }} posts loaded</p>

    <!-- Infinite Scroll Container -->
    <v-infinite-scroll
      :items="posts"
      :loading="loading"
      :onLoad="fetchPosts"
      class="posts-scroll-container"
    >
      <!-- Post Items -->
      <template v-for="post in posts" :key="post.id">
        <v-lazy
          v-model="post.isActive"
          :options="lazyLoadOptions"
          transition="fade-transition"
        >
          <BlogSinglePost :post-data="post" />
        </v-lazy>
      </template>

      <!-- Loading State -->
      <template #loading>
        <div class="text-center pa-3">
          <v-progress-circular indeterminate color="primary" />
        </div>
      </template>

      <!-- Error State -->
      <template #error>
        <v-alert type="error" class="m-3"> Failed to load posts. </v-alert>
      </template>

      <!-- Empty State -->
      <template #empty>
        <v-alert type="info" class="m-3"> No more posts to load. </v-alert>
      </template>
    </v-infinite-scroll>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
/**
 * Title Dada
 */

const boxTitle = ref("Our Blog");
const title = ref("What You Need To Know");
const desc = ref(
  "lorem your career with leading finance and accounting certifications available online and offline. Flexible Learning Options for Every Career Stage."
);

// State management
const posts = ref([]);
const page = ref(1);
const hasMore = ref(true);
const total = ref(0);
const loading = ref(false);

// Computed properties
const visiblePosts = computed(
  () => posts.value.filter((p) => p.isActive).length
);

// Lazy loading configuration
const lazyLoadOptions = {
  threshold: 0.5,
};

// Function to fetch posts
const fetchPosts = async ({ done }) => {
  if (!hasMore.value) {
    done("empty");
    return;
  }

  loading.value = true;

  try {
    const response = await $fetch(`${baseURL()}/posts`, {
      params: { page: page.value },
    });

    const transformedData = {
      items: response.data?.map((post) => ({ ...post, isActive: false })),
      hasMore: !!response.next_page_url,
      total: response.total,
    };

    if (transformedData.items?.length) {
      posts.value.push(...transformedData.items);
      hasMore.value = transformedData.hasMore;
      total.value = transformedData.total;
      page.value++;
      done(hasMore.value ? "ok" : "empty");
    } else {
      hasMore.value = false;
      done("empty");
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    done("error");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
// Transition for lazy-loaded items
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
