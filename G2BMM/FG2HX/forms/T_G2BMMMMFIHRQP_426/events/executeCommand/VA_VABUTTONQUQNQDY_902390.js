

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