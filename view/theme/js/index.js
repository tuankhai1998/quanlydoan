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
const addUserType = document.querySelectorAll(".management__addUser .type-addbox__btn-group");
const userInsertForm = document.querySelector(".management__addUser .type-addbox");
const objectDetail = document.querySelector(".object-details");
const loginBtn = document.querySelector(".login--btn");
const changePass = document.querySelectorAll(".change-pass")
const formChangePass = document.querySelector(".change-pass__form")
const exitFormChangePass = document.querySelector(".change-pass__form .change-pass__form--exit")
const checkBox = document.getElementsByName("user-type");


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


const selectTypeInsert = () => {
    addUserType.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            // console.log(e.target.dataset.name)
            if (e.target.dataset.type == 1) {
                // btn.classList.add("active")
                userInsertForm.querySelector(".user--one").classList.remove("hidden")
                userInsertForm.querySelector(".multiple--user").classList.add("hidden")
            } else {
                userInsertForm.querySelector(".user--one").classList.add("hidden")
                userInsertForm.querySelector(".multiple--user").classList.remove("hidden")
            }

        })
    })
}
selectTypeInsert()

selectTeacherBtnClick()
tableRowClick()


const BtnClink = () => {
    if (cancelBtn) {
        cancelBtn.addEventListener('click', (e) => {
            if (formDoAn) {
                formDoAn.classList.add('hidden');
            } else if (objectDetail) {
                objectDetail.classList.add("hidden")
            }
            localStorage.setItem('teacher', [])
        })
    }
    if (repairBtn) {
        repairBtn.addEventListener("click", (e) => {
            e.preventDefault();
            inputForm.forEach(input => {
                input.removeAttribute("readonly")
                input.classList.add("border")
            })

        })
    }
    if (deleteBtn) {
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("delete")

        })
    }
    if (changePass) {
        changePass.forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                formChangePass.classList.add("show")

            })
        })

        exitFormChangePass.addEventListener("click", e => {
            e.preventDefault();
            formChangePass.classList.remove('show')
        })
    }
    if (checkBox) {
        let gvForm = document.querySelector(".gv-form")
        let svForm = document.querySelector(".sv-form")

        checkBox.forEach(c => {
            c.addEventListener("click", e => {
                if (c.value == "sv") {
                    gvForm.classList.add("hidden")
                    svForm.classList.remove("hidden")
                }
                svForm.classList.add("hidden")
                gvForm.classList.remove("hidden")
            })
        })
    }




}
BtnClink()


