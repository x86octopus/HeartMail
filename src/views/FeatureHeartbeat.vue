<template>
  <div class="my-12">
    <a id="live">
      <div class="bg-hm-darkblue p-8">
        <div class="max-w-6xl container mx-auto sm:pt-2">
          <div class="flex flex-items-center mb-4">
            <div class="rectangle bg-hm-lightgreen rounded ml-20">
              <div
                :key="triggerPulse"
                class="circle bg-hm-bluegreen pulse"
              ></div>
            </div>
            <div class="w-1/2 text-left px-16">
              <h1 class="font-bold text-white text-5xl leading-tight mb-4">
                This is a live heartbeat.
              </h1>

              <p class="text-hm-lightgreen text-xl">
                View your heartbeat by entering your Fitbit user ID below.
              </p>

              <button
                @click="doPulse()"
                class="mt-5 bg-hm-blue hover:bg-hm-green text-white font-bold py-2 px-8 border-b-4 border-hm-green hover:border-hm-blue rounded"
              >
                See your heartbeat.
              </button>
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
