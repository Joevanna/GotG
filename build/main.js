$(document).ready(function(){$.ajax({url:"http://gateway.marvel.com/v1/public/series/16410",type:"GET",dataType:"json",data:{apikey:"1c917464a5be704887754ef19ffff579"},success:function(e){console.log(JSON.parse(e))}})});