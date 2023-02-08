<template>
  <nav>
    <va-navbar color="#282F69" style="height: 100px;">
      <template #left>
        <va-navbar-item class="logo">
          <img src="~assets/img/AB_EF__5842.gif" />
        </va-navbar-item>
      </template>
      <template #center>
        <va-button-group preset="primary" class="layout">
          <div class="row my_row">
            <va-navbar-item v-if="route.path === '/'">
              Программа
            </va-navbar-item>
            <va-button to="/" v-else>
              Программа
            </va-button>

            <va-navbar-item v-if="route.path === '/about'">
              Занятия
            </va-navbar-item>
            <va-button to="/about" v-else>
              Занятия
            </va-button>
            <va-navbar-item v-if="route.path === '/post'">
              Практика
            </va-navbar-item>
            <va-button to="/post" v-else>
              Практика
            </va-button>

            <va-navbar-item v-if="route.path === '/store'">
              Материалы
            </va-navbar-item>
            <va-button to="/store" v-else>
              Материалы
            </va-button>

            <va-navbar-item v-if="route.path === '/services'">
              Задания
            </va-navbar-item>
            <va-button to="/services" v-else>
              Задания
            </va-button>
          </div>
        </va-button-group>
      </template>
      <template #right>
        <div v-if="token_bool == false">
          <va-button @click="changeShowModal">
            Login
          </va-button>
          <va-modal v-model="showModal" title="Login" hide-default-actions>
            <va-form
                style="width: 300px;"
                tag="form"
                @submit.prevent="handleSubmit"
            >
              <va-input
                  label="email"
                  v-model="email"
              />
              <va-input
                  class="mt-3"
                  type="password"
                  label="Password"
                  v-model="password"
              />
              <va-button type="submit" class="mt-3">
                Login
              </va-button>
            </va-form>
          </va-modal>
        </div>
        <div v-else>
          <va-button-group preset="primary" class="layout">
            <span v-if="route.path === '/user/cabinet'" class="cabinet">
              User cabinet
            </span>
            <va-button to="/user/cabinet" v-else>
              User cabinet
            </va-button>
            <va-button @click="logout"  size="small">
              Logout
            </va-button>
          </va-button-group>
        </div>
      </template>
    </va-navbar>
  </nav>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {store} from  '@/store/index';
import axios from 'axios';
const token_cookie = useCookie('token');
const route = useRoute();
const email = ref('');
const password = ref('');
const showModal = ref(false);
const token_bool = ref(false);
const changeShowModal = async () => {
  showModal.value = true;
}
const logout = async () => {
  token_bool.value = false;
  token_cookie.value = '';
}
const handleSubmit = async () => {
  const response = await axios.post('login?email=' + email.value + '&password=' + password.value);
  token_cookie.value = response.data.token;
  //console.log(response.data.token);
  token_bool.value = true;
}
onMounted(function () {
  token_bool.value = localStorage.hasOwnProperty('token');
  console.log(token_cookie.value);
})

</script>