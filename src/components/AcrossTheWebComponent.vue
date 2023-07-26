<template>
  <div class="main flex flex-wrap h-full">
    <div
      v-for="post in posts"
      :key="post.id"
      class="w-full bg-white rounded-lg shadow-md p-2 m-2"
      style="height: 80px;"
    >
      <div class="flex items-center h-full">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-10 h-10 rounded-full mr-2"
        />
        <div class="flex flex-col flex-grow">
          <p class="text-gray-600 text-xs h-12 overflow-hidden">
            {{ post.description.length > 50 ? post.description.substring(0, 47) + '...' : post.description }}
            <span v-if="post.description.length > 50" @click="showPostDetails(post)" class="text-blue-500 cursor-pointer">Read more</span>
          </p>
          <div class="flex items-center justify-between mt-auto">
            <button
              @click="likePost(post)"
              class="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none text-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-3 w-3 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>{{ post.likes }}</span>
            </button>
            <div class="text-gray-500 text-xxs ml-1">{{ post.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    title: "Exciting Football Match!",
    author: "John Doe",
    description: "Last night's football match was a rollercoaster of emotions! The teams battled it out till the last minute, and the crowd went wild with every goal scored. 🏆⚽ #FootballPassion #GameOn",
    image: "https://via.placeholder.com/150",
    likes: 150,
    details: "The match ended in a 3-2 victory for the home team, securing their place in the finals. The players displayed incredible skills and teamwork, making it an unforgettable experience for every fan present.",
  },
  {
    id: 2,
    title: "Delicious Food Festival!",
    author: "Jane Smith",
    description: "I attended a food festival today, and my taste buds are still dancing with joy! 🍔🍕 The variety of dishes from around the world was mind-blowing. #FoodieParadise #TastyTreats",
    image: "https://via.placeholder.com/150",
    likes: 85,
    details: "From savory street foods to delectable desserts, the festival had something to satisfy every craving. I couldn't resist trying a bit of everything and left with a happy and full stomach!",
  },
  {
    id: 3,
    title: "Melodic Music Concert!",
    author: "Alex Johnson",
    description: "The music concert last night was pure magic! 🎶🎤 The artists took us on a journey with their soulful melodies and electrifying performances. #MusicHeals #ConcertVibes",
    image: "https://via.placeholder.com/150",
    likes: 200,
    details: "Each performer brought their unique style to the stage, leaving the audience in awe. The atmosphere was electric, and we sang along to every song, creating a beautiful connection with the artists.",
  },
   {
    id: 1,
    title: "Exciting Football Match!",
    author: "John Doe",
    description: "Last night's football match was a rollercoaster of emotions! The teams battled it out till the last minute, and the crowd went wild with every goal scored. 🏆⚽ #FootballPassion #GameOn",
    image: "https://via.placeholder.com/150",
    likes: 150,
    details: "The match ended in a 3-2 victory for the home team, securing their place in the finals. The players displayed incredible skills and teamwork, making it an unforgettable experience for every fan present.",
  },
  {
    id: 2,
    title: "Delicious Food Festival!",
    author: "Jane Smith",
    description: "I attended a food festival today, and my taste buds are still dancing with joy! 🍔🍕 The variety of dishes from around the world was mind-blowing. #FoodieParadise #TastyTreats",
    image: "https://via.placeholder.com/150",
    likes: 85,
    details: "From savory street foods to delectable desserts, the festival had something to satisfy every craving. I couldn't resist trying a bit of everything and left with a happy and full stomach!",
  },
  {
    id: 3,
    title: "Melodic Music Concert!",
    author: "Alex Johnson",
    description: "The music concert last night was pure magic! 🎶🎤 The artists took us on a journey with their soulful melodies and electrifying performances. #MusicHeals #ConcertVibes",
    image: "https://via.placeholder.com/150",
    likes: 200,
    details: "Each performer brought their unique style to the stage, leaving the audience in awe. The atmosphere was electric, and we sang along to every song, creating a beautiful connection with the artists.",
  },
]);

const likePost = (post) => {
  post.likes++;
};

const showPostDetails = (post) => {
  alert(post.details);
};
</script>

<style>
.main {
  max-height: 600px;
}
</style>
