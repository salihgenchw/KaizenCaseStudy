import GeneralStatusBarColor from "./src/components/GeneralStatusBar";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <>
      <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content" />
      <Navigation />
    </>
  );
}
