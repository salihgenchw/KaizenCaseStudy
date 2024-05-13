import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home/HomeScreen";
import { View, Image, Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

const EmptyScreen = () => <View />;

const { width, height } = Dimensions.get("window");

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "KEŞFET",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "black",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/Kesfet.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portal"
        component={EmptyScreen}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/PORTAL.png")}
              style={{
                width: width * 0.16,
                height: width * 0.16,
                resizeMode: "contain",
                marginBottom: 3,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cüzdan"
        component={EmptyScreen}
        options={{
          tabBarLabel: "DAHA CÜZDAN",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          headerShown: false,
          tabBarActiveTintColor: "black",
          //   tabBarIcon: ({ color, size }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={size} />
          //   ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
