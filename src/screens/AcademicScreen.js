import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { horarios } from '../mockData';
import ScreenHeader from '../components/common/ScreenHeader';
import ScheduleCard from '../components/Academic/ScheduleCard';

export default function AcademicScreen() {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScreenHeader title="Académico" subtitle="Tu horario semanal" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {horarios.map((schedule, index) => (
          <ScheduleCard 
            key={index} 
            day={schedule.dia} 
            subjects={schedule.materias} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

