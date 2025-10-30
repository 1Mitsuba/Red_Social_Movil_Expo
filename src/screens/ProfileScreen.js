import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ProfileScreen() {
  const { isDark, colors, toggleTheme } = useTheme();

  const menuItems = [
    { icon: 'person-outline', title: 'Editar perfil', subtitle: 'Actualiza tu información' },
    { icon: 'notifications-outline', title: 'Notificaciones', subtitle: 'Configura alertas' },
    { icon: 'shield-checkmark-outline', title: 'Privacidad', subtitle: 'Controla tu privacidad' },
    { icon: 'help-circle-outline', title: 'Ayuda', subtitle: 'Centro de soporte' },
  ];

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.header, {backgroundColor: colors.cardBackground}]}>
        <Text style={[styles.title, {color: colors.primary}]}>Perfil</Text>
        <Text style={[styles.subtitle, {color: colors.secondary}]}>Tu cuenta</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.profileCard, {backgroundColor: colors.cardBackground}]}>
          <View style={[styles.avatar, {borderColor: colors.border}]}>
            <Ionicons name="person" size={48} color={colors.primary} />
          </View>
          <Text style={[styles.name, {color: colors.text}]}>Usuario Univalle</Text>
          <Text style={[styles.email, {color: colors.secondary}]}>usuario@univalle.edu.bo</Text>
        </View>

        <View style={[styles.themeCard, {backgroundColor: colors.cardBackground}]}>
          <View style={styles.themeRow}>
            <View style={[styles.themeIcon, {backgroundColor: colors.background}]}>
              <Ionicons name={isDark ? "moon" : "sunny"} size={24} color={colors.primary} />
            </View>
            <View style={{flex: 1, marginLeft: 12}}>
              <Text style={[styles.themeTitle, {color: colors.text}]}>Modo Oscuro</Text>
              <Text style={[styles.themeSubtitle, {color: colors.secondary}]}>
                {isDark ? 'Activado' : 'Desactivado'}
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={isDark ? colors.cardBackground : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.menuSection}>
          <Text style={[styles.sectionTitle, {color: colors.text}]}>Configuración</Text>
          {menuItems.map((item, idx) => (
            <TouchableOpacity key={idx} style={[styles.menuItem, {backgroundColor: colors.cardBackground}]}>
              <View style={[styles.menuIcon, {backgroundColor: colors.background}]}>
                <Ionicons name={item.icon} size={22} color={colors.primary} />
              </View>
              <View style={{flex: 1, marginLeft: 12}}>
                <Text style={[styles.menuTitle, {color: colors.text}]}>{item.title}</Text>
                <Text style={[styles.menuSubtitle, {color: colors.secondary}]}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.secondary} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={[styles.logoutBtn, {borderColor: colors.primary}]}>
          <Ionicons name="log-out-outline" size={20} color={colors.primary} style={{marginRight: 8}} />
          <Text style={[styles.logoutText, {color: colors.primary}]}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 15 },
  content: { flex: 1, padding: 16 },
  profileCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    marginBottom: 12
  },
  name: { fontSize: 20, marginBottom: 4 },
  email: { fontSize: 14 },
  themeCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  themeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  themeTitle: { fontSize: 16, marginBottom: 2 },
  themeSubtitle: { fontSize: 13 },
  menuSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuTitle: { fontSize: 16, marginBottom: 2 },
  menuSubtitle: { fontSize: 13 },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    marginBottom: 20
  },
  logoutText: { fontSize: 16, fontWeight: 'bold' },
});

