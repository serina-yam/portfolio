<template>
<!-- class名は、全て仮  -->
  <nav class="navbar">
    <div class="">
      <router-link to="/" exact-active-class="active">
    <img src="../assets/home.png" width="50" height="50" class="home">
      </router-link>
    </div>
    <div>
      <ul>
        <li><router-link to="/Skills" class="" exact-active-class="active">Skills</router-link></li>
        <li><router-link to="/Career" class="" exact-active-class="active">Career</router-link></li>
        <li><router-link to="/Gallery" class="" exact-active-class="active">Gallery</router-link></li>
        <li><router-link to="/Contact" class="" exact-active-class="active">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  a {
   text-decoration: none;
   color: #65626A;
  }

  ul {
   list-style: none;
   margin: 0;
   display: flex;
  }

  li {
   margin: 0 0 0 1.5rem;
  }

  .navbar {
    height: 5.0rem;
    font-size: 1.4rem;
  }

  .home {
    padding: 0.1rem;
  }

</style>