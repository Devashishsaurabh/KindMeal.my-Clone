import { navbar, navbar2 } from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("navbar2").innerHTML = navbar2();

import { footer, bigfooter } from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();
document.getElementById("bigfooter").innerHTML = bigfooter();
// -----------Navbar Imported---------

// For showing cap image and logged in person's name
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
//********************************************************************************

let small = [
	"https://www.kindmeal.my/photos/shop/5/504-3481-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/549-4094-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg",
	"https://www.kindmeal.my/photos/shop/2/277-1549-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg",
	"https://www.kindmeal.my/photos/shop/6/603-4533-m.jpg",
];

let i = 0;

let img = document.createElement("img");
img.setAttribute("class", "smallslide");

setInterval(() => {
	if (small.length === i) {
		i = 0;
	}
	img.src = small[i];
	document.getElementById("slide2").append(img);
	i++;
}, 2500);

document.getElementById("slide2").addEventListener("click", redirect);
function redirect() {
	window.location.href ="hotpicks.html" ;
	console.log("hi")
}

let big = [
	"https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/708-4923-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
];

let text = [
	"Tasty Midas Touch,15% Off",
	"Nature Dining,10% Off-Camp Forest",
	"Tasty, Joyful Moments, 10% Off -Moment of Joy",
	"Mangga Natural Lifestyle,20% Off -Mangga Vegetarial Cafe",
	"Lei Cha & Organic Meals, 20% Off -- Green Talk Healthy Organic & Cafe",
	"wholesome Western Experience,20% Off -- Piccolo Cafe",
	"Plant-Based Culinary Experience, 15% Off --Pc Studio Cafe",
];
let disc = [
	"15% Discount",
	"10% Discount",
	"20% Discount",
	"10% Discount",
	"15% Discount",
	"20% Discount",
	"10% Discount",
];

let img1 = document.createElement("img");
img1.setAttribute("class", "big");

let textcon = document.createElement("p");
textcon.setAttribute("class", "textcon");
let dis = document.createElement("h3");
dis.setAttribute("class", "disc");
setInterval(() => {
	if (big.length === i && text.length == i && disc.length == 1) {
		i = 0;
	}
	img1.src = big[i];
	textcon.innerText = text[i];
	dis.innerText = disc[i];
	document.getElementById("discount").append(dis);
	document.getElementById("slidetext").append(textcon);
	document.getElementById("slide1").append(img1);
}, 2500);

document.getElementById("slide1").addEventListener("click", redirect1);
function redirect1() {
	window.location.href = "hotpicks.html";
}

big.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "downdiv");
	let img = document.createElement("img");
	img.src = ele;
	img.setAttribute("class", "divimage");
	div.append(img);
	document.getElementById("downslide").append(div);
});

let latest = [
	{
		picture:
			"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/265676754_537504067934425_3867740012497271746_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=y30XQLoGpfwAX8XM2p9&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9bx7R2kY7P5OiMmrZGwxg2PQpyzKTFYBWAAnPiTrlkHg&oe=6277A935",
		title: "Rescue Rooster Loves To Chase His Favorite Girl Around The H..",
	},

	{
		picture:
			"https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/279627551_5328062260587349_2522446728530536509_n.png?stp=dst-png_p720x720&_nc_cat=107&ccb=1-6&_nc_sid=8024bb&_nc_ohc=UAnc80E4HfcAX8IJfox&_nc_oc=AQktICx1hgFfGqDEI4WEYXUWj3AxUkEpV6aWL8ar-TIJgCjc80P4xGd8filkHXxV3_8&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-2g6j0s5Y5KkztZwGvqQDLGylWttTpvzz6Ba-tU168-A&oe=627B93F9",
		title: "Happy Mother''s Day To All The Amazing Human And Animal Moms..",
	},

	{
		picture:
			"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/174799562_141056594653039_1596631066321827672_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-6&_nc_sid=ad6a45&_nc_ohc=RDFjud5jd1QAX93Guzt&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8rilhFMNNiR_WoNQJCbBWfIHn9tc8XVB_rviEumvjpAw&oe=627BB2AF",
		title: "All Mother''s Day",
	},
	{
		picture:
			"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/278543508_1355960868214798_747545810926411906_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=ATK1IM9c-vEAX-42e_J&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8VN7UcBi8JGZIWrI65d-bCkEsApeuGT-cwnJT6LmCQKA&oe=6277B3B1",
		title: "Avocados Reduce The Risk Of Heart Disease, Study Shows",
	},
	{
		picture:
			"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/255080259_586462589141979_3351767045653503738_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-6&_nc_sid=ad6a45&_nc_ohc=aoTgYOEYUOAAX9yKxhT&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-ImAkVFz3fXOAdBGah7gyHyKnptgwpf6yqXh2VKNT7kw&oe=627CA70C",
		title: "Puttanesca Gnocchi",
	},
];

latest.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "newsdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "imgdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "livepic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "comment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("news2").append(div);
});
let moment = [
	{
		picture: "https://www.kindmeal.my/photos/moment/23/23882-45290-s.jpg",
		title: "The Hungry Tapir karenkhong",
	},

	{
		picture: "https://www.kindmeal.my/photos/moment/23/23881-45285-s.jpg",
		title: "Soul Kitchen Cheras C180 VyVian",
	},

	{
		picture: "https://www.kindmeal.my/photos/moment/23/23880-45282-s.jpg",
		title: "Jujube Vegetarian House Yulek VyVian",
	},

	{
		picture: "https://www.kindmeal.my/photos/moment/23/23879-45278-s.jpg",
		title: "好地方素食 Niche Vegetarian Restaurant FatJedi",
	},
	{
		picture: "https://www.kindmeal.my/photos/moment/23/23878-45277-s.jpg",
		title: "Jujube Vegetarian House 枣子树Yulek VyVian",
	},
];

moment.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "momentdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "momimgdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "mompic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "momcomment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("moment2").append(div);
});
let restra = [
	{
		picture: "https://www.kindmeal.my/photos/item/0/387-4299-s.jpg",
		title: "Gailan with Ginger",
	},

	{
		picture: "https://www.kindmeal.my/photos/item/0/539-7147-s.jpg",
		title: "Button Mushroom",
	},

	{
		picture: "https://www.kindmeal.my/photos/item/0/180-1742-s.jpg",
		title: "Jeera Aloo",
	},

	{
		picture: "https://www.kindmeal.my/photos/item/0/270-3094-s.jpg",
		title: "Chickpea Salad 鷹嘴豆沙律",
	},
	{
		picture: "https://www.kindmeal.my/photos/item/0/281-2884-s.jpg",
		title: "Latte",
	},
];

restra.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "momentdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "resdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "mompic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "momcomment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("res3").append(div);
});

let superhero = [
	{
		picture: "https://www.kindmeal.my/photos/member/41/41027-m.jpg",
		title: "ShellingWong",
	},

	{
		picture: "https://www.kindmeal.my/photos/member/25/25443-m.jpg",
		title: "YeeHuiJing",
	},

	{
		picture: "https://www.kindmeal.my/photos/member/28/28377-m.jpg",
		title: "CaelChiang",
	},

	{
		picture: "https://www.kindmeal.my/photos/member/40/40964-m.jpg",
		title: "FionaLoh",
	},
	{
		picture: "https://www.kindmeal.my/photos/member/23/23748-m.jpg",
		title: "HuanHuanTai",
	},
];

superhero.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "momentdiv");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "resdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.setAttribute("class", "mompic");
	let title = document.createElement("p");
	title.innerHTML = ele.title;
	title.setAttribute("class", "momcomment");
	div1.append(img);
	div.append(div1, title);
	document.getElementById("super").append(div);
});
let deals = [
	{
		picture: "https://www.kindmeal.my/images/intro_deal.png",
		title: "Get Great Deals",
		dis: "Show our FREE digital coupons to instantly enjoy exciting deals",
	},
	{
		picture: "https://www.kindmeal.my/images/intro_kindmoment.png",
		title: "Share KindMoments",
		dis: "Spread the joy by sharing your yummy dining moments",
	},
	{
		picture: "https://www.kindmeal.my/images/intro_menu.png",
		title: "Discover Delicious Food",
		dis: "Explore the latest exquisite offerings and creative menus",
	},
	{
		picture: "https://www.kindmeal.my/images/intro_friends.png",
		title: "Meet Food Lovers",
		dis: "Make new, compassionate friends and share great food tips",
	},
];

deals.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "dealbox");
	let div1 = document.createElement("div");
	div1.setAttribute("class", "dealdiv");
	let img = document.createElement("img");
	img.src = ele.picture;
	img.style.width = "60%";
	img.style.height = "80%";
	img.style.marginTop = "20px";

	let title = document.createElement("h5");
	title.innerHTML = ele.title;
	let disc = document.createElement("p");
	disc.innerHTML = ele.dis;
	disc.style.padding = "3px";

	div1.append(img);
	div.append(div1, title, disc);
	document.getElementById("deal").append(div);
});
