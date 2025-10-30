import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import Card from '../common/Card';
import SubjectItem from './SubjectItem';

export default function ScheduleCard({ day, subjects }) {
  const { colors } = useTheme();

  return (
    <Card>
      <View style={styles.dayHeader}>
        <View style={[styles.dayCircle, { backgroundColor: colors.inputBackground }]}>
          <Ionicons name="calendar" size={20} color={colors.primary} />
        </View>
        <Text style={[styles.day, { color: colors.text }]}>{day}</Text>
      </View>
      
      {subjects.map((subject, index) => (
        <SubjectItem key={index} subject={subject} />
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
