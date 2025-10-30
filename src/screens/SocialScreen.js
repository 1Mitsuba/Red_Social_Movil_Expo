import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { publicaciones as publicacionesMock } from '../mockData';
import { useTheme } from '../context/ThemeContext';

export default function SocialScreen() {
  const { colors } = useTheme();
  const [publicaciones, setPublicaciones] = useState(publicacionesMock);
  const [newPost, setNewPost] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const handleLike = (id) => {
    setPublicaciones(publicaciones.map(p => p.id === id ? {...p, likes: p.likes + 1, liked: !p.liked} : p));
  };

  const handleAddPost = () => {
    if (!newPost.trim()) return;
    setPublicaciones([{id: Date.now(), autor: 'Usuario Actual', texto: newPost, likes: 0, liked: false}, ...publicaciones]);
    setNewPost('');
    setShowNewPost(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.title, { color: colors.primary }]}>Red Social</Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>Conecta con tu comunidad</Text>
      </View>

      <TouchableOpacity style={[styles.addBtn, { backgroundColor: colors.primary }]} onPress={() => setShowNewPost(!showNewPost)}>
        <Ionicons name={showNewPost ? "close-circle" : "add-circle"} size={20} color="#fff" style={{marginRight: 6}} />
        <Text style={styles.addBtnText}>{showNewPost ? 'Cancelar' : 'Nueva publicación'}</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {showNewPost && (
          <View style={[styles.newPostBox, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.newPostTitle, { color: colors.text }]}>¿Qué estás pensando?</Text>
            <TextInput 
              style={[styles.newPostInput, { backgroundColor: colors.inputBackground, color: colors.text, borderColor: colors.secondary }]} 
              placeholder="Escribe algo..." 
              placeholderTextColor={colors.secondary}
              multiline 
              value={newPost} 
              onChangeText={setNewPost}
            />
            <TouchableOpacity style={[styles.publishBtn, { backgroundColor: colors.primary }]} onPress={handleAddPost}>
              <Text style={styles.publishBtnText}>Publicar</Text>
            </TouchableOpacity>
          </View>
        )}

        {publicaciones.map((p) => (
          <View key={p.id} style={[styles.card, { backgroundColor: colors.cardBackground }]}>
            <View style={styles.cardHeader}>
              <View style={[styles.avatar, { backgroundColor: colors.inputBackground }]}>
                <Ionicons name="person" size={24} color={colors.primary} />
              </View>
              <View style={{flex: 1, marginLeft: 12}}>
                <Text style={[styles.author, { color: colors.text }]}>{p.autor}</Text>
                <Text style={[styles.timestamp, { color: colors.secondary }]}>Hace 2 horas</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color={colors.secondary} />
              </TouchableOpacity>
            </View>

            <Text style={[styles.text, { color: colors.text }]}>{p.texto}</Text>

            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(p.id)}>
                <Ionicons name={p.liked ? "heart" : "heart-outline"} size={22} color={p.liked ? colors.primary : colors.secondary} style={styles.actionIcon} />
                <Text style={[styles.actionText, { color: p.liked ? colors.primary : colors.secondary }]}>{p.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color={colors.secondary} style={styles.actionIcon} />
                <Text style={[styles.actionText, { color: colors.secondary }]}>Comentar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color={colors.secondary} style={styles.actionIcon} />
                <Text style={[styles.actionText, { color: colors.secondary }]}>Compartir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  addBtn: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16, 
    padding: 14, 
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  content: { flex: 1, paddingHorizontal: 16 },
  newPostBox: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  newPostTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  newPostInput: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 15,
    minHeight: 100,
    textAlignVertical: 'top'
  },
  publishBtn: { borderRadius: 12, padding: 14, alignItems: 'center' },
  publishBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  author: { fontSize: 14, fontWeight: 'bold' },
  timestamp: { fontSize: 12, marginTop: 2 },
  text: { fontSize: 15, marginBottom: 12 },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionIcon: { marginRight: 6 },
  actionText: { fontSize: 13 },
});

