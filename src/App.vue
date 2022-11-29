<template>
  <nav>
    <router-link to="/access">Access</router-link> |
    <router-link to="/roles">Roles</router-link> |
    <router-link to="/users">Users</router-link>
  </nav>
  <router-view/>
</template>

<style>
  @import './main.css';
</style>
