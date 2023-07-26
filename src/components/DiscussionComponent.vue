
<script setup>
import {ref} from "vue";
import ChatRoom from "../components/ChatRoom.vue";
const showChatRoom = ref(false);

const employeeImages = [
  "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
  "https://avatars.githubusercontent.com/u/39218838?s=400&u=b407be6b83e0f12427d744c39414d3214aa60b55&v=4",
  "https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
  "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
];

// Function to get image source based on image number (for demonstration purposes)
const getImageSrc = (imageNum) => {
  const index = (imageNum - 1) % employeeImages.length;
  return employeeImages[index];
};

const openChatRoom = () => {
  console.log('Boom')
  showChatRoom.value = true;
};
</script>

<template>
  <div  class="main-dis py-4">
    <div  v-if="!showChatRoom" class="chat-room-list">
      <div
        class="employee-card flex items-center border p-4 mb-4"
        v-for="i in 5"
        :key="i"
        @click="openChatRoom"
      >
        <!-- Left section - Employee details -->
        <div class="flex-1 pr-4">
          <div class="text-lg font-semibold mb-2">React Discussion</div>
          <div class="flex items-center mb-2">
            <span
              class="bg-gray-500 text-white text-xs py-1 px-2 rounded-md mr-2"
              >5</span
            >
            <div class="text-xs text-gray-500">discussions</div>
          </div>
          <div class="flex items-center">
            <img
              v-for="imageNum in 8"
              :src="getImageSrc(imageNum)"
              :alt="`Image ${imageNum}`"
              class="w-8 h-8 rounded-full inline-block -ml-2"
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

    <!-- Chat Room -->
    <div v-else>
      <ChatRoom />
    </div>
  </div>
</template>