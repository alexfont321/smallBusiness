"use strict";

function domRepresentation (entry) {
    return `<article class="employee">
                <header class="employee__name">
                    <h1>${entry.name}</h1>
                </header>
                <section class="employee__department">
                    <p>${entry.name} is in ${entry.department.department}</p>
                </section>
                <section class="employee__computer">
                    <p>${entry.name} uses a ${entry.computer.computer}</p>
                </section>
            </article>`
}

module.exports = domRepresentation;
