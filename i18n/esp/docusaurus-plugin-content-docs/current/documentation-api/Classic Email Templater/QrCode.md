# Envío de Correo Electrónico con Plantilla Personalizada y Código QR Dinámico en Salesforce

En este ejemplo, recorreremos el proceso de enviar un correo electrónico de invitación a clientes desde una cuenta en Salesforce. El correo contendrá un código QR personalizado generado dinámicamente para cada destinatario.

**Nota**: Si bien este ejemplo utiliza el objeto "Cuenta" ("Account"), puede aplicar el mismo enfoque a otros objetos en Salesforce.

## Configuración de la Plantilla de Correo Electrónico

1. **Tipo de Plantilla**: Personalizado
2. **Encabezado Clásico**: No utilizado

## Contenido de la Plantilla

### Asunto:
```html
Invitación de {!Account.Name}
```
### Cuerpo HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Invitación de Cuenta</title>
</head>
<body>
    <p>Estimado cliente valioso,</p>
    <p>Estamos emocionados de invitarlo a nuestro evento. Encuentre su código QR personalizado a continuación:</p>
    <img src="http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}" alt="Código QR">
    <p>Este código QR está vinculado a su cuenta con el ID {!CASESAFEID(Account.Id)}. Agradecemos mucho su participación.</p>
    <p>¡Gracias!</p>
    <p>Atentamente,<br>Su Organización</p>
</body>
</html>
```
## Vista Previa del Cuerpo HTML:

![Sample Image](./img/Html-Body.png)

## Correo Electrónico Resultante
Después de que Salesforce procese la plantilla, se enviará el correo electrónico a los clientes. Así es como podría lucir el correo electrónico resultante:

**Resultado de Correo Electrónico de Ejemplo:**

![Sample Image](./img/result.png)

## Explicación

+ La plantilla de correo electrónico se configura como tipo "Personalizado", lo que significa que tiene control sobre el contenido y el diseño.
+ No se utiliza un encabezado clásico, por lo que el correo electrónico no tendrá un encabezado/pie de página predefinido desde una plantilla de encabezado clásico.
+ El asunto del correo electrónico se genera dinámicamente mediante campos de combinación. {!Account.Name} inserta el nombre de la cuenta en la línea de asunto.
+ El cuerpo HTML del correo electrónico es donde reside el contenido principal.
+ La etiqueta img obtiene la imagen del código QR desde una URL. La URL incluye el campo de combinación CASESAFEID(Account.Id) para generar dinámicamente el código QR en función del ID de cuenta del destinatario.
+ Un párrafo debajo del código QR explica el propósito del código QR y su asociación con la cuenta del destinatario.
+ El correo electrónico concluye con un mensaje de agradecimiento y la información de la organización remitente.

## Personalización

Esta plantilla brinda una experiencia de invitación personalizada para cada destinatario al incorporar el nombre de su cuenta y un código QR vinculado a su cuenta específica.

Tenga en cuenta que la URL del código QR (http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}) debe estar funcional y ser capaz de generar códigos QR basados en el ID de cuenta proporcionado.

Este enfoque mejora la participación de los clientes y ofrece una experiencia de invitación única a través de las plantillas de correo electrónico de Salesforce.