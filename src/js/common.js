var parseDom = function (arg) { 
　　 var objE = document.createElement("div"); 
　　 objE.innerHTML = arg;
alert(1)
　　 return objE.childNodes; 
};

export default parseDom