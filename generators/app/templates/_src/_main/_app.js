import inquirer from 'inquirer';
import chalk from 'chalk';

function main() {
  inquirer
    .prompt({
      type: 'input',
      name: 'arg1',
      description: 'first argument?',
      default: ''
    })
    .then(answers => {
      console.log(chalk.red(`TODO: define ${answers}`));
    });
}
main();