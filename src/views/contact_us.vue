<template>
  <div id="contact_us">     

    <div class="block_contact container">
            <p class="p">Связаться с нами</p>
        <div class="text_boxes">
            <div>
                <p class="p">Электронная почта</p>
                <a href="#">riddi@mail.com</a>
            </div>
            <div>
                <p class="p">Номер телефона</p>
                <p>+99 899 999-99-99, <br> +998 71 254-07-27</p>
                             
            </div>
            <div>
                <p class="p">Адресс</p>
                <p>100015, Узбекистан, Ташкент, ул. Чехова, д. 21-3. (Ориентир: Hi-Tech Bank)</p>
            </div>
            <div>
                <p class="p">Режим работы</p>
                <p>с 10:00 до 20:00, выходной воскресенье</p>
            </div>
        </div>
        <div class="map_active">
            <p class="p">Карта проезда</p>
            <img src="../assets/contact_us/img/_img_map.jpg" alt="map">
        </div>
        <div class="text_form">
            <p class="p">или отправить сообщение:</p>
            <form action="#">
                <div class="horizontal-form">
                    <div class="form-element">
                        <label for="name">Имя и фамилия</label><br><br>
                        <input type="f-lname" value="John Doe">
                    </div>
                    <div class="form-element">
                        <label for="name">Электронная почта</label><br><br>
                        <input type="email" value="johndoe@gmail.com">
                    </div>
                    <div class="form-element">
                        <label for="name">Номер телефона</label><br><br>
                        <input type="phonenumber" value="+99899 999-99-99">
                    </div>
                </div>
                <div class="horizontal-form-message">
                    <div>
                        <label for="name">Ваше сообщение</label><br><br>
                        <textarea name="name" id="" cols="950" rows="50">Some text</textarea>
                    </div>
                </div>
            </form>
            <div class="button">
                <div class="button-box">
                    <a href="#">Отправить</a>
                </div>
            </div>
        </div>
    </div>
   

  </div>
</template>


<style scoped>

@import '../assets/contact_us/fonts/Lab-Grotesque-font/stylesheet.css';
@import '../assets/contact_us/css/_block.css';
@import '../assets/contact_us/css/body_block.css';

</style>