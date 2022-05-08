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
var artdata=[
    {       image_url:"https://www.kindmeal.my/photos/article/19/19764-l.jpg",
           heading:"Happy Mother's Day To All The Amazing Human And Animal Moms. Pamper Your Mom Wit..",
           status:"by KindMeal.my",
           article:"Happy Mother's Day to all the amazing human and animal moms! 💕 Pamper your mom with compassionate, delicious meat-free meals at Send your mom these sweet WhatsApp stickers:",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19762-l.jpg",
           heading:"All Mother''s Day",
           status:"by KindMeal.my",
           article:"Uplifting rescue stories dedicated to all the amazing moms. May your babies stay safe and sound. ❤",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19759-l.jpg",
           heading:"Ruby Is Fun Loving, Sweet, And Loves To Go Swimming In The Ponds Every Summer",
           status:"by KindMeal.my",
           article:"! ❤",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19756-l.jpg",
           heading:"Puttanesca Gnocchi",
           status:"by KindMeal.my",
           article:"This puttanesca gnocchi is full of flavour and super easy to make!",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19763-l.jpg",
           heading:"This Is The Start Of Something New. Our Farm Transitions Programs Is Designed To..",
           status:"by KindMeal.my",
           article:"This is the start of something new🌱👩‍🌾 Our Farm Transitions Programs is designed to help encourage local farmers to adopt sustainable and profitable alternatives to animal agriculture. Now we've helped create the Farmer Toolkit to make these transitions easier. Read more:",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19761-l.jpg",
           heading:"In Kenny Torella''s Article On The Current Avian Flu Outbreak Devastating The U.s..",
           status:"by Compassion Over Killing",
           article:"In Kenny Torella's article on the current avian flu outbreak devastating the U.S., he focuses on how some farms are using ventilation shutdown (VSD) and ventilation shutdown plus (VSD+) to kill birds who've been exposed to the virus. You can learn more about VSD and about Animal Outlook's recently o..",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19760-l.jpg",
           heading:"Show Animals Kindness And Compassion. Animals Are Sentient Beings And Deserve To..",
           status:"by Compassion Over Killing",
           article:"Show animals kindness and compassion. Animals are sentient beings and deserve to live happy and healthy lives. Image: Jo-Anne McArthur / We Animals Media",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19758-l.jpg",
           heading:"“The science on fish sentience is clear: fish have the capacity to suffer and feel pain.” - Becca Franks, fish scientist. In 2019, Animal Outlook released the first-ever undercover exposé of salmon aquaculture in the U.S. which documented senseless violence against these sentient animals at Cooke A..",
           status:"by Compassion Over Killing",
           article:"Need a last minute Mother's Day gift? Send a beautiful eCard to your own mom -- or any special mom in your life -- by simply making a donation to Animal Outlook. There are three eCards to choose from. Your generous donation will help expose the truth of what happens to farmed animals, and inspire c..",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19755-l.jpg",
           heading:"Motherhood: The Life Of A Mother Inside Factory Farms",
           status:"by Compassion Over Killing",
           article:"Need a last minute Mother's Day gift? Send a beautiful eCard to your own mom -- or any special mom in your life -- by simply making a donation to Animal Outlook. There are three eCards to choose from. Your generous donation will help expose the truth of what happens to farmed animals, and inspire c..",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19752-l.jpg",
           heading:"Rescue Rooster Loves To Chase His Favorite Girl Around The House",
           status:"by KindMeal.my",
           article:"Loyal rooster loves to chase his favorite girl around the house — and snuggle on her lap while she's doing her homework ❤️",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19748-l.jpg",
           heading:"Hummus Pasta 🍝",
           status:"by KindMeal.my",
           article:"Try this budget-friendly hummus pasta!",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19747-l.jpg",
           heading:"Happy Mother's Day To All The Amazing Human And Animal Moms. Pamper Your Mom Wit..",
           status:"by KindMeal.my",
           article:"Happy Mother's Day to all the amazing human and animal moms! 💕 Pamper your mom with compassionate, delicious meat-free meals at Send your mom these sweet WhatsApp stickers:",
       },
       {       image_url:"https://www.kindmeal.my/photos/article/19/19764-l.jpg",
           heading:"Happy Mother's Day To All The Amazing Human And Animal Moms. Pamper Your Mom Wit..",
           status:"by KindMeal.my",
           article:"Happy Mother's Day to all the amazing human and animal moms! 💕 Pamper your mom with compassionate, delicious meat-free meals at Send your mom these sweet WhatsApp stickers:",
       },
   
       ]
       var cartData = JSON.parse(localStorage.getItem("cart")) || [];
       artdata.map (function (elem){
           var box=document.createElement("div");
            box.setAttribute("class", "box")
   
           var box1=document.createElement("div");
           box1.setAttribute("class","box1")
   
           var img = document.createElement("img");
           img.src = elem.image_url;
           img.setAttribute("class","images")
   
           var box2= document.createElement("div");
           box2.setAttribute("class","box2")
   
           var heading= document.createElement("h4");
           heading.textContent=elem.heading;
   
           var status= document.createElement("p");
           status.textContent=elem.status;
   
           var article=document.createElement("p");
           article.textContent=elem.article;
   
           var cartbtn = document.createElement("button");
       cartbtn.innerText = "View Article"
       cartbtn.style.backgroundColor="red";
       cartbtn.style.color="white";
       cartbtn.style.border="0px";
       cartbtn.style.borderRadius="7px";
       cartbtn.style.padding="12px"
       cartbtn.addEventListener("click",function(){
         addtocart(elem)
            })
   
            box1.append(img);
            box2.append(heading, status, article, cartbtn);
            box.append(box1,box2);
            document.querySelector("#container").append(box);
       }) ;
       function addtocart(elem){
       men_Data.push(elem)
       localStorage.setItem("cartitems",JSON.stringify(men_Data));}