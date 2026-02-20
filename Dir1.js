function Print1(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function BilAsliKurang(n){
		var bil = [];
		var i
		for(var i=1;i<n;i++) bil.push(i);
		return bil;
	}
	function BilGanjilKurang(n){
		var bil = [];
		var i
		for(var i=1;i<n;i++) if(Mods(i,2)==1) bil.push(i);
		return bil;
	}
	function BilPrimaKurang(n){
		var bil = [];
		var i
		for(var i=1;i<n;i++)	if(isPrime(i))	bil.push(i);
		return bil;
	}
	function Mods(m,n){
		var m0 = m;
		var m0b = m0;
		var ct = 0;
		do{
			m0b = m0;
			m0-=n;
			ct++;
		}while(m0>=0);
		
		var sisa = Math.abs(m0b);
		return sisa;
	}
	function isPrime(n){
		var ct = 0;
		var i
		for(var i=1;i<=n;i++){
			if(Mods(n,i)==0) ct++;
		}
		return ct==2;
	}
	function irisan(arrA,arrB){
		var arr = [];
		for(var i=0;i<arrA.length;i++){
			for(var j=0;j<arrB.length;j++){
				if(arrA[i]==arrB[j]){
					arr.push(arrA[i]);
				}
			}
		}
		return arr;
	}
	function gabungan(arrA,arrB){
		var arr = arrA.concat(arrB);
		arr.sort(function(a, b){return a-b});
		var fixArr = [];
		var cek=arr[0];
		fixArr.push(arr[0]);
		for(var i=1;i<arr.length;i++){
			if(arr[i]!==cek){
				fixArr.push(arr[i]);
				cek=arr[i];
			}
		}
		return fixArr;
	}
	function BilGenapAntara(a,b){
		var bil = [];
		var i
		for(var i=a;i<b;i++) if(Mods(i,2)==0) bil.push(i);
		return bil;
	}
	function BilGenapKurang(n){
		var bil = [];
		var i
		for(var i=1;i<n;i++) if(Mods(i,2)==0) bil.push(i);
		return bil;
	}
	function fact(n){
		if(n>1){
			return n*fact(n-1);
		}else{
			return 1;
		}
	}
	function nCr(n,r){
		var C1 = fact(n);
		var C2 = fact(r);
		var C3 = fact(n-r);
		var C = Math.abs(C1/(C2*C3));
		return C;
	}
	function kurangAB(arrA,arrB){
		var fixArr = [];
		var ct;
		for(var i=0;i<arrA.length;i++){
			ct=0;
			for(var j=0;j<arrB.length;j++){
				if(arrA[i]==arrB[j]){
					ct++;
				}
			}
			if(ct==0){
				fixArr.push(arrA[i]);
			}
		}
		return fixArr;
	}
	function BilAsliAntara(a,b){
		var bil = [];
		var i
		for(var i=a+1;i<b;i++) bil.push(i);
		return bil;
	}
	function BilGanjilAntara(a,b){
		var bil = [];
		var i
		for(var i=a;i<b;i++) if(Mods(i,2)==1) bil.push(i);
		return bil;
	}
	function BilPrimaAntara(a,b){
		var bil = [];
		var i
		for(var i=a+1;i<b;i++)	if(isPrime(i))	bil.push(i);
		return bil;
	}
	function MyHimpunan1(){
		//1. Sekelompok siswa terdiri dari 25 orang. 
		//Terdapat 14 orang gemar berenang, 
		//15 orang gemar sepakbola, 
		//dan yang tidak gemar keduanya 5 orang. 
		//Banyak siswa yang gemar keduanya adalah ...
		var a0,a1,a2,a3,a4,a5;
		var arDari = ["≤","≥"];
		arDari = RandomMyArray(arDari);
		do{
			a0 = 25;
			a1 = RandomAngkaAtoB(10,6);
			a2 = RandomAngkaAtoB(10,6);
			a3 = RandomAngkaAtoB(2,9);
			a4 = (a1+a2)-(a0-a3);
		}while (a1==a2 || a4<3)
		
		var soal = a1+"x + "+a2+" "+arDari[0]+" "+a4;
		
		var benar = a4;
		var salah1 = a4+1;
		var salah2 = a4+2;
		var salah3 = a4+3;
		var salah4 = a4-1;
		var salah5 = a4-2;
		var salah6 = a4-3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a0,a1,a2,a3,benar,arrSalah];
	}
	function MyHimpunan2(){
		//2. Diketahui himpunan
		//S = {bilangan asli kurang dari 12}
		//A = {bilangan ganjil kurang dari 12}
		//B = {bilangan prima kurang dari 12}
		//Maka (A ∩ B) adalah ...
		var a1,a2,a3,a4,a5;
		var arDari = ["≤","≥"];
		arDari = RandomMyArray(arDari);
		a1 = RandomAngkaAtoB(11,9);
		a2 = BilAsliKurang(a1);
		a3 = BilGanjilKurang(a1);
		a4 = BilPrimaKurang(a1);
		
		var H_irisan = irisan(a3,a4);
		var H_gabung = gabungan(a3,a4);
		
		var soal = a1+"x + "+a2+" "+arDari[0]+" "+a4;
		
		var benar = "{"+H_irisan+"}";
		var salah1 = "{"+a3+"}";
		var salah2 = "{"+a4+"}";
		var salah3 = "{"+a2+"}";
		var salah4 = "{"+H_gabung+"}";
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,benar,arrSalah];
	}
	function MyHimpunan3(){
		//2. Diketahui himpunan
		//S = {bilangan asli kurang dari 12}
		//A = {bilangan ganjil kurang dari 12}
		//B = {bilangan prima kurang dari 12}
		//Maka (A ∩ B)ᶜ adalah ...
		var a1,a2,a3,a4,a5;
		a1 = RandomAngkaAtoB(1,6);
		a2 = RandomAngkaAtoB(a1+6,6);
		a3 = a2-a1-1;
		a4 = a3-RandomAngkaAtoB(1,2);
		var H_GenapAntara = BilGenapAntara(a1,a2);
		var HimPBagian = nCr(a3,a4);
		
		var benar = HimPBagian;
		var salah1 = nCr(a3,0);
		var salah2 = nCr(a3,1);
		var salah3 = nCr(a3,2);
		var salah4 = nCr(a3,3);
		var salah5 = nCr(a3,4);
		var salah6 = nCr(a3,5);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2];
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			var ff3 = arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1;
		}while(ff1 || ff2 || ff3)
		return [a1,a2,a4,benar,arrSalah];
	}
	function MyHimpunan4(){
		var nS,nA,nB,AnB,AuBc;
		do{
			nS = RandomAngkaAtoB(30,10);//36
			//nA = 2nB
			AnB = RandomAngkaAtoB(5,5);//5
			AuBc = RandomAngkaAtoB(5,5);//8
			nB = Math.abs((AnB + nS - AuBc)/3);
			nA = 2*nB
		}while(Mods((AnB + nS - AuBc),3)!==0)
		
		var benar = nA;
		var salah1 = nB;
		var salah2 = nA+1;
		var salah3 = nA+2;
		var salah4 = nB+1;
		var salah5 = nB+2;
		var salah6 = nB+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2];
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2)
		
		
		return [nS,AnB,AuBc,benar,arrSalah];
	}
	function MyHimpunan5(){
		//5. Diketahui 
		//himpunan D = {bilangan genap antara 3 dan 14}, 
		//himpunan L = {bilangan prima kurang dari 8},
		//himpunan semesta S = {bilangan asli kurang dari 14}.
		//Komplemen dari D ⋃ L adalah ...
		var a1,a2,a3,a4;
		a1 = RandomAngkaAtoB(3,2);
		a2 = RandomAngkaAtoB(10,9);
		a3 = a1+RandomAngkaAtoB(0,(a2-a1));
		a4 = a2;
		var HimpD = BilGenapAntara(a1,a2);
		var HimpL = BilPrimaKurang(a3);
		var HimpS = BilAsliKurang(a4);
		var HimpLUD = gabungan(HimpD,HimpL);
		var HimpLUDc = kurangAB(HimpS,HimpLUD);
		var HimpIrisan = irisan(HimpD,HimpL);
		
		var benar = "{"+HimpLUDc+"}";
		var salah1 = "{"+HimpLUD+"}";
		var salah2 = "{"+HimpIrisan+"}";
		var salah3 = "{"+HimpD+"}";
		var salah4 = "{"+HimpL+"}";
		var salah5 = "{"+HimpS+"}";
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff = benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]
		}while(ff)
		
		return [a1,a2,a3,a4,benar,arrSalah];
	}
	function MyHimpunan6(){
		//
		//6. Diketahui
		//S = {bilangan asli kurang dari 11}
		//A = {bilangan prima kurang dari 11}
		//B = {bilangan genap kurang dari 11}
		//Komplemen dari A n B adalah ...
		var a1,a2,a3,a4;
		a1 = RandomAngkaAtoB(11,5);
		var HimpS = BilAsliKurang(a1);
		var HimpA = BilPrimaKurang(a1);
		var HimpB = BilGenapKurang(a1);
		var HimpAUB = gabungan(HimpA,HimpB);
		var HimpAUBc = kurangAB(HimpS,HimpAUB);
		var HimpIrisan = irisan(HimpA,HimpB);
		var HimpIrisanc = kurangAB(HimpS,HimpIrisan);
		
		var benar = "{"+HimpIrisanc+"}";
		var salah1 = "{"+HimpAUB+"}";
		var salah2 = "{"+HimpIrisan+"}";
		var salah3 = "{"+HimpAUBc+"}";
		var salah4 = "{"+HimpA+"}";
		var salah5 = "{"+HimpB+"}";
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff = benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]
		}while(ff)
		
		return [a1,benar,arrSalah];
	}

	function MyHimpunan7(){
		
		//7. Diketahui:
		//S = {x | 1 ≤ x ≤ 10, x bilangan asli}
		//P = {x | 1 < x < 6, x bilangan prima}
		//Q = {x | 1 < x < 9, x bilangan genap}
		//Diagram Venn untuk himpunan-himpunan di atas adalah ...
		var a1,a2,a3,a4;
		a1 = RandomAngkaAtoB(0,1);
		a2 = RandomAngkaAtoB(7,4);
		a3 = RandomAngkaAtoB(5,5);
		a4 = RandomAngkaAtoB(5,5);
		var HimpS = BilAsliAntara(a1-1,a2+1);
		var HimpA = BilPrimaAntara(a1,a3);
		var HimpB = BilGenapAntara(a1,a4);
		var HimpAUB = gabungan(HimpA,HimpB);
		var HimpAUBc = kurangAB(HimpS,HimpAUB);
		var HimpIrisan = irisan(HimpA,HimpB);
		var HimpA_minIrisan = kurangAB(HimpA,HimpIrisan);
		var HimpB_minIrisan = kurangAB(HimpB,HimpIrisan);
		
		var benar = [HimpAUBc,HimpA_minIrisan,HimpIrisan,HimpB_minIrisan];
		var salah1 = [HimpA_minIrisan,HimpAUBc,HimpIrisan,HimpB_minIrisan];
		var salah2 = [HimpA_minIrisan,HimpIrisan,HimpB_minIrisan,HimpAUBc];
		var salah3 = [HimpAUBc,HimpB_minIrisan,HimpIrisan,HimpA_minIrisan];
		var salah4 = [HimpIrisan,HimpA_minIrisan,HimpAUBc,HimpB_minIrisan];
		var salah5 = [HimpIrisan,HimpB_minIrisan,HimpAUBc,HimpA_minIrisan];
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff = benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]
		}while(ff)
		
		return [a1,a2,a3,a4,benar,arrSalah];
	}
	function GambarHimpunan7(nmcanvas,ar){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		// menambahkan image pada canvas //
		let base_image = new Image();
		base_image.src = "data:image/png;base64,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";
		base_image.onload = function () {
			for(var i=0;i<4;i++){
				ctx.drawImage(base_image, 0, 161*i,base_image.width, base_image.height);
				Venn(ar[i],i);
			}
		}
		function Venn(arr,no){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "center";
			ctx.font = "16px Times New Roman";
			ctx.fillText(Abjad[no]+". ",10,20+no*161);
			
			ctx.font = "11px Times New Roman";
			var x0 = [50,95,145,185];
			for(var i=0;i<4;i++){
				for(var j=0;j<arr[i].length;j++){
					ctx.fillText(arr[i][j],x0[i],70+11*j+no*161);
				}
			}
		}
		return 0;
	}
	function MyHimpunan8(){
		//Diketahui himpunan A = {a,b,c,d} dan B = {7,8,9}. 
		//Banyaknya pemetaan yang mungkin dari himpunan A ke himpunan B adalah ...
		var Huruf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var Angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
		var a1,a2,a3,a4;
		do{
			a1 = RandomAngkaAtoB(2,5);
			a2 = RandomAngkaAtoB(2,5);
		}while(a1==a2)
		var HimpA=[];
		var HimpB=[];
		for(var i=0;i<a1;i++) HimpA.push(Huruf[i]);
		for(var i=0;i<a2;i++) HimpB.push(Angka[i]);
		//var pangkat = ["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];
		var benar = a2+""+pangkat[a1];
		var salah1 = a1+""+pangkat[a2];
		var salah2 = a2+""+pangkat[a1-1];
		var salah3 = a2+""+pangkat[a1+1];
		var salah4 = a1+""+pangkat[a2-1];
		var salah5 = a1+""+pangkat[a2+1];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [HimpA,HimpB,benar,arrSalah];
	}
	function MyHimpunan9(){
		//9. Dari 44 siswa dalam kelas, 
		//terdapat 30 siswa gemar pelajaran matematika 
		//dan 26 siswa gemar pelajaran fisika. 
		//Jika 3 siswa tidak gemar kedua pelajaran tersebut, 
		//maka banyaknya siswa yang gemar dengan kedua pelajaran tersebut adalah ...
		var a1,a2,a3,a4,a5;
		do{
			a1 = RandomAngkaAtoB(30,10);//S
			a2 = RandomAngkaAtoB(25,5);//A
			a3 = RandomAngkaAtoB(25,5);//B
			a4 = RandomAngkaAtoB(20,5);//AnB
			a5 = a1-(a2+a3-a4);//AuBc
		}while(a2==a3 || a4==a5 || a5<1);
		
		var benar = a4;
		var salah1 = a5;
		var salah2 = a4+1;
		var salah3 = a4+2;
		var salah4 = a5+1;
		var salah5 = a5+2;
		var salah6 = a5+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff);
		
		return [a1,a2,a3,a4,a5,benar,arrSalah];
	}
	function MyHimpunan10(){
		//Kumpulan-kumpulan berikut ini yang merupakan himpunan adalah ...
		//jawaban: berparas cantik/berkacamata/berbadan pendek/berbadan tinggi
		var arr0 = ["Kumpulan siswi berkacamata","Kumpulan siswi cantik","Kumpulan siswi berbadan pendek","Kumpulan siswi berbadan tinggi"];
		var arr1 = ["Kumpulan buku berwarna merah","Kumpulan buku tebal","Kumpulan buku tipis","Kumpulan buku bagus"];
		var arr2 = ["Kumpulan bilangan prima","Kumpulan bilangan besar","Kumpulan bilangan kecil","Kumpulan bilangan penting"];
		var arr=[arr0,arr1,arr2];
		var a1,a2,a3,a4,a5;
		a1 = RandomAngkaAtoB(-1,3);
		
		var benar = arr[a1][0];
		var salah1 = arr[a1][1];
		var salah2 = arr[a1][2];
		var salah3 = arr[a1][3];
		var arrSalah = [salah1,salah2,salah3];
		return [a1,benar,arrSalah];
	}
	function MyHimpunan11(){
		//Jika M = {Huruf pembentuk kata 'MATEMATIKA'} maka n(M) = ...
		var arr0 = ["Huruf pembentuk kata 'MATEMATIKA'",6];
		var arr1 = ["Huruf pembentuk kata 'INDONESIA'",6];
		var arr2 = ["Huruf pembentuk kata 'INTERNASIONAL'",9];
		var arr3 = ["Huruf pembentuk kata 'BAPAK'",4];
		var arr4 = ["Huruf pembentuk kata 'KALKULUS'",5];
		var arr5 = ["Huruf pembentuk kata 'MATAHARI'",6];
		var arr6 = ["Huruf pembentuk kata 'BAHAGIA'",5];
		var arr7 = ["Huruf pembentuk kata 'PANCASILA'",7];
		
		var arr=[arr0,arr1,arr2,arr3,arr4,arr5,arr6,arr7];
		var a1,a2,a3,a4,a5;
		a1 = RandomAngkaAtoB(-1,8);
		
		var benar = arr[a1][1];
		var salah1 = arr[a1][1]-1;
		var salah2 = arr[a1][1]-2;
		var salah3 = arr[a1][1]-3;
		var salah4 = arr[a1][1]+1;
		var salah5 = arr[a1][1]+2;
		var salah6 = arr[a1][1]+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		return [arr[a1][0],benar,arrSalah];
	}
	function MyHimpunan12(){
		//9. Dari 44 siswa dalam kelas, 
		//terdapat 30 siswa gemar pelajaran matematika 
		//dan 26 siswa gemar pelajaran fisika. 
		//Jika 3 siswa tidak gemar kedua pelajaran tersebut, 
		//maka banyaknya siswa yang gemar dengan kedua pelajaran tersebut adalah ...
		var a1,a2,a3,a4,a5,a6,a7,a8,a9;
		do{
			a1 = RandomAngkaAtoB(30,10);//S
			a2 = RandomAngkaAtoB(25,5);//A
			a3 = RandomAngkaAtoB(25,5);//B
			a4 = RandomAngkaAtoB(20,5);//AnB
			a5 = a1-(a2+a3-a4);//AuBc
			a6 = a2-a4;//Aaja
			a7 = a3-a4;//
			a8 = a5+a7;//Ac
			a9 = a5+a6;//Bc
		}while(a2==a3 || a4==a5 || a5<1);
		
		var benar = a2;
		var salah1 = a3;
		var salah2 = a2+1;
		var salah3 = a2+2;
		var salah4 = a3+1;
		var salah5 = a3+2;
		var salah6 = a2+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff);
		
		return [a1,a8,a9,a5,benar,arrSalah];
	}
	function MyHimpunan13(){
		var a1,a2,a3,a4;
		var Angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
		Angka = RandomMyArray(Angka);
		a1 = [Angka[0],Angka[1],Angka[2],Angka[3],Angka[4]];
		a2 = [Angka[5],Angka[6],Angka[7]];
		a3 = [Angka[8],Angka[9]];
		
		var himpA = a1.concat(a3);
		var himpB = a2.concat(a3);
		var himpIrisan = a3;
		
		himpA.sort(function(a, b){return a-b});
		himpB.sort(function(a, b){return a-b});
		himpIrisan.sort(function(a, b){return a-b});
		
		var benar = a1.sort(function(a, b){return a-b});;
		var salah1 = a2.sort(function(a, b){return a-b});;
		var salah2 = a3.sort(function(a, b){return a-b});;
		var salah3 = a1.concat(a2).sort(function(a, b){return a-b});;
		var salah4 = himpA;
		var salah5 = himpB;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [himpA,himpB,benar,arrSalah];
	}
	function MyHimpunan14(){
		//14. Suatu kelas terdiri dari 42 siswa. 
		//1/3 dari seluruh siswa itu menyukai olahraga berenang, 
		//1/6 nya menyukai olahraga sepakbola, 
		//dan 3/7 nya tidak menyukai kedua olahraga tersebut. 
		//Banyak orang yang menyukai sepakbola adalah ...
		var a1,a2;
		var arrA = [6,8,10,12];
		var arrB = [5,7,9,11];
		do{
			arrA = RandomMyArray(arrA);
			arrB = RandomMyArray(arrB);
			a1 = arrA[0];
			a2 = arrB[0];
			var b1,b2,b3,b4,b5;
			b1 = a1*a2;//S
			b2 = 1/2*b1;//A
			b3 = 1/a1*b1;//B
			b4 = 3/a2*b1;//AUBc
			b5 = (b2+b3)-(b1-b4);//AnB
		}while(b5<0)
		var benar = b5;
		var salah1 = b5+1;
		var salah2 = b5+2;
		var salah3 = b5+3;
		var salah4 = b4+1;
		var salah5 = b4+2;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		return [b1,"1/2","1/"+a1,"3/"+a2,benar,arrSalah];
	}
	function MyHimpunan15(){
		//15. Dari 20 siswa diperoleh data bahwa 9 siswa tidak suka jeruk, 
		//7 siswa tidak suka apel, 
		//dan 7 siswa suka jeruk maupun apel. 
		//Siswa yang tidak suka jeruk maupun apel sebanyak ...
		var a1,a2,a3,a4,a5,a6,a7,a8,a9;
		do{
			a1 = RandomAngkaAtoB(30,10);//S
			a2 = RandomAngkaAtoB(25,5);//A
			a3 = RandomAngkaAtoB(25,5);//B
			a4 = RandomAngkaAtoB(20,5);//AnB
			a5 = a1-(a2+a3-a4);//AuBc
			a6 = a2-a4;//Aaja
			a7 = a3-a4;//
			a8 = a5+a7;//Ac
			a9 = a5+a6;//Bc
		}while(a2==a3 || a4==a5 || a5<1);
		
		var benar = a5;
		var salah1 = a2;
		var salah2 = a3;
		var salah3 = a2+1;
		var salah4 = a3+1;
		var salah5 = a5+1;
		var salah6 = a5+2;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff);
		
		return [a1,a8,a9,a5,benar,arrSalah];
	}
			
	function StringMinus(ff){
		var strff = ""+ff;
		const gg = strff.split("-");
		var fix = gg[0];
		for(var i=1;i<gg.length;i++){
			fix+="–"+gg[i];
		}
		return fix;
	}
	function SplitString(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		var i;
		for (var i=0; i<len; i++){
			gg.push(strff.substr(i,1));
		}
		
		return gg;
	}
	function StringRibuan(str){
		var strfix = "";
		var arfix = new Array();
		var StrArray = SplitString(str);
		var i;
		
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
	function NamaEkskul(){
		var Ekskul = ["berenang", "sepakbola", "pencak silat", "komputer", "bola voli", "bola basket", "panahan", "pramuka", "catur", "menari", "PMR"];
		Ekskul = RandomMyArray(Ekskul);
		return Ekskul;
	}
	function GetSoal1(){
		const MyData = MyHimpunan1();
		//[a0,a1,a2,a3,benar,arrSalah];
		var a0=MyData[0];
		var a1=MyData[1];
		var a2=MyData[2];
		var a3=MyData[3];
		var benar=MyData[4];
		var arrSalah=MyData[5];
		
		//1. Sekelompok siswa terdiri dari 25 orang. 
		//Terdapat 14 orang gemar berenang, 
		//15 orang gemar sepakbola, 
		//dan yang tidak gemar keduanya 5 orang. 
		//Banyak siswa yang gemar keduanya adalah ...

		var Ekskul = NamaEkskul();
		var ss
		ss = "Sekelompok siswa terdiri dari "+a0+" orang. ";
		ss += "Terdapat "+a1+" orang gemar "+Ekskul[0]+", ";
		ss += ""+a2+" orang gemar "+Ekskul[1]+", ";
		ss += "dan yang tidak gemar keduanya "+a3+" orang. ";
		ss += "Banyak siswa yang gemar keduanya adalah ... ";
		
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
	function GetSoal2(){
		const MyData = MyHimpunan2();
		//[a1,benar,arrSalah];
		var a1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//2. Diketahui himpunan
		//S = {bilangan asli kurang dari 12}
		//A = {bilangan ganjil kurang dari 12}
		//B = {bilangan prima kurang dari 12}
		//Maka (A ∩ B) adalah ...
		
		var ss
		ss = "Diketahui himpunan <br>";
		ss += "S = {bilangan asli kurang dari "+a1+"} <br>";
		ss += "A = {bilangan ganjil kurang dari "+a1+"} <br>";
		ss += "B = {bilangan prima kurang dari "+a1+"} <br>";
		ss += "Maka (A "+symN+" B) adalah ... ";
		
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
	function GetSoal3(){
		const MyData = MyHimpunan3();
		//[a1,a2,benar,arrSalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var a3=MyData[2];
		var benar=MyData[3];
		var arrSalah=MyData[4];
		
		//3. Diketahui H = {x | 1 < x < 16, x ∊ bilangan genap}
		//Banyak himpunan bagian dari H yang terdiri dari 6 anggota adalah ...

		var ss
		//ss = "Diketahui H = {x | "+a1+" < x < "+a2+", x ∊ bilangan genap} <br>";
		ss = "Diketahui H = {x | "+a1+" < x < "+a2+", x \u{2208} bilangan asli} <br>";
		//ss += "Banyak himpunan bagian dari H yang terdiri dari 6 anggota adalah ...";
		ss += "Banyak himpunan bagian dari H yang terdiri dari "+a3+" anggota adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		for(var i=0;i<4;i++)	Ar[i]=StringRibuan(Ar[i]);
		
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
		const MyData = MyHimpunan4();
		//[nS,AnB,AuBc,benar,arrSalah];
		var nS=MyData[0];
		var AnB=MyData[1];
		var AuBc=MyData[2];
		var benar=MyData[3];
		var arrSalah=MyData[4];
		
		
		//4. Dalam suatu kelas terdapat 36 orang siswa. 
		//Banyak siswa yang gemar olahraga dua kali dari banyak siswa yang gemar kesenian, 
		//sedangkan banyak siswa gemar olahraga dan kesenian adalah 5 orang. 
		//Jika terdapat 8 siswa yang tidak gemar olahraga maupun kesenian, 
		//maka banyak siswa yang hanya gemar olahraga adalah ...
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Dalam suatu kelas terdapat "+nS+" orang siswa. <br>";
		ss += "Banyak siswa yang gemar "+Ekskul[0]+" dua kali dari banyak siswa yang gemar "+Ekskul[1]+", ";
		ss += "sedangkan banyak siswa gemar "+Ekskul[0]+" dan "+Ekskul[1]+" adalah "+AnB+" orang. <br>";
		ss += "Jika terdapat "+AuBc+" siswa yang tidak gemar "+Ekskul[0]+" maupun "+Ekskul[1]+", ";
		ss += "maka banyak siswa yang hanya gemar "+Ekskul[0]+" adalah ... ";
		
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
		const MyData = MyHimpunan5();
		//[a1,a2,a3,a4,benar,arrSalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var a3=MyData[2];
		var a4=MyData[3];
		var benar=MyData[4];
		var arrSalah=MyData[5];
		
		//5. Diketahui 
		//himpunan D = {bilangan genap antara 3 dan 14}, 
		//himpunan L = {bilangan prima kurang dari 8},
		//himpunan semesta S = {bilangan asli kurang dari 14}.
		//Komplemen dari D U L adalah ...
		
		var ss
		ss = "Diketahui :<br>";
		ss += "himpunan D = {bilangan genap antara "+a1+" dan "+a2+"}, <br>";
		ss += "himpunan L = {bilangan prima kurang dari "+a3+"}, <br>";
		ss += "himpunan semesta S = {bilangan asli kurang dari "+a4+"}. <br>";
		ss += "Komplemen dari D "+symU+" L adalah ... ";
		
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
		const MyData = MyHimpunan6();
		//[a1,benar,arrSalah];
		var a1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//6. Diketahui
		//S = {bilangan asli kurang dari 11}
		//A = {bilangan prima kurang dari 11}
		//B = {bilangan genap kurang dari 11}
		//Komplemen dari A n B adalah ...
		
		var ss
		ss = "Diketahui :<br>";
		ss += "S = {bilangan asli kurang dari "+a1+"} <br>";
		ss += "A = {bilangan prima kurang dari "+a1+"} <br>";
		ss += "B = {bilangan genap kurang dari "+a1+"} <br>";
		ss += "Komplemen dari A "+symN+" B adalah ... ";
		
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
		const MyData = MyHimpunan7();
		//[a1,benar,arrSalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var a3=MyData[2];
		var a4=MyData[3];
		var benar=MyData[4];
		var arrSalah=MyData[5];
		
		//7. Diketahui:
		//S = {x | 1 ≤ x ≤ 10, x bilangan asli}
		//P = {x | 1 < x < 6, x bilangan prima}
		//Q = {x | 1 < x < 9, x bilangan genap}
		//Diagram Venn untuk himpunan-himpunan di atas adalah ...
		
		//\u2264 = ≤ - kurang dari sama dengan
		//\u2265 = ≥ - lebih dari sama dengan
		
		var ss
		ss = "Diketahui : <br>";
		ss += "S = {x | "+a1+" \u2264 x \u2264 "+a2+", x bilangan asli} <br>";
		ss += "A = {x | "+a1+" < x < "+a3+", x bilangan prima} <br>";
		ss += "B = {x | "+a1+" < x < "+a4+", x bilangan genap} <br>";
		ss += "Diagram Venn untuk himpunan-himpunan di atas adalah ... <br>";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		//var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(ss);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);

		return ArFix;
	}
	function GetSoal8(){
		const MyData = MyHimpunan8();
		//[HimpA,HimpB,benar,arrSalah];
		var HimpA=MyData[0];
		var HimpB=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//Diketahui himpunan A = {a,b,c,d} dan B = {7,8,9}. 
		//Banyaknya pemetaan yang mungkin dari himpunan A ke himpunan B adalah ...
		
		var ss
		ss = "Diketahui himpunan A = {"+HimpA+"} dan B = {"+HimpB+"}. <br>";
		ss += "Banyaknya pemetaan yang mungkin dari himpunan A ke himpunan B adalah ... ";
		
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
		const MyData = MyHimpunan9();
		//[a1,a2,a3,a4,a5,benar,arrSalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var a3=MyData[2];
		var a4=MyData[3];
		var a5=MyData[4];
		var benar=MyData[5];
		var arrSalah=MyData[6];
		
		//9. Dari 44 siswa dalam kelas, 
		//terdapat 30 siswa gemar pelajaran matematika 
		//dan 26 siswa gemar pelajaran fisika. 
		//Jika 3 siswa tidak gemar kedua pelajaran tersebut, 
		//maka banyaknya siswa yang gemar dengan kedua pelajaran tersebut adalah ...
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Dari "+a1+" siswa dalam kelas, "
		ss += "terdapat "+a2+" siswa gemar "+Ekskul[0]+" "
		ss += "dan "+a3+" siswa gemar "+Ekskul[1]+". <br>";
		ss += "Jika "+a5+" siswa tidak gemar kedua kegiatan tersebut, ";
		ss += "maka banyaknya siswa yang gemar dengan kedua pelajaran tersebut adalah ... ";
		
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
	function GetSoal10(){
		const MyData = MyHimpunan10();
		var a1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//Kumpulan-kumpulan berikut ini yang merupakan himpunan adalah ...
		//jawaban: berparas cantik/berkacamata/berbadan pendek/berbadan tinggi
		
		var ss
		ss = "Kumpulan-kumpulan berikut ini yang merupakan himpunan adalah ... ";
		
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
		const MyData = MyHimpunan11();
		//[arr[a1][0],benar,arrSalah];
		var a1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//11. Jika M = {Huruf pembentuk kata "MATEMATIKA"} maka n(M) = ...
		
		var ss
		ss = "Jika M = {"+a1+"}, maka n(M) = ... ";
		
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
	function GetSoal12(){
		const MyData = MyHimpunan12();
		//[a1,a8,a9,a5,benar,arrSalah];
		var a1=MyData[0];
		var a8=MyData[1];
		var a9=MyData[2];
		var a5=MyData[3];
		var benar=MyData[4];
		var arrSalah=MyData[5];
		
		//12. Dari 14 siswa, 6 siswa tidak suka matematika, 
		//7 siswa tidak suka fisika, 
		//dan 4 siswa tidak keduanya. 
		//Banyaknya siswa yang suka matematika adalah ...
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Dari "+a1+" siswa, "
		ss += ""+a8+" siswa tidak suka "+Ekskul[0]+", "
		ss += ""+a9+" siswa tidak suka "+Ekskul[1]+", ";
		ss += "dan "+a5+" siswa tidak keduanya. <br>";
		ss += "Banyaknya siswa yang suka matematika adalah ... ";
		
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
	function GetSoal13(){
		const MyData = MyHimpunan13();
		//[HimpA,HimpB,benar,arrSalah];
		var HimpA=MyData[0];
		var HimpB=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//Diketahui :
		//P = {2,3,5,7,10,12}
		//Q = {1,3,5,7,9}
		//Hasil P – Q adalah ...
		
		var ss
		ss = "Diketahui <br>"
		ss += "P = {"+HimpA+"} <br>"
		ss += "Q = {"+HimpB+"}. <br>";
		ss += "Hasil P "+mins+" Q adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = "{"+Ar[0]+"}";
		Ar[1] = "{"+Ar[1]+"}";
		Ar[2] = "{"+Ar[2]+"}";
		Ar[3] = "{"+Ar[3]+"}";
		
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
		const MyData = MyHimpunan14();
		//[b1,"1/2","1/"+a1,"3/"+a2,benar,arrSalah];
		var b1=MyData[0];
		var b2=MyData[1];
		var b3=MyData[2];
		var b4=MyData[3];
		var benar=MyData[4];
		var arrSalah=MyData[5];
		
		//14. Suatu kelas terdiri dari 42 siswa. 
		//1/3 dari seluruh siswa itu menyukai olahraga berenang, 
		//1/6 nya menyukai olahraga sepakbola, 
		//dan 3/7 nya tidak menyukai kedua olahraga tersebut. 
		//Banyak orang yang menyukai keduanya adalah ...
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Suatu kelas terdiri dari "+b1+" siswa. <br>"
		ss += ""+b2+" dari seluruh siswa itu menyukai "+Ekskul[0]+", "
		ss += ""+b3+" nya menyukai "+Ekskul[1]+", ";
		ss += "dan "+b4+" nya tidak menyukai kedua kegiatan tersebut.<br>";
		ss += "Banyak orang yang menyukai keduanya adalah ... ";
		
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
	function GetSoal15(){
		const Aljabar = MyHimpunan15();
		//[a1,a8,a9,a5,benar,arrSalah];
		var a1=Aljabar[0];
		var a8=Aljabar[1];
		var a9=Aljabar[2];
		var a5=Aljabar[3];
		var benar=Aljabar[4];
		var arrSalah=Aljabar[5];
		
		//15. Dari 20 siswa diperoleh data bahwa 9 siswa tidak suka jeruk, 
		//7 siswa tidak suka apel, 
		//dan 7 siswa suka jeruk maupun apel. 
		//Siswa yang tidak suka jeruk maupun apel sebanyak ...
		
		var Buah = NamaBuah();
		var ss
		ss = "Dari "+a1+" siswa diperoleh data bahwa "+a8+" siswa tidak suka "+Buah[0]+", "
		ss += ""+a9+" siswa tidak suka "+Buah[1]+", "
		ss += "dan "+a5+" siswa suka "+Buah[0]+" maupun "+Buah[1]+".<br> ";
		ss += "dan "+a5+" siswa tidak keduanya. <br>";
		ss += "Siswa yang tidak suka "+Buah[0]+" maupun "+Buah[1]+" sebanyak ... ";
		
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
					GetSoal15];
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
	
	dd1.innerHTML="<p>Bab 1 \u{2192} Himpunan </p>";
	if(no==7){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 380;
		cc1.height= 644;
		var gambar = GambarHimpunan7(cc1.id,ss[2]);
		dd4.innerHTML="<br>"+"Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else{
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		dd4.innerHTML="Jawaban : "+ss[1];
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
