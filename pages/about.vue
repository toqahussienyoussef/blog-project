<template>
  <v-container class="py-3">
    <div class="text-h3">Endless scrolling with v-lazy</div>
    <h5>{{ visiblePosts }} of {{ posts.length }} posts shown</h5>
    <v-row class="fill-height overflow-y-auto" v-if="posts.length">
      <v-col
        v-for="(post, index) in posts"
        :key="post.id"
        lg="3"
        md="4"
        sm="6"
        cols="12"
      >
        <v-sheet min-height="250" class="fill-height" color="transparent">
          <v-lazy
            v-model="post.isActive"
            :options="{
              threshold: 0.5,
            }"
            class="fill-height"
          >
            <v-card class="fill-height" hover>
              <v-card-text>
                <v-row>
                  <v-col sm="10" cols="12" class="text-sm-left text-center">
                    #{{ index + 1 }}
                    <h2 v-html="post.title"></h2>
                    <div v-html="post.description"></div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-lazy>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const posts = ref([]);

const visiblePosts = computed(() => {
  return posts.value.filter((p) => p.isActive).length;
});

const fetchPosts = async () => {
  try {
    const response = await fetch("http://16.171.22.84/api/posts");
    const data = await response.json();
    posts.value = data.data.map((post) => ({
      ...post,
      isActive: false,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.overflow-y-auto {
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}
</style>
