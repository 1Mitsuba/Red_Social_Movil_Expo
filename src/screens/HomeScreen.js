import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ScreenHeader from '../components/common/ScreenHeader';
import ModuleCard from '../components/Home/ModuleCard';
import QuickActionCard from '../components/Home/QuickActionCard';

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  
  const modules = [
    { name: 'Academic', title: 'Académico', subtitle: 'Horarios y materias', icon: 'book' },
    { name: 'Social', title: 'Red Social', subtitle: 'Conecta con otros', icon: 'chatbubbles' },
    { name: 'Carpooling', title: 'Carpooling', subtitle: 'Comparte tu viaje', icon: 'car' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScreenHeader title="Bienvenido" subtitle="Universidad del Valle" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              module={module}
              index={index}
              onPress={() => navigation.navigate(module.name)}
            />
          ))}
        </View>

        <View style={styles.quickActions}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Accesos Rápidos</Text>
          <QuickActionCard
            icon="notifications-outline"
            title="Notificaciones"
            subtitle="3 nuevas"
            onPress={() => {}}
          />
          <QuickActionCard
            icon="calendar-outline"
            title="Calendario"
            subtitle="Ver eventos"
            onPress={() => {}}
          />
        </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickActions: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

