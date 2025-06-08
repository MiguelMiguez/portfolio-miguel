# Portfolio Miguel

Este proyecto es un **portfolio personal** desarrollado en React, diseñado para mostrar experiencia, formación, proyectos y certificaciones de manera moderna y responsiva.

## Descripción

El portfolio cuenta con varias secciones:  
- **Inicio**
- **Sobre mí**
- **Experiencia**
- **Formación**
- **Certificaciones**
- **Proyectos**


Incluye animaciones, scroll suave entre secciones, y un botón flotante para navegar fácilmente. El diseño es responsive y utiliza estilos personalizados para destacar la información relevante.

## Tecnologías y herramientas utilizadas

- **React**  
  Librería principal para la construcción de la interfaz de usuario.

- **CSS personalizado**  
  Archivos CSS para cada sección, con estilos modernos y adaptativos.

- **JavaScript (ES6+)**  
  Para la lógica de navegación, scroll y manejo de estados.

- **HTML5**  
  Estructura semántica de las secciones.

- **Vite o Create React App**  
  (Dependiendo de cómo hayas inicializado el proyecto).

- **VS Code**  
  Editor de código recomendado.

## Estructura de carpetas

```
src/
  components/
    Footer/
      Footer.jsx
      Footer.css
    ButtonScroll/
      ButtonScroll.jsx
      ButtonScroll.css
     NavBar/
      NavBar.jsx
      NavBar.css
     MouseTracker/
      MouseTracker.jsx
      MouseTracker.css
     ProjectCard/
      ProjectCard.jsx
      ProjectCard.css
  sections/
    Education/
      Education.jsx
      Education.css
    Experience/
      Experience.jsx
      Experience.css
    AboutMe/
      AboutMe.jsx
      AboutMe.css
    Hero/
      Hero.jsx
      Hero.css
 data/
    education.json
    experiencia.json
    portfolioData.json
 pages/
    Home.json
    ...
  App.jsx
  index.js
```

## Características destacadas

- **Botón de scroll flotante**  
  Permite navegar entre secciones y se ancla sobre el footer para no taparlo. Rota 180° al llegar al final.

- **Sección de Educación y Certificaciones**  
  Diseño en grid, tarjetas con hover y detalles visuales personalizados.

- **Responsive Design**  
  Adaptable a dispositivos móviles y escritorio.

- **Animaciones y transiciones suaves**  
  Para una experiencia de usuario moderna.

## Instalación y uso

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/portfolio-miguel.git
   cd portfolio-miguel
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
   o
   ```sh
   npm start
   ```

4. Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal) en tu navegador.

## Personalización

- Modifica los archivos en `src/sections/` para actualizar tu información.
- Cambia los estilos en los archivos `.css` según tu preferencia.
- Agrega o elimina secciones según tus necesidades.

## Licencia

Este proyecto es de uso personal. Puedes adaptarlo y modificarlo para tu propio portfolio.

---
