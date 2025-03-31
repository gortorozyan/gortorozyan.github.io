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
        'JavaScript ծրագրավորման խորացված դասընթաց',
        'Դասընթացի տևողություն՝ 5 ամիս, շաբաթական՝ 2 պարապմունք (1.5-2 ժամ տևողությամբ)',
        'Դասընթացի ամսական վճարը՝ 30,000 դրամ',
    ],
    opt_value: 'js_opt'
  },
  php: {
    title: "PHP(laravel) Course",
    lessons: [
      'PHP(laravel) ծրագրավորման խորացված դասընթաց',
      'Դասընթացի տևողություն՝ 4 ամիս, շաբաթական՝ 2 պարապմունք (1.5-2 ժամ տևողությամբ)',
      'Դասընթացի ամսական վճարը՝ 30,000 դրամ',
    ],
    opt_value: 'php_opt'
  },
  python: {
    title: "Python Course",
    lessons: [
      'Python ծրագրավորման խորացված դասընթաց',
      'Դասընթացի տևողություն՝ 3 ամիս, շաբաթական՝ 2 պարապմունք (1.5-2 ժամ տևողությամբ)',
      'Դասընթացի ամսական վճարը՝ 40,000 դրամ',
    ],
    opt_value: 'py_opt'
  },
  react_js: {
    title: "React.js Course",
    lessons: [
      'React.js ծրագրավորման խորացված դասընթաց',
      'Դասընթացի տևողություն՝ 4 ամիս, շաբաթական՝ 2 պարապմունք (1.5-2 ժամ տևողությամբ)',
      'Դասընթացի ամսական վճարը՝ 50,000 դրամ',
    ],
    opt_value: 'react_opt'
  },
  next_js: {
    title: "Next.js Course",
    lessons: [
      'Next.js ծրագրավորման խորացված դասընթաց',
      'Դասընթացի տևողություն՝ 3 ամիս, շաբաթական՝ 2 պարապմունք (1.5-2 ժամ տևողությամբ)',
      'Դասընթացի ամսական վճարը՝ 50,000 դրամ', 
    ],
    opt_value: 'next_opt'
  }, 
  django: {
    title: "Python(Django) Course",
    lessons: [
      'Python ծրագրավորման խորացված դասընթաց',
      'Դասընթացի տևողություն՝ 5 ամիս, շաբաթական՝ 2 պարապմունք (1.5-2 ժամ տևողությամբ)',
      'Դասընթացի ամսական վճարը՝ 50,000 դրամ',
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

