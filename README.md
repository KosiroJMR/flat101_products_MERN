# flat101_products_MERN

Se utiliza stack MERN para desarrollo de la aplicación.

Contiene dos carpetas, backend y frontend. Instalamos dependencias de ambas desde consola con npm i

Para arrancar desde VS Code:
- Backend: npm run dev
- Frontend: npm start

Es necesario tener mongoDB levantado para poder conectar a la BBDD. Desde windows, ejecutamos mongod.exe y mongo.exe y los dejamos en segundo plano

Puertos:
- Backend usa puerto 4000
- Frontend usa puerto 3000

Se usa entre otras tecnologías nodemon, axios, botostrap, datepicker, router.

Se realiza un control de usuarios que pueden añadir productos a la aplicación. Se pueden crear y eliminar usuarios.
Es necesario crear un usuario para que pueda añadir productos. Se pueden eliminar y editar productos.
