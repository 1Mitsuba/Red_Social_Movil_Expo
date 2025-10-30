# Red Social Móvil Univalle

Aplicación móvil de red social universitaria para la Universidad del Valle Bolivia, desarrollada con React Native y Expo. Solo frontend, sin backend ni autenticación real, con datos locales (mockData.js).

## Módulos
- **Académico:** Horarios, calificaciones, materias y docentes.
- **Social:** Publicaciones, comentarios, reacciones y mensajería.
- **Carpooling:** Registro y búsqueda de rutas, visualización en mapa (mock visual si react-native-maps no es compatible con Expo Go).

## Requisitos técnicos
- Expo SDK estable, compatible con Android/iOS.
- Navegación con React Navigation.
- Login falso (sin validación real).
- Diseño moderno, gradientes, inputs estilizados, modo claro/oscuro opcional.
- Colores oficiales: Primario #8B1E41, Secundario #C0C0C0.
- 100% offline en Expo Go.
- Sin EAS Update.

## Estructura de carpetas
```
src/
  components/
    Academic/
    Social/
    Carpooling/
  screens/
    LoginScreen.js
    HomeScreen.js
  mockData.js
```

## Instalación y ejecución
1. Instala dependencias:
   ```
npm install --legacy-peer-deps
   ```
2. Inicia la app en Expo Go:
   ```
npm start
   ```

### Importante sobre Expo Go y SDK

Si ves un error de incompatibilidad de SDK (por ejemplo, "Project is incompatible with this version of Expo Go"), asegúrate de que la versión de Expo Go instalada en tu dispositivo sea compatible con el SDK usado en este proyecto (actualmente SDK 50). Puedes:

- Actualizar el proyecto a la última versión de Expo SDK (recomendado para producción).
- O instalar una versión de Expo Go compatible con SDK 50 desde [expo.dev/go](https://expo.dev/go?sdkVersion=50&platform=android&device=true).

## Notas
- Todos los datos son locales y simulados.
- Listo para pruebas en Expo Go y generación de APK local sin servicios pagos.
