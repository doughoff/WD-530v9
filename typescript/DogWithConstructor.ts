class Dog {
	private name: string;
	private age: number;
	constructor(name? : string, age?: number) {
    		this.name = name || 'Rover' ; 
		this.age = age || 5;
  	}
}
{
  let fido: Dog = new Dog();
}
