
it('should calculate the monthly rate correctly', function () {
  const values = {'amount':1000,'years':10,'rate':.1}
  const interest = values.rate/12;
  const totalN = values.years*12;
  const subtracted = Math.pow(1+interest,totalN*-1)
  const monthlyPayment = ((values.amount*interest)/(1-subtracted)).toFixed(2).toString(10);
  expect(calculateMonthlyPayment(values)).toBe(monthlyPayment)
});


it("should return a result with 2 decimal places", function() {
  let values = {'amount':3000,'years':10,'rate':.1}
  expect(calculateMonthlyPayment(values)[calculateMonthlyPayment(values).length-3]).toEqual('.')
});

/// etc
