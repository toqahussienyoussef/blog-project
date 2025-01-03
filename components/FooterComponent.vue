<!-- components/AppFooter.vue -->
<template>
  <footer class="footer-container">
    <div class="footer-background">
      <!-- First background layer - passed via props or background-image -->
      <!-- Second background layer -->
      <img
        class="mobile-footer-svg"
        src="/assets/images/mobile-footer-bg.svg"
        alt=""
      />
      <img class="footer-svg" src="/assets/images/footer-bg.svg" alt="" />
    </div>

    <v-container class="footer-content">
      <v-row>
        <!-- Logo Column -->
        <v-col cols="12" md="6">
          <div class="logo-section">
            <img src="/assets/images/logo.png" alt="Logo" class="footer-logo" />
            <p class="tagline">Opening the Door to Financial Knowledge</p>
          </div>
        </v-col>

        <!-- Quick Links Column -->
        <v-col cols="12" md="2">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="#whyUs">Why us</nuxt-link></li>
            <li>
              <nuxt-link to="#howDoesWeWork">How does we work?</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#calendarCourses">Calendar Courses</nuxt-link>
            </li>
          </ul>
        </v-col>

        <!-- Legal Information Column -->
        <v-col cols="12" md="2">
          <h3 class="footer-title">Legal Information</h3>
          <ul class="footer-links">
            <li><nuxt-link to="/">Terms of Services</nuxt-link></li>
            <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
          </ul>
        </v-col>

        <!-- Contact Info Column -->
        <v-col cols="12" md="2">
          <h3 class="footer-title">Contact Info</h3>
          <ul class="footer-links">
            <li>
              <a href="mailto:support@360.com">support@360.com</a>
            </li>
            <li>
              <a href="tel:+201245678890">+20 (12) 456-7890</a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.footer-container {
  position: relative;
  padding: 64px 0;
  color: white;
  overflow: hidden;
  min-height: 434px;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/images/dark-footer-bg.jpg"); // First layer
  background-size: cover;
  background-position: center;
  z-index: -2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: -1;
  }
}

.footer-svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  opacity: 0.8;
  @include respond-to($breakpoint-md) {
    display: none;
  }
}
.mobile-footer-svg {
  display: none;
}
@include respond-to($breakpoint-md) {
  .mobile-footer-svg {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
    opacity: 0.8;
  }
}
.footer-content {
  position: relative;
  z-index: 1;
}

.logo-section {
  .footer-logo {
    max-width: 200px;
    height: auto;
    margin-bottom: 16px;
  }

  .tagline {
    font-size: 1.2rem;
    margin-top: 16px;
    opacity: 0.9;
  }
}

.footer-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 24px;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 12px;

    a {
      color: white;
      text-decoration: none;
      opacity: 0.9;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
}

// Responsive adjustments
@include respond-to($breakpoint-md) {
  .footer-container {
    padding: 48px 0;
  }

  .logo-section {
    text-align: center;
    margin-bottom: 32px;
  }

  .footer-title {
    margin-top: 24px;
  }
}
</style>
