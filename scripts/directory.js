import { navbar, navbar2 } from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("navbar2").innerHTML = navbar2();

import { footer, bigfooter } from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();
document.getElementById("bigfooter").innerHTML = bigfooter();

let directoryPhotos1 = [
	"https://www.kindmeal.my/photos/item/0/362-3912-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4147-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4145-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3908-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3924-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4148-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3930-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3917-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3931-m.jpg",
];

let directoryPhotos1Names = [
	"Quinoa-Brown Rice Kimbap 藜麦糙米饭卷",
	"Seaweed Tomato Mee Hoon 海苔番茄米粉",
	"AENON Assam Laksa 爱能亚参拉沙",
    "Bean Curd Barley Soup 腐竹薏米水",
    "AENON Veggie Wrap 爱能蔬菜卷",
    "Seaweed Fish Brown Rice Porridge 紫菜鱼片糙米粥",
    "Organic Black Bean Noodle Soup 有机黑豆汤",
    "Claypot Mushroom Brown Rice 瓦煲野菌糙米饭",
    "Turmeric Nyonya Laksa 黄姜娘惹拉沙"
];

let directoryPhotos2 = [
	"https://www.kindmeal.my/photos/item/0/362-3927-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3911-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4143-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3914-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3928-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3929-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3922-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-3925-m.jpg",
	"https://www.kindmeal.my/photos/item/0/362-4150-m.jpg",
];

let directoryPhotos2Names = [
	"Flower Tea (菊花,玫瑰,薰衣草)",
	"Quinoa-Brown Rice Tuna Kimbap 吞拿藜麦糙米饭卷",
	"Healthy Steamboat 养身火锅",
    "Alfalfa Salad Inari 苜蓿沙拉甜豆包",
    "Misai Kucing Tea 猫须早茶",
    "Red Jujube Longan Wolfberry Tea 红枣桂圆枸杞茶",
    "Pumpkin Sago 金瓜西米露",
    "Banana Almond Frappe 杏仁香蕉刨冰",
    "Yam Rice With Herbal Soup 香芋饭配药膳汤"
];

