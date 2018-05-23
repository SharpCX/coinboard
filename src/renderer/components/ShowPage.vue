<template>
    <div id="wrapper">
        <el-button type="primary" icon="el-icon-edit" circle @click="toEdit"></el-button>
        <div id="markets_container">
        </div>
    </div>
</template>


<script>
import { ipcRenderer } from 'electron'


export default {
  name: "show-page",
  data: function() {
    return {
      form: {}
    };
  },
  components: {},
  mounted() {
    let loadScript = function(url, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";

      if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
          if (
            script.readyState == "loaded" ||
            script.readyState == "complete"
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        //Others
        script.onload = function() {
          callback();
        };
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    };
    console.log("mouted");

    loadScript("./static/aicoin.js", function() {
      loadScript("./static/showcoin.js", function() {});
    });
  },
  created() {},
  methods: {
    toEdit() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#markets_container {
  height: 800px;
}

tr {
  height: 60px;
}
</style>
