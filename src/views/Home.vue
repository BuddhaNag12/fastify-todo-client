<template>
  <div class="contact">
    <section id="first">
      <div class="container flex flex-col justify-center items-center">
        <h1 class="text-xl font-bold">Todos</h1>
        <form @submit.prevent="addTodo" class="flex flex-col items-center">
          <input
            type="text"
            name="todoName"
            id="todoName"
            v-model="state.title"
            class="p-4 m-2 outline-none focus:border-red-400 shadow-md transition-all border-2 flex-1 block w-full rounded sm:text-sm"
            placeholder="Todo Title"
            autocomplete="off"
          />
          <span>{{ state.title }}</span>

          <button
            type="submit"
            class="p-4 rounded-lg focus:border-pink-700 border transition-all text-white focus:outline-none bg-accent-light"
          >
            Add todo
          </button>
        </form>

        <div v-if="state.loading">Loading...</div>

        <ul v-else class="flex flex-col lg:w-2/4 w-full border-2 mt-2">
          <div
            class="flex flex-row justify-between items-center m-2"
            v-for="item in state.data"
            :key="item._id"
          >
            <li
              class="cursor-pointer bg-accent-dark rounded p-2 text-white text-lg"
              :class="item.done ? 'line-through text-primary-red-800' : ''"
              @click="toggleTodo(item._id, item.title, item.done)"
            >
              {{ item.title }}
            </li>
            <button
              @click="deleteTodo(item._id)"
              class="transition-all shadow-lg bg-gradient-to-br from-gray-300 to-accent-code outline-none focus:accent-dark bg-primary-light text-white p-2"
            >
              remove
            </button>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>

<script >
import { defineComponent, onBeforeMount, reactive } from "vue";

import axios from "axios";

export default defineComponent({
  name: "Home",

  setup() {
    const state = reactive({
      data: [],
      loading: false,
      title: "",
      cacheData: [],
    });
    const api = "https://fastify-vue3-frncmlqaf-buddhanag12.vercel.app/";

    function getData() {
      state.loading = true;
      axios.get(api).then((res) => {
        state.data = res.data;
        state.loading = false;
      });
    }
    function addTodo() {
      if (!state.title) {
        alert('Add some todo first');
        return;
      } else
        axios
          .post(`${api}add`, {
            title: state.title,
            done: false,
          })
          .then(() => {
            getData();
            state.title = "";
          });
    }
    function toggleTodo(id, title, done) {
      axios
        .post(`${api}update/` + id, {
          title: title,
          done: (done = !done),
        })
        .then(() => {
          getData();
        });
    }
    function deleteTodo(id) {
      state.loading = true;
      axios.post(`${api}delete/` + id).then(() => {
        state.loading = false;
        getData();
      });
    }
    onBeforeMount(() => {
      getData();
    });
    return {
      state,
      addTodo,
      toggleTodo,
      deleteTodo,
    };
  },
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>