<i18n lang="yaml"></i18n>

<template>
  <section class="section plan">
    <h2 class="section_title">
      <span class="section_title_inner">スポンサープラン</span>
    </h2>
    <div class="section_scroll">
      <table class="section_table2 section_table2-wide">
        <thead>
          <tr>
            <th colspan="2" />
            <th v-for="p in plans" :key="p.name_kana">
              <p :class="'color ' + p.color">
                {{ p.name }}<span>{{ p.name_kana }}</span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">金額</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.price"></td>
          </tr>
          <tr>
            <th colspan="2">招待枠</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.shoutai_waku"></td>
          </tr>
          <tr>
            <th rowspan="2">Webサイト掲載</th>
            <th>ロゴ画像</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.web_logo_view_html"></td>
          </tr>
          <tr>
            <th>広告ページ</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.web_advertisement"></td>
          </tr>
          <tr>
            <th rowspan="3">ロゴ・社名掲載</th>
            <th>スピーカーパネル</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.logo_panel"></td>
          </tr>
          <tr>
            <th>会場内装飾品</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.logo_sousyoku"></td>
          </tr>
          <tr>
            <th>エコバッグ</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.logo_eco_bag"></td>
          </tr>
          <tr>
            <th rowspan="2">スライド掲載</th>
            <th>オープニング</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.opening_call"></td>
          </tr>
          <tr>
            <th>セッション間<br />CMスライド</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.slide_cm"></td>
          </tr>
          <tr>
            <th colspan="2">常設ブース (25万円)</th>
            <td v-for="p in plans" :key="p.name_kana" v-html="p.booth"></td>
          </tr>
          <tr>
            <th colspan="2">宴スポンサー (20万円)</th>
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
  name: string
  name_kana: string
  color: string
  price: string
  shoutai_waku: string
  web_logo_view_html: string
  web_advertisement: string
  slide_opening_html: string
  slide_cm: string
  sponser_session: string
  read_sponser: string
  booth: string
  utage_sponsor: string
}

const { plans } = defineProps({
  plans: Array<Plan>,
})
</script>

<style lang="scss" scoped>
.section_table2 {
  width: 100%;
  margin-top: 60px;
  th,
  td {
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
  color: #e74e5e;
}
.color_tairou {
  color: #ee892c;
}
.color_daimyo {
  color: #3cad8b;
}
.color_samurai {
  color: #2989cf;
}
.color_inro {
  color: #2989cf;
}
.color_ninja {
  color: #593bd1;
}
.color_new {
  color: #bd3844;
}
</style>
