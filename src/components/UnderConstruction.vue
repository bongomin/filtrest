<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="text-4xl font-bold mb-6">{{ page }} Under Construction</div>
    <div class="w-32 h-32 mb-6">
      <!-- Inline SVG Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-full h-full text-gray-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 19l4-4-4-4m4 4H5"
        />
      </svg>
    </div>
    <p class="text-lg text-gray-600 mb-6">
      Still working on this page and it will be available soon.
    </p>
    <a href="/" class="text-blue-500 underline hover:text-blue-700"
      >Go back to the home page</a
    >
  </div>
</template>

<script setup props="page">
</script>
