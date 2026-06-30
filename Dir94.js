function Print94(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
		var ABCD = ["A", "B", "C", "D"]
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
	function StringRibuanKoma(str){
		var strff = ""+str;
		var strfix = "";
		var strB = "";
		const gg = strff.split(", ");
		if(gg.length==2){
			strfix = StringRibuan(gg[0]);
			strfix+=(", "+gg[1]);
			return strfix;
		}else{
			strfix = StringRibuan(str);
			return strfix;
		}
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
		var Ar = ["Jawa", "Sumatera", "Sulawesi", "Kalimantan", "Papua", "Riau", "Maluku", "Sumbawa", "Flores"];
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
	function StrPow(nn){
		var arpow = [
					"\u{2070}",
					"\u{00B9}",
					"\u{00B2}",
					"\u{00B3}",
					"\u{2074}",
					"\u{2075}",
					"\u{2076}",
					"\u{2077}",
					"\u{2078}",
					"\u{2079}"
					]
		var arnn = SplitString(nn);
		var str = "";
		for(var i=0;i<arnn.length;i++){
			str+=arpow[arnn[i]];
		}
		return str;
	}
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function NoJawabanBenarEqual(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			if (arraysAreEqual(Arr[i], jwb)){
				return i;
				break;
			}
		}
	}
	function StringDesimal(ff){
		var strff = ""+ff;
		const gg = strff.split(".");
		if(gg.length==2)	return gg[0]+","+gg[1];
		else 				return ff
	}
	function translasi(x,y,a,b){
		var xx = x + a;
		var yy = y + b
		return [xx,yy];
	}
	function cerminx(x,y,k){
		var xx = 2*k-x;
		var yy = y;
		return [xx,yy];
	}
	function cerminy(x,y,h){
		var xx = x;
		var yy = 2*h-y;
		return [xx,yy];
	}
	function cerminyequalx(x,y){
		var xx = y;
		var yy = x;
		return [xx,yy];
	}
	function cerminyequalminx(x,y,h){
		var xx = -y;
		var yy = -x;
		return [xx,yy];
	}
	function rotasi(sdt,x,y){
		var xx
		var yy
		if(sdt==90){
			xx=-y;
			yy=x;
		}else if(sdt==180){
			xx=-x;
			yy=-y;
		}else if(sdt==270){
			xx=y;
			yy=-x;
		}else{
			xx=x;
			yy=y;
		}
		return [xx,yy];
	}
	function dilatasi(x,y,a,b,k){
		var xx = k*(x-a) + a;
		var yy = k*(y-b) + b;
		return [xx,yy];
	}
	
	//----------------------------------------------
	
	function GambarJawabPeluang20(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang20(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
		}
		return 0;
	}
	function GetSoal20(canv){
		var soal = [
					["bilangan kelipatan 2",["",6,11]],
					["bilangan kelipatan 3", ["",4,11]], 
					["bilangan kelipatan 4", ["",2,11]], 
					["bilangan kelipatan 5", ["",3,11]], 
					["bilangan kelipatan 6", ["",2,11]], 
					["bilangan kelipatan 7", ["",1,11]], 
					["bilangan kelipatan 8", ["",1,11]], 
					["bilangan kelipatan 9", [0,"",""]], 
					["bilangan kelipatan 10", ["",1,11]], 
					["bilangan kelipatan 11", ["",1,11]], 
					["bilangan kelipatan 12", ["",1,11]], 
					["bilangan kelipatan 13", ["",1,11]], 
					["bilangan kelipatan 14", ["",1,11]], 
					["bilangan kelipatan 15", ["",1,11]]
				   ];
		soal = RandomMyArray(soal);
		
		var Gambar = GambarPeluang20(canv,[1,2]);
		var ss = "Dedi mengambil suatu koin tanpa melihat. Peluang Dedi mendapatkan koin yang bertuliskan <b>"+soal[0][0]+"</b> adalah ...";
		
		var arsalah = [
						[0,"",""],
						["",1,11],
						["",2,11],
						["",3,11],
						["",4,11],
						["",5,11],
						["",6,11],
						["",7,11],
						["",8,11],
						["",9,11],
						["",10,11],
						[1,"",""]
					  ];
		
		do{				
			arsalah = RandomMyArray(arsalah);
			var ff = arraysAreEqual(arsalah[0], soal[0][1])
		}while(!ff)
		
		
		var Ar = [];
		Ar[0] = arsalah[0];
		Ar[1] = arsalah[1];
		Ar[2] = arsalah[2];
		Ar[3] = arsalah[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang19(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal19(){
		var ara = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95];
		ara = RandomMyArray(ara);
		var kk = RandomAngkaAtoB(0,4);
		var ns = 100*kk
		var na = ara[0]*kk;
		
		var ss = "Suatu koin dilempar sebanyak "+ns+" kali. ";
		ss += "Jika kemunculan mata koin angka sebanyak "+na+" kali, ";
		ss += "peluang empirik kemunculan mata koin angka adalah ...";
		
		var arjawab = [];
		for(var i=-1;i<=ara.length;i++){
			if(i==-1)					arjawab[i] = [0,"",""];
			else if(i==ara.length)		arjawab[i] = [1,"",""];
			else						arjawab[i] = ["",ara[i]*kk,100*kk];
		}
		
		var benar = ["",na,ns];
		do{				
			arjawab = RandomMyArray(arjawab);
			var ff = arraysAreEqual(arjawab[0], benar)
		}while(!ff)
		
		var Ar = [];
		Ar[0] = arjawab[0];
		Ar[1] = arjawab[1];
		Ar[2] = arjawab[2];
		Ar[3] = arjawab[3];
		
		for(var i=0;i<4;i++){
			if(arjawab[i][0]==""){
				var fpb = CariFPB([arjawab[i][1],arjawab[i][2]]);
				arjawab[i][1] = arjawab[i][1]/fpb;
				arjawab[i][2] = arjawab[i][2]/fpb;
			}
		}
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal18(){
		var NN = 12*RandomAngkaAtoB(10,20);
		var soal = [
					["mata dadu bilangan prima",3/6],
					["mata dadu bilangan genap",3/6],
					["mata dadu bilangan ganjil",3/6],
					["mata dadu kurang dari 1",0],
					["mata dadu kurang dari 2",1/6],
					["mata dadu kurang dari 3",2/6],
					["mata dadu kurang dari 4",3/6],
					["mata dadu kurang dari 5",4/6],
					["mata dadu kurang dari 6",5/6],
					["mata dadu kurang dari 7",6/6],
					["mata dadu lebih dari 0",6/6],
					["mata dadu lebih dari 1",5/6],
					["mata dadu lebih dari 2",4/6],
					["mata dadu lebih dari 3",3/6],
					["mata dadu lebih dari 4",2/6],
					["mata dadu lebih dari 5",1/6],
					["mata dadu lebih dari 6",0/6]
				   ]
		soal = RandomMyArray(soal);
		var arjawab = [
					   0,
					   1/6*NN,
					   2/6*NN,
					   3/6*NN,
					   4/6*NN,
					   5/6*NN,
					   6/6*NN
					  ]
		do{
			arjawab = RandomMyArray(arjawab);
			var ff = arjawab[0] == soal[0][1]*NN;
		}while(!ff);
		
		var ss = "Sebuah dadu dilempar sebanyak "+NN+" kali. Frekuensi harapan munculnya "+soal[0][0]+" adalah ...";
		
		var Ar = [];
		Ar[0] = arjawab[0];
		Ar[1] = arjawab[1];
		Ar[2] = arjawab[2];
		Ar[3] = arjawab[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal17(){
		var warna = ["hitam","putih","biru","coklat","hijau","kuning","merah","oranye"];
		var arisi=[];
		var arwarna=[];
		for(var i=0;i<3;i++){
			arisi[i] = RandomAngkaAtoB(0,8);
			warna = RandomMyArray(warna);
			arwarna[i]=[];
			for(var j=0;j<arisi[i];j++){
				arwarna[i][j]=warna[j];
			}
		}
		
		var kombinasi = arisi[0]*arisi[1]*arisi[2];
		
		var ss = "Seorang siswa mempunyai "+arisi[0]+" buah celana ("+arwarna[0]+"), "
		ss += ""+arisi[1]+" buah kemeja ("+arwarna[1]+") serta "+arisi[2]+" pasang sepatu ("+arwarna[2]+"). "
		ss += "Banyak kombinasi pakaian dan sepatu yang bisa digunakan siswa tersebut adalah ... kombinasi.";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		ar_er = RandomMyArray(ar_er);
		var Ar = [];
		Ar[0] = kombinasi;
		Ar[1] = Ar[0]+ar_er[0];
		Ar[2] = Ar[0]+ar_er[1];
		Ar[3] = Ar[0]+ar_er[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang16(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang16(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
		}
		return 0;
	}
	function GetSoal16(canv){
		var Abjad1 = ["A","B","C","D"];
		var Abjad2 = ["E","F","G","H"];
		Abjad1 = RandomMyArray(Abjad1);
		Abjad2 = RandomMyArray(Abjad2);
		var Abjad3 = [Abjad1[0],Abjad2[0]]
		Abjad3 = RandomMyArray(Abjad3);
		var Gambar = GambarPeluang16(canv,[1,2]);
		var ss = "Peluang "+Abjad1[0]+" bertemu "+Abjad2[0]+" di babak final dan "+Abjad3[0]+" menjadi juara adalah ...";
		
		var arsalah = [
						["",1,2],
						["",1,4],
						["",1,8],
						["",1,16],
						["",1,64],
						["",1,128],
						["",1,256]
					  ]
		arsalah = RandomMyArray(arsalah);
		var Ar = [];
		Ar[0] = ["",1,32];
		Ar[1] = arsalah[0];
		Ar[2] = arsalah[1];
		Ar[3] = arsalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarPeluang15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.fillStyle = "black";
			ctx.font = "14px Calibri";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],200,155);
			ctx.fillText(arr[1],270,155);
		}
		return 0;
	}
	function GetSoal15(canv){
		var r1 = RandomAngkaAtoB(0,10);
		var dr = RandomAngkaAtoB(0,10);
		var r2 = r1 + dr;
		var L1 = r1**2;
		var L2 = r2**2;
		var dL = L2 - L1;
		var peluang = dL/L2;
		
		var Gambar = GambarPeluang15(canv,[r1,dr]);
		var ss = "Jika diambil sebuah titik secara acak, <b>peluang</b> terambilnya titik dari <b>daerah yang tidak diarsir</b> adalah ...";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i/L2);
		}
		
		ar_er = RandomMyArray(ar_er);
		var Ar = [];
		Ar[0] = peluang;
		Ar[1] = Ar[0]+ar_er[0]; 
		Ar[2] = Ar[0]+ar_er[1];
		Ar[3] = Ar[0]+ar_er[2];
		
		for(var i=0;i<4;i++){
			Ar[i] = StringDesimal(Math.round(Ar[i]*1000)/1000);
		}
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang14(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal14(){
		var nmax = 8;
		var nn = RandomAngkaAtoB(-1,9);
		var arsoal = [
					  ["keempatnya anak laki-laki",["",1,2**4]],
					  ["keempatnya anak perempuan",["",1,2**4]],
					  ["tiga anak laki-laki",["",4,2**4]],
					  ["tiga anak perempuan",["",4,2**4]],
					  ["satu anak laki-laki",["",4,2**4]],
					  ["satu anak perempuan",["",4,2**4]],
					  ["dua anak laki-laki",["",6,2**4]],
					  ["dua anak perempuan",["",6,2**4]],
					  ["paling banyak 2 anak laki-laki",["",1+4+6,2**4]],
					  ["paling banyak 3 anak laki-laki",["",1+4+6+4,2**4]],
					  ["paling banyak 4 anak laki-laki",[1,"",""]],
					  ["paling banyak 2 anak perempuan",["",1+4+6,2**4]],
					  ["paling banyak 3 anak perempuan",["",1+4+6+4,2**4]],
					  ["paling banyak 4 anak perempuan",[1,"",""]]
					 ]
		arsoal = RandomMyArray(arsoal);//paling banyak 2 orang anak laki-laki
		
		var ss = "Sebuah keluarga ingin mempunyai 4 orang anak. ";
		ss += "Peluang bahwa keluarga tersebut memiliki <b>"+arsoal[0][0]+"</b> adalah ...";
		
		var arjawab = [];
		for(var i=0;i<=2**4;i++){
			if(i==0)			arjawab[i] = [0,"",""];
			else if(i==2**4)	arjawab[i] = [1,"",""];
			else				arjawab[i] = ["",i,2**4];
		}
		do{				
			arjawab = RandomMyArray(arjawab);
			var ff = arraysAreEqual(arsoal[0][1], arjawab[0])
		}while(!ff)
		
		var Ar = [];
		Ar[0] = arjawab[0];
		Ar[1] = arjawab[1];
		Ar[2] = arjawab[2];
		Ar[3] = arjawab[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang13(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal13(){
		// pramuka, voli, PMR, KIR
		var arisiA = []; 
		var arisiB = []; 
		do{
			var totalA=0;
			for(var i=0;i<3;i++){
				arisiA[i] = RandomAngkaAtoB(1,10);
				totalA+=arisiA[i];
			}
			var totalB=0;
			for(var i=0;i<3;i++){
				arisiB[i] = RandomAngkaAtoB(1,10);
				totalB+=arisiB[i];
			}
		}while(totalA!==15 || totalB!==11);
		
		var arP = [];
		var nA = 0;
		var nS = totalA*(totalB+1);
		for(var i=0;i<3;i++){
			arP[i] = arisiA[i]*(arisiB[i]+1);
			nA+=arP[i];
		}
		var benar = ["",nA,nS];
		var arsalah = [
						["",Math.abs(arP[0]-arP[1]-arP[2]),nS],
						["",Math.abs(arP[0]+arP[1]-arP[2]),nS],
						["",Math.abs(arP[0]-arP[1]+arP[2]),nS],
						["",Math.abs(-arP[0]+arP[1]+arP[2]),nS],
						["",Math.abs(-arP[0]-arP[1]+arP[2]),nS],
						["",Math.abs(-arP[0]+arP[1]-arP[2]),nS],
						["",Math.abs(arP[0]),nS],
						["",Math.abs(arP[1]),nS],
						["",Math.abs(arP[2]),nS]
						]
		do{
			arsalah = RandomMyArray(arsalah);
			var ff1 = arsalah[0][1]==nA;
			var ff2 = arsalah[1][1]==nA;
			var ff3 = arsalah[2][1]==nA;
			var ff4 = arsalah[0][1]==arsalah[1][1];
			var ff5 = arsalah[0][1]==arsalah[2][1];
			var ff6 = arsalah[1][1]==arsalah[2][1];
			var ff = ff1 || ff2 || ff3 || ff4 || ff5 || ff6;
		}while(ff)					
		
		var ss = "Seorang ibu dan anaknya bermain tebak warna dengan cara mengambil bola dari sebuah kotak A dan memasukkannya kembali ke kotak B. ";
		ss+= "Kotak A berisi "+arisiA[0]+" bola merah, "+arisiA[1]+" bola kuning dan "+arisiA[2]+" bola biru, sedangkan kotak B berisi "+arisiB[0]+" bola merah, "+arisiB[1]+" bola kuning dan "+arisiB[2]+" bola biru. ";
		ss+= "Aturan permainannya adalah pada pengambilan pertama ibu akan mengambil bola dari kotak A dan memasukkanya ke kotak B, ";
		ss+= "dilanjutkan dengan pada pengambilan kedua si anak akan mengambil satu bola dari kotak B dan memasukkanya ke kotak A. ";
		ss+= "Peluang kejadian terambilnya bola warnanya sama pada setiap pengambilan bola adalah ...";
		
		
		var Ar = [];
		Ar[0] = benar;
		Ar[1] = arsalah[0];
		Ar[2] = arsalah[1];
		Ar[3] = arsalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang12(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal12(){
		// pramuka, voli, PMR, KIR
		var arisi = []; 
		do{
			var total=0;
			for(var i=0;i<4;i++){
				arisi[i] = RandomAngkaAtoB(1,20);
				total+=arisi[i];
			}
		}while(total!==40);
		var ekstra = ["pramuka","voli","PMR","KIR"];
		var no = [0,1,2,3];
		no = RandomMyArray(no);
		
		var arsoal = [];
		for(var i=0;i<=40;i++){
			if(i==0)		arsoal[i] = [0,"",""];
			else if(i==40)	arsoal[i] = [1,"",""];
			else			arsoal[i] = ["",i,40];
		}
		
		var nfix = arisi[no[0]];
		
		do{
			arsoal = RandomMyArray(arsoal);
			var ff = arsoal[0][1]!==nfix;
		}while(ff)
		
		var ss = "Dalam satu kelas dilakukan pendataan peserta ekstrakurikuler. ";
		ss+="Didapat hasil sebagai berikut: ";
		ss+=""+arisi[0]+" siswa memilih pramuka, "+arisi[1]+" siswa memilih voli, "+arisi[2]+" siswa memilih PMR, dan "+arisi[3]+" siswa memilih KIR. ";
		ss+="Dipilih seorang siswa secara acak untuk dijadikan koordinator ekstrakurikuler, ";
		ss+="kemungkinan yang terpilih siswa dari cabang "+ekstra[no[0]]+" adalah ...";
		
		
		var Ar = [];
		Ar[0] = arsoal[0];
		Ar[1] = arsoal[1];
		Ar[2] = arsoal[2];
		Ar[3] = arsoal[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang11(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal11(){
		var nmax = 8;
		var nn = RandomAngkaAtoB(-1,9);
		var arsoal = [
					  ["ketiganya gambar",["",1,8]],
					  ["dua gambar dan satu angka",["",3,8]],
					  ["dua gambar",["",3,8]],
					  ["dua angka",["",3,8]],
					  ["satu gambar",["",3,8]],
					  ["satu angka",["",3,8]],
					  ["satu gambar dan dua angka",["",3,8]],
					  ["ketiganya angka",["",1,8]]
					 ]
		arsoal = RandomMyArray(arsoal);
		
		var ss = "Tiga keping uang logam dilempar bersama-sama. "
		ss += "Peluang <b>muncul "+arsoal[0][0]+"</b> adalah ...";
		
		var arjawab = [
						[0,"",""],
						["",1,8],
						["",2,8],
						["",3,8],
						["",4,8],
						["",5,8],
						["",6,8],
						["",7,8],
						[1,"",""]
						];
		do{				
			arjawab = RandomMyArray(arjawab);
			var ff = arraysAreEqual(arsoal[0][1], arjawab[0])
		}while(!ff)
		
		var Ar = [];
		Ar[0] = arjawab[0];
		Ar[1] = arjawab[1];
		Ar[2] = arjawab[2];
		Ar[3] = arjawab[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang10(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal10(){
		var nmax = 8;
		var nn = RandomAngkaAtoB(-1,9);
		var arsoal = [
					  ["lebih dari 0",[1,"",""]],
					  ["lebih dari 1",["",7,8]],
					  ["lebih dari 2",["",6,8]],
					  ["lebih dari 3",["",5,8]],
					  ["lebih dari 4",["",4,8]],
					  ["lebih dari 5",["",3,8]],
					  ["lebih dari 6",["",2,8]],
					  ["lebih dari 7",["",1,8]],
					  ["lebih dari 8",[0,"",""]],
					  ["kurang dari 1",[0,"",""]],
					  ["kurang dari 2",["",1,8]],
					  ["kurang dari 3",["",2,8]],
					  ["kurang dari 4",["",3,8]],
					  ["kurang dari 5",["",4,8]],
					  ["kurang dari 6",["",5,8]],
					  ["kurang dari 7",["",6,8]],
					  ["kurang dari 8",["",7,8]],
					  ["kurang dari 9",[1,"",""]]
					 ]
		arsoal = RandomMyArray(arsoal);
		
		var ss = "Dalam sebuah kantong terdapat delapan bola yang diberi nomor 1 sampai dengan 8. ";
		ss += "Akan diambil sebuah bola secara acak. ";
		ss += "Peluang terambilnya bola <b>bernomor "+arsoal[0][0]+"</b> adalah ...";
		
		var arjawab = [
						[0,"",""],
						["",1,8],
						["",2,8],
						["",3,8],
						["",4,8],
						["",5,8],
						["",6,8],
						["",7,8],
						[1,"",""]
						];
		do{				
			arjawab = RandomMyArray(arjawab);
			var ff = arraysAreEqual(arsoal[0][1], arjawab[0])
		}while(!ff)
		
		var Ar = [];
		Ar[0] = arjawab[0];
		Ar[1] = arjawab[1];
		Ar[2] = arjawab[2];
		Ar[3] = arjawab[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal9(){
		var arA = [3,6,7,9];
		var arB = [1,2,4,5,8,10]
		arA = RandomMyArray(arA);
		arB = RandomMyArray(arB);
		var total = 10*arA[0]*arB[0];
		
		var ss = "Dalam kegiatan gerak jalan santai yang diikuti oleh "+total+" peserta, panitia menyediakan hadiah "+arA[0]+" buah sepeda. ";
		ss += "Peluang setiap peserta untuk mendapatkan hadiah adalah ...";
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i/100);
		}
		
		var Ar = [];
		do{
			ar_er = RandomMyArray(ar_er);
			Ar[0] = (arA[0])/total;
			Ar[1] = Ar[0]+ar_er[0];
			Ar[2] = Ar[0]+ar_er[1];
			Ar[3] = Ar[0]+ar_er[2];
		}while(Ar[0]+ar_er[0]<=0 || Ar[0]+ar_er[1]<=0 || Ar[0]+ar_er[2]<=0)
		
		for(var i=0;i<=3;i++){
			Ar[i] = Math.round(Ar[i]*100)/100;
			Ar[i] = StringDesimal(Ar[i]);
		}
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang8(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal8(){
		var arisi = []; // putih,hijau,merah
		do{
			var total=0;
			for(var i=0;i<3;i++){
				arisi[i] = RandomAngkaAtoB(1,10);
				total+=arisi[i];
			}
		}while(total!==15);
		var warna = ["putih","hijau","merah"];
		var no = [0,1,2]
		no = RandomMyArray(no);
		
		
		var arsoal = [
					  [0,"",""],
					  ["",1,15],
					  ["",2,15],
					  ["",3,15],
					  ["",4,15],
					  ["",5,15],
					  ["",6,15],
					  ["",7,15],
					  ["",8,15],
					  ["",9,15],
					  ["",10,15],
					  ["",11,15],
					  ["",12,15],
					  ["",13,15],
					  ["",14,15],
					  [1,"",""]
					 ]
		var nfix = arisi[no[0]];
		
		do{
			arsoal = RandomMyArray(arsoal);
			var ff = arsoal[0][1]!==nfix
		}while(ff)
		
		var ss = "Sebuah bola diambil dari sebuah kantong yang berisi "+arisi[0]+" bola berwarna putih, ";
		ss += ""+arisi[1]+" bola berwarna hijau, ";
		ss += "dan "+arisi[2]+" bola berwarna merah. ";
		ss += "Peluang terambilnya bola berwarna "+warna[no[0]]+" adalah ...";
		
		
		var Ar = [];
		Ar[0] = arsoal[0];
		Ar[1] = arsoal[1];
		Ar[2] = arsoal[2];
		Ar[3] = arsoal[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang7(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal7(){
		// sebuah dadu // n(s) = 6
		// muncul genap
		// muncul ganjil
		// muncul prima
		// muncul kurang dari 2
		// muncul kurang dari 3
		// muncul kurang dari 4
		// muncul kurang dari 5
		// muncul kurang dari 6
		// muncul lebih dari 1
		// muncul lebih dari 2
		// muncul lebih dari 3
		// muncul lebih dari 4
		// muncul lebih dari 5
		var arsoal = [
					  ["munculnya mata dadu genap",3,6],
					  ["munculnya mata dadu ganjil",3,6],
					  ["munculnya mata dadu prima",3,6],
					  ["munculnya mata dadu kurang dari 2",1,6],
					  ["munculnya mata dadu kurang dari 3",2,6],
					  ["munculnya mata dadu kurang dari 4",3,6],
					  ["munculnya mata dadu kurang dari 5",4,6],
					  ["munculnya mata dadu kurang dari 6",5,6],
					  ["munculnya mata dadu lebih dari 1",5,6],
					  ["munculnya mata dadu lebih dari 2",4,6],
					  ["munculnya mata dadu lebih dari 3",3,6],
					  ["munculnya mata dadu lebih dari 4",2,6],
					  ["munculnya mata dadu lebih dari 5",1,6]
					 ]
		arsoal = RandomMyArray(arsoal);
		
		var ss = "Sebuah dadu dilambungkan sekali. Peluang <b>"+arsoal[0][0]+"</b> adalah ...";
		
		var arjawab = [
						[0,"",""],
						["",1,6],
						["",2,6],
						["",3,6],
						["",4,6],
						["",5,6],
						[1,"",""]
						]
		do{				
			arjawab = RandomMyArray(arjawab);
			var ff = arjawab[0][1]==arsoal[0][1] || arjawab[1][1]==arsoal[0][1] || arjawab[2][1]==arsoal[0][1];
		}while(ff)
		
		var Ar = [];
		Ar[0] = ["",arsoal[0][1],6];
		Ar[1] = arjawab[0];
		Ar[2] = arjawab[1];
		Ar[3] = arjawab[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal6(){
		var arMerah = [2,1,2];  // ganjil genap prima // 1,2,3
		var arKuning = [2,3,2]; // ganjil genap prima // 4,5,6,7,8
		var arHijau = [2,2,1];  // ganjil genap prima // 9,10,11,12
		var urutan = ["ganjil","genap","prima"];
		urutan = RandomMyArray(urutan);
		var total = [6,6,5];
		
		var arpeluang = [
						["ganjil","genap","prima",4,10],
						["ganjil","prima","genap",6,10],
						["genap","ganjil","prima",3,10],
						["genap","prima","ganjil",5,10],
						["prima genap","ganjil","genap",5,10],
						["prima ganjil","ganjil","genap",6,10],
						["prima genap","genap","ganjil",6,10],
						["prima ganjil","genap","ganjil",5,10]
						]
		
		arpeluang = RandomMyArray(arpeluang);
		
		var ss = "Dalam kantong terdapat tiga bola berwarna merah diberi nomor 1−3, ";
		ss += "lima bola berwarna kuning diberi nomor 4−8, ";
		ss += "dan empat bola berwarna hijau diberi nomor 9−12. ";
		ss += "Tiga bola diambil satu persatu secara acak dari dalam kantong. ";
		ss += "Pengambilan pertama muncul bola merah bernomor "+arpeluang[0][0]+" dan tidak dikembalikan. ";
		ss += "Pengambilan kedua muncul bola hijau bernomor "+arpeluang[0][1]+" dan tidak dikembalikan. ";
		ss += "Peluang terambil bola bernomor "+arpeluang[0][2]+" pada pengambilan ketiga adalah ...";
		
		var arjawab = [
						100*(arpeluang[0][3]-1)/arpeluang[0][4] + "%",
						100*(arpeluang[0][3]-2)/arpeluang[0][4] + "%",
						100*(arpeluang[0][3]+1)/arpeluang[0][4] + "%",
						100*(arpeluang[0][3]+2)/arpeluang[0][4] + "%"
						]
		arjawab = RandomMyArray(arjawab);
		
		var Ar = [];
		Ar[0] = 100*arpeluang[0][3]/arpeluang[0][4] + "%";
		Ar[1] = arjawab[0];
		Ar[2] = arjawab[1];
		Ar[3] = arjawab[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarPeluang5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
		}
		return 0;
	}
	function GetSoal5(canv){
		var warna = [["merah",6],["oranye",5],["kuning",3],["hijau",3],["biru",2],["merah muda",4],["ungu",2],["cokelat",5]];
		warna = RandomMyArray(warna);
		var total = 0;
		for(var i=0;i<warna.length;i++){
			total += warna[i][1];
		}
		
		var Gambar = GambarPeluang5(canv,[]);
		
		var ss = "Berapakah peluang Roni mengambil sebuah permen warna "+warna[0][0]+"?";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		var Ar = [];
		do{
			ar_er = RandomMyArray(ar_er);
			Ar[0] = (warna[0][1])/total * 100;
			Ar[1] = (warna[0][1]+ar_er[0])/total * 100
			Ar[2] = (warna[0][1]+ar_er[1])/total * 100
			Ar[3] = (warna[0][1]+ar_er[2])/total * 100
		}while(warna[0][1]+ar_er[0]<=0 || warna[0][1]+ar_er[1]<=0 || warna[0][1]+ar_er[2]<=0)
		
		for(var i=0;i<4;i++){
			Ar[i] = Math.round(Ar[i]*100)/100;
			Ar[i] = StringDesimal(Ar[i]) + "%";
		}
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang4(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABFSURBVFhH7daxDQAgCAVRsGL/hdXCCS6RgtxrKK/85L6iwXr3O0OYIcwQZggzhM0LZVXNmnKfE8wQZggzhBnCDGFNoYgDTMsJXTTipecAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABYSURBVFhH7dYxCgAgDMDA6tb/P1gd/IAEtEhuqWMoFGxjicL6nmUZSBlIGUgZSBlIGUgZSBlIlQ88+vJn5n7d89cGX/BIKAMpAykDKQMpAykDKQMpA5mICbLeDF3L3QcfAAAAAElFTkSuQmCC";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal4(){
		var gangen = ["ganjil","genap"];
		gangen = RandomMyArray(gangen);
		var nmax = 5*(2*RandomAngkaAtoB(0,10)-1);
		var nn = 3;
		var mgan = (nmax+1)/2; // ganjil > genap
		var mgen = mgan-1; // ganjil > genap
		var arbenar = [];
		arbenar[0] = ["",(mgen-1),nmax-(nn-1)];
		arbenar[1] = ["",(mgan-1),nmax-(nn-1)];
		arbenar[2] = ["",(mgen-1),nmax-(nn-2)];
		arbenar[3] = ["",(mgan-2),nmax];
		
		for(var i=0;i<4;i++){
			var fpb = CariFPB([arbenar[i][1],arbenar[i][2]]);
			arbenar[i][1] = Math.round(arbenar[i][1]/fpb);
			arbenar[i][2] = Math.round(arbenar[i][2]/fpb);
		}
		
		var ss = "Dalam sebuah kotak terdapat "+nmax+" bola yang diberi nomor 1 sampai "+nmax+". "
		ss += "Jika diambil 1 bola bernomor ganjil dan tidak dikembalikan, ";
		ss += "kemudian diambil lagi 1 bola bernomor genap juga tidak dikembalikan. ";
		ss += "Pengambilan ketiga diambil satu bola secara acak. ";
		ss += "Peluang terambil bola bernomor genap pada pengambilan ketiga adalah ...";
		
		
		var Ar = [];
		Ar[0] = arbenar[0];
		Ar[1] = arbenar[1];
		Ar[2] = arbenar[2];
		Ar[3] = arbenar[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang3(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal3(){
		var gangen = ["ganjil","genap"];
		gangen = RandomMyArray(gangen);
		var nmax = 2*RandomAngkaAtoB(2,9);
		var nn = 3;
		var max2 = nmax/2; // setengah ganjil setengah genap
		var ff
		/*
		do{
			nn = RandomAngkaAtoB(0,nmax-1);
			ff = CariFPB([nn,nmax])==1;
		}while(!ff);
		*/
		var arbenar = [];
		arbenar[0] = ["",max2,nmax-(nn-1)];
		arbenar[1] = ["",max2-1,nmax-(nn-1)];
		arbenar[2] = ["",max2-1,nmax];
		arbenar[3] = ["",max2-2,nmax];
		
		for(var i=0;i<4;i++){
			var fpb = CariFPB([arbenar[i][1],arbenar[i][2]]);
			arbenar[i][1] = Math.round(arbenar[i][1]/fpb);
			arbenar[i][2] = Math.round(arbenar[i][2]/fpb);
		}
		
		var ss = "Dalam sebuah kotak terdapat "+nmax+" bola yang diberi nomor 1 sampai "+nmax+". ";
		ss += "Diambil "+nn+" bola satu persatu tanpa pengembalian. ";
		ss += "Pengambilan pertama dan kedua terambil nomor "+gangen[0]+". ";
		ss += "Peluang terambil bola bernomor "+gangen[0]+" pada pengambilan ketiga adalah ...";
		
		var Ar = [];
		Ar[0] = arbenar[0];
		Ar[1] = arbenar[1];
		Ar[2] = arbenar[2];
		Ar[3] = arbenar[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang2(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal2(){
		var max = 100*RandomAngkaAtoB(0,4);//300;
		var arjawab = [];
		do{
			var ff = true;
			var arsoal = [];
			var fpb = 1;
			do{
				for(var i=0;i<4;i++){
					arsoal[i] = RandomAngkaAtoB(0,max);
				}
			}while(arsoal[0]==arsoal[1] || arsoal[0]==arsoal[2] || arsoal[0]==arsoal[3] || arsoal[1]==arsoal[2] || arsoal[1]==arsoal[3] || arsoal[2]==arsoal[3])
			for(var i=0;i<4;i++){
				fpb = CariFPB([arsoal[i],max]);
				ff = ff&&fpb!==1;
				arjawab[i] = ["",Math.round(arsoal[i]/fpb),Math.round(max/fpb)];
			}
		}while(!ff);
		
		var ss = "Dalam suatu acara untuk memperingati Hari Kemerdekaan, ";
		ss += "ketua RT mengadakan undian berhadiah dengan hadiah utama sebuah sepeda. ";
		ss += "Jika dalam undian tersebut terdapat "+max+" kupon. Andi ingin mendapatkan hadiah utama dengan memiliki "+arsoal[0]+" kupon. ";
		ss += "Peluang Andi untuk mendapatkan sepeda adalah ...";
		
		var Ar = [];
		Ar[0] = arjawab[0];
		Ar[1] = arjawab[1];
		Ar[2] = arjawab[2];
		Ar[3] = arjawab[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarJawabPeluang1(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
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
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i][0]!=="" && arrs[i][1]==""){
						ctx.fillText(arrs[i][0],30,22+40*i);
					}else{
						if(arrs[i][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i][1],43,12+40*i);
							ctx.fillText(arrs[i][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i][0],30,22+40*i);
							ctx.fillText(arrs[i][1],47,12+40*i);
							ctx.fillText(arrs[i][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal1(){
		var arjum = [2,3,4,5,6,7,8,9,10,11,12];
		arjum = RandomMyArray(arjum);
		var jumfix = arjum[0];
		
		var na = [0,1,2,3,4,5,6,5,4,3,2,1];
		var nafix = na[jumfix];
		var ns = 6*6; // dua dadu
		
		
		var arjawab = [
					["",0,36],
					["",1,36],
					["",1,18],//["",2,36],
					["",1,12],//["",3,36],
					["",1,9],//["",4,36],
					["",5,36],
					["",1,6],//["",6,36],
					["",5,36],
					["",1,9],//["",4,36],
					["",1,12],//["",3,36],
					["",1,18],//["",2,36],
					["",1,36]
					];
					
		var arsalah = [
					["",1,36],
					["",1,18],//["",2,36],
					["",1,12],//["",3,36],
					["",1,9],//["",4,36],
					["",5,36],
					["",1,6]
					];
					
		var arbenar = arjawab[jumfix-1];
		
		do{
			arsalah = RandomMyArray(arsalah);
			var ff = arraysAreEqual(arsalah[0], arbenar);
		}while(!ff)
		
		var ss = "Pada pengundian dua dadu secara bersamaan, peluang muncul mata dadu berjumlah "+jumfix+" adalah ...";
		
		var Ar = [];
		Ar[0] = arsalah[0];
		Ar[1] = arsalah[1];
		Ar[2] = arsalah[2];
		Ar[3] = arsalah[3];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
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
					GetSoal20/*,
					GetSoal21,
					GetSoal22,
					GetSoal23,
					GetSoal24,
					GetSoal25,
					GetSoal26,
					GetSoal27,
					GetSoal28,
					GetSoal29,
					GetSoal30*/];
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
	
	//dd1.innerHTML="<p>Bab 2 \u{2192} Teori Bilangan </p>";
	dd1.innerHTML="";
	if(no==1){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang1(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==2){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang2(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==3){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang3(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==4){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang4(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Roni diperbolehkan ibunya untuk mengambil satu permen dari sebuah kantong. Dia tidak dapat melihat warna permen tersebut. Banyaknya permen dengan masing-masing warna dalam kantong tersebut ditunjukkan dalam grafik berikut...</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Roni diperbolehkan ibunya untuk mengambil satu permen dari sebuah kantong. Dia tidak dapat melihat warna permen tersebut. Banyaknya permen dengan masing-masing warna dalam kantong tersebut ditunjukkan dalam grafik berikut...</p>";
		cc1.width = 457;
		cc1.height = 387;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang7(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==8){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang8(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==10){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang10(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==11){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang11(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==12){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang12(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==13){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang13(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==14){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang14(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diberikan gambar berikut (lingkaran di dalam lingkaran):</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diberikan gambar berikut (lingkaran di dalam lingkaran):</p>";
		cc1.width = 307;
		cc1.height = 309;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Babak perempat final Liga Champion 2021 diikuti oleh 8 tim A, B, C, D, E, F, G, dan H yang berlaga dan ditentukan dengan hasil undian sebagai berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Babak perempat final Liga Champion 2021 diikuti oleh 8 tim A, B, C, D, E, F, G, dan H yang berlaga dan ditentukan dengan hasil undian sebagai berikut:</p>";
		cc1.width = 599;
		cc1.height = 300;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang14(cc2.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang19(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut ini terdapat 11 koin yang bertuliskan bilangan-bilangan.</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut ini terdapat 11 koin yang bertuliskan bilangan-bilangan.</p>";
		cc1.width = 447;
		cc1.height = 103;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabPeluang14(cc2.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
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