<template>
    <div class="login-page">
      <div class="login-wrap">
        <Form ref="formInline" :model="form" :rules="ruleInline">
          <FormItem prop="name">
            <Input type="text" v-model="form.name" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
</template>

<script>
    import {Form,FormItem,Icon,Input,Button} from 'view-design'
    export default {
        name: "login",
        data(){
            return{
                form:{
                    name:'',
                    password:''
                },
                ruleInline: {
                  name: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                  ],
                  password: [
                    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                  ]
                },
            }
        },
        components:{
          Form,
          FormItem,
          Icon,
          Input,
          Button,
        },
        methods: {

          handleSubmit(name) {
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('Success!');
                localStorage.token='88888'
                this.$router.push({
                  path:'/'
                })
              } else {
                this.$Message.error('Fail!');
              }
            })
          }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .login-page{
    width:100%;
    height:100%;
    background-color: #ddd;
    display:flex;
    justify-content: center;
    align-items: center;
    .login-wrap{
      width: 50%;
      height: 200px;
      background-color: gray;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
</style>
<style lang="scss" type="text/scss">
  .login-page{

  }
</style>
