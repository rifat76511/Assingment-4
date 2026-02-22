let allCards = document.getElementById("all-cards");
let interviewCount = document.getElementById("Interview-count");
let rejectCount = document.getElementById("reject");
let jobCount = document.getElementById("jobs-counts");
const counts = allCards.children.length;
let totalCount = document.getElementById("Total-count");
// totalCount.innerText = counts;

function calculateCounts (){

    totalCount.innerText = allCards.children.length;
    jobCount.innerText = counts;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}
calculateCounts()


