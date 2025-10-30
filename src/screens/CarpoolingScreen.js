import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { rutasCarpooling as rutasCarpoolingMock } from '../mockData';
import { useTheme } from '../context/ThemeContext';

export default function CarpoolingScreen() {
  const { colors } = useTheme();
  const [rutas, setRutas] = useState(rutasCarpoolingMock);
  const [rutasTomadasIds, setRutasTomadasIds] = useState([]);
  const [form, setForm] = useState({ origen: '', destino: '', hora: '', dias: '', capacidad: '', notas: '' });
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('disponibles');
  
  const rutasCreadas = rutas.filter(r => r && r.origen === 'Zona Sur');
  const rutasTomadas = rutas.filter(r => r && rutasTomadasIds.includes(r.id));

  const handleChange = (name, value) => { setForm({ ...form, [name]: value }); };

  const handleAddRoute = () => {
    if (!form.origen || !form.destino || !form.hora) return;
    setRutas([...rutas, { id: Date.now(), ...form }]);
    setForm({ origen: '', destino: '', hora: '', dias: '', capacidad: '', notas: '' });
    setShowForm(false);
  };

  const handleUnirse = (id) => { if (!rutasTomadasIds.includes(id)) setRutasTomadasIds([...rutasTomadasIds, id]); };
  const handleCancelar = (id) => { setRutasTomadasIds(rutasTomadasIds.filter(rid => rid !== id)); };
  const handleEliminar = (id) => { setRutas(rutas.filter(r => r.id !== id)); setRutasTomadasIds(rutasTomadasIds.filter(rid => rid !== id)); };

  const filteredRutas = rutas.filter(r => {
    const s = search.toLowerCase();
    return (r && r.origen && r.origen.toLowerCase().includes(s)) || 
           (r && r.destino && r.destino.toLowerCase().includes(s)) || 
           (r && r.dias && r.dias.toLowerCase().includes(s));
  });

  let rutasToShow = filteredRutas;
  if (tab === 'creadas') rutasToShow = rutasCreadas;
  if (tab === 'tomadas') rutasToShow = rutasTomadas;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.title, { color: colors.primary }]}>Carpooling</Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>Comparte tu viaje</Text>
      </View>

      {tab === 'disponibles' && (
        <View style={[styles.searchBox, { backgroundColor: colors.inputBackground }]}>
          <Ionicons name="search" size={20} color={colors.secondary} style={styles.iconMargin} />
          <TextInput style={[styles.searchInput, { color: colors.text }]} placeholder="Buscar ruta..." placeholderTextColor={colors.secondary} value={search} onChangeText={setSearch} />
        </View>
      )}

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tabBtn, tab === 'disponibles' && { backgroundColor: colors.inputBackground }]} onPress={() => setTab('disponibles')}>
          <Text style={[styles.tabText, { color: tab === 'disponibles' ? colors.primary : colors.secondary }]}>Disponibles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabBtn, tab === 'creadas' && { backgroundColor: colors.inputBackground }]} onPress={() => setTab('creadas')}>
          <Text style={[styles.tabText, { color: tab === 'creadas' ? colors.primary : colors.secondary }]}>Mis Rutas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabBtn, tab === 'tomadas' && { backgroundColor: colors.inputBackground }]} onPress={() => setTab('tomadas')}>
          <Text style={[styles.tabText, { color: tab === 'tomadas' ? colors.primary : colors.secondary }]}>Reservadas</Text>
        </TouchableOpacity>
      </View>

      {tab === 'creadas' && (
        <TouchableOpacity style={[styles.addBtn, { backgroundColor: colors.primary }]} onPress={() => setShowForm(!showForm)}>
          <Ionicons name={showForm ? "close-circle" : "add-circle"} size={20} color="#fff" style={styles.iconMargin} />
          <Text style={styles.addBtnText}>{showForm ? 'Cancelar' : 'Crear nueva ruta'}</Text>
        </TouchableOpacity>
      )}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {showForm && (
          <View style={[styles.formBox, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.formTitle, { color: colors.text }]}>Nueva Ruta</Text>
            <TextInput style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} placeholder="Origen" placeholderTextColor={colors.secondary} value={form.origen} onChangeText={(val) => handleChange('origen', val)} />
            <TextInput style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} placeholder="Destino" placeholderTextColor={colors.secondary} value={form.destino} onChangeText={(val) => handleChange('destino', val)} />
            <TextInput style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} placeholder="Hora (ej: 7:00 AM)" placeholderTextColor={colors.secondary} value={form.hora} onChangeText={(val) => handleChange('hora', val)} />
            <TextInput style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} placeholder="Días (ej: Lun-Vie)" placeholderTextColor={colors.secondary} value={form.dias} onChangeText={(val) => handleChange('dias', val)} />
            <TextInput style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} placeholder="Capacidad (ej: 3)" placeholderTextColor={colors.secondary} keyboardType="numeric" value={form.capacidad} onChangeText={(val) => handleChange('capacidad', val)} />
            <TextInput style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} placeholder="Notas opcionales" placeholderTextColor={colors.secondary} value={form.notas} onChangeText={(val) => handleChange('notas', val)} />
            <TouchableOpacity style={[styles.saveBtn, { backgroundColor: colors.primary }]} onPress={handleAddRoute}>
              <Text style={styles.saveBtnText}>Guardar Ruta</Text>
            </TouchableOpacity>
          </View>
        )}

        {rutasToShow.map((r) => (
          <View key={r.id} style={[styles.card, { backgroundColor: colors.cardBackground }]}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconCircle, { backgroundColor: colors.inputBackground }]}>
                <Ionicons name="location" size={22} color={colors.primary} />
              </View>
              <View style={styles.flexOne}>
                <Text style={[styles.route, { color: colors.text }]}>{r.origen}</Text>
                <View style={styles.arrowContainer}>
                  <Ionicons name="arrow-down" size={16} color={colors.secondary} />
                </View>
                <Text style={[styles.route, { color: colors.text }]}>{r.destino}</Text>
              </View>
            </View>

            <View style={styles.cardDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="time-outline" size={18} color={colors.secondary} />
                <Text style={[styles.detailText, { color: colors.text }]}>{r.hora}</Text>
              </View>
              {r.dias && (
                <View style={styles.detailRow}>
                  <Ionicons name="calendar-outline" size={18} color={colors.secondary} />
                  <Text style={[styles.detailText, { color: colors.text }]}>{r.dias}</Text>
                </View>
              )}
              {r.capacidad && (
                <View style={styles.detailRow}>
                  <Ionicons name="people-outline" size={18} color={colors.secondary} />
                  <Text style={[styles.detailText, { color: colors.text }]}>{r.capacidad} personas</Text>
                </View>
              )}
            </View>

            {r.notas && (
              <View style={[styles.notesBox, { backgroundColor: colors.inputBackground }]}>
                <Text style={[styles.notesText, { color: colors.secondary }]}>{r.notas}</Text>
              </View>
            )}

            <View style={styles.cardActions}>
              {tab === 'disponibles' && !rutasTomadasIds.includes(r.id) && (
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.primary }]} onPress={() => handleUnirse(r.id)}>
                  <Ionicons name="car-outline" size={18} color="#fff" style={styles.iconMargin} />
                  <Text style={styles.actionBtnText}>Unirse</Text>
                </TouchableOpacity>
              )}
              {tab === 'tomadas' && rutasTomadasIds.includes(r.id) && (
                <TouchableOpacity style={[styles.actionBtnSecondary, { backgroundColor: colors.inputBackground, borderColor: colors.primary }]} onPress={() => handleCancelar(r.id)}>
                  <Ionicons name="close-circle-outline" size={18} color={colors.primary} style={styles.iconMargin} />
                  <Text style={[styles.actionBtnTextSecondary, { color: colors.primary }]}>Cancelar</Text>
                </TouchableOpacity>
              )}
              {tab === 'creadas' && (
                <TouchableOpacity style={[styles.actionBtnDanger, { backgroundColor: colors.secondary }]} onPress={() => handleEliminar(r.id)}>
                  <Ionicons name="trash-outline" size={18} color="#fff" style={styles.iconMargin} />
                  <Text style={styles.actionBtnText}>Eliminar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 20, paddingTop: 50, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 15 },
  searchBox: { flexDirection: 'row', alignItems: 'center', borderRadius: 16, padding: 12, margin: 16, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  searchInput: { flex: 1, fontSize: 15 },
  tabs: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 12, borderRadius: 16, padding: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  tabBtn: { flex: 1, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 12, alignItems: 'center' },
  tabText: { fontSize: 13 },
  addBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 16, padding: 14, marginHorizontal: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  content: { flex: 1, paddingHorizontal: 16 },
  formBox: { borderRadius: 16, padding: 20, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  formTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderRadius: 12, padding: 12, marginBottom: 12, fontSize: 15 },
  saveBtn: { borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 8 },
  saveBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { borderRadius: 16, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 },
  iconCircle: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  route: { fontSize: 16, fontWeight: 'bold' },
  arrowContainer: { marginVertical: 4 },
  cardDetails: { marginBottom: 12 },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  detailText: { fontSize: 14, marginLeft: 8 },
  notesBox: { borderRadius: 10, padding: 12, marginBottom: 12 },
  notesText: { fontSize: 13, fontStyle: 'italic' },
  cardActions: { flexDirection: 'row', justifyContent: 'space-between' },
  actionBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 16, marginHorizontal: 4 },
  actionBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  actionBtnSecondary: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 16 },
  actionBtnTextSecondary: { fontWeight: 'bold', fontSize: 14 },
  actionBtnDanger: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 16 },
  iconMargin: { marginRight: 6 },
  flexOne: { flex: 1, marginLeft: 12 },
});
