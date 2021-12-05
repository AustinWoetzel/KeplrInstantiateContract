<template>
  <div class="content">
    <button  @click="connect()" >Connect Keplr</button>
    <br>
    <br>
    Wallet address: {{address}}
    <br>
    <br>
    codeId
    <input type="text" v-model="codeId">
    <br>
    initMsg
    <input type="text" v-model="initMsg">
    <br>
    label
    <input type="text" v-model="label">
    <br>
    <br>
    <button  @click="execute()" >instantiate</button>
  </div>
</template>

<script>
import {
  bootstrap,
  instantiate,
  getAddress,
} from "@stakeordie/griptape.js";
export default {
  data: () => ({
    codeId:"",
    initMsg:"",
    label:"",
    address:"Waiting for Connection"
  }),

  methods: {
    connect() {
      bootstrap()
      this.address = getAddress()
    },
    execute() {
      instantiate(this.codeId, this.initMsg, this.label)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app .content {
  width: 800px;
  margin: 0 auto;
}

ol.guide li {
  padding: 1em 0;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
