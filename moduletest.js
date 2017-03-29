var app;
app = angular.module('table',[]);

app.controller('ControlTable', function (){

this.table = 1;

this.clickTabla = function(cambiar){
this.table = cambiar;
};

this.activartabla = function(valoractivado){
return this.table == valoractivado;};


});
