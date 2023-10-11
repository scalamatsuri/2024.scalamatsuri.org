<template>
  <transition name="top" appear>
    <div v-if="showing" class="toast" @click.prevent="mergedOption.closeOnTap ? close() : null">
      <span class="check-icon" />
      <span class="text">
        {{ mergedOption.message }}
      </span>
      <div class="circle" :style="{ 'animation-duration': `${mergedOption.duration -80}ms` }" @click="close">
        <div class="circle-inner">
          <div class="remove icon" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const DEFAULT_OPT = {
  duration: 5000,
  message: '',
  closeOnTap: false
}

export default {
  DEFAULT_OPT: DEFAULT_OPT,
  data() {
    return {
      queue: [],
      option: {},
      showing: false
    }
  },
  computed: {
    mergedOption: function () {
      return Object.assign({}, DEFAULT_OPT, this.option)
    }
  },
  watch: {
    queue: function () {
      const pending = this.queue.length
      if (pending === 0) return

      this.showing = true
      this.option = this.queue[0]
      this.timeoutId = setTimeout(() => {
        this.showing = false
        this.timeoutId = null
        setTimeout(() => this.queue.shift())
      }, this.mergedOption.duration)
    }
  },
  methods: {
    close: function () {
      this.showing = false
      this.queue.shift()
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
    position: relative;
    width: 22px;
    height: 22px;
    background: #C8C8C8;
    color: #C8C8C8;
    line-height: 9px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    z-index: 1;
    margin-top: 2px;
    animation-duration: 8s;
}

.circle::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -11px;
    width: 22px;
    height: 22px;
    background: #ffffff;
    transform-origin: right 11px;
    z-index: 2;
    animation: rotate-circle-left 2s linear forwards;
    animation-duration: inherit;
}

.circle::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 11px;
    width: 24px;
    height: 24px;
    background: #ffffff;
    transform-origin: left 11px;
    z-index: 3;
    animation: rotate-circle-right 2s linear forwards;
    animation-duration: inherit;
}

.circle .circle-inner {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    padding-top: 3.8px;
    background: #fff;
    border-radius: 50%;
    z-index: 4;
}
@keyframes rotate-circle-right {
    0%   {
        transform: rotate(0deg);
        background: #ffffff;
    }
    50%  {
        transform: rotate(180deg);
        background: #ffffff;
    }
    50.01% {
        transform: rotate(360deg);
        background: #C8C8C8;
    }
    100% {
        transform: rotate(360deg);
        background: #C8C8C8;
    }
}

@keyframes rotate-circle-left {
    0%   { transform: rotate(0deg); }
    50%  { transform: rotate(0deg); }
    100% { transform: rotate(180deg); }
}

.remove.icon {
  color: #C8C8C8;
  position: absolute;
  top: 46%;
  left: 24%;
}

.remove.icon:before {
  content: '';
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.remove.icon:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

  .top-enter-active, .top-leave-active {
    transform: translateY(0);
    transition: transform .3s cubic-bezier(0.360, 0.100, 0.160, 1.000);
  }

  .top-enter, .top-leave-to {
    transform: translateY(-100px);
    will-change: transform;
  }

  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    min-width: 230px;
    min-height: 60px;
    max-width: 90vw;
    background-color: white;
    border-radius: 4px;
    text-align: left;
    padding: 14px 16px;
    color: #444;
    box-sizing: border-box;
    box-shadow: 0 0 3px -2px rgba(0, 0, 0, 0.85), 0 6px 6px -6px rgba(0, 0, 0, 0.85);
    z-index: 1000;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      border-radius: 4px 0 0 4px;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: #46D664;
    }
  }

  .check-icon {
    flex: 0 0 auto;
    position: relative;
    display: inline-block;
    line-height: 70px;
    padding-top: 0.5em;
    width: 24px;
    height: 24px;
    background-color: #46D664;
    border-radius: 50%;

    &::after {
      content: "";
      border-left: 1.8px solid #fff;
      display: block;
      border-bottom: 1.8px solid #fff;
      width: 10px;
      height: 5px;
      transform: rotate(-47deg);
      position: absolute;
      left: 28%;
      top: 38%;
    }
  }
  .text {
    flex: 1 0 auto;
    padding-left: 12px;
    padding-right: 6px;

  }
</style>
