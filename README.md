# Proyecto Backend - API de Gestión de Tareas
    Este proyecto es el backend de una aplicación de gestión de tareas, diseñado con TypeScript y Express.
    Implementa una arquitectura modular y escalable, utilizando el patrón Repository para manejar la lógica de acceso a datos.
    La autenticación se realiza a través de Firebase.

# Tecnologías Utilizadas
    1.Node.js: Entorno de ejecución para el backend.
    2.Express.js: Framework para crear la API REST.
    3.Firebase Admin SDK: Usado para la autenticación de usuarios.
    4.TypeScript: Lenguaje que permite mayor seguridad y escalabilidad.
    5.Patrón Repository: Para desacoplar la lógica de negocio del acceso a los datos.

# Estructura del Proyecto
    El proyecto está estructurado de manera modular y organizada, 
    separando la lógica de negocio, la capa de acceso a datos, y la configuración de la aplicación.

    src/
    │
    ├── config/                   # Configuración del proyecto
    │   └── firebase.ts           # Configuración de Firebase Admin SDK
    │
    ├── controllers/              # Controladores para manejar la lógica de negocio
    │   ├── task.controller.ts    # Lógica de negocio de las tareas
    │   └── user.controller.ts    # Lógica de negocio de los usuarios
    │
    ├── entities/                 # Definición de entidades o esquemas de datos
    │   ├── task.entity.ts        # Entidad de tarea
    │   └── user.entity.ts        # Entidad de usuario
    │
    ├── middleware/               # Middlewares personalizados
    │   └── authMiddleware.ts     # Middleware de autenticación para verificar tokens
    │
    ├── repositories/             # Repositorios que manejan el acceso a datos
    │   ├── task.repository.ts    # Acceso a datos de las tareas
    │   └── user.repository.ts    # Acceso a datos de los usuarios
    │
    ├── routes/                   # Definición de rutas de la API
    │   ├── task.router.ts        # Rutas de tareas
    │   └── user.router.ts        # Rutas de usuarios
    │
    └── services/                 # Servicios que encapsulan la lógica de negocio
        ├── task.service.ts       # Servicio de tareas
        └── user.service.ts       # Servicio de usuarios

# Endpoints de la API
 # Autenticación
        POST /api/users/register:   Registra un nuevo usuario.
        POST /api/users/find-user-email/:email     Inicia sesión y genera un token de autenticación.

 # Tareas
        GET /api/task/getAll?page=1&limit=5: Obtiene todas las tareas del usuario autenticado, paginadas.
        POST /api/task/create: Crea una nueva tarea.
        PUT /api/task/update/:id: Actualiza una tarea específica.
        DELETE /api/task/delete/:id: Elimina una tarea específica.
        POST /api/task/complete: Marca como completadas las tareas con los IDs proporcionados.

# Funcionalidades Implementadas
    1. Autenticación con Firebase
    El backend utiliza Firebase Admin SDK para la autenticación. Cada petición protegida requiere un token, 
    que es validado por el middleware authMiddleware.ts antes de que la solicitud avance a los controladores.

    2. Patrón Repository
    El proyecto sigue el patrón Repository para organizar la lógica de acceso a datos. Los repositorios (task.repository.ts, user.repository.ts)
    encapsulan las operaciones de acceso a datos, permitiendo que los servicios (task.service.ts, user.service.ts) 
    interactúen con ellos sin necesidad de conocer los detalles de la implementación de los datos.

    3. Control de Acceso y Middleware de Autenticación
    El middleware authMiddleware.ts asegura que solo los usuarios autenticados puedan acceder a las rutas protegidas.
    Este middleware valida el token en cada solicitud y lo asocia con el usuario autenticado.

    4. Modularidad y Reutilización de Componentes
    La lógica de negocio está contenida en los servicios, lo que permite una mejor organización y facilita la reutilización.
    Los controladores se limitan a manejar las solicitudes HTTP y delegan la lógica de negocio a los servicios.

    5. Errores y Mensajes de Confirmación
    Para mejorar la experiencia del usuario, se implementaron mensajes de confirmación y manejo de errores detallado,
    lo que permite informar sobre el estado de cada operación.        

 # archivo .env
    una vez descargues el proyecto se te recomienda agregar el archivo .env en el directorio 
    a la misma altura de src y le agregas las siguientes variables de entorno
    

    SERVICE_ACCOUNT_PROJECT_ID=prueba-atom
    
    SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDReqQITCMKCv38\n50nYjeOW/SiJE/Xkx9VbH9/KGV2jrqmVUa6Bh6/JlM9Ds3i7xA9sxat/y5pT+oGg\n1vcS27wM1xPHFD6imqIryqh/a+28+aBo0SFHBY3JGuqHRaVurYa3RE8g1je545Np\n9pVSSq1Eaw8wrFLrgglsITgh67rnaI95ZhnbH0IU6IXNVFM3rhECyuqj4Ffpo7os\n8nTqG2ZLK7ilNMhgjnDU/yNCpfJVWuDFrUDxPUAGD1AOEQ93M5LLQJe908tVLhN9\nuxMkY6/3wd2vuSer6GLKejwVBmiFwHbwRFdc8f1EUFB2eiJbLr1FL/4TRTp/Ws9s\nYr1koue5AgMBAAECggEASG+GJTBetWxTo44+5Nk7p8xmpe/3CWNojZgaBIJ89MrC\n7VVPaI8I5EXG3fxDdXo4cz5vLUO0W/G1vW5YBXdiMXZ16lM/zW53QXlUhqtFjCEt\nrNEUFsD+5FmgW6JjsD/k456FVi99GZRuNygDPm+ANrZmjEgqbDGNHIzoIiKngLjw\nnmwgbF/opDprCi7LMI/z2Qhh5qeSwtuzom+lgMtHFwbWCfLfFmetdfjtJvqcb1nr\n2tLpOjRa2A1NFHErapnwNcDZWORBJJcLsTrKCpfG+Yn/E+RF6N6RN6icDNJs92Yb\nRZ7MkkF5KoNFkhhSFCKM0AU31hl5Ko4EVWlCEtaouQKBgQD7qgSYLcWmCpBwN5bm\n7nI6h0H+/ZIXI1jg/p2cUU5QU6tG7nBBFLFeW83v7rUKuJ4/DkjhV+Vq8lZG4tFc\n0dB1vh6qrv/pOB/+UmD7XcBDGPN1I+eK+mh02PUTZdL4ikye5thTE2RS4lbiZZjR\nCh5g+Hl37r5NiXXvU7w8RiStHwKBgQDVFpAJ0PPih1arUuOz0opX7b1B9yBZ00Fm\nIu4d7fHkFAmSK8nfDidb7UUjJwdvvB1FPDrHg4AgTofLCplqcReH9t3XWV242W6v\nyr1C4+Ao6y0cXT1WU4IHlXTCgM/2nX/Jt0vGR9AvgApfqKkPNGi161CQXMS/gNl6\ngKZreVp4JwKBgCvkPSTlZsFMumA38cOY9qcqi+ITC3WpnoivH4Hx1DzCOu8GCuHu\n3/ha/pHICh8yj7bjoOZcVBDQ7ycxy93qYfcHD4YpO0zLkxjh+TQd57hME7nsZyeg\nALPQWv3lFmRuimp0TGpAyZCDFTArE/nxT9cNvvGh2+LeBImXCw9gFGl1AoGBAMNL\n342vnabThYKWAK2R3EuET/4CYfsRnJHgl76EkzsHhlIaofU2QqqFBuWV4sHsdiM7\ndV/gTPDPKLPVrhAZQIjToDS76iL93O1u8hE5SvwVtw2VAx94f+c1eoK9jlynszQM\nM32x2cN/JYLQ0MlnrkR1PCxjactea3RULrK30UvnAoGAQ4KjF2v7uAWkd0E00JrX\nVJwocqpPvc2yUy9vNii5tb7LwdNRBiwvOy55QIpa7a5AIocFgCi0+L66eC4as7GF\nNcfiffSo3Mo18OD4JpnDMGZeSZBOpHO8GGwGhRt4LkaV9D9aKYWgaGzEoM1Klma9\n+97c7qoxlG9+xvvJlmbFYCA=\n-----END PRIVATE KEY-----\n"
    
    SERVICE_ACCOUNT_CLIENT_EMAIL=firebase-adminsdk-8t6a2@prueba-atom.iam.gserviceaccount.com