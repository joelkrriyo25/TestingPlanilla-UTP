//MODULO ACCESIBLE GLOBALMENTE
module.exports = {
 
    elements: {
        nombre: by.id('edit-nombre'),
        apellido: by.id('edit-apellido')
    },
 

    performSearch: function (nombre,apellido) {
 
        var selectorNombre = page.utpBusqueda.elements.nombre;
        var selectorApellido = page.utpBusqueda.elements.apellido;
        
        driver.findElement(selectorNombre).sendKeys(nombre)
        
        return driver.findElement(selectorApellido).sendKeys(apellido, selenium.Key.ENTER);
    }
};