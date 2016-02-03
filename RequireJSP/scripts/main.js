require.config({
	baseUrl:"scripts",
	//map:{
    //
	//},
	paths:{
		jquery:"lib/jquery-1.8.2",
		util:"helper/util"
	}

})

require(["util","jquery"],function (util,$) {

	console.log(util.add(1,3));	

	$(document.body).append('<span>Content added by Jquery</span>');
})