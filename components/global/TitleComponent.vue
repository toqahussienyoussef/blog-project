<template>
  <div class="title-section">
    <div
      class="row-title d-flex align-center ga-1 py-1 px-2 border-sm rounded-lg"
    >
      <img src="/assets/images/gray-icon.svg" :alt="boxTitle" loading="lazy" />
      {{ boxTitle }}
    </div>

    <!-- Main title -->
    <h1 class="my-3">{{ title }}</h1>

    <!-- Description text -->
    <p class="mb-4">{{ desc }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  boxTitle: {
    type: String,
    required: true,
    default: "",
    validator: (value) => value.length <= 20,
  },
  title: {
    type: String,
    required: true,
    default: "",
    validator: (value) => value.length <= 100,
  },
  desc: {
    type: String,
    required: true,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    validator: (value) => value.length <= 400,
  },
  src: {
    type: String,
    default: "/assets/images/gray-icon.svg",
  },
});
</script>

<!--
Usage example:
<TitleSection
  boxTitle="Section Name"
  title="Main Heading"
  desc="This is a description of the section."
/>
-->

<style lang="scss">
.title-section {
  .row-title {
    width: fit-content;
    box-shadow: 0px 1px 2px 0px #0d0d120f;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: $text-color;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: $bold-titles;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: $text-color;
    max-width: 60%;

    @include respond-to($breakpoint-md) {
      max-width: 90%;
    }
  }
}
</style>
