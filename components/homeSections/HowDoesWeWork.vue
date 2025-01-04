<template>
  <div>
    <!-- How We Work Section -->
    <div id="howDoesWeWork" class="how-does-we-work-section">
      <!-- Section Header -->
      <TitleComponent :boxTitle="boxTitle" :title="title" />

      <!-- Process Steps Grid -->
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="12"
          md="3"
        >
          <div class="quarter-box">
            <img :src="item.image" :alt="item.alt" />
            <h3>dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/composables/display";
import { computed, onMounted, ref } from "vue";

/**
 * Title Dada
 */

const boxTitle = ref("How does we work?");
const title = ref("How does we work?");

// Initialize Vuetify display composable for responsive design
const display = useDisplay();

/**
 * Desktop version of process steps
 * Alternating red and blue icons
 */
const desktopItems = [
  { image: "/_nuxt/assets/images/1-red.svg", alt: "Red icon 1" },
  { image: "/_nuxt/assets/images/2-blue.svg", alt: "Blue icon 1" },
  { image: "/_nuxt/assets/images/3-red.svg", alt: "Red icon 2" },
  { image: "/_nuxt/assets/images/4-blue.svg", alt: "Blue icon 2" },
];

/**
 * Mobile version of process steps
 * Different color scheme for mobile view
 */
const mobileItems = [
  { image: "/_nuxt/assets/images/1-blue.svg", alt: "Blue icon 1" },
  { image: "/_nuxt/assets/images/2-red.svg", alt: "Red icon 1" },
  { image: "/_nuxt/assets/images/3-blue.svg", alt: "Blue icon 2" },
  { image: "/_nuxt/assets/images/4-red.svg", alt: "Red icon 2" },
];

/**
 * Computed property to determine which set of items to display
 * Uses Vuetify's responsive breakpoints
 */
const items = computed(() => {
  return display.mdAndUp.value ? desktopItems : mobileItems;
});
</script>

<style scoped lang="scss">
// Variables
$text-color: #666; // Add your color value
$bold-titles: #333; // Add your color value

/**
 * Shared arrow positioning styles
 * Used for connecting arrows between process steps
 */
%arrowPostion {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  right: 25%;
  transform: translateY(-50%);
  top: 50%;

  // Remove arrows on mobile
  @include respond-to($breakpoint-md) {
    content: unset;
  }
}

/**
 * Main section container
 * Extends global width and padding
 */
.how-does-we-work-section {
  @extend %sideWidth;
  @extend %globalPadding;

  /**
   * Individual process step box
   * Contains icon, title, and description
   */
  .quarter-box {
    position: relative;
    text-align: center;

    // Process step icon
    img {
      margin-bottom: 2rem;
      max-width: 113.19px;
      height: 101px;
    }

    // Step title
    h3 {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      color: $bold-titles;
    }

    // Step description
    p {
      color: $text-color;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      margin-top: 1rem;
    }
  }

  // Default arrow for process steps
  .quarter-box::after {
    @extend %arrowPostion;
  }

  // Red arrow after second step
  .v-col:nth-child(2) .quarter-box::after {
    background-image: url("/assets/images/red-arrow.svg");
  }

  // Blue arrow before third step
  .v-col:nth-child(3) .quarter-box::before {
    background-image: url("/assets/images/blue-arrow.svg");
    @extend %arrowPostion;
  }

  // Red arrow after fourth step
  .v-col:nth-child(4) .quarter-box::after {
    background-image: url("/assets/images/red-arrow.svg");
  }
}
</style>
