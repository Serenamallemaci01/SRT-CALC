# SRT Calc v1.0

Calculadora del SRT (umbral de captación, UC) por el **método de Tillman-Olsen**, pensada para usar durante la logoaudiometría desde el celular, la tablet o la computadora. Funciona sin internet una vez abierta por primera vez.

**Calculadora creada por Lic. Serena Mallemaci, Fonoaudióloga.**
El método y los criterios de concordancia pertenecen a los autores citados en Referencias.

Comentarios y sugerencias: mallemaciserena@gmail.com

## Método

Tillman-Olsen, basado en la ecuación de Spearman-Kärber. La norma IRAM 4028-3 lo incluye como alternativa para obtener el umbral de captación sin trazar la curva psicométrica completa. Parámetros: 5 palabras por nivel (N = 5) y pasos de 5 dB (d = 5).

### Procedimiento

1. Empezar en un nivel inicial (Ls) en el que el paciente repita correctamente las 5 palabras.
2. Presentar 5 palabras y contar los aciertos.
3. Bajar 5 dB y volver a presentar 5 palabras.
4. Repetir hasta un nivel en el que no se reconozca ninguna palabra.
5. Sumar los aciertos de toda la prueba (ac).

### Fórmula

SRT = Ls + d/2 − d · ac / N → con d = 5 dB y N = 5: **SRT = Ls + 2,5 − ac**

### Concordancia con el PTA

El SRT coincide con el promedio tonal de 500, 1000 y 2000 Hz con una tolerancia de ±6 dB (la calculadora compara la diferencia redondeada a dB entero). Hasta 6 dB: «Concordante». Más de 6 dB: «Revisar», con una orientación según el SRT dé mejor o peor que la referencia.

### Caída abrupta: fórmula de Carhart

Cuando el umbral empeora 20 dB o más entre dos frecuencias contiguas (de 500 a 1000 Hz o de 1000 a 2000 Hz), la calculadora aplica sola la fórmula de Carhart y lo avisa con un cartel: el SRT se compara con el promedio de 500 y 1000 Hz menos 2 dB, en lugar del PTA, con la misma tolerancia de ±6 dB. También muestra la diferencia con el PTA de 3 frecuencias. El corte de 20 dB es el que se usa para definir audiogramas no planos (Andrade y cols., 2013).

### Nivel inicial

La norma no fija el nivel inicial. La calculadora sugiere PTA + 10 redondeado a 5 dB (el artículo de referencia propone PTA + 20). En todos los casos, en Ls se tienen que repetir las 5 palabras.

### Controles

La calculadora avisa cuando:

- un umbral o Ls no es un número, está fuera de −10 a 120 dB HL, o no es múltiplo de 5;
- en Ls no hubo 5/5 aciertos;
- falta cargar algún nivel intermedio;
- la serie todavía no terminó en un nivel con 0 aciertos;
- hay niveles cargados por debajo de −10 dB HL.

## Cómo se usa

1. Elegí el oído (OD u OI) en la barra de arriba, que siempre queda a la vista con el SRT de cada lado.
2. Cargá los umbrales de 500, 1000 y 2000 Hz. Se calculan el PTA y el nivel inicial sugerido.
3. Cargá el nivel inicial usado (Ls), o tocá «Usar … dB» para tomar el sugerido. Los botones −5 y +5 lo ajustan.
4. En cada nivel tocá la cantidad de palabras repetidas (0 a 5). El nivel que sigue queda resaltado y arriba se indica «Próximo: … dB». Para borrar un valor, tocá el mismo número otra vez.
5. En computadora: las teclas 0 a 5 cargan el nivel resaltado y Retroceso borra el último.
6. «Copiar resultado» copia el SRT de los dos oídos para pegarlo en el informe. «Nuevo paciente» borra los dos oídos.
7. El botón de la luna cambia a modo oscuro (útil con poca luz). La elección queda guardada en cada dispositivo.

## Instalarla y usarla sin internet

1. Abrí el link una vez con internet.
2. En Android (Chrome): menú ⋮ → «Agregar a la pantalla principal» o «Instalar aplicación». En iPhone (Safari): botón Compartir → «Agregar a inicio».
3. Desde ese momento funciona sin conexión. Al pie de la página aparece «Lista para usar sin internet en este dispositivo».

## Privacidad

Los datos se guardan solo en el dispositivo de quien la usa. No se envían a ningún servidor. La calculadora no pide nombre ni datos personales del paciente.

## Archivos

- `index.html`: la calculadora.
- `sw.js`: guarda la aplicación en el dispositivo para usarla sin internet.
- `manifest.webmanifest` e íconos: permiten instalarla en la pantalla de inicio.
- `qrcode.js`: genera el código QR para compartir (qrcode-generator, licencia MIT).
- `fonts/`: tipografías Atkinson Hyperlegible y Barlow Condensed (licencia SIL Open Font License).

Para publicar una versión nueva: cambiar el número de versión en `index.html` y el valor de `CACHE` en `sw.js` (por ejemplo, `srtcalc-v1.1`). Así los dispositivos descargan la actualización la próxima vez que la abran con internet.

## Referencias

1. Kuchman M, Cristiani HE. Revisión de los métodos para la obtención de la logoaudiometría. Revista FASO. 2020;27(3):30-39.
2. Tillman TW, Olsen WO. Speech audiometry. En: Jerger J (ed.). Modern Developments in Audiology. 2.ª ed. New York: Academic Press; 1973.
3. IRAM 4028-3. Logoaudiometría. Métodos básicos de prueba. Instituto Argentino de Normalización y Certificación; 1996.
4. Finney DJ. Statistical Methods in Biological Assay. London: Charles Griffin; 1952.
5. Carhart R. Observations on the relations between thresholds for pure tones and for speech. J Speech Hear Disord. 1971;36:476-483.
6. Andrade KC, Menezes PL, Carnaúba AT, Rodrigues RG, Leal MC, Pereira LD. Non-flat audiograms in sensorineural hearing loss and speech perception. Clinics. 2013;68(6):815-819.

## Aviso legal

Herramienta de orientación clínica. No reemplaza el criterio profesional. La interpretación y el uso de los valores obtenidos son responsabilidad del profesional actuante.
