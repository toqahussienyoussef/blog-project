<template>
  <div>
    <div id="howDoesWeWork" class="how-does-we-work-section">
      <div class="title-section">
        <div class="row-title">
          <img src="/assets/images/gray-icon.svg" alt="Why Us" />
          How dose we work?
        </div>
        <h1>How dose we work?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <v-row>
        <v-col cols="3">
          <div class="quarter-box">
            <img src="/assets/images/1-red.svg" alt="" />
            <h3>dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="quarter-box">
            <img src="/assets/images/2-blue.svg" alt="" />
            <h3>dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="quarter-box">
            <img src="/assets/images/3-red.svg" alt="" />
            <h3>dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="quarter-box">
            <img src="/assets/images/4-blue.svg" alt="" />
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

<style scope lang="scss">
%arrowPostion {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  right: 25%;
  transform: translateY(-50%);
  top: 50%;
}

.how-does-we-work-section {
  @extend %sideWidth;
  @extend %globalPadding;
  .quarter-box {
    position: relative;
    text-align: center;
    img {
      margin-bottom: 2rem;
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
      margin-top: 1rem;
    }
  }
  .quarter-box::after {
    @extend %arrowPostion;
  }
  .v-col:nth-child(2) .quarter-box::after {
    background-image: url("/assets/images/red-arrow.svg");
  }

  /* Blue arrow for second item */
  .v-col:nth-child(3) .quarter-box::before {
    background-image: url("/assets/images/blue-arrow.svg");
    @extend %arrowPostion;
  }

  /* Red arrow for third item */
  .v-col:nth-child(4) .quarter-box::after {
    background-image: url("/assets/images/red-arrow.svg");
  }
}
</style>
