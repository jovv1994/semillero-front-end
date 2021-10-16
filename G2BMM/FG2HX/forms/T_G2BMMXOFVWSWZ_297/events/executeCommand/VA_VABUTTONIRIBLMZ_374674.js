

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteJovvForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONIRIBLMZ_374674 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;
    console.log(entities.Estudiante.nombre);
    console.log(entities.Estudiante.apellido);

};