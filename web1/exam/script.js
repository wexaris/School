/*
 * Rainers Vorza rv20039
 */

window.onload = function () {
    document.title = "Rainers Vorza rv20039";

    populateAppList();
}


function populateAppList() {
    let ul = document.getElementById("app-list");

    for (let i in apps) {
        let li = createAppItem(apps[i]);
        ul.appendChild(li);
    };
}

function createAppItem(data) {
    // Image
    let img = document.createElement("img");
    img.src = data.image;
    img.alt = data.name;

    let a_img = document.createElement("a");
    a_img.href = data.link;
    a_img.target = "_blank";
    a_img.appendChild(img);

    // Title
    let title = document.createElement("h4");
    title.innerHTML = data.name;

    let a_title = document.createElement("a");
    a_title.href = data.link;
    a_title.target = "_blank";
    a_title.appendChild(title);

    // Description
    let desc = document.createElement("p");
    desc.innerHTML = data.description;

    // App list item
    let li = document.createElement("li");
    li.appendChild(a_img);
    li.appendChild(a_title);
    li.appendChild(desc);
    return li;
}

$("#sub-button").on("click", function() {
    let email = $("#email-field").val();

    if (email == "") {
        // Show error text
        let err = $("#email-error");
        err.text("Please enter an email");
        err.css("display", "inline");
        return;
    }
    if (!validateEmail(email)) {
        // Show error text
        let err = $("#email-error");
        err.text("Invalid email address");
        err.css("display", "inline");
        return;
    }

    // Hide error text
    let err = $("#email-error");
    err.css("display", "none");

    $("#sub-form").submit();
});

function validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
}
