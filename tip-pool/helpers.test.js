describe('helpers js test',function(){
    it('should add payment to all payments',function(){
        
        expect(calculateTipPercent(5,1)).toBeLessThan(100);
    })

    it('should append td element',function (){
        const table = document.querySelector('#summaryTable tbody tr');

        const tableRowCount = document.querySelector('#summaryTable tbody tr').cells.length;

        appendTd(table,'hekkkkkoooooo');

        expect(document.querySelector('#summaryTable tbody tr').cells.length).toBeGreaterThan(tableRowCount);
    })
    it('should decreate the amount of td',function(){

        const tableRowCount = document.querySelector('#summaryTable tbody tr').cells.length;
        expect(document.querySelector('#summaryTable tbody tr').cells.length).toBeLessThan(tableRowCount+1);
    })
})