//  Back to top button
// const arrow = document.querySelector('.arrow')
// window.addEventListener("scroll", {} => {
//     if (window.pageYoffset > 100) {
//         toTop.classList
//     }
// });

// section project
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-item') == dataFilter ||
                dataFilter == "all") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    });
}
// $(document).ready(function(){
//     $('.list').click(function(){
//         const value =$(this).attr('data-filter');
//         const data_item =$('.itemBox').attr('data-item');
//         if(value=='all'){
//             $('.itemBox').show('1000');
//         }else if(value=='php'){
//             $('.itemBox').not().attr('data-item'=='php').hide('1000');  
//         }
//     })
// });

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calHeight= document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let ScrollValue=Math.round((pos * 100) / calHeight);
    console.log(ScrollValue);
    if(pos>100){
        scrollProgress.style.display= "grid";
    }else{
        scrollProgress.style.display= "none";
    }
    scrollProgress.addEventListener("click",() => {
        document.documentElement.scrollTop = 0;
    });
//     scrollProgress.style.background= `conic-gradient 
//     (#03cc65 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
};
window.onscroll=calcScrollValue;
window.onload=calcScrollValue;
