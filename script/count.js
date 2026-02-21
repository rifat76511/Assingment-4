let allCards = document.getElementById("all-cards");
let jobCount = document.getElementById("jobs-counts");
const counts = allCards.children.length;
let totalCount = document.getElementById("Total-count");
// totalCount.innerText = counts;

function calculateCounts (){
    totalCount.innerText = counts;
    jobCount.innerText = counts;
}
calculateCounts()


