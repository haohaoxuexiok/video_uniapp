export function getCurrentDetailTime() {
	//获取当前时间并打印
	let yy = new Date().getFullYear();
	let mm = new Date().getMonth() + 1;
	let dd = new Date().getDate();
	let hh = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
	let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
	let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
	const gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
	return gettime
}
export function getCurrentTime() {
	//获取当前时间并打印
	let yy = new Date().getFullYear();
	let mm = new Date().getMonth() + 1;
	let dd = new Date().getDate();
	const gettime = yy + '-' + mm + '-' + dd + ' ';
	
	return gettime
}
export function getTime(date,days) {
	var d=new Date(date); 
	    d.setDate(d.getDate()+days); 
	    var month=d.getMonth()+1; 
	    var day = d.getDate();
	    var val = d.getFullYear()+"-"+month+"-"+day; 
	    return val;
}