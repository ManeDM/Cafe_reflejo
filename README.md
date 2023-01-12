# CafeReflejo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

<h1 align="center">Café Reflejo</h1>

<p align="center">

<img src="https://github.com/ManeDM/Cafereflejo/blob/main/src/assets/icons/logo_white.svg" width="150px" >

</p>

<p>
Este proyecto gira en torno a una lista de productos ubicada en el archivo products.ts a partir de esta se crearan los diferentes servicio y funcionalidades que tendra la web, asi como tambien se utulizara de base apra crear templates y estilos, permitiendo la creaciond e tarjetas.

Hay 2 grupos de componentes en el proyecto dispuesto en su respectivas carpetas, en la carpeta Home se encuetran el componentes "Home, el cual sirve como pagina principal de navegacion y desde la cual se nevega a las otras instancias de la web.

El segundo grupo esta ubicado en la carpeta Shared y se encuentran los componentes "Header" "Hero-section" "Slider" "Carrito" "Abous Us" "Footer" y "list-cart".

A su vez las funcionalidades de la pagina se dan desde dos servicos llamados "Cart-Wiev-service" y "wp-service"
</p>

<h2 align="center" width="150px"> Estructura de carpetas</h2>
<ul>
<li>Home
<ul>Home</ul>
</li>
<li>Service</li>
<ul>Cart-Wiev-service</ul>
<ul>wp-service</ul>
<li>Shared
<ul>Header</ul>
<ul>Hero-section</ul>
<ul>Slider</ul>
<ul>Carrito</ul>
<ul>Abous Us</ul>
<ul>Footer</ul>
</li>
</ul>

<h2 align="center">Descripción de los servicio</h2>

<p align="center">

<img src="https://github.com/ManeDM/Cafereflejo/blob/main/src/assets/readme_img/Service_products.png" width="600px"> 

</p>

<p>
Primero se establece una varieble que llame a lista de productos, luego para trabajar con estos se crear una variable items que recupere las caracteristicas especficas de cada producto, nombre, peso, disponibilidad etc.

Ya con esto se crean 5 funciones que interactuaran con los demas componentes del proytecto.

addToCart() sirve para agregar productos al carrito, cada vez que se agrega uno se suma a la tarjeta ya pintada en el carrito.

removeFromCart() sirve para eliminar productos del carrito, cada vez que se quita uno se elimina uno de la cantidad total de productos del carrito.

totalPrice() es una funcion que calcula el precio total con base al precio y el subtotal de cada productos cargado al carrito.

CartList() permite llamar las caracteristicas del los productos para hacer plantillas de html que reflejen una tarjeta de cada producto. 

 reduceAmount() esta funcion permite reducir los subtotales para que las otras funciones puedan hacer los calculos.
</p>

<p align="center">

<img src="https://github.com/ManeDM/Cafereflejo/blob/main/src/assets/readme_img/Service_wp.png" width="400px"> 

</p>

<p>
Se establece un variable que se iguale a la API de Whatsapp y otro varaible que se igual al codigo d eun salto de linea, luego de esto se crean dos funciones.

skipLine() se encarga de implementar la variable para el salto de linea e igualarlo a un mensaje pre fijado.

skipLine() se encarga de enviar el mensaje al Wp del vendedor con los productos que requiere el cliente.
</p>

<h2 align="center">Shared y sus componentes</h2>

<h3 align="center">Header</h3>

<img src=https://github.com/ManeDM/Cafereflejo/blob/main/src/assets/readme_img/Burgue_function.png width="400px"> 

<p align="center">
Es la cabecera general de la página, trabaja con un booleano y mediante la directiva *NgIf se abre o cierra el menu.
</p>

<h3 align="center">Hero-section</h3>
<p align="center">
En este componente muestra un primer plano dle producto y un frase de copy, no tiene funcionalidad.
</p>

<h3 align="center">Slider</h3>
<p align="center">
En este componente se muestra un carrusel de imagenes.
</p>

<h3 align="center">Poke-Search</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeSearch.jpeg" width="350px"> 

</p>

<p align="center">
La función principal del poke-search este basada en dato de entrada que el usuario ponga en la barra de busqueda, gracias al decorador "@Output" podemos tomar valor de otro componentes esto nos permitira enlazar el buscador con la tabla de pokemons, a ese decorador le atribuimos una variable publica llamda "emmitSearch" que servira de puente entre el Input de data puesto en el HTML o buscador, los valores recibidos atravez de la funcion de TS "eventEmmiter" son de tipo string.
</p>

<h3 align="center">Poke-Team</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/Poke-Team.jpeg" width="350px"> 

</p>

El Poke-Team esta formado por tarjetas de los datos especificos de cada pokemon al que se hace referencia, hace uso en un NGif y una variable llamada show con una funcion asociada con base a valores booleanos que permiten generar el Switch que nos permite crear y destruir el componente en tiempo real, lo que nos permite enseñar y ocultar el equipo sin alterar la distribucion de los otros componentes.

<h2 align="center">Pages y sus componentes</h2>

<h3 align="center">Home</h3>

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/HTML-Home.jpeg" width="350px"> 

</p>

La función principal Home es poder usar los datos del servicio empleados en todos los otros modulos, a su vez el componente HTML es la ruta principal donde se importan cada uno de los etiquetas que enlezan a los componentes.

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/TS-Home.jpeg" width="350px"> 

</p>


<h3 align="center">Poke-Details</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/Poke-Details.jpeg" width="350px"> 

</p>

<p align="center">
En este componente se ubican los datos especifcios de cada pokemon, esto se hace mediante la creacion de una varaible privada que hace referencia el decorador "ActivateRoute", seuido a esto mediante el elemento "GET" creamos una función que nos permita enrutar los valores de las tarjetas mediante el uso de 3 constantes "ID" "POKEMON" y "NAME".