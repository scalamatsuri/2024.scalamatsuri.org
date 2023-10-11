<template>
  <div class="skelton__container">
    <div class="skelton__text">
      <div class="shcedule_skelton skelton__title" />
      <div class="shcedule_skelton skelton__description" />
    </div>
    <div class="skelton__speaker">
      <div class="skelton__avator" />
      <div class="skelton__speaker-info">
        <div class="shcedule_skelton skelton__speaker-name" />
        <div class="shcedule_skelton skelton__speaker-sns" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .shcedule_skelton {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(#fff, 0.5), transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }
}
.skelton__container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skelton__text {
  flex: 0 1 70%;
    @media screen and (max-width: 819px) {
      flex: 0 1 100%;
  }
}
.skelton__title {
  width: 100%;
  height: 22px;
  border-radius: 2px;
  background: #d9d9d9;
}
.skelton__description {
  width: 80%;
  height: 14px;
  border-radius: 2px;
  margin-top: .5em;
  background: #d9d9d9;
}

.skelton__speaker {
  flex: 0 1 15%;
  height: 100%;
  display: flex;

      @media screen and (max-width: 819px) {
      flex: 0 1 30%;
      margin-top: 16px;
  }

}

.skelton__avator {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d9d9d9;
}

.skelton__speaker-info {
  flex: 0 0 calc(100% - 40px);
  align-content: space-around
}

.skelton__speaker-name {
  height: 14px;
  width: 100%;
  border-radius: 2px;
  margin-left: 10px;
  margin-top: 4px;
  background: #d9d9d9;
}
.skelton__speaker-sns {
  height: 10px;
  width: 80%;
  border-radius: 2px;
  margin-left: 8px;
  margin-top: 8px;
  background: #d9d9d9;
}

// animations
@keyframes skeleton-animation {
  0% {transform: translateX(-100%)}
  100%{ transform: translateX(100%)}
}
</style>
