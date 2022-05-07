import { navbar, navbar2 } from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("navbar2").innerHTML = navbar2();

import { footer, bigfooter } from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();
document.getElementById("bigfooter").innerHTML = bigfooter();



let usrName = JSON.parse(localStorage.getItem("username"));
if (usrName !== null) {
	document.getElementById("left").innerHTML = null;
	let box = document.createElement("div");
    box.style="display:flex;justify-content:space-between;align-items:center;color:gray"

	let capImg = document.createElement("img");
	capImg.src = "https://www.kindmeal.my/images/icon_notice.png";
	capImg.style = "height:30px";

	let desc = document.createElement("p");
	desc.innerText = "Hi, " + usrName + "!";
    desc.style="padding-top: 15px;font-size:18px"

	box.append(capImg, desc);
	document.getElementById("left").append(box);
}

function read(id) {
    return document.getElementById(id)
}

function ones(ids) {
    for (var j = 0; j < 5; j++) {
        if (arr_num[j] == ids) {
            let fr = read(arr_num[j]);
            fr.style.background = "rgb(199, 194, 204)";
            i = j - 1;

        }
        else {
            let fr = read(arr_num[j]);
            fr.style.background = "white"
        }
    }
    next();

}




document.getElementById("prev").style.visibility = "hidden"
document.getElementById("next").style.visibility = "visible"

let i = 0;

let arr_num = ['one', 'two', 'three', 'four', 'five']

function next() {
    i++;
    let frwd = read(arr_num[i]);
    frwd.style.background = "rgb(199, 194, 204)"
    let frwd1 = read(arr_num[i - 1]);
    frwd1.style.background = "white"
    if (i == "4") { document.getElementById("next").style.visibility = "hidden"; }
    document.getElementById("prev").style.visibility = "visible"
    console.log(i)
    if (i == "1") {
        let a1 = read("A1")
        let a2 = read("A2")
        let b1 = read("B1")
        let b2 = read("B2")

        a1.innerHTML = b1.innerHTML;
        a2.innerHTML = b2.innerHTML;
    }
    else if (i == "2") {
        let a1 = read("A1")
        let a2 = read("A2")
        let c1 = read("C1")
        let c2 = read("C2")

        a1.innerHTML = c1.innerHTML;
        a2.innerHTML = c2.innerHTML;
    }
    else if (i == "3") {
        let a1 = read("A1")
        let a2 = read("A2")
        let d1 = read("D1")
        let d2 = read("D2")

        a1.innerHTML = d1.innerHTML;
        a2.innerHTML = d2.innerHTML;
    }
    else {
        let a1 = read("A1")
        let a2 = read("A2")
        let e1 = read("E1")
        let e2 = read("E2")

        a1.innerHTML = e1.innerHTML;
        a2.innerHTML = e2.innerHTML;
    }


}



function prev() {
    i--;
    let frwd = read(arr_num[i]);
    frwd.style.background = "rgb(199, 194, 204)"
    let frwd1 = read(arr_num[i + 1]);
    frwd1.style.background = "white"
    if (i == "0") { document.getElementById("prev").style.visibility = "hidden" }
    document.getElementById("next").style.visibility = "visible"
    // console.log(i)
    if (i == "1") {

        let a1 = read("A1")
        let a2 = read("A2")
        let b1 = read("B1")
        let b2 = read("B2")

        a1.innerHTML = b1.innerHTML;
        a2.innerHTML = b2.innerHTML;
    }
    else if (i == "2") {
        let a1 = read("A1")
        let a2 = read("A2")
        let c1 = read("C1")
        let c2 = read("C2")

        a1.innerHTML = c1.innerHTML;
        a2.innerHTML = c2.innerHTML;
    }
    else if (i == "3") {
        let a1 = read("A1")
        let a2 = read("A2")
        let d1 = read("D1")
        let d2 = read("D2")

        a1.innerHTML = d1.innerHTML;
        a2.innerHTML = d2.innerHTML;
    }
    else {
        let a1 = read("A1")
        let a2 = read("A2")
        let e1 = read("E1")
        let e2 = read("E2")

        a1.innerHTML = e1.innerHTML;
        a2.innerHTML = e2.innerHTML;
    }


}

read("next").addEventListener("click", next)
read("prev").addEventListener("click", prev)


read("one").addEventListener("click", ones)
read("two").addEventListener("click", ones)
read("three").addEventListener("click", ones)
read("four").addEventListener("click", ones)
read("five").addEventListener("click", ones)
// read("prev").addEventListener("click", prev)