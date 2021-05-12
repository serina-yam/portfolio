<template>
  <div id="skills">
    <h1>Skills</h1>
    <div class="contentContainer">
      <div class="skillBar">
        <h4>HTML5</h4>
        <div class="skillBarContainer">
          <div class="skillBarValue value-70"></div>
        </div>
      </div>

      <div class="skillBar">
        <h4>CSS3</h4>
        <div class="skillBarContainer">
          <div class="skillBarValue value-60"></div>
        </div>
      </div>

      <div class="skillBar">
        <h4>javascript</h4>
        <div class="skillBarContainer">
          <div class="skillBarValue value-70"></div>
        </div>
      </div>

      <div class="skillBar">
        <h4>Java</h4>
        <div class="skillBarContainer">
          <div class="skillBarValue value-80"></div>
        </div>
      </div>

      <div class="skillBar">
        <h4>Python</h4>
        <div class="skillBarContainer">
          <div class="skillBarValue value-20"></div>
        </div>
      </div>

      <div class="skillBar">
        <h4>SQL</h4>
        <div class="skillBarContainer">
          <div class="skillBarValue value-50"></div>
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

  #skills {
    color:#313437;
    background-color:#eef4f7;
    min-height: 100vh;
  }

  h1 {
    padding: 50px 0;
    text-align: center;
  }
  /*///////////////////////////////////////////////////
      // Presentational Styles (Not Needed) \\
  ///////////////////////////////////////////////////*/


  .contentContainer {
      background: #fff;
      padding: 30px 80px;
      max-width: 600px;
      min-width: 150px;
      margin: 2vh auto;
      border-radius: 6px;
      /* border: solid 2px #dbdbdb; */
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
  }

  /*///////////////////////////////////////////////////
      // Skill Bars \\
  ///////////////////////////////////////////////////*/
  .skillBar {
      margin-bottom: 26px;
      margin-bottom: 1.66em;
  }
  .skillBar h4 {
      font-size: 21px;
      font-size: 2em;
      text-transform: none;
      /* font-family: Arial, Helvetica, sans-serif; */
      font-weight: bold;
      margin-bottom: 7px;
      margin-bottom: 0.33em;
  }

  .skillBarContainer {
      width: 100%;
      max-width: 600px;
      height: 35px;
      height: 3em;
      background: #e6eae3;
      background: #56ADDC;
      background: rgba(216, 151, 162, 0.2);
      overflow: hidden;
      border-radius: 5px;
  }

  .skillBarValue {
      height: 3em;
      float: left;
      background: #0866dc;
      background: #0866dc;
      background: rgba(86, 173, 220, 0.75);
  }

  /* Allowed values for the css skill bars */
  .value-00 {
      width: 0;
  }

  .value-10 {
      width: 10%;
  }

  .value-20 {
      width: 20%;
  }

  .value-30 {
      width: 30%;
  }

  .value-40 {
      width: 40%;
  }

  .value-50 {
      width: 50%;
  }

  .value-60 {
      width: 60%;
  }

  .value-70 {
      width: 70%;
  }

  .value-80 {
      width: 80%;
  }

  .value-90 {
      width: 90%;
  }

  .value-100 {
      width: 100%;
  }

  /*///////////////////////////////////////////////////
      // Animation \\
  ///////////////////////////////////////////////////*/
  @-webkit-keyframes slideIn {
      0% {
      width: 0;
      }
      25% {
      width: 100%;
      }
      100% {
      width: normal;
      }
  }
  @-moz-keyframes slideIn {
      0% {
      width: 0;
      }
      25% {
      width: 100%;
      }
      100% {
      width: normal;
      }
  }
  @-ms-keyframes slideIn {
      0% {
      width: 0;
      }
      25% {
      width: 100%;
      }
      100% {
      width: normal;
      }
  }
  @-o-keyframes slideIn {
      0% {
      width: 0;
      }
      25% {
      width: 100%;
      }
      100% {
      width: normal;
      }
  }
  @keyframes slideIn {
      0% {
      width: 0;
      }
      25% {
      width: 100%;
      }
      100% {
      width: normal;
      }
  }
  .skillBarValue {
      -webkit-animation: slideIn 2s;
      -moz-animation: slideIn 2s;
      -o-animation: slideIn 2s;
      animation: slideIn 2s;
  }
</style>


