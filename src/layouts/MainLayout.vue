<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="img:icons/favicon-128x128.png" size="md" />
          </q-avatar>
          BlockStudy
        </q-toolbar-title>

        <q-avatar class="cursor-pointer">
          <q-icon name="shopping_cart"></q-icon>
        </q-avatar>

        <q-avatar @click="toggleRightDrawer" class="cursor-pointer">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-toolbar>
      <q-bar class="fit q-pa-xs">
        <div
          class="row text-center"
          :class="{ column: $q.screen.lt.sm }"
          style="margin: 0 auto"
        >
          <div class="cursor-pointer q-mx-md">Blockchain</div>
          <div class="cursor-pointer q-mx-md">Trading</div>
          <div class="cursor-pointer q-mx-md">App Development</div>
        </div>
      </q-bar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <RightDrawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RightDrawer from 'src/components/right-drawer/right-drawer.vue';

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
