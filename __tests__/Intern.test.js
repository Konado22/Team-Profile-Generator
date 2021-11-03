const Intern= require('../lib/Intern');

test ('Returns the correct school of the intern', ()=>{
  const intern = new Intern()
    expect(intern.getSchool()).toBe(Intern.school)
})