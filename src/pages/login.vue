<!--
 * @Descripttion: 
 * @version: 
 * @Author: coding
 * @Date: 2023-05-31 09:46:04
 * @LastEditors: 
 * @LastEditTime: 2023-05-31 09:46:09
-->
<template>
    <h2> 这里是登录页面 </h2>
    <br />
    <router-link to="/">点击跳转至首页</router-link>
    <br /><br />
    <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'LoginPage'
    });
</script>