
var yPosition;


function toggleMainSection(sectionName) {
    var sections = document.getElementsByClassName('submenu');
    for(let x = 0; x < sections.length; x++){
        var currentSection = sections[x];
        if (currentSection.classList.contains('submenu') && currentSection.classList.contains(sectionName)) {
            currentSection.style.display = 'flex';
        }
        else if (!currentSection.classList.contains(sectionName)) {
            currentSection.style.display = 'none';
        }
    }
  };

function openModal(projectModalName){
    var modal = document.getElementById("myModal");
    
    modal.style.display = "flex";

    var modalContent = document.getElementById("modal-content");

    var modalHeader = document.getElementById("modal-header");

    var modalBody = document.getElementById("modal-body");
    
    var modalFooter = document.getElementById("modal-footer");


    h3content = document.createElement('h3');
    modalContent.appendChild(modalFooter);

    var h2Holder = document.createElement('div');
    h2Holder.id = 'modalH2Holder';
    modalHeader.appendChild(h2Holder);
    
    var h2content = document.createElement('h2');
    h2Holder.appendChild(h2content);
    
    var h3content = document.createElement('h3');
    h2Holder.appendChild(h3content);

    var mbH3content = document.createElement('h3');
    modalBody.appendChild(mbH3content);


    var mfH3contentE = document.createElement('div');
    mfH3contentE.className = 'mfH3content';
    modalFooter.appendChild(mfH3contentE);

    var mfH3contentD = document.createElement('div');
    mfH3contentD.className = 'mfH3content';
    modalFooter.appendChild(mfH3contentD);

    var mfH3contentC = document.createElement('div');
    mfH3contentC.className = 'mfH3content';
    modalFooter.appendChild(mfH3contentC);
    

    var pictureTSDiv = document.createElement('div');
    pictureTSDiv.classList.add('picture-ts');
    mbH3content.appendChild(pictureTSDiv);

    var deployedLink = document.createElement('a');
    deployedLink.setAttribute("target", "_blank");
    deployedLink.setAttribute("rel", "noopener noreferrer");
    var deployed = document.createElement('img');

    var codeGitHubLink = document.createElement('a');
    codeGitHubLink.setAttribute("target", "_blank");
    codeGitHubLink.setAttribute("rel", "noopener noreferrer");
    var codeGitHub = document.createElement('img');

    var codeClimateLink = document.createElement('a');
    codeClimateLink.setAttribute("target", "_blank");
    codeClimateLink.setAttribute("rel", "noopener noreferrer");
    var codeClimate = document.createElement('img');

    var pictureDiv = document.createElement('div');
    pictureDiv.classList.add('main-body');
    pictureDiv.classList.add('picturets-picture');
    var picture = document.createElement('img');

    var techStackDiv = document.createElement('div');
    techStackDiv.classList.add('main-body');
    pictureDiv.classList.add('picturets');
    techStackDiv.classList.add('picturets-techstack');
    var techStack = document.createElement('h2');
    techStack.textContent = 'Tech Stack';
    var techStackText = document.createElement('div');
    var techStackList = document.createElement('ul');
    var techStackListItem;


    var featuresDiv = document.createElement('div');
    featuresDiv.classList.add('main-body');
    var features = document.createElement('h2');
    features.textContent = 'Features';
    var featuresText = document.createElement('div');
    var featuresList = document.createElement('ul');
    var featuresListItem;

    // company production software

    // AQC, portfolio, swaap, blogbackend, nodeBE, cgol, nasaSearch, vbDatabase, javabe, ucCustomer, speechRecog, aQuack, webappFE
    if(projectModalName == 'AQC'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }

        h2content.textContent = 'Company App:  Marketing Website';
        h3content.textContent = "My court transcription company's new website using what I've learned at Lambda";

        deployedLink.href = 'https://www.aquoco.co/';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/newAQCwebsite';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/newAQCWebsite/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/043ebab30e06dbf85ed7/maintainability';

        picture.src = 'img/projects/projectpicture-AQC.png';
        picture.style.transform = 'scale(0.9)';
        picture.style.marginBottom = '-6%';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'HTML';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'CSS';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'JavaScript';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'LESS';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'PHP';
        techStackList.appendChild(techStackListItem);

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live solo project ranking 90th percentile in Google PageSpeed Insights & first-page results for 'seattle transcription' in Google";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Ranks 100 for accessibility, best practices, & SEO, 90 in performance in Lighthouse';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Fourth iteration, utilizing what I've learned at Lambda";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Animation';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Mixins';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Image carousel';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Pure CSS gradients';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Inside out underline to nav link hover';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'FAQ with expandable questions';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Desktop, tablet, & mobile versions';
        featuresList.appendChild(featuresListItem);     
    }
    
    else if(projectModalName == 'portfolio'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }

        h2content.textContent = 'Portfolio';
        h3content.textContent = "Work of art featuring an Olympic National Park theme and lots of pure CSS animation";

        deployedLink.href = 'https://www.aquoco.co/erica-ingram/artsy/index.html';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';
        codeGitHub.setAttribute("target", "_blank");
        codeGitHub.setAttribute("rel", "noopener noreferrer");

        codeGitHubLink.href = 'https://github.com/evoingram/portfolio';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/portfolio/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/59600252b236458e449a/maintainability';

        picture.src = 'img/projects/projectpicture-portfolio.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'HTML';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'CSS';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'JavaScript';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'GitHub Contributions Calendar';
        techStackList.appendChild(techStackListItem);
        

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live solo project; works in all Chromium-based browsers";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Olympic National Park theme';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Pure heavy CSS animation scene (salmon, water, crab) w/ hand-drawn animals";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Click the sun to toggle twinkling stars at night';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Clouds in desktop version show park trivia';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Each project on projects page has a hover overlay';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Three pop-ups/modals originated from a sign on the beach';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Inside out underline animation';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "GitHub contribution calendar";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Desktop & mobile versions';
        featuresList.appendChild(featuresListItem);     
    }
    
    else if(projectModalName == 'swaap'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }

        h2content.textContent = 'Swaap';
        h3content.textContent = "A contact trading app, a way for people to gather, collect and stay in contact with people that you meet, built remotely with continuous delivery by a seven-member crossfunctional team";

        deployedLink.href = 'https://www.swaap.co/';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/conference-contacts-fe';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/conference-contacts-fe/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/68404cfcc6a6827234d1/maintainability';

        picture.src = 'img/projects/projectpicture-swaap.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'React';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Auth0';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Reach Router';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Apollo';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Tailwind CSS';
        techStackList.appendChild(techStackListItem);

        
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live team project";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Give users ability to connect with each other through the app';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Get and store contacts in a fast and simple way";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Ability to message contacts';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Find out where you met contacts';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Desktop & mobile versions';
        featuresList.appendChild(featuresListItem);     
    }
    
    else if(projectModalName == 'blogbackend'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Blog Back End';
        h3content.textContent = "API for a hypothetical blog contributed to by many authors with extensive query parameters and tagging functionality";

        deployedLink.href = 'https://blogbackend-eli.herokuapp.com/api';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/blogbackend';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/blogbackend/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/1c7b5b2d9c8b7f4dbfa4/maintainability';

        picture.src = 'img/projects/projectpicture-blogbackend2.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Node.js';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Express';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Knex';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'bcrypt';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Postman';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'PostgreSQL';
        techStackList.appendChild(techStackListItem);

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live solo project";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'RESTful API with auth services for blog back end';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "37 endpoints";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Extensive query parameters';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Top 100 most liked & read posts';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Post tagging functionality';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Cache functionality';
        featuresList.appendChild(featuresListItem);
    }
    
    else if(projectModalName == 'nodeBE'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Company App:  Node Back End';
        h3content.textContent = "Node back end for the online port of my company's VB database, used for transcript production and workflow management";

        deployedLink.href = 'https://transcript-webapp.herokuapp.com/api';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/webapp-backend';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/webapp-backend/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/c1474fe518ccb398d184/maintainability';

        picture.src = 'img/projects/projectpicture-nodeBE2-thumb.png';
        picture.style.transform = 'scale(0.7)';
        picture.style.marginTop = '-6%';
        picture.style.marginBottom = '-6%';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Node.js';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Express';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Knex';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'bcrypt';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Postman';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'PostgreSQL';
        techStackList.appendChild(techStackListItem);

        
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live solo project";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'RESTful API with auth services for transcript production system';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "126 endpoints";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'CourtListener, Xero, PayPal, Wunderlist, & Office API support';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Tested and documented via Postman';
        featuresList.appendChild(featuresListItem);  
    }

    else if(projectModalName == 'cgol'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }

        h2content.textContent = "Conway's Game of Life";
        h3content.textContent = "Conway's Game of Life developed for Computer Science, Unit 1 Build Week, capstone project of unit 1";

        deployedLink.href = 'https://cs-bw.now.sh/';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/cs-bw';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/cs-bw/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/7f43b7af335091b3e81b/maintainability';

        picture.src = 'img/projects/projectpicture-cgol.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'React';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Node-Canvas';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Styled Components';
        techStackList.appendChild(techStackListItem);


        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Colors: #2958AA (blue), #4E8A63 (green), #642B73 (purple), #C6426E (pink)";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Follows Conway's rules";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Article about Conway's Game of Life";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Four-day-long blog post detailing tasks completed each day.';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Ability to select random, user-created, or preset patterns';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Ability to choose speed & grid size';
    }

    else if(projectModalName == 'nasaSearch'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }
        h2content.textContent = 'NASA Images Library Clone';
        h3content.textContent = "A clone of images.NASA.gov, NASA's media library, improved over the original";

        deployedLink.href = 'https://nasasearchclone.now.sh/';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/nasaSearch';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/nasaSearch/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/b21fbbb38f5918d60ada/maintainability';

        picture.src = 'img/projects/projectpicture-nasaSearch.png';
        picture.style.transform = 'scale(0.9)';
        picture.style.marginBottom = '-6%';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'React';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Redux';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Styled Components';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Video React';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Cypress';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Axios';
        techStackList.appendChild(techStackListItem);
        

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Search NASA's media library by media type";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "View 100 most popular or most recently uploaded media files";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Filter search results by media type & year taken';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'List and thumbnail views of search results';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'File-specific info on single-file details page such as file size, format, captions file name, links to different sizes of media file, NASA ID, center, date created, link to center website, description';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Share single media file on social media';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'See readme for comparison of original to clone';
        featuresList.appendChild(featuresListItem); 
    }
    
    else if(projectModalName == 'vbDatabase'){
        modalFooter.classList.add('unfit-footer');
        h2content.textContent = 'Company App:  Production Software';
        h3content.textContent = "My court transcription company's VB database, used for transcript production and workflow management";

        deployedLink.href = '#';
        deployed.src = 'https://img.shields.io/badge/Deployed%20OFFLINE-informational?style=flat&logoColor=white&color=7a28cc';
        deployed.style.display = 'none';
        codeGitHubLink.href = 'https://github.com/evoingram/vbDatabase';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/vbDatabase/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/06260d9e8729d5d17f2a/maintainability';

        picture.src = 'img/projects/projectpicture-vbDatabase.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Visual Basic';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'MySQL';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'MS Access';
        techStackList.appendChild(techStackListItem);
        
        
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Integrates GTD principles into workflow";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Generates & formats 25 to 30 different documents automatically via MS Office';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Manages schedule and production workflow";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Auto-imports electronic communication';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Automatically hyperlinks authority within transcripts via CourtListener API';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Manipulates PDFs to auto-generate bookmarks and create different transcript versions';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Tracks communication and document history of each transcript order';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Manages and plays audio and reporter notes';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Integrated with Office, Acrobat, and WinSCP libraries and several APIs such as CourtListener, PayPal, OneNote, and others';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Speech recognition integrated via batch files & PocketSphinx';
        featuresList.appendChild(featuresListItem);     
    }

    else if(projectModalName == 'javabe'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Company App:  Java Back End';
        h3content.textContent = "Java back end for the online port of my company's VB database, used for transcript production and workflow management";

        deployedLink.href = 'https://webapp-javabe.herokuapp.com/';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/webapp-javabe';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/webapp-javabe/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/c6f9b278e28a7b7d126c/maintainability';

        picture.src = 'img/projects/projectpicture-javabe.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Java & Java Spring';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'SQL & PostgreSQL';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'JUnit';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'SLF4J';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'OAuth2';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Swagger';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Maven';
        techStackList.appendChild(techStackListItem);


        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live in-progress solo project";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'RESTful API with auth services for transcript production system';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "138 endpoints (400+ when complete)";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'CourtListener, Xero, PayPal, Wunderlist, & Office API support';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Tested via Postman & JUnit';
        featuresList.appendChild(featuresListItem);  
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Documented via Postman & Swagger';
        featuresList.appendChild(featuresListItem);  
    }

    else if(projectModalName == 'ucCustomer'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Company App:  Use Case Diagrams';
        h3content.textContent = "Customer & manager Use Case Diagrams for my court transcription company's upcoming software";

        deployedLink.href = 'https://github.com/evoingram/webapp-backend/blob/master/docs/use%20case.jpg';
        deployed.src = 'https://img.shields.io/badge/Customer%20Use%20Case-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/webapp-backend/blob/master/docs/manager%20UCD.jpg';
        codeGitHub.src = 'https://img.shields.io/badge/Manager%20Use%20Case-informational?style=flat&logoColor=white&color=7a28cc';

        picture.src = 'img/projects/projectpicture-ucCustomer.jpg';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Object Oriented Analysis & Design';
        techStackList.appendChild(techStackListItem);

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Customer & Manager Use Case Diagrams for Transcript Production Software";
        featuresList.appendChild(featuresListItem);   
    }

    else if(projectModalName == 'speechRecog'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Company App:  Speech Recognition';
        h3content.textContent = "Speech recognition component of my company's VB database";

        deployedLink.href = 'https://github.com/evoingram/vbDatabase/tree/master/speech';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/vbDatabase/tree/master/speech';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        picture.src = 'img/projects/projectpicture-speechRecog.png';
        picture.style.transform = 'scale(0.7)';
        picture.style.marginTop = '-6%';
        picture.style.marginBottom = '-8%';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Visual Basic';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Batch Files';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'PocketSphinx';
        techStackList.appendChild(techStackListItem);

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Records & formats audio for training engine";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Automatically formats & reads transcripts for training engine';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Teaches itself from provided audio";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Listens to & transcribes audio';
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'Outputs transcript';
        featuresList.appendChild(featuresListItem);
    }
    
    else if(projectModalName == 'aQuack'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Company App:  Chat Bot';
        h3content.textContent = "Chat bot for my court transcription company";

        deployedLink.href = 'https://www.aquoco.co/testBot.html';
        deployed.src = 'https://img.shields.io/badge/Deployed%20Project-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/cortanaBot';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/cortanaBot/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/64a21b3917698f04666e/maintainability';

        picture.src = 'img/projects/projectpicture-aQuack.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Node';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Yo';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'BotBuilder';
        techStackList.appendChild(techStackListItem);

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Live solo project";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = 'repeats user-entered information back to you';
        featuresList.appendChild(featuresListItem); 
    }
    else if(projectModalName == 'webappFE'){
        if(modalFooter.classList.contains('unfit-footer')){
            modalFooter.classList.remove('unfit-footer');
        }


        h2content.textContent = 'Company App:  Front End';
        h3content.textContent = "Front end for the online port of my company's VB database, used for transcript production and workflow management";

        deployedLink.href = '#';
        deployed.src = 'https://img.shields.io/badge/NOT%20Deployed-informational?style=flat&logoColor=white&color=7a28cc';

        codeGitHubLink.href = 'https://github.com/evoingram/webapp-frontend';
        codeGitHub.src = 'https://img.shields.io/badge/%20-Code%20On%20GitHub-informational?style=flat&logo=GitHub&logoColor=white&color=7a28cc';

        codeClimateLink.href = 'https://codeclimate.com/github/evoingram/webapp-frontend/maintainability';
        codeClimate.src = 'https://api.codeclimate.com/v1/badges/9e220220e7d71d3e13a8/maintainability';

        picture.src = 'img/projects/projectpicture-webappFE.png';

        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'React';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Redux';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Styled Components';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'TypeScript';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Cypress';
        techStackList.appendChild(techStackListItem);
        techStackListItem = document.createElement('li');
        techStackListItem.textContent = 'Axios';
        techStackList.appendChild(techStackListItem);

        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "In-progress solo project";
        featuresList.appendChild(featuresListItem);
        featuresListItem = document.createElement('li');
        featuresListItem.textContent = "Front end for the online port of my company's VB database, used for transcript production and workflow management";
        featuresList.appendChild(featuresListItem); 
    }
    pictureTSDiv.appendChild(pictureDiv);
    pictureTSDiv.appendChild(techStackDiv);
    mbH3content.appendChild(featuresDiv);

    pictureDiv.appendChild(picture);

    techStackDiv.appendChild(techStack);
    techStackDiv.appendChild(techStackText);
    techStackText.appendChild(techStackList);

    featuresDiv.appendChild(features);
    featuresDiv.appendChild(featuresText);
    featuresText.appendChild(featuresList);

    mfH3contentD.appendChild(deployedLink);
    deployedLink.appendChild(deployed);

    mfH3contentC.appendChild(codeGitHubLink);
    codeGitHubLink.appendChild(codeGitHub);

    mfH3contentE.appendChild(codeClimateLink);
    codeClimateLink.appendChild(codeClimate);

    if(projectModalName == 'speechRecog'){

    }
}

function closeModal(){
    var modal = document.getElementById("myModal");

    var modalHeader = document.getElementById("modal-header");
    modalHeader.innerHTML = "";

    var modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = "";
    
    var modalFooter = document.getElementById("modal-footer");
    modalFooter.innerHTML = "";

    modal.style.display = "none";
}


document.addEventListener("click", (event) => { 
    var modal = document.getElementById("myModal");
    var rect = event.target.getBoundingClientRect();
    if(window.screen.width <= 850){
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        yPosition = rect.top + scrollTop; 
        if(modal.style.display !== 'none'){
            modal.style.position = 'absolute';
            modal.style.top = yPosition + 'px';
        }
    }
    else{
        modal.style.position = '';
        modal.style.top = '0px';

    }
}, false);