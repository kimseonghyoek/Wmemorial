import React, { useEffect, useState } from "react";
import { Animated, ImageBackground, StyleSheet, Text } from "react-native";
import View = Animated.View;
import * as url from "url";
import palette from "../lib/colorPalette.ts";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList} from "../navigation/type.ts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const back_imgage_url: Object= {uri: "/assets/wave.png"};
type Props = NativeStackScreenProps<RootStackParamList>;

function Intro({navigation}: Props): React.JSX.Element {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.container}>
        <ImageBackground source={require("../assets/wave.png")} resizeMode="cover" style={styles.image}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>W memorial</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor:palette.white
  },
  textWrap: {
    justifyContent: 'flex-end',
    padding: 30,
    display: "flex"
  },
  text: {
    fontSize: 25,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Intro;
