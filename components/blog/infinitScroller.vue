<template>
  <div class="p-4">
    <div class="posts-section">
      <div class="title-section my-5">
        <div class="row-title">
          <img src="/assets/images/gray-icon.svg" alt="Why Us" />
          Our Blog
        </div>
        <h1>What You Need To know</h1>
        <p>{{ visiblePosts }} of {{ total }} posts loaded</p>
      </div>

      <v-infinite-scroll
        :height="600"
        :items="posts"
        :loading="loading"
        :onLoad="fetchPosts"
      >
        <template v-for="(post, index) in posts" :key="post.id">
          <v-lazy
            v-model="post.isActive"
            :options="{ threshold: 0.5 }"
            transition="fade-transition"
          >
            <BlogSinglePost :postData="post" />
          </v-lazy>
        </template>

        <template #loading>
          <div class="p-4 text-center">
            <v-progress-circular indeterminate color="primary" />
          </div>
        </template>

        <template #error>
          <v-alert type="error" class="ma-4">Failed to load posts.</v-alert>
        </template>

        <template #empty>
          <v-alert type="info" class="ma-4">No more posts to load.</v-alert>
        </template>
      </v-infinite-scroll>
    </div>
  </div>
</template>

<script setup>
const { posts, loading, total, fetchPosts, visiblePosts } = usePosts();
</script>

<style scoped lang="scss">
.posts-section {
  @extend %sideWidth;
  .v-infinite-scroll {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: $main-color #f1f1f1;
  }
}

.fade-transition {
  transition: opacity 0.3s ease;
}
</style>
