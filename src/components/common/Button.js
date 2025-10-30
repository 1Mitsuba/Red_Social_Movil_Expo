import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Button({ 
  onPress, 
  title, 
  icon, 
  iconSize = 18, 
  iconColor = '#fff',
  backgroundColor,
  textColor = '#fff',
  variant = 'primary', // primary, secondary, danger
  style 
}) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondary;
      case 'danger':
        return styles.danger;
      default:
        return styles.primary;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        backgroundColor && { backgroundColor },
        style,
      ]}
      onPress={onPress}
    >
      {icon && (
        <Ionicons name={icon} size={iconSize} color={iconColor} style={styles.icon} />
      )}
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  primary: {
    // Color se pasa desde fuera
  },
  secondary: {
    borderWidth: 1.5,
  },
  danger: {
    // Color se pasa desde fuera
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
