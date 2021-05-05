<template>
  <div id="gallery">
    <h1>Gallery</h1>
   <div class="cards">
      <div class="card">
        <div class="card__image-holder">
          <img class="card__image" src="../../assets/blog1.jpg" alt="blog1" />
        </div>
        <div class="card-title">
          <a href="#" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            あさぎいろの図書館
            <small>wordpress</small>
          </h2>
        </div>
        <div class="card-flap flap1">
          <div class="card-description">
            This grid is an attempt to make something nice that works on touch
            devices. Ignoring hover states when they're not available etc.
          </div>
          <div class="card-flap flap2">
            <div class="card-actions">
              <button @click="onClick">Read more</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__image-holder">
          <img
            class="card__image"
            src="../../assets/blog1.jpg"
            alt="blog2"
          />
        </div>
        <div class="card-title">
          <a href="#" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            あさぎいろの図書館
            <small>wordpress</small>
          </h2>
        </div>
        <div class="card-flap flap1">
          <div class="card-description">
            This grid is an attempt to make something nice that works on touch
            devices. Ignoring hover states when they're not available etc.
          </div>
          <div class="card-flap flap2">
            <div class="card-actions">
              <a href="#" class="btn">Read more</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__image-holder">
          <img
            class="card__image"
            src="../../assets/blog1.jpg"
            alt="blog3"
          />
        </div>
        <div class="card-title">
          <a href="#" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            あさぎいろの図書館
            <small>wordpress</small>
          </h2>
        </div>
        <div class="card-flap flap1">
          <div class="card-description">
            This grid is an attempt to make something nice that works on touch
            devices. Ignoring hover states when they're not available etc.
          </div>
          <div class="card-flap flap2">
            <div class="card-actions">
              <a href="#" class="btn">Read more</a>
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
// export default {
  // //jQueryからVueに書き換え
  //   $(document).ready(function() {
  //   var zindex = 3;

  //   $('div.card').click(function(e) {
  //     e.preventDefault();

  //     var isShowing = false;

  //     if ($(this).hasClass('show')) {
  //       isShowing = true;
  //     }

  //     if ($('div.cards').hasClass('showing')) {
  //       // a card is already in view
  //       $('div.card.show').removeClass('show');

  //       if (isShowing) {
  //         // this card was showing - reset the grid
  //         $('div.cards').removeClass('showing');
  //       } else {
  //         // this card isn't showing - get in with it
  //         $(this)
  //           .css({ zIndex: zindex })
  //           .addClass('show');
  //       }

  //       zindex++;
  //     } else {
  //       // no cards in view
  //       $('div.cards').addClass('showing');
  //       $(this)
  //         .css({ zIndex: zindex })
  //         .addClass('show');

  //       zindex++;
  //     }
  //   });
  // });
// }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

  #gallery {
    color:#313437;
    background-color:#eef4f7;
    min-height: 100vh;
    font-size: 100%;
  }

  h1 {
    padding: 50px 0;
    text-align: center;
  }

  body {
    background: #dce1df;
    color: #4f585e;
    text-rendering: optimizeLegibility;
  }
  a.btn {
    background: #D897A2;
    border-radius: 4px;
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
    display: inline-block;
    padding: 6px 30px 8px;
    position: relative;
    text-decoration: none;
    transition: all 0.1s 0s ease-out;
  }
  .no-touch a.btn:hover {
    background: #913B58;
    box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
    transform: translateY(-2px);
    transition: all 0.25s 0s ease-out;
  }
  .no-touch a.btn:active,
  a.btn:active {
    background: #913B58;
    box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.25);
    transform: translate3d(0, 1px, 0);
    transition: all 0.025s 0s ease-out;
  }
  div.cards {
    margin: 80px auto;
    max-width: 960px;
    text-align: center;
  }
  div.card {
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin: 8px;
    max-width: 300px;
    perspective: 1000;
    position: relative;
    text-align: left;
    transition: all 0.3s 0s ease-in;
    width: 300px;
    z-index: 1;
  }
  div.card img {
    max-width: 298px;
  }
  div.card .card__image-holder {
    background: rgba(0, 0, 0, 0.1);
    height: 0;
    padding-bottom: 75%;
  }
  div.card div.card-title {
    background: #ffffff;
    padding: 6px 15px 10px;
    position: relative;
    z-index: 0;
  }
  div.card div.card-title a.toggle-info {
    border-radius: 32px;
    height: 32px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 10px;
    width: 32px;
  }
  div.card div.card-title a.toggle-info span {
    background: #ffffff;
    display: block;
    height: 2px;
    position: absolute;
    top: 16px;
    transition: all 0.15s 0s ease-out;
    width: 12px;
  }
  div.card div.card-title a.toggle-info span.left {
    right: 14px;
    transform: rotate(45deg);
  }
  div.card div.card-title a.toggle-info span.right {
    left: 14px;
    transform: rotate(-45deg);
  }
  div.card div.card-title h2 {
    font-size: 20px;
    letter-spacing: -0.05em;
    margin: 0;
    padding: 0;
  }
  div.card div.card-title h2 small {
    display: block;
    font-size: 18px;
    letter-spacing: -0.025em;
  }
  div.card div.card-description {
    padding: 0 15px 10px;
    position: relative;
    font-size: 14px;
  }
  div.card div.card-actions {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.075);
    padding: 10px 15px 20px;
    text-align: center;
  }
  div.card div.card-flap {
    background: #d9d9d9;
    position: absolute;
    width: 100%;
    transform-origin: top;
    transform: rotateX(-90deg);
  }
  div.card div.flap1 {
    transition: all 0.3s 0.3s ease-out;
    z-index: -1;
  }
  div.card div.flap2 {
    transition: all 0.3s 0s ease-out;
    z-index: -2;
  }
  div.cards.showing div.card {
    cursor: pointer;
    opacity: 0.6;
    transform: scale(0.88);
  }
  .no-touch div.cards.showing div.card:hover {
    opacity: 0.94;
    transform: scale(0.92);
  }
  div.card.show {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
  div.card.show div.card-title a.toggle-info {
    background: #ff6666 !important;
  }
  div.card.show div.card-title a.toggle-info span {
    top: 15px;
  }
  div.card.show div.card-title a.toggle-info span.left {
    right: 10px;
  }
  div.card.show div.card-title a.toggle-info span.right {
    left: 10px;
  }
  div.card.show div.card-flap {
    background: #ffffff;
    transform: rotateX(0deg);
  }
  div.card.show div.flap1 {
    transition: all 0.3s 0s ease-out;
  }
  div.card.show div.flap2 {
    transition: all 0.3s 0.2s ease-out;
  }
</style>


