<template>
  <div>名前を入力してルームに入室しよう</div>
  <div v-for="room in rooms" :key="room.id">
    <button @click="enterRoom(`${room.id}`)">ルーム{{ room.id }}</button>
  </div>
  <form>
    <label>
      name
      <input v-model="form.name" type="text" />
    </label>
  </form>
</template>

<script lang="ts">
import { getRooms, enter } from "../apis/rooms_api";
import { defineComponent } from "vue";

import Room from "../models/rooms";

export default defineComponent({
  data() {
    return {
      form: {
        name: "" as string,
      },
      rooms: [] as Room[],
    };
  },
  async created() {
    this.rooms = await getRooms();
  },

  methods: {
    async enterRoom(roomId: string) {
      await enter(this.form, roomId);
      this.form.name = "";
      this.$router.push(`/room/${roomId}`);
    },
  },
});
</script>
