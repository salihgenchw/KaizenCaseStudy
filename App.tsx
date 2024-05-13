import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs/BottomTabs';
import GeneralStatusBarColor from './src/components/GeneralStatusBar';



export default function App() {
  return (
    <>
    <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content" />
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
    </>
  );
}
