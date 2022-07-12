<template>
  <button @click="login">login</button>
  <button @click="fetchUser">user</button>
  <div>{{user}}</div>
  <button @click="logout">logout</button>
</template>

<script setup lang="ts">
let user = ref();
let loginRefetch;
let logoutRefetch;
let userRefetch;

const login = async () => {
  if (loginRefetch) {
    await loginRefetch();
  } else {
    const { refresh } = await useFetch('/api/login', { method: 'POST' });
    loginRefetch = refresh;
  }
};

const logout = async () => {
  if (logoutRefetch) {
    await logoutRefetch();
  } else {
    const { refresh } = await useFetch('/api/logout', { method: 'POST' });
    logoutRefetch = refresh;
  }
};

const fetchUser = async () => {
  let res;
  if (userRefetch) {
    res = await userRefetch();
    console.log(res.value);
  } else {
    const result = await useFetch('/api/user');
    userRefetch = result.refresh;
    res = result.data;
  }
  console.log(res);
  user.value = res;
};
</script>
