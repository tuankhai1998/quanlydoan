const itemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item");
const btnItemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item div.item__content button");
const formDoAn = document.getElementById("Form-do-an");
const cancelBtn = document.querySelector(".cancel-btn");
const menuForMobile = document.querySelector(".nav-menu--mobile .navbar-nav")
const repairBtn = document.getElementById("repairBtn");
const deleteBtn = document.getElementById("deleteBtn");
const inputForm = document.querySelectorAll(".form__content .input--form input")
const tableRow = document.querySelectorAll(".table tbody tr");
const menuItem = document.querySelectorAll(".nav-menu .navbar-nav .nav-item")

const objectDetail = document.querySelector(".object-details");



let teacherArray;
let student = [
    {
        ten: "Nguyễn Thi M",
        lop: "57TH1",
        khoa: "Công nghệ Thông Tin",
        anh: "/theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg"
    },
    {
        ten: "Nguyễn Thi M",
        lop: "57TH1",
        khoa: "Công nghệ Thông Tin",
        anh: "/theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg"
    }
]
localStorage.setItem('teacher', teacherArray);
localStorage.setItem('student', JSON.stringify(student))
let index = localStorage.getItem('index') || "1";

const menuItemClick = () => {
    menuItem.forEach(item => {
        item.addEventListener("click", e => {
            index = item.getAttribute("index");
            localStorage.setItem('index', index)
        })
    })
}

const renderActiveItemMenu = () => {
    menuItem.forEach(item => {
        let itemIndex = item.getAttribute("index");
        // console.log(itemIndex == index)
        if (itemIndex == index) {
            item.classList.add('active')
        } else {
            item.classList.remove('active');
        }
    })
}

menuItemClick()
renderActiveItemMenu()


const selectTeacherBtnClick = () => {
    btnItemSelectTeacher.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            teacherArray = [];
            const teacherInfo = e.path[2].querySelectorAll(".item__content .item__content--profile p span");
            teacherInfo.forEach(teacher => {
                let attr = teacher.getAttribute("title");
                let content = teacher.innerHTML;

                teacherArray = [...teacherArray, attr, content]

            })

            localStorage.setItem('teacher', JSON.stringify(teacherArray))

            formDoAn.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            formDoAn.querySelector(".container .row div.col-md-8 .form__content .from__content--input").innerHTML = `
                <div class="name input--form">
                <label> Tên sinh viên: </label>
                <input name="Name" type="text" value="${student.ten}" readonly>
                </div>
                <div class="class input--form">
                    <label> Lớp: </label>
                    <input name="Class" type="text" value="${student.lop}" readonly>
                </div>
                <div class="khoa input--form">
                    <label> Khoa: </label>
                    <input name="Khoa" type="text" value="${student.khoa}" readonly>
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

const studentBtnClick = (idGV, idSV) => {
    console.log(idGV, idSV)
}


const toggleMenuForMobile = () => {
    menuForMobile.classList.toggle("show")
}



const acceptStudent = (idStudent) => {
    console.log(idStudent)
}

const tableRowClick = () => {
    tableRow.forEach(row => {
        row.addEventListener("click", (e) => {
            let id = row.querySelector("th").innerHTML;
            objectDetail.classList.remove("hidden")
            // console.log(id)
        })
    })
}


selectTeacherBtnClick()
tableRowClick()


cancelBtn.addEventListener('click', (e) => {
    if (formDoAn) {
        formDoAn.classList.add('hidden');
    } else {
        objectDetail.classList.add("hidden")
    }
    localStorage.setItem('teacher', [])
})



repairBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputForm.forEach(input => {
        input.removeAttribute("readonly")
        input.classList.add("border")
    })

})


deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("delete")

})
