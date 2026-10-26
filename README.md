# Catalogos de componentes

Proyecto de practica para comparar diseno web responsivo (RWD) y adaptativo (AWD) con Express y EJS.

## Requisitos

- Node.js 18 o posterior
- npm

## Instalacion

Desde la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

## Ejecutar

```bash
node server.js
```

Abre estas rutas en el navegador:

- `http://localhost:3000/responsive`: catalogo RWD con 12 componentes, filtros y diseno que se adapta al ancho.
- `http://localhost:3000/adaptive`: catalogo AWD. El servidor selecciona la vista de escritorio o movil segun el User-Agent o el indicador movil de Chrome.

Para probar AWD movil en Chrome, abre DevTools, activa la barra de dispositivos, selecciona un dispositivo movil y recarga `/adaptive`.

## Recursos adaptativos

En `/responsive`, las tarjetas usan `<picture>` para seleccionar imagenes WebP de hasta 256 px en pantallas de hasta 640 px. Las imagenes originales se usan en pantallas mayores.

## Auditoria de rendimiento

La practica requiere medir `/responsive` y `/adaptive` en Chrome DevTools con viewport de 390 x 844, Fast 3G y CPU 4x slowdown. Registra los resultados de cada ejecucion y agrega capturas de Network y Lighthouse al reporte de entrega. No se incluyen cifras de rendimiento en este README porque deben provenir de las mediciones realizadas en el navegador.
