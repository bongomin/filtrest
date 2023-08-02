<script setup>
import { ref } from "vue";
import { useSidebar } from "../composables/useSidebar";
import CountrySelector from "../components/CountrySector.vue";
import CollapsableInterest from "../components/CollapsableInterests.vue";

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

const emotions = ref([
  { id: 5, name: "Happy", tree: [] },
  { id: 6, name: "Sad", tree: [] },
  { id: 7, name: "Nervous", tree: [] },
  { id: 8, name: "Surprised", tree: [] },
]);

const places = ref([
  { id: 101, name: "Taj Mahal", tree: [] },
  { id: 102, name: "Egyptian Pyramids", tree: [] },
  { id: 103, name: "Eiffel Tower", tree: [] },
  { id: 104, name: "Great Wall of China", tree: [] },
  { id: 105, name: "Statue of Liberty", tree: [] },
  { id: 106, name: "Colosseum", tree: [] },
  { id: 107, name: "Sydney Opera House", tree: [] },
  { id: 108, name: "Sagrada Família", tree: [] },
]);

const colleges = ref([
  { id: 201, name: "Harvard University", tree: [] },
  { id: 202, name: "Stanford University", tree: [] },
  { id: 203, name: "University of Oxford", tree: [] },
  { id: 204, name: "Cambridge", tree: [] },
  { id: 205, name: "University of Tokyo", tree: [] },
  { id: 206, name: "Princeton University", tree: [] },
]);

const years = ref([
  { id: 301, name: "2023", tree: [] },
  { id: 302, name: "2022", tree: [] },
  { id: 303, name: "2021", tree: [] },
  { id: 304, name: "2020", tree: [] },
  { id: 305, name: "2019", tree: [] },
  { id: 306, name: "2018", tree: [] },
]);



// Functions
async function updateTree(interest, index) {
  toggleFilterSelection(interest.name);
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
            { id: 3, name: "Rugbay", subTree: [] }
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
    const selectedTreeItem = interest.subTree ? interest.subTree : interest.miniTree;
    if (selectedTreeItem?.length === 0) {
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
          selectedTreeItem.push({
            id: 301,
            name: "Calvin Harris:",
            miniTree: [],
          });
          break;
        case "Actions":
          selectedTreeItem.push({
            id: 301,
            name: "Mission Impossible",
            miniTree: [],
          });
          break;
        case "Basketball":
          selectedTreeItem.push({
            id: 301,
            name: "Philadelphia 76ers",
            miniTree: [],
          });
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
  emit("updateTree", interests.value, filter);
};

// Sidebar and Styling
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
      <CountrySelector />
      <div class="flex flex-col p-2 space-y-4">
        <!-- Collapsible 1 -->

        <div class="collapsables">
          <CollapsableInterest
            :interests="interests"
            :buttonText="'Interests'"
            :collapseId="1"
            @updateParentTree="updateTree"
          />
        </div>
        <!-- Collapsible 2 -->
        <div class="collapsables">
          <CollapsableInterest
            :interests="emotions"
            :buttonText="'Emotion/Mood'"
            :collapseId="2"
            @updateParentTree="updateTree"
          />
        </div>
        <!-- Collapsible 3 -->
        <div class="collapsables">
          <CollapsableInterest
            :interests="places"
            :buttonText="'Place/Land mark'"
            :collapseId="3"
            @updateParentTree="updateTree"
          />
        </div>
        <!-- Collapsible 4 -->
        <div class="collapsables">
          <CollapsableInterest
            :interests="colleges"
            :buttonText="'College / Company'"
            :collapseId="4"
            @updateParentTree="updateTree"
          />
        </div>
        <!-- Collapsible 5 -->
        <div class="collapsables">
          <CollapsableInterest
            :interests="years"
            :buttonText="'Date / Stamp'"
            :collapseId="5"
            @updateParentTree="updateTree"
          />
        </div>
      </div>
    </div>
  </div>
</template>