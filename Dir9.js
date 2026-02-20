function Print9(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function StringDesimal(ff){
		var strff = ""+ff;
		const gg = strff.split(".");
		if(gg.length==2)	return gg[0]+","+gg[1];
		else 				return ff
	}
	function Mysudut1(){
		var sudut = RandomAngkaAtoB(100,50);
		var BAC = 180-sudut;
		var ABC = Math.round(sudut/2);
		var benar = ABC;
		var salah1 = BAC;
		var salah2 = Math.round(BAC/2);
		var salah3 = BAC+5;
		var salah4 = ABC+5;
		var salah5 = BAC-5;
		var salah6 = ABC-5;
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arSalah = RandomMyArray(arSalah);
		
		return [sudut,benar,arSalah];
	}
	function GambarProperti1(nmcanvas){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			//ctx.fillText(arr[0],0,100);
			//ctx.fillText(arr[1],0,160);
		}
		return 0;
	}
	function Mysudut2(){
		var pasang = [[2,7],[3,6],[4,5]];
		var koefisien = [[20,14,2],[60,40,30,12,4,3,2],[40,25,10,4,2]];
		var ct = RandomAngkaAtoB(-1,3)
		
		var arpasang = pasang[ct];
		var arkoef = koefisien[ct];
		arkoef = RandomMyArray(arkoef);
		
		var x = 20;
		var p = x*arpasang[1]/arkoef[0];
		
		var benar = p;
		var salah1 = x;
		var salah2 = x*arpasang[1]/arkoef[1];
		var salah3 = x*arpasang[1]/arkoef[2];
		//var salah4 = x*arpasang[0]/arkoef[2];
		//var salah5 = x*arpasang[1]/arkoef[1];
		//var salah6 = x*arpasang[1]/arkoef[2];
		var arSalah = [salah1,salah2,salah3];
		//var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arSalah = RandomMyArray(arSalah);
		
		return [arpasang,arkoef[0],benar,arSalah];
	}
	function GambarProperti2(nmcanvas){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			//ctx.fillText(arr[0],0,100);
			//ctx.fillText(arr[1],0,160);
		}
		return 0;
	}
	function Mysudut3(){
		var Segi = [5,6,8,10,12,15,18,20];
		Segi = RandomMyArray(Segi);
		
		var sudut = Math.round(360/Segi[0]);
		
		var benar = sudut;
		var salah1 = Math.round(360/Segi[1]);
		var salah2 = Math.round(360/Segi[2]);
		var salah3 = Math.round(360/Segi[3]);
		var salah4 = Math.round(360/Segi[4]);
		var salah5 = Math.round(360/Segi[5]);
		var salah6 = Math.round(360/Segi[6]);
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arSalah = RandomMyArray(arSalah);
		
		return [Segi[0],benar,arSalah];
	}
	function Mysudut4(){
		var sudut = RandomAngkaAtoB(20,40)
		var komplemen = 90 - sudut;
		var suplemen = 180 - komplemen;
		
		var benar = sudut;
		var salah1 = komplemen;
		var salah2 = sudut+10;
		var salah3 = sudut+5;
		var salah4 = sudut-5;
		var salah5 = komplemen+5;
		var salah6 = komplemen-5;
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arSalah = RandomMyArray(arSalah);
		
		return [suplemen,benar,arSalah];
	}
	function Mysudut5(){
		var ArKoef = [[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]];
		ArKoef = RandomMyArray(ArKoef);
		var c2 = RandomAngkaAtoB(5,10);
		var c1 = c2+RandomAngkaAtoB(5,10);
		
		var x = c1 - c2;
		var A2 = ArKoef[0][0]*x + c1;
		var A1 = 180 - A2;
		var benar = A1;
		var salah1 = A2;
		var salah2 = x;
		var salah3 = A1+5;
		var salah4 = A2+5;
		var salah5 = A1-5;
		var salah6 = A2-5;
		var salah7 = x+5;
		var salah8 = x+5;
		
		var string1 = "("+ArKoef[0][0]+"x + "+c1+")";
		var string2 = "("+ArKoef[0][1]+"x + "+c2+")";
		
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		arSalah = RandomMyArray(arSalah);
		
		return [string1,string2,benar,arSalah];
	}
	function GambarProperti5(nmcanvas){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			//ctx.fillText(arr[0],0,100);
			//ctx.fillText(arr[1],0,160);
		}
		return 0;
	}
	function Mysudut6(sdt){
		var sudut = RandomAngkaAtoB(30,50);
		//var sudut = sdt;
		var PQR2 = (180-sudut);
		var PQR = PQR2/2;
		var TQR = 180 - PQR;
		var benar = TQR;
		var salah1 = PQR;
		var salah2 = PQR2;
		var salah3 = TQR+5;
		var salah4 = PQR+5;
		var salah5 = TQR-5;
		var salah6 = PQR-5;
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arSalah = RandomMyArray(arSalah);
		
		return [sudut,benar,arSalah];
	}
	function GambarProperti6(nmcanvas,sudut){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(sudut+"\u{00B0}",65,70);
			//ctx.fillText(arr[0],0,100);
			//ctx.fillText(arr[1],0,160);
		}
		return 0;
	}
	function Mysudut7(){
		var sudut1 = RandomAngkaAtoB(20,30);
		var sudut2 = sudut1;
		var sudut3 = 180 - sudut1 - sudut2;
		var perlurus3 = 2*sudut1;
		
		var benar = "segitiga sama kaki";
		var salah1 = "segitiga tumpul";
		var salah2 = "segitiga sama sisi";
		var salah3 = "segitiga sembarang";
		var arSalah = [salah1,salah2,salah3];
		arSalah = RandomMyArray(arSalah);
		
		return [sudut1,perlurus3,benar,arSalah];
	}
	function Mysudut8(){
		var A2 = RandomAngkaAtoB(20,120);
		var B3 = 180-A2;
		var benar = B3;
		var salah1 = A2;
		var salah2 = A2+5;
		var salah3 = A2-5;
		var salah4 = B3+5;
		var salah5 = B3-5;
		var salah6 = A2-10;
		var salah7 = B3-10;
		
		
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arSalah = RandomMyArray(arSalah);
		
		return [A2,benar,arSalah];
	}
	function GambarProperti8(nmcanvas){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			//ctx.fillText(arr[0],0,100);
			//ctx.fillText(arr[1],0,160);
		}
		return 0;
	}
	function Mysudut9(){
		var pendek = RandomAngkaAtoB(1,4);
		var panjang = 40;
		
		var sudut = 180 - 30*(pendek-2) - panjang/60*30;
		var lawan = 360-sudut;
		var jam = "0"+pendek+".40";
		var benar = sudut;
		var salah1 = lawan;
		var salah2 = sudut+5;
		var salah3 = sudut-5;
		var salah4 = lawan+5;
		var salah5 = lawan-5;
		var salah6 = sudut+10;
		var salah7 = lawan+10;
		var arSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arSalah = RandomMyArray(arSalah);
		
		return [jam,benar,arSalah];
	}
	function Mysudut10(){
		var soal = "Melalu satu titik dapat dibuat ... ";
		var benar = "Tak hingga garis lurus";
		var salah1 = "Tepat satu garis lurus";
		var salah2 = "Hanya dua garis lurus";
		var salah3 = "Tak ada garis lurus";
		var arSalah = [salah1,salah2,salah3];
		arSalah = RandomMyArray(arSalah);
		
		return [soal,benar,arSalah];
	}
	function GetSoal1(canv){
		
		const thesudut = Mysudut1();
		//[modal,persen,bln,hasil];
		var sudut=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		
		const datas = GambarProperti1(canv,0);
		
		//Perhatikan gambar segitiga di atas ! 
		//Jika DAC = 140\u{00B0}, maka besar ABC adalah ...
		
		var ss;
		ss = "Jika \u{2220}DAC = "+sudut+"\u{00B0}, maka besar \u{2220}ABC adalah ... ";
		
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(canv){
		const thesudut = Mysudut2();
		//[arpasang[0],arkoef[0],benar,arSalah];
		var pasang=thesudut[0];
		var arkoef=thesudut[1];
		var benar=thesudut[2];
		var salah=thesudut[3];
		
		const datas = GambarProperti2(canv,0);
		
		//Perhatikan gambar di atas ! 
		//Diketahui \u{2220}A2=4x, \u{2220}A3=5x, dan \u{2220}B1=8p\u{00B0}, maka nilai p adalah ...
		
		var ss;
		ss = "Perhatikan gambar di atas !  ";
		ss += "Diketahui \u{2220}A2 = "+pasang[0]+"x, \u{2220}A3 = "+pasang[1]+"x, dan \u{2220}B1 = "+arkoef+"p\u{00B0}, maka nilai p adalah ... ";
		
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(){
		const thesudut = Mysudut3();
		//[Segi[0],benar,arSalah];
		var segi=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		
		//Besar setiap sudut segi-20 beraturan adalah ...
		
		var ss;
		ss = "Besar setiap sudut segi-"+segi+" beraturan adalah ...";
		
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(){
		
		const thesudut = Mysudut4();
		//[suplemen,benar,arSalah];
		var sudut=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		
		//Sudut x berkomplemen dengan sudut y yang memiliki suplemen 153\u{00B0}. 
		//Jika x dan z dua sudut luar sepihak, maka nilai z adalah
		
		var ss;
		ss = "Sudut x berkomplemen dengan sudut y yang memiliki suplemen "+sudut+"\u{00B0}. ";
		ss += "Jika x dan z dua sudut luar sepihak, maka nilai z adalah ... ";
		
		
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(canv){
		const thesudut = Mysudut5();
		//[string1,string2,benar,arSalah];
		var string1=thesudut[0];
		var string2=thesudut[1];
		var benar=thesudut[2];
		var salah=thesudut[3];
		
		const datas = GambarProperti5(canv);
		
		//Pada gambar di atas, diketahui \u{2220}A2 = (4x + 46) dan \u{2220}B4 = (5x + 25)\u{00B0}.
		//Besar \u{2220}A1 adalah ...
		
		var ss;
		ss = "Pada gambar di atas, diketahui \u{2220}A2 = "+string1+" dan \u{2220}B4 = "+string2+"\u{00B0}. ";
		ss += "Besar \u{2220}A1 adalah ... ";
		
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal6(canv){
		const thesudut = Mysudut6();
		//Mysudut6(sdt);
		//[modal,persen,bln,hasil];
		var sudut=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		const sdt = GambarProperti6(canv,sudut);
		
		//Perhatikan gambar segitiga di atas !
		//Besar \u{2220}TQR adalah ...
		
		var ss;
		ss = "Perhatikan gambar segitiga di atas ! ";
		ss += "Besar \u{2220}TQR adalah ... ";
		
		var Ar = [];
		// jawaban
		
		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}

	function GetSoal7(){
		
		const thesudut = Mysudut7();
		//[sudut1,perlurus3,benar,arSalah];
		var sudut1=thesudut[0];
		var perlurus3=thesudut[1];
		var benar=thesudut[2];
		var salah=thesudut[3];
		
		//Pada segitiga ABC, diketahui besar sudut C = 50\u{00B0}, 
		//sedangkan pelurus sudut B = 100\u{00B0}. 
		//Jenis segitiga ABC adalah ...
		
		var ss;
		ss = "Pada segitiga ABC, diketahui besar sudut C = "+sudut1+"\u{00B0}, ";
		ss += "sedangkan pelurus sudut B = "+perlurus3+"\u{00B0}. ";
		ss += "Jenis segitiga ABC adalah ... ";
		
		var Ar = [];
		// jawaban
		
		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(canv){
		const thesudut = Mysudut8();
		//[A2,benar,arSalah];
		var sudut=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		
		const datas = GambarProperti8(canv);
		
		//Pada gambar diketahui \u{2220}A2 = 78\u{00B0}. Besar \u{2220}B3 adalah ...
		
		var ss;
		ss = "Pada gambar diketahui \u{2220}A2 = "+sudut+"\u{00B0}. Besar \u{2220}B3 adalah ...";
			
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(){
		const thesudut = Mysudut9();
		//[jam,benar,arSalah];
		var jam=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		
		//Besar sudut yang dibentuk jarum panjang dan jarum pendek pada pukul 01.40 adalah ...
		
		var ss;
		ss = "Besar sudut yang dibentuk jarum panjang dan jarum pendek pada pukul "+jam+" adalah ...";
		
		
		var Ar = [];
		// jawaban

		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"\u{00B0}<br>B. "+Ar[1]+"\u{00B0}<br>C. "+Ar[2]+"\u{00B0}<br>D. "+Ar[3]+"\u{00B0}</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(){
		
		const thesudut = Mysudut10();
		//[soal,benar,arSalah];
		var soal=thesudut[0];
		var benar=thesudut[1];
		var salah=thesudut[2];
		
		//Besar sudut yang dibentuk jarum panjang dan jarum pendek pada pukul 01.40 adalah ...
		
		var ss;
		ss = soal;
		
		var Ar = [];
		// jawaban
		
		Ar[0] = benar
		Ar[1] = salah[0];
		Ar[2] = salah[1];
		Ar[3] = salah[2];
		
		Ar[0] = StringDesimal(Ar[0])
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
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
	
	
	
	dd1.innerHTML="<p>Bab 9 \u{2192} Garis dan Sudut </p>";
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 230;
		cc1.height = 165;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 232;
		cc1.height = 173;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 232;
		cc1.height = 173;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 226;
		cc1.height = 161;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 232;
		cc1.height = 173;
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
