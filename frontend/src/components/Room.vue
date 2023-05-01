<template>
  <div>{{ "ルーム" + $route.params.id }}</div>
  <div>部屋に入っている人の名前</div>
  <div v-for="user in users" :key="user.id">
    <div>{{ "ユーザー名" + user.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import User from "../models/users";
import { getRoomInUsers } from "../apis/rooms_api";

import { useRoute } from "vue-router";

export default defineComponent({
  data() {
    return {
      users: [] as User[],
      updateTimer: 0,
    };
  },
  async created() {
    const route = useRoute();
    const { id } = route.params;
    this.users = await getRoomInUsers(id as string);
  },

  async mounted() {
    // 宣言したタイマーにsetIntervalで実行する処理を代入
    this.updateTimer = window.setInterval(async () => {
      await this.fetchAPIData();
    }, 300);
  },
  methods: {
    async fetchAPIData(): Promise<void> {
      // API実行処理
      this.users = await getRoomInUsers(this.$route.params.id as string);
    },
  },

  unmounted() {
    // ページを移動した際（コンポーネントインスタンスがアンマウントされた際）にはsetIntervalを削除する
    // Vue3のライフサイクルフック unmountedでタイマーをクリアする
    clearInterval(this.updateTimer);
  },
});
</script>
