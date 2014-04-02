var Timer = (function(options){
	function Timer(options){
		this.format= "dd:hh:mm:ss";
	}
	function start(time){
		
		if(countdown){
			if(isMS(time))
			{
				duration_ms = time;
				start_ms = Date.now();
				end_ms = start_ms+duration_ms;
				elapsed_ms = 0;
				this.timeout = window.setTime(_tick,100);
			}
			else
			{
				time = toMs(time);
				start(time);
			}
		}
		else
		{
			//TODO : Not Implemented
		}

	}
	function stop(){

	}
	function toMs(time){
		var ms = new Date(time).getTime();
		return ms;
	}
});