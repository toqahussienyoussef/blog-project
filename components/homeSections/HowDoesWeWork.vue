<template>
  <div>
    <div id="howDoesWeWork" class="how-does-we-work-section">
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
          <div class="quarter-box position-relative text-center">
            <img class="mb-4" :src="item.image" :alt="item.alt" />
            <h3>dummy text</h3>
            <p class="mt-2">
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
const display = useDisplay();

/**
 * Desktop version of process steps
 */
const desktopItems = [
  { image: "/_nuxt/assets/images/1-red.svg", alt: "Red icon 1" },
  { image: "/_nuxt/assets/images/2-blue.svg", alt: "Blue icon 1" },
  { image: "/_nuxt/assets/images/3-red.svg", alt: "Red icon 2" },
  { image: "/_nuxt/assets/images/4-blue.svg", alt: "Blue icon 2" },
];

/**
 * Mobile version of process steps
 */
const mobileItems = [
  { image: "/_nuxt/assets/images/1-blue.svg", alt: "Blue icon 1" },
  { image: "/_nuxt/assets/images/2-red.svg", alt: "Red icon 1" },
  { image: "/_nuxt/assets/images/3-blue.svg", alt: "Blue icon 2" },
  { image: "/_nuxt/assets/images/4-red.svg", alt: "Red icon 2" },
];

/**
 * Computed property to determine which set of items to display
 */
const items = computed(() => {
  return display.mdAndUp.value ? desktopItems : mobileItems;
});
</script>

<style scoped lang="scss">
// Variables

$text-color: #666;
$bold-titles: #333;

/**
 * Shared arrow positioning styles
 */
%arrowPostion {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  right: 25%;
  transform: translateY(-50%);
  top: 50%;

  @include respond-to($breakpoint-md) {
    content: unset;
  }
}

.how-does-we-work-section {
  @extend %sideWidth;
  @extend %globalPadding;

  /**
   * Individual process step box
   */
  .quarter-box {
    img {
      max-width: 113.19px;
      height: 101px;
    }

    h3 {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      color: $bold-titles;
    }

    p {
      color: $text-color;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
  }

  // Default arrow for process steps

  .quarter-box::after {
    @extend %arrowPostion;
  }

  .v-col:nth-child(2) .quarter-box::after {
    background-image: url("/assets/images/red-arrow.svg");
  }

  .v-col:nth-child(3) .quarter-box::before {
    background-image: url("/assets/images/blue-arrow.svg");
    @extend %arrowPostion;
  }

  .v-col:nth-child(4) .quarter-box::after {
    background-image: url("/assets/images/red-arrow.svg");
  }
}
</style>
