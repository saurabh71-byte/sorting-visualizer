

function Bubble() {
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";
    document.querySelector('.name').innerText="Bubble Sort";
    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    c_delay=0;
    console.log("inside bubble sort");
    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size- i-1; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update
            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red"); // Color update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Color update


                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;
console.log(`bubble sort ${div_sizes[j]}`)
                div_update(divs[j], div_sizes[j], "red"); // Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Height update
            }

            div_update(divs[j], div_sizes[j], "blue"); // Color update
        }
                    console.log("***********");
        div_update(divs[j], div_sizes[j], "#00ff47"); // Color update//green
        // div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "#00ff47");
    }
    div_update(divs[0], div_sizes[0], "#00ff47"); // Color update//green
  
}
