<template>
  <div class="full">
    <div class="wrap">
      <div class="title">
        <h1>SERINA YAMAMOTO</h1>
        <h2>back-end engineer</h2>
      </div>
      <a href="" class="btn">CHECK MY WORK</a>
      <a id="tap">
        <img src="../../assets/tap.png">
      </a>
    </div>
  </div>
</template>

<style scoped>
  .full {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: url(../../assets/background.jpg);
    background-size: cover;
    background-position: center;
  }

  .wrap {
    display:flex;
    flex-flow: column;
    margin: 0;
    position: absolute;
    top: calc(35% - 0.5em);
    width: 100%;
  }

  .title {
    color: #fff;
  }

  h1 {
    text-align: center;
    letter-spacing: 1.0rem;
    font-size: 4.0rem;
    font-weight: 700;
  }

  h2 {
    text-align: center;
    margin: 1rem auto 0 auto;
  }

  a {
    color: #E95F5F;
    padding: 1rem 1.5rem;
  }

  #tap {
    margin: 1rem auto 0 auto;
  }

  .btn {
    border: 2px solid #fff;
    border-radius: 4;
    width: 20%;
    margin: 3rem auto 0 auto;
    padding: 1rem 0;
}

  .btn:hover {
  color: rgba(233, 95, 95, 1);
  background:rgba(255,255,255,0.8);
}

a img {
  height: 5rem;
}
</style>
