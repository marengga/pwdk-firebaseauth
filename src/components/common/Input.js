import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
  const { labelStyle, inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        placeholder={placeholder}
        autocorrect={false}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 35,
    width: 100,
    flex: 2
  }
};

export { Input };
