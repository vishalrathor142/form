const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [];

function menu() {
  console.log('\nEmployee Management System');
  console.log('1. Add Employee');
  console.log('2. View Employees');
  console.log('3. Search Employee');
  console.log('4. Remove Employee');
  console.log('5. Exit');
  rl.question('Choose an option: ', choice => {
    switch (choice) {
      case '1':
        addEmployee();
        break;
      case '2':
        viewEmployees();
        break;
      case '3':
        searchEmployee();
        break;
      case '4':
        removeEmployee();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid choice');
        menu();
    }
  });
}

function addEmployee() {
  rl.question('Enter employee name: ', name => {
    rl.question('Enter employee id: ', id => {
      rl.question('Enter employee position: ', position => {
        employees.push({ id, name, position });
        console.log('Employee added successfully');
        menu();
      });
    });
  });
}

function viewEmployees() {
  if (employees.length === 0) console.log('No employees found');
  else employees.forEach(e => console.log(`${e.id} | ${e.name} | ${e.position}`));
  menu();
}

function searchEmployee() {
  rl.question('Enter employee id to search: ', id => {
    const emp = employees.find(e => e.id === id);
    if (emp) console.log(`${emp.id} | ${emp.name} | ${emp.position}`);
    else console.log('Employee not found');
    menu();
  });
}

function removeEmployee() {
  rl.question('Enter employee id to remove: ', id => {
    const index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      console.log('Employee removed');
    } else console.log('Employee not found');
    menu();
  });
}

menu();