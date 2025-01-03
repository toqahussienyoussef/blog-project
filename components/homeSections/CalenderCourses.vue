<!-- Calendar Courses Component Template -->
<template>
  <!-- Main container with background styling -->
  <div id="calendarCourses" class="second-bg">
    <!-- Header section with title and description -->
    <div class="calender-courses-section">
      <div class="title-section">
        <div class="row-title">
          <img src="/assets/images/gray-icon.svg" alt="Why Us" />
          Calendar Courses
        </div>
        <h1>Stay Updated on Upcoming Courses and Events</h1>
        <p>
          Advance your career with leading finance and accounting certifications
          available online and offline. Flexible Learning Options for Every
          Career Stage.
        </p>
      </div>
    </div>

    <!-- Courses slider section -->
    <div class="slider-parent">
      <div class="slider-section">
        <!-- Vuetify sheet wrapper -->
        <v-sheet class="my-8">
          <!-- Horizontal slide group for course cards -->
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-success"
            :show-arrows="false"
          >
            <!-- Individual course card items -->
            <v-slide-group-item
              v-for="(card, index) in sliderCards"
              :key="index"
              v-slot="{ toggle }"
            >
              <!-- Course card -->
              <v-card
                class="ma-4 position-relative course-card"
                @click="toggle"
              >
                <!-- Card background image layer -->
                <div
                  class="card-background"
                  :style="{
                    backgroundImage: `url('/_nuxt/assets/images/${card.img}')`,
                  }"
                />

                <!-- Gradient overlay for better text visibility -->
                <div class="card-overlay" />

                <!-- Card content container -->
                <div
                  class="fill-height d-flex flex-column justify-end position-relative"
                >
                  <div class="pa-4">
                    <!-- Card header with title and action button -->
                    <div class="d-flex align-center mb-4">
                      <h3 class="text-h5 text-white me-auto">
                        {{ card.title }}
                      </h3>
                      <!-- Dynamic action button -->
                      <v-btn
                        icon
                        :color="index % 2 === 0 ? 'black' : 'white'"
                        class="rounded-circle"
                        size="small"
                        :class="index % 2 === 0 ? 'bg-white' : 'bg-primary'"
                      >
                        <!-- Share icon SVG -->
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.253 3.00049L6.747 3.00249C5.78698 3.0029 4.86364 3.37129 4.167 4.03184C3.47037 4.69239 3.05343 5.59485 3.002 6.55349L2.997 6.75349V11.2455C2.99706 11.4355 3.06924 11.6184 3.19897 11.7573C3.3287 11.8961 3.5063 11.9806 3.69588 11.9935C3.88546 12.0065 4.07289 11.947 4.2203 11.8271C4.3677 11.7071 4.4641 11.5357 4.49 11.3475L4.497 11.2455V6.75249C4.497 5.56249 5.422 4.58749 6.593 4.50749L6.747 4.50249L17.253 4.50049C17.8164 4.50019 18.3595 4.71139 18.7747 5.0923C19.1898 5.47322 19.4469 5.9961 19.495 6.55749L19.503 6.71649L19.501 17.2525C19.5003 17.8226 19.2836 18.3712 18.8945 18.7878C18.5053 19.2044 17.9727 19.458 17.404 19.4975L17.25 19.5025H12.754C12.564 19.5025 12.3811 19.5747 12.2422 19.7045C12.1034 19.8342 12.0189 20.0118 12.006 20.2014C11.993 20.3909 12.0525 20.5784 12.1724 20.7258C12.2923 20.8732 12.4637 20.9696 12.652 20.9955L12.754 21.0025H17.25C18.2099 21.0021 19.1331 20.6338 19.8297 19.9735C20.5263 19.3132 20.9433 18.4109 20.995 17.4525L21.001 17.2525L21.002 6.75249L20.998 6.54949C20.9487 5.62523 20.5592 4.75188 19.9045 4.09758C19.2499 3.44328 18.3763 3.05429 17.452 3.00549L17.253 3.00049ZM14.059 9.00249H8.004C7.75048 9.00475 7.50729 9.10322 7.32362 9.27798C7.13995 9.45273 7.02951 9.69073 7.01464 9.94381C6.99978 10.1969 7.0816 10.4462 7.24355 10.6412C7.4055 10.8363 7.63549 10.9626 7.887 10.9945L8.004 11.0015H11.584L5.04 17.5435C4.86768 17.7156 4.76406 17.9446 4.74859 18.1876C4.73313 18.4306 4.80688 18.671 4.956 18.8635L5.039 18.9575C5.21119 19.1297 5.44029 19.2331 5.68332 19.2484C5.92634 19.2637 6.16659 19.1897 6.359 19.0405L6.453 18.9575L13.001 12.4125V16.0025C13.0008 16.2477 13.0908 16.4845 13.2538 16.6678C13.4167 16.8511 13.6414 16.968 13.885 16.9965L14.001 17.0025C14.2459 17.0025 14.4823 16.9125 14.6654 16.7498C14.8484 16.587 14.9653 16.3627 14.994 16.1195L15.001 16.0025V10.0025L14.998 9.91749L14.982 9.81249L14.973 9.76649L14.954 9.70049L14.918 9.60149L14.854 9.47949C14.8126 9.41186 14.7632 9.34942 14.707 9.29349L14.598 9.19849L14.476 9.12049L14.374 9.07349L14.286 9.04249L14.175 9.01549L14.059 9.00249Z"
                            :fill="index % 2 === 0 ? 'black' : 'white'"
                          />
                        </svg>
                      </v-btn>
                    </div>

                    <!-- Course description -->
                    <p class="text-white mb-4">{{ card.description }}</p>

                    <!-- Countdown timer section -->
                    <div
                      class="counter-section"
                      :class="{ 'red-bg': index % 2 !== 0 }"
                    >
                      <!-- Timer header with icon -->
                      <div class="title-with-date">
                        <p class="course-title">
                          <img
                            :src="
                              index % 2 === 0
                                ? '/_nuxt/assets/images/clock.svg'
                                : '/_nuxt/assets/images/clock-white.svg'
                            "
                            alt="Clock icon"
                          />
                          <span :class="{ 'text-white': index % 2 !== 0 }">
                            Course starts after:
                          </span>
                        </p>

                        <!-- Countdown units display -->
                        <div class="count-down-section">
                          <div
                            v-for="(time, unit) in getCountdown(
                              card.countdownDate
                            )"
                            :key="unit"
                            class="unit-and-time-section"
                          >
                            <div
                              class="time-text"
                              :class="{ 'text-white': index % 2 !== 0 }"
                            >
                              {{ time }}
                            </div>
                            <div
                              class="unit-text"
                              :class="{ 'text-white': index % 2 !== 0 }"
                            >
                              {{ unit }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Progress indicator -->
                      <v-progress-linear
                        :model-value="getProgressValue(card.countdownDate)"
                        :color="index % 2 === 0 ? '#282828' : 'white'"
                        height="8"
                        rounded
                        class="mt-4"
                      />
                    </div>
                  </div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>

        <!-- Navigation dots -->
        <div class="carousel-controls">
          <div class="dots">
            <span
              v-for="(card, index) in sliderCards"
              :key="index"
              class="dot"
              :class="{ active: model === index }"
              @click="model = index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

/**
 * Current active slide index
 * Initialized with 0 to make the first slide active
 */
const model = ref(0);

/**
 * Array of course cards containing course information and countdown dates
 * Each course has an image, title, description, and target start date
 */
const sliderCards = ref([
  {
    img: "Accounting.jpeg",
    title: "Accounting",
    description: "This course will start on the 2nd month of 2025",
    countdownDate: new Date("2025-02-10T00:00:00"),
  },
  {
    img: "Finance.jpeg",
    title: "Finance",
    description: "This course will start on the 9nd month of 2025",
    countdownDate: new Date("2025-09-15T12:00:00"),
  },
  {
    img: "FinTech.jpeg",
    title: "FinTech",
    description: "This course will start on the 5nd month of 2025",
    countdownDate: new Date("2025-05-20T18:30:00"),
  },
  // Duplicate entries for carousel effect
  {
    img: "Accounting.jpeg",
    title: "Accounting",
    description: "This course will start on the 2nd month of 2025",
    countdownDate: new Date("2025-02-10T00:00:00"),
  },
  {
    img: "Finance.jpeg",
    title: "Finance",
    description: "This course will start on the 9nd month of 2025",
    countdownDate: new Date("2025-09-15T12:00:00"),
  },
  {
    img: "FinTech.jpeg",
    title: "FinTech",
    description: "This course will start on the 5nd month of 2025",
    countdownDate: new Date("2025-05-20T18:30:00"),
  },
]);

/**
 * Reference to the interval timer for updating countdown
 */
const intervalId = ref(null);

/**
 * Calculates the remaining time until the target date
 * @param {Date} targetDate - The future date to countdown to
 * @returns {Object} Object containing days, hours, minutes, and seconds
 */
const getCountdown = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    D: days,
    H: hours,
    M: minutes,
    S: seconds,
  };
};

/**
 * Calculates the progress percentage towards the course start date
 * @param {Date} targetDate - The course start date
 * @returns {number} Percentage of time elapsed (0-100)
 */
const getProgressValue = (targetDate) => {
  const now = new Date().getTime();
  const total = targetDate.getTime() - now;
  const oneYear = 365 * 24 * 60 * 60 * 1000; // One year in milliseconds
  return Math.min(Math.max(((oneYear - total) / oneYear) * 100, 0), 100); // Ensure value is between 0-100
};

// Lifecycle hooks
onMounted(() => {
  // Start the countdown timer
  intervalId.value = setInterval(() => {
    // Force reactivity update by creating a new array reference
    sliderCards.value = [...sliderCards.value];
  }, 1000);
});

onUnmounted(() => {
  // Clean up the interval when component is destroyed
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>

<style lang="scss" scoped>
/**
 * Main container background
 */
.second-bg {
  background-color: $background-color;

  // Ensure v-sheet maintains same background
  .v-sheet {
    background-color: $background-color;
  }
}

/**
 * Main section container
 * Extends global width and padding mixins
 */
.calender-courses-section {
  @extend %sideWidth;
  @extend %globalPadding;
}

/**
 * Slider container with relative positioning
 * Controls the overall slider layout
 */
.slider-parent {
  position: relative;
  width: 100%;
  padding-bottom: 3rem;

  .slider-section {
    .v-sheet {
      overflow: visible;

      // Vuetify slide group customization
      .v-slide-group {
        &__content {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }
}

/**
 * Individual course card styling
 * Responsive dimensions for different screen sizes
 */
.course-card {
  position: relative;
  overflow: hidden;
  border-radius: $radius-20;
  height: 603px;
  width: 461px;

  // Responsive adjustments for medium screens
  @include respond-to($breakpoint-md) {
    height: 503px;
    width: 300px;
  }
}

/**
 * Card background and overlay styling
 * Creates depth effect with gradient overlay
 */
.card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // Gradient overlay for better text visibility
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

/**
 * Counter section styling
 * Displays countdown timer with conditional background
 */
.counter-section {
  padding: 1rem;
  background-color: white;
  color: $second-color;
  border-radius: 12px;
  position: relative;
  z-index: 1;

  // Variant with red background
  &.red-bg {
    background-color: $main-color;
    color: white;
  }
}

/**
 * Title and countdown display layout
 */
.title-with-date {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // Course title container
  .course-title {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  // Countdown timer layout
  .count-down-section {
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    // Time number display
    .time-text {
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
    }

    // Time unit label
    .unit-text {
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      text-align: center;
    }
  }
}

/**
 * Carousel navigation controls
 * Includes dots for slide indication
 */
.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  left: 100px;

  // Reset position on medium screens
  @include respond-to($breakpoint-md) {
    left: 0px;
  }

  // Navigation dots container
  .dots {
    display: flex;
    gap: 0.5rem;

    // Individual dot styling
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $dot-inactive;
      cursor: pointer;
      transition: all 0.3s ease;

      // Active dot state
      &.active {
        background-color: $main-color;
        width: 24px;
        border-radius: 12px;
      }
    }
  }
}

/**
 * Primary background utility class
 */
.bg-primary {
  background-color: $main-color !important;
}
</style>
