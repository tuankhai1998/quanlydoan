const itemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item");
const btnItemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item .group-btn .item--btn");
const btnShowTeacherDetail = document.querySelectorAll(".list-teacher__list div.item .group-btn .teach-detail--btn");

const formDoAn = document.getElementById("Form-do-an");
const menuForMobile = document.querySelector(".nav-menu--mobile .navbar-nav")
const cancelBtn = document.querySelector(".cancel-btn");
const repairBtn = document.getElementById("repairBtn");
const deleteBtn = document.getElementById("deleteBtn");
const inputForm = document.querySelectorAll(".form__content .input--form input")
const tableRow = document.querySelectorAll(".table tbody tr");
const tableHeader = document.querySelector(".table thead tr");
const menuItem = document.querySelectorAll(".nav-menu .navbar-nav .nav-item")
const addUserType = document.querySelectorAll(".management__addUser .type-addbox__btn-group");
const userInsertForm = document.querySelector(".management__addUser .type-addbox");
const objectDetail = document.querySelector(".object-details");
const loginBtn = document.querySelector(".login--btn");
const changePass = document.querySelectorAll(".change-pass")
const formChangePass = document.querySelector(".change-pass__form")
const exitFormChangePass = document.querySelector(".change-pass__form .change-pass__form--exit")
const checkBox = document.getElementsByName("user-type");
const huyBtn = document.querySelector(".huy-btn")
const finistFormBtn = document.querySelector(".finistform-btn")
const layer = document.querySelector(".layer")


let index = localStorage.getItem('index') || "1";

console.log(btnItemSelectTeacher)

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
            e.stopPropagation();
            let teacherArray = [];
            let studentArray = [];
            const teacherInfo = e.path[2].querySelectorAll(".item__content .item__content--teacher p span");
            const studenInfor = e.path[2].querySelectorAll(".item__content .item__content--student  p span");

            teacherInfo.forEach(teacher => {
                let attr = teacher.getAttribute("title");
                let content = teacher.innerHTML;
                teacherArray = [...teacherArray, attr, content]

            })
            studenInfor.forEach(student => {
                let attr = student.getAttribute("title");
                let content = student.innerHTML;
                studentArray = [...studentArray, attr, content]

            })


            formDoAn.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            formDoAn.querySelector(".container .row div.col-md-8 .form__content .from__content--input").innerHTML = `
                <div class="name input--form">
                <label> Tên sinh viên: </label>
                <input name="Name" type="text" value="${studentArray[1]}" readonly>
                </div>
                <div class="class input--form">
                    <label> Lớp: </label>
                    <input name="Class" type="text" value="${studentArray[3]}}" readonly>
                </div>
                <div class="khoa input--form">
                    <label> Khoa: </label>
                    <input name="Khoa" type="text" value="${studentArray[3]}" readonly>
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

            if (window.getComputedStyle(formDoAn).display === "none") {
                formDoAn.classList.remove('hidden');
                layer.style.display = "block";
                if (formChangePass) {
                    formChangePass.classList.add('hidden')
                }
            }
            else {
                formDoAn.classList.add('hidden');
                layer.style.display = "none";
            }
        })
    }

    )
}

const showTeacherDetail = () => {

    btnShowTeacherDetail.forEach(btn => {
        btn.addEventListener('click', e => {
            console.log("hahah")
            e.stopPropagation();
            let teacherArray = [];
            // let student = [];
            const teacherInfo = e.path[2].querySelectorAll(".item__content .item__content--teacher p span");

            teacherInfo.forEach(teacher => {
                let attr = teacher.getAttribute("title");
                let content = teacher.innerHTML;
                console.log(content)
                teacherArray = [...teacherArray, attr, content]

            })


            formDoAn.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            formDoAn.querySelector(".container .row div.col-md-8 .form__content .from__content--input").innerHTML = `
                <div class="name input--form">
                <label> Tên Gv: </label>
                <input name="Name" type="text" value="${teacherArray[1]}" readonly>
                </div>
                <div class="class input--form">
                    <label> Lớp: </label>
                    <input name="Class" type="text" value="${teacherArray[3]}" readonly>
                </div>
                <div class="khoa input--form">
                    <label> Khoa: </label>
                    <input name="Khoa" type="text" value="${teacherArray[5]}" readonly>
                </div>
                <div class="name input--form">
                    <label> Giản viên hướng dẫn: </label>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" readonly>
                    ${teacherArray[7]}
                    </textarea>
                    
                </div>
                
            `

            if (window.getComputedStyle(formDoAn).display === "none") {
                formDoAn.classList.remove('hidden');
                layer.style.display = "block";
                if (formChangePass) {
                    formChangePass.classList.add('hidden')
                }
            }
            else {
                formDoAn.classList.add('hidden');
                layer.style.display = "none";
            }
        })
    })

}

showTeacherDetail()


const studentBtnClick = (idGV, idSV) => {
    console.log(idGV, idSV)
}


const toggleMenuForMobile = () => {
    menuForMobile.classList.toggle("show")
}



const acceptStudent = (idStudent) => {
    console.log(idStudent)
}
const returnForm = (header, detail) => {
    let form = ''

    for (let i = 0; i < header.length; i++) {
        form += `   <div class="name input--form">
        <label> ${header[i]}: </label>
        <input name="Name" type="text" value="${detail[i]}" readonly>
        </div>`
    }

    return form;
}

// lấy id của từng row khi click
const tableRowClick = () => {
    tableRow.forEach(row => {
        row.addEventListener("click", (e) => {
            e.stopPropagation();
            let headerCol = [];
            let detailObject = {}
            let deatilArray = []
            let id = row.querySelector('th').innerHTML
            let rowDetail = row.querySelectorAll("td");
            tableHeader.querySelectorAll("th").forEach(th => {
                headerCol = [...headerCol, th.innerHTML]
            })
            rowDetail.forEach(td => {
                deatilArray = [...deatilArray, td.innerHTML]
            })
            detailObject.id = id;
            detailObject.data = deatilArray;
            if (objectDetail.querySelector(".container .row div.col-md-4 .user-profile__image")) {

                objectDetail.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            }
            objectDetail.querySelector(".container .row div .form__content .from__content--input").innerHTML = `
            <div class="name input--form hidden ">
            <label> id: </label>
            <input name="Name" type="text" value="${id}" readonly>
            </div>
            ${ returnForm(headerCol, detailObject.data)}
            `
            if (window.getComputedStyle(objectDetail).display === "none") {
                objectDetail.classList.remove("hidden");
                layer.style.display = "block";
                if (formChangePass) {
                    formChangePass.classList.add('hidden')
                }
            }
            else {
                objectDetail.classList.add("hidden");
            }

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
                layer.style.display = "none";
            } else if (objectDetail) {
                objectDetail.classList.add("hidden")
                layer.style.display = "none";

                inputForm.forEach(input => {
                    input.setAttribute("readonly", "true")
                    input.classList.remove("border")
                })
                if (finistFormBtn) {
                    finistFormBtn.classList.add("hidden")
                    layer.style.display = "none";
                }
            }
            localStorage.setItem('teacher', [])
        })
        if (deleteBtn) {
            deleteBtn.addEventListener("click", (e) => {
                e.preventDefault()
                confirm("Bạn có chấp nhận xóa?")
                layer.style.display = "none";
            })

        }
    }
    if (repairBtn) {
        repairBtn.addEventListener("click", (e) => {
            e.preventDefault();
            inputForm.forEach(input => {
                input.removeAttribute("readonly")
                input.classList.add("border")
                finistFormBtn.classList.remove("hidden")
            })

        })

        if (finistFormBtn) {
            finistFormBtn.addEventListener("click", (e) => {
                e.preventDefault()
                confirm("Bạn có muốn cập nhật lại ?")
                layer.style.display = "none";
            })
        }
    }

    if (huyBtn) {
        huyBtn.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("hahah")
            confirm("Bạn có muốn hủy?")
        })
    }
    if (changePass) {
        changePass.forEach(btn => {
            btn.addEventListener("click", e => {
                e.stopPropagation();
                if (window.getComputedStyle(formChangePass).display === "none") {
                    formChangePass.classList.remove("hidden");
                    layer.style.display = "block";
                    if (objectDetail) {
                        objectDetail.classList.add("hidden");
                    }
                    if (formDoAn) {
                        formDoAn.classList.add('hidden');
                    }
                }
                else {
                    console.log("remove show")
                    formChangePass.classList.add('hidden')
                }
            })
        })
        if (exitFormChangePass) {
            exitFormChangePass.addEventListener("click", e => {
                e.preventDefault();
                formChangePass.classList.add('hidden')
                layer.style.display = "none";
            })
        }


    }
    if (checkBox) {
        let gvForm = document.querySelector(".gv-form")
        let svForm = document.querySelector(".sv-form")

        checkBox.forEach(c => {
            c.addEventListener("click", e => {
                if (c.value == "sv") {
                    gvForm.classList.add("hidden")
                    svForm.classList.remove("hidden")
                } else {
                    svForm.classList.add("hidden")
                    gvForm.classList.remove("hidden")
                }
            })
        })
    }

}
BtnClink()

// win.addEventListener('click', e => {
//     if (formChangePass && objectDetail) {
//         if (window.getComputedStyle(objectDetail).display === "none") {
//             formChangePass.classList.add('hidden')
//         } else {
//             objectDetail.classList.add("hidden");
//         }
//     }
//     if (objectDetail) {
//         objectDetail.classList.add("hidden");
//     } else if (formChangePass && formDoAn) {
//         formChangePass.classList.add('hidden')
//         formDoAn.classList.add('hidden');
//     }
// })


