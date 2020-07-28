class Bird { }
class Lizard { }

{
function sellBirds( pets: Bird[ ]) : void { }
function sellLizards(pets: Lizard[ ]) : void { }

function sellPets<T>(pets: T[ ]): void {  }

let birds:Bird[] = [new Bird(), new Bird()];
sellPets<Bird>(birds);
}