import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PrimaryColor } from "../constants/Colors";
import { AccountScreen } from "../features/account/screens/AccountScreen";
import HomeAppBar from "../features/home/components/HomeAppBar";
import { HomeScreen } from "../features/home/screens/HomeScreen";
import { ReelsScreen } from "../features/reels/screens/ReelsScreen";
import { SearchScreen } from "../features/search/screens/SearchScreen";
import { ShopScreen } from "../features/shop/screens/ShopScreen";

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        {/* Home screen navigation configuration */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <HomeAppBar />,
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? PrimaryColor : "black"}
              />
            ),
          }}
        />

        {/* Search screen navigation configuration */}
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="search1"
                size={24}
                color={focused ? PrimaryColor : "black"}
              />
            ),
          }}
        />

        {/* Reels screen navigation configuration */}
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="videocamera"
                size={24}
                color={focused ? PrimaryColor : "black"}
              />
            ),
          }}
        />

        {/* Shop screen navigation configuration */}
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? PrimaryColor : "black"}
              />
            ),
          }}
        />

        {/* Account screen navigation configuration */}
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="antdesign"
                size={24}
                color={focused ? PrimaryColor : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
