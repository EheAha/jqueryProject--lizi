function cDown(time){
	var day = Math.floor(time/(24*60*60*1000));
	var h = Math.floor(time%(24*60*60*1000)/(60*60*1000));
	var m = Math.floor(time%(24*60*60*1000)%(60*60*1000) / (60*1000));
	var s = Math.floor((time%(24*60*60*1000)%(60*60*1000) % (60*1000) / 1000));
	return {
		day:day,
		h:h,
		m:m,
		s:s
	}
}

setInterval(function(){
    var d = new Date();
    var furture = new Date("2022-08-17 10:00:00");
    var time = furture.getTime() - d.getTime();
    var obj = cDown(time);
    $(".days").html(obj.day);
    $(".hours").html(obj.h);
    $(".minutes").html(obj.m);
    $(".seconds").html(obj.s);

},1000)