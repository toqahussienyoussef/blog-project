<!-- JoinUsForm.vue -->
<template>
  <div class="text-center pa-4">
    <span @click="dialog = true" class="clickable shadow-border mr-4">
      Join Us <v-icon icon="mdi-menu-down"></v-icon>
    </span>

    <v-dialog v-model="dialog" width="70%" height="70%">
      <v-card max-width="100%">
        <v-row class="login-card">
          <v-col cols="12" sm="12" md="6" class="p-0">
            <div class="login-img-bg w-100 h-100">
              <h2 class="pt-4 text-center">
                Welcome to <br />
                360 Business Partners
              </h2>
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="6" class="p-0">
            <div class="form-section pa-4">
              <p class="form-title mb-4">Join us now</p>

              <v-form @submit.prevent="handleSubmit" v-model="isValid">
                <v-text-field
                  v-model="form.name"
                  class="input-field mb-3"
                  label="Name"
                  placeholder="Name"
                  variant="outlined"
                  required
                  :rules="nameRules"
                />

                <v-text-field
                  v-model="form.email"
                  class="input-field mb-3"
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  :rules="emailRules"
                />

                <v-text-field
                  v-model="form.phone"
                  class="input-field mb-3"
                  label="Phone"
                  type="tel"
                  variant="outlined"
                  required
                  :rules="phoneRules"
                />

                <v-alert v-if="error" type="error" class="mb-4">
                  {{ error }}
                </v-alert>

                <v-alert v-if="success" type="success" class="mb-4">
                  Successfully submitted!
                </v-alert>

                <v-checkbox
                  v-model="form.terms"
                  label="I agree with terms & conditions"
                />

                <v-btn
                  type="submit"
                  :loading="loading"
                  :disabled="!isValid"
                  class="solid-main w-100 pt-2 pb-2"
                >
                  Join us
                </v-btn>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// Component state
const dialog = ref(false);
const isValid = ref(false);
const loading = ref(false);
const error = ref("");
const success = ref(false);

// Form validation rules
const nameRules = [
  (v: string) => !!v || "Name is required",
  (v: string) => /[a-z]/gi.test(v) || "Use Only English Letters for name",
];

const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const phoneRules = [
  (v: string) => !!v || "Phone is required",
  (v: string) => /^[0-9+\-\s()]*$/.test(v) || "Invalid phone format",
  (v: string) => v.length <= 15 || "Name must be less than 15 characters",
];

// Form state
const form = reactive({
  name: "",
  email: "",
  phone: "",
  terms: false,
});

// Form methods
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.terms = false;
};

const handleSubmit = async () => {
  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    const response = await $fetch(`${baseURL()}/join-us`, {
      method: "POST",
      body: form,
    });

    success.value = true;
    resetForm();
    return response;
  } catch (e) {
    error.value = e.statusMessage || "An error occurred during submission";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
// Styles remain unchanged
.clickable {
  cursor: pointer;
}

.login-img-bg {
  background-image: url("/assets/images/login-img.jpg");
  background-size: cover;
  background-position: center;

  h2 {
    color: $white-text-color;
    font-size: 36px;
    font-weight: 500;
    line-height: 36px;

    @include respond-to($breakpoint-md) {
      padding: 3rem !important;
      font-size: 20px;
    }
  }
}

.form-section {
  .solid-main {
    min-height: 3rem;
    border-radius: 16px;
  }

  .form-title {
    font-size: 21px;
    font-weight: 500;
    line-height: 30px;
  }

  .input-field {
    .v-input--density-default {
      .v-field--variant-outlined,
      .v-field--single-line,
      .v-field--no-label {
        border-radius: 10px;
      }
    }
  }
}

.login-card {
  .v-col {
    padding: 0 !important;
  }
}
</style>
