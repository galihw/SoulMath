function Print19(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function CariKPK(ar){
		//https://www.ketutrare.com/2019/05/contoh-aplikasi-fpb-dan-kpk-menggunakan-bahasa-c.html
		
		var min = ar[0];
		var max = ar[0];
		for(var i=0;i<ar.length;i++){
			min = Math.min(min,ar[i]);
			max = Math.max(max,ar[i]);
		}
		
		var iter = max;
		var kpk = 1;
		var f = [];
		do {
			iter++;
			ff = 1;
			for(var i=0;i<ar.length;i++){
				f[i] = Mods(iter,ar[i])!=0;
				ff += f[i];
			}
			kpk = iter;
			fakhir = ff==1;
		}while (!fakhir)
		
		return kpk;
	}
	function MyBarisanDeret1(){
		//Un = 3n + 2
		var aa = RandomAngkaAtoB(1,4);
		var bb = RandomAngkaAtoB(1,4);
		
		function UkeN(n,a,b){
			return a*n+b;
		}
		
		var n1 = RandomAngkaAtoB(10,20);
		var n2 = RandomAngkaAtoB(n1,10);
		var Un1 = UkeN(n1,aa,bb);
		var Un2 = UkeN(n2,aa,bb);
		var SigmaN = Un1+Un2;
		
		var Sf = "Un = "+aa+"n + "+bb;
		
		var ArSisi = [Sf,n1,n2];
		
		var benar = SigmaN;
		var salah1 = SigmaN-1;
		var salah2 = SigmaN-2;
		var salah3 = SigmaN+1;
		var salah4 = SigmaN+2;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret2(){
		var aa = 4;
		var bb = 3;
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var nn = RandomAngkaAtoB(40,20);
		var Un = UkeN(nn,aa,bb);
		
		var ArSisi = [nn];
		
		var benar = Un;
		var salah1 = Un+bb;
		var salah2 = Un+bb*2;
		var salah3 = Un-bb;
		var salah4 = Un-bb*2;
		var arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret3(){
		//Un = 3n + 2
		var aa = RandomAngkaAtoB(1,4);
		var bb = RandomAngkaAtoB(1,4);
		
		function UkeN(n,a,b){
			return a*n+b;
		}
		
		var n1 = RandomAngkaAtoB(10,20);
		var n2 = RandomAngkaAtoB(n1,10);
		var Un1 = UkeN(n1,aa,bb);
		var Un2 = UkeN(n2,aa,bb);
		var SigmaN = Un1+Un2;
		var Sf = "Un = "+aa+"n + "+bb;
		
		var ArD1 = [];
		var ArD2 = [];
		for(var i=1;i<=9;i++){
			var un = UkeN(i,aa,bb);
			if(i<=6)	ArD1.push(un);
			else		ArD2.push(un);
		}
		
		var ArSisi = [ArD1];
		
		var benar = (ArD2[0])+", "+(ArD2[1])+", "+(ArD2[2]);
		var salah1 = (ArD2[0]+1)+", "+(ArD2[1]+1)+", "+(ArD2[2]+1);
		var salah2 = (ArD2[0]-1)+", "+(ArD2[1]-1)+", "+(ArD2[2]-1);
		var salah3 = (ArD2[0]-bb)+", "+(ArD2[1]-bb)+", "+(ArD2[2]-bb);
		var salah4 = (ArD2[0]+bb)+", "+(ArD2[1]+bb)+", "+(ArD2[2]+bb);
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret4(){
		//Jumlah bilangan kelipatan 2 dan 3 antara 200 dan 400 adalah ...
		var ArPrima = [2,3,5,7,11,13,17];
		var ct = RandomAngkaAtoB(0,3);
		var nn1 = ArPrima[ct];
		var nn2 = ArPrima[ct+1];
		var aa = 100*RandomAngkaAtoB(1,3);
		var bb = aa+100*RandomAngkaAtoB(1,2);
		
		function JumlahKelipatanN1N2AntaraA1A2(n1,n2,a1,a2){
			var nn = a1;
			var sum = 0;
			do{
				nn+=1;
				if(Mods(nn,n1*n2)==0 && nn!==a2){ 
					sum+=nn;
				}
			}while(nn<a2);
			return sum;
		}
		
		var MySum = JumlahKelipatanN1N2AntaraA1A2(nn1,nn2,aa,bb);
		
		var ArSisi = [nn1,nn2,aa,bb];
		
		var benar = MySum;
		var salah1 = MySum+nn1*nn2;
		var salah2 = MySum-nn1*nn2;
		var salah3 = MySum+2*nn1*nn2;
		var salah4 = MySum-2*nn1*nn2;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret5(){
		//Un = 3n + 2
		var aa = RandomAngkaAtoB(10,4);
		var bb = RandomAngkaAtoB(1,7);
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var nn = RandomAngkaAtoB(10,20);
		
		var ArD1 = [];
		for(var i=1;i<=6;i++){
			var un = UkeN(i,aa,bb);
			ArD1.push(un);
		}
		
		var UnFix = UkeN(nn,aa,bb)
		var ArSisi = [ArD1,nn];
		
		var benar = UnFix;
		var salah1 = UnFix+bb;
		var salah2 = UnFix+2*bb;
		var salah3 = UnFix-2*bb;
		var salah4 = UnFix-bb;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret6(){
		//Jumlah bilangan kelipatan 2 dan 3 antara 200 dan 400 adalah ...
		var ArPrima = [2,3,5,7,11,13,17];
		var ct = RandomAngkaAtoB(0,3);
		var nn1 = ArPrima[ct];
		var nn2 = ArPrima[ct+1];
		var aa = 100*RandomAngkaAtoB(1,3);
		var bb = aa+100*RandomAngkaAtoB(1,2);
		
		function JumlahKelipatanN1N2AntaraA1A2(n1,n2,a1,a2){
			var nn = a1;
			var sum = 0;
			do{
				nn+=1;
				if(Mods(nn,n2)==0 && Mods(nn,n1)!==0 && nn!==a2){ 
					sum+=nn;
				}
			}while(nn<a2);
			return sum;
		}
		
		var MySum = JumlahKelipatanN1N2AntaraA1A2(nn1,nn2,aa,bb);
		
		var ArSisi = [aa,bb,nn2,nn1];
		
		var benar = MySum;
		var salah1 = MySum+nn1*nn2;
		var salah2 = MySum-nn1*nn2;
		var salah3 = MySum+2*nn1*nn2;
		var salah4 = MySum-2*nn1*nn2;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret7(){
		var ArrPakai = [0,1,2,3,4,5,6,7,8,9];
		ArrPakai = RandomMyArray(ArrPakai);
		
		var KelArr = [[0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7],[5,6,7,8],[6,7,8,9]];
		var noKel = RandomAngkaAtoB(-1,7);
		var noFunc = KelArr[noKel][0]+RandomAngkaAtoB(-1,4);
		
		function UkeN0(n){	return n*(n-2);}
		function UkeN1(n){	return n*(n-2)/2;}
		function UkeN2(n){	return n*(n-1);}
		function UkeN3(n){	return n*(n-1)/2;}
		function UkeN4(n){	return n*(n);}
		function UkeN5(n){	return n*(n)/2;}
		function UkeN6(n){	return n*(n+1);}
		function UkeN7(n){	return n*(n+1)/2;}
		function UkeN8(n){	return n*(n+2);}
		function UkeN9(n){	return n*(n+2)/2;}
		
		var ArFunc = [UkeN0,UkeN1,UkeN2,UkeN3,UkeN4,UkeN5,UkeN6,UkeN7,UkeN8,UkeN9];
		
		var strSoal = "";
		for(var i=1;i<=6;i++){
			strSoal+=ArFunc[noFunc](i);
			if(i<6) strSoal+=", "
		}
		
		var strLong = "Suku ke-n dari barisan "+strSoal+", ... adalah ..."
		var ArSisi = [noKel,strLong,noFunc-noKel,noFunc];
		var benar = 1;
		var salah1 = 2;
		var salah2 = 3;
		var salah3 = 4;
		var salah4 = 5;
		var arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret8(){
		
		var ArrPakai = [0,1,2,3,4,5,6,7,8,9];
		ArrPakai = RandomMyArray(ArrPakai);
		
		var KelArr = [[0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7]];//,[5,6,7,8],[6,7,8,9]];
		var noKel = RandomAngkaAtoB(-1,5);
		var noFunc = KelArr[noKel][0]+RandomAngkaAtoB(-1,4);
		
		function UkeN0(n){	return 2*n-2;}
		function UkeN1(n){	return 2*n-1;}
		function UkeN2(n){	return 2*n+1;}
		function UkeN3(n){	return 2*n+2;}
		function UkeN4(n){	return 3*n-2;}
		function UkeN5(n){	return 3*n-1;}
		function UkeN6(n){	return 3*n+1;}
		function UkeN7(n){	return 3*n+2;}
		function UkeN8(n){	return n*n-1;}
		function UkeN9(n){	return n*n+1;}
		
		var ArFunc = [UkeN0,UkeN1,UkeN2,UkeN3,UkeN4,UkeN5,UkeN6,UkeN7,UkeN8,UkeN9];
		//console.log(KelArr[noKel][0]+"   "+(noFunc-KelArr[noKel][0]));
		//console.log("noFunc : "+noFunc)
		//console.log("ArFunc : "+ArFunc[noFunc])
		var strSoal = "";
		for(var i=1;i<=6;i++){
			strSoal+=ArFunc[noFunc](i);
			if(i<6) strSoal+=", "
		}
		
		var U3 = ArFunc[noFunc](3);
		var U7 = ArFunc[noFunc](7);
		var b = (U7-U3)/4
		
		var strLong = "Dari suatu barisan aritmatika diketahui U\u{2083} = "+U3+" dan U\u{2087} = "+U7+".";//+", dan b = "+b+". "
		var strLong2 = "Rumus suku ke-n barisan bilangan tersebut adalah ..."
		var ArSisi = [noKel,strLong,strLong2,noFunc-noKel,noFunc];
		
		var benar = 1;
		var salah1 = 2;
		var salah2 = 3;
		var salah3 = 4;
		var salah4 = 5;
		var arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret9(){
		//ss = "9. Bilangan-bilangan disusun dan dikelompokkan menurut pola:<br>";
		//ss += "(2,6), (3,7),(4,8),(5,9), ... dan seterusnya.<br>";
		//ss += "Bilangan pada kelompok ke-62 adalah ...	";
		var aa = RandomAngkaAtoB(10,4);
		var bb = RandomAngkaAtoB(1,7);
		var cc = RandomAngkaAtoB(1,7);
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var ArD1 = [];
		var ArD2 = [];
		for(var i=1;i<=6;i++){
			var un = UkeN(i,aa,bb);
			ArD1.push(un);
			ArD2.push(un+cc);
		}
		
		var ArSoal = "";
		for(var i=0;i<ArD1.length;i++){
			if(i>0) ArSoal += ",";
			ArSoal+="("+ArD1[i]+", "+ArD2[i]+")";
		}
		
		var nn = RandomAngkaAtoB(10,20);
		var unA = UkeN(nn,aa,bb);
		var unB = unA+cc;
		
		var UnFix = UkeN(nn,aa,bb)
		var ArSisi = [ArSoal,nn];
		
		var benar = "("+(unA)+", "+(unB)+")";
		var salah1 = "("+(unA+1)+", "+(unB+1)+")";
		var salah2 = "("+(unA-1)+", "+(unB-1)+")";
		var salah3 = "("+(unA)+", "+(unB-1)+")";
		var salah4 = "("+(unA)+", "+(unB+1)+")";
		var salah5 = "("+(unA+1)+", "+(unB)+")";
		var salah6 = "("+(unA-1)+", "+(unB)+")";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret10(){
		var aa = 1;
		var bb = 4;
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var nn = RandomAngkaAtoB(40,20);
		var Un = UkeN(nn,aa,bb);
		
		var ArSisi = [nn];
		
		var benar = Un;
		var salah1 = Un+bb;
		var salah2 = Un+bb*2;
		var salah3 = Un-bb;
		var salah4 = Un-bb*2;
		var arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret11(){
		//ss = "11. Suku "+ArSisi[0]+" dan "+ArSisi[1]+" suatu barisan geometri berturut-turut "+ArSisi[2]+" dan "+ArSisi[3]+". <br>"
		//ss += "Suku ke-"+ArSisi[4]+" barisan tersebut adalah ... ";
		var aa = RandomAngkaAtoB(1,4);
		var rr = RandomAngkaAtoB(1,2);
		
		function UkeN(n,a,r){
			return a*r**(n-1);
		}
		
		var nn1 = RandomAngkaAtoB(1,2);
		var nn2 = RandomAngkaAtoB(nn1,4);
		var nn3 = RandomAngkaAtoB(nn2,2);
		
		var Un1 = UkeN(nn1,aa,rr);
		var Un2 = UkeN(nn2,aa,rr);
		var Un3 = UkeN(nn3,aa,rr);
		
		var TeksNumber = ["pertama","kedua","ketiga","keempat","kelima","keenam","ketujuh","kedelapan","kesembilan","kesepuluh"]
		var ke1 = TeksNumber[nn1-1];
		var ke2 = TeksNumber[nn2-1];
		
		var ArSisi = [ke1,ke2,Un1,Un2,nn3];
		
		var benar = Un3;
		var salah1 = Un3*rr;
		var salah2 = Un3*rr*rr;
		var salah3 = Un3*1/rr*1/rr;
		var salah4 = Un3*1/rr;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret12(){
		//ss = "11. Suku "+ArSisi[0]+" dan "+ArSisi[1]+" suatu barisan geometri berturut-turut "+ArSisi[2]+" dan "+ArSisi[3]+". <br>"
		//ss += "Suku ke-"+ArSisi[4]+" barisan tersebut adalah ... ";
		var aa = RandomAngkaAtoB(1,4);
		var rr = RandomAngkaAtoB(1,2);
		
		function UkeN(n,a,r){
			return a*r**(n-1);
		}
		
		var nn1 = 1;
		var nn2 = 5;
		
		var sum = 0;
		for(var i=1;i<=5;i++){
			sum += UkeN(i,aa,rr);
		}
		
		var Un1 = UkeN(nn1,aa,rr);
		var Un2 = UkeN(nn2,aa,rr);
		var ArSisi = [Un1,Un2];
		
		var benar = sum;
		var salah1 = sum+UkeN(6,aa,rr);
		var salah2 = sum+UkeN(6,aa,rr)+UkeN(7,aa,rr);;
		var salah3 = sum-UkeN(5,aa,rr);
		var salah4 = sum-UkeN(4,aa,rr)-UkeN(5,aa,rr);
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret13(){
		//ss = "11. Suku "+ArSisi[0]+" dan "+ArSisi[1]+" suatu barisan geometri berturut-turut "+ArSisi[2]+" dan "+ArSisi[3]+". <br>"
		//ss += "Suku ke-"+ArSisi[4]+" barisan tersebut adalah ... ";
		var aa = RandomAngkaAtoB(1,4);
		var bb = RandomAngkaAtoB(1,3);
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var nn1 = 1;
		var nn2 = 2;
		var nn3 = 10*RandomAngkaAtoB(0,3);
		
		var Un1 = UkeN(nn1,aa,bb);
		var Un2 = UkeN(nn2,aa,bb);
		var Un3 = UkeN(nn3,aa,bb);
		
		var sum = 0;
		for(var i=1;i<=nn3;i++){
			sum += UkeN(i,aa,bb);
		}
		
		var ArSisi = [Un1,Un2,nn3,bb];
		
		var benar = sum;
		var salah1 = sum+bb;
		var salah2 = sum+2*bb;
		var salah3 = sum-bb;
		var salah4 = sum-2*bb;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret14(){
		var ArrPakai = [0,1,2,3,4,5,6,7,8,9];
		ArrPakai = RandomMyArray(ArrPakai);
		
		var KelArr = [[0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7],[5,6,7,8],[6,7,8,9],[7,8,9,10]];
		var noKel = RandomAngkaAtoB(-1,7);
		var noFunc = KelArr[noKel][0]+RandomAngkaAtoB(-1,4);
		
		function UkeN0(n){	if(n-5<0)return "1"+"/"+2**(5-n);else return 2**(n-5);}
		function UkeN1(n){	if(n-4<0)return "1"+"/"+2**(4-n);else return 2**(n-4);}
		function UkeN2(n){	if(n-3<0)return "1"+"/"+2**(3-n);else return 2**(n-3);}
		function UkeN3(n){	if(n-2<0)return "1"+"/"+2**(2-n);else return 2**(n-2);}
		function UkeN4(n){	if(n-1<0)return "1"+"/"+2**(1-n);else return 2**(n-1);}
		function UkeN5(n){	return 2**(n-0);}
		function UkeN6(n){	return 2**(n+1);}
		function UkeN7(n){	return 2**(n+2);}
		function UkeN8(n){	return 2**(n+3);}
		function UkeN9(n){	return 2**(n+4);}
		function UkeN10(n){	return 2**(n+5);}
		
		var ArFunc = [UkeN0,UkeN1,UkeN2,UkeN3,UkeN4,UkeN5,UkeN6,UkeN7,UkeN8,UkeN9,UkeN10];
		
		var strSoal = "";
		for(var i=1;i<=6;i++){
			strSoal+=ArFunc[noFunc](i);
			if(i<6) strSoal+=", "
		}
		
		var strLong = "Rumus suku ke-n dari barisan bilangan : "+strSoal+", ... adalah ..."
		
		var ArSisi = [noKel,strLong,noFunc-noKel,noFunc];
		
		//"(\u0006"
		var benar = 1;
		var salah1 = 2;
		var salah2 = 3;
		var salah3 = 4;
		var salah4 = 5;
		var arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret15(){
		//ss = "15. Bakteri akan membelah diri menjadi dua setiap "+ArSisi[0]+" menit. <br>"
		//ss += "Jika mula-mula ada "+ArSisi[1]+" bakteri, maka banyaknya bakteri selama "+ArSisi[2]+" jam adalah ..."
			
		var aa = RandomAngkaAtoB(0,6);
		var rr = 2;
		var ArMenit = [30];
		ArMenit = RandomMyArray(ArMenit);
		var Jam = RandomAngkaAtoB(1,4);
		var nn = Jam*60/ArMenit[0];
		
		function UkeN(n,a,r){
			return a*r**n;
		}
		
		var Un = UkeN(nn,aa,rr);
		var ArSisi = [ArMenit[0],aa,Jam];
		
		var benar = Un;
		var salah1 = Un*rr;
		var salah2 = Un*rr*rr;
		var salah3 = Un*1/rr*1/rr;
		var salah4 = Un*1/rr;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret16(){
		//16. Diketahui Un = 2n² – 5. Nilai dari U4 + U5 adalah ...
		var aa = RandomAngkaAtoB(1,6);
		var bb = RandomAngkaAtoB(1,6);
		var StrUn = "Un = "+aa+"n\u{00B2} \u{2212} "+bb;
		
		function UkeN(n,a,b){
			return a*n**2 - b;
		}
		
		var U4 = UkeN(4,aa,bb);
		var U5 = UkeN(5,aa,bb);
		var S45 = U4+U5;
		
		var ArSisi = [StrUn];
		
		var benar = S45;
		var salah1 = S45-bb;
		var salah2 = S45+bb;
		var salah3 = S45-bb*2;
		var salah4 = S45+bb*2;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret17(){
		//ss = "11. Suku "+ArSisi[0]+" dan "+ArSisi[1]+" suatu barisan geometri berturut-turut "+ArSisi[2]+" dan "+ArSisi[3]+". <br>"
		//ss += "Suku ke-"+ArSisi[4]+" barisan tersebut adalah ... ";
		var aa = 1;
		var bb = RandomAngkaAtoB(1,4);
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var nn = RandomAngkaAtoB(9,7);
		var sum = 0;
		for(var i=1;i<=nn;i++){
			sum += UkeN(i,aa,bb);
		}
		var Unn = UkeN(nn,aa,bb);
		var ArSisi = [sum,bb];
		
		var benar = Unn;
		var salah1 = Unn+1;
		var salah2 = Unn+2;
		var salah3 = Unn-1;
		var salah4 = Unn-2;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret18(){
		//18. Dari barisan geometri diketahui bahwa U3 = 4, U8 = 256, maka U12 adalah ...
		var aa = RandomAngkaAtoB(0,2);
		var rr = RandomAngkaAtoB(1,2);
		
		function UkeN(n,a,r){
			return a*r**(n-1);
		}
		
		var nn1 = RandomAngkaAtoB(0,2);
		var nn2 = RandomAngkaAtoB(nn1+1,4);
		var nn3 = RandomAngkaAtoB(nn2,4);
		
		var Un1 = UkeN(nn1,aa,rr);
		var Un2 = UkeN(nn2,aa,rr);
		var Un3 = UkeN(nn3,aa,rr);
		
		var TeksNumber = [
							"\u{2080}",
							"\u{2081}",
							"\u{2082}",
							"\u{2083}",
							"\u{2084}",
							"\u{2085}",
							"\u{2086}",
							"\u{2087}",
							"\u{2088}",
							"\u{2089}",
							"\u{2081}\u{2080}",
							"\u{2081}\u{2081}",
							"\u{2081}\u{2082}",
							"\u{2081}\u{2083}",
							"\u{2081}\u{2084}",
							"\u{2081}\u{2085}",
							"\u{2081}\u{2086}",
							"\u{2081}\u{2087}",
							"\u{2081}\u{2088}",
							"\u{2081}\u{2089}",
							"\u{2082}\u{2080}"
							];
		
		var ke1 = TeksNumber[nn1];
		var ke2 = TeksNumber[nn2];
		var ke3 = TeksNumber[nn3];
		
		var ArSisi = [ke1,Un1,ke2,Un2,ke3];
		
		var benar = Un3;
		var salah1 = Un3*rr;
		var salah2 = Un3*rr*rr;
		var salah3 = Un3*1/rr*1/rr;
		var salah4 = Un3*1/rr;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret19(){
		//19. Diketahui deret aritmatika dengan nilai suku ke-6 adalah 35 dan suku ke-9 adalah 26. 
		//Jumlah 25 suku pertama deret aritmatika tersebut adalah ...
		var aa = RandomAngkaAtoB(1,9);
		var bb = RandomAngkaAtoB(1,9);
		
		function UkeN(n,a,b){
			return a+(n-1)*b;
		}
		
		var nn1 = RandomAngkaAtoB(4,2);
		var nn2 = RandomAngkaAtoB(7,5);
		var nn3 = RandomAngkaAtoB(20,10);
		var Un1 = UkeN(nn1,aa,bb);
		var Un2 = UkeN(nn2,aa,bb);
		
		var sum = 0;
		for(var i=1;i<=nn3;i++){
			sum += UkeN(i,aa,bb);
		}
		
		var ArSisi = [nn1,Un1,nn2,Un2,nn3];
		
		var benar = sum;
		var salah1 = sum+bb;
		var salah2 = sum+2*bb;
		var salah3 = sum-bb;
		var salah4 = sum-2*bb;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyBarisanDeret20(){
		//ss = "20. Peneliti A dan B mengembangbiakkan masing-masing "+ArSisi[0]+" amuba. <br>"
		//ss += "Amuba peneliti A mampu membelah diri menjadi dua setiap "+ArSisi[1]+" menit. <br>"
		//ss += "Sedangkan amuba peneliti B membelah diri menjadi dua setiap "+ArSisi[2]+" menit. <br>"
		//ss += "Amuba peneliti A saat ini menjadi "+ArSisi[3]+". <br>"
		//ss += "peneliti B akan memiliki amuba saat ini sebanyak ...";
			
		var aa = RandomAngkaAtoB(1,9);
		var rr = 2;
		var ArMenit = [5,10,15,20,25,30];
		ArMenit = RandomMyArray(ArMenit);
		var KPK = CariKPK([ArMenit[0],ArMenit[1]]);
		var menit12 = RandomAngkaAtoB(1,0)*KPK;
		var nn1 = menit12/ArMenit[0];
		var nn2 = menit12/ArMenit[1];
		
		function UkeN(n,a,r){
			return a*r**n;
		}
		
		var Un1 = UkeN(nn1,aa,rr);
		var Un2 = UkeN(nn2,aa,rr);
		
		var ArSisi = [aa,ArMenit[0],ArMenit[1],Un1];
		
		var benar = Un2;
		var salah1 = Un2*rr;
		var salah2 = Un2*rr*rr;
		var salah3 = Un2*1/rr*1/rr;
		var salah4 = Un2*1/rr;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
			
			
	function GambarBarisanDeret14(nmcanvas,arrs){
		
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		// menambahkan image pada canvas //
		let a_image = new Image();
		let b_image = new Image();
		let c_image = new Image();
		let d_image = new Image();
		let e_image = new Image();
		let f_image = new Image();
		let g_image = new Image();
		let h_image = new Image();
		let i_image = new Image();
		let j_image = new Image();
		let k_image = new Image();
		
		var arrimg = [a_image,b_image,c_image,d_image,e_image,f_image,g_image,h_image,i_image,j_image];
		var arrsrc = [
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////9fX11dXV4ODfmpmZKyopbm5tSklIpqal6+vqvr6+i4uKXVxbysrKs7KyfX1858VFwwAAAdhJREFUeJxjZKABYBw1dNRQ0vUpAgm+C9Q1lCUQSHAvoK6hbIH8DAy3DlDZ0KAVuCUHylCjez+l7lLb0NS9zh9Yl1Hb0IDlnB+qDdAMDT3Ofp0SQz+cfhyU7YBmqD8Dg3IHBYa+W8vwNHsDNMEDwT0g5vMQ4H+AbhMphko3MKhqAw1lCoYInH4ApjhjPuMIV2IN1V3HwMCcDBHQKoDQ4g4rKTcUHXB7rSbRUDvNd+zP9+I1lCWQREPV9EHkHH58hvIELCHJUD53MMW+5QMOQyfmMzAs3YqeJfAbyuErv+bhsnUM0QE4DG01zWhZT2KS4stpA8odmcCyHIehS4FJjG3rB5IMhQBVA85FDAxuXQYM007PR5XifFQ9Y1IBDn14DeXxZFuKTx4XwGsomz/jKhoYyrWQBoYy4yk1yTSUNQCjcKbc0KsNoCRFZUNTP8wWoLahwPITWnRS0VBxu/9ryDETr6FbF8j0U9tQLm+G2zhaYOQberWBvASFz1DmIHDBR11DTRXIK03wGUqBQ3EbKmPJjqMGIt9QYKmfY09tQ3k8wZUedQ3duoC8sgSfocB+ApkJH4+hUw9AGbhqYXIMVYW1cX9voJ6h4nZQBjVdShkYNXTU0FFDqQkAfD95PcLAmXAAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////1dXV4ODfmpmZKyopbm5tfX18vr6+XVxb9fX16+vqi4uKysrKpqals7KySklI2zFyUwAAAclJREFUeJxjZKABYBw1dNRQsrQKvqO+oSYCZz5Q21AmJwbqG8rq+I/6hpbwHqbAUMX8Kg7MKOG0PmtMgaEhe50/MO9EF2X22OZMiaEJU3g+1Digiaqo7qDI0A9nPjnZNKCL1hhSZOi7fQxPYg4Ag5EDIvAeiNk9NjJSZGiNAYOIDtBQRmeIAMisKWv3U26o7n5gcg+GCHgnALOTzgLqGIoEuKx0F/Cqzd2fQJqhTDer/uU64DIUGhI8G0gydO5yEDlHAZdLvYEp9Y2jtwEphvJYgCn2rTgMhbiWxDDlNWfp9J4xgaHHgJqG2oUmgAo31u1UNJRzegKQLLkAyvOm3Q4MS7csx1DD5Q1KWyQYCgH8pv/34pPHBfAaymrPuHuoGMq5meqG8ptybaK6oSoK//ZR3dAtEzDKZooN5bJi0JlAbUPJjXy8hj5JYNtGbUOBWZ883+MzVEUBXPJR1VDO6gPkxT0+Q2esYfEooLKhQIe6lpNnJm5D2ewYfMh0KG5Dt0wgL4viM5TbkuHOA2obWnLhL2atRKGh7LbkJnw8hk7ZwCAIZty+QD1DRWBNjz8HqGfokgU0MJSLHcroT6CeoZSBUUNHDR2xhgIA2SCMPUFiJqYAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////vr6+fX18KyopSklIi4uK6+vqXVxb4ODfysrKbm5tpqal1dXV9fX1mpmZs7KyxhB7BwAAAcZJREFUeJxjZKABYBw1dNTQQWKokCKj0ioqG8quAyR8G6hrKHPY8tRzuQnUNRQEFvdeoL6hm2vJN3Sx1vP6rzewSDz2pcDQAAesccKr9vYB+YZO6ApSwdTPy66gs4B8Q/vOY/Fp8AOGXcI4dBBjqK0Cw+FcoKE86hABcFAADWVXo8ClvAEMh0tPoBnKwNC3lPkUZYZWHsGUmDz/HImGcqz9yvKoAK+h7DpnSTP0dgSI3CtATUM5tcAU02l8hjavJ8373BosrbxdDxhqA3AYut2R42ISJxab8Bmqpb2AgUObgeswDkM/OwCJux9IMpQ3eAGQFFb4dx5oqK8AQ/NmtNTD432HZb0Uds34kxSLPvchfPK4AF5DuTTZjw0VQzmOUt1QFn2eg1Q3tHkD6wmqGxr8wHYCtQ1l08WZvMk3lNzIx2voZwdcpTD5hgKzPnm+x2do8wZwyUdVQ3nTDpAX9/gMvR7DMtOAyoYCHerVTJ6ZuA1lMmSYS6ZDcRsa/IC8LIrPUFY9nO1k8g0VVsBVq5FvKKMRuQkfj6GXExjKwQwzBeoZergAyviLo7FMjqHJMLOoaSgbrMybsoB6hlIGRg0dNXTEGgoAZHSEPZ2jxgUAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////6+vqvr6+i4uKbm5tysrKmpmZKyopXVxb9fX1SklI1dXVpqal4ODffX18s7KyhMIOFgAAAfVJREFUeJxjZKABYBw1dNRQ0oGQEj/vBiobylYI1CtRQF1D2edvPet/8gB1DWX8z8A571Q/dQ0FgeNbWsk2NCXn8ezV7FQ21J1XGXucpIs1k2+owbnKnTsvYEos/5lAvqE6vQzPOydgiPNnrHxAvqEzFRjCJYGG8ppDBM58AFPX5/bg0EGMoZUODNt3AVMPdw5EwDIARHLWvcKRoog29Agwojk3QQRcweSM+5EGJBu6Sern6QIUQ1EAZ90XHAkKt6Hcd4CByB5kgNNQlmJc0YTTUF4rsNd+9+E01Ny6D5eZuAzlyWa4WvXwAsPNDTgMZS7B7VCchuatvw5MiAyaCTgM3X7gLJDcQ5KhvMIgdxzf8K8baugxtBy5/QCI7CTJUAiY/oC1hYHh9tYCBu6lAahS3OBS35UMQ1mK/+LKNHjBQBj6v4vqhnLkg8KUyoaKJ7DgzIpkG3p8AyidUtdQzjwGTwdqG8pWyCyGo7lAvqHbD5AXpPgMBfr+5QJqGzrjPmMHWWbiM/T5BKZ2ahvKXMKAsxIi21BzBzYcDRDyDQWW/eQ6FLeh6gG/cVdCZBrKVMqApxIi09DrCzgayTUTZx2VxYCtnUeZoVy5DKFgRguuHggZhkIqSyD4idmEJNvQ6wtoYCjTKSiDmt6nDIwaOmroqKHUBAAlno89JiHacQAAAABJRU5ErkJggg==",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////4ODffX18bm5t6+vqpqalKyop1dXVXVxbysrKmpmZ9fX1i4uKs7KySklIvr6+AOBGeAAAAbRJREFUeJxjZKABYBw1dNRQcnQqyR6guqFhAlwTqG2ohxwD1Q3ljP3DQnVDWVN911Ni6OLcnG0rVdH12R+Pp8RQs9jLDEweAejC7JQZanDZ8kuUA5UNNZvCoGa1gMqGvnrAMO0U0FBGI4gA7wEqGCq1gaHs3RyQMRABiGFUMPTjTAYG7hyIQCcD2YayFLO0ohqKCsgwlPv4FAYGdeUAahrK7S0AoqrlqWkoayLD36t6DAyrPlDV0GRzBicVhlMXcBjKrsOqJ7v+HEmGcu62AZJqDr/nQw19PR9VAW8kiJxFkqEQ4KbwfzYDg/jMAAb2TDSvgpPXr34yDGVO/jMPnzwuQMDQv3NpYCjbFBoYCgpTKhu6bQPzdKob+q2AdSrVDX3WgFngU2ooMIHfOkBtQ90U2CeTYyZeQ9segLI+dQ3liWLwwqiYKTU0TOD3fNyy5BnKH87QJUBtQ78VcE4kz0zchnLGku1Q3IaKBZBXmOAzlDGVgbzchM/QbRvIdyjOKrr6gWoptQ1lTmYwfABinDxAPUPFYFnp1wLqGVr2gQaG8qhDGbkJ1DOUMjBq6Kiho4ZSEwAAZkF8PRnX8poAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACpQTFRF////1tbWpqalubi4bm5tKyop/f39i4uKXVxbmpmZSklIfX187u7uysrKp5I5/QAAAUlJREFUeJxjZKABYBw1dNTQUUOHgaFC7xiV7lLbUFfZzwxMK6ltqMOVi9qnH1DZUOEVDK3SCVQ21LqBQdR6A5UNvf2AIfU1LQz9uIo6hqb9WkBtQ62lGBj0aqlrqKoBiPROoKahTMEM/7/wMjCspq6h6i0M3F4Mrw9Q0VCelAlAcuuC3xuoHPsMDKwBf9eBChSgy+UeUMtQlkC2pSSYRayh/9fQwFDSijwiDQWFKZUNZQ1gX0J1Q0UdfpNSOBFn6NIN0hOobShzEDibUtdQ1oB/a6luaOsFUNanrqHsfmT6Hp+hqgbkxT0+QxlDGHZ/oLahog5/1pNnJm5DeTzJdihuQ1kDyCtM8BoaykBebsJnKCUOxWlo6wXtBmobyhLI0Aj2/SwqGsoaAGWQlf5xGJoKS03UNJTdFsrwKaCeoZSBUUNHDR01lJoAAC/cZT0wzW3CAAAAAElFTkSuQmCC",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////4ODf1dXV9fX1fX18KyopysrKmpmZpqal6+vqs7Kyi4uKbm5tvr6+XVxbSklIRro9jQAAAbBJREFUeJxjZKABYBw1dNgbKvSO+oaaKJ5+QG1D2fwZqGao4HsIzVz0gHqGhq6G0By+hucpMVRI7qbEfXRDudZ7BlNi6NHYxRM4FqMZysDARJmhH1amT+BeQGVDJ5x+GNKtQGVDe9YzLF29AWSOAoPxWYZ/D6hh6O4GBlVtkKGqBiD+n/XUMlR3HZA1x4Chs5zhuy1VDWWgNEyltrZxCvdT11AdTRD5bi81DeXyBlOcly5Q0VAO30Waj++UMUQH4DCUWZ5D27f+PnbduFz6mRmo8VEBy3I0Q132IHtlNXbdeGNf1YB1GQNDzZMFDHPUbVGlmE4BiR82ZBjK5862FJ88LoDXUB5P9iU0MPT/GhoYyryC6oayBsALZ+oZmvoBlKSobOjRCa8PUNtQpmDctTDZhtqLMa0kx0y8hm5dMI+X2obyejDs/kBtQ1M/kJeg8BnKGAIu+KhrqKgDeaUJPkMpcChuQ+3EOReRaSZOQ4Glfp8stQ3lcwdXetQ1dOsC8soSfIay+5Gb8PEYOvUAlAFrQlLDUEj7Dgh+b6CeofZiUAY1XUoZGDV01NBRQwe9oQD/OZo9KurMeQAAAABJRU5ErkJggg==",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////6+vq1dXVi4uKSklIKyopXVxbysrKbm5tvr6+4ODf9fX1pqalfX18s7KympmZrtnqJQAAAe5JREFUeJxjZKABYBw1dNTQwWKoEP99ahvKaKzIIDSTyoayBgjfFbAuoI6hq8IgNPOMVE6f3xuoY2joagTbVHYd2YYu4gvUvIbN0KO95BvaOjf5Astyahu6QVH/gvQETEOvti0l39ALp195cy/AMJQx5PYF8g29uozhaTYoopkUGIzPMvx7ABHn8N39gXxDrR0YVLVBhqoagPisyyDiR2cuwqGDWEN1QXEiUcBw1piBuRQszOmDy/ekGcqAHKZT963FpQOnoeuuXWRcwobbUE4fsamkGqqhCyLbVHEaunRjVACJhvK5Q2RBGrEayuWN26G4DOXx/HXxdedBBlBcYDVU1EEWmB7ukeZS6+0MDNxRH/6sRzP0rjKEhqSu1dh14419VQNOYFL8UTGBQaK4FFVKAlyUVpBhKJv/P5zJBh/AayiHL/MKGhjKsZgGhrIvobqhrAHwwpl6hpY+ACUpKhvaeqHagNqGMgUznH5AbUO3LORaSI6ZeA01Vfi2ldqGcvoweCdQ29DSB+QlKHyGcnkz4KyEyDZ06QbyShN8hlLgUNyGbpvPuIpMM3EaCiz18VRCZBrK5s+Iu7Yk11BTBfLKEnyG8ruRm/DxGCrqAGXAmpDUMFQVVuTh6iuQY+gWWPFETZdSBkYNHTV0xBoKANwIjT2BFHiHAAAAAElFTkSuQmCC",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////vr6+fX18KyopSklIi4uK6+vqXVxb4ODfysrKbm5tpqal1dXV9fX1mpmZs7KyxhB7BwAAAdFJREFUeJxjZKABYBw1dNTQUUNJBEKKjEqrqGwouw6Q8G2grqHMYctTz+UmUMdQ47MI9uLeC9Q3dHMt+YYu1npe//UGFkMf+1JgaIADIk6QDOVVe/uAfEMndAWpwPQjDOVlV9BZQL6hfecRPoUbGvyAYZcwDh3EGGqrwHA4F2Ro8wYQn/kU1FB2NQpcyhvAcLj0BJqhDAx9S2Escg2tPALhIMf+5PnnSDSUY+1XlkcFeA1l1zmLTSduQ29HgMi9AtQ0lFMLTDGdxmdo83rSvM+twdLK2/WAoTYAh6HbHTkuJnEeIc1QLe0FDBzaDFyHcRj62QFI3P1AkqG8wQuApLDCv/NAQ30FGJo3o6UeHu87LOulsGvGn6RY9LkP4ZPHBfAayqXJfmyoGMpxlOqGsujzHKS6oc0bWE9Q3dDgB7YTqG0omy7O5E2+oeRGPl5DPzvgKoXJNxSY9cnzPT5DmzeASz6qGsqbdoC8uMdn6PUYlpkGVDYU6FCvZvLMxG0okyHDXDIditvQ4AfkZVF8hrLq4Wwnk2+osAKuWo18QxmNyE34eAy9nMBQDmaYKVDP0MMFUMZfHI1lcgxNhplFTUPZYGXelAXUM5QyMGroqKFUBgBhJJI98XjG9AAAAABJRU5ErkJggg==",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBQTFRF////vr6+Kyop4ODf9fX11dXVi4uKXVxbysrKbm5tpqalSklIfX18s7KympmZ6+vq7NS00AAAAblJREFUeJxjZKABYBw1dNTQUUOHsaFCAnwXqG0oixyD3gZqG8qm+Jtahirdg7GCrv2ivqFFi3kpMHTSofDyhbbohvLK3JGlxFCHAAYGWETDDXV6+IgiQyc0ZYrOc0AzNOnfUooM7b/P8MjuAaqhrLJyRyky1E+BIegcyFCjDyA+70Ugwa52mZUiQ/kSGIIu3kU19NK8CZQbevk2hAP1Pouc3gZyDA2M/DfjAC5DWWXBFCz6iDSUdW8CAwMXywUchjLLk2Eoc/8EEPX/Pg5DIa4l0ftcEgwVIiwFDHEN1DRU8eUbBl5Rhr4AKhrKzAtKPYsa2G4ADbUzYDD6exFTjTxZhbTTA45r+ORxAbyGckqyXx8qhvJcorqh7NI0CNNPBsy3qW7oogZQOqWuocCavS6B2obyiXCKHqC2oUEXyAtSfIYCfb9PgdqGut9mvUmWmfgMPZTAdIfahrLJMOAqhcg3NOkA413yzMRtKLDsJ9ehuA0VEgBXUFQ1lFGR4d0Hahtq9IH7Mrlm4qyj5BnsFlDbUG5xhg4w41oD9QwNgkX8vwfUM9QIFknUNJRxJZRBTe9TBkYNHSKGAgDBZ489XCcHpwAAAABJRU5ErkJggg==",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA8BAMAAAAAkuzSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACdQTFRF////7u7ubm5tmpmZfX18Kyopi4uK/f39pqalubi4XVxbSklI1tbWJL534wAAAeZJREFUeJxjZKABYBw1dNTQUUMHgaGMikCC7wJ1DWUJBBKnH1DXUKYQoFM7cUiSaqjLHqihYStwKyLV0NDV1DHU6FzZupwCKhuq+taZgXUZtQ01OBP8kHsBmqGRx1lmOVBgqOEqBlfuDaiGsvkDid0fyDdU+gCDqDXIUCYFBuOzDP8egETbP/j3/95AvqHRDQylt0H6S8HGwY0StV9DmaGPVgJZ7AUM95QYfk6ASjAFrybV0Bqen/VohjIgwhQEOHxJNJTdToCB4f8avIayBJJoqKoB2Ogl+AxlDVxFkqEcvgyXo40WgBMNVkNPWDCwz1tNWuxzBKc6MHD6MEQH4DC09drxyQuyHUgylOEASH3rhT/rkZMUEgAlflguI9pQMGANYAbmcPafQJw5AV2yHFdpSsBQpuC/6/DJDyZD/62luqFc3sx4Sk0yDWUNYFpJdUNbL4DSKZUNDWXQbqC2ocxBbEvJMROvoaUPyAtSvIaGMtzG0Vgi31Aub3jFTD1DXQVwVWzkGwosh3AU7BQYmvqBXIfiNhRY9pPrUNyGHp0ArqCoaiiPJwOuyoJ8Q1kDWJaTayZOQ0Nx10BkG8rtxWAMZnTgaNiRYyikKcaA1BqjgqGssHKUmoby1EAZ1PQ+ZWDU0JFsKAAOpI49AcO0ewAAAABJRU5ErkJggg=="
					 ]

		
		a_image.src = arrsrc[0];a_image.onload = function () {CekJaw();}
		b_image.src = arrsrc[1];b_image.onload = function () {CekJaw();}
		c_image.src = arrsrc[2];c_image.onload = function () {CekJaw();}
		d_image.src = arrsrc[3];d_image.onload = function () {CekJaw();}
		e_image.src = arrsrc[4];e_image.onload = function () {CekJaw();}
		f_image.src = arrsrc[5];f_image.onload = function () {CekJaw();}
		g_image.src = arrsrc[6];g_image.onload = function () {CekJaw();}
		h_image.src = arrsrc[7];h_image.onload = function () {CekJaw();}
		i_image.src = arrsrc[8];i_image.onload = function () {CekJaw();}
		j_image.src = arrsrc[9];j_image.onload = function () {CekJaw();}
		k_image.src = arrsrc[10];k_image.onload = function () {CekJaw();}
		
		//console.log(arrs[3]+" "+arrs[4]);
		
		var nogmb = [0,1,2,3,4,5,6,7,8,9,10];
		var fff = false;
		do{
			nogmb = RandomMyArray(nogmb);
			fff = nogmb[arrs[2]]==arrs[3]
		}while(!fff)
		
		//arrs[3] --> untuk gambar benar
		//arrs[2] --> urutan jawaban benar
		
		var inside=0;
		function CekJaw(){
			inside++;
			var Abjad = ["A","B","C","D"];
			if(inside==arrimg.length){
				//console.log(a_image);
				var _img;
				for(var i=0;i<4;i++){
					//console.log(nogmb[i])
					
					if(nogmb[i]==0)			ctx.drawImage(a_image, 0, 0+60*i,a_image.width*.5, a_image.height*.5);
					else if(nogmb[i]==1)	ctx.drawImage(b_image, 0, 0+60*i,b_image.width*.5, b_image.height*.5);
					else if(nogmb[i]==2)	ctx.drawImage(c_image, 0, 0+60*i,c_image.width*.5, c_image.height*.5);
					else if(nogmb[i]==3)	ctx.drawImage(d_image, 0, 0+60*i,d_image.width*.5, d_image.height*.5);
					else if(nogmb[i]==4)	ctx.drawImage(e_image, 0, 0+60*i,e_image.width*.5, e_image.height*.5);
					else if(nogmb[i]==5)	ctx.drawImage(f_image, 0, 0+60*i,f_image.width*.5, f_image.height*.5);
					else if(nogmb[i]==6)	ctx.drawImage(g_image, 0, 0+60*i,g_image.width*.5, g_image.height*.5);
					else if(nogmb[i]==7)	ctx.drawImage(h_image, 0, 0+60*i,h_image.width*.5, h_image.height*.5);
					else if(nogmb[i]==8)	ctx.drawImage(i_image, 0, 0+60*i,i_image.width*.5, i_image.height*.5);
					else if(nogmb[i]==9)	ctx.drawImage(j_image, 0, 0+60*i,j_image.width*.5, j_image.height*.5);
					else 					ctx.drawImage(k_image, 0, 0+60*i,k_image.width*.5, k_image.height*.5);
					
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+60*i);
				}
			}
		}
		return 0;
	}
	function GambarBarisanDeret10(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(a_image, 0, 0,a_image.width, a_image.height);
			}
		}
		return 0;
	}
	function GambarBarisanDeret8(nmcanvas,arrs){
		
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		// menambahkan image pada canvas //
		let a_image = new Image();
		let b_image = new Image();
		let c_image = new Image();
		let d_image = new Image();
		let e_image = new Image();
		let f_image = new Image();
		let g_image = new Image();
		let h_image = new Image();
		let i_image = new Image();
		let j_image = new Image();
		
		var arrimg = [a_image,b_image,c_image,d_image,e_image,f_image,g_image,h_image,i_image,j_image];
		var arrsrc = [
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAexQTFRF////7e3t/Pz85OTkysrJ0tLS+vr6zczM9fX1tLSzKyopoaCgt7e3nJyb+/v7kpKRQkFANzY1mpqZsbGwU1JRa2pp+Pj3enl4w8PDfXx7urq55ubmjo2M29vbo6OitbS0RkVEdHRzvr69tra1fHt6XFta5+fmYWBg4+Pj/f398PDwkZGQXl1c7Ozszc3N8/PzNjU0OTg3ysrK8vLy5+fnq6qq4eHhaWhn6enpZmVkzs7OxcXFT05N0dHRdnV1QUA/6enosbCwmZiY7u7ufX18WFdXR0ZGwMDA2trZZGNjrKuru7u7Tk1M397e4ODgTEtKurq6UlFRW1ta09PTp6emqqqp3d3cXFxb19fXk5OSZGRjhYSDaGhndXRzQ0JB7+/vbW1sX15ek5OTYF9fpKSjwMC/MzIxPTw7x8fHcnJxkI+PsLCw8fHxeXl4+Pj4oaGg1dXV2NjY2traPj081NTT9PT0SUhHgYCA5OPjOjo5zs7NRENDhISDrq2tOjk4x8fG09PSh4aF3t7e2djYNzY209LS0dHQnJubgH9/eXh4U1NSs7KyiYiIl5eWvb29+fn5wcHAS0pJl5aWmJiXeXh3np2dxMPD3d3djIyLioqJ2dnZd3d2ZmZl2dnYqaioRkVFdnZ1ycjIWVhXVlZVMJYeigAAAsVJREFUeJxjZBhAwDhq+ajlo5aPWk5fyxkZ/6ExcAFmRkbGX0RbxPaX5QchyzkZGb+CGTz/mD/jMYwPbDE74zuirBZm/AYkuRlf4bdc/DPfCzBD8qPAMzzGSb8Xei3G+IZB9CExliswMv5me/tL6g5+y1WfytwCM9Qfy93AY5wm4zUgqX1f6QoxluteBhJ6dxhUL+K13IDxPJRxS/46QUNZ2BhA4clgxHjWhPHeV/RIRQNcDMKP8VludkX3JJhhcUn/OJI43zeYgmPIyq3PGx1hACUUY8YzDAymjAfw2c33h0H5Mj7LHU9C0xsno8U+JHHp9zCW5V4kYZdjQk8YQOnDGpjyGQ86bMNnufd+py0oAuiW40pvml+gDIPNSKK6zLdcNjGA0ofrvcsMAbtYP+KzPHDn/+94LSc2vUFA0A5IOBnc8lzLwBCyzXs1iBeGZCjjCjgzcmPAedRUhG45Sekten3QMlBBZHHJfjsDKNSMD4OEpZ0QSj5ugrE4GUMYF6LqR7Nc+j00vTGzhy1AURcGZXAthyfppBWRS39AzI2awwAKNdSchAJSGRmfb0ITQ7M8Y1H8dDAja0HiVGSJHFhsCjBOgrLyZzs9hlgm+dEAlAcM9BbhtLvgwK30fnRBNMuLZmT2guiSPc5M3ThNAgNOxpzt0Iyj+hSUBcyu5HbiUlzBOLGgDUMUPc6r+4u2n2UrZ+wpbcRvd8OzJd7rQYy//6FedjzptQaHYjGPNeXNIEZdHT7LmxnBDgxRBNnNVs/IuPMAdvM6mqAMxatmV+rLGRDpDQuwugBzchk+yxnidRjvqjAyFoLYE0AlRw528zhEoQyhiw6hd/uAjGmlLYU4LNfMg4a59Am8liODGYzpsxhT8amgDOC1fA5j8rzcrwNk+fwPhQsY4wfG8hyzOIbFXZfxqKCh5TQHo5aPWj5q+ajlNAUAJwjHKax8RV8AAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAc5QTFRF////7e3t/Pz85+fnysrJ0tLS+vr6z8/P3t7etLSzKyopoaCgnJyb+/v7kpKRR0ZFNzY1mpqZ2NjYVFNSU1NSenl4w8PDpqWlurq55ubmhYWEyMjH29vbo6OitbS0+Pj3jo2NNjU0X15d4uLigYCA4ODg6enphoWFY2JiqqqpMC8ukZGQ3NzcOTg3Ozo5/f39zMzM7Ozsq6qqsbGw9fX16Ojo7+/v4eHhaWhnZmVkzs7OxcXFT05Nurq6dnV1QUA/6enosbCwmZiY7u7ufX18jo2MfXx7ZGNjR0ZGwMDA2trZrKur397eYWBgXFta5+fm4+PjW1tavr29p6em3d3cXFxb19fXhYSDaGhnUVBP0dHRdXRz5OTkV1dWX15eqqqqYF9ffHt68/Pzx8fHcnJxkI+Pjo6O8fHxeXl4+Pj4Tk1MtrW1Q0JB2traPj081NTTPz49PDs6nZ2c9/f30NDQuLi44ODfnJubxsbFS0pJMzIxsLCv2NjXvb288PDwgH9/dHNzzc3MV1ZVs7KyiYiIl5eWt7a2+fn5wcHAQD8+l5aWmJiXeXh3np2dxMPDjIyLa2pp2dnZd3d2ZmZlqaioRkVFdnZ1ycjIWVhXVlZV4cspMAAAApVJREFUeJxjZBhAwDhq+ajlo5aPWj6CLGdk/IfGwAWYGRkZfxFvFTvjD0KWczIyfoWoZWb6gscoXkbG3wwMbIzvibRaiPE71xtClot+5XkFZoh/5nuBxzDJjwJAj79lEHlEjNXyjK/EXxK2XOmF5F0wQ+WZ9G08xvFK3gKS6o/lbhBjuSbQofcIW67IcxnC0LujepGgoSxsDN9AtAHjeWZ9RsYzuNSZMp6S/EjQcvPLeifADLUn+seRxHm/Qxlmx5CVW583OsIASijGIItNGQ/gdicRljuehKY3TkaLfShaYSzLvUjCLsesdwMptyO2wHD9e9hxK0WWw9Ob2xGU9Kb/Fsow2IIkavjhJThh+O41/XSewfYsyyeKLPfb47oRzPDd67YBt0lQELgTEk6KLz3WMTAEb5e/DuKFIBnKuIoEy+HpTfEl4fQWvtlvFaggUnviv5wBFGoBy8DWOCGUnILnGMKWS36EpreYdcGLUdSFQBmc1+BJOn512BUwh5MxfD4DKNQi5uF2KWHLk5dHzQEzUpfGzEKWSIeVdryM06EsiU8JPyCWuR1JnAqkFL2n4LabCMtz56ZMAtH5m3xPnMJjEgPIu2kHz0OYfnv4n4NyqdQdiixnKJyZwdjLVHT6dHY3frvLZv3KXQpiuM1j0GO4BGRkz+d9iUt18UqGmEn5ixm4buGz3Np+AohS8W0FkkxVKyMYm7AbVw9znOJVyY9lDUBG4sryelyWaz6E0BV1+CxnMPNlfKDIyFgJYncASw7GEuzGmcBKAbd5Dr4PJgMZfbU1lbgsB/ocDPD7HAX0MxZMZMzDp4IygNfyySuOTin/OkCWT51/Zhpj5sBYnm6YwTBzxvmBsZzmYNTyUctHLR/+lgMAS6bGKRqfpTsAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAe9QTFRF////3t7ddHRzvLu77Ozs+Pj3qqqpcG9uXFxbYmFhj46N8vLyvb28YF9fgoKBkI+OKyoptLOztbS0p6em7e3tOjo5WFdWdXRzNzY1QkFA5+fn7+/vZmVlU1NSb25u0NDQmZiYzc3McXBw2tra8PDwRkVFi4qJ1tXVQ0JBOzo5enp5TEtK+fn5X19e8/PzvLy83d3cXl5dxcXFurq6mJeX+Pj45ubm9vb2UVBP+vr6ysrJPTw7Xl1cvr29cG9vR0ZGm5qaycjIhYWE0dHQgYCAX15e9fX1pqWlZ2dmq6qqMzIxcnJxNDMyx8bG8fHxeXl4VlZVtbW1oKCgmJeWbGtq09PT0dHRpKOjV1dWTk1Me3p5tLSzoaCg9PTzoKCfioqJ1dXVNjU04ODgurq5ubm5Pj08+/v7zs7OQUA/w8PDbWxs4+Pj29vbrq6tlZSUv7+/7u7uTk5Nu7u7/f39x8fHZGNjW1pZwcDA397epaWlbm1szs3NZmVk4uLiX15dgoGBd3d2gH9/fXx7YF9e9PT0l5aWWVhYsbCwYWBfxMPDVlVUMjEwNzY2sLCw39/feHh3paWkvb29lpWV5+fmnZ2c6enp2trZqaio3d3d9/f3dnZ1oaGgwcHAiYiIWVlY2dnZk5KSs7KyZmZl2dnYlpaV8krJEQAAAqdJREFUeJxjZBhAwDhq+ajlo5aPWj5q+fC3nJGR8S+YwfIPysABWBnB4CuxNvEwMn4iZDk/I+N7MEPoH/NbPGaJMP5mY2T8wcn4jCirpRm/MPA+JmS53Cf+h2CGwgfB+/gs52O8y6DC+FrsFjF2qwPD6Blhy7WfylwBM3Qfy10iaKj+Q8nr2GUMGBnPIXjGQMtvEbTc/KbGCTDD8rrEDYJ2M1hd0z4KMsWa8Ygt4xvRA8gy336hKDUjbLnjeaN9YIbzWZM9SOIiX6AMW8ZdSMLuJy12MIASiiXjQwWgAzZTZDk8vfEzoqQ3v5NQhsWz00jCAQcc1wMppXc2bOsYgvcKPKDI8pA9rqvBDKV3bqsYCIHwnR4PjwPpyO1eyxgYorf6LAELx95lYFDZ5H+bgeHhU1Ish6e3yO2E01sC4/qgeQyg9GFz/ikosILngsVT1sBUIPmesOVI6S10NrJE2hUoQ3cmXEzad0XkdBDD+WzUNAZQqEVPBUuwpgMNXhz3j4HhFiKBELbc+az1VjAjfyHYPCStcO9OgDLctOcn9YFZ/IzOaxlAoZbcC9dARpyXzEntBjPKZqV3IksU/4QyeDqgjNjPBzLbIcyqadmtoFDLaUFoIMNyt1MMuc1A2v+g1DUGvCBNYhIokYEBJKE4nkdK7GSl9vqJkuGMjNtuFDPW4Le8tZuhrAmso9L8ZkUFA1J6g9j10G41gtdZz9DUVl3LwIZSt2AUrw4+wLAL1bg5C8juY+y3Ni/AbvnENigjobN6alMeA6hWaM7F5VT5HxC6Ngev5QwMUxlLofXk9HPzp2zeistABJiZDqZ0rhBQhw7wNiZmMabOYUwm0URqWT6PMXEBY/wAWa56m2ERY+zAWO7nm8qwpIPUiKSS5TQHo5aPWj5yLAcAQrvfKWdIRhcAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAexQTFRF////7e3t/Pz85+fnysrJ0tLS+vr6zczM9fX1tLSzKyopoaCgz8/PnJyb+/v7kpKRR0ZFNzY1mpqZwMDAWVhYa2pp+Pj3enl4w8PDpqWlurq55ubmhYWEyMjH29vbo6OitbS0U1NSaWlovr69tra1QkFAfHt6XFta5+fmfHx74+Pj/f398PDwkZGQXl1c7Ozszc3N8/PzNjU0OTg3Ozo5zMzMq6qqsbGwqqqp4eHhaWhn6enpZmVkzs7OxcXFT05Nurq6dnV1QUA/6enosbCwmZiY7u7ufX18jo2MfXx7ZGNjR0ZG2trZrKuru7u7Tk1M397e4ODgYWBgUlFRW1tavr29p6emzs7NXFxbSUhHwsHBk5OSZGRjhYSDaGhnUVBP0dHR2NjXdXRzYWBfV1dWQ0JB7+/v5OTkX15eqqqqYF9fwMC/MzIxPTw7x8fHcnJxkI+Pjo6O8fHxeXl4+Pj4trW12NjY2traPj081NTTPz49gYCARENDhISD8vLyubi4Ojk4x8fG09PSnZycTk5Nh4aF3t7e2djYNzY2xMTD0dHQnJubgH9/eXh4s7KyiYiIl5eWt7a2+fn5wcHAQD8+l5aWmJiXeXh3np2dxMPDjIyL2dnZd3d2ZmZlqaioRkVFdnZ1ycjIWVhXVlZVbB3eVgAAAvFJREFUeJxjZBhAwDhq+ajlo5aPQMsZGf+hMXABZkZGxl9EW8T2l+UHIcs5GRm/ghk8/5g/4zGMD2wxO+M7oqwWZvwGJLkZX+G3XPwz3wswQ/KjwDM8xkm/FwJ6/DWD2ANiLFdkZPzNxvhU5hZ+y9Ufy90AMzQfKlzDY5w24xUgqXtX5RJ2eb6fjEihrH8RSBjcYlA/j9dyI8azEIbJNcWreCyHABY2BlB4Mpj+ushszHjxB7KM3gl01VwMIo/wWW550eAYmGF93ugIske+wRQcRlZud8b0IAMooZgxnmRgsGDci89yvj8MqhfxWe5yDJreOBmtdyOJS7+HsWx2IQm7H7bbAaQ8DzownrD8d8B5Mz7L/fa4bkQRQLccnt48D6KkN21YyjfagCSqz3zDfT2QDtph8fYig8Mp1o/4LA/e/v87Xsvh6S1oB970BgEh2yDhZHTDezUDQ9gWqH3hQFOfn/b/z8DAtAyhOHp90HnUVIRuOTy9Gd0gnN5i14YsARVE1udDFzKAQi1sAVg8EWgq4/IooNS5C3DFnIzRjLNQ9aNZLv0emt7SF0fNQVEXDmUILIAn6cyFCfN+QMwFZ2D1x0g5CT3YsxkZn6xHczya5XlzUieCGQWz0vuRJYo+QBmCjD1QltQH10cQyzwPZncDKSPj2QgNaJZrcdzI6UKzG93y8sl5HSC6cqfbu1noalEBJ2PBVmjGUX8s+BSUSwtbcVnOqPLUdyWGEehxXtNXzNjEVsnYVV6P3+6mV/MqG0GMv/+hXnY55rMKh+VsdW3VYPOaqvBZ3s7YBKKiZUBq2ZoZGXfsZcAKeuqgDOXLlhebixmQ0hsYaH8O64FzAmBlg/h9fJYzpGkwPgBWA3kg9mRg1cGYid1yDjEoQ/i8c+j9TiBjZlF7Hna1DNqq5yAM2aN4LUcGs6pfz2ZMwaeCMoDX8rkLD83L/TpAls/P/LGAMX5gLC8yiGNY3HMRjwoaWk5zMGr5qOWjlo9aPnwtBwC3v9opoHGDGgAAAABJRU5ErkJggg==",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAgpQTFRF////7e3t/Pz84ODgysrJ0tLS+Pj3zczM9fX1tLSzKyopoaCgt7e3nJybk5KSOjo5MjEwk5OSsbGwU1JRa2ppenl4w8PDfXx7urq54uLijo2M29vbsLCvNzY1tbS0RkVEdHRzvr69tra1QkFAfHt6XFta5+fmYWBg4+Pj+vr68PDwn5+eYWBf7Ozszc3N8/PzNjU0OTg3/f39U1NSysrK8vLy5+fnq6qq4eHhaWhn6enpZmVk+/v7zs7OmJeXg4KC0dHRdnV1QUA/6enosbCwmZiY5ubm7u7uy8vLWFdXR0ZGwMDA2trZZGNjrKuru7u7Tk1M397eXl5dXFxbSUhHaGdm3t3dTEtKurq6kpKRUlFReHd3dXRzZmZlU1JS2dnY09PTp6emqqqp3d3c19fXZGRjnJub7+/vQ0JB5OTkbW1sX15eWVhYsrKxpKSjwMC/MzIxPTw7x8fHcnJxkI+PsLCw8fHxeXl4+Pj4bGxr1dXV2NjY2traPj081NTT9PT05OPj9PTzgYCAzs7NRENDhISDrq2tOjk4x8fGcnFwe3p5vLy8n56edHNyh4aF3t7e2djYNzY209LS0dHQ3NzcdnZ1p6ameXh4s7KyiYiIl5eWvb29+fn5wcHAS0pJl5aWmJiXeXh3np2dxMPD3d3djIyLioqJ2dnZd3d2qaioRkVFycjIWVhXVlZVEM/PMwAAAttJREFUeJxjZBhAwDhq+ajlo5aPWk5fyxkZ/6ExcAFmRkbGX0RbxPaX5QchyzkZGb+CGTz/mD/jM42P8TcDAxvje6KsFmL8DiS5PqG6FcNy0a88r8AM8c98L/AYJ/lR4K0II+NbkUfEWC4PDCN2xudSd/BbrvpU5haYof5Y7gYe4zQZrwFJ7ftKV4ixXPcykNC7w6B6Ea/lBoznoYxbGucIGsrCpnkWRJswnjZjvP0NPVLRABeD4FN8lltc0j8OZlhdMDyKJG5zAsqwPIys3O6M6UEGUEIxYzwJ1My4F5/dNucYlC/js9zlGDS9cTJa70YSdzsCY9nuRIh6HP/98y8DKH3YA1M+416XTfgs99/ttgFFAN1yXOnN6CWUYbYeytDSYGTc5s24CsRWf+x77TJDxCb/5fgsj9rw/ztey4lNb8BcFsrIuPlXCONCBlD6CFvAwJC4MmIeSCb5A0KV4BwE82f0WdRUhG45aelN03aJsNdMYPpw3swACjWzAyBRNzGEiuV/YSxOxrj/M1G1o1nudgSa3jIXJkxDURcEZUjMRUnSOfOSJwPNTZnEAAo11JyEAvIZGSf9RRNDs7xoRmYvmFEyLbsbWaLsGZQhzdiBLF45ERjU4p+NQXnAwGIGTrurtt0qbEUXRLO8pq+4GUTXbfJlasRpEgg0bALFSmPfb6CZqk9BWcDiUkUdTtX9vytrMUTR47ylrXrDac1Yxua6Crx2M3TOSmes7LizqLkY5mWXY+HzcShmS1rUUgZidBfis3wCYyWIilMA2a2ZyXj5Lo5yYwpjKZBMV518Hejl3kwGRHrDAmzPQhmaZ5GFMYrXdEPGW+qMjCkg9lxQyRGPw0AGNqPH0n9AYe8cf6sFSC3OmJiCQ6lRUTmEIX8Mr+XIYClj1HLGCHwqKAN4LY9lWrgy6esAWb7qU8pUsdCBsbzMLIRhbcNlPCpoaDnNwajlo5aPWj5qOU0BANUE0imHkrqSAAAAAElFTkSuQmCC",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAelQTFRF////7e3t/Pz84ODgysrJ0tLS+Pj3z8/P3t7etLSzKyopoaCgt7e3nJybk5KSOjo5MjEwk5OS2NjYVFNSU1NSenl4w8PDfXx7urq54uLijo2MzczM29vbsLCvNzY1tbS09PTzgIB/NjU0XFta5+fmYWBg4+Pj+vr68PDwn5+eYWBfgH9/sLCw39/fOTg3/f39ysrK8vLy5+fnq6qqsbGw9fX13Nzc5ubm4eHhaWhn6enpZmVk+/v7zs7OmJeXg4KC0dHRdnV1QUA/6enosbCwmZiY7u7uy8vLWFdXR0ZGwMDA2trZZGNjrKur397eXl5dXFxbSUhHaGdm3t3dTEtK7Ozsurq6kpKReHd3dXRzZmZlU1JS2dnY09PTp6emqqqp3d3c19fXnJub7+/v5OTkbW1sX15eWVhYsrKxpKSj8/Pzx8fHcnJxkI+P8fHxeXl4+Pj4bGxrQ0JB2traPj081NTT9PT05OPjgYCARENDhISDrq2tOjk4x8fGcnFwQkFAe3p5vLy8n56edHNytra1RkVE2djYNzY209LS0dHQdnZ1PTw7p6ameXh4WVhXs7KyiYiIl5eWvb29+fn5wcHAS0pJl5aWmJiXeXh3np2dxMPDjIyLioqJ2dnZd3d2qaioRkVFycjIVlZVs9xj/AAAAolJREFUeJxjZBhAwDhq+ajlo5aPWj6CLGdk/IfGwAWYGRkZfxFvFTvjD0KWczIyfgUzeP4xf8ZnFh/jbwYGNsb3RFotxPid6w0hy0W/8rwCM8Q/873AY5jkRwGgxxnfiD4kxmoFxpcSLwhbrvxc6g6YofpU5hYe49QZbwBJzYcK14ixXPs7F+NdwpYr8VyCMl6oXiRoKAsbxEQDxvNGwHA4jUud2f/T5pcJWm5xSf84mGF1wfAokrjNCSjD8jCycrszpgcZQAnFjPEkUDPjXtzuJMJyl2PQ9MbJaL0bRSvcGbsQou4nfv/8ywBKH3agBLDPeTNFluNKb/pvoQyjTVCGhjoj404PxrUgtupTL8bVDGFbfFdSZDmx6Q2Yy4IYGbf9CmRcwgBKH8GLGRji1oQuBMkkfECoEpxPguWkpTd16xUirnOB6cNpCwMo1MwOgK1RQqhY9Zd4y80vQ9NbyrLo2Sjq/KEMsfMoSTp9cdwMYPqIn84ACrWEabgdStjy7PlJU8CM3LlKV5Al8l7DLGecgCxeOBMY1OKfjUF5QCmgD7fdRFhePD2rB0SXrg1i6sJjEgND+Q5QrCi8/83xDuhlUBawuJTXQZHlDJUTC7afVw9h7Ctuxms3Qx0wazXXfZhRWQvzssuxkEW4VIeuZ2hoq65nYEGpW9Atb2MEW5rBDaLUExlvPsRRbpiFNADJRsbZN4Febi5mQKQ3bED7PoRuKcJnOUOyDuMdVUbGXBB7CqjkyMBlIJvRE7G/oLB3DrvVC6RmFXbk4lJrCE0ycsfwWo4MZjOmzGVMwqeCMoDX8iimJfNzvg6Q5Qs+53aJxw+M5XkKRQyLNq8eGMtpDkYtH7V81PLhbzkA4zPLKRSV828AAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAfJQTFRF////3t7ddHRzvLu74uLi9PTzl5aWa2tqXFxbYmFhhoWF7+/vvb28YF9fgoKBkI+OKyoptLOzp6em8PDwPTw7X15ddXRzPz495+fn6OjoZmVlU1NSbGtq09PTcXBw0dHR6+vrlJST7Ozs+vr6YWBfhYWEq6uqNjU0Q0JBmJiYTEtK+fn5Tk1M8/Pzw8PD3d3cXl5dxcXFmJiXoqKh+Pj45ubm9vb2UVBPY2JiXVxbcG9vR0ZGm5qaysrJqqqpycjI0dHQgYCA7e3tX15e9fX1YmJhsLCwp6amMzIxcnJxNDMyx8bG8fHxeXl4zczMrKyrXV1ceHh3MTAvoKCgmJeWmZiY6urpVFNSvLy8tLSzoaCgoKCfioqJ3d3d29vb0tLRqKinOTg39PT0urq5ubm5+/v7zs7OOzo5zs3Njo2N4+Pj+Pj3rq6tlZSUv7+/7u7u/f39x8fHZGNjW1pZ1tXV397eW1taurq6bm1s3t7eZmVkenp5lpaVoaGgnJubgoGBd3d2gH9/fXx7SUlIYF9ek5OSQD8+zs7NpqalVlVUMjEwNzY239/fkpGRb25upaWk3Nzcn5+efX18lpWV5+fmnZ2c6enp2trZ8vLyqaio9/f3dnZ1wMDAwcHAiYiIVlZVjIyLt7a2RkVFZmZl2dnYubm4TZTRmwAAAp9JREFUeJxjZBhAwDhq+ajlo5aPWj5qOV0sZ2Rk/AtmsPyDMnAAVkYw+EqsTTyMjJ8IWc7PyPgeymB6h8csYcY/QOt/sjO+IMpqScZvDNxPCVku84X3MZgh94n/IR7TFBgZ7zEoM74RvU2M3WrAMHpO2HKtZ9JXwQydJ7KXCRqq9wjDRCjQZ2Q8j+AZAS2/TdBys1vqJ8EM5bcSNwjazWB4X+MEyBSLJ08sGd8LHUHI2F7WO4Si1JSw5fYXoeHocMFwP5K40zEow5pxD5Kw62mzXQyg9GHO+Eie8Zj1Voosx5XefE5BGebPz0BZfu+FGA84XrrLAEofToxrGUL2uK6myHJi0xsDQxjIy+6MK0BsnSfffjEwRG73WgaWYrUA6t/qA9R/DpETibCchPQWC0xE2386rgelj0DGeaDACp4LlklZA1OD5HvCliOlN+2jyBKpsNSnOQtZ2El1ZcQMYPqInM4ACrWoaWDR7M8MDHxLYj8yMDxDJBDCljtcsNwOZuQtApuHpBXGip+ILM7OCfQc1MtazxImwCXIiPPC+Ul9YEbx3JQeZIkCWOoT70bRUDYrvZOhYkZmOyjUstoQEmRY7nKG4csfIO17OLuVAS+oYXw3lYGhbpK47B6gl0Nng3IpUmInK7XXTwyXBCak3pJ78/Bb3trNwP22rouluBLoZZE7DEjpDWLXQ/bHCF5HA0Nje1UdAxtK3YJRvNr4A72szS0P9ApDDyPjvORCHLZPYGRs+cJuDExRGSuac4ECfU0tObicmrIJ6rdsvJYzMExjZMyAsGYuem79ZjsuAxFgVhqY0r5KWCkKwNuYmM2YMpcxiUQTqWX5/O9ZCxjjB8jyRXEMixljBsZyl4gUhqUHZg+M5TQHo5aPWj5qOV0AAMjG3CkPDUktAAAAAElFTkSuQmCC",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAgpQTFRF////7e3t/Pz85OTkysrJ0tLS+Pj3zczM9fX1urq6KyopnJub1NTUmZiYsbCwTk1MNjU0rq6u1dXVcHBvi4qK+vr6enl4w8PDpqWlurq54uLihYWEyMjH29vbsLCvNzY1tbS0U1NSaWlovr69tra1QkFAfHt6XFta5+fmfHx74+Pj8PDwn5+eYWBf+/v77Ozszc3N8/PzOTg3Ozo5/f39zMzM5+fnq6qqsbGwqqqp5ubmZGNj7u7uX19e397epqalfHt7tLSzkZGQTEtKoaCgy8vLOjo54ODgfXx7R0ZGwMDA2trZrKuru7u7X15eXFxbSUhHaGdm3t3dYWBgQUA/kpKRUlFReXl4dXRzZmZlMjEwU1JS2dnYvr29p6emzs7NT05NwsHBk5OSZGRj7+/v6enpUVBP0dHR2NjXV1dWQ0JBaWhnWVhYsrKxwMC/MzIxPTw7x8fHcnJxkI+Pjo6O8fHx+Pj4bGxrtrW12NjY2traPj081NTT5OPj9PTz4eHhgYCARENDhISD8vLyubi4Ojk4x8fGcnFweHh3tbW1n56edHNyTk5Nh4aF3t7e2djYNzY2xMTD0dHQ6eno3NzcdnZ1p6ameXh4s7KyiYiIl5eWt7a2+fn5wcHAQD8+l5aWmJiXeXh3np2dxMPDjIyLa2pp2dnZd3d2xcXFqaioRkVFycjIWVhXVlZVdMBU7QAAAwFJREFUeJxjZBhAwDhq+ajlo5aPWk5fyxkZ/6ExcAFmRkbGX0RbxPaX5QchyzkZGb+CGTz/mD/jM42P8TcDAxvje6KsFmL8DiS5GF/jt1zsC+9LMEPiE/9zPMZJfRAEepzxtdgDYixXBIYRO+NTmVv4LVd/LHcDzNB8qHANj3GiYleBpM495cvY5fVuMiKFsv5FIGFwi0H9PF7LBZTOQRjG17XO4LEcAljYxO+DaNNfF80YGS/8QJbRP46umotB+DE+y60uGB4FM2zOGR9GEjd5CWUoHkJWbn/a7AADKKGYM55gYLB8cRWf5SbXGFQv4rOc74/VHjDD8SRKerO6AGMZHUGIujIesd0JpD0OGfIxMn4477QFn+W+e1k/ogigWw5Pbx6HUNIbps+1lRkZd7kzrgOxg7d73b4I9L/3anyWh20x34/Xcnh6C96ON70Bc1kgMLFvCGRcAmQL/ApezMAQtwZqX/wHBgbBVW7/gVlsPkJD0orIi6ipCN1yeHoT+EVEehP99l/UdQ5D6tKYWQygUIudCRbOAFp+9W48sAi4AY8tYDwm/JqDqh3NcqsLiVPBDGb2+Oko6vygjP+7UMqpnHnJk4HmgjOw+mOknIQe7HmMjNd3orkdzfLCmRl9YEbx9KweZIlSWB75L9+FLF4+GWiHx6G8DiBbIGoaQgLNcq1nv/Lb0exGt7xqQmEriK6Zkv1yDrpaFFC7HRQrdSeOAM1Uf2xwjIGhvrusAZfljCpPQxdimIEe542dFYy1ovmMrTVVeO1maJ+XzFjd9mBBYynMy3x/QhbhsFy0vK65HMToKsJneT8j2NIEGRAlWsNY2ZGL3fIpjEBbGdLU6l8DvdybyYCU3sDA5GUkIn7sYGkXUh7ispwhxYTxpgYjYwqIPRdUdcRjtxzotHdSkv9Apk7mv9EGpBYvjEjBodSEC2qpx2y8liODJYzRyxgj8amgDOC1PNI/YuXsPQNk+aq4H1PFQgfG8lLzEIa1TRfxqKCh5TQHo5aPWj5q+ajlNAUATiniKRd7cUwAAAAASUVORK5CYII=",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAoCAMAAAAL325tAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAbBQTFRF////39/fdnV1Xl5dZWRjr6+uT05NSUhHdXRzMjEwKyopwMC/7e3t/Pz82djY/f39xcXFkZGQz8/P3t7etLSzoaCgt7e3nJybxsbFrays2NjYVFNSU1NSenl4w8PDfXx7urq5VlVUQ0JB9fX19PTzgIB/NjU0XFta5+fmYWBg4+Pje3t609PTgH9/sLCwOTg34uLi1tbVv7+/p6em1NTUzs7N3Nzc5ubm4eHhaWhn6enpZmVk+/v7ysrJzs7OTk1MPj08l5eWZ2dmqqqpsbCwmZiY7u7u+vr6MzIxioqJ1dXVx8bGNDMy29vb397e0dHQo6OjUlFQ7+/v3d3dkI+ORURD8PDwXFxbxMPDcXBw0NDQ9vb2eHd35OTkbW1sX15eycjIx8fHcnJxkI+P8fHxeXl4+Pj4YWBf2tra1NTT9PT0kZCQbGtqRENDhISD8vLyrq2tOjk4x8fGTEtK7Ozstra1RkVENzY209LSnJub6enoWVhXs7KyiYiIvb29+fn5wcHAS0pJl5aWmJiXeXh3ubi4pKSjjIyL2dnZd3d2ZmZl2dnYqaioRkVFdnZ1VlZVqjhDqgAAAkVJREFUeJxjZBhAwDhq+ajlo5aPWj7oLWcEgd8DZDkb2PavVLCch/EzGoMg4GP8KPCL/T0eFUKMb4mxXOQb92swQ+wL70siLQcCiU/8z3FKSjG+F3pCjOWyb0UegRnyr8UeEG+5IiPjXRxSKoxPZZ4QZ7n6Y7kbYIbmQ4VrRNutfV/pCi453Z8clzmJs1yN8yKU8YT1I14LDRjPMxgxMp4B2619Gqc6s7d3zS8TZbnFJf3jYIbVBcOjSOI2MIWMh2BC9n+uGpxiYDDfz+B0wvIXkgQmINJyl2PQ9CbyzXo3ina4M3ZBaPfDssCIZtzvdPAzF1jgG8WW40pv/HYwDZugDP/dDG4bGBgCd3qsC/6FLEG+5cSnt5Bt4AgK3Yri47C1IQizV5BoOfHpLXJjwDIGhuj1KEmDQdlyDZwdtIw0y80vQ9Nb7NqQRcgSPN5QBscRaH62P210hIEhYRVK0sABiLM8cWXEPDAjebnKJWSJlCVQRizjLDDtfjh2JgMo8IkpioizPGOR2QEQnblXSmsaXvMSViVOBVI584gpioiM89y5KYwT3TUZZ2b04TcP6uXi6QSSBgNDyUkGi6k5xxmuYdQt6JbzZU4GURIBILvdDa9rMbZhNzJnHudbzPSGDehCE0lhKyHLGYK0GJ/et2VsBLEbQNV0DXYjWxk7gV7O59qMs0yHgfx7EPrtMYKWI4P2Q9s7GMsJGU4+wGt5F2NpT+frAbK891Nj36UFA2N5ingrQ//TnoGxnOZg1PJRy0ctpwsAADUQvClizaf4AAAAAElFTkSuQmCC",
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAoCAMAAADkHQVTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAbNQTFRF////9fX13d3d5OTk/f39iIiHKyopTEtK7e3te3t6u7u729vbm5ua3t7ddHRzvLu74uLi2NjYmZmYvb28YF9fgoKBkI+OtLOzp6emkpKR0tLS6OjoZmVlU1NSbGtq09PTcXBw0dHR1dXVMzIxhIODq6uqNjU0Q0JBmJiY+fn5Tk1M8/PzOjo5bGxr+vr68PDwt7a2mJiXoqKh+Pj45ubm9vb2UVBPiYmIfHt7nJybVVRURURDY2JiwsLCgH9+kZGQzs3Nf39+1tbVfHx78fHxdXRzeXl4Ozo5eXh3eXh4VlZVR0dGX19ecnFx6enpNDMy6urqeHd3tLSzOTg37Ozs+/v7ysrJtra1dnZ16urpfXx7pKOjR0ZGzs7OYWBg4eHhgYCAxsbF0dHQcnJxv7+/jo2N7u7usbCwx8fHZGNjW1pZ1tXV397eenl4enp5pKSjXFtagoGBd3d2gH9/SUlIYF9e9PT0pqalXFxbVlVUMjEwm5qaNzY2sLCw39/fkpGRb25upaWkX15dhYWEubm5nZ2c3t3dra2tPj082dnZubm4xcXFjIyLRkVFZmZl2dnYwMDAuKxVFwAAAltJREFUeJxjZBhIwDhq+6jtQ9R2RiD4M1C2szKCHPBjgGznZGT895ftCxVs52Vk/AhmCPyDMogCgl953uGWFWZkfE2U7WIfBF9CGUIviLdd8q3IM1xy0oyvGMQfE2W73AvJh2CGwjPp+0RbrsTIeAeXnCowSd4j0nb2/8rXwQytO6pXibaci5HxEoKr/1TmAoJnCLT9EnG2m140OAVm6N1QvInfSnPGE5ZAg698YLB9L/QByXIGk0uWB1GUmhBpu8Mx6/1ghtMR271I4i4whYxvz0JZ7oyMe10Yd7ttYXDf7/6DgXEX5bbjSnSYtvvt8NzhuQFos+rVQFBmo4btxCe6oC2+jGtAyQOaTqAgFFTyrA/6x8DAvJxk24lPdFFrQpcCKTVG1OQh+BXGQvI/kbYjJbqwJcgSoTCF7IuhjLgVfkCvxy+PWoBiAgs7A0PYUmugKZZ7SLU9aUnsXDAjZVH8bGQJE3iaTpgFoSGeTp+PpUwiN94z5iVPBzOy5qRORZYAeQkMEqdAaGZm5+1AKncmluRBru2MrAxcH4C024GMSdiUI0D6/MyJQKpgGpbkQXaaL5zqqM34XGpSPmMXfttzZ4aDUgB6ooMYGiAwH8ErZ2Rg7C35xzAXs6LBKGmrQdaGKd5YDWTXMTKuCq/HbntTi90ekKdqa/G7koGhBRoODtWEbWdgaHv0Zg2E1c7YUXlrLnYz9X6Dc6bLHuzSxAG8rQs3l7LumTjrLioAvLZ7sWzqWXIBnwpa2t5bzNDHWDhAtjP2FzB0nV49QLbTHozaPmr7qO2jto8E2wHHqccpJ5gQYAAAAABJRU5ErkJggg=="
					 ]
		
		a_image.src = arrsrc[0];a_image.onload = function () {CekJaw();}
		b_image.src = arrsrc[1];b_image.onload = function () {CekJaw();}
		c_image.src = arrsrc[2];c_image.onload = function () {CekJaw();}
		d_image.src = arrsrc[3];d_image.onload = function () {CekJaw();}
		e_image.src = arrsrc[4];e_image.onload = function () {CekJaw();}
		f_image.src = arrsrc[5];f_image.onload = function () {CekJaw();}
		g_image.src = arrsrc[6];g_image.onload = function () {CekJaw();}
		h_image.src = arrsrc[7];h_image.onload = function () {CekJaw();}
		i_image.src = arrsrc[8];i_image.onload = function () {CekJaw();}
		j_image.src = arrsrc[9];j_image.onload = function () {CekJaw();}
		
		//console.log(arrs[3]+" "+arrs[4]);
		
		var nogmb = [0,1,2,3,4,5,6,7,8,9];
		var fff = false;
		do{
			nogmb = RandomMyArray(nogmb);
			fff = nogmb[arrs[3]]==arrs[4]
		}while(!fff)
		
		//arrs[4] --> untuk gambar benar
		//arrs[3] --> urutan jawaban benar
		
		var inside=0;
		function CekJaw(){
			inside++;
			var Abjad = ["A","B","C","D"];
			if(inside==arrimg.length){
				//console.log(a_image);
				var _img;
				for(var i=0;i<4;i++){
					//console.log(nogmb[i])
					
					if(nogmb[i]==0)			ctx.drawImage(a_image, 10, 0+40*i,a_image.width, a_image.height);
					else if(nogmb[i]==1)	ctx.drawImage(b_image, 10, 0+40*i,b_image.width, b_image.height);
					else if(nogmb[i]==2)	ctx.drawImage(c_image, 10, 0+40*i,c_image.width, c_image.height);
					else if(nogmb[i]==3)	ctx.drawImage(d_image, 10, 0+40*i,d_image.width, d_image.height);
					else if(nogmb[i]==4)	ctx.drawImage(e_image, 10, 0+40*i,e_image.width, e_image.height);
					else if(nogmb[i]==5)	ctx.drawImage(f_image, 10, 0+40*i,f_image.width, f_image.height);
					else if(nogmb[i]==6)	ctx.drawImage(g_image, 10, 0+40*i,g_image.width, g_image.height);
					else if(nogmb[i]==7)	ctx.drawImage(h_image, 10, 0+40*i,h_image.width, h_image.height);
					else if(nogmb[i]==8)	ctx.drawImage(i_image, 10, 0+40*i,i_image.width, i_image.height);
					else 					ctx.drawImage(j_image, 10, 0+40*i,j_image.width, j_image.height);
					
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		return 0;
	}
	function GambarBarisanDeret7(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		let b_image = new Image();
		let c_image = new Image();
		let d_image = new Image();
		let e_image = new Image();
		let f_image = new Image();
		let g_image = new Image();
		let h_image = new Image();
		let i_image = new Image();
		let j_image = new Image();
		
		var arrimg = [a_image,b_image,c_image,d_image,e_image,f_image,g_image,h_image,i_image,j_image];
		var arrsrc = [
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAA7CAYAAABc8elDAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKNWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s6uL5TAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGkUlEQVR4Xu2caUxUVxTHD/umM+ybNggqA0PBghsISAdb2n7pYsQv2roEtUUbtba11dZvbk3dEq2I1erHumCiralQF6pgFRBn2DusAiYgGMOuKLfn3bl0GAZJGgeHF88vefPm/HnvMfPe/553zoU8G4YA8UpjK9bEKwyZgCATEGQCAiETEGQCgkxAIGQCgkxAkAkIhExAkAkIMgGBkAkIMgFBJiAQMgFBJiDIBARiVRN8+81mWLFyuYjkRVtbG8yIioTy8jKhyBermaCpsREOHNgPCfGJQhlfVFRUQE5ONuh0OqGY4u3tja8Mvti40SDIGem/ja3Btm3fMzdXFxGNH9atS2c2eFpcnJ3YxAluzNnJkfn7+rCrV6+KLYwczcxkHu5KVl9fLxR5YjUTBE8JYsuWfSKi8UFrayubgp/r/PnzrL+/n2vHfj7KXps8iXnixW5va+faIB0dHczB3o7t27dXKPLEKia4detvPspOnjwhlPHN+vWfM08Pd5aZmSEUI5o3k1hs7BwRyROL1gQ4guDevXv8vU6rhR9274YjGRnQ2dHBtUHy8/Oh/8kTSE5OFoqR3t5eOHXqV8mcPL548XfYtWsnZJ09y2NroFKF8XV9fQNfDyUyMgruNzVDS0uLUGSIwQsvTmVlJbOzAZaXl8c+XrqUOTk6sAh1OPNQKlhUVCTr6ekRWzKWmrqIuaM+EvsxtU4K8GdYkDF1eBgL8PdlU0OCeeZYuWK52Orl8t3WLUypmMiyss4JxciJE78wF6wbcnNzhSI/LJYJqvV68PTygs1ffwV4b4WWBw+gtKwc0lavhrraWrhx47rYEkdUXR2o1WoRmVJaVgYenp6wOHURLFmyFOobGqG6phamTw/FDHFKbPVyuXDhN3BwcIDkBeaZS6VSgY2tLdTWVAtFfljMBMV3i8HOzg4UCgX8cekSKBVKrqe8nQJPnz6Fvr5eHmPBhSm/D9zd3Xk8HKy0uYnWrPkUtmzdCo6OjlyPjYvlx3ke7e3tUIMXog4NNtpSXV2Nn+H5xxnOvr17cR89pK9di99JIVQj3t4+fC3NG8gWkRFeGKlAkoqn+/ebhWLg0MGDTIGpvKiokMfd3d2Y5lXsvXff4fFQ+vuf8LQbP2+eUIy8tSCZeXt5isic+YkJ2M45MMXECaMu0lfOzr4k9hqdm/l5/HdqNElCMUev17MJbq5s44YNQpEfFssE0kjUYKEXEBAoFAPFxcXgFxCA6T+Cx/wq4Av24mbo9dXw+PFjSEtLE4oRPNmQkpIiInOyzp2D8ooq0JWUjrrU1taARmOe1ofT3NyMt6Ml4OTkBKdPnxGqOTY20qwCA2dnZ6HID4uYoKqqEpqamiAmOkYoRiorysHNze2/k+Tm6srf94+Q2qUZOidM/2/ERAvFQENDA+8aQsNUQjHHy8sbgoODISgoaNQlODgE7O3txV4j09XVBQnxcdDd3QMFhUX82M+jq6sTBtAEkyeZml9OWMQENXifxTQPiYnmU8C3b9/GkacRkQEXNEEd3vuHU1ZSBj6+PhCKReBQ7ty5Ax3YZmqSTI8zFrCBAZgzexb09PTCX9evY2YLED8ZmSZsD6X85j8sA8oJi5ggP/8mpkWAqBkzhGJAe1fLK+e42DihGFBHvA7NmDmkETcUqbhUKN3BFbPFUEp0OhjAixM7z/Q4Y0E0ZqHOzk7I+fMyhIaamnEkdDotFq9OEBYeLhT5YRET5OZeA3W4GpRKQ0cwyLVrV8ARW6uQqSFCMTDYamm1Wr6WkCr/osJCSEqcLxQjl69cBj9fXzyWoVMYK/bs+RH+qaoCWzTuiuXLQBU63WTxwyz16NEjsbWBkpIS8PPzg2nTpglFfrzw42qkQm5BsgYiIiLgSOZRoRr4ctMmfp+/iyPZZkgp2NjYCLNmxkDaqlWwffsOrpWWlgJ2AHD4cAZ8tHAh1waZPWsmzJ07Fw4e+kkoY4PUCuZk54AjFoPPnj0TqhGpzU1PX2tSUwT4+0F8fDycOZslFPlhtWcWScZpbWmFkjL5/j2+sLAAsJ3F7uE0vP/Bh0KVHxZrEf8vn6WnQyV2FdLkjVw5fvwYBAYGytoAHCkTWAtMpWxxaqqI5EVfXx+f8ti5Y4dQ5ItVH2En9f8PHz6E6GjTeQE5IM1bFBQUQEJCAi8k5Qw9x5CwXk1AjB/IBASZgCATEAiZgCATEGQCAiETEGQCgkxAIGQCgkxAkAkIhExAkAkIMgGBkAkIMgEB8C98XiCjwAqsfgAAAABJRU5ErkJggg==",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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"
					 ]
		
		a_image.src = arrsrc[0];a_image.onload = function () {CekJaw();}
		b_image.src = arrsrc[1];b_image.onload = function () {CekJaw();}
		c_image.src = arrsrc[2];c_image.onload = function () {CekJaw();}
		d_image.src = arrsrc[3];d_image.onload = function () {CekJaw();}
		e_image.src = arrsrc[4];e_image.onload = function () {CekJaw();}
		f_image.src = arrsrc[5];f_image.onload = function () {CekJaw();}
		g_image.src = arrsrc[6];g_image.onload = function () {CekJaw();}
		h_image.src = arrsrc[7];h_image.onload = function () {CekJaw();}
		i_image.src = arrsrc[8];i_image.onload = function () {CekJaw();}
		j_image.src = arrsrc[9];j_image.onload = function () {CekJaw();}
		
		var nogmb = [0,1,2,3,4,5,6,7,8,9];
		var fff = false;
		do{
			nogmb = RandomMyArray(nogmb);
			fff = nogmb[arrs[2]]==arrs[3]
		}while(!fff)
		
		//arrs[3] --> untuk gambar benar
		//arrs[2] --> urutan jawaban benar
		
		var inside=0;
		function CekJaw(){
			inside++;
			var Abjad = ["A","B","C","D"];
			if(inside==arrimg.length){
				//console.log(a_image);
				var _img;
				for(var i=0;i<4;i++){
					//console.log(nogmb[i])
					if(nogmb[i]==0)			ctx.drawImage(a_image, 10, 0+59*i,a_image.width, a_image.height);
					else if(nogmb[i]==1)	ctx.drawImage(b_image, 10, 0+59*i,b_image.width, b_image.height);
					else if(nogmb[i]==2)	ctx.drawImage(c_image, 10, 0+59*i,c_image.width, c_image.height);
					else if(nogmb[i]==3)	ctx.drawImage(d_image, 10, 0+59*i,d_image.width, d_image.height);
					else if(nogmb[i]==4)	ctx.drawImage(e_image, 10, 0+59*i,e_image.width, e_image.height);
					else if(nogmb[i]==5)	ctx.drawImage(f_image, 10, 0+59*i,f_image.width, f_image.height);
					else if(nogmb[i]==6)	ctx.drawImage(g_image, 10, 0+59*i,g_image.width, g_image.height);
					else if(nogmb[i]==7)	ctx.drawImage(h_image, 10, 0+59*i,h_image.width, h_image.height);
					else if(nogmb[i]==8)	ctx.drawImage(i_image, 10, 0+59*i,i_image.width, i_image.height);
					else 					ctx.drawImage(j_image, 10, 0+59*i,j_image.width, j_image.height);
					
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,59/2+59*i);
				}
			}
		}
		
		return 0;
	}
			
	function GambarBarisanDeret2(nmcanvas,Arr){
		//ArSisi = [AB,AB,GH,FG];
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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";
		base_image.onload = function () {
			ctx.drawImage(base_image, 0, 10,base_image.width, base_image.height);
		}
		
		return 0;
	}
	function GetSoal1(){
		const Aljabar = MyBarisanDeret1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Rumus suku ke-n suatu barisan adalah "+ArSisi[0]+". <br>";
		ss += "Jumlah suku ke-"+ArSisi[1]+" dan suku ke-"+ArSisi[2]+" dari barisan tersebut adalah ...";
		
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
		const Aljabar = MyBarisanDeret2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		const DrawPGL = GambarBarisanDeret2(canv,ArSisi);
		var ss
		
		ss = "Banyak potongan lidi pada pola ke-"+ArSisi[0]+" adalah ...";
		
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
	function GetSoal3(){
		const Aljabar = MyBarisanDeret3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Tiga suku berikutnya dari barisan "+ArSisi[0]+", ... adalah ...";
		
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
	function GetSoal4(){
		const Aljabar = MyBarisanDeret4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Jumlah bilangan kelipatan "+ArSisi[0]+" dan "+ArSisi[1]+" antara "+ArSisi[2]+" dan "+ArSisi[3]+" adalah ...";
		
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
	function GetSoal5(){
		const Aljabar = MyBarisanDeret5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Perhatikan barisan bilangan berikut:<br>"
		ss += ""+ArSisi[0]+", ...<br>";
		ss += "Suku ke-"+ArSisi[1]+" dari barisan tersebut adalah ...";
		
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
		const Aljabar = MyBarisanDeret6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Jumlah semua bilangan asli antara "+ArSisi[0]+" dan "+ArSisi[1]+" yang habis dibagi "+ArSisi[2]+" tetapi tidak habis dibagi "+ArSisi[3]+" adalah ...";
		
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
	function GetSoal7(){
		const Aljabar = MyBarisanDeret7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		//ss = "Banyak potongan lidi pada pola ke-"+ArSisi[0]+" adalah ...";
		ss = ArSisi[1];
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		noBenar = ArSisi[2];
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyBarisanDeret8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Banyak potongan lidi pada pola ke-"+ArSisi[0]+" adalah ...";
		ss = ArSisi[1]+"<br>"+ArSisi[2];
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		noBenar = ArSisi[3];
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal9(){
		const Aljabar = MyBarisanDeret9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Bilangan-bilangan disusun dan dikelompokkan menurut pola:<br>";
		ss += ""+ArSisi[0]+", ... dan seterusnya.<br>";
		ss += "Bilangan pada kelompok ke-"+ArSisi[1]+" adalah ...	";
		
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
	function GetSoal10(canv){
		const Aljabar = MyBarisanDeret10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		const DrawPGL = GambarBarisanDeret10(canv,ArSisi);
		var ss
		
		ss = "Jika pola di atas dilanjutkan, banyak bulatan pada pola ke-"+ArSisi[0]+" adalah ...";
		
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
	function GetSoal11(){
		const Aljabar = MyBarisanDeret11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Suku "+ArSisi[0]+" dan "+ArSisi[1]+" suatu barisan geometri berturut-turut "+ArSisi[2]+" dan "+ArSisi[3]+". <br>"
		ss += "Suku ke-"+ArSisi[4]+" barisan tersebut adalah ... ";
		
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
	function GetSoal12(){
		const Aljabar = MyBarisanDeret12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Seutas tali dipotong menjadi 5 bagian sehingga ukurannya membentuk deret geometri. <br>";
		ss += "Jika panjang potongan tali terpendek "+ArSisi[0]+" cm dan potongan tali terpanjang "+ArSisi[1]+" cm, maka panjang tali semula adalah ... ";
		
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
	function GetSoal13(){
		const Aljabar = MyBarisanDeret13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Banyak kursi pada barisan pertama sebuah gedung pertunjukkan adalah "+ArSisi[0]+" kursi, baris kedua "+ArSisi[1]+" kursi, dan seterusnya sehingga banyak kursi baris berikutnya selalu bertambah "+ArSisi[3]+" kursi. <br>"
		ss += "Jika dalam gedung tersebut terdapat "+ArSisi[2]+" baris kursi, maka jumlah kursi pada gedung tersebut adalah ...";
		
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
	function GetSoal14(){
		const Aljabar = MyBarisanDeret14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		//ss = "Banyak potongan lidi pada pola ke-"+ArSisi[0]+" adalah ...";
		ss = ArSisi[1];
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		noBenar = ArSisi[2];
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal15(){
		const Aljabar = MyBarisanDeret15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Bakteri akan membelah diri menjadi dua setiap "+ArSisi[0]+" menit. <br>"
		ss += "Jika mula-mula ada "+ArSisi[1]+" bakteri, maka banyaknya bakteri selama "+ArSisi[2]+" jam adalah ..."
		
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
	function GetSoal16(){
		const Aljabar = MyBarisanDeret16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "16. Diketahui "+ArSisi[0]+". <br>"
		ss +=" Nilai dari U\u{2084} + U\u{2085} adalah ..."
		 
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
	function GetSoal17(){
		const Aljabar = MyBarisanDeret17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Satu pasukan parade drum band yang berjumlah "+ArSisi[0]+" orang membentuk formasi barisan. <br>";
		ss += "Paling depan 1 orang, kemudian di belakangnya bertambah "+ArSisi[1]+", dan berikutnya bertambah "+ArSisi[1]+" lagi, dan seterusnya. <br>";
		ss += "Maka banyaknya orang pada barisan terakhir adalah ..."
		
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
	function GetSoal18(){
		const Aljabar = MyBarisanDeret18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Dari barisan geometri diketahui bahwa U"+ArSisi[0]+" = "+ArSisi[1]+", U"+ArSisi[2]+" = "+StringRibuan(ArSisi[3])+", maka U"+ArSisi[4]+" adalah ..."
		
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
	function GetSoal19(){
		const Aljabar = MyBarisanDeret19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Diketahui deret aritmatika dengan nilai suku ke-"+ArSisi[0]+" adalah "+ArSisi[1]+" dan suku ke-"+ArSisi[2]+" adalah "+ArSisi[3]+".  <br>";
		ss += "Jumlah "+ArSisi[4]+" suku pertama deret aritmatika tersebut adalah ...";
		
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
	function GetSoal20(){
		const Aljabar = MyBarisanDeret20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		
		ss = "Peneliti A dan B mengembangbiakkan masing-masing "+ArSisi[0]+" amuba. <br>"
		ss += "Amuba peneliti A mampu membelah diri menjadi dua setiap "+ArSisi[1]+" menit. <br>"
		ss += "Sedangkan amuba peneliti B membelah diri menjadi dua setiap "+ArSisi[2]+" menit. <br>"
		ss += "Amuba peneliti A saat ini menjadi "+ArSisi[3]+". <br>"
		ss += "peneliti B akan memiliki amuba saat ini sebanyak ..";
		
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
	
	
	
	dd1.innerHTML="<p>Bab 19 \u{2192} Barisan dan Deret </p>";
	if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pola yang dibentuk dari potongan lidi berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pola yang dibentuk dari potongan lidi berikut ini!</p>";
		cc1.width = 421;
		cc1.height = 100;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 129;
		cc1.height = 236;
		const DrawBD7 = GambarBarisanDeret7(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 400;
		cc1.height = 160;
		const DrawBD8 = GambarBarisanDeret8(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatkan pola berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatkan pola berikut!</p>";
		cc1.width = 400;
		cc1.height = 140;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 168;
		cc1.height = 240;
		const DrawBD14 = GambarBarisanDeret14(cc1.id,ss[2]);
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
	