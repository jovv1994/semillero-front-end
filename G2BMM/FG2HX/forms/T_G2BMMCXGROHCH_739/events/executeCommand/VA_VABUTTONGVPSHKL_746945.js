

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteSpcForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONGVPSHKL_746945 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;
    console.log(entities.Estudiante.nombre);
    console.log(entities.Estudiante.apellido);

};