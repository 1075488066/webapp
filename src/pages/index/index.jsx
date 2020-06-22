import Taro, { Component,useState,useEffect} from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import { connect } from '@tarojs/redux';
import {
  AtCheckbox,
  tInput, 
  AtForm,
  AtButton, 
  AtTextarea, 
  AtImagePicker,
  AtSwitch, 
  AtList,
  AtListItem,
  AtModal,
  AtModalContent, 
  AtRadio,
  AtSearchBar,
  AtInput
} from 'taro-ui'
import 'taro-ui/dist/style/index.scss'

const {windowHeight,windowWidth}=Taro.getSystemInfoSync();


const Index=(props)=> {
  return (
      <View>
         <AtInput/>
         <AtInput/>
      </View>
    )
};


Index.config={
    navigationBarTitleText: '首页'
}


export default connect(({loading}) =>({loading}))(Index);