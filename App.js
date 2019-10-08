import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './src/Components/Splash';
import Login from './src/Components/Login';
import Signup from './src/Components/Signup';
import CreateProfile from './src/Components/CreateProfile';
import Mainpage from './src/Components/Mainpage';

const App = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: ({
      header: null
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({
      header: null
    })
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({
      header: null
    })
  },
  CreateProfile: {
    screen: CreateProfile,
    navigationOptions: ({
      header: null
    })
  },
  Mainpage: {
    screen: Mainpage,
    navigationOptions: ({
      header: null
    })
  },
});

export default createAppContainer(App);