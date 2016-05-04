var userNames=["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "medrybw"];
function call(value,callback){
  $.getJSON('https://api.twitch.tv/kraken/streams/'+value+'?callback=?',function(data){
    //console.log(data);
    //console.log(callback);
    callback(data);
    //$('#list').append('<p>'+value+'</p>');
   // console.log(data.stream);
    /*console.log($('#list').text());
    if(data.stream!=null){
        $('#list').append('<p id="'+value+'"class="col-xs-6">'+value+' </p> <p id="'+value+'" class="green">Online</p>');
    }else{
      $('#list').append('<p id="'+value+'" class="col-xs-6">'+value+' </p><p id="'+value+'" class="red">Offline</p>');
    }*/
  });
}
function listAll1(value,data){
  //console.log(data.stream);
  if(data.stream!=null){
        $('#list').append('<a href="http://twitch.tv/'+value+'"><p id="'+value+'"class="col-xs-6">'+value+' </p> <p id="'+value+'" class="green">Online</p></a><p class="status">'+data.stream.channel.status.substring(0,35)+'...</p>');
    }else{
      $('#list').append('<a href="http://twitch.tv/'+value+'"><p id="'+value+'" class="col-xs-6">'+value+' </p><p id="'+value+'" class="red">Offline</p></a>');
    }
}
function listOff(value,data){
if(data.stream!=null){
    }else{
      $('#list').append('<a href="http://twitch.tv/'+value+'"><p id="'+value+'" class="col-xs-6">'+value+' </p><p id="'+value+'" class="red">Offline</p></a>');
    }
}
function listOn(value,data){
  //console.log(data);
  if(data.stream!=null){
    //console.log(data.stream.channel.status);
        $('#list').append('<a href="http://twitch.tv/'+value+'"><p id="'+value+'"class="col-xs-6">'+value+' </p> <p id="'+value+'" class="green">Online</p></a><p class="status">'+data.stream.channel.status.substring(0,35)+'...</p>');
    }
}
function allCall(value){
  //console.log('allCall');
  call(value,function(data){
    //console.log(data+'is done');
    listAll1(value,data);
  });
 }
function offCall(value){
    call(value,function(data){
    //console.log(data+'is done');
    listOff(value,data);
  });
}
function onCall(value){
    call(value,function(data){
    //console.log(data+'is done');
    listOn(value,data);
  });
}
function callOffline(value){
  $.getJSON('https://api.twitch.tv/kraken/streams/'+value+'?callback=?',function(data){
    //console.log(data);
    //$('#list').append('<p>'+value+'</p>');
   // console.log(data.stream);
    //console.log($('#list').text());
    if(data.stream!=null){
        $('#list').append('<p id="'+value+'"class="col-xs-6">'+value+' </p> <p id="'+value+'" class="green">Online</p>');
    }else{
      //$('#list').append('<p id="'+value+'" class="col-xs-6">'+value+' </p><p id="'+value+'" class="red">Offline</p>');
    }
  });
}
//$('#list').append(data)
userNames.forEach(allCall);
function all1(){
  $('#list').text('');
  userNames.forEach(allCall);
}
function online2(){
  $('#list').text('');
  userNames.forEach(onCall);

}
function offline(){
  $('#list').text('');
  userNames.forEach(offCall);
}
