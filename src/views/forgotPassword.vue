<template>
  <div id="forgotPassword">     
    
 <div class="block container">
       <div class="block_box">
        <p>Забыли пароль</p>
        <div>
            <form action="#">
                <label for="e-mail" class="text">Эл. адрес *</label>
                <br>
                <br>
                <input type="text" id="e-mail" name="e-mail" value="johndoe@gmail.com" class="input">
            </form>
            <br>
            <div class="button_active">
                <div class="button_reset">
                    <a href="#">Сбросить пароль</a>
                </div>
                <div class="back">
                    <a href="#">Вернуться к авторизации</a>
                </div>
            </div>
        </div>
       </div>
    </div>

  </div>
</template>


<style scoped>
@import '../assets/forgot_password/fonts/Lab-Grotesque-font/stylesheet.css';
@import '../assets/forgot_password/css/_block.css';
@import '../assets/forgot_password/css/body_block.css';
</style>