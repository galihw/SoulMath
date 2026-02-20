function Print5(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function MySPLDV1(){
		//1. Nilai x yang memenuhi sistem persamaan x - 2y = 10 dan 3x + 2y = -2 adalah ...
		do{
			var a1 = 1;
			var a2 = RandomAngkaAtoB(2,8);
			var a3 = RandomAngkaAtoB(2,8);
			var b1 = RandomAngkaAtoB(2,8);
			var b2 = RandomAngkaAtoB(2,8);
			var b3 = RandomAngkaAtoB(2,8);
			
			var Dx = a3*b2-(-a2*b3);
			var Dy = 1*b3-(-a3*b1);
			var D = 1*b2-(-a2*b1);
			
			var ffx = Mods(Dx,D)==0;
			var ffy = Mods(Dy,D)==0;
			var xx = Dx/D;
			var yy = Dy/D;
			
		}while (!ffx || !ffy || xx==yy)
		var soal1 = "x \u{2212} "+a2+"y = "+a3;
		var soal2 = b1+"x + "+b2+"y = "+b3;
		//–
		var benar = xx;
		var salah1 = yy;
		var salah2 = "\u{2212}"+xx;
		var salah3 = "\u{2212}"+yy;
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal1,soal2,benar,arrSalah];
	}
	function MySPLDV2(){
		//2. Himpunan penyelesaian sistem persamaan 2x + 4y = 8 dan 5x + 2y = -4 adalah ...
		do{
			var a1 = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var b1 = RandomAngkaAtoB(2,18);
			var b2 = RandomAngkaAtoB(2,18);
			
			var xx = RandomAngkaAtoB(2,6);
			var yy = -RandomAngkaAtoB(2,6);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
		}while (b3>=0 || a3<=0)
		
		var soal1 = a1+"x + "+a2+"y = "+a3;
		var soal2 = b1+"x + "+b2+"y = \u{2212}"+Math.abs(b3);
		//–
		var benar = "{("+xx+",\u{2212}"+Math.abs(yy)+")}";
		var salah1 = "{(\u{2212}"+Math.abs(yy)+","+xx+")}";
		var salah2 = "{("+Math.abs(yy)+",\u{2212}"+Math.abs(xx)+")}";
		var salah3 = "{("+Math.abs(yy)+","+xx+")}";
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal1,soal2,benar,arrSalah];
	}
	function MySPLDV3(){
		//3. Nilai y yang memenuhi sistem persamaan 2y = 10 - x dan 2y + 3x + 2 = 0 adalah
		do{
			var a1 = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var b1 = RandomAngkaAtoB(2,18);
			var b2 = RandomAngkaAtoB(2,18);
			
			var xx = RandomAngkaAtoB(2,6);
			var yy = -RandomAngkaAtoB(2,6);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
		}while (b3>=0 || a3<=0 || xx==Math.abs(yy))
		
		var soal1 = a2+"y = "+a3+" \u{2212} "+a1+"x";
		var soal2 = b1+"x + "+b2+"y + "+Math.abs(b3)+" = 0";
		//–
		var benar = "\u{2212}"+Math.abs(yy);
		var salah1 = Math.abs(xx);
		var salah2 = "\u{2212}"+Math.abs(xx);
		var salah3 = Math.abs(yy);
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal1,soal2,benar,arrSalah];
	}
	function MySPLDV4(){
		//4. Penyelesaian sistem persamaan 3x–2y = –1 dan 5x + y = 7 adalah x dan y. 
		do{
			var a1 = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var b1 = RandomAngkaAtoB(2,18);
			var b2 = RandomAngkaAtoB(2,18);
			
			var xx = -RandomAngkaAtoB(2,6);
			var yy = RandomAngkaAtoB(2,6);
			
			var a3 = a1*xx-a2*yy;
			var b3 = b1*xx+b2*yy;
			
			
			var c1 = RandomAngkaAtoB(2,5);
			var c2 = RandomAngkaAtoB(2,5);
			var c3 = c1*xx+c2*yy;
			var c4 = c1*xx-c2*yy;
			var c5 = -c1*xx+c2*yy;
			var c6 = -c1*xx-c2*yy;
			
		}while (b3<=0 || a3>=0)
		
		var soal1 = a1+"x \u{2212} "+a2+"y = \u{2212}"+Math.abs(a3);
		var soal2 = b1+"x + "+b2+"y = "+b3;
		var soal3 = c1+"x + "+c2+"y";
		//–
		var benar = c3;	if(c3<0) benar = "\u{2212}"+Math.abs(c3);
		var salah1 = c4;if(c4<0) salah1 = "\u{2212}"+Math.abs(c4);
		var salah2 = c5;if(c5<0) salah2 = "\u{2212}"+Math.abs(c5);
		var salah3 = c6;if(c6<0) salah3 = "\u{2212}"+Math.abs(c6);
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal1,soal2,soal3,benar,arrSalah];
	}
	function MySPLDV5(){
		//4. Penyelesaian sistem persamaan 3x–2y = –1 dan 5x + y = 7 adalah x dan y. 
		do{
			var a1 = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var b1 = RandomAngkaAtoB(2,18);
			var b2 = RandomAngkaAtoB(2,18);
			
			var xx = -RandomAngkaAtoB(2,6);
			var yy = RandomAngkaAtoB(2,6);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
			
			var c1 = RandomAngkaAtoB(2,5);
			var c2 = RandomAngkaAtoB(2,5);
			var c3 = c1*xx+c2*yy;
			var c4 = c1*xx-c2*yy;
			var c5 = -c1*xx+c2*yy;
			var c6 = -c1*xx-c2*yy;
			
		}while (b3<=0 || a3<=0 || a1*b2==a2*b1)
		
		
		var soal1 = a1+"p + "+a2+"q = "+a3;
		var soal2 = b1+"p + "+b2+"q = "+b3;
		var soal3 = c1+"p + "+c2+"q";
		//–
		var benar = c3;	if(c3<0) benar = "\u{2212}"+Math.abs(c3);
		var salah1 = c4;if(c4<0) salah1 = "\u{2212}"+Math.abs(c4);
		var salah2 = c5;if(c5<0) salah2 = "\u{2212}"+Math.abs(c5);
		var salah3 = c6;if(c6<0) salah3 = "\u{2212}"+Math.abs(c6);
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal1,soal2,soal3,benar,arrSalah];
	}
	function MySPLDV6(){
		//4. Penyelesaian sistem persamaan 3x–2y = –1 dan 5x + y = 7 adalah x dan y. 
		do{
			var a1 = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var b1 = RandomAngkaAtoB(2,18);
			var b2 = RandomAngkaAtoB(2,18);
			
			var xx = 1000*RandomAngkaAtoB(2,12);
			var yy = 1000*RandomAngkaAtoB(2,12);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
		}while (xx==yy || a1*b2==a2*b1)
		
		//–
		var benar = xx;
		var salah1 = yy;
		var salah2 = yy+1*1000;
		var salah3 = yy+2*1000;
		var salah4 = yy-1*1000;
		var salah5 = yy-2*1000;
		var salah6 = yy+3*1000;
		var salah7 = yy-3*1000;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [a1,a2,a3,b1,b2,b3,benar,arrSalah];
	}
	function MySPLDV7(){
		//7. Selisih dua bilangan adalah 10. 
		//Jika bilangan pertama dikalikan dua hasilnya adalah tiga kurangnya dari bilangan yang kedua. 
		//Salah satu bilangan itu adalah ...
		do{
			var beda1 = RandomAngkaAtoB(2,18);
			var beda2 = RandomAngkaAtoB(2,18);
			var kali = 2;
			var a2 = beda1 - beda2;
			var a1 = kali*beda1 - beda2;
		}while (beda1<=beda2);
		//–
		var benar = a1;
		var salah1 = a1+4;
		var salah2 = a1+1;
		var salah3 = a1+2;
		var salah4 = a1-1;
		var salah5 = a1-2;
		var salah6 = a1+3;
		var salah7 = a1-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [beda1,beda2,kali,benar,arrSalah];
	}
	function MySPLDV8(){
		//8. Selisih dua bilangan asli adalah 4, sedangkan hasil kalinya 96. 
		//Salah satu bilangan tersebut adalah ...
		do{
			var bb = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var a1 = a2+bb;
			var kk = a1*a2;
		}while (bb==a2);
		//–
		var benar = ""+a2;
		var salah1 = ""+(a2+4);
		var salah2 = ""+(a2+1);
		var salah3 = ""+(a2+2);
		var salah4 = a2-1; if(salah4<0)	salah4="\u{2212}"+Math.abs(a2-1);
		var salah5 = a2-2; if(salah5<0)	salah5="\u{2212}"+Math.abs(a2-2);
		var salah6 = ""+(a2+3);
		var salah7 = a2-3; if(salah7<0)	salah7="\u{2212}"+Math.abs(a2-3);
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [bb,kk,benar,arrSalah];
	}
	function MySPLDV9(){
		//4. Penyelesaian sistem persamaan 3x–2y = –1 dan 5x + y = 7 adalah x dan y. 
		do{
			var a1 = RandomAngkaAtoB(2,8);
			var a2 = RandomAngkaAtoB(2,8);
			var b1 = RandomAngkaAtoB(2,8);
			var b2 = RandomAngkaAtoB(2,8);
			
			var xx = 1000*RandomAngkaAtoB(2,12);
			var yy = 1000*RandomAngkaAtoB(2,12);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
			var c1 = RandomAngkaAtoB(4,5);
			var c2 = RandomAngkaAtoB(4,5);
			var c3 = c1*xx+c2*yy;
			var c4 = (c1+1)*xx+c2*yy;
			var c5 = c1*xx+(c2+1)*yy;
			var c6 = (c1-1)*xx+c2*yy;
			var c7 = c1*xx+(c2-1)*yy;
			var c8 = (c1+1)*xx+(c2+1)*yy;
			var c9 = (c1-1)*xx+(c2-1)*yy;
		}while (xx==yy || a1*b2==a2*b1 || a1==b1 || a2==b2)
		//–
		var benar = c3;
		var salah1 = c4;
		var salah2 = c5;
		var salah3 = c6;
		var salah4 = c7;
		var salah5 = c8;
		var salah6 = c9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [a1,a2,a3,b1,b2,b3,c1,c2,benar,arrSalah];
	}
	function MySPLDV10(){
		//4. Penyelesaian sistem persamaan 3x–2y = –1 dan 5x + y = 7 adalah x dan y. 
		do{
			var a1 = 1;
			var a2 = 1;
			var b1 = 4;
			var b2 = 2;
			
			var xx = RandomAngkaAtoB(2,12);
			var yy = RandomAngkaAtoB(2,12);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
			var c1 = 5000;
			var c2 = 2000;
			var c3 = c1*xx+c2*yy;
			var c4 = c1*(xx+1)+c2*yy;
			var c5 = c1*xx+c2*(yy+1);
			var c6 = c1*(xx-1)+c2*yy;
			var c7 = c1*xx+c2*(yy-1);
			var c8 = c1*(xx+1)+c2*(yy+1);
			var c9 = c1*(xx-1)+c2*(yy-1);
		}while (xx==yy || a1*b2==a2*b1)
		//–
		var benar = c3;
		var salah1 = c4;
		var salah2 = c5;
		var salah3 = c6;
		var salah4 = c7;
		var salah5 = c8;
		var salah6 = c9;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [a3,b3,benar,arrSalah];
	}
	function MySPLDV11(){
		//11. Budi membeli 2 kaos dan sebuah sweater di pasar dengan harga Rp300.000,00.
		//Sesampai dirumah ternyata salah satu kaos sobek, 
		//sehingga ia memutuskan untuk menukarkan satu kaos dengan sebuah sweater. 
		//Karena sweater lebih mahal maka ia harus membayar lagi Rp60.000,00.
		//Harga masing-masing kaos dan sweater, berturut-turut adalah ... 
		do{
			var a1 = 2;
			var a2 = 1;
			var b1 = -1;
			var b2 = 1;
			
			var xx = 10000*RandomAngkaAtoB(6,12);
			var yy = 10000*RandomAngkaAtoB(6,12);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
			var cx1 = xx;//Rp"+StringRibuan(a3)+",00
			var cy1 = yy;
			var cx2 = xx+10000;
			var cy2 = yy+10000;
			var cx3 = xx-10000;
			var cy3 = yy-10000;
		}while (xx>=yy)
		//–
		var benar = "Rp"+StringRibuan(cx1)+",00 dan Rp"+StringRibuan(cy1)+",00";
		var salah1 = "Rp"+StringRibuan(cx2)+",00 dan Rp"+StringRibuan(cy1)+",00";
		var salah2 = "Rp"+StringRibuan(cx1)+",00 dan Rp"+StringRibuan(cy2)+",00";
		var salah3 = "Rp"+StringRibuan(cx2)+",00 dan Rp"+StringRibuan(cy2)+",00";
		var salah4 = "Rp"+StringRibuan(cx3)+",00 dan Rp"+StringRibuan(cy1)+",00";
		var salah5 = "Rp"+StringRibuan(cx1)+",00 dan Rp"+StringRibuan(cy3)+",00";
		var salah6 = "Rp"+StringRibuan(cx3)+",00 dan Rp"+StringRibuan(cy3)+",00";
		var salah7 = "Rp"+StringRibuan(cy1)+",00 dan Rp"+StringRibuan(cx1)+",00";
		var salah8 = "Rp"+StringRibuan(cy2)+",00 dan Rp"+StringRibuan(cx2)+",00";
		var salah9 = "Rp"+StringRibuan(cy3)+",00 dan Rp"+StringRibuan(cx3)+",00";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [a3,b3,benar,arrSalah];
	}
	function MySPLDV12(){
		//12. Suatu persegi panjang memiliki keliling 28 cm. 
		//Jika lebarnya kurang 2 cm dari panjangnya, 
		//maka luas persegi panjang tersebut adalah ...
		do{
			var bb = RandomAngkaAtoB(2,18);
			var a2 = RandomAngkaAtoB(2,18);
			var a1 = a2+bb;
			var kk = 2*(a1+a2);
			var LL = a1*a2;
		}while (bb==a2);
		//–
		var benar = a1*a2;
		var salah1 = (a1+1)*a2;
		var salah2 = a1*(a2+1);
		var salah3 = (a1+1)*(a2+1);
		var salah4 = (a1-1)*a2;
		var salah5 = a1*(a2-1);
		var salah6 = (a1-1)*(a2-1);
		var salah7 = (a1+1)*(a2-1);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [kk,bb,benar,arrSalah];
	}
	function MySPLDV13(){
		//13. Hari ini seorang pedagang majalah berhasil menjual majalah A dan majalah B sebanyak 28 eksemplar. 
		//Harga 1 majalah A adalah Rp.6.000,00 dan harga 1 majalah B adalah Rp.9.000,00. 
		//Jika hasil penjualan kedua majalah hari ini adalah Rp. 216.000,00, 
		//maka banyak majalah A dan majalah B yang terjual hari ini, berturut-turut, adalah ...
		do{
			var a1 = 1;
			var a2 = 1;
			var b1 = 1000*RandomAngkaAtoB(6,12);
			var b2 = 1000*RandomAngkaAtoB(6,12);
			
			var xx = RandomAngkaAtoB(6,12);
			var yy = RandomAngkaAtoB(6,12);
			
			var a3 = a1*xx+a2*yy;
			var b3 = b1*xx+b2*yy;
			
			var cx1 = xx;
			var cy1 = yy;
			var cx2 = xx+1;
			var cy2 = yy+1;
			var cx3 = xx-1;
			var cy3 = yy-1;
		}while (b1>=b2)
		//–
		var benar = cx1+" dan "+cy1+ " eksemplar";
		var salah1 = cx2+" dan "+cy1+ " eksemplar";
		var salah2 = cx1+" dan "+cy2+ " eksemplar";
		var salah3 = cx2+" dan "+cy2+ " eksemplar";
		var salah4 = cx3+" dan "+cy1+ " eksemplar";
		var salah5 = cx1+" dan "+cy3+ " eksemplar";
		var salah6 = cx3+" dan "+cy3+ " eksemplar";
		var salah7 = cy1+" dan "+cx1+ " eksemplar";
		var salah8 = cy2+" dan "+cx2+ " eksemplar";
		var salah9 = cy3+" dan "+cx3+ " eksemplar";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] ||benar==arrSalah[2])
		return [a3,b1,b2,b3,benar,arrSalah];
	}

	function GetSoal1(){
		const MyData = MySPLDV1();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//1. Nilai x yang memenuhi sistem persamaan x - 2y = 10 dan 3x + 2y = -2 adalah ...
		
		var ss
		ss = "Nilai x yang memenuhi sistem persamaan "+soal1+" dan "+soal2+" adalah ...";
		
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
		const MyData = MySPLDV2();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//2. Himpunan penyelesaian sistem persamaan 2x + 4y = 8 dan 5x + 2y = -4 adalah ...
		
		var ss
		ss = "Himpunan penyelesaian sistem persamaan "+soal1+" dan "+soal2+" adalah ...";
		
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
		const MyData = MySPLDV3();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//2. Himpunan penyelesaian sistem persamaan 2x + 4y = 8 dan 5x + 2y = -4 adalah ...
		
		var ss
		ss = "Nilai y yang memenuhi sistem persamaan "+soal1+" dan "+soal2+" adalah ...";
		
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
		const MyData = MySPLDV4();
		//[soal1,soal2,soal3,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var soal3=MyData[2];
		var benar=MyData[3];
		var arrSalah=MyData[4];
		
		//4. Penyelesaian sistem persamaan 3x–2y = –1 dan 5x + y = 7 adalah x dan y. 
		//Nilai 4x + 3y adalah ..
		
		var ss
		ss = "Penyelesaian sistem persamaan "+soal1+" dan "+soal2+" adalah x dan y. <br>";
		ss += "Nilai "+soal3+" adalah ...";
		
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
		const MyData = MySPLDV5();
		//[soal1,soal2,soal3,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var soal3=MyData[2];
		var benar=MyData[3];
		var arrSalah=MyData[4];
		
		//5. Diketahui persamaan 2p + 5q = 19 dan 11p + 5q = 37. 
		//Nilai 5p + 7q = ...
		
		var ss
		ss = "Diketahui persamaan "+soal1+" dan "+soal2+"<br>";
		ss += "Nilai "+soal3+" = ...";
		
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
		const MyData = MySPLDV6();
		//[a1,a2,a3,b1,b2,b3,benar,arrSalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var a3=MyData[2];
		var b1=MyData[3];
		var b2=MyData[4];
		var b3=MyData[5];
		var benar=MyData[6];
		var arrSalah=MyData[7];
		
		//6. Harga 7 ekor ayam dan 6 ekor itik Rp.67.250,00. 
		//Sedangkan harga 2 ekor ayam dan 3 ekor itik Rp. 25.000,00. 
		//Harga 1 ekor ayam adalah ...
		
		var ss
		ss = "Harga "+a1+" ekor ayam dan "+a2+" ekor itik Rp"+StringRibuan(a3)+",00. <br>";
		ss += "Sedangkan harga "+b1+" ekor ayam dan "+b2+" ekor itik Rp"+StringRibuan(b3)+",00.<br>";
		ss += "Harga 1 ekor ayam adalah ...";
		
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
	function GetSoal7(){
		const MyData = MySPLDV7();
		//[beda1,beda2,kali,benar,arrSalah];
		var beda1=MyData[0];
		var beda2=MyData[1];
		var kali=MyData[2];
		var benar=MyData[3];
		var arrSalah=MyData[4];
		
		//7. Selisih dua bilangan adalah 10. 
		//Jika bilangan pertama dikalikan dua hasilnya adalah tiga kurangnya dari bilangan yang kedua. 
		//Salah satu bilangan itu adalah ...
		
		var ss
		ss = "Selisih dua bilangan adalah "+beda1+". <br>";
		ss += "Jika bilangan pertama dikalikan dua hasilnya adalah "+beda2+" kurangnya dari bilangan yang kedua. <br>";
		ss += "Bilangan terbesar adalah ...";
		
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
	function GetSoal8(){
		const MyData = MySPLDV8();
		//[bb,kk,benar,arrSalah];
		var bb=MyData[0];
		var kk=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//8. Selisih dua bilangan asli adalah 4, sedangkan hasil kalinya 96. 
		//Salah satu bilangan tersebut adalah ...
		
		var ss
		ss = "Selisih dua bilangan asli adalah "+bb+", ";
		ss += "sedangkan hasil kalinya "+kk+".  <br>";
		ss += "Bilangan terkecil adalah ...";
		
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
	function GetSoal9(){
		const MyData = MySPLDV9();
		//[a1,a2,a3,b1,b2,b3,benar,arrSalah];
		var a1=MyData[0];
		var a2=MyData[1];
		var a3=MyData[2];
		var b1=MyData[3];
		var b2=MyData[4];
		var b3=MyData[5];
		var c1=MyData[6];
		var c2=MyData[7];
		var benar=MyData[8];
		var arrSalah=MyData[9];
		
		//9. Harga 4 buah compact disc dan 5 buah kaset Rp. 200.000,00, 
		//sedangkan harga 2 buah compact disk dan 3 buah kaset yang sama Rp.110.000,00. 
		//Harga 6 buah compact disc dan 5 buah kaset adalah ...
		
		var ss
		ss = "Harga "+a1+" buah compact disc dan "+a2+" buah kaset Rp"+StringRibuan(a3)+",00, <br>";
		ss += "sedangkan harga "+b1+" buah compact disk dan "+b2+" buah kaset yang sama Rp"+StringRibuan(b3)+",00.<br>";
		ss += "Harga "+c1+" buah compact disc dan "+c2+" buah kaset adalah ...";
		
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
		const MyData = MySPLDV10();
		//[a3,b3,benar,arrSalah];
		var a3=MyData[0];
		var b3=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//10. Ditempat parkir sebuah pertokoan terdapat 75 kendaraan yang terdiri dari mobil dan sepeda motor. 
		//Banyak roda seluruhnya ada 210. 
		//Jika tarif parkir untuk mobil Rp. 5.000,00 dan sepeda motor Rp. 2.000,00,
		//maka pendapatan uang parkir saat itu adalah ...
		
		var ss
		ss = "Ditempat parkir sebuah pertokoan terdapat "+a3+" kendaraan yang terdiri dari mobil dan sepeda motor.  <br>";
		ss += "Banyak roda seluruhnya ada "+b3+".<br>";
		ss += "Jika tarif parkir untuk mobil Rp5.000,00 dan sepeda motor Rp2.000,00, .<br>";
		ss += "maka pendapatan uang parkir saat itu adalah ...";
		
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
		const MyData = MySPLDV11();
		//[a3,b3,benar,arrSalah];
		var a3=MyData[0];
		var b3=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//11. Budi membeli 2 kaos dan sebuah sweater di pasar dengan harga Rp300.000,00.
		//Sesampai dirumah ternyata salah satu kaos sobek, 
		//sehingga ia memutuskan untuk menukarkan satu kaos dengan sebuah sweater. 
		//Karena sweater lebih mahal maka ia harus membayar lagi Rp60.000,00.
		//Harga masing-masing kaos dan sweater, berturut-turut adalah ...
		
		var ss
		ss = "Budi membeli 2 kaos dan sebuah sweater di pasar dengan harga Rp"+StringRibuan(a3)+",00. <br>";
		ss += "Sesampai dirumah ternyata salah satu kaos sobek, <br>";
		ss += "sehingga ia memutuskan untuk menukarkan satu kaos dengan sebuah sweater. <br>";
		ss += "Karena sweater lebih mahal maka ia harus membayar lagi Rp"+StringRibuan(b3)+",00. <br>";
		ss += "Harga masing-masing kaos dan sweater, berturut-turut adalah ...";
		
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
		const MyData = MySPLDV12();
		//[kk,bb,benar,arrSalah];
		var kk=MyData[0];
		var bb=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//12. Suatu persegi panjang memiliki keliling 28 cm. 
		//Jika lebarnya kurang 2 cm dari panjangnya, 
		//maka luas persegi panjang tersebut adalah ...
		
		var ss
		ss = "Suatu persegi panjang memiliki keliling "+kk+" cm. <br> ";
		ss += "Jika lebarnya kurang "+bb+" cm dari panjangnya, ";
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" cm\u00B2<br>B. "+Ar[1]+" cm\u00B2<br>C. "+Ar[2]+" cm\u00B2<br>D. "+Ar[3]+" cm\u00B2</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal13(){
		const MyData = MySPLDV13();
		//[a3,b1,b2,b3,benar,arrSalah];
		var a3=MyData[0];
		var b1=MyData[1];
		var b2=MyData[2];
		var b3=MyData[3];
		var benar=MyData[4];
		var arrSalah=MyData[5];
		
		//13. Hari ini seorang pedagang majalah berhasil menjual majalah A dan majalah B sebanyak 28 eksemplar. 
		//Harga 1 majalah A adalah Rp.6.000,00 dan harga 1 majalah B adalah Rp.9.000,00. 
		//Jika hasil penjualan kedua majalah hari ini adalah Rp. 216.000,00, 
		//maka banyak majalah A dan majalah B yang terjual hari ini, berturut-turut, adalah ...
		
		var ss
		ss = "Hari ini seorang pedagang majalah berhasil menjual majalah A dan majalah B sebanyak "+a3+" eksemplar. <br>";
		ss += "Harga 1 majalah A adalah Rp"+StringRibuan(b1)+",00 dan harga 1 majalah B adalah Rp"+StringRibuan(b2)+",00.  <br>";
		ss += "Jika hasil penjualan kedua majalah hari ini adalah Rp"+StringRibuan(b3)+",00,  <br>";
		ss += "maka banyak majalah A dan majalah B yang terjual hari ini, berturut-turut, adalah ...";
		
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
					GetSoal13];
	
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
	
	
	dd1.innerHTML="<p>Bab 5 \u{2192} Persamaan Linier Dua Variabel </p>";
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
