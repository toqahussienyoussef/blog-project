<!--
  BlogPostsContainer.vue
  A container component that displays blog posts with infinite scrolling functionality.
  Features:
  - Infinite scroll with loading states
  - Lazy loading of post components
  - Error and empty state handling
  - Progress tracking of loaded posts
-->
<template>
  <div class="blog-posts-container">
    <!-- Header Section -->
    <header class="title-section">
      <div class="row-title">
        <img
          src="/assets/images/gray-icon.svg"
          alt="Blog Icon"
          class="blog-icon"
        />
        Our Blog
      </div>
      <h1>What You Need To Know</h1>
      <p class="posts-counter">
        {{ visiblePosts }} of {{ total }} posts loaded
      </p>
    </header>

    <!-- Infinite Scroll Container -->
    <v-infinite-scroll
      :height="SCROLL_CONTAINER_HEIGHT"
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
        <div class="loading-container">
          <v-progress-circular indeterminate color="primary" />
        </div>
      </template>

      <!-- Error State -->
      <template #error>
        <v-alert type="error" class="state-alert">
          Failed to load posts.
        </v-alert>
      </template>

      <!-- Empty State -->
      <template #empty>
        <v-alert type="info" class="state-alert">
          No more posts to load.
        </v-alert>
      </template>
    </v-infinite-scroll>
  </div>
</template>

<script setup>
// Imports

// Constants
const SCROLL_CONTAINER_HEIGHT = 600;

// Lazy loading configuration
const lazyLoadOptions = {
  threshold: 0.5,
};

// Fetch and manage posts data using composable
const {
  posts, // Array of post objects
  loading, // Boolean loading state
  total, // Total number of available posts
  fetchPosts, // Function to fetch more posts
  visiblePosts, // Number of currently visible posts
} = usePosts();
</script>

<style scoped lang="scss">
.blog-posts-container {
  padding: 1rem;
}

.blog-header {
  margin: 2rem 0;

  .blog-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .posts-counter {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
}

.posts-scroll-container {
  // Custom scrollbar styling
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) #f1f1f1;

  // Ensure smooth scrolling
  -webkit-overflow-scrolling: touch;
}

.loading-container {
  padding: 1rem;
  text-align: center;
}

.state-alert {
  margin: 1rem;
}

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
