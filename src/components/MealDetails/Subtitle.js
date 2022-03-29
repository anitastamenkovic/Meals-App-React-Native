import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Subtitle = ({subtitle}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#eee',
    textAlign: 'center',
  },
});

export default Subtitle;
