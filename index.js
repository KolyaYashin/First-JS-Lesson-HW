function App(name,age){
	document.write("Hello World! My name is "+name+"! It is my first JS code. ");

	function showSkills(){
		let skills=["Java","C#","Html","Css","TurboPascal"];
		document.writeln("Я владею ");
		for(let i=0;i<skills.length-1;i++){
			document.write(skills[i]+", ");
		}
		document.write(skills[skills.length-1]+". ");
	}
	showSkills();

	function CheckAge(){
		if(age<18){
			document.writeln("Я не достиг возраста совершеннолетия! ");
		}else{
			document.writeln("Я совершеннолетний! ");
		}
	}
	CheckAge();
	function calcPow(num,stepen){
		let startNum=num;
		for(let i=0;i<stepen-1;i++){
			num=num*startNum;
		}
		document.writeln("Число "+startNum+ " в степени "+stepen+" равняется "+num);
	}
	calcPow(2,4);
}

App("Kolka",14);