# Como correr el proyecto
Dentro del mismo repositorio encontramos un archivo Dockerfile y un docker-compose.yml para poder correr el proyecto y ejecutar todo sin configuracion adicional alguna.

#### Requisitos:
Docker \
Docker Compose \
Repositorio clonado \
Correr el proyecto docker con `docker-compose up` \
Conectarse a la terminar del contenedor de la base de datos y crear la base de datos con la siguiente consulta `create schema technical_test;`

## Location now

#### Agregue por defecto la vista de bienvenida para la funcionalidad de almacenar la ubicación

## Archivos involucrados
Dentro de la carpeta `resources/js/components` se encuentran los componentes de las vista para almacenar y mostrar las ubicaciones.
En la carpeta `app/Http/Controllers` se encuentra el controller `LocationController` encargado de hacer el almacenamiento y obetener las ubicaciones ya guardadas
En la carpeta `app/Models` esta el model Location relacionado a la tabla locations donde se almacena la información

## Imprimir árbol
#### Esta función imprime el árbol de navidad con una altura definida de 10.
Para poder imprimir el árbol en consola es necesario esta conectado a la terminal del contenedor `technical_prod` y correr el siguiente comando `php artisan print_tree`

## Archivos involucrados
Dentro de la carpeta `app/Console/Commands` se encuentra el archivo PrintTree que es el encargado de manejar la ejecucion del comando para imprimir en pantalla el árbol.

## API Tasks
#### Esta función es una API que primero debe ser llanada la DB consumiento otra API.
Para poder llenar la DB con la info de la API `https://jsonplaceholder.typicode.com/todos` es necesario esta conectado a la terminal del contenedor `technical_prod` y correr el siguiente comando `php artisan get_task_data`

## Archivos involucrados
Dentro de la carpeta `app/Http/Controllers` se encuentra el archivo `TaskController` que es el encargado de manejar la logica de la API.