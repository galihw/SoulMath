function Print11(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function NamaTokohU(){
		var Tokoh = ["Uti", "Untari", "Uci", "Uqi", "Ucha", "Uban", "Ubay", "Uyi", "Uwi", "Udin", "Uga", "Ucil", "Upin"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaTokohPak(){
		var Tokoh = ["Galih", "Syauqi", "Fadly", "Wurry", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaBuah(){
		var Buah = ["Jeruk", "Apel", "Salak", "Jambu", "Timun", "Terong", "Kol", "Melon", "Mangga", "Buah Naga", "Nanas", "Alpukat", "Buah Pir"];
		Buah = RandomMyArray(Buah);
		return Buah;
	}
	function NamaEkskul(){
		var Ekskul = ["berenang", "sepakbola", "pencak silat", "komputer", "bola voli", "bola basket", "panahan", "pramuka", "catur", "menari", "PMR"];
		Ekskul = RandomMyArray(Ekskul);
		return Ekskul;
	}
	function NamaBilangan(){
		var Bilangan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"];
		//Ekskul = RandomMyArray(Ekskul);
		return Bilangan;
	}
	function MySegiempat1(){
		//pythagoras
		do{
			var ay1 = RandomAngkaAtoB(13,11);
			var ay2 = ay1-RandomAngkaAtoB(2,4);
			var ax1 = RandomAngkaAtoB(1,5);
			var ax2 = ay1-2*ax1;
		}while(ax2<=0)
		
		
		var AB = ay1;
		var AH = ax2;
		var GH = ay2;
		var FG = ax1;
		
		Luas1=AB*AB;
		Luas2=GH*AH;
		Luas3=AH*FG;
		LuasArsir1 = Luas1-Luas2;
		LuasArsir2 = Luas1-Luas3;
		LuasArsir3 = 2*Luas2-Luas3;
		LuasArsir4 = Luas2+Luas3;
		var ArSisi=[AB,AH,GH,FG];
		//"(\u0006"
		var benar = LuasArsir1;
		var salah1 = Luas1;
		var salah2 = Luas2;
		var salah3 = Luas3;
		var salah4 = LuasArsir2;
		var salah5 = LuasArsir3;
		var salah6 = LuasArsir4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat2(){
		//pythagoras
		//do{
			var ax1 = RandomAngkaAtoB(4,8);
			var ax2 = RandomAngkaAtoB(1,4);
			var ay1 = ax1-RandomAngkaAtoB(1,2);
			var ay2 = ax2;
		//}while(ax2<=0)
		
		var BC = ax1;
		var CD = ay2;
		var EF = ay1;
		var AF = ax2;
		Luas1=BC*CD;
		Luas2=AF*EF;
		Luas3=BC*(CD+EF);
		LuasArsir1 = Luas1+Luas2;
		LuasArsir2 = Luas1-Luas2;
		LuasArsir3 = Luas3;
		LuasArsir4 = Luas3-Luas2;
		var ArSisi=[BC,CD,EF,AF];
		//"(\u0006"
		var benar = LuasArsir1;
		var salah1 = Luas1;
		var salah2 = Luas2;
		var salah3 = Luas3;
		var salah4 = LuasArsir2;
		var salah5 = LuasArsir3;
		var salah6 = LuasArsir4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat3(){
		//pythagoras
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[9,40,41]]
		Tripel = RandomMyArray(Tripel);
		var beda = RandomAngkaAtoB(2,5);
		var Bbeda = beda+2*Tripel[0][1];
		
		var fixA1 = beda*2;
		var fixA2 = beda*3;
		var fixB1 = Bbeda*2;
		var fixB2 = Bbeda*3;
		var fixC1 = Tripel[0][2]*2;
		var fixC2 = Tripel[0][2]*3;
		var fixT1 = Tripel[0][0]*2;
		var fixT2 = Tripel[0][0]*3;
		
		Luas1=(fixA1+fixB1)*fixT1/2;
		Luas2=(fixA2+fixB2)*fixT2/2;
		Luas3=(fixA1+fixB1)*fixC1/2;
		Luas4=(fixA2+fixB2)*fixC2/2;
		Luas5=(fixA1+fixB1)*fixC1;
		Luas6=(fixA2+fixB2)*fixC2;
		LuasArsir1 = Luas2-Luas1;
		LuasArsir2 = Luas2+Luas1;
		LuasArsir3 = Luas4-Luas3;
		LuasArsir4 = Luas4+Luas3;
		LuasArsir5 = Luas6-Luas5;
		LuasArsir6 = Luas6+Luas5;
		//console.log(LuasArsir1+" "+LuasArsir2+" "+LuasArsir3+" "+LuasArsir4);
		var ArSisi=[fixA2,fixB1,fixC2,fixC1];
		//"(\u0006"
		var benar = LuasArsir1;
		var salah1 = LuasArsir2;
		var salah2 = LuasArsir3;
		var salah3 = LuasArsir4;
		var salah4 = LuasArsir5;
		var salah5 = LuasArsir6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1||ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat4(){
		
		
		var ll = RandomAngkaAtoB(2,8);
		var pp = ll+RandomAngkaAtoB(2,8);
		var kali = RandomAngkaAtoB(1,4);
		
		var Luas1 = pp*ll;
		var Luas2 = 2*(pp+ll);
		var Luas3 = Luas1*kali;
		var Luas4 = Luas2*kali;
		var Luas5 = Luas1*(kali-1);
		var Luas6 = Luas2*(kali-1);
		var ArSisi=[pp,ll,kali];
		//"(\u0006"
		var benar = Luas4;
		var salah1 = Luas3;
		var salah2 = Luas1;
		var salah3 = Luas2;
		var salah4 = Luas5;
		var salah5 = Luas6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat5(){
		do{
			var kali = 2*RandomAngkaAtoB(1,4);
			var ll = kali*2*RandomAngkaAtoB(3,10);
			var pp = (ll+kali*2*RandomAngkaAtoB(3,10));
		}while(Mods(pp+ll,4)!==0)
		var kelPQRS = 2*(pp+ll);
		var kelABCD = kelPQRS/kali;
		var sisiABCD = kelABCD/4;
		
		ArSisi = [kali,pp,ll];
		//"(\u0006"
		var benar = sisiABCD;
		var salah1 = sisiABCD+1;
		var salah2 = sisiABCD+5;
		var salah3 = sisiABCD-1;
		var salah4 = sisiABCD-5
		var salah5 = sisiABCD+3;
		var salah6 = sisiABCD-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat6(){
		var ratio = [[1,2,3],[1,3,4],[1,4,5],[2,3,5],[1,5,6]
					,[1,8,9],[2,7,9],[3,4,9]
					,[1,9,10],[3,7,10]
					,[1,11,12],[5,7,12]
					,[1,14,15],[2,13,15],[4,11,15],[7,8,15]];
		
		ratio = RandomMyArray(ratio);
		var sdtA = 180*ratio[0][0]/ratio[0][2];
		var sdtB = 180*ratio[0][1]/ratio[0][2];
		var sdtAp = 180*ratio[1][0]/ratio[1][2];
		var sdtBp = 180*ratio[1][1]/ratio[1][2];
		var sdtAq = 360*ratio[0][0]/ratio[0][2];
		var sdtBq = 360*ratio[0][1]/ratio[0][2];
		var sdtAr = 360*ratio[1][0]/ratio[1][2];
		var sdtBr = 360*ratio[1][1]/ratio[1][2];
		//console.log(sdtA+" "+sdtA+" "+sdtAp+" "+sdtBp+" "+sdtAq+" "+sdtBq+" "+sdtAr+" "+sdtBr)
		ArSisi = [ratio[0][0],ratio[0][1]];
		
		//"(\u0006"
		var benar = sdtA;
		var salah1 = sdtB;
		var salah2 = sdtAp;
		var salah3 = sdtBp;
		var salah4 = sdtAq
		var salah5 = sdtBq;
		var salah6 = sdtAr;
		var salah7 = sdtBr;
		var salah6 = sdtA-10;
		var salah7 = sdtB-10;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat7(){
	
		var beda = RandomAngkaAtoB(1,10);
		var pjg1 = beda*5;
		var pjg2 = beda*3;
		var pjg3 = beda*2;
		
		var luas1 = pjg3*beda;
		var luas2 = beda*beda;
		var luas3 = pjg1*beda;
		var luas4 = pjg1*pjg2;
		
		var ArSisi = [pjg1,pjg2,pjg3];
		
		//"(\u0006"
		var benar = 2*luas1+luas2+luas3;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4
		var salah5 = luas1+luas2+luas3;
		var salah6 = luas1+luas2-luas3;
		var salah7 = luas4-luas1;
		var salah6 = luas4-luas2;
		var salah7 = luas4-luas3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat8(){
		//8.Ruangan sebuah aula dengan panjang 21 m dan lebar 15 m akan ditutupi dengan ubin berukuran 30 cm. 
		//Banyaknya ubin yang diperlukan untuk menutup semua lantai aula adalah ...
		
		var ubin = 30;
		var ll = 3*RandomAngkaAtoB(3,8);
		var pp = ll+3*RandomAngkaAtoB(3,8);
		
		var pjg = pp*100/ubin;
		var lbr = ll*100/ubin;
		var pjg1 = pp*10/ubin;
		var lbr1 = ll*10/ubin;
		
		Luas1 = pjg*lbr;
		Luas2 = pjg1*lbr1;
		Luas3 = pjg*lbr1;
		Luas4 = pjg1*lbr;
		Luas5 = pp*ll/9;
		Luas6 = 9*pjg*lbr;
		var ArSisi=[pp,ll];
		//"(\u0006"
		var benar = Luas1;
		var salah1 = Luas2;
		var salah2 = Luas3;
		var salah3 = Luas4;
		var salah4 = Luas5;
		var salah5 = Luas6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat9(){
		//9.Nabil mempunyai sebidang tanah berbentuk persegipanjang berukuran 70 m x 30 m. 
		//Di sekeliling tanah dipagari dengan biaya per meter Rp30.000,00.
		//Biaya pemagar seluruhnya adalah ...
		
		var harga = 10000*RandomAngkaAtoB(2,8);
		var ll = RandomAngkaAtoB(3,8);
		var pp = ll+RandomAngkaAtoB(3,8);
		
		var pjg = pp*10;
		var lbr = ll*10;
		var pjg1 = pp;
		var lbr1 = ll;
		
		Kel1 = 2*(pjg+lbr)*harga;
		Kel2 = 2*(pjg1+lbr1)*harga;
		Kel3 = 2*(pjg+lbr1)*harga;
		Kel4 = 2*(pjg1+lbr)*harga;
		Kel5 = (pjg+lbr)*harga;
		Kel6 = (pjg1+lbr1)*harga;
		var ArSisi=[pjg,lbr,harga];
		//"(\u0006"
		var benar = Kel1;
		var salah1 = Kel2;
		var salah2 = Kel3;
		var salah3 = Kel4;
		var salah4 = Kel5;
		var salah5 = Kel6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat10(){
		var ratio = [[1,2,3],[1,3,4],[1,4,5],[2,3,5],[1,5,6]
					,[1,8,9],[2,7,9],[3,4,9]
					,[1,9,10],[3,7,10]
					,[1,11,12],[5,7,12]
					,[1,14,15],[2,13,15],[4,11,15],[7,8,15]];
		ratio = RandomMyArray(ratio);
		//10. Keliling suatu persegi panjang 80 cm. 
		//Jika perbandingan panjang dan lebarnya 7 : 3, 
		//maka luas persegi panjang tersebut adalah ...
		
		var plus = ratio[0][2];
		var minus = ratio[0][1]-ratio[0][0];
		var kali = ratio[0][1]*ratio[0][0]
		
		var rdmAngka = 2*RandomAngkaAtoB(2,8);
		var kel = plus*2*rdmAngka;
		var pp = ratio[0][1]*rdmAngka;
		var ll = ratio[0][0]*rdmAngka;
		var pp1 = ratio[0][1]*rdmAngka/2;
		var ll1 = ratio[0][0]*rdmAngka*4;
		var luas = pp*ll;
		var luas1 = pp1*ll1;
		var luas2 = pp1*ll;
		var luas3 = pp*ll1;
		//console.log(kel,(pp+ll)*2,luas)
		
		var ArSisi=[kel,ratio[0][0],ratio[0][1]];
		//"(\u0006"
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		arrSalah = [salah1,salah2,salah3];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat11(){
	
		var Tripel =	[[6,8,10,8,15,17],
						[12,9,15,9,40,41],
						[9,12,15,12,5,13],
						[18,24,30,24,7,25]];
		Tripel = RandomMyArray(Tripel);
		
		var beda = RandomAngkaAtoB(3,27);
		var AB = beda;
		var CD = Tripel[0][2];
		var DE = Tripel[0][5];
		var OC = Tripel[0][0];
		var BD = 2*Tripel[0][1];
		var OE = Tripel[0][4];
		var CE = OC+OE;
		
		var luas1 = AB*OE;
		var luas2 = BD*CE/2;
		var luas3 = luas1+luas2;
		var luas4 = Math.abs(luas1-luas2);
		var luas5 = AB*DE+4*OC*BD/2;
		var luas6 = AB*OE+BD*CE;
		
		var ArSisi = [AB,CD,DE,OC];
		
		//"(\u0006"
		var benar = luas3;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas4
		var salah4 = luas5;
		var salah5 = luas6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat12(){
		//12.	Sebuah kolam renang berbentuk persegi panjang berukuran 15 m dan 10 m. 
		//Di sekeliling kolam dibuat jalan dengan lebar 1 m dan dipasang keramik. 
		//Luas keramik yang diperlukan untuk jalan adalah ...
		
		var ll = RandomAngkaAtoB(3,11);
		var pp = ll+RandomAngkaAtoB(3,11);
		var pp1 = pp+2;
		var ll1 = ll+2;
		var pp2 = pp-2;
		var ll2 = ll-2;
		var pp3 = pp+1;
		var ll3 = ll+1;
		var pp4 = pp-1;
		var ll4 = ll-1;
		
		var Luas1 = pp*ll;
		var Luas2 = pp1*ll1;
		var Luas3 = pp2*ll2;
		var Luas4 = pp3*ll3;
		var Luas5 = pp4*ll4;
		
		var Benar1 = Luas2-Luas1;
		var S2 = Luas1-Luas3;
		var S3 = Luas4-Luas1;
		var S4 = Luas1-Luas5;
		var S5 = Luas1;
		var S6 = Luas2;
		var S7 = Luas3;
		var S8 = Luas4;
		var S9 = Luas5;
		
		var ArSisi=[pp,ll];
		//"(\u0006"
		var benar = Benar1;
		var salah1 = S2;
		var salah2 = S3;
		var salah3 = S4;
		var salah4 = S5;
		var salah5 = S6;
		var salah6 = S7;
		var salah7 = S8;
		var salah8 = S9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat13(){
		//13. Sebuah taman berbentuk persegi panjang berukuran panjang 32 m dan lebar 24 m. 
		//Di sekeliling taman akan dipasang lampu dengan jarak antar lampu 4 m. 
		//Jumlah lampu yang diperlukan ...
		
		var nn = RandomAngkaAtoB(1,4);
		var ll = nn*RandomAngkaAtoB(3,11);
		var pp = ll+nn*RandomAngkaAtoB(3,11);
		var pp1 = pp+nn;
		var ll1 = ll+nn;
		var pp2 = pp-nn;
		var ll2 = ll-nn;
		var pp3 = pp+2*nn;
		var ll3 = ll+2*nn;
		var pp4 = pp-2*nn;
		var ll4 = ll-2*nn;
		
		var Kel = 2*(pp+ll);
		var Kel1 = 2*(pp1+ll1);
		var Kel2 = 2*(pp2+ll2);
		var Kel3 = 2*(pp3+ll3);
		var Kel4 = 2*(pp4+ll4);
		var Kel5 = 2*(pp1+ll2);
		var Kel6 = 2*(pp2+ll1);
		var Kel7 = 2*(pp3+ll4);
		var Kel8 = 2*(pp4+ll3);
		
		var Benar1 = Kel/nn;
		var S2 = Kel1/nn;
		var S3 = Kel2/nn;
		var S4 = Kel3/nn;
		var S5 = Kel4/nn;
		var S6 = Kel5/nn;
		var S7 = Kel6/nn;
		var S8 = Kel7/nn;
		var S9 = Kel8/nn;
		
		var ArSisi=[pp,ll,nn];
		//"(\u0006"
		var benar = Benar1;
		var salah1 = S2;
		var salah2 = S3;
		var salah3 = S4;
		var salah4 = S5;
		var salah5 = S6;
		var salah6 = S7;
		var salah7 = S8;
		var salah8 = S9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat14(){
		//14. Diketahui keliling persegi panjang 64 m dengan ukuran panjang (3x + 7) m dan lebar (2x + 5) m. 
		//Maka panjang dan lebar persegi panjang berturut-turut adalah ...
		
		var aa2 = RandomAngkaAtoB(1,3);
		var aa1 = aa2+RandomAngkaAtoB(1,3);
		var bb2 = RandomAngkaAtoB(3,3);
		var bb1 = bb2+RandomAngkaAtoB(3,3);
		
		var pjg = aa1+"x + "+bb1;
		var lbr = aa2+"x + "+bb2;
		
		var xx = RandomAngkaAtoB(0,4);
		var pp = aa1*xx+bb1;
		var ll = aa2*xx+bb2;
		var pp1 = 2*pp;
		var ll1 = 2*ll;
		var pp2 = aa1*xx;
		var ll2 = aa2*xx;
		var pp3 = xx+bb1;
		var ll3 = xx+bb2;
		
		var Kel = 2*(pp+ll);
		
		var Benar1 = pp+" m dan "+ll+" m";
		var S2 = pp1+" m dan "+ll1+" m";
		var S3 = pp2+" m dan "+ll2+" m";
		var S4 = pp3+" m dan "+ll3+" m";
		var S5 = ll+" m dan "+pp+" m";
		var S6 = ll1+" m dan "+pp1+" m";
		var S7 = ll2+" m dan "+pp2+" m";
		var S8 = ll3+" m dan "+pp3+" m";
		var S9 = pp1+" m dan "+ll2+" m";
		
		var ArSisi=[Kel,pjg,lbr];
		//"(\u0006"
		var benar = Benar1;
		var salah1 = S2;
		var salah2 = S3;
		var salah3 = S4;
		var salah4 = S5;
		var salah5 = S6;
		var salah6 = S7;
		var salah7 = S8;
		var salah8 = S9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat15(){
	
		var EF = 2*RandomAngkaAtoB(3,7);
		var AB = EF+2*RandomAngkaAtoB(3,7);
		var EF1 = EF-2;
		var AB1 = AB-2;
		
		
		var luas1 = 1/4*EF**2;
		var luas2 = 1/4*AB**2;
		var luas3 = 1/4*EF1**2;;
		var luas4 = 1/4*AB1**2;
		var luas5 = 1/2*EF**2;
		var luas6 = 1/2*AB**2;
		
		var ArSisi = [AB,EF];
		
		//"(\u0006"
		var benar = luas1;
		var salah1 = luas2;
		var salah2 = luas3;
		var salah3 = luas4
		var salah4 = luas5;
		var salah5 = luas6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat16(){
	
		var DE = RandomAngkaAtoB(2,4);
		var CD = DE+RandomAngkaAtoB(1,4);
		var AB = 2*CD;
		var BC = AB+RandomAngkaAtoB(1,4);
		
		
		var Kel1 = 2*(AB+BC+DE);
		var Kel2 = (AB+BC+DE);
		var Kel3 = 2*(AB+BC);
		var Kel4 = AB+BC+CD+DE;
		var Kel5 = AB+BC+CD+DE+DE+AB-CD;
		
		var ArSisi = [DE,CD,BC,AB];
		
		//"(\u0006"
		var benar = Kel1;
		var salah1 = Kel2;
		var salah2 = Kel3;
		var salah3 = Kel4
		var salah4 = Kel5;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat17(){
		//17. Sebuah belah ketupat KLMN dengan diagonal KM = 24 cm. 
		//Jika luas belah ketupat 384 cm\u{00B2}, keliling belah ketupat tersebut adalah ...
		
		
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[9,40,41]];
		Tripel = RandomMyArray(Tripel);
		
		var times = RandomAngkaAtoB(0,3);
		var dia1 = 2*times*Tripel[0][0];
		var dia2 = 2*times*Tripel[0][1];
		
		var Luas = dia1*dia2/2;
		var Kel = 4*times*Tripel[0][2];
		var Kel1 = 4*Tripel[0][2];
		var Kel2 = 4*dia1;
		var Kel3 = 4*dia2;
		var Kel4 = 2*dia1;
		var Kel5 = 2*dia2;
		
		var ArSisi=[Luas,dia1,dia2];
		//"(\u0006"
		var benar = Kel;
		var salah1 = Kel1;
		var salah2 = Kel2;
		var salah3 = Kel3;
		var salah4 = Kel4;
		var salah5 = Kel5;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat18(){
	
		var MN = RandomAngkaAtoB(4,7);
		var LM = MN+RandomAngkaAtoB(4,7);
		var PS = RandomAngkaAtoB(1,MN-1);
		var QT = RandomAngkaAtoB(0,PS-1);
		
		var luasKLMN = MN*LM;
		var luasPQRS = PS**2;
		var luasQRUT = PS*QT;
		var luasSisa = luasKLMN+luasPQRS-2*luasQRUT;
		var luasSisa1 = luasKLMN+luasPQRS-luasQRUT;
		var luasSisa2 = luasKLMN+luasPQRS+luasQRUT;
		
		var ArSisi = [MN,LM,PS,luasQRUT];
		
		//"(\u0006"
		var benar = luasSisa;
		var salah1 = luasSisa1;
		var salah2 = luasSisa2;
		var salah3 = luasKLMN
		var salah4 = luasPQRS;
		var salah5 = luasQRUT;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			//var ff2 = arrSalah[0]-Math.floor(arrSalah[0])==0.5 || arrSalah[1]-Math.floor(arrSalah[1])==0.5 || arrSalah[2]-Math.floor(arrSalah[2])==0.5;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat19(){
		//17. Sebuah belah ketupat KLMN dengan diagonal KM = 24 cm. 
		//Jika luas belah ketupat 384 cm\u{00B2}, keliling belah ketupat tersebut adalah ...
		
		
		var Tripel =	[[3,4,5],
						[5,12,13],
						[7,24,25],
						[8,15,17],
						[9,40,41]];
		Tripel = RandomMyArray(Tripel);
		
		var times = RandomAngkaAtoB(0,3);
		var dia1 = 2*times*Tripel[0][0];
		var dia2 = 2*times*Tripel[0][1];
		
		var Luas = dia1*dia2/2;
		var Kel = 4*times*Tripel[0][2];
		var Luas1 = dia1*dia2;
		var Luas2 = dia1*dia2/4;
		var Luas3 = dia1*dia1/2;
		var Luas4 = dia2*dia2/2;
		var Luas5 = dia1*dia2*2;
		
		var ArSisi=[Kel,dia1,dia2];
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas1;
		var salah2 = Luas2;
		var salah3 = Luas3;
		var salah4 = Luas4;
		var salah5 = Luas5;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MySegiempat20(){
		//Jika panjang AB = (6x – 3) cm, CD = (3x – 1) cm, dan BC = (2x + 3) cm, maka panjang AD = ...
		var xx = RandomAngkaAtoB(1,9);
		do{
			var aa1 = RandomAngkaAtoB(3,4);
			var aa2 = aa1+RandomAngkaAtoB(1,2);
			var bb1 = RandomAngkaAtoB(3,6);
			var bb2 = (aa2-aa1)*xx+bb1;
			
			var aa3 = RandomAngkaAtoB(1,6);
			var bb3 = RandomAngkaAtoB(2,5);
			
			var xAD = aa3*xx+bb3;
			var xAB = aa1*xx-bb1;
			var xCD = aa2*xx-bb2;
			var x1 = aa1*xx+bb3;
			var x2 = aa2*xx+bb3;
			var x3 = aa3*xx+bb1;
			var x4 = aa3*xx+bb2;
		}while(bb1==bb3 || bb2==bb3)
		var AB = "("+aa1+"x – "+bb1+") cm";
		var CD = "("+aa2+"x – "+bb2+") cm";
		var BC = "("+aa3+"x + "+bb3+") cm";
		
		
		var ArSisi = [AB,CD,BC];
		
		//"(\u0006"
		var benar = xAD;
		var salah1 = xAB;
		var salah2 = xCD;
		var salah3 = x1
		var salah4 = x2;
		var salah5 = x3;
		var salah6 = x4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	
	function GambarSegiempat20(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",125,120);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",100,85);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",73,20);*/
		}
		return 0;
	}
	function GambarSegiempat18(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "left";
			ctx.fillText(arr[0]+" cm",225,120);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",120,160);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",120,15);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm\u{00B2}",120,90);
		}
		return 0;
	}
	function GambarSegiempat16(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADcCAYAAABd7GwrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOSSURBVHhe7d3BUepgGEBRfBVYAJt04dbO7MytXWSTAuxADS/ZPjVmhNx3zgyTH1ZMyOWbMATu3j6cgKQ/yxYIEjiECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgECZwCBM4hO3+k03DMCwr2M84jsuK79h1gs9xT9O03IN9zMeUwbHNrhN8fRG827Inx9V2zsEhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgECZwCBM4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgEHb39mFZ/9gwDKdpmk7n83l5hFs0juOyOob5uJod7Xnfgl0n+PwCiPu2zW/AazD07TrBuX1HnIYm+HbOwSFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgECZwCBM4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgECZwCBM4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgECZwCBM4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHMIEDmEChzCBQ5jAIUzgECZwCBM4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAm8AN6enq63OAzAocwgUOYwCHs7u3DsuaXDcOwrL7n9fX1sr2/v79sv2OaptP5fD6N47g8cvvW/XSk53wrTPArmQ/aObbfdrS4+RkT/Ep+MpXWT9D/l0/STfDtTHAIEziECRzCnINfifPKr7OvtjPBIUzgECZwCBM4hAkcwgQOYQKHMIFDmC+6/JLHx8dl9dfLy8tl+/DwcNmunp+flxUrX3TZzgSHMBP8Skylr7OvtjPBIUzgECZwCBM4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziEudjkSuYLKNZ/+uTfjviPqLdC4Fe0XiXF58S9jcAhzDk4hAkcwgQOYQKHMIFDmMAhTOAQJnAIEziECRzCBA5hAocwgUOYwCFM4BAmcAgTOIQJHLJOp3fMCpiWddckQwAAAABJRU5ErkJggg==";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",84,188);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",132,217);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",175,115);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",95,13);
		}
		return 0;
	}
	function GambarSegiempat15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",70,200);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",168,70);
		}
		return 0;
	}
	function GambarSegiempat11(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",70,150);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",200,160);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",200,85);
		}
		return 0;
	}
	function GambarSegiempat7(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAAD6CAYAAAAY/yPyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAQPSURBVHhe7dxLTuNYGIBRngNmsASWwsqAlbEUlgAzBjyqChO3aFRNp0yh2P7OkaLrAQML58uPI1/2f/yyB2EHmxWyRECeCMgTAXkiIE8E5ImAPBGQJwLyRECeCMgTAXkiIE8E5ImAPBGQJwLyRECeCMgTAXkiIE8E5ImAPBGQJwLycv+Bbn9/f3PEGk15O6cmgQDWb8o1Tk2C8RcUG34ZU6+vewLyRECeCMgTAXkiIE8E5ImAPBGQJwLyRECeCMgTAXkiIE8E5ImAPBGQJwLy7CxjsbbdSvl/19skIM8kYDXsMYaJRECeCMgTAXkiIE8E5ImAPBGQJwLyRECeCMgTAXkiIE8EbO31Kc3xSc33x0snAvJEQJ4IyLOzbGbW8nf2LtlZtmAC+LopH3AmwYws6fzmfq5/wiQgTwTkiYA8EbC117//x3uA98dLJwLyRECeCMgTAXkiIE8E5ImAPBGQJwLyRECeCMgTAXkiIM/Osh06OPj3Z9B4XuN5jl5eXjZHfAeTgDyTYEbWtG93SUwC8kRAngjIEwF5IiBPBOSJgDwRkCcC8kRAngjIEwF5IiBPBCt2eHg4vPicCMgTAXkiIM/Oshn5uLd4jtb4djEJZmQJb7AlhPqnTIIVG78Zen5+HtavWuvvzyQgTwTkiYA89wRszT0BrJQIyBMBeSIgTwTkiYA8EZAnAvJEQJ4IyBMBeSIgTwTkeYqU/3R8fLw5evP09DSsR0dHwzp6fHzcHC2TSUCeScDW7CeAlRIBeSIgTwTkiYA8EZAnAvJEQJ4IyBMBeSIgTwTkiYA8EazYycnJ8OJzIiBPBOSJgDw7y2ZmPMc5s7OMbyOA3TAJZuRvn9/4zdDDw8Ow8nsmAXkiIE8E5LknmJG5n99amQTkiYA8EZAnAvJEQJ4IyBMBeSIgTwTkiYA8EZAnAvJEQJ6nSHfo7Oxsc/Tm/v5+WE9PT4d1dHd3tzniO5gE5JkEM2I/wW6YBOSJgDwRkCcC8kRAngjIEwF5IiBPBOSJgDwRkCcC8kRAngjY2vn5+fB6dXFxMbzWQATkiYA8EZBnZ9mMjOfHdFOurUkwI7ZVft2UDxKTgK2N3wzd3t7+883Qzc3NsM7B1OtrEpAnAvJEQJ57AlbDPQFMJALyRECeCMgTAXkiIE8E5ImAPBGQJwLyRECeCMgTAXmeImWxrq6uNkdvrq+vh/Xy8nJYRx9/7iOTgDyTgNWwnwAmEgF5IiBPBOSJgDwRkCcC8kRAngjIEwF5IiBPBOSJgDwRkCcC8kRAngjIS+4sY93sLPuEbZXrN+UapyYB/I57AvJEQJ4IyBMBeSIgTwTkiYA8EZAnAvJEQJ4IyBMBeSIgTwTkiYA8EZAnAvJEQJ4IyBMBeSIgbm/vJ9clMhZAV+i8AAAAAElFTkSuQmCC";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",50,130);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",120,245);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",140,205);
		}
		return 0;
	}
	function GambarSegiempat6(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",125,120);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",100,85);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",73,20);*/
		}
		return 0;
	}
	function GambarSegiempat5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",110,22);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",25,95);
		}
		return 0;
	}
	function GambarSegiempat3(nmcanvas,arr){
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
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",120,127);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",225,100);
			ctx.textAlign = "left";
			ctx.fillText(arr[3]+" cm",80,100);
		}
		return 0;
	}
	function GambarSegiempat2(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADICAYAAACQys/4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMbSURBVHhe7d1hTpxAAIBR6MX2ang0TrZdGvxREy11P2lx3kvMshoM6nwwQ3bjfH+YgMSP/REICApCgoKQoCAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoKQoCB0+J8FLMuyb13T1Y+fazh0hdoG47qu+7Pr2Y795eVlfwZf59AV6vXsftWz/NWPn+sYYg01z/OvD/hqQwS1XYQPLhXhKe7yQUhQEBIUhAQFIUFBaIig3DbnLEME5bY5ZzHlg5CgICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkJDBOXV5pxliKC82pyzmPJBSFAQsoaCkDUUhEz5ICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgpCgICQoCA0RlPdDcZYhgvJ+KM5iygchQUFomDUUnGGYNRScwZQPQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgtB8f9i337Usy2+PV7Md97qu0+12m+Z5nt77kT/62kfe7vfZ7/Pq2f3/R1cdO39riCvU9sfcYtp8NFA/O4jf7vdsDN8tpu1kNkpQQ1yh+LdGGj/WUBASFIQEBSFBQUhQEBIUhAQFIUFBSFAQEhSEBAUhQUFIUBASFIQEBSFBQUhQEBIUhAQFIUFBSFAQEhSEBAUhQUFIUBASFIQEBSFBQUhQEBIUhAQFIUFBSFAQEhSEBAUhQUFIUBASFIQEBSFBQUhQEBIUhAQFIUFBSFAQmu8P+/a7lmWZ1nWdbrfb/hk47nXsbOPouzsU1GaEXwZfZ5Txczgo4M+soSAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoKQoCAkKAgJCkKCgpCgICQoCAkKQoKCkKAgJCgICQpCgoLMNP0EDTKR48u2e2gAAAAASUVORK5CYII=";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",80,190);
			ctx.textAlign = "left";
			ctx.fillText(arr[1]+" cm",160,155);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",65,80);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",33,20);
		}
		return 0;
	}
		
	function GambarSegiempat1(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADICAYAAABLcWXaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMKSURBVHhe7dwxTuNAAEDRsCegpEjjo3Cz3CxHceOCkhsAthxppZUgfzEomPekaBxXY41/RnaRu5c3B+Bqf9YRuJJoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkmg88Pj4uH27T6XRaPt9JNBCJBiLRQLTL/3IehmE9+rynp6dlfHh4WMYtjOO4Hv1OW67P8/PzMt7f3y/jFj5an93tNPOCTNO0frs989y2vGl+mj2sz+52mssFb/Vrfnlzdj6fl/Gztp7fT7P19V/enG31Bu2a+XmmgUg0EIkGIs8038wzzc9fHzsNRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRHcvb9bjXRiGYRnHcVzGWzPPb5qmw/F4XM/8Lpdrv+X1mb03PzvNN5sX47cGM7vlYK5lp4G/2GngC4gGItFAJBqIRAORaCASDUSigUg0EIkGItFAJBqIRAORaCASDUSigUg0EIkGItFAJBqIRAORaCASDUSigUg0EIkGItFAJBqIRAORaCASDUSigUg0EIkGItFAJBqIRAORaCASDUSigUg0EIkGItFAJBqIRAPR3cub9XgXhmE4TNN0OB6P6xm43uXeGcdxPfOv3UUzm8OB//VeMLNdRgNfyTMNRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINRKKBSDQQiQYi0UAkGohEA5FoIBINJIfDK7qDhwjgI9AZAAAAAElFTkSuQmCC";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0]+" cm",40,100);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",125,120);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",100,85);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",73,20);
		}
		return 0;
	}
		
	function GetSoal1(canv){
		const Aljabar = MySegiempat1();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarSegiempat1(canv,ArSisi);
		//ArSisi = [AB,BC,CD,DE,EF,AF];
		var NamaU = NamaTokohU();
		var ss
		//Utari memiliki selembar karton untuk membuat namanya dengan huruf kapital. 
		//Ia memulai dengan huruf “U” seperti tampak pada gambar di atas.
		ss = ""+NamaU[0]+" memiliki selembar karton untuk membuat namanya dengan huruf kapital. <br>";
		ss += "Ia memulai dengan huruf 'U' seperti tampak pada gambar di atas. <br>";
		ss += "Luas karton yang diperlukan untuk membuat huruf 'U' tersebut adalah ... ";
		
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
	function GetSoal2(canv){
		const Aljabar = MySegiempat2();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarSegiempat2(canv,ArSisi);
		//ArSisi = [BC,CD,EF,AF];
		var Nama = NamaTokoh();
		var ss
		//Utari memiliki selembar karton untuk membuat namanya dengan huruf kapital. 
		//Ia memulai dengan huruf “U” seperti tampak pada gambar di atas.
		ss = ""+Nama[0]+" akan membuat huruf L seperti gambar di atas. <br>";
		ss += "Luas karton yang dibutuhkan adalah ... ";
		
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
	
	
	function GetSoal3(canv){
		const Aljabar = MySegiempat3();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarSegiempat3(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//Sebidang tanah berbentuk trapesium sama kaki. 
		//Di bagian dalam akan dibuat kolam ikan yang sebangun dengan tanah tersebut. 
		//Di sekeliling kolam dibangun jalan setapak. 
		//Luas jalan tersebut adalah 
		ss = "Perhatikan gambar di atas! <br>";
		ss + "Sebidang tanah berbentuk trapesium sama kaki. <br>";
		ss += "Di bagian dalam akan dibuat kolam ikan yang sebangun dengan tanah tersebut. <br>";
		ss += "Luas jalan tersebut adalah ... <br>";
		
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
		
		textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B2}<br>B. "+Ar[1]+" cm\u{00B2}<br>C. "+Ar[2]+" cm\u{00B2}<br>D. "+Ar[3]+" cm\u{00B2}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal4(){
		const Aljabar = MySegiempat4();
		//[pp,ll,kali];ArSisi
		var pp=Aljabar[0][0];
		var ll=Aljabar[0][1];
		var kali=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var Nama = NamaTokohPak();
		var ss
		//4. Tanah pekarangan Pak Ahsan berbentuk persegipanjang dengan panjang 24 meter dan lebar 18 meter. 
		//Di sekeliling tanah tersebut dipasang kawat sebagai pagar sebanyak 3 lapis. 
		//Panjang kawat yang diperlukan adalah ...
		ss = "Tanah pekarangan Pak "+Nama[0]+" berbentuk persegipanjang dengan panjang "+pp+" meter dan lebar "+ll+" meter.  <br>";
		ss += "Di sekeliling tanah tersebut dipasang kawat sebagai pagar sebanyak "+kali+" lapis. <br>";
		ss += "Panjang kawat yang diperlukan adalah ...";
		
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
	function GetSoal5(canv){
		const Aljabar = MySegiempat5();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat5(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var Nama = NamaBilangan();
		var ss
		//Diketahui persegi ABCD dan persegi panjang PQRS. 
		//Jika keliling persegi panjang sama dengan dua kali keliling persegi, 
		//maka panjang sisi persegi adalah ...
		ss = "Jika keliling persegi panjang sama dengan "+Nama[ArSisi[0]]+" kali keliling persegi, ";
		ss += "maka panjang sisi persegi adalah ...";
		
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
		const Aljabar = MySegiempat6();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat6(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Perhatikan gambar belah ketupat ABCD! <br>";
		ss += "Sudut A : Sudut B = "+ArSisi[0]+" : "+ArSisi[1]+". <br>Besar sudut C adalah ... ";
		
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
	function GetSoal7(canv){
		const Aljabar = MySegiempat7();
		//[ArSisi,benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat7(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Luas karton yang digunakan untuk membuat bangun huruf 'E' adalah ... ";
		
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
	function GetSoal8(){
		const Aljabar = MySegiempat8();
		//[pp,ll,kali];ArSisi
		var pp=Aljabar[0][0];
		var ll=Aljabar[0][1];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//8.Ruangan sebuah aula dengan panjang 21 m dan lebar 15 m akan ditutupi dengan ubin berukuran 30 cm. 
		//Banyaknya ubin yang diperlukan untuk menutup semua lantai aula adalah ...
		ss = "Ruangan sebuah aula dengan panjang "+pp+" m dan lebar "+ll+" m akan ditutupi dengan ubin berukuran 30 cm. <br>";
		ss += "Banyaknya ubin yang diperlukan untuk menutup semua lantai aula adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" buah<br>B. "+Ar[1]+" buah<br>C. "+Ar[2]+" buah<br>D. "+Ar[3]+" buah</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(){
		const Aljabar = MySegiempat9();
		//[pp,ll,kali];ArSisi
		var pp=Aljabar[0][0];
		var ll=Aljabar[0][1];
		var harga=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var Nama = NamaTokoh();
		var ss
		//9.Nabil mempunyai sebidang tanah berbentuk persegipanjang berukuran 70 m x 30 m. 
		//Di sekeliling tanah dipagari dengan biaya per meter Rp30.000,00.
		//Biaya pemagar seluruhnya adalah ...
		ss = ""+Nama[0]+" mempunyai sebidang tanah berbentuk persegipanjang berukuran "+pp+" m x "+ll+" m. <br>";
		ss += "Di sekeliling tanah dipagari dengan biaya per meter Rp"+StringRibuan(harga)+",00. <br>";
		ss += "Biaya pemagar seluruhnya adalah ...";
		
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
	function GetSoal10(){
	
		const Aljabar = MySegiempat10();
		//[pp,ll,kali];ArSisi
		var kel=Aljabar[0][0];
		var ratio1=Aljabar[0][1];
		var ratio2=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//10.	Keliling suatu persegi panjang 80 cm. 
		//Jika perbandingan panjang dan lebarnya 7 : 3, 
		//maka luas persegi panjang tersebut adalah ...
		ss = "Keliling suatu persegi panjang "+kel+" cm. <br>";
		ss += "Jika perbandingan panjang dan lebarnya "+ratio1+" : "+ratio2+", ";
		ss += "maka luas persegi panjang tersebut adalah ...";
		
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
	function GetSoal11(canv){
		const Aljabar = MySegiempat11();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var OC=Aljabar[0][3];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat11(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//11. Jika panjang OC = 6 cm, maka luas bangun ABCDEF adalah ...
		ss = "Jika panjang OC = "+OC+" cm, <br>";
		ss += "maka luas bangun ABCDEF adalah ... ";
		
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
	function GetSoal12(){
		const Aljabar = MySegiempat12();
		//[pp,ll,kali];ArSisi
		var pp=Aljabar[0][0];
		var ll=Aljabar[0][1];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//12. Sebuah kolam renang berbentuk persegi panjang berukuran 15 m dan 10 m. 
		//Di sekeliling kolam dibuat jalan dengan lebar 1 m dan dipasang keramik. 
		//Luas keramik yang diperlukan untuk jalan adalah ...
		ss = "Sebuah kolam renang berbentuk persegi panjang berukuran "+pp+" m dan "+ll+" m. <br>";
		ss += "Di sekeliling kolam dibuat jalan dengan lebar 1 m dan dipasang keramik. <br>";
		ss += "Luas keramik yang diperlukan untuk jalan adalah ...";
		
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
	function GetSoal13(){
		const Aljabar = MySegiempat13();
		//[pp,ll,jarak];ArSisi
		var pp=Aljabar[0][0];
		var ll=Aljabar[0][1];
		var jarak=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//13. Sebuah taman berbentuk persegi panjang berukuran panjang 32 m dan lebar 24 m. 
		//Di sekeliling taman akan dipasang lampu dengan jarak antar lampu 4 m. 
		//Jumlah lampu yang diperlukan ...
		ss = "Sebuah taman berbentuk persegi panjang berukuran panjang "+pp+" m dan "+ll+" m. <br>";
		ss += "Di sekeliling taman akan dipasang lampu dengan jarak antar lampu "+jarak+" m. <br>";
		ss += "Jumlah lampu yang diperlukan ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" buah<br>B. "+Ar[1]+" buah<br>C. "+Ar[2]+" buah<br>D. "+Ar[3]+" buah</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(){
		const Aljabar = MySegiempat14();
		//ArSisi=[Kel,pjg,lbr];
		var Kel=Aljabar[0][0];
		var pjg=Aljabar[0][1];
		var lbr=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//14. Diketahui keliling persegi panjang 64 m dengan ukuran panjang (3x + 7) m dan lebar (2x + 5) m. 
		//Maka panjang dan lebar persegi panjang berturut-turut adalah ...
		ss = "Diketahui keliling persegi panjang "+Kel+" m dengan ukuran panjang ("+pjg+") m dan lebar ("+lbr+") m. . <br>";
		ss += "Maka panjang dan lebar persegi panjang berturut-turut adalah ...";
		
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
	function GetSoal15(canv){
		const Aljabar = MySegiempat15();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat15(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//15. ABCD dan EFGH adalah persegi. 
		//Titik D adalah titik pusat persegi EFGH. 
		//Luas daerah 'arsir' adalah ...
		ss = "ABCD dan EFGH adalah persegi. <br>";
		ss += "Titik D adalah titik pusat persegi EFGH. <br>";
		ss += "Luas daerah <b>'arsir'</b> adalah ...  ";
		
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
	function GetSoal16(canv){
		const Aljabar = MySegiempat16();
		//[ArSisi,benar,arrSalah];[DE,CD,BC,AB];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat16(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//16. Perhatikan gambar di atas!
		//Keliling bangun tersebut adalah ...
		ss = "Keliling bangun tersebut adalah ... ";
		
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
	function GetSoal17(){
		const Aljabar = MySegiempat17();
		//ArSisi=[Kel,pjg,lbr];
		var Luas=Aljabar[0][0];
		var dia1=Aljabar[0][1];
		var dia2=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//17. Sebuah belah ketupat KLMN dengan diagonal KM = 24 cm. 
		//Jika luas belah ketupat 384 cm\u{00B2}, keliling belah ketupat tersebut adalah ...
		ss = "Sebuah belah ketupat KLMN dengan diagonal KM = "+dia1+" cm. <br>";
		ss += "Jika luas belah ketupat "+Luas+" cm\u{00B2}, keliling belah ketupat tersebut adalah ...";
		
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
	function GetSoal18(canv){
		const Aljabar = MySegiempat18();
		//[ArSisi,benar,arrSalah];[MN,LM,PS,luasQRUT];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat18(canv,ArSisi);
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//18.	Perhatikan gambar persegi panjang KLMN dan persegi PQRS!
		//Jika luas daerah yang diarsir adalah 40 cm\u{00B2}, luas daerah yang tidak diarsir adalah ...
		ss = "Perhatikan gambar persegi panjang KLMN dan persegi PQRS! <br>";
		ss += "Jika luas daerah yang diarsir adalah "+ArSisi[3]+" cm\u{00B2}, luas daerah yang tidak diarsir adalah ...  ";
		
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
	function GetSoal19(){
		const Aljabar = MySegiempat19();
		//ArSisi=[Kel,pjg,lbr];
		var Kel=Aljabar[0][0];
		var dia1=Aljabar[0][1];
		var dia2=Aljabar[0][2];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		//17. Luas belah ketupat yang panjang salah satu diagonalnya "+dia1+" cm dan kelilingnya "+Kel+" cm adalah  =  cm.
		ss = "Luas belah ketupat yang panjang salah satu diagonalnya "+dia1+" cm dan kelilingnya "+Kel+" cm adalah ... <br>";
		//ss += "Jika luas belah ketupat "+Kel+" cm, keliling belah ketupat tersebut adalah ...";
		
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
	function GetSoal20(canv){
		const Aljabar = MySegiempat20();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var OC=Aljabar[0][3];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		const DrawPGL = GambarSegiempat20(canv,ArSisi);
		//ArSisi = [AB,CD,BC];
		var ss
		//20.	Perhatikan gambar!
		//Jika panjang AB = (6x – 3) cm, CD = (3x – 1) cm, dan BC = (2x + 3) cm, maka panjang AD = ...
		ss = "Jika panjang AB = "+ArSisi[0]+", CD = "+ArSisi[1]+", dan BC = "+ArSisi[2]+", maka panjang AD = ... ";
		
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
	
	
	
	dd1.innerHTML="<p>Bab 11 \u{2192} Segiempat </p>";
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 205;
		cc1.height = 180;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 212;
		cc1.height = 190;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 296;
		cc1.height = 160;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 370;
		cc1.height = 180;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 202;
		cc1.height = 300;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 193;
		cc1.height = 250;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 274;
		cc1.height = 180;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 238;
		cc1.height = 220;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 370;
		cc1.height = 220;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 309;
		cc1.height = 188;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 174;
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

