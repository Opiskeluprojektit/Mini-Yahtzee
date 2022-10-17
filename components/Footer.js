// Laura Vikström, TIK21KM

import React from "react";
import { View, Text } from 'react-native';
import style from '../style/style';

export default function App() {
  return (
    <View style={style.footer}>
      <Text style={style.author}>
        Author: Laura Vikström
      </Text>
    </View>
  );
}
