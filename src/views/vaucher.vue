<template>
 <div id="vaucher">     
       <div class="block container">
        <div>
            <p class="p">Подарочный сертификат</p>

            <p>
                Подарок для кого-то особенного? Или даже твой босс? Ответ - подарочная карта Riddi - 
                мы создадим учетную запись для получателя и зачислим сумму в баллы лояльности
            </p>
        </div>
        <div class="box_form">
            <div><img src="../assets/vaucher/img/_image.jpg" alt=""></div>
            <div class="form_text">
                <form action="#" class="_active">
                    <label for="fname"  class="text">ВАШЕ ИМЯ *</label>
                    <br>
                    
                    <input type="text" id="fname" name="fname" value="Marcus" class="input">
                    <br>
                    <br>
                    <label for="lname" class="text">ИМЯ ПОЛУЧАТЕЛЯ *</label>
                    <br>
                    
                    <input type="text" id="lname" name="lname" value="John" class="input">
                    <br>
                    <br>
                    <label for="e-mail" class="text">ЭЛЕКТРОННАЯ ПОЧТА ПОЛУЧАТЕЛЯ *</label>
                    <br>
                    
                    <input type="text" id="e-mail" name="e-mail" value="johndoe@gmail.com" class="input">
                    <br>
                    <br>
                    <label for="message" class="text">СООБЩЕНИЕ *</label>
                    <br>
                    <textarea name="message" id="message" cols="30" rows="10" class="input_sms"></textarea>
                </form>
                  
                  <div class="block_price">
                      <form action="#">
                          <label for="price" class="text">Сумма *</label>
                          <br>
                          <input type="text" id="price" name="price" value="100 000" class="input_price"> 
                          <label for="price" class="price-text">Сум</label>
                      </form>
                      <div class="button">
                          <a href="#">Добавить в корзину</a>
                      </div>
                  </div>
            </div>
        </div>
    </div>
 </div>
</template>


<style scoped>

@import '../assets/vaucher/css/_block.css';
@import '../assets/vaucher/css/body_block.css';
</style>