<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="menu left">
        <router-link class="item" to="/">Payrolls</router-link>
      </div>
      <router-link class="menu center" to="/">
        <img
          src="../../assets/nomina.png"
          alt="Logo Payrolls"
          class="ui small image"
        />
      </router-link>
      <div class="menu right">
        <router-link class="item" to="/account">Hello, User</router-link>
        <span class="ui item logout">
          <i class="sign-out icon"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;

  .item {
    color: white;

    &:hover {
      color: #1fa1f1;
    }
  }

  .menu.left {
    width: 50%;
  }

  .menu.right {
    width: 50%;
    justify-content: flex-end;

    .logout:hover {
      cursor: pointer;
      i {
        color: red;
      }
    }
  }

  .menu.center {
    position: relative;
    background-color: #16212b;
    top: 15px;
    padding: 20px;
    margin: -20px;
    border-radius: 50%;

    &:hover {
      box-shadow: 0px 10px 10px -3px rgba($color: #000000, $alpha: 0.3);
      -webkit-box-shadow: 0px 10px 10px -3px rgba($color: #000000, $alpha: 0.3);
      -moz-box-shadow: 0px 10px 10px -3px rgba($color: #000000, $alpha: 0.3);
    }

    .ui.image {
      width: 40px;
    }
  }
}
</style>