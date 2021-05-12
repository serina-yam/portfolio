<template>
  <div id="aboutMyself">
    <h1>About Myself</h1>
    <div class="container">
        <div class="box col-md-6 col-lg-4 item">
          <div class="box">
            <img class="rounded-circle" src="../../assets/demo2.png" />
            <h3 class="name"><label style="color:#913B58;"> S</label>erina  <label style="color:#913B58;">Y</label>amamoto</h3>
            <p class="title">back-end engeneer</p>
            <p class="description">
              デザイン面にも興味があり、様々な方向から考えられるスキルを持ったエンジニアを目指しています。<br>今回のポートフォリオは、jsのVue CLIで作成しました。実際に制作物を１つ作り上げたことでVue.jsへの理解が深まりました。<br>また、普段業務では意識しないデザイン面を考慮しながら完成させることができました。
            </p>
            <div class="social">
              <a href="#"><i class="fa fa-facebook-official"></i></a
              ><a href="#"><i class="fa fa-twitter"></i></a
              ><a href="#"><i class="fa fa-instagram"></i></a>
            </div>
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
  #aboutMyself {
    color:#313437;
    background-color:#F5F4F6;
    min-height: 100vh;
    text-align: center;
  }

  h1 {
    padding: 50px 0;
  }

  p {
    color:#7d8285;
  }

  .item {
    display: inline;
    padding:50px 0;
  }

  .item .box {
    text-align:center;
    padding:30px;
    background-color:#fff;
    margin-bottom:30px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
  }

  .item .name {
    font-weight:bold;
    margin-top:28px;
    margin-bottom:8px;
    color:inherit;
  }

  .item .title {
    text-transform:uppercase;
    font-weight:bold;
    color:#d0d0d0;
    letter-spacing:2px;
    font-size:13px;
  }

  .item .description {
    font-size:15px;
    margin-top:15px;
    margin-bottom:20px;
  }

  .item img {
    max-width:160px;
  }

  .social {
    font-size:18px;
    color:#a2a8ae;
  }

  .social a {
    color:inherit;
    margin:0 10px;
    display:inline-block;
    opacity:0.7;
  }
</style>
