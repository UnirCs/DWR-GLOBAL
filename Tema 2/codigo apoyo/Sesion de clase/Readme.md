# Ejemplos de Media Queries - Sesión de Clase

Este directorio contiene 7 pares de archivos HTML/CSS que demuestran diferentes aspectos de las media queries en CSS.

## 📚 Contenido

### 1. Screen y Print (`01-screen-print`)
**Archivos:** `01-screen-print.html` | `01-screen-print.css`

Demuestra la diferencia entre los media types `screen` y `print`:
- ✅ Estilos optimizados para visualización en pantalla
- ✅ Estilos optimizados para impresión
- ✅ Elementos que solo aparecen en pantalla o en impresión
- ✅ Optimización de colores y fuentes para cada medio

**Prueba:** Abre el archivo y usa Vista Previa de Impresión (Ctrl/Cmd + P) para ver las diferencias.

---

### 2. Width con Píxeles - ❌ Anti-patrón (`02-width-px`)
**Archivos:** `02-width-px.html` | `02-width-px.css`

**⚠️ PROBLEMA INTENCIONAL:** Demuestra el error de usar píxeles fijos en lugar de unidades relativas:
- ❌ Comparación entre notación antigua y nueva de media queries
- ❌ Tamaños de fuente fijos en píxeles
- ❌ Texto ilegible en móviles debido al uso de `px`
- 📝 Ejemplo educativo de lo que NO hacer

**Prueba:** Redimensiona la ventana a tamaño móvil y observa cómo el texto se vuelve muy pequeño.

---

### 3. Width con Unidades Relativas - ✅ Solución (`03-width-rem`)
**Archivos:** `03-width-rem.html` | `03-width-rem.css`

**✅ SOLUCIÓN CORRECTA:** Demuestra el uso correcto de unidades relativas:
- ✅ Uso de `rem` para tamaños de fuente
- ✅ Uso de `em` para breakpoints
- ✅ Texto legible en todos los dispositivos
- ✅ Respeta preferencias de accesibilidad del usuario
- ✅ Comparación directa con el ejemplo anterior

**Conceptos clave:**
- `1rem` = tamaño de fuente del elemento raíz (html)
- `48em` ≈ 768px (con fuente base 16px)
- `64em` ≈ 1024px (con fuente base 16px)

---

### 4. Portrait y Landscape (`04-orientation`)
**Archivos:** `04-orientation.html` | `04-orientation.css`

Demuestra el uso de media queries de orientación:
- ✅ `@media (orientation: portrait)` - Altura > Ancho
- ✅ `@media (orientation: landscape)` - Ancho > Altura
- ✅ Casos de uso: vídeos, juegos, gráficos, lectura
- ✅ Combinación de orientación con tamaño de pantalla
- ✅ Adaptación de layouts según orientación

**Prueba:** Rota tu dispositivo móvil/tablet o redimensiona la ventana cambiando la proporción.

---

### 5. Rangos Mal Definidos - ❌ Anti-patrón (`05-rangos-solapados`)
**Archivos:** `05-rangos-solapados.html` | `05-rangos-solapados.css`

**⚠️ PROBLEMAS INTENCIONALES:** Demuestra errores comunes que rompen la cascada CSS:
- ❌ Rangos que se solapan
- ❌ Múltiples media queries compitiendo
- ❌ Comportamiento impredecible
- ❌ Gaps (huecos) entre breakpoints
- ✅ Explicación de cada error
- ✅ Soluciones correctas mostradas
- ✅ Demostración visual interactiva con cambio de colores

**Errores demostrados:**
```css
/* ❌ MAL - Rangos solapados */
@media (max-width: 768px) { }
@media (min-width: 600px) and (max-width: 1024px) { }
@media (min-width: 900px) { }
```

**Prueba:** Redimensiona lentamente y observa los cambios bruscos e inconsistentes.

---

## 📚 Contenido Extra Básico

### Especificidad CSS (`06-especificidad`)
**Archivos:** `06-especificidad.html` | `06-especificidad.css`

**📖 FUNDAMENTOS:** Material complementario para entender la especificidad CSS antes de abordar media queries complejas.

**✅ EJEMPLOS CLAROS:** 8 ejemplos progresivos y sencillos usando colores de texto:

1. **Elemento vs Clase** → Color ROJO
   - Demuestra que `.clase` (0,0,1,0) gana sobre `elemento` (0,0,0,1)

2. **Clase vs ID** → Color VERDE
   - Demuestra que `#id` (0,1,0,0) gana sobre `.clase` (0,0,1,0)

3. **Selector Descendente** → Color MORADO
   - Demuestra que `.contenedor .texto` (0,0,2,0) gana sobre `.texto` (0,0,1,0)

4. **Elemento + Clase** → Color MARRÓN
   - Demuestra que `p.clase` (0,0,1,1) gana sobre `.clase` (0,0,1,0)

5. **Múltiples Clases** → Color VERDE AZULADO
   - Demuestra que `.clase1.clase2` (0,0,2,0) gana sobre `.clase1` (0,0,1,0)

6. **ID vs Múltiples Clases** → Color AZUL OSCURO
   - Demuestra que `#id` (0,1,0,0) gana sobre `.clase1.clase2.clase3` (0,0,3,0)

7. **Inline Style** → Color CARMESÍ
   - Demuestra que `style=""` (1,0,0,0) gana sobre cualquier selector

8. **!important** → Color GRIS
   - Demuestra que `!important` rompe el sistema de especificidad
   - ⚠️ Incluye advertencia sobre evitar su uso

**Recursos Incluidos:**
- 📊 Tabla resumen con todos los tipos de selectores
- 📋 Reglas de oro de especificidad
- 💡 Explicaciones claras en cada ejemplo
- 🎨 Código muy sencillo, fácil de entender

**Cálculo de Especificidad:**
```
(inline, IDs, clases/atributos/pseudo-clases, elementos/pseudo-elementos)

Ejemplos:
- style=""           → 1,0,0,0
- #id                → 0,1,0,0
- .clase             → 0,0,1,0
- p                  → 0,0,0,1
- #id .clase p       → 0,1,1,1
- .clase1.clase2     → 0,0,2,0
```

**Reglas de Oro:**
- ✅ A mayor especificidad, mayor prioridad
- ✅ Con igual especificidad, gana el último definido (cascada)
- ✅ Un ID siempre gana sobre cualquier cantidad de clases
- ✅ El estilo inline tiene la máxima especificidad (sin !important)
- ⚠️ !important rompe todo el sistema, úsalo solo como último recurso
- 💡 Mantén la especificidad baja para facilitar el mantenimiento

**¿Por qué es importante?**
Este contenido es fundamental para entender:
- Por qué ciertos estilos no se aplican
- Cómo resolver conflictos entre selectores
- Por qué el ejemplo 05 (rangos solapados) es problemático
- Cómo escribir CSS más mantenible

**Relación con Media Queries:**
La especificidad es especialmente importante cuando se trabaja con media queries que se solapan (como en el ejemplo 05), ya que determina qué estilos se aplican cuando múltiples reglas compiten por el mismo elemento.

---

## 🎯 Objetivos de Aprendizaje

Al estudiar estos ejemplos, aprenderás:

1. **Media Types:** Diferencia entre screen y print
2. **Width Queries:** Notación antigua vs nueva
3. **Unidades:** Importancia de rem/em sobre px
4. **Orientación:** Portrait vs landscape
5. **Errores Comunes:** Qué evitar (rangos solapados)
6. **Especificidad CSS:** Fundamento para entender conflictos de estilos

---

## 📋 Mejores Prácticas Resumidas

### ✅ HACER:
- Usar **mobile-first** (solo `min-width`)
- Usar **unidades relativas** (`rem`, `em`)
- Definir **breakpoints consecutivos** sin huecos
- Combinar **size + orientation** cuando tenga sentido
- Optimizar para **print** cuando sea apropiado
- **Documentar** tus breakpoints
- **Probar** en dispositivos reales

### ❌ EVITAR:
- Usar `px` fijos para tamaños de fuente
- Rangos que se **solapan**
- Usar `min-width` y `max-width` juntos
- Demasiados breakpoints (3-4 son suficientes)
- Dejar **gaps** entre breakpoints
- Ignorar la **accesibilidad**

---

## 🔧 Herramientas para Probar

- **DevTools del navegador:** Modo responsive design
- **Vista previa de impresión:** Ctrl/Cmd + P
- **Dispositivos reales:** Móviles y tablets
- **Herramientas online:** Responsive design checkers. [Ejemplo](https://testsigma.com/website-responsive-checker)

---

## 📖 Referencias

- [MDN: Using Media Queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)
- [MDN: Media Queries Level 4](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4)
- [CSS-Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

---

## 📝 Notas

- Los archivos están numerados del `01` al `05` en orden de complejidad
- Los ejemplos `02` y `05` contienen **errores intencionales** con fines educativos
- El ejemplo `06` (Especificidad) es **contenido extra básico** complementario
- Todos los archivos están comentados para facilitar el aprendizaje

