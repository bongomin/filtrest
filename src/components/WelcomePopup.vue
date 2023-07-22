<script setup>
import { ref } from 'vue';

const showModal = ref(true);
const title = 'Welcome to Filtrest';
const subtitle = 'What is your area of interest?';
const interests = ['Technology', 'Science', 'Art', 'Sports', 'Music'];

const selectedInterest = ref('');

// const props = defineProps([showModal]);

const submit = () => {
  showModal.value = false;
};
</script>
<template>
  <div>
    <!-- Modal Background -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      v-if="showModal"
    >
      <!-- Modal Content -->
      <div class="bg-custom text-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
        <p class="mb-4">{{ subtitle }}</p>
        <select v-model="selectedInterest" class="w-full p-2 text-black border border-gray-300 rounded">
          <option disabled value="">Select your area of interests</option>
          <option v-for="interest in interests" :key="interest">{{ interest }}</option>
        </select>
        <button @click="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Submit
        </button>
      </div>
    </div>
  </div>
</template>


