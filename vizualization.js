


var speed = 1000;
var c_delay = 0;

function vis_speed() {
    var array_speed = input_array_speed.value;
    switch (parseInt(array_speed)) {
        case 1:
            speed = 1;
            break;
        case 2:
            speed = 10;
            break;
        case 3:
            speed = 100;
            break;
        case 4:
            speed = 1000;
            break;
        case 5:
            speed = 10000;
            break;
    }
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
    console.log(`delay time ${delay_time} inside `);
   }
var    delay_time = 10000 / (Math.floor(array_size / 10) * speed);

input_array_speed.addEventListener("input", vis_speed);

function div_update(main, height, color) {
    window.setTimeout(function () {
        main.style = "margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}

