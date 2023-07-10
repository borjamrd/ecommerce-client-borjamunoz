# RESUMEN

Esta prueba consiste en la creación de una mini-aplicación para comprar dispositivos moviles.
-  La aplicación tendrá únicamente dos vistas:
1. Vista principal - Listado de productos
2. Detalles del producto
-  La implementación de los diseños queda a libre elección, pero deberá seguir la
estructura que se ha definido en las capturas. Se valorará positivamente el nivel de
detalle de la propuesta.
-  Se requiere la utilización de React/Preact para el desarrollo de aplicación y se podra
complementar con otras librerias JS si se estima oportuno.
-  Se permite la utilización de JS con ES6, y preferiblemente que no se realize la prueba
con Typescript.
-  Se prodrá utilizar un boilerplate template para la creación de la estructura del proyecto.
-  La aplicación será una SPA, donde se añadirá el enrutado de la vistas el codigo de
cliente, sin que sea una MPA o la utilización de SSR.
-  El proyecto tendrá que contener los siguiente script, para poder gestionar la aplicación:
1. START - Modo desarrollo
2. BUILD - Compilación para modo Producción
3. TEST - Lanzamiento de test
4. LINT - Comprobación de código
-  El proyecto deberá presentarse en un repositorio de codigo abierto (Github, Gitlab,
Bitbucket), con la solución al problema. Se quiere que se pueda subir el codigo de
manera evolutiva de manera que se vaya alcanzando hitos.
-  En el repositorio hay que incluir un documento README (preferiblemente incluirlo en el
primer commit), donde se incluirá la explicación para ejecutar el proyecto asi como
alguna nota explicativas o información adicional que se consideré necesaria.

## DESCRIPCIÓN DE LAS VISTAS
#### Product List Page
Pagina donde se visualizará la lista de los productos.
-  Esta pagina, se mostrarán todos los elementos que nos devuelve la petición del API
-  Permitirá el filtrado del contenido en función del criterio de busqueda que el usuario
introduzca
-  Al seleccionar un producto, deberá navegar a los detalles del mismo.
-  Se mostrarán un maximo de cuatro elementos por fila, y que sea adaptativo segun la resolución.

#### Product List Page
-  Esta pagina de dividirá en dos columnas:
o En la primera se mostrará el componente de la imagen del producto
o En la segunda, se mostrará los detalles y las acciones del producto
-  Deberá mostrar un link para navegar de vuelta a la lista de productos

##Descripción de los componentes
####Cabecera (Header)
El titulo o el icono de la aplicación, actuará como enlace a la vista principal.
-  Se mostrará un breadcrumbs, mostrando la pagina donde se encuentra el usuario asi
como un link para su navegación.
-  En la parte derecha de la cabecerá, se mostrará el numero de items que se hayan
añadido al carrito.
#### Barra de búsqueda (Search)
-  Se mostrará un input al usuario, el permitirá la introdución de una cadena de texto.
-  El usuario deberá filtra los productos en función del texto introducido, y se comparará
con el Marca y el Modelo de los productos.
-  El filtrado, será en tiempo real, es decir, se lanzará una busqueda cada vez que el
usuario cambie los criterios de busqueda.

#### Elemento lista (ITEM)
-  Se mostrará la siguiente información del producto:
o Imagen
o Marca
o Modelo
o Precio

#### Imagen Producto (IMAGE)
-  Se visualizará la imagen del producto
Descripción Producto (DESCRIPTION)
-  Se mostrará los detalles asociados a los productos. Se mostrarán al menos los siguientes
atributos:
o Marca
o Modelo
o Precio
o CPU
o RAM
o Sistema Operativo
o Resolucion de pantalla
o Bateria
o Camaras
o Dimensiones
o Peso

#### Acciones Producto (ACTIONS)
-  Se mostrará dos tipos de selectores, donde el usuario, podra seleccionar el tipo del
producto que quiere añadir a la cesta. Se mostrarán los selectores de opciones para las
siguiente atributos:
o Almacenamiento
o Colores
-  Aunque solo exista una opción, se mostrará el selector con la información. Para este
caso de uso, deberá estar seleccionado por defecto.
-  Se visualizará un boton de Añadir, donde el usuario, un vez seleccionada las opciones,
añadirá el producto a la cesta.
-  Al añadir un producto mediante el API, se requiere mandar la siguiente información:
o El identificador del producto
o El codigo de color seleccionado
o El codigo de la capacidad de almacenamiento seleccionada
-  La petición de añadir, devuelve en la respuesta, el numero de productos que hay en la
cesta. Este valor deberá mostrarse en la cabecera de la aplicación en cualquier vista
de la misma. Para ello se requiere persistir el dato.