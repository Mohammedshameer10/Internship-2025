//  Navbar 
const navWrapper = document.createElement("nav");
navWrapper.className = "bg-white text-dark border-bottom shadow-sm w-100";


const navContainer = document.createElement("div");
navContainer.className = "container"; 


const topRow = document.createElement("div");
topRow.className = "d-flex justify-content-between align-items-center py-3";


const brand = document.createElement("a");
brand.className = "navbar-brand d-flex align-items-center ms-4 ";
brand.href = "#";

const logo = document.createElement("img");
logo.src = "./img/pumasai.svg";
logo.alt = "PumasAI Logo";
logo.style.height = "50px";
brand.appendChild(logo);

const topNavList = document.createElement("ul");
topNavList.className = "navbar-nav d-flex flex-row gap-4 mb-0";

const topPages = ["Company", "Media", "Careers", "Resources"];
for (let i = 0; i < topPages.length; i++) {
  const li = document.createElement("li");
  li.className = "nav-item";

  const a = document.createElement("a");
  a.className = "nav-link text-dark fs-5";
  a.href = "#";
  a.textContent = topPages[i];

  li.appendChild(a);
  topNavList.appendChild(li);
}


const contactBtn = document.createElement("button");
contactBtn.className = "btn btn-outline-dark fw-bold";
contactBtn.textContent = "Contact Us";
contactBtn.style.height="50px";

topRow.appendChild(brand);
topRow.appendChild(topNavList);
topRow.appendChild(contactBtn);


const bottomRow = document.createElement("div");
bottomRow.className = "d-flex justify-content-center align-items-center py-2";

const bottomNavList = document.createElement("ul");
bottomNavList.className = "navbar-nav d-flex flex-row gap-4 mb-0";

const bottomPages = [
  { name: "Our Products", active: true },
  { name: "Our Services" },
  { name: "Our Customers" }
];

for (let i = 0; i < bottomPages.length; i++) {
  const li = document.createElement("li");
  li.className = "nav-item";

  const a = document.createElement("a");
  a.className = "nav-link fs-5 text-dark";
  if (bottomPages[i].active) {
    a.classList.add("active");
    a.style.borderBottom = "2px solid black"; 
  }
  a.href = "#";
  a.textContent = bottomPages[i].name;

  li.appendChild(a);
  bottomNavList.appendChild(li);
}

bottomRow.appendChild(bottomNavList);


navContainer.appendChild(topRow);
navContainer.appendChild(bottomRow);
navWrapper.appendChild(navContainer);

document.body.appendChild(navWrapper);



// Hero Section
const herosection = document.createElement("section");
herosection.className ="hero-section text-center text-black d-flex flex-column justify-content-center align-items-center mb-5 " ; 
herosection.style.height = "400px";
herosection.style.background = "url('./img/textured-gray-bg-banner.png')";
herosection.style.backgroundSize = "cover"; 



const heroContainer = document.createElement("div");
heroContainer.className = "container";

const heroHeading = document.createElement("h2");
heroHeading.className = " mb-4 ";
heroHeading.textContent = "We help you deliver better treatments to patients faster";


const heroText = document.createElement("p");
heroText.className =  "mb-5";
heroText.textContent ="Our products are designed to double your productivity so you can innovate";

const actionWrapper = document.createElement("div");
actionWrapper.className ="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3";



const extraText = document.createElement("h4");
extraText.className = "mb-0 fw-semibold mt-5";
const text1 = document.createTextNode("Know more about our ");
const br = document.createElement("br");
const strong = document.createElement("strong");
strong.textContent = "Pumas® Products";


const heroButton = document.createElement("button");
heroButton.className = "btn btn-light btn-lg fw-bold mt-5";
heroButton.textContent = "Contact Us";
heroButton.onclick = function () {
  window.location.href = "https://pumasai.com";
};

extraText.appendChild(text1);
extraText.appendChild(br);
extraText.appendChild(strong);

actionWrapper.appendChild(extraText);
actionWrapper.appendChild(heroButton);

heroContainer.appendChild(heroHeading);
heroContainer.appendChild(heroText);
heroContainer.appendChild(actionWrapper);
herosection.appendChild(heroContainer);

document.body.appendChild(herosection);

document.documentElement.style.scrollBehavior = "smooth";


//  Product section 
const prodsec = document.createElement("section");
prodsec.className = "container-fluid text-center shadow-sm";
prodsec.style.backgroundColor = "#f8f9fa"; 
prodsec.style.position = "sticky";
prodsec.style.top = "0";
prodsec.style.zIndex = "1050";
prodsec.style.padding = "15px 0";

const row = document.createElement("div");
row.className = "row g-4 justify-content-center py-1";

const products = [
  {
    img: "./img/DeepPumas.svg",
    description: "Scientific Modeling & ML for Healthcare Data",
    color: "#6f2da8",
  },
  {
    img: "./img/PumasCP.svg",
    description: "Clinical Pharmacology Analysis & Reporting Tool",
    color: "#0070c0",
  },
  {
    img: "./img/Pumas.svg",
    description: "Integrated Scientific M&S & AI/ML Tool",
    color: "#00a38e",
  },
];

const targetIds = ["deep-pumas", "pumas-cp", "pumas"]; 

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const col = document.createElement("div");
  col.className = "col-md-2 col-sm-4 text-center";
  col.style.cursor = "pointer";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.description;
  img.className = "img-fluid mb-2";
  img.style.maxHeight = "40px";

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.className = "mb-0 small";


  col.onclick = function () {
  const target = document.getElementById(targetIds[i]);
  const headerHeight = prodsec.offsetHeight; 
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight ;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
};

  col.appendChild(img);
  col.appendChild(desc);
  row.appendChild(col);
}

const lineWrapper = document.createElement("div");
lineWrapper.className = "d-flex w-50 my-2 mx-auto";
lineWrapper.style.height = "5px";

for (let i = 0; i < products.length; i++) {
  const colorLine = document.createElement("div");
  colorLine.className = "flex-fill";
  colorLine.style.backgroundColor = products[i].color;
  lineWrapper.appendChild(colorLine);
}

prodsec.appendChild(row);
prodsec.appendChild(lineWrapper);
document.body.appendChild(prodsec);



// Full Detail Sections 
const detailContainer = document.createElement("div");
detailContainer.className = "w-100";

const fullProducts = [
  {
    titleImg: "./img/DeepPumas.svg",
    img: "./img/dp.png",
    points: [
      "DeepPumas™ is a first-of-its-kind system that combines scientific modeling and machine learning for business intelligence and healthcare data. By integrating domain-specific knowledge with data-science methodology, it reduces dependence on large datasets and enables faster decision-making.",
      "Unravel hidden relationships ranging from biomarker-outcomes, QSP, QbB, Genomic data and many more.",
      "Avoid missing important trends, loss of productivity and disadvantages of small datasets.",
      "Identify target patients, optimize manufacturing process, build more reliable QSP models with DeepPumas.",
    ],
  },
  {
    titleImg: "./img/PumasCP.svg",
    img: "./img/pcp.png",
    points: [
      "PumasCP is designed to manage your NCA and BE projects most efficiently on a fully compliant platform.",
      "Embed SOPs, customize TLFs, tailor reporting, and automate routine analyses.",
      "Avoid repetitive tasks, high QC overhead and need for other statistical software.",
      "Complete your work most efficiently in fully-validated and simple to license PumasCP.",
    ],
  },
  {
    titleImg: "./img/Pumas.svg",
    img: "./img/ps.png",
    points: [
      "Pumas gives pharmaceutical/biotech companies a one-stop-shop to support their quantitative work required by regulatory agencies through the drug development cycle.",
      "Perform NLME, Optimal Design, Bayesian, SAEM, Clinical Trial Simulations, ML, NCA, BE analyses all within one integrated software.",
      "Avoid loss of productivity, cost of maintaining multiple software and lack of latest innovative technologies.",
      "Double your think time!",
    ],
  },
];

for (let i = 0; i < fullProducts.length; i++) {
  const product = fullProducts[i];

  const section = document.createElement("section");
  section.className = "py-5";
  section.style.backgroundColor = "#f8f9fa";
  section.style.width = "100%";


  section.id = targetIds[i];

  const container = document.createElement("div");
  container.className = "container";

  const row = document.createElement("div");
  row.className = "row align-items-center";

  const imgCol = document.createElement("div");
  imgCol.className = "col-md-6 text-center";
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = "Product Image";
  img.className = "img-fluid rounded";
  imgCol.appendChild(img);

  const contentCol = document.createElement("div");
  contentCol.className = "col-md-6 text-start ps-md-5";

  const titleImg = document.createElement("img");
  titleImg.src = product.titleImg;
  titleImg.alt = "Product Logo";
  titleImg.className = "img-fluid mb-3";
  titleImg.style.maxHeight = "50px";
  contentCol.appendChild(titleImg);

  for (let j = 0; j < product.points.length; j++) {
    const point = document.createElement("p");
    point.className = "mb-3";
    point.style.fontSize = "18px";
    point.textContent = "• " + product.points[j];
    contentCol.appendChild(point);
  }

  const btn = document.createElement("button");
  btn.className = "btn btn-outline-dark mt-3";
  btn.textContent = "Learn more about this product";
  contentCol.appendChild(btn);

  row.appendChild(imgCol);
  row.appendChild(contentCol);
  container.appendChild(row);
  section.appendChild(container);
  detailContainer.appendChild(section);
}

document.body.appendChild(detailContainer);




const detailEnd = detailContainer.offsetTop + detailContainer.offsetHeight;
const productCols = prodsec.querySelectorAll(".col-md-2");
const targetSections = targetIds.map(id => document.getElementById(id));


// make header sticky
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;


  if (scrollTop >= prodsec.offsetTop && scrollTop < detailEnd) {
    prodsec.style.position = "sticky";
    prodsec.style.top = "0";
  } else {
    prodsec.style.position = "static";
  }

//  make the header section highlight
  let activeIndex = -1;
  for (let i = 0; i < targetSections.length; i++) {
    const rect = targetSections[i].getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      activeIndex = i;
      break;
    }
  }


// highlight correspond section header
for (let index = 0; index < productCols.length; index++) {
  const col = productCols[index];
  const img = col.querySelector("img");

  if (index === activeIndex) {
    col.style.backgroundColor = products[index].color;
    col.style.color = "#fff";
    col.classList.add("rounded", "shadow");

    if (img) {
      img.style.filter = "brightness(0) invert(1)";
    }
  } else {
    col.style.backgroundColor = "";
    col.style.color = "";
    col.classList.remove("shadow");

    if (img) {
      img.style.filter = "";
    }
  }
}

  });

// Academic
const academiaSection = document.createElement("section");
academiaSection.className = "py-5 text-center bg-white";

const title = document.createElement("h1");
title.textContent = "Pumas for Academia";
title.className = "mb-5";
title.style.fontFamily = "'Times New Roman', Times, serif";
academiaSection.appendChild(title);

const container = document.createElement("div");
container.className = "container";

const academiaRow = document.createElement("div");
academiaRow.className = "row justify-content-center g-5"; 

const col1 = document.createElement("div");
col1.className = "col-md-4 text-center";

const img1 = document.createElement("img");
Object.assign(img1,{
    src :"./img/academic.png",
    alt : "Academia",
    className : "img-fluid mb-3",
});

const p1 = document.createElement("p");
p1.textContent = "Pumas and PumasCP Desktop versions are free for academic research & training";

col1.appendChild(img1);
col1.appendChild(p1);
const col2 = document.createElement("div");
col2.className = "col-md-4 text-center";

const img2 = document.createElement("img");

Object.assign(img2,{
    src :"./img/research.png",
    alt : "Research",
    className : "img-fluid mb-3",
});


const p2 = document.createElement("p");
p2.textContent = "You are free to publish research conducted using Pumas products";

col2.appendChild(img2);
col2.appendChild(p2);

academiaRow.appendChild(col1);
academiaRow.appendChild(col2);

const learnBtn = document.createElement("button");
learnBtn.className = "btn btn-outline-dark mt-4";
learnBtn.textContent = "Learn more!";

container.appendChild(academiaRow);
container.appendChild(learnBtn);
academiaSection.appendChild(container);

document.body.appendChild(academiaSection);




// contact section
const contactSection = document.createElement("section");
contactSection.className = "py-5 text-center";
contactSection.style.backgroundImage = "url('./img/textured-gray-bg-banner.png')";
contactSection.style.height="500px";
contactSection.style.backgroundSize = "cover"; 


const contactContainer = document.createElement("div");
contactContainer.className = "container";

const contactRow = document.createElement("div");
contactRow.className = "row g-4 mb-5";

const contactData = [
  {
    img: "./img/request-call.svg",
    title: "Request a Call",
    desc: "Set up a time to discuss your needs with our Pumas products or Consulting teams"
  },
  {
    img: "./img/customised-plan.svg",
    title: "Receive a Customized Plan",
    desc: "Partner with us in implementing a winning strategy for you"
  },
  {
    img: "./img/bullseye.svg",
    title: "Successfully Deliver What Patients Need",
    desc: "Deliver access to life-saving treatments to patients with confidence"
  }
];


for (let i = 0; i < contactData.length; i++) {

    const item=contactData[i];

  const col = document.createElement("div");
  col.className = "col-md-4 text-center";

  const img=document.createElement("img");
  img.src=item.img;
  img.alt=item.title;
  img.className="img-fluid mb-3";


  const title=document.createElement("h5");
  title.className="fw-bold";
  title.textContent=item.title;

  const desc=document.createElement("p");
  desc.textContent=item.desc;


  col.appendChild(img);
  col.appendChild(title);
  col.appendChild(desc);

  contactRow.appendChild(col);


}

const heading = document.createElement("h3");
heading.textContent = "Getting started is simple";
heading.className = "fw-bold mb-4";

const connectBtn = document.createElement("button");
connectBtn.className = "btn btn-outline-dark";
connectBtn.textContent = "Contact Us";

contactContainer.appendChild(contactRow);
contactContainer.appendChild(heading);
contactContainer.appendChild(connectBtn);
contactSection.appendChild(contactContainer);
document.body.appendChild(contactSection);


// Footer 
const footer = document.createElement("footer");
footer.className = "bg-dark text-white py-5 mt-0";


const footercontainer = document.createElement("div");
footercontainer.className = "container";


const fhead = document.createElement("div");
fhead.className = "text-start mb-4";

const flogo = document.createElement("img");
flogo.src = "./img/pumasai.svg";
flogo.alt = "PumasAI Logo";
flogo.style.height = "50px";
flogo.style.filter = "brightness(0) invert(1)";
fhead.appendChild(flogo);


const frow = document.createElement("div");
frow.className = "row text-center text-md-start";


const leftCol = document.createElement("div");
leftCol.className = "col-md-3 mb-4";

const addressLines = [
  "Pumas-AI Inc.",
  "3500 South Dupont Highway",
  "Suite GT-101",
  "Dover, DE 19901"
];


for(let i=0;i< addressLines.length;i++){
  const p = document.createElement("p");
  p.className = "mb-1 fs-5";
  p.textContent = addressLines[i];
  leftCol.appendChild(p);
} 


const email = document.createElement("p");
email.className = "mb-1";
const emailLink = document.createElement("a");
emailLink.href = "mailto:info@pumas.ai";
emailLink.className = "text-white text-decoration-none fs-5";
emailLink.textContent = "info@pumas.ai";
email.appendChild(document.createTextNode("Email: "));
email.appendChild(emailLink);
leftCol.appendChild(email);




const mid1col = document.createElement("div");
mid1col.className = "col-md-3 mb-4";

const mid1Items = ["Our Services", "News", "Events"];
for (let i = 0; i < mid1Items.length; i++) {
  const linkP = document.createElement("p");
  linkP.className = "mb-4";

  const a = document.createElement("a");
  a.href = "#";
  a.className = "text-white text-decoration-none fs-5";
  a.textContent = mid1Items[i];

  linkP.appendChild(a);
  mid1col.appendChild(linkP);
}


const midCol = document.createElement("div");
midCol.className = "col-md-3 mb-4";

const midItems = ["Our Products", "Our Team", "Contact"];
for (let i = 0; i < midItems.length; i++) {
  const linkP = document.createElement("p");
  linkP.className = "mb-4";

  const a = document.createElement("a");
  a.href = "#";
  a.className = "text-white text-decoration-none fs-5";
  a.textContent = midItems[i];

  linkP.appendChild(a);
  midCol.appendChild(linkP);
}




const rightCol = document.createElement("div");
rightCol.className = "col-md-3 mb-4";

const item3 = ["Our Customers", "Careers", "Resources"];

for (let i = 0; i < item3.length; i++) {
  const linkP = document.createElement("p");
  linkP.className = "mb-4";

  const a = document.createElement("a");
  a.href = "#";
  a.className = "text-white text-decoration-none fs-5";
  a.textContent = item3[i];

  linkP.appendChild(a);
  rightCol.appendChild(linkP);
}


frow.appendChild(leftCol);
frow.appendChild(mid1col);
frow.appendChild(midCol);
frow.appendChild(rightCol);



const bottomline = document.createElement("div");
bottomline.className = "text-center border-top border-secondary pt-3 mt-3";

const terms = document.createElement("small");
terms.className = "d-block";
terms.textContent = "Terms of use | Privacy Policy";

const copyright = document.createElement("small");
copyright.textContent = "© Pumas-AI Inc. 2025. All rights reserved.";

bottomline.appendChild(terms);
bottomline.appendChild(copyright);


footercontainer.appendChild(fhead);
footercontainer.appendChild(frow);
footercontainer.appendChild(bottomline);
footer.appendChild(footercontainer);
document.body.appendChild(footer);


document.body.style.overflowX = "hidden";



const favicon = document.createElement("link");
Object.assign(favicon,{
    rel:"icon",
    type:"image/png",
    href:"./img/pumasai.svg"
});



document.head.appendChild(favicon);

// ===== Modal Structure =====

// Modal Wrapper
const modal = document.createElement("div");
modal.className = "modal fade";
modal.id = "contactModal";
modal.tabIndex = "-1";
modal.setAttribute("aria-hidden", "true");

// Modal Dialog
const modalDialog = document.createElement("div");
modalDialog.className = "modal-dialog modal-lg modal-dialog-centered";

// Modal Content
const modalContent = document.createElement("div");
modalContent.className = "modal-content";

// Modal Header
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";

const modalTitle = document.createElement("h5");
modalTitle.className = "modal-title fw-bold";
modalTitle.textContent = "Contact Us";

const closeBtn = document.createElement("button");
closeBtn.type = "button";
closeBtn.className = "btn-close";
closeBtn.setAttribute("data-bs-dismiss", "modal");
closeBtn.setAttribute("aria-label", "Close");

modalHeader.appendChild(modalTitle);
modalHeader.appendChild(closeBtn);

// Modal Body (Simple Example - you can extend with full form)
const modalBody = document.createElement("div");
modalBody.className = "modal-body";

const formText = document.createElement("p");
formText.textContent = "Please fill in your details here (You can replace this with the full form)";
modalBody.appendChild(formText);

// Modal Footer
const modalFooter = document.createElement("div");
modalFooter.className = "modal-footer";

const closeFooterBtn = document.createElement("button");
closeFooterBtn.type = "button";
closeFooterBtn.className = "btn btn-secondary";
closeFooterBtn.setAttribute("data-bs-dismiss", "modal");
closeFooterBtn.textContent = "Close";

const submitBtn = document.createElement("button");
submitBtn.type = "button";
submitBtn.className = "btn btn-dark";
submitBtn.textContent = "Submit";

modalFooter.appendChild(closeFooterBtn);
modalFooter.appendChild(submitBtn);

// Append Modal Parts
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter);
modalDialog.appendChild(modalContent);
modal.appendChild(modalDialog);
document.body.appendChild(modal);

contactBtn.addEventListener("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("contactModal"));
  myModal.show();
});
