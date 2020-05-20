<template>
  <div class="a-list-items">
    <div
      class="a-list-items__item"
      v-for="item in items"
      :key="item.id"
      @click="onChange(item.id)"
      :class="{ active: item.id === selected }"
    >
      <div class="a-list-items__item__text">
        <p class="a-list-items__item__text__title">{{ item.title }}</p>
        <p class="a-list-items__item__text__price" v-if="item.price">
          {{ currencyFilter(item.price) }}
        </p>
      </div>
      <div class="a-item-items__item__icon" v-if="item.id === selected">
        <img src="@/assets/check.svg" alt="check" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    onChange(item) {
      this.$emit("onChange", item);
    },
  },
};
</script>
