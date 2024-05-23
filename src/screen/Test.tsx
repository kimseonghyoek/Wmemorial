import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddButton from "../components/AddButton.tsx";
import { Modal, Provider } from "@ant-design/react-native";
import CModal from "../components/CModal.tsx";
import palette from "../lib/colorPalette.ts";

function Test(): React.JSX.Element {

  const [visiable, setVisible] = useState(true);

  const onClick = () => {
    setVisible(!visiable);
    console.log(!visiable)
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddButton onPress={onClick} text="이것은 버튼"/>
    {/*  <Provider>*/}
    {/*      <Modal*/}
    {/*        title="이 기억을 지워버릴까요?"*/}
    {/*        transparent*/}
    {/*        maskClosable*/}
    {/*        visible={visiable}>*/}
    {/*        <View style={{ paddingVertical: 20 }}>*/}
    {/*          <Text style={{ textAlign: 'center' }}>Content...</Text>*/}
    {/*          <Text style={{ textAlign: 'center' }}>Content...</Text>*/}
    {/*        </View>*/}
    {/*      </Modal>*/}
    {/*</Provider>*/}
        <CModal visible={visiable} title="이것은 모달창입니다."/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    zIndex: 100,
  }
})

export default Test;
