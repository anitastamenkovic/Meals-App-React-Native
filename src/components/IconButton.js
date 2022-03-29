import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = () => {
  return (
    <Pressable>
      <Ionicons name="star" size={24} color="#ccc" />
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default IconButton;
