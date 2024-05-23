import React from "react";
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/type.ts";
import colorPalette from "../lib/colorPalette.ts";
import palette from "../lib/colorPalette.ts";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeNavigationProp = NativeStackScreenProps<RootStackParamList, "Home">;

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

function Home({ navigation }: HomeNavigationProp): React.JSX.Element {
  const MoveScreen = () => {
    navigation.navigate("Add_place");
  };


  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text>기억공간</Text>
      <WebView id="map_id" javaScriptEnabled style={styles.webView} source={{ html: `<script src="'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ae1782c91b404577559dec0add12e623&libraries=services,clusterer,drawing'"/>`}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: palette.white},
  webView: { width: windowWidth, height: windowHeight }
})

export default Home;
