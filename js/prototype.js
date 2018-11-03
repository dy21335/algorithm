

class obj{
    constructor(){
        this.func = this.func.bind(this);
        this.func2 = this.func2;
        this.i = 10;
        this.y = 20;
    }
    func(){
        console.log(this.i);
    }
    func2(){
        console.log(this);
    }
}


var ins1 = new obj();
var temp = ins1.func;
temp();
var temp2 = ins1.func2;
ins1.func();
temp2();//undefined