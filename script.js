const pi = 3.14;
var radius = 6.378e6; 
var circumference = 2 * pi * radius;
var surfaceArea = 4 * pi * radius ** 2;
var volume = (4 / 3) * pi * radius ** 3;

document.write('The radius of the sphere is ' + radius + '.');
document.write('<br><br>');
document.write('The circumference is ' + circumference + '.');
document.write('<br><br>');
document.write('The surface area is ' + surfaceArea + '.');
document.write('<br><br>');
document.write('The volume is ' + volume + '.');

