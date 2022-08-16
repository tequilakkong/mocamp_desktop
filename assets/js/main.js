//전체메뉴 list_total_menu
var totalMenu = document.querySelector('.list_total_menu'),
    totalBtn = document.querySelector('.btn_menu_all'),
    closeBtn = document.querySelector('.menu_list_wrap .btn_close');

    totalBtn.addEventListener('click', function(){
        totalMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function(){
        totalMenu.classList.toggle('active');
    });


//list_gnb_menu 마우스 호버 이벤트
//ecma2016 const, let, ', =>
const target = document.querySelector('.target');
const gnbTitList = document.querySelectorAll('.gnb_tit_list');
const links = document.querySelectorAll('.list_gnb_menu .gnb_tit');
const gnbLists = document.querySelectorAll('.list_depth2_wrap');
const color = '#3c8268';
const fontWt = 'bold';


for(let i = 0; i < links.length; i++){
    //links[i].addEventListener('click', function(e){e.preventDefault();});
    links[i].addEventListener('click', (e) => e.preventDefault()); //링크를 클릭했을 때 기본 기능을 다 막은 것 
    links[i].addEventListener('mouseover', mouseenterFunc); //마우스를 올리면 mouseenterFunc를 실행함
    links[i].addEventListener('mouseover', showmenuFunc); //마우스를 올리면 mouseenterFunc를 실행함
};

function mouseenterFunc(){
    if(!this.parentNode.classList.contains('active')){ //여기서 this는 마우스를 올린 .gnb_tit //자바스크립트 .classList.contains = 제이쿼리 hasClass
        for(let i = 0; i < links.length; i++){
            if(links[i].parentNode.classList.contains('active')){
                links[i].parentNode.classList.remove('active');
            }
            links[i].style.opacity = '0.4';
            links[i].style.fontWeight = '';
        }//마우스가 올라가지 않은 다른 메뉴들 마다 할 일
        this.parentNode.classList.add('active'); 
        this.style.opacity = '1';
        this.style.color = color;
        this.style.fontWeight = fontWt;

        //메뉴바 애니메이션
        const width = this.getBoundingClientRect().width; //자바스크립트는 a.getBoundingClientRect().width로 해당 요소의 넓이를 구함. 제이쿼리에서는 a.width(): 콘텐츠의 넓이 , a.innerWidth(): 패딩 포함 넓이, a.outerWidth: border 포함 넓이
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left;
        const top = this.getBoundingClientRect().top;
        
        //target.style.width = width + 'px' 예전 표기법이긴 하지만 백틱 없이 쓸 수 있음;
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
    }
}//mouseenterFunc


//브라우저 창 크기가 바뀌면 막대 위치가 따라 움직이는 것이 아니라 그 위치에 그대로 고정되어 있는 문제 발생.
function resizeFunc(){
    const active = document.querySelector('.list_gnb_menu ul li.active')

    if(active){
        const left = active.getBoundingClientRect().left;
        const top = active.getBoundingClientRect().top;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
    }
}
window.addEventListener('resize', resizeFunc);


//list_gnb_menu 하단 메뉴 나타남
function showmenuFunc(){
    for(let i = 0; i < links.length; i++){
        if(links[i].parentNode.classList.contains('active')){
            gnbLists[i].style.display = 'block';
            links[i].parentNode.classList.remove('active');
        } else {
            gnbLists[i].style.display = 'none';
        }    
    }
};




//visual_wrap 이미지 슬라이드
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false //*memo*
                                    //autoplay: true;로 옵션 설정을 했을 시, 슬라이더가 자동으로 멈추는 현상이 있음
                                    //이는 default로 자동 멈춤을 해놓았기 때문! 
                                    //autoplay 옵션을 변경하면 swiper-pagination-bullet swiper-button-next swiper-button-prev 를 클릭 했을 때 슬라이더 자동 멈춤이 사라진다.
    }

  });

  //search_tabs
  const srcTab = document.querySelector('.search_tabs');
  
  function select(divE1, buttonE1){
      Array.from(divE1.children).forEach(
          v => v.classList.remove('selected')
      )
      if(buttonE1) buttonE1.classList.add('selected');
  };

  srcTab.addEventListener('click', e => {
      const selected = e.target;
      select(srcTab, selected);
  })
  //출처: https://ddorang-d.tistory.com/122



//pop_box - 각 wrap에 마우스 대면 팝업 박스 뜸
const selArea = document.querySelectorAll('.field_inner .select_area');
const popBox = document.querySelectorAll('.pop_box > .pop');

for(let i = 0; i < selArea.length; i++){
    selArea[i].addEventListener('click', (e) => e.preventDefault()); //링크를 클릭했을 때 기본 기능을 다 막은 것 
    selArea[i].addEventListener('mouseenter', popEnterFunc); 
    selArea[i].addEventListener('mouseenter', showPopFunc);//click
}

function popEnterFunc(){
    if(!this.parentNode.classList.contains('active')){ //여기서 this는 마우스를 올린 .selArea
        for(let i = 0; i < selArea.length; i++){
            if(selArea[i].parentNode.classList.contains('active')){
                selArea[i].parentNode.classList.remove('active');
            }
        }//마우스가 올라가지 않은 다른 메뉴들 마다 할 일
        this.parentNode.classList.add('active'); 
    }
};//popEnterFunc

function showPopFunc(){
    for(let i = 0; i < selArea.length; i++){
        if(selArea[i].parentNode.classList.contains('active')){
            popBox[i].style.display = 'block';
            popBox[i].style.left = `${i*210-14}px`;
        } else {
            popBox[i].style.display = 'none';
        }    
    }
};

//pop_place 여행지 선택 팝업
const province = document.querySelectorAll('.place_province ul li')
const city = document.querySelectorAll('.city_container ul');

for(let i = 0; i < province.length; i++){
    province[i].addEventListener('click', selectPlace);
    function selectPlace(e){
        e.preventDefault();

        province.forEach(item => {
            item.classList.remove('selected');
        })
        city.forEach(item => {
            item.classList.remove('selected');
        })
        province[i].classList.add('selected')
        city[i].classList.add('selected')
    }
};
//출처: https://velog.io/@qjagkrdldi/22.05.10-tabmenu-onclick-index


// forEach(function (item, index, array) { }
// for문과 다르게 배열의 길이만큼 알아서 반복됨
// item : 배열의 각 대상을 의미한다.
// index : 배열의 순서를 의미한다. (현재 몇번째 반복문이 돌고있는지)
// arr : forEach 반복문에 사용되는 배열을 의미한다.
// 출처: https://mine-it-record.tistory.com/343 [나만의 기록들:티스토리]
// forEach문의 단점
// 1. 반복문 내에서 배열이나 리스트 값을 변경하거나 추가할 수 없다. 
// 오직 읽기 전용으로 불러오기 때문에 데이터를 수정할 수 없다.
// 2. 배열을 역순으로 탐색할 수 없다. 
// 순서대로 정보를 가져오기 때문에 역순으로 가져올 방법이 없다. 


//지역 클릭
var cityBtn = document.querySelectorAll('.city_container ul li');

for(let i = 0; i < cityBtn.length; i++){
    cityBtn[i].addEventListener('click', function(){
        cityBtn[i].classList.toggle('selected');
    });  
};


//인원수 선택
var decrease= document.querySelector('.controller_minus');
var increase = document.querySelector('.controller_plus');
var number = document.querySelector('.quantity_now span');


increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};//참고:https://mi-nya.tistory.com/222










// //선택값 input에 출력
// const itemForm = document.querySelectorAll('.select_area input');
// const selectedPrv = document.querySelector('.place_province ul li.selected').innerHTML;
// const selectedCt = document.querySelector('.city_container ul li.selected').innerHTML;

// itemForm.inner = `${selectedPrv}` + `${selectedCt}`;




//section1 -theme_recommd_wrap (multiple slide)
let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides > article'), //개수를 알아야하므로 배열로 변수를 잡음.
    currentIdx = 0, //무한 루프를 위해 current index를 만들어줌. 시작하자마자 보이는 건 0번째이므로 0으로 설정.
    slideCount = slide.length, //슬라이드의 처음과 마지막을 구분하기 위해 슬라이드(article)의 개수 필요. 
    prevBtn = document.querySelector('.btn_prev'),
    nextBtn = document.querySelector('.btn_next'),
    slideWidth = 282,
    slideMargin = 24;

slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

function moveSlide(num){ //반드시 숫자가 넘어와야 일을 하는 함수이므로 num을 변수로 넣어줌
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function(){ //addEvnetListener('어떤 이벤트?','할 일')
    if(currentIdx < slideCount - 4){
        moveSlide(currentIdx + 1);
    }
    else{
        moveSlide(0);
    } 
}); 

prevBtn.addEventListener('click', function(){ //addEvnetListener('어떤 이벤트?','할 일')
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    }
    else{
        moveSlide(slideCount - 4);
    } 
}); 



//section2 - theme_popular_wrap
const tabBtn2 = document.querySelectorAll('.theme_popular_wrap .tabs li')
const tabBody2 = document.querySelectorAll('.theme_popular_wrap .tabsBody > div');

tabBtn2.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 5; i++){
            tabBtn2[i].classList.remove('selected');
            tabBody2[i].style.display='none';
        }

        item.classList.add('selected');
        tabBody2[aa].style.display='flex';
    }
});

//section4 - theme_activity_wrap
const tabBtn3 = document.querySelectorAll('.theme_activity_wrap .tabs li')
const tabBody3 = document.querySelectorAll('.theme_activity_wrap .tabsBody > div');

tabBtn3.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3; i++){
            tabBtn3[i].classList.remove('selected');
            tabBody3[i].style.display='none';
        }

        item.classList.add('selected');
        tabBody3[aa].style.display='flex';
    }
});

//datepicker - Gijgo Datepicker
$('#datepicker').datepicker({ format: 'yyyy-dd-mm' });;
$('#datepicker2').datepicker({ format: 'yyyy-dd-mm' });;



//family site
const siteBtn = document.querySelector('.family_site > button');
const siteList = document.querySelector('.site_list');

function siteOpen(){
    siteBtn.classList.toggle('active');
    if(siteBtn.classList.contains('active')){
        siteList.style.display = "block"
    } else{
        siteList.style.display = "none"
    }
};

window.addEventListener('click', siteOpen);

/* 느낀점 
- 클린 코딩을 추구하며 해야한다고 생각했는데 스크립트를 아직 정상적으로 작동시키는 실력이 부족하여 우선순위가 아님
- 클래스명에 규칙이 있어야 찾을 때 시간이 단축됨
- HTML 마크업에는 최대한 정보만 포함시키고, 스타일은 css끼리, 애니메이션은 js에서 확인할 수 있게 분할하는 것이 유지보수 측면에서 중요 

*/