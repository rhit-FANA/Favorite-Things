let counter = 0;
const favoriteColor = document.querySelector("#favoriteColorSquare");
main = function(){
    console.log("Ready");
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter-1;
        updateView();
    }
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter=0;
        updateView();
    }
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    }
    document.querySelector("#blueButton").onclick = (event) => {
        console.log("Blue Button");
        favoriteColor.style.backgroundColor="blue";
        favoriteColor.innerHTML = `Blue`;
    }
    document.querySelector("#greenButton").onclick = (event) => {
        console.log("Green Button");
        favoriteColor.style.backgroundColor="green";
        favoriteColor.innerHTML = `Green`;
        
    }
    document.querySelector("#redButton").onclick = (event) => {
        console.log("Red Button");
        favoriteColor.style.backgroundColor="red";
        favoriteColor.innerHTML = `Red`;
        
    }
    document.querySelector("#purpleButton").onclick = (event) => {
        console.log("Purple Button");
        favoriteColor.style.backgroundColor="purple";
        favoriteColor.innerHTML = `Purple`;
        
    }
}
updateView=function(){
    document.querySelector("#counterText").innerHTML = `${counter}`;
}
main();