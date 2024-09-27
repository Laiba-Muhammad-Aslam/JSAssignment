var parentDiv = document.getElementById("container");
var newHeading = document.createElement("h1");
var t = document.createTextNode("Official Ferrari website");
newHeading.appendChild(t);
newHeading.setAttribute("class", "h1")
parentDiv.appendChild(newHeading);

var newParagraph = document.createElement("p");
var text = document.createTextNode("Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello. Founded in 1939 by Enzo Ferrari (1898–1988), the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947. Ferrari became a public company in 1960, and from 1963 to 2014 it was a subsidiary of Fiat S.p.A. It was spun off from Fiat's successor entity, Fiat Chrysler Automobiles, in 2016. The company currently offers a large model range which includes several supercars, grand tourers, and one SUV. Many early Ferraris, dating to the 1950s and 1960s, co.");
newParagraph.appendChild(text);
parentDiv.appendChild(newParagraph);

// Create a card 

var card = document.createElement("div");
var img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg/640px-Orange_Enzo_Ferrari_%287191948164%29.jpg";
img.setAttribute("class", "img");
card.setAttribute("class", "card");
var cardPara = document.createElement("p");
var cardText1 = document.createTextNode("Late in 1937, Scuderia Ferrari was liquidated and absorbed into Alfa Romeo,[12] but Enzo's disagreements with upper management caused him to leave in 1939. He used his settlement to found his own company, where he intended to produce his own cars. He called the company Auto Avio Costruzioni, and headquartered it in the facilities of the old Scuderia Ferrari;[1] due to a noncompete agreement with Alfa Romeo, the company could not use the Ferrari name for another four years");
card.appendChild(img);
cardPara.appendChild(cardText1);
card.appendChild(cardPara);
document.body.appendChild(card);