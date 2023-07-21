<script setup>
import { ref } from "vue";
import { useSidebar } from "../composables/useSidebar";

const collapsed = ref({
  1: true,
});

function toggleCollapse(collapseId) {
  collapsed.value[collapseId] = !collapsed.value[collapseId];
}

const { isOpen } = useSidebar();
const activeClass = "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100";
const inactiveClass =
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100";
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    />
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-custom lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            fill="#03BEEF"
            width="40px"
            height="40px"
            viewBox="-192 -192 2304.00 2304.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#03BEEF"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="m0 .011 741.97 984.808v673.566l502.665 251.332V984.82l675.332-896.544-88.154-66.308-697.508 925.891v783.345L852.301 1590.2V947.858L221.322 110.341h1262.289V.011z"
                fill-rule="evenodd"
              />
            </g>
          </svg>

          <span class="mx-2 text-2xl font-semibold text-white">Filtrest</span>
        </div>
      </div>
      <!-- main side bar div -->
      <div class="flex justify-center w-full">
        <div class="flex w-60 p-5">
          <div class="filters flex-1 text-1xl text-white">Filters</div>
          <span class="ml-auto text-gray text-white cursor-pointer">reset</span>
        </div>
      </div>
      <div class="skills-contaner w-60 p-4 shadow-md">
        <div class="skills-list">
          <button
            type="button"
            class="inline-flex ml-1 items-center px-3 py-1 text-xs font-medium text-white bg-indigo-500"
          >
            facebook
            <svg
              class="w-4 h-4 ml-2 -mr-1 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex m-1 items-center px-3 py-1 text-xs font-medium text-white bg-indigo-500"
          >
            Google
            <svg
              class="w-4 h-4 ml-2 -mr-1 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex m-1 items-center px-3 py-1 text-xs font-medium text-white bg-indigo-500"
          >
            US
            <svg
              class="w-4 h-4 ml-2 -mr-1 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-500"
          >
            Uganda
            <svg
              class="w-4 h-4 ml-2 -mr-1 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-3 p-2 space-y-4">
        <!-- Collapsible 1 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
            @click="toggleCollapse(1)"
          >
            Interests
            <span>
              <svg
                fill="#FFFFFF"
                v-show="!collapsed[1]"
                height="15px"
                width="215x"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <svg
                v-show="collapsed[1]"
                fill="#FFFFFF"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.735 511.735"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <div
            v-if="collapsed[1]"
            class="p-4 bg-white border-t border-gray-200"
          >
            <!-- Search Field -->
            <div class="relative mb-4">
              <input
                type="text"
                class="w-full px-4 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                placeholder="Search intrest..."
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414L11.414 11l4.293 4.293a1 1 0 01-1.414 1.414L10 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 11 4.293 6.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="check-boxes m-2 py-3">
              <!-- Checkbox Items -->
              <label
                class="flex py-2 items-center space-x-2 cursor-pointer"
                for="checkbox-1"
              >
                <input
                  type="checkbox"
                  id="checkbox-1"
                  class="text-indigo-600 rounded focus:ring focus:ring-indigo-500"
                />
                <span class="text-gray-700">Academics</span>
              </label>
              <label
                class="flex py-1 items-center space-x-2 cursor-pointer"
                for="checkbox-2"
              >
                <input
                  type="checkbox"
                  id="checkbox-2"
                  class="text-indigo-600 rounded focus:ring focus:ring-indigo-500"
                />
                <span class="text-gray-700">Photoelectrics</span>
              </label>
              <label
                class="flex py-1 items-center space-x-2 cursor-pointer"
                for="checkbox-3"
              >
                <input
                  type="checkbox"
                  id="checkbox-3"
                  class="text-indigo-600 rounded focus:ring focus:ring-indigo-500"
                />
                <span class="text-gray-700">Majoritarainism</span>
              </label>
              <label
                class="flex py-1 items-center space-x-2 cursor-pointer"
                for="checkbox-3"
              >
                <input
                  type="checkbox"
                  id="checkbox-3"
                  class="text-indigo-600 rounded focus:ring focus:ring-indigo-500"
                />
                <span class="text-gray-700">Horror</span>
              </label>
              <div class="more-filters mt-4 text-xs text-custom">
                <a href="#">View 50 more ....</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Collapsible 2 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
            @click="toggleCollapse(1)"
          >
            Source
            <span>
              <svg
                fill="#FFFFFF"
                v-show="!collapsed[1]"
                height="15px"
                width="215x"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <svg
                v-show="collapsed[1]"
                fill="#FFFFFF"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.735 511.735"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <div v-if="hidden" class="p-4 bg-white border-t border-gray-200">
            Collapsable Content
          </div>
        </div>
        <!-- Collapsible 2 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
            @click="toggleCollapse(1)"
          >
            Locations
            <span>
              <svg
                fill="#FFFFFF"
                v-show="!collapsed[1]"
                height="15px"
                width="215x"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <svg
                v-show="collapsed[1]"
                fill="#FFFFFF"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.735 511.735"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <div v-if="hidden" class="p-4 bg-white border-t border-gray-200">
            Collapsable Content
          </div>
        </div>
        <!-- Collapsible 2 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
            @click="toggleCollapse(1)"
          >
            Land Mark
            <span>
              <svg
                fill="#FFFFFF"
                v-show="!collapsed[1]"
                height="15px"
                width="215x"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <svg
                v-show="collapsed[1]"
                fill="#FFFFFF"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.735 511.735"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <div v-if="hidden" class="p-4 bg-white border-t border-gray-200">
            Collapsable Content
          </div>
        </div>
        <!-- Collapsible 3 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
            @click="toggleCollapse(1)"
          >
            College
            <span>
              <svg
                fill="#FFFFFF"
                v-show="!collapsed[1]"
                height="15px"
                width="215x"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <svg
                v-show="hidden"
                fill="#FFFFFF"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.735 511.735"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <div v-if="hiddent" class="p-4 bg-white border-t border-gray-200">
            Collapsable Content
          </div>
        </div>
        <!-- Add other collapsibles here -->
      </div>
    </div>
  </div>
</template>