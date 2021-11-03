class Engineer {
    constructor (name, id, email, github, role){
        this.name=name;
        this.id=id;
        this.email=email;
        this.gitub=github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub() { 
        return this.github;}
    
}
module.exports = Engineer;