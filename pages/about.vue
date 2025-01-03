<template>
  <div>about us</div>
</template>

<style scoped></style>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const model = ref(0); // Initialize with 0 to make first slide active

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

const intervalId = ref(null);

const getCountdown = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

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

const getProgressValue = (targetDate) => {
  const now = new Date().getTime();
  const total = targetDate.getTime() - now;
  const oneYear = 365 * 24 * 60 * 60 * 1000;
  return ((oneYear - total) / oneYear) * 100;
};

onMounted(() => {
  intervalId.value = setInterval(() => {
    sliderCards.value = [...sliderCards.value];
  }, 1000);
});

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>
