<template>
  <div
    id="events"
    class="flex flex-col relative"
    :style="`min-width: ${distanceBetweenBaselineDates}px;`"
  >
    <!--  md:-mt-screen -mt-96 -->
    <div class="h-24"></div>
    <event-row
      v-for="event in $store.getters.filteredEvents"
      :key="event.eventString.substring(0, 30)"
      :event="event"
    ></event-row>
    <div style="height: 70vh"></div>
  </div>
</template>

<script lang="ts">
import EventRow from "./EventRow.vue";
import Vue from "vue";
import DrawerHeader from "../Drawer/DrawerHeader.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: { EventRow, DrawerHeader },
  computed: {
    ...mapGetters(["distanceBetweenBaselineDates"]),
  },
});
</script>

<style>
/* appearing */
.eventRow-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.eventRow-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
}

/* appear at / disappear to */
.eventRow-enter-from,
.eventRow-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.eventRow {
  margin-top: 5px;
}

.eventRow:hover .eventBar {
  @apply opacity-90 shadow-lg;
}

.eventRow:hover .photoBar {
  @apply opacity-90 shadow-lg;
}

.eventBar {
  border-radius: 5px;
  height: 10px;
  flex-shrink: 0;
}

.eventTitle {
  font-family: system-ui;
  font-size: 80%;
  white-space: nowrap;
}

.eventDate {
  color: #93979a;
  font-family: system-ui;
  font-size: 80%;
  margin: 0px 0px 0px 8px;
  white-space: nowrap;
}

.eventTitle a {
  color: white;
}
</style>