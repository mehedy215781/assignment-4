let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('Total');
let interviewCount = document.getElementById('Interview-count');
let rejectedCount = document.getElementById('Rejected-count');
// console.log(interviewCount);

const allCardSections = document.getElementById('all-cards ');
// console.log(allCardSections.children.length);


// InterviewList.push({name:'compnay'},{name:'compnay'}) test

const mainContainer = document.querySelector('main');


// console.log(mainContainer);



// buttonColrchange//
const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');


function toggleStyle(id) {

    
    // btn-click//
    allBtn.classList.remove('bg-blue-500', 'text-white');
    allBtn.classList.add('bg-gray-300', 'text-black');

    interviewBtn.classList.remove('bg-white', 'text-white');
    interviewBtn.classList.add('bg-gray-300', 'text-black');

    rejectedBtn.classList.remove('bg-white', 'text-white');
    rejectedBtn.classList.add('bg-gray-300', 'text-black');

    // click btn avtive//
    if (id === 'btn-all') {
        allBtn.classList.remove('bg-gray-300', 'text-black');
        allBtn.classList.add('bg-blue-500', 'text-white');
    } else if (id === 'btn-interview') {
        interviewBtn.classList.remove('bg-gray-300', 'text-black');
        interviewBtn.classList.add('bg-blue-500', 'text-white');
    } else if (id === 'btn-rejected') {
        rejectedBtn.classList.remove('bg-gray-300', 'text-black');
        rejectedBtn.classList.add('bg-blue-500', 'text-white');
    }

       
    const selected = document.getElementById(id)

     currentStatus = id

    if(id == 'btn-interview'){
        allCardSections.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    }else if(id == 'btn-all'){

     allCardSections.classList.remove('hidden');
    filterSection.classList.add('hidden')
    } else if(id == 'btn-rejected'){
        allCardSections.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
    
}

// calculate ///

function calculateTotall() {
    total.innerText = allCardSections.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateTotall()

mainContainer.addEventListener('click', function (event) {
console.log(event.target.classList.contains('interview'));

    if (event.target.classList.contains('interview')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText
        const Position = parentNode.querySelector('.Position').innerText
        const Type = parentNode.querySelector('.Type').innerText
        const progress = parentNode.querySelector('.progress').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.progress').innerText = 'Applied'

        const cardInfo = {
            companyName,
            Position,
            Type,
            progress:'Applied',
            notes
        }

        const companyExist = interviewList.find(item => item.companyName === cardInfo.companyName)

         

        if (!companyExist) {
            interviewList.push(cardInfo);

        }

        rejectedList =rejectedList.filter(item=> item.companyName != cardInfo.companyName)
        
      if(currentStatus == 'btn-interview'){
            renderInterview();
        }


        calculateTotall()
    //    renderInterview();

    }else if (event.target.classList.contains('rejected')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText
        const Position = parentNode.querySelector('.Position').innerText
        const Type = parentNode.querySelector('.Type').innerText
        const progress = parentNode.querySelector('.progress').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.progress').innerText = 'Rejected'

        const cardInfo = {
            companyName,
            Position,
            Type,
            progress:'Rejected',
            notes
        }

        const companyExist = rejectedList.find(item => item.companyName === cardInfo.companyName)

         

        if (!companyExist) {
            rejectedList.push(cardInfo);

        }

        interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName)

        if(currentStatus == 'btn-interview'){
            renderInterview();
        }

        calculateTotall()
        // renderRejected()
    }
     
})
  
const filterSection = document.getElementById('filter-section');
// interview-render/
function renderInterview() {

    filterSection.innerHTML = '';

    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white p-4';
        div.innerHTML = `
            <div class="left space-y-4 ">
          <div>
            <h4 class="companyName text-2xl font-bold">${interview.companyName}</h4>
          <p class="Position text-[#64748B]">${interview.Position}</p>
          </div>
          <p class="Type  text-[#64748B]">Remote• Full-time • $130,000 - $175,000</p>
            <button class="progress bg-[#dee5f5] p-2 rounded-sm">${interview.progress}</button>
            <p class="notes text-[323B49]">${interview.notes}</p>
          
            <div>
          <button  class=" interview bg-white cursor-pointer text-[#10B981] font-bold border  border-[#10B981] p-2 rounded-sm">Interview</button>
           
       <button  class=" rejected bg-white text-[#EF4444] font-bold  border cursor-pointer border-[#10B981] p-2 rounded-sm">Rejected</button>
        </div>
      </div>
        <div class="right ">
          <a class="border-1 border-gray-300 p-2 rounded-[50%]" href=""><i class="fa-solid fa-trash-can"></i></a>
          
        </div>
        
        `
        filterSection.appendChild(div);
    }
}
// rejected-render//

function renderRejected() {
    filterSection.innerHTML = '';

    for (let reject of rejectedList) {
        console.log(reject); 

        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white p-4';
        div.innerHTML = `
            <div class="left space-y-4">
                <div>
                    <h4 class="companyName text-2xl font-bold">${reject.companyName}</h4>
                    <p class="Position text-[#64748B]">${reject.Position}</p>
                </div>
                <p class="Type text-[#64748B]">Remote• Full-time • $130,000 - $175,000</p>
                <button class="progress bg-[#dee5f5] p-2 rounded-sm">${reject.progress}</button>
                <p class="notes text-[323B49]">${reject.notes}</p>
                   <div>
          <button  class=" interview bg-white cursor-pointer text-[#10B981] font-bold border  border-[#10B981] p-2 rounded-sm">Interview</button>
           
       <button  class=" rejected bg-white text-[#EF4444] font-bold  border cursor-pointer border-[#10B981] p-2 rounded-sm">Rejected</button>
        </div>
            </div>
            <div class="right">
                <a class="border-1 border-gray-300 p-2 rounded-[50%]" href="">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </div>
        `;
        filterSection.appendChild(div);
    }
}
