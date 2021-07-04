// 分隔cron表达式，判断表达式是否符合要求
window.checkCron = function(cronExpre) {
	cronArray = cronExpre.split(" ");
	const arrayLen = cronArray.length;

	// 目前年份位只支持*
	if (arrayLen != 6 || cronArray[5] !== "*") {
		console.log("[格式非法]输入的cron: ", cronExpre);
		return ["输入的 cron 不符合要求: " + cronExpre];
	} else {
		console.log("[格式合法]输入的cron: ", cronExpre);
		return window.analyseCron(cronArray);
	}
};

// 解析cron表达式
window.analyseCron = function(cronArray) {
	console.log("cronArray:", cronArray, "length: ", cronArray.length);

	// 需要输出的接下来执行的次数
	var nextExecTime = 3;
	var addUp = 0;
	// cron表达式中符合要求的特定字符串
	var specialChar = ['*', ',', '-', '?'];

	var years = [];
	var monthIndex = [];
	var days = [];
	var hours = [];
	var minutes = [];
	var seconds = [];

	var curDate = new Date();
	var curYear = curDate.getFullYear();
	var curMonth = curDate.getMonth();
	var curDay = curDate.getDate();
	var curHour = curDate.getHours();
	var curMinute = curDate.getMinutes();
	var curSecond = curDate.getSeconds();

	for (var i = 0; i < cronArray.length; i++) {
		var item = cronArray[i];
		console.log("i: ", i, "item: ", cronArray[i]);
		
		if (i === 0) {
			if (item === '*') {
				for (var index = 0; index < nextExecTime; index++) {
					seconds[index] = index;
					addUp++;
				}
			} else {
				for (var index = 0; index < nextExecTime; index++) {
					seconds[index] = curSecond;
				}
			}
		}
		if (i === 1) {
			if (item === '*') {
				for (var index = 0; index < nextExecTime; index++) {
					if (addUp < nextExecTime) {
						minutes[index] = index;
						addUp++;
					} else {
						minutes[index] = item;
					}
				}
			} else {
				for (var index = 0; index < nextExecTime; index++) {
					minutes[index] = item;
				}
			}
		}
		if (i === 2) {
			if (item === '*') {
				for (var index = 0; index < nextExecTime; index++) {
					if (addUp < nextExecTime) {
						hours[index] = index;
						addUp++;
					} else {
						hours[index] = item;
					}
				}
			} else {
				for (var index = 0; index < nextExecTime; index++) {
					hours[index] = item;
				}
			}
		}
		if (i === 3) {
			if (item === '*') {
				for (var index = 0; index < nextExecTime; index++) {
					if (addUp < nextExecTime) {
						days[index] = index;
						addUp++;
					} else {
						days[index] = item;
					}
				}
			} else {
				for (var index = 0; index < nextExecTime; index++) {
					days[index] = item;
				}
			}
		}
		if (i === 4) {
			if (item === '*') {
				for (var index = 0; index < nextExecTime; index++) {
					if (addUp < nextExecTime) {
						monthIndex[index] = index;
						addUp++;
					} else {
						monthIndex[index] = curMonth;
					}
				}
			} else {
				for (var index = 0; index < nextExecTime; index++) {
					monthIndex[index] = item;
				}
			}
		}
		if (i === 5) {
			if (item === '*') {
				for (var index = 0; index < nextExecTime; index++) {
					if (addUp < nextExecTime) {
						years[index] = index;
					} else {
						years[index] = curYear;
					}
				}
			} else {
				for (var index = 0; index < nextExecTime; index++) {
					years[index] = item;
				}
			}
		}
	}
	console.log("here");

	var result = [];
	for (var i = 0; i < years.length; i++) {
		var execTime = new Date(years[i], monthIndex[i], days[i], hours[i], minutes[i], seconds[i]);
		console.log("execTime:", formatDate(execTime));
		result[i] = formatDate(execTime);
	}
	return result;
};



// 格式化时间输出
window.formatDate = function(date) {
	var year = date.getFullYear(),
		month = date.getMonth(),
		day = date.getDate(),
		hour = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();
	var newTime = year + '-' +
				(month < 10 ? ('0' + month) : month) + '-' +
				(day < 10 ? ('0' + day) : day) + ' ' +
				(hour < 10 ? ('0' + hour) : hour) + ':' +
				(min < 10 ? ('0' + min) : min) + ':' +
				(sec < 10 ? ('0' + sec) : sec);
	return newTime;			
}