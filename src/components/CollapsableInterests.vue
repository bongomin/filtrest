<template>
  <div class="collapsables">
    <button
      class="flex text-white items-center justify-between w-full px-4 py-2 font-medium text-left bg-custom-500 hover:bg-custom-600 focus:outline-none shadow-md"
      @click="toggleCollapse"
    >
      {{ buttonText }}
      <span>
        <svg
          fill="#FFFFFF"
          v-show="!collapsed[collapseId]"
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
          v-show="collapsed[collapseId]"
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
      v-if="collapsed[collapseId]"
      class="p-2 bg-white border-t border-gray-200"
    >
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
              <label :for="'checkbox-' + treeItem.id" class="text-gray-700">
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
                  <label :for="'checkbox-' + item.id" class="text-gray-700">
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
</template>

<script setup>
import { ref, defineProps, defineEmits, reactive, toRefs } from "vue";
const selectedFilters = reactive([]);
const test = reactive([]);

const emit = defineEmits();

// Props
const props = defineProps(["interests", "buttonText", "collapseId"]);

const collapsed = ref({
  1: true,
});

function toggleCollapse(collapseId) {
  collapsed.value[props.collapseId] = !collapsed.value[props.collapseId];
}

function updateTree(interest, index) {
  emit("updateParentTree", interest, index);
}

const toggleFilterSelection = (filter) => {
  const exists = selectedFilters.includes(filter);
  if (exists) {
    const index = selectedFilters.indexOf(filter);
    selectedFilters.splice(index, 1);
  } else {
    selectedFilters.push(filter);
  }
};
</script>
