function Print2(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	//const mins = "−";
	const mins = "\u{2212}";
	//const sym1 = '♣';
	const sym1 = "\u{2663}";
	//const symx = "×";
	const symx = "\u{00D7}";
	//const sup2 = "¹";
	//const sup2 = "\u{185}";
	//const sup2 = "∈"; element
	const supE = "\u{2208}";
	//const supO = "°"; derajat
	const supO = "\u{00B0}";
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
	var pangkat = [p0,p1,p2,p3,p4,p5,p6,p7,p8,p9];
	//var pangkat = [p9,p9,p9,p9,p9,p9,p9,p9,p9,p9];
		
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
	function RandomAngkaAtoB(a,b){ 
		var r = a+Math.ceil(Math.random() * b);
		return r;
	}
	function RandomBeberapaAngka(n,a,b){
		aa = [];
		for(var i=0; i<n; i++){
			aa.push(RandomAngkaAtoB(a,b));
		}
		return aa;
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
	function BilanganPrimaMaksN(p){
		ArrPrime = new Array();
		for(m=2; m<=p; m++){
			f = CekPrimaN(m)==1;
			if (f){
				ArrPrime.push(m);
			}
		}
		return ArrPrime;
	}
	function CekPrimaN(a) {
		//https://www.autohotkey.com/board/topic/47325-isprime-check-if-number-is-prime/
		//Laszlo
		//Moderators
		//4713 posts
		//Metode dengan akar dan pembulatan ke bawah
		
		for(var i=1;i<=Math.floor(Math.sqrt(a)-1);i++){
			var f = Mods(a,i+1);
			if(!f){
				return 0;
			}
		}
		
		return 1;
	}
	function APangkatN(a,n){
		var num = 1;
		for(var i=1;i<=n;i++){
			num *= a;
		}
		return num;
	}
	function NamaPulauIndonesia(){
		var Ar = ["Jawa","Sumatera","Sulawesi","Kalimantan","Papua","Riau","Maluku","Sumbawa","Flores"];
		Ar = RandomMyArray(Ar)
		return Ar
	}
	function Maksimum(ar){
		var max = ar[0];
		for(var i=1;i<ar.length;i++){
			if(max < ar[i]){
				max = ar[i];
			}
		}
		return max;
	}
	function Minimum(ar){
		var mini = ar[0];
		for(var i=1;i<ar.length;i++){
			if(mini > ar[i]){
				mini = ar[i];
			}
		}
		return mini;
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
				ff = 1;
				for(var i=0;i<ar.length;i++){
					f[i] = Mods(ar[i],iter)==0;
					ff *= f[i];
				}
				
				if (ff){
					fpb = iter;
				}
				fakhir = iter==max;
			}while (!fakhir);
			
			return fpb;
		}
	function GetSoal20(){
		var ArPrima = BilanganPrimaMaksN(8);
		ArPrima = RandomMyArray(ArPrima);
		var pp1 = [2,3,4,5];pp1 = RandomMyArray(pp1);
		var pp2 = [2,3,4,5];pp2 = RandomMyArray(pp2);
		var pp3 = [2,3,4,5];pp3 = RandomMyArray(pp3);
		
		var aa = ArPrima[0]**pp1[0]*ArPrima[1]*ArPrima[2];
		var bb = ArPrima[0]*ArPrima[1]**pp2[0]*ArPrima[2];
		var cc = ArPrima[0]*ArPrima[1]*ArPrima[2]**pp3[0];
						
		var dd = CariFPB([aa,bb,cc]);
		//console.log(aa,bb,cc,dd);
		var ddlain = [dd-ArPrima[0],dd-ArPrima[1],dd-ArPrima[2],dd+ArPrima[2],dd+ArPrima[1],dd+ArPrima[0]];
		ddlain = RandomMyArray(ddlain);
		var ee,ff,gg
		ee = ddlain[0];
		ff = ddlain[1];
		gg = ddlain[2];
		
		if (aa>=1000)	aa = StringRibuan(aa);
		if (bb>=1000)	bb = StringRibuan(bb);
		if (cc>=1000)	cc = StringRibuan(cc);
		if (dd>=1000)	dd = StringRibuan(dd);
		if (ee>=1000)	ee = StringRibuan(ee);
		if (ff>=1000)	ff = StringRibuan(ff);
		if (gg>=1000)	gg = StringRibuan(gg);
		
		var Nama = ["Amir", "Ilham","Faiz","Dimas","Uqi","Ais","Avi"];
		Nama = RandomMyArray(Nama);
		
		var ss = "" +Nama[0]+ " mempunyai 3 buah bambu dengan panjang masing-masing " +aa+ " cm, " +bb+ " cm, dan " +cc+ " cm. Ketiga bambu tersebut akan dipotong sama panjang. Panjang masing-masing bambu adalah ... </p>"
		
		var Ar = []
		
		Ar[0] = dd+ " cm";
		Ar[1] = ee+ " cm";
		Ar[2] = ff+ " cm";
		Ar[3] = gg+ " cm";
		var jawab = Ar[0];
		
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal19(){
		//45.Jambore dihadiri oleh 96 pramuka dari Jawa, 72 pramuka dari Sumatra, dan 48 pramuka dari Sulawesi. Pramuka-pramuka ini akan dibagi menjadi beberapa kelompok, sehingga pramuka dari setiap pulau tersebar merata di setiap kelompok. Maka jumlah maksimal kelompok yang bisa dibentuk adalah … kelompok.
		//a.48
		//b.36
		//c.30
		//d.24
		var Pulau = NamaPulauIndonesia();
		var ArPrima = BilanganPrimaMaksN(6);
		ArPrima = RandomMyArray(ArPrima);
		
		var m1 = RandomAngkaAtoB(1,3);
		var m2 = RandomAngkaAtoB(1,2);
		var m3 = RandomAngkaAtoB(1,1);
		var n1 = RandomAngkaAtoB(1,1);
		var n2 = RandomAngkaAtoB(m2+1,5);
		var n3 = RandomAngkaAtoB(1,3);
		var p1 = 0;
		var p2 = RandomAngkaAtoB(1,3);
		var p3 = RandomAngkaAtoB(1,3);
		
		var aa = APangkatN(ArPrima[0],m1) * APangkatN(ArPrima[1],m2) * APangkatN(ArPrima[2],m3);
		var bb = APangkatN(ArPrima[0],n1) * APangkatN(ArPrima[1],n2) * APangkatN(ArPrima[2],n3);
		var cc = APangkatN(ArPrima[0],p1) * APangkatN(ArPrima[1],p2) * APangkatN(ArPrima[2],p3);
		
		if (aa>=1000)	aa = StringRibuan(aa);
		if (bb>=1000)	bb = StringRibuan(bb);
		if (cc>=1000)	cc = StringRibuan(cc);
		
		var qmax1 = Maksimum([m1,n1,p1]);
		var qmax2 = Maksimum([m2,n2,p2]);
		var qmax3 = Maksimum([m3,n3,p3]);
		var qmin1 = Minimum([m1,n1,p1]);
		var qmin2 = Minimum([m2,n2,p2]);
		var qmin3 = Minimum([m3,n3,p3]);
		
		var dd = APangkatN(ArPrima[0],qmin1) * APangkatN(ArPrima[1],qmin2) * APangkatN(ArPrima[2],qmin3);
		var ee = APangkatN(ArPrima[0],qmax1) * APangkatN(ArPrima[1],qmin2) * 1;
		var ff = 1;
		var gg = APangkatN(ArPrima[0],1) * APangkatN(ArPrima[1],1) * APangkatN(ArPrima[2],1);
		
		var ss = "Jambore dihadiri oleh " +aa+ " pramuka dari " +Pulau[0]+ ", " +bb+ " pramuka dari " +Pulau[1]+ ", dan " +cc+ " pramuka dari " +Pulau[2]+ ". Pramuka-pramuka ini akan dibagi menjadi beberapa kelompok, sehingga pramuka dari setiap pulau tersebar merata di setiap kelompok. Maka jumlah maksimal kelompok yang bisa dibentuk adalah ... kelompok.</p>"
		
		var Ar = [];
		
		Ar[0] = dd;
		Ar[1] = ee;
		Ar[2] = ff;
		Ar[3] = gg;
		var jawab = Ar[0];
		
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal18(){
		// 40.	FPB dari 45, 180, dan 225 adalah …
		// a.	3
		// b.	45
		// c.	300
		// d.	900
		var ArPrima = BilanganPrimaMaksN(6);
		var ArPrima=RandomMyArray(ArPrima);

		var m1 = RandomAngkaAtoB(1,3);
		var m2 = RandomAngkaAtoB(1,3);
		var m3 = RandomAngkaAtoB(1,3);
		var n1 = RandomAngkaAtoB(1,3);
		var n2 = RandomAngkaAtoB(m2+1,5);
		var n3 = RandomAngkaAtoB(1,3);
		var p1 = 0;
		var p2 = RandomAngkaAtoB(1,3);
		var p3 = RandomAngkaAtoB(1,3);
		
		var aa = APangkatN(ArPrima[0],m1) * APangkatN(ArPrima[1],m2) * APangkatN(ArPrima[2],m3);
		var bb = APangkatN(ArPrima[0],n1) * APangkatN(ArPrima[1],n2) * APangkatN(ArPrima[2],n3);
		var cc = APangkatN(ArPrima[0],p1) * APangkatN(ArPrima[1],p2) * APangkatN(ArPrima[2],p3);
		
		var qmax1 = Math.max(m1,n1,p1);
		var qmax2 = Math.max(m2,n2,p2);
		var qmax3 = Math.max(m3,n3,p3);
		var qmin1 = Math.min(m1,n1,p1);
		var qmin2 = Math.min(m2,n2,p2);
		var qmin3 = Math.min(m3,n3,p3);
		
		var dd = APangkatN(ArPrima[0],qmin1) * APangkatN(ArPrima[1],qmin2) * APangkatN(ArPrima[2],qmin3);
		var ee = APangkatN(ArPrima[0],qmax1) * APangkatN(ArPrima[1],qmin2) * 1;
		var ff = 1;
		var gg = APangkatN(ArPrima[0],1) * APangkatN(ArPrima[1],1) * APangkatN(ArPrima[2],1);
		
		if(aa>=1000)	aa=StringRibuan(aa);
		if(bb>=1000)	bb=StringRibuan(bb);
		if(cc>=1000)	cc=StringRibuan(cc);
		if(dd>=1000)	dd=StringRibuan(dd);
		if(ee>=1000)	ee=StringRibuan(ee);
		if(ff>=1000)	ff=StringRibuan(ff);
		if(gg>=1000)	gg=StringRibuan(gg);

		var ss = "FPB dari " +aa+ ", " +bb+ ", dan " +cc+ " adalah ... </p>";
		
		var Ar = []
		
		Ar[0] = dd;
		Ar[1] = ee;
		Ar[2] = ff;
		Ar[3] = gg;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal17(){
		// ;38. KPK dari 36, 72, dan 81 adalah …
		// ;a. 9
		// ;b. 144
		// ;c. 426
		// ;d. 648
		var ArPrima = BilanganPrimaMaksN(6);
		var ArPrima = RandomMyArray(ArPrima);
		
		var arp1 = [1,2,3];
		arp1 = RandomMyArray(arp1);
		var arp2 = [1,2,3];
		arp2 = RandomMyArray(arp2);
		
		var m1 = arp1[0];
		var m2 = arp2[0];
		var n1 = arp1[1];
		var n2 = arp2[2];
		var p1 = arp1[2];
	 
		var aa = APangkatN(ArPrima[0],m1) * APangkatN(ArPrima[1],m2);
		var bb = APangkatN(ArPrima[0],n1) * APangkatN(ArPrima[1],n2);
		var cc = APangkatN(ArPrima[0],p1);
		
		var qmax1 = Math.max(m1,n1,p1);
		var qmax2 = Math.max(m2,n2);
		var qmin1 = Math.min(m1,n1,p1);
		var qmin2 = Math.min(m2,n2);
		
		var dd = APangkatN(ArPrima[0],qmax1) * APangkatN(ArPrima[1],qmax2);
		var ee = APangkatN(ArPrima[0],qmin1) * APangkatN(ArPrima[1],qmin2);
		var ff = APangkatN(ArPrima[0],qmax1) * APangkatN(ArPrima[1],qmin2);
		var gg = APangkatN(ArPrima[0],qmax1+3) * APangkatN(ArPrima[1],qmax2);
		
		if(dd>=1000)	dd=StringRibuan(dd);
		if(ee>=1000)	ee=StringRibuan(ee);
		if(ff>=1000)	ff=StringRibuan(ff);
		if(gg>=1000)	gg=StringRibuan(gg);

		var ss = "KPK dari " +aa+ ", " +bb+ ", dan " +cc+ " adalah ... </p>";
		
		var Ar = [];
		
		Ar[0] = dd;
		Ar[1] = ee;
		Ar[2] = ff;
		Ar[3] = gg;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal16(){
		//37. Ibu Ami akan membeli 45 kg tepung terigu dengan harga Rp4.850,00 per kg. Perkiraan jumlah uang yang harus dibawa Ibu Ami untuk membeli tepung terigu tersebut adalah …
		//a. Rp196.000,00
		//b. Rp200.000,00
		//c. Rp218.000,00
		//d. Rp250.000,00
		do{
			
			var aa = 10*RandomAngkaAtoB(1,4);
			var bb = 1000*RandomAngkaAtoB(2,8);
			var cc = aa*bb;
			
			var dd = RandomAngkaAtoB(1,9);
			var ee = RandomAngkaAtoB(1,9);
			var ff = 50;
			var gg
			if (dd<5)	gg = aa+dd;
			else		gg = aa+dd-10;
			
			var hh
			if (ee<5)	hh = bb+ee*100+ff;
			else		hh = bb+ee*100+ff-1000;
			
			var ii = Math.floor(hh/1000)+ "." +(ee*100+ff);
			
			var h1 = cc;
			var h2 = Math.round(gg*hh/10,0) * 10;
			var h3 = h1-50000;
			var h4 = h2-10000;
			
			var f1 = h1 == h2;
			var f2 = h1 == h3;
			var f3 = h1 == h4;
			var f4 = h2 == h3;
			var f5 = h2 == h4;
			var f6 = h3 == h4;
			
			var f = f1 || f2 || f3 || f4 || f5 || f6;
		}while (f);
		
		if(h1>=1000)	h1 = StringRibuan(h1);
		if(h2>=1000)	h2 = StringRibuan(h2);
		if(h3>=1000)	h3 = StringRibuan(h3);
		if(h4>=1000)	h4 = StringRibuan(h4);
		
		var ss = "Ibu Ami akan membeli " +gg+ " kg tepung terigu dengan harga Rp" +ii+ ",00 per kg. Perkiraan jumlah uang yang harus dibawa Ibu Ami untuk membeli tepung terigu tersebut adalah ... </p>"
		
		var Ar = [];
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal15(){
		//36. Hasil perkiraan dari 234 : 13 adalah …
		//a. 20
		//b. 19
		//c. 16
		//d. 10
		do{
			var aa = 10*RandomAngkaAtoB(1,4);
			var bb = 10*RandomAngkaAtoB(1,3);
			var cc = RandomAngkaAtoB(1,9);
			var dd = bb+cc;
			var ee = aa*(Math.round(dd/10,0))*10;
			
			var gg = 10*RandomAngkaAtoB(1,9);
			var hh = RandomAngkaAtoB(1,4);
			var ii
			if (gg<5)	ii = ee+gg+hh;
			else		ii = ee+gg+hh-100;
			
			var ar_er = [-3,-2,-1,1,2,3];
			ar_er = RandomMyArray(ar_er);
			
			var h1 = aa;
			var h2 = aa+ar_er[0];
			var h3 = aa+ar_er[1];
			var h4 = Math.round(ii/dd,0);
			
			var f1 = h1 == h2;
			var f2 = h1 == h3;
			var f3 = h1 == h4;
			var f4 = h2 == h3;
			var f5 = h2 == h4;
			var f6 = h3 == h4;
			
			var f = f1 || f2 || f3 || f4 || f5 || f6;
		}while (f);

		if(ii>=1000)	ii=StringRibuan(ii);
		
		var ss = "Hasil perkiraan dari " +ii+ " : " +dd+ " adalah ... </p>";
		
		var Ar = [];
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal14(){
		// 35. Pembulatan ke angka puluhan terdekat dari 62 x 176 adalah …
		// a. 10900
		// b. 10800
		// c. 10400
		// d. 10200
		var aa = 10*RandomAngkaAtoB(4,8) + RandomAngkaAtoB(1,9);
		var bb = 10*RandomAngkaAtoB(14,18) + RandomAngkaAtoB(1,9);
		var cc = Math.round(aa/10,0)*10;
		var dd = Math.round(bb/10,0)*10;
		var ee,ff
		if (Mods(aa,10)<5)	ee = cc+10;
		else				ee = cc-10;
		
		if (Mods(bb,10)<5)	ff = dd+10;
		else				ff = dd-20;
		
		var h1 = cc*dd;
		var h2 = cc*ff;
		var h3 = ee*dd;
		var h4 = ee*ff;
		
		if(h1>=1000)	h1=StringRibuan(h1);
		if(h2>=1000)	h2=StringRibuan(h2);
		if(h3>=1000)	h3=StringRibuan(h3);
		if(h4>=1000)	h4=StringRibuan(h4);
		
		//var ss = "Pembulatan ke angka puluhan terdekat dari " +aa+ " × " +bb+ " adalah ... </p>";
		var ss = "Pembulatan ke angka puluhan terdekat dari " +aa+ " "+symx+" " +bb+ " adalah ... </p>";
		
		var Ar = [];
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal13(){
		// 34. Jika ♣ kalikan bilangan pertama dengan 2, kemudian kurangi dengan 3 kali bilangan kedua.
		// Hasil dari (9 ♣ 7) ♣ (-6 ♣ 4) = …
		// a. 74
		// b. 76
		// c. 78
		// d. 80
		var aa = RandomAngkaAtoB(1,10);
		var bb = RandomAngkaAtoB(1,10);
		var cc = RandomAngkaAtoB(1,10) * (-1);
		var dd = RandomAngkaAtoB(1,10);
		var ee = (aa*(2) - 3*bb);
		var ff = (cc*(2) - 3*dd);
		var gg = (ee*(2) - 3*ff);
		
		var ar_er = [-3,-2,-1,1,2,3];
		ar_er = RandomMyArray(ar_er);
		
		var h1 = gg;
		var h2 = ee;
		var h3 = ff;
		var h4 = gg+ar_er[0];

		if(cc<0)	cc = mins+Math.abs(cc);
		var ss = "Jika "+sym1+" kalikan bilangan pertama dengan 2, kemudian kurangi dengan 3 kali bilangan kedua.<br>Hasil dari (" +aa+ " "+sym1+" " +bb+ ") "+sym1+" (" +cc+ " "+sym1+" " +dd+ ") = ... </p>"
		
		var Ar = [];
		
		if(h1<0)	h1 = mins+Math.abs(h1);
		if(h2<0)	h2 = mins+Math.abs(h2);
		if(h3<0)	h3 = mins+Math.abs(h3);
		if(h4<0)	h4 = mins+Math.abs(h4);
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal12(){
		// 34. Jika ♣ kalikan bilangan pertama dengan -2, kemudian kurangi dengan 3 kali bilangan kedua.
		// Hasil dari (9 ♣ 7) ♣ (-6 ♣ 4) = …
		// a. 74
		// b. 76
		// c. 78
		// d. 80
		var aa = RandomAngkaAtoB(1,10);
		var bb = RandomAngkaAtoB(1,10);
		var cc = RandomAngkaAtoB(1,10) * (-1);
		var dd = RandomAngkaAtoB(1,10);
		var ee = (aa*(-2) - 3*bb);
		var ff = (cc*(-2) - 3*dd);
		var gg = (ee*(-2) - 3*ff);
		
		var ar_er = [-3,-2,-1,1,2,3];
		ar_er = RandomMyArray(ar_er);
		
		var h1 = gg;
		var h2 = ee;
		var h3 = ff;
		var h4 = gg+ar_er[0];

		if(cc<0)	cc = mins+Math.abs(cc);
		
		var ss = "Jika "+sym1+" kalikan bilangan pertama dengan "+mins+"2, kemudian kurangi dengan 3 kali bilangan kedua.<br>Hasil dari (" +aa+ " "+sym1+" " +bb+ ") "+sym1+" (" +cc+ " "+sym1+" " +dd+ ") = ... </p>"
		
		var Ar = [];
		
		if(h1<0)	h1 = mins+Math.abs(h1);
		if(h2<0)	h2 = mins+Math.abs(h2);
		if(h3<0)	h3 = mins+Math.abs(h3);
		if(h4<0)	h4 = mins+Math.abs(h4);
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal11(){
		//29. Dalam sebuah tes dibuat aturan penilaian sebagai berikut :
		//Setiap butir soal yang dijawab benar diberi skor 2.
		//Dijawab salah diberi skor -1.
		//Sedangkan tidak dijawab diberi skor 0.
		//Seorang peserta hanya menjawab 57 butir soal dan yang benar 45. Jika banyak soal 75 butir soal, skor yang diperoleh peserta tersebut adalah …
		//a. 90
		//b. 78
		//c. 66
		//d. 60
		var aa = 10*RandomAngkaAtoB(7,10);
		var bb = aa-RandomAngkaAtoB(10,10);
		var cc = bb-RandomAngkaAtoB(1,5);
		var dd = bb-cc;
		var ee = cc*2 + dd*(-1);
		var h1 = ee;
		var h2 = bb*2 + dd*(-1);
		var h3 = bb*2 + cc*(-1);
		var h4 = dd*2 + cc*(-1);

		var ss = "Dalam sebuah tes dibuat aturan penilaian sebagai berikut :<br>";
		ss += "Setiap butir soal yang dijawab benar diberi skor 2.<br>";
		ss += "Dijawab salah diberi skor "+mins+"1.<br>";
		ss += "Sedangkan tidak dijawab diberi skor 0.<br>";
		ss += "Seorang peserta hanya menjawab " +bb+ " butir soal dan yang salah " +dd+ ". Jika banyak soal " +aa+ " butir soal, skor yang diperoleh peserta tersebut adalah ... <br></p>";
		
		var Ar = [];
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal10(){
		//27. Suhu di dalam kulkas sebelum dihidupkan 29°C. setelah dihidupkan, suhunya turun 3°C setiap 5 menit. Setelah 10 menit suhu di dalam kulkas adalah …
		//a. 23°C
		//b. 26°C
		//c. 32°C
		//d. 35°C
		var aa = RandomAngkaAtoB(25,35);
		var bb = RandomAngkaAtoB(1,5);
		var cc = RandomAngkaAtoB(1,10);
		var dd = RandomAngkaAtoB(2,6);
		var ee = cc*dd;
		var h1 = aa - bb*dd;
		var h2 = h1 - 1;
		var h3 = h1 + RandomAngkaAtoB(1,3);
		var h4 = h1 - RandomAngkaAtoB(1,3);
		
		var ss = "Suhu di dalam kulkas sebelum dihidupkan " +aa+ ""+supO+"C. setelah dihidupkan, suhunya turun " +bb+ ""+supO+"C setiap " +cc+ " menit. Setelah " +ee+ " menit suhu di dalam kulkas adalah ... </p>"
		
		var Ar = [];
		
		Ar[0] = h1;
		Ar[1] = h2;
		Ar[2] = h3;
		Ar[3] = h4;
		
		if(Ar[0]<0) Ar[0]=mins+Math.abs(Ar[0])
		if(Ar[1]<0) Ar[1]=mins+Math.abs(Ar[1])
		if(Ar[2]<0) Ar[2]=mins+Math.abs(Ar[2])
		if(Ar[3]<0) Ar[3]=mins+Math.abs(Ar[3])
		
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal9(){
		//26. Suhu mula-mula -10°C, kemudian dinaikkan 15°C dan diturunkan kembali 7°C. Suhu terakhir sekarang adalah …
		//a. -12°C
		//b. -2°C
		//c. 2°C
		//d. 12°C
		do{
			var aa = RandomAngkaAtoB(-20,-1);
			var bb = RandomAngkaAtoB(1,20);
			var cc = RandomAngkaAtoB(1,20);
			var f3 = bb==cc;
			var f4 = aa+bb-cc==0;
			var f5 = aa+bb+cc==0;
			var f6 = aa+bb-cc==aa+bb+cc;
			var f = f3 || f4 || f5 || f6;
		}while (f)
		
		var ss = "Suhu mula-mula "+mins+"" +Math.abs(aa)+ ""+supO+"C, kemudian dinaikkan " +bb+ ""+supO+"C dan diturunkan kembali " +cc+ ""+supO+"C. Suhu terakhir sekarang adalah ... </p>";
		var Ar = [];
		
		if(aa+bb-cc<0){
			Ar[0] = mins+Math.abs(aa+bb-cc);
			Ar[1] = Math.abs(aa+bb-cc);
		}else{
			Ar[0] = (aa+bb-cc);
			Ar[1] = mins+Ar[0];
		}
		
		if(aa+bb+cc<0){
			Ar[2] = mins+Math.abs(aa+bb+cc);
			Ar[3] = Math.abs(aa+bb+cc);
		}else{
			Ar[2] = (aa+bb+cc);
			Ar[3] = mins+Ar[2];
		}
		
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal8(){
		// 23. Luas suatu bangun ditentukan dengan rumus 5a^2-4b. Jika a=5 dan b=2. Luas bangun tersebut adalah …
		// Luas suatu bangun ditentukan dengan rumus 5a²-4b. Jika a=aa dan b=bb. Luas bangun tersebut adalah …
		// 115
		// 117
		// 215
		// 226
		var aa = RandomAngkaAtoB(1,10);
		var bb = RandomAngkaAtoB(1,10);
		var dd = RandomAngkaAtoB(1,10);
		var ee = RandomAngkaAtoB(1,10);
		var cc = dd*aa*aa-ee*bb;
		var cc1 = dd*aa-ee*bb;
		var cc2 = aa*aa-ee*bb;
		var cc3 = dd*aa*aa-bb;
		
		//var ss = "Luas suatu bangun ditentukan dengan rumus " +dd+ "a² "+mins+" " +ee+ "b. Jika a = " +aa+ " dan b = " +bb+ ". Luas bangun tersebut adalah ... </p>";
		var ss = "Luas suatu bangun ditentukan dengan rumus " +dd+ "a"+p2+" "+mins+" " +ee+ "b. Jika a = " +aa+ " dan b = " +bb+ ". Luas bangun tersebut adalah ... </p>";
		
		var Ar = [];
		
		if(cc<0)	cc = mins+Math.abs(cc);
		if(cc1<0)	cc1 = mins+Math.abs(cc1);
		if(cc2<0)	cc2 = mins+Math.abs(cc2);
		if(cc3<0)	cc3 = mins+Math.abs(cc3);
		
		Ar[0] = cc;
		Ar[1] = cc1;
		Ar[2] = cc2;
		Ar[3] = cc3;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal7(){
		//21.	(4 + (-9) – (-3)) – (-5 + 7 + (-8)) = …
		//(4 + (-9) – (-3)) – (-5 + 7 + (-8)) = …
		//(aa + (-bb) – (-cc)) – (-dd + ee + (-ff)) = …
		//a.	-2
		//b.	4
		//c.	8
		//d.	18
		var a_ = [];
		
		for(var i=0; i<30; i++){
			a_[i] = i;
		}
		a_ = RandomMyArray(a_);
		
		var aa = a_[0];
		var bb = a_[1];
		var cc = a_[2];
		var dd = a_[3];
		var ee = a_[4];
		var ff = a_[5];
		var gg = (aa + (-1*bb) - (-1*cc)) - (-1*dd + ee + (-1*ff));
		var gg1 = (aa + (1*bb) - (1*cc)) - (1*dd + ee + (1*ff));
		var gg2 = (aa + (1*bb) - (1*cc)) - (-1*dd + ee + (-1*ff));
		var gg3 = (aa + (-1*bb) - (-1*cc)) - (1*dd + ee + (1*ff));
		
		var ss = "(" +aa+ " + ("+mins+"" +bb+ ") "+mins+" ("+mins+"" +cc+ ")) "+mins+" ("+mins+"" +dd+ " + " +ee+ " + ("+mins+"" +ff+ ")) = ... </p>";
		
		var Ar = [];
		
		if(gg<0)	gg = mins+Math.abs(gg);
		if(gg1<0)	gg1 = mins+Math.abs(gg1);
		if(gg2<0)	gg2 = mins+Math.abs(gg2);
		if(gg3<0)	gg3 = mins+Math.abs(gg3);
		
		Ar[0] = gg;
		Ar[1] = gg1;
		Ar[2] = gg2;
		Ar[3] = gg3;
		jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal6(){
		// 17. y + (-3) = -10, y ∈ B. Maka nilai y adalah …
		// a. -13
		// b. 30
		// c. -7
		// d. 13
		var aa = RandomAngkaAtoB(1,9);
		var bb = RandomAngkaAtoB(10,30);
		var cc = aa-bb;
		
		var ss = "y + ("+mins+"" +aa+ ") = "+mins+"" +bb+ ", y "+supE+" B. Maka nilai y adalah ... </p>";
		
		var Ar = [];
		if(cc<0){
			Ar[0] = mins+Math.abs(cc);
			Ar[1] = Math.abs(cc);
		}else{
			Ar[0] = cc;
			Ar[1] = mins+cc;
		}
		
		Ar[2] = bb+aa;
		Ar[3] = aa*bb;
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal5(){
		// 14.	138 + 62 – 8 x n : 4 = 176
		// 138 + 62 – 4 x 2 x n : 4 = 176
		// aa + bb - cc x dd x ee : cc = ff
		// Nilai n = ...
		// a. 6
		// b. 12
		// c. 16
		// d. 20
		do{
			var aa = RandomAngkaAtoB(110,190);
			var bb = Math.abs(200 - aa);
			var cc = RandomAngkaAtoB(1,9);
			var dd = RandomAngkaAtoB(1,9);
			var ee = RandomAngkaAtoB(10,20);
			var ff = (aa + bb) - dd * ee;
			var fakhir = cc == dd;
		}while (fakhir)
		
		var ss = "" +aa+ " + " +bb+ " "+mins+" " +cc*dd+ " "+symx+" n : " +cc+ " = " +ff+ "</br>Nilai n = ... </p>"
		if(ff<0)	ss = "" +aa+ " + " +bb+ " "+mins+" " +cc*dd+ " "+symx+" n : " +cc+ " = " +mins+Math.abs(ff)+ "</br>Nilai n = ... </p>"
		
		var ar_er = [-10,-5,5,10];
		ar_er=RandomMyArray(ar_er);
		
		var Ar = [];
		
		Ar[0] = ee;
		Ar[1] = Ar[0]+ar_er[0];
		Ar[2] = Ar[0]+ar_er[1];
		Ar[3] = Ar[0]+ar_er[2];
		var jawab = Ar[0];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal4(){
		// pilihan 1Loop
		var aa = new Array();
		do{
			aa[0] = RandomAngkaAtoB(1,20);
			aa[1] = RandomAngkaAtoB(1,20);
			aa[2] = RandomAngkaAtoB(1,20);
			var f1 = aa[1]==aa[2];
			var f2 = aa[1]>aa[2];
			var f = f1 || f2;
		}while (f);
		ss = "Diketahui bilangan-bilangan : "+mins+""+aa[2]+", "+aa[2]+", "+mins+""+aa[1]+", "+aa[1]+", 0.<br>Jika diurutkan dalam urutan naik maka penulisannya menjadi ... <p>";
		
		var Ar = [];
		//const mins = "−";
		//const mins = "\u{2212}";
		Ar[0] = mins+aa[2]+", "+aa[2]+", "+mins+aa[1]+", "+aa[1]+", 0";
		Ar[1] = mins+aa[1]+", "+mins+aa[2]+", 0, "+aa[1]+", "+aa[2];
		Ar[2] = mins+aa[2]+", "+mins+aa[1]+", 0, "+aa[1]+", "+aa[2];
		Ar[3] = aa[2]+", "+aa[1]+", 0, "+mins+aa[1]+", "+mins+aa[2];
		var jawab = Ar[2];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal3(){
		var ss = "Pada perkalian berlaku sifat distributif, yaitu ... </p>";
		
		// pilihan 1
		var Ar = new Array();
		Ar.push("(a "+symx+" b) "+symx+" c = a "+symx+" (b "+symx+" c)");
		Ar.push("a "+symx+" (b + c) = (a "+symx+" b) + (a "+symx+" c)");
		Ar.push("a "+symx+" (b "+mins+" c) = (a "+symx+" b) "+mins+" (b "+symx+" c)");
		Ar.push("a "+symx+" (b "+mins+" c) = (a "+mins+" b) "+symx+" (a "+mins+" c)");
		var jawab = Ar[1];
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal2(){
		var ss = "Pada pengurangan bilangan bulat berlaku sifat ... </p>"
		
		var Ar = []
		Ar.push("Distributif");
		Ar.push("Asosiatif");
		Ar.push("Tertutup");
		Ar.push("Komutatif");
		var jawab = Ar[2]
		
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = []
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix
	}
	function GetSoal1(){
		var ss = "Bilangan p dan q bilangan cacah dan p + q = p, maka ... </p>";
		var Ar = [];
		Ar.push("p unsur identitas penjumlahan");
		Ar.push("p unsur identitas perkalian");
		Ar.push("q unsur identitas penjumlahan");
		Ar.push("q unsur identitas perkalian");
		var jawab = Ar[2];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = []
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix
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
	
	dd1.innerHTML="<p>Bab 2 \u{2192} Teori Bilangan </p>";
	ss = namefunc[no-1]();
	if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
	else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
	dd4.innerHTML+="Jawaban : "+ss[1];
	hidingElemen(cc1);
	hidingElemen(cc2);
	hidingElemen(cc3);
	hidingElemen(dd2);
	hidingElemen(dd3);

	function hidingElemen(elem){
		//hiding elemen
		elem.setAttribute("hidden", "hidden");
	}
}
