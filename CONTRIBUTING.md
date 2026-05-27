# 🤝 Guía para Colaborar en Eventos Chiapas

¡Gracias por contribuir a este proyecto! Para mantener nuestro flujo de trabajo ordenado y profesional, todos los miembros del equipo deben seguir estas directrices. 

Actualmente, nuestro esfuerzo de desarrollo está centrado exclusivamente en refinar la página principal (`index.html`) y garantizar que los carruseles de imágenes de las festividades regionales funcionen a la perfección y se vean atractivos.

## 🌿 Reglas para Nombrar Ramas

Toda nueva funcionalidad o corrección debe trabajarse en una rama separada. Nunca trabajes directamente sobre `main`. Utiliza la siguiente convención para nombrar tus ramas:

* **`feature/`** - Para nuevas características o secciones. 
  * *Ejemplo:* `feature/carrusel-marimba`, `feature/estilos-index`
* **`fix/`** - Para solucionar errores o bugs en el código.
  * *Ejemplo:* `fix/imagenes-rotas`, `fix/conflicto-header`
* **`docs/`** - Para cambios exclusivos en la documentación (README, CONTRIBUTING).
  * *Ejemplo:* `docs/actualiza-instrucciones`

## 💬 Reglas para Escribir Mensajes de Commit

Los mensajes de commit deben ser claros y explicar *qué* hace el cambio. Sigue esta estructura:

1. **Usa el modo imperativo (presente):** Escribe como si estuvieras dando una orden al código.
   * ✅ **Correcto:** `Agrega imágenes al carrusel de Chiapa de Corzo`
   * ❌ **Incorrecto:** `Agregué las imágenes` o `Agregando fotos`
2. **Sé breve y descriptivo:** El mensaje principal no debe superar los 50 caracteres.
3. **Ejemplos de buenos commits:**
   * `Ajusta tamaño de las imágenes en el carrusel`
   * `Corrige error de visualización en index.html`
   * `Modifica tipografía global del sitio web`

## 🔄 Proceso de Pull Requests (PR)

1. Sube tu rama a GitHub: `git push origin nombre-de-tu-rama`.
2. Crea el Pull Request hacia la rama `main`.
3. Solicita la revisión de al menos un compañero de equipo.
4. Una vez aprobado, realiza el Merge y elimina la rama de trabajo.