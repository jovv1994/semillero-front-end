/* variables locales de T_G2BMMMMFIHRQP_426*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.estudianteecgform;
    

    //"TaskId": "T_G2BMMMMFIHRQP_426"


    	

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteEcgForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONQUQNQDY_902390 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    let nombre = entities.Estudiante.nombre;
    let apellido = entities.Estudiante.apellido;
    
    console.log(nombre);
    console.log(apellido);

};



}));
