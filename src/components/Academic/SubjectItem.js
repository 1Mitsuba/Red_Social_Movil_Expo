import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function SubjectItem({ subject }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.subjectCard, { backgroundColor: colors.inputBackground }]}>
      <View style={styles.subjectHeader}>
        <Text style={[styles.subjectName, { color: colors.text }]}>{subject.nombre}</Text>
        <View style={[styles.timeBadge, { backgroundColor: colors.cardBackground }]}>
          <Ionicons name="time-outline" size={14} color={colors.primary} style={styles.timeIcon} />
          <Text style={[styles.timeText, { color: colors.primary }]}>{subject.hora}</Text>
        </View>
      </View>
      <View style={styles.professorRow}>
        <Ionicons name="person-outline" size={16} color={colors.secondary} style={styles.professorIcon} />
        <Text style={[styles.professor, { color: colors.secondary }]}>{subject.docente}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subjectCard: {
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subjectName: {
    fontSize: 16,
    flex: 1,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  timeIcon: {
    marginRight: 4,
  },
  timeText: {
    fontSize: 13,
  },
  professorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  professorIcon: {
    marginRight: 6,
  },
  professor: {
    fontSize: 14,
  },
});
