<template>
  <div class="app">
    <div class="top-menu">
      <router-link :to="'/'"><img src="./assets/virtus-logo.png" alt="virtus-logo"></router-link>
      <div class="right-part">
        <span class="icon-search"></span>
        <span class="icon-alarm"></span>
        <div class="user-image">
          <img src="./assets/image.png" alt="user-image">
          <span class="icon-down-arrow"></span>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="side-menu">
        <nav>
          <ul class="links-holder">
            <li>
              <router-link :to="'/'"><span class="icon-home"></span></router-link>
            </li>
            <li>
              <router-link :to="'/users'"><span class="icon-list"></span></router-link>
            </li>
            <li>
              <router-link :to="'/trello'"><span class="icon-group"></span></router-link>
            </li>
            <li>
              <router-link :to="'/status'"><span class="icon-menu"></span></router-link>
            </li>
            <li>
              <router-link :to="'/graph'"><span class="icon-arrow"></span></router-link>
            </li>
            <li>
              <router-link :to="'/message'"><span class="icon-email"></span></router-link>
            </li>
          </ul>
        </nav>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
  @import "assets/fonts/icomoon/style.css";

  @font-face {
    font-family: 'Icomoon';
    font-weight: normal;
    src:  local('Icomoon'), local('Icomoon-Regular');
    src:  url("assets/fonts/icomoon/fonts/icomoon.eot"),
    url("assets/fonts/icomoon/fonts/icomoon.woff") format('woff'),
    url("assets/fonts/icomoon/fonts/icomoon.ttf") format('truetype'),
    url("assets/fonts/icomoon/fonts/icomoon.svg") format('svg');
  }

  body{
    margin: 0;
  }

  .top-menu{
    background: #2f3242;
    padding: 30px 20px 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-part{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-size: 30px;

      .user-image{
        border-radius: 50%;
        width: 56px;
        height: 56px;
        overflow: hidden;
      }

      .icon-alarm{
        margin: 0 50px;
      }

      span{
        cursor: pointer;
      }
    }
  }

  .side-menu{
    background: #2e3141;
    padding-left: 20px;
    flex-basis: 55px;

    .links-holder{
      margin: 0;
      padding: 0;
      list-style-type: none;

      li{
        margin-bottom: 35px;

        &:nth-child(1){
          padding-top: 30px;
        }

        .router-link-exact-active{
          span{
            color: white;
          }
        }

        a{
          text-decoration: none;
        }

        span{
          color: #757da4;
          transition: .4s;
          font-size: 30px;

          &:hover{
            color: white;
          }
        }
      }
    }
  }

  .wrapper{
    display: flex;
    min-height: 100vh;
  }

</style>