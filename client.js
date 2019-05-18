$(document).ready(onReady);

let totalMonthly = 10000;
let annual;
function onReady() {
    $("#salaryButton").on('click', calculateMonthly);
    $("#tableDiv").on('click', '.deleteButton', deleteEmployee);

}
// Store input values as variables
function calculateMonthly() {
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    annual = $('#annualIn').val();

    // Show input values in table
    $("tbody").append(`   
    <tr>
        <td>`+ firstName + `</td>
        <td>` + lastName + `</td>
        <td>` + id + `</td>
        <td>` + title + `</td>
        <td>` + Number(annual) + `</td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>`);

    // Clear input values
    $('.inputs').val("");

    // Calulate and format total 
    let formattedMonthly = totalMonthly += Number(annual) / 12;
    let formattedFormat = formattedMonthly.toFixed(2)
    $('#monthly').text(formattedFormat);

    // Make red if over 20000
    if (formattedFormat > 20000) {
        $('#monthly').css('color', 'red');
    }
}

function deleteEmployee() {
    $(this).closest('tr').remove();

}




