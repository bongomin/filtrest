<script setup>
import { ref } from "vue";
import { useSidebar } from "../composables/useSidebar";
import CountrySelector from "../components/CountrySector.vue";
const emit = defineEmits();

// Data properties
const collapsed = ref({
  1: true,
});

const selectedFilters = ref([]);

const interests = ref([
  { id: 1, name: "Food", tree: [] },
  { id: 2, name: "Music", tree: [] },
  { id: 3, name: "Movies", tree: [] },
  { id: 4, name: "Sports", tree: [] },
]);

// Functions
function toggleCollapse(collapseId) {
  collapsed.value[collapseId] = !collapsed.value[collapseId];
}

async function updateTree(interest, index) {
  toggleFilterSelection(interest.name)
  if (index === 0) {
    if (interest.tree.length === 0) {
      switch (interest.name) {
        case "Music":
          interest.tree.push(
            { id: 2, name: "Electronic", subTree: [] },
            { id: 3, name: "Rock", subTree: [] },
            { id: 1, name: "Hip-hop / Rap", subTree: [] },
            { id: 2, name: "Country", subTree: [] },
            { id: 3, name: "Classical", subTree: [] },
            { id: 1, name: "pop", subTree: [] }
          );
          break;
        case "Food":
          interest.tree.push(
            { id: 1, name: "Indian", subTree: [] },
            { id: 2, name: "Ugandan", subTree: [] },
            { id: 3, name: "Italian", subTree: [] },
            { id: 1, name: "Spanish", subTree: [] },
            { id: 2, name: "German", subTree: [] },
            { id: 3, name: "Japanese", subTree: [] }
          );
          break;
        case "Movies":
          interest.tree.push(
            { id: 1, name: "Actions", subTree: [] },
            { id: 2, name: "Comedy", subTree: [] },
            { id: 3, name: "Drama", subTree: [] },
            { id: 101, name: "Science Fiction", subTree: [] },
            { id: 102, name: "Fantasy", subTree: [] },
            { id: 103, name: "Animation", subTree: [] }
          );
          break;
        case "Sports":
          interest.tree.push(
            { id: 1, name: "Basketball", subTree: [] },
            { id: 2, name: "Football", subTree: [] },
            { id: 3, name: "Rugbay", subTree: [] },
          );
          break;
        default:
          // Handle other cases
          break;
      }
    } else {
      // Clear the subcategories when unchecked.
      interest.tree = [];
    }
  } else {
    const selectedTreeItem = interest.subTree;
    if (selectedTreeItem.length === 0) {
        switch (interest.name) {
      case "Indian":
        selectedTreeItem.push(
          { id: 201, name: "Chicken Tikka Masala", miniTree: [] },
          { id: 202, name: "Naan", miniTree: [] },
          { id: 203, name: "Samosa", miniTree: [] }
        );
        break;
      case "Snacks":
        selectedTreeItem.push(
          { id: 301, name: "Chips", miniTree: [] },
          { id: 302, name: "Popcorn", miniTree: [] }
        );
        break;
      case "Beverages":
        selectedTreeItem.push(
          { id: 401, name: "Soda", miniTree: [] },
          { id: 402, name: "Juice", miniTree: [] }
        );
        break;
      case "Desserts":
        selectedTreeItem.push({ id: 501, name: "Ice Cream", miniTree: [] });
        break;
      case "Electronic":
        selectedTreeItem.push({ id: 301, name: "Calvin Harris:", miniTree: [] });
        break;
      case "Actions":
        selectedTreeItem.push({ id: 301, name: "Mission Impossible", miniTree: [] });
        break;
       case "Basketball":
        selectedTreeItem.push({ id: 301, name: "Philadelphia 76ers", miniTree: [] });
        break;
      default:
        // Handle other cases
        break;
    }

    } else {
      interest.subTree = [];
    }
  }
}

const toggleFilterSelection = (filter) => {
  const exists = selectedFilters.value.includes(filter);
  if (exists) {
    const index = selectedFilters.value.indexOf(filter);
    selectedFilters.value.splice(index, 1);
  } else {
    selectedFilters.value.push(filter);
  }
  console.log('working');
  emit('updatePosts', interests.value,filter)
};


// Sidebar and Styling
const { isOpen } = useSidebar();
const activeClass = "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100";
const inactiveClass = "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100";
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
      <CountrySelector />
      <div class="flex flex-col p-2 space-y-4">
        <!-- Collapsible 1 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
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
                <!-- SVG path data for the arrow icon ... -->
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
                <!-- SVG path data for the arrow icon ... -->
              </svg>
            </span>
          </button>
          <div class="p-2 bg-white border-t border-gray-200">
            <!-- Search Field ... -->
            <div class="relative mb-4">
              <input
                type="text"
                class="w-full px-4 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                placeholder="Search interest..."
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

            <!-- Checkbox Items -->
            <div class="check-boxes py-1">
              <template
                v-for="interest in interests"
                :key="'interest-' + interest.id"
              >
                <label
                  class="flex py-2 items-center space-x-2 cursor-pointer border rounded px-4 my-2"
                  :for="'checkbox-' + interest.id"
                >
                  <input
                    type="checkbox"
                    :id="'checkbox-' + interest.id"
                    class="form-checkbox text-indigo-600 focus:ring focus:ring-indigo-500 h-4 w-4"
                    @change="updateTree(interest, 0)"
                  />
                  <span class="text-gray-700">{{ interest.name }}</span>
                </label>

                <!-- Render the tree items under each interest -->
                <ul class="ml-6 list-disc">
                  <li
                    v-for="treeItem in interest.tree"
                    :key="'tree-' + treeItem.id"
                    class="py-2 items-center space-x-2 list-none"
                  >
                    <input
                      type="checkbox"
                      :id="'checkbox-' + treeItem.id"
                      class="form-checkbox text-indigo-600 focus:ring focus:ring-indigo-500 h-4 w-4"
                      @change="updateTree(treeItem, 1)"
                    />
                    <label
                      :for="'checkbox-' + treeItem.id"
                      class="text-gray-700"
                    >
                      {{ treeItem.name }}
                    </label>
                    <!-- sub item -->
                    <ul class="ml-6 list-disc">
                      <li
                        v-for="item in treeItem.subTree"
                        :key="'tree-' + item.id"
                        class="flex py-2 items-center space-x-2"
                      >
                        <!-- Right arrow SVG icon -->
                       <input
                      type="checkbox"
                      :id="'checkbox-' + item.id"
                      class="form-checkbox text-indigo-600 focus:ring focus:ring-indigo-500 h-4 w-4"
                      @change="updateTree(item, 2)"
                    />
                        <label
                          :for="'checkbox-' + item.id"
                          class="text-gray-700"
                        >
                          {{ item.name }}
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </template>

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
            Emotion / Mood
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
            Place / Land Mark
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
            College /Company
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

        <!-- Collapsible 3 -->
        <div class="collapsables">
          <button
            class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
            @click="toggleCollapse(1)"
          >
            Date / Time STamp
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