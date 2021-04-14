const generateCardSection = (employeeData) => {
    let employeeCards = "";

    employeeData.forEach(employee => {
        let card = `
            <div class="employee-card">
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h3>
                <ul>
                    <li>id: ${employee.getId()}</li>
                    <li>email: ${employee.getEmail()}</li>
                    <li>${getUniqueProperty(employee)}</li>
                </ul>
            </div>
        `
        employeeCards += card;
    })
    return employeeCards;
};

function getUniqueProperty(employee) {
    switch (employee.role) {
        case "Manager":
            return `office number: ${employee.getOfficeNumber()}`;
        case "Engineer":
            return `github: ${employee.getGithub()}`;
        case "Intern":
            return `school: ${employee.getSchool()}`;
    }
}

module.exports = employeeData => {
    return `
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header><h1>Team Profile</h1></header>

    <main>
        ${generateCardSection(employeeData)}
    </main>

    </body>
</html>
`;
}