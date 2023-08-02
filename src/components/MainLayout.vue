<script setup>
import { ref, computed, onMounted,onBeforeMount } from "vue";
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import posts from "../../Data/sample";
import DiscussionsSection from "./DiscussionsSection.vue";
import WelcomePopup from "../components/WelcomePopup.vue";
import UnderConstruction from "../components/UnderConstruction.vue";

// pinia data store
import { useDataStore } from '../../store/dataStore';
const dataStore = useDataStore();

onBeforeMount(() => {
  // Load data into the store when the component is about to mount
  dataStore.setData(posts);
});

const dropdownOpen = ref(false);
const activeTab = ref("recent");
const disOpen = ref(false);
const allPosts = ref([]);

const isLoading = ref(true);

// Simulate a delay to simulate data loading
setTimeout(() => {
  isLoading.value = false;
}, 1500);

onMounted(() => {
  allPosts.value = dataStore.allPosts
});

const showRecentPosts = computed(() => activeTab.value === "recent");
const showPopularPosts = computed(() => activeTab.value === "popular");
const showPeople = computed(() => activeTab.value === "people");

const openDiscussionsSection = () => {
  console.log("Open turn to true");
  disOpen.value = !disOpen.value;
};

const updatePosts = (filters = []) => {
  filters.forEach((filter) => {
    if (filter.tree.length > 0) {
      allPosts.value = posts;
    }
  });

  // if (filter.length > 0) {
  //   let newPosts = posts.filter(
  //     (postFilter) => filter.includes(postFilter.filterType)
  //   );
  //   allPosts.value = newPosts;
  // } else {
  //  allPosts.value = posts;
  // }
};
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar @updatePosts="updatePosts" />
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
                  <!-- content header section -->
                  <div
                    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 ml-auto"
                  >
                    <ul class="flex flex-wrap -mb-px">
                      <li class="mr-2">
                        <a
                          href="#"
                          @click.prevent="activeTab = 'recent'"
                          :class="{
                            'inline-block p-4 border-b-2 border-blue-500 rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300':
                              showRecentPosts,
                            'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300':
                              !showRecentPosts,
                          }"
                          >Recent</a
                        >
                      </li>
                      <li class="mr-2">
                        <a
                          href="#"
                          @click.prevent="activeTab = 'popular'"
                          :class="{
                            'inline-block p-4 border-b-2 border-blue-500 rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300':
                              showPopularPosts,
                            'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300':
                              !showPopularPosts,
                          }"
                          >Popular</a
                        >
                      </li>
                      <li class="mr-2">
                        <a
                          href="#"
                          @click.prevent="activeTab = 'people'"
                          :class="{
                            'inline-block p-4 border-b-2 border-blue-500 rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300':
                              showPeople,
                            'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300':
                              !showPeople,
                          }"
                          >People</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- content Section -->
                <div class="content-section">
                  <div v-if="showRecentPosts" class="recent-posts">
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

                    <!-- Spinner loader for posts -->
                    <div v-if="isLoading" class="flex justify-center mt-8">
                  <svg
                    class="animate-spin h-6 w-6 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                    </div>

                    <div v-else class="posts mt-10">
                      <div
                        v-for="(post, index) in allPosts"
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
                                v-if="post.webLinkFrom === 'facebook'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#475182"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 inline-block ml-1 rounded-full"
                              >
                                <path
                                  d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h11.5v-9.3h-3.1v-3h3.1V8.5c0-3.1 2-3.8 3.4-3.8.9 0 1.8.2 2.1.3v3h-1.4c-1.1 0-1.3.5-1.3 1.3V12h2.6l-.7 3h-1.9v9.3h3.7c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0z"
                                />
                              </svg>

                              <svg
                                v-else-if="post.webLinkFrom === 'twitter'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#475182"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 inline-block ml-1 rounded-full"
                              >
                                <path
                                  d="M24 4.531c-.885.387-1.84.65-2.838.77a5.058 5.058 0 002.219-2.796 9.93 9.93 0 01-3.157 1.205 5.014 5.014 0 00-8.555 4.57A14.154 14.154 0 011.706 3.62a4.983 4.983 0 001.543 6.645A4.967 4.967 0 011.4 9.06v.055a4.983 4.983 0 004.001 4.882 5.043 5.043 0 01-2.258.086 4.986 4.986 0 004.65 3.454A10.055 10.055 0 010 19.13a14.127 14.127 0 007.623 2.23c9.12 0 14.088-7.545 14.088-14.088l-.017-.64c.956-.687 1.786-1.555 2.442-2.537l-.884-.038z"
                                />
                              </svg>

                              <svg
                                v-else-if="post.webLinkFrom === 'instagram'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#475182"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 inline-block ml-1 rounded-full"
                              >
                                <path
                                  d="M12 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm5.36-16.636a2.17 2.17 0 1 0 0 4.34 2.17 2.17 0 0 0 0-4.34zm-5.36 3.908a4.07 4.07 0 1 0 4.068 4.068 4.07 4.07 0 0 0-4.068-4.068zm5.796 6.624a7.24 7.24 0 0 1-7.324 7.324 7.24 7.24 0 0 1-7.324-7.324 7.24 7.24 0 0 1 7.324-7.324 7.24 7.24 0 0 1 7.324 7.324zm3.408-10.476a.678.678 0 0 0-.68.68v4.592a.678.678 0 0 0 .68.68h4.592a.678.678 0 0 0 .68-.68v-4.592a.678.678 0 0 0-.68-.68h-4.592zm8.884.476c0 .334-.27.604-.604.604-.334 0-.604-.27-.604-.604v-1.112c0-.334.27-.604.604-.604.334 0 .604.27.604.604v1.112z"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="ml-auto">
                            <!-- Chat Icon -->
                            <div class="inline-block mr-4">
                              <svg
                                class="fill-current h-5 w-5 text-gray-700 cursor-pointer"
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
                                class="fill-current h-5 w-5 text-gray-700 cursor-pointer"
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
                            <span
                              class="ml-1 text-sm text-gray-600 cursor-pointer"
                              >56 Likes</span
                            >
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
                            <span
                              class="ml-1 text-sm text-gray-600 cursor-pointer"
                              >Share</span
                            >
                          </div>
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
                            <span
                              class="ml-1 text-sm text-gray-600 cursor-pointer"
                              >56 Likes</span
                            >
                          </div>
                          <div
                            class="flex items-center"
                            @click="openDiscussionsSection"
                          >
                            <svg
                              class="h-5 w-5 text-gray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M12 4a1 1 0 011 1v9a3 3 0 01-3 3H6a3 3 0 01-3-3V5a1 1 0 112 0v9a1 1 0 001 1h4a1 1 0 100-2H7a1 1 0 110-2h3a1 1 0 001-1V5a1 1 0 011-1z"
                              />
                            </svg>
                            <span
                              class="ml-1 text-sm text-gray-600 cursor-pointer"
                              >Discussions</span
                            >
                          </div>
                        </div>
                        <div class="w-full flex items-center py-3 px-1">
                          <!-- User Image with rounded avatar -->
                          <img
                            src="https://avatars.githubusercontent.com/u/39218838?s=400&u=b407be6b83e0f12427d744c39414d3214aa60b55&v=4"
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
                  <div v-if="showPopularPosts" class="popular-posts">
                    <UnderConstruction page="Popular page" />
                  </div>
                  <div v-if="showPeople" page="popular-posts">
                    <UnderConstruction page="People's page" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Right Column -->
            <div class="w-1/3 p-2 bg-white">
              <DiscussionsSection :openDis="disOpen" />
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- comment the modal -->
    <!-- <WelcomePopup /> -->
  </div>
</template>