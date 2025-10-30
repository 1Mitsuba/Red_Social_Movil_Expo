// Datos simulados para la app móvil Univalle
export const horarios = [
  { 
    dia: 'Lunes', 
    materias: [
      { nombre: 'Matemática', hora: '08:00 - 10:00', docente: 'Lic. Pérez' },
      { nombre: 'Programación', hora: '10:00 - 12:00', docente: 'Ing. García' }
    ] 
  },
  { 
    dia: 'Martes', 
    materias: [
      { nombre: 'Física', hora: '08:00 - 10:00', docente: 'Ing. Rojas' },
      { nombre: 'Base de Datos', hora: '14:00 - 16:00', docente: 'Lic. Martínez' }
    ] 
  },
  { 
    dia: 'Miércoles', 
    materias: [
      { nombre: 'Matemática', hora: '08:00 - 10:00', docente: 'Lic. Pérez' },
      { nombre: 'Redes', hora: '10:00 - 12:00', docente: 'Ing. López' }
    ] 
  },
];

export const publicaciones = [
  { 
    id: 1, 
    autor: 'Ana Flores', 
    texto: '¡Bienvenidos a la red social Univalle! Espero que este sea un espacio de colaboración.', 
    likes: 12, 
    liked: false,
    comentarios: [{ autor: 'Luis', texto: '¡Gracias!' }] 
  },
  { 
    id: 2, 
    autor: 'Carlos Mendoza', 
    texto: 'Alguien sabe dónde puedo encontrar la biblioteca digital?', 
    likes: 8, 
    liked: false,
    comentarios: [] 
  },
  { 
    id: 3, 
    autor: 'María López', 
    texto: 'Recordatorio: mañana tenemos examen de matemáticas 📚', 
    likes: 25, 
    liked: false,
    comentarios: [] 
  },
];

export const rutasCarpooling = [
  { id: 1, origen: 'Zona Sur', destino: 'Campus Central', hora: '07:30', dias: 'Lunes, Miércoles, Viernes', capacidad: '3', notas: 'Salida puntual' },
  { id: 2, origen: 'Zona Norte', destino: 'Campus Central', hora: '08:00', dias: 'Lunes a Viernes', capacidad: '4', notas: '' },
  { id: 3, origen: 'Centro', destino: 'Campus Valle', hora: '07:45', dias: 'Martes, Jueves', capacidad: '2', notas: 'Solo ida' },
];
