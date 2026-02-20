function Print4(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function NoJawabanBenarEqual(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			if (Arr[i][0]==jwb[0]){
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
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function MyPersamaanLinier1(){
		//1. Persamaan di bawah ini yang termasuk persamaan linear satu variabel adalah ...
		var a1,a2,a3,b1,b2,c1,c2,d1,d2;
		do{
			a1 = RandomAngkaAtoB(2,6);
			a2 = RandomAngkaAtoB(2,6);
			a3 = RandomAngkaAtoB(2,6);
			b1 = RandomAngkaAtoB(2,6);
			b2 = RandomAngkaAtoB(2,6);
			c1 = RandomAngkaAtoB(2,6);
			c2 = RandomAngkaAtoB(2,6);
			d1 = RandomAngkaAtoB(2,6);
			d2 = RandomAngkaAtoB(2,6);
		}while (a1==a3 || b1==b2 || c1==c2 || d1==d2)
		
		//var soal = a1+"x + "+a2+" "+arDari[0]+" "+a4;
		//–
		var benar = ""+a1+" + "+a2+"x = "+a3+"";
		var salah1 = "x + "+b1+"y = "+b2+"";
		var salah2 = "\u{2212}x + "+c1+"y = "+c2+"x";
		var salah3 = "x \u{2212} "+d1+"y = "+d2+"";
		var arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [benar,arrSalah];
	}
	function MyPersamaanLinier2(){
		//2. 6a - 9 = 3a - 3
		do{
			var ee = RandomAngkaAtoB(2,8);
			var mm = RandomAngkaAtoB(2,8);
			var cc = RandomAngkaAtoB(2,8);
			var aa = mm+cc;
			var kk = ee*mm;
			var dd = RandomAngkaAtoB(2,8);
			var bb = kk+dd;
		}while (ee==mm || kk==dd)
		
		var soal = ""+aa+"a \u{2212} "+bb+" = "+cc+"a \u{2212} "+dd+"";
		var hasil = ee;
		var fpb = CariFPB([aa-cc,bb-dd])
		var hasils1 = (aa-cc)/fpb+"/"+(bb-dd)/fpb;
		var hasils2 = (aa-cc)/fpb+"/"+(bb-dd);
		var hasils3 = (aa-cc)+"/"+(bb-dd)/fpb;
		
		var atas1 = (aa-cc)/fpb;
		var bawah1 = (bb-dd)/fpb;
		var atas2 = (aa-cc)/fpb;
		var bawah2 = (bb-dd);
		var atas3 = (aa-cc);
		var bawah3 = (bb-dd)/fpb;
		
		//–
		/*
		var benar = hasil;
		var salah1 = "–"+hasil;
		var salah2 = hasils1;
		var salah3 = "–"+hasils1;
		var salah4 = hasils2;
		var salah5 = "–"+hasils2;
		var salah6 = hasils3;
		var salah7 = "–"+hasils3;
		var salah8 = ee*fpb;
		var salah9 = "–"+ee*fpb;
		*/
		var benar = [hasil,[1,hasil,1]];
		var salah1 = ["\u{2212}"+hasil,[-1,"\u{2212}"+hasil,1]];
		var salah2 = [hasils1,[1,(aa-cc)/fpb,(bb-dd)/fpb]];				if(Mods(atas1,bawah1)==0)	salah2 = [hasils1,[1,atas1/bawah1,1]];
		var salah3 = ["\u{2212}"+hasils1,[-1,(aa-cc)/fpb,(bb-dd)/fpb]];	if(Mods(atas1,bawah1)==0)	salah3 = ["\u{2212}"+hasils1,[-1,"\u{2212}"+atas1/bawah1,1]];
		var salah4 = [hasils2,[1,(aa-cc)/fpb,(bb-dd)]];					if(Mods(atas2,bawah2)==0)	salah4 = [hasils2,[1,atas2/bawah2,1]];
		var salah5 = ["\u{2212}"+hasils2,[-1,(aa-cc)/fpb,(bb-dd)]];		if(Mods(atas2,bawah2)==0)	salah5 = ["\u{2212}"+hasils2,[-1,"\u{2212}"+atas2/bawah2,1]];
		var salah6 = [hasils3+"/"+1,[1,(aa-cc),(bb-dd)/fpb]];			if(Mods(atas3,bawah3)==0)	salah6 = [hasils3,[1,atas3/bawah3,1]];
		var salah7 = ["\u{2212}"+hasils3,[-1,(aa-cc),(bb-dd)/fpb]];		if(Mods(atas3,bawah3)==0)	salah7 = ["\u{2212}"+hasils3,[-1,"\u{2212}"+atas3/bawah3,1]];
		var salah8 = [ee*fpb,[1,ee*fpb,1]];
		var salah9 = ["\u{2212}"+ee*fpb,[-1,"\u{2212}"+ee*fpb,1]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal,benar,arrSalah];
	}
	function PropertiAljabar2(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		ctx.font = "16px Times New Roman";
		var dy=-70
		
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
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.fillText(arrs[i][1][1],35,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
				}
			}
		}
		return 0;
	}
	function MyPersamaanLinier3(){
		//2. 6a - 9 = 3a - 3
		do{
			var aa = RandomAngkaAtoB(2,10);
			var bb = RandomAngkaAtoB(2,10);
			var cc = RandomAngkaAtoB(2,10);
			var dd = aa*bb+cc;
			var ee = aa+2;
			var fpb = CariFPB([dd,ee])
			dd = dd/fpb;
			ee = ee/fpb;
			var ff = Math.floor(dd/ee);
			var gg = dd-ff*ee;
		}while (ff==ee || ff==gg || gg<2);
		
		var soal = aa+"(x \u2212 "+bb+") + x = \u2212x + "+cc;
		var hasil = ff+" "+gg+"/"+ee;
		//var fpb = CariFPB([aa-cc,bb-dd])
		var hasils1 = ff+" "+1+"/"+gg;
		var hasils2 = gg+" "+1+"/"+ee;
		var hasils3 = ee+" "+1+"/"+ff;
		
		//–
		/*
		var benar = hasil;
		var salah1 = "\u2212"+hasil;
		var salah2 = hasils1;
		var salah3 = "\u2212"+hasils1;
		var salah4 = hasils2;
		var salah5 = "\u2212"+hasils2;
		var salah6 = hasils3;
		var salah7 = "\u2212"+hasils3;
		*/
		
		var benar = [ff+" "+gg+"/"+ee,[1,ff,gg,ee]];
		var salah1 = ["\u2212"+ff+" "+gg+"/"+ee,[-1,ff,gg,ee]];
		var salah2 = [ff+" "+1+"/"+gg,[1,ff,1,gg]];
		var salah3 = ["\u2212"+ff+" "+1+"/"+gg,[-1,ff,1,gg]];
		var salah4 = [gg+" "+1+"/"+ee,[1,gg,1,ee]];
		var salah5 = ["\u2212"+gg+" "+1+"/"+ee,[-1,gg,1,ee]];
		var salah6 = [ee+" "+1+"/"+ff,[1,ee,1,ff]];
		var salah7 = ["\u2212"+ee+" "+1+"/"+ff,[-1,ee,1,ff]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		return [soal,benar,arrSalah];
	}
	function PropertiAljabar3(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihFYBADAXBC/33DAgEBSB4ezMmsWv/nLe1keO52xBcJ7hOcJ3gOsF1gusE1wmuE1wnuO6Xq+XMPN833olm2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAq6YD07JqejBAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACWSURBVHhe7dohDoAwEADBHv//MyCwJBDCqB3Tul5W1LSzn1aY7VqDFBwrOFZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgGHm1n5lrd++vMZ6c/cbXOfsmgXWlYAXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwaq0Db60STkWQSR4AAAAASUVORK5CYII=";
		
		ctx.font = "16px Times New Roman";
		var dy=-70;
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
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				for(var i=0;i<4;i++){
					if(arrs[i][1][0]>0){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],30,1+46+46+46*i+dy);
						ctx.fillText(arrs[i][1][2],50,-9+46+46+46*i+dy);
						ctx.fillText(arrs[i][1][3],50,12+46+46+46*i+dy);
					}else{
						ctx.textAlign = "left";
						ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],15+30,1+46+46+46*i+dy);
						ctx.fillText(arrs[i][1][2],15+50,-9+46+46+46*i+dy);
						ctx.fillText(arrs[i][1][3],15+50,12+46+46+46*i+dy);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
				}
			}
		}
		return 0;
	}
	function MyPersamaanLinier4(){
		//2. 6a - 9 = 3a - 3
		do{
			var bb = RandomAngkaAtoB(2,10);
			var cc = RandomAngkaAtoB(10,10);
			var dd = cc/(bb-1);
			var hh = bb*dd;
			var ff = Mods(cc,bb-1)==0;
		}while (!ff);
		
		//var soal = aa+"(x \u2212 "+bb+") + x = \u2212x + "+cc;
		var hasil = hh;
		
		var benar = hh;
		var salah1 = dd;
		var salah2 = hh+1;
		var salah3 = hh+2;
		var salah4 = hh+3;
		var salah5 = dd+1;
		var salah6 = dd+2
		var salah7 = dd+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [bb,cc,benar,arrSalah];
	}
	function MyPersamaanLinier5(){
		//2. 6a - 9 = 3a - 3
		do{
			var bb = RandomAngkaAtoB(2,10);
			var cc = RandomAngkaAtoB(10,10);
			var dd = cc/(bb+1);
			var hh = bb*dd;
			var ff = Mods(cc,bb+1)==0;
		}while (!ff);
		
		//var soal = aa+"(x \u2212 "+bb+") + x = \u2212x + "+cc;
		var hasil = hh;
		
		var benar = dd;
		var salah1 = hh;
		var salah2 = hh+1;
		var salah3 = hh+2;
		var salah4 = hh+3;
		var salah5 = dd+1;
		var salah6 = dd+2
		var salah7 = dd+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [bb,cc,benar,arrSalah];
	}
	function MyPersamaanLinier6(){
		//2. 5(x – 6) = 2(x – 3)
		var aa,bb,cc,dd,ee,ff,gg,hh
		do{
			do{
				do{
					aa = RandomAngkaAtoB(20,10);
					bb = RandomAngkaAtoB(1,20);
					cc = RandomAngkaAtoB(1,10);
				}while(aa-cc<0)
				dd = RandomAngkaAtoB(1,10);
			}while(aa*bb-cc*dd<=0)
			ee = RandomAngkaAtoB(1,20);
			ff = (aa*bb-cc*dd)/(aa-cc);
			gg = ee+ff;
			hh = Mods((aa*bb-cc*dd),(aa-cc))==0;
		}while (!hh);
		
		var soal = aa+"(x \u{2212} "+bb+") = "+cc+"(x \u{2212} "+dd+")";
		var hasil = gg;
		
		var benar = ""+gg;
		var salah1 = "\u2212"+gg;
		var salah2 = ""+ff;
		var salah3 = "\u2212"+ff;
		var salah4 = ""+(gg+1);
		var salah5 = "\u2212"+(gg+1);
		var salah6 = ""+(ff+1);
		var salah7 = "\u2212"+(ff+1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal,ee,benar,arrSalah];
	}
	function MyPersamaanLinier7(){
		//2. 5(x – 6) = 2(x – 3)
		var aa,bb,cc,dd,ee,ff,gg,hh,pec1,pec2
		do{
			do{
				do{
					aa = RandomAngkaAtoB(20,20);
					bb = RandomAngkaAtoB(1,20);
					cc = RandomAngkaAtoB(1,10);
				}while(aa*cc-dd<0)
				dd = RandomAngkaAtoB(1,10);
				ee = RandomAngkaAtoB(1,20);
			}while(-bb+aa*ee<0)
			ff = (-bb+aa*ee)*dd/(-dd+aa*cc);
			gg = ee+ff;
			pec1 = 1+"/"+aa;
			pec2 = cc+"/"+dd;
			hh = Mods(((-bb+aa*ee)*dd),(-dd+aa*cc))==0;
		}while (!hh);
		
		var soal = pec1+" (x \u{2212} "+bb+") = "+pec2+" x \u{2212} "+ee+"";
		var hasil = gg;
		
		var benar = ""+gg;
		var salah1 = "\u2212"+ff;
		var salah2 = ""+ff;
		var salah3 = "\u2212"+gg;
		var salah4 = ""+(gg+1);
		var salah5 = "\u2212"+(gg+1);
		var salah6 = ""+(ff+1);
		var salah7 = "\u2212"+(ff+1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal,ee,benar,arrSalah,[aa,bb,cc,dd,ee]];
	}
	function PropertiAljabar7(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base70_image = new Image();
		base70_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAvCAYAAABtwmFaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAVsSURBVHhe7dwPTJRlHAfw7x0I0h1cnAjOFMM/gfgnNFnT5CCyuczUZmW6RG25cjIrNxdzZjaVFApTxjRzluWf0vSmicXwVLIDTaQNz0NJlBPm3yO4PwrIeU8v3OO/Abqju/O57ffZnt3e3/vcvbvj+757f3veIWMSECIIOX8lRAgUSCIUCiQRCgWSCIUCSYRCgSRC6XogHZXYtW0zii7xbUI8oEuBrNr/IZJ7jMDHeXtQ08iLhHiA24E0rp6NbNPzmJ+XhiE1Fsi68R2EeIDbgYxNz8Xa+dPxQlwfKJ1OOHmdEE9wO5ABilAES6+O5hbcdpUI8ZguNjW0/E28o4uBJMQ7uhhIOUK6B6GbPBDB3XmJEA9wP5BWI/QF+diqLcaZq+dRqC2E7uQZmK3U3pD/z+1AMosBh7UFOHQ6BMOnaVBXvBl79BUwW9xpcayoLNKiyFiLRj+4HXXar6C8aDcOGeupkfMy3z+ga/0Heu0ulFQ24ek35uCVhBgoZHyfoJzWGpQWbML2iiDEJ0/FzOQ4hPB9xLN8HMibKF3/JTYcuY203KXQRAbwuj9guHR4FdK/rkXyoqVYMDYKgp9HfsmnXXaD4Rds+b0U/WfM87MwtpKh94tz8Va/Czjw006ctfMy8SgfBrIBBt2fqGqMhWZcL17zNxF4dXIi7FVl0i1HHa8RT/JdIJvrUXO2DtfVwxCj4DWJIWcUnopSQRUoQ8ZxqVC+DPEyGdTxY5B5tMk1SSChA+OhvGhBxVUzHLx2v4bze/FutAwyWQACAtoPufTdZAk5sPH53nAgTTpGsBqxIzTYVuHAifWz0E86bu9Jn0B3QfC2rPUe0ieu/c1WztKw8Sv07DYv3XFw9hAG1WvM0LbVyPImDmYLDrdtiMdxjGWMTmXvrStm9bz0AKeDNdktzGqzM7u9g2GzMov9Fp/sJS02tvK5EIZJmcwsbd46vpstmpvOfjjt2i2yh14hU1JSpDO99Wzv+rhL6p2cUmMgl0t1Xrrjpe8MKJ/2K4b234gN74/G+c+NWJvCd97VCG1a7w6PcW/0wOtflaCFv8M75Aho/dU66wWlK2OwIgyhSgUUig6GMhRhivaPSGVlZXXwfdwbJpPJ9WGBSiwuNSOnaTH6JmQgM1+PEZ/mYma8a/eDrmNhUMefd29MhtZk5fO9jAfT+x5yhXQpZzMGSYmdV8a3BfWIK2Rd5Q42JbBtsb/z0WsZa+Dzvcl2aQ0bOTSCTdhYzSvi8909ZJgKMU9EoO7UOVzmpbuczdj9Tjr67j2HxVtG4uU1xra/nJBqq1FmUSF8oBpKXrqfetDb0Law1hO983H5M6j4fG+5WW3E1tV/YcKibKiz3sSSfe1+dSH5LpDB4egbG4GoegOqb/CaxHKxANlJocgYrsWqwQOwzLgcpoVDMPaLozAL+DS67ZwR9mgVBkdFIJDXRFNzLBcLJ47FkXHbsTxtOj5I74lvJyfho50VaOyoExOI7wKJJzFMk4hIVobfdNd4rRmndvwIXfAoqAz5uClVLhyshDolFWrDVuw/e8s1TRhm5O87AeWAkRj9TA9eE80N/LHuG5yITELImRI0NV/FZVsYBiX1gqn0CAzXxO6yfbtS4zSjcPUKZJ4KR8baJRjf089WavauQvqaWiRnLsWCMbRS4w2+X8u+UYUd3/+Mk1VNGJM2B+Of9ZO17MJN2K4PQrxmKmZOobVsb3k8//3MYYVBp8O/0YlIjOuDENEDab8Cw0k9zFGpSI4Lh78tevqTxxNIQjrhw6aGkEejQBKhUCCJUCiQRCgUSCIUCiQRCgWSCIUCSYRCgSRCoUASoVAgiVAokEQoFEgiFAokEQoFkggE+A+ESWfLqyf0ZwAAAABJRU5ErkJggg==";
		base70_image.onload = function () {
			ctx.drawImage(base70_image, 0, 0,base70_image.width, base70_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],17,38);
			ctx.fillText(arr[1],65,28);
			ctx.fillText(arr[2],105,18);
			ctx.fillText(arr[3],105,38);
			ctx.fillText(arr[4],150,28);
		}
		return 0;
	}
	function MyPersamaanLinier8(){
		var aa = RandomAngkaAtoB(1,20);
		var bb = aa+1;
		var cc = aa+2;
		var dd = aa+bb+cc;
		var ee = aa+cc;
		var ff = aa+bb;
		var gg = bb+cc
		
		var benar = ee;
		var salah1 = ee+4;
		var salah2 = ee+1;
		var salah3 = ee+2;
		var salah4 = ee+3;
		var salah5 = ee-1;
		var salah6 = ee-2;
		var salah7 = ee-3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [bb,ee,benar,arrSalah];
	}
	function MyPersamaanLinier9(){
		var aa = RandomAngkaAtoB(1,20);
		var bb = 36*aa;
		var cc = 9*aa;
		
		var benar = cc;
		var salah1 = cc+4;
		var salah2 = cc+1;
		var salah3 = cc+2;
		var salah4 = cc+3;
		var salah5 = cc-1;
		var salah6 = cc-2;
		var salah7 = cc-3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [bb,cc,benar,arrSalah];
	}
	function MyPersamaanLinier10(){
		do{
			do{
				var aa = RandomAngkaAtoB(1,20);
				var bb = RandomAngkaAtoB(1,20);
				var cc = RandomAngkaAtoB(1,20);
				var dd = RandomAngkaAtoB(1,20);
				var ee = (bb+dd)/(cc-aa);
			}while((cc-aa)<=0)
			var ff = Mods(bb+dd,cc-aa)==0;
		}while(!ff)
		
		var soal = aa+"b \u{2212} "+bb+" = "+cc+"b \u{2212} "+dd+"";
		
		var benar = ""+ee;
		var salah1 = ""+(ee+1);
		var salah2 = "\u2212"+ee;
		var salah3 = "\u2212"+(ee+1);
		var salah4 = "\u2212"+(ee-1);
		var salah5 = ""+(ee-2);
		var salah6 = "\u2212"+(ee+2);
		var salah7 = "\u2212"+(ee-2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal,ee,benar,arrSalah];
	}
	function MyPersamaanLinier11(){
		do{
			do{
				var aa = RandomAngkaAtoB(2,30);
				var bb = RandomAngkaAtoB(2,30);
				var cc = RandomAngkaAtoB(2,30);
				var dd = RandomAngkaAtoB(2,30);
				var ee = RandomAngkaAtoB(2,30);
				var ff = RandomAngkaAtoB(2,30);
				var gg = (aa*ff+cc*dd)/(cc*dd*ee*ff-aa*bb*cc*ff);
			}while((cc*dd*ee*ff-aa*bb*cc*ff)<=0)
			var hh = Mods(aa*ff+cc*dd,cc*dd*ee*ff-aa*bb*cc*ff)==0;
		}while(!hh)
		
		var soal =  aa+"[ "+bb+"x + 1/"+cc+" ] = "+dd+"[ "+ee+"x \u2212 1/"+ff+" ]";
		
		var benar = ""+gg;
		var salah1 = ""+(gg+1);
		var salah2 = "\u2212"+gg;
		var salah3 = "\u2212"+(gg+1);
		var salah4 = "\u2212"+(gg+2);
		var salah5 = ""+(gg-1);
		var salah6 = "\u2212"+(gg+3);
		var salah7 = "\u2212"+(gg-1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal,gg,benar,arrSalah,[aa,bb,cc,dd,ee,ff]];
	}
	function PropertiAljabar11(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base110_image = new Image();
		base110_image.src = "data:image/png;base64,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";
		base110_image.onload = function () {
			ctx.drawImage(base110_image, 0, 0,base110_image.width, base110_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],10,26);
			ctx.fillText(arr[1],32,26);
			ctx.fillText(1,68,18);
			ctx.fillText(arr[2],68,36);
			ctx.fillText(arr[3],108,26);
			ctx.fillText(arr[4],130,26);
			ctx.fillText(1,167,18);
			ctx.fillText(arr[5],167,36);
		}
		return 0;
	}
	function MyPersamaanLinier12(){
		//12. Jika diketahui a + 5 = 11, maka nilai a + 33 adalah ...
		
		do{
			var aa = RandomAngkaAtoB(2,30);
			var bb = RandomAngkaAtoB(2,30);
			var cc = RandomAngkaAtoB(2,30);
			var dd = bb-aa;
			var ee = dd+cc;
		}while(aa==bb || aa==cc || bb==cc || dd<=0)
		
		var soal1 =  "a + "+aa+" = "+bb;
		var soal2 =  "a + "+cc;
		
		var benar = ""+ee;
		var salah1 = ""+(ee+1);
		var salah2 = "\u2212"+ee;
		var salah3 = "\u2212"+(ee+1);
		var salah4 = "\u2212"+(ee+2);
		var salah5 = ""+(dd);
		var salah6 = ""+(dd+1);
		var salah7 = "\u2212"+(dd-1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,soal2,benar,arrSalah];
	}
	function MyPersamaanLinier13(){
		//13. Jika 3(y + 2) + 5 = 2(y + 15), maka nilai y - 2 = ...
		
		do{
			var aa = RandomAngkaAtoB(2,5);
			var bb = RandomAngkaAtoB(2,30);
			var cc = RandomAngkaAtoB(2,30);
			var dd = aa-1;
			var ee = RandomAngkaAtoB(2,30);
			var ff = dd*ee-aa*bb-cc;
			var gg = ff-2;
		}while(ff<=2)
		
		var soal1 =  ""+aa+"(y + "+bb+") + "+cc+" = "+dd+"(y + "+ee+")";
		var soal2 =  "y \u2212 "+2;
		
		var benar = ""+gg;
		var salah1 = ""+(gg+1);
		var salah2 = "\u2212"+gg;
		var salah3 = "\u2212"+(gg+1);
		var salah4 = "\u2212"+(gg+2);
		var salah5 = ""+(ff);
		var salah6 = ""+(ff+1);
		var salah7 = "\u2212"+(ff-1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,soal2,benar,arrSalah];
	}
	function MyPersamaanLinier14(){
		//14. Penyelesaian dari x/2 – 1/3 = x/3 + 1/6 adalah ...
		
		do{
			var aa = RandomAngkaAtoB(2,5);
			var bb = aa+1;
			var cc = aa*bb;
			var dd = bb;
		}while(bb<=2)
		
		var soal1 =  "x/"+aa+" \u2212 1/"+bb+" = x/"+bb+" + 1/"+cc+"";
		//var soal2 =  "y \u2212 "+2;
		
		var benar = ""+bb;
		var salah1 = ""+(bb+1);
		var salah2 = "\u2212"+bb;
		var salah3 = "\u2212"+(bb+1);
		var salah4 = "\u2212"+(bb+2);
		var salah5 = ""+(cc);
		var salah6 = ""+(cc+1);
		var salah7 = "\u2212"+(cc-1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,benar,arrSalah,[aa,bb,bb,cc]];
	}
	function PropertiAljabar14(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base140_image = new Image();
		base140_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAxCAYAAADuvYrRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIHSURBVHhe7doxTuNAFMbxz5wlUCBOMD4Buw0VR3DKVLnBdmlwme1oqbYhOUE4ARXxXYYZZ1ixIuGRbIIn8f8njSI7kZAeX/zexC58IOATZ+kV2IiQwERIYCIkMBESmAgJTMcfkmauYVmqbtIx9l6Tow5JUw9Vnv/Q76crXQzSyZ47RE2ONiSxGJOLsRazKp3BoWqyfUiaWmVRqChrra5m8dIWjofz9ui7DEZTTa8zunxkUJdD1WTLkDSqJ9L9cqbq6UGPTTgu/+hm4eWn1+kzfXTidYn3bra39HdOXq7yd8t0qiuzykuVn6XDbmVSlz3XZMeZZKCft066utGIgfGd06zLbiEJ/XfyEF6fX1L/RetE67LD4BoGstB/x/e3cqn/zod1GNO69KyXrv8r2dVljzVJbedLws6q7berXpf6r5yvuhgIQt91zsVnYf4u19EskE1dDlQTHjqCacfBFX1CSLITZpsir3tRhAQmQgJTj0MSfzovVMT7LRsXjyC02j3OBvHt/1kfvW0PP1vuw5Zt/ee+vvZt3d/YZv0r/5qwBc5OHFx/6XK5yOanfdrN2jbztmg3UY9DMtAo3soPF9LNK59vc5fY3cDETAITVxKYCAlMhAQmQgITIYGJkMBESGAiJDAREpgICUyEBCZCAhMhgYmQwERIYCIkMBESmAgJTIQEJkICg/QKxHLTR12VQ0sAAAAASUVORK5CYII=";
		base140_image.onload = function () {
			ctx.drawImage(base140_image, 0, 0,base140_image.width, base140_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],15,38);
			ctx.fillText(arr[1],48,38);
			ctx.fillText(arr[2],84,38);
			ctx.fillText(arr[3],118,38);
		}
		return 0;
	}
	function MyPersamaanLinier15(){
		//15. Penyelesaian dari y/2 – (y-4)/5 = 23/10 adalah ...
		
		do{
			var aa = RandomAngkaAtoB(2,8);
			var bb = RandomAngkaAtoB(2,8);
			var cc = aa+RandomAngkaAtoB(2,5);
			var dd = RandomAngkaAtoB(2,20);//aa*cc+RandomAngkaAtoB(2,20);
			var ee = cc-aa;
			var ff = (dd-aa*bb)/(cc-aa);
			var gg = Mods((dd-aa*bb),(cc-aa))==0;
			var fpb = CariFPB([dd,aa*cc])
			var pec = ((dd)/fpb) +"/"+ ((aa*cc)/fpb);
		}while(!gg || dd-aa*bb==0);
		var soal1 =  "y/"+aa+" \u2212 (y \u2212 "+bb+")/"+cc+" = "+pec;
		//var soal2 =  "y \u2212 "+2;
		
		var benar = ""+ff;
		var salah1 = ""+(ff+1);
		var salah2 = "\u2212"+ff;
		var salah3 = "\u2212"+(ff+1);
		var salah4 = "\u2212"+(ff+2);
		var salah5 = ""+(ee);
		var salah6 = ""+(ee+1);
		var salah7 = "\u2212"+(ee-1);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,benar,arrSalah,[aa,bb,cc,(dd)/fpb,(aa*cc)/fpb]];
	}
	function PropertiAljabar15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAArCAYAAACXSwEOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKFSURBVHhe7dqxcqJQFAbgn30WY+H4BPAEThorWzsoTWO3ZTobKJMurZWN8gTwBI6F8C7svQaTjLJZ5RDwuP83wySiEw7jz+FcJk5hgKimX+VPolqUBShHHAXwgtj8pt89nIeiAOWIvClW/TmSlxF65V7NkvkeUy9AXL7WSM0MlEcepnhDMruH6HwRB3CeB8iSmcqLQkkHirF4AiaPdxYeazRHiCcslLYhHQGKV3h1J7jH/MD0nf4Q2O51TkNXBSgOPDiOAzP7lWIE5rXjeIh+8Pzj1Ssw7J+1+K7qadrDwEW6XOscqO0MdIls4xf+pig2Pgq4YZGV+82OAvaNH2SP6YYfRzzosp7G2Zq/noMiF3eg3ugFZvGD0dgH0h2ycn++3yKcmzdaJqvHruhsp/pu09XFunL9DPQwgIst3m/ZZrjd/UYbC6N0d4zIiVr19DBLCtt9v9mSVs7LsqHX6voA9R4xcVPY7zOPVhi00H0OXWa7r54ROqinadkurZzxNKixCitXDasAC8zbuUpHY/jpEuvqBLVfT6Ny2Abkj/UF/8C066tlodv60GePeTpIH3VRT2MUD9BWjQ6UY70bYtPyk9Pe7A2T5dQs2U/bUDf1NCKP4D1DZ+1HZZAulJkLxi/+0ghaYI4f+oVrlunvJXRdT32HjvpxHnpdGKCsCF37vOVWvqxbq+f/xX8oI5EaMxDRJwZIhRt+cn64kVWwb0m2c+XcUvHZz809m2mqP3ffW5Oq/v41279wBiIR3sJUuN1bGDsQibADkQgDRCIMEIkwQCTCAJEIA0QiDBCJMEAkwgCRCANEIgwQiTBAJMIAkQgDRCIMEIkwQCTCAJEIA0QiDBAJAH8A8nePqo5Ue6IAAAAASUVORK5CYII=";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],15,38);
			ctx.fillText(arr[1],84,14);
			ctx.fillText(arr[2],65,38);
			ctx.fillText(arr[3],128,14);
			ctx.fillText(arr[4],128,38);
		}
		return 0;
	}
	function MyPersamaanLinier16(){
		//16. Nilai x yang memenuhi persamaan  4(x + 2)/5  = 7 + 5x/13 adalah ...
		
		do{
			var aa = RandomAngkaAtoB(2,8);
			var bb = RandomAngkaAtoB(2,15);
			var cc = aa+RandomAngkaAtoB(2,20);
			var dd = RandomAngkaAtoB(2,20);
			var ee = aa+RandomAngkaAtoB(2,5);
			var ff = RandomAngkaAtoB(2,10);
			var gg = (aa*bb*ff-cc*dd*ff)/(cc*ee-aa*ff)
			var hh = Mods((aa*bb*ff-cc*dd*ff),(cc*ee-aa*ff))==0;
		}while(!hh || gg==0);
		var fpb = CariFPB([ee,ff]);
		var soal1 =  aa+"(x + "+bb+")/"+cc+"  = "+dd+" + "+ee+"x/"+ff;
		if(fpb==ee)	soal1 =  aa+"(x + "+bb+")/"+cc+"  = "+dd+" + x";
		//var soal2 =  "y \u2212 "+2;
		
		var benar = ""+gg;
		var salah1 = ""+(gg+1);
		var salah2 = "\u2212"+gg;
		var salah3 = "\u2212"+(gg+1);
		var salah4 = "\u2212"+(gg+2);
		var salah5 = ""+(gg-1);			if(gg-1<0)	salah5 = "\u2212"+Math.abs(gg-1);
		var salah6 = ""+(gg-2);			if(gg-2<0)	salah6 = "\u2212"+Math.abs(gg-2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,benar,arrSalah,[aa,bb,cc,dd,ee,ff]];
	}
	function PropertiAljabar16(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base160_image = new Image();
		base160_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAuCAYAAABJXNnBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKbSURBVHhe7duxcrJAFAXgw/8sxsLJEyxPwKShsrXD0jTpUqajgdJ0tFY2kSfQJ8hYCO9CdpNlJhoNhh/Xy3i+GUYgOoOzx917xXiVBiJB/tlHIjEYShKHoSRxGEoS5wqhLJGnU/jTXO/1R5n6vbvmvnLcfZdI/Qm2zxnmwcCe65EyhT/Z4nk9R2BPUfechtLMNhNkWM96GMhaPoX3MkKxnqHH70I0h8t3jvgRGD90NZQ5pp6P1PV6GjwhwSPi3B5T59yFMl/iVY3RWSavZoDhPfC+Y3V5Kc5CmS9fgfvhzyXP1GmeB89PbROhZ0BfH+umQqq7kcJm8camp0nLsXXafavRnd2r6cYnBrJihWizwFtpGqElwnWFai63lRiYqZIatR5b0+i4sIpQqaSwR4eKKlGooKLq5FPq5+hLPr2pX17foVWkrzXRV0TNzhnbfU5nys22sHuHBngYK728hzjdmA8wM5+yqt70JxAK+o1+O7f+5fXdKXfvdo+anTO2+5yFMggj0x0cr8N07REv9OOpvwtTbDfH62P6qcXYupspg9DWFva4VuriV9ceT9kYytYe+TTVJbFUJcxEGYX8+rxR27HVy54zRaL26kpTZ5paY/V5VNeMqoq+TjRYVXr5dlNDfsd68mxtx5a3Gf+CtxmdcNrofDUrGcJd3M8fZMRDZAzkxfHfIW6KuTX7glHh5luKthzPlETNGEoSh6G8CNPQefDMfd+T2xV+4dQXpqY8ZE5zO3+Tq92t2ePPu8x2DBudm8JG54Zx+f4fDOVFHP545Ngme7a6JoaSxGFNSeJwpiRxGEoSh6EkcRhKEoehJHEYShKHoSRxGEoSh6EkcRhKEoehJHEYShKHoSRxGEoSh6EkcRhKEoehJGGAD+lpHMgKMGrtAAAAAElFTkSuQmCC";
		base160_image.onload = function () {
			ctx.drawImage(base160_image, 0, 0,base160_image.width, base160_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],14,17);
			ctx.fillText(arr[1],64,17);
			ctx.fillText(arr[2],39,38);
			ctx.fillText(arr[3],112,28);
			ctx.fillText(arr[4],142,17);
			ctx.fillText(arr[5],142,38);
		}
		return 0;
	}
	function MyPersamaanLinier17(){
		//17. Penyelesaian dari 1/2  = -1/4  + y adalah ...
		
		var aa = RandomAngkaAtoB(2,8);
		var bb = aa+RandomAngkaAtoB(2,8);
		var cc = aa*bb;
		var dd = bb+1;
		var ee = bb-1;
		var ff = 1
		var soal1 =  "1/"+aa+"  = \u22121/"+cc+"  + x";
		//var soal2 =  "y \u2212 "+2;
		
		var fpb1 = CariFPB([dd,cc])
		var fpb2 = CariFPB([ee,cc])
		if(fpb1!==1){
			dd = dd/fpb1; if(Mods(dd,1)!==0) dd=dd*fpb1;
			cc = cc/fpb1; if(Mods(cc,1)!==0) cc=cc*fpb1;
		}
		if(fpb2!==1){
			ee = ee/fpb2; if(Mods(ee,1)!==0) ee=ee*fpb2;
			ff = cc/fpb2; if(Mods(ff,1)!==0) ff=ff*fpb2;
		}
		/*
		var benar = ""+dd+"/"+cc;
		var salah1 = ""+cc+"/"+dd;
		var salah2 = ""+ee+"/"+cc;
		var salah3 = ""+cc+"/"+ee;
		var salah4 = "\u2212"+dd+"/"+cc;
		var salah5 = "\u2212"+cc+"/"+dd;
		var salah6 = "\u2212"+ee+"/"+ff;
		var salah7 = "\u2212"+ff+"/"+ee;
		*/
		var benar = [""+dd+"/"+cc,[1,dd,cc]];
		var salah1 = [""+cc+"/"+dd,[1,cc,dd]];
		var salah2 = [""+ee+"/"+cc,[1,ee,cc]];
		var salah3 = [""+cc+"/"+ee,[1,cc,ee]];
		var salah4 = ["\u{2212}"+dd+"/"+cc,[-1,dd,cc]];
		var salah5 = ["\u{2212}"+cc+"/"+dd,[-1,cc,dd]];
		var salah6 = ["\u{2212}"+ee+"/"+ff,[-1,ee,ff]];
		var salah7 = ["\u{2212}"+ff+"/"+ee,[-1,ff,ee]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar[0]==arrSalah[0][0] || benar==arrSalah[1][0] || benar==arrSalah[2][0]);
		
		return [soal1,benar,arrSalah,[aa,cc]];
	}
	function PropertiAljabar17(nmcanvas,arr,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base170_image = new Image();
		let base171_image = new Image();
		let base172_image = new Image();
		base170_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAuCAYAAADJAyyXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHPSURBVHhe7doxbsIwAAXQn54ldOgRnBOgLkysbMmYLmwdu7GQMSMrE0vJCeAEqAPJXVKbWm1RgZqWFv3oP8mKEoKI83FsY6LWgtC58Vsho+BIKThSCo6UgiN1XnBNhSxJUDR+nx1zfdx0IEQ9TVtjTwfSdumPMWOvT1CLa4oMk9sxVsvUH+HWhfoEBRfnJcp+7Pf4daE+GpyQUnCkFBwpBUfqB8FtsO3KPG6HtD5+WnDa0s55jHHLP+/FmLSd1v51Nh2oj9bjSKmPI6XgLq5CFv39758KjpSCu6amQBJFiJICbw3UrVbY/aza7Z3yD8E1KNzFuAs8Wjq0VBTM3pcJMKuXSNdzPDfuPi0wWLVoy74/54Td2PITd+g35bLqdmoOf85HMXvD+MPnXK58df417vPvP3M6ounAxbnByRPu6hXywAWIpkjQe3kMa2meHpXXZvu5ydxuN1vfz4X5h+Bi5O65bRv28RL+7ewU99cJ28+NZ0MY389VWWHb7Pc0qrySKrNPmpEdjJQ54vgeQ7PGQ2+ExSBHyANTfRwptThSCo6UgiOl4EgpOFIKjpSCI6XgSCk4UgqOlIIjpeBIKThSCo6UgiOl4EgpOFIKjhLwCilQyXVCaWq/AAAAAElFTkSuQmCC";
		base171_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base172_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base170_image.onload = function () {
			CekJaw();
		}	
		base171_image.onload = function () {
			CekJaw();
		}
		base172_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				ctx.drawImage(base170_image, 0, 0,base170_image.width, base170_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arr[0],14,38);
				ctx.fillText(arr[1],64,38);
				ctx.textAlign = "left";
				ctx.fillText("adalah ...",0,60);
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				for(var i=0;i<4;i++){
					if(arrs[i][1][0]>0){
						ctx.textAlign = "left";
						ctx.drawImage(base171_image, 0, 46+20+46*i,base171_image.width, base171_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i);
						ctx.fillText(arrs[i][1][2],35,12+46+46+46*i);
					}else{
						ctx.textAlign = "left";
						ctx.drawImage(base172_image, 0, 46+20+46*i,base172_image.width, base172_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i);
						ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,46+46+46*i);
				}
			}
		}
		return 0;
	}
	function MyPersamaanLinier18(){
		//18. Penyelesaian dari 
		//(4 - 5x)/6  -  (1 - 2x)/3 =  13/42 
		//adalah ...
		do{
			var aa = RandomAngkaAtoB(2,18);
			var bb = RandomAngkaAtoB(2,8);
			var cc = RandomAngkaAtoB(2,8);
			var dd = RandomAngkaAtoB(2,8);
			var ee = RandomAngkaAtoB(2,18);
			var ff = RandomAngkaAtoB(2,18);
			var jj = cc*ee;
		}while(ff+cc-aa*ee<=0 || cc*dd-bb*ee<=0 || ff+cc-aa*ee==cc*dd-bb*ee);
		//}while(!hh);
		
		var fpb = CariFPB([(ff+cc-aa*ee),(cc*dd-bb*ee)]);
		var moda = Mods((ff+cc-aa*ee),fpb);
		var modb = Mods((cc*dd-bb*ee),fpb);
		if(moda==0 && modb==0 && fpb!==1){
			var gg = (ff+cc-aa*ee)/fpb;
			var hh = (cc*dd-bb*ee)/fpb;
			var hhs = cc*dd+bb*ee;
			var fpb2 = CariFPB([(ff+cc-aa*ee),(cc*dd+bb*ee)]);
			if(fpb2!==1){
				hhs = (cc*dd+bb*ee)/fpb2;
			}
		}else{
			var gg = (ff+cc-aa*ee);
			var hh = (cc*dd-bb*ee);
			var hhs = cc*dd+bb*ee;
			var fpb2 = CariFPB([(ff+cc-aa*ee),(cc*dd+bb*ee)]);
			if(fpb2!==1){
				hhs = (cc*dd+bb*ee)/fpb2;
			}
		}
		var soal1 =  "("+aa+" \u2212 "+bb+"x)/"+cc+"  \u2212  (1 \u2212 "+dd+"x)/"+ee+" =  "+ff+"/"+jj;
		//var soal2 =  "y \u2212 "+2;
		/*
		var benar = gg+"/"+hh;
		var salah1 = "\u2212"+gg+"/"+hh; 	if(hh==1) salah1 = "\u2212"+gg;
		var salah2 = hh+"/"+gg; 			if(gg==1) salah2 = ""+hh;
		var salah3 = "\u2212"+hh+"/"+gg; 	if(gg==1) salah3 = "\u2212"+hh;
		var salah4 = gg+"/"+hhs; 			if(hhs==1) salah4 = " "+gg;
		var salah5 = "\u2212"+gg+"/"+hhs; 	if(hhs==1) salah5 = "\u2212"+gg;
		var salah6 = hhs+"/"+gg; 			if(gg==1) salah6 = ""+hhs;
		var salah7 = "\u2212"+hhs+"/"+gg; 	if(gg==1) salah7 = "\u2212"+hhs;
		*/
		var benar = [gg+"/"+hh,[1,gg,hh]];
		var salah1 = ["\u2212"+gg+"/"+hh,[-1,gg,hh]];
		var salah2 = [hh+"/"+gg,[1,hh,gg]];
		var salah3 = ["\u2212"+hh+"/"+gg,[-1,hh,gg]];
		var salah4 = [gg+"/"+hhs,[1,gg,hhs]];
		var salah5 = ["\u2212"+gg+"/"+hhs,[-1,gg,hhs]];
		var salah6 = [hhs+"/"+gg,[1,hhs,gg]];
		var salah7 = ["\u2212"+hhs+"/"+gg,[-1,hhs,gg]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,benar,arrSalah,[aa,bb,cc,dd,ee,ff,jj]];
	}
	function PropertiAljabar18(nmcanvas,arr,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base180_image = new Image();
		let base181_image = new Image();
		let base182_image = new Image();
		base180_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAA6CAYAAADIkHfqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALpSURBVHhe7dw9buJAGMbxlz0LpEA5wfgEKA0VbTpTQpMbbEdjl0lHS5Um+ARwgihF7LvMzsDsspuEL+mdyWL+P8kKJpYQD3nGM8ZKxzoCQMWP8BOAAgoFKKJQgCIKBSiiUIAiCgUoolCAIgoFKKJQgCIKBSg6o1CNVOVYsnEV9tuvKbPN+23Cfly7fNO83vdLm28i/l6+42pbGGPzZR32r0hdWGNyuwy7cZBv3HzTOenmWD+S3MtcVpNueObKVGPp/OxLvZpIjATIN26+KZ0w5atkNhUZ3V3ph+0NHqSQqcyizHbJN26+aR0vVPUsT2Yk1/x5ixs3b25FXt8jzPbJ14mYb2JHC1U9P4nc3lz8qXivppSs05FOVobFcSXjzO1/uPjS6xtZL17UF9DkuxUr39ROuspn+r3wqH3Kmci8Xkq+XshL00iZPctwZcU+DsIRW10/hEZCvnHzTemMy+Yx+aDdqOVHsr1bJmWE4Wvy6BbC3Z70zVqm9/7Tf5R/P+o2IN9UTirU+q0Oj2LpysSPWvbQtpJ4F8G6cjcybuo13PsazftreKSPfOPmm9LRQg2GuV8tXvzc9iA3z58t3M8D77N+W0dZ65DvVqx8Uzt+hhoMw/w37LdN4xbJbibyMB+JCfP8aly6pfPfGvEDaD6MMFkhXydivqm50/1RdWGsKdr5Lb78+Zbe360gVsTfsbB5YmeZu+MKd0Qc5Bs335ROKtQ2DG6NiYd84+abzomF8mq7LHJrPg0v7bU5c7j3m+bPfJfvtdQqbb5p8I8uAUX/yfdQQDtQKEARhcKF+L67Pc6yWUnt4X/N9nn77Pcl4UObsR+vjH99HJu2r17jnO0cXJQAFDHlw4W4jCkfZyhAEWcoQBGFAhRRKEARhQIUUShAEYUCFFEoQBGFAhRRKEARhQIUUShAEYUCFFEoQBGFAhRRKEARhQIUUShAEYUCFFEoQBGFAhRRKEARhQIUUShAEYUCFFEoQI3IL9pQaH1coyuVAAAAAElFTkSuQmCC";
		base181_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base182_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base180_image.onload = function () {
			CekJaw();
		}
		base181_image.onload = function () {
			CekJaw();
		}
		base182_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				ctx.drawImage(base180_image, 0, -7.5,base180_image.width, base180_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arr[0],22,16);
				ctx.fillText(arr[1],54,16);
				ctx.fillText(arr[2],40,38);
				ctx.fillText(1,110,16);
				ctx.fillText(arr[3],143,16);
				ctx.fillText(arr[4],130,38);
				ctx.fillText(arr[5],193,16);
				ctx.fillText(arr[6],193,38);
				ctx.textAlign = "left";
				ctx.fillText("adalah ...",0,60);
			}
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
			//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
			for(var i=0;i<4;i++){
				if(arrs[i][1][0]>0){
					ctx.textAlign = "left";
					ctx.drawImage(base181_image, 0, 46+20+46*i,base181_image.width, base181_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i);
					ctx.fillText(arrs[i][1][2],35,12+46+46+46*i);
				}else{
					ctx.textAlign = "left";
					ctx.drawImage(base182_image, 0, 46+20+46*i,base182_image.width, base182_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i);
					ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i);
				}
				ctx.textAlign = "left";
				ctx.fillText(Abjad[i]+".",0,46+46+46*i);
			}
		}
		
		return 0;
	}
	function MyPersamaanLinier19(){
		//19. Penyelesaian dari 1/4 (x - 10) =  2/3 (x - 5) adalah ...
		//adalah ...
		do{
			do{
				var aa = RandomAngkaAtoB(2,18);
				var bb = RandomAngkaAtoB(2,18);
				var cc = RandomAngkaAtoB(2,18);
				var dd = RandomAngkaAtoB(2,18);
				var ee = RandomAngkaAtoB(2,18);
			}while(aa*cc<=dd);
			var ff = aa*cc*ee-bb*dd;
			var gg = (aa*cc-dd);
			var hh = Mods(ff,gg)==0;
			var jj = ff/gg;
		}while(!hh);
		var soal1 =  "1/"+aa+ "(x \u2212 "+bb+") =  "+cc+"/"+dd+" (x \u2212 "+ee+")";
		//var soal2 =  "y \u2212 "+2;
		
		/*
		var benar = jj;
		var salah1 = "\u2212"+jj;
		var salah2 = 1+"/"+jj;
		var salah3 = "\u2212"+1+"/"+jj;
		var salah4 = jj+1;
		var salah5 = "\u2212"+(jj+1);
		var salah6 = 1+"/"+(jj+1);
		var salah7 = "\u2212"+1+"/"+(jj+1);
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		*/
		var benar = [jj+"/"+1,[1,jj,1]];
		var salah1 = ["\u2212"+jj,[-1,jj,1]];
		var salah2 = [1+"/"+jj,[1,1,jj]];
		var salah3 = ["\u2212"+1+"/"+jj,[-1,1,jj]];
		var salah4 = [(jj+1)+"/"+1,[1,(jj+1),1]];
		var salah5 = ["\u2212"+(jj+1),[-1,(jj+1),1]];
		var salah6 = [1+"/"+(jj+1),[1,1,(jj+1)]];
		var salah7 = ["\u2212"+1+"/"+(jj+1),[-1,1,(jj+1)]];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar[0]==arrSalah[0][0] || benar==arrSalah[1][0] || benar==arrSalah[2][0]);
		
		return [soal1,benar,arrSalah,[aa,bb,cc,dd,ee]];
	}
	function PropertiAljabar19(nmcanvas,arr,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base190_image = new Image();
		let base191_image = new Image();
		let base192_image = new Image();
		base190_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAxCAYAAACRbJggAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAK8SURBVHhe7dyxdqJAFAbg330WtPD4BMMTmDRWtumw1CZPYQOldtta2QSeQJ4gJ0XgXWbvrCR7YnDjGheYy/+dw5FBC7j8wgxjMrACRAr8qF6JvMcwkxoMM6nBMJMaDDOpwTCTGgwzqfH9MJcZFmGIpKzaRC35VpjLZIFweIdtPsEoqDYSteTqMLsgr0ePOKRRtYWoXVeHOVhusJnyckzdwQEgqcEwkxoMM6nBMJMaNwrzM175nJladn2YswXCMMTgbiuNHKvhQNqLf5g8KZG559SLTNb8UCahV/v7UQ/q7f7SpHmFjY2xUVpUbY8UsTUmsmnV9EM/6t1KmIvYWBN7WNg3aWRhYomIH/pS7xYGgBnWK2B+7/GEy/QRMVZYZ1W70/pT7+bDnO2xNXP4XFsgwGgiw14fRr09qnfjYc72MmCcjGT3TpQJwsEAgzCpOvzu13jSlgFAFw3HBvnuqfODqT7Vu4VuBmDGw2rtTYlkDfwsUkT5Dk+ltMM9Zgfp02+m1We6JXCXir9yxyDhcIE5uzTz09l+1PvCMNefiMuXrwVYbpYIgiHGJsfqwVV6g/Nl7U5QzpNjcuE4DrLPLAcsa27/9cdz+fI1jfW+MMz1J+Ly5VT+UlRrpwLcz43cFme1J/mP64NyK+Xrc7V2e/XHc/lyqi/1brybMZ1Fricv3/Ua0o9b7+T13PsdUrzk9X3Rd924mvWn3kK+VQ1LbQRjPz32LGR7FNvCPST//X5hU2l3c3LCTULARl7MnPSn3i2E+fND/DSCxfssz3HHZdjS3bB4Pmmitd6thPlYQE5nN6cf9W4pzI7c1uLIGrkceHWF82h/P9Jfb/5LW1KjlUkTov+BYSY1GGZSg2EmNRhmUoNhJjUYZlKDYSY1GGZSg2EmNRhmUoNhJjUYZlKDYSY1GGZSg2EmNRhmUgL4BdJ1tvBU3qkjAAAAAElFTkSuQmCC";
		base191_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base192_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base190_image.onload = function () {
			CekJaw();
		}
		base191_image.onload = function () {
			CekJaw();
		}
		base192_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				ctx.drawImage(base190_image, 0, -4,base190_image.width, base190_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arr[0],17,38);
				ctx.fillText(arr[1],68,25);
				ctx.fillText(arr[2],110,16);
				ctx.fillText(arr[3],110,38);
				ctx.fillText(arr[4],157,25);
				ctx.textAlign = "left";
				ctx.fillText("adalah ...",0,60);
			}
			var Abjad = ["A","B","C","D"];
			ctx.textAlign = "left";
			//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
			//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
			for(var i=0;i<4;i++){
				if(arrs[i][1][0]>0){
					ctx.textAlign = "left";
					ctx.drawImage(base191_image, 0, 46+20+46*i,base191_image.width, base191_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i);
					ctx.fillText(arrs[i][1][2],35,12+46+46+46*i);
				}else{
					ctx.textAlign = "left";
					ctx.drawImage(base192_image, 0, 46+20+46*i,base192_image.width, base192_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i);
					ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i);
				}
				ctx.textAlign = "left";
				ctx.fillText(Abjad[i]+".",0,46+46+46*i);
			}
		}
		
		return 0;
	}
	function MyPersamaanLinier20(){
		//20. Diketahui persamaan -5x + 7 = 2x + 77, nilai dari x + 8 adalah .....
		do{
			var aa = RandomAngkaAtoB(2,18);
			var bb = RandomAngkaAtoB(2,18);
			var cc = RandomAngkaAtoB(2,18);
			var dd = RandomAngkaAtoB(2,18);
			var ee = RandomAngkaAtoB(2,18);
			var ff = bb-dd;
			var gg = aa+cc;
			var hh = Mods(ff,gg)==0;
			var jj = ff/gg;
			var kk = jj+ee;
		}while(!hh || bb<=dd);
		var soal1 =  "\u2212"+aa+"x + "+bb+" = "+cc+"x + "+dd;
		var soal2 =  "x + "+ee;
		
		var benar = kk;
		var salah1 = "\u2212"+jj;
		var salah2 = jj;
		var salah3 = "\u2212"+kk;
		var salah4 = jj+1;
		var salah5 = "\u2212"+(jj+1);
		var salah6 = (jj-1);			if(jj-1==0) salah6 = 0;
		var salah7 = "\u2212"+(jj-1);	if(jj-1==0) salah7 = "\u2212"+(jj+2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		return [soal1,soal2,benar,arrSalah];
	}

	function GetSoal1(){
		const MyData = MyPersamaanLinier1();
		//[benar,arrSalah];
		var benar=MyData[0];
		var arrSalah=MyData[1];
		
		//1. Persamaan di bawah ini yang termasuk persamaan linear satu variabel adalah ...

		var ss
		ss = "Persamaan di bawah ini yang termasuk persamaan linear satu variabel adalah ... ";
		
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
		const MyData = MyPersamaanLinier2();
		//[soal,benar,arrSalah];
		var soal=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//1. Himpunan penyelesaian dari persamaan 6a - 9 = 3a - 3 adalah ...

		var ss
		ss = "Himpunan penyelesaian dari persamaan "+soal+" adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		ArFix.push(Ar)
		return ArFix;
	}
	function GetSoal3(){
		const MyData = MyPersamaanLinier3();
		//[soal,benar,arrSalah];
		var soal=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		
		//3. Nilai x dari persamaan 3(x - 1) + x = -x + 9 adalah ...

		var ss
		ss = "Nilai x dari persamaan "+soal+" adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(Ar);
		return ArFix;
	}
	function GetSoal4(){
		const MyData = MyPersamaanLinier4();
		//[bb,cc,benar,arrSalah];
		var bb=MyData[0];
		var cc=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//4. Umur ayah 2 kali umur anaknya. Jika selisih umur mereka adalah 20 tahun, maka umur ayah adalah ... tahun.
		
		var Tokoh = NamaTokoh();
		var ss
		ss = "Umur "+Tokoh[0]+" "+bb+" kali umur "+Tokoh[1]+". Jika selisih umur mereka adalah "+cc+" tahun, maka umur "+Tokoh[0]+" adalah ... tahun. ";
		
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
		const MyData = MyPersamaanLinier5();
		//[bb,cc,benar,arrSalah];
		var bb=MyData[0];
		var cc=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//4. Umur ayah 2 kali umur anaknya. Jika selisih umur mereka adalah 20 tahun, maka umur ayah adalah ... tahun.
		
		var Tokoh = NamaTokoh();
		var ss
		ss = "Umur "+Tokoh[0]+" "+bb+" kali umur "+Tokoh[1]+". Jika jumlah umur mereka adalah "+cc+" tahun, maka umur "+Tokoh[1]+" adalah ... tahun. ";
		
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
		const MyData = MyPersamaanLinier6();
		//[soal,ee,benar,arrSalah];
		var soal=MyData[0];
		var ee=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//6.  Jika 5(x – 6) = 2(x – 3) maka nilai x + 3 adalah ...
		
		var ss
		ss = "Jika "+soal+" maka nilai x + "+ee+" adalah ... ";
		
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
	function GetSoal7(canv){
		const MyData = MyPersamaanLinier7();
		//[soal,ee,benar,arrSalah];
		var soal=MyData[0];
		var ee=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		var TheData=MyData[4];
		
		//6.  Jika 5(x – 6) = 2(x – 3) maka nilai x + 3 adalah ...
		const MyGambar7 = PropertiAljabar7(canv,TheData);
		var ss
		//ss = "Jika "+soal+" maka nilai x + "+ee+" adalah ... ";
		ss = "maka nilai x + "+ee+" adalah ... ";
		
		
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
	function GetSoal8(){
		const MyData = MyPersamaanLinier8();
		//[bb,ee,benar,arrSalah];
		var bb=MyData[0];
		var ee=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//8. Jumlah tiga bilangan ganjil berurutan adalah 39. Jumlah bilangan yang terkecil dan terbesar adalah ...

		var ss
		ss = "Jumlah tiga bilangan ganjil berurutan adalah "+bb*3+". Jumlah bilangan yang terkecil dan terbesar adalah ... ";
		
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
		const MyData = MyPersamaanLinier9();
		//[bb,cc,benar,arrSalah];
		var bb=MyData[0];
		var cc=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//9. Diketahui jumlah delapan bilangan genap berurutan adalah 120. Jumlah bilangan terbesar dan terkecil adalah ...

		var ss
		ss = "Diketahui jumlah delapan bilangan genap berurutan adalah "+bb+". Jumlah bilangan terbesar dan terkecil adalah ... ";
		
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
		const MyData = MyPersamaanLinier10();
		//[soal,ee,benar,arrSalah];
		var soal=MyData[0];
		var ee=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//10. Nilai b yang memenuhi persamaan 2b + 3 = 5b – 6 adalah ....
		
		var ss
		ss = "Nilai b yang memenuhi persamaan "+soal+" adalah .... ";
		
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
	function GetSoal11(canv){
		const MyData = MyPersamaanLinier11();
		//[soal,gg,benar,arrSalah];
		var soal=MyData[0];
		var gg=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		var TheData=MyData[4];
		
		const MyGambar11 = PropertiAljabar11(canv,TheData);
		//11. Nilai x yang memenuhi 2[ 3x + 1/4 ] = 5[ 2x - 1/6 ] adalah ....
		
		var ss
		//ss = "Nilai x yang memenuhi "+soal+" adalah .... ";
		ss = " adalah .... ";
		
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
		const MyData = MyPersamaanLinier12();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//12. Jika diketahui a + 5 = 11, maka nilai a + 33 adalah ... 
		var ss
		ss = "Jika diketahui "+soal1+", maka nilai "+soal2+" adalah ... ";
		
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
		const MyData = MyPersamaanLinier13();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//12. Jika diketahui a + 5 = 11, maka nilai a + 33 adalah ...  
		
		var ss
		ss = "Jika  "+soal1+", maka nilai "+soal2+" = ... ";
		
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
	function GetSoal14(canv){
		const MyData = MyPersamaanLinier14();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		var TheData=MyData[3];
		
		const MyGambar14 = PropertiAljabar14(canv,TheData);
		
		//14. Penyelesaian dari x/2 – 1/3 = x/3 + 1/6 adalah ...
		
		var ss
		//ss = "Penyelesaian dari  "+soal1+" adalah ... ";
		ss = " adalah ... ";
		
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
	function GetSoal15(canv){
		const MyData = MyPersamaanLinier15();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		var TheData=MyData[3];
		
		const MyGambar15 = PropertiAljabar15(canv,TheData);
		
		//15. Penyelesaian dari y/2 – (y-4)/5 = 23/10 adalah ...
		
		var ss
		//ss = "Penyelesaian dari  "+soal1+" adalah ... ";
		ss = "adalah ... ";
		
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
	function GetSoal16(canv){
		const MyData = MyPersamaanLinier16();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		var TheData=MyData[3];
		
		const MyGambar16 = PropertiAljabar16(canv,TheData);
		
		//16. Nilai x yang memenuhi persamaan  4(x + 2)/5  = 7 + 5x/13 adalah ...
		
		var ss
		//ss = "Nilai x yang memenuhi persamaan  "+soal1+" adalah ... ";
		ss = "adalah ... ";
		
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
	function GetSoal17(canv){
		const MyData = MyPersamaanLinier17();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		var TheData=MyData[3];
		
		//17. Penyelesaian dari 1/2  = -1/4  + y adalah ...
		
		var ss
		//ss = "Nilai x yang memenuhi persamaan  "+soal1+" adalah ... ";
		ss = "";//" adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		const MyGambar17 = PropertiAljabar17(canv,TheData,Ar);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal18(canv){
		const MyData = MyPersamaanLinier18();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		var TheData=MyData[3];
		
		//18. Penyelesaian dari 
		//(4 - 5x)/6  -  (1 - 2x)/3 =  13/42 
		//adalah ...
		
		var ss
		//ss = "Nilai x yang memenuhi persamaan  "+soal1+" adalah ... ";
		ss = "adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		const MyGambar18 = PropertiAljabar18(canv,TheData,Ar);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal19(canv){
		const MyData = MyPersamaanLinier19();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var benar=MyData[1];
		var arrSalah=MyData[2];
		var TheData=MyData[3];
		
		//19. Nilai x yang memenuhi persamaan
		//1/4 (x -10) =  2/3 (x -5) 
		//adalah ...
		
		var ss
		//ss = "Nilai x yang memenuhi persamaan  "+soal1+" adalah ... ";
		ss = "adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		const MyGambar19 = PropertiAljabar19(canv,TheData,Ar);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
	
		return ArFix;
	}
	function GetSoal20(){
		const MyData = MyPersamaanLinier20();
		//[soal1,soal2,benar,arrSalah];
		var soal1=MyData[0];
		var soal2=MyData[1];
		var benar=MyData[2];
		var arrSalah=MyData[3];
		
		//20. Diketahui persamaan -5x + 7 = 2x + 77, nilai dari x + 8 adalah ...
		
		var ss
		ss = "Diketahui persamaan  "+soal1+" , nilai dari "+soal2+" adalah ... ";
		
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
	
	
	
	dd1.innerHTML="<p>Bab 4 \u{2192} Persamaan Linier Satu Variabel </p>";
	if(no==2){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 179;
		cc1.height= 190;
		const MyGambar2 = PropertiAljabar2(cc1.id,ss[2]);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==3){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 179;
		cc1.height= 190;
		const MyGambar3 = PropertiAljabar3(cc1.id,ss[2]);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan persamaan berikut :</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan persamaan berikut :</p>";
		cc1.width = 164;
		cc1.height= 47;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";  
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Penyelesaian dari</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Penyelesaian dari</p>";
		cc1.width = 198;
		cc1.height= 47;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Penyelesaian dari</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Penyelesaian dari</p>";
		cc1.width = 137;
		cc1.height= 49;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Penyelesaian dari</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Penyelesaian dari</p>";
		cc1.width = 137;
		cc1.height= 49;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Penyelesaian dari</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Penyelesaian dari</p>";
		cc1.width = 165;
		cc1.height= 46;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Nilai x yang memenuhi persamaan :</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Nilai x yang memenuhi persamaan :</p>";
		cc1.width = 110;
		cc1.height= 250;
		ss = namefunc[no-1](cc1.id);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Penyelesaian dari</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Penyelesaian dari</p>";
		cc1.width = 212;
		cc1.height= 250;
		ss = namefunc[no-1](cc1.id);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==19){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Penyelesaian dari</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Penyelesaian dari</p>";
		cc1.width = 179;
		cc1.height= 250;
		ss = namefunc[no-1](cc1.id);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
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
