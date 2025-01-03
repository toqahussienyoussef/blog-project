# Blog Project - Developer Documentation

## Technical Stack Overview

### Frontend Technologies
- **Framework**: Nuxt 3 / Vue 3
- **UI Library**: Vuetify
- **Styling**: SCSS with custom mixins
- **State Management**: Vue 3 Composition API
- **Form Handling**: Custom composables

## Component Architecture

### 1. WhyUsSection Component
```vue
// components/WhyUsSection.vue
```
**Purpose**: Landing page section showcasing platform benefits

**Key Features**:
- Responsive grid layout using Vuetify's `v-row` and `v-col`
- Dynamic user count display
- Image gallery with user avatars
- Join button integration

**Props**: None

**Emits**: None

**Usage Example**:
```vue
<template>
  <WhyUsSection />
</template>
```

### 2. JoinUsForm Component
```vue
// components/JoinUsForm.vue
```
**Purpose**: Modal dialog for user registration

**State Management**:
```javascript
const form = reactive({
  name: "",
  email: "",
  phone: "",
  terms: false
})
```

**Validation Rules**:
```javascript
const nameRules = [
  (v) => !!v || 'Name is required',
  (v) => /[a-z]/gi.test(v) || 'Use Only English Letters for name'
]
// Similar rules for email and phone
```

**Events**:
- `@submit`: Form submission
- `@update:modelValue`: Form field updates

## Composables

### useJoinUsForm
```javascript
// composables/useJoinUsForm.js
```
**Purpose**: Handles form submission logic and state

**Exposed Methods**:
```javascript
const {
  loading,  // ref<boolean>
  error,    // ref<string>
  success,  // ref<boolean>
  submitForm // async (formData) => Promise<any>
} = useJoinUsForm()
```

**Usage**:
```javascript
const handleSubmit = async (formData) => {
  try {
    await submitForm(formData)
    // Handle success
  } catch (e) {
    // Handle error
  }
}
```

## Styling System

### Global Variables
```scss
// css/variables.scss
$main-color: #D93749; //Red
$second-color: #282828; //Dark Blue
$text-color: #666D80; // Gray
$bold-titles: #0D0D12; // Dark
$white-titles: #F6F6F6; // lite white
$text-with-dark-bg: #FEFCF7; // white text
$white-text-color: #F3F3F3; //White
$menu-color-white: #F6F7F8; // Menu Items
$background-color: #f9fafb; // light bg
$dot-inactive: #d1d5db;
```

### Mixins
```scss
// css/variables.scss
@mixin respond-to($breakpoint) {
  @media (max-width: $breakpoint) {
    @content;
  }
}
```

### Common Extensions
```scss
%sideWidth {
  // Common width styles
}

%headerBoxes {
  // Common box styles
}
```

## API Integration

### Join Us Endpoint
**Endpoint**: `/join-us`
**Method**: POST
**Headers**: 
```javascript
{
  'Content-Type': 'application/json'
}
```

**Request Body**:
```typescript
interface JoinUsRequest {
  name: string;
  email: string;
  phone: string;
  terms: boolean;
}
```

**Response**:
```typescript
interface JoinUsResponse {
  success: boolean;
  message?: string;
  // Additional response data
}
```

## Responsive Design Implementation

### Breakpoints
```javascript
$breakpoint-md: 768px  // Tablet
$breakpoint-sm: 960px  // Mobile


### Media Query Usage:
```scss
@include respond-to($breakpoint-md) {
  .responsive-element {
    // Mobile styles
  }
}
```

## Development Guidelines

### 1. Component Structure
- Keep components single-responsibility
- Use composables for reusable logic
- Implement proper TypeScript interfaces when available

### 2. Styling Conventions
- Use BEM methodology for class names
- Implement styles within scoped component styles
- Utilize SCSS nesting for clarity

### 3. Form Handling
- Implement immediate validation
- Show loading states during submissions
- Provide clear error messages
- Reset form after successful submission

### 4. Performance Considerations
- Lazy load components when possible
- Optimize image assets
- Implement proper error boundaries
- Use v-show instead of v-if for frequently toggled elements

## Common Development Tasks

### 1. Adding New Form Fields
```vue
<v-text-field
  v-model="form.newField"
  class="input-field"
  :rules="newFieldRules"
  variant="outlined"
/>
```

### 2. Implementing New Validation Rules
```javascript
const newFieldRules = [
  (v) => !!v || 'Field is required',
  (v) => customValidation(v) || 'Custom error message'
]
```

### 3. Extending the API Integration
```javascript
const submitForm = async (formData) => {
  // Add new fields to formData object
  // Handle new response data
}
```

## Troubleshooting

### Common Issues
1. Form validation not triggering
   - Check rules implementation
   - Verify v-model bindings

2. API submission errors
   - Verify payload structure
   - Check network tab for request details

3. Styling inconsistencies
   - Verify SCSS variable scope
   - Check breakpoint implementation

## Testing Approach

### Unit Tests
- Component rendering
- Form validation
- API integration
- State management

### E2E Tests
- Form submission flow
- Navigation
- Responsive design
- Error handling

## Build and Deployment

### Development
```bash

npm install
npm run dev

yarn

yarn dev
```

### Production
```bash
npm run build
npm run start


yarn build
```

