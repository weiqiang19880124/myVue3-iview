<template>
  <div class="iot-home">
    <HeaderNav></HeaderNav>
    <div class="main">
      <div class="left">
        <Menu active-name="iotGuide" @on-select="goCurrentItem" width="auto">
          <MenuItem name="iotGuide">
            <Icon type="ios-people" />
            导览
          </MenuItem>
          <MenuItem name="iotMy">
            <Icon type="ios-people" />
            我的
          </MenuItem>
        </Menu>
      </div>
      <div class="right">
        <router-view>

        </router-view>
      </div>
    </div>


  </div>
</template>
<script>
    import HeaderNav from '@/components/iotHeader/iotHeaderNav'
    import {Menu,MenuItem,Icon} from 'view-design'
    import api from '@/api'
    export default {
        data(){
            return{

            }
        },
        components:{
            HeaderNav,
            Menu,
            MenuItem,
            Icon,
        },
        created(){

        },
        mounted(){
            api.iotHome.getTest().then(res=>{
                console.log(res,'11111')
            })

        },
        methods:{
          goCurrentItem(val){
            console.log(val,'111')
            this.$router.push({
              path:`/${val}`
            })
          }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" type="text/scss" scoped>
  .iot-home{
    width:100%;
    height:100%;
    //background:dodgerblue;
    .el-menu{
      height:100%;
    }
    .el-button--primary{
      margin-top:10px;
      margin-left:20px;
    }
    .main{
      width:100%;
      height:calc(100% - 80px);

      display:flex;
      .left{
        width:10%;
        height:100%;
      }
      .right{
        width:90%;
        height:100%;
      }
    }
  }
</style>
<style  lang="scss" type="text/scss">
  .iot-home{

  }
</style>
