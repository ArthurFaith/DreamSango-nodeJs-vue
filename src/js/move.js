
var move = {
	explainStyle : function(style){
		//解析位置**px		
		var arr = style.split('p');
		return Number(arr[0]);
	},
	directionMove : function(position,event){
		var x = event.keyCode,
			tw = position.totalWidth,
			th = position.totalHeight,
			w = position.width;
		switch (x){
			case 37:
			//左
				if(position.left == 0){
					break;
				}
				else if(position.left>0 && position.left<=w){
					position.left = 0;
					break;
				}
				else{
					position.left-=w;
					break;
				}								
			case 38:
			//上
				if(position.top == 0){
					break;
				}
				else if(position.top>0 && position.top<=w){
					position.top = 0;
					break;
				}
				else{
					position.top-=w;
					break;
				}
				break;
			case 39:
			//右
				if(position.left == (tw-w)){
					break;
				}
				else if(position.left>(tw-w) && position.left<=tw){
					position.left = 0;
					break;
				}
				else{
					position.left+=w;
					break;
				}
				
			case 40:
			//下
				if(position.top == (th-w)){
					break;
				}
				else if(position.top>(th-w) && position.top<=th){
					position.top = 0;
					break;
				}
				else{
					position.top+=w;
					break;
				}
				
		}
		
		
	}

}

export default move;
