<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />-->
    <!-- <h3 class="navbar-title f18 dib">{{name}}</h3> -->
    <!-- <el-button class="navbar-button" @click="logout">退出</el-button> -->
    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click" @click="toggleIcon">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" />
          <span class="menu-title">
            <span>{{name}}</span>
            <i v-if="showIcon" class="el-icon-arrow-down el-icon--right user-avater-icon" />
            <i v-if="!showIcon" class="el-icon-arrow-up el-icon--right user-avater-icon" />
          </span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <router-link to="/">修改密码</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      showIcon: true
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "name"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    toggleIcon() {
      this.showIcon = !this.showIcon;
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login`);
    }
  }
};
</script>

<style lang="scss" scoped>
$theme-color: #666666;
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .navbar-title {
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 14px;
    color: $theme-color;
  }
  .navbar-button {
    border: 1px solid $theme-color;
    color: $theme-color;
    background: #fff;
    margin-right: 30px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    min-width: 130px;
    height: 100%;
    line-height: 60px;
    .right-menu-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-top: 10px;
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      width: 100%;
      .avatar-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu-title {
          margin: 0 0 0 20px;
          span {
            font-size: 16px;
            color: #666;
          }
        }
        .user-avater-icon {
          margin: 0 20px;
          color: #999;
        }
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
