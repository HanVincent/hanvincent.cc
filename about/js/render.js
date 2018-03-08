(($) => {
    "use strict"; // Start of use strict

    function get_skills() {
        const { name, programming, language } = profile.skills;
        const content =
            `<div class="my-auto">
                <h2 class="mb-5"> ${name} </h2>
                <div class="subheading mb-3">${programming.name}</div>
                    <ul class="list-inline list-icons">` +
            programming.items.reduce((lis, item) => lis +
                `<li class="list-inline-item">
                            <i class="devicon-${item}-plain"></i>
                </li>`, '') +
            `</ul>
            <div class="subheading mb-3">${language.name}</div>
                <ul class="fa-ul mb-0">` +
            language.items.reduce((lis, item) => lis +
                `<li>
                    <i class="fa-li fa ${language.icon}"></i>
                    ${item}
                </li>`, '') +
            `</ul></div>`

        $("#skills").html(content);
    }

    function get_interests() {
        const { name, paragraphs } = profile.interests;
        const content = `<div class="my-auto"><h2 class="mb-5">${name}</h2>${paragraphs}</div>`;
        $("#interests").html(content);
    }

    function get_awards() {
        const { name, icon, items } = profile.awards
        const content =
            `<div class="my-auto" >
                <h2 class="mb-5"> ${name} </h2>
                <ul class="fa-ul mb-0">` +
            items.reduce((concat, item) => concat + `<li>
                    <i class="fa-li fa ${icon} text-warning"></i>
                    ${item.time} - ${item.award} - ${item.host}</li>`, '') +
            `</ul></div>`;
        $("#awards").html(content);
    }


    get_awards();
    get_interests();
    get_skills();
})(jQuery); // End of use strict
