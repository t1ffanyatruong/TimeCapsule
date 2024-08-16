const bookmarkButton = document.querySelectorAll(".saved")

//bookmarkButton.addEventListener ("click", function(){
    //let bookmark = alert('Unit Topic Successfully Saved!');
    
//})

for (let i = 0; i < bookmarkButton.length; i++) {

let savedButtons = bookmarkButton[i]

    savedButtons.addEventListener("click", function() {
        alert('Unit Topic Successfully Saved!');
    });
}


const startButton = document.getElementById('start__prompt')


function triggerPrompt(){

    const userInput = prompt ('Type CONFIRM to begin the learning experience')

    if (userInput && userInput.toLowerCase() === 'confirm'){
        alert('Let us begin!')
    } else{
        alert('Please type CONFIRM to begin')
    }

}

startButton.addEventListener('click', triggerPrompt)

