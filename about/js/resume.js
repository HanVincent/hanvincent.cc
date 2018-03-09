(function ($) {
  "use strict";

  function render(section, name, content) {
    $('#' + section).html(`
    <div class="my-auto">
        <h2 class="mb-5"> ${name} </h2> ${content} 
    </div>`);
  }

  (() => {
    const section = "about"
    const { firstName, lastName, state, phone, email, bio, media } = profile[section];
    const mlis = media.reduce((concat, curr) => concat + `
        <li class="list-inline-item">
            <a href="${curr.link}">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa ${curr.icon} fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </li>`, '');
    const content = `
        <div class="my-auto">
            <span class="text-center d-block d-lg-none">
              <img class="img-fluid img-profile rounded-circle w-50 mx-auto mb-3" src="img/profile.jpg" alt="HanVincent picture">
            </span>
            <h1 class="mb-0">${firstName}
                <span class="text-primary">${lastName}</span>
            </h1>
            <div class="subheading mb-5">
                ${state} · ${phone} · 
                <a href="mailto:${email}">${email}</a>
            </div>
            <p class="mb-5">${bio}</p>
            <ul class="list-inline list-social-icons mb-0">${mlis}</ul>
        </div>`
    $("#" + section).html(content);
  })();

  (() => {
    const section = "experience";
    const { name, items } = profile[section];
    const content = items.reduce((concat, item) => {
      const lis = item.description.reduce((lis, curr) => lis + `<li>${curr}</li>`, '');
      return concat + `
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <h3 class="mb-0">${item.name}</h3>
                    <div class="subheading mb-3">${item.company}</div>
                    <ul>${lis}</ul>
                </div>
                <div class="resume-date text-md-right">
                    <div class="">${item.location}</div>
                    <span class="text-primary">${item.time}</span>
                </div>
            </div>`}, '')
    render(section, name, content);
  })();

  (() => {
    const section = "education";
    const { name, items } = profile[section];
    const content = items.reduce((concat, item) => {
      const lis = item.description.reduce((lis, curr) => lis + `<li>${curr}</li>`, '');
      return concat + `
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <h3 class="mb-0">${item.name}</h3>
                    <div class="subheading mb-3">${item.subheading}</div>
                    <ul>${lis}</ul>
                </div>
                <div class="resume-date text-md-right">
                    <div class="">${item.location}</div>
                    <span class="text-primary">${item.time}</span>
                </div>
            </div>`}, '')
    render(section, name, content);
  })();

  (() => {
    const section = "projects";
    const { name, items } = profile[section];
    const content = items.reduce((concat, item) => {
      const lis = item.description.reduce((lis, curr) => lis + `<li>${curr}</li>`, '')
      return concat + `
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <h3 class="mb-0">${item.title}
                        <a target="_blank" href="${item.link}">[link]</a>
                    </h3>
                    <div class="subheading mb-3">${item.subtitle}</div>
                    <ul>${lis}</ul>
                </div>
                <div class="resume-date text-md-right">
                    <div class="">${item.host}</div>
                    <span class="text-primary">${item.time}</span>
                </div>
            </div>`}, '');
    render(section, name, content);
  })();

  (() => {
    const section = "skills";
    const { name, programming, language } = profile[section];
    const plis = programming.items.reduce((lis, item) => lis +
      `<li class="list-inline-item">
            <i class="devicon-${item}-plain"></i>
        </li>`, '');
    const llis = language.items.reduce((lis, item) => lis +
      `<li>
            <i class="fa-li fa ${language.icon}"></i>${item}
        </li>`, '');
    const content = `
        <div class="subheading mb-3">${programming.name}</div>
        <ul class="list-inline list-icons">${plis}</ul>
        <div class="subheading mb-3">${language.name}</div>
        <ul class="fa-ul mb-0">${llis}</ul>`

    render(section, name, content);
  })();

  (() => {
    const section = "interests";
    const { name, paragraphs } = profile[section];
    const content = paragraphs;
    render(section, name, content);
  })();

  (() => {
    const section = "awards";
    const { name, icon, items } = profile[section];
    const lis = items.reduce((concat, item) => concat + `
        <li>
            <i class="fa-li fa ${icon} text-warning"></i>
            ${item.time} - ${item.award} - ${item.host}
        </li>`, '')
    const content = `<ul class="fa-ul mb-0">${lis}</ul>`;
    render(section, name, content);
  })();

  (() => {
    const section = "extracurricular";
    const { name, items } = profile[section];
    const content = items.reduce((concat, item) => {
      const lis = item.description.reduce((lis, curr) => lis + `<li>${curr}</li>`, '');
      return concat + `
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <h3 class="mb-0">${item.position}</h3>
                    <div class="subheading mb-3">${item.organization}</div>
                    <ul>${lis}</ul>
                </div>
                <div class="resume-date text-md-right">
                    <div class="">${item.location}</div>
                    <span class="text-primary">${item.time}</span>
                </div>
            </div>`}, '');
    render(section, name, content);
  })();

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

})(jQuery); 