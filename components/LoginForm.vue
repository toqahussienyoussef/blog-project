<!-- JoinUsForm.vue -->
<template>
  <div class="text-center pa-4">
    <!-- Join Us Trigger Button -->
    <span @click="dialog = true" class="clickable shadow-border mr-4">
      Join Us <v-icon icon="mdi-menu-down"></v-icon>
    </span>

    <!-- Join Us Dialog -->
    <v-dialog v-model="dialog" width="70%" height="70%">
      <v-card max-width="100%">
        <v-row class="login-card">
          <!-- Left Side - Background Image -->
          <v-col cols="12" sm="12" md="6" class="p-0">
            <div class="login-img-bg">
              <h2>
                Welcome to <br />
                360 Business Partners
              </h2>
            </div>
          </v-col>

          <!-- Right Side - Form -->
          <v-col cols="12" sm="12" md="6" class="p-0">
            <div class="form-section">
              <p class="form-title">Join us now</p>

              <!-- Registration Form -->
              <v-form @submit.prevent="handleSubmit" v-model="isValid">
                <!-- Name Field -->
                <v-text-field
                  v-model="form.name"
                  class="input-field"
                  label="Name"
                  placeholder="Name"
                  variant="outlined"
                  required
                  :rules="nameRules"
                />

                <!-- Email Field -->
                <v-text-field
                  v-model="form.email"
                  class="input-field"
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  :rules="emailRules"
                />

                <!-- Phone Field -->
                <v-text-field
                  v-model="form.phone"
                  class="input-field"
                  label="Phone"
                  type="tel"
                  variant="outlined"
                  required
                  :rules="phoneRules"
                />

                <!-- Alert Messages -->
                <v-alert v-if="error" type="error" class="mb-4">
                  {{ error }}
                </v-alert>

                <v-alert v-if="success" type="success" class="mb-4">
                  Successfully submitted!
                </v-alert>

                <!-- Terms Checkbox -->
                <v-checkbox
                  v-model="form.terms"
                  label="I agree with terms & conditions"
                />

                <!-- Submit Button -->
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

// Import form handling composable
const { loading, error, success, submitForm } = useJoinUsForm();

// Form methods
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.terms = false;
};

const handleSubmit = async () => {
  try {
    await submitForm(form);
    if (success.value) {
      resetForm();
    }
  } catch (e) {
    // Error is handled in composable
  }
};
</script>

<style scoped lang="scss">
// Utility classes
.clickable {
  cursor: pointer;
}

// Background image section
.login-img-bg {
  background-image: url("/assets/images/login-img.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;

  h2 {
    padding-top: 2rem;
    color: $white-text-color;
    font-size: 36px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;

    @include respond-to($breakpoint-md) {
      padding: 3rem;
      font-size: 20px;
    }
  }
}

// Form section styling
.form-section {
  padding: 2rem;

  .solid-main {
    min-height: 3rem;
    border-radius: 16px;
  }

  .form-title {
    font-size: 21px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 2rem;
  }

  .input-field {
    margin-bottom: 1rem;

    // Vuetify input customization
    .v-input--density-default {
      .v-field--variant-outlined,
      .v-field--single-line,
      .v-field--no-label {
        border-radius: 10px;
      }
    }
  }
}

// Card layout
.login-card {
  .v-col {
    padding: 0 !important;
  }
}
</style>
