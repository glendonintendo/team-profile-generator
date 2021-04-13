const generateCardSection = (employeeData) => {
    let employeeCards = "";

    employeeData.forEach(employee => {
        let card = `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <h4>${employee.role}</h3>
                <ul>
                    <li>id: ${employee.id}</li>
                    <li>email: ${employee.email}</li>
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
            return `office number: ${employee.officeNumber}`;
        case "Engineer":
            return `github: ${employee.github}`;
        case "Intern":
            return `school: ${employee.school}`;
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