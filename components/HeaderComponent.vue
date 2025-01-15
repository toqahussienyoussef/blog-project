<!-- Header.vue -->
<template>
  <div class="header-container position-relative pa-0">
    <div class="primary-bg">
      <div class="secondary-bg">
        <div
          class="menu-section d-flex align-center justify-space-between py-4"
        >
          <img src="/_nuxt/assets/images/logo.png" max-width="150" alt="Logo" />

          <!-- Desktop Navigation -->
          <v-tabs
            v-model="activeTab"
            color="#D93749"
            class="main-menu hidden-sm-and-down"
          >
            <v-tab
              v-for="item in navigationItems"
              :key="item.title"
              :value="item.value"
              :to="item.path"
              class="menu-item"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>

          <div class="right-section-menu d-flex align-center">
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
          <!-- Mobile menu trigger -->
          <span class="hidden-md-and-up ml-4" @click="drawer = !drawer">
            <v-icon color="white">mdi-menu</v-icon>
          </span>
        </div>

        <!-- Mobile Navigation -->
        <v-navigation-drawer
          v-model="drawer"
          location="right"
          temporary
          class="hidden-md-and-up dark-bg"
        >
          <v-list>
            <v-list-item
              v-for="item in navigationItems"
              :key="item.title"
              :to="item.path"
              @click="handleNavigation(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <div
            class="mob-bottom-menu d-flex flex-column justify-center align-center position-absolute bottom-0 left-0 w-100"
          >
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
            <LoginForm />
          </div>
        </v-navigation-drawer>

        <!-- Hero Section -->
        <v-carousel
          v-model="currentSlide"
          :show-arrows="false"
          :continuous="true"
          height="700"
          hide-delimiters
        >
          <v-carousel-item v-for="slide in slides" :key="slide.id">
            <v-container class="fill-height">
              <v-row class="main-row position-relative">
                <v-col cols="12" md="6" class="content-section">
                  <span class="red-shadow-span">
                    Enhance your financial career
                  </span>
                  <h1 class="heading-text mt-4">
                    Advance Your Career with Expert Finance Courses
                  </h1>
                  <p class="subheading-text mt-6">
                    Unlock Your Future with Comprehensive Accounting & Finance
                    Courses: Flexible Online and Offline Learning with Business
                    360
                  </p>
                  <button class="btn solid-main mt-6">Get Started Today</button>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                  class="right-section position-absolute h-100"
                >
                  <div class="student-learn-box position-absolute">
                    <img
                      class="student-icon"
                      src="/_nuxt/assets/images/student.svg"
                      alt="Student"
                    />
                    <p>
                      <span>100k+</span> Students <br />
                      Learn Daily
                    </p>
                  </div>
                  <img
                    class="flight-book-icon position-absolute"
                    src="/_nuxt/assets/images/Icon.svg"
                    alt="Flight book"
                  />
                  <div class="our-happy-students-box position-absolute">
                    <p>Our Happy Students</p>
                    <span class="d-block">20k+ User</span>
                    <div class="imgs-section mb-2">
                      <img
                        v-for="i in 4"
                        :key="i"
                        :src="`/_nuxt/assets/images/${i}.png`"
                        :alt="`Student ${i}`"
                      />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>

        <!-- Carousel Controls -->
        <div class="carousel-controls position-absolute d-flex ga-2">
          <div
            v-for="(slide, i) in slides"
            :key="i"
            class="control-dot rounded-circle cursor-pointer"
            :class="{ active: currentSlide === i }"
            @click="currentSlide = i"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const drawer = ref(false);
const activeTab = ref(null);
const selectedLang = ref("EN");
const currentSlide = ref(0);

const languages = ["EN", "FR", "AR"];
const slides = [
  { id: 1, title: "Slide 1" },
  { id: 2, title: "Slide 2" },
  { id: 3, title: "Slide 3" },
];

const navigationItems = [
  { title: "Home", value: "home", path: "/" },
  { title: "Courses", value: "courses", path: "/courses" },
  { title: "Become partner", value: "partner", path: "/become-partner" },
  { title: "About us", value: "about", path: "/about" },
  { title: "Teams", value: "teams", path: "/teams" },
  { title: "Blog", value: "blog", path: "/blog" },
];

const handleNavigation = (item) => {
  activeTab.value = item.value;
  drawer.value = false;
};

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
</script>
<style lang="scss" scoped>
// -----------------------------
// Header Layout
// -----------------------------
.header-container {
  .subheading-text {
    color: $white-text-color;

    @include respond-to($breakpoint-md) {
      font-size: 14px;
    }
  }
}

// -----------------------------
// Navigation Menu
// -----------------------------
.menu-section {
  @extend %sideWidth;

  .menu-item {
    color: $menu-color-white;
  }

  .right-section-menu {
    @include respond-to($breakpoint-md) {
      display: none !important;
    }
  }
}

// -----------------------------
// Main Content Layout
// -----------------------------
.main-row {
  @include respond-to($breakpoint-md) {
    flex-direction: column;

    .content-section {
      padding: 2rem;
    }
  }
}

// -----------------------------
// Right Section Styling
// -----------------------------
.right-section {
  right: -15%;
  bottom: -34%;

  // Background image of the person
  &::after {
    content: "";
    background-image: url("/_nuxt/assets/images/header-man.png");
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 130%;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }

  // Student Learn Box
  .student-learn-box {
    @extend %headerBoxes;
    width: fit-content;
    left: -11%;
    top: -5%;

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;

      span {
        color: $main-color;
        font-weight: 500;
      }
    }
  }

  // Flight Book Icon
  .flight-book-icon {
    right: 25%;
    top: 15%;
  }

  // Happy Students Box
  .our-happy-students-box {
    @extend %headerBoxes;
    width: fit-content;
    bottom: 10%;
    left: -15%;

    p {
      font-weight: 500;
    }

    span {
      font-size: 11px;
      font-weight: 300;
      line-height: 12px;
    }
  }
}

// -----------------------------
// Responsive Right Section
// -----------------------------
@include respond-to($breakpoint-md) {
  .right-section {
    position: relative !important;
    right: 0 !important;
    bottom: 10% !important;
    height: auto !important;
    margin-top: 0rem;

    &::after {
      height: 400px !important;
      width: 260px;
      left: 20%;
      bottom: -15%;
    }

    // Responsive boxes
    .student-learn-box,
    .our-happy-students-box {
      position: relative !important;
      width: fit-content !important;
      margin: 1rem auto !important;
      left: -30% !important;

      p {
        font-size: 10px;
      }
    }

    .our-happy-students-box {
      margin-top: 4rem !important;
    }

    .flight-book-icon {
      right: 10%;
    }

    .imgs-section {
      img {
        width: 19.27px;
      }
    }
  }
}

// -----------------------------
// Background Styles
// -----------------------------
.primary-bg {
  background-image: url("@/assets/images/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.secondary-bg {
  background-image: url("@/assets/images/header-random-shap.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: bottom left;

  @include respond-to($breakpoint-md) {
    background-image: url("/assets/images/mobiel-header-bg.svg");
  }
}

// -----------------------------
// Typography
// -----------------------------
.heading-text {
  font-size: 62px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: -0.04em;
  color: $white-text-color;

  @include respond-to($breakpoint-md) {
    font-size: 30px;
    line-height: 30px;
  }
}

// -----------------------------
// Carousel Controls
// -----------------------------
.carousel-controls {
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
  gap: 10px;

  @include respond-to($breakpoint-sm) {
    top: unset;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    flex-direction: row;
  }
}

.control-dot {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);

  &.active {
    height: 28px;
    background: $white-text-color;
    border-radius: 10px;

    @include respond-to($breakpoint-sm) {
      height: 8px;
      width: 28px;
    }
  }
}

// -----------------------------
// Utility Classes
// -----------------------------
.lang-select {
  max-width: 100px;
}

.dark-bg {
  background: black !important;
  color: $white-text-color;
}

// -----------------------------
// Mobile Menu
// -----------------------------
.mob-bottom-menu {
  background: black;
}
</style>
