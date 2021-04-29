<template>
  <nav class="profile-tab">
    <div class="profile-tab__wrap">
      <div class="profile-tab__list flex">
        <router-link to="/" class="profile-tab__link bold" exact-active-class="active">Home</router-link>
        <router-link to="/Skills" class="profile-tab__link bold" exact-active-class="active">Skills</router-link>
        <router-link to="/Experience" class="profile-tab__link bold" exact-active-class="active">Experience</router-link>
        <router-link to="/Works" class="profile-tab__link bold" exact-active-class="active">Works</router-link>
        <router-link to="/Posts" class="profile-tab__link bold" exact-active-class="active">Posts</router-link>
      </div>
    </div>
  </nav>
</template>