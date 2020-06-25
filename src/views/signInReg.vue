<template>
 <div id="signIn">     
      <div class="block container">
       <div class="block_box">
        <p class="p"> Вход / Регистрация </p>
        <div class="box_">
            <div class="active">
                <form action="#">
                    <label for="e-mail" class="text">Эл. адрес *</label>
                    <br>
                    <input type="text" id="e-mail" name="email" value="johndoe@gmail.com" class="input">
                    <br>
                    <br>
                    <label for="password" class="text">Пароль *</label>
                    <br>
                    <input type="password" id="password" name="password" value="**********" class="input">
                    <br>
                </form>
            </div>
            <div class="box_register">
                <div>
                    <a href="#">Регистрация</a>
                </div>
                <div>
                    <a href="#">Вход</a>
                </div>
            </div>
            <div class="forgot_password">
                <a href="#">Забыли свой пароль?</a>
            </div>
            <br>
            <div class="or">
                <div></div>
                <p>или</p>
                <div></div>
            </div>
            <div class="social_network">
                <div class="google">
                    <img src="../assets/sign_in_register/img/_icon_google.svg" alt="google">
                    <a href="#">Google</a>
                </div>
                <div class="facebook">
                    <img src="../assets/sign_in_register/img/_icon_facebook.svg" alt="facebook">
                    <a href="#">Facebook</a>
                </div>
            </div>
        </div>
       </div>
    </div>
 </div>
</template>


<style scoped>

@import '../assets/sign_in_register/css/_block.css';
@import '../assets/sign_in_register/css/body_block.css';
</style>