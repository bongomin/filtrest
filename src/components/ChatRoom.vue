<script setup>
import { ref } from "vue";
const messages = ref([
  {
    id: 1,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
  {
    id: 2,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
  {
    id: 3,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
  {
    id: 4,
    user: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    content: "Hi John!",
  },
   {
    id: 5,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
   {
    id: 6,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
   {
    id: 7,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
   {
    id: 8,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
   {
    id: 9,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
   {
    id: 10,
    user: {
      name: "Bongomin Daniel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: "Hello there!",
  },
]);

const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.trim() === "") return;

  messages.value.push({
    id: messages.value.length + 1,
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: newMessage.trim(),
  });

  newMessage.value = "";
};

const goBack = () => {
  window.history.back();
};
</script>

<style>
.main {
  max-height: 600px;
}
</style>

<template>
  <div class="main flex flex-col h-full">
    <div
      class="back flex items-center text-blue-500 text-sm mb-2 cursor-pointer"
      @click="goBack"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M6.293 10l3.646-3.646a.5.5 0 11.708.708L7.707 10l2.646 2.646a.5.5 0 01-.708.708L6.293 10zm2.646 3.646a.5.5 0 01.708-.708L13.707 10l-2.646-2.646a.5.5 0 01.708-.708L15.707 10l-3.646 3.646a.5.5 0 01-.708 0z"
          clip-rule="evenodd"
        />
      </svg>
      Back
    </div>

    <!-- Chat messages -->
    <div class="flex-1 bg-gray-100 p-4 overflow-y-auto">
      <div v-for="message in messages" :key="message.id" class="flex mb-4">
        <img
          :src="message.user.avatar"
          :alt="message.user.name"
          class="w-10 h-10 rounded-full mr-4"
        />
        <div class="bg-white p-3 rounded-lg shadow w-full">
          <span class="text-sm font-semibold">{{ message.user.name }}</span>
          <p class="text-sm text-gray-700">{{ message.content }}</p>
        </div>
      </div>
    </div>

    <!-- Input field for new message -->
    <div class="py-4 px-4 bg-white">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Type your message..."
      />
    </div>
  </div>
</template>
