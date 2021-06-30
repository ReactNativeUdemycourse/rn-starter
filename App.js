import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Component from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImagenScreen from "./src/screens/ImagenScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenOP from "./src/screens/SquareScreenOP";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Comp: Component,
    List: ListScreen,
    ImSc: ImagenScreen,
    count: CounterScreen,
    color: ColorScreen,
    square: SquareScreen,
    squareop: SquareScreenOP
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "React native course",
    },
  }
);

export default createAppContainer(navigator);
