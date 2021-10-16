

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