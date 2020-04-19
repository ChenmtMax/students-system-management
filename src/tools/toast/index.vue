<template>
  <div class="wrap" v-if="over" :class="{fadeIn: showWrap, fadeOut: !showWrap}">
    <div v-if="type==='success'" style="color: #5CB85C">
      <span>✔</span> &nbsp; {{msg}}
    </div>
    <div v-if="type==='fail'" style="color: #D9534F;">
      <span>❌</span> &nbsp; {{msg}}
    </div>
    <div v-if="type==='info'" style="color: darkorange">
      <span>ℹ</span> &nbsp; {{msg}}
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .wrap {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
  }
  .fadeIn {
    animation: animation_in .25s;
  }
  .fadeOut {
    animation: animation_out .25s;
  }
  @keyframes animation_in {
    0% {
      opacity: 0;
      top: 25%;
    }
    100% {
      opacity: 1;
      top: 30%;
    }
  }
  @keyframes animation_out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
