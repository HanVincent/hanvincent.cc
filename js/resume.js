(function ($) {
    "use strict";

    (function appendNotes() {
        // Local test will cause CORS
        $.getJSON("assets/hackmd.json", function (items) {
            const content = items.reduce((concat, item) => {
                const tags = item.tags.reduce((prev, curr) => prev + `<span class="badge badge-secondary m-1">${curr}</span>`, '');
                return concat + `
                <div class="resume-item d-flex flex-column flex-md-row mb-3">
                    <div class="resume-content mr-auto">
                        <p class="subheading mb-0">
                            <a href="https://hackmd.io/${item.id}">${item.text}</a>
                        </p>
                        ${tags}
                    </div>
                </div>`}, '');
            $('#notes-content').html(content);
        });
    })();

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(() => {
        $('.navbar-collapse').collapse('hide');
    });

})(jQuery); 