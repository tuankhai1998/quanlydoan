const itemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item");
const btnItemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item div.item__content button");
const formDoAn = document.getElementById("Form-do-an");
const cancelBtn = document.querySelector(".cancel-btn")

let teacherArray;
let studen = {
    ten: "Nguyễn Thi M",
    lop: "57TH1",
    khoa: "Công nghệ Thông Tin",
    anh: "/theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg"
}
localStorage.setItem('teacher', teacherArray);
localStorage.setItem('studen', studen)

const teacherInfor = localStorage.getItem('teacher')


const selectTeacherBtnClick = () => {
    btnItemSelectTeacher.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            teacherArray = [];
            const teacherInfors = e.path[2].querySelectorAll(".item__content .item__content--profile p span");
            teacherInfors.forEach(teacher => {
                let attr = teacher.getAttribute("title");
                let content = teacher.innerHTML;

                teacherArray = [...teacherArray, attr, content]
            })
            localStorage.setItem('teacher', teacherArray)

            formDoAn.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            formDoAn.querySelector(".container .row div.col-md-8 .form-do-an__content .from-do-an__content--input").innerHTML = `
                <div class="name input--form">
                <label> Tên sinh viên: </label>
                <input name="Name" type="text" value="${studen.ten}" readonly>
                </div>
                <div class="class input--form">
                    <label> Lớp: </label>
                    <input name="Class" type="text" value="${studen.lop}" readonly>
                </div>
                <div class="khoa input--form">
                    <label> Khoa: </label>
                    <input name="Khoa" type="text" value="${studen.khoa}" readonly>
                </div>
                <div class="name input--form">
                    <label> Giản viên hướng dẫn: </label>
                    <input type="text" value="${teacherArray[1]}" readonly>
                </div>
                <div class="ten-do-an input--form">
                    <label> Tên đồ án: </label>
                    <input type="text" placeholder="Nhập tên đò án">
                </div>
            `

            formDoAn.classList.remove('hidden')

        })
    }

    )
}


const cancelForm = () => {
    cancelBtn.addEventListener('click', (e) => {
        formDoAn.classList.add('hidden');
        localStorage.setItem('teacher', [])

    })
}


selectTeacherBtnClick()
cancelForm()