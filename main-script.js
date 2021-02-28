window.onload = function() {

   var mainWrapper = document.createElement('div');
      mainWrapper.classList.add('main-wrapper');
      document.body.appendChild(mainWrapper);

//site header
      headerSection(mainWrapper);

      //heading texts
      h1Text(mainWrapper);



      //services section
      servicesSection(mainWrapper);

     //about Us section
     aboutUs(mainWrapper);

     //Why Us
     whyUs(mainWrapper);



     //show and hide the navigation Menu
     openAndCloseNavBar();

    //alert user about links not created;
   tellUserAboutEmptyLinks(mainWrapper);

   getButton();

}



function headerSection(mainDiv) {
  //main header
  var header = document.createElement('header');
  mainDiv.appendChild(header);

  createDivs(header, 'brand-nav-btn');

//logo section where you see (TECH SOLUTION).
function logoSection() {
  var brandWrapper = document.createElement('div');
  brandWrapper.classList.add('brand-wrapper');
    div.appendChild(brandWrapper);

  var brand = document.createElement('a');
    brand.classList.add('brand');
    brand.setAttribute('href', 'index.html');
    brand.textContent = "TECH SOLUTIONS";
    brandWrapper.appendChild(brand);
}
logoSection();

function navOpenCloseBtn() {

  var btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');
    div.appendChild(btnWrapper);
  var button = document.createElement('button');
  button.textContent = "Menu";
  button.classList.add('nav-open-close-btn');
  btnWrapper.appendChild(button);
}
navOpenCloseBtn();


//navigation menu.
function navBar() {
  var navWrapper = document.createElement('nav');
  header.appendChild(navWrapper);

      navLinksSources = ['index.html', 'index.html', 'index.html', 'index.html', 'index.html',];
      navLinksContents = ['Home', 'Services', 'About-Us', 'Why-Us', 'Contact'];
      for(var i = 0; i < navLinksSources.length; i++) {
        var navLinks = document.createElement('a');
        navLinks.classList.add('nav-links');
        navLinks.setAttribute('href', navLinksSources[i]);
        navLinks.textContent = navLinksContents[i];

        navWrapper.append(navLinks);
      }
}
navBar();

}

//header text
function h1Text(mainDiv) {

  createDivs(mainDiv, 'h1-wrapper');

  var h1 = document.createElement('h1');
  h1.textContent = "With Tech The World Is Bright!";
   div.appendChild(h1);

  var h2 = document.createElement('h2');
  h2.textContent = "TECH SOLUTION.. The All In One Stop Point ";
  h2.classList.add('top-h2');
  div.appendChild(h2);

  var img = document.createElement('img');
    img.setAttribute('src', 'giphy.gif');
    img.setAttribute('alt', 'earth-image');
    img.classList.add('top-image');
    div.appendChild(img);
}

//services section
function servicesSection(mainDiv) {
  createSections(mainDiv, 'services');
    createDivs(section, 'services-wrapper');

  var h2 = document.createElement('h2');
     h2.textContent = "Services";
     div.appendChild(h2);

      var ul = document.createElement('ul');
         div.appendChild(ul);

         var arr = ['Web Development', 'Mobile Development', 'Graphic Design', 'Networking', 'Computer Repair'];
         var listClass = ['web', 'mobile', 'graphic', 'network', 'repair'];
         for(var i = 0; i < arr.length; i++) {
           var li = document.createElement('li');
              li.textContent = arr[i];
              li.classList.add('ser');
              li.classList.add(listClass[i]);

              ul.appendChild(li);
         }

         var button = document.createElement('button');
           button.setAttribute('type', 'button');
            button.classList.add('btn');
           button.classList.add('start-btn');
           button.textContent = "Get Started";

           div.appendChild(button);

}

//about us section
function aboutUs(mainDiv) {

  createSections(mainDiv, 'about-us');
  createDivs(section, 'about-us-wrapper');

var h2 = document.createElement('h2');
   h2.textContent = "About Us";
   h2.classList.add('section-heading');
   div.appendChild(h2);

  var p = document.createElement('p');
     p.textContent = `  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

        div.appendChild(p);


 var button = document.createElement('button');
     button.setAttribute('type', 'button');
     button.classList.add('btn');
     button.classList.add('more-btn');
     button.textContent = "See More";

     div.appendChild(button);
}

function whyUs(mainDiv) {

  createSections(mainDiv, 'why-us');
  createDivs(section, 'why-us-wrapper');

  var h2 = document.createElement('h2');
     h2.textContent = "Why Us";
     h2.classList.add('section-heading');
     div.appendChild(h2);

      var childWrapper = document.createElement('div');
         div.appendChild(childWrapper);

         var arr = ['<h3 class="trustee reli">We Are Reliable</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
                    '<h3 class="trustee best">We Bring The Best</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
                    '<h3 class="trustee custo">Customer First Services</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
                    '<h3 class="trustee pay">Pay As You Go</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
                    '<h3 class="trustee quality">High Quality</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
                    '<h3 class="trustee secure">Fully Secure</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'];
         for(var i = 0; i < arr.length; i++) {
           var childDiv = document.createElement('div');
              childDiv.classList.add('why-us-div');
              childDiv.innerHTML = arr[i];

              childWrapper.appendChild(childDiv);
         }


}


// function contactUs(mainDiv) {
//
// }

function createSections(sectionWrapper,sectionClass) {

  //the variable below is a global variable
     section = document.createElement('section');
       section.classList.add(sectionClass);
       sectionWrapper.appendChild(section);
}

function createDivs(divWrapper,divClass) {

  //the variable below is a global variable
     div = document.createElement('div');
      div.classList.add(divClass);

      //use the global section variable to add a div element
       divWrapper.appendChild(div);
}


//open the nav bar

function openAndCloseNavBar() {
  var nav = document.querySelector('nav');
  var button = document.querySelector('.nav-open-close-btn');

  button.addEventListener('click', function() {
    nav.classList.toggle('show-nav');
  })
}

function tellUserAboutEmptyLinks(mainDiv) {
     var getLinks = document.querySelectorAll('a').length;
     for(var i = 0; i < getLinks; i++) {
       document.querySelectorAll('a')[i].addEventListener('click', function() {
         alert("Thanks for trying to access our site but links haven\'t been created!! Hope to see you back soon..");
       })
     }
}

function getButton() {
  var button = document.querySelectorAll('.btn');
    button.forEach(function(n) {
      n.addEventListener('click', function(){
        alert('oops.. broken!! the site is still being work on.. Thanks for passing by');
      })
    })
}
