import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function LoginScreen({ navigation }) {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.logoContainer}>
        <View style={[styles.logoCircle, { backgroundColor: colors.inputBackground }]}>
          <Ionicons name="school" size={48} color={colors.primary} />
        </View>
        <Text style={[styles.title, { color: colors.text }]}>Univalle</Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>Red Social Universitaria</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={[styles.inputContainer, { backgroundColor: colors.inputBackground }]}>
          <Ionicons name="person-outline" size={20} color={colors.secondary} style={styles.inputIcon} />
          <TextInput 
            style={[styles.input, { color: colors.text }]} 
            placeholder="Usuario" 
            placeholderTextColor={colors.secondary} 
          />
        </View>

        <View style={[styles.inputContainer, { backgroundColor: colors.inputBackground }]}>
          <Ionicons name="lock-closed-outline" size={20} color={colors.secondary} style={styles.inputIcon} />
          <TextInput 
            style={[styles.input, { color: colors.text }]} 
            placeholder="Contraseña" 
            placeholderTextColor={colors.secondary} 
            secureTextEntry={!showPassword} 
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={() => navigation.replace('Main')}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" style={{marginLeft: 8}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={[styles.forgotText, { color: colors.primary }]}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.secondary }]}>Universidad del Valle - Bolivia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'space-between',
    paddingVertical: 40
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  subtitle: { 
    fontSize: 15
  },
  formContainer: {
    paddingHorizontal: 32,
    marginTop: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12
  },
  input: { 
    flex: 1,
    fontSize: 15
  },
  eyeIcon: {
    padding: 4
  },
  button: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16, 
    height: 56,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 17 
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 20
  },
  forgotText: {
    fontSize: 14
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20
  },
  footerText: {
    fontSize: 13
  }
});


