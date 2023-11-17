import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <LoginScreen />
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
