import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function ScreenHeader({ title, subtitle }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.cardBackground }]}>
      <Text style={[styles.title, { color: colors.primary }]}>{title}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, { color: colors.secondary }]}>{subtitle}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
  },
});
