const finalListItem = employee => {
    if(employee.role === 'Manager')
    {
        return `Office Number: ${employee.office}`
    }
    else if(employee.role === 'Engineer')
    {
        return `Github: <a href = "http://www.github.com/${employee.github}" target = "_blank">${employee.github}</a>`
    }
    else if(employee.role === 'Intern')
    {
        return `School: ${employee.school}`
    }

}
const makeCard = employee => {
    return `
    <div class = "col-4">
        <div class="card m-3 shadow">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employee.name}</h5>
                <p class="card-text">${employee.role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href = "mailto:: ${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">${finalListItem(employee)}</li>
            </ul>
        </div>
    </div>`
}

const makeCards = empList => {
    var htmlBody = ``
    for(let i = 0; i < empList.length; i++)
    {
        htmlBody += makeCard(empList[i]);
    }
    return htmlBody;
}
module.exports = empList => {
return `
<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="col-12 bg-danger text-light sticky-top d-flex flex-column p-4 p-lg-3">
        <h1 class = 'text-center'>My Team</h1>
    </header>
    <div class = "wrapper">
        <div class = "row justify-content-center">
            ${makeCards(empList)}
        </div>
    </div>
</body>
`
}
