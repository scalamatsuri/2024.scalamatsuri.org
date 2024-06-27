<template>
  <MainVisual title="ScalaMatsuri 2024 トレーニング・デイ" />
  <div class="section">
    <div class="organizer">
      <div class="recruit_logo">
        <img src="/img/sponsors/recruit.jpg" />
      </div>
      <div class="scalamatsuri_logo">
        <img src="/img/sponsors/scalamatsuri_logo.png" />
      </div>
    </div>
    <p class="section_text">
      「ScalaMatsuri 2024 トレーニング・デイ」を株式会社リクルート様と共同開催することとなりました！<br />
      講師には <a href="https://twitter.com/gakuzzzz" target="_blank">がくぞ</a>氏をお招きし、ScalaMatsuri 2024 を楽しむための Scala
      の基礎を学ぶことができます。<br />
      是非この機会に Scala の基礎知識を学び、ScalaMatsuri 2024 を存分にお楽しみください！
      <br /><br />
      日　時：<br />
      2024年6月7日(金) 13:00-17:00<br />
      参加費：<br />
      一般3,000円、学生1,000円<br />
      場　所：<br />
      〒102-0073 東京都千代田区九段北1-14-6 九段坂上KSビル
    </p>
    <br />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d405.0299375620895!2d139.7490111!3d35.6957235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c6a519e2959%3A0x9d3f196aca9058f2!2z44CSMTAyLTAwNzMg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Lmd5q615YyX77yR5LiB55uu77yR77yU4oiS77yWIOS5neauteWdguS4iktz44OT44Or!5e0!3m2!1sja!2sjp!4v1711867650503!5m2!1sja!2sjp"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    <br />
  </div>
  <div class="section">
    <h2 class="section_title">
      <span class="section_title_inner">講師紹介</span>
    </h2>
    <div class="speaker">
      <img src="https://pbs.twimg.com/profile_images/1431608839/ceb5e4f7-bec8-4a68-a86c-32d0c7ae4e22_400x400.png" class="speaker_icon" />
      <p class="speaker_name">がくぞ(gakuzzzz)</p>
      <br />
      <p>
        株式会社Tech to Value 代表 / アルプ株式会社 テックリード / Japan Scala Association 役員<br />
        様々なSaaS企業においてサービス開発から運用、開発組織のリードに従事。<br />
        Scalaにおいては2011年から利用しており、ScalaMatsuri を始め様々なイベントで登壇。日頃から Scala の普及に尽力している。
      </p>
      <p class="speaker_id">
        <a class="modal_speaker_sns" href="https://twitter.com/gakuzzzz" target="_blank">
          <img src="/img/common/icon-sns-x.svg" />
        </a>
        <a class="modal_speaker_sns" href="https://github.com/gakuzzzz" target="_blank">
          <img src="/img/common/icon-sns-git.svg" />
        </a>
      </p>
    </div>
  </div>
  <div class="section">
    <h2 class="section_title">
      <span class="section_title_inner">チケット</span>
    </h2>
    <br />
    <br />
    <p class="section_text">チケットは下記よりお求めください。</p>
    <div class="banner">
      <div class="banner_list">
        <a href="https://scalaconfjp.doorkeeper.jp/events/169208" target="_blank" class="banner_item banner_item-ticket">
          <span>トレーニング・デイ</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
pageMetaCheck()
</script>

<style lang="scss" scoped>
.organizer {
  display: flex;
}
.recruit_logo {
  padding: 20px;
}
.scalamatsuri_logo {
  > img {
    margin-top: 30px;
    width: 65%;
  }
}

.speaker {
  margin-top: 40px;
}
.speaker_icon {
  width: 50px;
  border-radius: 50px;
  float: left;
}
.speaker_name {
  // display: block;
  margin-left: 60px;
  font-size: 2rem;
  font-weight: bold;
}
.speaker_id {
  > a > img {
    width: 40px;
    // height: 30px;
    margin: 4px 2px 0 0;
  }
}

.banner {
  margin-top: 40px;
}
@media screen and (min-width: $headerViewport) {
  /* footer PC */
  .banner_list {
    display: flex;
  }
}
@media screen and (max-width: $headerViewport - 1) {
  /* footer SP */
  .banner_item {
    display: block;
    margin-bottom: 10px;
  }
}
.banner_item {
  flex: 20rem;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.05em;
  position: relative;
  padding: 17px 0;
  margin: 0px 20%;
  &:after {
    content: '';
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-image: url('/img/common/arrow-banner.svg');
  }
  span {
    background-position: center left;
    padding-left: 70px;
    display: inline-block;
    line-height: 54px;
    color: #fff;
  }
  &-ticket {
    background-color: #ff2600;
    span {
      background-image: url('/img/common/icon-happi.svg');
    }
  }
}
</style>
