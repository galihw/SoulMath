function Print17(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function MyStatistika1(){
		do{
			var aa = RandomAngkaAtoB(1,9);
			var bb = RandomAngkaAtoB(10,9);
			var rata = (4*aa+bb)/5;
			var selisih = bb-aa;
			var fmod = Mods((4*aa+bb),5)==0;
		}while(!fmod)
		
		var ArSisi = [rata,selisih];
		
		var benar = bb;
		var salah1 = bb-1;
		var salah2 = bb-2;
		var salah3 = bb-3;
		var salah4 = bb-4;
		var salah5 = bb+1;
		var salah6 = bb+2;
		var salah7 = bb+3;
		var salah8 = bb+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika2(){
		var Angka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var Tinggi = [155,156,157,158,159];
		Angka = RandomMyArray(Angka);
		var sigmaf = 0;
		for(var i=0;i<5;i++){
			sigmaf += Angka[i];
		}
		var ii = RandomAngkaAtoB(-1,5);
		var sisa = Mods(sigmaf,10);
		Angka[ii] += sisa;
		sigmaf = 0;
		var sigmafx = 0
		for(var i=0;i<5;i++){
			sigmaf += Angka[i];
			sigmafx += Angka[i]*Tinggi[i];
		}
		var rata = sigmafx/sigmaf;
		var sigmasiswa = 0
		for(var i=0;i<5;i++){
			if(Tinggi[i]>rata)	sigmasiswa+=Angka[i];
		}
		
		//console.log(rata)
		ArSisi = [Angka,sigmaf];
		
		//"(\u0006"
		var benar = sigmasiswa;
		var salah1 = Angka[0];
		var salah2 = Angka[0]+Angka[1];
		var salah3 = Angka[0]+Angka[1]+Angka[2];
		var salah4 = Angka[0]+Angka[1]+Angka[2]+Angka[3];
		var salah5 = Angka[4]
		var salah6 = Angka[4]+Angka[3];
		var salah7 = Angka[4]+Angka[3]+Angka[2];
		var salah8 = Angka[4]+Angka[3]+Angka[2]+Angka[1];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika3(){
		var Derajat = [60,60,70,50,40,80];
		var Total = 360*RandomAngkaAtoB(1,5);
		var Data = ["Olahraga","Menyulam","Menonton TV","Membaca","Berkebun","Bermain Bersama Teman"];
		var no = RandomAngkaAtoB(-1,6);
		var ArN = [];
		var ArD = [];
		for(var i=0;i<6;i++){
			var nil = Derajat[i]/360 * Total;
			ArN.push(nil);
			if(i==no)	ArD.push("");
			else		ArD.push(Derajat[i]+"\u{00B0}");
		}
		
		ArSisi = [ArD,Total,Data[no]];
		
		var benar = ArN[no];
		var salah1 = ArN[0];
		var salah2 = ArN[1];
		var salah3 = ArN[2];
		var salah4 = ArN[3];
		var salah5 = ArN[4];
		var salah6 = ArN[5];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika4(){
		var Derajat = [40,30,45,55,25];
		var Total = 0;
		var Data = [2011,2012,2013,2014,2015];
		var no = RandomAngkaAtoB(-1,5);
		Derajat[no] = 5*RandomAngkaAtoB(1,9);
		var ArD = [];
		for(var i=0;i<5;i++){
			Total += Derajat[i];
			if(i==no)	ArD.push("");
			else		ArD.push(Derajat[i]);
		}
		
		ArSisi = [ArD,Total,Data[no],no];
		
		//"(\u0006"
		var benar = Derajat[no];
		var salah1 = benar+1*5;
		var salah2 = benar+2*5;
		var salah3 = benar+3*5;
		var salah4 = benar-1*5;
		var salah5 = benar-2*5;
		var salah6 = benar-3*5;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika5(){
		var nt = RandomAngkaAtoB(10,9);
		var n1 = 1;
		var n2 = nt-n1;
		var x1 = RandomAngkaAtoB(60,10)/10;
		var x2 = RandomAngkaAtoB(70,20)/10;
		var xt = (x1*n1 + x2*n2)/nt;
		
		var xtkoma = SplitKomaString(DigitKoma(xt,2));
		var x1koma = SplitKomaString(DigitKoma(x1,2));
		var x2koma = SplitKomaString(DigitKoma(x2,2));
		var ArSisi = [nt,xtkoma,x1koma];
		
		var benar = x2koma;
		var salah1 = SplitKomaString(DigitKoma(x2+1,2));
		var salah2 = SplitKomaString(DigitKoma(x2+2,2));
		var salah3 = SplitKomaString(DigitKoma(x2+3,2));
		var salah4 = SplitKomaString(DigitKoma(x2+4,2));
		var salah5 = SplitKomaString(DigitKoma(x2-1,2));
		var salah6 = SplitKomaString(DigitKoma(x2-2,2));
		var salah7 = SplitKomaString(DigitKoma(x2-3,2));
		var salah8 = SplitKomaString(DigitKoma(x2-4,2));
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika6(){
		var ArNilai = [35,36,37,38,39,40,41];
		var ArBanyak = [];
		var ArUrut=[];
		var ArAcak=[];
		for(var i=0;i<ArNilai.length;i++){
			var nn = RandomAngkaAtoB(0,3);
			ArBanyak.push(nn);
			for(var j=0;j<ArBanyak[i];j++){
				ArUrut.push(ArNilai[i]);
				ArAcak.push(ArNilai[i]);
			}
		}
		ArAcak = RandomMyArray(ArAcak);
		var nTot = ArAcak.length;
		var Genap = Mods(nTot,2)==0;
		var med = 0;
		var n2a,n2b;
		if(Genap){
			n2a = nTot/2-1;
			n2b = n2a+1;
			med = (ArUrut[n2a]+ArUrut[n2b])/2;
		}else{
			n2a = (nTot-1)/2;
			med = ArUrut[n2a];
		}
		
		var ArSisi = [ArAcak,1,2];
		
		var benar = med;
		var salah1 = med+1;
		var salah2 = med+2;
		var salah3 = med+3;
		var salah4 = med+4;
		var salah5 = med-1;
		var salah6 = med-2;
		var salah7 = med-3;
		var salah8 = med-4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika7(){
		var Hari = ["pertama","kedua","ketiga","keempat"];
		var nn = RandomAngkaAtoB(-1,4);
		var Jawab = ["30","10","5","2,5"];
		
		ArSisi = [Hari[nn]];
		
		var benar = Jawab[nn];
		var salah1 = Jawab[0];
		var salah2 = Jawab[1];
		var salah3 = Jawab[2];
		var salah4 = Jawab[3];
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika8(){
		var Banyak = [46,37,31,42,40,37,31,49,73,46,45];
		var Tahun = [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003];
		var ArrN = [0,1,2,3,4,5,6,7,8,9,10];
		ArrN = RandomMyArray(ArrN);
		var selisih = Math.abs(Banyak[ArrN[0]]-Banyak[ArrN[1]]);
		var Jawab = ["30","10","5","2,5"];
		
		ArSisi = [Tahun[ArrN[0]],Tahun[ArrN[1]]];
		
		var benar = selisih;
		var salah1 = selisih-1;
		var salah2 = selisih-2;
		var salah3 = selisih+1;
		var salah4 = selisih+2;
		var salah5 = selisih-3;
		var salah6 = selisih-4;
		var salah7 = selisih+3;
		var salah8 = selisih+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika9(){
		var ArAsli = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var ArAsliUrut = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		ArAsli = RandomMyArray(ArAsli);
		
		var ArUrut = [];
		var Total = 0;
		for(var i=0;i<8;i++){
			ArUrut.push(ArAsli[i]);
			Total += ArAsli[i];
		}
		ArUrut.sort(function(a, b){return a-b});
		
		var Rata = Total/8;
		var Selisih = ArUrut[7]-ArUrut[0];
		
		var nawal = RandomAngkaAtoB(0,3);
		var ArBaru = ArUrut.slice(nawal,4);
		
		var ArSplit1 = [];
		var ArSplit2 = [];
		for(var i=0;i<8;i++){
			if(i>=nawal && i<nawal+4)	ArSplit1.push(ArUrut[i]);
			else						ArSplit2.push(ArUrut[i]);
		}
		
		var ArSisi = [Rata,ArSplit1,Selisih];
		
		var benar = ArUrut;
		var salah1 = ArUrut[0]+","+ArAsliUrut[2]+","+ArAsliUrut[3]+","+ArAsliUrut[4]+","+ArAsliUrut[5]+","+ArAsliUrut[6]+","+ArAsliUrut[7]+","+ArUrut[7];
		var salah2 = ArUrut[0]+","+ArAsliUrut[3]+","+ArAsliUrut[4]+","+ArAsliUrut[5]+","+ArAsliUrut[6]+","+ArAsliUrut[7]+","+ArAsliUrut[8]+","+ArUrut[7];
		var salah3 = ArUrut[0]+","+ArAsliUrut[4]+","+ArAsliUrut[5]+","+ArAsliUrut[6]+","+ArAsliUrut[7]+","+ArAsliUrut[8]+","+ArAsliUrut[9]+","+ArUrut[7];
		var salah4 = ArUrut[0]+","+ArAsliUrut[5]+","+ArAsliUrut[6]+","+ArAsliUrut[7]+","+ArAsliUrut[8]+","+ArAsliUrut[9]+","+ArAsliUrut[10]+","+ArUrut[7];
		var salah5 = ArUrut[0]+","+ArAsliUrut[6]+","+ArAsliUrut[7]+","+ArAsliUrut[8]+","+ArAsliUrut[9]+","+ArAsliUrut[10]+","+ArAsliUrut[11]+","+ArUrut[7];
		var salah6 = ArUrut[0]+","+ArAsliUrut[7]+","+ArAsliUrut[8]+","+ArAsliUrut[9]+","+ArAsliUrut[10]+","+ArAsliUrut[11]+","+ArAsliUrut[12]+","+ArUrut[7];
		var salah7 = ArUrut[0]+","+ArAsliUrut[8]+","+ArAsliUrut[9]+","+ArAsliUrut[10]+","+ArAsliUrut[11]+","+ArAsliUrut[12]+","+ArAsliUrut[13]+","+ArUrut[7];
		var salah8 = ArUrut[0]+","+ArAsliUrut[9]+","+ArAsliUrut[10]+","+ArAsliUrut[11]+","+ArAsliUrut[12]+","+ArAsliUrut[13]+","+ArAsliUrut[14]+","+ArUrut[7];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyStatistika10(){
		do{
			var RataL = RandomAngkaAtoB(70,20);
			var RataP = RandomAngkaAtoB(70,20);
			var JumL = RandomAngkaAtoB(5,10);
			var JumP = RandomAngkaAtoB(5,10);
			var fone = RataL == RataP || JumL == JumP
			var Jum = JumL + JumP;
			var Rata = (RataL*JumL+RataP*JumP)/Jum;
			var ftwo = Mods(Rata,1)!==0
		}while(fone||ftwo);
		
		Rata = DigitKoma(Rata,2);
		Rata = SplitKomaString(Rata);
		
		var ArSisi = [RataP,RataL,Rata,Jum];
		
		var benar = JumP;
		var salah1 = JumP+1
		var salah2 = JumP+2
		var salah3 = JumP+3
		var salah4 = JumP+4
		var salah5 = JumP-1
		var salah6 = JumP-2
		var salah7 = JumP-3
		var salah8 = JumP-4
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
		
	function GambarStatistika8(nmcanvas,Arr){
		//ArSisi = [AB,AB,GH,FG];
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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yCHSvXt3d3Q7N998sz134YUXuiM5ufPOO6Vhw4bStm1bew8TySmnnCLvvvuuK23nlltukQYNGsjFF19sI2ajeeqpp6RZs2b29/8dM8/mgw8+kGOPPdaef+mll9zR8Fm8eLH97bxnXEssn3zyiRx11FFyzDHHyPfff++OZjFu3Lidts+VK1fKOeecY5/fgw8+6I6GT0ZGhtx2223SqFEj6dy5s6wnSCuKsWPHygknnCCHH374Ds939erVcvbZZ9treOCBB9zRLEaMGCFt2rSRI444IuHtj/vbpEkTOf3002VezPyqhQsXSrt27XLtJ3lfd9U+YcyYMfY898liPVnFlC1btnh16tTBh2e3aIYMGWKPvfDCC97bb79t959//nl7bsKECbZsHpRnGr7dv945ZU0nmf3//L9x0kkn2XOJoFOnTvY3sK1bt84d9bxJkybZYw8//LD30Ucf2f2uXbvac6aR2fJ5553nff755555Ybx99tnHnoumVq1aXoUKFbwbbrjBHQkfI1Syr2981LwcI3Czr2H48OH2GmrUqOHOWr+tZzoJzzR8zzQoW46GsukQvI8//tjeI9MhujPh4j8btvvvv98dzYJjpiO312cEWo5rOO6447wSJUp4n376qfef//zHnvOf/xNPPGHLb775pmc6O7t/11132XNhQ92PP/64ZwST3d93333dme2/86233vJMZ2f3v/rqK3vu22+/tWXa5GuvvWb3+Q4YoWDLPXr0sM+PfSPY7LmwMYMJr1u3bt6wYcM8I1jtb/EZNWqULT/77LPZ18A1g38NRtjZa0hNTbXvI/zwww9e6dKlbb/0zDPP2O/de++99lzY8N6de+653meffeYZ4Wp/ixnI2nNmAGnLtJ8PP/zQ7l9++eX2HFA2gwrbxxx00EFe9erV3Znt8J1IJOK98sorWWX7bzHlsccesy/80qVL7Y2Jpnz58t5zURP3ED4pKSl234xMvWujJg4bbWuH/+/D39/ZuaBBKBntwe7zGzZs2GD3wYxaveuuu86VPO/PP//M/p2PPPKIt/fee9t9H85xnT68gAcffLD30EMP5fg7YcL1+B0Rv++3336z+9CnT58dhCzfMZpGdmcXDWU6TTCapWc0NrufaFq4CdzHH3+8d1/U5HiEVG7X8MUXX2TvI7R9eGf9AYkZ7dv748Pz9utJJKNHj87xu9n/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";
		base_image.onload = function () {
			ctx.drawImage(base_image, 0, 0,base_image.width, base_image.height);
		}
		return 0;
	}
	function GambarStatistika7(nmcanvas,Arr){
		//ArSisi = [AB,AB,GH,FG];
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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";
		base_image.onload = function () {
			ctx.drawImage(base_image, 0, 0,base_image.width, base_image.height);
		}
		return 0;
	}
	function GambarStatistika4(nmcanvas,Arr){
		//ArSisi = [AB,AB,GH,FG];
		
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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ffHFF810bhGAMXShFvP/FTf/h/FfcYn4//T6mjyLZAz0lcL4UPoRYi+IPVm6LM2iKOYvWX8kbA9dGP5bzxjPI7N96OKMXdhheejAHxbTBZJXZpn660RxfyT294TgofuJsIndrw0YMEAqVqwoixYtsiUnJ+urwV8likl68M8L3yPN/2e2zPRjLxI9WSXsypYe0of4i6B4pJikneAbI07ES08T/2X8F/VEr58N20OXQ5r/KJ4PO319jfQ0/3X0dXUdC9vDvHH9P2OYJyX81/FfUx/ZroBF/OHvMcxnCBP9+rJY+/btk6uuukoaNGhw9MuvcyrixV4in0/01hYJCQl2CgCAgnfFFVfIlClT5Pe//70tOb4CqwGe6HvaAADIb//9739l69atduq3FVgNUKuqerPD6C86BQAgN/Si9rffflt69OhhS7LSi9tnz55tvgYtpwosAAEAyE/6Zdf6fZ+x9I7vd999t53KOTrBAABCIfbUWmJiomgdLjfhpwhAAEAoBPcG/NOf/mTGn3/+eTOdWzSBAgBCQe/zpxfD//GPf7QleUMAAgCcRBNoHmmvpLZt20qzZs3MtSexHnvsMXOb/+uuu87coyqWzu/Xr5+dymrJkiXmuWGgvX6feOIJufjii6Vjx46ybt06OyeD3qfrz3/+s5x//vly//3329KstFnj3XfftVMZfv75Z7N89Hk6TEvTC/2LNu393L9/f2natKn06tXrmIt39VsrWrZsKc2bNze91mJ9/PHH5rmxtANAu3btzLo2ceJEW1q0vffee2Z90PUi+n5sgeHDh5t1XHvuZfclx2PGjJHbbrvNTh1L57Vp08ZOFW2jR4+WSy65RDp06CBffvmlLc2wa9cu6dy5s7nH3cMPP2xLs9L5ek+8aH/961/Na+o6cdFFF0nr1q3tHOSI1gCROx9++KFXtWpV7x//+If33HPPaU3a8zdoO9fz/GD0ypcv7y1YsMDr0aOHme8HgZn33XffmXladuaZZ5qyaP6OzswLy5+oa9eunh/y3jvvvON16tTJvO+tW7fauaaVwbv99tu9+fPne9WqVfMaN25s53je1KlTj37W8ePH29IM8fHx3rBhw8zrnnHGGV7JkiXtnKKrVq1a3n333Wf+7vr+o/+GM2fONNOvvPKK54eYGX/11VftXM+75pprji6LaCtXrvTi4uLMsgqeN2LE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";
		base_image.onload = function () {
			ctx.drawImage(base_image, 0, 20,base_image.width, base_image.height);
			InsertText();
		}
		function InsertText(){
			ctx.fillStyle = "white";
			if(Arr[3]==0)	ctx.fillRect(68, 0, 52, 292);
			if(Arr[3]==1)	ctx.fillRect(135, 0, 52, 292);
			if(Arr[3]==2)	ctx.fillRect(201, 0, 52, 292);
			if(Arr[3]==3)	ctx.fillRect(267, 0, 52, 292);
			if(Arr[3]==4)	ctx.fillRect(333, 0, 52, 292);
			
			ctx.font = "12px Calibri";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			ctx.fillText(Arr[0][0],92+0*66,90);
			ctx.fillText(Arr[0][1],92+1*66,135);
			ctx.fillText(Arr[0][2],92+2*66,65);
			ctx.fillText(Arr[0][3],92+3*66,15);
			ctx.fillText(Arr[0][4],92+4*66,160);
		}
		return 0;
	}
	function GambarStatistika3(nmcanvas,Arr){
		//ArSisi = [AB,AB,GH,FG];
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADrCAYAAACICmHVAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKNWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s6uL5TAAAACXBIWXMAAC4iAAAuIgGq4t2SAAB/T0lEQVR4Xu1dB2BTVRf+spvuQRfQUmah7A2ylwwRZCoOlOFCAQcoooKCG0R/cA9EARGRISAyRabI3ruU1TK6R5qd/Ofcl5SCjO6mJV8Jb7+83He/e8Y991yZnQA3XBL8agwGAywWC44fP45Tp07h8uXLSE9Ph9VqRXZ2Ni5duoSkpCRkZmXCZDSJc80WM5RKJVRKFTQaDby8vBAYGIjw8HD4+PiIY97e3ggNDUX16tVRt25dqNVqca5cLnd8uxuuBjdZXQDx8fE4e/YsTpw4gQ0bNoj1S5cvIe5MnOOMkkNEZAQqV66MypUqo3PnzoLIkZGRqFKliuMMN0oLbrKWAhYuXIjDhw+LZWxcLGwWm+PIf6GBB2rJ66CeogHUMg/4yHwQLAtFCH1C5WG0DINKpnKcLcv5/9pLldasdiuu2K/gii0BibRMtF9Fhj0dZrsJx6xHcNx2BNnQiXNvBplChsiISAweNBgNGjTAQw89JCS0GyUHN1mLGaym/vLLL/j777+xfPlyx97rUQEhiFJUQ1tlJ1SUV0KkPArNFK3gJfOGFZacP35V/GejvVb6X/qzOu4iIffLlKh7DXLxp6A/aU3GH5kMSvpTiP+VMNj12GvdiTO200Tsy9hm+Rux1lO4isuOu1yP7t27o0OHDnj00UcRERHh2OtGccBN1iJGVlYW/vzzT3z//ffYvmM7MtMzHUckRMiqIEZRn4jZEfUVjREiD0UEkZPJyFKOyclUNNMfE7OkIaM/snYFfZnYaplabF+yxSPBdhGnrMex0bIWJ2xHEWs75bhKgofWAy1btMTIkSNx7733IiQkxHHEjaKAm6xFAHb4fP755/j8i8+REJ/g2CuhAoLRRz0QbRQd0FLVBmpSbJUyJUx2I9HR4pCS10tHV4RTJjNxNTKNUKtNMGK/ZQ82WdZjpWkpEnDRcbaEwKBAPDfqOYwaNQphYWGOvW4UFG6yFhDsFPrqq6+EBGVV1wlf+KOFsjV6q/qjq6oH/GWB0NuzqWKbiJwmobiWFzCBmbxq+tPKPJFt12G95U+sNi/HNvMmpCDZcSbg5++H4cOGY/To0ahatapjrxv5gZus+cRnn32GmbNm4tTJaypgIMnP3up+6K9+CLXldYXk0ZPtx5KnPJHzTmAVWsMuMZlWSN4T1qNYYV5MnyVIsF+TupFVIoXEffnll6FQKBx73bgT3GTNAw4cOIDXXntN2KJOsEI4VD0Sj6ufQqQiSpCSCUqWZ6nYmq4GyfZVwgNaKGQKXLZdwjzjd/jB9DX0yHacBbRt2xYffvgh7rnnHsceN24FN1lvgy+//BJTpkwRgQhO9FDej0fUw9FF1R06Uvu44rFzyI3bgxs3Lf15y3yw1fI3fjbNwXLzohzNg4M13nzzTbzwwgtQqZxdUW7khpusN4AjgF588UWh7joRJquIUZqXcJ/qAQTJKxBJs0jBNTqOupFfsI3L3VLcz7vO/Ae+NPwPsfaTjqPA0KFDMXPmTPj5+Tn2uMFwk9WB5ORkjBgxAr///rtjD9Ba0Q4TPaaikbKZIKiB/m7s13Sj4GAHFQd9MHG5S+gDwySss1wzNTp16oQ5c+aICCo33GTFuXPnRNfCqlWrHHtAau4wPKt+kWzRqki3pwkvrhvFC/Yq+8n8cNV2Bd8YZ+Fb0yzHEcmu/frrrxETE+PYc3firiWr0WjEgAED8Mcffzj2AGPVEzBM8zR85H4kSTPdtmgpgPtyvciuNdr1mG/8Ae8Z33QcAdq3b48lS5YgKCjIsefuwl1J1uHDh+OHH35wbAGj1eMxXjuJrFCDUHfvpu4WVwWryJ70x8T90jADHxjfymk8+/TpI0I4tVqt2L5bcFeRddKkSZg6dapjC3hSPRpjPMaLDv1Me4a7y8VF4Q0f0YCyejzD+K5jL2lCY8fi008/dWyVf9wVZN2+fTvatWsLm036qfcr+2Oq5wwxgoVJ6pakrg8edOAt84bFbsY7+jcw3zzbcQRYtmwZ+vbt69gqvyjXZOWB2+3atcPu3bsdeyCGlB31k4LS3TZp2QPbtJGyKmiZGYOTtmOOvRCD6LlRLs+DB8ptWoCPPvpI2DSCqEoNIt9cA02V+rhqv4y39a+J7gI3yh44Iupb4+eCqGFKJQ7H1EOQQoHY2FiR+WLChAmOM8sfyp1k5RQnjRo2RHyCNPol8L6xCH1iOmQKJfRn9iJuXFOxf6/PGShk8jIx4sUNCawK+9BfjYwKYntzdB208/cX6x9fvIhx8RfEOqexOXToULkbMFCuJOs777yD4OBgQVRVSFVU+/QQwkZ+Cps+E9bMZGhrNIHPPYPFueP0z8JPFiDW3SgbCKD39Yb+JbHeydtHEJUjzqz0eblyZaQ2bIwmWk/odDpUq1ZNhC6WJ5QLycq2Kaca4YRijOBH3kOFfq/CbsqG3ZwrLFCu4CxkODE0UGwu8VqHaEUdFw8dvD5JC4MDCHiQ+q281xyHy/kkypPjjH9zuj0F7TIbie1EImYFlQqWXNVXKaOyIpX4pyuX8fjZOLEvOCQYhw8dLhe2bJmXrAsWLBC2KRNV4ReK6p+dRHD/CbBlp11PVIbNCrmnryAz43ndcPjKXDP+VEV/vvCT4mgdfwyutEeth2C0G8XIlhvBRD1rO400Wyq93PKjOPmTVB2tGynWRweHoIKHx3VEZfA2S9mhIaHIbtwU0RoPJF5NFLbsrFnXIqLKKsr02xw0aBAefvhhsR7Y83lEz7kMVUA4rFkpQoLeDDZdOoIHvQa5hzcScAG/GucTDVzL2cTxsvG2i7gvqz0eyOospMl3ps/JWvOlxsUXz+mGEiHPEC2lhGVMUCcxuXuDuzZ4ELgWntcRlteZ4OxRdULK/3DjmFJpeBv/8b2dyP09JQkP+tti3oj9NsmrPzOqGmxEypuB37rFaoWWJOzxxk3wXsVKYv+YMWNErqiyjDJJ1rS0NFJrgvHbb7+J7chJqxH29CyyS1Ngt9xJpSUF0aBHxTE/ia2XDc+ICsjOC1cAE4dHo/TIugeveEzCb95rsMx7Az41fICfTN9wTA98SBtwEokJfN4WR1LFIo4xmLAVZCGkNqaKiCxujPg3ZtkzxTC1BFu8IC1nsUi1J+OyLQH+kOx3luje9BdnjRV5l+Kt54V0Z8l2wXpWZL3g7yxJ+Mr8MSp7qFj/oUpVYRncScEXUtZsxmsRkThat554u5s3bxZaGHuOyyLKHFnXr1+PgIAAJCYmQRPVALUX6OBZtwOs6cm3lKY3wm7Mhl+bfvCo2UJsv6N/XQSRuwJYqv5i+gk9VX3QTXWf2BdIpFrgtRLTDe9CLXNKUyZ1GmpmBOMD/VtollkTy82LRdcGd0tN0b+G4dkPok1mfawwLRbknaKfiI6ZTTFS9xC2mv/G4KweeFL3MG0/jL66TkRIfyRYL6JWRgjeN0xCd2owRumfEA1DtfRAvGOYiNaZdfGFcQY1AFLDUNxgM+V/1FClIw3V1Bo8ERYmEpznBULKkgSu4+kFa4vW6OLjI/wbNWrUwPz586WTyhDKFFm5D61bt25iPaDnc6g+8wBJUjPshlvnu70VrFkZqPTiz2L9R/M3uGi7ICplaYNzAO+ybEdDeVOR04idRAYYRTYKThNjslvBfhQequcp88JlPxPmei/G954L8b3hc5FSxWg3oKe6D7b67MfPnssxzTiVzvUUv6+lsg32+saii6oHfvZajs10zhqfbThkPUDSyIqV5iV4w+Nd/OO7BaM0L+JZ9Vj6Ljsu+upEg7HMez3mkITn7A/FDVbRdbYs8fyMpUQyWPlp8geLjUrRasH6uvUxrVJlsY9Tpz7xxBNivaygzJC1TZs2Iv0Ho/KEZQh/8jNYU8k2tRUsColJrqlYHb7tJJv3leznECAr/dEcNrtNqKecipSVcwYvs0id5S2WqKxAsBrL6nCdjDC0zWiISfpxtO0rzuHIrHqKhkgiFZczM/C9nPsbK5sL1ZczLE43vIOK6Vo8pOvNXyPQUtmWJOjr6JDZhSToJ2iqbEWKsRr3ZrVCy8w6eCn7aaESlwT4e6aSNsDo6O2DBr5+1KAUzMPNV1lILR5XOQL76tQV+3788UfUrl1brJcFuDxZTSaT6DvlUDKZxgs1vjoLn6b3iX5TSdEpOKwZqag0eo5Y32Hdih3mrUINLU1wFkRWgX8wfUlE8xUe4VBZOGbo38EA1SPc2SbO48EHHxneRgdlV8T7X8CXXnOFTeoEx9BKCcFtgthOsG3LEosTeLPTKs3Pjn989opjLC1/M8/Hj56L8YpmEuL9dKitqIul5l9IJqtwxf8S5nutQCbZ1MUNtp3PWs/gN4uk/aypFQ0Q2QoLVosbeXvD2rQZwpUqMWUJJ21LSaGG38Xh0mS9cuWKmCyJo5JU4dGoNTsBSt8KsGUXUWXhVprqccjwT8TmKP3jZO95XVe5Sxqs6t6r6iWyJNbPqCLsxPaZDbHZ+hepp+8IhxEPPuDkbJ2V92KZ+Vc8phuBflldcp47d9oZlqbssGKwWs3DAJnALLUqyIJJqvZBywyp75KlOtvJj2cPwBuGl9E4ozqpvF+hheIeHLTtxaP0Pd0zWxONNKIhKE6wlvO0jhonwhvhFaFWKumXFA1YLZbL5Eho3ATtSGLbaJvHyB45csRxhmvCZYMiuN+0Vq1aYt2zXkdUfW8jLBlU6cj2KFrIoPAJxIknQkjSJmKyxwd4VD0CmchwHC95MOnYg3vMeljMQRMpr4pmipZiLhr26u637kENeTRV6ECcsZ0SKT9bkfrK3TmNFE1FPyyr0hXkwWI6jOO2o4Jwx+l+rCpXkIeI77CSlN1s+QvRihjRL9tc1RrDsx7EWI9XHfeLFQ6qBL9suudhHKDv5fsk2ONRhyRucQ2E4HGsG83r8Kx+KKnrJFCbtRSEKuoQD7a6ZSoVRpw6idnJSWLfpk2bxCB3V4RLknXNmjXo0aOHWA/oNQYVn/kfLGmpkiQsBsjUWhjO7MPZ19uK7YO+54T0KfrqkT84u2fYmcR2pxOsIjJRWLrxOazWckQTdz9xKlTe53x+JiVv8/V8r9yRTUx8Vm/5/nytVqbFoKweVCnkGKh5GEtMvwjv8hzv34S05qfh73V+T3FAaqjIPs2IJB1AjxXVa6J3YKCQhsUB1kUURNhPLl7AS/RhcOJ2TlDganA5NZgzADiJGvzYhwh/iojKjqRiIirDbtLDq2EbeNRqJbanZr8uJFNpg4nBamtuojJ426mG8jmsOvOABCeBeJ+TkHye83o+w7mfwet8LZ/PeaZYvf7JawkGqIfgvDUOD6uH4Vuvn4WNyteyap37e4oDLPm/Nn4qiFpVrUbvkJBiIyqDS5EdTy9WjsDCqtXEPk6cN23aNLHuSnApycreOac7PeyZrxDY42mp/7QkoFDCmp2B009JmfS2ex+Gt9y3WCumK4IlG2fVl6S1NJ9NcdunTrCk57mAYjIqiu1T9eqjhodWBDiUBHgKy9UpyehJajGDB4a8/vrrYt0V4DKSlSd2chK14th5JUtUBtnC6goRCOwtjdR4OvtRkq7S8Ku7CUxMTrnK9jFL9ZIiKiNIVgHPZUt14NHAINTw4swQJff97CnuQd+7NbqO2H7jjTcwcaLUdeQKcAnJmluiVnp5IfzaDoY1owSJ6oRMDplKg+NDpOicb7U/o62q03XTPbhRPGCJyvPAciQVQ9+kKTxkbCOXfPVUKhTYlZGOFselTBQ8KwPPFlDaKHXJyjaqk6iVx/0KvzalRFQG2cU8SL2io+/1Zf0oEVHEqqEbxQuOZx6TLTl1PqpUGR5KdqKVjhzhgQDNff2w2xE8wYn2OPNIaaNUycoTPQ0ZMkSsh5Pq69tmkCPYofTAA9UDez4ORUBFZCAN3xhmCqeHG8UHHoCwzPgrztnjwAGf4yOqCMKUJvj7m/r4YJtDJX711VdFovHSRKmpwSdPnkR0dLRYD3/mawT0eKpkbdTbgFVh/dlDODdRmtnsqG88OLIotyfVjaIBay0cnBGR7iO219ashW7+AcXqAc4P2Om0JiUZPRxOJx5I0qVLF7Fe0igVycqzsjmJGjJ0GgJdiKgMHrTuFdMa3s37iO2XdM+KAAQ3ih4cSfW6I1VLay8vdAsMchmiMtjp1J2e6ddq1cV2165dRX6n0kCJS1YeouTMpM4BD9yP6kpEzQHZrjaTAaeGS9PrL/faiGqKmqIrw42iAQdrZNjS0Targdi+UL8hKms0JeoBziuUZEPPTLiIsRfOi+2rV6+KmPWSRIlL1sqVpSFKXvW7iMgka7qLBlBbLVD5hSCo7zixOS57lNt2LWL4yfwx0SFVHw0MRGVPL5ckKsNiMWNMpcp4poJE0NLI6VSiZOVhbjy1orpSbUS9ux6WNCaqa74cBqeHCXtyGpWSAiftx8Qgbmc2BjcKBw682Gn5B5ut68X23Bq1YCNCuDI488SXNWqKQeyMmjVrimVJocTIOn78eDHMDRovVP1wpxSU76KtaG5Ysww5g9TH6kdCLVO7u3KKABzO+YzuUbH+dWQVsXR19x3XVjsRdn2duohQqXD69Gk89NBD0sESQImQde3atZg+fbpYrznzKGRy+toiHz1TPLAbdSJIQ105RoTfTdNPEeqbGwUH53D6zvg5kpGEEKUST4WF5zlVS2lDPKXNhvMNG4vthQsXisD/kkCxO5h4UK9zPs2IiSvg3bg7bNmlN/ysIJAp1TAlXcCZsVIn+Tbvw/CR+4AD4N3IHzj+l/8aZEjS9N86MWjhTWXpQh7gvEBJAueITod6Rw+L7aNHj6JOHalPtrhQ7JLVOSY18L4x8GnWu8wRlWG3mKCNioFPq/5i+w3DS27pWkBwpsKP9G+L9Xu8vNDCz3X6VPMDfua6ZLt+FiE1OvXq1xfL4kSxkrV///7CoaSp2gjhT/9PpAotq7BwCpixc8X6RstaHLDsFfGsbuQd3FVzyXYR8xzTNa6uVZsKtuyOauI+2OcqVcL9fv6wcYhi8+aOI8WDYiMrp3pcunSpWK/6/j+wpKfRmus7lG4JaklZHeYgDsbT2Y+4bDZ/V0WQLBhPO5xK40PD4KNSu2xXTV5hM5uxvHYdaGUyMWPhBx984DhS9CgWmzU7O1vM5MWInLwWnjHtCpQu1OVAL0Su9cWJJ4Jh06XhXY9PMUj9MLJwLVGZGzcHJxffYd6GYfpBYtverAW46pUNt9LtwXPsxBmNqHbogNiOi4tDVFSUWC9KFItkrVevnlgG9H4B3o26lQ+iMqhy2a3mnK6cSYaXYbKbqBCL3fQv0+CuLk4f84L+KbE9L6oa1TyebrN8gLWDqp6emBkhJS6oX0z2a5HXsrfeeku0LDxqJXzEJ2XaTr0ZOJu/b6ue8KjaRHTlfGR4y60O3wHe8MFs45dIB9n9KhUeCQ8v9VE1RQ22X0dXikATIm1WVpZIDVPUKFI1mFOHhoVJsbTVvzgtwvXYk1ruoFDBmn4Vp5+TIlh2eZ+ERq5xd+XcBKx1cKZGnuaDwTOV16UKXdZt1ZuBh/exX1uxZ5fYPnDggJiKtKhQpJK1YcOGYhky9CNoQquVT6IySBVWh9eAf/dnxebT+kddIpu/KyKQyuV5x6Dy/v4BqOvjWy6JyuCmWq5QYLFjhI6TD0WFIiPru+++KySriipxhb7jYM1KdRwpn7Dq0hD2mOT522vdiQ3m1SJtpxvXwLPPHbIcwBrLCrE9J6pqmYlcKyhYve8fHIL23tI0os8884xYFgWKRA3OzMyEr680IqX6zGNQVaj834mMyyHknn5IWfU5rvzwAkIRhn98j4rZzkoyyZgrg6XqfZntccR2EBNCw/F+VJSw7co72Dtsstug2SPNJ8sxxNWrS9K2MCgSydq2rZQcO7DPy9BE1L4riMrgaTyCHxwLuU8gruAyfjB+JeY2dYO7ajyx0rxMEJXxfrVqJFTvDpue1Xy1QonveS5ZQuvWrcWysCg0WTdu3IiDBw+KrPahZKuWN+/vnWBJ0SHiFSn4Y6qR01Zyvvoid7KXMciEh/x5R1rRFTVqsrv0rtI3eGDC8LAwRKrVSExMxOzZUtRWYVDoWuXMnl9p7DzJoVROnQe3gt1sgFe99vCsJ6XQfCX7+bs+BQznW35P/4ZYr+vhgd5BFWAtg/G/hYFgARF2JTdUhKLoyikUWSdPniymZNRG3wPftv3FcLK7EVZdBiqO/UmsL7UsxFHLIeFcuRvB8b9XrVfwuWmG2F5eo5aotHejFc/qcH1fPzwUIDXehSVsgR1MPKsXz2vJqPn1Oci9/Oml3F1TTeSGwicIl74bjdRVn6GBvAl+9/lLTFp8t8E5VeNayx8YFBCAX2vVESlR7laImepkMsh27xTbhcndVGDJytO8M3zbPwpVaORdTVQG2+oVn5kl1nku0w2mNSIe9m4Cj0I6aNkriMr4tUa0y6dqKW6IOC25HFPDK4ntvn37imVBUCDJqtPp4O3oR6o9L53MVLJHbOUrfKwgkHt4IeOfxYj/lBowUgdj/VKQbE+6a7pywmQV0Ti9Gq7gkoiTHR1esdyFFRYELBE5WMJj5w6RG5NnW3eO884PCiRZeZwqI2jARMiogrqJKsFmyIZf+0egCqsOMyyYoX//rokb5pDC+abZgqh+cgVGh1UsM6laihtO19oXjpE4AwYMEMv8It+SlTt4nVndon/OIiuaPcB3l6fvdpCpPGC8cBRxr7YQ27t8TkIt05A6VH77GLmrSkVKcL2MCNIhbNhQMxqd/f3LZAaI4oKYtJmka+DuXUgl4bZly5ac+IS8It+S1Rk+FfLwu5CrNG6i3gDuyvGs0xxeTe8T25P040i6lu98w5xP+WP9O4KozbSe6BzkWln1XQFCIpJcnF1VCpR48sknxTI/yJdk5WkvwsPDxXrMcjusPCP5XWKP5QukBnI7eOIxSQVe7bUdlRQRYnbx8gYF2eZGux4tMmuL7aSGjRGkUpXbYP3CQqlWQ/vPdjHz7d69e9G4sZQlMS/Il2R1Ts0Y/PB7sBvZy+d+ITcFqTlyrReCh0wVm09mD0FgOQ2U4EmlnnKkanm+QgiCPDzcRL0dLBbMdYzKefSxx8Qyr8izZM2dqiV6frro6HarwLcBT8ys8cSJJ0Jg12fgY+2X6K3qDx3Izi8n8KC//ZY9eDhbmsDL3rS5aL7dbqVbQ9iucjn89uxCBpkKsbGxqFatmnTwDsizZB07dqxYBvYeC7nG203UO4HKh19MxWelOT3FTGnULpaXuGFO1aKBFi/pJR/GZ5zSRKFwE/UOEJJRJsM7laQ5n/IzhC5PkpVPkXMWfULN7xKIrJ6k6t0dIygKC2WFIJx6ph5MF45gpGo0XvN8C+l2zvRYtLjuLfJ6rhk+qG4UObxlPphvmI23jRMQrFDiaouWsJjKabKBIgYzifkk2/Wv2M5rVFOemvn//e9/YundpBdUFcLdRM0HrGkZiHjlN7H+nXkW0mypUIggtPyBySg+pNDYLHLYTCTFDEpYslWw6NSwZqthp/2wkcxjctKSt216tThuoeN8vtWoENfb+bjjnvkFawfcgDNRGWu4g99cuEglUYGl1esg1EZptVihpG/iLPslAaGT0neNDpZmovvoo4/E8k7Ik2QNCgxESmoqqn96BMpgEt93eQhZfsFxwxc/fQQZm39GG0UHLPRehav2y46jt4Z4M0wqG5HDStXWLoPCwwSP8HRoQjKgCtBB7Z8FhbcRCg1JNZmdiHrtddKWuN5mZEJrYE7zgjnVG4ZEXxgu+RHBNYINMjmp7AqqQnK+3nHxbRAkq4CXsp/BYvMCdPL2wV916xcq/pcpYqYfy1+tpkrsdFDxtoJs/wy6t4+SGqcCNCx5ARP1sCEbmzIy8FxYeIl0O3EDxCaDypGvKQ80vDNZ//33X7Rq1QqqsBqo9fUpWNLuvuD0QkN05QAnHgsQywVeK9BQ0QQG+vsP6G3YiZQ2M1VhWqr89PCsnAyv6lfhUTEFKl8dSUw6xG/aTufIVfQWlXQqqVUsGWgpMY5uRJXOTh8Zi2O+wMaE4mTlRAwltblZWiJtIHRnQpB9vgJMaWTeEORKK92Grr8JcTn44YrtErpmSUEfaY2awE9JEj4Ple1WUNL1dfbvw3GjASmNGiNAQY0LPT/v73v8GJanp0HfpBk09Lv4W5wmGQ8mYVpxorKcVoaWvJ/B5zmJx9kbBPg5ad35vEKa0uri1GR8kJCAXQ0akuZhyfkO2OziWXhLnus7uFzFqriezinA7+ff1/3oEazNzMCCBQvuOCPdHcnaqVMn/P333wgf9Z0Ipbtbh8EVFjwqKWnpR0icPxGVZZHY5LMPGUinaiAVP78Fu5XUVqMSKn89fGonwLd2PNQV0okzVF1MVEFUWsi8fCEnaSb39oLMw4PfOElFagz446xgucGVioeoWWlJEspuMMKmy4I9K1MsYdJBxnyna00pvsg6URHpxyvClOgNucZCpCZy5yItp2rpl9UN+6y78GJIKGZUrVboVC1cadsePoQQFZHWQ4t3I6vQ8/KwOjvCDuwX55xt0Aiejt83/dIlemDg5dAwejYZjumzoaZG6iAtD2fr8UbFikil65eSNjjCYQue0htwxmREbY0GhwwG9PaX5ir65PJlvFipEpYnJ4n7bq5XH1lke89OSkQy/a7nQkLoudRIo/U9Oh1CVSr8kpKMiRyYT1rMu0TwfgEBaFaAybWU9MxbM9PR7sRxVK1aFWfOnHEcuTlu8navgXnMROWS8W01gCqMXjrgRr7BGfxDhrwGmcYLF+3n8atprpiYmUnK9qfNoIK2YioiHtqBak+tQ4U2h0iqElHV/pBXrA1V03ugadYS6rp1oYyMgJwqCJNVEJXBXWlsN9744f0EmYIkL50vD/CHMiICqpi60DRtDnWztlBE1IHdIwhK7ywEtDiKqsP+QpWhW+EVlSQaD34+fk5OCLfevFoQlTEjquhStWRTRX+JVND3LhMR6Tfx7xp38QI+rBRBUktwUyDiwD4YSVNIpN8WtH8viXoldhOJahw+iC2Zmdin16EeET+QSDnyXBwMHLdO93o1/gIuEln3ZmfTdyRIjRvhpYvnc9YFaP3xuDOCqD60HioaCxky6D5dT53A2AvnYKLCCN6/By2OHiWtQoHmx45CR+fnukueYKXf0dbXD0H0bjjX9sWLFx1Hbo7bknXGDGkAsW+7h8kuopaI1Sk3CgxrZjYiX1su1l8zvAC5lUSaWQWf6Euo+uRfiHhwKzxCr5J26wdF5TrQNL8HqkaNoAgPJ+lH53LLzeRgAvI6Myg/EC0DXcfX831onUmsCA2Fun4DaFq0gSKqLknwAKgDU1Gx3z+o9swG+Na/QOcr4G0NwKjsoeJWIt0m1Yd8PsEtwWpkdbVaJMn+i6QcawmfXLmCYSQls+h5PUgKrUxLRaBCiU4+vhgYECikZ4Ium+xaGbr7+mJGjVpYUqsOjpI6DSqvwdSgfZeYKO7/B6nSI0LDhZ3o5TBLrjUBuUD3XFy7Dh4LCkIbL2lk2RWStHxFEJF3Q70G+Kh6TWTT8+6lBu+VyKrie1bQ/WVsguQDouzo2Z8PkXJtT5smzaN0K9z27p999plYBvZ4BjZ9+enMLy2wZuLVsDNUte4R27N8x6PRk3sR1ms3FGqyRbWVoG7QDOrGjaEICxUvUkjHghAzP+D78/dQ9VGQ2qhu2BDqRs0Bb5LgcgNCu+xH/ad34uewt2CivyilSqTbLOpULWlElK8io/DihfPYlJIiSMDgX85FccFoRCY1EMuItD8SoVkNDyUVmomuZRWZ05w6BQo92ythFfENqbNxJHkba8kep4bJSufmVHr59WQVW0TIwSeOocepk1jDs/MT2N7lu/pRQyE1lEx5B3noO72IpPHcbXUT7t8R9Jyj6HcwfpgzRyxvhVuS9dy5czh79qyIwvFq2BZ2i6tnLKSSokrkyuAXnk62U6sXvhHbMy99j3TNZSh9IqFp2Qaq2rUh02pzpF6pgL+Xvl9GaqSqVi1oWpOa7B8FmWc2Jsd/KE5Z26wZQHbfHdwd+QL/Wj19d/PAQBynMup08jg+rMxJDWwkDSUHThOSdGabXUi2z2rUxEd0XEFk5eM5nmLnM9G9mpK0TSASPXXuLKaQXcpE0xCp481ELCLlPrLbJUiOK3GlxYpFZOuebtwUb5E9znDqDzc6kZxviKnLtnNBwPcMoYakllqDzIwMMRPdrXBLss6aJWU9CLxvLElVbnXzBrmnL5T+ZP/QR+EdSDvyq8kXBOyds8IQu4degvANuhx4+iqdTIURGXvwm+IAXuh+v9g/Zu8f8GxGUowlA5O0CAlQKPBzOJ7Hq1FjTDq1DaxdjmjQEDX79YOpQX1JyvCnsKCvUjrrOt1vYnhFRJN9HcUNF0lK9gIbiXwtiXxd6VN51w40IXu1Itmv7P0maxwqJsuNZUfbL4aGYX1mBu7147RDNjzg748U0iLq7NmNqfHxOecxEVidZhI/Q9pFxd070Wgf1ScCPxrfWXwHI/fX0LW8V11AsgqQdJ5Av5kxffp0sbwZbukNDqQWLpVamJrfXoBc6yNueCcwUS99/RzS1n8rtj1qNEfEq0tFBgVJdaAfxJWSv9KprvA2tZbSks5hvZ+PMcmd5/E+LgyH+iGQs4+OUwGbrsQi7uWmqP1zlpRlUZQoHb/xuhIGPwWTNNiajQ8yN6G6IQk6jRfCWrdBeIta4vjpr9cgKigSJvHcrgUlNX5ZpiwEPtJSbNuXLIFl/wGRAUJGaqninx0ASQS2EUVZFwD0JqGj98h2KWumvM39rs7ulix6f047k8eEZhLZmLwVSPrzJMZ8Lqu3HlyHCBm0z4/OYw/3z2Sz/pKajOXRMfTMkhOI9181GRGi8aB7meBN9+Z7sOOIPc7cbZNK3+FL92B6OKUmP6O34zsy6TvYAcVg5xg3KNy1w+8zv+A78rXOPE230likb74BPBSOiaoMjoQykNWHOxOVIZMrYYjbh4jXV6L+Oiq8KvVxcfogiewKFWQqDSypl4QU5DzDTEibLkOo2pa0y9K2MVucb01PpIe2CenM+2z6TOka/h4632bIomuuSPvox6lDa4gBBnY7KUVmo5j42EY2olWXKjywpQFujtJlanQ0nceSlKWoZEiFLiwCylatoVOr8cPM78R5Pac+BYWfa47KUfkGYsC00WL9h7EvAD6kObVoAWVIMOxUWS33doOtWlVSHaihuUUluxO4nLyIBMwJvgNvs5TjJX+YTLyfP9xI8LlBbKvSOh9nUrN66zyfiSqaZ9r34sXzGBfGUXdSg83/s60dTCaTdC/pXCYLE5Wv5y4Yfya7Y7/zu5mozu9gojrX2V4uKFEZfA8WOO29iSeEbdu2ieWNuClZP//8c7H0a/Ngzo/MK9jlzkThvjtlUGX6RBCJmZSpOPV8LZyb3AWnnoyA7sgmqAL9cXpMDM5P7YEzLzUiAupw4b0+ODelB85O6oRTT0fhyvyJiJvYBqeeikTmrhVQ+Abh0udP4uzrbRH32j2Ie7WlREwi74lH/KD09kXqmi8R+1JjnH2zA04/Uw3JSz8g6V6ymfL5BWQQUcfo9uGdtE1I59SkMfWgJLuU1Uu9LgvdOvdEwzp1ceriOazYvBhaDykowVWgpcZ139F/sHH/TlSqEIwnevfmBFzCGaWsXgPqenXJdjXC1rAhbM3JjuUoJqroBUHuq5zkcOLGO/J27lp54/k5x4iMa2tFo/0Nk2HxmvOc3PfOvc7HeftWx3Ov3/j9BQKV2+NBFcTqN99IPo0bcQuySl5g37YP57tvlSXh+bfvxcGOMiT9OgUV+r0iiJswaxgqjfkR9f5MQLUZ+3H5u7GQedADaL3h3bwPYpYaoAquJFRY70bdEfPbRfi3f5gIuhK1fzyLyDf/ROLCydQaAKHDpiN67jnUX5ssJKfx3AEhtZ32sUylhpykaa3vTqHGl2dEMIJUiSR1prhBegPS5R6YnvE3BmcdRpraB8pmzSCrQC9DeF0l6PQ6TJsi2SiPzBjH4oRa6Ju+khIHj6qBpxf6f/S82P5l/MvSszsrPa3Lff2had5USBVbxYqwdewg2bkFJGxRgwnakH7DjY4hlwQ94/2OQI2ffpJyUN+I/9QMTvWfmppGLyIYHlH1iTx5dy4xrFkpiJi8VqjBVaftQdx4anEJxqtxOP9WN+xvJUPs6NpEJkmltZPN4NO4F6m0ZPcIPsmgrdOGtiXJ7N3oXpKapI6FRMFKai/XId3RLTjSxxMH7pHBknyRJCsR1UlEWvAzezXoAruB7A2ypeRaX6F6O08pTljoS9iZNDt1FVpkX0AWaQKqliT92aajlj43OEF6g/pNMOi+B5Cpy8ak+R9D4ympQqUND60Xvln5Pc5eSkDnRg3RtlUbeok39AiwOUMNpLp5cyh8fGDz8oGle3fxDovE8VQEKBNEJfBzBmu1IsKKsW/fPrHMjf+QdfXq1WLp3bAblTkfzv+PtZsMsGbzPZqIbWs22ZC0rPFVHBr8bUf99XbU/OoArA7Pue2GbqGcaTjohedeZ8lJZjHiZwxBzS9Oo9EuslUr1ZbOccLxuLxPGOol2MqzRLVQkX6Rvg7VDYnIDg4XQQ238/KmpCbjo6kfi/Wpv3yJjKwkKB0aQmmBpbvdasLTX7wltle9MYmM71sM6+PfRVJWVbceFGTHggPuO3eim1DdcREJW2ZA5fVwoKQKL18uBc/kxn/I+v3334ulT6t+wkGTX9htdqT8MRNXfngVp0Y1hyaCXqKXBqFPTCf7sSouzngZZ98YgPPvPwYFCVebniUqt8JSZWbb0+nQYkeR8xlYMopz6YlVgZUQ/8WTiB37IEzxxwWJhdfYYV9z0rKcZ6f9fJ24+835UiTgapku0+QQ1RhcESq26ZiotwEHncuVKkx6mSe1Ah6dOQ4qv9KdmFnj448xc6aK8nqpXz9oODjhTpKStBlVzZpQhoXBzn2fXYiwFrrGTdi8g8rKGbP82+LFYpkb/+m60Xp4wEDqTp1FFqrk6fTC8l7D2dGTfWonDLG7BXHUFaPh23oASdBkyD18YE66gPRNc2l/TXg3ux8yhRLpWxbAu0lPyNUc56pG1v7V8KjWFErfCjBePEakM0BbrTFJ53ToDm0U92Okrv6S7lNL2Ke8VJCqm7FjCfw6PArj2YMkWY3wqNpYkFZ3YB28Odugg8xFDa6OmTI12agb0Vx/EXoiqrIuEZU9pHkAdw34ePugeecmuJKUhH3/W4qGlevAUApTZ6oVKiRmJyP88XZQkepu+p1a+Px4euka86mTsF5NhJxUeznHlhN5hWrsxh3BCdVk/0jeYJ732JlMn3EdWTlqKSoqCsrQaoj+JrZAw+GYsNxNI2CzCOmYA9JhhSOISCPtZ5vSQxDLWRnY/rTzVByir9XxknmbluIYSU2xruIuG4ckZbuarpep6TiRWwqMcFxHSyZ0cc0Zy0/N3TNjdHsxOOsIsvwqQMXT099Bot4ILdkr27ZvxtDnh6FWRBROfLUJhsxro3JKClqS6h1e7YvNB/dg7ksv4dHuPTgBl+NoHqFSwnzkKKzp6ZBfuQL5vzupFaB64SbsHcEjkHofO4o/MtKxdetWtGnTxnHkBjV47ty5YunXeiBJpPw5lpwQtqJRJ31uJAiTV+wnQjkqoVjP1WpLxHWoTpyRwjmHDp0jXedYN2WL+4vvEOfzPsdxVqNz5t7h64qHqAwOeLjXeBYP644gU+NVIKIy9Ho9etzbG03qNcDJC2cx769f4MHxrCUIrUaLDbvXCaJWCQ3Fo3365p+oDLOFbNi6kGnUsFWqBFt0zUL1w95VIFX4Xj8phS2Pcc2N68i6adMmsWSVsTgreHkBe31DbTq8nbEVaXINEbURNRIFV7XZ2fTNJ1KgxGMzXqX/yZ4toa4cEaVD0u/B6S+I7Q1TpgBZhRi8QQ2WukEDyGhpa9AQ9sA82L1uiAbN2d+6atUqsXTiupqwfv16sdRWbyqplm7cEizLTTIF3k/fBJ1VBkV0bRH8XhjpwYO4wytWwmODhrBCgPE/vQ8ND00sAXhoffDZim+RTKrr/S1bonqt6Ov6hPMNKgfu1lHFxAjpbGvVGnZuENzS9bbgsEk/MiPYYOAxrrmRQ1aeGY6hiSD1xT0txm3B1S2L7NSndAdQzZgCS3glyDkjQRFIjnSyVd4cN1kEGkxf/AMSk89D5fQBFBMURCqLWYfRX70rthe+9DJ7N8R6ocCeblLplBGVYVcqYG9MmodbHb4tRMmQELjXV1KFOa2SEzlkXbRokViqI+uJFrFAoOtyRtz4BZVaTG5xg/tSo6zpeCT7CLLUnmIoWaGkUC5wV47GQ4v3Xpey+Q+Z8TKUjkHQxQW1ty+GfyF1Hb39yCPQBgUVncpK2oIyqioJACVskZGwc6Pm7s65A+xiED5j+/btYsnIISvPu8Hwbd4XNqcjJz8gonL3ypG+MvE5OkCFtHXfQObh4ziBwI3AdQ0BCXtWjXif01Mo1nNr547j3MnuhDiXr6V9znOd98kNPpb73kUAbvnYPn0j8x/oqT4rONa3iCtfZlYmhj36JCoEBGDD/h3YfngrtGoPx9GihUapxunzxzB3w3JRxpOGDUehbNWbge1XLieDAbZmTaWGzS1dbw2qTwMcA+9XrlwplowcBixxdMJyH2heR9lcByKE3ZgtRsFwlFKtby/i8vdjYb4cK7pSuJ/Vlp0h9bnyKBwikuiiIRXPqksT/aE8xI6P8wgb0f1DRJPx6Ii0K+AgfyGp6True5VR5eUACptRJ5KRMYusGYnUOEjSXOoSMsGSKo3myelOKiT0UKKXIRa1jYmwVggRuZCKQ1JkZGbgxy9+FOt93nsW0HpyJ5TYLkrISar2++g5sb72rbeLh0h0P5m3j0gfY+dhbdFkDxOB3bg1wlVqsdy+Y4dYMnLIeikhgWq4AqrQqkSighYkVSYiF6e5ZALxUDYmJo94ufLTeJwZ1wRxr7XGuam9oPANQMaWXxA7ti7OvNwE6ZvmI3HhFDGKJvbFBjCe3S/Idnp0bTEw4PSomiIySknkSPrtXbpXM5yd3FmM4Ele/D7O0H1PP1cLl799Xqjh6Vt+Ft93bsq9OPGoP2xZKRJpCwGmJA+EejL7INmsSihq1Cg6dfEGGE1GNG7YHJ3vaYfktHR8tfI7eHgWrTqspfez6p8VOHzmNBpUq4Zu7doJ6VcsYHW4KqnDVF42Nhu4L9wtXW8KjhOu6OGBILkMhuxs8DxTDEFWniCZK6I8IAyqALJXCuhcYiloJ+l5oK0Mxx/0gGf0PVCHVYYp/iQydy5D3RVJqP/nVViSLsAQe4CkIEkLkpR1FqQg5OFXiITvCIlcZ1Ea1JVjSIgqUOOzE6iz+BxqfnVGHBfar0pDhAxB9JxTYuzs1QVvoub/jiD6xyQi/c8iUMmneR86Ho96K88j4N5nkEaNAUvbgoKrlYGkahfTeVQypcMeGl5o7++dkJGZjvcmS9nan/38bWpEjWJSo6KA6KrRqDFomtRVs2j8eGn4WzFCpqQGjtOrKEg74jGwLF3dhL05iBeV1VJQ/+HDh8VSvPkElqoEbZUGJM3EaoHA3T0yUmUbbraj7kq7UG+v/jwFpitnYE48L4bN7b9HBtOlk2QX64W67VmvE6m1NlJXdYictAbHHtLi3Nv96Fk5daY3Ls54GAc7yHByREWoAqXUFyxxxWgcqlusOqsqRYuKwFLcTvdlU9WSmYQTj1cSo3xS134lslUU1nS10g1G6Eiq2hVQ8sxfxazKcVdOROVIPD/sabE98svXofaSvISFhQeV2+R5H1KrbcDjXbuiVp2YInOS3RIsXSMjhNlgiybp6satQQLzPn/Jbj1//rxYCrI6kzSJYWWFDYbgF+HQpPy7jkD2ie2kuoaLON1GO+xi6FyDv+zwrNWKvstE0oJd+TYioJGk4b2ov9YOpW+QGO+qO/QXzFfPCvLXXpAFS0aSdGMCXytaZRajRHoeQCCGwREUnsDFDx5A6PBP0Hi3HUEPvCps28KAk1G2NF1CJXMawJkHON61BJCWnoYJL70h1mevXYI40lLUpMEUBkq5EqkZVzHl5y/E9hzOAJEuZfIrfsig5Am5qTG2V6lSbGZEmQfV7XoOj7AzOEKQdfPmzWJD6RdKFb6AzhLWZkhy2Q1ZuPT160j47Dlc/vpZBA+aBI9qjWFOicepp7shYebLODKgopB8dptFpGxhUWgnGy32hWaI/2wcqcy/wzOmHanQ1WE8fwgXP5mAE0+EisB/BjujnI0K29dWdkiJDUmlYu3As25HJC54A2dfH4XkZR/SVyjFIxYEfF2WTIXH9EeQCRUUlSuXWCXj0G0TSaTPP5AmBxv88RiRLaMwUPn6Y4Sjq+aTkU+SmCXzoBicZDcFfY+iImlIwnatSdLcrQrfFFQmVRxOJjZTGSKQv2XLlti5cyeqTd8LFRHkWlxtfiCj+1uRvvFHifAkLf07PyEN/CZisbqavnk+LMnx8GnVH6ogsmUTTsKalQyPGi2Y56QuxyFz1zJ41mlPn7bCW2y6HItM52iaC0fg1bAb9Kd3Q65UQxMRA0v6VehP7SSpfL8gbsb2RfBrN0TYpxnbfhXE1tZsQc9ggDqcVK8CzIDHA8r97UYsSP4d2d4BUDrHqJYgAgMC0fn+Djgeewrrpn6PrvXaQW/M/xBGDVWAk1TOdUb1QgU/PyQuWcJ9RSVLGNJKzEeP0LvXQbFlC2RpJNUVhXP+lTewFHVOC1m9enVBWEHW0NBQMUdkzHKyM1MLM/GUTHiAJTgC6HOGpfHoFzKYWf1hFZZJw95ZNjCdjQNJTpH1gbbZLpX2sXdZJbZlMoVQl0U3DFcuvgddL447JC136TgD+oVDibuU2LvtPL8A4GD9R0iqDkvfB1PtelK0UklJIgc0ag1OnDyC3o88AH9fH6T+fBAGXSb9rLyTjBtED/8g1BrZRuR9Wj91KrpwGtTi8gDfClQHbKTem44dh/ziRcj3H5BG5bhxHXIPl7OSJiJnJwYTlcG8KRyIoM4RN6ze5hCVweQ1OPY7SCPszVxSnG1PvtZJVAYTl6/hY0xUx76ce7C9m8vOzhl5QxDfx4PQc5+fTzip0MlwDiZSpeUcZF3CRGVwV06zpq3Qq3M3pGVk4sPfZsEjnylgPLTemLduviBq6zp10KVd+5InKoPKT06agmhIQ8MkqVqSkr2sgMrExzFrgNFI2innAWJwzqVraeHccIJTtYRbs1DNnAYbVzBVyTiWbgaeI/d/H0jJ7CbMmUHaa0qeU8A4U7UMn/m62F4zeTL3DYn10oIiKAh2T9KE/HxLpQF0eRBZmztCTQ3UqMp5NDrDs3ozepli1Y1cMEOBpqbLVJmItixVS9F7aaNn4DGu456V+kaf+voNkdc3L9B4+2Higo9hNlvwZI8e8OHJkNg8KC0QOZms7GCyh9GzuMn6XxBZGzjGNO/Zs4fMhf3S/JeqsGpEVjdbc4MVMzOpaq3NCTDa5VLlKuVKxWGIo595Ef4+Pvjl7z9x5vxhEd97O4is+pmJ+GCRNFb2m+dHA3SfUgWrwpxviCqkPTRULMXHjevACc0Z7GCSOztchfNHxDEVHdjB4xyFkzMah7sdChudUIKwkxpcz5QIq6eXyC9U2mCHEjsbPnbkG77/vWchp2e7XYmqSKo+8OEosf7dmDG0g8jtCpKMbFW5pyfs/n5lqk6UGOhd8+TNjOTkZMiTkqRAA6UPS42ia9lE18m/S3NG4Rx7yFcajdNPBhG84AjUvwZ6WfzC2MuVs5+2xXquF8nnOL3IToh13p/72sLDRvcMtulRwaqD3YfsKhepUNn6bNzXsy9iatbC0bOxWLx1GTwcAxhuBI/W+efwFmzY9y9CAgIwom8/ukHxhhXmGVQZ5aQh8LsThC3C+ldeEOXwkgub1TnonKe54H7SogJ7Yn1bUIVaZkf0T6m0w4Z6f9oRs8QOhVeASAZ+3Qgc4a3lbhYzrBlJ1OL6EeHVYm4cmUgITkRhgtO5PC+OzZQtdRPRNkcn8bo1OwM2XTqtF804Wh63GmNJhskukyqVC6lp6enpmPO5NCpnyPSXqByo4uduwAhilI5ag0EfjhXbf099h956/vtmiw1UnjJfKlfus2bnHdURN3KByifGMaVKSkqK1HXD4Oz37EQpSnAXjDUzXcQI8xdbs7j7xYxL3zyHuFdaIG5CK5x/v68YgZN1YC1iX2qEc292wunnauLKnJdx9s2OYkRO3KutoKSXaUmJFyNyzk/tJebB4aAHpX+AGIp37q2uOD+lB049E4VMkujOSawKAwtJ0hrmVBEUIfOiBsCFnCBmKsfKlaMw+P7+MJsseGPBdGi8SPrnAmfV/3bNT4hPuorOjRqhToMGUqYGVwFLVjYvaGnnJGFuJ9N1YJOnokaSrDxXsjzeMUelukKkpJ4WOVgaSRKJwwUNZw8g+8gm1F1xFfX/TITx/GGYLpwQc9PYstNQ44sjqPnNeTEcjqeLrPeHHsZzB0napkPpF4KaX8Qi5rczqPreViQvm05SlO5LKjdPrxH9wzFETl6Lq/Nfp/s5gzMKDitJ1kq2DFhJtRYjbFwM6RlpmDzhbbH+7i9fQ5+dmtOVI6QsrT41a5LY/m38K0DaLbLqlxaoMrIfgAdt2H0k0rpxPZxFcuXqVU7rekVsyKgVLu7CklHl4VhfU8IJMZJmfxtprhorh81RQ6GJaiQeQSZXCTVYFRwhpuHgMbbGS6fFuNizb7bHgfYyIW2Fqkz3ZQnuVb8TLOkWksBhUpBEEZiX3McaYc2EXYzRdb3xl+xo8vHxw5RXJELyIHKVj5RgTUP7R84ighImDn4QAdw94oLeflGuCgXsDgnramVc2iDDUCx5ClZ5mrO1LYFCYpNE4VMB2tptr43A2Wh3TIBF6hn3+9E5wnYmG9Zu5Q36R/uZqCl/fk7qrRcabbej+syjZLdec5Q4o55E91MROIK4NNjBFGTVw8YDCEpolE1+wSlgRj7+NAL9/LFm9zbsPLIdWk8fxF08ge/XLBZl8e7wYUWTAK04wOXKjkElteQuWsalCU6cx8jKyoKc/2M4Z3cuFhBLeXSNnexjHoZnvHAYp0f1Qvz/XsSRviGwGegYSVZO3SJAtkvOOoHTvDAZPaIaIvvQBlyYNgFnXmoo7ieOc8JvB1lZQou0MEUADclWDVms7MQSFcoFwXZNtkGPb2d8LbaHzHgRCArF0FkTxPaiV3lJ79ZVJRY9l5hhj5/RBbrGXA1yLhcCT2mj8Pf3f4s9TUF9x0tD0Ir6pdLtxLSAEXXFnDQsPYMHviFIxS8o7ImPoSBJwJKT06CqyHbmdkMTWU8MkWNPIdujHlUaQFO5Nnya9YYlJQEVn/1WSGSlfxX6hMEjsr40wFyloXPp2pCqju8oGLgUVCRbB+uOQ+bhATkP63JRBwg7CWtH18X2fzbj4MnjSLhyEsu2bkD9qlUx6403paz6HH/rih+1GgrS7pRmM3f6Q06aEY82YYlyt39YgCqIC28nxEPJtn1UVBX72bPnUGv2ZVHRi9ojLEEacZMz/QVvc8oKklg5I3PYicNjTh3B+uw0cp4vrfN+opBzFI7ZROfT9SxRxSgcIhLfh3+ksvBz23ApqKjh4mFxMh8fKAo4LUZJgF+qJ9l8uqwM1GvbwLEXmPn0M2hUpQoMPMrJVUGEtZ6/ABup6cZ9+0hL4tFVkjS528GlwEJjQOxpaEhgyCpXqmS/GB+PWj9cEZW8eMha9sDOJQ+7BfOJrCB7UFGfSOBiZFVRo8UTWnHl3rv3X3w/fzaWr71+ygU3ygf4HcsiIyPs56llK17JWvbglKy/MFl9SbI2cA3JKicNxJMIytMxnjh5DPN+/QkLl/4K3Q1D3bzonMmPDxb9sa5qrgqQdsTTQ9qz9UhL3w2rjbUAt2RlOL0k/9tthorHtlarVtV+5kycm6w3gK1TGVXyX5OXQubtDUXjJij2hGK3AGeA1Gg08KHnSElOxNxf52Leovk4H3/RcQbwUL/uOHfuEv7ZexBKMgssVjOuLv0OwZFka5fSc+cJpB3gyGEgOQ3QfU96Hzs8XdOZV+Jgc4DqoGxSBrQc/x0dHW0/ceIEkfWSsA3dZJXAwkgPBZalLIGSiKLgjAolWOlZ7VGr1ELNNRoNWLv+T3zz0zfYd+SQ4wwgumoUxj7/CIY82BMpKemo3uA+BPr5YfH/XkanJyZh1AM98PnE54BMF4kFvhmUSpgPHYItIxPqrNlU8FTGN4RN3q0QXCWpIX8/Ez6+fpB7cxgdIT/pQe4W6GUkoTgMiPtuSyiggCfT9aMX4+PljX0H9uDZF0aietMaePbV0YKo4SHBmPjCCBzYtgh7dv6C/v27kNRVofeA0eL6eR+NQcfercT6F8tW05um53dlcI3kRlB4U1iVd6vAueGsdRqNGnJfHqUv4C6k3ODSkJN8TZF7iO6E4iSrQqGAF6k54aHhSEtJwlvvvYGY1jEYPPIhrFhPhCMMG9IXm1fNxsFdv+HFl4YioIIvrl5NERJ48ZL1OHbqDOrVqIqeD9wjbOvBPaQZs//ZwfmNXLj/ksrVbrGRyUHla3dhr3UpweYYieSp9YS8QoVgsSHy97oJex0URNaLCh/IOA+UaP2Lrny4L5FVXH8/f5hNJsye+zXqtopGq55t8f2CH5GVrUOne1pg6bxPkHV1B6ZPexlVa1ZGlk6HTFJrLRbuj6TnoZf5zAvviHuum/0G6EIg24BXR/YR+yb/uAjUEoh1V4SYB5j7r20cSUe/pwjLuDzAqe/6+5MaHBkZKTYsiRdEv6Ub18CSNUHpAwWHQRaRvapWq0VaUZVSgT/XrMTAoQ+gQfuGmDrjA1xOSkKDmFqY9cEEnDm4Cr8v/RQtWtXH1cQUpKdnidE1ua0VHx8vzPjfPOj0ejx8XyeExVQG6Bz+NGleB37eXli3ay+QlkU/xgVJwMQkLUBIVlsq7XDXv//A8b6Dg4Mh9+AEzwRz0gUqKxe3b0oYSrLuTysChIS18bjfArb6SqWKiOWLMFJzjx09iCdHD0PN5tF4/rWx2LF3N7zUWrzx8pM4tOM3bFo3G4Mf6g65Wo6kpDQYjTdXDRUKOYzZJnz4v9lie/60UUCKI1ULM1qtwIgBXcTmz39tZ6NHrLsUqDy5ywZ2GZE1ibbdZL0OVN2S9RJbo6KicpE15SKVlZusuaGEDcdUgVDLiKwcCJ8PzYPtUG8vb+EsunIlAe989BbCalZA38cH4o8Na8RQtqGD7se21T8i+fJmjBnzCPwCfJCalgGdTg8bD2K4DQID/DD0SWlajc9ef4r0JC3Zf7muoXuMH3G/WJ32y3LXtFuJrDbOBcUpXq2XaIebrNeBiuN4suQrCQsL45xV0pAqntvU3bJdD5ao8XJvZCk0kHGluoPHnJ09Hh5aBFcIgZFU0+9/+hod72+PDn064dt5s8VUfvd2bI2Fsz/ExVPr8L//vYrIauFIuJSILLI12Q7NC9gzuOOfg1i/aQeCyOZ97lmyTzPIVs0NsxVhDaoiLCgQ+0/HIjXhKrcgjoOuAzunQ5UpILNcpi13/bsOVByxaVKd4yAYeRWeHIjAI18KquaVb8hwRBUChY7svptEMIn+ULVGSFB/Pz+sXf8Heg3shkadmpAd+j5iz8ahVlQkPvvoNZw7uhoL509Duw7NoDcakZqaQaZw/qKi+BV5aj3w3Evvie3fP39Feq6bNSSZ2Xj9mf5i9ds/NgIet8+CWOKgZ7Zl6SCzk6AQ/avu+ncdqDgSMiVtKTAwEPKGHKBOsKQmuNXgG8BVh+3WneowqEkltvHYX4cqzHaoLxGUQ/8OHdqH58c/i0p1K2PUq2Ow59ABhJBEmzBmGI78uxT7dy/CwEHd2DQTaq7BYKR6enspfSt4emqx4JdVOHnmHFrWq4M2fVqCmO84egNo/6ghXcXqlLmLASK5y4CIKVRgqwxyy1kHUd1kvQ5UHJkOlwXbrDKdTmf38vKCMrgKan17Ftb0wsx1U/5gJl2koi0Lc5JXQB8aAe/GjeHj4Ykjh/dh/m8/47cVS5CS7hjAT3hiSB88+tB9aNIkhukt5j/Nq3p7J7AUZ1vVL/wesX15y/cIDfcTKu8t4e+NDr1fweY9R3Dul68QGR5ELXPRPE+hQCq5JS4O1ktpUOkXkhrMM++7B5/nhkwrw4C5Oiw5aQWnX5JzxAzDknhOpF1x43ooSZLGe4Uj2b8K5MlJ+HHud2jUpi46PNAV35AdykTt0qYFfpszHYnn/saMaeNRO6Ya0jMzkZEh9YcWFQL8fTDh9U/F+vMP90ZozfDbE5VhMuPlYb3F6jvzl7IOLdZLHVSutquk/oLMLyunFnLbq/8B8XFbvKQGBwQESLPIsa2VnpEhZiu3JLslK4OzI3ICanPSJaTsWIaAvz7H6dgjjqNAvejqGDG0Pwb27wa/QG/hIDIaeYRLwdTbO0GlUiIpMQ2N2wymLRnsp0it5aifO3iNpf5VOWTRA0U/um0rEZZH6BTTc+YJrALrdDAfOAK5/QyUuhX0iKyiu9Xg3JD5yiCbIHXHmc2s4xFq1pKmjDecPUlsvltVEWnQutwrAMqgIGTuXomzr3fGqREVkfztKEHUYJUW4x/qjT3bFmHbxp/w8CO9YCVVl/tDDQZTsRGV4evrjXETPhbr3099niSk6s5EZXC4WoAXBt7bBjxv7sZ/95V+Nw6pwLbLl4mgSshNR6no+XncRM0NURpWqT5VrFhJxIwLslbgOVwIhrh9pAq7cBxpcYB+L2dJ5MmejZdOIeHz4TjSW4b4jx9E9uGN4pTQTqFotrYttq58Ey/1aYtgfy8kO/tDSyDVi4eHGtu27sOGLZxVPxDDxzzw366a2yFLjzccXuGPF66kG5ZygITFDGtyCtVIA+RmntXbbX/9B1Qkh89KJk5U1SixFGRt1ry52LCkJ94dHmFSw2QeXlAGBsGSdAFXf5mEk09FIm5cUzFzO8O/gT9afNkCg9MHo/tf3RHZuRIWVYqDOdUI/QWO9io5G8vPxxuPjZwo1v/87jWQoSzW8wxSzxt2bkQrMvyxYzds6fkL8ChSsFTl9LcWOZRGkvLsKBGeYDeuA72eE8mSIKjE+b8I4o116tRJbHDybdxhRrIyCxnZbWoPMTGW3CsQaeu+xcln6iD2hXpIXvw+rGKaDhnqvVEPD5x5AH0O9EGNkTWEB9aQRhIg04adVVKQrbXDfjHBcdPih6+vF776ZhFJ8nR0a90ETdrWIxWoAHHKpAWMG9ZXrC78e2fpqcLUSFguXKR6poDcuJt23GWaXF5BzDyTKqnBPXv2FEvhYDp8+DDq168PZXAUor+LgyWt/DiZOPsFZ07k1Ka6w38j5Y//QXdgneMogRr1qo9VRZ0X6yCkUQjMNjMsegvs5uvtT6IoDCobuhwNwQO7Q2GqXhHKKFJPijHVC8f/2sluiaorvazsvfOh9SEVtiAeZiJH4tV0hLQZgZoRETi58nsgiVTRkgRJVevlS7CcvgCF7SAU2X9R+dPvcUvW/0DmKUObLzOxPd6O7du3o3Xr1pJkrVePWmuCJe0KrIUIWHcZkCov1/oKNdcQuwfxMx/HiaEVcOG93jlEDe8WjnZL2uER6yNo82Mb+NbyRXZaNswZPBzuv44iUpyhMcuxpVYSdJ6SdHXmLS4usFPprXe+FOsTRg6EtlJAwYjKoOuCo0IRHVUZp0iN119KIvKUtCpsh/UcmRCk+coN/1KhkhbnJurNkUuyVqtWTSxz3lZQYCBg1sOUcJL2lkGPMBGU7VCFX5DI4J+48G0cGxIkJrdK//snIpYBXtW80Pzz5hiUMghd13ZF5V6VBTlNaSbYTHd2FHHCZZPShrV1r8LDKIPl7FkOZXIcLVpwV83Fc1cwZ8Fysf3+28OAVCkhe4Fhs+H5R7qL1U8Xr2LPlVgvEVA5WamRsFtkUJgPQGaj3+Im6k3BIfppSTZczqZ2TalCKE82Tcgh6329pY5zc/IFKdl3mQDJO7VWIqjZiLQNP+D06Po4+UQwkha/C1tWCtRBatSdWBcDLg/AwNiBqPlUTWqL5DCmGWHVk5T6rxC9LTxIuq6pdxmpPnTtxUuwZxWPJsKRSg8Pl7LqL5tJSx5TW9iuIb0RwwdI/omPF64QammJgMvHYIDlPI/sskGh30j73P2qtwQVS3yWJDwaNKgvlowcsrZpI6UByfh3mZTl0IXB/aEK7wAofAKRtW81zk3ujpPDw3D5m1EwXTgszol6NAr3brkXDyU9hEbvNILSSwl9mh4WnnbS0X9VELA67GFW4Kd7zsHLqob5+DEWg46jRQNPTw+sXLkJh46dQu2qkeg7sL3I/lBoWG3wjAxG64a1kZyRjqOHSYsiCV7soPIxn2CNzZOIupZ2ULVzS9Vbg9rQdWckc2fggAFiycgha48ePcTSdPEYlWPObteB6A/1Fd5c0+U4xH8+Ekf7y3DxowFkh3IFAEI6hqDj8o542PQw2s5ti8CmgcKTa04nO9RSSKmUCyqrDMfDMrGzehrU6QZYi1AdZu8zj3V97qX3xfayz8Y5Io7EZuGRpcdrT/cTq7OWrSn+4H4RAHEJ1vQsyK3nITdzFJjbA3xbKGXYdF7yhzRu3FgsGcIb7FgXFYVRe0EWqZUmqiDF3+F/W3B3i0bLI+RhPH8C6ZvnI+XPL0i9veat9on2QfRz0aj1bC0R5WE2mmE1UqtUzI9u5aTCxKC3fq8LtdEGZZNGRTLhMjuVZs6ajykffY2B3dpi0cJJwBVOeVJE4Fcc5A9ZcHfRp27bshgwGguvYt8MVJ/sJjNMe3aLYBtlxrdU4aheuYPQbwnBQGrL/D/IRLp4Ldfey3UitGXLlmJpvBxL5VlKBUov2Nkfyupu2oY5iB3TELGjayNp0VRBVHWgGjGvxuD+Y/ej//H+gqiWbIuQosIOLYE2RmGXwSK347v2cfAxecB05GihK7ycU7XoTYKojIWfjAaS8hkAcSfwI1qtGNKrnZi5b/MeMhuKSxWWy2HmBN5yHyiy/ySi8phpN1FvC2arGYKoPr7Xz2R/HVnbtyfbiJD5zxIp4XcJQsTlegdCrvWB7vAmnH27O44/7E126LNi5nMG26E99/XE4OTBaPxBY3hFeOXYoSVB0BuhtspxMjQTvze9BK8sO0yHDtHOggeVBAX44fmx0qDyD14cCnkgSeq8xP/mF5z98EkpQOKdeUuKJ/shlYP52DHYDXZSffdJMcAopwE3RQlqN+cdlgaxDho4UCyduE4NPnr0KOrWrQuPGs1RbfrO4h/byoHcHp5CRco++Q9S189G+vrvHAclhLQPEZKz2kPViI82IUFtZqrAxaC1FQQcLJGlseD5v2qgznlPmCOCoYqO5mESjjPyBk7UffrUBXToORz+3j5IPfozoOcZ4Yvhh7K546FBhUaPiRhnO4/EYbOnqL6LJLU17iws5zmhQSpUmXPpO6nxd5hZbtwaPIZ12KJszDlowZIlS9Cvn+RfYFwnWatXry6WhtO7iq9cSTWSabygDAiCzZCFxF/fwYnhYTg74Z4covrW9kWzWc0w4NIA9NjUAxH9I4SKm9Mf6iJEZbB32MukxDekDicG2qC4eFUMqs6vh9jLU4vRL0tOpfnTX6D/6XcWB1EZ3D6rlRjRv7PYnLvqr6LLfqhUwZqQQESNJ23JCqVuERWSO/ghz6DXwERlOMOAnbiOrDz5UfNmzcR6xi6yMYpKFRZ2qBYKHx7dI0P6prk49WwdnHqyMtmhU2BNuwKFVo464+tgYOJA9D3WF7WeqSW6W4Qdmi25sV0VcrJfFcStD3odg8GTGqPY87CcO5dnwnKqlqVLN+Dg0VOoX6Maeg3pCOiKoKvmdsjWY/SjUg/Ahxx4URQjcZRK2C4TUU/Git+uypxDqhu9O7edmidwJ8z581Jdr16jBpzJDJ24jqyMRx97TCx1e1cLR09hIPWHkh1KkjTr4Aacf7c3TjwWgEtfPgVT/HE6LkOVIVXQdWNXPJY9FE0+bAKFh0IELBS2P7SkobRTUdLjvs+EpUZGdprUQO7SuQNh2QPvSUQZ9txksb36uwlA4rU0McUGsxWVG1VHZHgIjsSdw5U4Kbi+wCCJaruUAPOJ0/Sb1UTUH6k8jFwJHCe4cUdQUf15WjKfenSXIs1y4z9k7e44KWPnsoJ5hBVkh2p9oKrA/aFnEP/Fkzg2xAcX3++DrD1/iFO4P7TD7x0wOG0w2v/cHhVaVpDicou4P7SkobLJodNYScIeh0lL5RB7AeaTJ6nRu7Vjxd/fB++8/41Yf6JvV1SsXZmIVLwxxznQ6fHKCMnRNHv15oJLV/p91nNxMJ8i9V+tgSrrJ8h4Ogw3UfMHtQzf7Zfe/eDBnBHkelznYHJCQ4VvMptRfeZRKAMrAdY7OEs4LpeksJzUZlPiOaRt/BHJSz6A3aR3nEA2WVUvRI+KRt1xdcW2xWgpkf7Q0oBZLv2oiX/URlCaHKYKPlDXd4SN5eqHVZIky8zIRt3mkhPBfuI3fiPF4wG+GTjli0IFWY1+CCKVK2ndPGql8xF/zHaoQi68vrbEdOKmRai+1ySq207NK7gos012eE2Tyv8mtPyvZGU8+dRTYpm5awXkt1GF2aYVcbl2G9L/noczLzfB6aejkPTLZEFUTYhG2KG9D/fGoDODUPuF2jCmG6/F5ZZDojJYwnI1fbf3MZyMMECbmA3T7t2ws3c3V6STr8+1VC2fvf404ENlXVJEZbADy1uDjs3rIzktDbEnWG3PozQkrYsDZ0x79sKWrCMtLAWqDJ4MmYMe3ETNN6jINl2QpKozmvBG3FSyHjx4EJxP2KNqI1SbvhfWLOe4Rxm9B2qJNZ5EYgWpyquRsmLG9eNDCWyHxoyLQUDDANHRb9E5ulvuMnCUk15tQb+9lXDf/jBkqI1Q1KgORURlaEiqnTgWh869R0Kr1iL7ygrgcimMI9ZqsHLVv7h/1Pt4+v4e+GrS87eXriwCiNCcQ8l8kuxTuTcU5v0i6EHy+rqdSQUBj1/tPzcbS09YsGjRIgy8oY+VcVOyMpyhh9Hz0kRYmgjul8lhOHsQqeu+Qdqar8RxJyq0roDaY2qj5kM1YaY/V+sPLS1I/bBW1E3wxYgtUVDrbbAEeiGifRtE1e+Dq8kp2LnwQzRvUQswSJ3hJQpH9kNFncEin5R91x+kUmXe/L2RVmA3GmE5eQI2Hq5HarxSvxpy02GqG15caRwnupEfiFJjek2mcifcgpI3V4MZTzzxhFim/z0XNmM2kha9i1Ok4saNa5JDVN86vmg2sxn6x/dHr+29RH+oLk3nkv2hpQXuh/U2KkSk0+QHjuBYFT1CDXJ8+9angqgdWzdB886NgVvMFlfsYFXY3wsP9mgrNtdv4pQvNzjEqLEWWR4unIdp127YMi3E8SSyT7+D3HyCjruJWiiogFVHJRW4W7duYnkz3FKyHjp0CA0aNKA1fgm5TiF6R4+ORr2J9aAN0YrZztj+LMte3JICq8VGrQ3NYwPwXsxsGMloj581FhWbRAMhodyk0kml0KesUWH3npNoPmgCerRsij+/nAqk8uxuTFK5GDVjOXtOmpicdin160iaHqKqweLArfYWFjJvGTp+lYVN521YvXp1To/MjbglWRm+vr6kEWVC5atAePdKYnRL5Q6VYaK3xnaom6D5h9pfg78e24SEeefxeI9IzBn1OAzxRsg97cKWVYQRablvlkl761dT9AgJhCasl+gFMKz/BRqlHNZLl2G9eEHE94K2FeaDUOj/clzgjkoqCnAR2ki7UbyfJY2C4iQDt4DiLYJj/T9ISEjAzp07UeflGHT4qgOUoUqYdKTiGknFvfv8RYUGT5CccToDe57eJbb3n6I3VfUAH4HtUiXR/WG9Ei9igrlvVgy5KwlC8HeQdM1ON2Dr7iOorlGjkc0IMw/Nk6mgsB6CMns5SdNjtM0kpcbETdQiARfnt3vMWHnaigcHD76pY8mJ20rW5ORkVKhQAUo/JQYnDhZOo6KyQ2WOafPF1+fznnKVXFyXF8mu0JKtZWAp5dhRivD098Ti6MXIPJmJ96Zo8dqbPoCJnk1lBixKWI41gO1QI9izOOjdApmHHPKwYCiCgiDzoXOdBBFl5vjkF3wP58cBeya16mmpuHrqIkKf+Rh1QoJx9M2RsKTsgILThdoMdD4TlF0c1667FcStucePq8sNXfQimwu7M0rARM9dXAWFuAVPD5SrvAQ4qR4VB3cpOyGKR5n33+a8d42PMxGbBuzZswdNmjQRx26G25KVUTu6Nk6cPIGOKzsivGu41D9aWNCPctq5PDaVcyKxWp0XMFGTdiaJsET/+v63JSwTNXZOLKoMrAIObSxNwiq9lTi/5Dy2PrgVLDCzskKkFy40FFpyMISSykBO5sXFKFhO1YHtYgQRl96mzEjmoQxyXy/IyDRR+BJxtbRfqSQOEYk4YXfOa6Qlr4qa4KhgXNE4GINUXJGR0WCALSNDzOZuS9eRmmujMzXQhNsQPepLnExIR+yzKlQLksFupfvzfW6srLcAn5ZptKPXL3q80EKFAfVVOYRloj60QI9GYXJM6KApVsLyc/Dcph703gO19DucxZMPOH9x/W91UJNpHuIpQwqZBJlE0An3qLHnshX/u9+Dyo/OpVdwOtmKT3ea8Rnvy8NvY3P/VJIVtb7Mhre3D5mc0rw2t8Idyfr777/jgQceQIU2FdBza08R0FAYKDyJQD/EYvfY3fCr44fU/aloNbsVqj5SVQrYpx/NhOQK58w46CQaL5VaJXY8uUMEXDR8u2FOFBTHEfNxJj53GfG2h78HfpL9hH4X+wlnGJ/rJDerpDn3V0ivha/h72anmZDetF0kdjn9HB6U8Kv/ryLmedkiH/QdSGSjSv1f0D4F/SYlEctILz0pBLZz1QRxbckkYUG/gaUu+3XoN8jo98o4kIFIK5Zca1hrYS+vncqByWlykJTLhT+0SiVJFVgJeUAq5JXPQx4ZR5+rmPJWGia/bcTTjZT4aoAn7Pr8/X6p0trQ5sdsXM2m8pvqS2o93YMebUucFZ3mZaN1ZTm2PO0t7fegZ+Xfwq+CiMDJSXiYmGCXs4Gl88R+ujf4GP27bj+RSMwLo7p2Pmjf6MV6NAyRY2QnahjSqH5wu0ONngDLHL6eFjIf2scNJ39frv0MPvtwohWhXnKEfJqFnU9o4U3lXidEBtk7WbC/Tg0nQwO8sMIg2s0ZPfNIVvotj/+ajZ8OWTBt2jSMGzfOceTmuCNZGc4+10GJgyAn1awwFZgr7dEZR5F+PB1dfuhCqtdVLK+1HEPtQ2HM4jA1ahFXJUATpEFox1ChemeezoS2ohZXt1xFWKcwHJpySEjkRpMa4co/V8Q9/ev5IzM2E0n/JCGkQwi04Vqo1Cr87P8z+hzrg8RtieIc76regsxJ/yYhsHGgIK3uPEkXetne1byRdjBNSOz4FfEIbBEIz4qeko1eCKj91dj/xn4cfvcw6tSW4+ixYCLqne5JZczSlkMXmby0bjeTlLoaJghsTw6GPd2PpCORwUaF5vxwAebUNL7+2kfuTequXxpkAcmQBV+FLCSBJDbVKp7l2UqMUSiQmGBHSGUpOMM+lSqi/trt8gInWYdSxa3oLcPwhkr0iiaWqGVoMisTr7bW4NNdJvwzishK5Gz1vQ7/JtiIDMChJ70QHKJA05lZ6BipwAySUtQ24+oL3vD2kuEC3bfRdzqSbkAgSenDT3kjnKR0nY+z0D9aife2SwzJGOeN9XEW9F8sjVzyJyKlvuWHH7cZ8MRKSdh0qyrH2qH0pdRYyF7LwIukBXxC39eWG5LhtJ8atJxi5EaCCC17NQP6V7zhwQ0Mkb7jVzo80UiFJ5qyiUA/8e1MZI73hoZIfydWCUpRmcgmS9I0DzTkNv/OeO2118Ry72t7ofa+oQ+uAGBJxhJGZ9QhYU0CKvaoSAXDraQdv4X8hvhV8dgzbg+2PLQFXt5eODHrBBaHL8bJz08i9WCqkKAqXxWu7r6KNfesgaaCBhd/v4hVTVYh9UAqfq/+O678fYUabAWZWzasab0Gl9dfxoo6KwRp+TdsemATDIkGqLxVQtKf/OIkVF4qbOy9EcuqLcOVTVewvMZy6C/rJcleQPBvNaYaBVEZG9f60ZvJC/npO3kkj5Vqq4nK3KiBjMgoD70ERf19UHZaDVW/BdAM/Qaah+dAPXg+1AN+hbrfIvoshro/LXl70M/QDPlRnKfqPx/KLn9C0Wg35OEXpQpD9xX3F98jQ3AlBerGsKgD1hyhGku7C4IM0hre66jG+A1EIKrYV0g6scujWbhcmOksiR5fpseY5mrYv/PH8kGe6E4qMpMnhSQbCwj7//zwSD0VJm8hgpGkbEzEXthPC/snfvi0mwZtf9KJe3OVjE0ljYH2v99JjSF0335tNXi1lQo/kUqa+q4fUuj7maj2N31gn+4LHT3WB5vpvg5J2zWKNA36vtOpdqw5ef3vFq+Ln5lgZgnO6/T73mynxkfcQBDpTlyyokaAHBpqoPLAO7oGmL5JakweeughsbwT8kRWp3iO/S4WZp5nJU9X3RoKjQIXFl/A2vZrsXv0bniEe9Czq3F02lFEDohEk4+aoOv6rji/6DwJIKNQSas/UR29/uqF8I7hoslL3pWMv+//G4NSB8G3oq9Qjbus7YKY8TFo+VVL7JtAFZpVPWoAeH/br9qi7cK22PvqXrFf7afOUX/ZtlV6kv1Hf6wa99zZE+2/ai9U87O/nBXPW1B4+Hhg26PbxPqQwWqERtBbkgRAPsDPyR8Hec18DxItRk/60JIko0xtgswrk2zadJKe1KDxkrc1LEmowPg85/l8Pd+HG4Oce1/Dyy+wRwUkaehBWYoUAGyd1KqmFCTiiv3OVhNJVTVp4o77UdmvJ7X4kd8NkI1MQ8s52TiaROfSP5ZMo5vR86Xb0amKHFd09Pz0HpOJy13r0H6SsI/WV0v76Z+euPUa2ZAgG7VJmAKpPH6EtL9Mkx1p3O1E37/kuBkP1aH3yOTMtOOt9hr8xbO0Oepyr3p0X9rfvKIcKaS+31Ak/wVd2oV+33GePIpU6M93m/F8M5KwDlLfDuLW9HWTNksVYfJkaXjknZAn2gUGBqJXr15i/finx6HyYeW/4GDnUrVh1dD3374YaR+JC79dQNyaOBiuGJC0Iwlbh2zFpn6bEDkoUpCN1W5WUY0WowiJY0nHEtQjxEN4WBnGZCMOTjkoro2bH4eIfhFUblbhiFIHqGEwGuAf4w/9Rb2Q4lxiTvVe2MgE3q/wIuKSWm2kP5Uf/U469Y4v7hbg7778z2Wh1jN+nk9S1cLNdFGCH44+YjwtVUZbrg9vC0LyJ48/giresCclsq45Y4Upncq7AL+fTWb+yvFE0FfXGvHtATOGNVMjm21DBi3IAoHhVW/YP/aDfZovDO+TSk/E4mv1DqcUT+wutamOh+DLiZcGqhOO1ybAUpvB57PdyGAhqCFSMDF8SPpd4Vky6Vq2bZnoQcI25jMJjuv59cjz8IOF9CTiPxijxIK9ZqyKteDJxlRfbvB+3xT0DEvoGm5kGjVqhNq1azsO3B65fu7t8eWX0pwrh947JOy7vL77W8JZSATPSE8xjYVXpBfCu4ej3/p+6LOpD9r/2l44jARh+TsdYEdU9JhoBDYJxOahm6GiP6WvEvfMvgd9NvZB7429hYRlsrK6zbasp8YTl9ZdQkDTAHp0UsPp7bJk1dBf8k6y4dg5waCXxd/HcC4LBLodk3Xb0O1ic/oHZAexOp2HlrdUIdoSObp3kxrknw9T7ctn28wDhwQpSXCMa6nCRztMGFqfbkKVm1VgcYzI9mIr0jQ+zcK63SbMXGfEB3+SWkin8XHn6xbnM5GopnaOUqD33GxsPmVF7a91ZGdSrSfW8PnONtBC70wQna6P9JPjyz1mrN1nxoMNlNh4zopZ641YfsCEx5YbMIWkq3As5QITyHyb937dIZLcr1Bj9DBpB5VI/VV5c5ei49gtIGoZ1btXNki286xZs8QyL8gzWSMjI8UEVtZMK+IWxAm1sTA488MZ/Nn9T8wLnwdzlhlVBlVBnXF1cOqrU5gfMx+LGy8Wdiqrx0ys3F1GvK07p0OHHzogbm4cjv16DB0Wd8DiiouxvPNyzNHOEfdhm5Vf2pbBW/D7Pb9jz0t70PTjptSIWlDtkWpYVnUZfo3+FVlxWTmeYW40pAorNQoF7aPlrprYn2KRdTpTpDd6+VUiK73csgEbJr4iaSzT/pVssjyDfmIFsi/HNifW0e/185XjzbZqfNCRCoHUywhfGZ5uQiQjyTamjRrz+3rgayLTuTQbRjSka8heHUPXhnhR1SRCs1o7IJrqGl27Yagn2lZW4OMdRnx2rwaTutA96T5PNlIhyo+ekYhWnezGYQ2l8yfS/TuRLfpPPL1DaijZ8bT/ig0Lj1pw9jkv1Ayl76DvG87fy6+GiMuSsj7vv1bdJNBvGU1qrieXheM1csaaxhEKjGikxLQubGbk4f3So+2KNSM2zQ4fHx+0bSvFZOcFefIGO7F//36RIZyl0OOmx0V2h3yDfyu9hOyEbOGVZRXVr6ofDOncWUUmkq8HUo6mgIMmAmoHwJBhEARiVZUlFZ9jyaS3QuXJTiYuVL6XT00f4VFL258G7xrewnHEBDckGeBb1RdJeyXvL+9jYqr8Vcg6myVUXu4O4iwVrPYaLhuEw4q/35RhEkP8uLspX4SlZ1P7qjFPNk9s7tzqh+ZtqGLl5WW6Auj5WVVUq66KpBXmCd5QkjTIa00RWiRVypz+VVY9aZ2v/88xWudt0UA6z6HXKryxvM7PQh+pu4nA9+J9fJw+jP+cz6+L7iW+i8+n/dyVIo7xuQz+LkejzCHOzuAGcS9unx3HckP8DroP3e468PXi+28k+E0go0al2nuZiCN7fPny5bj//vsdR+6MfJGVwalKOWVpm5/biGCDvAYzXAcqROHc4cKkQsmt4jKE95UL2LmfC5lXnafl3ubb0FsRKqvjvmLd+SJ4m+7D9xT342scEMf45/M+x7M4zxe48XvzCI2/BjtH78SJz06gVQtq2f8NLDtEdYJU1qdGZODb2Qa83V4tpFjuaB038g9umA4lWNHgu2wEBgUhOSnJcSRv4OqYL3zzjZQvaOeonVCoJEmXb1C9ZenK86DeSFSGOJZ7PxMv92m5t/leTkOC1+laJ1EZzvuI/Y7TnBDHnPdyXHPb780DWAPIupAliMr4fZEv3SOfN3EJ2PHCaMnRNINsznypwm7cHFScA5ewqxr4/LPPxDI/yDdZebY5lq7mNDOOf1F4z3B5A/fVbntM6qp59ikNQiKpfKiulzmQFI0hWzAkBEin5993ykxah+OYG/kGq9frDlpwMsWO4ODgPPet5ka+ycrgTOEMdtiIO7gbXQHur7286TKubroqtr/42o9so1xivgxi9CjJ0fTZbjJ3HAEEbuQPotTIDBvxhxQEMXfuXLHMLwpE1lq1aqFVq1YiDE+E/vmx5e0GJ0nf2HejWP/pe2+xzK2SlzmQ6fDaeImsPx4yk4ZQsD7Xux5Ej1/3GnEhw46wsLBbDi6/EwpEVsbSpUvF8uDkg7AYpD7LuxnsST408xAs6RZUrizDY8OpkpeZrppbwEragqdCxDOzKf9XLO9wHHMjT5CkKvDgUsk7x5kgCooCk5VbiMcff1ys/zPsH2h82H99d4IbKu6T3TOWzALC4gU8VR/V7jLOVQksXb3E2rR/qMK5VeH8wVOG11dJ6m/Hjh1F1tCCIt9dNzfCGbLXc1dP+NXzE4Hzdxu4q2b78O1iQEDXLkqsWx+EO4+qKSNgSWqzQ6aRuhkKMhLnbgX366Zm2xA4Qye209LS4OfnJ9YLggJLVie++krKdLjlwS1Qe9x9tit31aSfShdEZaz9w5/Ux3LUYHFHv1qO+3pKXv9vxSgTserGnaCVof9vUlcND4YpDFEZhSbr008/jcCAQGSdycLxb49Lwe93EbReWmwZtEWsj3/RgyQQFWkB4kRcG3a8OEZyNH3M4YcFHIlzN4G7arYeN+Hv81LDzYPLC4tCk5Xxz45/xHLnUztFnG9hxn+WJXCo4pmVZ8QIIJ4V46MZZKveEBheLkD87NJDzXOO4USKHecvWqXQPTduCmEZkvnQbq5kq27cKPUQFBZFUuTcleNMCs6DuotigLrLg14IN0rbH5VG1cz7wZHeozya7KL9kWHkEx5ic/YBtyp8W3jKMGKxpP5y0m52LBUFCu1gyg2ns6ntoraI7BcpBdyXU3CqlsPvH8b+ifsRVUWOuLN5SdVShkHkPH/aiiq1UhDmDVwaL409dTuargerv/suWtDke4msVqsVcucA20KiSJWZXbukfLhbB20VI1vKa98r/y6eDY+Jyti6kWeoLsdEZZAwjaypAvtILmcBpy9TQ+zuc70OTvW3+WyJqL/99luREZVRpGRt1qwZhgwZItbXd1kPrY8UCF7ewH3KO4bvEOt971ehUlVqTu+KESl2vPKy1Of6gSP3kBu54C3DowuzRQDJPffcgwEDBjgOFA2KVA12wsPDA0ajEc1mNUPt52uLiarKC+QaufB8r6y3UmwbM4Og1lKbV341/mtQAunJNviHOrIffugLe7pbEWbwmNb1Jyzo9rMkVS0WCxSKolU9ilSyOrF3716x5GRoPF0EV/DyApVWhc0DN4v1d6d4Qu1NL+RuICqDfqcfpwptIlXClXvM0mDtuxzsGTdm23OIyiGFRU1URrGwKCYmBhMnThTrq1ushkZLzU450Jg4VcuZX84g43iGmCB84pveZT/+twB44Xmpz1WMc3WHH4qcws1mS1FKPPStoIH6d0KxqMFO1KlTB8ePH0fEgAh0/q0z9GlSy1MmQXWSRxfNV80XA9n/Wu2HTt2pESprGSAKC27e5Zx5Qwo/1I33hicRNk+pkMshZF4yTFipx4f/mBEUFISkfGZ/yA+KVT89fFhKbM05go9/d1x0d5RVMFH3vLJHELVhAwURNY8JssobmJSk4vXsLum/C46ahS17N4Lt1M3HzIKoDGd9Ly4UK1lZb3d25/z75L9IO5ImBmiXNXDwA+clPjbtmNgWqVrKe1fNbWHLGef62e67k6ycNUOXZUeHeZK2yENGeSRacaJYycrg7pwPP/xQrLMHlTMjlrVwRI23Blsf2SrWhw3VoEot0hDu5uRhZKq24zSgBE7tacwgtbjYa5LrQPSnUlvFE1UxnnzySTF5W3GjRIr4lVdeQc+ePcU6zzfDaUJL5psLD5FVf9tlXFpzSWzP/pGkapFn1S9jcGj/o56RCPvONmLvXeIVFmJGK0PHL3XIJqWCU/M6kwgWN0qMMqtWrUJoaKiYSHjTwE0iP3BZgMZDI4b/MWbO4IAAel15yA9b/sHZDyVVeBp7hT3LlrZUYHjLMPEPPTad5xQ38pxuypJAicq3y5cviyU7nHa/thtaf9eOcOIk4se+PQZ9vB5BgcDoFwvRVcN2HXdz3FjiXMdZQBWF3cf3KSmXAPGzZowKERFyMQnVzqM82spxrJyCPb/fbzXifYdDSa8vQJL7QqDEldGzZ8+K5dEPjgoPMWdZcEVwRn4bqbv/PvWv2F62iAcOk/pbEK5SJU64YMVnn+okv5Sz1Jmo9PnmCz0uxFGNL0xlp4agx71puHyJvqAkCOsoh2efkjSkL3ZRBS7H4YcyDxk2UoM0cpXkrNixY4dIkFeSKHGyVqlSJWd8H3uIL6y84JJdOjz9xd5xkorTppUSbTtzV43YzD8UMiz73UiSWYcJb2SRyHZUaqrcnxNRn34uC0vouJgujQ+xBHZ+GDfu4zoiPo5t+sc4dNgKJROVHXi83/l2c5+bu37l7KMPX8d2Z+59d4LVjueelrSjBUctYnJkx8CrcgWeNuN4vAWd50ue3x9++AEtW7YU6yWJEicrg8f3zZ8/X6zzHKtXNl9xqQwTnKolIy5DTOLMWLuKpKqtcE4lC9XlCeO1mPmZIzDEUfIff5qNEU9oriXtJwIPG5qOZk1T8MYEIjaTRmbHUyPS8dP32ahbJxkrlhhxcI8ZzZsl47VXMnMkmo+PDH+uNaFdmxQ88ViGREAi54K5BnRon4JWLVKwdSNJQAd5Z3+TjeZNk9G1cyrSkm2IPWFB926paNI4GR+8I01UfFvQb/INVtIzyTlLKTacoXuXlBpeQuBwykspNtT5WlJ533333Zyx2yWNUiEr4+GHH8Y777wj1td1WIfUQ6kuk91f46XB1oelrprnn9XAM4D0U8lMKTCY676+MnRop8LSX4mwJF03rDaidSvOei+HVTitZOj/QBqiaymxa1sA9h+w4NsvqJLQud/ONuL8BRvW/emHPgMy8NzYLKxZ6Y9PZ+mxaR2LfBkys+z4+hsDli/2w9UkK8bSObz/6lUbFvzoS+T0QdeeaWLf1o1GvDJRh8W/+uG5Z7RIpgq5Z58FUyZ5YcfmAEynRmQne3lzS+Kbwo6JPEMe4aN/2CtcfkQrE1WXbUfFmVIo4bPPPpsTRlsaKNZww7yAE0l9/PHHYv2+w/fBL9pPzKlaWuCgjaRdSVjXbp3YttuDJaIWRrCShPp0mg6XiTQjh3ng/v4ZOHY8BI0aXsXShb74ZJZBDGB/6RVvUiOvYMxzHsjS2XHmjA1ykqob/g6k/VfpWbjT3Y66MUn4Y6kfoqJVmPhKBioE07Xjvekeidi3KxABRP7zsRa065SGc+d5ULwV417TISmJSLvQCKMxBPf3SsOjD2vw4KOsxlIV4Fogk2P6B1k4FWvFz78YMJ8I3qc/sfV26j8391SpZbJEsWmf4iPOL91aVXiws8xAar32I6kv9ZFHHsG8edKsgKWFUpOsTkyfPh2jR48W63/U+wMZJzOg9CkltyIJBYVGgU19N4nNH0VWfdpZOA04B0aTHTVi1IiPt+LYQQPiztpQtbaGyEM1WwgkqYaPeU6LYY954L2pXlj0Czu2nDWfl3aS0nZRkXid8yJxJA3fgO1FGZHbCZVwBZAd6ZGEmtUVoqvFx1uSfOxA42tzQBd365KC3XsteHmsFrVJuueJcKJsZHigj+R3+KIc9LmyRM1N1IEDB5Y6URmlTlbGzJkzRRQIY2XdlUg/kl4qNix/57FPjsGUYkLlSjIMLcKs+larHWaHKv3KOE/ENEzFZ59wY0D7SZGwiERrctSoLsfGTSa07axBQIAMF0j1vREmuo/ThGZb2Jn5NCPTjufGkA1LeO11Hbp1vlaGT1MDwBUwOYW/x45B/dUYT9KW178kVXoPqbBHjlrwysta1IpRCtLm3Vlkx0tEcMZ07nMtw9kPnaqvk6g8f+qiRYvEemnDJcjK4CiQ559/Xqz/0fAPJG5LLFEvMadq4blmxWRbhHV/BtD/VLGLhKt2YZdGRnBx24XkrFhRjseGSypoVKQcFcPZM2PDiUOBmDvfiODgRAwbmQm5w2FTNUq6llEvRgEPrUSIUFKBua+Tj93XU41WLcgGpmvNFiLhNxzDDHwyzYuInyScWb17quh32sV3D+jHDUISNmw0oSnZzutW+aPvwAw0aZqCIQ9q4Ec2dp5AjUe7zmp4kunKkwRfuEhEd5malXew1/dymg3e0ySicqYHnvDYVVDqNuuNeOmll/DJJ5+I9U5/dELlXpVhTCton0ne4eHvgc2PbMbZn8/i3i4qrFnPEyAXkf7LEI4aqvys8rL6yd00LLW59IXXlVb4ZzI5c8dO89yzbMKzx9c5yofP59whvN/pAOJrb/TesrTmn3Cz/Xyr3P2ivE8I4tzn0r68Fj19x6in06mBMOKNe1SY2sMDdikTZ5kA96OeiLegtsPryw5QZ4+Fq8DlyMqYMmUKJk+eLNZb/9AaNZ+oCUNa8b15uVoOY6IRS6OkybaykivAy58qbSE9wHcVSCqdPmZBzbqpCCe7OGE8qfjsaHIcdmVwZNKmoyZ0nC/VsWeeeQZffvmlWHcluKSyMmnSJMyZM0es86RXeyftlUITi+lp1Z5q/NVHCtR4c6IWXoH0RW6i5g9kqrLzzNsHuJRlx8mSiqQqBFiHkFHD8sN2Qw5Rp06d6pJEZbisZcEz1K1du1asH556GJse2QSNr6bIh9dxVv2zi88i/WCaSNUy5V2SCOUxq36JwI43J0h9ru9uI7GaW812MQjnGUnUN1bqMfwPamkIs2fPxhtvvCHWXREuqQbnxunTp1GzZk2x7hfjh/uP3A+rwSo+hQa9MI2fBgt8F4iE5Et/9cUDg+7SDBBFAWrsDDo7tH6OGeem+cKe6nplyQPHeZRQ16+ysOGc5JfYvn07WrduLdZdFS7vs6tRowa4PQkICED60XTMk81D1vmsIvEUc6qW/W/tF0StXl1ORPV0E7UwsAAevnK0biV14P7+r1F0hbgSOBWLgd6x7+SMHKLq9XqXJyrD5cnqREpKCjp37izWV0SvwJl5Z4QH9zrnZT7AXTWmDBMOvX1IbK/+nYMP3ANViwKjR0l9rjP+JcP/Rk90KYIdSVtPW0QfaiZpvjyxMQsCznNdFlBmyMrYsGGDcD4xtj+2HZsf3QxPP0/hzc0vcmfVHzxQjRp1SVLntZvCjVvDYseDA6X+pM0XbDCk8SBtsVlq4D5fmT/Zp6sMaDdXGkgxbNgw7N8vTX9SVuDyNuvNsGXLFrRv316saytp0X17d3hFesGcljcXrtxDjrSDaVjdcrXYthsqSH2b3G/pRuGhkeO+XilY9acZ3/bSYGQLNeySD6fEwYEOZoMdLX7QYf8Vqar/+uuvGDRokFgvSyhTktWJdu3aQafTISoqSmRxWFZlGWLnxMLT31PEvN4JPEP7tse2ifUP3yU7tVxOgFyasGHCOCnly/92EUs5AKSEIeKkfWTYTGqv+oMsQVQ/f3/Ex8eXSaIyyiRZGZ6enoiLi8sJUdwxbAdW37sacq1cZM6/FURW/V/PiFxQbKq8MtGnyOJ/3XCAzIl2PFifcDjRjqyMkp18WTi1yFYeviA7J1Uohw6mpaaiYsWKYrssosyS1YlZs2bh33+l1CuX113GAvUCXFp/SaSL+c+Uk/RruZ9264PSWNU/lnLsLBHVzdVigB1jnpccTe9sIfOk8M77O0JIUy8ZjiRYoX0rAz8clNQlju/l6RfLOsqkzXor3HfffSKLIqNS30ro8FsH+oWk4TomdWYC7x6/G8emH0OzJgrs2hPk7qopLhA5z522IqpWinDY24q5z1VIU1Konlmqx9d7pffNOau5/1SlcrH+owKiXJGVwR7jrl27OrZIHVvUDlUHVoXFbIH+qh5LK0vxv5fPByK0skKEyblRDGCGqmWoVjVJjNvdP8ITDSsqYC/i3jGhXmtl+PeUGa3mOFLmEDgIn4PxyxPKvBp8I7p06SL6zvr37y+2twzaguVNlsOYasS/IyV1efgTGoRGUGvrJmrxwSECnnFkP5y+gwzZIuxz5TvJPGXIMNjR/busHKJ26tQJJpOp3BGVUe4ka27s2bNHRKaYnaO+CawRmUwh14aYuVF8oLJOvmxDhUrJIqbfMsmbyl1WqJQvgu5s/6pkmLJGj8mbr71bjiXv1q2bY6v8odxJ1txo2rSpaGWdidkYnGHhx++ype4EF4quKZcgHgVVVKJ+XYWIDVt7kv6/taP+jhB2qRb4/bAZstczcojKaYFY5pRnojLKtWTNjfT0dOG+Z5uWERwsx/dfeeH+/twfSAx2Ry8VDzTAwnlGPPRYBjpXkWPDSC/Yr5mWeYIz8H7TETNGrDQgNk2qsvfccw9+//13VKhQQWyXd9w1ZHXi1KlTwmvMS0aVCDl+me+LVu04RI5Iy3bsXVUixQxWXtSczO2q2LTnURUWOg9LYS8ZTsZZMHCxHocSpYuYnOz1b968udi+W1Cu1eCbgYfbnTx5Elu3bkVERCTOXbChdfs0VAy/ik0biKk8BpPVY7eGXDRwkJITtDFmitzCYvWWkNRdGQ4mWBH9YSaiv8oWROWRVyxJExMT7zqiMu46sjrRpk0bnD9/TnSYh4eH49JlOzp2TUflyolY8BPpaU7S3rUlVJSw48WxUvjhxzwS5ybZD3kPD1/jzA0rjppR59NMNPwuGydT7PD19cNPP/0kRl716dNHuuAuxF2nBt8K69evx2OPPZYz0x1njXhzoifefJvThTKomNwqcsHADZ5KBh/fRGRl2nH1BW8EEyntZHUIe1RklLBj5mYj3txkQoajS42HrnG+XvY1uOGWGzngQIpLly5h9+7dQsXiXL6TpmQLW2vIg2k4up8kglPacgVzI++Qxnjj8UeloXMiuJ/Iyv2kcck2PLVED9mbmRi7TiJqTEwM1q1bJwaFu4l6DW7JegucOXNGJM9yJm5jREbIMP4lTzw9UguVNzOWaiH3Hjgqoxu3AfH04hkrIqqnIEQLzL7fA+M3GHEs+Vr169evn8hsWa9ePcceN3LDTdY8gAcLcGrU1NRUxx6gdUslXh3vib4DcmUZcAdaXA9uz0S/qmSj8kRXLdvyxFjXoFZrMGnSm3j99dcde9y4FdxkzQcOHTqEDz/8EL8s/BVWi9Qhz7i/txojn/BAty4qaP25dlKRcrE6bK+7CuzJFWOKZTBnWbHtHzO+/laPXxZdXxi9evUSWT9KY57Tsgo3WQsItqlmzJiB1aulbBNONG2swIhhWvTqoUaVmlxzHcVroSWry+WptJmT7PXIkZ4yJCdYsPJPE775Lhvbd1wftc/z8o4dOxbdu3eHVisNn3Mj73CTtQiwbNkyfP/991i5cqVjzzU88ZgGXTqpxfSKUnijpBIK1rLKXJZytN2g1orfQA3QkkUGrP/LjO9/MIhJs3KDCTpy5EgxZaIbhYObrEUMzg/FOX5WrfoTZ87EOvZKCAwE2rdVo2N7FanMajFRlXeQQ20WoCWvuoL6LNRZXnESUwZjhhVnz1mxdbsZa9aasG2HGQkJ11efyMgq6NKlsyAnj4Byo+jgJmsxgh1Sf//9N1asWIFFi35DVpY0HWNuhIcBNWsoxYxukREKxMQoUKsuMyWX9LoOtM3SOPfuvLxB5+0YvC66n3LvZFzbvhBrFjOvxyfYsHSZAUePW3Ex/r9fpFAoMWTIQ+jRo4dQb++WON3SgJusJQyOad27dy8WkvQ9dvQ4rNYb9MZcqBIhQ9s2alSqJEdggAyVaVmrlhIxdRRQKaXJk+Uk/RRMPHbqMNf4wxKR3yp/2E628QTMxHEiOb9tXj9xyoITJ6w4d94q5mxNTLJjy1YTTp3mC24OmUyJmjWrY/DgQWjUqJG7D7SE4SZrKSMhIQHnzp3Dvn37RBQVR1CdOnUaSUnStP/5AZOWx+sqSbNmYvLHVACV2s/PH7VrRyM4OFgkVm/RogU1GJVENkk3Sg9usrooeByuldjGZOaoqosXL4phfgaDAbGxsSKlZlJSMjIzM5GdrafzzeJ8G4lN6ZXKSOrKiMAKaDRqeHho4OPjI9TUSpUqonr16iJDpLe3NypXriyy01etWtVxvhRp5IYrAfg/aUXFzjzbtf0AAAAASUVORK5CYII=";
		base_image.onload = function () {
			ctx.drawImage(base_image, 0, 0,base_image.width, base_image.height);
			InsertText();
		}
		function InsertText(){
			ctx.font = "12px Calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0][0],118,95);
			ctx.fillText(Arr[0][1],140,112);
			ctx.fillText(Arr[0][2],140,138);
			ctx.fillText(Arr[0][3],115,155);
			ctx.fillText(Arr[0][4],93,143);
			ctx.fillText(Arr[0][5],95,115);
		}
		return 0;
	}
	function GambarStatistika2(nmcanvas,Arr){
		//ArSisi = [AB,AB,GH,FG];
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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Pnl/eriQvLDwG/eE8/s6uL5TAAAACXBIWXMAAC4iAAAuIgGq4t2SAAAj/UlEQVR4Xu2dCZQUxRnHazUxRG7kEhAIAhJUxAO5D4UkgtyIIMgRJUqQRBJMIIAE8xAPCDxERMXII4kCcp8eQAJBICByHxoFAQXECzkUISYbfx9bk2Z2ZnaRbVm3/7/3+s1MV3dNddXX//qquroqbcGCBennnXeeS0tLc0KkIj093f3nP/9x559/vuxFZAn28t3vftelLVy4MP3dd9/N2C1EcjCYMmXKOOzlv//9b8ZeIRKD8/KDH/zAnUeNhOIIkQpshE0ejMgu3l7SFi1alL53717bKQMSyfCub9myZR32gicjexHJwF7wZCpVquTOy9gnhBChIJERQoSKREYIESoSGSFEqEhkhBChIpERQoSKREYIESoSma+BH5iW0/h4czLuMOLMa3yb8idRWoP7EoWfa3JEZBiYlWzzFx32hRO//794fFh8mr4OnPfFF1+cVRyJIK5g+nMibh8Hg+a+/PLLHE3vucbnV3y5nimcQ978+9//zhX5468rUVrYx7tjlKcP59gTJ06YTXINubGsz1pkuEhGgl5wwQW2fec734n9/t73vmcX60eGhnXhxMvGi3v+u4fvFEwwjSdPnvxaRsXxnNenTx/3/e9//4zPTwX5mC9fPte7d29Lb06BAd51112ufPnyORrvuYR8ZwuWKbYWvPmyC+V53XXXuaZNm5pdnEv8dXEP+e9BKL+LL77YyvPzzz83m+Ga27dv7/r27esqVqzoqlev7nr06OGOHz9+xnkRFud37dp12OHDh+2HF4MzASO+9dZbXf369d1VV13lrr32WnfNNde4q6++2rb169e7O+64wzJg06ZNloE5DYZSq1Yt16pVK/fPf/7ztLeECatZs6Zr06aNpY+01a5d2wxq3759Z/xGMbVEvXr13NatW+3aGTp9tmAMpKdZs2bugw8+cG+99ZbdQGcL14UhkgeUC2VB/n+dcgbyqlChQg57Ic1fN56zhXy/6aabTBgoW29v5N0nn3xyRmVCeVarVs0VL17cbdmyJUfy/etCOV1//fWuZcuWbtWqVZnKCuFo166de/311+1aSftPfvITV7RoUTd79mwrkzfffNM1atTI7dixw8LPVRkB/03azlpkyIgNGzZYpixdutQ1btzYPffcc+6VV15x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";
		base_image.onload = function () {
			ctx.drawImage(base_image, 0, 0,base_image.width, base_image.height);
			InsertText();
		}
		
		function InsertText(){
			ctx.font = "14px Calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0][0],200,58+0*31);
			ctx.fillText(Arr[0][1],200,58+1*31);
			ctx.fillText(Arr[0][2],200,58+2*31);
			ctx.fillText(Arr[0][3],200,58+3*31);
			ctx.fillText(Arr[0][4],200,58+4*31);
			ctx.fillText(Arr[1],200,3+58+5*31);
		}
		
		return 0;
	}
				
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
				
	function GetSoal1(){
		const Aljabar = MyStatistika1();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Tim Bola Basket terdiri dari 5 sisiwa yang memiliki rata-rata berat badan "+ArSisi[0]+" kg. Selisih berat badan terbesar dan terkecil adalah "+ArSisi[1]+" kg. Ada satu orang terberat dan lainnya sama beratnya. Berat badan siswa yang terbesar adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" kg<br>B. "+Ar[1]+" kg<br>C. "+Ar[2]+" kg<br>D. "+Ar[3]+" kg</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(canv){
		const Aljabar = MyStatistika2();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarStatistika2(canv,ArSisi);
		var ss
		
		ss = "Banyak siswa yang memiliki tinggi badan di atas rata-rata adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" anak<br>B. "+Ar[1]+" anak<br>C. "+Ar[2]+" anak<br>D. "+Ar[3]+" anak</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyStatistika3();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarStatistika3(canv,ArSisi);
		var ss
		
		ss = "Jika banyak siswa yang di data "+StringRibuan(ArSisi[1])+" anak, maka banyak siswa yang senang <b><i>"+ArSisi[2]+"</i></b> adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" anak<br>B. "+Ar[1]+" anak<br>C. "+Ar[2]+" anak<br>D. "+Ar[3]+" anak</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyStatistika4();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarStatistika4(canv,ArSisi);
		var ss
		
		ss = "Jika total hasil panen selama 5 tahun adalah "+ArSisi[1]+" ton, maka besar panen pada tahun "+ArSisi[2]+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" ton<br>B. "+Ar[1]+" ton<br>C. "+Ar[2]+" ton<br>D. "+Ar[3]+" ton</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(){
		const Aljabar = MyStatistika5();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Nilai rata-rata dari "+ArSisi[0]+" orang siswa adalah "+ArSisi[1]+". <br>"
		ss += "Jika satu siswa yang mempunyai nilai "+ArSisi[2]+" tidak disertakan dari kelompok tersebut, maka nilai rata-rata yang baru adalah ...";
		
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
	function GetSoal6(){
		const Aljabar = MyStatistika6();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Data berat badan (dalam kg) peserta didik kelas IX A sebagai berikut:<br>"
		ss += ArSisi[0]+"<br>";
		ss += "Berdasarkan data di atas, maka median dari data tersebut adalah ...";
		
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
	function GetSoal7(canv){
		const Aljabar = MyStatistika7();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarStatistika7(canv,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = ""+Nama[0]+" minum 80 mg obat untuk mengendalikan tekanan darahnya. <br>";
		ss += "Grafik di atas memperlihatkan banyaknya obat pada saat itu beserta banyaknya obat dalam darah "+Nama[0]+" setelah satu, dua, tiga, dan empat hari. <br>";
		ss += "Berapa banyak obat yang masih tetap aktif pada akhir hari "+ArSisi[0]+"?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2]; 
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" mg<br>B. "+Ar[1]+" mg<br>C. "+Ar[2]+" mg<br>D. "+Ar[3]+" mg</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MyStatistika8();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarStatistika8(canv,ArSisi);
		var ss
		
		ss = "Selisih Home Run Barry Bond antara tahun "+ArSisi[0]+" dan "+ArSisi[1]+" adalah ...";
		
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
	function GetSoal9(){
		const Aljabar = MyStatistika9();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Delapan bilangan asli memiliki rata-rata "+ArSisi[0]+". Empat dari delapan bilangan tersebut adalah "+ArSisi[1][0]+", "+ArSisi[1][1]+", "+ArSisi[1][2]+", dan "+ArSisi[1][3]+". <br>";
		ss += "Selisih antara bilangan terbesar dan terkecil adalah "+ArSisi[2]+". <br>";
		ss += "Jika kedelapan bilangan diurutkan dari kecil ke besar, maka susunannya adalah ... ";
		
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
	function GetSoal10(){
		const Aljabar = MyStatistika10();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Rata-rata nilai siswa putri "+ArSisi[0]+" dan rata-rata nilai siswa putra "+ArSisi[1]+". <br>";
		ss += "Jika rata-rata seluruh siswa "+ArSisi[2]+", sedangkan jumlah seluruh siswa "+ArSisi[3]+" orang, maka banyak siswa putri adalah ...";
		
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
					GetSoal10];
	
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
	
	
	
	dd1.innerHTML="<p>Bab 17 \u{2192} Statistika </p>";
	if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan tabel</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan tabel</p>";
		cc1.width = 281;
		cc1.height = 230;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Sekolah melakukan pendataan terhadap kegiatan paling disenangi siswa setelah pulang sekolah seperti pada diagram berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Sekolah melakukan pendataan terhadap kegiatan paling disenangi siswa setelah pulang sekolah seperti pada diagram berikut:</p>";
		cc1.width = 370;
		cc1.height = 235;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Hasil panen padi suatu daerah selama 5 tahun tergambar pada diagram berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Hasil panen padi suatu daerah selama 5 tahun tergambar pada diagram berikut:</p>";
		cc1.width = 448;
		cc1.height = 310;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan grafik berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan grafik berikut:</p>";
		cc1.width = 420;
		cc1.height = 310;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Grafik di bawah menunjukkan jumlah Home Run yang dilakukan oleh Barry Bond dari tahun 1993 sampai 2003.</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Grafik di bawah menunjukkan jumlah Home Run yang dilakukan oleh Barry Bond dari tahun 1993 sampai 2003.</p>";
		cc1.width = 420;
		cc1.height = 270;
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
	