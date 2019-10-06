#ARCHIVO CUCUMBER QUE CONTIENE LOS ESCENARIOS DE PRUEBA

Feature: Buscar Salario en Sitio de Planilla Publica
  Es un usuario de internet
  Para obtener más información acerca de los salarios
  de los empleados de la UTP para la transpariencia
  como Universidad Estatal.
 
  Scenario: Buscar Salario de Un Trabajador
    When Buscar el trabajador "Hector" "Montemayor"
    Then Deberia listar su informacion a nivel de planilla