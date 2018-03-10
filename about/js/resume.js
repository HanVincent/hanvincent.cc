(function ($) {
    "use strict";

    function append(section, name, content) {
        $('#' + section).html(`
            <div class="my-auto">
                <h2 class="mb-5"> ${name} </h2> ${content} 
            </div>`);
    }

    const getAbout = () => {
        const section = "about"
        const { firstName, lastName, state, phone, email, bio, media, programming, language } = profile[section];
        const name = isZH ? `<span class="text-primary">${lastName}</span>${firstName}` : `${firstName}<span class="text-primary">${lastName}</span>`
        const mlis = media.reduce((concat, curr) => concat + `
            <li class="list-inline-item">
                <a target="_blank" href="${curr.link}">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa ${curr.icon} fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </li>`, '');
        const plis = programming.reduce((lis, item) => lis +
            `<li class="list-inline-item">
                <i class="devicon-${item}-plain"></i>
            </li>`, '');
        const llis = language.reduce((lis, item) => lis +
            `<li>
                <i class="fa-li fa fa-check"></i>${item}
            </li>`, '');
        const content = `
            <div class="my-auto">
                <span class="text-center d-block d-lg-none">
                <img class="img-fluid img-profile rounded-circle w-50 mx-auto mb-3" src="img/profile.jpg" alt="HanVincent picture">
                </span>
                <h1 class="mb-5">${name}</h1>
                <div class="subheading mb-3">
                    <ul class="fa-ul">
                        <li><i class="fa-li fa fa-user"></i>${state}</li>
                        <li><i class="fa-li fa fa-phone"></i>${phone}</li>
                        <li><i class="fa-li fa fa-envelope"></i><a href="mailto:${email}">${email}</a></li>
                    </ul>
                </div>
                <ul class="list-inline list-social-icons mb-5">${mlis}</ul>
                <p class="mb-5">${bio}</p>
                <ul class="fa-ul mb-3">${llis}</ul>
                <ul class="list-inline list-icons">${plis}</ul>
            </div>`
        $("#" + section).html(content);
    }

    const getExperience = () => {
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
        append(section, name, content);
    }

    const getEducation = () => {
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
        append(section, name, content);
    }

    const getProjects = () => {
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
        append(section, name, content);
    }

    const getInterests = () => {
        const section = "interests";
        const { name, paragraphs } = profile[section];
        const content = paragraphs;
        append(section, name, content);
    }

    const getAwards = () => {
        const section = "awards";
        const { name, icon, items } = profile[section];
        const lis = items.reduce((concat, item) => concat + `
        <li>
            <i class="fa-li fa ${icon} text-warning"></i>
            ${item.time} - ${item.award} - ${item.host}
        </li>`, '')
        const content = `<ul class="fa-ul mb-0">${lis}</ul>`;
        append(section, name, content);
    }

    const getExtracurricular = () => {
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
        append(section, name, content);
    }

    function render() {
        getAbout();
        getExperience();
        getEducation();
        getProjects();
        getInterests();
        getAwards();
        getExtracurricular();
    }

    const version = [eng_profile, cht_profile];
    let isZH = ((navigator.language || navigator.userLanguage) === 'zh-TW') ? 1 : 0; // 0 for English, 1 for Chinese
    let profile = version[isZH];
    render();

    $('.lang-btn').click(() => {
        isZH = 1 - isZH;
        profile = version[isZH];
        render();
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(() => {
        $('.navbar-collapse').collapse('hide');
    });

})(jQuery); 