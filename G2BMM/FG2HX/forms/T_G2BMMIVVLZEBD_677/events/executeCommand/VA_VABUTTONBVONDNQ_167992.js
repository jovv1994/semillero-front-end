

//Entity: Estudiante
//Estudiante. (Button) View: FormularioJovvForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONBVONDNQ_167992 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;
    console.log(entities.Estudiante.nombre);
    console.log(entities.Estudiante.apellido);

};