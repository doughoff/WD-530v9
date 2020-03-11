function sendNumString ( firstArg : number, secondArg?: string) : void {
    secondArg = secondArg || "default value";
    console.log(firstArg, secondArg);
	return;
}
sendNumString(1,'a');
sendNumString(1);
