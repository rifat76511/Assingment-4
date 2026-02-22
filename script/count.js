let allCards = document.getElementById("all-cards");
let interviewCount = document.getElementById("Interview-count");
let rejectCount = document.getElementById("reject");
let countsCads = document.getElementById("section-count");
let jobCount = document.getElementById("jobs-counts");
let rejectsCard = document.getElementById("reject-count");
const counts = allCards.children.length;
let totalCount = document.getElementById("Total-count");
// totalCount.innerText = counts;

function calculateCounts() {

    totalCount.innerText = allCards.children.length;
    jobCount.innerText = counts;
    interviewCount.innerText = interviewList.length;
    countsCads.innerText = interviewList.length;
    rejectsCard.innerText = rejectedList.length;
    rejectCount.innerText = rejectedList.length;

}
calculateCounts();






