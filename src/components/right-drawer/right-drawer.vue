<template>
  <q-list padding class="text-primary">
    <q-item
      clickable
      v-ripple
      active-class="my-menu-link"
      class="bg-secondary text-black"
    >
      <q-item-section avatar>
        <q-icon name="add" />
      </q-item-section>

      <q-item-section>Create a Course</q-item-section>
    </q-item>

    <q-item clickable v-ripple active-class="my-menu-link">
      <q-item-section avatar>
        <q-icon name="golf_course" />
      </q-item-section>

      <q-item-section>My Courses</q-item-section>
    </q-item>

    <q-item clickable v-ripple active-class="my-menu-link">
      <q-item-section avatar>
        <q-icon name="settings" />
      </q-item-section>

      <q-item-section>Settings</q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      active-class="my-menu-link"
      class="absolute-bottom"
    >
      <q-item-section avatar>
        <q-icon name="logout" />
      </q-item-section>

      <q-item-section>Logout</q-item-section>
    </q-item>
  </q-list>
</template>
