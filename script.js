let dataSet=[
    ["Alfred Futterkiste","Germany"],
    ["Tony Stark","USA"],
    ["Saktiman","India"],
    ["Dwight Shrude","Scranton"],
    ["Sree Kesavan","India"],
    ["Thor","Asgard"],
    ["Envestnet","Trivandrum, India"],
    ["Sangeeth Sir","Banglore, India"]
]

render(""); //to print all values initially 

const text = document.getElementById('text');
text.addEventListener('keyup', (e)=>{
    const val = e.target.value
    render(val)
})

function render(val){
    // location.reload(); 
    document.getElementsByClassName("putHere")[0].innerHTML=""
    dataSet.forEach(element => {
        if ((element[0].includes(val)) || (element[1].includes(val))){
            let htmlToBeAdded = 
            `
            <div class="inputArea dataToBeInserted">
            <div class="dataToBeInserted">
                ${element[0]}
            </div>
            <div class="dataToBeInserted">
                ${element[1]}
            </div>
            </div>
            `
            console.log(htmlToBeAdded)
            document.getElementsByClassName("putHere")[0].insertAdjacentHTML('afterBegin',htmlToBeAdded);
        }
    });
}