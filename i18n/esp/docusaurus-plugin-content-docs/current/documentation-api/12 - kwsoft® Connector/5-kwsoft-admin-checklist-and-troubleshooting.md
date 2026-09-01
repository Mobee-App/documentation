# Checklist de administración y solución de problemas

Usa esta página como referencia rápida de operación.

## Checklist antes de salida a producción

1. Paquete de kwsoft instalado
2. Ambas plantillas de Flow disponibles
3. Objeto de registro personalizado creado
4. Lista relacionada añadida en los diseños de página objetivo
5. Permisos de usuario validados
6. Al menos una prueba exitosa de PDF automático
7. Al menos una prueba exitosa de exportación interactiva

## Revisiones diarias de administración

1. Monitorizar ejecuciones de Flow fallidas
2. Revisar borradores más antiguos que tu SLA objetivo
3. Confirmar que los usuarios solo ven plantillas relevantes
4. Verificar que los PDFs generados se adjuntan al registro correcto

## Problemas comunes y soluciones

Problema: no se ven plantillas

Posibles causas:

1. El filtro de plantillas es demasiado restrictivo
2. El usuario no tiene acceso a las plantillas
3. Faltan valores de metadatos obligatorios

Acción:

1. Quitar temporalmente el filtro y probar de nuevo
2. Validar visibilidad de plantillas con un perfil de administrador
3. Volver a aplicar el filtro una vez confirmado

Problema: el PDF no se adjunta al registro

Posibles causas:

1. El Record Id de entrada del Flow está vacío o es incorrecto
2. El usuario no tiene permisos sobre archivos/adjuntos
3. La generación falló antes de completarse

Acción:

1. Revisar detalles de depuración del Flow
2. Confirmar permisos a nivel de objeto y de archivos
3. Repetir la prueba con un usuario administrador

Problema: no se puede finalizar un documento interactivo

Posibles causas:

1. El nombre del documento en el log no coincide con kwsoft
2. Falta el Related Record Id en el log
3. El documento se eliminó o renombró fuera del proceso esperado

Acción:

1. Verificar el nombre del documento en el registro de log
2. Confirmar que el lookup al registro de negocio está informado
3. Reintentar la exportación con un nuevo documento interactivo

## Recomendación del modelo de soporte

Para una operación estable, define dos niveles de soporte:

1. Soporte L1 (administración): revisión de permisos, disponibilidad de plantillas, guía al usuario
2. Soporte L2 (técnico): cambios de lógica en Flows, actualización de consultas, resolución de integración

Esta separación mantiene ágil el soporte diario y deja los cambios técnicos bajo control.
