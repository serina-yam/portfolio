<template>
  <div>
    <h1>Skills</h1>
    <div class="graph-cont">
      <div class="container">
        <div class="content-left">
          <h2>HTML5</h2>
          <!-- <img src="../../assets/html.png"> -->
          <v-divider
            vertical
          ></v-divider>
        </div>
        <div class="content-right">
          <div class="bar bar1">70%</div>
        </div>
      </div>
      <div class="container">
        <div class="content-left">
          <h2>CSS3</h2>
          <!-- <img src="../../assets/css.png"> -->
          <v-divider
            vertical
          ></v-divider>
        </div>
        <div class="content-right">
          <div class="bar bar1">70%</div>
        </div>
      </div>
      <div class="container">
        <div class="content-left">
          <h2>javascript</h2>
          <!-- <img src="../../assets/java-script.png"> -->
          <v-divider
            vertical
          ></v-divider>
        </div>
        <div class="content-right">
          <div class="bar bar1">70%</div>
        </div>
      </div>
      <div class="container">
        <div class="content-left">
          <h2>Java</h2>
          <!-- <img src="../../assets/java.png"> -->
          <v-divider
            vertical
          ></v-divider>
        </div>
        <div class="content-right">
          <div class="bar bar2">80%</div>
        </div>
      </div>
      <div class="container">
        <div class="content-left">
          <h2>Python</h2>
          <!-- <img src="../../assets/python.png"> -->
          <v-divider
            vertical
          ></v-divider>
        </div>
        <div class="content-right">
          <div class="bar bar3">20%</div>
        </div>
      </div>
      <div class="container">
        <div class="content-left">
          <h2>SQL</h2>
          <!-- <img src="../../assets/sql.png"> -->
          <v-divider
            vertical
          ></v-divider>
        </div>
        <div class="content-right">
          <div class="bar bar4">50%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);

  img {
    height: 4.5rem;
    margin: .2rem;
  }

  h1 {
    margin: 50px 0;
  }

  h2 {
    width: 15rem;
  }

  ul {
    list-style: none;
  }

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    animation: 1s anim-lightspeed-in ease forwards;
  }

  .content-left {
    display: flex;
    align-items: center;
    width: 30%;
    min-width: 300px;
  }

  .content-right {
    width: 70%;
  }

  /* vuetify */
  .theme--light.v-divider {
    border-color: rgba(101, 98, 106, 1);
  }

  .v-divider--vertical {
    border-width: 0 0.3rem 0 0;
    margin: -1px;
  }
  /* graph  */
  .graph-cont{
    width: calc(100% - 40px);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  h1,h2,h3{
    text-align: center;
    color: #34495e;
  }
  .bar{
    height: 3.0rem;
    max-width: 80.0rem;
    line-height: 3.0rem;
    font-size: 1.2rem;
    color: #fff;
    padding: 0 0 0 15px;
    position: relative;
  }
  .bar::before{
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    height: 45px;
    top: 0;
    z-index: -2;
    background: #ecf0f1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .bar::after{
    content: '';
    background: #BCDFF2;
    height: 45px;
    transition: 0.7s;
    display: block;
    width: 100%;
    -webkit-animation: bar-before 1 1.8s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .bar1::after{
    max-width: 70%;
  }
  .bar2::after{
    max-width: 80%;
  }
  .bar3::after{
    max-width: 20%;
  }
  .bar4::after{
    max-width: 50%;
  }
  @-webkit-keyframes bar-before{
    0%{
      width: 0px;
    }
    100%{
      width: 100%;
    }
  }

  .how-cont{
    width: calc(100% - 40px);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  code {
    padding: 5px;
    background: #ecf0f1;
    display: block;
  }
  pre{
    padding: 0;
    margin: 0;
  }
</style>


