import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function ModuleCard({ module, onPress, index }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: index % 2 === 0 ? colors.cardBackground : colors.inputBackground },
      ]}
      onPress={onPress}
    >
      <View style={[styles.iconCircle, { backgroundColor: colors.primary }]}>
        <Ionicons name={module.icon} size={32} color="#fff" />
      </View>
      <Text style={[styles.cardTitle, { color: colors.text }]}>{module.title}</Text>
      <Text style={[styles.cardSubtitle, { color: colors.secondary }]}>{module.subtitle}</Text>
      <View style={[styles.cardArrow, { backgroundColor: colors.inputBackground }]}>
        <Ionicons name="arrow-forward" size={20} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    minHeight: 160,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    marginBottom: 12,
  },
  cardArrow: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
