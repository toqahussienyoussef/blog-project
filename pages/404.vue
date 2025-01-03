<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <h1 class="text-h2 mb-6">404 - Page Not Found</h1>
        <v-btn class="solid-main" @click="goHome">return Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "404",
});
function goHome() {
  window.location.href = "/";
}
</script>
