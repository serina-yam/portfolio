<template>
  <div class="team-boxed">
    <div class="container">
      <div class="people">
        <div class="col-md-6 col-lg-4 item">
          <div class="box">
            <img class="rounded-circle" src="../../assets/demo1.jpg" />
            <h3 class="name">Serina Yamamoto</h3>
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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.team-boxed {
    color:#313437;
    background-color:#eef4f7;
    min-height: 100vh;
  }

  .team-boxed p {
    color:#7d8285;
  }

  .team-boxed .people {
    padding:50px 0;
  }

  .team-boxed .item {
    display: inline;
  }

  .team-boxed .item .box {
    text-align:center;
    padding:30px;
    background-color:#fff;
    margin-bottom:30px;
  }

  .team-boxed .item .name {
    font-weight:bold;
    margin-top:28px;
    margin-bottom:8px;
    color:inherit;
  }

  .team-boxed .item .title {
    text-transform:uppercase;
    font-weight:bold;
    color:#d0d0d0;
    letter-spacing:2px;
    font-size:13px;
  }

  .team-boxed .item .description {
    font-size:15px;
    margin-top:15px;
    margin-bottom:20px;
  }

  .team-boxed .item img {
    max-width:160px;
  }

  .team-boxed .social {
    font-size:18px;
    color:#a2a8ae;
  }

  .team-boxed .social a {
    color:inherit;
    margin:0 10px;
    display:inline-block;
    opacity:0.7;
  }
</style>
