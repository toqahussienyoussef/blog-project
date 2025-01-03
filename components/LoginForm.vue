<template>
  <div class="text-center pa-4">
    <span @click="dialog = true" class="clickable shadow-border mr-4">
      Join Us <v-icon icon="mdi-menu-down"></v-icon>
    </span>

    <v-dialog v-model="dialog" width="70%" height="70%">
      <v-card max-width="100%">
        <v-row class="login-card">
          <v-col cols="12" sm="12" md="6" class="p-0">
            <div class="login-img-bg">
              <h2>
                Welcome to <br />
                360 Business Partners
              </h2>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="p-0">
            <div class="form-section">
              <p class="form-title">Join us now</p>
              <v-form @submit.prevent="handleSubmit" v-model="isValid">
                <v-text-field
                  class="input-field"
                  v-model="form.name"
                  label="Name"
                  :rules="[
                    (v) => !!v || 'Name is required',
                    (v) =>
                      /[a-z]/gi.test(v) || 'Use Only English Letters for name',
                  ]"
                  required
                  placeholder="Name"
                  variant="outlined"
                />

                <v-text-field
                  class="input-field"
                  v-model="form.email"
                  label="Email"
                  type="email"
                  :rules="[
                    (v) => !!v || 'Email is required',
                    (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                  ]"
                  required
                  variant="outlined"
                />

                <v-text-field
                  class="input-field"
                  v-model="form.phone"
                  label="Phone"
                  type="tel"
                  :rules="[
                    (v) => !!v || 'Phone is required',
                    (v) => /^[0-9+\-\s()]*$/.test(v) || 'Invalid phone format',
                    (v) =>
                      v.length <= 15 || 'Name must be less than 15 characters',
                  ]"
                  required
                  variant="outlined"
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
                ></v-checkbox>
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
const dialog = ref(false);

const { loading, error, success, submitForm } = useJoinUsForm();

const isValid = ref(false);
const form = reactive({
  name: "",
  email: "",
  phone: "",
  terms: false,
});

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
.clickable {
  cursor: pointer;
}

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
    .v-input--density-default .v-field--variant-outlined,
    .v-input--density-default .v-field--single-line,
    .v-input--density-default .v-field--no-label {
      border-radius: 10px;
    }
  }
}
.login-card {
  .v-col {
    padding: 0 !important;
  }
}
</style>
