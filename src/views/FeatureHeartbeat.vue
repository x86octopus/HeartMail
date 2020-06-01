<template>
  <div class="my-12">
    <a id="live">
      <div class="bg-hm-darkblue p-8">
        <div class="max-w-6xl container lg:mx-auto">
          <div class="flex items-center flex-wrap mb-4 sm:justify-center">
            <div class="rectangle bg-hm-lightgreen rounded">
              <div
                :key="triggerPulse"
                class="circle bg-hm-bluegreen pulse"
              ></div>
            </div>
            <div class="text-left md:ml-12">
              <h1 class="font-bold text-white text-5xl leading-tight my-8">
                This is a live heartbeat.
              </h1>

              <p class="text-hm-lightgreen leading-relaxed text-xl">
                Not a simulation, an animation, or a pattern. <br /><br />
                This is a living human’s heartbeat, in real time. <br /><br />
                This could be the heartbeat of the person that you love. 

              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { heartData } from "@/heartData.js";

export default {
  name: "FeatureHeartbeat",
  data: function() {
    return {
      triggerPulse: false,
      opening: false,
    };
  },
  methods: {
    doPulse: function() {
      this.triggerPulse = !this.triggerPulse;
    },
  },
  components: {},
  mounted: function() {
    heartData.start(this.doPulse);
  },
  beforeDestroy: function() {
    heartData.stop();
  },
};
</script>

<style scoped>
.rectangle {
  width: 300px;
  height: 300px;
  position: relative;
}

.rectangle .circle {
  border-radius: 100%;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 0px;
  left: 0px;
}

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  75% {
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  75% {
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-duration: 0.4s;
}
</style>
