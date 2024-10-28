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