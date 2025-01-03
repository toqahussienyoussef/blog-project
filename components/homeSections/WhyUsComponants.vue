<!-- WhyUsSection.vue -->
<template>
  <div>
    <section class="why-us-section">
      <!-- Grid Layout -->
      <v-row>
        <!-- Left Column: Content -->
        <v-col cols="12" sm="12" md="6">
          <!-- Title and Description -->
          <div class="title-section">
            <div class="row-title">
              <img src="/assets/images/gray-icon.svg" alt="Why Us Icon" />
              Why us
            </div>
            <h1>Why Business 360?</h1>
            <p>
              Join Thousands of Professionals Who Have Advanced Their Careers
              with Our Accredited Finance Courses, We offer more than just
              courses; we provide pathways to a successful career in finance.
            </p>
          </div>

          <!-- User Stats Section -->
          <div class="imgs-section">
            <button class="solid-main">Join us +</button>
            <!-- User Avatars -->
            <div class="d-flex">
              <img
                v-for="id in [7, 8, 9]"
                :key="id"
                :src="`/_nuxt/assets/images/${id}.png`"
                :alt="`User Avatar ${id}`"
              />
              <div class="circle-div">2k+</div>
            </div>
          </div>
        </v-col>

        <!-- Right Column: Video Preview -->
        <v-col cols="12" sm="12" md="6">
          <div class="video-section">
            <img src="/assets/images/video-img.png" alt="Video Preview" />
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped lang="scss">
// Main section styling
.why-us-section {
  @extend %sideWidth;
  @extend %globalPadding;
}

// User avatars and stats section
.imgs-section {
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-right: -3%;
  }

  // Stats circle
  .circle-div {
    width: 48px;
    height: 48px;
    background-color: #dcdcdc;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
}

// Video preview section
.video-section {
  text-align: center;

  img {
    border-radius: $radius-16;
    max-width: 100%;
  }
}
</style>
