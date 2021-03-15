$(document).ready(function() {
    $('.header').height($(window).height());

    $(".navbar a").click(function() {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    })
})



// Next id for adding a new customer
var nextId = 1;
// ID of Customer currently editing
var activeId = 0;

function customerDisplay(ctl) {
    var row = $(ctl).parents("tr");
    var cols = row.children("td");

    activeId = $($(cols[0]).children("button")[0]).data("id");
    $("#firstName").val($(cols[1]).text());
    $("#lastName").val($(cols[2]).text());
    $("#address1").val($(cols[3]).text());
    $("#address2").val($(cols[4]).text());
    $("#city").val($(cols[5]).text());
    $("#province").val($(cols[6]).text());
    $("#zip").val($(cols[7]).text());

    // Change Update Button Text
    $("#updateButton").text("Update Form");
}

function customerUpdate() {
    if ($("#updateButton").text() == "Update Form") {
        customerUpdateInTable(activeId);
    } else {
        customerAddToTable();
    }

    // Clear form fields
    formClear();

    // Focus to Customer name field
    $("#firstName").focus();
}

function customerAddToTable() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#customerTable tbody").length == 0) {
        $("#customerTable").append("<tbody></tbody>");
    }

    // Append Customer to table
    $("#customerTable tbody").append(
        customerBuildTableRow(nextId));

    // Increment next ID to use
    nextId += 1;
}

function customerUpdateInTable(id) {
    var row = $("#customerTable button[data-id='" + id + "']")
        .parents("tr")[0];

    $(row).after(customerBuildTableRow(id));
    $(row).remove();

    // Clear form fields
    formClear();

    // Change Update Button Text
    $("#updateButton").text("Submit Form");
}

// Build a <table> row of Customer data
function customerBuildTableRow(id) {
    var ret =
        "<tr>" +
        "<td>" +
        "<button type='button' " +
        "onclick='customerDisplay(this);' " +
        "class='btn btn-default' " +
        "data-id='" + id + "'>" +
        "<svg xmlns='http://www.w3.org/2000/svg' height='18' viewBox='0 0 24 24' fill='blue' width='18'><path d='M0 0h24v24H0z' fill='none'/><path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/></svg>" +
        "</button>" +
        "</td>" +
        "<td>" + $("#firstName").val() + "</td>" +
        "<td>" + $("#lastName").val() + "</td>" +
        "<td>" + $("#address1").val() + "</td>" +
        "<td>" + $("#address2").val() + "</td>" +
        "<td>" + $("#city").val() + "</td>" +
        "<td>" + $("#province").val() + "</td>" +
        "<td>" + $("#zip").val() + "</td>" +
        "<td>" +
        "<button type='button' " +
        "onclick='customerDelete(this);' " +
        "class='btn btn-default' " +
        "data-id='" + id + "'>" +
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='red' width='18px' height='18px'><path d='M0 0h24v24H0z' fill='none'/><path d='M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z'/></svg>" +
        "</button>" +
        "</td>" + "<hr>" +
        "</tr>"

    return ret;
}

// Delete Customer from <table>
function customerDelete(ctl) {
    $(ctl).parents("tr").remove();
}

function formClear() {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#address1").val("");
    $("#address2").val("");
    $("#city").val("");
    $("#province").val("");
    $("#zip").val("");


}



function checkScreening() {

    if (document.getElementById('rb11').checked ||
        document.getElementById('rb21').checked ||
        document.getElementById('rb31').checked ||
        document.getElementById('rb41').checked ||
        document.getElementById('rb51').checked) {


        confirm("Sorry, You need futher examination.");
        var div = document.getElementById("myBtn");
        div.style.backgroundColor = '#d9534f';

    } else if (document.getElementById('rb10').checked ||
        document.getElementById('rb20').checked ||
        document.getElementById('rb30').checked ||
        document.getElementById('rb40').checked ||
        document.getElementById('rb50').checked) {

        confirm("You good to go.");

        var div = document.getElementById("myBtn");
        div.style.backgroundColor = '#5cb85c';
    }
}