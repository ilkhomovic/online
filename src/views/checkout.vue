<template>
  <div id="checkout">
    <div class="block_checkout container">
      <p class="p">ОФОРМЛЕНИЕ ЗАКАЗА</p>
      <form action="#">
        <div class="horizontal-form">
          <div>
            <label for="name" class="label">имя</label>
            <br />
            <input type="text" name="name" id="name" class="input" />
            <br />
            <br />
            <label for="addres" class="label">Адрес</label>
            <br />
            <input type="text" name="addres" id="addres" class="input" />
            <br />
            <br />
            <label for="country" class="label">страна</label>
            <br />
            <select name="country" id="country" class="placeholder">
              <option value class="country-text"></option>
              <option value class="country-text">Afghanistan</option>
              <option value class="country-text">Terkey</option>
              <option value class="country-text">Uzbekistan</option>
            </select>
            <br />
            <br />
            <label for="postcode" class="label">почтовый индекс</label>
            <br />
            <input type="text" name="postcode" id="postcode" class="input" />

            <div class="pay">
              <p class="p">оплата</p>
              <a href="#">
                <img src="../assets/checkout/img/_icon_yandex.svg" alt />
              </a>
              <a href="#">
                <img src="../assets/checkout/img/_icon_payme.svg" alt class="icon-pay" />
              </a>
              <a href="#">
                <img src="../assets/checkout/img/_icon_MIR.svg" alt="..." class="icon-pay" />
              </a>
              <a href="#">
                <img src="../assets/checkout/img/_icon_VISA.svg" alt class="icon-pay" />
              </a>
              <a href="#">
                <img src="../assets/checkout/img/_icon_MASTER_CARD.svg" alt class="icon-pay" />
              </a>
            </div>
          </div>

          <div>
            <label for="Surname" class="label">Фамилия</label>
            <br />
            <input type="text" name="Surname" id="Surname" class="input" />
            <br />
            <br />
            <label for="addres" class="label">город</label>
            <br />
            <input type="text" name="town" id="town" class="input" />
            <br />
            <br />
            <label for="State" class="label">штат / провинция</label>
            <br />
            <input type="text" name="State" id="State" class="input" />
            <br />
            <br />
            <label for="phone-number" class="label">номер телефона</label>
            <br />
            <input type="text" name="phone-number" id="phone-number" class="input" />
          </div>

          <div class="box">
            <div class="container">
              <div class="price">
                <p class="p">итог заказа</p>
              </div>
              <div class="hr"></div>
              <div class="price">
                <p>2 предмета</p>
                <p>58$</p>
              </div>
              <div class="price">
                <p>Перевозка</p>
                <p>5$</p>
              </div>
              <div class="hr"></div>
              <div class="price">
                <h5>Итог</h5>
                <p>63$</p>
              </div>
              <div class="hr"></div>
              <div class="promo_code">
                <p>Введите код подарочного сертификата / промо-код</p>
                <form action="#">
                  <div class="button">
                    <input type="text" class="input-with-button" />
                    <div class="button-text">
                      <a href="#">применять</a>
                    </div>
                  </div>
                </form>
              </div>
              <div class="hr"></div>
              <div class="checkbox">
                <form action="#">
                  <p>
                    <input type="checkbox" class="checkbox-check" />
                    Нажимая "Оформить заказ", я соглашаюсь с
                    <b>публичным договором оферты</b>
                  </p>
                </form>
              </div>
              <div class="button-end-box">
                <a href="#">Оформить заказ</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>

@import '../assets/checkout/css/_block.css';
@import '../assets/checkout/css/body_block.css';
</style>