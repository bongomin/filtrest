<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" @change="toggleTree" />
      Show Categories
    </label>
    <div v-if="isChecked" class="tree">
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}
          <ul>
            <li v-for="item in category.items" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      categories: [
        {
          id: 1,
          name: 'Category 1',
          items: [
            { id: 11, name: 'Item 1.1' },
            { id: 12, name: 'Item 1.2' },
          ],
        },
        {
          id: 2,
          name: 'Category 2',
          items: [
            { id: 21, name: 'Item 2.1' },
            { id: 22, name: 'Item 2.2' },
          ],
        },
        // Add more categories and items as needed
      ],
    };
  },
  methods: {
    toggleTree() {
      // You can perform any additional actions here when the checkbox is clicked.
      // For now, we're just toggling the display of the tree.
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style>
/* Add your custom styles here */
.tree {
  margin-top: 10px;
}
</style>
