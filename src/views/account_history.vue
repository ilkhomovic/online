<template>
  <div id="account_history">       
  
    <div class="block_history container">
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
       
        <div class="horizontale-table">
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
            <div class="border">
                <div class="table-th">
                    <p>Заказ</p>
                    <p>Дата заказа</p>
                    <p>Количество</p>
                    <h5 class="border-none">Стоимость</h5>
                </div>
                <div class="table-td">
                    <div class="text-img">
                        <img src="../assets/account_history/img/_img_table_.jpg" alt="">
                        <p>Blue ocean</p>
                    </div>
                    <div class="text-date">
                        <p>14 март 2020 | 10:00</p>
                    </div>
                    <div class="text-quantity">
                        <p>1</p>
                    </div>
                    <div class="text-prise">
                        <p>100 $</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<style scoped>
@import '../assets/account_history/fonts/Lab-Grotesque-font/stylesheet.css';
@import '../assets/account_history/css/_block.css';
@import '../assets/account_history/css/body_block.css';
</style>