let interviewList = [];
let rejectedList = [];

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
const addSection = document.getElementById("add-section");
const allCar = document.getElementById("all-cards");
const noJobs = document.getElementById('no-jobs');


function toggleBtn(id) {
    allBtn.classList.add("bg-gray", "text-neutral");
    interviewBtn.classList.add("bg-gray", "text-neutral");
    rejectedBtn.classList.add("bg-gray", "text-neutral");
    allBtn.classList.remove("bg-primary", "text-white");
    interviewBtn.classList.remove("bg-primary", "text-white");
    rejectedBtn.classList.remove("bg-primary", "text-white");

    const selected = document.getElementById(id);

    selected.classList.remove("bg-gray", "text-neutral");
    selected.classList.add("bg-primary", "text-white");

    if (id === "all-btn") {
        addSection.classList.add("hidden");
        allCar.classList.remove("hidden");
        noJobs.classList.add("hidden");

    } else if (id === "interview-btn") {
        allCar.classList.add("hidden");
        addSection.classList.remove("hidden");
        if (interviewList.length === 0) {
            noJobs.classList.remove("hidden");
        }
        else {
            noJobs.classList.add("hidden");
        }
    }

}

allCar.addEventListener("click", function (event) {
    if (event.target.classList.contains('inter')) {
        const parents = event.target.parentNode.parentNode.parentNode;
        const name = parents.querySelector(".cardName").innerText;
        const skils = parents.querySelector(".skills").innerText;
        const salary = parents.querySelector(".salary-or-time").innerText;
        const status = parents.querySelector(".statu").innerText;
        const reqirment = parents.querySelector(".requirement").innerText;

        const cardInfo = {
            name,
            skils,
            salary,
            status,
            reqirment
        };
        const existItem = interviewList.find(item => item.name == cardInfo.name);
        parents.querySelector(".statu").innerText = 'INTERVIEW';
        parents.querySelector(".statu").classList = ' btn mr-2 border-2 text-green-400 border-green-400 bg-green-100 p-2 text-xs my-3';

        if (!existItem) {
            interviewList.push(cardInfo);

        }
        calculateCounts();
        addInterview();
    }
});
function addInterview() {
    addSection.innerHTML = '';
    for (const interview of interviewList) {
        let newDiv = document.createElement("div");
        newDiv.className = 'bg-white p-6 rounded-lg my-4 hover:bg-gray-50';
        newDiv.innerHTML = `
     <div class="flex justify-between items-center">

                    <div>
                        <h3 class="cardName font-bold text-lg">${interview.name}</h3>
                        <p class="skills text-gray-400 leading-7
                        ">${interview.skils}</p>
                    </div>
                    <div>
                        <button class="border-1 border-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-200">
                            <img src="./image/Trash.png" alt="">
                        </button>
                    </div>
                </div>
                <div>
                    <p class="salary-or-time text-gray-500 text-base py-2">${interview.salary}
                    </p>
                    <p class=" btn mr-2 border-2 text-green-400 border-green-400 bg-green-100 p-2 text-xs my-3">INTERVIEW</p>
                    <p class="requirement text-[#323B49] my-2">${interview.reqirment}</p>
                    <div class="">
                        <button class="btn mr-2 border-2 text-green-400 border-green-400 inter">INTERVIEW</button>
                        <button class="btn border-2 border-red-500 text-red-500 reject">REJECTED</button>
                    </div>
                </div>
    `
        addSection.appendChild(newDiv);
    }


}