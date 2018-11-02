/*
	随机数
	参数：
		n:起始数字
		m:范围
 */
function numRandom(n,m) {
	if(n>m){
		return parseInt(m+Math.random()*(n-m+1));
	}else{
		return parseInt(n+Math.random()*(m-n+1));
	}
}


/* 编写一个函数，生成4位数字的验证码 */
 
function numRand() {
	for (var i = 1, sum = ""; i <= 4; i++) {
		sum += parseInt(Math.random() * 10);
	}
	return sum;
}

/* 数字字母混合验证码(6位) */ 
function randomCode(n) {
	var str = "";
	for (var i = 0; i < n; i++) {
		var num = parseInt(Math.random() * (123 - 48) + 48);
		while ((num >= 58 && num <= 64) || (num >= 91 && num <= 96)) {
			num = parseInt(Math.random() * (123 - 48) + 48);
		}
		str += String.fromCharCode(num);
	}
	return str;
}

/* 随机生成一个颜色 */
function colorRand() {
	var rgb = "";
	var r = parseInt(Math.random() * 255);
	var g = parseInt(Math.random() * 255);
	var b = parseInt(Math.random() * 255);

	return rgb = "rgb(" + r + " , " + g + "," + b + ")";
}
/*
随机颜色2
 */
function randomTo2Color(){
	var R = numRandom(0,255)
	var G = numRandom(0,255)
	var B = numRandom(0,255)

	return kzero(R,G,B);
}

function kzero(r,g,b){
	r = r.toString(16).length<2?"0"+r.toString(16):r.toString(16)
	g = g.toString(16).length<2?"0"+g.toString(16):g.toString(16)
	b = b.toString(16).length<2?"0"+b.toString(16):b.toString(16)
	
	return "#"+r+g+b;
}

/* 求m-n之间数字的和 */

function sum(m, n) {
	var result = 0;
	for (var i = n; i <= m; i++) {
		result += i;
	}
	return result;
}


/* 求圆的面积 */

function area(r) {
	var result = Math.PI * r * r;
	return result;
}


/* 编写函数digit(num, k)，函数功能是：求整数num从右边开始的第k位数字的值，如果num位数不足k位则返回0。 */

function digit(num, k) {
	if (num % (Math.pow(10, k - 1)) == num) {
		return 0;
	} else {
		return parseInt(num / Math.pow(10, k - 1)) % 10;
	}
}


/* 两个日期差的倒计时
time表示两个时间戳的差值 */
function countDown(time) {
	var dates = Math.floor(time / (24 * 60 * 60 * 1000));
	var hours = Math.floor((time - dates / (24 * 60 * 60 * 1000)) / (60 * 60 * 1000) - dates * 24);
	var minutes = Math.floor((time - dates / (24 * 60 * 60 * 1000) - hours / (60 * 60 * 1000)) / 60 / 1000 - dates * 24 * 60 - hours * 60);
	var seconds = Math.floor((time - dates / (24 * 60 * 60 * 1000) - hours / (60 * 60 * 1000) - minutes / (60 * 10000)) / 1000 - dates * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

	return {
		dates: dates,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	}
}

/* 统计字符串中每个字符的个数
n代表对象的属性 */
function countString(str) {
	var obj = {};
	for (var i = 0; i < str.length; i++) {
		var n = str[i];
		if (obj[n]) {
			obj[n]++;
		} else {
			obj[n] = 1;
		}
	}
	console.log(obj);
}

/* 如何将日期格式转化成为字符串 */

function dateString(date, sign) {
	if (sign == undefined) {
		sign = '/'
	}
	return d.getFullYear() + sign + d.getMonth() + sign + d.getDate() + '' + '周' + d.getDay() + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
}

/* 冒泡排序 */
function buttleSort(arr) {
	var temp;
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
/* 选择排序 */
function selectSort(arr) {
	var temp;
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

/* 快速排序 */
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var mid = (arr.length % 2 == 0) ? arr.length / 2 : (arr.length - 1) / 2;
	var midVal = arr[mid];
	var left = [];
	var right = [];

	for (var i = 0; i < arr.length; i++) {
		if (i != mid && arr[i] <= midVal) {
			left.push(arr[i]);
		}
		if (i != mid && arr[i] > midVal) {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(midVal).concat(quickSort(right));
}

/* 获取非行间样式的属性封装
obj代表对象，attr代表属性 */

function getStyle(obj,attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj,false)[attr];
	}
}

//获取、设置自定义属性
function attr() {
	if (arguments.length == 2) {
		return arguments[0].getAttribute(arguments[1]);
	}

	if (arguments.length == 3) {
		arguments[0].setAttribute(arguments[1], arguments[2]);
	}
}


/*
	隐藏 

	显示
*/
function show(options) {
	var el = document.querySelector(options.el);
	el.style.display = options.state;
}

/* 获取当前元素的偏移量 */
function offset(el){
	var obj = {};
	obj.l = el.offsetLeft;
	obj.t = el.offsetTop;

	while(el.offsetParent){
		el = el.offsetParent;
		obj.l += el.offsetLeft;
		obj.t += el.offsetTop;
	}
	return obj;
}

//设置
function setCookie(key,val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);

	document.cookie = key+"="+val+";path=/;expires="+d;
}

//删除
function removeCookie(key,val){
	setCookie(key,val,-1)
}


//获取
function getCookie(key){
	var cookie = document.cookie;
	var arr = cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(key == newArr[0]){
			return newArr[1];
		}
	}
}

//运动框架
function move(obj,json,fn){
	//清除定时器，防止上一个定时器未关闭，
	//obj.timer是为了避免多个事件发生时，抢夺定时器
	clearInterval(obj.timer);

	//开启定时器
	obj.timer = setInterval(function(){
	var bStop = true;    
		//遍历json属性
		for(var attr in json){

			var ocur = 0;
			//如果属性为opacity则不加px
			if(attr == 'opacity'){
				ocur = parseInt(getStyle(obj,attr)*100);
			}else{
				ocur = parseInt(getStyle(obj,attr));
			}

			//速度
			var speed = (json[attr] - ocur)/8;
			speed = speed > 0?Math.ceil(speed) : Math.floor(speed);

			if(obj[attr] != ocur){
				bStop = false;
			}
			

			if(attr == "opacity"){
				obj.style.opacity = (speed + ocur)/100;
				obj.style.filter = "alpha(opacity+"+(speed+ocur)+")";
			}else{
				obj.style[attr] = (ocur + speed) + "px";
			}
		}

		//所有事件都执行完毕以后再清除定时器
		if(bStop){
			clearInterval(obj.timer);
			fn&&fn();  //链式运动操作
		}

	},30)
}