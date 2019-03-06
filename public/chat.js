var socket = io.connect('http://localhost:3000');

var myname = document.getElementById('myname');
var mssg = document.getElementById('mssg');
var btn = document.getElementById('btn');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

btn.addEventListener('click',function(){
	socket.emit('chat',{
		mssg : mssg.value,
		myname : myname.value
	});
});

mssg.addEventListener('keypress',function(){
	socket.emit('typing',{myname:myname.value});
});



socket.on('chat',function(data){
	feedback.innerHTML = '';
	output.innerHTML += '<div class="mssgdiv">' + '<strong id="ft">' + data.myname + '</strong>' + ' : ' + data.mssg + '</div>'
});

socket.on('typing',function(data){
	feedback.innerHTML = data.myname + '<em>' + ' is typing...'+ '</em>';
});