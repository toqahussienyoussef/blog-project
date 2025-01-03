<template>
  <v-app>
    <v-layout>
      <v-main>
        <HeaderComponent />
        <slot />
        <FooterComponent />
      </v-main>
    </v-layout>
  </v-app>
</template>
