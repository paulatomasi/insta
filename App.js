import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import {
  HomeScreen,
  DirectMessageListScreen,
  SearchScreen,
  LikesScreen,
  MyProfileScreen
} from 'screens'

const TabsHome = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search',
      },
    },
    LikesScreen: {
      screen: LikesScreen,
      navigationOptions: {
        title: 'Likes',
      },
    },
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
  {
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
