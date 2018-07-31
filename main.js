let projectPage = document.getElementById('project-page');
let projectSwitch = document.getElementById('project-switch');
let aboutSwitch = document.getElementById('about-switch');
let aboutPage = document.getElementById('about-page');
let onProjectPage = true;

aboutSwitch.addEventListener('click', function() {
  if (onProjectPage) {
    projectPage.classList.toggle('hide');
    aboutPage.classList.toggle('hide');
    onProjectPage = false;
  }
});

projectSwitch.addEventListener('click', function() {
  if (!onProjectPage) {
    projectPage.classList.toggle('hide');
    aboutPage.classList.toggle('hide');
    onProjectPage = true;
  }
});
