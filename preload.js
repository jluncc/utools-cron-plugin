window.utools.onPluginReady(() => {
	console.log("插件已准备好");
	
	utools.setSubInput(({text}) => {
		console.log(text);
	});
});