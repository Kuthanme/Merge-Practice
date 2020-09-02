
// x-axis data, month
var month = [
    "5/27","5/28","5/29","5/30","5/31","6/1", "6/2", "6/3", "6/4", "6/5",
    "6/6",  "6/7", "6/8", "6/9","6/10","6/11","6/12","6/13","6/14","6/15",
    "6/16","6/17","6/18","6/19","6/20","6/21","6/22","6/23","6/24","6/25"
];
// y-axis data, views
var ND = [
    901, 823, 416, 439, 393, 214, 131, 92, 82, 64,// 5/27-6/5
    59,64,56,78,65,60,39,42,35,67, // 6/6-6/15
    70,62,94,85,88,99,84,68,30,16, // 6/16-6/25

];
var DMD = [
    0, 0, 0, 505, 718, 404, 378, 285, 243, 263,
    307,287,223,206,220,180,162,159,174,129,
    121,128,126,118,138,167,136,105,94,42
];
var DM = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,598,655,399,339,257,226,221,230,166,
    140,153,153,147,154,199,149,133,123,65
];


let DMDi = new Array();
let DMi = new Array();
let NDi = new Array();

DMDi[0]=DMD[0];
DMi[0]=DM[0];
NDi[0]=ND[0];

var i;
for(i = 1; i<month.length; i++)
{
    DMDi[i] = DMDi[i-1]+DMD[i]; 
    DMi[i] = DMi[i-1]+DM[i]; 
    NDi[i] = NDi[i-1]+ND[i]; 
}