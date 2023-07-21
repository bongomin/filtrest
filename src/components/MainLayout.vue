<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import posts from "../../Data/sample";
const dropdownOpen = ref(false);
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto w-92%">
          <div class="flex">
            <!-- Middle Section -->
            <div class="w-4/5 bg-gray">
              <div class="p-4 w-4/5 mx-auto bg-white mt-4">
                <div class="flex p-2 shadow-bottom text-c">
                  <span class="text-md font-bold mt-4">About 250 Results</span>
                  <div
                    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 ml-auto"
                  >
                    <ul class="flex flex-wrap -mb-px">
                      <li class="mr-2">
                        <a
                          href="#"
                          class="inline-block p-4 border-b-2 border-blue-500 rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300"
                          >Recent</a
                        >
                      </li>
                      <li class="mr-2">
                        <a
                          href="#"
                          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          >Popular</a
                        >
                      </li>
                      <li class="mr-2">
                        <a
                          href="#"
                          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          >People</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex p-2 shadow-bottom text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#475182"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  <span class="text-2xm">Feeds</span>
                </div>

                <div class="posts mt-10">
                  <div
                    v-for="(post, index) in posts"
                    :key="index"
                    class="bg-white rounded-lg shadow-md p-4 mb-4"
                  >
                    <!-- Header -->
                    <div class="flex items-center mb-4">
                      <img
                        :src="post.postersImage"
                        alt="User Image"
                        class="w-10 h-10 rounded-full mr-4"
                      />
                      <div class="text-gray-800 flex flex-col">
                        <span class="font-semibold">{{
                          post.creatorName
                        }}</span>
                        <span class="text-gray-600 text-sm">
                          {{ post.createdAt }}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#475182"
                            viewBox="0 0 24 24"
                            class="w-4 h-4 inline-block ml-1 rounded-full"
                          >
                            <path
                              d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h11.5v-9.3h-3.1v-3h3.1V8.5c0-3.1 2-3.8 3.4-3.8.9 0 1.8.2 2.1.3v3h-1.4c-1.1 0-1.3.5-1.3 1.3V12h2.6l-.7 3h-1.9v9.3h3.7c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="ml-auto">
                        <!-- Chat Icon -->
                        <div class="inline-block mr-4">
                          <svg
                            class="fill-current h-5 w-5 text-gray-700"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.293 5.293a1 1 0 011.414 0l2.988 2.988A3 3 0 009 9h8a3 3 0 013 3v2a1 1 0 01-1.555.832L15.6 14.6A4.996 4.996 0 0111 17H9a5 5 0 01-5-5V8a5 5 0 015-5h2a4.996 4.996 0 013.615 1.55L14.414 5.2a1 1 0 010 1.4l-2.988 2.988a3 3 0 00-1.444-.643L10 8h-1a1 1 0 01-.993-.883L8 7V6a1 1 0 011-1h1a1 1 0 01.993.883L11 6v1a1 1 0 01-1 1H8a1 1 0 01-.993-.883L7 7V6a3 3 0 013-3h1a3 3 0 012.828 2.017l.646-.646A1 1 0 0115.6 4.6l.693.693a4.996 4.996 0 01-2.558 2.13L11 7H9a3 3 0 00-2.827 2.018L3.293 5.293zM10 18a1 1 0 100 2 1 1 0 000-2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>

                        <div class="inline-block relative">
                          <svg
                            class="fill-current h-5 w-5 text-gray-700"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            @click="dropdownOpen = !dropdownOpen"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 3a2 2 0 100 4 2 2 0 000-4zM10 9a2 2 0 100 4 2 2 0 000-4zM10 15a2 2 0 100 4 2 2 0 000-4z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <!-- Dropdown Menu for Three Vertical Dots -->
                          <ul
                            v-show="dropdownOpen"
                            class="w-30 dropdown-menu absolute pt-1"
                          >
                            <li>
                              <a
                                class="flex items-center rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                              >
                                <svg
                                  class="fill-current h-4 w-4 mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M13.414 6L10 9.414 6.586 6 6 6.586 9.414 10l-3.405 3.405.586.586L10 10.586l3.414 3.405.586-.586L10.586 10l3.405-3.414-.587-.586z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex items-center bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                              >
                                <svg
                                  class="fill-current h-4 w-4 mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 3a2 2 0 100 4 2 2 0 000-4zM10 9a2 2 0 100 4 2 2 0 000-4zM10 15a2 2 0 100 4 2 2 0 000-4z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                Share
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex items-center rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                              >
                                <svg
                                  class="fill-current h-4 w-4 mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M13.414 6L10 9.414 6.586 6 6 6.586 9.414 10l-3.405 3.405.586.586L10 10.586l3.414 3.405.586-.586L10.586 10l3.405-3.414-.587-.586z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- Post Body -->
                    <p class="text-gray-800">
                      {{ post.postBody }}
                      <img :src="post.postImage" alt="post body" />
                    </p>

                    <!-- Footer -->
                    <div class="flex items-center mt-4">
                      <div class="flex items-center mr-4">
                        <svg
                          class="h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 18a1 1 0 01-.64-.23c-.26-.21-5.61-4.5-5.61-9.48C3.75 4.04 6.36 2 10 2s6.25 2.04 6.25 6.29c0 4.98-5.35 9.27-5.61 9.48a1 1 0 01-.64.23zM10 4a1 1 0 100-2 1 1 0 000 2z"
                          />
                        </svg>
                        <span class="ml-1 text-sm text-gray-600">56 Likes</span>
                      </div>
                      <div class="flex items-center mr-4">
                        <svg
                          class="h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M15 7a1 1 0 01.993.883L16 8v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8c0-.387.177-.747.48-.983l.023-.017 7-4a1 1 0 011.014 0l7 4a1 1 0 01.48.983L17 8a1 1 0 01-1-1V5a1 1 0 01-1-1 1 1 0 011-1zM7 15l5-2.864L17 15V8.236L12 11l-5-2.764V15z"
                          />
                        </svg>
                        <span class="ml-1 text-sm text-gray-600">Share</span>
                      </div>
                      <div class="flex items-center">
                        <svg
                          class="h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M12 4a1 1 0 011 1v9a3 3 0 01-3 3H6a3 3 0 01-3-3V5a1 1 0 112 0v9a1 1 0 001 1h4a1 1 0 100-2H7a1 1 0 110-2h3a1 1 0 001-1V5a1 1 0 011-1z"
                          />
                        </svg>
                        <span class="ml-1 text-sm text-gray-600">Comment</span>
                      </div>
                    </div>
                    <div class="w-full flex items-center py-3 px-1">
                      <!-- User Image with rounded avatar -->
                      <img
                        src="src/assets/profile1.jpeg"
                        alt="User Image"
                        class="w-8 h-8 rounded-full mr-4"
                      />

                      <!-- Input field occupying the other section -->
                      <input
                        type="text"
                        class="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Write your comment here"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right Column -->
            <div class="w-1/3 p-2 bg-white">
              <div class="flex justify-center w-full shadow-bottom mb-3">
                <div class="flex w-full py-2 px-2">
                  <div class="filters flex-1 text-1xl">Filtrest</div>
                  <span class="ml-auto text-gray py-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <rect width="24" height="24" fill="white" />
                        <path
                          d="M13.5 2L13.9961 1.93798C13.9649 1.68777 13.7522 1.5 13.5 1.5V2ZM10.5 2V1.5C10.2478 1.5 10.0351 1.68777 10.0039 1.93798L10.5 2ZM13.7747 4.19754L13.2786 4.25955C13.3047 4.46849 13.4589 4.63867 13.6642 4.68519L13.7747 4.19754ZM16.2617 5.22838L15.995 5.6513C16.1731 5.76362 16.4024 5.75233 16.5687 5.62306L16.2617 5.22838ZM18.0104 3.86826L18.364 3.51471C18.1857 3.3364 17.9025 3.31877 17.7034 3.47359L18.0104 3.86826ZM20.1317 5.98958L20.5264 6.29655C20.6812 6.09751 20.6636 5.81434 20.4853 5.63603L20.1317 5.98958ZM18.7716 7.73831L18.3769 7.43134C18.2477 7.59754 18.2364 7.82693 18.3487 8.00503L18.7716 7.73831ZM19.8025 10.2253L19.3148 10.3358C19.3613 10.5411 19.5315 10.6953 19.7404 10.7214L19.8025 10.2253ZM22 10.5H22.5C22.5 10.2478 22.3122 10.0351 22.062 10.0039L22 10.5ZM22 13.5L22.062 13.9961C22.3122 13.9649 22.5 13.7522 22.5 13.5H22ZM19.8025 13.7747L19.7404 13.2786C19.5315 13.3047 19.3613 13.4589 19.3148 13.6642L19.8025 13.7747ZM18.7716 16.2617L18.3487 15.995C18.2364 16.1731 18.2477 16.4025 18.3769 16.5687L18.7716 16.2617ZM20.1317 18.0104L20.4853 18.364C20.6636 18.1857 20.6812 17.9025 20.5264 17.7034L20.1317 18.0104ZM18.0104 20.1317L17.7034 20.5264C17.9025 20.6812 18.1857 20.6636 18.364 20.4853L18.0104 20.1317ZM16.2617 18.7716L16.5687 18.3769C16.4024 18.2477 16.1731 18.2364 15.995 18.3487L16.2617 18.7716ZM13.7747 19.8025L13.6642 19.3148C13.4589 19.3613 13.3047 19.5315 13.2786 19.7404L13.7747 19.8025ZM13.5 22V22.5C13.7522 22.5 13.9649 22.3122 13.9961 22.062L13.5 22ZM10.5 22L10.0039 22.062C10.0351 22.3122 10.2478 22.5 10.5 22.5V22ZM10.2253 19.8025L10.7214 19.7404C10.6953 19.5315 10.5411 19.3613 10.3358 19.3148L10.2253 19.8025ZM7.73832 18.7716L8.00504 18.3487C7.82694 18.2364 7.59756 18.2477 7.43135 18.3769L7.73832 18.7716ZM5.98959 20.1317L5.63604 20.4853C5.81435 20.6636 6.09752 20.6812 6.29656 20.5264L5.98959 20.1317ZM3.86827 18.0104L3.4736 17.7034C3.31878 17.9025 3.33641 18.1857 3.51472 18.364L3.86827 18.0104ZM5.22839 16.2617L5.62307 16.5687C5.75234 16.4025 5.76363 16.1731 5.65131 15.995L5.22839 16.2617ZM4.19754 13.7747L4.68519 13.6642C4.63867 13.4589 4.46849 13.3047 4.25955 13.2786L4.19754 13.7747ZM2 13.5H1.5C1.5 13.7522 1.68777 13.9649 1.93798 13.9961L2 13.5ZM2 10.5L1.93798 10.0039C1.68777 10.0351 1.5 10.2478 1.5 10.5H2ZM4.19754 10.2253L4.25955 10.7214C4.46849 10.6953 4.63867 10.5411 4.68519 10.3358L4.19754 10.2253ZM5.22839 7.73831L5.65131 8.00503C5.76363 7.82693 5.75234 7.59755 5.62307 7.43134L5.22839 7.73831ZM3.86827 5.98959L3.51472 5.63603C3.33641 5.81434 3.31878 6.09751 3.47359 6.29656L3.86827 5.98959ZM5.98959 3.86827L6.29656 3.47359C6.09752 3.31878 5.81434 3.33641 5.63604 3.51471L5.98959 3.86827ZM7.73832 5.22839L7.43135 5.62306C7.59755 5.75233 7.82694 5.76363 8.00504 5.6513L7.73832 5.22839ZM10.2253 4.19754L10.3358 4.68519C10.5411 4.63867 10.6953 4.46849 10.7214 4.25955L10.2253 4.19754ZM13.5 1.5H10.5V2.5H13.5V1.5ZM14.2708 4.13552L13.9961 1.93798L13.0039 2.06202L13.2786 4.25955L14.2708 4.13552ZM16.5284 4.80547C15.7279 4.30059 14.8369 3.92545 13.8851 3.70989L13.6642 4.68519C14.503 4.87517 15.2886 5.20583 15.995 5.6513L16.5284 4.80547ZM16.5687 5.62306L18.3174 4.26294L17.7034 3.47359L15.9547 4.83371L16.5687 5.62306ZM17.6569 4.22182L19.7782 6.34314L20.4853 5.63603L18.364 3.51471L17.6569 4.22182ZM19.7371 5.68261L18.3769 7.43134L19.1663 8.04528L20.5264 6.29655L19.7371 5.68261ZM20.2901 10.1149C20.0746 9.16313 19.6994 8.27213 19.1945 7.47158L18.3487 8.00503C18.7942 8.71138 19.1248 9.49695 19.3148 10.3358L20.2901 10.1149ZM22.062 10.0039L19.8645 9.72917L19.7404 10.7214L21.938 10.9961L22.062 10.0039ZM22.5 13.5V10.5H21.5V13.5H22.5ZM19.8645 14.2708L22.062 13.9961L21.938 13.0039L19.7404 13.2786L19.8645 14.2708ZM19.1945 16.5284C19.6994 15.7279 20.0746 14.8369 20.2901 13.8851L19.3148 13.6642C19.1248 14.503 18.7942 15.2886 18.3487 15.995L19.1945 16.5284ZM20.5264 17.7034L19.1663 15.9547L18.3769 16.5687L19.7371 18.3174L20.5264 17.7034ZM18.364 20.4853L20.4853 18.364L19.7782 17.6569L17.6569 19.7782L18.364 20.4853ZM15.9547 19.1663L17.7034 20.5264L18.3174 19.7371L16.5687 18.3769L15.9547 19.1663ZM13.8851 20.2901C14.8369 20.0746 15.7279 19.6994 16.5284 19.1945L15.995 18.3487C15.2886 18.7942 14.503 19.1248 13.6642 19.3148L13.8851 20.2901ZM13.9961 22.062L14.2708 19.8645L13.2786 19.7404L13.0039 21.938L13.9961 22.062ZM10.5 22.5H13.5V21.5H10.5V22.5ZM9.72917 19.8645L10.0039 22.062L10.9961 21.938L10.7214 19.7404L9.72917 19.8645ZM7.4716 19.1945C8.27214 19.6994 9.16314 20.0746 10.1149 20.2901L10.3358 19.3148C9.49696 19.1248 8.71139 18.7942 8.00504 18.3487L7.4716 19.1945ZM6.29656 20.5264L8.04529 19.1663L7.43135 18.3769L5.68262 19.7371L6.29656 20.5264ZM3.51472 18.364L5.63604 20.4853L6.34315 19.7782L4.22183 17.6569L3.51472 18.364ZM4.83372 15.9547L3.4736 17.7034L4.26295 18.3174L5.62307 16.5687L4.83372 15.9547ZM3.70989 13.8851C3.92545 14.8369 4.30059 15.7279 4.80547 16.5284L5.65131 15.995C5.20584 15.2886 4.87517 14.503 4.68519 13.6642L3.70989 13.8851ZM1.93798 13.9961L4.13552 14.2708L4.25955 13.2786L2.06202 13.0039L1.93798 13.9961ZM1.5 10.5V13.5H2.5V10.5H1.5ZM4.13552 9.72917L1.93798 10.0039L2.06202 10.9961L4.25955 10.7214L4.13552 9.72917ZM4.80547 7.47159C4.30059 8.27213 3.92545 9.16313 3.70989 10.1149L4.68519 10.3358C4.87517 9.49696 5.20583 8.71138 5.65131 8.00503L4.80547 7.47159ZM3.47359 6.29656L4.83371 8.04528L5.62307 7.43134L4.26295 5.68262L3.47359 6.29656ZM5.63604 3.51471L3.51472 5.63603L4.22182 6.34314L6.34314 4.22182L5.63604 3.51471ZM8.04529 4.83371L6.29656 3.47359L5.68262 4.26294L7.43135 5.62306L8.04529 4.83371ZM10.1149 3.70989C9.16313 3.92545 8.27214 4.30059 7.4716 4.80547L8.00504 5.6513C8.71139 5.20583 9.49696 4.87517 10.3358 4.68519L10.1149 3.70989ZM10.0039 1.93798L9.72917 4.13552L10.7214 4.25955L10.9961 2.06202L10.0039 1.93798Z"
                          fill="#000000"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="#000000"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div class="filter-div">
                <ul class="flex w-full">
                  <li
                    class="flex-1 text-center cursor-pointer text-sm py-2 px-4 border-b-2 border-blue-500 hover:border-blue-500 active:border-blue-500"
                  >
                    Discussion
                  </li>
                  <li
                    class="flex-1 text-center cursor-pointer text-sm py-2 px-4 border-b-2 border-transparent hover:border-blue-500"
                  >
                    Across the web
                  </li>
                </ul>
              </div>
              <div class="flex border p-2" v-for="i in 5" :key="i">
                <div class="flex-1 pr-4">
                  <div class="text-md font-bold mb-2">
                    React
                    <span
                      class="bg-blue-500 text-white text-xs py-1 px-2 rounded-md"
                      >5</span
                    >
                  </div>
                  <div class="flex pl-3">
                    <img
                      src="src/assets/profile3.jpeg"
                      alt="Image 1"
                      class="w-7 h-7 rounded-full inline-block -ml-4"
                    />
                    <img
                      src="src/assets/profile1.jpeg"
                      alt="Image 2"
                      class="w-7 h-7 rounded-full inline-block -ml-4"
                    />
                    <img
                      src="src/assets/profile3.jpeg"
                      alt="Image 3"
                      class="w-7 h-7 rounded-full inline-block -ml-4"
                    />
                    <img
                      src="src/assets/profile1.jpeg"
                      alt="Image 1"
                      class="w-7 h-7 rounded-full inline-block -ml-4"
                    />
                    <img
                      src="src/assets/profile3.jpeg"
                      alt="Image 2"
                      class="w-7 h-7 rounded-full inline-block -ml-4"
                    />
                    <img
                      src="src/assets/profile1.jpeg"
                      alt="Image 3"
                      class="w-7 h-7 rounded-full inline-block -ml-4"
                    />
                  </div>
                </div>
                <!-- Right section -->
                <div class="w-32">
                  <div class="flex items-center justify-end">
                    <div class="text-sm text-gray-500 font-semibold mr-2">
                      Open
                    </div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>