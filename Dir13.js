function Print13(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	//const mins = "−";
	const mins = "\u{2212}}";
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
	function DigitKoma(nn,digit){
		var Koma = Math.round(nn*10**digit)/10**digit;
		return Koma
	}
	function MyLingkaran1(){
		var Sudut = 36*RandomAngkaAtoB(1,9);
		var Jari = RandomAngkaAtoB(1,29);
		
		var Keliling = 2*3.14*Jari;
		var Busur = Sudut/360 * Keliling;
		var Busur = DigitKoma(Busur,2);
		
		var ArSisi = [Sudut,Jari];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = Busur;
		var salah1 = DigitKoma(Busur/2,2);
		var salah2 = DigitKoma(Busur*2,2);
		var salah3 = DigitKoma(Busur*4,2);
		var salah4 = DigitKoma(Busur/4,2);
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran2(){
		do{
			var Dia = 1.4*RandomAngkaAtoB(1,9);
			var lbr = RandomAngkaAtoB(1,7);
			var pjg = lbr+RandomAngkaAtoB(1,3);
		} while(Dia>=lbr)
		Dia = DigitKoma(Dia,2);
		
		var LuasA = 22/7*Dia**2/4;
		var LuasB = pjg*lbr;
		var Luas1 = Math.abs(LuasB - LuasA);
		var Luas2 = LuasB + LuasA;
		var Luas3 = Math.abs(LuasB - 22/7*Dia);
		var Luas4 = LuasB + 22/7*Dia;
		var Luas5 = Math.abs(2*(pjg + lbr) - 22/7*Dia);
		var Luas6 = 2*(pjg + lbr) + 22/7*Dia;
		
		var ArSisi = [pjg,lbr,Dia];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = DigitKoma(Luas1,2);
		var salah1 = DigitKoma(Luas2,2);
		var salah2 = DigitKoma(Luas3,2);
		var salah3 = DigitKoma(Luas4,2);
		var salah4 = DigitKoma(Luas5,2);
		var salah5 = DigitKoma(Luas6,2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran3(){
		var sdtA = 10*RandomAngkaAtoB(9,7);
		var sdtB = 180-sdtA;
		var sdtC = sdtB/2;
		var ArSisi = [sdtA];
		
		//"(\u0006"
		var benar = sdtC;
		var salah1 = sdtA/2;
		var salah2 = sdtA*2;
		var salah3 = sdtB*2;
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran4(){
		var dia = 14*RandomAngkaAtoB(0,4);
		var kel = 22/7*dia;
		var lingkar = dia*3+kel;
		var lingkar1 = dia*3/2+kel;
		var lingkar2 = dia*3/2;
		var lingkar3 = 22/7*dia**2/4;
		var lingkar4 = lingkar3+dia*3;
		var lingkar5 = lingkar3+dia*3/2;
		var ArSisi = [dia];
		
		//"(\u0006"
		var benar = lingkar;
		var salah1 = lingkar1;
		var salah2 = lingkar2;
		var salah3 = lingkar3;
		var salah4 = lingkar4;
		var salah5 = lingkar5;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran5(){
		var dia = 14*RandomAngkaAtoB(0,4);
		var kelO = 22/7*dia;
		var kel1 = dia*4;
		var kel2 = dia*2;
		var kel3 = dia/2;
		var kel4 = dia;
		var kel5 = dia/2;
		var kel6 = dia*8;
		var ArSisi = [kelO];
		
		var benar = kel1;
		var salah1 = kel2;
		var salah2 = kel3;
		var salah3 = kel4;
		var salah4 = kel5;
		var salah5 = kel6;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2 || ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran6(){
		var rr = 14*RandomAngkaAtoB(0,5);
		var Luas1 = 1/4*22/7*rr**2-rr*rr/2;
		var Luas2 = 1/4*22/7*rr**2;
		var Luas3 = 1/4*22/7*rr**2-rr*rr;
		var Luas4 = 22/7*rr**2-rr*rr/2;
		var Luas5 = 22/7*rr**2-rr*rr;
		var Luas6 = 22/7*rr**2;
		var Luas7 = 22/7*rr*2;
		var Luas8 = 22/7*rr*2-rr*rr/2;
		var Luas9 = 1/4*22/7*rr*2-rr*rr/2;
		var Luas10 = 1/4*22/7*rr*2-rr*rr;
		var Luas11 = 22/7*rr*2-rr*rr;
		var ArSisi = [rr];
		
		//"(\u0006"
		var benar = Luas1;
		var salah1 = Math.abs(Luas2);
		var salah2 = Math.abs(Luas3);
		var salah3 = Math.abs(Luas4);
		var salah4 = Math.abs(Luas5);
		var salah5 = Math.abs(Luas6);
		var salah6 = Math.abs(Luas7);
		var salah7 = Math.abs(Luas8);
		var salah8 = Math.abs(Luas9);
		var salah9 = Math.abs(Luas10);
		var salah10 = Math.abs(Luas11);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2 || ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran7(){
		var SdtPusat = 10*RandomAngkaAtoB(1,12);
		var SdtKel = SdtPusat/2;
		var ArSisi = [SdtKel,SdtPusat];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = SdtPusat;
		var salah1 = DigitKoma(SdtKel/2,2);
		var salah2 = DigitKoma(SdtPusat*2,2);
		var salah3 = DigitKoma(SdtPusat/5,2);
		var salah4 = DigitKoma(SdtKel/4,2);
		var salah5 = DigitKoma(SdtKel/5,2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran8(){
		/*
		var rr = 14*RandomAngkaAtoB(0,5);
		var Luas1 = 1/4*22/7*rr**2-rr*rr/2;
		var Luas2 = 1/4*22/7*rr**2;
		var Luas3 = 1/4*22/7*rr**2-rr*rr;
		var Luas4 = 22/7*rr**2-rr*rr/2;
		var Luas5 = 22/7*rr**2-rr*rr;
		var Luas6 = 22/7*rr**2;
		var Luas7 = 22/7*rr*2;
		var Luas8 = 22/7*rr*2-rr*rr/2;
		var Luas9 = 1/4*22/7*rr*2-rr*rr/2;
		var Luas10 = 1/4*22/7*rr*2-rr*rr;
		var Luas11 = 22/7*rr*2-rr*rr;
		
		*/
		var ArSisi = [11];
		//"(\u0006"
		var benar = "3\u{03C0}r\u{00B2}";
		var salah1 = "2\u{03C0}r\u{00B2}";
		var salah2 = "\u{03C0}r\u{00B2}";
		var salah3 = "4\u{03C0}r\u{00B2}";
		var salah4 = "5\u{03C0}r\u{00B2}";
		var salah5 = "6\u{03C0}r\u{00B2}";
		var salah6 = "7\u{03C0}r\u{00B2}";
		var salah7 = "8\u{03C0}r\u{00B2}";
		var salah8 = "9\u{03C0}r\u{00B2}";
		var salah9 = "10\u{03C0}r\u{00B2}";
		var salah10 = "11\u{03C0}r\u{00B2}";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2 || ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran9(){
		var sdtA = 10*RandomAngkaAtoB(1,7);
		var sdtB = 180-sdtA;
		var sdtC = sdtB/2;
		var ArSisi = [sdtA];
		
		//"(\u0006"
		var benar = sdtC;
		var salah1 = sdtA/2;
		var salah2 = sdtA*2;
		var salah3 = sdtB*2;
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran10(){
		var rr = 7*RandomAngkaAtoB(0,5);
		var Kel = 22/7*rr*2;
		var Luas = 22/7*rr**2;
		var ArSisi = [Kel,Luas];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = Luas;
		var salah1 = 22/7*(2*rr)**2;
		var salah2 = Luas+7;
		var salah3 = salah1+7;
		var salah4 = Luas-7;
		var salah5 = salah1-7;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran11(){
		var timesA = RandomAngkaAtoB(2,7);
		var timesB = RandomAngkaAtoB(0,2);
		var LuasA = timesA*RandomAngkaAtoB(5,25);
		var sdt = RandomAngkaAtoB(10,7);
		var sdtB = timesB*sdt;
		var sdtA = timesA*sdt;
		var LuasB = timesB*LuasA/timesA;
		var LuasB1 = LuasB+10;
		var LuasB2 = LuasB+20;
		var LuasB3 = LuasB-20;
		var LuasB4 = LuasB-10;
		var LuasB5 = LuasB+timesA;
		var LuasB6 = LuasB+2*timesA;
		var LuasB7 = LuasB-2*timesA;
		var LuasB8 = LuasB-timesA;
		var ArSisi = [sdtA,sdtB,LuasA];
		
		//"(\u0006"
		var benar = LuasB;
		var salah1 = LuasB1;
		var salah2 = LuasB2;
		var salah3 = LuasB3;
		var salah4 = LuasB4;
		var salah5 = LuasB5;
		var salah6 = LuasB6;
		var salah7 = LuasB7;
		var salah8 = LuasB8;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]<0 || arrSalah[1]<0 || arrSalah[2]<0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran12(){
		var rr = 7*RandomAngkaAtoB(0,5);
		var Luas = 22/7*rr**2;
		var Kel = 22/7*rr*2;
		var sdt = 36*RandomAngkaAtoB(0,9);
		var juring = sdt/360*Luas;
		var juring1 = sdt/360*Kel;
		var juring2 = juring+20;
		var juring3 = juring-20;
		var juring4 = juring-10;
		var juring5 = juring+10;
		var juring6 = juring1+20;
		var juring7 = juring1+10;
		var juring8 = juring1-10;
		var juring9 = juring1-20;
		var ArSisi = [sdt,rr];
		
		//"(\u0006"
		var benar = juring;
		var salah1 = juring1;
		var salah2 = juring2;
		var salah3 = juring3;
		var salah4 = juring4;
		var salah5 = juring5;
		var salah6 = juring6;
		var salah7 = juring7;
		var salah8 = juring8;
		var salah9 = juring9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]<0 || arrSalah[1]<0 || arrSalah[2]<0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran13(){
		//ss = "Seorang pelari mengelilingi lapangan berbentuk lingkaran dengan diameter "+ArSisi[0]+" m sebanyak "+ArSisi[1]+" kali. <br>";
		//ss += "Jarak yang ditempuh adalah ... ";
		var dd = 7*RandomAngkaAtoB(0,5);
		var put = 10*RandomAngkaAtoB(0,5);
		var Kel = 22/7*dd;
		var Luas = 22/7*dd**2/4;
		var Jarak = put*Kel;
		var Jarak1 = DigitKoma(put*Luas,2);
		var Jarak2 = DigitKoma(put*Luas/2,2);
		var Jarak3 = DigitKoma(put*Kel/2,2);
		var Jarak4 = DigitKoma(put*Kel*22,2);
		var Jarak5 = Jarak+10;
		var Jarak6 = Jarak-10;
		var ArSisi = [dd,put];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = Jarak;
		var salah1 = Jarak1;
		var salah2 = Jarak2;
		var salah3 = Jarak3;
		var salah4 = Jarak4;
		var salah5 = Jarak5;
		var salah6 = Jarak6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran14(){
		var aa = RandomAngkaAtoB(1,5);
		var bb = 1;
		var cc = aa+bb;
		var LuasA = aa**2*RandomAngkaAtoB(1,20);
		var LuasB = (cc**2-aa**2)/aa**2 * LuasA;
		var LuasB1 = cc**2/aa**2 * LuasA;
		var LuasB2 = bb**2/aa**2 * LuasA;
		var LuasB3 = (cc**2-bb**2)/aa**2 * LuasA;
		var LuasB4 = (aa**2-bb**2)/aa**2 * LuasA;
		var LuasB5 = LuasB+10;
		var LuasB6 = LuasB1+10;
		var LuasB7 = LuasB2+10;
		var LuasB8 = LuasB3+10;
		var LuasB9 = LuasB4+20;
		var ArSisi = [aa,bb,LuasA];
		
		//"(\u0006"
		var benar = LuasB;
		var salah1 = LuasB1;
		var salah2 = LuasB2;
		var salah3 = LuasB3;
		var salah4 = LuasB4;
		var salah5 = LuasB5;
		var salah6 = LuasB6;
		var salah7 = LuasB7;
		var salah8 = LuasB8;
		var salah9 = LuasB9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]<0 || arrSalah[1]<0 || arrSalah[2]<0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran15(){
		var Pyt = [[3,4,5],[6,8,10],[9,12,15],[7,24,25],[8,15,17]];
		Pyt = RandomMyArray(Pyt);
		var aa = Pyt[0][0];
		var bb = Pyt[0][1];
		var cc = Pyt[0][2];
		
		var AB = cc-aa;
		var DE = 2*cc;
		var CD = 2*bb;
		var OA = aa;
		
		var ArSisi = [AB,DE,CD];
		
		//"(\u0006"
		var benar = CD;
		var salah1 = aa;
		var salah2 = bb;
		var salah3 = cc;
		var salah4 = CD+1;
		var salah5 = CD+2;
		var salah6 = CD-1;
		var salah7 = CD-2;
		var salah8 = CD+3;
		var salah9 = CD-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]<0 || arrSalah[1]<0 || arrSalah[2]<0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran16(){
		var times = [3,4,5,6,8,9,10,12,18,24];
		times = RandomMyArray(times);
		var fixt = times[0];
		var r0 = 7*RandomAngkaAtoB(0,5);
		var rr = fixt*r0;
		var sdt = 360/fixt;
		var busur = Math.round(sdt/360*2*22/7*rr);
		
		var ArSisi = [busur,sdt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = rr;
		var salah1 = rr-1;
		var salah2 = rr-2;
		var salah3 = rr-3;
		var salah4 = rr+1;
		var salah5 = rr+2;
		var salah6 = rr+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran17(){
		var times = [3,4,5,6,8,9,10,12,18,24];
		times = RandomMyArray(times);
		var fixt = times[0];
		var r0 = 7*RandomAngkaAtoB(0,5);
		var rr = fixt*r0;
		var sdt = 360/fixt;
		var busur = Math.round(sdt/360*2*22/7*rr);
		
		var ArSisi = [busur,rr*2];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = sdt;
		var salah1 = 360/times[1];
		var salah2 = 360/times[2];
		var salah3 = 360/times[3];
		var salah4 = 360/times[4];
		var salah5 = 360/times[5];
		var salah6 = 360/times[6];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran18(){
		do{
			var aa = RandomAngkaAtoB(1,20);
			var bb = RandomAngkaAtoB(5,20);
		}while(aa>bb);
		
		var kelA = 1/2*3.14*aa*2;
		var kelB = bb;
		var kelC = (4*kelB+kelA);
		
		var ArSisi = [aa,bb];
		
		//"(\u0006"
		var benar = kelC;
		var salah1 = kelA;
		var salah2 = kelB;
		var salah3 = (1*kelB+kelA);
		var salah4 = (2*kelB+kelA);
		var salah5 = (3*kelB+kelA);
		var salah6 = (-1*kelB+kelA);
		var salah7 = (-2*kelB+kelA);
		var salah8 = (-3*kelB+kelA);
		var salah9 = (-4*kelB+kelA);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]<0 || arrSalah[1]<0 || arrSalah[2]<0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran19(){
		do{
			var rrA = RandomAngkaAtoB(0,25);
			var rrB = RandomAngkaAtoB(0,25);
		}while(rrA<=rrB);
		
		var kelA = 2*rrA*3.14;
		var kelB = 2*rrB*3.14;
		kelA = DigitKoma(kelA,2);
		kelB = DigitKoma(kelB,2);
		var selisih = kelA - kelB;
		selisih = DigitKoma(selisih,2);
		selisih = SplitKomaString(selisih,2);
		//selisih = StringRibuan(selisih);
		
		var ArSisi = [rrA,selisih];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = rrB;
		var salah1 = rrB+1;
		var salah2 = rrB+2;
		var salah3 = rrB+3;
		var salah4 = rrB-1;
		var salah5 = rrB-2;
		var salah6 = rrB-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyLingkaran20(){
		//var times = 22;
		var rr = 7*RandomAngkaAtoB(0,5);
		do{
			var xx = RandomAngkaAtoB(0,10);
			var bb = 10*RandomAngkaAtoB(1,9);
			var aa = (90+bb)/xx
			
			var dd = 10*RandomAngkaAtoB(1,3);
			var cc = (90-dd)/xx
		}while(Mods(90+bb,xx)!==0 || Mods(90-dd,xx)!==0)
		
		
		var alj1 = aa+"x \u{2212} "+bb;
		var alj2 = cc+"x + "+dd;
		
		var kel = 2*rr*22/7;
		var busur = 90/360*kel;
		var ArSisi = [alj1,alj2,busur];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		//console.log(Busur);
		
		var benar = rr;
		var salah1 = rr+7;
		var salah2 = rr+14;
		var salah3 = rr+21;
		var salah4 = rr-7;
		var salah5 = rr-14;
		var salah6 = rr-21;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2);
		return [ArSisi,benar,arrSalah];
	}
	
	function GambarLingkaran18(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",50,50);
			ctx.textAlign = "right";
			ctx.fillText(arr[1]+" cm",50,120);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",100,200);
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",190,200);
			
		}
		return 0;
	}
	function GambarLingkaran15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran14(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran12(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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rVo1Z9myZe4Zb0hohDSYhXS8LLZLs4QHmvmbhltsBMWutZ7iCjMhDhw44Nxxxx3ylFSoUMHZsWOHe8YSZPbv3++cffbZct957du3zz3jHUmNkHRFPe+886SZAA5Op06dItsZW4ILKzIm4+u5555Ly07BSQkSCAGxTRrJFzT2tGGgYIMT26FDB/lMvqOp2/ccd6RMivfff9+pWbOmDN9nnXWWo+0L94wlaGh7Ue6znhWduXPnpq0sOOkREigGZ9tdYOVmzpw5snODJVjQIMEsDTJKEo9OW1mwK8yU0DZkxNB955133KOWILB69WqnoKBA7m2dOnUk7JNOUhohDb/73e8iO1jh7FDuYMl9aEtINjgLIHDXXXcl3DM8YVxhpoT2tB0tSqdGjRryJF1yySVpCQlYMsuIESMcPTXLPR01apR7NL14IkigB06fPn3kj69UqZIzduxY94wlF1m8eLHcR+7nxRdf7GzZssU9k148EyQwUrZu3Vq+BI2qZs2aJccsuQVNo1q1aiX3MT8/39HOqnsm/XgqSPjkk0+cZs2ayZchRPD666+7Zyy5wObNm52ePXvK/atYsaLz8MMPu2cyg+eChHnz5jnHH3+8fKnTTz/dWbNmjXvG4mcOHTrk9O7dO2I3jh8/3jly5Ih7NjOkRZB8sXvvvVe+FC+yg3bv3u2etfgVRkbTE/TKK690Dh486J7JHGkRpOH666+PfMGBAwc6e/fudc9Y/AQO6a233ir3idERP2DdunXu2cySVkEy3A8bNiwyUt58883OV1995Z61+AEGiUmTJom9zz069dRTnddee809m3nSKkhAgMSzjCgHDBiQcbvEEhvuA2I86aST5N4Q5iHck03SLkjgKbzlllsiouzVq1dW7BNLURgojPPJa8OGDe6Z7JERQQLJnf379494cGSPbN261T1rySR79uxxBg8eHBEiK2x+ydTKmCChsLDQGTJkSORCEGJYsWKFe9aSCRgE+vXrJzFG7kGjRo2cRYsWuWezT0YFCYSExowZExFl8+bNk95CwpIYhw8fdrp37x6ZpRBjtm3G4mRckID9OHr06IgosWPuv/9+96wlHbA40bhx48g179Kli6yq+Y2sCNJw5513RsINvCZOnOh89tln7lmLF7Dp0yOPPBK5zlWqVJGY4+eff+7+hr/IqiBhwYIFTufOnSOibN++vfPKK6+4Zy2pwLr03XffHbm2VIhOnjzZ12G3rAsS1q9fL0tV5sLRgGDq1Klpz04OMo899pjTtWvXyDVl9WX27NnuWf/iC0ECoYh77rknYnBXrVpVjG4bRE8MYr7UzB933HERMQ4dOtTZtGmT+xv+xjeCNGDb1K9fPxKW4EXWCaOl3QCzZMjQ//jjj528vLzIdWOmGT58uPsbuYHvBAnYPrfddptcUHNxKYuYOXOm+xsWA0uzy5cvdwYNGhSZXdiR9dJLL3VWrVrl/lbu4EtBAjEznBviZkaUGOXXXnutZKJbHGn0RW6ASYjm1aRJE+eJJ57I2SZgvhWkgal6/vz5RWwium517NjRWbt2rftb4cIswzZs2DByTXiRTcVKTC6XjfhekAaC6bSBq1evXpGbQMcMbCcSgINsY9Lgi+QHwjbR358H9YILLpD66SBQjv/RXyxnYMdRWgDSvfejjz6SY9p2ks2d6KhAXbjZeD4I6AdNLVmyRGk7UT3++OORndTYWJ7+Sueee67SI6McCwI5J0hgmzsE+dZbb8nOUdFdfNu1a6fatm0rbYa5YVWqVHHP5BZ8P4r02UMQQRYWFspxhEhfxh49esj3o9lXoECQuQqOD0F1Vntq1apVZCqrXr26xDGpKaYpVq4wbtw4ydqmbYnxms3rxhtvdDZu3BjoJgw5LcjivPzyy3IzsTNNkbt5UdtDDqCe5sUWwwtF0NkAp4OFAP4OalfIdqpbt26Rv5cXneXwoMmOInUvDOTklF0W2JkzZsyQvpXLli2T92ho3s/UztTHhpHsIKBHU9WiRYvI5lBeoh0S2aCShp9sUsnPS5cuVS+99JL0z4mGZrC0SWabDTM1h4lACtKAA8CNR5CIYdasWWrnzp3u2W9gDx4jSD1VukeV0tO+atKkidKjrqpfv76INT8/X+xSRI3tij3LFms4H9u2bZNNpXC2sP2MbYsA2bWATfARZHHY+6d3796qW7du0pUWQeoR0z0bLgItyGgQAmJEpOxoe99996m33367iENUHBwGRs+8vDwRLSLkGFvt4dlz6XjpKVhejHYIlB6ZxUe+4rBVH95x37595d9E6IiRfzfMhEaQJYEgV65cqZ566inZmQpBAcJFWOaFwEoTL0JCtLwQMKNo9GZCjL79+/eXF+ctsQm9IEuCHfKJ/bGFGv0RmfKZlku6XOxwph0Q1bp1a+kyy0YALVu2DF5YJs1YQVp8hScddC0Wr7CCtPgKK0iLr7CCtPgKK0iLr7CCtPgKK0iLj1Dq/wHwrgaLqgKa8gAAAABJRU5ErkJggg==";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "13px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+"\u{00B0}",91,77);
			ctx.textAlign = "right";
			ctx.fillText(arr[1]+" cm",70,70);
		}
		return 0;
	}
	function GambarLingkaran11(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" \u{00B0}",90,106);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" \u{00B0}",94,79);
		}
		return 0;
	}
	function GambarLingkaran9(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "15px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" \u{00B0}",128,87);
			/*
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran8(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran6(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",135,70);
			/*
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran4(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function GambarLingkaran3(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAC3CAYAAAB63j4wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAACmBSURBVHhe7Z0J3FVjGsDfbEOWJpLEFJkYUUQqS0T2MQiNLZTEtGAsqVHIPjTIVmlRsmQLqSSqkciSrUWlopFMEVG2Yjjz/p/e57h9vu/ec+69595zvu/+f7/Td+45p3vP8pznfd7nfZ7nreZZTIkSRWQD97dEiaJREsISRackhAlg8eLFpn379qZatWrmlFNOMT169DCHHnqoadOmjZk9e7Y7KsFgE5aIP8OHD8d29z755BO3xfPuv/9+r3r16t5zzz3ntiSTkiZMMB07djRbbbWVueaaa9yWZFISwgSzZs0aWjKz5ZZbui3JpCSECeOrr74yX3zxhbHNsmnXrp355ZdfzOTJk93eZFISwoQxadIkM2bMGDNw4EDz448/mtNPP92MGzfO7U0mJWd1QhgxYoTYgGjAHXfcUbaxvs8++5jatWubV1991fz+97+X7UmjpAkTzB/+8AfTpEkTs3r1arNo0SK3NXmUhDDBrFy5UvyEu+yyi2nWrJnbmjxKzXFAfv75Z/P111+bVatWme+++056pthkdAxwIm+00UZm0003NdWrVxe3CU0jn/PBnDlzzIQJE8zQoUPN7bffbrbeemv5PezDBQsWmCuvvNI0bNjQHZ08SkJYhv/+97/mlVdeMTNmzJBeqFJWCH/44Qfz008/VSiENWrUMJtttpn730bWaToPPvhg06hRI7c1GAjhN9984z6tg9/DFqRJ3mCDZDdoVV4I3333XXPHHXeYadOmyWcE69tvvxVB+9///ifb8gGCgiBuscUWvnD+8Y9/NF27djVt27aVz1WVKiOECNeKFSukCX322WdN3759xedWHr/73e9EWNBqG264odu6jm233VZ6p7Vq1ZJjNtlkExFWNOOXX35pli1bZpYsWeKO/pXvv/9eBJu/5d3yzTff3Jxxxhnm73//u6zT5CbdCR2USi2ENKE0ZbNmzTJLly419913n/n444/d3l/ZaaedzF577WVq1qwpnxs0aGAOPPBA07RpU39bLtBkcw7Tp083M2fOlBcBm3L+/Pnm/ffflxckFV6CU0891RxyyCHS3B5mOx0b4gu0zb458URj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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",75,80);
			*/
		}
		return 0;
	}
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function GetSoal1(){
		const Aljabar = MyLingkaran1();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Panjang busur lingkaran dengan sudut pusat "+ArSisi[0]+"\u{00B0} dan panjang jari-jari "+ArSisi[1]+" cm adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		
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
		const Aljabar = MyLingkaran2();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var Nama = NamaTokoh();
		var ss
		
		ss = ""+Nama[0]+" membuat taman berbentuk persegi panjang berukuran "+ArSisi[0]+" m \u{00D7} "+ArSisi[1]+" m. <br>";
		ss += "Di tengah taman dibuat kolam berbentuk lingkaran berdiameter "+SplitKomaString(ArSisi[2])+" m. <br>";
		ss += "Taman di luar kolam tersebut ditanami rumput. <br>"; 
		ss += "Luas taman yang ditanami rumput adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m\u{00B2}<br>B. "+Ar[1]+" m\u{00B2}<br>C. "+Ar[2]+" m\u{00B2}<br>D. "+Ar[3]+" m\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyLingkaran3();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran3(canv,ArSisi);
		var ss
		
		ss = "AC merupakan diameter lingkaran yang berpusat di titik O.  <br>";
		ss += "Jika besar \u{2220}BOA = "+ArSisi[0]+"\u{00B0}, maka \u{2220}CDB = ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyLingkaran4();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran4(canv,ArSisi);
		var ss
		
		ss = "Panjang tali dibutuhkan untuk mengikat 3 batang kayu bila diameter kayu "+ArSisi[0]+" dm adalah ... ";
		
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
	function GetSoal5(canv){
		const MyData = MyLingkaran5();
		var ArSisi=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		const DrawPGL = GambarLingkaran5(canv,ArSisi);
		
		var ss
		ss = "Keempat sisi persegi disinggung oleh sebuah lingkaran seperti gambar. <br>"
		ss += "Jika keliling lingkaran "+ArSisi[0]+" cm, maka keliling persegi adalah ...";
		
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
	function GetSoal6(canv){
		const Aljabar = MyLingkaran6();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran6(canv,ArSisi);
		var ss
		
		ss = "Luas tembereng yang diarsir pada gambar adalah ... ";
		
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
	function GetSoal7(){
		const Aljabar = MyLingkaran7();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Titik-titik A, B, dan C terletak pada lingkaran yang berpusat di P. <br>" 
		ss += "Jika AB adalah diameter lingkaran dan \u{2220}CAB = "+ArSisi[0]+"\u{00B0}, maka \u{2220}CPB = ..."
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MyLingkaran8();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran8(canv,ArSisi);
		var ss
		
		ss = "Jika OA = AB = r, maka luas daerah yang diarsir adalah ... ";
		
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
	function GetSoal9(canv){
		const Aljabar = MyLingkaran9();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran9(canv,ArSisi);
		var ss
		
		ss = "Titik O adalah pusat lingkaran. <br>Garis AC adalah diameter. <br>Besar \u{2220}ADB adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(){
		const Aljabar = MyLingkaran10();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Keliling sebuah lingkaran adalah "+ArSisi[0]+" dm. Luas lingkaran tersebut adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" dm\u{00B2}<br>B. "+Ar[1]+" dm\u{00B2}<br>C. "+Ar[2]+" dm\u{00B2}<br>D. "+Ar[3]+" dm\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal11(canv){
		const Aljabar = MyLingkaran11();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran11(canv,ArSisi);
		var ss
		
		ss = "Jika BD diameter dan luas juring BOC = "+ArSisi[2]+" cm\u{00B2}, luas juring AOD adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B2}<br>B. "+Ar[1]+" cm\u{00B2}<br>C. "+Ar[2]+" cm\u{00B2}<br>D. "+Ar[3]+" cm\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(canv){
		const Aljabar = MyLingkaran12();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran12(canv,ArSisi);
		var ss
		
		ss = "Jika O adalah titik pusat lingkaran, dan \u{03C0} = 22/7, maka luas daerah yang diarsir adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = DigitKoma(Ar[0],2);
		Ar[1] = DigitKoma(Ar[1],2);
		Ar[2] = DigitKoma(Ar[2],2);
		Ar[3] = DigitKoma(Ar[3],2);
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		/*
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		*/
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
		const Aljabar = MyLingkaran13();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Seorang pelari mengelilingi lapangan berbentuk lingkaran dengan diameter "+ArSisi[0]+" m sebanyak "+ArSisi[1]+" kali. <br>";
		ss += "Jarak yang ditempuh adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0],2);
		Ar[1] = SplitKomaString(Ar[1],2);
		Ar[2] = SplitKomaString(Ar[2],2);
		Ar[3] = SplitKomaString(Ar[3],2);
		/*
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		*/
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m<br>B. "+Ar[1]+" m<br>C. "+Ar[2]+" m<br>D. "+Ar[3]+" m</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(canv){
		const Aljabar = MyLingkaran14();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran14(canv,ArSisi);
		var ss
		
		ss = "Diketahui OA : AP = "+ArSisi[0]+" : "+ArSisi[1]+". Luas juring AOB = "+ArSisi[2]+" cm\u{00B2}. Luas daerah yang diarsir adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = DigitKoma(Ar[0],2);
		Ar[1] = DigitKoma(Ar[1],2);
		Ar[2] = DigitKoma(Ar[2],2);
		Ar[3] = DigitKoma(Ar[3],2);
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		
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
	function GetSoal15(canv){
		const Aljabar = MyLingkaran15();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran15(canv,ArSisi);
		var ss
		
		ss = "Gambar ini adalah sebuah penampang pipa yang berisi air dengan permukaan air dalam keadaan rata. <br>"
		ss += "Jika kedalaman air pada pipa adalah "+ArSisi[0]+" cm dan diameter pipa "+ArSisi[1]+" cm, maka lebar permukaan air adalah ..."
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = DigitKoma(Ar[0],2);
		Ar[1] = DigitKoma(Ar[1],2);
		Ar[2] = DigitKoma(Ar[2],2);
		Ar[3] = DigitKoma(Ar[3],2);
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		
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
	function GetSoal16(){
		const Aljabar = MyLingkaran16();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		ss = "Diketahui panjang busur suatu lingkaran adalah "+ArSisi[0]+" cm. <br>";
		ss += "Jika sudut pusat yang menghadap busur tersebut berukuran "+ArSisi[1]+"\u{00B0}, maka panjang jari-jari lingkaran tersebut adalah ... <br>";
		ss += "(\u{03C0} = 22/7)";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0],2);
		Ar[1] = SplitKomaString(Ar[1],2);
		Ar[2] = SplitKomaString(Ar[2],2);
		Ar[3] = SplitKomaString(Ar[3],2);
		
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
	function GetSoal17(){
		const Aljabar = MyLingkaran17();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		ss = "Diketahui panjang busur suatu lingkaran adalah "+ArSisi[0]+" cm. <br>";
		ss += "Jika panjang diameter lingkaran tersebut adalah "+StringRibuan(ArSisi[1])+" cm,maka ukuran sudut pusatnya adalah ...  ... <br>";
		ss += "(\u{03C0} = 22/7)";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0],2);
		Ar[1] = SplitKomaString(Ar[1],2);
		Ar[2] = SplitKomaString(Ar[2],2);
		Ar[3] = SplitKomaString(Ar[3],2);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal18(canv){
		const Aljabar = MyLingkaran18();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarLingkaran18(canv,ArSisi);
		var ss
		
		ss = "Keliling bagian yang diarsir adalah ... "
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = DigitKoma(Ar[0],2);
		Ar[1] = DigitKoma(Ar[1],2);
		Ar[2] = DigitKoma(Ar[2],2);
		Ar[3] = DigitKoma(Ar[3],2);
		
		Ar[0] = SplitKomaString(Ar[0]);
		Ar[1] = SplitKomaString(Ar[1]);
		Ar[2] = SplitKomaString(Ar[2]);
		Ar[3] = SplitKomaString(Ar[3]);
		/*
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		*/
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
		const Aljabar = MyLingkaran19();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Diketahui dua lingkaran berjari-jari "+ArSisi[0]+" cm dan r cm. <br>";
		ss += "Jika r adalah jari-jari lingkaran terkecil dan selisih keliling dua lingkaran tersebut adalah "+ArSisi[1]+" cm, <br>";
		ss += "maka r = ...<br>";
		ss += "(\u{03C0} = 3,14)";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0],2);
		Ar[1] = SplitKomaString(Ar[1],2);
		Ar[2] = SplitKomaString(Ar[2],2);
		Ar[3] = SplitKomaString(Ar[3],2);
		/*
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		*/
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
		const Aljabar = MyLingkaran20();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Pada sebuah lingkaran dengan pusat O, diketahui besar \u{2220}KOL adalah "+ArSisi[0]+"\u{00B0} dan besar \u{2220}MON adalah "+ArSisi[1]+"\u{00B0}. <br>";
		ss += "Jika panjang busur KL = MN = "+ArSisi[2]+" cm, maka panjang OK = ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = SplitKomaString(Ar[0],2);
		Ar[1] = SplitKomaString(Ar[1],2);
		Ar[2] = SplitKomaString(Ar[2],2);
		Ar[3] = SplitKomaString(Ar[3],2);
		/*
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		*/
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
	
	
	
	dd1.innerHTML="<p>Bab 13 \u{2192} Lingkaran </p>";
	if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 161;
		cc1.height = 183;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 171;
		cc1.height = 158;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 158;
		cc1.height = 158;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 172;
		cc1.height = 175;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 161;
		cc1.height = 175;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 175;
		cc1.height = 161;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 182;
		cc1.height = 188;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 164;
		cc1.height = 174;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 202;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 154;
		cc1.height = 154;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 229;
		cc1.height = 209;
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

