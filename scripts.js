var monthNames = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.getElementById('goal').innerHTML = (monthNames[d.getMonth()]) + ' ' + d.getDate() + ', ' + d.getFullYear();

function weekCalc(weeks) {
	var number = weeks.value;

	var oneWeek = 1000 * 60 * 60 * 24 * 7;
	var plusWeeks = new Date(+new Date + oneWeek * number);
	var formattedDate = (monthNames[plusWeeks.getMonth()]) + ' ' + plusWeeks.getDate() + ', ' + plusWeeks.getFullYear();

	document.getElementById('goal').innerHTML = formattedDate;
}