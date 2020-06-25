<template>
  <div class="home">
      <div class="home_block">
        <div class="block_child container">
            <div class="block_text_H4" style="margin-top: 13rem;">
                <h4>Создай свой стиль. Наслаждайся</h4>
                <div class="block_button">
                    <div class="block_button_child">
                        <a href="#">Создать Рубашку</a>
                    </div>
                </div>
            </div>
            <div class="empty">
                <div>
                    <a href="#"><img src="../assets/images/_ellipse.svg" alt=""></a>
                </div>
            </div>
        </div>
        
    </div>

    <!-------------Second_Block------------->

    <div class="second_block">
        <div class="second_block_child">
            <div class="second_block_img_shirt">
                <img src="../assets/images/second_block_Shirt.jpg" alt="shirt">
            </div>
            <div class="second_block_text container">
                <div class="second_block_text_p-1">
                    <p>Будь в тренде</p>
                </div>
                <div class="second_block_text_p">
                    <p> Изысканный дизайн, высококачественные ткани, отличная посадка, 
                        соответствие модным тенденциям - главные составляющие коллекций одежды. 
                        При создании моделей мы ориентируемся на потребности наших покупателей, 
                        выпускаем ограниченные партии, предлагаем систему подбора элементов для своих рубашек и 
                        постоянно отслеживаем изменения тенденций в деловой моде.
                    </p>
                </div>
                <div class="second_block_text_button">
                    <div class="second_block_text_button_a">
                        <a href="#">Узнат больше</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-------------Third_Block------------->

    <div class="third_block">
        <div class="text-h4 container">
            <h4>Как работает наш конструктор рубашек</h4>
        </div>
        <div class="third_block_container container">
            <div class="block_container_figure">
                <div><img src="../assets/images/third_block_figures_1.svg" alt="..."></div>
                <div class="block_container_figure_text container">
                    <div class="block_container_figure_bigtext">Выбор ткани</div>
                    <div class="block_container_figure_smolltext">Выберите ваши любимые более 150 изысканных и полностью сделанные в Италии ткани.</div>
                </div>
            </div>
            <div class="block_container_figure">
                <div><img src="../assets/images/third_block_figures_2.svg" alt=""></div>
                <div class="block_container_figure_text container" >
                    <div class="block_container_figure_bigtext">Настройка</div>
                    <div class="block_container_figure_smolltext">Используйте конфигуратор, чтобы выбрать каждую деталь и проверить конечный результат в режиме реального времени.</div>
                </div>
            </div>
            <div class="block_container_figure">
                <div><img src="../assets/images/third_block_figures_3.svg" alt=""></div>
                <div class="block_container_figure_text container" >
                    <div class="block_container_figure_bigtext">Мерка</div>
                    <div class="block_container_figure_smolltext">Выберите ваши любимые более 150 изысканных и полностью сделанные в Италии ткани.</div>
                </div>
            </div>
        </div>
        <div class="third_block_button container">
            <div class="third_block_button_text" >
                <a href="#">Создать Рубашку</a>
            </div>
        </div>
    </div>

    <!------------Fourth_Block------------->

    <div class="fourth_block">
        <div class="fourth_block_text container">
              <p>Каждый предмет одежды Riddi изготавливается вручную нашими мастерами, и каждой детали уделяется необходимое внимание.</p>         
        </div>
        <div class="fourth_block_button container">
            <div class="fourth_block_button_text">
                 <a href="#">смотреть видео</a>
            </div>
        </div>
    </div>

    <!------------Fifth_Block-------------->

    
    <div class="fifth_block_box_1 container">
        <div>
            <div class="box_img_1"></div>
            <div class="box_bigtext">
            <div class="text">Безупречное качество</div>
            </div>
            <div class="box_smolltext">
            <div class="stext">Наши ткани поставляются только несколькими лучшими фабриками по всему миру. 
                Каждая деталь тщательно изготовлена с использованием прецизионных технологий 
                и самого современного оборудования.</div>
            </div>
            <div class="button_box">
                <div class="box_div">
                    <div><a href="#">Подробнее</a></div>
                </div>
            </div>
        </div>
        
        <div>
            <div class="box_img_2"></div>
            <div class="box_bigtext">
            <div class="text">Мерка за минуту</div>
            </div>
            <div class="box_smolltext"> 
                <div class="stext">Забудьте об измерительных лентах - наш алгоритм SmartFit 
                    поможет рассчитать ваш истинный размер менее чем за минуту. 
                    Ваша покупка защищена нашей гарантией соответствия.</div>       
            </div>
            <div class="button_box">
                <div class="box_div">
                    <div><a href="#">Подробнее</a></div>
                </div>
            </div>
        </div>

        <div>
            <div class="box_img_3"></div>
            <div class="box_bigtext">
                <div class="text">наши работы</div>
            </div>
            <div class="box_smolltext">
                <div class="stext">Столкнувшись с проблемами в вашей форме? Не уверены в своих выборах?
                        Мы только на расстоянии одного клика.</div>
            </div>
            <div class="fifth_block_box_3">
                <div class="button_box">
                    <div class="box_div">
                        <div><a href="#">Подробнее</a></div>
                    </div>
                </div>
            </div>
        </div> 
        
    </div>         

    <!----------------END----------------->
 
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>



<style scoped>
@import '../assets/css/_block.css';
@import '../assets/css/_block_media.css';
@import '../assets/css/_fifth_block.css';
@import '../assets/css/_fourth_block.css';
@import '../assets/css/_second_block.css';
@import '../assets/css/_second_block_media.css';
@import '../assets/css/_third_block.css';
@import '../assets/css/_third_block_media.css';
</style>>
