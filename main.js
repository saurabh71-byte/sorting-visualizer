
let input_array_size=document.getElementById('array_size');
let array_size=input_array_size.value;
console.log(input_array_size.value);
let input_array_speed=document.getElementById('array_speed');
console.log(input_array_speed.value);

const main = document.querySelector('.main');
const btn = document.getElementById('btn');
let button_algorithm=document.getElementById('button_algo');
const btnBubble=document.getElementById('bubble');
const btnSelection=document.getElementById('selection');
const btnInsertion=document.getElementById('insertion');
const quickBtn=document.getElementById('quick');
const btnMerge=document.getElementById('merge');

const divs = [];
const div_sizes = [];
let margin_size;

main.style.flexDirection = 'row';
main.style.backgroundColor = '';

btn.addEventListener('click', () => {
  create_bars();
});
window.onload=create_bars();

input_array_size.addEventListener('input',()=>
{
   update_array_size();
   console.log("Inside array size funciton")
    
})
function create_bars()
{
    document.querySelector('.name').innerText="";
    main.innerHTML = '';

    for (let i = 0; i <= input_array_size.value-1; i++) {
        // div_sizes[i] = Math.floor(Math.random() * (5 * 130)) + 5;
        div_sizes[i]=Math.floor(Math.random() * 0.5*(input_array_size.max-input_array_size.min) ) + 10;
        divs[i] = document.createElement('div');
        main.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style.margin = '0% ' + margin_size + '%';
        divs[i].style.backgroundColor = '#ff00b8';
        divs[i].style.width = (100 / array_size - (2 * margin_size)) + '%';
        // divs[i].style.height = div_sizes[i] + 'px';
        divs[i].style.height = div_sizes[i] + '%';
        // divs[i].style.border = '1px solid black';
      
    }
}

function update_array_size()
{
    array_size=input_array_size.value
    create_bars()
}
window.onload=update_array_size();

btnBubble.addEventListener('click',()=>
{
    
    Bubble();
})

btnSelection.addEventListener('click',()=>
{
    // selection_sort();
    console.log("selection sort button clicked");
})
btnInsertion.addEventListener('click',()=>
{
    // console.log("insertion button clicked")
    insertion_sort();
})
btnMerge.addEventListener('click',()=>
{
    console.log("inside merge calling function")
    Merge();
    // console.log("called sucesscully");
})
quickBtn.addEventListener('click',()=>
{
    // console.log("calling quick sort");
    Quick();
})

