<template>
  <main class="ammo">
    <ammo-boosty />
    <ammo-changelog :updates="updates.feed.entry" />
    <ammo-table :data="new_api.feed.entry" />
  </main>
</template>
<script>
import AmmoTable from "~/components/AmmoTable.vue";
import AmmoBoosty from "~/components/AmmoBoosty.vue";
import AmmoChangelog from "~/components/AmmoChangelog.vue";


export default {
  name: 'Ammo',
  components: {
    AmmoTable,
    AmmoBoosty,
    AmmoChangelog,
  },
  async asyncData({ $axios }) {
    return {
      new_api: await $axios.$get(
        'https://spreadsheets.google.com/feeds/list/1SEbOTq23G9PMl9RZYoCbH_932H9QLYGsrp1myCJ6AVU/1/public/values?alt=json'
      ),
      updates: await $axios.$get(
        'https://spreadsheets.google.com/feeds/list/1SEbOTq23G9PMl9RZYoCbH_932H9QLYGsrp1myCJ6AVU/3/public/values?alt=json'
      ),
    }
  },
}
</script>
<style>
.ammo {
  background-color: #0e0e0e;
  width: 100%;
  position: relative;
}
</style>
