
<script setup>
const employeeImages = [
  'src/assets/profile1.jpeg',
  'src/assets/profile3.jpeg',
];

// Function to get image source based on image number (for demonstration purposes)
const getImageSrc = (imageNum) => {
  const index = (imageNum - 1) % employeeImages.length;
  return employeeImages[index];
};
</script>

<template>
  <div class="main-dis py-4">
    <div class="employee-card flex items-center border p-4 mb-4" v-for="i in 5" :key="i">
      <!-- Left section - Employee details -->
      <div class="flex-1 pr-4">
        <div class="text-lg font-semibold mb-2">React Discussion</div>
        <div class="flex items-center mb-2">
          <span class="bg-gray-500 text-white text-xs py-1 px-2 rounded-md mr-2"
            >5</span
          >
          <div class="text-xs text-gray-500">discussions</div>
        </div>
        <div class="flex items-center">
          <img
            v-for="imageNum in 3"
            :src="getImageSrc(imageNum)"
            :alt="`Image ${imageNum}`"
            class="w-8 h-8 rounded-full inline-block -ml-4"
            :key="imageNum"
          />
          <div class="text-xs text-gray-500 ml-2">join discussion...</div>
        </div>
      </div>

      <!-- Right section - Status -->
      <div class="w-32">
        <div class="flex items-center justify-end">
          <div class="text-sm text-gray-500 font-semibold mr-2">Open</div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>