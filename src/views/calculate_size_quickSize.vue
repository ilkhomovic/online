<template>
  <div id="calculate_size">     
  <div class="block">

        <div class="div-class">
            <div class="chose-size">
            
                <div>
                    <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon_neck.svg" alt="neck"></a>
                    <p>Шея</p>
                </div>
                <div class="box">
                    <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon_chest.svg" alt="chest"></a>
                    <p>грудь</p>
                </div>
                <div>
                    <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon_cuff.svg" alt="cuff"></a>
                    <p>запястье</p>
                </div>
                <div>
                    <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon_back.svg" alt="back"></a>
                    <p>ширина плеч</p>
                </div>
                <div>
                    <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon_shirtl.svg" alt="shirtl"></a>
                    <p>ширина плеч</p>
                </div>
                <div>
                    <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon_waist.svg" alt="waist"></a>
                    <p>Талия</p>
                </div>
                <a href="#"  class="duwn"><img src="../assets/calculate_size_quickSize/img/_icon_down.svg" alt="duwn"></a>
            </div>
            
            <div class="active-shirt">
                <img src="../assets/calculate_size_quickSize/img/_img_calculate-size.jpg" alt="size-shirt">  
            </div>
        </div>
        
        

        <div class="write-size shadow">
            <div class="text-size">
                <div class="container">
                    <div class="text">
                        <h4>Быстрий размер</h4>
                        <a href="#"><img src="../assets/calculate_size_quickSize/img/_icon-exit.svg" alt="exit"></a>
                    </div>
                    <div>
                        <p><b>Быстрий размер</b> помогает вам создать профиль измерения с помощью трех простых измерений,
                            основанных на данных тысяч довольных клиентов.
                       </p>
                    </div>
                    <br>
                    <div>
                        <form action="#">
                            <label for="text" class="label">Мой рост</label><br>
                            <input type="text" value="178" class="input"> <label for="name" class="label-text">см</label><br><br>
                            <label for="text" class="label">Мой вес</label><br>
                            <input type="text" value="68" class="input"> <label for="name" class="label-text">кг</label><br><br>
                            <label for="text" class="label">Размер воротника</label><br>
                            <input type="text" value="40" class="input"> <label for="name" class="label-text">см</label>
                        </form>
                    </div> 
                    
                </div><br>
                <div class="button container">
                    <div class="fast-size">
                        <a href="#">Рассчитайте мои измерения</a>
                    </div>
                </div> <br>
                <p class="container">Нет, спасибо, я бы лучше добавил все измерения вручную</p>
            </div>
        </div>
    </div>


  </div>
</template>


<style scoped>
@import '../assets/calculate_size_quickSize/fonts/Lab-Grotesque-font/stylesheet.css';
@import '../assets/calculate_size_quickSize/css/_block.css';
@import '../assets/calculate_size_quickSize/css/body_block.css';
</style>