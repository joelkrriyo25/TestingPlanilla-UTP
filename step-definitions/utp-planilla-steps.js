//MODULO SELENIUM QUE TRABAJA CON CUCUMBER PARA RESCATAR LOS DATOS Y TRABAR CON ELLOS
module.exports = function () {

    this.When(/^Buscar el trabajador "([^"]*)" "([^"]*)"$/, function (nombre, apellido) {

        return helpers.loadPage('http://www.utp.ac.pa/planilla-de-la-utp').then(function() {
     
            return page.utpBusqueda.performSearch(nombre,apellido);
        })

    });
 
    this.Then(/^Deberia listar su informacion a nivel de planilla$/, function () {

        return driver.wait(until.elementsLocated(by.css('tr.odd')), 10000).then(function(){
        return driver.findElements(by.css('tr.odd'));
        })
        .then(function (elements) {

        expect(elements.length).to.not.equal(0);
        });
         

    });

};