<template>
  <div>
    <div id="whyUs" class="why-us-section">
      <v-row>
        <v-col cols="6">
          <div class="title-section">
            <div class="row-title">
              <img src="/assets/images/gray-icon.svg" alt="Why Us" />
              Why us
            </div>
            <h1>Why Business 360?</h1>
            <p>
              Join Thousands of Professionals Who Have Advanced Their Careers
              with Our Accredited Finance Courses, We offer more than just
              courses; we provide pathways to a successful career in finance.
            </p>
          </div>
          <span class="imgs-section">
            <button class="solid-main">Join us +</button>
            <div class="d-flex">
              <img src="/assets/images/7.png" alt="" />
              <img src="/assets/images/8.png" alt="" />
              <img src="/assets/images/9.png" alt="" />
              <div class="circle-div">2k+</div>
            </div>
          </span>
        </v-col>
        <v-col cols="6">
          <div class="video-section">
            <img src="/assets/images/video-img.png" alt="" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.why-us-section {
  @extend %sideWidth;
  @extend %globalPadding;
}

.imgs-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-right: -3%;
  }
  .circle-div {
    width: 48px;
    height: 48px;
    background-color: #dcdcdc;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
}
.video-section {
  text-align: center;
  img {
    border-radius: $radius-16;
  }
}
</style>
