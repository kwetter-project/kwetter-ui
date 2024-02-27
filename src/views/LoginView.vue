<template>
  <div class="wrapper">
    <div class="col">
      <img src="@/assets/logo.png" alt="" />
      <Input label="Username" type="text" v-model="username" />
      <Input label="Password" type="password" v-model="password" />
      <div class="row">
        <Button class="btn" @click="submitLogin">Login</Button>
        <Button class="btn">Register</Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
// import { login } from "@/api/user/login";
const router = useRouter();

const username = ref("");
const password = ref("");
const submitLogin = async () => {
  // try {
  //   const requestBody = { username: username, password: password };
  //   await login(requestBody);
  router.push("/");
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }
};
</script>
<style lang="scss" scoped>
img {
  width: 2rem;
}
.col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.btn {
  font-size: 14px;
  width: fit-content;
}
.row {
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
  width: 100%;
}
</style>
