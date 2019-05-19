$(document).ready(onReady);

let totalMonthly = 10000;
let annual;
let employeeList = [
    {
        firstName: "Captain",
        lastName: "Tripps",
        id: Number(19),
        title: 'Traveler',
        annual: 120000
    }
];

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

    let employee = { firstName, lastName, id, title, annual };
    console.log(employee);
    employeeList.push(employee);
    console.log(employeeList);

    // Show input values in table
    $("tbody").append(`   
    <tr>
        <td>`+ firstName + `</td>
        <td>` + lastName + `</td>
        <td>` + id + `</td>
        <td>` + title + `</td>
        <td>$` + Number(annual) + `</td>
        <td><button id=${Number(id)} class="deleteButton">Delete</button></td>
    </tr>`);

    // Clear input values
    $('.inputs').val("");

    // Calulate and format total 
    let formattedMonthly = totalMonthly += Number(annual) / 12;
    let newFormattedMonthly = formattedMonthly.toFixed(2)
    $('#monthly').text(newFormattedMonthly);

    // Make red if over 20000
    if (newFormattedMonthly > 20000) {
        $('#monthly').css('color', '#990404');
    }
}

// Remove employee from list
function deleteEmployee() {
    // Remove closest table row
    $(this).closest('tr').remove();
}












