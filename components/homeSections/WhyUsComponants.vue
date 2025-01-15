<!-- WhyUsSection.vue -->
<template>
  <div>
    <section class="why-us-section">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <TitleComponent :boxTitle="boxTitle" :title="title" :desc="desc" />

          <div class="imgs-section d-flex align-center ga-2">
            <button class="solid-main">Join us +</button>
            <div class="d-flex">
              <img
                v-for="id in [7, 8, 9]"
                :key="id"
                :src="`/_nuxt/assets/images/${id}.png`"
                :alt="`User Avatar ${id}`"
                class="border-md rounded-circle"
              />
              <div
                class="circle-div border-md rounded-circle d-flex align-center justify-center"
              >
                2k+
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="video-section text-center">
            <img
              class="rounded-lg"
              src="/assets/images/video-img.png"
              alt="Video Preview"
            />
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * Title Dada
 */

const boxTitle = ref("Why us");
const title = ref("Why Business 360?");
const desc = ref(
  "Join Thousands of Professionals Who Have Advanced Their Careers with Our Accredited Finance Courses, We offer more than just courses; we provide pathways to a successful career in finance."
);
</script>

<style scoped lang="scss">
.why-us-section {
  @extend %sideWidth;
  @extend %globalPadding;
}

.imgs-section {
  img {
    margin-right: -3%;
  }

  .circle-div {
    width: 48px;
    height: 48px;
    background-color: #dcdcdc;
    border-color: white !important;
    text-transform: uppercase;
  }
}

.video-section {
  img {
    max-width: 100%;
  }
}
</style>
