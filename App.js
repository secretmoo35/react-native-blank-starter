import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import HomePage from "./src/pages/HomePage";
import NavigatePage from "./src/pages/NavigatePage";

const AppStackNavigator = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    NavigatePage: { screen: NavigatePage }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return <AppStackNavigator initialRouteName="HomePage" />;
  }
}
export default App;
