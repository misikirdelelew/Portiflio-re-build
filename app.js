// The hamberger menu begins//
const mobileNav = document.querySelector('.menuNav');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
    navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());
// The Hambergere menu Ends//

// Array object//
const projects = [
    {
        name: 'Tonic',
        title: 'Tonic',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        'featured image': './images/tonic-page-1.png',
        'featured image desk': './images/snaposhot-1-desktop-p.png',
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
        'featured image': './images/Multi-post-stories.png',
        'featured image desk': './images/multi-post-portfolio-desktop-1.svg',
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
        'featured image': './images/Tonic-page3.png',
        'featured image desk': './images/facebook-360-desktop.svg',
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
        'featured image': './images/multi-post-stories-2.png',
        'featured image desk': './images/uber-nav-desktop.svg',
        technologies: ['html', 'css', 'javascript'],
        'link to live version':
            '',
        'link to source':
            '',
        id: 3,
    },
];
projects.forEach((element, i) => {
    const work = document.querySelector('.work');
    const cardDisplay = document.createElement('div');
    cardDisplay.classList = 'work-section';
    if (i === 1) {
        cardDisplay.setAttribute('id', 'reverse');
    } else if (i === 3) {
        cardDisplay.setAttribute('id', 'reverse');
    }

    const myPopup = `
    <img src="${projects[i]['featured image']}" alt="Snapshot Portfolio" class="portfolio-img-1-mobile">
  <img src="${projects[i]['featured image desk']}" alt="Snapshot Portfolio"
      class="portfolio-img-1-desktop">
  <div class="work-section-texts">
      <h2 class="project-title-heading text-mobile">${projects[i].name}</h2>
      <h2 class="project-title-heading text-desktop">${projects[i].title}</h2>
  
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
          <li><a href="#"><img src="./images/ruby-n-rails-tag.png" alt="RubyLogo" class="portfolio-img-1-desktop"></a></li>
          <li><a href="#"><img src="./images/csslogo.png" alt="csslogo"></a></li>
          <li><a href="#"><img src="./images/jslogo.png" alt="jslogo"></a></li>
      </ul>
      <div class="btnSeeproject">
          <button class="button-see-project" type="button" id="${projects[i].id}">
              See project
          </button>
      </div>
  </div>
  
  `;
    cardDisplay.innerHTML += myPopup;
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
    const projecthead = document.createElement('h2');
    projecthead.classList.add('project-head');
    const projectimg = document.createElement('img');
    projectimg.classList.add('imgP');
    const positiondiv = document.createElement('div');
    positiondiv.classList.add('positionP');
    const projectdescrip = document.createElement('p');
    projectdescrip.classList.add('proDescription');
    const langbtndiv = document.createElement('div');
    langbtndiv.classList.add('proLang');
    const projecttech = document.createElement('ul');
    projecttech.classList.add('langContainer-pp');
    const projectbtncontainer = document.createElement('div');
    const btnseelive = document.createElement('a');
    const btnseesource = document.createElement('a');
    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton-class');
    closeButton.id = 'close-button';

    // append elements inside the div
    popup.append(
        header,
        projecthead,
        closeButton,
        projectimg,
        positiondiv,
        projectdescrip,
        langbtndiv,
        projecttech,
        projectbtncontainer,
    );
    header.append(projecthead, closeButton);
    positiondiv.append(projectdescrip, langbtndiv, projecttech, projectbtncontainer);
    langbtndiv.append(projecttech, projectbtncontainer);
    projectbtncontainer.append(btnseelive, btnseesource);

    // add content to the elements of div
    const projectId = parseInt(event.target.id, 10);
    projecthead.textContent = projects[projectId].name;
    projectimg.src = projects[projectId]['featured image'];
    projectdescrip.textContent = projects[projectId].description;

    for (let i = 0; i < projects[projectId].technologies.length; i += 1) {
        const projectLi = document.createElement('li');
        projectLi.className = 'languages-pp';
        projectLi.textContent = projects[projectId].technologies[i];
        projecttech.appendChild(projectLi);
    }

    projectbtncontainer.classList.add('btn-container-class-pp');
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
const buttonsee = document.querySelectorAll('.button-see-project');
buttonsee.forEach((btn) => {
    btn.addEventListener('click', creatDiv);
});