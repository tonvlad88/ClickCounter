// Core Packages
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Packages
import { LinearGradient } from "expo-linear-gradient";

// Imports

export default function ClickButton({
  buttonText,
  gradientColors,
  buttonContainerStyle,
  buttonStyle,
  buttonTextStyle,
  onPress,
}) {
  return (
    <View style={buttonContainerStyle}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={buttonStyle}
        >
          <Text style={buttonTextStyle}>{buttonText}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const componentStyles = StyleSheet.create({});
