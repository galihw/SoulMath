function Print14(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function SplitStringKomaSaja(ff){
		var gg = new Array();
		var strff = ""+ff;
		var mm = strff.split(",");
		var len = mm.length;
		var i;
		for (var i=0; i<len; i++){
			gg.push(mm[i]);
		}
		
		return gg;
	}
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function MyBangunRuang1(){
		var aa = RandomAngkaAtoB(8,7);
		var bb = aa-RandomAngkaAtoB(2,4);
		var cc = RandomAngkaAtoB(4,3);
		var diagonal = "\u{221A}"+(aa**2+bb**2+cc**2);
		var diagonal1 = "\u{221A}"+(aa+bb+cc);
		var diagonal2 = "\u{221A}"+(aa*bb*cc);
		var diagonal3 = "\u{221A}"+(aa**2+bb**2+cc);
		var diagonal4 = "\u{221A}"+(aa**2+bb+cc**2);
		var diagonal5 = "\u{221A}"+(aa+bb**2+cc**2);
		var ArSisi = [aa,bb,cc];
		
		//"(\u0006"
		var benar = diagonal;
		var salah1 = diagonal1;
		var salah2 = diagonal2;
		var salah3 = diagonal3;
		var salah4 = diagonal4;
		var salah5 = diagonal5;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang2(){
		var a1 = RandomAngkaAtoB(1,7);
		var a2 = a1;
		var a3 = RandomAngkaAtoB(1,7);
		var b1 = RandomAngkaAtoB(1,8);
		var b2 = b1;
		var b3 = b1;
		var c1 = RandomAngkaAtoB(1,9);
		var c2 = RandomAngkaAtoB(1,9);
		var d1 = RandomAngkaAtoB(1,10);
		var d2 = RandomAngkaAtoB(1,10);
		var d3 = RandomAngkaAtoB(1,10);
		
		var rusuka = 4*(a1+a3);
		var rusukb = 12*(b1);
		var rusukc = 3*(2*c1+c2);
		var rusukd = 4*(d1+d2+d3);
		
		var total = rusuka + rusukb + rusukc + rusukd;
		var kawat = Math.ceil(total/10)*10 + 10;
		
		var sisa = kawat-total;
		
		var diagonal = sisa;
		var diagonal1 = sisa+1;
		var diagonal2 = sisa+2;
		var diagonal3 = sisa+3;
		var diagonal4 = sisa-1;
		var diagonal5 = sisa-2;
		var diagonal6 = sisa-3;
		var ArSisi = [kawat,a1,a2,a3,b1,b2,b3,c1,c2,d1,d2,d3];
		
		//"(\u0006"
		var benar = diagonal;
		var salah1 = diagonal1;
		var salah2 = diagonal2;
		var salah3 = diagonal3;
		var salah4 = diagonal4;
		var salah5 = diagonal5;
		var salah6 = diagonal6;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang3(){
		var arrSalah = ["prisma segitiga",
						"prisma segiempat",
						"prisma segilima",
						"prisma segienam",
						"prisma segitujuh",
						"prisma segidelapan",
						"prisma segisembilan",
						"prisma segisepuluh",
						"prisma segisebelas"]

		var RusukSisi = [[9,12,"prisma segitiga"],[12,6,"prisma segiempat"],[15,7,"prisma segilima"],[18,8,"prisma segienam"],[21,9,"prisma segitujuh"],[24,10,"prisma segidelapan"],[27,11,"prisma segisembilan,"],[30,12,"prisma segisepuluh"],[33,13,"prisma segisebelas"]]
		var pil = RandomAngkaAtoB(-1,9);
		
		var ArSisi = [RusukSisi[pil]];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = RusukSisi[pil][2];
		/*
		var salah1 = DigitKoma(Busur/2,2);
		var salah2 = DigitKoma(Busur*2,2);
		var salah3 = DigitKoma(Busur*4,2);
		var salah4 = DigitKoma(Busur/4,2);
		arrSalah = [salah1,salah2,salah3,salah4];
		*/
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang4(){
		var pyth = [[4,3,5],[12,5,13],[6,8,10],[24,7,25],[8,15,17]];
		var pil = RandomAngkaAtoB(-1,5);
		
		var dd = RandomAngkaAtoB(2,9);
		var aa = dd+pyth[pil][0];
		
		do{
			var bb = RandomAngkaAtoB(2,4);
			var cc = pyth[pil][2];
			var tt = pyth[pil][1];
		}while(bb==cc);
		
		var luas = 2*(aa+dd)/2*tt + dd*bb + aa*bb + bb*cc + bb*tt;
		var luas1 = (aa+dd)/2*tt + dd*bb + aa*bb + bb*cc + bb*tt;
		var luas2 = 2*(aa+dd)/2*tt + dd*bb + aa*bb + bb*cc;
		var luas3 = 2*(aa+dd)/2*tt + dd*bb + aa*bb + bb*tt;			
		var luas4 = 2*(aa+dd)*tt + dd*bb + aa*bb + bb*cc + bb*tt;
		
		var ArSisi = [aa,bb,cc,dd];
		
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang5(){
		var aa = 0.5*RandomAngkaAtoB(0,3);
		var cc = 2*aa;
		var ee = aa;
		var bb = 5*RandomAngkaAtoB(0,3);
		var dd = 5*RandomAngkaAtoB(0,3);
		var ff = 5*RandomAngkaAtoB(0,3);
		var ii = bb+dd+ff;
		var gg = aa+cc+ee;
		var hh = 5*RandomAngkaAtoB(2,3);
		
		
		var volume = hh*(aa*bb + (aa+cc)*dd + (aa+cc+ee)*ff);
		var volume1 = gg*(aa*bb + (aa+cc)*dd + (aa+cc+ee)*ff);
		var volume2 = hh*(aa*bb + (cc)*dd + (aa+cc+ee)*ff);
		var volume3 = hh*(aa*bb + (aa+cc)*dd + (ee)*ff);
		var volume4 = hh*(aa*bb + (cc)*dd + (ee)*ff);
		
		var ArSisi = [aa,bb,cc,dd,ee,ff,gg,hh,ii];
		
		//"(\u0006"
		var benar = volume;
		var salah1 = volume1;
		var salah2 = volume2;
		var salah3 = volume3;
		var salah4 = volume4;
		arrSalah = [salah1,salah2,salah3,salah4];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang6(){
		var pil = RandomAngkaAtoB(-1,11);
		var arrSalah = ["1, 2, Benar dan 3, 4 Salah",
						"2, 3, Benar dan 1, 4 Salah",
						"3, 4, Benar dan 1, 2 Salah",
						"1, 3, Benar dan 2, 4 Salah",
						"2, 4, Benar dan 1, 3 Salah",
						"1, 4, Benar dan 2, 3 Salah",
						"1, 2, 3 Benar dan 4 Salah",
						"1, 2, 4 Benar dan 3 Salah",
						"1, 3, 4 Benar dan 2 Salah",
						"2, 3, 4 Benar dan 1 Salah",
						"Semua Benar"
						]
	
		
		var ArSisi = [pil];
		
		//"(\u0006"
		var benar = arrSalah[pil];
		//var salah1 = volume1;
		//var salah2 = volume2;
		//var salah3 = volume3;
		//var salah4 = volume4;
		//arrSalah = [salah1,salah2,salah3,salah4];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang7(){
		do{
			var rusuk = RandomAngkaAtoB(1,9);
		}while(rusuk==6);
		var totalrusuk = 12*rusuk;
		var luas = 6*rusuk**2;
		var luas1 = 4*rusuk**2;
		var luas2 = rusuk**3;
		var luas3 = luas+rusuk;
		var luas4 = luas-rusuk;
		
		var ArSisi = [rusuk];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang8(){
		
		var arrSalah = [
						"Limas",
						"Kerucut",
						"Segiempat",
						"Persegi",
						"Tabung",
						"Bola"
						]
		arrSalah = RandomMyArray(arrSalah);
		var ArSisi = [1];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = "Prisma";
		/*
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		arrSalah = [salah1,salah2,salah3,salah4];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1||ff2||ff3);
		*/
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang9(){
		var pil = RandomAngkaAtoB(-1,4);
		var arrSalah = [32,
						28,
						24,
						20
						]
		var ArSisi = [pil];
		var benar = arrSalah[pil];
		do{
			var arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang10(){
		var pyth = [[4,3,5],[12,5,13],[6,8,10],[24,7,25],[8,15,17]];
		var pil = RandomAngkaAtoB(-1,5);
		var harga = 5000*RandomAngkaAtoB(2,5);
		
		var dd = RandomAngkaAtoB(2,9)/10;
		var aa = dd+pyth[pil][0]/10;
		do{
			var bb = RandomAngkaAtoB(2,4)/10;
			var cc = pyth[pil][2]/10;
			var tt = pyth[pil][1]/10;
		}while(bb==cc);
		aa = Math.round(aa*10)/10;
		bb = Math.round(bb*10)/10;
		cc = Math.round(cc*10)/10;
		dd = Math.round(dd*10)/10;
		tt = Math.round(tt*10)/10;
		
		var pjg = 2*aa + 4*bb + 4*cc + 2*dd;
		var totHarga = harga*pjg;
		pjg = Math.round(pjg*10)/10;
		totHarga = Math.round(totHarga*10)/10;
		
		var luas = totHarga;
		var luas1 = harga*(2*aa + 2*bb + 4*cc + 2*dd);
		var luas2 = harga*(2*aa + 2*bb + 2*cc + 2*dd);
		var luas3 = harga*(2*aa + 4*bb + 2*cc + 2*dd);
		var luas4 = 2*harga*(2*aa + 4*bb + 4*cc + 2*dd);
		
		luas = Math.round(luas*10)/10;
		luas1 = Math.round(luas1*10)/10;
		luas2 = Math.round(luas2*10)/10;
		luas3 = Math.round(luas3*10)/10;
		luas4 = Math.round(luas4*10)/10;
		
		var ArSisi = [SplitKomaString(aa),SplitKomaString(bb),SplitKomaString(cc),SplitKomaString(dd),harga];
		
		//"(\u0006"
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		/*
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		*/
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang11(){
		do{
			var aa = RandomAngkaAtoB(2,9);
			var bb = RandomAngkaAtoB(2,11);
			var cc = RandomAngkaAtoB(3,12);
		}while(aa==bb || aa==cc || bb==cc)
		
		var volume = aa*bb*cc;
		var volume1 = aa*bb*cc+aa;
		var volume2 = aa*bb*cc+bb;
		var volume3 = aa*bb*cc+cc;
		var volume4 = aa*bb*cc-aa;
		var volume5 = aa*bb*cc-bb;
		var volume6 = aa*bb*cc-cc;
		var volume7 = aa*bb*cc-10;
		var volume8 = aa*bb*cc+10;
		
		
		var ArSisi = [aa,bb,cc];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = volume;
		var salah1 = volume1;
		var salah2 = volume2;
		var salah3 = volume3;
		var salah4 = volume4;
		var salah5 = volume5;
		var salah6 = volume6;
		var salah7 = volume7;
		var salah8 = volume8;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
			var ff3 = arrSalah[1]==arrSalah[2];
		}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang12(){
		var pyth = [[4,3,5],[12,5,13],[6,8,10],[24,7,25],[8,15,17],
					[3,4,5],[5,12,13],[8,6,10],[7,24,25],[15,8,17]];
		var pil = RandomAngkaAtoB(-1,5);
		var dia1 = 2*pyth[pil][0];
		var dia2 = 2*pyth[pil][1];
		var rr = pyth[pil][2];
		
		var tt = RandomAngkaAtoB(2,5);
		
		var luas = 2*dia1*dia2/2 + 4*rr*tt;
		var luas1 = 2*dia1*dia2 + 4*rr*tt;
		var luas2 = dia1*dia2/2 + 4*rr*tt;
		var luas3 = dia1*dia2/2*tt;
		
		var ArSisi = [dia1,dia2,tt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var arrSalah = [salah1,salah2,salah3];
		//arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang13(){
		var pyth = [[4,3,5],[12,5,13],[6,8,10],[24,7,25],[8,15,17],
					[3,4,5],[5,12,13],[8,6,10],[7,24,25],[15,8,17]];
		var pil = RandomAngkaAtoB(-1,10);
		var aa = pyth[pil][0];
		var ss = 2*aa;
		var kel = 4*ss;
		var tt = pyth[pil][1];
		
		//var luas = 2*ss*ss + 4*pyth[pil][2]*ss/2;
		//var luas1 = 2*ss*ss + 4*pyth[pil][1]*ss/2;
		//var luas2 = 2*ss*ss + 4*pyth[pil][0]*ss/2;
		//var luas3 = 2*ss*ss + pyth[pil][1]*ss/2;
		//var luas4 = 2*ss*ss + 4*pyth[pil][1]*ss;
		var luas = 2*ss*ss + kel*tt;
		var luas1 = ss*ss + kel*tt;
		var luas2 = ss*ss + 2*kel*tt;
		var luas3 = ss*ss + kel*tt/2;
		var luas4 = 2*ss*ss + 2*kel*tt;
		
		
		var ArSisi = [kel,tt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		//arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang14(){
		var pi = 22/7;
		var rr = 7*RandomAngkaAtoB(0,5);
		var dd = 2*rr;
		var tt = 3*RandomAngkaAtoB(3,5);
		var volume = Math.round(1/3*pi*rr**2*tt);
		var volume1 = Math.round(1/3*pi*rr*2*tt);
		var volume2 = Math.round(1/3*2*pi*rr**2*tt);
		var volume3 = Math.round(1/3*pi*dd**2*tt);
		
		var ArSisi = [dd,tt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = volume;
		var salah1 = volume1;
		var salah2 = volume2;
		var salah3 = volume3;
		var arrSalah = [salah1,salah2,salah3];
		//arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang15(){
		var pyth = [[4,3,5],[12,5,13],[6,8,10],[24,7,25],[8,15,17],
					[3,4,5],[5,12,13],[8,6,10],[7,24,25],[15,8,17]];
		var pil = RandomAngkaAtoB(-1,10);
		var ss = pyth[pil][2];
		var rr = pyth[pil][0];
		var dd = 2*rr;
		var rr2 = 2*rr;
		var jrk = rr+rr2;
		var pi = 3.14;
		
		var luasA = pi*rr*ss;
		var luasA1 = pi*dd*ss;
		var luasB = (pi*rr2**2 - pi*rr**2);
		var luasB1 = (pi*jrk**2 - pi*rr**2);
		var Luas = luasA+luasB;
		var Luas1 = Math.abs(luasA-luasB);
		var Luas2 = luasA+luasB1;
		var Luas3 = Math.abs(luasA-luasB1);
		var Luas4 = luasA1+luasB1;
		var Luas5 = Math.abs(luasA1-luasB1);
		var Luas6 = luasA1+luasB;
		var Luas7 = Math.abs(luasA1-luasB);
		
		
		Luas = DigitKoma(Luas,2);
		Luas1 = DigitKoma(Luas1,2);
		Luas2 = DigitKoma(Luas2,2);
		Luas3 = DigitKoma(Luas3,2);
		Luas4 = DigitKoma(Luas4,2);
		Luas5 = DigitKoma(Luas5,2);
		Luas6 = DigitKoma(Luas6,2);
		Luas7 = DigitKoma(Luas7,2);
		
		
		var ArSisi = [dd,jrk,ss];
		
		//"(\u0006"
		var benar = SplitKomaString(Luas);
		var salah1 = SplitKomaString(Luas1);
		var salah2 = SplitKomaString(Luas2);
		var salah3 = SplitKomaString(Luas3);
		var salah4 = SplitKomaString(Luas4);
		var salah5 = SplitKomaString(Luas5);
		var salah6 = SplitKomaString(Luas6);
		var salah7 = SplitKomaString(Luas7);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang16(){
		var pyth = [[4,3,5],[12,5,13],[6,8,10],[24,7,25],[8,15,17],
					[3,4,5],[5,12,13],[8,6,10],[7,24,25],[15,8,17]];
		var pil = RandomAngkaAtoB(-1,10);
		var ss = pyth[pil][2];
		var rr = 7*RandomAngkaAtoB(0,5);
		var dd = 2*rr;
		var tt = RandomAngkaAtoB(5,15);
		var pi = 22/7;
		
		var luasA = pi*rr*rr;
		var luasA1 = pi*rr;
		var luasB = (pi*rr*2*tt);
		var luasB1 = (pi*rr*tt);;
		var luasC = (4*pi*rr**2)/2;
		var luasC1 = (4*pi*rr**2);
		var Luas = luasA+luasB+luasC;
		var Luas1 = 2*luasA+luasB+luasC;
		var Luas2 = 2*luasA+luasB+2*luasC;
		var Luas3 = luasA+luasB+2*luasC;
		var Luas4 = luasA1+luasB1+luasC1;
		var Luas5 = luasA+luasB1+luasC1;
		var Luas6 = luasA1+luasB1+luasC;
		var Luas7 = luasA1+luasB+luasC1;
		
		/*
		Luas = DigitKoma(Luas,2);
		Luas1 = DigitKoma(Luas1,2);
		Luas2 = DigitKoma(Luas2,2);
		Luas3 = DigitKoma(Luas3,2);
		Luas4 = DigitKoma(Luas4,2);
		Luas5 = DigitKoma(Luas5,2);
		Luas6 = DigitKoma(Luas6,2);
		Luas7 = DigitKoma(Luas7,2);
		*/
		
		var ArSisi = [dd,tt];
		
		//"(\u0006"
		var benar = SplitKomaString(Luas);
		var salah1 = SplitKomaString(Luas1);
		var salah2 = SplitKomaString(Luas2);
		var salah3 = SplitKomaString(Luas3);
		var salah4 = SplitKomaString(Luas4);
		var salah5 = SplitKomaString(Luas5);
		var salah6 = SplitKomaString(Luas6);
		var salah7 = SplitKomaString(Luas7);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang17(){
		var pi = 22/7;
		var rr = 7*RandomAngkaAtoB(0,5);
		var dd = 2*rr;
		var tt = RandomAngkaAtoB(3,5);
		var luas = 2*pi*rr**2 + 2*pi*rr*tt;
		var luas1 = pi*rr**2 + 2*pi*rr*tt;
		var luas2 = 2*pi*rr**2 + pi*rr*tt;
		var luas3 = pi*rr**2 + pi*rr*tt;
		var luas4 = 4*pi*rr**2 + 2*pi*rr*tt;
		
		var ArSisi = [dd,tt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/;
		
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		//arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang18(){
		var pi = 22/7;
		var rr = 7*RandomAngkaAtoB(0,5)/10;
		var dd = 2*rr;
		var tt = RandomAngkaAtoB(3,5);
		var luas = 4/2*pi*rr**2;
		var luas1 = 4*pi*rr**2;
		var luas2 = pi*rr**2*4/3;
		var luas3 = pi*rr**2*4/3*1/2;
		var luas4 = 1/2*pi*rr**2;
		
		luas = DigitKoma(luas,2);
		luas1 = DigitKoma(luas1,2);
		luas2 = DigitKoma(luas2,2);
		luas3 = DigitKoma(luas3,2);
		luas4 = DigitKoma(luas4,2);
		
		var ArSisi = [rr,tt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		//arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//	var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2];
		//	var ff3 = arrSalah[1]==arrSalah[2];
		//}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang19(){
		var pi = 22/7;
		var rr = 7*RandomAngkaAtoB(0,3);
		var dd = 2*rr;
		var tt = 2*rr;
		var luasA = 4*pi*rr**2;
		var luas = 2*pi*rr**2 + 2*pi*rr*tt;
		var luas1 = 2*pi*rr**2 + pi*rr*tt;
		var luas2 = pi*rr**2 + 2*pi*rr*tt;
		var luas3 = pi*rr**2 + pi*rr*tt;
		var luas4 = 4*pi*rr**2 + pi*rr*tt;
		
		//luas = DigitKoma(luas,2);
		//luas1 = DigitKoma(luas1,2);
		//luas2 = DigitKoma(luas2,2);
		//luas3 = DigitKoma(luas3,2);
		//luas4 = DigitKoma(luas4,2);
		
		var ArSisi = [luasA,luas1];
		
		//"(\u0006"
		var benar = luas;
		var salah1 = luas1;
		var salah2 = luas2;
		var salah3 = luas3;
		var salah4 = luas4;
		arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		
		return [ArSisi,benar,arrSalah];
	}
	function MyBangunRuang20(){
		var dia1 = 2*RandomAngkaAtoB(3,10);
		var dia2 = 2*RandomAngkaAtoB(2,5);
		var tt = RandomAngkaAtoB(3,5);
		var volume = dia1*dia2*tt/2;
		var volume1 = dia1*dia2*tt;
		var volume2 = dia1*dia2*tt*2;
		var volume3 = dia1*dia2*tt-tt;
		var volume4 = dia1*dia2*tt/4;
		var volume5 = volume+100;
		var volume6 = volume-100;
		var volume7 = volume4+100;
		var volume8 = volume4-100;
		
		//volume = DigitKoma(volume,2);
		//volume1 = DigitKoma(volume1,2);
		//volume2 = DigitKoma(volume2,2);
		//volume3 = DigitKoma(volume3,2);
		//volume4 = DigitKoma(volume4,2);
		
		var ArSisi = [dia1,dia2,tt];
		
		/*"(\u0006");
		\u0006 = minus
		\u00B2 = pangkat2
		\u00D7 = kali
		*/
		
		var benar = volume;
		var salah1 = volume1;
		var salah2 = volume2;
		var salah3 = volume3;
		var salah4 = volume4;
		var salah5 = volume5;
		var salah6 = volume6;
		var salah7 = volume7;
		var salah8 = volume8;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		arrSalah = RandomMyArray(arrSalah);
		//arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			var ff3 = arrSalah[0]<0 || arrSalah[0]<0 || arrSalah[1]<0;
		}while(ff1||ff2||ff3);
		return [ArSisi,benar,arrSalah];
	}
	
	function GambarBangunRuang19(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",300,125);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",150,25);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",25,109);
			*/
		}
		return 0;
	}
	function GambarBangunRuang16(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAADICAYAAABCv5KJAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKNWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s6uL5TAAAACXBIWXMAAC4iAAAuIgGq4t2SAAArU0lEQVR4Xu2dC5yN1frHl1GJ5C4pOjkiEQcl19IhMS4ZtyREcpRSceSfUyqdcnJLJIqSiog47pISSe73a3K/38owhKj2//09e61tz2mMmb3ftd7b8/181metvcZlZs/az7vWs57n92QJWQgm04weLcSPPwpRp44QtWrJSYbJIPjU9ewpRJYsQvTuLcTVV8svML6DjWyM/OtfQqxcKUS7dkK0aSMnXck+q520WgK9Cg4XrPa38NCF/P57+AENIzttmhA5c8ovML6DjWyMvPSSEKtWhQ3sww/LSVeyxmoHrZaVXgWHc1ZLCg9dyB9/CJGYGDaykycLcc018guM7wja9iaA4Fd8RUAbwzgPG1mGYRiNsJFlGIbRCBtZhmEYjbCRZRiG0Qgb2TjB7TDDZJYE/uQFBv5VxwEMLOIdwfnz7mu//hr+/hCkh5ChIDWAnz+t98Xp9ttvQpw9y4Y2KHCcbIwgTnbLlrABw4fZjZw5I0SnTutEhQqHrQ93sOJkc+U6Jzp3bkgPQjeeNmBgERubnMxxsn6Hn6Vx4vZdIr6/oD5G03o/3NSYYMA72RjBTnbNGiGaNQtnfOH45zbwQc6RY5248srDlqEN1k42IeGcOHGioSuP5PieLlwQom3b8O+Id7L+ho1sjKi02kceEeKhh+SkK1lntcNWC2JabcPw0KXUrRt2ZbCR9TfsLogTPvYxscDrJjiwkWUYhtEIG1mGYRiNsJFlGIbRCBtZhmEYjbCR9T24YUFaWhAbwzgPh3DFiHcqI+yyWrLVgvY8RfmZSuGhC0F0AVdGCAZsZGPEO0aWcSNsZIMDuwsYhmE0wkaWYRhGI2xkGYZhNMJGlmEYRiNsZBmGYTTCRpZhGEYjbGQZhmE0wkaWYRhGI2xkGYZhNMJGlmEcArmWnG/pf9jIxghqep0+HS7xzDCZBWm1v/wSblwlwd+wdkGMoBAe3rmsWcONYTKLKiWfLVu4Z/wJG1mGYRiNsLuAYRhGI2xkGYZhNMJGlmEYRiNsZBmGYTTCRpZhGEYjbGTj4MKFC4KDMxiGSQ8O4Yri2LFjYtOmTdS2bdsmduzYIfbv3y8OHDggfvrpJzaojDby5csn6tevL9q2bSvuv/9+OZsxGjcOJ8Uk8JYpLpKThZg+XYgCBeSETQTWyG7ZskXMnTtXfPvtt2LRokVkYBnGLfTo0UP0799fvkqfRo3CiQ2cFPNncuYU4oorhDh3LtzSA0Z25kw2sjGzZs0aMXHiRDFt2jQysOlx3XXXiWLFiolbbrlFHDx4UOTKlUtUrFhR3H333eKPP/4QWbJkoT9z1VVXiUOHDomtW7eKb775RkyYMEH+C2H+9re/ia+++kr89ttv4jRycJlAgPWRYG0r0VatWiVWr15N66ZNmzYiR44c1ulor7V2corOnfNYf/aC6Nlzh9i1a721fibRn41mzJgx9PfSw1qCBCrfMheBge3TR4iNG8MPogcfTN/QWh9TccMNGk4EMLJ+xTJ6IevohYdImi137tyhhg0bhvr27RuaP39+6JdffqG/9+uvv1IP1q5dG5oyZUrka5dj8uTJoQIFCqT6fzZt2iS/ygSF5ORkOQqFPvzww9DSpUvlq4ssWRKy5uWLKLp3755q/VgPa/kVJrO89FIolJgYCo0bJyccwHdGFgaxWrVqqRapatbuM/T000+HrN1lyNpZyL+Rmnnz5oX69OkTsna+ciY2Ro0aler/HjlypPwK42fOnj1Lv+tBgwbROB7q1auXag1ZpyH5FSaj9OoVNrJjx8oJB/CFqxyXU+3ataNjWpMmTcTixYvlV4SoVauWGDt2rDh//rw4cuSIePvtt8V9991HfzYtUlJSRNasWcXOnTvlTGx06NBBWLtfcc0119DrTp06id69e9OY8S+///67OHPmDEWeYF2mx9dfCzFvXviYmhZffPGFGDdunHyF429OuoBlPIY0tp5kxowZoSJFiqR62qPVrFkzNHPmTPmnMoZlhOUoFPcu9n+pXLly5Ht7/vnn5SzjJ6JdTHAVHD58WL5KmwsXsC5CoSpVQqGUFDl5CSxjnWp9X+7fZi7CO9kYGTZsmLjiiitEo0aNIruFvHnz0rz1M4kFCxaIBg0a0HxGwKXVO++8I06ePEmvy5cvT71dLF26VPz973+ncb9+/cSoUaNozPgDrLmRI0eKqVOn0us8efKIQoUK0Tg9rrtOiIIFL39hdeONN4pTp07JV0Jcf/319H8y3sBTRnbIkCF0zO/SpQsdywDcAevXrxfHjx8XTz75JM1lBhztVqxYQREA+Hd0AUNepkwZGnfs2FFs3ryZxoz3Wb58ObmGfvzxx8iD+nIgrAgxmWi4Bb8ccBVEhxnmz59fjhjXg+2s2xkzZkyq4xLaI488kuqIHw846uHCywTWjjvyMzD+YePGjaG9e/fKV/qwNgKR9YOLMSZ92F1wGRDbWqBAAcqCUWAXaH3f4uOPPxZXXnmlnI0NJCEAxLtiR2wC7LgVxYsXlyPGi+zevTvirsIppWjRojTOCDiINW0qRLNmgsoYZZSyZcuKoUOH0njOnDl0qcu4G9caWUQAIAHg559/ptdJSUnC2nGK999/n17Hy4wZM8SSJUvIWJtm9uzZ1COCAdEOjPeAu2rKlCni008/FWvXrpWzGQcu1YMHwy2z7lW4y+666y4aYwOCTQfjXlxnZHGBAL+rdXyn1yVKlKCsKixo7DjtApcTCLNRi9UkiYmJ1g7G2sJYPPvssxRexniLc+fOiYIFC9JpCpl9mQUpsK++KgSi+rJnl5OZYNmyZXIkxB133CFHjBtxTVotLp5Kly5NwiwKGFbsYHWBVFdcKDiFitVFNANcI4z3cHIN4TK1du3aNEa6+AMPPEBj5iIvvSTEqlVCtG4dbk7gip3sZ599RjsCZWBhWGH7dRhY5JIr7QInDSyArgHAcVONGfcDg4ZoAhDPGlq+XIgVK8L+2VjAPULlypVp3BhSXIwrcdzI1qlTR7Rq1Uq+CseUYgerAxzL4YbAhwRhW04DvzN27yCz8naMM2DdIFRr8ODBdPqKFfzVp58OtzNn5GQMYDer6NWrlxwxbsIxI4v0QPhYv0ZuoUXNmjVp96qezDqAEhJuZ5HqWqlSJTnrLPPnz5cjwUkKHgCJAEh8qVatGiXExEO+fEiiiU89C6peXbt2pXEfSE4xrsMRnyxysiFQrPjggw/EY489Jl8Fj5YtW5IMI3CJi5zxGMq/37lzZzF8+HAaMwH1yb5k/dTRBhaiLSYMLERjENfoRhAGpOCQLveC0DuEEboRtYt99913qWfcg1EjCz2B119/nca333477dogfq0bfDC+++47MX78ePHDDz/IWfeAY+eDUBS2QEgX4z4QMrVx40bbHoK47GrXToj27YWQd2hx8cILL8iREP/85z/liHEDxowsMmJUEH5ra9++YcMGGpsARhZVDuCLLVWqlJx1F9FJEUpohHEPuXPnpkiCKlWqyJn4gFdo69Zw++MPORknytC+9dZb1DPuwIhPFkHbSgezb9++4vnnn6cxk5p69eqJL7/8knb3cKMw/gWfukmTwmNEKsaZIR5B+Wbhl4V/NugEwieLp78ysJ9//rlxA7t3717PGCyEBYGjR49qVQRjMgcSReIJ10oL2MIWLcLNLgMLVDjkc889Rz3jPFqNbPbs2SNB24jna968OY1NgiD/0aNHi4ULF8oZ9wJXBnb94MUXX6SecZbk5GQSYhk4cGAqTVc7QE4Mml3uAgC9YqAkPBnn0WZk4f9EfjeIFq02CXYfuFRCEgLEZryA+pDMRG1ixnFwCkMsKlw41157rZyNH2yM7bz4UkAJTKm7cbkjd6DFJ3vDDTeQqAtA6FTVqlVp7BR4quOD4hWUX23EiBFUG4xxnrNnz9LJzC5gZOvWDbsNkOBoo/2mmGvEXgMDVy6uxpc+WewYlYHFUd0pA4vFBeMKvGRggXKrvPbaa9QzzqBcXcBOAwuQLAahOSQ82mlggQoHBO+9954cMU5hq5GFcVBqUgiwR26+U+zZs4dCWZzQi42XHj16UA9BaFyCMc4wa9YsMWDAAE/6NlH/DiCah3EW24wsfpmTJ0+mMXxBDz/8MI2dAoHjCQkJtvrRTBGtcQuXAeMMiEyBX19HwgySESAO88wz8QnEXIr/+7//ox6bDVUPj3EI+GTjZeHChXD8UEtKSpKzznPkyJHQsWPH5Ctv0aVLF3o/CxQoIGcYJ9iyZYsc2UtmSoLHivpMDhkyRM4ED1/U+MLN/T333ENj3GzqkimMBexAUCPMizzxxBPU43Y7oxVQGfvRlSFoHbIE7jTRsmWTkzaDzErAegbOEreRzQe9NgmOV24A6btwXezbt0/OeA9VPhzwh8Q80ChAbLcuQRgY2Q4dhHj0URTylJM20wH/gQX0OiDzyThDXEa2Xbt2kRvYzZs3U+8Gtm7dSlUWTpw4IWe8iQrD+eSTT6hnzLB9+3aKTEEVjWy6tpkWBw6Em64oq+gKzOPGjZMjxjQxG9kFCxZEPvz/+c9/xG233UZjNwC1Lxzz3PQ9xcLjjz9OvSqXw5ihcOHCVDtLZ4FCxMk2aRIuC25zIlkqlKFlI+scMScjqIB5VOqMpSQykzHU+zx9+vRIWA7jfWBk7747nIwwZ44QuXLJL9gMNkI4cYIYP+qexrPJCOqiC7jNwK5cuTKSDOEHUC4HjBkzhnpGL3ATrF69mqrQ6gTJCEuWICNSn4EF0fXzeDPkDJk2snPnziUBbKDiYt0CnPu4rIAgzAE4u3xAC8g0WbCWgRlQJBFrHGvID6AKtMpWc1PkT5DItJGti4RrC6TLNoVDyUWkpKRQ2BZEYW688UY5623atGlDPXLnde+uGCEuXLhACSwQedcJLvuhsY1m/Wq18tBDD1HPYvDOkCmfLGpxffjhhzTGrlH5Cxm9qPcZlxfRxz/Gu8AnW6NG2CdrbZxt1y+IBlKNiYmJNA6aX9ZTPlkIXysD++abb7KBNYgS2eGdiF5MGiDEyeJ5iU2mrjhZRXQol9IWYcyRYSOr9GChaOXWQm1QrULgvt8ypFCWBkybNo16Rg+bNm0Sb7zxBlXw0A2MLGpmomkMxSWusqw4GoDoDWOWDBnZRYsWRWI150GfzYXgoitr1qzkt0TROz/RsGFD6pF9FMQwHFPs2LGDep0JCNGkpISbCRo3bkw9asgxZsmQTxaXSceOHRPlypUT69atk7PuAj/G8ePH6ft0a0XaeFDuGUR21IAzj7EdXHoh/A9GtlChQnJWD/DJwguEXys0ZXWGcQEVL4uNiN31ytyMJ3yyOF7AcIEZM2ZQ70ZghPLnz+9LAwtQbQJACJ3RA8KdbrrpJu0GVoHtjamDCTLYAGQPEanCmOOyRvaRRx6hHj5ZLEC3gthGOPX9uoDuRnqQBX5Oxn6gdob3FroXJkAywtKl4YQE3btYEB3SyA9qs6RrZBHYjyM4GD9+PPVuBE9nZHp98cUX2lSTnEbdEKMoJWM/u3btokyvb7/9Vs7oB4YWzRR/+ctfqIfuCGOOdI3so9Bhs0AIkakjVCygKi7ST/E95smTR876Cyeq/QYJJCAUK1ZMlChRQs7oBckIb7yBiiJYv3JSM2oNQV2MMcclL76gQalUrBDaUrp0aRozzqEuv1Bz6s4776Qx401MJiMoRo0aJTp27CiuvvrqwPhlXX3xpWJhceHidgOLnWwQUPXK4MZh7MX0GkKcLCLzGjTAhZuc1IySbsTPynW/zHFJIwv/JoBCvNtBuik0bf2ezVKhQgXqOWvHXiA8j6q0/fv3N1ZBAEa2V69wszaWRihfvrwcCbFhwwY5YnSTppGNLiPcrFkzOXIvycnJ1COEy89UrlyZejay9oKUccSPIj4WFY5NgTtap+5p3Rrv7kfSXFF4ooPOnTtT73a6detGviYVS+pXKlWqRD3KozD28de//pXcY6rcjwngk0XACJrOygj/i3IZsLasOf5kZPEBVjvDV155hXq3g92Hkjj0M8pdwP40+8Fl0PXXXy9fmeH8eWSZmUtIAGoNcYSBOf5kZOGbAlhwbg7bUuzevZuk3NavXy9n/Eu0xunGjRvliImX+fPnU+yoymw0AfYDkBHQWXomLVRGJOLKGTP8yciOHDmS+q5du1Lvdvbs2UM+SjdVyzUBQuwYe8ADesmSJcarG6OaflRFfSOosExOrTVHKiMbXRX1iSeekCN3U7BgQVo48KsFAfVzmkr/DAIQPkIiAlxOpkAQwzvvCDFsmNnLr+gIA9QzY/STysgiWBkUKFDAM3KBiOFNSkoSd911l5zxN2onwjtZ+0AmFEq0mFzzMLJjx4YbfLOmiL4cRioxo59URvbjjz+mHmVmvELQnsZqJxs094guIPsHiUPTINMLRZ/RnLqvZb++GVIZWSgRAaW85QVQCgdq9j///LOc8TdKCY3dBfaA9xEhi+ouwhRZsyJUUoh+/YSQxWSNkTdvXupxaczoJ2Jko1W2vKJTgEwdhUo59Tvqdjj6Z2diRz2cg7J+AMSUwM6dO6ln9BIxstOnT6de6ZZ6gWuuuUb07NmTLulUDSO/Y0olKijcY53XkYigSvyYAskINWsKce+9ZpMRgHI57d27l3pGLxEji1hT0KhRI+q9AtTs1fEnCETHLgfFRaKb7NZ53YmdLKKo0EwmIwAl4L1v3z7qGb1EjKyKEfSSkUWMrKqIEBSi9XJRPJKJD4h0Ixnh6NGjcsYMuOxCUdyJE83IHEaj/PrskzUDGVkU51N4qUYWnsRIDwxqOBP71OIHOfyoNmE6EQGgUAGalAk2hkofZr++GcjILly4kF4UKVKEeq8A1S3Ejd58881yJhjgeAtOnjxJPRM7JUuWJD+3aZcTXASffBJuJuNkgSpDw5iBjOyiRYvoRfXq1an3CjCwSERAeZwgoXYikOhj4iMxMVE0b96cMgdNAo2f4cOFePdd83KHpoVwgg4Z2eXLl9MLpVfqFaBGdYnqOb5GGQS+HY4fpxTN4CKAIBYaYmZNEu3X58sv/ZCRVRVpvVY36qOPPqJA8qBpYypx8sOHD1PPxEZKSoro168fJbSYNrYwrNjFYjebI4ecNER0uKPpC78gknD69Gk5FOL222+XI29w/vx5SosMSoysIp+UbuKLi/hArSuUm4GBRWWEoKAKcgK/p6Xj2YmYZENVhdIkIfqG2mvxpu3btxdPPfVUKp3VIKDcBdEPSCbz4H2EpOc//vEPOWMOfPCVdoHpZASgyuxgN28G/JBYr2ZbwYKnRdGip0WuXGl/XW/Dz3xWZJk6dWoIl0d401lx3xugYsW///1vUaZMGRb58Cgwsrhnxqbyq6/Mx8oiWxK7WIhCmdEqmSl7s/Fq8Kgh4QNuaPN7SGyfrxMJCOgHXtwNIpAcMb5BU+LKJaX0laAPExvwR2INrVixQs6YA8kIH3wQbpa9M44KAzTnk4VLL5vxdvZsNuvEl02cP5/21/W3K0XCwYMHrcHFLBAvATV7GFnTNfOdJmfOnNSz6HJ8IARu8eLFYvXq1XLGLNBpwTWIwQK5EVCZF3CFBP0kqBtqL1Z6LV68OIldoAhekMghr6NxacPEDh5WOME5EZyPyMMpU8LNATnbSBgXryH9JKjKtKaDse2gRYsWpGivjE5QgD8N8C4kPlByBmuoXr16csYcuP6Aliw0ZZ04iPEaMkfEyKLkDOMN1M0w70K8Cy68rIMYNSfcBWoNcYSKfhJUrKXy83kFxMiifDkaYmWDRHScIxM7EIYZOHCg+BxyWIZBWO6nn4ZrfDlx8aXWED+o9ZOgLk/U8cErINzs119/pRY0o6MuLZj4QG0vPKyDGLqo1hAbWf0kqAV2hVPV3GIEl12dOnWiFqRsHaDCb5j4qFixIiUiQCTGNDh83XefEHXqOJOMoNYQx8brJ2JkvWaosHtFnXyTtfIZf4HTGy58nSp/D3eo0y5R3snqJ0EZV6/5NfH9IogcsbJBU+JizQJ7OHToECnQbdmyRc6YAwfHt94SYtAg8wIxQLkJ1QUYo48E1MgCTtSejwcYWZSe+eabbwL3NOYjnj3s2LFDzJs3T6xbt07OmAUyyGhOHCLVpiporjYnSFAXXl4L5cDiQAKFFzPV4iVoqmO6QHoyigo6Eb6Iw5dl36k5cYhUa8hrdzFeJGJkTznhfY8D7MAfffRR0bZt28A9jYMWsqaLcuXKkTjKfbiBMgwOIy+8IMSLL4YFTEyjTkPqJMvoI0Fpkx47dox6xv1wbS9/gJJ6aE5EICqhft7J6sfTRhaK9ggmN6eJ6Q6UIA7vQuJjw4YNYtCgQST3ZxrYtsmThZg0CYlActIg6vKUXU/6SShcuDAN9u/fT72XwGUdkhG8dmkXL/iZwbWmRUh9BsIA8cAKopqZ+szwGtJPAhz/QOnKegmIw6A6glNxjk6hjILSlWViA6XkW7duLZo1ayZnzAG3Ov5bNCfunNVpKLqool4QZmm+ZclysaX1dRMtQcm8ebHyKT4keEgEza+k/GlBe7jYDfQ6sP6dSmg5cEAIyDk7EeatoonMrSH8kAi1NNsSEv4QWbOG+7S+rr9ZBn7r1q2hW2+91XqBX7YDv+042L59O/ljYWyVbzkIPPbYY+LDDz8U1apVE99//72cZTIL3C7btm2j/o477pCzZsBHbe7c8Lh27bCP1iRK72PWrFmifv36NPYjiN5YuVKINm2EaNtWThomAQZKcQCPVg+BQPIvv/zS2g2EqzsEBRVdwP60+MBubvr06bSOTAMbV7duuDl5EPO7ywnvM5LanIjgUCRE3y6uX79ejrwB/Ek46gXthlQJLatLSyY2IDKE4zLeRyey6JYtCzcnE/i8KNafGWBcVXMKSlxWftmV2Fd7iJYtW9LRuWTJknImGKA2FShUqBD1TGwgEQcl5Z1IaMHF1zPPCPHss7jIlJOGiK6Jx2tIP2RkK1euTC8gtsK4HxUJ4vddiN/BNYITVwnR7jVz0QXBhYxsjRo16IXXjCy+37feeov8akFClQLnD0j8jBgxghJa9u3bJ2fMAD/sF18IMXs2fOty0hBeu3vxOmRka9asSS9OnDhBvVdQweRBTTNVMc5M7CAoH81r2h3xoB7SjBnIyEIoQ4E69F6hRIkSFEju5xCU9EA5ayY+6tatKx5++GEqLW8SXHa1by/Eo48ixVVOGgI6uuD666+nntELGVmgJANnzJhBvRfInz8/XXqhDwpHjx6VI8FVIWwAD2pc/CLSwCSIk/3hByGgF25aDnnXrl3UQyqU0U/EyDZs2JD6adOmUe8FEHaDhITVq1d7LpEiVqL9aZxWGz8oib9582ZaRyZBMMNzz4WbYfseMbJO6OgGkYiRbdKkCfVOlOKIFRjZCRMmUEJCdFiKn/kB2x/GNrDesbEwfemLuM3mzcPNtJiaMrLYxTP6iRjZaOHib7/9Vo7cDZIQkH8O35JSpvI7Si2NL73sAWFwOBFgHZkG+xkn3QWlS5emntFLxMgC9aY7oa8ZK88++yxVSAhKOBPqUoGgJWDoArs5JCSok5wpkIzg1MUXXCSAL07NkMrIQjYQjB49mnrGfWzatIn6INY28xvIqUczeZ1w/vx5OQqr2DH6SWVkO3ToIEdCbN26VY7cDVSokJDwBSK7A4D6vdx2223UM/GDk1vfvn2NVgdBMgLcwIiYNHl/uXv3bjkSomjRonLE6CSVkUUolAqHGjZsGPVuRyUkBKVGmfo5y5YtSz0TP0hEQHRKENYQIikU2bNnlyNGJ6mMLICPEwwdOpR6twMtXPjTGjVqJGeCQYUKFeSIiRdc+iIhwaSPEskIXbqEm0mBGBWdwrtYc/zJyHbt2lWOhFixYoUcuRfsvEuVKiXy5s0rZ/zLunXr5IhlDu0E6wcJCSYlM+GHhejdqlVmpQ7XrFlDPZ+EzPEnIwshaOXv6927N/VuB6VzEOeoKnD6laVLl1KfLVs26hl7gLsJvu7ly5fLGf0gGaFTp3Az+etcBatuUaZMGeoZ/fzJyIJevXpRPxsSQR5g0qRJYsGCBb6vkLB27VrqOXzLXqDPO3nyZLFo0SI5ox8kI+CeGSFcJjXnVQig6XI7QSZNIwv/lKJ///5y5F6KFClCCQmqbpFfUe6C6tWrU8/YA9YOBLzhgvnDYGYA8krQnMgIr1KlihwxuskSukTSPwK0hw8fTuOg6AK4HbgJEOeIOGYV08x4EyQjqGfl11+b0ZRdtmxZxLgG5TP90kthv3fr1uHmBGnuZMGAAQPkyFvKXH7lN+tTqQLJK1WqRD1jPyZ3svivYOtM2bv58+dTz8JCZrmkkc2RI4eojVrFFqij5WYQ54iQs9dff13O+A/sQhR8aWE/uFSEa8yUCh2SERC8g7s2UzZPieCwq8AslzSyYOTIkdQjSNvkpUBmQUTEmTNnREJCQiq9VT+hbr7hO2TsB5sKqLr5+fJURadUq1aNesYM6RpZqMVXrFiRxq2dcmhkECQjPPnkk74tLojoCaBOF4y9YK2jyoapUxtiY//1LyFeeAEl3uWkZtQGBNUgGHOka2TB559/Tj1iUb+Gh96lQEEMSlx+jTCAZi6oVasW9Yy9QOoQoXGmKiTADwsXKRouwXQTncjC7gKzXNbI4gmvjhem5eAyw1lrO4AKCXPmzJEz/gGXXkov9+6776aesR9UnYCWsgnheqhvtWoVbibiZOfOnUs93CKMWS5rZIG6DDh9+rQYNWoUjd0Gsr1gYPHEjpZz8wPRIurKfcPYz4YNG+hyaP369XJGHzCykAl55hkzGV/KyKrK1Iw5MmRkUQvooYceonHHjh2pdxv4HqFfUL58edr5+QnlKkB+PaMPCHgjIcHU+3z8eLiZQLn6mjZtSj1jjgwZWTB+/Hg5EqJt27Zy5C46d+5MTn2/HYlUevMDDzxAPaOH4sWLi3bt2hnxWWIfgEr2DRogBFFOakJVQgCJiYlyxJgiw0YWKPnDsWPHip07d9LYjURXdPUDqhrC/fffTz2jF/i/ow2TLnBHa+KedsqUKXLEteGcIFNGtkuXLpFa/27UM/35559J4d5LNcouR3R8cn1sfRitzJs3T7z55puRkDldIBnhm2/w/+lPqYWAEqhRowb1jFkyZWSBCgVJSUkRzz//PI3dArRls2bNKq688krf7GZVSvMNN9xAyRaMXpSY9U8//US9TlCYwERxAlWaqWXLltQzZrmkQEx6dO/eXQwaNIjG+/btIxUst3D48GFSVfILKHa3Z88eElNHLTNGLxcuXKANhCrDpAvoFliHLnIXdOsmhK7wXGRrqtPnoUOHfPXZyAiuFohJDxynVCWCYsWKUe8W/LSI8IGHgQVuz7jzCzgF6TawAEZ2+vRws37N2vjggw+oR9WHoBlYtxDz+XPbtm3UI1yqYcOGNHYLX331Fe20oWfgZaIjOu688045YnQDEW9kOur07cPzg48Nogssu66NTz75hHqkDDPOELORxdN+xIgRNJ41a5arLpvwAMAuEMHlXkZ9QFik2yyQO9y+fTsdr1Wmnd3AyKIACZrOTF5VONGtYZdBIGYjCzp16hTJIIGItFsUjCpXrkwVSMuVKydnvAluugGiOhhzICEBde5atWqltbgi3AQ6XQUqqgBwfKxzxGVkAUJdlKiGW2LwUL8Izct15eHyUKhsO8YcSUlJlPmlS3AIyQiIqIIURUqKnLSZt99+m3psOBjniNvIAtxgKhBq5AZQgRT6mT/++KOc8RbqA6IqBzPmgTTgzJkzPVuq5bvvvqOeSxU5iy1GFjJxSlQafiw3+BBx1F64cKFYvHixnPEW+HCDp59+mnrGPB999BFl26mMOztBMgKypWfN0pOMoCRKAUemOIstRhag7tT7779PYxg2p3+x+H5QeBBSjV5DGVgAPQbGGcqWLUv+WV3VKBAphqbDIzFw4EDq7733XuoZB0Eygp1069YNZytq3bt3l7NMZqhatSq9fzVq1JAzjN/4/fdQaOjQUOidd0Khc+fkpI2oz+DcuXPlTDDp1SsUSkwMhcaOlRMOYNtOVoH41BYtWtAYSQsvv/wyjZ3ES6FcCBlSBe/clrYcVKBVvHv3bvnKHpCMMHZsuNktfxxdULROnTpyxDiF7UYWTJw4MfLLfe2110QvBAM6AArj9evXj47f+/fvl7PuBu+Xwm1JHkFkzZo1YsiQIRQLbidwESD6EQ3+WTtRa8jtVaaDghYjC6DErvxBffr0ET169KCxSSAWgzAcxDpCocsLQEUMcGysO1Cx1ki3tTOD0Fqa1gYgrF9gZ6ThihUrIpVBoh/YjHPEJBCTGbCjVarsbdq0EWPGjKGxKVAyB9EPXgCxsUozFjXLTBX1Y9IHD2gTegZ2gHp8cDehsKiOqAiv4VmBmMwAw/Hggw/SGGLfVatWpbEpog0sFLrcDFT5AT4obGDdgzKwePDBP2sHSEa44w5oUtiXjID1rfz5gwcPpp5xHu1GFkyYMEF0g56bBRIEEBZjEgSVI7gfRt6t4HIOMcaAPyDuA8UssYbmo4a3TcAXi2ZXCNdTTz0lR3zh5SaMGFmAqIP33nuPxnjiIl1x79699Fo30NOEWhguwuy+JbYL6EAAyNEhxpdxF9gYQDhGSU/GC4zrxInYgOC0JSfj5L///S/1w4YNo55xCRTIZZAVK1ZEYvjQPvroI/kVvezcuTNkGVr5yl1s37498n5YOyY5y7iNTZs2yZH7aNOmTWQNMRfxZZzs5YAuKi6jlHgL8qpNhCpBXBzRBgDuAzfRAKKiFhDYueeee2jMuA9cJgHEMscbaYDrZqiDosUbJ3vq1KmIK2z48OHUM+7BuJEFSFPEIq1duza9RgziFdb5Sbf74MSJE6SBC+1b6M26ARRK3Lp1K40//fRT6hn3snLlSvLNqrpZsfL770K8+64Q8KDFK1nbuHFjOeI0bDfiiJFVILRL+WnhL0VMa8+ePem1DvLkyUPGFb41t6hzqZAtaCwobV7GvRQsWJDWKgp1ws8fK7jsQsFnNHnAioktW7ZELuM+++wz6hl3oT1ONiMcP35clCxZMpIwgJ3u6tWrac5usFtGfbJrdddhzgD9+/ePpM7iMrBQoUI0ZtzN2rVrRfny5eUrZ8FaxgkNxUxR1JRJTSDiZDNCvnz5qATzc889R68Ri3jrrbdqUfK66aabIgZWlTd3AsRcKgOL9Ec2sN4h2sCq8i5O8Oqrr5KBBd9//z31jPtwhZFVDBgwgI5hqqrmuHHjKNRLuRTsBP82/GqqxItpypQpI0cXK4oy3gGnL4QlTp8+PaaUbXga4B1C5vmpU3IyE+D/7927N41RvwubB8aduMrIAlRWQFB+9C0pnPk5cuQQc+bMkTPxA1cEfLNOgJzyXbt20RgXX4z3wOkrd+7cpIsRa6TBuXPhFgvFixenHpsQVXCTcSkUyOViWrduHYn/QytcuHBowYIF8qvxsXfvXjkyx5o1ayI/S/v27eUs40VOnjwZOheHGOyGDaHQxo1hbdnMkJSUFFlD1sNazjJpEcg42cyC+D8cx1RJG+xyoe6FW97JkyfTXKwULVqUemSBjRo1isY6Qd2xCrhOtsBOaPTo0TRmvEmuXLmo+gaA20CVYMoot98Ot5F1nMzEpxAVD6ZOnUpjXJzefPPNNGbci+uNLIBBwrEaR+y77rqL5nBR1rx5czouQUrRemDQfGbBUQ/+WVwg2OmOSIvoMiZHjhyRI8br4NIJF2AIScyofxbLdcqUcMtoyPbs2bMjkqHYaDghH8pkHk8YWQWe2suWLaOdp4ovBRAFT7C2A5jLbOFE+HqbNm1KoTD16tWTs/YDNTDlA0byAZIvGH+AUxay9erWrZthSUQkI0BPFi0jfllc0qrMQFxy2SlUw+jFU0ZWgaSFL7/8ktIbn3nmGTkbllXEgsfu9vHHH89w2ZlSpUqJDh060Bg74kmTJtHYDhCOhu9HSeRBhUxH/C/jLAg3vAPahRabN28WqxCcmQ7WkrDWQbhdzl2AS+D69evTGJdtdonUMGbwpJFV4GYXpUFgGOGfRXVRxciRI0nVHgauVatWGXYFIJwKCQt2+EtRHSJazxbHysqVK8tXjB+BGwv+WTzw03vII8sLQQFo6RXDhdC9kjDELlnFxTLewdNGNhoc+devX08+VtT1ig7uR7phYmIiGVzsgrt27Uo74bRCuLBjQLqk2jnEonEAow/XBY6Pim3btpEYN+NvChQoQA977DjVQz+WEC/cQUBESelZ4OEMA854EMsg+Jbk5OTQ0KFDQxUrVoyEvPxvy5YtW6h69epUvnzChAkkO2gZVvkvhELz588PWbvb0LFjx+TMpTl8+HCoQ4cOqf59y7DKrzJBZfDgwSHrpCVfXaRBg1CoSRP5QmLtgEOlSpVKtYYGDBggv8pklldeCYdwffaZnHAAV2gXmALHdYS/TJs2jXaWlwPptygDg0sx+FHRsMuFZCJCyOAKQEgZdtBpVTNF+iUu5Q4ePBiXmAjjPXBqwmUs1pmqlAwBIMzt3r3T2ukWEDt39hKLF/9b1Kp1RKxdu1wsX76S/pzilltuoYteRNekBwTBcCiDn5e5CCo4IdoNkg5wl1epkr6sJC4gcYC1u/JToIzs/7Jz5066pYXxRZXPjRs3yq8wjH6KFm1rGYA/FxaF5rJ1ArOMgmUVMsADD4SNR2bibYMCZKvh/8b7cznd3uRkIWbMgMtHTthEoI3spYAiFgwwbnGxU0VDrjguHSA4Dh8byi7Dp4sIB/jO+G1kMgPWTih0Vlx1VS660ILUZa1atURSUpL8Exnn5ZfDIWG8k40PaEiginquXHLCFoT4f4a9koIJ2amTAAAAAElFTkSuQmCC";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.font = "bold 14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",312,125);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",152,17);
			//ctx.textAlign = "center";
			//ctx.fillText(arr[2]+" cm",25,109);
			
		}
		return 0;
	}
	function GambarBangunRuang15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",170,302);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",205,325);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",210,131);
		}
		return 0;
	}
	function GambarBangunRuang10(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",160,157);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",325,115);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",276,45);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",160,17);
			
		}
		return 0;
	}
	function GambarBangunRuang9(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0-arr[0]*142,base0_image.width, base0_image.height);
		}
		return 0;
	}
	function GambarBangunRuang6(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0-arr[0]*1298/11,base0_image.width, base0_image.height);
			/*
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",115,148);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",235,120);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",25,109);
			*/
		}
		return 0;
	}
	function GambarBangunRuang5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "left";
			ctx.fillText(arr[0]+" cm",80,142);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",130,170);
			ctx.textAlign = "left";
			ctx.fillText(arr[2]+" cm",215,180);
			ctx.textAlign = "center";
			ctx.fillText(arr[3]+" cm",235,218);
			ctx.textAlign = "left";
			ctx.fillText(arr[4]+" cm",280,223);
			ctx.textAlign = "center";
			ctx.fillText(arr[5]+" cm",340,255);
			ctx.textAlign = "right";
			ctx.fillText(arr[6]+" cm",435,160);
			ctx.textAlign = "left";
			ctx.fillText(arr[7]+" cm",410,65);
			ctx.textAlign = "center";
			ctx.fillText(arr[8]+" cm",210,20);
			
		}
		return 0;
	}
	function GambarBangunRuang4(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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";
		base_image.onload = function () {
			ctx.drawImage(base_image, 10, 10,base_image.width, base_image.height);
			InsertText(Arr);
		}
		function InsertText(Arr){
			ctx.font = "bold 16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "blue";
			ctx.fillText(Arr[0]+" cm",110,202);
			ctx.fillText(Arr[1]+" cm",240,205);
			ctx.fillText(Arr[2]+" cm",230,103);
			ctx.fillText(Arr[3]+" cm",127,30);
		}
		return 0;
	}
	function GambarBangunRuang2(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAH1CAYAAABcLI1OAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKNWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s6uL5TAAAACXBIWXMAAA7EAAAOxAGVKw4bAABcxElEQVR4Xu2dB5gTVReGzwJL76DCT+9IB+lNBUEUBFQUUCkqIl0pgoCAKApKUQQLUlVAEJEmCljoCCrSRHrvvfeSf76zM2tYszWZJJP93ue5ZOZONmQ3k2/OnHtKmMtACCGE2EIS85EQQogNUGQJIcRGKLKEEGIjFFlCCLERiiwhhNgIRZYQQmyEIksIITZCkSWEEBuhyBJCiI1QZAkhxEYosoQQYiMUWUIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERiiyhBBiIxRZQgixEYosIYTYCEWWEEJshCJLCCE2QpElhBAbocgSQoiNUGQJIcRGKLKEEGIjFFlCCLERiiwhhNgIRZYQQmyEIksIITZCkSWEEBuhyBJCiI1QZAkhxEYosoQQYiMUWUIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERsJcBuY2ISQa1q9fL4sXL5bkyZObM8QX3L59WzJkyCAtW7Y0Z0IPiiwhsVCwYEHZtWuXuUd8DUT27Nmz5l7oQZElJAZKlCghmzdv1sfRo0fL3XffLbdu3TKPkoSQNWtW+eabb+SVV17R/dy5c8u+fft0OxShyBISDZbANm7cWMqUKSPt2rWTe+65xzxKEsrKlSulevXqkiZNGkmdOrW6YA4ePGgeDT248EWIB8qWLasC27VrV/n888/lxIkTcu3aNfMoSSirVq1SgQX4m6ZMmTLk7wwosoREAQKLha6OHTvKiBEj5Pjx48IbPu9Zvny5VKtWTbfPnDkjqVKlkitXruh+KEORJcSNypUrq8C+9NJL6oMFWAEn3vHHH39IzZo1dfvQoUOSMWNG3U4MUGQJMYHArlmzRgUWLgLiG/A3rVixom4fO3ZM/ve//+l2YoEiS4hBjRo1VAwQr0mB9R0bNmzQixfYu3evRmckNiiyJNGDhZgVK1ZIixYt5IsvvjBnibf89ddfGpUB4CLIkyePbic2KLIkUVOrVi0NKWratKl8+eWX5izxln/++Ufuu+8+3d65c2eicxG4Q5E1WbZsmX7RmjVrZs6QUOfBBx/UVFl85tOmTTNnibds2rRJihcvrttIMihQoIBuJ1YosiZNmjTRLJTp06frwgcJberVqydLliyRxx9/XL7++mtzlnjLjh07pFSpUrq9detWzeZK7FBkDYYNG6aB0Rbjxo2Tl19+2dwjocbDDz8sCxculCeeeEK+++47c5Z4y7Zt26Rw4cK6jVoPRYoU0e3EDkXW4LXXXpN06dJJoUKFdL9SpUq6wvz666/rPgkdGjZsKIsWLZIGDRrIzJkzzVniLXv27JGiRYvqNtwF+fPn121CkdUvHXj66acj/bELFizQrJ/33ntPevfurXPE+eCznjdvngosHolvgNVqieqWLVu05gP5l0QtsshNx5cte/bsmo3SqFEjnf/+++81/CRHjhwyZMgQGTp0qM4T5wKfOz7rOnXqUGB9yIEDB7QUJFi7dm2kNUv+JVGLrJXm9+yzz+oKqBVyAn8dQGUgCG3Pnj1l+PDhOkecx5NPPqmuAfhi4SogvgECay1sbdy4UcqVK6fb5E4Srch+9tlncvr0aY2TTJs2bWTICUqvIazHAkKL4z169JAJEyaYs8QpPPPMM7q49cADD6gbiPiGo0ePRgrs6tWrpWTJkrpN/kuiFFlUVGrfvr1WZIeVA2G1ClbgaozsFHcuXLgg6dOnlxdffJEZQQ6iefPmGp5lxcMS33DkyBF1sQG4CLBQTKInUYqstcD16aefarB0+fLldR9YtS6jthux2mO0bt1a5s6dq9skeMHnhASDqlWryq+//mrOEm85efJkZPYWShfSRRA7iU5kEV6CpIO6detK3rx5tZ6lVcAC4LYS/P777/poERYWJjdv3pQkSZLoAhkWx0hw0qpVK73jQO1SpMwS3wCBveuuu3T7t99+izRISMwkOpG1QrZmz54tv/zyiwotigdbWAUtcJWOStKkSeXcuXO6/dhjj2mVdxJcIIkENQhwd4KiL8Q34Ly3BBbfG3fDhMRMohLZsWPHarm1/v37q2WK2pZWnUsLq4eTJ5EFWASzXAewlCi0wUObNm00iQSfKYpEE9+A891as0CNDywWk7iTqES2bdu2+jhw4EAN5UmWLFlknrU7mPv777/Nvf+CBbPDhw/rNoQWAdgksHTq1EnGjx8vpUuX1rqwxDdcvHhRMmXKpNs//vij1t0l8SPRiCxiYYEVxvPnn39Krly5NGogKg899JA+xtQLHquriBMExYoV09JuJDCgF9fHH38c2ZuL+AYILNLNAVwEKKpD4k+iEFlEEEydOlVj+RCQjtjXU6dORRt6Yjn0o3MZWOTMmVOLYgDE2VrWLfEf3bt3l08++UQvdMjSI77h6tWrkQI7Z84cugi8IFGIrJXZtXTpUn2EHxWLWFH9sRb333+/PsYlthJVhxCxAJAdFjXGltjHq6++qt1kcfFEijTxDRBYazEYLgJrsZgkjJAXWViw+/fvl86dO0f6ltB3CBW3wsPDdT8qmTNn1kdLlGMDBTGQ9QJg3eI2i9hLnz59ZOTIkfo5IqWT+AaEKVoW7IwZM+gi8AEhL7KWL/ajjz7SRyQZnD9/Plor1gK3//G5/YTrASuvACepFepFfE+vXr1k8ODBWq90+/bt5izxlhs3bqjhAaFFwg2K6hDvCWmRtTocuBdmxoIXTiRPUQXuWHGAx48f18e4gJVXa2ENIS9I3yW+ZcCAAfL+++9rfDMq7xPfgHPVsmBx94c4cOIbQlZkUUQYHQ6QXIAWIxZwFURNQPBE7dq19RHPjw9YWEOiA0CIGKwC4hv69esnb731lvrB8fn6C/jvkemHx1AEAovf79q1a/Ltt99qzQfiO0JWZK0rsXudAXwxcRtfpUoVcyZ6rLKHCckaQtrtlClT5Pbt2xpTS7wHFuygQYO0XqkV0XHr1i3bB8CFEkKE22ng6XlOHACV6KxzdNKkSVowifgY4+QJOaZPn477dFeHDh3MmQi+/PJL1yuvvOIyxM+ciRm8Rs2aNc29+DN+/Hh9jYwZM5ozJCGMHTtW/44c9o2pU6eaf23/kjVrVle2bNnMvdAkDP8Yf+SQAimzIOqvhlYyefLkkXbt2pkzMWN8+LpIdvnyZXMm/owaNUq6dOmi6bqowUniz1dffSUtW7bUuxNUgPKnCwa30YipRrIJssngtwyVr0zKlCk1iQN/00CFHqIeAtxqKJ8YskBkQ4n27dvrlRnWrDtbt251derUybV27VpzJnZatGihr+UtQ4YM0dfJnTu3OUPiA+5A8PfbuHGjOeNf9u/f7+rRo4fr3Llz5kzokCFDhoCel4nBkg0pnyxKsaFGbL58+bQxojuIKkiePHm8KrhbmV8o6+YNCDnCog3iddkmOeHgriIQIL0adzMxpVk7FfhmDR0w94gdhJTIWpldVryqO7ElIHgCFfXBkiVL9NEbsCrevXtvjevMkyei8RwhJPQJGZFFB1JUw0LBZmRduYPV6EuXLsW7BiZEGXgS7ehB9hGSGNZFGetl2LCXZcaMvvLUU3lkzpw3jTmskqOgSdTnBnqgTOAZYxBCvCVkRNbKr0YYSlRQHR9Ofqsgd3yAYMevPxSSFzyNY8bYJk2a1JdOnZ6WVKkuyPr1iKc97facYBlYoLtiDEKIt4SEyL722mv66ElgASzZe++919yLH+hhhCBttKmJGwhYx58Vj1EH5i9J3rz3GuKdRw4fPiabNiHZIbXbc4JlhMz1l5CA4vhvErobDBs2TAoWLKiugqig+DZcBQntqGllfvm2Xux1KVasnNazRU3azZvhXkgecYgQElI4XmSRXQXgk/UE2pAghRaVshKCJc7eRhj8l6tSsmQ5LY+Ierdbt8KiTRlxiBASMjhaZBcuXKitRlBpC+mWnoAlC1eBlaAQXypUqKCP9rSVviGlS1fULgu7d++R7duxaEaLlpBQwtEia9UnmDx5sj5GBQKLAsQJdRUAZPxg2NeY75qULVtBM8J27twpu3bBLZEi4hAhIc6lS9d1hDKOFVkE+KNgBzrQRgeiCtKkSaO1Yb2hTp062rLGPm7KffdV0RTDrVu3yZ49KOFHi5YEGhTEwd0VLvy+Hmg+usv4HteTnj0fNrbx/fL0PF8MNEWNKO4TCBwpssi+QU1RiBLaQHsCmSywDL0VWGAlOaDgt33ckAoVKkvWrFm1Tur+/TuNOQotCSSoEYGSkvttGPuMsVsaNCgt9eujtjOKr3t6ni8G/q+IqmOBwJEiazV1i6nRIVqSIOzKG1eBxQMPPKCP9vhlLZDaeNt4v9W04Df6hh06tNuYi3uGGiG+BesYyWwcSeXq1Rty7RrE3NNxXwwrJDFhazK+wHEiixRXLHY98cQTMdYBQK2C1KlTR7sgFh+8qS0bPyC0t6RKlaraj2zjxk1y+DCuwrRoCXEqjhPZunXr6uPMmTP10RMolo3upfEpBhMTKVKkkLRp08pPP/1kzthJRLGOqlVraFm9devWybFjB4wZWrSEOBFHiSwq42Oxy2qKGB3r16/X58W3VkFMoJao/2peRrgOqlWrFim0J04cNuYotIQ4DceILMrcoVwgYkrR3jsmVq1aJenTp48s8OILrIpcO3bs0Ef7cUlYWFKpWfN+rbsA98fp06h/AD8TIcQpOEZkrd5D7j27PIE6A3v37vWZq8CiatWq+hifNuHec9sYYdoFF0KLWN2zZ08acxRaQpyCI0QWlunPP/8sDRo0kPLly5uznkHdWAitL6IK3KlYsaI+/vLLL/roP25L0qThcv/992stXKT3nj+Pyl0UWkKcgCNE9pFHHtHHmBa7LHBbjQSEAgUKmDO+IUuWLPq4evVqffQvtyVJkmTaqQHdHfAeLl5ElX4KLSHBTtCL7Lvvvqv+2BEjRqjAxAQWuxDIX7ZsWXPGt+B1Eb8aMwh6tmPc0N+/Zs1qEhbmkj/+WCMu11VjHkLr6fneDrgqCCHeEtQii1Csvn37arxr165dzdnogb8UmV6+dhVYWEkJMfeauscY2cxHX4+sEh6eV+6//yn5+eeN0q/faDl6FHVuYbV7en5CR3ZjpDIGIcRbglpkH34YOc0iS5cu1cfYQK2CzJkzS968ec0Z3wK/KIg58wsLbrCk0YXBjlHCsGgrypNPDpF33pkv2bM/KseOZfbwPG8G/N6ZjEEI8ZagFVn4VrHY9dBDD8W62AVQzwBFXHwdVeCO1b3W/syv2ClXrmSkfzhbtixy6tQp3SaEBBdBK7IQV/Djjz/qY2zAVeDrBISoWItfEP9gAG4RqwQjCsvgQkMICS6CUmRHjRol586d0zbayZLFbQV97dq1moCQO3duc8YeUAAcYWLBAqz8H374QbeR+ovwNUJI8BB0Inv9+nXp0qWLZMiQQTO84gIKcyMTKy5uBW9BYgA4ehQdXYMDhLgtWLBAXC6XJi0QQoKHoBPZ5s2b6+Ps2WiXHTdwy4xIBLuiCtyxasuiAE0wgUXCr776SrdR74AQ74mooeE5xM/bgde9LeHhSY27VciQvf+PVXgpEASVyKJdzHfffafWohUuFReQEZYtWzb53//+Z87YhyXkixcv1sdg4rnnnlOhvXjxolYOI8Q7IA8ZjZHBhpHeGJll+/Zjxl0oanJgvcPT83w1Aih1xi1m0GAIJS43rrNnz5ozsXPu3DnXq6++6po1a5Y5Yz94j8ZFwNwLPkaMGKHvEX/PUODLL7/U32fFihXmjH/ZuHGjq0OHDq59+/aZM6FD2rRpXbly5TL3/E94eFpX6tQZzb3QJGgs2dGjEVh/VAYMGKD+2LiCBS8kIFi1BfwBLGbE5AYrSNz48MMP9e+JBo2EBCsZMqSU9OlDex0haETWKl/45ptv6mNcQegW2rX4w1VggbKHCBcLZl555RXNljt+/LhGRBBCAkNQiGyTJk30Mb5+zgsXLsju3bv9suDljlVbNpitWYAi52+88YbWcyhcuLA5SwjxJwEX2S1btmh1LQhlfBa7gBWI709XAbAiDGJq5BgsvP3229KuXTsNcatSpYo5SwjxFwEXWSuzKyH9s5BWmiNHDm0N7k+sjgv2dq/1HZ9++qm0b99e/17+tvoJSewEVGS//PJLOXz4sHTv3j3esZ2nT59WfyN6bwUCtMFxgiVr8cknn8hTTz0lv//+u9SvX9+cJYTYTUBFtlWrVlrtf9iwYeZM3EEBGZfL5XdXgQVqJCDT7NKlS+ZM8PPNN9+o0CIN99FHHzVnCSF2EjCRff755/Xx22+/1cf4gqgCFGzxt6vAwip7uG3bNn10ChDaWrVqaeGdli1bmrOEELsIiMju27dPJk2apLf6DRs2NGfjzpkzZ+TAgQMB9S+iXTdwksvAAn3KateurdlhuJsghNhHQEQ2vmUMo7JmzRp9DKTI3nffffroRJEFKNdYpkwZ9Yt369bNnCWE+Bq/iyy+1Dt37pRXX31VF48SAhZv8uTJo0kIgSIsLEySJk0a9LGyMbFu3TrtW/bBBx9QaAmxCb+LrHV7ii92QkBEAboAwAoLNLjlDqaShwkBvm2068HnMXjwYHOWEOIr/CqyL7zwgj7OmTNHHxMCEhBgQcY3ccEOrFble/fu1UensmfPHilRooT06dOHQkuIjwlDlRhz21b279+vt/jFixfXkoYJZeDAgXLz5k0pVapUQOsHoD032oOje0Pbtm21nitCupwIwujQgQLRBiiTCD+z1c8sGMACHd4beqtZC47+BJ/zZ599Jr169bK984a/QXx6pkyZ9PsZCBAdhHPvyJEj5kzo4TeRRZYUfLHeVIYaN26c5uHjxIDA+umtewTWNMQelh8uHM8884yjYmbdSZIkiX4mU6ZM0ayw9evXByzJwxMUWfugyPoBiKzdoNYr/qs2bdqYM/FnwoQJWtNz9uzZun/79u2ADgvjJHXlzJlTtz09L9iHRffu3fUzKlasmDkTPLCerH0Eup5s1qxZQ6bucXT4xSf7+OOP6+PYsWP1Mb5MnDhR68Yi9KtRo0Y6h9X9QA4LWHxoRQ48PS/YB0BZxOHDh2ukQbC11SHE6dgusvgCg8mTJ+tjfEHIF1JoUV7QEutgwsr82rVrlz46DdSc/eijj6RgwYIaaUAI8S22iuzJkyf1C5w/f3559tlnzdm4A4FF4gEE9sknnzRngwur7KGVIOEkevToIe+++676lFEKkRDie2wVWW/KGMLyhXBBxKyi3sGI1YZ82bJl+ugUEBUBFwEiPryJ9iCExIxtIjtr1izZsGGDxsbCko0PWOX+7bffVGCbNm1qzgYnmTNn1kesfDsFuAjQSw0RH06P8SUk2LFNZJ944gl9HD9+vD7GlWnTpmmLb8RpBrvAWiD7zCkLRoMGvaMuguzZ/yfbt283Z0lMWAuEqVKl0sdQAuF7GIECoZCuAIZi+gNb4mRRl2DkyJHqU23RooU5GzsQWATCV61aNUE+3EAB3yZuvVFIHDGHngl0okJK+eSTEdKxY3fjolBU1q3bYszdNsZ1PRo3cKqEGyOZ7vmLYIiT/eKLLzT9OGXKlHL7Nv5uzgYXjrRp00rr1q0lderUMmbMGDl79qx51H4g7Pj/kWaPGO1Axen6A5+L7IkTJ+Tuu+/WExLpmnFlxowZsnTpUq2sFR9hDgZmz56tkQ9IF46+dCNa1SBZIRBWQ3I5eHCPYblu03Y9RYpAqM4Y45YejTvIsCtujIj2O/4ikCKLBJP3339fLl++rGIUCgJrkSZNGm20CQu9f//+cv78efOIvUDgoRFILoJLccKECZH1pUMRn4tsuXLltLoTQpri6otF4W50qoXA4svkNFCwJmvWrGrBR1/4Bj7by8bwt8gmlwMHduniFqqWVakCkcJHnpCPHSJb1Bj5dM9fBEpkIbDo+It06ddee82vbef9RYYMGfTuy9++eYR2IvKoQoUKWlUvlPHpNx6NBSGwaHESV4FFp9olS5ZoGxknCixAhwaA3yO4SC6HDu3R212kT1apgnoECRXYxMWVK1dkyJAhKrC4eIaiwAJY5v62zjt37qICW6pU6ZAXWOBTkUWRFIAWJ3EBt9kQZoRBOb1CP2JNkfMfPEQI7MaNG9WCrV69hjGHLxMFNjYgsGilfuHCBW3yiTA34htefrm9jB49yrjjLS8bNgTT98U+fOYugG/nnXfe0a6oaD8dGxBYVOeHe8EqgehkXn75Zfn8889jKIDjT3dBcuN97NcMLliwNWogK80XFmzouwtguSL6AgLbpUsXyZfPv7+rv4m9QMw1Y6AwPc7bf9PJ409K2bHjb+Nub7FetOrWRXIRvg/xXRdIKFjghaGRUvf8iU++8bjyQ2DhzI6LwM6bN08TFBD6FAoCC6z6trAcA0uEBQu3DfxtNWogI80XAhv6XL9+XX2wWACCzzDUBTZu4LyB0EKk8JiQ4ZJdu9bJzp2bjbvWUobA1jPmThsDIuvp+XYMRPcE5jvgE5GtW7euPsIyjY358+fLwoULVWDbtGljzjofOPABIiQCR7gcO3ZAV2yxclytmlUTlgIbGxBYWLCop9upUyeNjiEA1qs1IBfxHalkz54dsm3bdsmcOYuULYsW/lbYoKfn2zm8scQTDv5nr4Cw4jYOqa8lS5Y0Zz2Dfv8YeN5LL71kzoYGKLACApdeCxfBAbVg06dPH1lTgQIbO6hNDAsWXZA7d+4c+VkSbwk3BHar1oBG9E2lSlWNObgHEtc56bXIWi1YEOcaEwsWLIgUWPgvQxE0hkQ6sP8JlxMnDqnAIuYxYpELHy0FNjZQeB0WLFwEHTp0kAIFCphHiHekkL17d8iWLVvU51uxYhVjLnEuvHolssh/x0k6evRoc8YzixYtUj8sVuDbtWtnzoYederU0b+Hf4GL4KDW20UGTYQFi9ui0Amat4tbt26pBYtMvY4dO0qRIkXMI8Q7khsCu00FFuGNlStjsTLxRrYkWGThu0IlJ7SPwAkaHVjgmjt3rhQrVixOi2JOpkYNWJCitRf8Q7icPHlEowiQ7on/PywsqTFPgY0NxIbCgoXA4s4KxXKIL0gh+/fvlH/++UdDByNcBIk7dDDBIlu/fn19/OWXX/TRE4iBRagWLISYhDhUsAp4+2fxK1yOHz+kBc2xyBXxf+PjpMDGBgQWcbCod4wLPwwA4guSy75927VYEqrTRSS/JG6BBQkSWXyxscCDqILoFruQJotyhxBYLCYkBix/nv2ZX+GGBXZMXQQpUqSgBRtP0PwSqdCIbrn33nvNWeIdqI+xWwUWoYOVK9OCtUiQyNaqVUsfv//+e32MCiw51COA6CCgO7GAykI5c+a0OcIgwkWAdEQULIEPlgIbd+CDPXbsmLZxjy0ahsSViPoYSN/GIlfVqkzfdifeIjt06FDNhkFeN/r1RwUCA4GFjws534kNpAgja8ie9uDhcvbscb2TSJ48uVqwSZPiM6DAxgX4YCGwSIApUaKEOUu8IyL5BQWIEDroXQGi0CTeItuzZ0+1oNCDPiqIl50+fbpmyiRGgQWWlY/YQN8S4SJYs+Z3XeSCDzZJEtR1pcDGBWQkIuUZLgIkwhBfEOEiQJYjXATVqmHhlwIblXiJ7KOPPqqPnnp2YUUdAgsXQbdu3czZxEflypX1ERecO7FOPOskjM8Il/PnT6mLIFmyZG4WrBXY7a/hTN577z0VWBQhQgt34guSy+HDeyMrvFWtSgs2OuIssqtXr5Yff/xRK22hc4E7OIa+XLlz507UAguiT6+FxQlRjO9ILdevn5O//vrDENgww4KtZggsPjakJnp6vt3DWZYzFrkOHjyoRaHvu+8+c5Z4R7gKLNK34SKISH4BFFhPxLkKF65WiI1FALd7TyB0lIXA5sqVSwsbk4i+RSiWc+TIEXMGoEhFfE/ClMYdwmLjNqyWpEoVJseOHTc+B7S3QTWsQID375z2M1g/QHUpdNpAvWLyX+JWhWuxMbC4iiSXiApvyC5E8ktEASIQ7AKL36O2MYK0Chf6V0Fg4ddyF1gswKCPFwoaU2D/BdY+bk/vJIUx8AHHfSxfvlIFFuzYccj4QmQ1tnCye36+/QONBP0rsAkFLWMosL4m3DAc9mnd5AiBhQUL4aUFGxOxiizSRNEoEH/UPn36mLP/CixcBK+//ro5S0DEyQdh3KGPCQGWQs2aEVW0jh8/LjlyZNdtEjswCiCwzZs3p8D6jOSa/AKBxcJ3xDkO+eDCa2zEKrKNGzfWR5QntMAfeuLEiVoQxVOUQWLHqi2b0KQEuGBQzBzAn4jUZRI3hg0bpv2q0O046toBSQiwUlPJ5csnZetWLHIhfRvFXuCfxy04XFdOGYGxuGP0yW7btk2KFi2qK+ZWdSkILLpLQmBhwVo96cm/oLMpUl2fe+459SfGB2TMWDGchw4dCtneUvEhrj5ZNLFEA8+mTZtG3k2QmIndJ4sSpZ/KO+8M1nWXadNmGjPWIq6TwPvNaQz/u7tiFNls2bJp8Pa5c+d0FRHhGujPjnm0myHRg78XXCyHDx82Z2IHLgLLgoU1xt5SEcRFZEeMGCG7d++WZs2aSfXqVrFyTxwzxh5jOMO37Bl8ZZMbw/twtNhEFmGZ+JuCs2cvSoYMaXSbxJ1o3QUQUwhs3759VTCQ0YE+6bBg3X2zxDOlSpWKEl0QM9u3b6fAJhB0PoXAonB8zAILrhjjpDFOOXycMYa9oHqeJbDXrl2jwCaQaEXWqvuKXG9kL0F0URsSouseYUA8Y2V+xWXxCy4Cq5YpxJYCG3c+/PBD/ZuhDb3lC48ZuLcQoeHkge+fvd9BFHdq1KiRugPRww9p3CRheHQXwKeFtt4rV65UPwxWayGwsGARAxozCMLHrZiTfbVwkpcyBmJSEwYKlSOUa+rUqbrKHR179uyR/Pnz6zbEgnVN/0t07gIUi4cB8MQTT0Re1GJnnzH+McZ/6244B/hEEVJnxagmHE/uAnQxsTqeoAYHoglIwvnP5RBuAQjsQw89pAswiDdE8d1+/frFQWDBBWNcdPjA7+CdY79SpUr6iJKP0QFRtQQW1iwFNu4kTGBJbKCyniWwKARFgfWe/4hs7drIiojIlkHygeUiiDvWrYzTh3eWOApmgOi6JCA0y3IRQGBZODp2LDfVJ598ogLbsGFDCqwPQZH9xx57TLfR8wwLt8R7Is5ak/Hjx2vgO2IM0ZMLBaH79+/vsaQhiR3kykNAowIXAdwwABEFFNi4gfMQ8dlobQKBtVrRE++wIocsAwtde+FGIL7hDpFFGTg4unHbihYdXOTyDqsdzdmzZ/URIGLDchFAYFl2L+7Av40oAqwZJFxg4ct0Xzxy4sD7943hgwUtRMEgGgag5xncg8R3RC58wXrFSYyQDXSV7d27dxx9sFH5wRg4AZy88IUKV/CpZtG9hIIQGKzQfvfdd/L444+ri8CyYFG20KrYRWJm8uTJWoMAi164O8B6AWppxBc0Esb1rVgxl9zA2qZDQf7PtWthxu29SyuzJTQfyEqYge8VnDhxQrJmRX0M4ktUZBEwnyNHDl1lRJIBmsuhf3/CoMha4KRFNS7cEaBxn3VXgLRZ5tTHnbFjx2q7GF9QrVoOGTy4pSEsV80Z55EsWVLjgn1SXnxxkjnjPRRY+1CRLViwoKYjwv86cOBA81BCWWQMp/twIbK41cetpXegiwGK6CBFFum2y5cvj0PAPHEH6wTwGXobq3nrVphky3ZJcua8oNtOJSwMlngy2bgxiyG45mQCgVsQC1ystWsfYePGjXPBF4sWvmgZAwv2+nWITPy5evW2dOqUUx+dTMqUSeSHH07J/v1X9XYsoeB2DBEasBIABTYYQBbeRmM42RDA9wuhVSyA4wTCLly44PLlSuJvv/WTc+euiOnqdSQZM6aWp54aZtySIQXTNyA85sEHHzT3SOBgMgLxL+ouQOonbhu8qagFTb11K4kULPi33LwZ4Xt0KsmS3ZYjR3LLlSvpJEkS7y4W+LsiRIbVtIIFiizxL5HRBb5jgTFCwSeL9M30ukdCCYos8S82mJw4ATCg3U4eDo7xIYQEDc6+ryeEkCCHIksSGbhLQfGfmw4eeP+4WyROwAafLJMRSDCDgt0HjZGQbMZgAV9ZxAwX1T0S3FBkPUKRJYT4BhtEdq4xnB5dgEUvdORkl1hCiHfYILJbjYFbMSdbslZnS/Y0IoR4hw0iSwghxILRBYQQYiMUWUIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERiiyhBBiIxRZQgixEYosIYTYCEWWEEJshCJLCCE2QpElhBAbocgSQoiNUGQJIcRGKLKEEGIjFFlCCLERiiwhhNgIRZYQQmyEIksIITZCkSWEEBuhyBJCiI1QZAkhxEYosoQQYiMUWUIIsRGKLCGE2Ei0ItuuXTu5du2aufcvhw8fli5duph7/mfv3r3Sr18/fQ/z5s0zZ71jwoQJsmjRInMvsOD3I8HF999/L19++aW59y8dOnSI9RzctGmTvP322+YeSYx4FFmXyyVjxozxKLKXL1+WP/74w9zzL4MGDZJ8+fLJ7Nmz9T00bNhQUqRIYR5NOLt27dKLR6A5f/68/n4kuJg7d65MmjTJ3Isge/bsMn/+fHnsscfMGc9s3LiRIpvI8SiyYWFh+pgkyX8PFyxYUH777TfdvnHjhty+fVu3L126pI8WV65cMbfuBPM3b9409+4kup+xgAW7YcMGtQ7wHnAxSJYsmVoU7ly/fl3fmyfc/w/rIvLOO+9I69atddsCx6zfzcL9d8T/YYHnuf9/2Lde++rVq/roiajHTpw4YW6RYCJlypSSOnVqc08kR44cctddd8m+fft0H+chjA93Ll68qI/JkyeX9OnT67an8zvq9+bChQvmVgQxncvEGcTbJ7t27dpIEW7fvr08/fTTUqBAAUmbNq2ejBBQWJc4KbFvgdst/Bzmw8PDpWzZsuYRkVdeeSXyGB5jspQPHTpkbkWwZ88efR8AJywsQfz/OLmrVKmi8wAnfcaMGSP/j7x580q1atX02AMPPCA9e/bU7YMHD0a+96RJk6q1bIHf8eOPP9afx/8BcZ48ebI+D/+f5UaZMWOGFC9eXBo3biypUqXS50+fPl2PAbwm5qxjvXv31nlcwADm8D5I8ICLOcifP7+eY7BQLVauXClp0qQx9yJIly6dCibOCxzDuWidez/88IM+ByKNc8odCPLu3btVuAsVKhR5LpcpU8Z8BnEcxofpERwyThJz71+Mk0uPgT59+uj2smXLdN+4wuv+li1bdN8QH9fIkSN1G/PLly/XbcPS0/0lS5a4Tp48Gfl6oH///q7//e9/5t6dLFiwQJ+LYdymuSZOnGgeiSBLliwuQ9jMPZfLEDrXI488otslSpRwGSeqbv/999/6GtYx/MygQYN0G/OG6On2rVu3XJkzZ3Z1795d93EMrwlWrFih+7Vr19b9H3/8UffBTz/9pNsDBgzQffwNrGPTpk1zGeKqrw3mzZsXeez48eOR2yR4ePXVV/UcqVSpkn4+xh2HeSSC33///T+fG/YN69Y1f/583TYuzjo/ePDgyOceOXLE48+dOnXK9eabb7oKFy5szkac2x9++KG5R5xEtN9ofNixiSzEx7AGdRs0a9bM1apVK3PP5Xr88cddnTp1MvdcrgMHDri++eYbV9++ffU1vvjiC53H9r333quiZFzddS4mFi5c6OrWrZsrW7Zs+rN//fWXy7BidRsn9ezZs11z5851jRkzJvK9Wo8W+PmaNWvqNr5A7733nmvv3r36vKVLl7q+++47FU78ju6vgS+UBfYNi9Pci9g/e/asXgwMS9icjcCwovV3tzCsdb1INGnSRH/OsLRdp0+fjvy/SPCAiy4+l6eeekoFN+pnFJPIzpo1y5UpUyZzNgLDMnUZ1qzrzJkzHn8OF1vjbki3GzRo4Pr888/No8SJxNtd4I7x83e4BOBjxC2RhWGt6XNAkSJFJFeuXOo/xUITbpssvxV8TnA5DBw4UPLkySOGJavz7qxbt07ef/993a5bt64MHz5cDEtAPvroIzFORP2/AG7dFi9eLD///LPs3LlTRowYofNRgevA3ecK/7PlE0WkgSG0Yois3qq5v0ZUP21UcBwDt5XuZMiQQW8P4avF716hQgUxhD3y7+fu3ybBBXypFStWFOMiKR988IHe4j/66KPm0QjwmXoC5yVcU+7gXICby9OaB4Dby7j4inFHpOdw27Zt9fUN69Z8BnESMYpsVH+RJywRtYi6D58SFqu2b9+uxyBkX3/9daRAb926VWrUqKGhMJjDCQ3xxM9EpVevXroC745hJejPwAcGXnrpJTFuq8S4RVdRvu+++3QeGBavuSUqohBQC/iSixYtqtuIYrBe46233rrDtxvb74svA3zO//zzjzkTAQS2ZcuW8uyzz0rTpk3157Zs2SI9evTQ4/g5+HZJ8AGhNO6azL0Ivz0uwFZYF84d9/MA5zSwzgUYCO7gO2Dc5f1nIcwyOnAuY40A4Xw4R/DaiG6AEUKcR4wia9zqi3G7LF27dlULdM6cOXdYrrC+3MO8sBLqvuqOY7BuS5Uqpfu4Ohu3W3ryAQgmhG316tVqyfbt21ceeughPVa6dGl9tMBCGRaMYAU8+eSTuliE57Zo0UK++OILfQ5eG4sSL774oi5C4f/55JNP9NjgwYNVcPG7VK9eXX755Re9AAC8Z5zwuKjUr19ffw4/D8HGlwSCbGFZzBZRrU/sW2KJVWj8TtiHNXP33XerBYtFMPxdsWhoLWjgPVgXihdeeOE/q84kcOA8dxdEnIOfffaZtGrVSo4dOxZ5Ea5ataouwj788MO6j3PBOl9y584tb7zxhp5bONcRAnbPPffosZIlS+rir/U6+N7gHMf5hwvz66+/rufEM888o8eJs4hWZCFyWOVftmyZrFixQh937Niht9lYjQdYQceJZYFbKndxrFSpktx77716YkHUcGXevHmzLFmyREaPHi2nTp3S50Fs8ZqIR8RrRg2HsYDIL1iwQIUbK7QQMdx2WbGKuJX79ttvZdu2bfrep0yZItOmTdNjOFGx6o/fo06dOnrCW5Ys3nfhwoV1G4Hn+AJB+LHKC9cBLGiAiwUsZwuINiIELMqVK6cXIbw/vDe8F7xnWCB4nwCv1b9/f/09sOqM371mzZpy4MABFWP8XfD3OXr0qD6fBB6IIM5ld15++WVp06aNGiIA0QY4F/C5wR1Wvnx5dQdkzZpVXnvtNY1CmTVrln72cAFY4FyFiwx3PghNhJsJ3xf8f6tWrdLvDFxfo0aN0vOZOI8w41bkzvvdEAUnLvy43bp1UxHEF2Ls2LH6RfE1EOrmzZv/J+aREJL48Grhy0lg0QK36BBbCGyzZs1sEVgAS9zyrxFCEjeJxpIlhJBAkGgsWUIICQR+s2SxOotFKGu1FY9YSHIPj/IlZ8+e1UU6QggJJH4TWdQcyJkzp4ay4L+Eb3T//v0ajbB+/XrzWb4B9QUQ54poCEIICSR+cxdY2S0Iyoe44hFii6QDK3jbV+C1oxbsIISQQBAUPlkE6QME5CPWFFYuBoK9LRBvi3hTzCPZACCpwHou4lIRo4jEgaFDh6p4W1k6OH7u3DndBihT99VXX+k2UnjxengOYlcRr4rYRut1K1eurM8D+DnE21rHHnzwQfMIIYR4xm8iC1ECWbJkkcyZM2vWDOaQrYV9gKwozJ8+fVoDtuHDRSA3QKA+XABISRw/frw88sgjms4I8UQ8KsQSGTH333+/Zt0UK1bsjrKI7nni7vU5kcKLpIiTJ09KvXr1NGMM2TcIw4JFvGbNGhk2bJg+F6+BWFsEkFtJFePGjdNjhBDiCb+JrOX6RUYTirqg8wJSXGGt/v333yp2GFOnTo3sUoCUWEvgsHCGbViZALnjyMqCIC9fvlxjX62fQ1YW0mGjqwWAeUv0AaxaiD+AcKM4ODK0kDWGgjd4XwCxrzNnztTsMIg4ioRErW9LCCHu+N1dgEyo5557TpMBUN0Kj6gTYOXqo8YAimFD6JACi9tzAPFD+qEFRBZCCcsTFixyyK10XEQuRK0p4G7Jum8Dq2YA6Ny5s74u0ntR9QhWLzLEAF7XEnmA5wVD2xpCSPDid5GNCixcDPhUAaxcWLMYcCVYXQ+AFf4FYEUipxs/e+bMGa1fYBWngaUKS9Yd98I1cA1Yle7dgSsCljb+H7wucsnhh3UXbPdtPCeqYBNCiDt+UwgIEkDJtokTJ+otOjrioiLVu+++q7f7WGSCdYhCLxBbbA8YMEB/DiLpLnBwCaDIC/y2qFgEX6klnFgkQ1lDNLoDEEIUgYFw4xFEtXSB1YsJwo73iNeBpYr3AVAdyf3nYOXCwiaEkGgxxM8voNo72mnkzJlT29Rkz57dVa5cOdeiRYvMZ0TQs2dPPY7nDR061Jx1aauYlStXmnsu7UiAljL33HOPq3Xr1q7Fixe78uTJo8eM23tX+fLlXblz59b9ffv2uapWrarPRQsctK75/vvv9Rha3RjCqdsA8/ny5dP3N2zYMO2ugIr4AO1H0IXBonPnzq533nnH3COEkP/C2gWEEGIjdCgSQoiNUGQJIcRGKLKEEGIjFFlCCLERiiwhhNgIRZYQQmyEIksIITZCkSWEEBuhyBJCiI1QZAkhxEYosoQQYiMUWUIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERiiyhBBiIxRZQgixEYosIYTYCEWWEEJshCJLCCE2QpElhBAbocgSQoiNUGQJIcRGKLKEEGIjFFlCCLERiiwhhNgIRZYQQmyEIksIITYS8iK7YcMGmTVrlrlHCCH+JcxlYG6HHLt27ZIGDRro9nvvvScNGzbUbUII8Rcha8nu3LlTChYsKFWrVpXWrVtLo0aNZPbs2eZRQgjxDyEpsps2bZJChQrpdv78+QXGepo0aeTxxx+XqVOn6jwhhPiDkBPZP//8U0qVKqXbe/bsUZG9fv26XLx4UcLDw+XZZ5+VCRMm6HFCCLGbkBLZ5cuXS4UKFXR79+7dkjdvXrlw4YKKLLh27ZqkTZtWXnzxRRk1apTOEUKInYSMyC5atEhq1qyp2wcOHJB8+fLptjthYWEqupkyZZIuXbrI+++/bx4hhBB7CAmRnTNnjjz88MO6feLECcmZM6duR8fp06clW7Zs0qtXLxkwYIA5SwghvsfxIjtt2jRp3Lixbp89e1ayZs2q27Fx5MgRyZMnj7z11lvSs2dPc5YQQnyLo0V24sSJ0rx5c0maNKlcuXJFMmTIYB6JG3v37pUiRYrI0KFDpWPHjuYsIYT4DseK7KeffiovvPCCpEqVSq5evSopU6Y0j8SPrVu3ajTCJ598ogtihBDiSxwpssOHD5cOHTqo5Xr58mVJliyZeSRhIPW2UqVKGtrVrFkzc5YQQrzHcSL79ttvS48ePeSuu+5SH6yvWL16tUYnTJ8+XZMWCCHEFzhKZPv27Sv9+/fX6IHjx4+bs75j6dKlUq9ePU2/rVu3rjlLCCEJxzEi27VrV3n33Xe1HgHiYO3ixx9/1DoHP/30kzzwwAPmLCGEJAxHiGz79u3lww8/lOLFi8uOHTvMWfuAJfvMM8+oZWtlkBFCSEIIepFt0aKFfPbZZ1K+fHn5+++/zVn7mTJlijz//PNaC6FMmTLmLCGExI+gFtmnn35aJk+eLNWrV5c//vjDnPUfiDZA+i2iDwoXLmzOEkJI3AlakX300UdlxowZugCFwi+BYuTIkfLaa6+pm8JTPQRCCImJoBTZ2rVr6wLUY489JgsXLjRnAwcKySD9Fhli99xzjzlLCCGxE3QiW7lyZfn11181KWDu3LnmbODp16+ftrBB6FiWLFnMWUIIiZmgEtly5crJmjVrpFWrVvL111+bs8EDCskg/RZVvJDOG8Lt0QghPiJoRBaFWtatW6fpspMmTTJngw+Ek40bN07rJVh1EwghJDr8JrKXLl0yt/5LgQIFZPv27Zpw8PHHH5uzwQsKyaDEIjotQGhj+t0owoQkbvwisqjdirYvngQne/bs2irmjTfekBEjRpizwU/Tpk1l5syZuo3f7dSpU7rtTvr06bVjAyEk8eIXkYWQrlq1Sq0+d1Bg++jRo1r0BcNpPPHEE5Eiit/l2LFjug0QhYA04IYNG5ozhJDEiN/cBVWqVJHFixdrWULcZqNMIay/Dz74QK1Yp1KnTh2NhgBoaYPoA9Sn7dSpkw5CSOLGrwtfKLgydepULbB9/vx5GTNmjLz66qvmUefy4IMPavotgAWLDDWEfBFCiF9FFj5ZhGcBxJq2bdtWt0OB++67T6pWrarb6NqAVFxCCPGbyFqxpRDa77//Xou+xLcnVzCDgt8oYoNFPoCiMoGot0AICS78IrLwvVpZUkiXrV+/vjRp0kQGDRqki2JOB3UW4CZAnQP4ZXft2qXzFStWVD80ISTxYrvI7tu3L7JNNwpho/OARefOndVl8Mgjj5gzzgNREbdu3dJiNhb58+ePjDSoVasWw7gIScSEuWzMDUVBFatyFXpooVmhJ27evOl1M8To+Pzzz2X//v1qNdvBjRs3JDw83Ny7k5MnT2ovMvDdd9+xdxghiRDbLNmNGzdGCuzatWujFVhgl8D6g+gEFsCCRzddgJhaZIkRQhIXtogsVtZLly6t29u2bdPCL4kVLPZBaCHGzZs3l/Hjx5tHCCGJAZ+L7IoVKyLbtezcuZMdBQwgtNevX9f44DZt2mglL0JI4sCnIovGgzVq1NDtw4cPa+EX8i9XrlyRTJkySceOHbUQOCEk9PGZyM6ZMyeyhTZW1kMhNMsOEC+MxbBevXrZthhHCAkefCKys2bNksaNG+v2hQsX5O6779Zt4hnUN8iTJ4+m3kJsCSGhi9cii46uWDnHwg7qqqLsH4kdhLcVLFhQ3Qaoo0sICU28EtmxY8dqAWurslbq1KnNIyQuoAMuojA+/PBD/TsSQkKPBIssLDBka2XMmFED8sPCwswjJD6sX79eax7gjqBFixbmLCEkVEiQyA4ePFh9iRDYM2fOmLMkoaCQzP333y+TJ0+WRo0ambOEkFAg3iKLjq19+vSR3LlzU2B9yJIlS+Shhx7SNugoOEMICQ3iJbI9evSQoUOHSq5cubTwC/EtKKCD+gaoVIbC34QQ5xNnkcXCzPDhw6VEiRJacIXYAwrJPP3007Jy5Upt2UMIcTZxEtnnn39eF2ZKliwpmzZtMmeJXUyfPl1eeOEFrVyGixohxLnEKrJIMpg0aZKmy6KyFvEPKCTTrl072bx5sxQtWtScJYQ4jRhFFgKLdFm0Vlm2bJk56yySJEkiSZMmNfecBXqFYaERlcxy5sxpzhJCnES0IouQIggsQopQ+MWpoPXNnj17zD3n8d5770nfvn3l0KFDrAdBiAPxKLIQWFiusGRnz55tzjqTAwcOaNFwJ4NCMhDbo0ePSvr06c1ZQogT+I/IYnELAotoAhR+cTpwFcTUvcApwG0wYsQILcCTLl06bdlDCAl+7hDZUqVKyd9//63xsOPGjTNnnU2KFCkc3d7GHRSSQYjXxYsX9fcihAQ/2kjxxIkTWqjkyJEjmmiAjC7M2dhj0S9AiObPn68Vr9AZF0WznQ5ajyOc7vfff1crfdWqVdp6nBASnIRdu3bNhSLS58+fN6eI04DfmdEHhAQnYYcOHXK99dZbMmbMGC1diJYxqKoVCqD0IsoIIoECsb7wZ4YCqHiGvmGIXcYi5ccffyzFixc3jxJCggl1F3z22WfSvn17DXXKmzeveSg06N69uyxevFj++usvcyZ0gNg+99xz8tVXX5kzhJBgQxe+LMv16tWr+hhKYBX+1q1b5l7oEcq/GyGhQLTJCKECRJbhToSQQBHyIluoUCH1WxJCSCAIeZFNkyaNZM2a1dwjhBD/EvIii1jf27dvm3uEEOJfQl5kCSEkkFBkCSHERiiyhBBiIxRZQgixEYosIYTYCEWWEEJshCJLCCE2QpElhBAbocgSQoiNUGQJIcRGKLKEEGIjFFlCCLERiiwhhNgIRZYQQmyEIksIITZCkSWEEBuhyBJCiI1QZAkhxEYosoQQYiMUWUIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERiiyhBBiI2Eug1GjRkmXLl1ky5YtUrRoUfNQaPD555/L/v37ZdCgQeZM6BAWFibNmzeXqVOnmjMkNq5evSrffPONpEyZ0pwhTuLy5cvSunVrc88hQGQ/+ugjFzYNkcVuSDFmzBhX3759zb3QAp+ZIbLmHomN0aNHu1KnTq1/Nw7njps3b5qfqDOgJetgaMnGnU8//VQ6dOigf7O3335b7r//frl27Zp5lAQrKVKk0LuPevXqya1bt3Tu9u3b+jk6BogsLVlngs+MlmzsTJgwQf9WmTJlcvXr18/1ww8/mEeIE8idO7d+fvnz59dHQ2TNI86AC18kpBk/fry88MILkiFDBjl9+rQYt5rq1yPO4K677tI70SlTpkirVq3MWWdBkSUhy+TJk6VNmzZ6y3n27Fmdu379uj6S4Cd79uxy8uRJGTFihDzzzDNy4sQJ84izoMiSkOSrr76SFi1aSKpUqdSnB+DLI84AAnv06FEZPny4dO3a1Zx1JhRZEnIgRKtly5aSJEkSuXjxojlLnELu3LlVYIcMGSLdunUzZ50LRZaEFNOnT5emTZtK8uTJ5caNGyq0xDlAYA8cOCDvvvuu9OrVy5x1NjwDScgwe/ZsadasmW5fuHCBAuswChQooAI7cOBA6d27tznrfHgWkpBg1qxZ8vjjj6uwYnELlixxDhDY3bt3y5tvvin9+/c3Z0MDiqzDuX0boYOJmx9++EGeeOIJ3YYFGx4ertvEGSABCgLbt29fGTBggDkbOlBkbQPid9MYyFLx9fh3lTxlymTmlqfneTvw/jGCl/nz50v9+vV1+8qVK5I6dWrdJs4AArtt2zbp06dPSGZlAqbV2sZRY6w1hh1WFVIKw+XHH+dK/vz5pEiRksa+XfGfENlHIzaDjJ9++knq1q2r2+fPn5d06dLpdnQghKtnz55SpUoVefLJJ81ZEihKlSolmzZtkh49esjQoUPN2ejp3LmzjB492nFptbRkbQMngV0DuPRE0+RaxdPzfDGCk0WLFkUKLFwEsQksCS5KliypAtu9e/c4CayTocjajifh8s2AP9ZekQXWY/CwbNkyefjhh3X71KlTkjZtWt0mzuC+++6Tv//+Wzp16iTDhg0zZ0MXiixxFEuXLtUKWgC1CDJnzqzbxBmUK1dO/vrrL731h5syPvxrUDgLiixxDL/99ps88MADun3s2DHJlCmTbhNnULlyZVm3bp28/PLL8tFHH5mzcefqVSzGwrcefHdXMUGRJY5g1apVUrVqVd0+fvy43H333bpNnEGlSpVkzZo1KrCfffaZMYNKaKuN8Uccx9/SsmUBefPN+pI0KRaUMTw9z99jpTFihiJLgp4///xTqlWrptuHDh3S8nfEOdSsWVN+//13LVUYIbDghjFOGuN0HMcxyZUrrVSvXszYPmUOT8/z98DvEDMUWRLUQGArVKig20eOHJH//e9/uk2cQfXq1WX58uXy/PPPy6RJk8xZi6TGgAThMfZx65ZLrl1DSCF+Ju4/Z++IXUIpsiRo2bBhQ6TA7t27V7Jly6bbxBnUrl1bVq5cqS2SJkyYYM4mPiiyJCiBwJYpU0a3kUySJ08e3SbO4MEHH5Rff/1Vnn322UTfg44iS4KOf/75J1Jgd+7cKbly5dJt4gweffRRWbJkiWbVoTtFYifkRdZRXS2JpnYXL15ct3ft2qXVmYhzQBbejz/+KE2aNJFvv/3WnE3chLzIojI+2444A1itxYph9ThCbPPnz6/bxBk0atRI60k89thjMmPGDHOWhLTIjhs3Tg4ePKgV8tHKggQvENhChQrpNqoyhVqholCnQYMGMnfuXBVaPJJ/CVmRHTNmjKxfv17q1Kkjzz33nIotWlqQ4AORA5bAYsGrcOHCuk2cwVNPPaUlJ1FPAt0pyJ2EpMgiJ3rjxo1aZ7RevXpSunRpeemllzQVE60tYNmS4AACmy9fPt1G0RCUvyPOAcXS4Xt95JFHZMGCBeYscSfkRBY50bjdxG0LPngLCG3btm21ahMsWgpt4EH2liWwSDqwFryIM0B4Ftr+IFwL3SmIZ0JKZFE2bfv27bqyadUadQdfYlT/OXv2rPYSunwZ+dN2gWIWKKR9zYaB170umTKlkdSp0RnB3v/HDiCwOXPm1G0UDUH5O+Ic0LAS8a8PPfSQxsOS6AmZzgjvv/++drpEO2ik8sUEFllQYR11SF9//XWb6pHCUr5gDDuuYwhLSy3p0yeXDh3aypAhyAc/p0d8C2rLYfi2nCDcNlb21h9//CHly5fXbX/w2muvaaEZNF0kCcNKkcXfERldCQPn6ypjwEiIS5hlMuN7u1WNKMThBg9XjPFYxGY0ON6SNa4RevuPha0WLVrEKrCgYMGCWpEdPaHefvttOXPmjHnEl6DtDMQpow0jgzHC5YKh4bt24WTFSerped4OlBL0rcDiS2IJLHLaIbBw3dg9bt26JdeuXdPz5ebNiL5lnp7H4XlYfzMUeYHAoqZvwgU2ceFoSxZfmHfeeUdL3+HDj+8tJ25ZR4wYod1NYeFkyZLFPOIMkGiBvHCnpC0iZpltYpwPyhauXo0yhd6QeCxZx4osrJLBgwerFdqmTRvtGZQQTpw4ob5cXKnR0C179uzmkeDHqSKLSlq41bx69ap5xH9s3rxZuynAHwzrlsSN5MmTa7lC3DHCuPEeimxQA4GFiwALWO3atZN7773XPJIwTp48qc3c8KXr2rWr5MiRwzwS3DhVZBFOhy7CgQB9/WvUqKELNiR+4Lvx4Ycf6vcPousdZ42x3Bhx7eYcLvv27ZLdu3drNEMEwdCPBoZC44jNaHCcTxadSRHrikdcGLwVWJA1a1Z544039MSB2CJ2k9hHICxYgPTqS5cuyblzdiwShj5YwwC+sWRTGAOV1RBhEpeRTzZuPC1Tpiwx91E0KOpzAjFirw7nKJGFsMJFgA8bAuvL4iGwsPr06SNp0qTRWFsUJyGE2EUqYyDxpEQcR36ZM2e/jB+/xrjjRDw1alx4ep6/R1ljxIxjRBa39IgEwEonfKd58+Y1j/gOhHL1799fH0eOHKnuE0JIcJAqFToRGKKVJBjcBHHHESILgUUcLG73EHplp880RYoU6jpAJ1TUP0CqJyGEJJSgF1msZsJFkCRJEr2d90cLEvhmkREGXy0av6FPPCGEJISgFlkI7AcffCDJkiWTXr16aeiNv8DKfd++fTXc6IsvvtDMJEIIiS9BK7JIfUX8aqpUqdRPitt3fwOhhfUM98TEiROZ4UIIiTdBKbJWbQGs9Fsr/oGkZ8+eWqV/+vTpsnTpUnOWEEJiJ+hEdtOmTRpCBdcA/KKpU6c2jwQWRDQgZAxC+/PPP5uzhBASM0Elsii0PXbsWK0hAAsWNQWCiVdeeUV7UKH6O5rFEUJIbASNyK5Zs0YFFrUDkPqIxa5gpFOnTlonAX2M2MuIEBIbQSGyqOiD/uwQ2N69e5uzwcvLL7+sFb8WLVokM2fONGcJIeS/+EVkUVIQvbY8sWTJEhVYZHDBReAUUPmrYsWK8ssvv8i0adPM2TtBQXC05yDBAaJFQLDeJQU7lvsOCTuBINjch3HFb1W4GjZsqIUl5s2bZ86Itq347rvvtM8TMrmcyJQpU+S3337TGpsoGm4xfPhwjfFFrK9dOLUKF/5OX375pTnrX3DhQzggklpY6jDuINX8008/VaMIFdQgeMjA9BdYCIdOQTNQljRp0ogUWyfg11KHqAOZPn16tfywcIQ2wqii1bFjR/MZzuSbb77R0C5U+UdrDvw94Vc+ffq0+Qx7oMjGj3HjxsnWrVv1PeCCT+IOonxwnq9du1b69eundwP+EtkMGTJoq3gkBcFYmzNnjnnEGfi9nmydOnU0RbZKlSpy1113OV5gLWCR4wRElwZ07oSLxG4osnFn/Pjxmh798MMP6xeVxJ/27dtrmjlKVfrTZYA7RRR5B/v27ZPcuXPrtlPw+8IXroLLli3T/k6hIrAA/eevX7+u1hJcBSR4sAQWHYwpsN5j+bb9gbvAop2/0wQW+FVkv/32W5kxY4ZaXuhq8NZbb5lHnA8SFOCzQsQBoiWQUEECD5r+QWBr164tjRo1MmdJQrBcLP5ytfz66/JIgT148Lhfa5f4Er+5C7766isVH/zRnn32WZ1DnyUE+KOJoZPBYgBaYlgn308//aQxtEjFRcsOu6C7IGYgsH/++acKLFuAew9aPaH8Z8zuApQGPWYMb+y3cLl06axhkH0rGTKkNz67J425lMa4rEftB77mu4yBouLe4xdL1pPAAqy8o9ssVuGdCtweEFj3lirwOz/55JPaXQFFboj/wTmHymloXU2B9SdoHX7dGDcSOHAxPiGrVi2VPHn+J4899ogxA9FDyyBPz7drRLRA9wW2iyyyuCCwsCbcBdYCbgOnNC70BPywKCoe9cr+wAMPyDPPPCP79++XIUOGmLPEH0BgkUGIz+Cpp54yZ4l/gL8WspKQkdwQ2HOGwP4mSZIkM4yyapIsGSxYhNp5er5dA7+D7/zOeEXbgMCuW7dOO4NiYSg6nn76aXPLeeDigVoLnoDljltjy2In9gPXCS7q1atXp8A6iqRy+fJ5XeiCGwzfnRQpUBzK+bHMtoksFn7Wr1+viw2J+XatQoUK8uKLL2poFxb60KOM2AMEFjV/0fK7WbNm5iwJfiCwF2TFihUqsPj8UqVKa8yHRrKILSKLhbRt27ZpuAziEhM7ZcuWlbZt28qJEydk0KBBzDSyAZSghMDCAqLAOomkcuXKRf3sLAs2ZUrUjw6d74jPRXbo0KGaVdO0aVMKrBvFixfXCl7nz5/XOrmXL/trpTT0QQYhYq+rVavm0e9PghUI7AVZvnyF7sHFkzp1OmMrtIwQn4osVtKRkQGBrVmzpjlLLIoUKSKdO3eWc+fOqUV75coV8whJKIi9RoQHakdgoZE4haRy9eolw4JdZViwEesXoeQicMdnIgvRgMC2bt2aAhsDiJ1FlwVEJQwcOFDOnDljHiHxBYktiFGuXLmytGzZ0pwlwU+EiwA+WMSW4w4kTZoMxnxoutG8Fln8kd599105duyYnugokkJiBqmB3bp1k2vXrmm7c4SxkfiBWhEQWNT1RQQHcQpJDQPjsvpgUWAGF8jUqdMb876LSw02vBJZlBxDJ9mjR49qNghW0kncQKtx1M+Fsx93AUeOHDGPkNiAwKKOL843VD0jTiGpYVhclmXLlqvAwkWQLh26UIeuwIIEiyysMMR+YiEHK+dY2CHxA1XIevXqpdvwZ+NiRWIGZe4gsOXKlVPXFHEKSeXGjavqIkB0DarwpU2b0ZgPbYEFCRJZrIyjXir8iag9UKJECfMIiS8oeoG7gZQpU8r7778vu3fvNo+QqEBgUYAHAovYY+IUIlwEqLkMgU0sFqxFvEX2woUL6oPFwg1WyrGQQ7wDhcz79u0ryZMn1ySOvXv3mkeIBQq8o/BO6dKlKbCOwrJgV6rAIgokMQksiJfIwnLFijhCj1A5q0CBAuYR4i2oPI/4WVSBR8GczZs3m0fI999/r500ILBwTRGnkMQwxq5oiB3Wb+AiyJABKeiJR2BBnEUW2UrvvfeebqMfFzrLEt8Cl8Ebb7yhli1Kyv3zzz/mkcTLwoULZcGCBerzf+mll8xZEvwkMSzXGxpFgLteNB1Nnx71YBOXwII4iSxWvuEiwIogbmuxMk7sAQ3qYNHec8892uoD9VATK2jjg7q88Pmj9QlxCknkxo1r6oOFwCJMK2NG1GdNfAILYhXZAwcOyIgRI7SUH1bC0emT2As6ceJiljVrVm0eh95hiQ34XyGyaLSJ8EDiFNBuPals2PCn3Lx5RSpUKGsILKIIkEYetWZrMA/fXRBiFFkswKAWATpTIpogupJ+xB4QdYDEhYkTJ2pufmIBEQSIJChWrJjWeyDO4fTpZNK4cTfp2XOSFC36pGTOXNuYLWSMYg4aiJbKYwzfEG37mR07dmjPKizI9O7dW9KkQWUcEgjgC8cdBWpCoAycRSi2n1m8eLHMnDlTChUqpOGBvgXhcWjTHq/13iADXQJgGRbUPX8SW/sZuAas+WnTvjXOV7SNIR7PNojtyJEjJW3atBpN4GSBnTBhggqRk4GbpnDhwlrOD4tAoQqSDCCwuND7XmABWpgcN8YJBw+8f/wewcWlS5ciBRbRIBTYf7lDZCGqKFOIqxWykdC+G/5BJwNLPMIn5Gxwp1GwYEGZN2+edsYNNeAOmTVrloYF2uciwOmO89npI7gscSyIIyIG4CJZv3593SYR3PFpIZ7t888/1wUX+GCx0u10cEsdKrz66qtSpkwZ9VeiOEqogN/lm2++UReBnd19ie9Bej3WbCC0qCkRU5upxIqKrGWtrlq1SgO+EasZKuAKG0r+ZMSK1qpVSxsFgiRJgsuqiS+Io0RN2Lx589rkIiB2Ah87KvFhXYBdgT2j31ArjXP06NFadAPWX6iMRx99VIYPH+7xmFMHrIXXX39dPzN0w3UquHP6+uuv1UWAGrvEGVi+V1iw6FmHzhROX/ewk7Bjx465kMaJHvWeVgydDCx0rMqfOnVKi4qEWhNDpCrmzJlTBQrxpMGOFV2AVWrU00Wdhly5cknPnj3NZ9jNBmOg0lnEnZszQWHru41RVvf8iRVdgO8R4uXxeU6aNElatWplPoN4QkO4zO2QBAHtWLWGNUsCiyWyCEND/zfEXfs30WCLMQ4aw8kiixCubMbwf+U7FITC3S4Wk1GJD4ky7EgROyEvsriVQXofYn5JYLFENkeOHFK7dm1p3Lix3m34o3vv9esiZcrckLvvvm38f+akA4EL/tSpJPLXX+GSPLk56QcQeQRDBbUkwNixY6VNmza6TWIm5EV28uTJGuA+fvx4c4YECjSQDGQ4XZcuD0ijRhXl6lXnuo1SpgyXBQv+kqFDAxfGB4OFqc5xJ+RFFqvXKBvIEnmBBxYrUmYDEXt940aYFCt2STJnvi63bzs3rA+W7JkzyYxzOq2Eh/v/q4usrgYNGph7JC6EvMgS8i8oHXnIGE5f+IJPtqTukeAnwCILJ/4VYzg71lMEf8JUxgidxIfQhNEFxP8EWGRRrGOpMfzowfc51p/vEWM4+cubGKDIEv8TYJE9a4yVxnByfC7+fBgo6UaRDW4ossT/OP0+nRBCghqKLCGE2AhFliQisNCKtiJOHnAXYBCnQJ+s19An6xxQCOmMMZxsW+BCkcEY+XWPBD8UWa+hyBJCoofuAkIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERiiyhBBiIxRZQgixkSARWStryomDEEKih0W7fUY9YzCtlhByJwEWWfzXqCzk9LYt+D3CIzYJIcSNAIssIYSENlz4IoQQG6HIEkKIjVBkCSHERiiyhBBiIxRZQgixEYosIYTYCEWWEEJshCJLCCE2QpElhBAbSXDG1zfffCPHjx/XbbxEeHi4PPHEE3L33XfrXFSOHTsm3377rXTs2NGc8S+3b9+WL7/8Ui5cuCD16tWTQoUKmUcSzty5cyVXrlxStmxZ3T9//rykT59e9uzZIytXrpTnnntO50ni46OPPpJkyZLpeXfr1i3JmzevNGrUyDwaM7Nnz5bChQtLsWLFzBnPfPbZZzF+50iQAJFNCFmyZIE4u7JmzerKnDmzK0OGDLo/cOBA8xl38ueff7qyZctm7vmXUaNG6XtLkyZN5PvOnz+/eTThNG3aVF8bVK9e3dWzZ0/dnj9/vqtKlSq6TRInOMfSpk2r5xu+I9jHiAv33nuva/jw4eZe9OD1li1bZu6RYCXBIpspUybXTz/9ZO5FMGfOHP3gr1+/bs4EB3hPixYtMvciwNw777xj7nkPRHv06NHmHkns4Pw6evSouRcBLvIjR44096KnYsWKcTqX8H/89ttv5h4JVrzyyZ49e9bciqBhw4b6aIisDB06VOrWrSthYWE6tmzZoo/AOPnEsHwjjxlip/OrV6/WW6z33nsv8ti5c+ekbdu2kfs7d+7U52Iet1PWvCFyOhcdOXPmNLci2LRpkxjWpm7jds6wRCNfq3Xr1joP8Jq4HcM8XAMYzzzzjB4rX768fPDBB/L888/L7t27pVOnTtKmTRtZsGCB/n4WFSpUiHxt/D+5c+fWedxK1qxZM/KYYfFE/n7E+eAzjUrp0qX18fTp01K8ePHIzx7uK7ibonLq1CkpUqRI5POGDRtmHonA+j/q168vSZJwiSUY8epTyZw5s7kVAcQQGFdsMW6TxLB0ZcWKFXLmzBkVXosHH3xQhcwQefVdvvHGG3Lo0CF9PQjejh071HcKkc6YMaMYt11y8eJF9X22atVKXwNCVapUKRV6nIiXL1+Wrl276rGofPjhhyrI+Jnu3burmJcoUULfB4BAX7lyRU6cOCH79++XqVOnSocOHfQYfg4D/89rr70mBw8elHvuuUePQRTxO0ycOFFFvEePHjJu3Di5efNmpJ8Mfrhdu3bpz0F88ftCqEHlypXl0qVLcvLkSf398uXLF/n7EeeTJ08eSZ06tX4fIIZPP/203H///XosR44cUrRoUb2I49zCsM45YIknzjGctzhHfv75Zz0HsR5igdfp16+frFq1Si/aJAhRezYBFC5cWG9Xoo6NGzfqcdzuGCeRboPff/9dj4NatWrprdOQIUNc27dv1zmwYcOGyOeAH374wZUyZUpzz+WaNWuW+rjcMSw/lyFeroIFC7rq1atnznoGt2rGFT/yvR4+fNhlWA+6jfdhWNv6epbb48aNG3e8H2B8SVzGxUS3H374Ydf777+v24ZA6u8DZs+erX8fgJ83LjK6Dd58802XIfDmXgR79+51/frrr65q1aq5DIvGnCVOBp/722+/7friiy90vPXWWzpnXITNZ0SA8w7nL84fw6jQObgLPv/8cz1vop5/eE34bAG+GzgHoz6HBBcJtmRhnX7yySeR1t+RI0fwSUvJkiX1OCxSXGU98csvv+hV/fXXX9dVVFy1YekhQsEdWHmpUqUy90SuXbtmbokYIq4/Z4irvPzyy/rcq1evmkf/ZfPmzWKIs2536dJFvv/+e32f2EaUgfUzffv2VUsU87BMX3nlFTHET4+5AyvWk8VgrSJbWJYIgCVjAcvc+nm8FzwPK89NmzbVaA13i584G0SXtGzZUgeszY8//ljdSWD8+PH62eP8b9eund7JuJ/fSZMmVRdUVBcAzne4GixwF5ctW7b/uBFI8JBgkcUtcfbs2fV2Bre/+KCj4i467jRr1kxFEmKHUbVqVencubO6BaKC4+5YJx2eb1iiehxiiNt/T/8fhAthLlExrEZ1Udx11126j/AuiN78+fNVlHv37q1uhKisX7/+PxcDAF+yYVmYe3e+73/++cfcivAFWz//2GOPqUsFz8X7NKwSimwIg/MT5wmA2B44cEA/e4T8wT/rfv4ad1FSrlw5vSC7n0sIG7TCD2EgwHWAcxJuBAguCT4SLLI4CdyvvFHBCYPnWLhbfxBoWHcQWljD8Cc1aNDgP6/n6TXcRah9+/YyadIkeeihh1SsrBPYHfhdIZawGmCtTpgwQS1fWI4jRozQ58D3C4sZ1oBlIcPShqBjYQrvFdbtI488IsbtnSRPHtGTDO/N+mLAwoA/FtYHRNT6Xfr06SNlypSRUaNGqc8NFgz8dACvA3+0cTsZeeFJkSKFHiPOZ+zYsWLc9suYMWPUksVd0pAhQ8yjEYYCziuco0uWLIm8+OK8ss5znFc4X3DewuL9+uuvZeTIkXoM4A4Sd1fNmzdXoSZBiHGVTBAVKlRQn2l0GOLnMm6XzL0If6vlpwSIKU2XLp0rZ86cLuNk1DnD4lPflAVev3z58uaey2VYmuqvAvBlwX+J+FzjNl/9WsZttx7zhHGr5ipQoIDLEFP1fa5du9Y8EgH8qYhnNCzbSN+qRceOHV2G4Lq6devmaty4satr1646/8ILL0S+d/x+8BcbFor6n+vUqaPzwBBPjZk0LiSuXr16uYwvlc6fPHnSZVgr6p82bin1NQzh1WPE2SDEEedTxowZ9TzH+oQhlOZRl/r/8X1Inz6969VXX9V4V4QBgiZNmri++uor3QaGleoyDAhX6dKlXZs3bzZnI9YB/vrrL3Mv4v9EjDYJLtjjKwZgccO6QHSA5TqAlYsoAdzaxwWsMMNCfuqpp3Qf4TiGUGuYGiEk9EmwuyAxAPcDfLOGBaziigGxjKvAAtwewvVg/TygwBKSeKAlGwcQQwvfF2JfPS3OxQb8toiegG8XC4WEkMQDRZYQQmwkYCKLOFuEnli30HhEWJWnCAFCCHEqARPZmTNnSpMmTVRUscBkgbCq6NJjEwrKK0LEESJFCCH+JGALX8hoQfA+YgKh8xiIFezWrZv5DN+xceNGj4kFhBBiNwETWYhq1JRBBO27A5cCisLACk2XLp388MMP5pGIAjGDBg3SY7CKIdYouIJ9DCtkavDgwVqkBoVhUMAGFcBw3B3sIzUYiQSomIUMMcyh6My6des07RX7eL9vv/22+VOiiQOffvqpHsNwDxInhBAF7oJAMG/ePLgpXDVq1NAEA0Ngdd8QO/MZ6sbQohmbNm3SoH/sG6IXeaxkyZKuVatWRe4b4uhav36965dfftH9Dz74QI8hEBzB/gj+RwEYHHMH+/h/Dx06pNudOnVyGcLsunr1qu6jCAyCwBFMjv0DBw5E/hySKVavXu0yxFz38fqEEGIRMEvWSrNFDVoUakGAPnK1rVqrM2bMUMtx4cKFWmgGud4Y7v5aJAVYNWGN30UtWhTcQNlB/AxSYAHCpjCP8ovu/l93YIniNQBSYLEIB0sVc8gLx+shXhbA4rVYu3atVKpUSYvdAIR6EUKIRcBEFrGj8Mmi8tXAgQNlwIABKliYQ7UiVBqCwKEYMW7fa9WqpeJm9dMC7vVskSMOoUSeN7KqUPwF8a0gag2E6IAAR41uQEFuvC6qZ6GgC3AvDo55C4gyepkRQohFwEQWWJajOxBOFOxGVS8sjqEq1uLFi+XXX3/VEonuJd2sn0cxDRR9Qfor5jBQ0NuyWiGSVuEVq6CLhVXqEM8B7oVs4ANGARrrNT11XnB/Praj+pkJIYmbgCkCRA2VqlDvddmyZbJ8+XKtUoTyhXALoKMARBK34ugmMGXKFP0ZVDSysETWEsjp06frcx9//HGNKLBKD6JK0bx583QhDVWNAP4vRDNgscwCr+cumhB5MGfOHK3yZbkLPJU6BHi/1nsihBDFEIWAsHDhQqjRHQNVtFDByuLy5ctahQvHDEs0sjMsMITVdenSJXPPpdXnUSkLzzVu8XWxCh1kgWEJ67xVGevrr792GUKpc+jkgEpeWMzat2+fK0eOHPocC8NC1uehCtLQoUO1s8KAAQP0WOrUqfU9WuTKlUsrhRFCiAXTagkhxEboQCSEEBuhyBJCiI1QZAkhxEYosoQQYiMUWUIIsRGKLCGE2AhFlhBCbIQiSwghNkKRJYQQG6HIEkKIjVBkCSHERiiyhBBiGyL/B/f0EonibqqfAAAAAElFTkSuQmCC";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.fillStyle = "blue"
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",45,172);
			ctx.fillText(arr[2]+" cm",115,145);
			ctx.fillText(arr[3]+" cm",110,95);
			ctx.fillText(arr[4]+" cm",213,168);
			ctx.fillText(arr[5]+" cm",287,150);
			ctx.fillText(arr[6]+" cm",287,103);
			ctx.fillText(arr[7]+" cm",57,449);
			ctx.fillText(arr[8]+" cm",110,377);
			ctx.fillText(arr[9]+" cm",212,437);
			ctx.fillText(arr[10]+" cm",300,417);
			ctx.fillText(arr[11]+" cm",310,382);
			
		}
		return 0;
	}
	function GambarBangunRuang1(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",115,148);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",235,120);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",25,109);
			
		}
		return 0;
	}
	
	function GetSoal1(canv){
		const Aljabar = MyBangunRuang1();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang1(canv,ArSisi);
		var ss
		
		//ss = "Perhatikan gambar! <br>";
		ss = "Panjang diagonal ruang DF adalah ... ";
		
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
	function GetSoal2(canv){
		const Aljabar = MyBangunRuang2();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang2(canv,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = ""+Nama[0]+" memiliki kawat panjangnya "+SplitKomaString(ArSisi[0]/100)+" meter yang akan dibuat kerangka bangun seperti di atas. <br>";
		ss += "Panjang kawat yang tidak terpakai adalah ... ";
		
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
	function GetSoal3(){
		const Aljabar = MyBangunRuang3();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Diketahui prisma dengan banyak rusuk dan sisi berturut-turut "+ArSisi[0][0]+" dan "+ArSisi[0][1]+". Alas prisma tersebut berbentuk ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(canv){
		const MyData = MyBangunRuang4();
		var ArSisi=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		const DrawPGL = GambarBangunRuang4(canv,ArSisi);
		var ss
		
		ss = "Luas permukaan bangun tersebut adalah ... ";
		
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
		const Aljabar = MyBangunRuang5();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang5(canv,ArSisi);
		var ss
		
		//ss = "Perhatikan gambar! <br>";
		ss = "Volume air di dalam kolam adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = DigitKoma(Ar[0],2);
		Ar[0] = SplitKomaString(Ar[0],2);
		//Ar[0] = StringRibuan(Ar[0]);
		
		Ar[1] = DigitKoma(Ar[1],2);
		Ar[1] = SplitKomaString(Ar[1],2);
		//Ar[1] = StringRibuan(Ar[1]);
		
		Ar[2] = DigitKoma(Ar[2],2);
		Ar[2] = SplitKomaString(Ar[2],2);
		//Ar[2] = StringRibuan(Ar[2]);
		
		Ar[3] = DigitKoma(Ar[3],2);	
		Ar[3] = SplitKomaString(Ar[3],2);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" m\u{00B3}<br>B. "+Ar[1]+" m\u{00B3}<br>C. "+Ar[2]+" m\u{00B3}<br>D. "+Ar[3]+" m\u{00B3}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal6(canv){
		const Aljabar = MyBangunRuang6();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang6(canv,ArSisi);
		var ss
		
		//ss = "Perhatikan gambar! <br>";
		ss = "Empat macam rangkaian enam bujursangkar di atas, yang merupakan jaring-jaring kubus adalah ... ";
		
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
		const Aljabar = MyBangunRuang7();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Kubus yang panjang seluruh rusuknya "+ArSisi[0]+" cm mempunyai luas permukaan ....";
		
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
		const Aljabar = MyBangunRuang8();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Kubus merupakan suatu bangun yang dapat disebut juga sebagai ...";
		
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
		const MyData = MyBangunRuang9();
		var ArSisi=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		const DrawPGL = GambarBangunRuang9(canv,ArSisi);
		var ss
		ss = "Gambar di atas adalah mainan anak-anak yang berbentuk balok. <br>Tersusun dari kubus-kubus satuan yang kongruen. <br>Jika seluruh permukaan balok tersebut di cat, banyaknya kubus satuan yang terkena cat pada dua sisinya saja ada ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" buah<br>B. "+Ar[1]+" buah<br>C. "+Ar[2]+" buah<br>D. "+Ar[3]+" buah</p>";
		var textJawab = jawab+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MyBangunRuang10();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang10(canv,ArSisi);
		var ss
		
		//ss = "Perhatikan gambar! <br>";
		ss = "Sebuah kerangka akuarium berbentuk prisma dengan alas berbentuk trapesium sama kaki tampak seperti gambar di atas. <br>";
		ss += "Kerangka tersebut terbuat dari aluminium dengan harga tiap meter Rp"+StringRibuan(ArSisi[4])+",00. <br>";
		ss += "Biaya minimal untuk pembelian seluruh aluminium adalah ...";
		
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
	function GetSoal11(){
		const Aljabar = MyBangunRuang11();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah prisma alasnya berbentuk jajargenjang dengan panjang alas "+ArSisi[0]+" cm dan tinggi "+ArSisi[1]+" cm. <br>"
		ss += "Jika tinggi prisma "+ArSisi[2]+" cm, volume prisma tersebut adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B3}<br>B. "+Ar[1]+" cm\u{00B3}<br>C. "+Ar[2]+" cm\u{00B3}<br>D. "+Ar[3]+" cm\u{00B3}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(){
		const Aljabar = MyBangunRuang12();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah prisma tegak, alasnya berbentuk belahketupat dengan panjang diagonal "+ArSisi[0]+" cm dan "+ArSisi[1]+" cm. <br>"
		ss += "Jika tinggi prisma "+ArSisi[2]+" cm, maka luas permukaan prisma adalah ...";
		
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
		const Aljabar = MyBangunRuang13();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Luas seluruh permukaan limas persegi yang keliling alasnya "+ArSisi[0]+" cm dan tinggi "+ArSisi[1]+" cm adalah ...";
		
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
	function GetSoal14(){
		const Aljabar = MyBangunRuang14();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "ABCD adalah persegi dengan sisi "+ArSisi[0]+" cm, merupakan alas limas dengan puncak P yang tingginya "+ArSisi[1]+" cm. <br>"
		ss += "Di dalam persegi tersebut dibuat lingkaran yang menyinggung keempat sisi persegi tadi. <br>"
		ss += "Lingkaran ini merupakan alas kerucut dengan puncak P. <br>"
		ss += "Jika \u{03C0} = 22/7, maka volume kerucut tersebut adalah ..."
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B3}<br>B. "+Ar[1]+" cm\u{00B3}<br>C. "+Ar[2]+" cm\u{00B3}<br>D. "+Ar[3]+" cm\u{00B3}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal15(canv){
		const Aljabar = MyBangunRuang15();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang15(canv,ArSisi);
		var ss
		
		ss = "Luas kain yang diperlukan untuk membuat topi tersebut adalah ...<br>";
		ss += "(\u{03C0} = 3,14)";
		
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
	function GetSoal16(canv){
		const Aljabar = MyBangunRuang16();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang16(canv,ArSisi);
		var ss
		
		ss = "Luas seluruh permukaan bangun gabungan tabung dan setengah bola adalah ...<br>";
		ss += "(\u{03C0} = 22/7)";
		
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
		const Aljabar = MyBangunRuang17();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah tabung berdiameter "+ArSisi[0]+" cm dengan tinggi "+ArSisi[1]+" cm. Luas seluruh permukaan tabung adalah ... <br>"
		ss += "(\u{03C0} = 22/7)";
		
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
	function GetSoal18(){
		const Aljabar = MyBangunRuang18();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Kubah masjid berbentuk setengah bola yang akan dilapisi aluminium di sisi luarnya. Panjang jari-jari kubah "+SplitKomaString(ArSisi[0])+" meter. <br>"
		ss += "Luas minimal yang dibutuhkan adalah ... <br>"
		ss += "(\u{03C0} = 22/7)";
		
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
	function GetSoal19(canv){
		const Aljabar = MyBangunRuang19();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarBangunRuang19(canv,ArSisi);
		var ss
		
		ss = "Jika luas permukaan bola "+ArSisi[0]+" cm\u{00B2}, maka luas seluruh permukaan tabung adalah ...<br>";
		ss += "(\u{03C0} = 22/7)";
		
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
	function GetSoal20(){
		const Aljabar = MyBangunRuang20();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah prisma memiliki alas berbentuk layang-layang. <br>"
		ss += "Panjang diagonal layang-layang tersebut adalah "+ArSisi[0]+" cm dan "+ArSisi[1]+" cm. <br>"
		ss += "Jika tinggi prisma "+ArSisi[2]+" cm, maka volume adalah ..."
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u{00B3}<br>B. "+Ar[1]+" cm\u{00B3}<br>C. "+Ar[2]+" cm\u{00B3}<br>D. "+Ar[3]+" cm\u{00B3}</p>";
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
	
	
	
	dd1.innerHTML="<p>Bab 14 \u{2192} Bangun Ruang </p>";
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 268;
		cc1.height = 155;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 345;
		cc1.height = 501;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 269;
		cc1.height = 215;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 450;
		cc1.height = 255;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 285;
		cc1.height = 118;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 190;
		cc1.height = 142;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 370;
		cc1.height = 165;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 336;
		cc1.height = 330;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 345;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
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
