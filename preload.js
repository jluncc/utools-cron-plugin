// 分隔cron表达式，判断表达式是否符合要求
window.checkCron = function(cronExpre) {
	// console.log("输入的cron: ", cronExpre);
	cronArray = cronExpre.split(" ");
	const arrayLen = cronArray.length;
	// console.log("转换的cronArray:", cronArray, "，长度为:", arrayLen);

	if (arrayLen != 6) {
		console.log("[格式非法]输入的cron: ", cronExpre);
		return ["输入的 cron 不符合要求"];
	} else {
		console.log("[格式合法]输入的cron: ", cronExpre);
		return window.analyseCron(cronArray);
	}
};

// TODO 根据cron表达式，计算接下来的执行时间
window.analyseCron = function(cronArray) {
	console.log("cronArray:", cronArray);
	return ["输入的 cron 不符合要求"];
}
