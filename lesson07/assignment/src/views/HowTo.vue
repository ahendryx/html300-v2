<template>
  <div class="row pb-5">
    <h1 class="col-12 pt-5 pb-5">How to Cook an Egg: 4 Methods</h1>
    <section class="col-sm-6">
      <div v-for="technique in techniques" v-bind:key="technique">{{technique.imageOne}}</div>
        <h3 v-for="technique in techniques" v-bind:key="technique">{{technique.titleOne}}</h3>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentOneA}}</p>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentOneB}}</p>
    </section>
    <section class="col-sm-6">
      <div v-for="technique in techniques" v-bind:key="technique">{{technique.imageTwo}}</div>
        <h3 v-for="technique in techniques" v-bind:key="technique">{{technique.titleTwo}}</h3>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentTwoA}}</p>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentTwoB}}</p>
    </section>
    <section class="col-sm-6">
      <div v-for="technique in techniques" v-bind:key="technique">{{technique.imageThree}}</div>
        <h3 v-for="technique in techniques" v-bind:key="technique">{{technique.titleThree}}</h3>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentThreeA}}</p>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentThreeB}}</p>
    </section>
    <section class="col-sm-6">
      <div v-for="technique in techniques" v-bind:key="technique">{{technique.imageFour}}</div>
        <h3 v-for="technique in techniques" v-bind:key="technique">{{technique.titleFour}}</h3>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentFourA}}</p>
        <p v-for="technique in techniques" v-bind:key="technique">{{technique.contentFourB}}</p>
    </section>
    </div>
</template>

<script>
export default {
  name: 'methods',
  data () {
    return {
      techniques: [
        {titleOne: "BOILED",
          imageOne: require('../assets/hard-boiled.jpg'),
          contentOneA: "asldkfjh patuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]",
          contentOneB: "Para 2 atuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]"},
        {titleTwo: "SCRAMBLED",
          imageTwo: require('../assets/scrambled.jpg'),
          contentTwoA: "asldkfjh patuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]",
          contentTwoB: "Para 2 atuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]"},
        {titleThree: "FRIED",
          imageThree: require('../assets/overeasy.jpg'),
          contentThreeA: "asldkfjh patuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]",
          contentThreeB: "Para 2 atuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]"},
        {titleFour: "POACHED",
          imageFour: require('../assets/poached.jpg'),
          contentFourA: "asldkfjh patuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]",
          contentFourB: "Para 2 atuqpwtucq0[w8ut[0aijhfaosidjfa;osdij;a sodkjga ;osdkjga;sdi gjqw0[t8 uirgjadjadpsjads jfadpsjgap'sdjg]]]"},
      ]
    }
  }
}
</script>
