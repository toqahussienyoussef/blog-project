<template>
  <div class="header-container pa-0">
    <!-- Background layers -->
    <div class="primary-bg">
      <div class="secondary-bg">
        <div class="menu-section d-flex align-center">
          <!-- Logo -->
          <img src="../assets/images/logo.png" max-width="150" />

          <!-- Center Navigation -->

          <!-- Desktop Navigation -->

          <!-- components/AppNavbar.vue -->

          <v-tabs v-model="activeTab" color="primary" class="main-menu">
            <v-tab
              v-for="item in navigationItems"
              :key="item.title"
              :value="item.value"
              :to="item.path"
              :href="item.anchor"
              @click="handleNavigation(item)"
              class="menu-item"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>

          <!-- Mobile Navigation Drawer -->
          <v-navigation-drawer v-model="drawer" location="right" temporary>
            <v-list>
              <v-list-item
                v-for="item in navigationItems"
                :key="item.title"
                :value="item.value"
                :to="item.path"
                :href="item.anchor"
                :active="activeTab === item.value"
                @click="handleNavigation(item)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <!-- Right Side Items -->
          <div class="right-section">
            <LoginForm />

            <span class="shadow-border">
              <v-icon>mdi-magnify</v-icon>
            </span>
            <v-select
              v-model="selectedLang"
              :items="languages"
              variant="plain"
              density="compact"
              class="lang-select ml-4 shadow-border"
              hide-details
            />
          </div>
        </div>

        <!-- Navigation bar -->

        <!-- Carousel Content -->
        <v-carousel
          v-model="currentSlide"
          :show-arrows="false"
          :continuous="true"
          height="700"
          hide-delimiters
        >
          <v-carousel-item v-for="slide in slides" :key="slide.id">
            <v-container class="fill-height">
              <v-row class="main-row">
                <!-- Left side content -->
                <v-col cols="6">
                  <span class="red-shadow-span"
                    >Enhance your financial career</span
                  >
                  <h1 class="heading-text">
                    Advance Your Career with Expert Finance Courses
                  </h1>
                  <p class="subheading-text mt-6">
                    Unlock Your Future with Comprehensive Accounting & Finance
                    Courses: Flexible Online and Offline Learning with Business
                    360
                  </p>
                  <button class="btn solid-main mt-6">Get Started Today</button>
                </v-col>
                <v-col cols="6" class="right-section">
                  <div class="student-learn-box">
                    <img
                      class="student-icon"
                      src="/assets/images/student.svg"
                      alt=""
                    />
                    <p><span>100k+</span> Students Learn Daily</p>
                  </div>
                  <img
                    class="flight-book-icon"
                    src="/assets/images/Icon.svg"
                    alt=""
                  />
                  <div class="our-happy-students-box">
                    <p>Our Happy Students</p>
                    <span>20k+ User </span>
                    <div class="imgs-section">
                      <img src="/assets/images/1.png" alt="" />
                      <img src="/assets/images/2.png" alt="" />
                      <img src="/assets/images/3.png" alt="" />
                      <img src="/assets/images/4.png" alt="" />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>

        <!-- Carousel Controls -->
        <div class="carousel-controls">
          <div
            v-for="(slide, i) in slides"
            :key="i"
            class="control-dot"
            :class="{ active: currentSlide === i }"
            @click="currentSlide = i"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const languages = ["EN", "FR", "AR"];
const selectedLang = ref("EN");
const currentSlide = ref(0);
const slides = [
  { id: 1, title: "Slide 1" },
  { id: 2, title: "Slide 2" },
  { id: 3, title: "Slide 3" },
];

const route = useRoute();
const drawer = ref(false);
const activeTab = ref(null);

const navigationItems = [
  {
    title: "Home",
    value: "home",
    path: "/",
    anchor: null,
  },
  {
    title: "Courses",
    value: "courses",
    path: "/courses",
    anchor: null,
  },
  {
    title: "Become partner",
    value: "partner",
    path: "/become-partner",
    anchor: null,
  },
  {
    title: "About us",
    value: "about",
    path: "/about",
    anchor: null,
  },
  {
    title: "Teams",
    value: "teams",
    path: "/teams",
    anchor: null,
  },
  {
    title: "Blog",
    value: "blog",
    path: "/blog",
    anchor: null,
  },
];

// Handle navigation and active states
const handleNavigation = (item) => {
  activeTab.value = item.value;
  if (item.anchor) {
    // Handle anchor navigation
    const element = document.querySelector(item.anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    drawer.value = false;
  }
};

// Watch route changes to update active tab
watch(
  () => route.path,
  (newPath) => {
    const matchedItem = navigationItems.find((item) => item.path === newPath);
    if (matchedItem) {
      activeTab.value = matchedItem.value;
    }
  },
  { immediate: true }
);

// Check for hash in URL on mount for anchor links
onMounted(() => {
  if (route.hash) {
    const matchedItem = navigationItems.find(
      (item) => item.anchor === route.hash
    );
    if (matchedItem) {
      activeTab.value = matchedItem.value;
    }
  }
});
</script>

<style scoped lang="scss">
.menu-section {
  @extend %sideWidth;
}
.header-container {
  position: relative;
}

.heading-text {
  font-family: "Inter", sans-serif;
  font-size: 62px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: -0.04em;
  color: $white-text-color;
  margin-top: 2rem;
}

.subheading-text {
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;

  color: $white-text-color;
}

.carousel-controls {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.control-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.control-dot.active {
  height: 28px;
  width: 8px;
  background: $white-text-color;
  border-radius: 10px;
}

.lang-select {
  max-width: 100px;
}

.primary-bg {
  background-image: url("../assets/images/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.secondary-bg {
  background-image: url("../assets/images/header-random-shap.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: bottom left;
}
</style>
