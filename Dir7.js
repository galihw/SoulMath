function Print7(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	//const mins = "−";
	const mins = "\u{2212}";
	//const symU = "∪";
	const symU = "\u{222A}";//"\u{00B0}";
	//const symN = "∩";
	const symN = "\u{2229}";//"\u{00B0}";
	//const sup2 = "∈"; element
	const supE = "\u{2208}";
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
	}function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaTukang(){
		var Tukang = ["Pak Suprihardjo", "Pak Galih", "Pak Syauqi", "Pak Fadly", "Pak Wurry", "Pak Reggy", "Pak Abi"];
		Tukang = RandomMyArray(Tukang);
		return Tukang;
	}
	function NamaHuruf(){
		var Abjad=[];
		for (var i=1;i<=26;i++){
			Abjad.push(String.fromCharCode(64+i));
		}
		Abjad = RandomMyArray(Abjad);
		return Abjad;
	}
	function NamaBensin(){
		var Bensin = ["Pertalite", "Pertamax", "Pertamax Green","Pertamax Turbo","Pertamax Racing","Solar","Dexlite"];
		Bensin = RandomMyArray(Bensin);
		return Bensin;
	}
	function NamaTelur(){
		var Telur = ["telur ayam", "telur ayam kampung", "telur bebek", "telur asin"];
		Telur = RandomMyArray(Telur);
		return Telur;
	}
	function NamaBawang(){
		var bawang = ["bawang putih", "bawang merah", "bawang bombay"];
		bawang = RandomMyArray(bawang);
		return bawang;
	}
	function NamaMobil(){
		var mobil = ["Honda Brio", "Daihatsu Sigra", "Toyota Calya","Daihatsu Ayla","Mitsubishi Xpander","Toyota Avanza","Toyota Rush","Toyota Agya","Toyota Kijang Innova","Daihatsu Terios","Renault KWID","Suzuki Ertiga"];
		mobil = RandomMyArray(mobil);
		return mobil;
	}
	function NamaPakaian(){
		var Pakaian = ["pakaian", "baju", "celana","setelan baju tidur","rok","jilbab","sarung","gorden","taplak meja"];
		Pakaian = RandomMyArray(Pakaian);
		return Pakaian;
	}
	function NamaBenda(){
		var Benda = ["buku", "pensil", "pulpen","penghapus","penggaris","rautan"];
		Benda = RandomMyArray(Benda);
		return Benda;
	}
	function NamaSekolah(){
		var Sekolah = ["SD Pintar", "SD Harapan", "SD Unggul", "SD Prestasi", "SD Hebat", "SD Cendikia", "SD Cerdas"];
		Sekolah = RandomMyArray(Sekolah);
		return Sekolah;
	}
	function MyPerbandingan1(){
		var m1 = RandomAngkaAtoB(5,20);
		var n1 = RandomAngkaAtoB(m1,10);
		var biaya = 1000*RandomAngkaAtoB(0,10);
		var m2 = m1*biaya;
		var n2 = n1*biaya;
		return [m1,n1,m2,n2,biaya];
	}
	function MyPerbandingan2(){
		var m1 = RandomAngkaAtoB(1,5);
		var n1 = RandomAngkaAtoB(m1,10);
		var biaya = 10000*RandomAngkaAtoB(0,5);
		var m2 = m1*biaya;
		var n2 = n1*biaya;
		return [m1,n1,m2,n2,biaya];
	}
	function MyPerbandingan3(){
		var m1 = RandomAngkaAtoB(1,5);
		var n1 = RandomAngkaAtoB(m1,10);
		var biaya = RandomAngkaAtoB(1,9);
		var m2 = m1*biaya;
		var n2 = n1*biaya;
		return [m1,n1,m2,n2,biaya];
	}
	function MyPerbandingan4(){
		var m1 = RandomAngkaAtoB(1,5);
		var n1 = RandomAngkaAtoB(m1,10);
		var biaya = RandomAngkaAtoB(1,9);
		var m2 = m1*biaya;
		var n2 = n1*biaya;
		return [m1,n1,m2,n2,biaya];
	}
	function MyPerbandingan5(){
		var m1 = RandomAngkaAtoB(1,5);
		var n1 = RandomAngkaAtoB(m1,10);
		var biaya = 1000*RandomAngkaAtoB(1,9);
		var m2 = m1*biaya;
		var n2 = n1*biaya;
		return [m1,n1,m2,n2,biaya];
	}
	function MyPerbandingan6(){
		do{
			var m1 = RandomAngkaAtoB(0,20);
			var n1 = 2*RandomAngkaAtoB(1,10)-1;
		}while(m1==n1)
		var biaya = 0.5;//*(2*RandomAngkaAtoB(1,10)-1);
		var m2 = m1*biaya;
		var n2 = n1*biaya;
		return [m1,n1,m2,n2,biaya];
	}
	function MyPerbandingan7(){
		var m1 = RandomAngkaAtoB(1,7);
		var n1 = 10 - m1;
		var biaya = 1000*RandomAngkaAtoB(1,9);
		var m2 = m1*biaya;
		var n2 = 10*biaya;
		var p1 = 2*biaya;
		var p2 = 12*biaya;
		return [m1,n1,m2,n2,biaya,p1,p2];
	}
	function MyPerbandingan8(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var fpb;
		fpb = CariFPB([m1,n1]);
		var skala1 = Math.floor(m1/fpb);
		var skala2 = Math.floor(n1/fpb);
		var bi = 1000*RandomAngkaAtoB(0,10);
		var bplus = (skala1+skala2)*bi;
		var bmin = Math.abs(skala1-skala2)*bi;
		return [skala1,skala2,bplus,bmin,bi];
	}
	function MyPerbandingan9(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var p1 = urut[2];
		var fpb1;
		var fpb2;
		fpb1 = CariFPB([m1,n1]);
		fpb2 = CariFPB([n1,p1]);
		var skala1 = Math.floor(m1/fpb1);
		var skala2 = Math.floor(n1/fpb1);
		var skala3 = Math.floor(n1/fpb2);
		var skala4 = Math.floor(p1/fpb2);
		if(fpb1==fpb2){
			m1 = skala1;
			n1 = skala2;
			p1 = skala4;
		}
		return [skala1,skala2,skala3,skala4,m1,n1,p1];
	}
	function MyPerbandingan10(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var biaya = 1000*RandomAngkaAtoB(1,9);
		var fpb;
		fpb = CariFPB([m1,n1]);
		var skala1 = Math.floor(m1/fpb);
		var skala2 = Math.floor(n1/fpb);
		var biayaPlus = (skala1+skala2)*biaya;
		var biayaMinus = (Math.max(skala1,skala2)-Math.min(skala1,skala2))*biaya;
		return [skala1,skala2,biayaPlus,biayaMinus,biaya];
	}
	function MyPerbandingan11(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var biaya = RandomAngkaAtoB(1,9);
		var fpb;
		fpb = CariFPB([m1,n1]);
		var skala1 = Math.floor(m1/fpb);
		var skala2 = Math.floor(n1/fpb);
		var biayaPlus = (skala1+skala2)*biaya;
		var biayaMinus = (Math.max(skala1,skala2)-Math.min(skala1,skala2))*biaya;
		return [skala1,skala2,biayaPlus,biayaMinus,biaya];
	}
	function MyPerbandingan12(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var biaya = 1000*RandomAngkaAtoB(1,9);
		var fpb;
		fpb = CariFPB([m1,n1]);
		var skala1 = Math.floor(m1/fpb);
		var skala2 = Math.floor(n1/fpb);
		var biayaPlus = (skala1+skala2)*biaya;
		var biayaMinus = (Math.max(skala1,skala2)-Math.min(skala1,skala2))*biaya;
		return [skala1,skala2,biayaPlus,biayaMinus,biaya];
	}
	function MyPerbandingan13(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var p1 = urut[2];
		var bi = 10*RandomAngkaAtoB(1,9);;
		var fpb1;
		var fpb2;
		fpb1 = CariFPB([m1,n1]);
		fpb2 = CariFPB([n1,p1]);
		var skala1 = Math.floor(m1/fpb1);
		var skala2 = Math.floor(n1/fpb1);
		var skala3 = Math.floor(n1/fpb2);
		var skala4 = Math.floor(p1/fpb2);
		if(fpb1==fpb2){
			m1 = skala1;
			n1 = skala2;
			p1 = skala4;
		}
		return [m1,n1,p1,bi];
	}
	function MyPerbandingan14(){
		var urut = [];
		var nn = 15;
		for(var i=1;i<=nn;i++){
			urut[i-1] = i;
		}
		urut = RandomMyArray(urut);
		var m1 = urut[0];
		var n1 = urut[1];
		var p1 = urut[2];
		var bi = 1000*RandomAngkaAtoB(1,9);
		var fpb1;
		var fpb2;
		fpb1 = CariFPB([m1,n1]);
		fpb2 = CariFPB([n1,p1]);
		var skala1 = Math.floor(m1/fpb1);
		var skala2 = Math.floor(n1/fpb1);
		var skala3 = Math.floor(n1/fpb2);
		var skala4 = Math.floor(p1/fpb2);
		if(fpb1==fpb2){
			m1 = skala1;
			n1 = skala2;
			p1 = skala4;
		}
		return [m1,n1,p1,bi];
	}
	function MyPerbandingan15(){
		var skl1 = 1;
		var skl2 = 1000*RandomAngkaAtoB(0,15);
		var m1 = RandomAngkaAtoB(4,11);
		var m2 = RandomAngkaAtoB(4,11);
		var n1 = Math.round(m1*skl1*skl2/100);
		var n2 = Math.round(m2*skl1*skl2/100);
		return [skl1,skl2,m1,m2,n1,n2];
	}
	function MyPerbandingan16(){
		do{
			var m1 = 10*RandomAngkaAtoB(2,13);
			var m2 = 10*RandomAngkaAtoB(2,13);
			var nn = m1*m2/(m1+m2);
			var mod = Mods(m1*m2,(m1+m2));
		} while(mod>0 || m1==m2);
		return [m1,m2,nn];
	}
	function MyPerbandingan17(){
		do{
			var m1 = 10*RandomAngkaAtoB(2,13);
			var m2 = 10*RandomAngkaAtoB(2,13);
			var nn = m1*m2/(m1+m2);
			var mod = Mods(m1*m2,(m1+m2));
		} while(mod>0 || m1==m2);
		return [m1,m2,nn];
	}
	function MyPerbandingan18(){
		do{
			var aa = 1*RandomAngkaAtoB(1,15);
			var bb = 1*RandomAngkaAtoB(1,15);
			var cc = 1*RandomAngkaAtoB(1,15);
			var arr = [[aa*bb,cc],[aa*cc,bb],[bb*cc,aa],[cc,aa*bb],[bb,aa*cc],[aa,bb*cc]];
			arr = RandomMyArray(arr);;
			var ff = aa==bb || aa==cc || bb==cc;
		} while(ff);
		return arr;
	}
	function MyPerbandingan19(){
		do{
			var aa = 1*RandomAngkaAtoB(1,15);
			var bb = 1*RandomAngkaAtoB(1,15);
			var cc = 1*RandomAngkaAtoB(1,15);
			var arr = [[aa*bb,cc],[aa*cc,bb],[bb*cc,aa],[cc,aa*bb],[bb,aa*cc],[aa,bb*cc]];
			arr = RandomMyArray(arr);
			var ff = aa==bb || aa==cc || bb==cc;
		} while(ff);
		return arr;
	}
	function MyPerbandingan20(){
		do{
			var aa = 1*RandomAngkaAtoB(1,15);
			var bb = 1*RandomAngkaAtoB(1,15);
			var cc = 1*RandomAngkaAtoB(1,15);
			var arr1 = [[aa*bb,cc],[aa*cc,bb],[bb*cc,aa]];
			var arr2 = [[cc,aa*bb],[bb,aa*cc],[aa,bb*cc]];
			arr1 = RandomMyArray(arr1);
			arr2 = RandomMyArray(arr2);
			var ff = aa==bb || aa==cc || bb==cc;
		} while(ff);
		return [arr1,arr2];
	}

	
	function GetSoal1(){
		const banding = MyPerbandingan1();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		
		//Sebanyak 6 telur ayam dihargai Rp9.000,00. Berapakah harga 20 telur ayam tersebut?
		var telur = NamaTelur();
		var ss
		ss = "Sebanyak "+m1+" "+telur[0]+" dihargai Rp "+StringRibuan(m2)+",00. ";
		ss += "Berapakah harga "+n1+" "+telur[0]+" tersebut?";
		var Ar = [];
		// jawaban
		Ar[0] = n2;
		var pilSalah = [(n1+1)*bi,(n1+2)*bi,(n1+3)*bi,n2+Math.floor(bi/2),n2+Math.floor(bi/4)];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
						
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal2(){
		const banding = MyPerbandingan2();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		
		//Bawang putih sebanyak 2 kg harganya adalah Rp5.000,00, carilah harga 4 kg bawang putih!
		var Bawang = NamaBawang();
		var ss
		ss = "Sebanyak "+m1+" kg "+Bawang[0]+" dihargai Rp "+StringRibuan(m2)+",00. ";
		ss += "Berapakah harga "+n1+" kg "+Bawang[0]+" tersebut?";
		var Ar = [];
		// jawaban
		Ar[0] = n2;
		var pilSalah = [(n1+1)*bi,(n1+2)*bi,(n1+3)*bi,n2+Math.floor(bi/2),n2+Math.floor(bi/4)];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
						
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal3(){
		const banding = MyPerbandingan3();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		
		//Sebanyak 5 liter bensin bisa dipakai mobil untuk menempuh perjalanan 60 km. 
		//Berapa jarak yang telah ditempuh mobil setelah memakai 40 liter bensin?
		var Mobil = NamaMobil();
		var ss
		ss = "Sebanyak "+m1+" liter bensin bisa dipakai "+Mobil[0]+" untuk menempuh perjalanan "+m2+" km. ";
		ss += "Berapa jarak yang telah ditempuh "+Mobil[0]+" setelah memakai "+n1+" liter bensin?";
		var Ar = [];
		// jawaban
		Ar[0] = n2;
		var pilSalah = [(n1+1)*bi,(n1+2)*bi,(n1+3)*bi,n2+Math.floor(bi/2),n2+Math.floor(bi/4)];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
						
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" km<br>B. "+Ar[1]+" km<br>C. "+Ar[2]+" km<br>D. "+Ar[3]+" km</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal4(){
		const banding = MyPerbandingan4();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		
		//Toko konveksi membutuhkan 130 meter kain untuk membuat 40 potong pakaian. 
		//Apabila tersedia 312 meter kain, maka dapat dibuat pakaian sebanyak?
		var Pakaian = NamaPakaian();
		var ss
		ss = "Toko konveksi membutuhkan "+m1+" meter kain untuk membuat "+n1+" potong "+Pakaian[0]+". ";
		ss += "Apabila tersedia "+m2+" meter kain, maka dapat dibuat "+Pakaian[0]+" sebanyak?";
		var Ar = [];
		// jawaban
		Ar[0] = n2;
		var pilSalah = [(n1+1)*bi,(n1+2)*bi,(n1+3)*bi,n2+Math.floor(bi/2),n2+Math.floor(bi/4)];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
						
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" potong<br>B. "+Ar[1]+" potong<br>C. "+Ar[2]+" potong<br>D. "+Ar[3]+" potong</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal5(){
		const banding = MyPerbandingan5();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		
		//Jika harga 5 liter BBM jenis pertamax adalah Rp45.000,00,
		//berapakah harga 13 liter BBM jenis pertamax?
		var Bensin = NamaBensin();
		var ss
		ss = "Jika harga "+m1+" liter BBM jenis "+Bensin[0]+" adalah Rp "+StringRibuan(m2)+",00, ";
		ss += "berapakah harga "+n1+" liter BBM jenis "+Bensin[0]+"?";
		var Ar = [];
		// jawaban
		Ar[0] = n2;
		var pilSalah = [(n1+1)*bi,(n1+2)*bi,(n1+3)*bi,n2+Math.floor(bi/2),n2+Math.floor(bi/4)];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
						
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal6(){
		const banding = MyPerbandingan6();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		var fpb = CariFPB([m1,n1]);
		var skala1 = Math.floor(m1/fpb);
		var skala2 = Math.floor(n1/fpb);
		var angka1 = SplitKomaString(m2);
		var angka2 = SplitKomaString(n2);
		//Siswa A punya pita sepanjang 1,5 meter, sementara siswa B punya pita sepanjang 4,5 meter. 
		//Bagaimanakah penulisannya jika dibandingkan?
		var Bensin = NamaBensin();
		var ss
		ss = "Siswa A punya pita sepanjang "+angka1+" meter, sementara siswa B punya pita sepanjang "+angka2+" meter. ";
		ss += "Bagaimanakah penulisannya jika dibandingkan?";
		var Ar = [];
		// jawaban
		Ar[0] = skala1+" : "+skala2;
		var pilSalah = [(skala1+1)+" : "+skala2,
						skala1+" : "+(skala2+1),
						(skala1+1)+" : "+(skala2+1),
						(skala1+2)+" : "+skala2,
						skala1+" : "+(skala2+2),
						(skala1+2)+" : "+(skala2+2),
						skala2+" : "+skala1,
						(skala2+1)+" : "+skala1,
						skala2+" : "+(skala1+1),
						(skala2+1)+" : "+(skala1+1),
						(skala2+2)+" : "+skala1,
						skala2+" : "+(skala1+2),
						(skala2+2)+" : "+(skala1+2)];
		do{
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]==Ar[2] || Ar[1]==Ar[3] || Ar[2]==Ar[3];
		}while(ff);
						
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal7(){
		const banding = MyPerbandingan7();
		var m1=banding[0];
		var n1=banding[1];
		var m2=banding[2];
		var n2=banding[3];
		var bi=banding[4];
		var p1=banding[5];
		var p2=banding[6];
		
		//Harga 5 buah buku Rp 25.000,00.  
		//Ibu mempunyai uang Rp 50.000,00 tetapi ibu ingin membeli 1 lusin buku.  
		//Cukupkah uang ibu? Jika tidak cukup berapa rupiah kekurangannya?
		var Benda = NamaBenda();
		var Tokoh = NamaTokoh();
		var ss
		ss = "Harga "+m1+" buah "+Benda[0]+" Rp "+StringRibuan(m2)+",00. ";
		ss += Tokoh[0]+" mempunyai uang Rp "+StringRibuan(n2)+",00 tetapi "+Tokoh[0]+" ingin membeli 1 lusin "+Benda[0]+". ";
		ss += "Berapa rupiah kekurangannya? ";
		var Ar = [];
		// jawaban
		Ar[0] = p1;
		var pilSalah = [p2,11*bi,p2-m2,bi,10*bi,m2];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
						
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal8(){
		const banding = MyPerbandingan8();
		var skala1=banding[0];
		var skala2=banding[1];
		var bplus=banding[2];
		var bmin=banding[3];
		var bi=banding[4];
		//Rudi dan Andi punya perbandingan uang jajan 3 : 5 untuk setiap bulannya. 
		//Jika dijumlahkan mencapai Rp400.000,00, maka selisihnya yaitu...
		var Tokoh = NamaTokoh();
		var ss
		ss = Tokoh[0]+" dan "+Tokoh[1]+" punya perbandingan uang jajan "+skala1+" : "+skala2+" untuk setiap bulannya. <br>";
		ss += "Jika dijumlahkan mencapai Rp "+StringRibuan(bplus)+",00, maka selisihnya yaitu ... ";
		var Ar = [];
		// jawaban
		Ar[0] = bmin;
		do{
			var pilSalah = [skala1*bi,
							skala2*bi,
							(skala1+1)*bi,
							(skala2+1)*bi,
							(bmin+bi),
							(bmin-bi),
							(bplus+bi),
							(bplus-bi)];
			
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff1 = Ar[0]==Ar[1] || Ar[0]==Ar[2] || Ar[0]==Ar[3];
			var ff2 = Ar[1]==Ar[2] || Ar[1]==Ar[3] || Ar[2]==Ar[3];
			var ff = ff1 || ff2
		}while(ff)
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(){
		const banding = MyPerbandingan9();
		var skala1=banding[0];
		var skala2=banding[1];
		var skala3=banding[2];
		var skala4=banding[3];
		var m1=banding[4];
		var n1=banding[5];
		var p1=banding[6];
		//Perbandingan panjang tali Luki dan Burhan adalah 3 : 7, 
		//sedangkan perbandingan panjang tali Burhan dan Yusuf adalah 7 : 9. 
		//Berapakah perbandingan panjang tali Luki, Burhan, dan Yusuf?
		var Tokoh = NamaTokoh();
		var ss
		ss = "Perbandingan panjang tali "+Tokoh[0]+" dan "+Tokoh[1]+" adalah "+skala1+" : "+skala2+", " ;
		ss += "sedangkan perbandingan panjang tali "+Tokoh[1]+" dan "+Tokoh[2]+" adalah "+skala3+" : "+skala4+". ";
		ss += "Berapakah perbandingan panjang tali "+Tokoh[0]+", "+Tokoh[1]+", dan "+Tokoh[2]+"?";
		var Ar = [];
		// jawaban
		Ar[0] = m1+" : "+n1+" : "+p1;
		var pilSalah = [m1+" : "+p1+" : "+n1,
						p1+" : "+m1+" : "+n1,
						n1+" : "+m1+" : "+p1,
						n1+" : "+p1+" : "+m1];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(){
		const banding = MyPerbandingan10();
		var skala1=banding[0];
		var skala2=banding[1];
		var bplus=banding[2];
		var bmin=banding[3];
		var bi=banding[4];
		//Jumlah uang Dodi dan Dedi Rp64.000,00 dengan perbandingan 3 : 5. 
		//Berapakah selisih uang mereka?
		var Tokoh = NamaTokoh();
		var ss
		ss = "Jumlah uang "+Tokoh[0]+" dan "+Tokoh[1]+" Rp "+StringRibuan(bplus)+",00 dengan perbandingan "+skala1+" : "+skala2+". " ;
		ss += "Berapakah selisih uang mereka? ";
		var Ar = [];
		// jawaban
		Ar[0] = bmin;
		var pilSalah = [skala1*bi,
						skala2*bi,
						bplus,
						bmin-bi,
						bmin+bi,
						bplus-bi,
						bplus+bi];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal11(){
		const banding = MyPerbandingan11();
		var skala1=banding[0];
		var skala2=banding[1];
		var bplus=banding[2];
		var bmin=banding[3];
		var bi=banding[4];
		//Jika B banding C adalah 6:4 dan jumlah B dan C adalah 30. 
		//Berapakah nilai B dan C?
		var Abjad = NamaHuruf();
		var ss
		ss = "Jika "+Abjad[0]+" banding "+Abjad[1]+" adalah "+skala1+" : "+skala2+" dan jumlah "+Abjad[0]+" dan "+Abjad[1]+" adalah "+StringRibuan(bplus)+ ". " ;
		ss += "Berapakah nilai "+Abjad[0]+" dan "+Abjad[1]+"? ";
		var Ar = [];
		// jawaban
		Ar[0] = StringRibuan(bi*skala1)+" dan "+StringRibuan(bi*skala2);
		var pilSalah = [StringRibuan(bi*skala2)+" dan "+StringRibuan(bi*skala1),
						StringRibuan(bplus*skala1)+" dan "+StringRibuan(bmin*skala2),
						StringRibuan(bmin*skala1)+" dan "+StringRibuan(bplus*skala2),
						StringRibuan(bmin*skala1)+" dan "+StringRibuan(bi*skala2),
						StringRibuan(bi*skala1)+" dan "+StringRibuan(bmin*skala2),
						StringRibuan(bplus*skala1)+" dan "+StringRibuan(bi*skala2),
						StringRibuan(bi*skala1)+" dan "+StringRibuan(bplus*skala2),
						StringRibuan(skala1)+" dan "+StringRibuan(skala2),
						StringRibuan(skala2)+" dan "+StringRibuan(skala1),
						StringRibuan(bplus*skala1)+" dan "+StringRibuan(bplus*skala2),
						StringRibuan(bmin*skala1)+" dan "+StringRibuan(bmin*skala2),
						StringRibuan(bi*(skala1+1))+" dan "+StringRibuan(bi*(skala2-1)),
						StringRibuan(bi*(skala1-1))+" dan "+StringRibuan(bi*(skala2+1)),
						StringRibuan(bi*(skala1-2))+" dan "+StringRibuan(bi*(skala2+2)),
						StringRibuan(bi*(skala1+2))+" dan "+StringRibuan(bi*(skala2-2))];				
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(){
		const banding = MyPerbandingan12();
		var skala1=banding[0];
		var skala2=banding[1];
		var bplus=banding[2];
		var bmin=banding[3];
		var bi=banding[4];
		//Dua remaja punya perbandingan uang jajan sekolah 3 : 5 yang jarak keduanya hanya Rp1.000,00. 
		//Berapa jumlah uang mereka ketika dijumlahkan?
		var Abjad = NamaHuruf();
		var ss
		ss = "Dua remaja punya perbandingan uang jajan sekolah "+skala1+" : "+skala2+" yang jarak keduanya hanya Rp "+StringRibuan(bmin)+",00. " ;
		ss += "Berapa jumlah uang mereka ketika dijumlahkan? ";
		var Ar = [];
		// jawaban
		Ar[0] = bplus;
		do{
			var pilSalah = [bplus+bi,
							bplus-bi,
							bmin+bi,
							bmin-bi,
							bplus+bi+bi,
							bplus-bi-bi,
							bmin+bi+bi,
							bmin-bi-bi,
							bi,
							bmin,
							skala1+skala2,
							skala1,
							skala2];
			
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff1 = Ar[0]==Ar[1] || Ar[0]==Ar[2] || Ar[0]==Ar[3]
			var ff2 = Ar[1]==Ar[2] || Ar[1]==Ar[3] || Ar[2]==Ar[3]
			var ff3 = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
			var ff = ff1 || ff2 || ff3
		}while(ff)
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal13(){
		const banding = MyPerbandingan13();
		var m1=banding[0];
		var n1=banding[1];
		var p1=banding[2];
		var bi = banding[3];
		var m1b=banding[0]*bi;
		var n1b=banding[1]*bi;
		var p1b=banding[2]*bi;
		var bplus = (m1+n1+p1)*bi;
		if(m1b>999)	m1b = StringRibuan(m1b);
		if(n1b>999)	n1b = StringRibuan(n1b);
		if(p1b>999)	p1b = StringRibuan(p1b);
		//Perbandingan jumlah murid kelas I, kelas II, dan kelas III di SD Harapan adalah 11 : 10 : 9. 
		//Apabila jumlah semua murid di sekolah tersebut 1.200 orang, 
		//berapa masing-masing jumlah siswa kelas I, kelas II, dan kelas III?
		var Sekolah = NamaSekolah();
		var ss
		ss = "Perbandingan jumlah murid kelas I, kelas II, dan kelas III di "+Sekolah[0]+" "+m1+" : "+n1+" : "+p1+". " ;
		ss += "Apabila jumlah semua murid di sekolah tersebut "+StringRibuan(bplus)+" orang, ";
		ss += "berapa masing-masing jumlah siswa kelas I, kelas II, dan kelas III?";
		var Ar = [];
		// jawaban
		Ar[0] = m1b+" : "+n1b+" : "+p1b;
		var pilSalah = [p1b+" : "+n1b+" : "+m1b,
						m1b+" : "+p1b+" : "+n1b,
						n1b+" : "+p1b+" : "+n1b,
						p1b+" : "+n1b+" : "+n1b,
						p1b+" : "+n1b+" : "+m1b];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(){
		const banding = MyPerbandingan14();
		var m1=banding[0];
		var n1=banding[1];
		var p1=banding[2];
		var bi = banding[3];
		var m1b=banding[0]*bi;
		var n1b=banding[1]*bi;
		var p1b=banding[2]*bi;
		var bplus = (m1+n1+p1)*bi;
		var bAB = (m1+n1)*bi;
		var bBC = (n1+p1)*bi;
		var bAC = (m1+p1)*bi;
		if(m1b>999)	m1b = StringRibuan(m1b);
		if(n1b>999)	n1b = StringRibuan(n1b);
		if(p1b>999)	p1b = StringRibuan(p1b);
		//Peserta didik A, B, dan C punya perbandingan uang 4 : 3 : 2. 
		//Seandainya A dan B punya Rp42.000,00 jika dijumlahkan, 
		//maka uang ketika ketiganya ditambahkan menjadi?
		var Huruf = NamaHuruf();
		var ss
		ss = "Peserta didik "+Huruf[0]+", "+Huruf[1]+", dan "+Huruf[2]+" punya perbandingan uang "+m1+" : "+n1+" : "+p1+". " ;
		ss += "Seandainya "+Huruf[0]+" dan "+Huruf[1]+" punya Rp "+StringRibuan(bAB)+",00 jika dijumlahkan, ";
		ss += "maka uang ketika ketiganya ditambahkan menjadi?";
		var Ar = [];
		// jawaban
		Ar[0] = bplus;
		var pilSalah = [bAB,
						bBC,
						bAC,
						bplus+bi,
						bplus-bi];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		if(Ar[0]>999)	Ar[0] = StringRibuan(Ar[0]);
		if(Ar[1]>999)	Ar[1] = StringRibuan(Ar[1]);
		if(Ar[2]>999)	Ar[2] = StringRibuan(Ar[2]);
		if(Ar[3]>999)	Ar[3] = StringRibuan(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. Rp "+Ar[0]+",00<br>B. Rp "+Ar[1]+",00<br>C. Rp "+Ar[2]+",00<br>D. Rp "+Ar[3]+",00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal15(){
		const banding = MyPerbandingan15();
		//[skl1,skl2,m1,m2,n1,n2];
		var skala1=banding[0];
		var skala2=banding[1];
		var m1=banding[2];
		var m2=banding[3];
		var n1=banding[4];
		var n2=banding[5];
		//Gedung dalam peta berukuran 40 cm x 60 cm, 
		//sementara dalam kenyataan 20 m x 30 m. 
		//Jika dibandingkan, skalanya adalah...
		var Abjad = NamaHuruf();
		var ss
		ss = "Gedung dalam peta berukuran "+StringRibuan(m1)+" cm : "+StringRibuan(m2)+" cm, ";
		ss += "sementara dalam kenyataan "+StringRibuan(n1)+" m : "+StringRibuan(n2)+" m. ";
		ss += "Jika dibandingkan, skalanya adalah ... ";
		var Ar = [];
		// jawaban
		Ar[0] = skala1+" : "+StringRibuan(skala2);
		var pilSalah = [StringRibuan(skala2)+" : "+skala1,
						skala1+" : "+StringRibuan(Math.round(skala2/100)),
						StringRibuan(Math.round(skala2/100))+" : "+skala1,
						skala1+" : "+StringRibuan(skala2*10),
						skala1+" : "+StringRibuan(skala2*100),
						StringRibuan(skala2*10)+" : "+skala1,
						StringRibuan(skala2*100)+" : "+skala1];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal16(){
		const banding = MyPerbandingan16();
		//m1,m2,nn
		var m1=banding[0];
		var m2=banding[1];
		var nn=banding[2];
		//Pak Amin bisa membuat kolam ikan dengan waktu 60 hari, 
		//sementara Pak Darmaji memerlukan waktu 90 hari. 
		//Berapa lama waktu yang dibutuhkan jika mereka melakukan kerja sama?
		var Tukang = NamaTukang();
		var ss
		ss = Tukang[0]+" bisa membuat kolam ikan dengan waktu "+m1+" hari, ";
		ss += "sementara "+Tukang[1]+" memerlukan waktu "+m2+" hari. ";
		ss += "Berapa lama waktu yang dibutuhkan jika mereka melakukan kerja sama?";
		var Ar = [];
		// jawaban
		Ar[0] = nn;
		var pilSalah = [m1+m2,
						Math.max(m1,m2)-Math.min(m1,m2),
						Math.round(m1/10),
						Math.round(m2/10),
						Math.max(Math.round(m1/10),Math.round(m2/10))-Math.min(Math.round(m1/10),Math.round(m2/10))];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" hari<br>B. "+Ar[1]+" hari<br>C. "+Ar[2]+" hari<br>D. "+Ar[3]+" hari</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal17(){
		const banding = MyPerbandingan17();
		//m1,m2,nn
		var m1=banding[0];
		var m2=banding[1];
		var nn=banding[2];
		//Tukang A dan Tukang B berniat untuk melakukan kerja sama, yakni mengecat rumah Bapak C. 
		//Tukang A perlu waktu 24 hari, sedangkan tukang B membutuhkan waktu selama 8 hari.  
		//Berapa lama waktu yang mereka perlukan jika kerja sama?	
		var Tukang = NamaTukang();
		var ss
		ss = Tukang[0]+" dan "+Tukang[1]+" berniat untuk melakukan kerja sama, yakni mengecat rumah "+Tukang[2]+". <br>";
		ss += Tukang[0]+" perlu waktu "+m1+" hari, sedangkan "+Tukang[1]+" membutuhkan waktu selama "+m2+" hari.  ";
		ss += "Berapa lama waktu yang mereka perlukan jika kerja sama? ";
		var Ar = [];
		// jawaban
		Ar[0] = nn;
		do{
			var pilSalah = [m1+m2,
							Math.max(m1,m2)-Math.min(m1,m2),
							Math.round(m1/10),
							Math.round(m2/10),
							Math.max(Math.round(m1/10),Math.round(m2/10))-Math.min(Math.round(m1/10),Math.round(m2/10))];
			
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]==Ar[2] || Ar[1]==Ar[3] || Ar[2]==Ar[3]
		}while(ff)
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" hari<br>B. "+Ar[1]+" hari<br>C. "+Ar[2]+" hari<br>D. "+Ar[3]+" hari</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal18(){
		const arr = MyPerbandingan18();
		//m1,m2,nn
		//var m1=banding[0];
		//var m2=banding[1];
		//var nn=banding[2];
		//Persediaan pakan ayam di rumah Bu Lia cukup untuk 15 ekor selama 18 hari. 
		//Jika jumlah ayam tersebut menjadi 27 ekor,  
		//tentukan berapa lama maka persediaan pakan ayam akan habis!
		var Tukang = NamaTukang();
		var ss
		ss = "Persediaan pakan ayam di rumah "+Tukang[0]+" cukup untuk "+arr[0][0]+" ekor selama "+arr[0][1]+" hari. <br>";
		ss += "Jika jumlah ayam tersebut menjadi "+arr[1][0]+" ekor,   ";
		ss += "tentukan berapa lama maka persediaan pakan ayam akan habis!";
		var Ar = [];
		// jawaban
		Ar[0] = arr[1][1];
		var pilSalah = [arr[2][1],
						arr[3][1],
						arr[4][1],
						arr[5][1]];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" hari<br>B. "+Ar[1]+" hari<br>C. "+Ar[2]+" hari<br>D. "+Ar[3]+" hari</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal19(){
		const arr = MyPerbandingan19();
		//m1,m2,nn
		//var m1=banding[0];
		//var m2=banding[1];
		//var nn=banding[2];
		//Dalam sebuah peternakan, 150 ekor kambing menghabiskan persediaan makanan dalam waktu 2 bulan. 
		//Apabila 50 ekor kambing dijual, berapa lama persediaan makanan akan habis? 
		//Apabila membeli lagi 50 ekor kambing, berapa lama persediaan makanan akan habis?
		var Tukang = NamaTukang();
		var ss
		ss = "Dalam sebuah peternakan, "+arr[0][0]+" ekor kambing menghabiskan persediaan makanan dalam waktu "+arr[0][1]+" bulan <br>";
		if(arr[1][0]<arr[0][0]){
			ss += "Apabila "+(arr[0][0]-arr[1][0])+" ekor kambing dijual, berapa lama persediaan makanan akan habis?";
		}else{
			ss += "Apabila membeli lagi "+(arr[1][0]-arr[0][0])+" ekor kambing, berapa lama persediaan makanan akan habis?";
		}
		var Ar = [];
		// jawaban
		Ar[0] = arr[1][1];
		var pilSalah = [arr[2][1],
						arr[3][1],
						arr[4][1],
						arr[5][1]];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" hari<br>B. "+Ar[1]+" hari<br>C. "+Ar[2]+" hari<br>D. "+Ar[3]+" hari</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal20(){
		const arr = MyPerbandingan20();
		//m1,m2,nn
		//var m1=banding[0];
		//var m2=banding[1];
		//var nn=banding[2];
		//Suatu proyek bisa kelar dengan jangka waktu 30 hari, jika dikerjakan 15 orang.
		//Namun terpaksa berhenti selama 4 hari akibat adanya kendala. 
		//Berapa pekerja tambahan yang diperlukan agar proyeknya tepat waktu?
		var Tukang = NamaTukang();
		var ss
		ss = "Suatu proyek bisa kelar dengan jangka waktu "+arr[0][0][0]+" hari, jika dikerjakan "+arr[0][0][1]+" orang.<br>";
		ss += "Namun terpaksa berhenti selama "+(arr[0][0][0]-arr[1][0][0])+" hari akibat adanya kendala.<br> ";
		ss += "Berapa pekerja tambahan yang diperlukan agar proyeknya tepat waktu? ";
		
		var Ar = [];
		// jawaban
		Ar[0] = arr[1][0][1]-arr[0][0][1];
		var pilSalah = [arr[0][1][1]-arr[0][0][1],
						arr[0][2][1]-arr[0][0][1],
						arr[1][1][1]-arr[0][0][1],
						arr[1][2][1]-arr[0][0][1]];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		Ar[0]=Math.abs(Ar[0]);
		Ar[1]=Math.abs(Ar[1]);
		Ar[2]=Math.abs(Ar[2]);
		Ar[3]=Math.abs(Ar[3]);
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		textSoal = ss+" <p>A. "+Ar[0]+" orang<br>B. "+Ar[1]+" orang<br>C. "+Ar[2]+" orang<br>D. "+Ar[3]+" orang</p>";
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
	
	
	
	dd1.innerHTML="<p>Bab 7 \u{2192} Perbandingan </p>";
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
