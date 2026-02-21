 let InterviewList = [];
 let rejectedList  =[];


let total = document.getElementById('Total');
let interviewCount = document.getElementById('Interview-count');
let rejectedCount = document.getElementById('Rejected-count');
// console.log(total);
const allCardSections = document.getElementById('all-cards ');
console.log(allCardSections.children.length);

// buttonColrchange//
const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-Interview');
const rejectedBtn = document.getElementById('btn-Rejected');


function calculateTotall (){
    total.innerText = allCardSections.children.length;
    interviewCount.innerText =InterviewList.length;
     rejectedCount.innerText =rejectedList.length;
}
calculateTotall()

function toggleStyle(id){

    // btn-click//
    allBtn.classList.remove('bg-blue-500','text-white');
    allBtn.classList.add('bg-gray-300','text-black');

    interviewBtn.classList.remove('bg-white','text-white');
    interviewBtn.classList.add('bg-gray-300','text-black');

    rejectedBtn.classList.remove('bg-white','text-white');
    rejectedBtn.classList.add('bg-gray-300','text-black');

    // click btn avtive//
    if(id === 'btn-all'){
        allBtn.classList.remove('bg-gray-300','text-black');
        allBtn.classList.add('bg-blue-500','text-white');
    } else if(id === 'btn-Interview'){
        interviewBtn.classList.remove('bg-gray-300','text-black');
        interviewBtn.classList.add('bg-blue-500','text-white');
    } else if (id === 'btn-Rejected'){
        rejectedBtn.classList.remove('bg-gray-300','text-black');
        rejectedBtn.classList.add('bg-blue-500','text-white');
    }
}