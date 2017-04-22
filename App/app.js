
$(function(){
  $(document).ready(function(){

/*JS FOR CONTEXT EXCHANGE BY MENU*/
    var htmlImport = document.getElementById('link_recipientes');
    var htmlDoc = htmlImport.import;
    var htmlMessage = htmlDoc.querySelector('#recipientes');
    document.querySelector('main').appendChild(htmlMessage.cloneNode(true));

    $('#registrar_clientes').on('click',function() {
      var htmlImport = document.getElementById('link_clientes');
      var htmlDoc = htmlImport.import;
      var htmlMessage = htmlDoc.querySelector('#clientes');
      document.querySelector('main').innerHTML = htmlMessage.cloneNode(true).innerHTML;
    });
    $('#registrar_funcionarios').on('click',function() {
      var htmlImport = document.getElementById('link_funcionarios');
      var htmlDoc = htmlImport.import;
      var htmlMessage = htmlDoc.querySelector('#funcionarios');
      document.querySelector('main').innerHTML = htmlMessage.cloneNode(true).innerHTML;
    });
    $('#registrar_pedidos').on('click',function() {
      var htmlImport = document.getElementById('link_pedidos');
      var htmlDoc = htmlImport.import;
      var htmlMessage = htmlDoc.querySelector('#pedidos');
      document.querySelector('main').innerHTML = htmlMessage.cloneNode(true).innerHTML;
    });
    $('#registrar_recipientes').on('click',function() {
      var htmlImport = document.getElementById('link_recipientes');
      var htmlDoc = htmlImport.import;
      var htmlMessage = htmlDoc.querySelector('#recipientes');
      document.querySelector('main').innerHTML = htmlMessage.cloneNode(true).innerHTML;
    });
  });
});
