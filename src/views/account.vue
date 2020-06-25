<template>
  <div id="account">     
    
    <div class="block container">
        <h4>изменить пароль</h4>
        
            <form action="#">
            <div class="horizontale-form">
                <div>
                    <label for="text" class="label-text">Текущий пароль</label><br>
                    <input type="password" class="input-text">
                </div>
                <div>
                    <label for="text" class="label-text">Новый пароль</label><br>
                    <input type="password" class="input-text">
                </div>
                <div>
                    <label for="text" class="label-text">Подтвердите новый пароль</label><br>
                    <input type="password" class="input-text">
                </div>
                <div class="button-change">
                    <a href="#">Изменить</a>
                </div>
            </div>
            </form>
        
        <div class="horizontale-text">
            <h4>Персональные данные</h4>
            <h4>История заказов</h4>
        </div>
        <p class="p">Вы еще не разместили заказы.</p>
        <div>
            <form action="#">
                <label for="name" class="label-text-2" >имя</label> <br>
                <input type="text" value="John" class="input-text"> <br><br>
                <label for="name" class="label-text-2">Фамилия</label><br>
                <input type="text" value="Harris" class="input-text" > <br><br>
                <label for="phonenumber" class="label-text-2">номер телефона</label> <br>
                <input type="text" value="+99899 999-99-99" class="input-text" > <br><br>
                <label for="email" class="label-text-2" >Email</label> <br>
                <input type="text" value="dimat61840@jalcemail.net" class="input-text" > <br><br>
                <label for="addres" class="label-text-2">адрес</label> <br> 
                <input type="text" class="input-text"> <br><br>
                <label for="sity" class="label-text-2"> город</label> <br>
                <input type="text" class="input-text" > <br><br>
                <label for="shtat" class="label-text-2">штат / провинция</label> <br>
                <input type="text" class="input-text" > <br><br>
                <label for="country" class="label-text-2">страна</label><br>
                <select name="country" id="country" class="placeholder">
                    <option value="" class="country-text"> </option>
                    <option value="" class="country-text">
                        Afghanistan
                    </option>
                    <option value="" class="country-text">
                        Terkey
                    </option>
                    <option value="" class="country-text">
                        Uzbekistan
                    </option>
                </select> <br><br>
                <label for="postcode" class="label-text-2">почтовый индекс</label> <br>
                <input type="text" class="input-text" > <br><br>
            </form>
            <br>
            <div class="button-change">
                <a href="#">Сохранить Изменения</a>
            </div>
        </div>
    </div>

  </div>
</template>


<style scoped>

@import '../assets/account/css/_block.css';
@import '../assets/account/css/body_block.css';
</style>