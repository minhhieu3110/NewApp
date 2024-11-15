import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StarRating = ({ totalStars = {}, size = {}, color = "" }) => {
  const [rating, setRating] = useState(0);
  const handleStarPress = (index) => {
    setRating( index + 1);
  };

  return (
    <View style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
          <Icon
            name="star"
            size={size}
            color={index < rating ? color : "#f1f1f1"}
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 7.8,
  },
});

export default StarRating;
