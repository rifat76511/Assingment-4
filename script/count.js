let allCards = document.getElementById("all-cards");
let interviewCount = document.getElementById("Interview-count");
let jobCount = document.getElementById("jobs-counts");
const counts = allCards.children.length;
let totalCount = document.getElementById("Total-count");
// totalCount.innerText = counts;

function calculateCounts (){

    totalCount.innerText = counts;
    interviewCount.innerText = interviewList.length;
    jobCount.innerText = counts;
}
calculateCounts()


