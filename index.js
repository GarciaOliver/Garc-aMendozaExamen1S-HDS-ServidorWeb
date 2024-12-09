//PROTOCOLO DE INTERCAMBIO
var http=require('http');
var server=http.createServer();

//SERVICIO WEB
function garcia(req,resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('Oliver Isaac Garcia Mendoza, 20 anios, Estudiante de Desarrollo de Software del IST 17 de Julio, 09-12-2024');
    resp.end();
}
server.on('request',garcia);
server.listen(3000,function(){
    console.log("La solicitud fu realizada mediante 3000");
});