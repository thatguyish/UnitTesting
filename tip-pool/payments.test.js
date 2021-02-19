describe('payments js test',function(){
    it('should add payment to all payments',function(){
        const allpay = Object.keys(allPayments).length;
        submitPaymentInfo();
        expect(Object.keys(allPayments+1).length).toBeGreaterThan(allpay);
    })
    it('should creae current payment',function(){
        const currentPid= paymentId;        
        submitPaymentInfo();
        expect(currentPid).toBeLessThan(paymentId+1);
    })
})