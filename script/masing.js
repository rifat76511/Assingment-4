let interviewList = [];
let rejectedList = [];
let currentStatus = "all-btn";

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
const addSection = document.getElementById("add-section");
const allCar = document.getElementById("all-cards");
const noJobs = document.getElementById('no-jobs');
const countHidden = document.getElementById("counts-cards-hide");
const rejectCountCard = document.getElementById("of-hide");

function toggleBtn(id) {

    allBtn.classList.add("bg-gray", "text-neutral");
    interviewBtn.classList.add("bg-gray", "text-neutral");
    rejectedBtn.classList.add("bg-gray", "text-neutral");
    allBtn.classList.remove("bg-primary", "text-white");
    interviewBtn.classList.remove("bg-primary", "text-white");
    rejectedBtn.classList.remove("bg-primary", "text-white");

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove("bg-gray", "text-neutral");
    selected.classList.add("bg-primary", "text-white");

    if (id === "all-btn") {
        addSection.classList.add("hidden");
        allCar.classList.remove("hidden");
        noJobs.classList.add("hidden");
        countHidden.classList.add("hidden");
        rejectCountCard.classList.add("hidden");
        if (allCar.childElementCount === 0) {
            noJobs.classList.remove("hidden");
            addSection.innerHTML = '';
        }
        else {
            noJobs.classList.add("hidden");

         
        }

    } else if (id === "interview-btn") {
        allCar.classList.add("hidden");
        addSection.classList.remove("hidden");
        countHidden.classList.remove("hidden");
        rejectCountCard.classList.add("hidden");
        if (interviewList.length === 0) {
            addSection.innerHTML = '';
            noJobs.classList.remove("hidden");
        }
        else {
            noJobs.classList.add("hidden");

            addInterview()
        }
    } else if (id === "rejected-btn") {
        allCar.classList.add("hidden");
        addSection.classList.remove("hidden");
        countHidden.classList.add("hidden");
        rejectCountCard.classList.remove("hidden");


        if (rejectedList.length === 0) {
            addSection.innerHTML = '';
            noJobs.classList.remove("hidden");
        }
        else {
            noJobs.classList.add("hidden");

            addReject()
        }
    }

}


[allCar, addSection].forEach(section => {
    section.addEventListener("click", function (event) {
        if (event.target.classList.contains('inter')) {
            const parents = event.target.parentNode.parentNode.parentNode;
            const name = parents.querySelector(".cardName").innerText;
            const skils = parents.querySelector(".skills").innerText;
            const salary = parents.querySelector(".salary-or-time").innerText;
            const reqirment = parents.querySelector(".requirement").innerText;

            const cardInfo = {
                name,
                skils,
                salary,
                reqirment
            };
            const existItem = interviewList.find(item => item.name == cardInfo.name);
            const statusElement = parents.querySelector(".statu");

            if (statusElement) {
                statusElement.innerText = 'INTERVIEW';
                statusElement.className = ' btn mr-2 border-2 text-green-400 border-green-400 bg-green-100 p-2 text-xs my-3 statu';
            }
            if (!existItem) {
                interviewList.push(cardInfo);

            }
            rejectedList = rejectedList.filter(item => item.name !== cardInfo.name);

            calculateCounts();
            if (currentStatus == "rejected-btn") {

                addReject();
            } else {
                addInterview();
            }
            deleteItem();
        } else if (event.target.classList.contains('reject')) {
            const parents = event.target.parentNode.parentNode.parentNode;
            const name = parents.querySelector(".cardName").innerText;
            const skils = parents.querySelector(".skills").innerText;
            const salary = parents.querySelector(".salary-or-time").innerText;
            const reqirment = parents.querySelector(".requirement").innerText;

            const cardInfo = {
                name,
                skils,
                salary,
                reqirment
            };
            const existItem = rejectedList.find(item => item.name == cardInfo.name);
            const statusReject = parents.querySelector(".statu");
            if (statusReject) {
                statusReject.innerText = 'REJECTED';
                statusReject.className = 'btn mr-2 border-2 text-red-500 border-red-500 bg-red-100 p-2 text-xs my-3 statu';
            }

            if (!existItem) {
                rejectedList.push(cardInfo);

            }
            interviewList = interviewList.filter(item => item.name !== cardInfo.name);
            calculateCounts();
            if (currentStatus === "interview-btn") {
                addInterview();
            } else if (currentStatus === "rejected-btn") {
                addReject();
            }

        } else if (event.target.closest('.delete')) {
            let deletesParents = event.target.parentNode.parentNode.parentNode.parentNode;
            deletesParents.remove("div");
            const parents = event.target.closest('.bg-white');
            const nameToDelete = parents.querySelector(".cardName").innerText;
            parents.remove();
            if (currentStatus === "interview-btn") {
                interviewList = interviewList.filter(item => item.name !== nameToDelete);
            } else if (currentStatus === "rejected-btn") {
                 rejectedList = rejectedList.filter(item => item.name !== nameToDelete);
            }
            calculateCounts();
            
        }
        
    });
});
function addInterview() {
    addSection.innerHTML = '';
    for (const interview of interviewList) {
        let newDiv = document.createElement("div");
        newDiv.className = 'bg-white p-6 rounded-lg my-4 hover:bg-gray-50 hover:border-l-4 hover:border-green-400';
        newDiv.innerHTML = `
     <div class="flex justify-between items-center">

                    <div>
                        <h3 class="cardName font-bold text-lg">${interview.name}</h3>
                        <p class="skills text-gray-400 leading-7
                        ">${interview.skils}</p>
                    </div>
                    <div>
                        <button class="border-1 border-gray-200 rounded-full p-1 cursor-pointer hover:bg-red-200 delete">
                            <img src="./image/Trash.png" alt="">
                        </button>
                    </div>
                </div>
                <div>
                    <p class="salary-or-time text-gray-500 text-base py-2">${interview.salary}
                    </p>
                    <p class="btn mr-2 border-2 text-green-500 border-green-500 bg-green-100 p-2 text-xs my-3 statu">INTERVIEW</p>
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
function addReject() {
    addSection.innerHTML = '';
    for (const reject of rejectedList) {
        let newDiv = document.createElement("div");
        newDiv.className = 'bg-white p-6 rounded-lg my-4 hover:bg-gray-50 hover:border-l-4 hover:border-red-500';
        newDiv.innerHTML = `
     <div class="flex justify-between items-center">

                    <div>
                        <h3 class="cardName font-bold text-lg">${reject.name}</h3>
                        <p class="skills text-gray-400 leading-7
                        ">${reject.skils}</p>
                    </div>
                    <div>
                        <button class="border-1 border-gray-200 rounded-full p-1 cursor-pointer hover:bg-red-200 delete">
                            <img src="./image/Trash.png" alt="">
                        </button>
                    </div>
                </div>
                <div>
                    <p class="salary-or-time text-gray-500 text-base py-2">${reject.salary}
                    </p>
                    <p class="btn mr-2 border-2 text-red-500 border-red-500 bg-red-200 p-2 text-xs my-3 statu">REJECTED</p>
                    <p class="requirement text-[#323B49] my-2">${reject.reqirment}</p>
                    <div class="">
                        <button class="btn mr-2 border-2 text-green-400 border-green-400 inter">INTERVIEW</button>
                        <button class="btn border-2 border-red-500 text-red-500 reject">REJECTED</button>
                    </div>
                </div>
    `
        addSection.appendChild(newDiv);
    }


}
 