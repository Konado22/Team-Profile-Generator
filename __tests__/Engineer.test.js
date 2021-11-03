const Engineer = require('../lib/Engineer');

test ('returns Engineer as the role when using getRole', ()=>{
  const engineer = new Engineer ()
    expect(engineer.getRole()).toBe("Engineer")
})