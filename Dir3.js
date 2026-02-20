function Print3(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	//const mins = "−";
	const mins = "\u{2212}";
	const p0 = "\u{2070}"
	const p1 = "\u{00B9}";//"\u{185}"
	const p2 = "\u{00B2}";//"\u{178}";
	const p3 = "\u{00B3}";//"\u{179}"
	const p4 = "\u{2074}"
	const p5 = "\u{2075}"
	const p6 = "\u{2076}"
	const p7 = "\u{2077}"
	const p8 = "\u{2078}"
	const p9 = "\u{2079}"
	//const kurdari = "≤";
	const kurdari = "\u{2264}";
	//const lebdari = "≥";
	const lebdari = "\u{2265}";
	function RandomAngkaAtoB(a,b){ 
		var r = a+Math.ceil(Math.random() * b);
		return r;
	}
	function RandomMyArray(Arr){
		for (var i=0; i<Arr.length; i++){
			var r = Math.floor(Math.random() * Arr.length);
			var a = Arr[i];
			Arr[i] = Arr[r];
			Arr[r] = a;
		}
		return Arr
	}
	function NoJawabanBenar(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			if (Arr[i]==jwb){
				return i;
				break;
			}
		}
	}
	function GetABCD(no){
		var ABCD = ["A","B","C","D"]
		return ABCD[no]
	}
	function StringMinus(ff){
		var strff = ""+ff;
		const gg = strff.split("-");
		var fix = gg[0];
		for(var i=1;i<gg.length;i++){
			fix+="\u{2212}"+gg[i];
		}
		return fix;
	}
	function SplitString(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		for (var i=0; i<len; i++){
			gg.push(strff.substr(i,1));
		}
		return gg;
	}
	function StringRibuan(str){
		var strfix = "";
		var arfix = new Array();
		var StrArray = SplitString(str);
		for (var i=0; i<StrArray.length; i++){
			arfix.push(StrArray[i]);
		}
		var ct = 0;
		var m = 0;
		var n = 0;
		var ctmax = StrArray.length;
		var arct = new Array();
		for (var i=StrArray.length-1; i>=0; i--){
			ct++;
			ctmax--;
			if(ct==3){
				ct = 0;
				m++;
				arct.push(3);
			}
		}
		var n = StrArray.length - 3*arct.length;
		var iter=-1;
		strfix="";
		for (var i=0; i<n; i++){
			iter++;
			strfix += arfix[iter];
		}
		if (n>0)
			strfix += ".";
		for (var i=0; i<m; i++){
			for (j=0; j<3; j++){
				iter++;
				strfix += arfix[iter];
			}
			strfix += ".";
		}
		var leng = strfix.length;
		strfix = strfix.substr(0, leng-1);
		return strfix
	}
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaBuah(){
		var Buah = ["Jeruk", "Apel", "Salak", "Jambu", "Timun", "Terong", "Kol", "Melon", "Mangga", "Buah Naga", "Nanas", "Alpukat", "Buah Pir"];
		Buah = RandomMyArray(Buah);
		return Buah;
	}
	function NamaBinatang(){
		var Binatang = ["Sapi", "Kambing", "Domba", "Ayam", "Ayam Kalkun", "Kerbau", "Bebek", "Angsa"];
		Binatang = RandomMyArray(Binatang);
		return Binatang;
	}
	function MyAljabar1(){
		var a1
		var a2
		do{
			a1 = RandomAngkaAtoB(5,20);
			a2 = RandomAngkaAtoB(5,20);
		}while (a1==a2)
		
		var benar = a1+"x + "+a2;
		var salah1 = a1+"x \u{2212} "+a2;
		var salah2 = a2+"x \u{2212} "+a1;
		var salah3 = a2+"x + "+a1;
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,benar,arrSalah];
	}
	function MyAljabar2(){
		var a1
		var a2
		do{
			a1 = RandomAngkaAtoB(5,20);
			a2 = RandomAngkaAtoB(5,20);
		}while (a1==a2)
		
		var benar = a1+"x + "+a2;
		var salah1 = a1+"x - "+a2;
		var salah2 = a2+"x - "+a1;
		var salah3 = a2+"x + "+a1;
		var salah4 = a1+"x / "+a2;
		var salah5 = a2+"x / "+a1;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,benar,arrSalah];
	}
	function MyAljabar3(){
		var a1;
		var a2;
		var a3;
		var ff;
		do{
			a1 = RandomAngkaAtoB(5,20);
			a2 = RandomAngkaAtoB(5,20);
			a3 = RandomAngkaAtoB(5,20);
			ff = a1==a2 || a1==a3 || a2==a3;
		}while (ff);
		
		var benar = a1+"x + "+a2+"y + "+a3;
		var salah1 = a3+"x + "+a1+"y + "+a1;
		var salah2 = a1+"x + "+a2+"y - "+a3;
		var salah3 = a1+"x - "+a2+"y + "+a3;
		var salah4 = (a1+a2)+"x + "+a3;
		var salah5 = (a1+a3)+"x + "+a2;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,a3,benar,arrSalah];
	}
	function MyAljabar4(){
		var arrA=[];
		
		for(var i=5;i<=25;i++){
			arrA.push(i);
		}
		do{
			arrA = RandomMyArray(arrA);
			var a1=arrA[0];
			var a2=arrA[1];
			var a3=arrA[2];
			var a4=arrA[3];
			var alj1 = a1+"a - "+a2+"b";
			var alj2 = a3+"a + "+a4+"b";
			var res_a = a1-a3;
			var res_b = -a2-a4;
			var res_as = a1+a3;
			var res_bs = -a2+a4;
		}while(res_a==1 || res_b==1 || res_as==1 || res_bs==1 || res_a==-1 || res_b==-1 || res_as==-1 || res_bs==-1)
		
		var benar = res_a+"a - "+(Math.abs(res_b))+"b";
		var salah1 = res_a+"a + "+(Math.abs(res_b))+"b";
		var salah2 = -res_a+"a - "+(Math.abs(res_b))+"b";
		var salah3 = -res_a+"a + "+(Math.abs(res_b))+"b";
		var salah4 = res_as+"a + "+(Math.abs(res_bs))+"b";
		var salah5 = res_as+"a - "+(Math.abs(res_bs))+"b";
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj1,alj2,benar,arrSalah];
	}
	function MyAljabar5(){
		var arrA=[];
		
		for(var i=5;i<=25;i++){
			arrA.push(i);
		}
		do{
			arrA = RandomMyArray(arrA);
			var a1=arrA[0];
			var a2=arrA[1];
			var a3=arrA[2];
			var a4=arrA[3];
			var a5=arrA[4];
			var a6=arrA[5];
			var alj1 = a1+"a + "+a2+"b - "+a5;
			var alj2 = "-"+a3+"a - "+a4+"b + "+a6;
			var res_a = a1+a3;
			var res_b = a2+a4;
			var res_as = a1+a3;
			var res_bs = a2+a4;
			var res_c = -a5-a6;
			var res_cs = a5-a6;
		}while(res_a==1 || res_b==1 || res_as==1 || res_bs==1 || res_a==-1 || res_b==-1 || res_as==-1 || res_bs==-1)
		
		var benar = res_a+"a - "+(Math.abs(res_b))+"b - "+(Math.abs(res_c));
		var salah1 = res_a+"a + "+(Math.abs(res_b))+"b - "+(Math.abs(res_c));
		var salah2 = -res_a+"a - "+(Math.abs(res_b))+"b - "+(Math.abs(res_c));
		var salah3 = -res_a+"a + "+(Math.abs(res_b))+"b - "+(Math.abs(res_cs));
		var salah4 = res_as+"a + "+(Math.abs(res_bs))+"b - "+(Math.abs(res_c));
		var salah5 = res_as+"a - "+(Math.abs(res_bs))+"b - "+(Math.abs(res_cs));
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj1,alj2,benar,arrSalah];
	}
	function MyAljabar6(){
		var arrA=[];
		
		for(var i=5;i<=25;i++){
			arrA.push(i);
		}
		arrA = RandomMyArray(arrA);
		var a1=arrA[0];
		var a2=arrA[1];
		var a4=arrA[2];
		var a5=arrA[3];
		var a7=arrA[4];
		var a8=arrA[5];
		var a3=arrA[6];
		var a6=a3;
		var a9=a3;
		
		var alj1 = a1+"p + "+a2+"q + "+a3;
		var alj2 = a4+"q + "+a5+"r - "+a6;
		var alj3 = a7+"p + "+a8+"r - "+a9;
		var res_p = a1+a7;
		var res_q = a2+a4;
		var res_r = a5+a8;
		var res_const = a3;
		var res_consts = 3*a3;
		var res_ps = a1+a4+a7;
		var res_qs = a2+a5+a8;
			
		var benar = res_p+"p + "+res_q+"q + "+res_r+"r + "+res_const;
		var salah1 = res_p+"p + "+res_q+"q + "+res_r+"r + "+res_consts;
		var salah2 = res_ps+"p + "+res_qs+"q + "+res_const;
		var salah3 = res_ps+"p + "+res_qs+"q + "+res_consts;
		var salah4 = res_p+"p + "+res_q+"q + "+res_r+"r - "+res_const;
		var salah5 = res_p+"p + "+res_q+"q + "+res_r+"r - "+res_consts;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj1,alj2,alj3,benar,arrSalah];
	}
	function MyAljabar7(){
		var arrA=[];
		
		for(var i=5;i<=25;i++){
			arrA.push(i);
		}
		do{
			arrA = RandomMyArray(arrA);
			var a1=arrA[0];
			var a2=arrA[1];
			var a3=arrA[2];
			var a4=arrA[3];
			var a5=arrA[4];
		}while(a3>a5);
		
		//11x + 7y + 5 + 5y - 9
		
		var alj = a1+"x + "+a2+"y + "+a3+" + "+a4+"y - "+a5;
		var res_x = a1;
		var res_y = a2+a4;
		var res_const = a3-a5;
		var res_consts = a3+a5;
		var res_xs = a1+a2;
		var res_ys = a4;
			
		var benar = res_x+"x + "+res_y+"y - "+Math.abs(res_const);
		var salah1 = res_x+"x + "+res_y+"y + "+res_consts;
		var salah2 = res_xs+"x + "+res_ys+"y + "+Math.abs(res_const);
		var salah3 = res_xs+"x + "+res_y+"y + "+res_consts;
		var salah4 = res_x+"x + "+res_ys+"y - "+Math.abs(res_const);
		var salah5 = res_x+"x + "+res_ys+"y + "+res_consts;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar8(){
		var arrA=[];
		
		for(var i=2;i<=10;i++){
			arrA.push(i);
		}
		arrA = RandomMyArray(arrA);
		var a1=arrA[0];
		var a2=arrA[1];
		var a3=1;
		var a4=arrA[3];
		
		//(2x - 5)(x + 3)
		
		var alj = "("+a1+"x - "+a2+")(x + "+a4+")";
		var res_x2 = a1*a3;
		var res_x = a1*a4-a2*a3;
		var res_const = a2*a4;
		var res_consts = a2*a1;
		var res_x2s = a1+a3;
		var res_xs = a2+a4;
		var benar = res_x2 +"x"+p2+" + "+res_x +"x - "+res_const;
		var salah1 = res_x2 +"x"+p2+" + "+res_x +"x + "+res_consts;
		var salah2 = res_x2s+"x"+p2+" + "+res_xs+"x + "+res_const;
		var salah3 = res_x2s+"x"+p2+" + "+res_x +"x + "+res_consts;
		var salah4 = res_x2 +"x"+p2+" + "+res_xs+"x - "+res_const;
		var salah5 = res_x2 +"x"+p2+" + "+res_xs+"x + "+res_consts;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar9(){
		var arrA=[];
		
		for(var i=2;i<=10;i++){
			arrA.push(i);
		}
		do{
			arrA = RandomMyArray(arrA);
			var a1=1;
			var a2=arrA[0];
			var a3=1;
			var a4=arrA[1];
		}while(a2>a4 || Math.abs(-a1*a4+a2*a3)==1)
		
		//(x + 1)(x - 4)
		
		var alj = "(x + "+a2+")(x - "+a4+")";
		var res_x2 = a1*a3;
		var res_x = -a1*a4+a2*a3;
		var res_const = a2*a4;
		var res_consts = a2*a1;
		var res_x2s = a1+a3;
		var res_xs = a1*a4-a2*a3;
		var benar =  "x"+p2+" - "+Math.abs(res_x) +"x - "+Math.abs(res_const);
		var salah1 = "x"+p2+" + "+Math.abs(res_x) +"x + "+res_consts;
		var salah2 = res_x2s+"x"+p2+" + "+res_xs+"x + "+Math.abs(res_const);
		var salah3 = res_x2s+"x"+p2+" - "+Math.abs(res_x) +"x + "+res_consts;
		var salah4 = "x"+p2+" + "+res_xs+"x - "+Math.abs(res_const);
		var salah5 = "x"+p2+" - "+res_xs+"x + "+res_consts;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar10(){
		var arrA=[];
		var theX
		
		for(var i=2;i<=10;i++){
			arrA.push(i);
		}
		arrA = RandomMyArray(arrA);
		theX = RandomAngkaAtoB(2,6)
		var a1=arrA[0];
		var a2=a1*theX;
		var a3=arrA[2];
		var a4=a2+a3;
		
		//3x + 8 = 17
		
		var alj = a1+"x + "+a3+" = "+a4;
		var benar =  theX;
		var salah1 = theX-1;
		var salah2 = theX+1;
		var salah3 = theX-2;
		var salah4 = theX+2;
		var salah5 = theX-3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar11(){
		var arrA=[];
		var theX
		
		for(var i=2;i<=10;i++){
			arrA.push(i);
		}
		
		do{
			arrA = RandomMyArray(arrA);
			var a1=RandomAngkaAtoB(2,6);
			var a2=1;
			var a3=arrA[0];
			var a4=arrA[1];
			var a5=RandomAngkaAtoB(2,6);
			var a6=1;
			var a7=arrA[2];
			var a8=arrA[3];
		}while(-a1*a3+a5*a7<=0 || a1*a4-a5*a8>0 || -a1*a3+a5*a7==1 || -a1*a3+a5*a7==-1)
		
		//2(a - 3b + 4) + 4(a + 2b - 3)
		
		var alj = a1+"(a - "+a3+"b + "+a4+") + "+a5+"(a + "+a7+"b - "+a8+")";
		var benar =  (a1+a5)+"a + "+Math.abs(a1*a3-a5*a7)+"b - "+Math.abs(a1*a4-a5*a8);
		var salah1 = (a1+a5)+"a + "+Math.abs(a1*a3-a5*a7)+"b + "+Math.abs(a1*a4-a5*a8);
		var salah2 = (a1+a5)+"a - "+Math.abs(a1*a3-a5*a7)+"b - "+Math.abs(a1*a4-a5*a8);
		var salah3 = (a1+a5)+"a - "+Math.abs(a1*a3-a5*a7)+"b - "+Math.abs(a1*a4-a5*a8);
		var salah4 = (a1+a5)+"a + "+Math.abs(a1*a3+a5*a7)+"b - "+Math.abs(a1*a4+a5*a8);
		var salah5 = (a1+a5)+"a - "+Math.abs(a1*a3+a5*a7)+"b + "+Math.abs(a1*a4+a5*a8);
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar12(){
		var arrA=[];
		
		for(var i=2;i<=15;i++){
			arrA.push(i);
		}
		
		do{
			arrA = RandomMyArray(arrA);
			var a1=arrA[0];
			var a2=arrA[1];
			var a3=arrA[2];
			var a4=arrA[3];
		}while(a1<=a3 || a2>=a4 || a1-a3<=1 || a2-a4>0)
		
		//7x + 2 - 3x - 6
		
		var alj = a1+"x + "+a2+" - "+a3+"x - "+a4;
		var benar =  (a1-a3)+"x - "+Math.abs(a2-a4);
		var salah1 = (a1-a3)+"x + "+Math.abs(a2-a4);
		var salah2 = -(a1-a3)+"x + "+Math.abs(a2-a4);
		var salah3 = -(a1-a3)+"x - "+Math.abs(a2-a4);
		var salah4 = (a1+a2)+"x - "+Math.abs(a3+a4);
		var salah5 = (a1+a2)+"x + "+Math.abs(a3+a4);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar13(){
		var arrA=[];
		
		for(var i=2;i<=15;i++){
			arrA.push(i);
		}
		
		do{
			arrA = RandomMyArray(arrA);
			var a1=arrA[0];
			var a2=arrA[1];
			var a3=arrA[2];
			var a4=arrA[3];
			var a5=arrA[4];
		}while(a1+a3-a5>=0)
		
		//9 - 3y + 2 + x - 12
		
		var alj = a1+" - "+a2+"y + "+a3+" + "+a4+"x - "+a5;
		var benar =  a4+"x - "+a2+"y - "+Math.abs(a1+a3-a5);
		var salah1 = a4+"x - "+a2+"y + "+Math.abs(a1+a3-a5);
		var salah2 = a4+"x + "+a2+"y + "+Math.abs(a1+a3-a5);
		var salah3 = a4+"x + "+a2+"y - "+Math.abs(a1+a3-a5);
		var salah4 = (a1+a4)+"x - "+a2+"y + "+Math.abs(a3-a5);
		var salah5 = (a1+a4)+"x - "+a2+"y - "+Math.abs(a3-a5);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar14(){
		var arrA=[];
		
		for(var i=2;i<=15;i++){
			arrA.push(i);
		}
		
		arrA = RandomMyArray(arrA);
		var a1=arrA[0];
		var a2=arrA[1];
		var a3=arrA[2];
		var a4=arrA[3];
		
		//7x² - 4x + 8y - 3
		
		var alj = a1+"x"+p2+" - "+a2+"x + "+a3+"y - "+a4;
		var benar =  -a4;
		var salah1 = a4;
		var salah2 = a1;
		var salah3 = -a2;
		var salah4 = a3;
		var salah5 = -a1
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [alj,benar,arrSalah];
	}
	function MyAljabar15(){
	
		do{
			var a1 = RandomAngkaAtoB(3,10);
			var a2 = RandomAngkaAtoB(3,9);
			var b1 = RandomAngkaAtoB(0,5);
			var b2 = RandomAngkaAtoB(0,5);
			
			var aafix1 = a2;
			var aafix2 = a1;
			var aafix3 = a1*b2-a2*b1;
		}while(aafix3<1 || b1==b2**2 || b1==b2)
	
		var benar = [a1,a2,b1,b2,"-",aafix1,"+",aafix2,"-",aafix3];
		var salah1 = [a1,a2,b1,b2,"-",aafix1,"+",aafix2,"+",aafix3];
		var salah2 = [a1,a2,b1,b2,"-",aafix1,"-",aafix2,"+",aafix3];
		var salah3 = [a1,a2,b1,b2,"-",aafix1,"-",aafix2,"-",aafix3];
		var salah4 = [a1,a2,b1,b2,"+",aafix1,"+",aafix2,"-",aafix3];
		var salah5 = [a1,a2,b1,b2,"+",aafix1,"-",aafix2,"+",aafix3];
		arrsalah = [salah1,salah2,salah3,salah4,salah5];
		arrsalah = RandomMyArray(arrsalah);
		return [a1,a2,b1,b2,benar,arrsalah];
	}

	function PropertiAljabar15(nmcanvas,ss,arr,ar1,ar2,ar3,ar4){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		let base1_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAvCAYAAAD0OrjvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADCSURBVHhe7dsxCsMgAEBR7Sa5/7FynoxtAxmzlf6hfQ9EQSf54OR8vg0IPK4Zvk5sZMRGRmxkxEZGbGTERkZsZMRGRmxkxEZGbGTERkZsZMRGRmxkxEZGbGTERkZsZMT2oX3fx7ZtY855O8698wxj3P6uWmtdq/91HMe1av3K3d/dn698ZDyjZMRGRmxkxEZGbGTERkZsZMRGRmxkxEZGbGTERkZsZMRGRmxkxEZGbGTERkZsZMRGRmxkxEZGbETGeAGi7hdyVOyLOAAAAABJRU5ErkJggg==";
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAA1CAYAAADcWABTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAC8SURBVHhe7dyhFYAwDEDBwgbdf8iOABX16M+7M8kAX0TlerYBEfeZkCBYUgRLimBJESwpgiVFsKQIlhTBkiJYUgRLimBJESwpgiVFsKQIlhTBkiJYUgRLimBJESwpgiVFsKQIlpTEI40559n4o7XW2b75/EKKk4AUwZIiWFIES4pgSREsKYIlRbCkCJYUwZIiWFIES4pgSREsKYIlRbCkCJYUwZIiWFIES4pgSREsKYIlRbCkCJYUwRIyxgu+Nw9cNLwlzQAAAABJRU5ErkJggg==";
		
		base0_image.onload = function () {
			CekJaw();
		}	
		base1_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==2){
				ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
				var Abjad = ["A","B","C","D"];
				for(var i=0;i<4;i++){
					var yy = 110+50*i;
					ctx.drawImage(base1_image, 0, yy,base1_image.width, base1_image.height);
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i],0,yy+30);
				}
				InsertText(arr);
			}
		}
		
		function InsertText(arr){
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "left";
			ctx.fillText(ss,0,80);
			ctx.textAlign = "center";
			ctx.fillText(arr[0],35,15);
			ctx.fillText("x"+p2+" \u{2212} "+arr[2],35,40);
			ctx.fillText(arr[1],125,15);
			ctx.fillText("x \u{2212} "+arr[3],125,40);
			
			var Abjad = ["A","B","C","D"];
			var arrPil = [ar1,ar2,ar3,ar4];
			
			
			var ynext = 90;
			for(var i=0;i<4;i++){
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				//mengubah min jadi simbol min
				//if(arrPil[i][4]=="–")	ctx.fillText(arrPil[i][4]+""+arrPil[i][5]+"x"+p2+" "+arrPil[i][6]+" "+arrPil[i][7]+"x "+arrPil[i][8]+" "+arrPil[i][9],100,ynext+50*i+40);
				//else 			ctx.fillText(""+arrPil[i][5]+"x"+p2+" "+arrPil[i][6]+" "+arrPil[i][7]+"x "+arrPil[i][8]+" "+arrPil[i][9],100,ynext+50*i+40);
				
				for(var j=4;j<10;j++){
					if(arrPil[i][j]=="-"){
						arrPil[i][j]="\u{2212}";
					}
				}
				if(arrPil[i][4]=="–")	ctx.fillText(arrPil[i][4]+""+arrPil[i][5]+"x"+p2+" "+arrPil[i][6]+" "+arrPil[i][7]+"x "+arrPil[i][8]+" "+arrPil[i][9],100,ynext+50*i+40);
				else 					ctx.fillText(""+arrPil[i][5]+"x"+p2+" "+arrPil[i][6]+" "+arrPil[i][7]+"x "+arrPil[i][8]+" "+arrPil[i][9],100,ynext+50*i+40);
				
				ctx.fillText("(x"+p2+" \u{2212} "+arrPil[i][2]+")(x \u{2212} "+arrPil[i][3]+")",100,ynext+50*i+65);
			}
		}
		return 0;
	}
	function MyAljabar16(){
		//((x^2-9) / x) x (2x / (x-3))
		//((a0x^2-a1) / a2x) x (a3x / (a4x-a5))
		//(x^2-9)(x-3) + (x)(2x)   / (x)(x-3)
		//x^3 - 3x^2 - 9x + 27 + 2x^2  / (x)(x-3)
		//x^3 - (3-2)x^2 - 9x + 27  / (x)(x-3)
		//x^3 - x^2 - 9x + 27  / (x)(x-3)
		do{
			var a0 = 1;
			var a2 = 1;
			var a3 = RandomAngkaAtoB(2,7);
			var a4 = 1;
			var a5 = RandomAngkaAtoB(0,9);
			var a1 = a5**2;
			
			var aa1 = a3;
			var aa2 = a3*a5;
			var aa3 = Math.abs(a3-a5);
			//(a3x + a3*a5)
		}while(aa2<=1)
	
		var benar = aa1+"x + "+aa2;//[aa1,aa2,"+","+"];
		var salah1 = aa1+"x \u{2212} "+aa2;//[aa1,aa2,"+","–"];
		var salah2 = "\u{2212}"+aa1+"x + "+aa2;//[aa1,aa2,"–","+"];
		var salah3 = "\u{2212}"+aa1+"x \u{2212} "+aa2;//[aa1,aa2,"–","–"];
		var salah4 = aa1+"x + "+aa3;//[aa1,aa3,"+","+"];
		var salah5 = "\u{2212}"+aa1+"x \u{2212} "+aa3;//[aa1,aa3,"–","–"];
		var arrsalah = [salah1,salah2,salah3,salah4,salah5];
		arrsalah = RandomMyArray(arrsalah);
		return [a1,a3,a5,benar,arrsalah];
	}
	function PropertiAljabar16(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAA0CAYAAADi+lhGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAReSURBVHhe7Zy9L3RBFMbPvqXwB5AgWo2CiAqFRuKjJREKlUKl0KBFoVHoFNQqJEpKBa1WKGh09PvOM+59c+27l7kf65zNfX7J5N4ZsZmdOTPnmTMzW6s7hBBF/kRPQtSgERJ1aIREHRohUYdGSNShERJ1chnh/v6+Tz/x8fEhk5OTUqvV/BN5TdbX1+X+/j7KEStkNsKVlRV5eHiQzc3NqCSd6+tr2djYkPf39395TXZ3d319QgYQ+UUQrA5lb2+vvry8HOWysbW1VX95eYlyergBUZ+YmKifn59HJUSb4Jnw9fVVrq6uxBliVBLOxcWFjI6OSnd3d1SiR2dnp58NDw4O1OUB+STYCE9PT/2zq6vLP5N6DwmGBledzAM8z87OZHZ21uctMDIyIo+Pj+ryQIuQfvtNgo0QOrC/v9/PJADPm5sbce5ZOjo6pKenRwYHB6Wvr0+c2/VGB+01NzfnDRhf0IoWw0AaGBjw36mK/NRvv07klr8l1lHQhM2ATsRH5dWLGqCu7VTfVmCl33KFaBqBTsRIwgiDdswCZsfYFSQTV7Ctp0i/lUmQEcL1whU3c1/Qhmtra3JycuJd3OLiYibBj1CPGwz/pZAQUF5Qv6enJ++GqkrRfiuT4JkQHYaOS1YU70tLS7K9ve3F7uXlpS+fmZlR+0IhIG6JhUlVjdBcv7lZJwjE+IaGhup3d3c+H+tEfASeyEMzIo/kpnkTccFmIEYY17mKWOu3TCerodPgkjGFtysY6RjxiBVaChtVmUwLk1inIa7UjsQGOD09TQO0hJ8PMwJ3lhausQxCEa3YroNEmZ+f/+Le8Y6yWL6QdHjRqSRwOmd1ddVvbQLMtsfHxzI8POzzJB0aYYkg1jY2Nubfb29vTeyVtwOlBKvJJ9j2ent78wnvJBDMhI2guOopK0ldWEQPNqtLO6Ys5FqYkK9wYVIMakKiDjUhUYdGSNShERoGIR8cMNA8ZvUd2IHC7lnh+nllSMyBBU1vb6/5hQ0OO+DQQ5GdKBqhQdCxyRNL1ilaX7pjg+BODg6ZtsuWH3aGUN/Dw8OoJBtqRgg9Ye3WlwWgr46Ojr4cuE1egUAboW2SeQtMTU3524t5fuFCzQhDbutVEXx356F8e8TgCJ3TXP4dbYS/oc1QZuVsJ+qEQYH6Z+bTK+ti5daXBSDw0043429oJ4un1rFDhJPaeY74mdCEVm59WQfeAZ7j+flZ3CIgKk0HbYkLarHrTiZLtxnVjRDa0MqtLwvArbnJoalbg+HAHWPQLiws/Ki/sGDA5TR8XmMq+zajmwlzXx5TNUIYWzve1msladoqnrlgPEg7OzsyPj5u5qfuUF8Yd1LLBuP+UYVYQ6AKVm59WQHtkNTHcbu4xYiPxSHhPW6rIoHismiscxbUjJCkg8FXpWA1jdAo6FBu2xF1IFHg4qzKEtSvjIO7PNRK1DERJyTVhkZI1KEREnVohEQdGiFRh0ZI1KEREnVohEQZkb+asjf9mn1HlAAAAABJRU5ErkJggg==";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],50,18);
			ctx.fillText(arr[1],119,18);
			ctx.fillText(arr[2],136,41);
		}
		return 0;
	}
	function MyAljabar17(){
		//((x^2-9) / x) x (2x / (x-3))
		//((a0x^2-a1) / a2x) x (a3x / (a4x-a5))
		//(x^2-9)(x-3) + (x)(2x)   / (x)(x-3)
		//x^3 - 3x^2 - 9x + 27 + 2x^2  / (x)(x-3)
		//x^3 - (3-2)x^2 - 9x + 27  / (x)(x-3)
		//x^3 - x^2 - 9x + 27  / (x)(x-3)
		do{
			var a0 = 1;
			var a2 = 1;
			var a3 = RandomAngkaAtoB(2,7);
			var a4 = 1;
			var a5 = RandomAngkaAtoB(0,9);
			var a1 = a5**2;
			
			var aa1 = a3;
			var aa2 = a3*a5;
			var aa3 = Math.abs(a3-a5);
			//(a3x + a3*a5)
		}while(aa2<=1)
	
		var benar = aa1+"x \u{2212} "+aa2;//[aa1,aa2,"+","–"];
		var salah1 =  aa1+"x + "+aa2;//[aa1,aa2,"+","+"];
		var salah2 =  "\u{2212}"+aa1+"x + "+aa2;//[aa1,aa2,"–","+"];
		var salah3 = "\u{2212}"+aa1+"x \u{2212} "+aa2;//[aa1,aa2,"–","–"];
		var salah4 = aa1+"x + "+aa3;//[aa1,aa3,"+","+"];
		var salah5 = "\u{2212}"+aa1+"x \u{2212} "+aa3;//[aa1,aa3,"–","–"];
		var arrsalah = [salah1,salah2,salah3,salah4,salah5];
		arrsalah = RandomMyArray(arrsalah);
		return [a1,a3,a5,benar,arrsalah];
	}
	function PropertiAljabar17(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAAtCAYAAABf29KgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAQsSURBVHhe7Zu/LzRBGMfn3tKPaDQkiEqiURDRoZT4UUuEWkSloEBNofEfUKuQaCSUClqtaKjFj/be/Ux2Lvd698fcWTvP8XySye6MPTf73e/M8+zebKUaYRSlZP7EW0UpFTWeEgQ1nhIENZ4SBG/j7e/v25LH29ubmZqaMpVKxW6pS2J9fd3c3d3FNbmsrKyYs7OzuCYb9ETXhuCuNo/l5WVbfDg9PbXl9fW1Ojk5afcl4fq1t7cXt8hCev/S4Dr39/dXn56e4pZsco2HAL6m+8z29rZ3R8pE6qAAtC7CdG4CKBO+D13RN4/MUPv8/GwuLi5MJETc4g9hYnx83PT09MQtcujo6DAbGxvm4OBAVCpAyHp5eTFra2txS2sxPT1tt1dXV3abRabxjo+P7bazs9Nu6/M3CuYiF6mvA9uTkxMzNzdn6xIZGxszDw8PXiKVxeHhoenq6rIDA9DRaYvu19fXpr29vVaXlj/T75mZGa8BnWm8+/t7MzAwUBOCLScfhQPT1tZment7zfDwsIliu4lCqjUaNyDz8/PWtAjkc0MSAgbT4OCgPUcJcKEeHx+tng70vL29tVpzHYaGhkx3d7eNQFwHd10kQf8Z0FG4jVtSiEPuf+QlueQifLzZ/E8C9F1K/8mFSc6T8rLIfNXIfLawn4Q7hmuSVLI+WyR8R19fX+53Nf0cj1HHTMfIIxf0hRnQhY+0InWWDMXo6KjZ3d01Hx8f5vLyMm79F455f39nIrElMrAtrs7fOEYKqcZjGmd6TwpFhIXV1VVzdHRkw9Xi4qJ3vrG5uVkTI61wzHeTFNpCkhX6yfVox0hbW1u1XFoipFxMHqRhWWTOeFwULk69qdhfWloyOzs7NsE9Pz+37bOzs97mkwA5CLmIFOOlDXR3o8YgJ+fDfOTQUs1H/xlA7oY0lWiGSYW8Y2RkpBavXd7Hx9zzGnJA6pRGHiCGhlzK95lTWaAzejsN6aPTln2XB7q2tPwbOJ5SJs4fPt+baTzg5Fr5BiKJRgQqG7TOMpRk0NN3MOcaDyTd/X0VZzqpF1d6/9LAdI1EPC/jAf+4VUdiPQyg75zpXBj8KmgtcUZOghRhYWHBa6Zz6NL3guGXHB4x3dzciPy5UApqPCUITT9AVpSvkDjj8QDwtxMqEPwU7fP001CrBEFDrRIENV7BcFfLT1+NLJz4jWioLRiXo6ms2ajxlCBoqFWCoMb7ZUhZuqahVglCsBmPkefzxppSLFJ0D2Y8nzfWlOIRozuhNjQsVaIrP2XNX6sQUncROR4PWycmJuy+Lif6Xgi17n3ckLoHv6tFiGbfWFMax5kuuO523gsEK1ZZufr5ZSLfdftKc0jQPZjx3MnifXfCLPemTmmlN9ZaCSm663M8JQj6y4USBDWeEgQ1nhIENZ4SBDWeEgQ1nhIAY/4CLaAvNFZ5OqIAAAAASUVORK5CYII=";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],50,17);
			ctx.fillText(arr[2],135,17);
			ctx.fillText(arr[1],120,38);
		}
		return 0;
	}
	function MyAljabar18(){
		var benar = "\u{2212}(a + b)"+p2+"";
		var salah1 = "(a + b)"+p2+"";
		var salah2 = "(a \u{2212} b)"+p2+"";
		var salah3 = "\u{2212}(a \u{2212} b)"+p2+"";
		var salah4 = "\u{2212}(a + b)"+p3+"";
		var salah5 = "(a \u{2212} b)"+p3+"";
		var arrsalah = [salah1,salah2,salah3,salah4,salah5];
		arrsalah = RandomMyArray(arrsalah);
		return [benar,arrsalah];
	}
	function PropertiAljabar18(nmcanvas){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		}
		return 0;
	}
	function MyAljabar19(){
		//3x + 2 >= 26!
		var a1,a2,a3,a4,a5;
		//var arDari = ["≤","≥"];
		var arDari = [kurdari,lebdari];
		arDari = RandomMyArray(arDari);
		do{
			a1 = RandomAngkaAtoB(1,6);
			a2 = RandomAngkaAtoB(1,9);
			a3 = RandomAngkaAtoB(1,9);
			a4 = a2+a3*a1;
			a5 = a3-a1;
		}while (a2==a3)
		
		var soal = a1+"x + "+a2+" "+arDari[0]+" "+a4;
		
		var benar = "x "+arDari[0]+" "+a3;
		var salah1 = "x "+arDari[1]+" "+a3;
		var salah2 = "x "+arDari[0]+" \u{2212}"+a3;
		var salah3 = "x "+arDari[1]+" \u{2212}"+a3;
		var salah4 = "x "+arDari[0]+" "+a5;		if(a5<0)	salah4 = "x "+arDari[0]+" \u{2212}"+Math.abs(a5);
		var salah5 = "x "+arDari[1]+" "+a5;		if(a5<0)	salah5 = "x "+arDari[1]+" \u{2212}"+Math.abs(a5);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal,benar,arrSalah];
	}
	function MyAljabar20(){
		var a1,a2,a3;
		var b1,b2,b3;
		var c1,c2,c3;
		var d1,d2,d3;
		//(3x² + 6y² + 5z²) - ((x² + 5xy - 4x⁶) + (xy - 6y² + 8x²) - (x² + 3y² - 16x)) !
		//(a1x² + a2y² + a3z²) - ((b1x² + b2xy - b3x⁶) + (c1xy - c2y² + c3x²) - (d1x² + d2y² - d3x)) !
		//(a1-b1-c3+d1)x² + (a2+c2+d2)y² - (b2+c1)xy - d3x + b3x⁶ + a3z²
			
		do{
			a1 = RandomAngkaAtoB(1,9);
			a2 = RandomAngkaAtoB(1,9);
			a3 = RandomAngkaAtoB(1,9);
			b1 = 1;
			b2 = RandomAngkaAtoB(1,9);
			b3 = RandomAngkaAtoB(1,9);
			c1 = 1;
			c2 = RandomAngkaAtoB(1,9);
			c3 = RandomAngkaAtoB(1,9);
			d1 = 1;
			d2 = RandomAngkaAtoB(1,9);
			d3 = RandomAngkaAtoB(1,9);
		}while (a1-b1-c3+d1<=1 || a2+c2+d2<=1 || b2+c1<=1)
		
		//var soal = "("+a1+"x² + "+a2+"y² + "+a3+"z²) – (("+b1+"x² + "+b2+"xy – "+b3+"x"+p6+") + ("+c1+"xy – "+c2+"y² + "+c3+"x²) – ("+d1+"x² + "+d2+"y² – "+d3+"x))";
		var soal = "("+a1+"x"+p2+" + "+a2+"y"+p2+" + "+a3+"z"+p2+") \u{2212} ((x"+p2+" + "+b2+"xy \u{2212} "+b3+"x"+p6+") + (xy \u{2212} "+c2+"y"+p2+" + "+c3+"x"+p2+") \u{2212} (x"+p2+" + "+d2+"y"+p2+" \u{2212} "+d3+"x))";
		
		var benar = ""+(a1-b1-c3+d1)+"x"+p2+" + "+(a2+c2+d2)+"y"+p2+" \u{2212} "+(b2+c1)+"xy \u{2212} "+d3+"x + "+b3+"x"+p6+" + "+a3+"z"+p2+"";
		var salah1 = ""+(a1-b1-c3+d1)+"x"+p2+" \u{2212} "+(a2+c2+d2)+"y"+p2+" \u{2212} "+(b2+c1)+"xy \u{2212} "+d3+"x + "+b3+"x"+p6+" + "+a3+"z"+p2+"";
		var salah2 = ""+(a1-b1-c3+d1)+"x"+p2+" \u{2212} "+(a2+c2+d2)+"y"+p2+" \u{2212} "+(b2+c1)+"xy \u{2212} "+d3+"x \u{2212} "+b3+"x"+p6+" + "+a3+"z"+p2+"";
		var salah3 = ""+(a1-b1-c3+d1)+"x"+p2+" \u{2212} "+(a2+c2+d2)+"y"+p2+" \u{2212} "+(b2+c1)+"xy \u{2212} "+d3+"x \u{2212} "+b3+"x"+p6+" \u{2212} "+a3+"z"+p2+"";
		var salah4 = ""+(a1-b1-c3+d1)+"x"+p2+" + "+(a2+c2+d2)+"y"+p2+" \u{2212} "+(b2+c1)+"xy \u{2212} "+d3+"x + "+b3+"x"+p6+" \u{2212} "+a3+"z"+p2+"";
		var salah5 = ""+(a1-b1-c3+d1)+"x"+p2+" \u{2212} "+(a2+c2+d2)+"y"+p2+" + "+(b2+c1)+"xy \u{2212} "+d3+"x + "+b3+"x"+p6+" \u{2212} "+a3+"z"+p2+"";
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal,benar,arrSalah];
	}
	function MyAljabar21(){
		//3x + 2 >= 26!
		var a1,a2,a3,a4,a5;
		a1 = RandomAngkaAtoB(1,10);
		a2 = 10000*RandomAngkaAtoB(1,9);
		a3 = 100000*RandomAngkaAtoB(11,20);
		a4 = a2+a3*a1;
		a5 = a3-a2;
		
		var s1 = StringRibuan(a4);
		var s2 = a1+"x \u{2212} "+StringRibuan(a2);
		
		var benar = a3;
		var salah1 = a3+100000;
		var salah2 = a3+200000;
		var salah3 = a3-100000;
		var salah4 = a3-200000;
		var salah5 = a3+300000;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [s1,s2,benar,arrSalah];
	}
	function MyAljabar22(){
		//3x + 2 >= 26!
		var a1,a2,t,x,y,jarak,kecepatan;
		a1 = RandomAngkaAtoB(1,10);
		a2 = 1;
		t = RandomAngkaAtoB(2,8);
		x = t*RandomAngkaAtoB(2,8);
		y = t*RandomAngkaAtoB(2,8);
		jarak = a1*x + a2*y
		kecepatan = Math.abs(jarak / t) ;
		
		var benar = kecepatan;
		var salah1 = kecepatan+1;
		var salah2 = kecepatan+2;
		var salah3 = kecepatan-1;
		var salah4 = kecepatan-2;
		var salah5 = kecepatan+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,x,y,t,benar,arrSalah];
	}
	function MyAljabar23(){
		//Sisi A = x + 3y + 1. 
		//Sisi B = x + 2y - 2. 
		//Sisi C = 2x - y + 4. 
		var Num = [];
		for(var i=0;i<=20;i++) Num[i]=i+2;
		do{
			Num = RandomMyArray(Num);
			sisiA = Num[0]+"x + "+Num[1]+"y + "+Num[2];
			sisiB = Num[3]+"x + "+Num[4]+"y \u{2212} "+Num[5];
			sisiC = Num[6]+"x \u{2212} "+Num[7]+"y + "+Num[8];
			var addX = Num[0]+Num[3]+Num[6];
			var addY = Num[1]+Num[4]-Num[7];
			var addC = Num[2]-Num[5]+Num[8];
			
			var addYs = Num[1]-Num[4]-Num[7];
			var addCs = Num[2]-Num[5]-Num[8];
		}while(addY>=-1 || addC<0)
		
		var benar = addX+"x \u{2212} "+Math.abs(addY)+"y + "+addC;
		var salah1 = addX+"x + "+Math.abs(addY)+"y \u{2212} "+addC;
		var salah2 = addX+"x \u{2212} "+Math.abs(addY)+"y \u{2212} "+addC;
		var salah3 = addX+"x + "+Math.abs(addY)+"y + "+addC;
		var salah4 = addX+"x + "+Math.abs(addYs)+"y \u{2212} "+Math.abs(addCs);
		var salah5 = addX+"x \u{2212} "+Math.abs(addYs)+"y + "+Math.abs(addCs);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [sisiA,sisiB,sisiC,benar,arrSalah];
	}
	function GetSoal1(){
		const Aljabar = MyAljabar1();
		//[a1,a2,benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		//1. 
		//Hasil panen dari kebun Seno adalah 15 karung jeruk. 
		//Jumlah jeruk dalam setiap karung sama. 
		//Masih terdapat 17 jeruk tersisa di luar karung. 
		//Gunakan bentuk aljabar untuk menentukan total jumlah jeruk hasil panen Seno!
		
		var Buah = NamaBuah();
		var ss
		ss = "Hasil panen dari kebun Seno adalah "+a1+" karung "+Buah[0]+". ";
		ss += "Jumlah "+Buah[0]+" dalam setiap karung sama. ";
		ss += "Masih terdapat "+a2+" "+Buah[0]+" tersisa di luar karung. ";
		ss += "Gunakan bentuk aljabar untuk menentukan total jumlah "+Buah[0]+" hasil panen Seno! ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MyAljabar2();
		//[a1,a2,benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		//2. 
		//Di toko buah, Lia beli 2 karung salak dan 10 buah salak. 
		//Penulisan jumlah buah salak yang dibeli oleh Lia di dalam bentuk aljabar yang benar adalah ...

		var Buah = NamaBuah();
		var Tokoh = NamaTokoh();
		var ss
		ss = "Di toko buah, "+Tokoh[0]+" beli 2 karung "+Buah[0]+" dan 10 buah "+Buah[0]+". "
		ss += "Penulisan jumlah buah "+Buah[0]+" yang dibeli oleh "+Tokoh[0]+" di dalam bentuk aljabar yang benar adalah ...  ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal3(){
		const Aljabar = MyAljabar3();
		//[a1,a2,a3,benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var a3=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		//3. 
		//Dalam kompleks peternakan milik Kimberly, 
		//terdapat 3 unit kandang berisi sapi. 
		//Jumlah sapi di tiap kandang tadi sama. 
		//Selain itu, masih ada 5 kandang domba, dengan jumlah sama di tiap kandangnya. 
		//25 hewan lain di luar kandang. 
		//Tulis bentuk aljabar yang menggambarkan ternak-ternak Kimberly!

		var Tokoh = NamaTokoh();
		var Binatang = NamaBinatang();
		var ss
		
		ss = "Dalam kompleks peternakan milik "+Tokoh[0]+", ";
		ss += "terdapat "+a1+" unit kandang berisi "+Binatang[0]+". ";
		ss += "Jumlah "+Binatang[0]+" di tiap kandang tadi sama. ";
		ss += "Selain itu, masih ada "+a2+" kandang "+Binatang[1]+", dengan jumlah sama di tiap kandangnya. ";
		ss += "Selain itu, masih ada "+a3+" hewan lain di luar kandang. ";
		ss += "Tulis bentuk aljabar yang menggambarkan ternak-ternak "+Tokoh[0]+"!";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal4(){
		const MyData = MyAljabar4();
		//[alj1,alj2,benar,arrSalah];
		var alj1=MyData[0];
		var alj2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//4. 
		//Diketahui x = 5a - 13b dan y = 14a + 9b. 
		//Maka hasil x - y adalah ...
		
		var ss
		
		ss = "Diketahui x = "+alj1+" dan y = "+alj2+". ";
		ss += "Maka hasil x - y adalah ... ";
		
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal5(){
		const MyData = MyAljabar5();
		//[alj1,alj2,benar,arrSalah];
		var alj1=MyData[0];
		var alj2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//5. Hasil pengurangan dari a = 7x + 8y - 10 oleh b = -3x - 6 + 15 adalah ...
		
		var ss
		
		ss = "Hasil pengurangan dari p = "+alj1+" oleh q = "+alj2+" adalah ...";
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal6(){
		const MyData = MyAljabar6();
		//[alj1,alj2,benar,arrSalah];
		var alj1=MyData[0];
		var alj2=MyData[1];
		var alj3=MyData[2];
		var benar=MyData[3];
		var arrSalah=MyData[4];
		
		//6. Hasil penjumlahan dari a = 4p + 2q + 1, b = 3q + 2r - 1, dan c = 3p + 6r - 1 adalah ...
		
		var ss
		
		ss = "Hasil penjumlahan dari a = "+alj1+", b = "+alj2+" dan, c = "+alj3+" adalah ...";
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal7(){
		const MyData = MyAljabar7();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//7. Bentuk sederhana dari ekspresi aljabar 11x + 7y + 5 + 5y - 9 adalah ...
		
		var ss
		
		ss = "Bentuk sederhana dari ekspresi aljabar "+alj+" adalah ...";
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
						
						
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal8(){
		const MyData = MyAljabar8();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//8. Hasil perkalian dari (2x - 5)(x + 3) adalah ...
		
		var ss
		
		ss = "Bentuk sederhana dari ekspresi aljabar "+alj+" adalah ...";
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
						
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal9(){
		const MyData = MyAljabar9();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//9. Bentuk sederhana dari perkalian (x + 1)(x - 4) adalah ...
		
		var ss
		
		ss = "Bentuk sederhana dari ekspresi aljabar "+alj+" adalah ...";
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal10(){
		const MyData = MyAljabar10();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//10. Nilai x untuk memenuhi persamaan 3x + 8 = 17 adalah ...
		var ss
		
		ss = "Nilai x untuk memenuhi persamaan "+alj+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal11(){
		const MyData = MyAljabar11();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//11. Hasil sederhana dari 2(a - 3b + 4) + 4(a + 2b - 3) adalah ...
		
		var ss
		alj = StringMinus(alj);
		ss = "Hasil sederhana dari "+alj+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal12(){
		const MyData = MyAljabar12();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//12. Hasil penyederhanaan ekspresi aljabar 7x + 2 - 3x - 6 adalah ...
		
		var ss
		alj = StringMinus(alj);
		ss = "Hasil penyederhanaan ekspresi aljabar "+alj+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal13(){
		const Aljabar = MyAljabar13();
		//[alj,benar,arrSalah];
		var alj=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//13. Hasil penyederhanaan dari 9 - 3y + 2 + x - 12 adalah ...
		
		var ss
		alj = StringMinus(alj);
		ss = "Hasil penyederhanaan dari "+alj+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
						
						
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal14(){
		const MyData = MyAljabar14();
		//[alj,benar,arrSalah];
		var alj=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//14. Konstanta dari bentuk aljabar 7x² - 4x + 8y - 3 adalah ...
		
		var ss
		ss = "Konstanta dari bentuk aljabar "+alj+" adalah ...";
		ss = StringMinus(ss);
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringMinus(Ar[0]);
		Ar[1] = StringMinus(Ar[1]);
		Ar[2] = StringMinus(Ar[2]);
		Ar[3] = StringMinus(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal15(canv){
		const MyData = MyAljabar15();
		//[a1,a2,b1,b2,benar,arrsalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var b1=MyData[2];
		var b2=MyData[3];
		var benar=MyData[4];
		var arrsalah=MyData[5];
		
		var Ar = [];
		
		Ar[0] = benar;
		Ar[1] = arrsalah[0];
		Ar[2] = arrsalah[1];
		Ar[3] = arrsalah[2];
		
		var ss
		//15. Tentukan bentuk sederhana dari (8 / x^2-4) - (2 / x-1) !
		ss = "Tentukan bentuk sederhana dari bentuk aljabar di atas! ";
		jawab = Ar[0];
		
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		const soal = PropertiAljabar15(canv,ss,[a1,a2,b1,b2],Ar[0],Ar[1],Ar[2],Ar[3]);
		
		return ArFix;
	}
	function GetSoal16(canv){
		const Aljabar = MyAljabar16();
		//[a1,a3,a5,benar,arrsalah];;
		var a1=Aljabar[0];
		var a3=Aljabar[1];
		var a5=Aljabar[2];
		var benar=Aljabar[3];
		var arrsalah=Aljabar[4];
		
		var Ar = [];
		
		Ar[0] = benar;
		Ar[1] = arrsalah[0];
		Ar[2] = arrsalah[1];
		Ar[3] = arrsalah[2];
		
		var ss
		//16. Lakukan penyederhanaan untuk bentuk aljabar ((x^2-9) / x) x (2x / (x-3)) !
		ss = "Lakukan penyederhanaan untuk bentuk aljabar : ";
		jawab = Ar[0];
		
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));

		const soal = PropertiAljabar16(canv,[a1,a3,a5]);
		return ArFix;
	}
	function GetSoal17(canv){
		const Aljabar = MyAljabar17();
		//[a1,a3,a5,benar,arrsalah];;
		var a1=Aljabar[0];
		var a3=Aljabar[1];
		var a5=Aljabar[2];
		var benar=Aljabar[3];
		var arrsalah=Aljabar[4];
		
		var Ar = [];
		
		Ar[0] = benar;
		Ar[1] = arrsalah[0];
		Ar[2] = arrsalah[1];
		Ar[3] = arrsalah[2];
		
		var ss
		//16. Lakukan penyederhanaan untuk bentuk aljabar ((x^2-9) / x) x (2x / (x-3)) !
		ss = "Lakukan penyederhanaan untuk bentuk aljabar : ";
		jawab = Ar[0];
		
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		const soal = PropertiAljabar17(canv,[a1,a3,a5]);
		return ArFix;
	}
	function GetSoal18(canv){
		const Aljabar = MyAljabar18();
		var benar=Aljabar[0];
		var arrsalah=Aljabar[1];
		
		var Ar = [];
		
		Ar[0] = benar;
		Ar[1] = arrsalah[0];
		Ar[2] = arrsalah[1];
		Ar[3] = arrsalah[2];
		
		var ss
		//16. Lakukan penyederhanaan untuk bentuk aljabar ((x^2-9) / x) x (2x / (x-3)) !
		ss = "Tunjukkan hasil penyederhanaan dari bentuk aljabar di atas ! ";
		var jawab = Ar[0];
		
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));

		const soal = PropertiAljabar18(canv);
		return ArFix;
	}
	function GetSoal19(){
		const Aljabar = MyAljabar19();
		//[soal,benar,arrSalah];
		var soal=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//19. Cari himpunan penyelesaian dari pertidaksamaan linear berikut: 3x + 2 >= 26!
		
		var ss
		ss = "Cari himpunan penyelesaian dari pertidaksamaan linear berikut: ";
		ss += soal;
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal20(){
		const Aljabar = MyAljabar20();
		//[soal,benar,arrSalah];
		var soal=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//(a1x² + a2y² + a3z²) - ((b1x² + b2xy - b3x⁶) + (c1xy - c2y² + c3x²) - (d1x² + d2y² - d3x)) !
		// (a1-b1-c3+d1)x² + (a2+c2+d2)y² - (b2+c1)xy - d3x + b3x⁶ + a3z²
		
		var ss
		ss = "Sederhanakan bentuk aljabar: ";
		ss += soal;
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal21(){
		const Aljabar = MyAljabar21();
		//[soal,benar,arrSalah];
		var s1=Aljabar[0];
		var s2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		//21. Joni punya tabungan di bank senilai Rp7.500.000. 
		//Sementara itu nilai tabungan Parjo 5x – 50.000. 
		//Agar nilai tabungan Parjo sama dengan milik Joni, berapakah x?
		
		var Tokoh = NamaTokoh();
		var ss
		ss = ""+Tokoh[0]+" punya tabungan di bank senilai Rp"+s1+",00. ";
		ss += "Sementara itu nilai tabungan "+Tokoh[1]+" "+s2+" ";
		ss += "Agar nilai tabungan "+Tokoh[1]+" sama dengan milik "+Tokoh[0]+", berapakah x?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal22(){
		const Aljabar = MyAljabar22();
		//[a1,a2,x,y,t,benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var x=Aljabar[2];
		var y=Aljabar[3];
		var t=Aljabar[4];
		var benar=Aljabar[5];
		var arrSalah=Aljabar[6];
		
		//22. Mulyono menaiki motor dengan jarak 3x + y kilometer dalam waktu 10 jam. 
		//Adapun x = 70 dan y = 30. 
		//Dengan informasi itu, hitung kecepatan rata-rata per jam laju motor Mulyono!
		
		var Tokoh = NamaTokoh();
		var ss
		ss = ""+Tokoh[0]+" menaiki motor dengan jarak "+a1+"x + y kilometer dalam waktu "+t+" jam. ";
		ss += "Adapun x = "+x+" dan y = "+y+". ";
		ss += "Dengan informasi itu, hitung kecepatan rata-rata per jam laju motor "+Tokoh[0]+"!";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" km/jam<br>B. "+Ar[1]+" km/jam<br>C. "+Ar[2]+" km/jam<br>D. "+Ar[3]+" km/jam</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal23(){
		const Aljabar = MyAljabar23();
		//[sisiA,sisiB,sisiC,benar,arrSalah];
		var sisiA=Aljabar[0];
		var sisiB=Aljabar[1];
		var sisiC=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		//23. Segitiga ABC memiliki 3 sisi berbeda panjangnya. 
		//Sisi A = x + 3y + 1. 
		//Sisi B = x + 2y - 2. 
		//Sisi C = 2x - y + 4. 
		//Hitung keliling segitiga ABC!
		
		var ss
		ss = "Segitiga ABC memiliki 3 sisi berbeda panjangnya.  ";
		ss += "Sisi A = "+sisiA+". ";
		ss += "Sisi B = "+sisiB+". ";
		ss += "Sisi C = "+sisiC+". ";
		ss += "Hitung keliling segitiga ABC!";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	



	var namefunc = [GetSoal1,
					GetSoal2,
					GetSoal3,
					GetSoal4,
					GetSoal5,
					GetSoal6,
					GetSoal7,
					GetSoal8,
					GetSoal9,
					GetSoal10,
					GetSoal11,
					GetSoal12,
					GetSoal13,
					GetSoal14,
					GetSoal15,
					GetSoal16,
					GetSoal17,
					GetSoal18,
					GetSoal19,
					GetSoal20,
					GetSoal21,
					GetSoal22,
					GetSoal23];
					
	var ss
	var dd1=document.getElementById(d1);
	var cc1=document.getElementById(c1);
	var dd2=document.getElementById(d2);
	var cc2=document.getElementById(c2);
	var dd3=document.getElementById(d3);
	var cc3=document.getElementById(c3);
	var dd4=document.getElementById(d4);
	const ctx1 = cc1.getContext("2d");ctx1.reset();ctx1.clearRect(0, 0, 1000, 1000);
	const ctx2 = cc2.getContext("2d");ctx2.reset();ctx2.clearRect(0, 0, 1000, 1000);
	const ctx3 = cc3.getContext("2d");ctx3.reset();ctx3.clearRect(0, 0, 1000, 1000);
	//console.log(cc1,cc2,cc3)
	dd1.innerHTML="";
	dd2.innerHTML="";
	dd3.innerHTML="";
	dd4.innerHTML="";
	cc1.width=0;cc1.height=0;
	cc2.width=0;cc2.height=0;
	cc3.width=0;cc3.height=0;
	
	dd1.removeAttribute("hidden");
	dd2.removeAttribute("hidden");
	dd3.removeAttribute("hidden");
	dd4.removeAttribute("hidden");
	cc1.removeAttribute("hidden");
	cc2.removeAttribute("hidden");
	cc3.removeAttribute("hidden");
	
	
	
	dd1.innerHTML="<p>Bab 3 \u{2192} Aljabar </p>";
	if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". </p>";
		else			dd1.innerHTML+="<p>"+nourut+". </p>";
		cc1.width = 400;
		cc1.height= 320;
		ss = namefunc[no-1](cc1.id); 
		dd4.innerHTML+="Jawaban : "+ss[1]+"<br>";
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". </p>";
		else			dd1.innerHTML+="<p>"+nourut+". </p>";
		cc1.width = 161;
		cc1.height= 52;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";  
		dd4.innerHTML+="Jawaban : "+ss[1]; 
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". </p>";
		else			dd1.innerHTML+="<p>"+nourut+". </p>";
		cc1.width = 158;
		cc1.height= 45;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1]+"<br>";
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". </p>";
		else			dd1.innerHTML+="<p>"+nourut+". </p>";
		cc1.width = 157;
		cc1.height= 89;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else{
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc1);
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}

	function hidingElemen(elem){
		//hiding elemen
		elem.setAttribute("hidden", "hidden");
	}
}
