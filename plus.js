const colors = ['green','blue','yellow','pink','red','orange']
let x = 0
function year_changer(){
    document.getElementById('year2022').style.color = colors[x]
    x++
   
    if(x == 6){
        x = 0
    }
}

setInterval(year_changer,1500)

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function time_refresher(){
    const d = new Date();
    let monthname =  monthNames[d.getMonth()]
    let date = new Date()
    let day2 = date.getFullYear()
    let day = date.getDay()
    let time = date.toLocaleTimeString()
    let full_version = `${monthname} ${day},${day2} ${time} `
    const display_date = document.getElementById("zaman")

    display_date.innerHTML = full_version
    
}

setInterval(time_refresher, 1000)

let js_button
let count = 0

function show_attr(){
    js_button = document.getElementsByClassName('green')[0]
    if(count == 0){
        js_button.style.height = '160px'
        console.log(js_button)
        count++
    }
    else if(count == 1){
        js_button.style.height = '20px'
        count = 0
    }
}

let count2 = 0
function show_attr2(){
    js_button = document.getElementsByClassName('yellow')[0]
    if(count2 == 0){
        js_button.style.height = '160px'
        console.log(js_button)
        count2++
    }
    else if(count2 == 1){
        js_button.style.height = '20px'
        count2 = 0
    }
}

let count3 = 0
function show_attr3(){
    js_button = document.getElementsByClassName('red')[0]
    if(count3 == 0){
        js_button.style.height = '160px'
        console.log(js_button)
        count3++
    }
    else if(count3 == 1){
        js_button.style.height = '20px'
        count3 = 0
    }
}

let count4 = 0
function show_attr4(){
    js_button = document.getElementsByClassName('red')[1]
    if(count4 == 0){
        js_button.style.height = '160px'
        console.log(js_button)
        count4++
    }
    else if(count4 == 1){
        js_button.style.height = '20px'
        count4 = 0
    }
}


const keywords = [
    'HTML','HTML5','CSS','CSS3','JS','JavaScript','ES6','Promise','async await','Database',
    'React','React Hooks','Context API','React Router','Web Storage','localStorage',
    'sessionStorage','Redux','Node','MongoDB','SQL','API','DOM','data science','MERN','Python','Flask','Statistics','Linear Alg',
    'Numpy','Pandas','Scipy','Scikit-learn','Visualization','D3.js'
  ]
const renkler = [
    "#006863",
	"#d8c100",
	"#51d0ff",
	"#85ff90",
	"#ffb9ff",
	"#002400",
	"#ffbbff",
	"#00fcff",
	"#4f927f",
	"#00f1ff",
	"#4a0053",
	"#00af00",
	"#001052",
	"#9ea547",
	"#006abd",
	"#005236",
	"#004488",
	"#00e3ff",
	"#2a000c",
	"#002350",
    "#006863",
	"#d8c100",
	"#51d0ff",
	"#85ff90",
	"#ffb9ff",
	"#002400",
	"#ffbbff",
	"#00fcff",
	"#4f927f",
	"#00f1ff",
	"#4a0053",
	"#00af00",
	"#001052",
    "#00e3ff",
	"#2a000c"
]


let miniboxes 

for(let i = 0; i<keywords.length; i++){
    miniboxes = document.createElement('div')
    miniboxes.style.width = '150px'
    miniboxes.style.height = '20px'
    miniboxes.textContent = `# ${keywords[i]}` 
    miniboxes.style.fontSize = '16px'
    miniboxes.style.fontStyle = 'italic'
    miniboxes.style.paddingLeft = '10px'
    miniboxes.style.backgroundColor = renkler[i]
    miniboxes.style.paddingTop = '20px'
    miniboxes.style.float = 'left'
    miniboxes.style.marginTop = '20px'
    miniboxes.style.marginLeft = '50px'
    miniboxes.style.borderRadius = '20px'
    document.body.appendChild(miniboxes)

}