# Proceso de Aprobación de Hojas de Tiempo

## Introducción

Puedes agregar un proceso de aprobación para que tu gerente, o un aprobador designado, revise y apruebe o rechace las entradas de tiempo que hayas enviado.

![Vista previa de envío del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessPreview.png "Vista previa de envío del proceso de aprobación")  
<sup>*Vista previa de envío del proceso de aprobación*</sup>

---

## Activación del Proceso de Aprobación

### 1. Crear el Proceso de Aprobación

- Ir a la página de configuración
- Acceder a los Procesos de Aprobación
- Gestionar Procesos de Aprobación Para: Período de Tiempo
- Crear un Nuevo Proceso de Aprobación: Usar el Asistente de Configuración Estándar

![Introducción a la creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationIntro.png "Introducción a la creación del proceso de aprobación")

#### Paso 1: Introducir Nombre y Descripción

![Paso 1 de creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationStep1.png "Paso 1 de creación del proceso de aprobación")

#### Paso 2: Especificar Criterios de Entrada

**No hay acción que realizar**  
![Paso 2 de creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationStep2.png "Paso 2 de creación del proceso de aprobación")

#### Paso 3: Especificar Campo del Aprobador y Propiedades de Editabilidad del Registro

1. **Especificar Campo del Aprobador (Para Enrutamiento de Aprobación Automatizado)**  
   Seleccionar: *Gerente (Manager)*

2. **Editabilidad del Registro**  
   Seleccionar: *Los administradores O el aprobador actualmente asignado pueden editar registros durante el proceso de aprobación (Administrators OR the currently assigned approver can edit records during the approval process)*  

![Paso 3 de creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationStep3.png "Paso 3 de creación del proceso de aprobación")

#### Paso 4: Seleccionar Plantillas de Notificación

**No hay acción que realizar**  
![Paso 4 de creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationStep4.png "Paso 4 de creación del proceso de aprobación")

#### Paso 5: Seleccionar Campos a Mostrar en el Diseño de la Página de Aprobación

**No hay acción que realizar**  
![Paso 5 de creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationStep5.png "Paso 5 de creación del proceso de aprobación")

#### Paso 6: Especificar Presentadores Iniciales

1. **Presentadores Iniciales**  
   Seleccionar: *Propietario del Período de Tiempo, Creador del Registro (Time Period Owner, Record Creator)*

2. **Configuraciones de Presentación**  
   Seleccionar: *Permitir que los presentadores retiren solicitudes de aprobación (Allow submitters to recall approval requests)*  

![Paso 6 de creación del proceso de aprobación](images/APImg/approvalProcessCreation/approvalProcessCreationStep6.png "Paso 6 de creación del proceso de aprobación")

---

### 2. Gestionar el Proceso de Aprobación

Después de completar la creación del proceso de aprobación, podrás gestionar acciones (Presentación Inicial, Aprobación Final, Rechazo Final y Retiro).

![Vista previa de acciones y pasos de aprobación](images/APImg/approvalProcessManagement/actionsAndApprovalStepsPreview.png "Vista previa de acciones y pasos de aprobación")  
<sup>*Vista previa de acciones y pasos de aprobación*</sup>

#### 2.1. Acciones de Presentación Inicial (Initial Submission Actions)

1. Agregar Existente (Add Existing)
2. Agregar: *Actualización de Campo: Update Status to Submitted*

![Agregar acción de presentación inicial](images/APImg/approvalProcessManagement/initialSubmissionAddAction.png "Agregar acción de presentación inicial")

![Agregar acción de presentación inicial 2](images/APImg/approvalProcessManagement/initialSubmissionAddAction2.png "Agregar acción de presentación inicial")

#### 2.2. Acciones de Aprobación Final (Final Approval Actions)

1. Editar Bloqueo de Registro y Seleccionar: *Desbloquear registro para edición (Unlock record for editing)*
2. Agregar Existente (Add Existing) y Agregar: *Actualización de Campo: Update Status to Approved*

![Editar y agregar acción de aprobación final](images/APImg/approvalProcessManagement/finalApprovalAddAction.png "Editar y agregar acción de aprobación final")

![Bloqueo de registro de edición de aprobación final](images/APImg/approvalProcessManagement/finalApprovalAddAction1.png "Bloqueo de registro de edición de aprobación final")

![Agregar acción de aprobación final](images/APImg/approvalProcessManagement/finalApprovalAddAction2.png "Agregar acción de aprobación final")

#### 2.3. Acciones de Rechazo Final (Final Rejection Actions)

1. Agregar Existente (Add Existing)
2. Agregar: 
    a. *Actualización de Campo: Update Status to Rejected*
    b. *Alerta de Correo Electrónico: Send Email Notification To Assignee On Rejection* (Esta es una alerta de correo electrónico enviada al presentador de la hoja de tiempo si su hoja de tiempo es rechazada por el aprobador. Si no se necesita, esta alerta de correo electrónico no debe agregarse)

![Agregar acción de rechazo final](images/APImg/approvalProcessManagement/finalRejectionAddAction.png "Agregar acción de rechazo final")

![Agregar acción de rechazo final 2](images/APImg/approvalProcessManagement/finalRejectionAddAction2.png "Agregar acción de rechazo final")

#### 2.4. Acciones de Retiro (Recall Actions)

1. Agregar Existente (Add Existing)
2. Agregar: *Actualización de Campo: Update Status to Draft*

![Agregar acción de retiro](images/APImg/approvalProcessManagement/recallAddAction.png "Agregar acción de retiro")

![Agregar acción de retiro 2](images/APImg/approvalProcessManagement/recallAddAction1.png "Agregar acción de retiro")

---

### 3. Elegir al Aprobador

#### 3.1. Asignar al Aprobador en el Proceso de Aprobación

El aprobador puede ser el gerente del presentador o un usuario específico responsable de todos los presentadores, como el Gerente de Recursos Humanos, asegurando que todas las hojas de tiempo sean dirigidas a una persona para su aprobación. Esto también se controla a nivel del Proceso de Aprobación después de su creación.

![Pasos de aprobación](images/APImg/approvalProcessManagement/approvalStepsEdit.png "Pasos de aprobación")

![Cambio de aprobador de pasos de aprobación](images/APImg/approvalProcessManagement/approvalStepsEditStep3.png "Cambio de aprobador de pasos de aprobación")

#### 3.2. Asignación del Conjunto de Permisos (Permission Set)

En Configuración > Usuarios, establece el conjunto de permisos *Mobee Approve All TimeSheets* en el usuario aprobador.

![Editar conjunto de permisos en el usuario](images/APImg/approvalProcessManagement/editPermissionSetOnUser.png "Editar conjunto de permisos en el usuario")

![Editar conjunto de permisos en el usuario 2](images/APImg/approvalProcessManagement/editPermissionSetOnUser2.png "Editar conjunto de permisos en el usuario")

---

### 4. Uso del Proceso de Aprobación

#### 4.1. Presentador
El usuario envía su hoja de tiempo para aprobación  
*Esta acción es retirable (1)*  
*Comentario de presentación (2)*  
*Indicador de entradas de tiempo enviadas (3)*  
![Hoja de tiempo enviada](images/APImg/approvalProcessBehavior/submittedTimeSheet.png "Hoja de tiempo enviada")

#### 4.2. Aprobador
El aprobador asignado puede aprobar/rechazar en el contacto del presentador  
*El aprobador asignado revisa la hoja de tiempo (entradas de tiempo enviadas) y tiene la opción de aprobar o rechazar la presentación.*  
![Hoja de tiempo enviada](images/APImg/approvalProcessBehavior/submittedTimeSheet2.png "Hoja de tiempo enviada")

### 5. Comportamiento y Consideraciones del Proceso de Aprobación

- La aprobación parcial es posible

Ejemplo A:  
*El usuario envía una solicitud de días libres, que es aprobada. Luego, envía su carga de trabajo asignada para los días restantes*  
![Ejemplo de proceso de aprobación parcial](images/APImg/approvalProcessBehavior/partialApprovalExample1.png "Ejemplo de proceso de aprobación parcial")  
![Ejemplo de proceso de aprobación parcial](images/APImg/approvalProcessBehavior/partialApprovalExample2.png "Ejemplo de proceso de aprobación parcial")

Ejemplo B:  
*El usuario envía los últimos días del mes para aprobación. En el mes siguiente, para la misma asignación, envía los días de semana restantes para aprobación*  
![Ejemplo de proceso de aprobación parcial](images/APImg/approvalProcessBehavior/partialApprovalExample3.png "Ejemplo de proceso de aprobación parcial")  
![Ejemplo de proceso de aprobación parcial](images/APImg/approvalProcessBehavior/partialApprovalExample4.png "Ejemplo de proceso de aprobación parcial")

- Cuando se aprueba una hoja de tiempo, se envía una notificación al remitente

- Cuando se rechaza una hoja de tiempo, se envían tanto una notificación como un correo electrónico al remitente (el correo electrónico se envía si se agrega según la sección 2.3. Acciones de Rechazo Final)

- Cuando se rechazan las entradas de tiempo pendientes en una hoja de tiempo, toda la hoja de tiempo se vuelve editable

- Al pasar el cursor sobre los siguientes íconos ![Ícono de Enviado](images/APImg/approvalProcessBehavior/submittedIcon.png "Ícono de Enviado"), ![Ícono de Aprobado](images/APImg/approvalProcessBehavior/approvedIcon.png "Ícono de Aprobado") y ![Ícono de Rechazado](images/APImg/approvalProcessBehavior/rejectedIcon.png "Ícono de Rechazado") se muestran comentarios del remitente o del aprobador relacionados con la presentación, aprobación o rechazo, respectivamente

- Los siguientes íconos ![Ícono de Enviado Celda](images/APImg/approvalProcessBehavior/submittedIconCell.png "Ícono de Enviado Celda") y ![Ícono de Aprobado Celda](images/APImg/approvalProcessBehavior/approvedIconCell.png "Ícono de Aprobado Celda") sirven como indicadores que muestran el estado de la entrada de tiempo