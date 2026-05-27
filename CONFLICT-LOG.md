# Registro de Conflicto

* *Archivo:* index.html
* *Ramas:* main (Adrián) y rama-estilos (Isaac).
* *Problema:* Ambos modificamos exactamente las mismas líneas en el archivo index.html al mismo tiempo. Específicamente, el título <h1> y el párrafo de introducción <p> tenían textos diferentes (una versión decía "Portal Oficial..." y la otra "¡Bienvenidos al Gran Portal..."). Git detuvo la fusión al no saber qué versión conservar.
* *Solución:* Se resolvió manualmente en Visual Studio Code utilizando la opción Accept Current Change (Aceptar cambio actual). Esto eliminó automáticamente las marcas de conflicto de Git y conservó la versión del código que ya tenía integrada la clase CSS .titulo-seccion. Posteriormente, se guardó el archivo, se preparó con git add y se registró el commit final de la fusión.