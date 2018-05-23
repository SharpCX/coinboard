<template>
    <div id="wrapper">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="币列表">
                <el-input type="textarea" v-model="form.dataitem" width="100%" rows="10"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    import { ipcRenderer } from 'electron'

    export default {
        name: "landing-page",
        data: function() {
            return {
                form:{
                    dataitem:"",
                }
            };
        },
        components: {
            
        },
        mounted(){
            ipcRenderer.send("resizeWindow",  {width:1000, height:500});
        },
        methods: {
            onSubmit: function (){
                console.log("submited"+this.form.dataitem);
                let dataitems = this.form.dataitem.split(/\"\s*,\s*\"/)
                dataitems = dataitems.map(ele => {
                    while(ele.startsWith("\"") || ele.startsWith(",")){
                        ele=ele.substr(1)
                    }
                    while(ele.endsWith("\"") || ele.endsWith(",")){
                        ele=ele.substr(0, ele.length-1)
                    }
                    return ele;
                })
                this.$router.push({path:'/show'})
                window.localStorage.setItem("tradeList", JSON.stringify(dataitems))
                ipcRenderer.send("resizeWindow",  {width:1000, height:(dataitems.length+2)*34+38+30});
            },
            open(link) {
                this.$electron.shell.openExternal(link);
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
