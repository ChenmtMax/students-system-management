<template>
  <div class="add-student content" id="add-student">
    <form action="#" id="add-student-form" class="add-student-form">
      <div>
        <label for="name">姓名</label>
        <input type="text" name="name" autocomplete="off">
      </div>
      <div class="sex">
        <label for="sex">性别</label>
        <input type="radio" name="sex" checked value="0">
        <span>男</span>
        <input type="radio" name="sex" value="1"><span>女</span>
      </div>
      <div>
        <label for="sNo">学号</label>
        <input type="text" id="sNo" name="sNo">
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" name="email">
      </div>
      <div>
        <label for="birth">出生年</label>
        <input type="text" id="birth" name="birth">
      </div>
      <div>
        <label for="phone">手机号</label>
        <input type="text" id="phone" name="phone">
      </div>
      <div>
        <label for="address">住址</label>
        <input type="text" id="address" name="address">
      </div>
      <div>
        <label for=""></label>
        <input type="submit" value="提交" class="btn" id="add-submit">
        <input type="reset" value="重置" class="btn">
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
