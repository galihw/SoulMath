function Print16(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function MyPeluang1(){
		var ArPas = [];
		for(var i=1;i<=6;i++){
			for(var j=1;j<=6;j++){
				ArPas.push([i,j,(i+j)]);
			}
		}
		//console.log(ArPas)
		
		var Juml = RandomAngkaAtoB(1,11);
		var nData = 0;
		for(var i=0;i<ArPas.length;i++){
			if(ArPas[i][2]==Juml) nData+=1;
		}
		//console.log(Juml,nData)
		
		var ArSisi = [Juml,ArPas];
		
		var benar = nData;
		var salah1 = nData+1;
		var salah2 = nData+2;
		var salah3 = nData-1;
		var salah4 = nData-2;
		var salah5 = nData-3;
		var salah6 = nData+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]<0 || arrSalah[1]<0 || arrSalah[2]<0;
		}while(ff1||ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang2(){
		var ArSoal=[["Pengambilan pertama dan kedua terambil nomor ganjil.","Peluang terambil bola nomor genap pada pengambilan ketiga adalah ...","5/10  ×  4/9  ×  5/8","100/720","5/36"],
				["Pengambilan pertama dan kedua terambil nomor ganjil.","Peluang terambil bola nomor ganjil pada pengambilan ketiga adalah ...","5/10 × 4/9 × 3/8","60/720","1/12"],
				["Pengambilan pertama dan kedua terambil nomor genap.","Peluang terambil bola nomor genap pada pengambilan ketiga adalah ...","5/10 × 4/9 × 3/8","60/720","1/12"],
				["Pengambilan pertama dan kedua terambil nomor genap.","Peluang terambil bola nomor ganjil pada pengambilan ketiga adalah ...","5/10 × 4/9 × 5/8","100/720","5/36"],
				["Pengambilan pertama terambil ganjil dan kedua terambil nomor genap.","Peluang terambil bola nomor ganjil pada pengambilan ketiga adalah ...","5/10 × 5/9 × 4/8","100/720","5/36"],
				["Pengambilan pertama terambil ganjil dan kedua terambil nomor genap.","Peluang terambil bola nomor genap pada pengambilan ketiga adalah ...","5/10 × 5/9 × 4/8","100/720","5/36"],
				["Pengambilan pertama terambil genap dan kedua terambil nomor ganjil.","Peluang terambil bola nomor ganjil pada pengambilan ketiga adalah ...","5/10 × 5/9 × 4/8","100/720","5/36"],
				["Pengambilan pertama terambil genap dan kedua terambil nomor ganjil.","Peluang terambil bola nomor genap pada pengambilan ketiga adalah ...","5/10 × 5/9 × 4/8","100/720","5/36"]
				];
		
		var nn = RandomAngkaAtoB(-1,ArSoal.length);
		var njaw = RandomAngkaAtoB(1,3);
		
		//console.log(ArSoal[nn])
		
		var ArSisi = [ArSoal[nn],1];
		var arrSalah = [];
		var arrSalah1 = ["5/10  ×  5/9  ×  5/8", "5/10  ×  5/10  ×  5/8", "5/10  ×  4/10  ×  3/10"];
		var arrSalah2 = ["125/720","125/1000","60/1000"];
		var arrSalah3 = ["25/144","1/8","3/50"];
		var BigSalah = [1,2,arrSalah1,arrSalah2,arrSalah3];
		
		var benar = ArSoal[nn][njaw];
		var salah1 = BigSalah[njaw][0];
		var salah2 = BigSalah[njaw][1];
		var salah3 = BigSalah[njaw][2];
		arrSalah = [salah1,salah2,salah3];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//}while(ff1);
		return [ArSisi,benar,arrSalah,njaw-2,nn,[0,1,2,3]];
	}
	function MyPeluang3(){
		var ArWarna = ["Merah","Oranye","Kuning","Hijau","Biru","Merah Muda","Ungu","Coklat"];
		var ArBanyak = [6,5,3,3,2,4,2,5];
		var Total = 0;
		var Peluang = [];
		var Pecahan = [];
		for(var i=0;i<ArBanyak.length;i++){
			Total += ArBanyak[i];
		}
		//console.log(Total);
		for(var i=0;i<ArBanyak.length;i++){
			Peluang.push(ArBanyak[i]/Total);
			Peluang[i]=SplitKomaString(DigitKoma(Peluang[i],3));
			//Pecahan.push(ArBanyak[i]+"/"+Total);
			Pecahan.push([ArBanyak[i],Total]);
		}
		var nn = RandomAngkaAtoB(-1,ArWarna.length);
		
		var ArSisi = [ArWarna[nn]];
		var mode = RandomAngkaAtoB(-1,2);
		
		var arrSalah = Peluang;
		var benar = Peluang[nn];
		if(mode==1){
			arrSalah = Pecahan;
			benar = Pecahan[nn];
		}
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		return [ArSisi,benar,arrSalah,mode];
	}
	function MyPeluang4(){
		var ArSoal=[["mata dadu genap",[1,2],[1,3],[2,3],[1,6]],
							["mata dadu ganjil",[1,2],[1,3],[2,3],[1,6]],
							["mata dadu prima",[1,2],[1,3],[2,3],[1,6]],
							["mata dadu kelipatan 3",[1,3],[1,2],[2,3],[1,6]],
							["mata dadu kurang dari 1",[0,1],[1,3],[2,3],[1,6]],
							["mata dadu kurang dari 2",[1,6],[1,3],[2,3],[1,2]],
							["mata dadu kurang dari 3",[1,3],[1,2],[2,3],[1,6]],
							["mata dadu kurang dari 4",[1,2],[1,3],[2,3],[1,6]],
							["mata dadu kurang dari 5",[2,3],[1,3],[1,2],[1,6]],
							["mata dadu kurang dari 6",[5,6],[1,3],[1,2],[1,6]],
							["mata dadu kurang dari 7",[1,1],[1,3],[1,2],[0,1]],
							["mata dadu lebih dari 0",[1,1],[1,3],[2,3],[0,1]],
							["mata dadu lebih dari 1",[5,6],[1,3],[2,3],[1,2]],
							["mata dadu lebih dari 2",[2,3],[1,2],[1,3],[1,6]],
							["mata dadu lebih dari 3",[1,2],[1,3],[2,3],[1,6]],
							["mata dadu lebih dari 4",[1,3],[2,3],[1,2],[1,6]],
							["mata dadu lebih dari 5",[1,6],[1,3],[1,2],[5,6]],
							["mata dadu lebih dari 6",[0,1],[1,3],[1,2],[1,1]]
							];
		var nn = RandomAngkaAtoB(-1,ArSoal.length);
		var njaw = RandomAngkaAtoB(1,3);
		
		//console.log(ArSoal[nn]);
		
		var ArSisi = [ArSoal[nn][0],1];
		var arrSalah = [];
		
		var benar = ArSoal[nn][1];
		var salah1 = ArSoal[nn][2];
		var salah2 = ArSoal[nn][3];
		var salah3 = ArSoal[nn][4];
		arrSalah = [salah1,salah2,salah3];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang5(){
		var Arr15 = [];
		for(var i=1;i<15;i++){
			for(var j=1;j<15;j++){
				for(var k=1;k<15;k++){
					if(i+j+k==15)	Arr15.push([i,j,k])
				}
			}
		}
		Arr15 = RandomMyArray(Arr15);
		var Soal = Arr15[0];
		var Tanya = ["putih","hijau","merah"];
		var nn = RandomAngkaAtoB(-1,Tanya.length);
		
		//console.log(ArSoal[nn]);
		
		var ArSisi = [Arr15[0],Tanya[nn]];
		var arrSalah = [];
		
		var benar = [Arr15[0][nn],15];
		var salah1 = [Arr15[1][nn],15];
		var salah2 = [Arr15[2][nn],15];
		var salah3 = [Arr15[3][nn],15];
		var salah4 = [Arr15[4][nn],15];
		var salah5 = [Arr15[5][nn],15];
		var salah6 = [Arr15[6][nn],15];
		var salah7 = [Arr15[7][nn],15];
		var salah8 = [Arr15[8][nn],15];
		var salah9 = [Arr15[9][nn],15];
		var salah10 = [Arr15[10][nn],15];
		var salah11 = [Arr15[11][nn],15];
		var salah12 = [Arr15[12][nn],15];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12];
		arrSalah = RandomMyArray(arrSalah);
		/*do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		*/
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang6(){
		var ArSoal=[["lebih dari 0","1",[1,1]],
					["lebih dari 1","7/8",[7,8]],
					["lebih dari 2","6/8",[6,8]],
					["lebih dari 3","5/8",[5,8]],
					["lebih dari 4","4/8",[4,8]],
					["lebih dari 5","3/8",[3,8]],
					["lebih dari 6","2/8",[2,8]],
					["lebih dari 7","1/8",[1,8]],
					["lebih dari 8","0",[0,1]],
					["kurang dari 1","0",[0,1]],
					["kurang dari 2","1/8",[1,8]],
					["kurang dari 3","2/8",[2,8]],
					["kurang dari 4","3/8",[3,8]],
					["kurang dari 5","4/8",[4,8]],
					["kurang dari 6","5/8",[5,8]],
					["kurang dari 7","6/8",[6,8]],
					["kurang dari 8","7/8",[7,8]],
					["kurang dari 9","1",[1,1]],
					["genap","4/8",[4,8]],
					["ganjil","4/8",[4,8]],
					["prima","4/8",[4,8]],
					["kelipatan 3","2/8",[2,8]],
					["kelipatan 4","2/8",[2,8]]
					];
		
		var nn = RandomAngkaAtoB(-1,ArSoal.length);
		
		//console.log(ArSoal[nn]);
		
		var ArSisi = [ArSoal[nn][0],1];
		var arrSalah = [];
		
		var benar = [ArSoal[nn][1],ArSoal[nn][2]];
		var salah1 = ["0",[0,1]];
		var salah2 = ["1/8",[1,8]];
		var salah3 = ["2/8",[2,8]];
		var salah4 = ["3/8",[3,8]];
		var salah5 = ["4/8",[4,8]];
		var salah6 = ["5/8",[5,8]];
		var salah7 = ["6/8",[6,8]];
		var salah8 = ["7/8",[7,8]];
		var salah9 = ["1",[1,1]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0][0]==benar || arrSalah[1][0]==benar || arrSalah[2][0]==benar;
			var ff2 = arrSalah[1][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[1][0];
		}while(ff1 || ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang7(){
		var ArSoal=[["ketiganya gambar","1/8",[1,8]],
					["ketiganya angka","1/8",[1,8]],
					["dua angka","3/8",[3,8]],
					["dua gambar","3/8",[3,8]],
					["satu angka","3/8",[3,8]],
					["satu gambar","3/8",[3,8]],
					["paling sedikit satu gambar","7/8",[7,8]],
					["paling sedikit satu angka","7/8",[7,8]],
					["paling banyak satu angka","4/8",[4,8]],
					["paling banyak satu gambar","4/8",[4,8]],
					["paling banyak dua angka","7/8",[7,8]],
					["paling banyak dua gambar","7/8",[7,8]]
					];
		
		var nn = RandomAngkaAtoB(-1,ArSoal.length);
		
		//console.log(ArSoal[nn]);
		
		var ArSisi = [ArSoal[nn][0],1];
		var arrSalah = [];
		
		
		var benar = [ArSoal[nn][1],ArSoal[nn][2]];
		var salah1 = ["0",[0,1]];
		var salah2 = ["1/8",[1,8]];
		var salah3 = ["2/8",[2,8]];
		var salah4 = ["3/8",[3,8]];
		var salah5 = ["4/8",[4,8]];
		var salah6 = ["5/8",[5,8]];
		var salah7 = ["6/8",[6,8]];
		var salah8 = ["7/8",[7,8]];
		var salah9 = ["1",[1,1]];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0][0]==benar || arrSalah[1][0]==benar || arrSalah[2][0]==benar;
			var ff2 = arrSalah[1][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[1][0];
		}while(ff1 || ff2);
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang8(){
		var Arr36 = [];
		for(var i=1;i<36;i++){
			for(var j=1;j<36;j++){
				for(var k=1;k<36;k++){
					for(var l=1;l<36;l++){
						if(i+j+k+l==36 && i>1 && j>1 && k>1 && l>1 && i!==j && i!==k && i!==l && j!==k && j!==l && k!==l)	Arr36.push([i,j,k,l]);
					}
				}
			}
		}
		Arr36 = RandomMyArray(Arr36);
		var Soal = Arr36[0];
		var Tanya = ["pramuka","voli","PMR","KIR"];
		var nn = RandomAngkaAtoB(-1,Tanya.length);
		
		//console.log(ArSoal[nn]);
		
		var ArSisi = [Arr36[0],Tanya[nn]];
		var arrSalah = [];
		
		var benar = [Arr36[0][nn]+"/36",[Arr36[0][nn],36]];
		var salah1 = [Arr36[1][nn]+"/36",[Arr36[1][nn],36]];
		var salah2 = [Arr36[2][nn]+"/36",[Arr36[2][nn],36]];
		var salah3 = [Arr36[3][nn]+"/36",[Arr36[3][nn],36]];
		var salah4 = [Arr36[4][nn]+"/36",[Arr36[4][nn],36]];
		var salah5 = [Arr36[5][nn]+"/36",[Arr36[5][nn],36]];
		var salah6 = [Arr36[6][nn]+"/36",[Arr36[6][nn],36]];
		var salah7 = [Arr36[7][nn]+"/36",[Arr36[7][nn],36]];
		var salah8 = [Arr36[8][nn]+"/36",[Arr36[8][nn],36]];
		var salah9 = [Arr36[9][nn]+"/36",[Arr36[9][nn],36]];
		var salah10 = [Arr36[10][nn]+"/36",[Arr36[10][nn],36]];
		var salah11 = [Arr36[11][nn]+"/36",[Arr36[11][nn],36]];
		var salah12 = [Arr36[12][nn]+"/36",[Arr36[12][nn],36]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12];
		arrSalah = RandomMyArray(arrSalah);
		/*
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			var ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		*/
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang9(){
		var ArSoal=[["paling banyak 1 orang anak laki-laki","5/16",[5,16]],
					["paling banyak 2 orang anak laki-laki","11/16",[11,16]],
					["paling banyak 3 orang anak laki-laki","15/16",[15,16]],
					["paling banyak 4 orang anak laki-laki","1",[1,1]],
					["paling banyak 1 orang anak perempuan","5/16",[5,16]],
					["paling banyak 2 orang anak perempuan","11/16",[11,16]],
					["paling banyak 3 orang anak perempuan","15/16",[15,16]],
					["paling banyak 4 orang anak perempuan","1",[1,1]],
					["semuanya laki-laki","1/16",[1,16]],
					["semuanya perempuan","1/16",[1,16]],
					["1 laki-laki dan 3 perempuan","4/16",[4,16]],
					["3 laki-laki dan 1 perempuan","4/16",[4,16]],
					["2 laki-laki dan 2 perempuan","6/16",[6,16]]
					];
		
		var nn = RandomAngkaAtoB(-1,ArSoal.length);
		
		var ArSisi = [ArSoal[nn][0],1];
		var arrSalah = [];
		
		var benar = [ArSoal[nn][1],ArSoal[nn][2]];
		var salah1 = ["0",[0,1]];
		var salah2 = ["1/16",[1,16]];
		var salah3 = ["2/16",[2,16]];
		var salah4 = ["3/16",[3,16]];
		var salah5 = ["4/16",[4,16]];
		var salah6 = ["5/16",[5,16]];
		var salah7 = ["6/16",[6,16]];
		var salah8 = ["7/16",[7,16]];
		var salah9 = ["8/16",[8,16]];
		var salah10 = ["9/16",[9,16]];
		var salah11 = ["10/16",[10,16]];
		var salah12 = ["11/16",[11,16]];
		var salah13 = ["12/16",[12,16]];
		var salah14 = ["13/16",[13,16]];
		var salah15 = ["14/16",[14,16]];
		var salah16 = ["15/16",[15,16]];
		var salah17 = ["1",[1,1]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12,salah13,salah14,salah15,salah16,salah17];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0][0]==benar || arrSalah[1][0]==benar || arrSalah[2][0]==benar;
			var ff2 = arrSalah[1][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[1][0];
		}while(ff1 || ff2);
		
		return [ArSisi,benar,arrSalah];
	}
	function MyPeluang10(){
		do{
			var dalam = RandomAngkaAtoB(1,10);
			var selisih = RandomAngkaAtoB(1,10);
			var luar = dalam+selisih;
		}while(dalam==selisih);
		
		var LuasD = dalam**2;
		var LuasL = luar**2;
		var LuasE = selisih**2;
		var BedaLuas = LuasL - LuasD;
		
		
		var ArSisi = [dalam,selisih];
		
		//"(\u0006"
		var benar = [BedaLuas+"/"+LuasL,[BedaLuas,LuasL]];
		var salah1 = [BedaLuas+"/"+LuasD,[BedaLuas,LuasD]];
		var salah2 = [LuasE+"/"+LuasD,[LuasE,LuasD]];
		var salah3 = [LuasE+"/"+LuasL,[LuasE,LuasL]];
		var salah4 = [LuasE+"/"+BedaLuas,[LuasE,BedaLuas]];
		var salah5 = [LuasD+"/"+BedaLuas,[LuasD,BedaLuas]];
		var salah6 = [LuasL+"/"+BedaLuas,[LuasL,BedaLuas]];
		var salah7 = [BedaLuas+"/"+LuasE,[BedaLuas,LuasE]];
		var salah8 = [BedaLuas+"/"+LuasL,[BedaLuas,LuasL]];
		var salah9 = [BedaLuas+"/"+LuasD,[BedaLuas,LuasD]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0][0]==benar || arrSalah[1][0]==benar || arrSalah[2][0]==benar;
			var ff2 = arrSalah[1][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[0][0] || arrSalah[2][0]==arrSalah[1][0];
		}while(ff1 || ff2);
		
		return [ArSisi,benar,arrSalah];
	}
	
	
function GambarPeluang10(nmcanvas,arrs,mode,arr,ss){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base1_image = new Image();
	let base2_image = new Image();
	base1_image.src = "data:image/png;base64,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";
	base1_image.onload = function () {
		ctx.drawImage(base1_image, 0, 5,base1_image.width, base1_image.height);
		ctx.font = "16px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(arrs[0],131,110);
		ctx.fillText(arrs[1],180,110);
	}
	return 0;
}
function GambarPeluang10b(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][1][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][0],35,18+46*i);
					ctx.fillText(arrs[i][1][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang9(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][1][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][0],35,18+46*i);
					ctx.fillText(arrs[i][1][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang8(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][1][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][0],35,18+46*i);
					ctx.fillText(arrs[i][1][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang7(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][1][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][0],35,18+46*i);
					ctx.fillText(arrs[i][1][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang6(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][1][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][0],35,18+46*i);
					ctx.fillText(arrs[i][1][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang5(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][0],35,18+46*i);
					ctx.fillText(arrs[i][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang4(nmcanvas,arrs){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base2_image = new Image();
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base2_image.onload = function () {
		CekJaw();
	}
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==1){
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			for(var i=0;i<4;i++){
				if(arrs[i][1]==1){
					ctx.textAlign = "left";
					ctx.fillText(arrs[i][0],25,22+46*i);
				}else{
					ctx.drawImage(base2_image, 0, 46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][0],35,18+46*i);
					ctx.fillText(arrs[i][1],35,38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang3(nmcanvas,arrs,mode,arr,ss){
	const canvas = document.getElementById(nmcanvas);
	const ctx = canvas.getContext("2d");
	// menambahkan image pada canvas //
	let base1_image = new Image();
	let base2_image = new Image();
	base1_image.src = "data:image/png;base64,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";
	base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
	
	base1_image.onload = function () {
		CekJaw();
	}
	base2_image.onload = function () {
		CekJaw();
	}
	
	var inside=0;
	function CekJaw(){
		inside++;
		if(inside==2){
			ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			ctx.font = "16px Times New Roman";
			ctx.fillText(ss,0,270+15)
			for(var i=0;i<4;i++){
				if(mode==0){
					ctx.textAlign = "left";
					ctx.fillText(arr[i],25,25+270+22+46*i);
					
				}else{
					ctx.drawImage(base2_image, 0, 25+270+46*i,base2_image.width, base2_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arr[i][0],35,25+270+18+46*i);
					ctx.fillText(arr[i][1],35,25+270+38+46*i);
					ctx.textAlign = "left";
				}
				ctx.fillText(Abjad[i]+".",0,25+270+23+46*i);
			}
		}
	}
	
	return 0;
}
function GambarPeluang2(nmcanvas,arr,nn,njaw){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		var arImage = [[],[],[]];
		for(var i=0;i<3;i++){
			for(var j=0;j<8;j++){
				arImage[i][j] = new Image();
				//arImage[i].push(new Image());
			}
		}


		arSrcImage = [[					
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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"
					],[
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUJSURBVHhe7d0xctpMGMbx1zkLUDCcYHUCksaV23SiNI07l3RuRGk6t67SRJzAOoHHhaW78O1KAlYCoZkISSu+/29GE6QlmQyPtS8WL9q7nSYAACD1I/8TAABoFEYAACwURgAALBRGAAAsFEY4Z7tYS5I/xnCRI4bKjcKYbGXhebI+cxYl64V4d3dyZzbv9ESrG0dHqjJMEj1BelZGi8JzkrWXHbe2n5/5ILpHjjfIym6xzY9lmD8rmK9r9CkO/J3S/w0Rfxfmxw5CXx9XuyA2O/EuUPp5vvWsunF0ojrDLBOVBXTYFxXoR/mRQBX20R9yvEFxkGaqgvA0G+bPSr0WRnMi+qFOJQ3otDCGfimoQpD142hfXYZl6QRqPY8J1Q3keIvCna+LYlWtY/6s1uul1NHjq7zOR/le2Vb+bHRM03G+r42noiSSr9js1I2jC5czrKCmYqUGB5Dj7UnWK9moQJ7m+YEC5s9LnG++mU2sk3U0kVn+cK9uHC7ZyssyEv/5UQ6pTXRi0VLGh885ip9dwUXk6L5E/r5HonQsL97x81+v9Bkj8+d5dKWiI4msvZVIGOvfTPJD2mj+ai7n51ss4Wwjy/FCT71wEzkOQyxfkf5jOpGnj480lzj0Jdr8lFJtxBnOF8bPb7v17VvKjW5143CB6Yr7Le8PbzWX60YyfwpE6RTtWOEKchya2WR++K1+NH+SQBXnTObP8xwujGOZ6hAj+4J3/CWR+HKfvlOtG4crzGS6mr7Jx+OlyRSuI8fhKRS+AubPi/Sv2P2r6IbKOt+q24nrxtGhqo42fVyVMgn9YmZpN2Qq1mM6Q7ob+0OONyPLwN/tY4lL2TJ/Vuu3MJqTTZlwdCD5pnSQ9klpTr7DmH96otWNo2UXM8zaxe2xbNu3+ZsJVOXfncs2MuwJOd6gLJdDXqW51WD+PI/1GAEAsNCVCgCAhcIIAICFwggAgIXCCACAhcIIAIClt65Uc9++NtFs2z4yHKa2c6tDrs2RYbv4ugYAABYupQIAYKEwAgBgoTACAGDpsTCadd3yRU1L22G9sMQsc+OJtx87s/hpsl5Y42v9r6I7ZDh4yVYWnnd2UeG6XJqO40rI8PpM800/zN3cizetTe/2fjiW3e1dHe56m9/93f47hbvFc3f47pHhkMWBn9/4e38zcEtdLk3HcRVk2I4eC2NZ9sIfJ9FT2TIpxx+AdFmVyiDRPTIcCjOhpstEpa/36aRal0vTcTRHhu1x5zPG7YssI1+e6xZBVVMZpw+28mdjdrO91HgqSiKx195Eh8hwMEaPrxdW4a/Lpek4roEM2+NMYdyaFPx7qV48eisvy0j850exfxRmE2tvNJFZ/hDdI8PbUpdL03G0jwz/jRuFMVnLaqMkeKqaUk2Tx0okjPU7pPwQ3EKGAG6EE4Vx+7KUSD3IL+vNyZHpavwt7w9vZy8bfH5bfVLJt3zmD9EtMrw9dbk0HUf7yPDfOFAYs2vZ5ctre2ZCXU3f5OPkc6uxTJVIZF/wjr8kEl/u+Y2kY2R4W+pyaTqO9pFhI3kTTm+K7f0lob9TdleUFvrHrqisw3G///9qJ3YJGQ5YRadhXS5Nx3FFZHh1PRfG7MU+394f7vz0+znlrdiWbCbZ/ZjyKyZntIgMB8m8YVHH1z197ZVfmFzrcmk6jobIsDWsrgEAgMWd7zECAOAACiMAABYKIwAAFgojAAAWCiMAAAci/wGq1XYfHzgrCgAAAABJRU5ErkJggg==",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAAqCAYAAAApk/tkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAToSURBVHhe7d0xcuJIFMbx5z0LEFCcoHUCZhNHTicToUmcOSRzIkKTOXU0yUgnsE7gcmDpLtpuSYiWbEa7CKEW+/9VqYzUeGqKz7wG8VDfZJoAAIDcX+VPAACgMTECAGBhYgQAwMLECACAhYkRzolWW0nL2xgvcsRYOToxpvpJ5Yl3cyM3q6g8Vki3q+K42TyeeM5II1l5nmybgaRWlnlmq9p90q1XHLe2H+/lIC6PHK8Q9fQ/M1/XcEoSZEr/t1QQZkl5qBL6mYjKgnwgyQIlmfhhPoThJIGfZybiZ/U0ioxUEVi1Lyqosk0CVdvHcMjxClFPT+LYxBhmvg7xWDah3wiuFiyGYIqpH+oA8iyaBfWrvIBa96OguoEcrxH19FROnUpNtxvZqUAeluWBmkh+7XRs82m5r03noiSWj6Tcx8VN7p/leTkp9/4lNRcrRTiAHK8P9fR0Dk2Mqfx+jUUtRJ68w+cVXuOc+GJmPXknM9F3x2hE8rSOxX+8lyrFmU4wXsu0+pyj/tkVXESO7qOeduHQxJjIR6x/zGfy8PZmTvFKot/rx7sf0sgSo5TK1tuIhIl+Z1Ie0ibL5zzrYkskXOxkPV3p0gs3keM4UE+7cK4rdTFbVq9CJ8sHCZTI++fhpad9W9JPofFtDExX3E95vXtpOV03keVDIEqnascMV5Dj2FBPT+PcxFgLqmYqcx1qbJ8ATz4kFl9uvz2HDleYYrqZv8jb/Z+KKVxHjuNDPT2RfovtjLxLSvmZaY4z9Fv/WpdU0QlHe7GTjnW06eOqkVHo1zPMuyFzSfk3QHfjYMjxalBPT+fUxFg8oUxYOiCz6VCbT1B7XPk88QZnCqayMjO5VLkV7eL2WLHt2/yLvM33rPZjZDoQcrxC1NNTsR4jAAAW5z5jBABgSEyMAABYmBgBALAwMQIAYGFiBADAMlhXqrluX59otu0fGY5T37m1IdfuyLBffF0DAAALp1IBALAwMQIAYGFiBADAMuDEaNZ1Kxc1bWzVemGpWebGE28/9s3ip+l2ZY1v9b+KyyHD0UsjWXnet4sKt+XSdRxnQobnZ5pvhmGu5l6/aG1+tffqWHG1d1Vd9ba8+rv9O7WrxXN1+MsjwzFLAr+88Pf+YuCWtly6juMsyLAfA06MTcUDfyiiXxXLpBz+APJlVY4Gicsjw7EwBTVfJip/vL8W1bZcuo6jOzLsjzufMUZPso59eWxbBFXNZZrfiOTXzuwWe7npXJTEYq+9iQsiw9GY3D//YRX+tly6juMcyLA/zkyMkUnBv5Xji0dH8rSOxX+8F/tPYTGz9iYzWZQ3cXlkeF3acuk6jv6R4WncmBjTrWx2SoKHYyXVNHlsRMJEv0IqD8EtZAjgSjgxMUZPa4nVnfxtvTg5MF2NP+X17uXb0wbvn1afVPop7+VNXBYZXp+2XLqOo39keBoHJsbiXHbz9NqeKaib+Yu8ffncaipzJRLbJ7yTD4nFl1vekVwYGV6Xtly6jqN/ZNhJ2YQzmHp7f0PoZ8ruitJC/9AVVXQ47vf/X+3ELiHDETvSadiWS9dxnBEZnt3AE2PxYH/f3h9mfv79nOZWb0s2RXY/pvwjxRk9IsNRMi9Y1OFxzx975deKa1suXcfRERn2htU1AACwuPM9RgAAHMDECACAhYkRAAALEyMAABWRfwBSh6IDddv/4wAAAABJRU5ErkJggg==",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATtSURBVHhe7d0xcuJIFMbx5z0LEFCcoHUCZhNHTicToUmcOSRzIkKTOXU0yUgnsE7gcmDpLtpuSYiWbEa7CKEW+/9VqYzUeGqKz/QD8VDfZJoAAIDcX+VPAACgURgBALBQGAEAsFAYAQCwUBjhnGi1lbS8jfEiR4yVo4Ux1U8qT7ybG7lZReWxQrpdFcfN5vHEc0YaycrzZNsMJLWyzDNb1e6Tbr3iuLX9eC8HcXnkeIWYT/8z83UNpyRBpvR/SwVhlpSHKqGfiagsyAeSLFCSiR/mQxhOEvh5ZiJ+Vk+jyEgVgVX7ooIq2yRQtX0MhxyvEPPpSRwrjGHm6xCPZRP6jeBqwWIIZjL1Qx1AnkVzQv0qn0Ct+zGhuoEcrxHz6amcOpWabjeyU4E8LMsDNZH82unY5tNyX5vORUksH0m5j4ub3D/L83JS7v1Lai5WinAAOV4f5tPTOVQYU/n9GotaiDx5h88rvMY58cXMevJOZqLvjtGI5Gkdi/94L1WKM51gvJZp9TlH/bMruIgc3cd82oVDhTGRj1j/mM/k4e3NnOKVRL/Xj3c/pJElRimVrbcRCRP9zqQ8pE2Wz3nWxZZIuNjJerrSUy/cRI7jwHzahXNdqYvZsnoVOlk+SKBE3j8PLz3t25J+Co1vY2C64n7K691Ly+m6iSwfAlE6VTtmuIIcx4b59DTOFcZaUDVTmetQY/sEePIhsfhy++05dLjCTKab+Yu83f9pMoXryHF8mE9PpN9iOyPvklJ+ZprjDP3Wv9YlVXTC0V7spGMdbfq4amQU+vUM827IXFL+DdDdOBhyvBrMp6dzqjAWTygTlg7IbDrU5hPUHlc+T7zBmQlTWZmZXKrcinZxe6zY9m3+Rd7me1b7MTIdCDleIebTU7EeIwAAFuc+YwQAYEgURgAALBRGAAAsFEYAACwURgAALIN1pZrr9vWJZtv+keE49Z1bG3Ltjgz7xdc1AACwcCoVAAALhREAAAuFEQAAy4CF0azrVi5q2tiq9cJSs8yNJ95+7JvFT9Ptyhrf6n8Vl0OGo5dGsvK8bxcVbsul6zjOhAzPzzTfDMNczb1+0dr8au/VseJq76q66m159Xf7d2pXi+fq8JdHhmOWBH554e/9xcAtbbl0HcdZkGE/BiyMTcUDf5hEvyqWSTn8AeTLqhwNEpdHhmNhJtR8maj88f46qbbl0nUc3ZFhf9z5jDF6knXsy2PbIqhqLtP8RiS/dma32MtN56IkFnvtTVwQGY7G5P75D6vwt+XSdRznQIb9caYwRiYF/1aOLx4dydM6Fv/xXuw/hcXM2pvMZFHexOWR4XVpy6XrOPpHhqdxozCmW9nslAQPx6ZU0+SxEQkT/QqpPAS3kCGAK+FEYYye1hKrO/nbenFyYLoaf8rr3cu3pw3eP60+qfRT3subuCwyvD5tuXQdR//I8DQOFMbiXHbz9NqemVA38xd5+/K51VTmSiS2T3gnHxKLL7e8I7kwMrwubbl0HUf/yLCTsglnMPX2/obQz5TdFaWF/qErquhw3O//v9qJXUKGI3ak07Atl67jOCMyPLuBC2PxYH/f3h9mfv79nOZWb0s2k+x+TPlHJmf0iAxHybxgUYfHPX/slV+bXNty6TqOjsiwN6yuAQCAxZ3vMQIA4AAKIwAAFgojAAAWCiMAABYKIwAAFZF/AItmogUWGbX9AAAAAElFTkSuQmCC",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUJSURBVHhe7d0xctpMGMbx1zkLUDCcYHUCksaV23SiNI07l3RuRGk6t67SRJzAOoHHhaW78O1KAlYCoZkISSu+/29GE6QlmQyPtS8WL9q7nSYAACD1I/8TAABoFEYAACwURgAALBRGAAAsFEY4Z7tYS5I/xnCRI4bKjcKYbGXhebI+cxYl64V4d3dyZzbv9ESrG0dHqjJMEj1BelZGi8JzkrWXHbe2n5/5ILpHjjfIym6xzY9lmD8rmK9r9CkO/J3S/w0Rfxfmxw5CXx9XuyA2O/EuUPp5vvWsunF0ojrDLBOVBXTYFxXoR/mRQBX20R9yvEFxkGaqgvA0G+bPSr0WRnMi+qFOJQ3otDCGfimoQpD142hfXYZl6QRqPY8J1Q3keIvCna+LYlWtY/6s1uul1NHjq7zOR/le2Vb+bHRM03G+r42noiSSr9js1I2jC5czrKCmYqUGB5Dj7UnWK9moQJ7m+YEC5s9LnG++mU2sk3U0kVn+cK9uHC7ZyssyEv/5UQ6pTXRi0VLGh885ip9dwUXk6L5E/r5HonQsL97x81+v9Bkj8+d5dKWiI4msvZVIGOvfTPJD2mj+ai7n51ss4Wwjy/FCT71wEzkOQyxfkf5jOpGnj480lzj0Jdr8lFJtxBnOF8bPb7v17VvKjW5143CB6Yr7Le8PbzWX60YyfwpE6RTtWOEKchya2WR++K1+NH+SQBXnTObP8xwujGOZ6hAj+4J3/CWR+HKfvlOtG4crzGS6mr7Jx+OlyRSuI8fhKRS+AubPi/Sv2P2r6IbKOt+q24nrxtGhqo42fVyVMgn9YmZpN2Qq1mM6Q7ob+0OONyPLwN/tY4lL2TJ/Vuu3MJqTTZlwdCD5pnSQ9klpTr7DmH96otWNo2UXM8zaxe2xbNu3+ZsJVOXfncs2MuwJOd6gLJdDXqW51WD+PI/1GAEAsNCVCgCAhcIIAICFwggAgIXCCACAhcIIAIClt65Uc9++NtFs2z4yHKa2c6tDrs2RYbv4ugYAABYupQIAYKEwAgBgoTACAGDpsTCadd3yRU1L22G9sMQsc+OJtx87s/hpsl5Y42v9r6I7ZDh4yVYWnnd2UeG6XJqO40rI8PpM800/zN3cizetTe/2fjiW3e1dHe56m9/93f47hbvFc3f47pHhkMWBn9/4e38zcEtdLk3HcRVk2I4eC2NZ9sIfJ9FT2TIpxx+AdFmVyiDRPTIcCjOhpstEpa/36aRal0vTcTRHhu1x5zPG7YssI1+e6xZBVVMZpw+28mdjdrO91HgqSiKx195Eh8hwMEaPrxdW4a/Lpek4roEM2+NMYdyaFPx7qV48eisvy0j850exfxRmE2tvNJFZ/hDdI8PbUpdL03G0jwz/jRuFMVnLaqMkeKqaUk2Tx0okjPU7pPwQ3EKGAG6EE4Vx+7KUSD3IL+vNyZHpavwt7w9vZy8bfH5bfVLJt3zmD9EtMrw9dbk0HUf7yPDfOFAYs2vZ5ctre2ZCXU3f5OPkc6uxTJVIZF/wjr8kEl/u+Y2kY2R4W+pyaTqO9pFhI3kTTm+K7f0lob9TdleUFvrHrqisw3G///9qJ3YJGQ5YRadhXS5Nx3FFZHh1PRfG7MU+394f7vz0+znlrdiWbCbZ/ZjyKyZntIgMB8m8YVHH1z197ZVfmFzrcmk6jobIsDWsrgEAgMWd7zECAOAACiMAABYKIwAAFgojAAAWCiMAAAci/wGq1XYfHzgrCgAAAABJRU5ErkJggg==",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAAqCAYAAAApk/tkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUESURBVHhe7d0xctpMGMbx1zkLUDCcYHUCksaV23SiNI07l3RuRGk6t67SRJzAOoHHhaW78O1KAlYCoZkISSu+/29GE6QlmQyPtS8WL9q7nSYAACD1I/8TAABoFEYAACwURgAALBRGAAAsFEY4Z7tYS5I/xnCRI4bKjcKYbGXhebI+cxYl64V4d3dyZzbv9ESrG0dHqjJMEj1BelZGi8JzkrWXHbe2n5/5ILpHjjfIym6xzY9lmD8rmK9r9CkO/J3S/w0Rfxfmxw5CXx9XuyA2O/EuUPp5vvWsunF0ojrDLBOVBXTYFxXoR/mRQBX20R9yvEFxkGaqgvA0G+bPSr0WRnMi+qFOJQ3otDCGfimoQpD142hfXYZl6QRqPY8J1Q3keIvCna+LYlWtY/6s1uul1NHjq7zOR/le2Vb+bHRM03G+r42noiSSr9js1I2jC5czrKCmYqUGB5Dj7UnWK9moQJ7m+YEC5s9LnG++mU2sk3U0kVn+cK9uHC7ZyssyEv/5UQ6pTXRi0VLGh885ip9dwUXk6L5E/r5HonQsL97x81+v9Bkj8+d5dKWiI4msvZVIGOvfTPJD2mj+ai7n51ss4Wwjy/FCT71wEzkOQyxfkf5jOpGnj480lzj0Jdr8lFJtxBnOF8bPb7v17VvKjW5143CB6Yr7Le8PbzWX60YyfwpE6RTtWOEKchya2WR++K1+NH+SQBXnTObP8xwujGOZ6hAj+4J3/CWR+HKfvlOtG4crzGS6mr7Jx+OlyRSuI8fhKRS+AubPi/Sv2P2r6IbKOt+q24nrxtGhqo42fVyVMgn9YmZpN2Qq1mM6Q7ob+0OONyPLwN/tY4lL2TJ/Vuu3MJqTTZlwdCD5pnSQ9klpTr7DmH96otWNo2UXM8zaxe2xbNu3+ZsJVOXfncs2MuwJOd6gLJdDXqW51WD+PI/1GAEAsNCVCgCAhcIIAICFwggAgIXCCACAhcIIAIClt65Uc9++NtFs2z4yHKa2c6tDrs2RYbv4ugYAABYupQIAYKEwAgBgoTACAGDpsTCadd3yRU1L22G9sMQsc+OJtx87s/hpsl5Y42v9r6I7ZDh4yVYWnnd2UeG6XJqO40rI8PpM800/zN3cizetTe/2fjiW3e1dHe56m9/93f47hbvFc3f47pHhkMWBn9/4e38zcEtdLk3HcRVk2I4eC2NZ9sIfJ9FT2TIpxx+AdFmVyiDRPTIcCjOhpstEpa/36aRal0vTcTRHhu1x5zPG7YssI1+e6xZBVVMZpw+28mdjdrO91HgqSiKx195Eh8hwMEaPrxdW4a/Lpek4roEM2+NMYdyaFPx7qV48eisvy0j850exfxRmE2tvNJFZ/hDdI8PbUpdL03G0jwz/jRuFMVnLaqMkeKqaUk2Tx0okjPU7pPwQ3EKGAG6EE4Vx+7KUSD3IL+vNyZHpavwt7w9vZy8bfH5bfVLJt3zmD9EtMrw9dbk0HUf7yPDfOFAYs2vZ5ctre2ZCXU3f5OPkc6uxTJVIZF/wjr8kEl/u+Y2kY2R4W+pyaTqO9pFhI3kTTm+K7f0lob9TdleUFvrHrqisw3G///9qJ3YJGQ5YRadhXS5Nx3FFZHh1PRfG7MU+394f7vz0+znlrdiWbCbZ/ZjyKyZntIgMB8m8YVHH1z197ZVfmFzrcmk6jobIsDWsrgEAgMWd7zECAOAACiMAABYKIwAAFgojAAAHIv8BF7R2HSYncw4AAAAASUVORK5CYII=",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUJSURBVHhe7d0xctpMGMbx1zkLUDCcYHUCksaV23SiNI07l3RuRGk6t67SRJzAOoHHhaW78O1KAlYCoZkISSu+/29GE6QlmQyPtS8WL9q7nSYAACD1I/8TAABoFEYAACwURgAALBRGAAAsFEY4Z7tYS5I/xnCRI4bKjcKYbGXhebI+cxYl64V4d3dyZzbv9ESrG0dHqjJMEj1BelZGi8JzkrWXHbe2n5/5ILpHjjfIym6xzY9lmD8rmK9r9CkO/J3S/w0Rfxfmxw5CXx9XuyA2O/EuUPp5vvWsunF0ojrDLBOVBXTYFxXoR/mRQBX20R9yvEFxkGaqgvA0G+bPSr0WRnMi+qFOJQ3otDCGfimoQpD142hfXYZl6QRqPY8J1Q3keIvCna+LYlWtY/6s1uul1NHjq7zOR/le2Vb+bHRM03G+r42noiSSr9js1I2jC5czrKCmYqUGB5Dj7UnWK9moQJ7m+YEC5s9LnG++mU2sk3U0kVn+cK9uHC7ZyssyEv/5UQ6pTXRi0VLGh885ip9dwUXk6L5E/r5HonQsL97x81+v9Bkj8+d5dKWiI4msvZVIGOvfTPJD2mj+ai7n51ss4Wwjy/FCT71wEzkOQyxfkf5jOpGnj480lzj0Jdr8lFJtxBnOF8bPb7v17VvKjW5143CB6Yr7Le8PbzWX60YyfwpE6RTtWOEKchya2WR++K1+NH+SQBXnTObP8xwujGOZ6hAj+4J3/CWR+HKfvlOtG4crzGS6mr7Jx+OlyRSuI8fhKRS+AubPi/Sv2P2r6IbKOt+q24nrxtGhqo42fVyVMgn9YmZpN2Qq1mM6Q7ob+0OONyPLwN/tY4lL2TJ/Vuu3MJqTTZlwdCD5pnSQ9klpTr7DmH96otWNo2UXM8zaxe2xbNu3+ZsJVOXfncs2MuwJOd6gLJdDXqW51WD+PI/1GAEAsNCVCgCAhcIIAICFwggAgIXCCACAhcIIAIClt65Uc9++NtFs2z4yHKa2c6tDrs2RYbv4ugYAABYupQIAYKEwAgBgoTACAGDpsTCadd3yRU1L22G9sMQsc+OJtx87s/hpsl5Y42v9r6I7ZDh4yVYWnnd2UeG6XJqO40rI8PpM800/zN3cizetTe/2fjiW3e1dHe56m9/93f47hbvFc3f47pHhkMWBn9/4e38zcEtdLk3HcRVk2I4eC2NZ9sIfJ9FT2TIpxx+AdFmVyiDRPTIcCjOhpstEpa/36aRal0vTcTRHhu1x5zPG7YssI1+e6xZBVVMZpw+28mdjdrO91HgqSiKx195Eh8hwMEaPrxdW4a/Lpek4roEM2+NMYdyaFPx7qV48eisvy0j850exfxRmE2tvNJFZ/hDdI8PbUpdL03G0jwz/jRuFMVnLaqMkeKqaUk2Tx0okjPU7pPwQ3EKGAG6EE4Vx+7KUSD3IL+vNyZHpavwt7w9vZy8bfH5bfVLJt3zmD9EtMrw9dbk0HUf7yPDfOFAYs2vZ5ctre2ZCXU3f5OPkc6uxTJVIZF/wjr8kEl/u+Y2kY2R4W+pyaTqO9pFhI3kTTm+K7f0lob9TdleUFvrHrqisw3G///9qJ3YJGQ5YRadhXS5Nx3FFZHh1PRfG7MU+394f7vz0+znlrdiWbCbZ/ZjyKyZntIgMB8m8YVHH1z197ZVfmFzrcmk6jobIsDWsrgEAgMWd7zECAOAACiMAABYKIwAAFgojAAAWCiMAAAci/wGq1XYfHzgrCgAAAABJRU5ErkJggg==",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUJSURBVHhe7d0xctpMGMbx1zkLUDCcYHUCksaV23SiNI07l3RuRGk6t67SRJzAOoHHhaW78O1KAlYCoZkISSu+/29GE6QlmQyPtS8WL9q7nSYAACD1I/8TAABoFEYAACwURgAALBRGAAAsFEY4Z7tYS5I/xnCRI4bKjcKYbGXhebI+cxYl64V4d3dyZzbv9ESrG0dHqjJMEj1BelZGi8JzkrWXHbe2n5/5ILpHjjfIym6xzY9lmD8rmK9r9CkO/J3S/w0Rfxfmxw5CXx9XuyA2O/EuUPp5vvWsunF0ojrDLBOVBXTYFxXoR/mRQBX20R9yvEFxkGaqgvA0G+bPSr0WRnMi+qFOJQ3otDCGfimoQpD142hfXYZl6QRqPY8J1Q3keIvCna+LYlWtY/6s1uul1NHjq7zOR/le2Vb+bHRM03G+r42noiSSr9js1I2jC5czrKCmYqUGB5Dj7UnWK9moQJ7m+YEC5s9LnG++mU2sk3U0kVn+cK9uHC7ZyssyEv/5UQ6pTXRi0VLGh885ip9dwUXk6L5E/r5HonQsL97x81+v9Bkj8+d5dKWiI4msvZVIGOvfTPJD2mj+ai7n51ss4Wwjy/FCT71wEzkOQyxfkf5jOpGnj480lzj0Jdr8lFJtxBnOF8bPb7v17VvKjW5143CB6Yr7Le8PbzWX60YyfwpE6RTtWOEKchya2WR++K1+NH+SQBXnTObP8xwujGOZ6hAj+4J3/CWR+HKfvlOtG4crzGS6mr7Jx+OlyRSuI8fhKRS+AubPi/Sv2P2r6IbKOt+q24nrxtGhqo42fVyVMgn9YmZpN2Qq1mM6Q7ob+0OONyPLwN/tY4lL2TJ/Vuu3MJqTTZlwdCD5pnSQ9klpTr7DmH96otWNo2UXM8zaxe2xbNu3+ZsJVOXfncs2MuwJOd6gLJdDXqW51WD+PI/1GAEAsNCVCgCAhcIIAICFwggAgIXCCACAhcIIAIClt65Uc9++NtFs2z4yHKa2c6tDrs2RYbv4ugYAABYupQIAYKEwAgBgoTACAGDpsTCadd3yRU1L22G9sMQsc+OJtx87s/hpsl5Y42v9r6I7ZDh4yVYWnnd2UeG6XJqO40rI8PpM800/zN3cizetTe/2fjiW3e1dHe56m9/93f47hbvFc3f47pHhkMWBn9/4e38zcEtdLk3HcRVk2I4eC2NZ9sIfJ9FT2TIpxx+AdFmVyiDRPTIcCjOhpstEpa/36aRal0vTcTRHhu1x5zPG7YssI1+e6xZBVVMZpw+28mdjdrO91HgqSiKx195Eh8hwMEaPrxdW4a/Lpek4roEM2+NMYdyaFPx7qV48eisvy0j850exfxRmE2tvNJFZ/hDdI8PbUpdL03G0jwz/jRuFMVnLaqMkeKqaUk2Tx0okjPU7pPwQ3EKGAG6EE4Vx+7KUSD3IL+vNyZHpavwt7w9vZy8bfH5bfVLJt3zmD9EtMrw9dbk0HUf7yPDfOFAYs2vZ5ctre2ZCXU3f5OPkc6uxTJVIZF/wjr8kEl/u+Y2kY2R4W+pyaTqO9pFhI3kTTm+K7f0lob9TdleUFvrHrqisw3G///9qJ3YJGQ5YRadhXS5Nx3FFZHh1PRfG7MU+394f7vz0+znlrdiWbCbZ/ZjyKyZntIgMB8m8YVHH1z197ZVfmFzrcmk6jobIsDWsrgEAgMWd7zECAOAACiMAABYKIwAAFgojAAAWCiMAAAci/wGq1XYfHzgrCgAAAABJRU5ErkJggg==",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAAqCAYAAAApk/tkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUESURBVHhe7d0xctpMGMbx1zkLUDCcYHUCksaV23SiNI07l3RuRGk6t67SRJzAOoHHhaW78O1KAlYCoZkISSu+/29GE6QlmQyPtS8WL9q7nSYAACD1I/8TAABoFEYAACwURgAALBRGAAAsFEY4Z7tYS5I/xnCRI4bKjcKYbGXhebI+cxYl64V4d3dyZzbv9ESrG0dHqjJMEj1BelZGi8JzkrWXHbe2n5/5ILpHjjfIym6xzY9lmD8rmK9r9CkO/J3S/w0Rfxfmxw5CXx9XuyA2O/EuUPp5vvWsunF0ojrDLBOVBXTYFxXoR/mRQBX20R9yvEFxkGaqgvA0G+bPSr0WRnMi+qFOJQ3otDCGfimoQpD142hfXYZl6QRqPY8J1Q3keIvCna+LYlWtY/6s1uul1NHjq7zOR/le2Vb+bHRM03G+r42noiSSr9js1I2jC5czrKCmYqUGB5Dj7UnWK9moQJ7m+YEC5s9LnG++mU2sk3U0kVn+cK9uHC7ZyssyEv/5UQ6pTXRi0VLGh885ip9dwUXk6L5E/r5HonQsL97x81+v9Bkj8+d5dKWiI4msvZVIGOvfTPJD2mj+ai7n51ss4Wwjy/FCT71wEzkOQyxfkf5jOpGnj480lzj0Jdr8lFJtxBnOF8bPb7v17VvKjW5143CB6Yr7Le8PbzWX60YyfwpE6RTtWOEKchya2WR++K1+NH+SQBXnTObP8xwujGOZ6hAj+4J3/CWR+HKfvlOtG4crzGS6mr7Jx+OlyRSuI8fhKRS+AubPi/Sv2P2r6IbKOt+q24nrxtGhqo42fVyVMgn9YmZpN2Qq1mM6Q7ob+0OONyPLwN/tY4lL2TJ/Vuu3MJqTTZlwdCD5pnSQ9klpTr7DmH96otWNo2UXM8zaxe2xbNu3+ZsJVOXfncs2MuwJOd6gLJdDXqW51WD+PI/1GAEAsNCVCgCAhcIIAICFwggAgIXCCACAhcIIAIClt65Uc9++NtFs2z4yHKa2c6tDrs2RYbv4ugYAABYupQIAYKEwAgBgoTACAGDpsTCadd3yRU1L22G9sMQsc+OJtx87s/hpsl5Y42v9r6I7ZDh4yVYWnnd2UeG6XJqO40rI8PpM800/zN3cizetTe/2fjiW3e1dHe56m9/93f47hbvFc3f47pHhkMWBn9/4e38zcEtdLk3HcRVk2I4eC2NZ9sIfJ9FT2TIpxx+AdFmVyiDRPTIcCjOhpstEpa/36aRal0vTcTRHhu1x5zPG7YssI1+e6xZBVVMZpw+28mdjdrO91HgqSiKx195Eh8hwMEaPrxdW4a/Lpek4roEM2+NMYdyaFPx7qV48eisvy0j850exfxRmE2tvNJFZ/hDdI8PbUpdL03G0jwz/jRuFMVnLaqMkeKqaUk2Tx0okjPU7pPwQ3EKGAG6EE4Vx+7KUSD3IL+vNyZHpavwt7w9vZy8bfH5bfVLJt3zmD9EtMrw9dbk0HUf7yPDfOFAYs2vZ5ctre2ZCXU3f5OPkc6uxTJVIZF/wjr8kEl/u+Y2kY2R4W+pyaTqO9pFhI3kTTm+K7f0lob9TdleUFvrHrqisw3G///9qJ3YJGQ5YRadhXS5Nx3FFZHh1PRfG7MU+394f7vz0+znlrdiWbCbZ/ZjyKyZntIgMB8m8YVHH1z197ZVfmFzrcmk6jobIsDWsrgEAgMWd7zECAOAACiMAABYKIwAAFgojAAAHIv8BF7R2HSYncw4AAAAASUVORK5CYII="
					],[
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAX/SURBVHhe7d09cupIFIbhj1mLREBpBdIKwIkjp2QoRIkzQjInEKLMKZGTi1aAVuBycKW9MN1IQOOxL8PYgOR5nyrVGJqbzKnTp/+gOxtDAABg66/6vwAAwKAwAgDgoDACAOCgMAIA4GhMYcziucr6b/y/EHsATXKTwljOI3U6naNn8Fo3ot3K0hS6SNEutlGsuVP1iH1DlZniKDqKFVqizrl9Tr3LOZzvdjPGcKZis5H9tsj2WY/l1U1oq1Lzoa9p71nrbVwLzZQqGb6bERL7RinnsSJ/oDQP1CUQLVPl3IvJuSqfPsk5nIU9RnwjT+P1Ruvxrnf1dPcQSvmbivodNIstik/dR61Xo/odtEuVc4v3OYcvoTDi8sKe/PpPNIs3XmjRZ5r4M5Qqs1jDZaDVM6swX3GbwtgNzCwikc+a+A+X6SnJNZo4SUrsgW9X7d378gepFJiBKFXxS25SGL3+4rC/tCm0ClIlfmy6UfwcpebRVFoVZkZSv2UQe+D7eeN1lVPFSkFqBp4Re4xf0YClVE/9x5lCveo3kfwh7Cm5oZYPzyeW6Yg98K28vhZ2vzhf6hc59Z+xx4hvZ4vi9mTq/kAAgOvihPFX3KAw2iW2juJsN5wxs4unRHn4oDsC2X5ZrKkmR0XRfseq2kck9s3GzL19MsWd45yaT1NpdC9nBwNnusmMsRuEeh349RdSfdORzlTwXbYfwCTpIFWeDurYVs8gPYxeiX3DmIFMFEXq2EMbypX4HfOaA1Ht0dfjaiZNDzm1DExOuRv7OBv3MQIA4GCPEQAAB4URAAAHhREAAAeFEQAAB4URAADHxU+l2iPEX8Gh2eb6amxPIfaXdSp+/P9vHvrT6+DrGgAAOFhKBQDAQWEEAMBBYQSAlstirpn6TtcpjKW9hshepFn/fuanv8VYfS6yn4m5oa9VykxxtPux8I9tL1P9wz1xp9pxASZuczc3O5Fifii10apLiXfxqp7Ba91YK+dx1Y/ah5w62xUKY6n50NdL77m6SHNTaKZUyfBdsMq5CaSvaW+iZ/s5fgS3NbZJ6A+U5n+46sbEd5jk9YsPnGrHBdjcHCjRRMU2NzcqVoHSxBfj0oYLZ/uYbR/3h/izWH7yqofCttn+NpFPQM9yhcLoabzeaLG/hsjT3UNY/71jZht+omC10Xrc56aFFrFF8an7qLW9HPVTtgN+0+TTz5xqx2UUejNjkdH9Iee8/r1sFF65f6q1shd77dREVZdr+t+JiWg65caUM1x5j7FUaUYzw2Wg1fNhhFPOp0rNCOiRSWLreOPFiVv6bXyHepssPr0f7lQ7LsVXz4xR05fD6k2ZvSg1pXHCJdMtlcnWxbDn168Nv6dQud6K+jVOulphrNbFffn23regJ3+fd6V+LXOFgfRk74Wr18Ujpv4/gx0IvU1M8axfv3eqHRdkV3PsUttSfp13/kCaFQxSGq1rOss82cfsozMbgbun4XVl/gXOcLXC6I3X1Vp4sVKQmqDuN4Sr5Rz1unpcV58pVqPtZbfUxrbLFE+lyT+qnnl/G9xT7bi0LB4q0cNhj3H2qsT/8yEq3JbXX1R96fYptApSE7PYZA2+y5WXUg2vr4XdS8qX+uUkX9B19zkeNQvZ52i77RJ5nmqwG9na1YLtSHcge1/8qXZcWDnXNM01uj9sa3jjicywVEs3OdFgnvqPM4V6ldtdHvWd5W/TinNcvzDuHZ9gpAj+PPtVgt1jB0S703RmlniqHbdQ7Tuirar45e6GYvFmhjoj3ZNS/9oVCmOm2MwG4mxX+ErNp2Y+MLqv9zH6ut9OIJ+0+0iZPSnJQz3cOZUTLXA8akXDeXeyB8TTqXP4Zk7uNZvpP6Pj/jR7SpSHD6pCVp/6359Cfd/f4l8xI/WLK1azzSiU/bHy7ROOZhszK3AUZrIQ7tsVjjaz4w+gqVajTRg6sbPx/Sh+xWxj0rX6zGhVv+k41Y7LKFabmRs/cq/hqr5ynyvm+Wd/atPyENOP2vFn3K4BAIDjhnuMAAA0D4URAAAHhREAAAeFEQAAB4URAIA96W84lk3rN7P/IQAAAABJRU5ErkJggg==",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,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",
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAArCAYAAADizyjBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAX/SURBVHhe7d09cupIFIbhj1mLREBpBdIKwIkjp2QoRIkzQjInEKLMKZGTi1aAVuBycKW9MN1IQOOxL8PYgOR5nyrVGJqbzKnTp/+gOxtDAABg66/6vwAAwKAwAgDgoDACAOCgMAIA4GhMYcziucr6b/y/EHsATXKTwljOI3U6naNn8Fo3ot3K0hS6SNEutlGsuVP1iH1DlZniKDqKFVqizrl9Tr3LOZzvdjPGcKZis5H9tsj2WY/l1U1oq1Lzoa9p71nrbVwLzZQqGb6bERL7RinnsSJ/oDQP1CUQLVPl3IvJuSqfPsk5nIU9RnwjT+P1Ruvxrnf1dPcQSvmbivodNIstik/dR61Xo/odtEuVc4v3OYcvoTDi8sKe/PpPNIs3XmjRZ5r4M5Qqs1jDZaDVM6swX3GbwtgNzCwikc+a+A+X6SnJNZo4SUrsgW9X7d378gepFJiBKFXxS25SGL3+4rC/tCm0ClIlfmy6UfwcpebRVFoVZkZSv2UQe+D7eeN1lVPFSkFqBp4Re4xf0YClVE/9x5lCveo3kfwh7Cm5oZYPzyeW6Yg98K28vhZ2vzhf6hc59Z+xx4hvZ4vi9mTq/kAAgOvihPFX3KAw2iW2juJsN5wxs4unRHn4oDsC2X5ZrKkmR0XRfseq2kck9s3GzL19MsWd45yaT1NpdC9nBwNnusmMsRuEeh349RdSfdORzlTwXbYfwCTpIFWeDurYVs8gPYxeiX3DmIFMFEXq2EMbypX4HfOaA1Ht0dfjaiZNDzm1DExOuRv7OBv3MQIA4GCPEQAAB4URAAAHhREAAAeFEQAAB4URAADHxU+l2iPEX8Gh2eb6amxPIfaXdSp+/P9vHvrT6+DrGgAAOFhKBQDAQWEEAMBBYQSAlstirpn6TtcpjKW9hshepFn/fuanv8VYfS6yn4m5oa9VykxxtPux8I9tL1P9wz1xp9pxASZuczc3O5Fifii10apLiXfxqp7Ba91YK+dx1Y/ah5w62xUKY6n50NdL77m6SHNTaKZUyfBdsMq5CaSvaW+iZ/s5fgS3NbZJ6A+U5n+46sbEd5jk9YsPnGrHBdjcHCjRRMU2NzcqVoHSxBfj0oYLZ/uYbR/3h/izWH7yqofCttn+NpFPQM9yhcLoabzeaLG/hsjT3UNY/71jZht+omC10Xrc56aFFrFF8an7qLW9HPVTtgN+0+TTz5xqx2UUejNjkdH9Iee8/r1sFF65f6q1shd77dREVZdr+t+JiWg65caUM1x5j7FUaUYzw2Wg1fNhhFPOp0rNCOiRSWLreOPFiVv6bXyHepssPr0f7lQ7LsVXz4xR05fD6k2ZvSg1pXHCJdMtlcnWxbDn168Nv6dQud6K+jVOulphrNbFffn23regJ3+fd6V+LXOFgfRk74Wr18Ujpv4/gx0IvU1M8axfv3eqHRdkV3PsUttSfp13/kCaFQxSGq1rOss82cfsozMbgbun4XVl/gXOcLXC6I3X1Vp4sVKQmqDuN4Sr5Rz1unpcV58pVqPtZbfUxrbLFE+lyT+qnnl/G9xT7bi0LB4q0cNhj3H2qsT/8yEq3JbXX1R96fYptApSE7PYZA2+y5WXUg2vr4XdS8qX+uUkX9B19zkeNQvZ52i77RJ5nmqwG9na1YLtSHcge1/8qXZcWDnXNM01uj9sa3jjicywVEs3OdFgnvqPM4V6ldtdHvWd5W/TinNcvzDuHZ9gpAj+PPtVgt1jB0S703RmlniqHbdQ7Tuirar45e6GYvFmhjoj3ZNS/9oVCmOm2MwG4mxX+ErNp2Y+MLqv9zH6ut9OIJ+0+0iZPSnJQz3cOZUTLXA8akXDeXeyB8TTqXP4Zk7uNZvpP6Pj/jR7SpSHD6pCVp/6359Cfd/f4l8xI/WLK1azzSiU/bHy7ROOZhszK3AUZrIQ7tsVjjaz4w+gqVajTRg6sbPx/Sh+xWxj0rX6zGhVv+k41Y7LKFabmRs/cq/hqr5ynyvm+Wd/atPyENOP2vFn3K4BAIDjhnuMAAA0D4URAAAHhREAAAeFEQAAB4URAIA96W84lk3rN7P/IQAAAABJRU5ErkJggg==",
					"data:image/png;base64,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"
					]]
		
		
		for(var i=0;i<3;i++){
			for(var j=0;j<8;j++){
				arImage[i][j].src = arSrcImage[i][j];
			}
		}
		for(var i=0;i<3;i++){
			for(var j=0;j<8;j++){
				arImage[i][j].onload = function () {
					CekJaw();
				}
			}
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3*8){
				var Abjad = ["A","B","C","D"];
				var img_i = njaw;
				var img_j = nn;
				var fix_img = arImage[img_i][img_j];
				for(var i=0;i<4;i++){
					//console.log("i : "+i+" | nn: "+nn+" | njaw: "+njaw+" | arr[i]: "+arr[i]);
					ctx.drawImage(fix_img, 0,0,fix_img.width, fix_img.height,-arr[i]*113,42*i,fix_img.width, fix_img.height);
					//console.log(arr[i]+" "+113*(-1)*arr[i]+" "+42*i);
				}
				for(var i=0;i<4;i++){
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i],0,21+42*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal1(){
		const Aljabar = MyPeluang1();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Pada pengundian dua dadu secara bersamaan, banyaknya kejadian muncul <i><b>mata dadu berjumlah "+ArSisi[0]+"</b></i> adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+" buah<br>B. "+Ar[1]+" buah<br>C. "+Ar[2]+" buah<br>D. "+Ar[3]+" buah</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MyPeluang2();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var njaw=Aljabar[3];
		var nn=Aljabar[4];
		var n0123=Aljabar[5];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Dalam sebuah kotak terdapat 10 bola yang diberi nomor 1 sampai 10. <br>";
		ss += "Diambil 3 bola satu persatu tanpa pengembalian. <br>";
		ss += ArSisi[0][0]+"<br>";
		ss += ArSisi[0][1];
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = n0123[0];
		Ar[1] = n0123[1];
		Ar[2] = n0123[2];
		Ar[3] = n0123[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss;//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(njaw);
		ArFix.push(nn);
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyPeluang3();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var mode=Aljabar[3];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Berapakah peluang Galih mengambil semua permen warna "+ArSisi[0]+"?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		const DrawPGL = GambarPeluang3(canv,ArSisi,mode,Ar,ss);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(){
		const Aljabar = MyPeluang4();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah dadu dilambungkan sekali. <br>Peluang munculnya <b><i>"+ArSisi[0]+"</i></b> adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal5(){
		const Aljabar = MyPeluang5();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah bola diambil dari sebuah kantong yang berisi :<br>";
		ss += ArSisi[0][0]+" bola berwarna putih, <br>";
		ss += ArSisi[0][1]+" bola berwarna hijau, dan <br>";
		ss += ArSisi[0][2]+" bola berwarna merah. <br>";
		ss += "Peluang terambilnya bola berwarna <b><i>"+ArSisi[1]+"</i></b> adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal6(){
		const Aljabar = MyPeluang6();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Dalam sebuah kantong terdapat delapan bola yang diberi nomor 1 sampai dengan 8. Akan diambil sebuah bola secara acak. <br>";
		ss += "Peluang terambilnya bola bernomor <b><i>"+ArSisi[0]+"</i></b> adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyPeluang7();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Tiga keping uang logam dilempar bersama-sama. <br> ";
		ss += "Peluang muncul <b><i>"+ArSisi[0]+"</i></b> adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyPeluang8();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Dalam satu kelas dilakukan pendataan ekstrakulikuler. Didapat hasil sebagai berikut:<br>";
		ss += ArSisi[0][0]+" siswa memilih pramuka<br>";
		ss += ArSisi[0][1]+" siswa memilih voli<br>";
		ss += ArSisi[0][2]+" siswa memilih PMR<br>";
		ss += ArSisi[0][3]+" siswa memilih KIR<br>";
		ss += "Dipilih seorang siswa secara acak untuk dijadikan koordinator ekstrakulikuler. <br>";
		ss += "Kemungkinan terpilih siswa dari cabang "+ArSisi[1]+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal9(){
		const Aljabar = MyPeluang9();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sebuah keluarga ingin mempunyai 4 orang anak.  <br> ";
		ss += "Peluang bahwa keluarga tersebut memiliki <b><i>"+ArSisi[0]+"</i></b> adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MyPeluang10();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarPeluang10(canv,ArSisi);
		var ss
		
		ss = "Jika diambil sebuah titik secara acak, peluang terambilnya titik dari <b><i>daerah yang tidak diarsir</i></b> adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
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
	
	
	
	dd1.innerHTML="<p>Bab 16 \u{2192} Peluang </p>";
	if(no==2){
		cc1.width = 113;
		cc1.height = 168;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang2 = GambarPeluang2(cc1.id,ss[4],ss[3],ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0){
			dd1.innerHTML+="<p>"+no+". Galih diperbolehkan ibunya untuk mengambil satu permen dari sebuah kantong. <br>";
			dd1.innerHTML+="Dia tidak dapat melihat warna permen tersebut. <br>";
			dd1.innerHTML+="Banyaknya permen dengan masing-masing warna dalam kantong tersebut ditunjukkan dalam grafik berikut:</p>";
		}else{
			dd1.innerHTML+="<p>"+nourut+". Galih diperbolehkan ibunya untuk mengambil satu permen dari sebuah kantong. <br>";
			dd1.innerHTML+="Dia tidak dapat melihat warna permen tersebut. <br>";
			dd1.innerHTML+="Banyaknya permen dengan masing-masing warna dalam kantong tersebut ditunjukkan dalam grafik berikut:</p>";
		}
		cc1.width = 500;
		cc1.height = 480;
		ss = namefunc[no-1](cc1.id);
		//dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		cc1.width = 100;
		cc1.height = 184;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang4 = GambarPeluang4(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		cc1.width = 100;
		cc1.height = 184;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang5 = GambarPeluang5(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		cc1.width = 100;
		cc1.height = 184;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang6 = GambarPeluang6(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		cc1.width = 100;
		cc1.height = 184;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang7 = GambarPeluang7(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		cc1.width = 100;
		cc1.height = 184;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang8 = GambarPeluang8(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		cc1.width = 100;
		cc1.height = 184;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+"."+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+"."+ss[0]+"</p>";
		const DrawPeluang9 = GambarPeluang9(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diberikan gambar berikut: (lingkaran di dalam lingkaran)</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diberikan gambar berikut: (lingkaran di dalam lingkaran)</p>";
		cc1.width = 370;
		cc1.height = 205;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd2.innerHTML="<p>"+no+"."+ss[0]+"</p>";
		else			dd2.innerHTML="<p>"+nourut+"."+ss[0]+"</p>";
		cc2.width = 100;
		cc2.height = 184;
		const DrawPeluang10b = GambarPeluang10b(cc2.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
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
