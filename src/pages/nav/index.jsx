import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Input,Button, Swiper, SwiperItem} from '@tarojs/components'
import './index.scss'
import {AtTabsPane,AtTabs} from 'taro-ui'

export default class Nav extends Component {
    onTabChange=(current)=>{
      this.setState({
          current,
      })
    }
  
    config = {
      navigationBarTitleText: '导航页'
    }

    render () {
      return (
        <View>
        </View>
      )
    }
  }
  