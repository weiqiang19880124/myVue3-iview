import axios from '@/http'
import {getUrl} from './path'

const iotHome = {


  getTest(){
    return axios ({
      method:'GET',
      url:'/mhjk/airport/getAllAirports'
    })
  },
  createRegion  (params) {
    return axios ({
      method: 'POST',
      //url: getUrl('/region'),
      url: '/mhjk/airport/getNewOverheightBuilds',
      data: params
    })
  },
  getSpacePolicyInfo(params){
    return axios ({
      method:'POST',
      url:'/ckdb/fightTactics/getAllOsSpacePolicy',
      headers:{
        'content-type':'application/x-www-form-urlencoded' // FormData格式传参
      },
      data:params
    })
  },
  addSpacePolicyInfo(params){ //文件传参
    return axios ({
      method: 'POST',
      url: '/ckdb/fightTactics/addOsSpacePolicy',
      processData : false,
      //contentType : false,
      dataType: 'formData',
      data: params,
      contentType: 'multipart/form-data'
    })
  },


}
export default iotHome
