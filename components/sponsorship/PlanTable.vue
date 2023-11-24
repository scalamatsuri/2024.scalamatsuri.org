<i18n lang="yaml">
</i18n>

<template>
  <section class="section plan">
    <h2 class="section_title">
      <span class="section_title_inner">スポンサープラン</span>
    </h2>
    <div class="section_scroll">
      <table class="section_table2 section_table2-wide">
        <thead>
          <tr>
            <th colspan="3" />
            <th v-for="p in plans" :key="p.name_kana">
              <p :class="'color ' + p.color">{{ p.name }}<span>{{ p.name_kana }}</span></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="3">金額</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.price"></td>
          </tr>
          <tr>
            <th rowspan="2">Webサイト掲載</th>
            <th>ロゴ画像</th>
            <th />
            <td v-for="p in plans" :key="p.name_kana" v-html="p.web_logo_view_html"></td>
          </tr>
          <tr>
            <th>広告ページ</th>
            <th>
              <span>サービス紹介や<br />リクルーティング</span>
            </th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.web_advertisement"></td>
          </tr>
          <tr>
            <th rowspan="2">スライド掲載</th>
            <th>オープニング</th>
            <th>注目が集まる場面</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.slide_opening_html"></td>
          </tr>
          <tr>
            <th>セッション間<br />CMスライド</th>
            <th />
            <td v-for="p in plans" :key="p.name_kana" v-html="p.slide_cm"></td>
          </tr>
          <tr>
            <th>スポンサーセッション</th>
            <th />
            <th />
            <td v-for="p in plans" :key="p.name_kana" v-html="p.sponser_session"></td>
          </tr>
          <!-- <tr> -->
          <!--   <th>懇親会</th> -->
          <!--   <th>冒頭</th> -->
          <!--   <th>スポンサー名読み上げ</th> -->
          <!--   <td v-for="p in plans" :key="p.name_kana" v-html="p.read_sponser"></td> -->
          <!-- </tr> -->
          <tr>
            <th colspan="3">
              バーチャルブース 15万<br />
              最大5チャンネルまで
            </th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.virtual_booth"></td>
          </tr>
          <tr>
            <th colspan="3">さてらいとスポンサー</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.satellite_sponsor"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

</template>

<script setup lang="ts">
const { t } = useI18n()

interface Plan {
  name: String,
  name_kana: String,
  color: String,
  price: String,
  web_logo_view_html: String,
  web_advertisement: String,
  slide_opening_html: String,
  slide_cm: String,
  sponser_session: String,
  read_sponser: String,
  virtual_booth: String,
  satellite_sponsor: String,
}

const { plans } = defineProps({
  plans: Array<Plan>
})

</script>

<style lang="scss" scoped>
.section_table2 {
  width: 100%;
  margin-top: 60px;
  th, td {
    border: 1px solid #eee;

  }
  thead {
    th {
      font-weight: bold;
      line-height: normal;
      font-size: 26px;
      text-align: center;
      letter-spacing: 0.1em;
      padding: 15px;
      span {
        font-size: 14px;
        display: block;
      }
    }
  }
  tbody {
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.1em;
    th {
      text-align: left;
      padding: 15px 18px;

    }
    td {
      text-align: center;
      padding: 15px 18px;
    }
  }
  &-alignL {
    tbody {
      td {
        text-align: left;
      }
    }
  }
}

.plan_note {
  margin-top: 25px;
  font-size: 14px;
  letter-spacing: 0.1em;
}

$viewport: 820px;
@media screen and (max-width: $viewport - 1) {
  .section_table2 {
    margin: 0 -20px;
    width: calc(100% + 40px);
    &-wide {
      width: 900px;
    }
    thead {
      th {
        font-size: 18px;
        span {
          font-size: 12px;
        }
      }
    }
  }
}


.color_shogun {
  color: #E74E5E;
}
.color_tairou {
  color: #EE892C;
}
.color_daimyo {
  color: #3CAD8B;
}
.color_samurai {
  color: #2989CF;
}
.color_inro {
  color: #2989CF;
}
.color_ninja {
  color: #593BD1;
}
.color_new {
  color: #BD3844;
}


</style>
