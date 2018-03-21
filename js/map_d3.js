function pathClick(e) {
	var pathId = e.path[0].id;
	var element = d3.select('#'+ pathId);
	var elementColor = element.style('fill');
	var colorApply;
	if(elementColor ==='transperant'){
		colorApply = 'brown';
	}
	else if(elementColor ==='brown'){
		colorApply = 'green';
	}
	else{
		colorApply ='brown';
	}
	element.style('fill', colorApply);
}
function submitInfo(e) {
	e.preventDefault();
	var surveyNumber = document.getElementById("surveyNumber").value;
	window.scroll(0,findPos(document.getElementById("surveyNumber")));
	// document.getElementById(surveyNumber).focus();
	// document.getElementById(surveyNumber).scrollIntoView();
	d3.select('#'+ surveyNumber).style('fill', 'brown');
}
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}