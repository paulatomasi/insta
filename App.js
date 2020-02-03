import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import {
  DirectMessageListScreen,
  SearchScreen,
  LikesScreen,
  MyProfileScreen,
  CameraScreen,
  HomeScreenConnected
} from 'screens'
import { ITabBar, IIcon } from 'components'

const TabsHome = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreenConnected,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: () => (
          <IIcon name="home_icon" style={{ fontSize: 32 }} />
        ),
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: () => (
          <IIcon name="search_icon" style={{ fontSize: 32 }} />
        ),
      },
    },
    LikesScreen: {
      screen: LikesScreen,
      navigationOptions: {
        title: 'Likes',
        tabBarIcon: () => (
          <IIcon name="like_icon" style={{ fontSize: 32 }} />
        ),
      },
    },
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: () => (
          <IIcon name="profile_icon" style={{ fontSize: 32 }} />
        ),
      },
    },
  },
  {
    tabBarComponent: ITabBar,
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
  },
)

const AppNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabsHome,
    },
    DirectMessageList: {
      screen: DirectMessageListScreen,
    },
  },
  { headerMode: 'none' },
)

export default createAppContainer(AppNavigator)
