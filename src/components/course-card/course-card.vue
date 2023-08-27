<template>
  <q-card class="course-card" flat bordered>
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6">
          {{ title }}
        </div>
      </div>
      <q-rating
        flat
        :model-value="stars"
        color="primary"
        :max="5"
        icon="star_border"
        readonly
        size="xs"
      />
      <div class="text-subtitle1">
        {{ creator }}
      </div>
    </q-card-section>

    <q-card-actions class="flex justify-between">
      <div class="text-caption">{{ price }} $</div>
      <q-btn flat color="primary" icon="shopping_cart"> Add to cart </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  stars: number;
  creator: string;
  price: number;
}>();
</script>

<style lang="scss" scoped>
.course-card {
  width: 300px;
}
</style>
