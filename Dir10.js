function Print10(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	//const mins = "−";
	const mins = "\u{2212}";
	//const symU = "∪";
	const symU = "\u{222A}";//"\u{00B0}";
	//const symN = "∩";
	const symN = "\u{2229}";//"\u{00B0}";
	//const sup2 = "∈"; element
	const supE = "\u{2208}";
	const p0 = "\u{2070}"
	const p1 = "\u{00B2}";//"\u{185}"
	const p2 = "\u{00B2}";//"\u{178}";
	const p3 = "\u{00B3}";//"\u{179}"
	const p4 = "\u{2074}"
	const p5 = "\u{2075}"
	const p6 = "\u{2076}"
	const p7 = "\u{2077}"
	const p8 = "\u{2078}"
	const p9 = "\u{2079}"
	//\u{221A} akar √
	var pangkat = [p0,p1,p2,p3,p4,p5,p6,p7,p8,p9];
	//var pangkat = [p9,p9,p9,p9,p9,p9,p9,p9,p9,p9];
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
	function Mods(m,n){
		var m0b = m;
		var m0 = m;
		var ct = 0;
		do{
			m0b = m0;
			m0-=n;
			ct++;
		}while(m0>=0);
		
		var sisa = Math.abs(m0b);
		return sisa;
	}
	function CariFPB(ar){
		//https://www.ketutrare.com/2019/05/contoh-aplikasi-fpb-dan-kpk-menggunakan-bahasa-c.html
		var min = 0;
		var max = 0;
		for(var i=0;i<ar.length;i++){
			min = Math.min(min,ar[i]);
			max = Math.max(max,ar[i]);
		}
		var iter = 0;
		var fpb = 1;
		var f = [];
		do {
			iter++;
			var ff = 1;
			for(var i=0;i<ar.length;i++){
				f[i] = Mods(ar[i],iter)==0;
				ff *= f[i];
			}
			if (ff){
				fpb = iter;
			}
			var fakhir = iter==max;
		}while (!fakhir);
		return fpb;
	}
	function SplitKomaString(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		var gg = "";
		for (var i=0;i<len;i++){
			if(strff.substr(i,1)==".")	gg += ",";
			else 						gg += strff.substr(i,1);
		}
		return gg;
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
			for (var j=0; j<3; j++){
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
	function MySegitigaDanPythagoras1(){
		//pythagoras
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[9,40,41]]
		Tripel = RandomMyArray(Tripel);
		
		var BC = Tripel[0][0];
		var AC = Tripel[0][1];
		var AB = Tripel[0][2];
		
		//"(\u0006"
		var benar = BC;
		var salah1 = BC+1;
		var salah2 = BC+2;
		var salah3 = BC+3;
		var salah4 = BC-1;
		var salah5 = BC-2;
		var salah6 = BC-3;
		var salah7 = BC+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [AC,AB,benar,arrSalah];
	}
	function MySegitigaDanPythagoras2(){
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		var arkali = [2,3,4,5,6,7];
		arkali = RandomMyArray(arkali);
		do{
			var aa = RandomAngkaAtoB(1,5);
			var bb = RandomAngkaAtoB(1,5);
			
			var a1 = aa*arkali[0];
			var a2 = bb*arkali[0];
			var a3 = RandomAngkaAtoB(10,16);
			var b1 = RandomAngkaAtoB(10,16);
			var b2 = b1*arkali[2];
			var b3 = RandomAngkaAtoB(10,16);
			var c1 = aa*arkali[1];
			var c2 = bb*arkali[1];
			var c3 = RandomAngkaAtoB(10,16);
			var d1 = RandomAngkaAtoB(10,16);
			var d2 = d1*arkali[2];
			var d3 = RandomAngkaAtoB(10,16);
			
			var pgl1 = "3 cm, 4 cm, 5 cm";
			var pgl2 = "7 cm, 8 cm, 9 cm";
			var pgl3 = "7 cm, 24 cm, 25 cm";
			var pgl4 = "5 cm, 12 cm, 15 cm";
			
			
		}while (aa==bb)
		var arrSoalJawab = [[pgl1,pgl3,pgl2,pgl4,"1 dan 2","3 dan 4","1 dan 3","2 dan 4"],
							[pgl1,pgl2,pgl3,pgl4,"1 dan 3","2 dan 4","1 dan 2","3 dan 4"],
							[pgl1,pgl2,pgl4,pgl3,"1 dan 4","2 dan 3","1 dan 3","2 dan 4"],
							[pgl2,pgl1,pgl4,pgl3,"2 dan 4","1 dan 3","1 dan 2","3 dan 4"],
							[pgl2,pgl4,pgl1,pgl3,"3 dan 4","1 dan 2","1 dan 3","2 dan 4"]
							];
		arrSoalJawab = RandomMyArray(arrSoalJawab);
		var fix1 = arrSoalJawab[0][0]
		//var soal = a1+"x + "+a2+" "+arDari[0]+" "+a4;
		//\u{2212}
		var benar = arrSoalJawab[0][4];
		var salah1 = arrSoalJawab[0][5];
		var salah2 = arrSoalJawab[0][6];
		var salah3 = arrSoalJawab[0][7];
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [arrSoalJawab[0][0],arrSoalJawab[0][1],arrSoalJawab[0][2],arrSoalJawab[0][3],benar,arrSalah];
	}
	function MySegitigaDanPythagoras3(){
		//pythagoras
		var Tripel =	[[3,4,5],
						[4,3,5],
						[15,8,17],
						[8,15,17]]
		Tripel = RandomMyArray(Tripel);
		
		var times = RandomAngkaAtoB(0,3);
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var BC = Tripel[0][0];
		var AC = Tripel[0][1];
		var AB = Tripel[0][2];
		
		var AB = Tripel[0][1];
		var AF = Tripel[0][0];
		var AC = Tripel[0][2];
		var DF = AC;
		var BD = AB/2;
		var BE = BD;
		var EF = AF;
		var ArSisi = [AB,AF,AC,DF,SplitKomaString(AB/2),SplitKomaString(AB/2),EF];
		var Keliling = AC+AB+BD+EF-BD+EF+DF;
		
		var _s1 = Keliling-(EF-BD);
		var _s2 = AC+AB+BD+BE+EF+DF;
		var _s3 = Keliling-2;
		//"(\u0006"
		var benar = SplitKomaString(Keliling);
		var salah1 = SplitKomaString(_s1);
		var salah2 = SplitKomaString(_s2);
		var salah3 = SplitKomaString(_s3);
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras4(){
		//pythagoras
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17]]
		Tripel = RandomMyArray(Tripel);
		
		var times = RandomAngkaAtoB(0,2);
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = Tripel[0][1]-Tripel[0][0];
		var BC = Tripel[0][0];
		var CD = Tripel[0][0];
		var AD = Tripel[0][2];
		var AC = Tripel[0][1];
		var ArSisi = [AB,BC,CD,AD,AC];
		var _s0 = Tripel[0][1]-Tripel[0][0];
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+1;
		var salah2 = _s0+2;
		var salah3 = _s0+3;
		var salah4 = _s0-1;
		var salah5 = _s0-2;
		var salah6 = _s0-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras5(){
		//pythagoras
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = beda;
		var BC = Tripel[0][2];
		var CD = beda+Tripel[0][0];
		var AD = Tripel[0][1];
		var ArSisi = [AB,BC,CD,AD];
		var _s0 = BC;
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+1;
		var salah2 = _s0+2;
		var salah3 = _s0+3;
		var salah4 = _s0-1;
		var salah5 = _s0-2;
		var salah6 = _s0-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras6(){
		//pythagoras
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = beda;
		var BC = beda;
		var CD = Tripel[0][2];
		var DE = beda+2*Tripel[0][0];
		var EF = Tripel[0][2];
		var AF = beda;
		var ArSisi = [AB,BC,CD,DE,EF,AF];
		var _s0 = Tripel[0][1]*(AB+DE)/2 + beda**2;
		//"(\u0006"
		var benar = _s0;
		var salah1 = Tripel[0][1]*(AB+DE)/2;
		var salah2 = beda**2;
		var salah3 = _s0+2;
		var salah4 = salah1+2;
		var salah5 = salah2+2;
		var salah6 = salah1-2;
		var salah7 = salah2-2;
		var salah8 = _s0-beda;
		var salah9 = _s0+beda;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras7(){
		//pythagoras
		var Tripel =	[[9,12,15,8,17],[12,9,15,8,17],[7,24,25,60,65],[24,7,25,60,65]]
		/*var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		*/
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		//var beda = RandomAngkaAtoB(10,8);
		//beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = Tripel[0][0];
		var BC = Tripel[0][1];
		var CD = Tripel[0][3];
		var AD = Tripel[0][4];
		var AC = Tripel[0][2];
		var ArSisi = [AB,BC,CD,AD,AC];
		var _s0 = BC;
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+2*times;
		var salah2 = _s0+3*times;
		var salah3 = _s0+4*times;
		var salah4 = _s0-2*times;
		var salah5 = _s0-3*times;
		var salah6 = _s0-4*times;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras8(){
		//pythagoras
		var Tripel =	[[5,12,13,10,24,26],
						 [12,5,13,24,10,26],[12,5,13,24,18,30],[12,5,13,24,7,25],
						 [4,3,5,8,15,17],[4,3,5,8,6,10],
						 [3,4,5,6,8,10],
						 [6,8,10,12,5,13]];
		/*var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		*/
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		//beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = beda+Tripel[0][4];
		var BC = Tripel[0][5];
		var CD = beda;
		var DE = Tripel[0][2];
		var AD = Tripel[0][3];
		var ArSisi = [AB,BC,CD,DE,AD];
		var Luas = Tripel[0][1]*Tripel[0][3]*1/2 + 1/2*(AB+CD)*AD;
		var _s0 = AD;
		//"(\u0006"
		var benar = Luas;
		var salah1 = Tripel[0][1]*Tripel[0][3]*1/2;
		var salah2 = 1/2*(AB+CD)*AD;
		var salah3 = Tripel[0][1]*Tripel[0][3] + 1/2*(AB+CD)*AD;
		var salah4 = Tripel[0][1]*Tripel[0][3]*2 + 1/2*(AB+CD)*AD;
		var salah5 = Tripel[0][1]*Tripel[0][3]*2;
		var salah6 = 2*(AB+CD)*AD;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras9(){
		//pythagoras
		var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];
		/*var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		*/
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		//beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = Tripel[0][3]-Tripel[0][0];
		var BC = Tripel[0][0];
		var CD = Tripel[0][1];
		var BD = Tripel[0][2];
		var AD = Tripel[0][5];
		var ArSisi = [AB,BC,CD,BD,AD];
		var _s0 = AB;
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+1;
		var salah2 = _s0+2;
		var salah3 = _s0+3;
		var salah4 = _s0-1;
		var salah5 = _s0-2;
		var salah6 = _s0-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras10(){
		//pythagoras
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = beda;
		var BE = Tripel[0][0];
		var CE = Tripel[0][1];
		var BC = Tripel[0][2];
		var CD = AB;
		var AD = BC;
		var ArSisi = [AB,BE,CE,BC,CD,AD];
		var _s0 = CE;
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+1;
		var salah2 = _s0+2;
		var salah3 = _s0+3;
		var salah4 = _s0-1;
		var salah5 = _s0-2;
		var salah6 = _s0-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras11(){
		//pythagoras
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AE = beda;
		var AB = Tripel[0][2];
		var BC = beda;
		var CD = Tripel[0][0];
		var DE = Tripel[0][1];
		var CE = AB;
		var ArSisi = [AE,AB,BC,CD,DE,CE];
		var _s0 = AE+AB+BC+CD+DE;
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+1;
		var salah2 = _s0+2;
		var salah3 = _s0+3;
		var salah4 = _s0-1;
		var salah5 = _s0-2;
		var salah6 = _s0-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras12(){
		//pythagoras
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda1 = RandomAngkaAtoB(2,8);
		var beda2 = RandomAngkaAtoB(2,beda1-3);
		var beda3 = RandomAngkaAtoB(2,Tripel[0][1]-3);
		beda1*=times;
		beda2*=times;
		beda3*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = Tripel[0][1];
		var BC = beda1+Tripel[0][0];
		var CD = Tripel[0][2];
		var FG = beda2;
		var GH = beda3;
		var ArSisi = [AB,BC,CD,FG,GH];
		var _s0 = ((beda1+BC)*AB/2 - FG*GH);
		//"(\u0006"
		var benar = _s0;
		var salah1 = (beda1+BC)*AB;
		var salah2 = FG*GH;
		var salah3 = FG*GH/2;
		var salah4 = ((beda1+BC)*AB - FG*GH);
		var salah5 = ((beda1+BC)*AB/2 - FG*GH);
		var salah6 = ((beda1+BC)*AB/2 - FG*GH/2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras13(){
		//13. Seorang pengamat berada pada puncak menara dengan ketinggian 120 m. 
		//Ia melihat perahu A dengan jarak 130 m dan melihat perahu B dengan jarak 150 m. 
		//Jika dasar menara, perahu A, dan perahu B segaris, 
		//maka jarak perahu A ke perahu B adalah ...
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];
		/*var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		*/
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var beda = RandomAngkaAtoB(10,8);
		//beda*=times;
		for(var i=0;i<Tripel[0].length;i++){
			Tripel[0][i]*=times;
		}
		
		var AB = Tripel[0][3]-Tripel[0][0];
		var BC = Tripel[0][0];
		var CD = Tripel[0][1];
		var BD = Tripel[0][2];
		var AD = Tripel[0][5];
		var ArSisi = [AB,BC,CD,BD,AD];
		var _s0 = AB;
		//"(\u0006"
		var benar = _s0;
		var salah1 = _s0+1;
		var salah2 = _s0+2;
		var salah3 = _s0+3;
		var salah4 = _s0-1;
		var salah5 = _s0-2;
		var salah6 = _s0-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras14(){
		//13. Seorang pengamat berada pada puncak menara dengan ketinggian 120 m. 
		//Ia melihat perahu A dengan jarak 130 m dan melihat perahu B dengan jarak 150 m. 
		//Jika dasar menara, perahu A, dan perahu B segaris, 
		//maka jarak perahu A ke perahu B adalah ...
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		var harga = 1000*RandomAngkaAtoB(3,7);
		var N = RandomAngkaAtoB(2,4);
		
		var dia1 = 2*Tripel[0][0];
		var dia2 = 2*Tripel[0][1];
		var sisi = Tripel[0][2];
		var kel1 = 4*sisi;
		var kelN = N*kel1;
		var Total = kelN*harga;
		//"(\u0006"
		var benar = Total;
		var salah1 = Total+harga;
		var salah2 = kel1*harga;
		var salah3 = (N-1)*kel1*harga;
		var salah4 = kel1*harga+harga;
		var salah5 = (N-1)*kel1*harga+harga;
		var salah6 = dia1*dia2*harga;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1);
		
		return [dia1,dia2,harga,N,benar,arrSalah];
	}
	function MySegitigaDanPythagoras15(){
		
		
		
		var Tripel =	[[1,2,3,4,"Sebuah segitiga tumpul"],
						[2,4,5,6,"Sebuah segitiga lancip dan dua buah segitiga tumpul"],
						//[3,4,6,7,"Sebuah segitiga lancip dan dua buah segitiga tumpul"],
						[4,5,6,7,"Tiga buah segitiga lancip dan sebuah segitiga tumpul"]]
		
		
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,2);
		for(var i =0;i<4;i++) 	Tripel[0][i]*=times;
		
		var Jawaban = ["Sebuah segitiga lancip dan sebuah segitiga tumpul",
						"Sebuah segitiga tumpul",
						"Dua buah segitiga tumpul",
						"Dua buah segitiga lancip",
						"Tiga buah segitiga tumpul",
						"Tiga buah segitiga lancip",
						"Sebuah segitiga lancip dan dua buah segitiga tumpul",
						"Dua buah segitiga lancip dan sebuah segitiga tumpul",
						"Tiga buah segitiga lancip dan sebuah segitiga tumpul"
						];
		//"(\u0006"
		var benar = Tripel[0][4];
		var salah1 = Jawaban[0];
		var salah2 = Jawaban[1];
		var salah3 = Jawaban[2];
		var salah4 = Jawaban[3];
		var salah5 = Jawaban[4];
		var salah6 = Jawaban[5];
		var salah7 = Jawaban[6];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		
		return [Tripel[0],benar,arrSalah];
	}
	function MySegitigaDanPythagoras16(){
		
		var jawList = [
		"Jika a\u{00B2} = b\u{00B2} \u{2212} c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika a\u{00B2} = b\u{00B2} \u{2212} c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika a\u{00B2} = b\u{00B2} \u{2212} c\u{00B2}, maka sudut C = 90\u{00B0}",
		
		"Jika a\u{00B2} = c\u{00B2} \u{2212} b\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika a\u{00B2} = c\u{00B2} \u{2212} b\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika a\u{00B2} = c\u{00B2} \u{2212} b\u{00B2}, maka sudut C = 90\u{00B0}",

		"Jika b\u{00B2} = a\u{00B2} \u{2212} c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} \u{2212} c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} \u{2212} c\u{00B2}, maka sudut C = 90\u{00B0}",
		
		"Jika b\u{00B2} = c\u{00B2} \u{2212} a\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika b\u{00B2} = c\u{00B2} \u{2212} a\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika b\u{00B2} = c\u{00B2} \u{2212} a\u{00B2}, maka sudut C = 90\u{00B0}",
		
		"Jika c\u{00B2} = a\u{00B2} \u{2212} b\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} \u{2212} b\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} \u{2212} b\u{00B2}, maka sudut C = 90\u{00B0}",
		
		"Jika c\u{00B2} = b\u{00B2} \u{2212} a\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika c\u{00B2} = b\u{00B2} \u{2212} a\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika c\u{00B2} = b\u{00B2} \u{2212} a\u{00B2}, maka sudut C = 90\u{00B0}",
		
		"Jika a\u{00B2} = b\u{00B2} + c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika a\u{00B2} = b\u{00B2} + c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika a\u{00B2} = b\u{00B2} + c\u{00B2}, maka sudut C = 90\u{00B0}",

		"Jika b\u{00B2} = a\u{00B2} + c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} + c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} + c\u{00B2}, maka sudut C = 90\u{00B0}",
		
		"Jika c\u{00B2} = a\u{00B2} + b\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} + b\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} + b\u{00B2}, maka sudut C = 90\u{00B0}"
		]
		
		var jawBenar = [
		"Jika a\u{00B2} = b\u{00B2} \u{2212} c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika a\u{00B2} = c\u{00B2} \u{2212} b\u{00B2}, maka sudut C = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} \u{2212} c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika b\u{00B2} = c\u{00B2} \u{2212} a\u{00B2}, maka sudut C = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} \u{2212} b\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika c\u{00B2} = b\u{00B2} \u{2212} a\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika a\u{00B2} = b\u{00B2} + c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} + c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} + b\u{00B2}, maka sudut C = 90\u{00B0}"
		]
		var jawSalah = [
		"Jika a\u{00B2} = b\u{00B2} \u{2212} c\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika a\u{00B2} = b\u{00B2} \u{2212} c\u{00B2}, maka sudut C = 90\u{00B0}",
		"Jika a\u{00B2} = c\u{00B2} \u{2212} b\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika a\u{00B2} = c\u{00B2} \u{2212} b\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} \u{2212} c\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika b\u{00B2} = a\u{00B2} \u{2212} c\u{00B2}, maka sudut C = 90\u{00B0}",
		"Jika b\u{00B2} = c\u{00B2} \u{2212} a\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika b\u{00B2} = c\u{00B2} \u{2212} a\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} \u{2212} b\u{00B2}, maka sudut B = 90\u{00B0}",
		"Jika c\u{00B2} = a\u{00B2} \u{2212} b\u{00B2}, maka sudut C = 90\u{00B0}",
		"Jika c\u{00B2} = b\u{00B2} \u{2212} a\u{00B2}, maka sudut A = 90\u{00B0}",
		"Jika c\u{00B2} = b\u{00B2} \u{2212} a\u{00B2}, maka sudut C = 90\u{00B0}"
		]
		var pil = [[1,2,3,4,"(1) dan (2)"], [1,3,2,4,"(1) dan (3)"], [1,4,2,3,"(1) dan (4)"], [2,3,1,4,"(2) dan (3)"], [2,4,1,3,"(2) dan (4)"], [3,4,1,2,"(3) dan (4)"]];
		var pilAda = ["(1) dan (2)","(1) dan (3)","(1) dan (4)","(2) dan (3)","(2) dan (4)","(3) dan (4)"];
		jawBenar = RandomMyArray(jawBenar);
		jawSalah = RandomMyArray(jawSalah);
		pil = RandomMyArray(pil);
		
		var soal1 = jawBenar[0];
		var soal2 = jawBenar[1];
		var soal3 = jawBenar[2];
		var soal4 = jawBenar[3];
		ArrSoal = [soal1,soal2,soal3,soal4];
		
		ArrSoal[pil[0][2]-1]=jawSalah[0];
		ArrSoal[pil[0][3]-1]=jawSalah[1];

		//"(\u0006"
		var benar = pil[0][4];
		var salah1 = pilAda[0];
		var salah2 = pilAda[1];
		var salah3 = pilAda[2];
		var salah4 = pilAda[3];
		var salah5 = pilAda[4];
		var salah6 = pilAda[5];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		
		return [ArrSoal,benar,arrSalah];
	}
	function MySegitigaDanPythagoras17(){
		
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		Tripel = RandomMyArray(Tripel);				
		var times = RandomAngkaAtoB(0,5);
		//for(var i =0;i<4;i++) 	Tripel[0][i]*=times;
		var hipotenusa = times*Tripel[0][2];
		//17.	Sebuah segitiga mempunyai dua sisi yang panjangnya 4x dan 3x. 
		//Jika panjang hipotenusa adalah 20 cm, 
		//maka keliling segitiga tersebut adalah ...
		var keliling = times*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = 1*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		var salah2 = 2*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		var salah3 = 3*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		var salah4 = 4*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		var salah5 = 5*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		var salah6 = 6*(Tripel[0][0]+Tripel[0][1]+Tripel[0][2]);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		
		return [Tripel[0],hipotenusa,benar,arrSalah];
	}
	function MySegitigaDanPythagoras18(){
		//pythagoras
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		
		Tripel = RandomMyArray(Tripel);
		var times = 2*RandomAngkaAtoB(0,4);
		for(var i=0;i<Tripel[0].length;i++) Tripel[0][i]*=times;
		var sisi = Tripel[0][2];
		var RS = Tripel[0][2]/2+"\u{221A}3";
		//"(\u0006"
		var benar =  Tripel[0][2]/2+"\u{221A}3";
		var salah1 =  Tripel[0][2]/2+"\u{221A}2";
		var salah2 =  Tripel[0][2]+"\u{221A}3";
		var salah3 = Tripel[0][2]+"\u{221A}2";
		var salah4 = Tripel[0][1];
		var salah5 = Tripel[0][0];
		var salah6 = Tripel[0][1]/2;
		var salah7 = Tripel[0][0]/2;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		return [sisi,benar,arrSalah];
	}
	function MySegitigaDanPythagoras19(){
		//13. Seorang pengamat berada pada puncak menara dengan ketinggian 120 m. 
		//Ia melihat perahu A dengan jarak 130 m dan melihat perahu B dengan jarak 150 m. 
		//Jika dasar menara, perahu A, dan perahu B segaris, 
		//maka jarak perahu A ke perahu B adalah ...
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		/*var Tripel =	[[5,12,13,16,12,20],
						 [6,8,10,15,8,17],
						 [16,30,34,40,30,50]];*/
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[4,3,5],
						[12,5,13],
						[24,7,25],
						[15,8,17]]
		
		Tripel = RandomMyArray(Tripel);
		var times = RandomAngkaAtoB(0,4);
		var N = RandomAngkaAtoB(2,4);
		
		var dia1 = 2*Tripel[0][0];
		var dia2 = 2*Tripel[0][1];
		var sisi = Tripel[0][2];
		var kel = 4*sisi;
		var Luas = dia1*dia2/2;
		//"(\u0006"
		var benar = kel;
		var salah1 = 4*(Tripel[0][2]+1);
		var salah2 = 4*(Tripel[0][2]-1);
		var salah3 = 4*(Tripel[0][2]+2);
		var salah4 = 4*(Tripel[0][2]-2);
		var salah5 = 2*(dia1+dia2);
		var salah6 = 4*(dia1+dia2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		return [Luas,dia1,benar,arrSalah];
	}
	function MySegitigaDanPythagoras20(){
		var sisi = RandomAngkaAtoB(2,40);
		var Luas = sisi*sisi;
		
		var diabenar = [sisi+"\u{221A}3", "\u{221A}"+StringRibuan(3*sisi*sisi)];
		diabenar = RandomMyArray(diabenar);
		
		//"(\u0006"
		//\u{221A}
		var benar = diabenar[0];
		var salah1 = 2*sisi+"\u{221A}2";
		var salah2 = 2*sisi+"\u{221A}3";
		var salah3 = (sisi+1)+"\u{221A}3";
		var salah4 = "\u{221A}"+StringRibuan(sisi*sisi);
		var salah5 = "\u{221A}"+StringRibuan(sisi*sisi);
		var salah6 = "\u{221A}"+StringRibuan(3*(sisi+sisi));
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		return [Luas,benar,arrSalah];
	}
	function GambarPytha1(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
		}
		return 0;
	}
	function GambarPytha3(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",90,85);
			ctx.fillText(arr[6]+" cm",210,175);
			ctx.textAlign = "right";
			ctx.fillText(arr[2]+" cm",90,150);
			ctx.fillText(arr[4]+" cm",150,60);
			ctx.textAlign = "left";
			ctx.fillText(arr[3]+" cm",210,80);
			ctx.fillText(arr[5]+" cm",165,130);
		}
		return 0;
	}
	function GambarPytha4(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			//ctx.fillText(arr[0]+" cm",90,85);
			//ctx.fillText(arr[6]+" cm",210,175);
		}
		return 0;
	}
	function GambarPytha5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",120,20);
			ctx.fillText(arr[2]+" cm",140,140);
			ctx.textAlign = "right";
			ctx.fillText(arr[3]+" cm",40,80);
		}
		return 0;
	}
	function GambarPytha6(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",110,20);
			ctx.fillText(arr[3]+" cm",110,190);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",180,120);
		}
		return 0;
	}
	function GambarPytha7(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",45,90);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",250,120);
			ctx.textAlign = "left";
			ctx.fillText(arr[3]+" cm",140,25);
		}
		return 0;
	}
	function GambarPytha8(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAACQCAYAAADQiC2MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAnqSURBVHhe7d1LSFRRHMfxU1kmWeGqdKH0Qogei8RapULbXuA6a9EqEqLANkHQRqEIXAUuSlcthB4IbQKtVQ9duZIekojWSlKh7GX+T/faJKbzuHfuOf/7/cBlZq6Di5n5zf+c87/3zpr5BQaAGmuDWwBKEGpAGUINKEOoAWUINaAMoQaUIdSAMoTaM5OTk6ampsasWbPmn23Tpk1maGgoeBZER0fH4usj9+/cuZOK14hQe6aystK8ePHCHDx40AwODho5dki25uZmc/ToUYIdaGlpMU+ePDEzMzP29RGXL1+2t9oRaiW6u7ttsDs7O4M96SVfbP39/ebWrVumvLzc7mtrazP37983ExMT9rFmhFoRCfXAwIAdoqfZ06dPzc6dO01tbW2w54/jx4/bTTtCrUhVVZWpqKgIHiGtCLUiMrScmpoKHiGtCLUivb29prGx0S6mpdmxY8fM+/fvzcjISLDnD5lry/REO0KthKz2SqhbW1uDPel16NAh09TUZFe7Z2dn7T5ZZ5BFxLq6OvtYM86n9ox8OI8cOWLGxsaCPX9UV1fbVlfaq3Qm+aLr6emx99P0+hBqQBmG34AyhBpQhlADyhBqQBlCDShDqAFlCDWgDKEGlOHgE8/t2bPHjI+PB4+wnL1796bq4hGE2lOHDx82r169svflcj2lpaX2Pv41Nze3eHWYtCDUnjl9+rR59OiR/ZBu27bNfPz4MfgL/ke+9Hbt2mXevn0b7NGNObUnrly5YtatW2cePnxoNm/ebENNoLMjgX737l3wSD9C7bh79+6Z9evX2+ttbdiwwbx588Z8/vw5+CuyEVbo3bt321vtCLWj5IO4ceNGc+7cOfv47t275suXL6n5YEYtTdWaObWDtm7daqanp83atWvNpUuXzM2bN4O/oBBpmVsTaods377dfPr0yX74Tp48aR48eBD85f927Nhhb0dHR+0t/k9GOVKttX/kGX47QHrNEmQJdH19vfn161dWgUZu0jK3JtQJkl6zhFk+bPJBkwry8uXL4K+IQxrm1oQ6AdJrlvmyHDwivWYJs6xqI35pqNaEuojoNbtBe7VmoawIpNd8/vx58+PHD9umGh4epjWVMM0r4VTqGMkHhl6zmzRXa0IdkaU/Sie9ZlnV/v79u72ovNyePXs2+CuSpnluzfA7Yvn0mpEMCbTGvjWhjohU5fDbX3rNtKb8oHFuzfC7QEn3muWIsvCoMuRO49yaUOeJXrMOGufWhDpH9Jr10VatCXWWOK9ZL23VmlCvQt5wes36aarWrH6vgPOa00XLSjihXga95nTS0rcm1Bl86DVfv349uLeybJ+Hf2mo1sypF3BeM0Ia5taprtRcQxvL8b1ap7JSa+o1c0RZ9Hyv1qkKNb1mZCOs0L62LVMRanmT6DUjFz5Xa/Wh5rxm5MPnaq021NJrlgWPmZkZc+rUKfPz508OHkFOfK3W6la/Oa8ZUfJxJVxNpabXjDj4WK29DzXnNSNOPs6tvQ015zWjWHyr1t6FOrPXLLf0mhE336q1N6GWF3Zpr/nr16+p7zVzRFlx+FStvQg1vWYkzadq7XSo6TXDJb5U66xC3dHRYcO1dGtpaQmeES2pyvL/+b1muMSXap1VqNva2kx7e7s5c+aMXWWWbWJiwlRXVwfPiAa9ZrjOh2qd9/C7srLS3LhxI3hUGHrN+RsdHbUbisOHap1XqOXH4K5duxY8yh+9ZvjI9WqdU6h7enrs8LiqqsqMjY0Fe3NHrxk+c71a5xTqcE6d73xaXoyysjJ6zfCey9U6r+F3PvPpsNf87ds3es3wnsvVOu+FMnHx4kUzNDQUPFoeveZ4cURZclyt1lmdTy196qtXrwaP/mpoaDB9fX2mvLw82PPXgQMHzPDwsL0vi2GyECampqbsbaaKiorg3l88L7vnhYFmBTwZUrAk3GHldkFWlVr61JL9pdvAwMCygQbSwsVqHfuVT/gJm3hRqZPnWrUuaE6dDek7y/eGDL+lHy1DcelPA1q4Vq1jr9SZ5Jts//79to1VUlJiurq6WAGHCi5V69grdSZZ/pfrbUt/Wki/Ws6RdmmRAciHS9W6qJV6KRmG3759256FtWXLFo4qg9dcqdaJhjrED9VBAxmJSrVOOlJOhDokp17KmVpCXiDO1IJvXKjWRZ1Tr0bOnZbvGAm0vCjyAknQ8X8cUeYWF+bWToU6JBU6HIpL5ZZzrWWIDrgurNBJHhPuZKhD9Ljho6SrtdOhDsmquFRv+U3p8BxsOScbcFHS1dqLUAt5gehxwxdJVmunVr9zQY8brktqJdzbUIfoccNVMrpMom/tfahD9LjhoiSqtTdz6tXQ44aLkphbqwl1iB43XJLESri6UIfS0uPmiDL3Fbtaqw11iB43klbsaq0+1EJeTHrcSFIxq3UqQh2Sq6xk/sa1XIdcrkcOxK2Y1TpVoQ7Jdcfl+uNyHXK5HrmslMsFEoE4Fataq+lTF8KnHndTU1Nwb2X9/f3BPbikGH3rVFbqpehxo1iKUa2p1MvgWuWIU9zVmkq9DM7jRpzirtaEegX0uBGHuFfCCfUqXO9xc0SZn+Ks1oQ6S/S4EaU4qzWhzhE9bkQlrmpNqPMkK+Jy1ZX6+vrFlXKp3kC24qrWhLpA9LhRiDiqNX3qiNHjRq6i7ltTqSNGjxu5irpaE+qYhD1u6W3T48ZKop5bE+oYyZskP7DPedxYTZTVmjl1EXGtcqwkqrk1oU5AlNcqD48mGx0dtbfwl4zspFoXGkmG3wmgx43lRDW3JtQJoseNpaKYWxNqB3CtcoSiqNaE2iH0uCEKrdYslDlKvrH37dtn5ubmTElJienq6rJniiEdClkJp1I7arked1lZWV5vMvxTSLWmUnuCHnf65FutCbVn+D3u9Mi3b02oPZV5rXL5Ri8tLbX3oYtMwXKt1oTac3LQyvj4ePAI2shCqUy5ckGoAWVY/QaUIdSAMoQaUIZQe66lpcVu0GF2dtY0NjbajkbmJvvkb9kg1B6bnJy0tx8+fFi8D7+Vl5ebvr4+09DQYB4/fmx71LLV1NSYCxcuBM9aGaH22MTEhD18VN7wwcHBYC80am1ttUcRZlOtCbXHRkZGTG1trWlubja9vb3BXmjU2dlpf+ZJKvlqCLWn5Bt7enraVFZWmrq6OobgCp04cWJxTi26u7vt7WoItaekSsuP9ckbXlVVZZ49e8YQXJnMObWQaVY2X9yE2lOvX782z58/X3zT5QPAEFwvmVPL+yzrKKsh1B6Sobcc7y3z6RBDcN1kTh2Oyla1kH54ZOGber66ulrGY/Pt7e3B3nl7X/bJtlC1g73wzczMzHxDQ8Pie5m5Zfu+ckIHoAzDb0AZQg0oQ6gBZQg1oAyhBpQh1IAqxvwGyg0XjqdOqu0AAAAASUVORK5CYII=";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",170,140);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",148,20);
			ctx.textAlign = "right";
			ctx.fillText(arr[3]+" cm",70,40);
		}
		return 0;
	}
	function GambarPytha9(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[3]+" cm",185,90);
			ctx.textAlign = "right";
			ctx.fillText(arr[4]+" cm",100,90);
		}
		return 0;
	}
	function GambarPytha10(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			//ctx.textAlign = "center";
			//ctx.fillText(arr[0]+" cm",170,140);
			//ctx.textAlign = "center";
			//ctx.fillText(arr[2]+" cm",148,20);
			//ctx.textAlign = "right";
			//ctx.fillText(arr[3]+" cm",70,40);
		}
		return 0;
	}
	function GambarPytha11(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",70,165);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",135,118);
			ctx.textAlign = "left";
			ctx.fillText(arr[3]+" cm",110,50);
		}
		return 0;
	}
	function GambarPytha12(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",50,85);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",160,170);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",260,80)
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",120,60);
			ctx.textAlign = "left";
			ctx.fillText(arr[4]+" cm",88,40);
		}
		return 0;
	}
	function GambarPytha18(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			/*
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",50,85);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",160,170);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",260,80)
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",120,60);
			ctx.textAlign = "left";
			ctx.fillText(arr[4]+" cm",88,40);
			*/
		}
		return 0;
	}

	function GetSoal1(canv){
		const Aljabar = MySegitigaDanPythagoras1();
		//[AC,AB,benar,arrSalah];
		var AC=Aljabar[0];
		var AB=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		const DrawPGL = GambarPytha1(canv,[AC,AB]);
		
		var ss
		ss = "Perhatikan gambar di atas! ";
		ss += "Panjang BC adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MySegitigaDanPythagoras2();
		//[pgl1,pgl2,pgl3,pgl4,benar,arrSalah];
		var pgl1=Aljabar[0];
		var pgl2=Aljabar[1];
		var pgl3=Aljabar[2];
		var pgl4=Aljabar[3];
		var benar=Aljabar[4];
		var arrSalah=Aljabar[5];
		
		
		var ss
		ss = "Berikut ini adalah ukuran sisi-sisi dari empat buah segitiga : <br>";
		ss += "(1) "+pgl1+"<br>";
		ss += "(2) "+pgl2+"<br>";
		ss += "(3) "+pgl3+"<br>";
		ss += "(4) "+pgl4+"<br>";
		ss += "Segitiga yang berbentuk segitiga siku-siku ditunjukan oleh nomor ... ";
		
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
	function GetSoal3(canv){
		const Aljabar = MySegitigaDanPythagoras3();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha3(canv,ArSisi);
		
		var ss
		ss = "Perhatikan gambar di atas! ";
		ss += "Keliling bangun tersebut adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MySegitigaDanPythagoras4();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha4(canv,ArSisi);
		//ArSisi = [AB,BC,CD,AD,AC];
		var ss
		ss = "Perhatikan gambar di atas!  <br>";
		ss += "Diketahui CD = "+ArSisi[2]+" cm dan AD = "+ArSisi[3]+" cm. <br>";
		ss += "Panjang AB adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MySegitigaDanPythagoras5();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha5(canv,ArSisi);
		//ArSisi = [AB,BC,CD,AD];
		var ss
		ss = "Perhatikan gambar di atas!  <br>";
		ss += "Panjang BC adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal6(canv){
		const Aljabar = MySegitigaDanPythagoras6();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha6(canv,ArSisi);
		//ArSisi = [AB,BC,CD,DE,EF,AF];
		var ss
		ss = "Perhatikan gambar di atas!  <br>";
		ss += "Luas daerah segienam itu adalah ... ";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B2}<br>B. "+Ar[1]+" cm\u{00B2}<br>C. "+Ar[2]+" cm\u{00B2}<br>D. "+Ar[3]+" cm\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal7(canv){
		const Aljabar = MySegitigaDanPythagoras7();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha7(canv,ArSisi);
		//ArSisi = [AB,BC,CD,AD,AC];
		var ss
		ss = "Perhatikan gambar di atas!  <br>";
		ss += "Panjang sisi BC adalah ... ";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MySegitigaDanPythagoras8();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha8(canv,ArSisi);
		//ArSisi = [AB,BC,CD,DE,AD];
		var ss
		ss = "Perhatikan gambar di atas!  <br>";
		ss += "Diketahui panjang AD = "+ArSisi[4]+" cm. Luas bangun ABCDE adalah ... ";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B2}<br>B. "+Ar[1]+" cm\u{00B2}<br>C. "+Ar[2]+" cm\u{00B2}<br>D. "+Ar[3]+" cm\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(canv){
		const Aljabar = MySegitigaDanPythagoras9();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha9(canv,ArSisi);
		//ArSisi = [AB,BC,CD,DE,AD];
		
		var Tokoh = NamaTokoh();
		var ss
		ss = ""+Tokoh[0]+" mengamati dua mobil dari puncak menara yang jarak masing-masingnya ke "+Tokoh[0]+" seperti tampak pada gambar di atas.  <br>";
		ss += "Jika tinggi menara "+ArSisi[2]+" m, maka jarak kedua mobil tersebut adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MySegitigaDanPythagoras10();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha10(canv,ArSisi);
		//ArSisi = [AB,BE,CE,BC,CD,AD];
		
		
		var ss
		ss = "Perhatikan gambar di atas. <br>";
		ss += "ABCD adalah jajargenjang dengan panjang CD = "+ArSisi[4]+" cm, AD = "+ArSisi[5]+" cm, dan AE = "+(ArSisi[0]+ArSisi[1])+" cm. Panjang CE adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal11(canv){
		const Aljabar = MySegitigaDanPythagoras11();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha11(canv,ArSisi);
		//ArSisi = [AE,AB,BC,CD,DE,CE];
		
		
		var ss
		ss = "Perhatikan gambar di atas. <br>";
		ss += "Keliling bangun ABCDE adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(canv){
		const Aljabar = MySegitigaDanPythagoras12();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarPytha12(canv,ArSisi);
		//ArSisi = [AE,AB,BC,CD,DE,CE];
		
		
		var ss
		ss = "Perhatikan gambar di atas. <br>";
		ss += "Daerah di atas adalah sketsa tanah yang ditanami rumput. Luas hamparan rumput tersebut adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B2}<br>B. "+Ar[1]+" cm\u{00B2}<br>C. "+Ar[2]+" cm\u{00B2}<br>D. "+Ar[3]+" cm\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal13(){
		const Aljabar = MySegitigaDanPythagoras13();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		
		//ArSisi = [AB,BC,CD,BD,AD];
		var ss
		//13.Seorang pengamat berada pada puncak menara dengan ketinggian 120 m. 
		//Ia melihat perahu A dengan jarak 130 m dan melihat perahu B dengan jarak 150 m. 
		//Jika dasar menara, perahu A, dan perahu B segaris, 
		//maka jarak perahu A ke perahu B adalah ...
		ss = "Seorang pengamat berada pada puncak menara dengan ketinggian "+ArSisi[2]+" m. <br>";
		ss += "Ia melihat perahu A dengan jarak "+ArSisi[3]+" m dan melihat perahu B dengan jarak "+ArSisi[4]+" m. <br>";
		ss += "Jika dasar menara, perahu A, dan perahu B segaris, ";
		ss += "maka jarak perahu A ke perahu B adalah ... <br>";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m<br>B. "+Ar[1]+" m<br>C. "+Ar[2]+" m<br>D. "+Ar[3]+" m</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(){
		const Aljabar = MySegitigaDanPythagoras14();
		//[dia1,dia2,harga,N,benar,arrSalah];
		var dia1=Aljabar[0];
		var dia2=Aljabar[1];
		var harga=Aljabar[2];
		var N=Aljabar[3];
		var benar=Aljabar[4];
		var arrSalah=Aljabar[5];
		
		
		var ss
		//14.Kebun berbentuk belah ketupat dengan panjang diagonal 10 m dan 24 m akan dipasang kawat disekelilingnya sebanyak 3 putaran. 
		//Jika harga 1 m kawat Rp5.000,00, 
		//maka harga seluruh kawat yang diperlukan adalah ...
		ss = "Kebun berbentuk belah ketupat dengan panjang diagonal "+dia1+" m dan "+dia2+" m akan dipasang kawat disekelilingnya sebanyak "+N+" putaran. <br>";
		ss += "Jika harga 1 m kawat Rp"+StringRibuan(harga)+",00, ";
		ss += "maka harga seluruh kawat yang diperlukan adalah ... <br>";
		
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
		
		var textSoal = ss+" <p>A. Rp"+Ar[0]+",00<br>B. Rp"+Ar[1]+",00<br>C. Rp"+Ar[2]+",00<br>D. Rp"+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal15(){
		const Aljabar = MySegitigaDanPythagoras15();
		//[Tripel[0],benar,arrSalah];
		var Tripel=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		//15. Sutan memiliki empat buah lidi yang masing-masing berukuran 4 cm, 5 cm, 9 cm, dan 10 cm. 
		//Keempat lidi tersebut akan dibuat segitiga. 
		//Segitiga yang mungkin dapat dibentuk Sutan dengan menggunakan lidi-lidi tersebut adalah ...
		ss = "Sutan memiliki empat buah lidi yang masing-masing berukuran "+Tripel[0]+" cm, "+Tripel[1]+" cm, "+Tripel[2]+" cm, dan "+Tripel[3]+" cm.  <br>";
		ss += "Keempat lidi tersebut akan dibuat segitiga. <br>";
		ss += "Segitiga yang mungkin dapat dibentuk Sutan dengan menggunakan lidi-lidi tersebut adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal16(){
		const Aljabar = MySegitigaDanPythagoras16();
		//[ArrSoal,benar,arrSalah];
		var ArrSoal=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		//15. Sutan memiliki empat buah lidi yang masing-masing berukuran 4 cm, 5 cm, 9 cm, dan 10 cm. 
		//Keempat lidi tersebut akan dibuat segitiga. 
		//Segitiga yang mungkin dapat dibentuk Sutan dengan menggunakan lidi-lidi tersebut adalah ...
		ss = "Segitiga ABC mempunyai sisi a, b, dan c. Perhatikan pernyataan untuk segitiga ABC : <br>";
		ss += "(1) "+ArrSoal[0]+" <br>";
		ss += "(2) "+ArrSoal[1]+" <br>";
		ss += "(3) "+ArrSoal[2]+" <br>";
		ss += "(4) "+ArrSoal[3]+" <br>";
		ss += "Dari pernyataan tersebut, yang <i>benar</i> adalah ... ";
		
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
	function GetSoal17(){
		const Aljabar = MySegitigaDanPythagoras17();
		//[Tripel[0],hipotenusa,benar,arrSalah];
		var Tripel=Aljabar[0];
		var hipotenusa=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		var ss
		//17.	Sebuah segitiga mempunyai dua sisi yang panjangnya 4x dan 3x. 
		//Jika panjang hipotenusa adalah 20 cm, 
		//maka keliling segitiga tersebut adalah ...
		ss = "Sebuah segitiga mempunyai dua sisi yang panjangnya "+Tripel[0]+"x dan "+Tripel[1]+"x. <br>";
		ss += "Jika panjang hipotenusa adalah "+hipotenusa+" cm, ";
		ss += "maka keliling segitiga tersebut adalah ... ";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal18(canv){
		const Aljabar = MySegitigaDanPythagoras18();
		//[sisi,benar,arrSalah];
		var sisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ArSisi=[1,2,3];//sementara
		const DrawPGL = GambarPytha18(canv,ArSisi);
		//ArSisi = [AE,AB,BC,CD,DE,CE];
		
		//18.	Pada gambar berikut, PQR merupakan segitiga sama sisi dengan panjang sisi 12 cm.
		//S terletak tepat di tengah PQ. Panjang RS adalah ...

		var ss
		ss = "Pada gambar di atas, PQR merupakan segitiga sama sisi dengan panjang sisi "+sisi+" cm. <br>";
		ss += "S terletak tepat di tengah PQ. Panjang RS adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal19(){
		const Aljabar = MySegitigaDanPythagoras19();
		//[Luas,dia1,benar,arrSalah];
		var Luas=Aljabar[0];
		var dia1=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		
		var ss
		
		ss = "Luas sebuah belah ketupat adalah "+Luas+" cm\u{00B2}. <br>";
		ss += "Jika panjang salah satu diagonalnya "+dia1+" cm, maka keliling belah ketupat itu adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal20(){
		const Aljabar = MySegitigaDanPythagoras20();
		//[Luas,benar,arrSalah];
		var Luas=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		
		var ss
		//20.	Panjang diagonal ruang sebuah kubus yang luas alasnya 64 cm^2 adalah ...
		ss = "Panjang diagonal ruang sebuah kubus yang luas alasnya "+StringRibuan(Luas)+" cm\u{00B2} adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm<br>B. "+Ar[1]+" cm<br>C. "+Ar[2]+" cm<br>D. "+Ar[3]+" cm</p>";
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
					GetSoal20];
	
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
	
	
	
	dd1.innerHTML="<p>Bab 10 \u{2192} Segitiga dan Pythagoras </p>";
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 115;
		cc1.height = 170;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 282;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 142;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 350;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 223;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 302;
		cc1.height = 164;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 245;
		cc1.height = 144;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 270;
		cc1.height = 171;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 137;
		cc1.height = 186;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut :</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut :</p>";
		cc1.width = 190;
		cc1.height = 173;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan fungsi berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan fungsi berikut:</p>";
		cc1.width = 312;
		cc1.height = 179;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 135;
		cc1.height = 145;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
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
