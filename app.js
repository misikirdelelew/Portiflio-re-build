// The hamberger menu begins//
const mobileNav = document.querySelector('.menuNav');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
    navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());
// The Hambergere menu Ends//
// The Dynamic Part starts here//
const projects = [
    {
        name: 'Tonic',
        title: 'Tonic',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        'image mobile': './images/tonic-page-1.png',
        'image desktop': './images/snaposhot-1-desktop-p.png',
        technologies: ['html', 'css', 'javascript'],
        'link to live version':
            '',
        'link to source':
            '',
        id: 0,
    },
    {
        name: 'Multi-Post Stories',
        title: 'Multi-Post Stories',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        'image mobile': './images/Multi-post-stories.png',
        'image desktop': './images/multi-post-portfolio-desktop-1.svg',
        technologies: ['html', 'css', 'javascript'],
        'link to live version':
            '',
        'link to source':
            '',
        id: 1,
    },
    {
        name: 'Tonic',
        title: 'Facebook 360',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        'image mobile': './images/Tonic-page3.png',
        'image desktop': './images/facebook-360-desktop.svg',
        technologies: ['html', 'css', 'javascript'],
        'link to live version':
            '',
        'link to source':
            '',
        id: 2,
    },
    {
        name: 'Multi-Post Stories',
        title: 'Uber Navigation',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        'image mobile': './images/multi-post-stories-2.png',
        'image desktop': './images/uber-nav-desktop.svg',
        technologies: ['html', 'css', 'javascript'],
        'link to live version':
            '',
        'link to source':
            '',
        id: 3,
    },
];
projects.forEach((element, k) => {
    const work = document.querySelector('.work');
    const cardDisplay = document.createElement('div');
    cardDisplay.classList = 'work-section';
    // this will reverse the flex items//
    if (k === 1) {
        cardDisplay.setAttribute('id', 'reverse');
    } else if (k === 3) {
        cardDisplay.setAttribute('id', 'reverse');
    }

    const myPopup = `
    <img src="${projects[k]['image mobile']}" alt="img mobile" class="img-mobile">
  <img src="${projects[k]['image desktop']}" alt="image desktop"
      class="image-desktop">
  <div class="work-header">
      <h2 class="project-title-heading text-mobile">${projects[k].name}</h2>
      <h2 class="project-title-heading text-desktop">${projects[k].title}</h2>
  
      <div class="cardItems">
          <h2 class="headingPart text-mobile">CANOPY</h2>
          <h2 class="headingPart text-desktop">CANOPY</h2>
          <img src="./images/Counter.png" alt="circle">
          <h2 class="role text-mobile">Back End Dev</h2>
          <h2 class="role text-desktop">Back End Dev</h2>
          <img src="./images/Counter.png" alt="circle">
          <h2 class="startYear text-mobile">2015</h2>
          <h2 class="startYear text-desktop">2015</h2>
      </div>
  
      <p class="pinformation text-mobile">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <p class="pinformation text-desktop">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
  
      <ul class="langTages">
          <li><a href="#"><img src="./images/Htmllogo.png" alt="Htmllogo"></a></li>
          <li><a href="#"><img src="./images/ruby-n-rails-tag.png" alt="RubyLogo" class="image-desktop"></a></li>
          <li><a href="#"><img src="./images/csslogo.png" alt="csslogo"></a></li>
          <li><a href="#"><img src="./images/jslogo.png" alt="jslogo"></a></li>
      </ul>
      <div class="btnSeepro">
          <button class="btnSee-project" type="button" id="${projects[k].id}">
              See project
          </button>
      </div>
  </div>
  
  `;
    cardDisplay.innerHTML += myPopup
    work.appendChild(cardDisplay);
});
// function is to create div and append it to body and add class to it
function creatDiv(event) {
    const popup = document.createElement('div');
    document.body.append(popup);
    popup.classList.add('popupDisplay');

    // add elements
    const header = document.createElement('div');
    header.classList.add('headerDisplay');
    const heading = document.createElement('h2');
    heading.classList.add('project-head');
    const proimage = document.createElement('img');
    proimage.classList.add('imgP');
    const positionpart = document.createElement('div');
    positionpart.classList.add('positionP');
    const prodescription = document.createElement('p');
    prodescription.classList.add('proDescription');
    const languagepart = document.createElement('div');
    languagepart.classList.add('lang-btn-div');
    const programmingtype = document.createElement('ul');
    programmingtype.classList.add('langContainer-pp');
    const projectbtncontainer = document.createElement('div');
    const btnseelive = document.createElement('a');
    const btnseesource = document.createElement('a');
    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton-class');
    closeButton.id = 'close-button';

    // append elements inside the div
    popup.append(
        header,
        heading,
        closeButton,
        proimage,
        positionpart,
        prodescription,
        languagepart,
        programmingtype,
        projectbtncontainer,
    );
    header.append(heading, closeButton);
    positionpart.append(prodescription, languagepart, programmingtype, projectbtncontainer);
    languagepart.append(programmingtype, projectbtncontainer);
    projectbtncontainer.append(btnseelive, btnseesource);

    // add content to the elements of div
    const projectId = parseInt(event.target.id, 10);
    heading.textContent = projects[projectId].name;
    proimage.src = projects[projectId]['image mobile'];
    prodescription.textContent = projects[projectId].description;

    for (let i = 0; i < projects[projectId].technologies.length; i += 1) {
        const projectLi = document.createElement('li');
        projectLi.className = 'languages-pp';
        projectLi.textContent = projects[projectId].technologies[i];
        programmingtype.appendChild(projectLi);
    }

    projectbtncontainer.classList.add('btn-cont');
    btnseelive.href = projects[projectId]['link to live version'];
    btnseelive.classList.add('btn-seelive-pp');
    btnseelive.target = '_blank';
    btnseelive.textContent = 'See Live';
    btnseesource.href = projects[projectId]['link to source'];
    btnseesource.classList.add('btn-seesource-pp');
    btnseesource.target = '_blank';
    btnseesource.textContent = 'See Source';


    function closeButtonFunction() {
        popup.remove();
    }
    const clickCloseButton = document.getElementById('close-button');
    clickCloseButton.addEventListener('click', closeButtonFunction);
}

// button  eventListener//
const buttonsee = document.querySelectorAll('.btnSee-project');
buttonsee.forEach((btn) => {
    btn.addEventListener('click', creatDiv);
});