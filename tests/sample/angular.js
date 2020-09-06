var angularHomepage = require('../pageObjects/angularHomepage.js');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();
    angularHomepage.setName('Julie');
    expect(angularHomepage.getGreetingText()).toEqual('Hello Julie!');
  });
});

