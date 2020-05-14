<template>
  <div class="iot-header-nav">

    <div class="test">
      <Button type="primary" @click="fixInfo">post请求</Button>
    </div>
  </div>
</template>
<script>
    import api from '@/api'
    import { Button} from 'view-design';
    export default {
        data(){
            return{}
        },
        components:{
          Button,
        },
        methods:{
            async fixInfo(){
                let aresObj = {
                    tablenamenew: 'hy_building',
                    tablenameold: 'hy_building20180606',
                    pageNum: 1,
                    pageSize:5
                }
                await api.iotHome.createRegion(JSON.stringify(aresObj)).then(res => {
                    console.log(res,'返回结果')
                }).catch(err => {

                })
                console.log(222)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" type="text/scss" scoped>
  .iot-header-nav{
    width:100%;
    height:80px;
    background:mediumpurple;
    .test{
      width:100%;
      height:100%;
      text-align: center;
      line-height:80px;
      color:#26bbf0;
    }
  }
</style>
<style lang="scss" type="text/css">
  .iot-header-nav{

  }
</style>
