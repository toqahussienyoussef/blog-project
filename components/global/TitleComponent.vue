<!--
  TitleSection.vue
  A reusable component for displaying a section header with icon, title, and description.
  Used across the application for consistent section heading styling.
-->
<template>
  <div class="title-section">
    <!-- Header row with icon and box title -->
    <div class="row-title">
      <img src="/assets/images/gray-icon.svg" :alt="boxTitle" loading="lazy" />
      {{ boxTitle }}
    </div>

    <!-- Main title -->
    <h1>{{ title }}</h1>

    <!-- Description text -->
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
/**
 * Props definition for the TitleSection component
 * @prop {string} boxTitle - The title displayed next to the icon
 * @prop {string} title - The main heading text
 * @prop {string} desc - The description text below the heading
 */
const props = defineProps({
  boxTitle: {
    type: String,
    required: true,
    default: "",
    validator: (value) => value.length <= 20, // Ensure reasonable length
  },
  title: {
    type: String,
    required: true,
    default: "",
    validator: (value) => value.length <= 100, // Ensure reasonable length
  },
  desc: {
    type: String,
    required: true,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    validator: (value) => value.length <= 400, // Ensure reasonable length
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
    border: 1px solid #dfe1e7;
    width: fit-content;
    padding: 8px 10px;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px #0d0d120f;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: $text-color;
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    margin: 1rem 0;
    color: $bold-titles;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: $text-color;
    max-width: 60%;
    margin-bottom: 2rem;

    @include respond-to($breakpoint-md) {
      max-width: 90%;
    }
  }
}
</style>
