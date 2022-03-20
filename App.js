import React, { useState } from "react";
import { useColorScheme } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styled";

export default function App() {
  // 로딩 과정에서 다른 작업을 하고싶다면 아래와 같이 구성해야함.
  // 다만 AppLoading 컴포넌트의 startAsync, onFinish, onError는 Deprecated 됨.
  // 문서를 살펴보니 AppLoading은 SplashScreen와 함께 사용하는 것이며,
  // AppLoading을 unmount 시키면 SplashScreen을 숨기는 것이 기본 동작임.
  // const [isReady, setIsReady] = useState(false);

  // const onFinish = () => setIsReady(true);
  // const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
  // const loadAssets = (assets) =>
  //   assets.map((asset) =>
  //     typeof asset === "string" ? Image.prefetch(asset) : Asset.loadAsync(asset)
  //   );
  // const startLoading = async () => {
  //   const fonts = loadFonts([Ionicons.font]);
  //   const images = loadAssets([
  //     require("./assets/yihyun.jpeg"),
  //     "https://t1.daumcdn.net/thumb/R1000x0/?fname=https://img.24post.co.kr/files/attach/images/22073/319/464/012/fd202a382755b28b0108820198dbfa18.jpg",
  //   ]);
  //   await Promise.all([...fonts, ...images]);
  // };

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={startLoading}
  //       onFinish={onFinish}
  //       onError={console.error}
  //     />
  //   );
  // }

  // Asset만 로딩하는 거라면 아래로 충분
  const [assets] = useAssets([require("./assets/yihyun.jpeg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme() === "dark";

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
