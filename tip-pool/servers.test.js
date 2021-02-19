describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    expect(serverId).toEqual(Object.values(allServers).length)
  });
  it('should update server table',function (){
    expect(document.querySelector('#serverTable').rows.length-1).toEqual(Object.keys(allServers).length);
  });

  afterEach(function() {
    for(let i of document.querySelectorAll('input')){
      i.value='';
    }for(let t of document.querySelectorAll('tr')){
      t.innerHTML='';
    }

    });
});
