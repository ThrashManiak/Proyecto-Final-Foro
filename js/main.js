var api ={
    url:'https://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};

var $cotenedorComentarios = $("#postComentarios");


var cargarPagina = function(){
    cargarDatos();
    $("#agregarComentario").submit(agregarComentario);
    $('.modal').modal();
    
    agregarComentario
}

var plantillaComentario = '<section class="col s12 m6  comentario" data-id = http://examen-laboratoria-sprint-5.herokuapp.com/topics/"**id**"/responses>' + 
            '<div class="card ">'+
                '<div class="card-title">'+
                    '<h5 id="nombre">**nombre**</h5>'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>**comentario**</p>'+
                '</div>'+
            '</div>'+
        '</section>';

var cargarDatos =function(){
    $.getJSON(api.url,function(nombre){
        nombre.forEach(crearComentarios)
    }); 
};

var crearComentarios = function(nombre){
    var nombreUsuario = nombre.author_name;
    var comentario = nombre.content;
    var idComentario = nombre.id;
    var nuevaPlantilla = " ";
//    console.log(nombreUsuario);
    
    nuevaPlantilla += plantillaComentario.replace('**id**',idComentario).replace('**nombre**',nombreUsuario).replace('**comentario**',comentario);
    $cotenedorComentarios.append(nuevaPlantilla);
    
};

var agregarComentario = function(e){
  e.preventDefault();
    
 
    var nombre = $("#nombreUsuario").val();
    var comentario = $("#comentarioUsuarioo").val();
 
    
    $.post(api.url,{
        
        author_name : nombre,
        content : comentario
        
    },function (response){
        console.log(response);
        cargarDatos();
    });
};

 
    
    
    



$(document).ready(cargarPagina);