'use strict';
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); })
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}
const filterItems = document.querySelectorAll('[data-filter-item]');
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}
let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
    })
}
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    })
}
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i].classList.remove('active');
            }
        }
    });
}
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('/sendmail.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            alert("Ձեր նամակն հաջողությամբ ուղարկվել է։");
            form.reset();
            formBtn.setAttribute('disabled', '');
        })
        .catch(error => {
            alert("Սխալ տեղի ունեցավ, խնդրում ենք փորձել նորից։");
            console.error(error);
        });
});
const courseBtns = document.querySelectorAll('.course-btn');
const courseModal = document.querySelector('[data-course-modal]');
const courseOverlay = document.querySelector('[data-course-overlay]');
const courseCloseBtn = document.querySelector('[data-course-close]');
const courseTitle = document.querySelector('[data-course-title]');
const courseLessons = document.querySelector('[data-course-lessons]');
const data_course_btn_apply = document.getElementsByClassName('.data_course_btn_apply');


const courseData = {
  javascript: {
    title: "JavaScript Course",
    lessons: [
        'Advanced JavaScript Programming Course',
        'Course duration: 4.5 months, 2 sessions per week (1.5-2 hours each)',
        'Monthly fee: 30,000 AMD',
    ],
    opt_value: 'js_opt'
  },
  php: {
    title: "PHP(laravel) Course",
    lessons: [
      'Advanced PHP(laravel) Programming Course',
      'Course duration: 4 months, 2 sessions per week (1.5-2 hours each)',
      'Monthly fee: 30,000 AMD',
    ],
    opt_value: 'php_opt'
  },
  python: {
    title: "Python Course",
    lessons: [
      'Advanced Python Programming Course',
      'Course duration: 3 months, 2 sessions per week (1.5-2 hours each)',
      'Monthly fee: 40,000 AMD',
    ],
    opt_value: 'py_opt'
  },
  react_js: {
    title: "React.js Course",
    lessons: [
      'Advanced React.js Programming Course',
      'Course duration: 4 months, 2 sessions per week (1.5-2 hours each)',
      'Monthly fee: 40,000 AMD',
    ],
    opt_value: 'react_opt'
  },
  next_js: {
    title: "Next.js Course",
    lessons: [
      'Advanced Next.js Programming Course',
      'Course duration: 3 months, 2 sessions per week (1.5-2 hours each)',
      'Monthly fee: 40,000 AMD',
    ],
    opt_value: 'next_opt'
  }, 
  django: {
    title: "Python(Django) Course",
    lessons: [
      'Advanced Python(Django) Programming Course',
      'Course duration: 5 months, 2 sessions per week (1.5-2 hours each)',
      'Monthly fee: 40,000 AMD',
    ],
    opt_value: 'django_opt'
  }
};
function openCourseModal(courseKey) {
  const data = courseData[courseKey];
  if (!data) return;
  courseTitle.innerText = data.title;
  courseLessons.innerHTML = data.lessons.map(lesson => `<li>${lesson}</li>`).join('');
  courseModal.classList.add('active');
  courseOverlay.classList.add('active'); 
}
function closeCourseModal() {
  courseModal.classList.remove('active');
  courseOverlay.classList.remove('active');
}
courseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const courseKey = btn.getAttribute('data-course');
    openCourseModal(courseKey);
  });
});

courseCloseBtn.addEventListener('click', closeCourseModal);
courseOverlay.addEventListener('click', closeCourseModal);

let nav_1 = document.getElementById('nav_1')
let nav_2 = document.getElementById('nav_2')
let nav_3 = document.getElementById('nav_3')
let nav_1_main = document.getElementById('nav_1_main')
let nav_2_main = document.getElementById('nav_2_main')
let nav_3_main = document.getElementById('nav_3_main')
let my_opt = document.createElement("option");

function apply_click(){
  courseModal.classList.remove('active');
  courseOverlay.classList.remove('active');
  nav_2.classList.remove('active')
  nav_3.classList.add('active')
  nav_2_main.classList.remove('active')
  nav_3_main.classList.add('active')
  document.getElementById('choose-course').value = courseTitle.innerHTML + '_opt'
}

let apply_now = document.getElementById('apply_now')

function apply_click2(){
    nav_1.classList.remove('active')
    nav_3.classList.add('active')
    nav_1_main.classList.remove('active')
    nav_3_main.classList.add('active')
}


const translations = {
  english: {
    trans_text1:"START YOUR JOURNEY WITH US",
    trans_text2:"BECOME A PROGRAMMER",
    trans_text3:"STUDY NOW!",
    trans_text4:"Apply Now!",
    trans_text5:'What We Offer',
    trans_text6:'Education',
    trans_text7:'Software Development',
    trans_text8:'Programming education based on practical, hands-on experience',
    trans_text9:'Efficient and precise technological services tailored to meet the modern demands of businesses',
    trans_text10:'© All Rights Reserved | Codeenex 2025',
    trans_text11:'EMAIL',
    trans_text12:'PHONE',
    trans_text13:'LOCATION',
    trans_text14:'Duration: 5 months',
    trans_text15:'Duration: 3 months',
    trans_text16:'Duration: 3 months',
    trans_text17:'Duration: 4 months',
    trans_text18:'Duration: 3 months',
    trans_text19:'Duration: 5 months',
    trans_text20:'View the course',
    trans_text21:'View the course',
    trans_text22:'View the course',
    trans_text23:'View the course',
    trans_text24:'View the course',
    trans_text25:'View the course',
    trans_text26:'Learn JavaScript to create interactive websites',
    trans_text27:'Learn PHP and Laravel to build dynamic web pages and applications',
    trans_text28:'Learn Python and create programs and apps',
    trans_text29:'Learn React.js to build interactive and dynamic websites',
    trans_text30:'Learn Next.js to build fast and modern websites',
    trans_text31:'Learn Python and Django to build powerful and scalable websites',
    trans_text32:'APPLY',
  },
  armenian: {
    trans_text1:"Սկսեք ձեր ճանապարհը մեզ հետ",
    trans_text2:"Դառնացեք ծրագրավորող",
    trans_text3:"Սկսեք սովորել հիմա!",
    trans_text4:"Դիմել հիմա!",
    trans_text5:"Ինչ ենք առաջարկում",
    trans_text6:"Կրթություն",
    trans_text7:"Ծրագրային ապահովման մշակում",
    trans_text8:"Ծրագրավորման ուսուցում, հիմնված գործնական փորձով",
    trans_text9:"Օգտակար և ճշգրիտ տեխնոլոգիական ծառայություններ, որոնք հարմարեցված են ժամանակակից բիզնես պահանջներին",
    trans_text10:"© Բոլոր իրավունքները պաշտպանված են | Codeenex 2025",
    trans_text11:'ՓՈՍՏ',
    trans_text12:'ՀԵՌԱԽՈՍ',
    trans_text13:'ՀԱՍՑԵ',
    trans_text14:'Տևողությունը: 5 ամիս',
    trans_text15:'Տևողությունը: 3 ամիս',
    trans_text16:'Տևողությունը: 3 ամիս',
    trans_text17:'Տևողությունը: 4 ամիս',
    trans_text18:'Տևողությունը: 3 ամիս',
    trans_text19:'Տևողությունը: 5 ամիս',
    trans_text20:'Դիտել դասընթացը',
    trans_text21:'Դիտել դասընթացը',
    trans_text22:'Դիտել դասընթացը',
    trans_text23:'Դիտել դասընթացը',
    trans_text24:'Դիտել դասընթացը',
    trans_text25:'Դիտել դասընթացը',
    trans_text26: 'Սովորեք JavaScript ինտերակտիվ վեբ կայքեր ստեղծելու համար',  
    trans_text27: 'Սովորեք PHP և Laravel դինամիկ վեբ էջեր և հավելվածներ կառուցելու համար',  
    trans_text28: 'Սովորեք Python և ստեղծեք ծրագրեր ու հավելվածներ',  
    trans_text29: 'Սովորեք React.js ինտերակտիվ և դինամիկ վեբ կայքեր կառուցելու համար',  
    trans_text30: 'Սովորեք Next.js արագ և ժամանակակից վեբ կայքեր ստեղծելու համար',  
    trans_text31: 'Սովորեք Python և Django հզոր և մեծ մաշտաբի վեբ կայքեր կառուցելու համար',
    trans_text32:'Գրանցվել',
  },
}







const langSelect = document.getElementById("choose-lang");
const langSelect2 = document.getElementById('choose-lang-2')

function changeLanguage() {
  const selectedLang = langSelect.value;

  for (let key in translations[selectedLang]) {
      let element = document.getElementById(key); 
      if (element) {
          element.textContent = translations[selectedLang][key]; 
      }
  }
}

document.getElementById("choose-lang").addEventListener("change", changeLanguage)

changeLanguage();


function changeLanguage2() {
  const selectedLang = langSelect2.value;

  for (let key in translations[selectedLang]) {
      let element = document.getElementById(key); 
      if (element) {
          element.textContent = translations[selectedLang][key]; 
      }
  }
}

document.getElementById("choose-lang-2").addEventListener("change", changeLanguage2)

changeLanguage2();

