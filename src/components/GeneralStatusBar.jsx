import { StyleSheet, StatusBar, View, Platform } from "react-native";
import Contanst from "expo-constants";
const STATUSBAR_HEIGHT = Contanst.statusBarHeight;

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBarColor;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
