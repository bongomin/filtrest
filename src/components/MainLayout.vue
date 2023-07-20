<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import posts from "../../Data/sample";
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
              <div class="p-4 w-4/5 mx-auto bg-white mt-4 shadow-md">
                <div class="flex p-2 shadow-bottom text-c">
                  <span class="text-2xm">About 250 Results</span>
                  <ul class="flex space-x-4 ml-auto">
                    <li
                      class="cursor-pointer py-2 px-4 bg-gray shadow-md transition-colors duration-300 hover:bg-blue-200 active:bg-blue-500"
                    >
                      Recent
                    </li>
                    <li
                      class="cursor-pointer py-2 px-4 bg-gray shadow-md transition-colors duration-300 hover:bg-blue-200 active:bg-blue-500"
                    >
                      Popular
                    </li>
                    <li
                      class="cursor-pointer py-2 px-4 bg-gray shadow-md transition-colors duration-300 hover:bg-blue-200 active:bg-blue-500"
                    >
                      People
                    </li>
                  </ul>
                </div>
                <div class="flex p-2 shadow-bottom text-c">
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
                        class="w-12 h-12 rounded-full mr-4"
                      />
                      <div class="text-gray-800 flex flex-col">
                        <span class="font-semibold">{{
                          post.creatorName
                        }}</span>
                        <span class="text-gray-600 text-sm"
                          >{{ post.createdAt
                          }}<img
                            :src="post.postersImage"
                            alt="Facebook Icon"
                            class="w-4 h-4 inline-block ml-1"
                        /></span>
                      </div>

                      <div class="ml-auto">
                        <!-- Delete Dropdown -->
                        <div class="dropdown inline-block relative">
                          <button
                            class="bg-gray-200 text-gray-700 py-1 px-2 rounded inline-flex items-center"
                          >
                            <span class="mr-1">Delete</span>
                            <svg
                              class="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M13.414 6L10 9.414 6.586 6 6 6.586 9.414 10l-3.405 3.405.586.586L10 10.586l3.414 3.405.586-.586L10.586 10l3.405-3.414-.587-.586z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                          <ul
                            class="dropdown-menu absolute hidden text-gray-700 pt-1"
                          >
                            <li class="">
                              <a
                                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                                >Delete</a
                              >
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
                  </div>
                </div>
              </div>
            </div>
            <!-- Right Column -->
            <div class="w-1/3 p-2 bg-gray-300">
              <!-- Content for the right column goes here -->
              Right Column
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>