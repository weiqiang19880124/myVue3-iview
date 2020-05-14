<template>
  <div class="iot-my">

    我的
    <div>
      <Button type="info" @click="changeValue">改变store中的值</Button>
      <Button type="info" @click="change">异步改变store中的值</Button>
    </div>
  </div>
</template>
<script>
    import api from '@/api'
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import {Button,} from 'view-design'
    export default {
        data(){
            return{

            }
        },
        components:{
          Button,
        },
        mounted(){
            console.log(this.getCurrentNum,'vuex返回的getCurrentNum值')
        },
        methods:{
            ...mapMutations(['TOTAL_NUM']),
            ...mapActions(['logout']),
            changeValue(){
                let newValue=888;
                this.$store.commit('TOTAL_NUM', newValue)
            },
            change(){
                let asyncData=999;
                this.$store.dispatch('logout',asyncData).then(() => {
                    this.$message.success('登出成功')

                })
            }

        },
        computed:{
            ...mapGetters(['getCurrentNum'])
        }
    }
    //与路径相关时
    /*...mapActions("LoginStore", ["storeLoginSubmitApi",'myLoginMark']),
    ...mapMutations("LoginStore",['SETLOGINMARK']),
      initLogin(){
      let payload={
        account: "admin",
        password: '1',
        rememberMe: 1
      }
      loginApi.loginSubmitApi(payload).then(res => {
        console.log(payload,'11111')
        if (res.data.success) {

          // 给localStorage里面存一个user，用来做登录过的标记
          localStorage.setItem("user", res.data.username);
          _this.$store.commit('LoginStore/SETLOGINMARK');
          //this.$store.dispatch("LoginStore/myLoginMark");

          Vue.$loading.close();
          console.log(res,'测试')
          this.showContent=true;

        }

      }).
      catch(err =>{
          console.error(err, "storeLoginSubmitApi")
        }

      )*/
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" type="text/scss" scoped>
  .iot-my{
    width:100%;
    height:100%;
    background:yellow;
  }
</style>
<style  lang="scss" type="text/scss">
  .iot-my{

  }
</style>
