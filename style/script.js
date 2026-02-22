 let InterviewList = [];
 let rejectedList  =[];


let total = document.getElementById('Total');
let interviewCount = document.getElementById('Interview-count');
let rejectedCount = document.getElementById('Rejected-count');
console.log(interviewCount);

const allCardSections = document.getElementById('all-cards ');
console.log(allCardSections.children.length);


const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');

// console.log(mainContainer);

function calculateTotall (){
    total.innerText = allCardSections.children.length;
    interviewCount.innerText = InterviewList.length;
     rejectedCount.innerText = rejectedList.length;
}
calculateTotall()

// buttonColrchange//
const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-Interview');
const rejectedBtn = document.getElementById('btn-Rejected');


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
    
    const selected = document.getElementById(id)
    console.log(selected);
}

// toggle btn inside card//
mainContainer.addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const Position = parentNode.querySelector('.Position').innerText
    const Type = parentNode.querySelector('.Type').innerText
    const progress = parentNode.querySelector('.progress').innerText
    const notes = parentNode.querySelector('.notes').innerText
    

    const cardInfo ={
        companyName,
        Position,
        Type,
        progress,
        notes
    }
    // console.log(cardInfo);
    
  const companyExist = InterviewList.find(item=> item.companyName == cardInfo.companyName)
  if(!companyExist){
    InterviewList.push(cardInfo)
  }

 renderInterview()
})

function renderInterview(){
  filterSection.innerHTML = ''

  for(let Interview of InterviewList){
    console.log(Interview);
    let div = document.createElement('div');
    div.className = 'flex justify-between bg-white p-4'
    div.innerHTML =`
    

    `
  }
}