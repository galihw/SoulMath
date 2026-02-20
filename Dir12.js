function Print12(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function MyKongruen1(){
		//1.	Dua bangun segitiga dikatakan kongruen apabila ...
		//a.	Sisi-sisi yang bersesuaian tidak sama panjang
		//b.	Sudut-sudutnya kurang dari 90 derajat
		//c.	Sudut-sudut yang bersesuaian tidak sama besar
		//d.	Sudut-sudut yang bersesuaian sama besar
		var soal = "Dua bangun segitiga dikatakan kongruen apabila ...";
		
		//"(\u0006"
		var benar1 = "Sudut-sudut yang bersesuaian sama besar";
		var benar2 = "Sisi-sisi yang bersesuaian sama panjang";
		arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrBenar[0];
		var salah1 = "Sisi-sisi yang bersesuaian tidak sama panjang";
		var salah2 = "Sudut-sudutnya kurang dari 90 derajat";
		var salah3 = "Sudut-sudut yang bersesuaian tidak sama besar"
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [soal,benar,arrSalah];
	}
	function MyKongruen2(){
		var ArSisi = [1,2];
		
		//"(\u0006"
		var benar1 = "AB dan DE";
		var benar2 = "AC dan CE";
		var benar3 = "BC dan CD";
		arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrBenar[0];
		var salah1 = "AB dan CE";
		var salah2 = "AB dan CD";
		var salah3 = "AC dan DE";
		var salah4 = "AC dan CD";
		var salah5 = "BC dan DE";
		var salah6 = "BC dan CE";
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen3(){
		var ArSisi = [1,2];
		
		//"(\u0006"
		/*
		var benar1 = "AB/AC = AD/AB = BD/BC";
		var benar2 = "AC/AB = AB/AD = BC/BD";
		arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrBenar[0];
		var salah1 = "AB/AC = AB/AD = BD/BC";
		var salah2 = "AB/AC = AD/AB = BC/BD";
		var salah3 = "AC/AB = AD/AB = BD/BC";
		var salah4 = "AB/AD = AB/AD = BC/BD";
		var salah5 = "AC/AB = AD/AB = BC/BD";
		var salah6 = "AC/AB = AB/AD = BD/BC";
		*/
		var benar1 = ["AB","AC","AD","AB","BD","BC"];
		var benar2 = ["AC","AB","AB","AD","BC","BD"];
		var arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrBenar[0];
		var salah1 = ["AB","AC","AB","AD","BD","BC"];
		var salah2 = ["AB","AC","AD","AB","BC","BD"];
		var salah3 = ["AC","AB","AD","AB","BD","BC"];
		var salah4 = ["AB","AD","AB","AD","BC","BD"];
		var salah5 = ["AC","AB","AD","AB","BC","BD"];
		var salah6 = ["AC","AB","AB","AD","BD","BC"];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		/*
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		*/
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen4(){
		var ArSisi = [1,2];
		
		//"(\u0006"
		var benar1 = "AB/AC = AD/AB = BD/BC";
		var benar2 = "AC/AB = AB/AD = BC/BD";
		arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = 4;
		var salah1 = 1;
		var salah2 = 2;
		var salah3 = 3;
		var salah4 = 4;
		var salah5 = 6;
		var salah6 = 7;
		var salah7 = 8;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen5(){
		//Diketahui segitiga ABC dan KLM kongruen. 
		//Besar sudut KLM = 62 derajat, sudut MKL = 48 derajat, sudut ABC = 62 derajat, dan sudut ACB = 70 derajat. 
		//Panjang sisi yang sama panjang pada kedua segitiga itu adalah ...
		var soal = "Dua bangun segitiga dikatakan kongruen apabila ...";
		do{
			var aa = RandomAngkaAtoB(40,10);
			var bb = 110-RandomAngkaAtoB(aa,10);
			var cc = 180-aa-bb;
		}while(aa==cc || aa==bb || bb==cc)
		var arsisi = [aa,bb,cc];
		
		//"(\u0006"
		var benar1 = "KL = AB";
		var benar2 = "KM = AC";
		var benar3 = "LM = BC";
		arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrBenar[0];
		var salah1 = "KL = AC";
		var salah2 = "KL = BC";
		var salah3 = "KM = AB";
		var salah4 = "KM = BC";
		var salah5 = "LM = AB";
		var salah6 = "LM = AC";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [arsisi,benar,arrSalah];
	}
	function MyKongruen6(){
		//6. Diketahui segitiga DEF dan segitiga PQR sebangun. 
		//Panjang DE = 9 cm, EF = 12 cm, DF = 6 cm, PQ = 15 cm, PR = 10 cm, dan QR = 20 cm. 
		//Perbandingan sisi-sisi pada kedua segitiga tersebut adalah ...
		var soal = "Dua bangun segitiga dikatakan kongruen apabila ...";
		
		var ArAngka = [1,2,3,4,5,6,7,8,9,10];//,11,12,13,14,15,16,17,18,19,20]
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = ArAngka[1];
			var cc = ArAngka[2];
			var ff1 = aa+bb<cc;
			var ff2 = cc+bb<aa;
			var ff3 = cc+aa<bb;
			var ff = ff1||ff2||ff3;
		}while(ff);
		
		var ArRatio = [1,2,3,4,5,6,7,8,9,10];
		var ArRatSal = ["1 : 2",  "1 : 3", "1 : 4", "1 : 5", "1 : 6",  "1 : 7", "1 : 8", "1 : 9", "1 : 10",
						"2 : 3",  "2 : 5",  "2 : 7", "2 : 9",
						"3 : 4", "3 : 5",  "3 : 7", "3 : 8", "3 : 10",
						"4 : 5", "4 : 7", "4 : 9",
						"5 : 6", "5 : 7", "5 : 8", "5 : 9",
						"6 : 7",
						"7 : 8", "7 : 9", "7 : 10",
						"8 : 9",
						"9 : 10"];
		
		do{
			ArRatio = RandomMyArray(ArRatio);
			var r1 = ArRatio[0];
			var r2 = ArRatio[1];
			var ratio = [r1,r2];
			ratio.sort(function(a, b){return a-b});
			
			var FPB = CariFPB([r1,r2]);
		}while(FPB!==1);
		
		//ArRatSal = RandomMyArray(ArRatSal);
		var arsisi1 = [aa*ratio[0],bb*ratio[0],cc*ratio[0]];
		var arsisi2 = [aa*ratio[1],bb*ratio[1],cc*ratio[1]];
		arsisi1 = RandomMyArray(arsisi1);
		arsisi2 = RandomMyArray(arsisi2);
		var arsisi = arsisi1.concat(arsisi2);
		
		//"(\u0006
		var benar = ratio[0]+" : "+ratio[1];
		var salah1 = "1 : 2";
		var salah2 = "2 : 3";
		var salah3 = "3 : 4";
		var salah4 = "4 : 5";
		var salah5 = "5 : 6";
		var salah6 = "6 : 7";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		//arrSalah = ArRatSal;
		do{
			//arrSalah = RandomMyArray(arrSalah);
			//var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ArRatSal = RandomMyArray(ArRatSal);
			var ff1 = ArRatSal[0]==benar || ArRatSal[1]==benar || ArRatSal[2]==benar;
		}while(ff1);
		
		//return [arsisi,benar,arrSalah];
		return [arsisi,benar,ArRatSal];
	}
	function MyKongruen7(){
		//6. Diketahui segitiga DEF dan segitiga PQR sebangun. 
		//Panjang DE = 9 cm, EF = 12 cm, DF = 6 cm, PQ = 15 cm, PR = 10 cm, dan QR = 20 cm. 
		//Perbandingan sisi-sisi pada kedua segitiga tersebut adalah ...
		var soal = "Dua bangun segitiga dikatakan kongruen apabila ...";
		
		var ArAngka = [1,2,3,4,5,6,7,8,9,10];//,11,12,13,14,15,16,17,18,19,20]
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = ArAngka[1];
			var cc = ArAngka[2];
			var ff1 = aa+bb<cc;
			var ff2 = cc+bb<aa;
			var ff3 = cc+aa<bb;
			var ff = ff1||ff2||ff3;
		}while(ff);
		
		var ArRatio = [1,2,3,4,5,6,7,8,9,10];
		var ArRatSal = ["1 : 2",  "1 : 3", "1 : 4", "1 : 5", "1 : 6",  "1 : 7", "1 : 8", "1 : 9", "1 : 10",
						"2 : 3",  "2 : 5",  "2 : 7", "2 : 9",
						"3 : 4", "3 : 5",  "3 : 7", "3 : 8", "3 : 10",
						"4 : 5", "4 : 7", "4 : 9",
						"5 : 6", "5 : 7", "5 : 8", "5 : 9",
						"6 : 7",
						"7 : 8", "7 : 9", "7 : 10",
						"8 : 9",
						"9 : 10"];
		
		do{
			ArRatio = RandomMyArray(ArRatio);
			var r1 = ArRatio[0];
			var r2 = ArRatio[1];
			var ratio = [r1,r2];
			ratio.sort(function(a, b){return a-b});
			
			var FPB = CariFPB([r1,r2]);
		}while(FPB!==1);
		
		//ArRatSal = RandomMyArray(ArRatSal);
		var arsisi1 = [aa*ratio[0],bb*ratio[0],cc*ratio[0]];
		var arsisi2 = [aa*ratio[1],bb*ratio[1],cc*ratio[1]];
		//arsisi1 = RandomMyArray(arsisi1);
		//arsisi2 = RandomMyArray(arsisi2);
		var arsisi = arsisi1.concat(arsisi2);
		
		//"(\u0006
		var benar = arsisi2[1];
		var salah1 = arsisi1[2];
		var salah2 = arsisi2[0];
		var salah3 = arsisi2[2];
		var salah4 = aa*ArRatio[2];
		var salah5 = bb*ArRatio[2];
		var salah6 = cc*ArRatio[2];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [arsisi,benar,arrSalah];
	}
	function MyKongruen8(){
		//6. Diketahui segitiga DEF dan segitiga PQR sebangun. 
		//Panjang DE = 9 cm, EF = 12 cm, DF = 6 cm, PQ = 15 cm, PR = 10 cm, dan QR = 20 cm. 
		//Perbandingan sisi-sisi pada kedua segitiga tersebut adalah ...
		var soal = "Dua bangun segitiga dikatakan kongruen apabila ...";
		
		var ArAngka = [1,2,3,4,5,6,7,8,9,10];//,11,12,13,14,15,16,17,18,19,20]
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = ArAngka[1];
			var cc = ArAngka[2];
			var ff1 = aa+bb<cc;
			var ff2 = cc+bb<aa;
			var ff3 = cc+aa<bb;
			var ff = ff1||ff2||ff3;
		}while(ff);
		
		var ArRatio = [1,2,3,4,5,6,7,8,9,10];
		var ArRatSal = ["1 : 2",  "1 : 3", "1 : 4", "1 : 5", "1 : 6",  "1 : 7", "1 : 8", "1 : 9", "1 : 10",
						"2 : 3",  "2 : 5",  "2 : 7", "2 : 9",
						"3 : 4", "3 : 5",  "3 : 7", "3 : 8", "3 : 10",
						"4 : 5", "4 : 7", "4 : 9",
						"5 : 6", "5 : 7", "5 : 8", "5 : 9",
						"6 : 7",
						"7 : 8", "7 : 9", "7 : 10",
						"8 : 9",
						"9 : 10"];
		
		do{
			ArRatio = RandomMyArray(ArRatio);
			var r1 = ArRatio[0];
			var r2 = ArRatio[1];
			var ratio = [r1,r2];
			ratio.sort(function(a, b){return a-b});
			
			var FPB = CariFPB([r1,r2]);
		}while(FPB!==1);
		
		//ArRatSal = RandomMyArray(ArRatSal);
		var arsisi1 = [aa*ratio[0],bb*ratio[0],cc*ratio[0]];
		var arsisi2 = [aa*ratio[1],bb*ratio[1],cc*ratio[1]];
		//arsisi1 = RandomMyArray(arsisi1);
		//arsisi2 = RandomMyArray(arsisi2);
		var arsisi = arsisi1.concat(arsisi2);
		
		//"(\u0006
		var benar = arsisi1[1];
		var salah1 = arsisi1[2];
		var salah2 = arsisi2[2];
		var salah3 = aa*ArRatio[2];
		var salah4 = bb*ArRatio[2];
		var salah5 = cc*ArRatio[2];
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [arsisi,benar,arrSalah];
	}
	function MyKongruen9(){
		var Arrax = [30,60,90,120];
		var ArrDx = [3,6,9,12,15];
		do{
			Arrax = RandomMyArray(Arrax);
			var ax = Arrax[0];
			var ay = 10*RandomAngkaAtoB(1,ax/10-2);
			
			var bx = ax - 2*ax/10;
			var by = ay*bx/ax;
			var t = ay - by - ax/10;
			var p = bx
		}while(t<=0)
		//console.log(ax,ay,bx,by,t,p)
		
		var Luas1 = ax*ay;
		var Luas2 = bx*by;
		var Luas3 = Math.floor(ax-ax/10)*by;
		var Luas4 = bx*Math.floor(ay*ax/bx);
		var Luas5 = Math.floor(ax-ax/10)*Math.floor(ay*ax/bx);
		
		var ArSisi = [ax,ay,ax/10];
		
		//"(\u0006"
		var benar1 = "AB/AC = AD/AB = BD/BC";
		var benar2 = "AC/AB = AB/AD = BC/BD";
		arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = Math.abs(Luas1-Luas2);
		var salah1 = Math.abs(Luas1-Luas3);
		var salah2 = Math.abs(Luas1-Luas4);
		var salah3 = Math.abs(Luas1-Luas5);
		var salah4 = Math.abs(Luas2-Luas3);
		var salah5 = Math.abs(Luas2-Luas4);
		var salah6 = Math.abs(Luas2-Luas5);
		var salah7 = Math.abs(Luas3-Luas4);
		var salah8 = Math.abs(Luas3-Luas5);
		var salah9 = Math.abs(Luas4-Luas5);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen10(){
		var Arrax = [30,60,90,120];
		var ArrDx = [3,6,9,12,15];
		Arrax = RandomMyArray(Arrax);
		var ax = Arrax[0];
		var ay = 10*RandomAngkaAtoB(1,ax/10-2);
		
		var bx = ax - 2*ax/10;
		var by = ay*bx/ax;
		
		var lebar1 = (ay-by)/2;
		var lebar2 = (ay-by)/1;
		var lebar3 = Math.floor((ay-by)/3);
		var lebar4 = Math.floor((ay-by)/4);
		var lebar5 = Math.floor((ay-by)/5);
		
		var ArSisi = [ax,ay,ax/10];
		
		//"(\u0006"
		var benar1 = "AB/AC = AD/AB = BD/BC";
		var benar2 = "AC/AB = AB/AD = BC/BD";
		arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = lebar1;
		var salah1 = lebar2;
		var salah2 = lebar3;
		var salah3 = lebar4;
		var salah4 = lebar5;
		var salah5 = by;
		var salah6 = Math.floor(by/2);
		var salah7 = Math.floor(by/3);
		var salah8 = Math.floor(by/4);
		var salah9 = Math.floor(by/5);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen11(){
		var Arrax = [30,60,90,120];
		var ArrDx = [3,6,9,12,15];
		Arrax = RandomMyArray(Arrax);
		var ax = RandomAngkaAtoB(15,15);
		var ay = RandomAngkaAtoB(5,10);
		
		var ddx = RandomAngkaAtoB(0,4);
		var ax = ddx*10;
		var ay = ddx*5;
		var bx = ax + ddx*2;
		var by = bx/ax * ay;
		
		var Luas1 = ax*ay;
		var Luas2 = bx*by;
		var Luas3 = Math.floor(ax+ddx)*by;
		var Luas4 = bx*Math.floor(ay*ax/bx);
		var Luas5 = Math.floor(ax+ddx)*Math.floor(ay*ax/bx);
		
		var ArSisi = [ax,ay,ddx];
		
		//"(\u0006"
		var benar1 = "AB/AC = AD/AB = BD/BC";
		var benar2 = "AC/AB = AB/AD = BC/BD";
		arrBenar = [benar1,benar2];
		arrBenar = RandomMyArray(arrBenar);
		var benar = Math.abs(Luas1-Luas2);
		var salah1 = Math.abs(Luas1-Luas3);
		var salah2 = Math.abs(Luas1-Luas4);
		var salah3 = Math.abs(Luas1-Luas5);
		var salah4 = Math.abs(Luas2-Luas3);
		var salah5 = Math.abs(Luas2-Luas4);
		var salah6 = Math.abs(Luas2-Luas5);
		var salah7 = Math.abs(Luas3-Luas4);
		var salah8 = Math.abs(Luas3-Luas5);
		var salah9 = Math.abs(Luas4-Luas5);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3||ff4);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen12(){
		var ArrBil = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArrBil = RandomMyArray(ArrBil);
			var a1 = Math.min(ArrBil[0],ArrBil[1]);
			var a2 = Math.max(ArrBil[0],ArrBil[1]);
			var FPB = CariFPB([a1,a2]);
		}while(FPB!==1);
		
		var b1 = a1;
		var b2 = a2-a1;
		
		var ArSisi = [a1,a2];
		
		var benar = b1+" : "+b2;
		var salah1 = b1+" : "+(a1+a2);
		var salah2 = a1+" : "+a2;
		var salah3 = a2+" : "+a1;
		var salah4 = b2+" : "+b1;
		var salah5 = (a1+a2)+" : "+b1;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			//var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		//}while(ff1||ff2||ff3||ff4);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen13(){
		var ArrBil = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArrBil = RandomMyArray(ArrBil);
			var a1 = Math.min(ArrBil[0],ArrBil[1]);
			var b2 = Math.max(ArrBil[0],ArrBil[1]);
			var FPB = CariFPB([a1,b2]);
		}while(FPB!==2);
		
		var b1 = 2*a1;
		var a2 = 1/2*(a1+b2);
		
		var ArSisi = [a1,b2];
		
		var benar = a2;
		var salah1 = b1;
		var salah2 = a1;
		var salah3 = b2;
		var salah4 = a1+b2;
		var salah5 = b2-a1;
		var salah6 = 1/2*a1;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen14(){
		var Pyth = [3,4,5];
		var aa = 2*RandomAngkaAtoB(1,6);
		var bb = aa+6;
		var cc = 10;
		var dd = 8;
		
		var times = RandomAngkaAtoB(2,4);
		var cc2 = times*Pyth[2];
		var aa2 = times/2*aa;
		var bb2 = times/2*bb;
		var dd2 = times/2*dd;
		
		var Luas1 = (aa2+bb2)*dd2/2;
		var Luas2 = (aa+bb)*dd/2;
		var Luas3 = times*(aa+bb)*dd/2;
		var Luas4 = (aa+bb)*dd2/2;
		var Luas5 = (aa2+bb2)*dd/2;
		
		var ArSisi=[aa,bb,cc,cc2]
		
		var benar = Luas1;
		var salah1 = Luas2;
		var salah2 = Luas3;
		var salah3 = Luas4;
		var salah4 = Luas5;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			//var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		//}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen15(){
		var Ratio = [[1,2],[1,3],[1,4],[1,5],[2,3],[2,5],[3,4],[3,5],[4,5]];
		Ratio = RandomMyArray(Ratio);
		var aa = Ratio[0][0];
		var bb = Ratio[0][1];
		var rdm = RandomAngkaAtoB(0,5);
		var SR = bb*bb*rdm;
		var AB = SR*aa/bb;
		var PQ = AB*aa/bb;
		
		var ArSisi=[aa,bb,PQ,AB,SR];
		
		var benar = SR;
		var salah1 = AB;
		var salah2 = AB/bb;
		var salah3 = SR/bb;
		var salah4 = SR+rdm;
		var salah5 = SR-rdm;
		var salah6 = SR+2*rdm;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			//var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		//}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen16(){
		var Ratio = [[1,2],[1,3],[1,4],[1,5],[2,3],[2,5],[3,4],[3,5],[4,5]];
		Ratio = RandomMyArray(Ratio);
		var aa = Ratio[0][0];
		var bb = Ratio[0][1];
		var rdm1 = RandomAngkaAtoB(0,5);
		var rdm2 = rdm1+RandomAngkaAtoB(0,3);
		var DE = aa*rdm1;
		var AB = bb*rdm1;
		var AC = bb*rdm2;
		var CE = DE/AB*AC;
		var CD = AC-DE;
		var AD = DE;
		var ArSisi=[AB,CD,AD,DE];
		
		var benar = CE;
		var salah1 = AC;
		var salah2 = CE+1;
		var salah3 = AC+1;
		var salah4 = CE-1;
		var salah5 = AC-1;
		var salah6 = CE+2;
		var salah7 = AC+2;
		var salah8 = CE-2;
		var salah9 = AC-2;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen17(){
		var Ratio = [[1,2],[1,3],[1,4],[1,5],[2,3],[2,5],[3,4],[3,5],[4,5]];
		Ratio = RandomMyArray(Ratio);
		var aa = Ratio[0][0];
		var bb = Ratio[0][1];
		var rdm1 = RandomAngkaAtoB(0,5);
		var rdm2 = rdm1+RandomAngkaAtoB(0,3);
		var DE = aa*rdm1;
		var AB = bb*rdm1;
		var AC = bb*rdm2;
		var CE = DE/AB*AC;
		var CD = AC-DE;
		var AD = DE;
		var ArSisi=[AB,CD,AD,DE];
		
		var benar1 = "\u{2220}BAC = \u{2220}TPO";
		var benar2 = "\u{2220}ABC = \u{2220}POT";
		var benar3 = "\u{2220}ACB = \u{2220}PTO";
		var arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		
		var benar = arrBenar[0];
		var salah1 = "\u{2220}BAC = \u{2220}POT";
		var salah2 = "\u{2220}BAC = \u{2220}PTO";
		var salah3 = "\u{2220}ABC = \u{2220}TPO";
		var salah4 = "\u{2220}ABC = \u{2220}PTO";
		var salah5 = "\u{2220}ACB = \u{2220}TPO";
		var salah6 = "\u{2220}ACB = \u{2220}POT";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			//var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		//}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen18(){
		var Ratio = [[1,2],[1,3],[1,4],[1,5]];
		Ratio = RandomMyArray(Ratio);
		//Ratio[0] = [1,3];
		var aa = Ratio[0][0];
		var bb = Ratio[0][1];
		var bwh = aa+bb;
		var ats = bb;
		var pch1 = ats/bwh;
		var pch2 = 1/bwh;
		do{
			var CD = bwh*RandomAngkaAtoB(0,5);
			var AB = bwh*RandomAngkaAtoB(3,8);
		}while(CD>AB);
		
		var EG = pch1*AB;
		var FG = pch2*CD;
		var ArSisi=[AB,CD,aa,bb];
		//console.log(EG,FG);
		/*
		var benar1 = "∠BAC = ∠TPO";
		var benar2 = "∠ABC = ∠POT";
		var benar3 = "∠ACB = ∠PTO";
		var arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		*/
		var benar = EG+FG;
		var salah1 = EG;
		var salah2 = FG;
		var salah3 = EG-FG;
		var salah4 = CD+AB;
		var salah5 = (AB+CD)/bwh;
		var salah6 = (AB-CD)/bwh;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen19(){
		var Ratio = [[1,2],[1,3],[1,4],[1,5]];
		Ratio = RandomMyArray(Ratio);
		Ratio[0] = [1,1];
		var aa = Ratio[0][0];
		var bb = Ratio[0][1];
		var bwh = aa+bb;
		var ats = bb;
		var pch1 = ats/bwh;
		var pch2 = 1/bwh;
		do{
			var CD = bwh*RandomAngkaAtoB(0,5);
			var AB = bwh*RandomAngkaAtoB(3,8);
		}while(CD>AB);
		
		var EG = pch1*AB;
		var FG = pch2*CD;
		var ArSisi=[AB,CD,aa,bb];
		//console.log(EG,FG);
		/*
		var benar1 = "∠BAC = ∠TPO";
		var benar2 = "∠ABC = ∠POT";
		var benar3 = "∠ACB = ∠PTO";
		var arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		*/
		var benar = EG-FG;
		var salah1 = EG;
		var salah2 = FG;
		var salah3 = EG+FG;
		var salah4 = CD+AB;
		var salah5 = (AB+CD)/bwh;
		var salah6 = (AB-CD)/bwh;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyKongruen20(){
		var Sisi = 2*RandomAngkaAtoB(3,8);
		var ArSisi=[Sisi,1,2,3,4];
		var benar = Sisi+"\u{221A} \u{2212} "+Sisi;
		var salah1 = Sisi/2;
		var salah2 = Sisi+" \u{2212} "+Sisi+"\u{221A}";
		var salah3 = Sisi+"\u{221A} + "+Sisi;
		var salah4 = Sisi+" + "+Sisi+"\u{221A}";
		var salah5 = Sisi/2+"\u{221A} \u{2212} "+Sisi/2;
		var salah6 = Sisi/2+"\u{221A} + "+Sisi/2;
		var salah7 = Sisi/2+" \u{2212} "+Sisi/2+"\u{221A}";
		var salah8 = Sisi/2+" + "+Sisi/2+"\u{221A}";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
			//var ff4 = arrSalah[0]==0||arrSalah[1]==0||arrSalah[2]==0;
		}while(ff1||ff2||ff3);
		//}while(ff1||ff2||ff3||ff4);
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
		
function GambarKongruen20(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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rpNdd91VFi5cKHfeead8/PHHcsMNN6RcRkwFyh4Dim4PL7zwgpx22mnqyM7OVhNRTDDPOOMMPcJdKHsTKHp6bNq0Se666y7ZZ599ZPr06XLxxRfLN998I3fffbfsu+++epQ3UPYoKHrqID256KKLJDLZlO+//17tor1o0SIZNGiQHuE9lF1D0ZOnvr5eLco6/PDD5dZbb5XjjjtOTTgfffRROeKII/Qo/0DZI1D05MCyW1RTMOF877335IEHHlDLbq+++mpp27atHuU/Qi87RU+cp59+Wvr27Svnn3++WpC1YcMGefbZZ+XEE0/UI/xNqGWn6PFZv3693HHHHWotyuzZs+Wqq66SjRs3yujRo2XPPffUo4JBaGWn6C2Dv8s555wjRx55pPz5559qAoq/GdaTB5VQyk7RY/PTTz/J/fffLwceeKDcc889cvrpp8uPP/4oDz74oBx00EF6VHAJnewU/b8sW7ZMhg0bpiaca9euVfXxd955Ry677DJp3bq1HhV8QiU7Rf8///77rzzxxBNy7LHHyqWXXqrq4ygbYn1579699ajMIjSyU/QGPvnkE7nxxhtVFF+wYIHcdtttKprfdNNN6lwmEwrZKbrI3Llz1e+OMmGbNm1UfRxXOfv3769HZD4ZL3uYRcf9muPGjZOuXbuqq5pYSvvtt9+qyef++++vR4WHjJY9rKIvXrxYBg8erBZeYREW6uNvvvmmDBkyRI8IJxkre9hE/+OPP2TKlCmSn58v119/vRx11FFqwvnYY4+pWjnJUNnDJPqqVavkmmuuUZPLt99+W6UoH3zwgbopuX379noUARkne1hEf+655+Skk06Ss88+u7E+jnTllFNO0SNIUzJK9kwX/csvv1S3tO21115SXl6uLvrU1NRIaWmp5Obm6lGkOTJG9kwWvbKyUs477zw57LDDZNu2bao+/uqrr6rqCkmcjJA9E0XfunWrPPTQQ+oO/DFjxqj6OCacEydOlEMOOUSPIskQeNkzTfR3331Xhg8frvLwDz/8UNXHcQHoiiuuUBeDSOoEWvZMEv2pp56S448/XrV4M/Vx9CMvKCjQI0i6BFb2TBD9s88+k1tuuUV22203eemll1Qflc8//1zdz9mpUyc9ithFIGUPuugQu6ioSG2ZApYuXSrz5s2Ts846S70mzhA42YMq+nfffScTJkyQbt26qYkn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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		/*
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "right";
		ctx.fillText(arr[0]+" cm",40,100);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen19(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[0]+" cm",90,140);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",72,20);
		/*
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen18(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[0]+" cm",76,24);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",95,167);
		/*
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen17(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAAChCAYAAACrgViiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABN7SURBVHhe7d0JbFRFGAfwUfAAUW6BgkVRIahYpagoAsV4a0UOUZKCEjWGVAiHCiZcUUhKtDHBIyqiEQyCR0CQgIhCEQLKYeSSqghCaYFwKYcoKvL/Oq+Uo+22+46Zef9f8jK7U0i7u99+b+a9Oc46dpwiIrLc2bokIrIakxkROYHJjIicwGRGRE5gMiMiJzCZEZETmMyIyAlMZkTkBCYzohgZP368Ouuss047MjIy1MGDB/W/shOTGVGMFBQUqJUrV6oDBw6orl27ljy+9dZb9b+wF6czEcUQWmFZWVlq5MiRKj09XdfajS0zInICkxkROYHJjIicwGRGRE5gMiMiJ/BuJlHMFBUVqfbt26utW7fK81mzZqnMzEx5bDMmMyJyAruZROQEJjMicgKTGRE5gcmMKKY6duyohg0bpp/ZjzcAiGLo6quvVhs2bFDnnHOO+vvvv3Wt3ZjMiGLIW/oHX39XUgC7mUQxc+6550r58ssvS/nXX39JaTsmM6IYGTNmjDp69Khq166dGjJkiNQ1b95cStuxm0kUI1738r///pPn1atXl8fec5uxZUYUE40bN5Zy//79UkKHDh2cuWbGlhlRTKBFVrt27ZOSGaAeSW3JkiW6xk5MZkQxgO7kv//+e8ZW2Nlnny3HP//8o2vsxG4mkeMeeOABSWS9e/fWNSdr1KiR/Nx2bJkROQ7dyGrVqpXb8sK/ycnJsXpGAJMZkcMuvPBC2Ympoq85klnNmjXVoUOHdI192M0kctT69eslkTVr1kzXlK1GjRrq8OHD+pmdmMzKgCDALs84Y5U+XNj5meKhTZs2Um7btk3K8ngDaG3GZFaGWrVqqc8//1x17txZlhVGMx0HRktnZ2frf0VkJiQyxOurr76qa8o3duxYKS+55BIpbcRkVkkDBw5Uv//+O1tnZLR169ap8847Tz399NO6pmK4SbB9+3b9zD5MZpU0YcIEGXiIlhuRiZDE4MiRI1Imqm3bthXeKDAZk1kCME7Hu2YG77//vpREphk3bpysT4bEVFnfffedlHfeeaeUtmEyS0Dpa2aA62bYrovINCNGjJCT7qpVq3RN5S1cuFA/sguTWSXhmhmSWmFhoa4hMkOTJk2k3Llzp5RV0bBhQ2unNTGZVRKumeHMl5KSomuIzLBjxw510UUXSUKqqtWrV0s5adIkKW3CGQBlwN3K+++/X+Xl5emaE1zZAZrcUd5E8srCyRo3uA4cOKBr7MCWWRnwYS5atKjkWlnpg4mMTNKtWzdJZL169dI1ycHdUBuHHrFlRmQ5tKQqmkheGRib9vrrr8uJ2yZMZkQWwzUydAf9/hojQbZo0UJt2rRJ15iP3UwiSyHRIJEFcTMKyWzz5s36mR3YMksQPlzg20WmwOqwiMcgYvLaa69Va9eutSre2TJLwHXXXacfFQcQUdTS0tIk0eTm5uoaf61Zs0ZK3FywBVtmCUCrDBunYtNUDJp1aUt7spMXk0Fu4IvfYVOsM5lVALep8WF6b1PXrl1lnJmN43DIDafGZFDq1aun9u3bZ01Xk32mcqAlhqAp3c387LPPVKtWrWQcjs1rP5GdXnrppdNiMijz5s2TEidvG7BlVg40s3Gcabfn+vXrq71796r27durZcuW6VqiYJUXk0HA7zrTXpsmYsusDE2bNpVy69atUp5qz5496vzzz1fLly+X62hEQasoJoOA63JYjNQGbJmVAWck7Gzzxx9/6Joz8+bELV26VN1yyy26lsh/icakn/r27aumTJlixXUzJrMzqOyk3SDH+xCBnxPJKwtJFNeJN27cqGvMxG7mKR566CEJmh49euiainnXL/ChE/nNi8nu3bvrmnAhrn/66Sf9zFxsmZ0CH1xVJ+3i/+II6+IsxUMyMekHtMqQzExPFWyZlYK7NlDVoPGWDEKXgMgPmEgOUa7+mp+fLyWun5mMyUzDUsO4sOotPVwV2GOzf//+0iXADtFEySgoKJCB2cnEpJ+mT5+uH5mJ3UzNz4v4GHv27bffyli03bt361qiyjHpxhJ6LTjZm5wu2DI7ztsvMCcnR9ckB2PPMCYIY9Fat26ta4kS53dMJmvy5MlSrlixQkoTsWV2HC6wBjFpF2OCMO3pwQcfVDNmzNC1RBULKiaTgb8J8zVxkjZR7FtmGMUPQQQNrndg1YGZM2eqN954Q9cSlS/ImEwGbmxhCp+pYp3MsG0cAqZNmza6xn+YFIwzWnZ2tq4hKlsYMVlV2K3MZLHuZiLJ4AhjXBh+D7BXT+UJMyarAn8bVqH94YcfdI05Ytsya9asmZRhjWz2kpiX1IhO5cWkN67LRIhfLKdtoti2zPChhL3AIroPuB5i8pmXohNFTFYWdmzCRicmpo1Ytsy8EfphBw1WCMWCjwgE3Kki8kQVk5X166+/SjlgwAApTRK7ZPbII4/ICH0Ml4jC0KFD5ULq0aNHS6aqULx5MYkl2W0xceJE/cgcsetmoikf5aRdT8uWLdXPP/8sS2+HudgemceUmEyUN37StNQRq5ZZshPJ/YQbDxiAuG3bNtWhQwddS3FjUkwm6pVXXpFy+/btUpoiNi0zzCtD4DRu3FgVFRXp2uhhQvqRI0fUoEGDSoKE4gHLUdepU8e4mEwEWpMNGzZUu3bt0jXRi00yM3k1WG8VUcx7a9euna4l19m8QjFmtqA1adLfHotuJhIE3vSxY8fqGrMgKHCmu+GGG3QNuc70mKxIly5d9CNzxKJlhkRh2qTdM8HfCTH4SGLPlpgsD17DjTfeKMtdmcD5ZIZBqggYW14mAgQHB9W6AUtO161bV5aF8tgWk2VBNxmHKTcvnO5mYqUKBM0111yja8w3f/58CXIuve2Gr7/+Wm3ZskU1b95cHT582MqYLAvW7MO1XlM43TKztZXz1FNPqbffflvudOILQPZLS0uT0fMYn+VSyxuvZcSIEerFF1/UNdFxtmWWmpoqpYmz+yvy1ltvyc2AP//8UzVo0EDXks0Qh153bPDgwVK6Ijc3Vz+KlrMtM5wxTJ+0W5GUlBQZf3TVVVep9evX61qyFWISQxowle2xxx5T7733nv6JvWrWrCknXRPSiJMtM1sm7VaksLBQEvKGDRtUz549dS3ZyItJLNaJ9fSnTp2qOnXqJHU2GzVqlH4UPeeSWZ8+feSipOmrYiYKCRlfhE8//VS98847upZskpWVdVJMIkbXrFmjfvzxR3lss+HDh0tpwnZ4znUz0ZS3adJuomweLR53rsakBydb3NCI+qaGUy0zzHMDF4PGCxR8McgeLsek56abbuI1Mz9h7A4m7jZq1EjXuMcLGCY0O8QhJmHp0qVSZmRkSBkVK5MZmrWTJk3Sz4phTBbs2LFDSlfhywHodpLZ4hKTniVLluhH0bDuG4HxOrj+8MQTT8gicYD5YWi1jB49Wp67DKvTYpdrvF4uvW2uOMUkoPUZ9WwAa28APP744zJOx/vzMX4Ht73j4t5771Vz586VhI612sgs3piyuMQkutSYc4o1+bA2XxSsSmboWmFDkCFDhuia4jq8BATPww8/rD788EP9E/ddeeWV6pdffuHS24bxFty0tJ1QZfgOYhDtoUOHdE24rOlmYpkRJC5sCIJdjuDdd9+VgGndurW0UKZNmyZnw7y8PPm567CHAFZkwNLbHTt21LUUJcQkEhliMm7QMot0LjFaZjbp1q0bTnclx/Gzgf7JsWMff/zxsWrVqkn9V199pWvddzy5y2t+5plndA1F5dSYjJPnnntOXn9UrL1mhjua3gXHu+66S82bN08eA7aRmzlzpn4WD977gRsk2D6fwofFDdBKjvPy5+hqRnXZw9pkhjcN8xYxGBHNenRBZ8+eLRfG48q7fmjpR2o9xOQFF1wgy/zEVZSzAawdZwaYt4gZ+961s/vuu08SWlxxlkB0vJiMcyIDrNsW1cnUumTWr18/6U7dc889uqa4Dl9krEKQmZmpa+PJCyS00igcWM7n1JiMq1WrVkmJhkXYrOtmotXh8qRdP8yZM0dWaOD7FA7G5MnwfqClinXbwmTV6RvDEIBBUz6cFTGoGK0FjPuh4DAmT1e/fv1I3g+rktn+/fvVxRdfrJ9RebD2WXp6ulxT5HsWHMbk6bydqKZMmSJlWKzpZvJOXdVg0TxMdMZuQGvXrtW15AfGZNnQ1Qx7qp0VLbObb75ZAsZb1ZIShz0EMFxg3bp1Mt2L/MGYLB8WQQh72XorWmbI8nGbSO43vH+4joFhLLj7S8lhTJbP2y4xzPRifDKL66TdILBb5A/GZGKQ8C+//HJZDCEMRnczcQERQYMt7il5HFSbPMZk4hBn2Pg4LEa3zPBm4IhiaoTLvGTGlkXlMSYTh5tO2O81rDgztmV26aWXSvnNN99ISf7ZtWuXlBjoSYnzYnLx4sVSUvlw0wl69eolZdCMbZnh7BflQm+uGzdunBoxYoTcdcIqoVQxxmTl4T0L60aJkcnMu/NmaJ51BpZOmj9/vuwr4G2UQmfGmKwazJDAwOIw3jfjuplPPvmkBM0dd9yhaygoX3zxhdxtwsBGrwtFp8PmOYzJqvHWFfzyyy+lDJJxLTM0SzGEwFt4kYLnnT07d+6sFi1apGvJw5hMDt6/2rVrS4wFyaiWWb169aRk0IRr3759sq8C9k54/vnndS0BYzJ56KKHcRnDqGSGL1XDhg31MwoTxk7h7ib25MzPz9e1xJhMXo8ePfSjYBnTzeTodDPwcziB74V/0NXEjlUbNmzQNf4zomXWoUMHCZhnn31W11BUOEugGGPSX4injRs36mfBMKJlhhfKSbtmwWeCI64j3RmT/vI2rA4y3UTeMvNWQmXQmGXGjBkSePhCxw1j0n/YsBqwAnJQIk1m06dPl5VQW7ZsqWvIFNh7FBt1YHxVnJbeZkwG64MPPtCP/BdpNzPuXRkbtG3bVn3//feyNPTOnTt1rbsYk8HBTBMs2BhUyomsZdaiRQspFyxYICWZafXq1apRo0YyOd31ndIZk8GaOHGilN4EdL9F1jLD2Y+Tdu2BpbcPHz6sevfuraZOnapr3cKYDB7eY+zetHv3bl3jn0iSGSft2sn73LBAYVZWlq51A2MyHEG+z6F3M/v37y8v5rbbbtM1ZAts6ooza58+fXSNGxiT4bn77rv1I/+F3jLDlwEHL7DaC58fuNKKYUyGC+/19ddfL9dj/RRqMkNfee/evWzKO8CVBMCYDB+miSF2/J68H2o3E0GD4CH7FRQUSAKoXr26rrETYzJ8qampgZwEQ0tmyMYQxF0MCl/Tpk3V6NGj5eyK5YNsxJiMxpYtW6QcPHiwlH4JJZl16tRJzuKDBg3SNeSCMWPGqNtvv12m/dSpU0fX2oExGb0333xTP/JHKNfM0D9GdwR3w8g9WHob+yNi6e3NmzfrWrMxJqNVq1YtGc/nZ/oJvGXmzetj0Lhr06ZNsiwyug82DG9gTEZv/PjxUmL/Cb8EmsywmQEm7V5xxRW6hlyF9d2xbd3ChQvVyJEjda15GJNmyM7OltLPCf2BdjNduX1PiUPXDTcF0Frz5jqahDFpDi9W/EpBgbXMvDPfnDlzpKR4wEh6JAtcRzMNY9IsuAnjp8BaZgjoGjVqyOTkuMJ7EGDD12h47WDS63clJkvHle0xhr+/ffv2atmyZbqm6gJJZpy0W8z2QEsWXj8OE7p0LsVk6biyPcYw1g8HPptk+d7NHDBggPxh2FCW4u2jjz6SLxoSSZQYk+Zq0qSJb9OafG+ZmXQ2jprtZ00/9O3bV5YMinKdMNdisnRcuRBjeA0vvPBC0nfBfU1mDRo0UHv27CmZJhJ3+PLwvTixfR1WrN2xY4c8DouLMVk6rlyIMbwGP65lBtIy4xe4GJPZCXgvompBuBaTLiYzP2IjsLuZVPwl4ttLfisdV4yxE9hsICInMJkRkROYzIjICb4ms0cffVQOKsZrGcWwQgKu7eDAY6xjtWrVKv1T/xUVFanmzZuX/E4c2CovyN8ZptJxZXuMIV94nxE+M3x2VeVbMvP+iN9++y2pP4jcgmCdO3fuSTtZDx06VMqgYCDm8uXLVVpamlq5cqX83lGjRqnu3bszNg1x8OBBlZGRIY/x+eB47bXXZP5sVU86viWzwsJC1a9fP8muCCAiBCWWBMrNzZXF+GDYsGFq2rRpEi9hwuBdYGyaAXGBhTxzcnJ0jVKZmZmqZ8+easKECbqmcnxLZvn5+apVq1byx3zyySe6luJswYIFsgwQ4qI0BC2OME2ePFnW+k9JSdE1FCXkCLTM0IouDflj0aJFVWpB+5LM0GTEipH4w9q1a8euJhlh3759Eo+4HjN8+HBpEaanp+ufkmt8SWZoleE6CIIGZ768vDw25ylydevWLblmhiPs1iCFy5dktmLFCrV48eKSoJk1axa7miQ7N2GjE5zsSsO1NHQlKL7K6k6W1f1MRNLJDF1MbAhb+roIu5oE6NJ16dJFWu2IE0BM4AIvYoTiC3Fx2WWXSfffM3v2bElmAwcO1DWVdLwlVWWFhYXHUlNTcb/9WE5Ojq49Jo9Rh+N4K03XUlz17du3JB4QL4ibIJWOy5o1ax473tXUPyHT+BkbnGhORE7wbWgGEVGUmMyIyAlMZkTkBCYzInICkxkROYHJjIicwGRGRE5gMiMiByj1PzMgpMd8qhZ6AAAAAElFTkSuQmCC";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		/*
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "right";
		ctx.fillText(arr[0]+" cm",40,100);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen16(nmcanvas,arr){
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
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen15(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[2]+" cm",105,24);
		/*
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen14(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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+1w20qF/5yuUuROkyNWHH37oH6WHvtSmykmnEOZOkCJXH3/8sdx2223yyCOPuDOwaaEvtSmUuROkyNWvv/4q/f397vriV155RRobG+XZZ5+VkZER/4ra0ZfaFMLcU7+OVC/Kb2ho8CsL04v2V65cuejrUH76frly5Yr8999/Llz1PXT77bf7ny6f/rcuXrwo9fX10tTU5FdRdpW5F3V9aapBqioX5S+GEIVKO0jV1NSU2+nCFp379PS0f5av1IMUWMyXX37pTjqdPn1a7rjjDnn88cflzTfflNbWVv8KIC4EKXL1wAMPyG+//SZbtmyRffv2uTPuQOwIUuRKd6Kvv/66fwaUA0EKAAmlevlTZ2enuwF5O3z4sDtZdeON92N56cml9vb2m2aua/qzPKUWpOPj4+7+zJkzs4+BvOiXiff09MiuXbtED7L0du7cOdmwYYN/BcpGr8w4duyYtLW1yddffz0795aWFtm9e7d/VT5SC1J907766qvulxgeHvarQHGam5vlrbfe8s9gxd69e93f9spzV5pakI6OjsrGjRulo6NDBgcH/SpQDD0qOnjwoH8GS44cOeI+NprntcSpBKkm/4ULF9wOQC9r4fAeRenr63M92bp162RsbMyvouyeeeaZ2Y5U9fb2uvu8pBKkuhvt6uqafQPr32Ti8B5FqHSk9KO2zO1IlVaMeW7mUglS/YSKfr618ovoL8XhPYpEP2qXdqSVf0zzkjhI9bD+zz//dP1oBYf3CMWePXtS+WYpxEM70srRcW6uJ3fNrif+teuHT7qXvtbT0+NXr7nHuqa367tTvwpkZ+57bu6tra3t2uTkpH8VykTnqvNdaO555w6fbAKAhFK7/AkArCJIASAhghQAEiJIASAhghQAEiJIASAhghQAEiJIASAhghQAEiJIASAhghQAEhH5H1LlEQAyN7vVAAAAAElFTkSuQmCC";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[0]+" cm",70,95);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",90,165);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",160,130);
		ctx.textAlign = "left";
		ctx.fillText(arr[3]+" cm",260,100);
		
	}
	return 0;
}
function GambarKongruen13(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "left";
		ctx.fillText(arr[0]+" cm",180,170);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",75,20);
		/*
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen12(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[0]+" cm",90,112);
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",80,189);
		/*
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen11(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,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";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[2]+" cm",55,80);
		ctx.textAlign = "center";
		ctx.fillText(arr[2]+" cm",205,80)
		/*;
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen9(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACgCAYAAAAYaxDKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALUSURBVHhe7d0xbuJAAEBRZ0+REi6wSpkyPrkpKdFeAMrcIht7nWalSDRrvtbvSWiGoUCC+YwsCj99fBqAlB/rCIQIE4KECUHChCBhQpAwIUiYEHT3/5jjOK4z2N40TetsH+46MecoL5fL+gy2Ne+9vR0Md52YXx/K3n61aNjj/nONCUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQlD+3iV7u5lM3SP3gHuXRByPx+F8Pi/z0+m0jLfbbXnMrG27Nn8X83fCv5c+Mb82wfXXnw3CYx1/Hpbxer0u41acmECCMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYEPX18WuffGsdxGadpWsatHI/H4f39fXh9fR1Op9Pw9vY23G635bXD4WBt47Xz+Tw8Pz8P1+t1eW0rj9p/j5QOc/b13jQ8cg8I8y97/GDo2OP+c40JQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQ9fXxa598ax3G4XC7Dy8vLugLb+dp70zStK/+/u8KczXHCo+wpytndYQLbcY0JQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJiQMwy/AcnNhrVdUCHmAAAAAElFTkSuQmCC";
	base0_image.onload = function () {
		ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arr[0]+" cm",90,150);
		ctx.textAlign = "left";
		ctx.fillText(arr[1]+" cm",175,80);
		/*
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen4(nmcanvas,arr){
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
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen3(nmcanvas,arr){
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
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function GambarKongruen3B(nmcanvas,arr){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base0_image = new Image();
	let base1_image = new Image();
	base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA3CAYAAADuQbOpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADoSURBVHhe7dxBCoJAAEDRsWt5Su/XXSrBZQSRP4Z6D8SNi1E+M6jocnsYcLLLsYdTCYuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBI/GFY17Gty1iWV9s6tutx+FfNPLb3TPmJ/X4Bz3Lm6c06rt1sY/PvBhKWwqebpfBTZiwS7gpJCOunzLNGWgpJmLFICIuEsEgIi4SwSAiLhLBICOsnzPfy0ANSEmYsEsIiISwSwiIhLBLCIiEsEsIiISwSwiIhLBLCIjDGHTM0MKmg0ICPAAAAAElFTkSuQmCC";
	base0_image.onload = function () {
		var Abjad = ["A","B","C","D"];
		for(var i=0;i<4;i++){
			var yy = 0+50*i;
			ctx.drawImage(base0_image, 0, yy,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "left";
			ctx.fillText(Abjad[i]+".",0,yy+30);
			
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[i][0],47,20+yy);
			ctx.fillText(arr[i][1],47,45+yy);
			ctx.fillText(arr[i][2],83,20+yy);
			ctx.fillText(arr[i][3],83,45+yy);
			ctx.fillText(arr[i][4],123,20+yy);
			ctx.fillText(arr[i][5],123,45+yy);
		}
	}
	
	return 0;
}
function GambarKongruen2(nmcanvas,arr){
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
		ctx.textAlign = "center";
		ctx.fillText(arr[1]+" cm",125,120);
		ctx.textAlign = "left";
		ctx.fillText(arr[2]+" cm",100,85);
		ctx.textAlign = "center";
		ctx.fillText(arr[3]+" cm",73,20);
		*/
	}
	return 0;
}
function NamaBilangan(){
	var Bilangan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"];
	//Ekskul = RandomMyArray(Ekskul);
	return Bilangan;
}

	function GetSoal1(){
		const Aljabar = MyKongruen1();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Dua bangun segitiga dikatakan kongruen apabila ...";
		
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
	function GetSoal2(canv){
		const Aljabar = MyKongruen2();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen2(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		ss = "ABC dan CDE kongruen. <br>";
		ss += "Pasangan sisi yang sama panjang adalah ... ";
		
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
		const Aljabar = MyKongruen3();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen3(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		ss = "Perbandingan sisi pada segitiga ABC dan segitiga ABD yang sebangun adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss;//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyKongruen4();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen4(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		ss = "Banyak pasangan segitiga yang kongruen adalah ... ";
		
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
	function GetSoal5(){
		const Aljabar = MyKongruen5();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui segitiga ABC dan KLM kongruen. 
		//Besar sudut KLM = 62 derajat, sudut MKL = 48 derajat, sudut ABC = 62 derajat, dan sudut ACB = 70 derajat. 
		//Panjang sisi yang sama panjang pada kedua segitiga itu adalah ...
		ss = "Diketahui segitiga ABC dan KLM kongruen. <br>";
		ss += "Besar \u{2220}KLM = "+ArSisi[0]+"\u{00B0}, \u{2220}MKL = "+ArSisi[1]+"\u{00B0}, \u{2220}ABC = "+ArSisi[0]+"\u{00B0}, dan \u{2220}ACB = "+ArSisi[2]+"\u{00B0}. <br>";
		ss += "Panjang sisi yang sama panjang pada kedua segitiga itu adalah ...";
		
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
	function GetSoal6(){
		const Aljabar = MyKongruen6();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//6. Diketahui segitiga DEF dan segitiga PQR sebangun. 
		//Panjang DE = 9 cm, EF = 12 cm, DF = 6 cm, PQ = 15 cm, PR = 10 cm, dan QR = 20 cm. 
		//Perbandingan sisi-sisi pada kedua segitiga tersebut adalah ...
		ss = "Diketahui segitiga DEF dan segitiga PQR sebangun. <br>";
		ss += "Panjang DE = "+ArSisi[0]+" cm, EF = "+ArSisi[1]+" cm, DF = "+ArSisi[2]+" cm, PQ = "+ArSisi[3]+" cm, PR = "+ArSisi[4]+" cm, dan QR = "+ArSisi[5]+" cm. <br>";
		ss += "Perbandingan sisi-sisi pada kedua segitiga tersebut adalah ...";
		
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
	function GetSoal7(){
		const Aljabar = MyKongruen7();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//7. Suatu pohon yang tingginya 24 m mempunyai bayangan di tanah sepanjang 18 m. 
		//Jika pohon pinus yang tingginya 60 m, maka bayangannya di tanah sepanjang ...
		ss = "Suatu pohon yang tingginya "+ArSisi[0]+" m mempunyai bayangan di tanah sepanjang "+ArSisi[1]+" m.<br>";
		ss += "Jika pohon pinus yang tingginya "+ArSisi[3]+" m, maka bayangannya di tanah sepanjang ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m<br>B. "+Ar[1]+" m<br>C. "+Ar[2]+" m<br>D. "+Ar[3]+" m</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyKongruen8();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//8. Panjang bayangan sebuah menara adalah 15 m. 
		//Dan pada saat yang sama sebuah tiang pancang mempunyai bayangan 3 m. 
		//Jika tinggi tiang pancang 7 m, maka tinggi menara adalah ...
		ss = "Panjang bayangan sebuah menara adalah "+ArSisi[0]+" m. <br>";
		ss += "Dan pada saat yang sama sebuah tiang pancang mempunyai bayangan "+ArSisi[3]+" m.   <br>";
		ss += "Jika tinggi tiang pancang "+ArSisi[4]+" m, maka tinggi menara adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m<br>B. "+Ar[1]+" m<br>C. "+Ar[2]+" m<br>D. "+Ar[3]+" m</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(canv){
		const Aljabar = MyKongruen9();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen9(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//9. Sebuah foto ditempelkan pada selembar karton. 
		//Di sebelah atas, kiri, dan kanan foto masih tersisa karton selebar 3 cm. 
		//Jika foto dan karton sebangun, maka luas karton yang tidak tertutup adalah ...
		ss = "Sebuah foto ditempelkan pada selembar karton. <br>";
		ss += "Di sebelah atas, kiri, dan kanan foto masih tersisa karton selebar "+ArSisi[2]+" cm. <br>";
		ss += "Jika foto dan karton sebangun, maka luas karton yang tidak tertutup adalah ...";
		
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
	function GetSoal10(){
		const Aljabar = MyKongruen10();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//10. Sebuah foto berukuran 32 cm x 40 cm dipasang pada sebuah bingkai. Lebar bingkai bagian kiri dan kanan 4 cm. 
		//Jika foto dan bingkai sebangun, sedangkan lebar bingkai bagian atas dan bawah adalah sama, maka lebar bingkai bagian bawah adalah ...
		ss = "Sebuah foto berukuran "+ArSisi[0]+" cm \u{00D7} "+ArSisi[1]+" cm dipasang pada sebuah bingkai. Lebar bingkai bagian kiri dan kanan "+ArSisi[2]+" cm.  <br>";
		ss += "Jika foto dan bingkai sebangun, sedangkan lebar bingkai bagian atas dan bawah adalah sama, maka lebar bingkai bagian bawah adalah ...";
		
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
		const Aljabar = MyKongruen11();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen11(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Sebidang kebun berbentuk jajargenjang. 
		//Di bagian dalam kebun dibuat taman dengan panjang AB = 20 m dan panjang DE = 15 m. 
		//Di sekeliling taman dibuat jalan. 
		//Jika kebun dan taman sebangun, luas jalan adalah ...
		ss = "Sebidang kebun berbentuk jajargenjang. <br>";
		ss += "Di bagian dalam kebun dibuat taman dengan panjang AB = "+ArSisi[0]+" m dan panjang DE = "+ArSisi[1]+" m. <br>";
		ss += "Di sekeliling taman dibuat jalan.  <br>";
		ss += "Jika kebun dan taman sebangun, luas jalan adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m\u{00B2}<br>B. "+Ar[1]+" m\u{00B2}<br>C. "+Ar[2]+" m\u{00B2}<br>D. "+Ar[3]+" m\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(canv){
		const Aljabar = MyKongruen12();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen12(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Sebidang kebun berbentuk jajargenjang. 
		//Di bagian dalam kebun dibuat taman dengan panjang AB = 20 m dan panjang DE = 15 m. 
		//Di sekeliling taman dibuat jalan. 
		//Jika kebun dan taman sebangun, luas jalan adalah ...
		ss = "DE sejajar AB. <br>";
		ss += "AB = "+ArSisi[1]+" cm, DE = "+ArSisi[0]+" cm, CE = x, dan EB = y. <br>";
		ss += "Perbandingan x : y = ...";
		
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
	function GetSoal13(canv){
		const Aljabar = MyKongruen13();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen13(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Sebidang kebun berbentuk jajargenjang. 
		//Di bagian dalam kebun dibuat taman dengan panjang AB = 20 m dan panjang DE = 15 m. 
		//Di sekeliling taman dibuat jalan. 
		//Jika kebun dan taman sebangun, luas jalan adalah ...
		ss = "Diketahui AB = BC = CD. Panjang BF adalah ... ";
		
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
	function GetSoal14(canv){
		const Aljabar = MyKongruen14();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen14(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Sebidang kebun berbentuk jajargenjang. 
		//Di bagian dalam kebun dibuat taman dengan panjang AB = 20 m dan panjang DE = 15 m. 
		//Di sekeliling taman dibuat jalan. 
		//Jika kebun dan taman sebangun, luas jalan adalah ...
		ss = "Bangun ABCD dan bangun AEFG sebangun. Luas bangun ABCD adalah ... ";
		
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
	function GetSoal15(canv){
		const Aljabar = MyKongruen15();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen15(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui :
		//AB = 12 cm, 
		//CD = 7 cm, 
		//AD = 8 cm, 
		//DE = 8 cm.
		//Panjang CE adalah ...

		ss = "Trapesium PQBA sebangun dengan ABRS. Jika QB : BR = "+ArSisi[0]+" : "+ArSisi[1]+", maka panjang SR adalah ...";
		
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
	function GetSoal16(canv){
		const Aljabar = MyKongruen16();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen16(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui :
		//AB = 12 cm, 
		//CD = 7 cm, 
		//AD = 8 cm, 
		//DE = 8 cm.
		//Panjang CE adalah ...

		ss = "Diketahui : <br>";
		ss += "AB = "+ArSisi[0]+" cm, <br>";
		ss += "CD = "+ArSisi[1]+" cm, <br>";
		ss += "AD = "+ArSisi[2]+" cm, <br>";
		ss += "DE = "+ArSisi[3]+" cm. <br>";
		ss += "Panjang CE adalah ...";
		
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
	function GetSoal17(canv){
		const Aljabar = MyKongruen17();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen17(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui :
		//AB = 12 cm, 
		//CD = 7 cm, 
		//AD = 8 cm, 
		//DE = 8 cm.
		//Panjang CE adalah ...
		
		ss = "Segitiga ABC kongruen dengan segitiga POT. Pasangan sudut yang sama besar adalah ...";
		
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
	function GetSoal18(canv){
		const Aljabar = MyKongruen18();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen18(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui :
		//AB = 12 cm, 
		//CD = 7 cm, 
		//AD = 8 cm, 
		//DE = 8 cm.
		//Panjang CE adalah ...
		
		ss = "Titik E dan F masing-masing pada AD dan BC, <br>"
		ss += "sehingga AE : ED = "+ArSisi[2]+" : "+ArSisi[3]+" dan BF : FC = "+ArSisi[2]+" : "+ArSisi[3]+". <br>";
		ss += "Maka panjang EF = ... cm";
		
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
	function GetSoal19(canv){
		const Aljabar = MyKongruen19();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen19(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui :
		//AB = 12 cm, 
		//CD = 7 cm, 
		//AD = 8 cm, 
		//DE = 8 cm.
		//Panjang CE adalah ...

		ss = "Titik E dan F adalah titik tengah AC dan BD. <br>";
		ss += "Panjang EF adalah ... cm.";
		
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
	function GetSoal20(canv){
		const Aljabar = MyKongruen20();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarKongruen20(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Diketahui :
		//AB = 12 cm, 
		//CD = 7 cm, 
		//AD = 8 cm, 
		//DE = 8 cm.
		//Panjang CE adalah ...
		//Segitiga ABC adalah segitiga siku-siku sama kaki.
		//Jika AB = 10 cm dan CD adalah garis bagi sudut C, panjang BD adalah ...
		
		ss = "Segitiga ABC adalah segitiga siku-siku sama kaki. <br>";
		ss += "Jika AB = "+ArSisi[0]+" cm dan CD adalah garis bagi sudut C, panjang BD adalah ...";
		
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
	
	
	
	dd1.innerHTML="<p>Bab 12 \u{2192} Kesebangunan </p>";
	if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 227;
		cc1.height = 251;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 190;
		cc1.height = 122;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		cc2.width = 190;
		cc2.height = 200;
		const DrawPGL = GambarKongruen3B(cc2.id,ss[2]);
		//dd3.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 263;
		cc1.height = 140;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 370;
		cc1.height = 160;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 281;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 162;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 237;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 370;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 216;
		cc1.height = 160;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 175;
		cc1.height = 202;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 307;
		cc1.height = 161;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 196;
		cc1.height = 176;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 188;
		cc1.height = 170;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 187;
		cc1.height = 200;
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

