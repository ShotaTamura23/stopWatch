<template>
  <div>
    <p>{{hour}}時間{{min}}分{{second}}秒</p>
    <p>工数：{{manHour}}</p>
    <button @click="timerStart()" v-show="!this.stopState">スタート</button>
    <button @click="timerStop()" v-show="this.stopState">ストップ</button>
    <button @click="timerSave()" v-show="!this.stopState">完了</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      stopState: false
    };
  },
  computed: {
    ...mapState(["count", "saveTime", "manHour"]),
    hour: function() {
      return Math.floor(this.$store.state.count / 3600);
    },
    min: function() {
      return Math.floor(this.$store.state.count / 60) % 60;
    },
    second: function() {
      return this.$store.state.count % 60;
    }
  },
  methods: {
    timerStart() {
      this.stopState = true;
      this.$store.dispatch("timerStart");
    },
    timerStop: function() {
      this.stopState = false;
      clearInterval(this.$store.dispatch("timerStop"));
    },
    timerSave: function() {
      this.stopState = false;
      this.$store.dispatch("timerSave");
    }
  },
  filters: {
    // フィルタオプション
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
