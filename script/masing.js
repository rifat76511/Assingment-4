const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");



function toggleBtn(id){
    allBtn.classList.add("bg-gray" , "text-neutral");
    interviewBtn.classList.add("bg-gray" , "text-neutral");
    rejectedBtn.classList.add("bg-gray" , "text-neutral");
    allBtn.classList.remove("bg-primary" , "text-white");
    interviewBtn.classList.remove("bg-primary" , "text-white");
    rejectedBtn.classList.remove("bg-primary" , "text-white");

    const selected = document.getElementById(id);

    selected.classList.remove("bg-gray", "text-neutral");
    selected.classList.add("bg-primary", "text-white");

}
const allCards = document.getElementById("all-cards");
allCards.addEventListener("click", function(event){
console.log(event.target.parentNode.parentNode.parentNode)
});