/* variables locales de T_G2BMMHBCSPWNH_310*/

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

    
        var task = designerEvents.api.estudiantelfyform;
    

    //"TaskId": "T_G2BMMHBCSPWNH_310"


    	

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteLfyForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONGEOEQRI_619540 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;
    console.log("--------Inicio-EstudianteLfyForm--------");
    console.log("Nombre ingresado"+entities.Estudiante.nombre);
    console.log("Apellido ingresado"+entities.Estudiante.apellido);
    console.log("--------Fin-EstudianteLfyForm--------");
};



}));
