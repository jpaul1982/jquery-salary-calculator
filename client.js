$(document).ready(onReady);

function onReady() {
    $("#salaryButton").on('click', calculateMonthly);

}

function calculateMonthly() {
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let annual = $('#annualIn').val();
    // $("tbody").append('<tr><td>'+firstName+'</td><td</tr>');
    $("tbody").append(`   
    <tr>
        <td>`+firstName+`</td>
        <td>` +lastName+ `</td>
        <td>` +id+ `</td>
        <td>` +title+ `</td>
        <td>` +annual+ `</td>
        <td><button>Delete</button></td>
    
    </tr>`)

    $('.inputs').val(" ");


}