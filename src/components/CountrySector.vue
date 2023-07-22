
<script setup>
import { ref } from "vue";

const inputValue = ref("");
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Uganda",
  "Tanzania",
  // Add more countries as needed...
];
const selectedCountries = ref([]);
const suggestedCountries = ref([]);

const filterCountries = () => {
  suggestedCountries.value = countries.filter((country) =>
    country.toLowerCase().startsWith(inputValue.value.toLowerCase())
  );
};

const addCountry = (country) => {
  selectedCountries.value.push(country);
  inputValue.value = "";
  suggestedCountries.value = [];
};

const removeCountry = (index) => {
  selectedCountries.value.splice(index, 1);
};
</script>


<template>
  <div>
    <div class="w-full p-2">
      <input
        v-model="inputValue"
        @input="filterCountries"
        class="w-full p-2 border border-gray-300 rounded"
        placeholder="Type a country name..."
      />
    </div>
    <div class="flex flex-wrap gap-2 p-2">
      <div
        v-for="(country, index) in selectedCountries"
        :key="index"
        class="flex items-center bg-blue-500 text-white px-2 rounded"
      >
        {{ country }}
        <button @click="removeCountry(index)" class="ml-2">
          <svg
            class="w-4 h-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 8.585L16.585 7.17 12 11.757 7.414 7.171 6 8.586l4.586 4.586L6 17.757l1.414 1.414 4.586-4.586 4.586 4.586 1.414-1.414-4.586-4.586 4.586-4.586z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="suggestedCountries.length > 0" class="p-2">
      <ul class="border border-gray-50 rounded text-white">
        <li
          v-for="(country, index) in suggestedCountries"
          :key="index"
          @click="addCountry(country)"
          class="p-2 cursor-pointer hover:bg-gray-200 text-black"
        >
          {{ country }}
        </li>
      </ul>
    </div>
  </div>
</template>
