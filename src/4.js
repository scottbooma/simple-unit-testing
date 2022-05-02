function myFunction(salary, taxCode, incomeTax1, incomeTax2) {
  let totalIncomeTax = incomeTax1 + incomeTax2;
  let studentLoan = (salary - 17775) * 0.09;
  const originalSalary = salary;
  let nationalInsurance = null;

  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  } else if (taxCode === "ST") {
    nationalInsurance = salary * 0.05;
  } else {
    nationalInsurance = salary * 0.08;
  }

  let deductions = [nationalInsurance, totalIncomeTax, studentLoan].reduce((sum, number) => {
    return sum + number
  }, 0);

  salary = salary - deductions;

  return (
    `Your gross income is £${originalSalary} and your net income is £${salary}.`
  );
}

module.exports = myFunction