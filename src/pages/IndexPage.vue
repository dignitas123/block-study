<template>
  <q-page class="column justify-evenly">
    <div class="col fit">
      <q-parallax :height="300" src="~/assets/wildwest.jpg">
        <template #content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: scope.percentScrolled * 60 + '%',
              left: 0,
              right: 0,
            }"
          >
            <div
              class="text-h3 montague-font text-center bg-white q-pa-xs q-ma-md"
              :class="{ 'text-h5': $q.screen.lt.sm }"
            >
              Find Courses for your needs
            </div>
          </div>
        </template>
      </q-parallax>
    </div>
    <div class="col q-ma-md">
      <div class="text-h4 q-mb-md">Recommended Courses for you</div>
      <div class="q-pa-md row items-start q-gutter-md">
        <CourseCard
          v-for="course in courses"
          :key="course.title"
          class="q-ma-md"
          :title="course.title"
          :stars="course.stars"
          :creator="course.creator"
          :price="course.price"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { courses } from './courses';
import CourseCard from 'src/components/course-card/course-card.vue';
</script>
