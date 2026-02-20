function Print8(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function MyPersamaanGarisLurus1(){
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		var arkali = [2,3,4,5,6,7];
		arkali = RandomMyArray(arkali);
		do{
			var aa = RandomAngkaAtoB(1,5);
			var bb = RandomAngkaAtoB(1,5);
			var a1 = aa*arkali[0];
			var a2 = bb*arkali[0];
			var a3 = RandomAngkaAtoB(10,16);
			var b1 = RandomAngkaAtoB(10,16);
			var b2 = b1*arkali[2];
			var b3 = RandomAngkaAtoB(10,16);
			var c1 = aa*arkali[1];
			var c2 = bb*arkali[1];
			var c3 = RandomAngkaAtoB(10,16);
			var d1 = RandomAngkaAtoB(10,16);
			var d2 = d1*arkali[2];
			var d3 = RandomAngkaAtoB(10,16);
			var pgl1 = a1+"y = "+a2+"x + "+a3;
			var pgl2 = b1+"y = "+b2+"x + "+b3;
			var pgl3 = c1+"y = "+c2+"x + "+c3;
			var pgl4 = d1+"y = \u{2212}"+d2+"x + "+d3;
			
		}while (aa==bb)
		var arrSoalJawab = [[pgl1,pgl3,pgl2,pgl4,"1 dan 2","3 dan 4","1 dan 3","2 dan 4"],
							[pgl1,pgl2,pgl3,pgl4,"1 dan 3","2 dan 4","1 dan 2","3 dan 4"],
							[pgl1,pgl2,pgl4,pgl3,"1 dan 4","2 dan 3","1 dan 3","2 dan 4"],
							[pgl2,pgl1,pgl4,pgl3,"2 dan 4","1 dan 3","1 dan 2","3 dan 4"],
							[pgl2,pgl4,pgl1,pgl3,"3 dan 4","1 dan 2","1 dan 3","2 dan 4"]
							];
		arrSoalJawab = RandomMyArray(arrSoalJawab);
		var fix1 = arrSoalJawab[0][0]
		//var soal = a1+"x + "+a2+" "+arDari[0]+" "+a4;
		//–
		var benar = arrSoalJawab[0][4];
		var salah1 = arrSoalJawab[0][5];
		var salah2 = arrSoalJawab[0][6];
		var salah3 = arrSoalJawab[0][7];
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [arrSoalJawab[0][0],arrSoalJawab[0][1],arrSoalJawab[0][2],arrSoalJawab[0][3],benar,arrSalah];
	}
	function MyPersamaanGarisLurus2(){
	
		var a1 = 2*RandomAngkaAtoB(2,8);
		var a2 = 2*a1;
		var a3 = a1/2;
		
		var benar = "(\u{2212}"+a3+", "+0+")";
		var salah1 = "(\u{2212}"+a3+", "+a1+")";
		var salah2 = "(\u{2212}"+a1+", "+0+")";
		var salah3 = "("+0+", "+a1+")";
		var salah4 = "(\u{2212}"+a2+", "+0+")";
		var salah5 = "("+0+", "+a2+")";
		var salah6 = "("+a1+", "+a2+")";
		var salah7 = "("+a2+", "+0+")";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,benar,arrSalah];
	}
	function GambarPG2(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],110,100);
			ctx.fillText(arr[1],210,160);
		}
		return 0;
	}
	function MyPersamaanGarisLurus3(){
		
		do{
			var dxx = -3+RandomAngkaAtoB(-1,7);
			var dyy = -3+RandomAngkaAtoB(-1,7);
		}while(Math.abs(dxx)==Math.abs(dyy) || dxx==0 || dyy==0)
		
		var m1 = dyy/dxx;
		var m2 = -dxx/dyy;
		var tanda;
		var benar,salah1,salah2,salah3;
		
		if(m1<0){
			benar = ["\u{2212}"+Math.abs(dyy)+"/"+Math.abs(dxx),[-1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) benar=["\u{2212}"+Math.abs(dyy),[-1,"\u{2212}"+Math.abs(dyy),1]];
			salah1 = ["\u{2212}"+Math.abs(dxx)+"/"+Math.abs(dyy),[-1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) salah1=["\u{2212}"+Math.abs(dxx),[-1,"\u{2212}"+Math.abs(dxx),1]];
			salah2 = [Math.abs(dxx)+"/"+Math.abs(dyy),[1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) salah2=[Math.abs(dxx),[1,Math.abs(dxx),1]];
			salah3 = [Math.abs(dyy)+"/"+Math.abs(dxx),[1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) salah3=[Math.abs(dyy),[1,Math.abs(dyy),1]];
		}else{
			benar = [Math.abs(dyy)+"/"+Math.abs(dxx),[1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) benar=[Math.abs(dyy),[1,Math.abs(dyy),1]];
			salah1 = [Math.abs(dxx)+"/"+Math.abs(dyy),[1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) salah1=[Math.abs(dxx),[1,Math.abs(dxx),1]];
			salah2 = ["\u{2212}"+Math.abs(dxx)+"/"+Math.abs(dyy),[-1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) salah2=["\u{2212}"+Math.abs(dxx),[-1,"\u{2212}"+Math.abs(dxx),1]];
			salah3 = ["\u{2212}"+Math.abs(dyy)+"/"+Math.abs(dxx),[-1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) salah3=["\u{2212}"+Math.abs(dyy),[-1,"\u{2212}"+Math.abs(dyy),1]];
		}
		
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [dxx,-dyy,benar,arrSalah];
	}
	function GambarPG3(nmcanvas,dxx,dyy,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA3SURBVFhH7c+xAQAgDITAN/vvrBaZgucaas79UmS2NRymc5jOYTqH6Rymc5jOYTqH6Rymc5gteVx4BCiyKILvAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base0_image.onload = function () {
			CekJaw();
		}	
		base1_image.onload = function () {
			CekJaw();
		}	
		base2_image.onload = function () {
			CekJaw();
		}
		base3_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==4){
				ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				//ctx.fillText(arr[0],110,100);
				//ctx.fillText(arr[1],210,160);
				
				var xx0 = 100;
				var yy0 = 100;
				var sdt = -60;
				var rr = 100;
				
				var cvrt_sdt = Math.atan(dyy/dxx)*180/Math.PI;
				JariLingkaran(xx0,yy0,rr,cvrt_sdt);
				bulatan(xx0,yy0,rr,dxx,dyy);
				var dy = 150;
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText("Gradien garis PQ adalah...",0,60+dy);
				
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-2+46+46+46*i+dy);
						ctx.textAlign = "left";
						ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base3_image, 0, 46+20+46*i+dy,base3_image.width, base3_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}
					}
				}
			}
		}
		
		function JariLingkaran(_x,_y,_r,_sdt){
			var xx,yy;
			ctx.moveTo(_x,_y);
			xx = _x+_r*Math.cos(_sdt*Math.PI/180);
			yy = _y+_r*Math.sin(_sdt*Math.PI/180);
			ctx.lineTo(xx,yy);
			
			ctx.moveTo(_x,_y);
			xx = _x+_r*Math.cos((180+_sdt)*Math.PI/180);
			yy = _y+_r*Math.sin((180+_sdt)*Math.PI/180);
			ctx.lineTo(xx,yy);
			
			ctx.stroke();
		}
		function bulatan(_x,_y,_r,dxx,dyy){
			ctx.beginPath();
			ctx.arc(_x+dxx*_r/6,_y+dyy*_r/6, 4, 0, 2 * Math.PI);
			ctx.arc(_x-dxx*_r/6,_y-dyy*_r/6, 4, 0, 2 * Math.PI);
			ctx.fillStyle = "black";
			ctx.fill();
			ctx.font = "bold 12px Times New Roman";
			ctx.fillText("P",_x+dxx*_r/6+10,_y+dyy*_r/6);
			ctx.fillText("Q",_x-dxx*_r/6+10,_y-dyy*_r/6);
		}
		return 0;
	}
	function GambarPG4(nmcanvas,dxx,dyy,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA3SURBVFhH7c+xAQAgDITAN/vvrBaZgucaas79UmS2NRymc5jOYTqH6Rymc5jOYTqH6Rymc5gteVx4BCiyKILvAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
			
		base0_image.onload = function () {
			CekJaw();
		}	
		base1_image.onload = function () {
			CekJaw();
		}	
		base2_image.onload = function () {
			CekJaw();
		}
		base3_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==4){
				
				ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				//ctx.fillText(arr[0],110,100);
				//ctx.fillText(arr[1],210,160);
				
				var xx0 = 100;
				var yy0 = 100;
				var sdt = -60;
				var rr = 100;
				
				var cvrt_sdt = Math.atan(dyy/dxx)*180/Math.PI;
				JariLingkaran(xx0,yy0,rr,cvrt_sdt);
				bulatan(xx0,yy0,rr,dxx,dyy);
				var dy = 150;
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText("Gradien garis PQ adalah...",0,60+dy);
				
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-2+46+46+46*i+dy);
						ctx.textAlign = "left";
						ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base3_image, 0, 46+20+46*i+dy,base3_image.width, base3_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}
					}
				}
			}
		}
		
		function JariLingkaran(_x,_y,_r,_sdt){
			var xx,yy;
			ctx.moveTo(_x,_y);
			xx = _x+_r*Math.cos(_sdt*Math.PI/180);
			yy = _y+_r*Math.sin(_sdt*Math.PI/180);
			ctx.lineTo(xx,yy);
			
			ctx.moveTo(_x,_y);
			xx = _x+_r*Math.cos((180+_sdt)*Math.PI/180);
			yy = _y+_r*Math.sin((180+_sdt)*Math.PI/180);
			ctx.lineTo(xx,yy);
			
			ctx.stroke();
		}
		function bulatan(_x,_y,_r,dxx,dyy){
			ctx.beginPath();
			ctx.arc(_x+dxx*_r/6,_y+dyy*_r/6, 4, 0, 2 * Math.PI);
			ctx.arc(_x-dxx*_r/6,_y-dyy*_r/6, 4, 0, 2 * Math.PI);
			ctx.fillStyle = "black";
			ctx.fill();
			ctx.font = "bold 12px Times New Roman";
			ctx.fillText("P",_x+dxx*_r/6+10,_y+dyy*_r/6);
			ctx.fillText("Q",_x-dxx*_r/6+10,_y-dyy*_r/6);
		}
		return 0;
	}
	function MyPersamaanGarisLurus4(){
		
		do{
			var dxx = -3+RandomAngkaAtoB(-1,7);
			var dyy = -3+RandomAngkaAtoB(-1,7);
		}while(Math.abs(dxx)==Math.abs(dyy) || dxx==0 || dyy==0)
		
		var m1 = dyy/dxx;
		var m2 = -dxx/dyy;
		var tanda;
		var benar,salah1,salah2,salah3;
		
		if(m2<0){
			benar = ["\u{2212}"+Math.abs(dxx)+"/"+Math.abs(dyy),[-1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) benar=["\u{2212}"+Math.abs(dxx),[-1,"\u{2212}"+Math.abs(dxx),1]];
			salah1 = ["\u{2212}"+Math.abs(dyy)+"/"+Math.abs(dxx),[-1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) salah1=["\u{2212}"+Math.abs(dyy),[-1,"\u{2212}"+Math.abs(dyy),1]];
			salah2 = [Math.abs(dxx)+"/"+Math.abs(dyy),[1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) salah2=[Math.abs(dxx),[1,Math.abs(dxx),1]];
			salah3 = [Math.abs(dyy)+"/"+Math.abs(dxx),[1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) salah3=[Math.abs(dyy),[1,Math.abs(dyy),1]];
		}else{
			benar = [Math.abs(dxx)+"/"+Math.abs(dyy),[1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) benar=[Math.abs(dxx),[1,Math.abs(dxx),1]];
			salah1 = [Math.abs(dyy)+"/"+Math.abs(dxx),[1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) salah1=[Math.abs(dyy),[1,Math.abs(dyy),1]];
			salah2 = ["\u{2212}"+Math.abs(dxx)+"/"+Math.abs(dyy),[-1,Math.abs(dxx),Math.abs(dyy)]];
			if(Math.abs(dyy)==1) salah2=["\u{2212}"+Math.abs(dxx),[-1,"\u{2212}"+Math.abs(dxx),1]];
			salah3 = ["\u{2212}"+Math.abs(dyy)+"/"+Math.abs(dxx),[-1,Math.abs(dyy),Math.abs(dxx)]];
			if(Math.abs(dxx)==1) salah3=["\u{2212}"+Math.abs(dyy),[-1,"\u{2212}"+Math.abs(dyy),1]];
		}
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [dxx,-dyy,benar,arrSalah];
	}
	function MyPersamaanGarisLurus5(){
	
		var a1 = RandomAngkaAtoB(6,8);
		var a2 = RandomAngkaAtoB(6,8);
		var a3 = RandomAngkaAtoB(2,4);
		
		var fpb = CariFPB([a1,a2,a3]);
		var a1_c = a1/fpb;
		var a2_c = a2/fpb;
		var a3_c = a3/fpb;
		
		//"(\u{2212}"
		var benar = ""+a3_c+"x \u{2212} "+a1_c+"y = "+a2_c*a3;				if(a3_c==1) benar = ""+"x \u{2212} "+a1_c+"y = "+a2_c*a3;
		var salah1 = "\u{2212}"+a3_c+"x + "+a1_c+"y = "+a2_c*a3;			if(a3_c==1) salah1 = "\u{2212}"+"x + "+a1_c+"y = "+a2_c*a3;
		var salah2 = "\u{2212}"+a2_c+"x + "+a1_c+"y = "+a2_c*a3;			if(a2_c==1) salah2 = "\u{2212}"+"x + "+a1_c+"y = "+a2_c*a3;
		var salah3 = ""+a2_c+"x + "+a1_c+"y = "+a2_c*a3_c;				if(a2_c==1) salah3 = ""+"x + "+a1_c+"y = "+a2_c*a3_c;
		var salah4 = ""+a3_c+"x + "+a1_c+"y = \u{2212}"+a2_c*a3_c;			if(a3_c==1) salah4 = ""+"x + "+a1_c+"y = \u{2212}"+a2_c*a3_c;
		var salah5 = ""+a3_c+"x \u{2212} "+a1_c+"y = \u{2212}"+a2_c*a3_c;	if(a3_c==1) salah5 = ""+"x \u{2212} "+a1_c+"y = \u{2212}"+a2_c*a3_c;
		var salah6 = "\u{2212}"+a2_c+"x + "+a1_c+"y = \u{2212}"+a2_c*a3_c;	if(a2_c==1) salah6 = "\u{2212}"+"x + "+a1_c+"y = \u{2212}"+a2_c*a3_c;
		var salah7 = ""+a2_c+"x \u{2212} "+a1_c+"y = "+a2_c*a3_c;			if(a2_c==1) salah7 = ""+"x \u{2212} "+a1_c+"y = "+a2_c*a3_c;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,"\u{2212}"+a3,benar,arrSalah];
	}
	function MyPersamaanGarisLurus6(){
		do{
			var a1 = RandomAngkaAtoB(2,10);
			var a2 = RandomAngkaAtoB(2,10);
		}while(a1==a2);
		
		var fpb = CariFPB([a1,a2]);
		var a1_c = a1/fpb;
		var a2_c = a2/fpb;
		
		//"(\u{2212}"
		
		var benar = [""+a2_c+"/"+a1_c,[1,a2_c,a1_c]];
		if(a1_c==1) benar=[a2_c,[1,a2_c,1]];
		var salah1 = [""+a1_c+"/"+a2_c,[1,a1_c,a2_c]];
		if(a2_c==1) salah1=[a1_c,[1,a1_c,1]];
		var salah2 = ["\u{2212}"+a2_c+"/"+a1_c,[-1,a2_c,a1_c]];
		if(a1_c==1) salah2=["\u{2212}"+a2_c,[-1,"\u{2212}"+a2_c,1]];
		var salah3 = ["\u{2212}"+a1_c+"/"+a2_c,[-1,a1_c,a2_c]];
		if(a2_c==1) salah3=["\u{2212}"+a1_c,[-1,"\u{2212}"+a1_c,1]];
			
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,benar,arrSalah];
	}
	function GambarPG6(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" m",120,180);
			ctx.textAlign = "right";
			ctx.fillText(arr[1]+" m",149,140);
		}
		return 0;
	}
	function GambarPG6b(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA3SURBVFhH7c+xAQAgDITAN/vvrBaZgucaas79UmS2NRymc5jOYTqH6Rymc5jOYTqH6Rymc5gteVx4BCiyKILvAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base1_image.onload = function () {
			CekJaw();
		}	
		base2_image.onload = function () {
			CekJaw();
		}
		base3_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				var dy = -60;
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-2+46+46+46*i+dy);
						ctx.textAlign = "left";
						ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base3_image, 0, 46+20+46*i+dy,base3_image.width, base3_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}
					}
				}
			}
		}
		
		return 0;
	}
	function MyPersamaanGarisLurus7(){
		do{
			var a1 = RandomAngkaAtoB(-10,20);
			var a2 = RandomAngkaAtoB(-10,20);
			var mm = RandomAngkaAtoB(2,10);
			var tanda = -3+2*RandomAngkaAtoB(0,2);
			var konst = tanda*mm*a1-a2;
		}while(konst<=0);
		
		//"(\u{2212}"
		if(tanda>0){
			printmm=""+mm;
			var benar = ""+mm+"x \u{2212} y = "+konst;
			var salah1 = ""+mm+"x + y = "+konst;
			var salah2 = "\u{2212}"+mm+"x + y = "+konst;
			var salah3 = "\u{2212}"+mm+"x \u{2212} y = "+konst;
		}else{
			printmm="\u{2212}"+mm;
			var benar = ""+mm+"x + y = \u{2212}"+konst;
			var salah1 = ""+mm+"x \u{2212} y = \u{2212}"+konst;
			var salah2 = ""+mm+"x \u{2212} y = "+konst;
			var salah3 = "\u{2212}"+mm+"x + y = "+konst;
		}
		if(a1<0) a1="\u{2212}"+Math.abs(a1);
		if(a2<0) a2="\u{2212}"+Math.abs(a2);
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,printmm,benar,arrSalah];
	}
	function MyPersamaanGarisLurus8(){
		//8. Diberikan persamaan garis lurus p, q, dan r. 
		//Dimana garis p: y = ax + 1 tegak lurus dengan garis r, 
		//dan gradien garis r merupakan jumlah kuadrat dari gradien garis q dan 1. 
		//Jika garis q: 3y - 6x = 3, maka diperoleh nilai a = ...
		//aay - bbx = cc;
		do{
			var aa = RandomAngkaAtoB(1,5);
			var bb = RandomAngkaAtoB(1,5);
			var cc = RandomAngkaAtoB(1,5);
			var mqa = bb;
			var mqb = aa;
			var mra = mqa**2+mqb**2;
			var mrb = mqb**2;
			var fpb = CariFPB([mra,mrb]);
			mra = mra/fpb;
			mrb = mrb/fpb;
		}while(aa==bb || mra==mrb);
		
		var fixa="\u{2212}"+mrb+"/"+mra;
		
		//"\u{2212}"
		
		var benar = ["\u{2212}"+mrb+"/"+mra,[-1,mrb,mra]];
		if(mra==1) benar=["\u{2212}"+mrb,[-1,"\u{2212}"+mrb,1]];
		var salah1 = [mrb+"/"+mra,[1,mrb,mra]];
		if(mra==1) salah1=[mrb,[1,mrb,1]];
		var salah2 = ["\u{2212}"+mra+"/"+mrb,[-1,mra,mrb]];
		if(mrb==1) salah2=["\u{2212}"+mra,[-1,"\u{2212}"+mra,1]];
		var salah3 = [mra+"/"+mrb,[1,mra,mrb]];
		if(mrb==1) salah3=[mra,[1,mra,1]];
		
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [aa,bb,cc,benar,arrSalah];
	}
	function GambarPG8(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA3SURBVFhH7c+xAQAgDITAN/vvrBaZgucaas79UmS2NRymc5jOYTqH6Rymc5jOYTqH6Rymc5gteVx4BCiyKILvAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base1_image.onload = function () {
			CekJaw();
		}	
		base2_image.onload = function () {
			CekJaw();
		}
		base3_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				var dy = -70;
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-2+46+46+46*i+dy);
						ctx.textAlign = "left";
						ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base3_image, 0, 46+20+46*i+dy,base3_image.width, base3_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}
					}
				}
			}
		}
		return 0;
	}
	function MyPersamaanGarisLurus9(){
		//9. Semua persamaan garis lurus di bawah ini mempunyai gradien 1/3 kecuali:
		
		//(A) 6y-2x=8 a1,b1,c1
		//(B) 3y-x=7  a2,b2,c2
		//(C) 3=y-x   a3,b3,c3
		//(D) x=5+3y  a4,b4,c4

		var pp = RandomAngkaAtoB(1,9);
		var a1 = pp;
		var b1 = 1;
		var c1 = 1;
		var a2 = pp*2;
		var b2 = 2;
		var c2 = RandomAngkaAtoB(1,9);
		var a3 = pp;
		var b3 = 1;
		var c3 = RandomAngkaAtoB(1,9);
		var a4 = 1;
		var b4 = RandomAngkaAtoB(1,9);
		var c4 = pp;
		
		//"\u{2212}"
		var benar = a1+" = y \u{2212} x";
		var benar1 = a1+" = y \u{2212} x";
		var benar2 = "y = x + "+a1
		var benar3 = "x = y \u{2212} "+a1
		arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		
		var salah1 = a2+"y \u{2212} "+b2+"x = "+c2;
		var salah2 = a3+"y \u{2212} x = "+c3;
		var salah3 = "x = "+b4+" + "+c4+"y";
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [pp,arrBenar[0],arrSalah];
	}
	
	function GambarPG9(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base2_image = new Image();
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAuCAYAAADdlrJ2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABMSURBVFhH7dYhEgAgCABB8P9/VoMG481IYW4LJK6Sc4ti48xSRhAjiBHECGIEMYL0iTzfSmae7Y972pcIMYIYQYwgRhAjiBGkSyRiAa8JD06tgHiUAAAAAElFTkSuQmCC";
		base2_image.onload = function () {
			ctx.drawImage(base2_image, 423, 0,base2_image.width*.75, base2_image.height*.75);
			ctx.textAlign = "center";
			ctx.font = "16px Times New Roman";
			ctx.fillText(arrs[0],433,12);
			ctx.fillText(arrs[1],433,32);
			ctx.textAlign = "left";
			ctx.fillText("4. Semua persamaan garis lurus di bawah ini mempunyai gradien",0,22);
			ctx.fillText("kecuali ...",450,22);
		}
		
		return 0;
	}
	function MyPersamaanGarisLurus10(){
		//10. Gradien garis singgung yang mempunyai persamaan 7x - 4y + 9 = 0 adalah...
		
		//(A) 6y-2x=8 a1,b1,c1
		//(B) 3y-x=7  a2,b2,c2
		//(C) 3=y-x   a3,b3,c3
		//(D) x=5+3y  a4,b4,c4
		do{
			var a1 = RandomAngkaAtoB(1,19);
			var a2 = RandomAngkaAtoB(1,19);
			var a3 = RandomAngkaAtoB(1,19);
			var fpb1 = CariFPB([a1,a2]);
			var fpb2 = CariFPB([a1,a3]);
			var fpb3 = CariFPB([a2,a3]);
			var b1 = a1/fpb1;
			var c1 = a2/fpb1;
			var b2 = a1/fpb2;
			var c2 = a3/fpb2;
			var b3 = a2/fpb3;
			var c3 = a3/fpb3;
		}while(a1==a2 || a1==a3 || a2==a3)
		
		//"\u{2212}"
		
		var benar = [b1+"/"+c1,[1,b1,c1]];
		if(c1==1)	benar = [b1,[1,b1,1]];
		var salah1 = ["\u{2212}"+b1+"/"+c1,[-1,b1,c1]];
		if(c1==1)	salah1 = ["\u{2212}"+b1,[-1,"\u{2212}"+b1,1]];
		var salah2 = [c1+"/"+b1,[1,c1,b1]];
		if(b1==1)	salah2 = [c1,[1,c1,1]];
		var salah3 = ["\u{2212}"+c1+"/"+b1,[-1,c1,b1]];
		if(b1==1)	salah3 = ["\u{2212}"+c1,[-1,"\u{2212}"+c1,1]];
		var salah4 = [b2+"/"+c2,[1,b2,c2]];
		if(c2==1)	salah4 = [b2,[1,b2,1]];
		var salah5 = ["\u{2212}"+b2+"/"+c2,[-1,b2,c2]];
		if(c2==1)	salah5 = ["\u{2212}"+b2,[-1,"\u{2212}"+b2,1]];
		var salah6 = [c2+"/"+b2,[1,c2,b2]];
		if(b2==1)	salah6 = [c2,[1,c2,1]];
		var salah7 = ["\u{2212}"+c2+"/"+b2,[-1,c2,b2]];
		if(b2==1)	salah7 = ["\u{2212}"+c2,[-1,"\u{2212}"+c2,1]];
		var salah8 = [b3+"/"+c3,[1,b3,c3]];
		if(c3==1)	salah8 = [b3,[1,b3,1]];
		var salah9 = ["\u{2212}"+b3+"/"+c3,[-1,b3,c3]];
		if(c3==1)	salah9 = ["\u{2212}"+b3,[-1,"\u{2212}"+b3,1]];
		var salah10 = [c3+"/"+b3,[1,c3,b3]];
		if(b3==1)	salah10 = [c3,[1,c3,1]];
		var salah11 = ["\u{2212}"+c3+"/"+b3,[-1,c3,b3]];
		if(b3==1)	salah11 = ["\u{2212}"+c3,[-1,"\u{2212}"+c3,1]];
		
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,a3,benar,arrSalah];
	}
	function GambarPG10(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA3SURBVFhH7c+xAQAgDITAN/vvrBaZgucaas79UmS2NRymc5jOYTqH6Rymc5jOYTqH6Rymc5gteVx4BCiyKILvAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base1_image.onload = function () {
			CekJaw();
		}	
		base2_image.onload = function () {
			CekJaw();
		}
		base3_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				var dy = -70;
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-2+46+46+46*i+dy);
						ctx.textAlign = "left";
						ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base3_image, 0, 46+20+46*i+dy,base3_image.width, base3_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}
					}
				}
			}
		}
		
		return 0;
	}
	function MyPersamaanGarisLurus11(){
		var ArrPlace = [0,1,2,3];
		var ArrName = ["p","q","r","s"];
		var ArrSalah = ["p dan q",
						"p dan r",
						"p dan s",
						"q dan r",
						"q dan s",
						"r dan s"];
		ArrPlace = RandomMyArray(ArrPlace);
		var Arno=[];
		for(var i=0;i<4;i++)	if(ArrPlace[i]==0)	Arno.push(i);
		for(var i=0;i<4;i++)	if(ArrPlace[i]==1)	Arno.push(i);
		Arno.sort(function(a, b){return a-b});
		//console.log(Arno,Arno[0]==0 && Arno[1]==1);
		var ArrBenar = "";
		if(Arno[0]==0 && Arno[1]==1)		ArrBenar = ArrSalah[0];
		else if(Arno[0]==0 && Arno[1]==2)	ArrBenar = ArrSalah[1];
		else if(Arno[0]==0 && Arno[1]==3)	ArrBenar = ArrSalah[2];
		else if(Arno[0]==1 && Arno[1]==2)	ArrBenar = ArrSalah[3];
		else if(Arno[0]==1 && Arno[1]==3)	ArrBenar = ArrSalah[4];
		else if(Arno[0]==2 && Arno[1]==3)	ArrBenar = ArrSalah[5];
		else								ArrBenar = ArrSalah[0];
		//console.log(ArrBenar)
		
		//11. Manakah garis-garis di bawah ini yang sejajar?
		//garis p: y=3x-2
		//garis q: y=3x-6
		//garis r: y=2x-5
		//garis s: y=5x-2
		var ArrA = [];
		for(var i=2;i<=20;i++)	ArrA.push(i);
		ArrA = RandomMyArray(ArrA);
		var ArrStrA = ["","","",""];
		ArrStrA[0] = "y = "+ArrA[0]+"x \u{2212} "+ArrA[1]+"<br>";
		ArrStrA[1] = "y = "+ArrA[0]+"x \u{2212} "+ArrA[2]+"<br>";
		ArrStrA[2] = "y = "+ArrA[1]+"x \u{2212} "+ArrA[3]+"<br>";
		ArrStrA[3] = "y = "+ArrA[3]+"x \u{2212} "+ArrA[1]+"<br>";
		
		var str = "";
		str += "garis p: "+ArrStrA[ArrPlace[0]];
		str += "garis q: "+ArrStrA[ArrPlace[1]];
		str += "garis r: "+ArrStrA[ArrPlace[2]];
		str += "garis s: "+ArrStrA[ArrPlace[3]];
		
		//"\u{2212}"
		var benar = ArrBenar;
		var salah1 = ArrSalah[0];
		var salah2 = ArrSalah[1];
		var salah3 = ArrSalah[2];
		var salah4 = ArrSalah[3];
		var salah5 = ArrSalah[4];
		var salah6 = ArrSalah[5];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar)
		
		return [str,benar,arrSalah];
	}
	function MyPersamaanGarisLurus12(){
		//a. (0, 0)
		//b. (a,b)
		//c. (b,a)
		//d. (-a,-b)
		var str="";
		
		//"\u{2212}"
		var benar = "(b, a)";
		var salah1 = "(a, b)";
		var salah2 = "(0, 0)";
		var salah3 = "(\u{2212}"+"a, \u{2212}"+"b)";
		var salah4 = "(\u{2212}"+"b, \u{2212}"+"a)";
		var salah5 = "(\u{2212}"+"a, "+"b)";
		var salah6 = "("+"a, \u{2212}"+"b)";
		var salah7 = "(\u{2212}"+"b, "+"a)";
		var salah8 = "("+"b, \u{2212}"+"a)";
		var salah9 = "(0, a)";
		var salah10 = "(0, b)";
		var salah11 = "(a, 0)";
		var salah12 = "(b, 0)";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar)
		
		return [str,benar,arrSalah];
	}
	function MyPersamaanGarisLurus13(){
		//9. Semua persamaan garis lurus di bawah ini mempunyai gradien 3 kecuali:
		
		//(A) 6y-2x=8 a1,b1,c1
		//(B) 3y-x=7  a2,b2,c2
		//(C) 3=y-x   a3,b3,c3
		//(D) x=5+3y  a4,b4,c4

		var pp = RandomAngkaAtoB(1,9);
		var a1 = pp;
		var b1 = 1;
		var c1 = 1;
		var a2 = pp*2;
		var b2 = 2;
		var c2 = RandomAngkaAtoB(1,9);
		var a3 = pp;
		var b3 = 1;
		var c3 = RandomAngkaAtoB(1,9);
		var a4 = 1;
		var b4 = RandomAngkaAtoB(1,9);
		var c4 = pp;
		
		//"\u{2212}"
		var benar = a1+" = y \u{2212} x";
		var benar1 = a1+" = y \u{2212} x";
		var benar2 = "y = x + "+a1
		var benar3 = "x = y \u{2212} "+a1
		arrBenar = [benar1,benar2,benar3];
		arrBenar = RandomMyArray(arrBenar);
		
		var salah1 = b2+"y \u{2212} "+a2+"x = "+c2;
		var salah2 = "y \u{2212} "+a3+"x = "+c3;
		var salah3 = c4+"x = "+b4+" + y";
		arrSalah = [salah1,salah2,salah3];
		arrSalah = RandomMyArray(arrSalah);
		
		return [pp,arrBenar[0],arrSalah];
	}
	function MyPersamaanGarisLurus14(){

		var ArrPlace = [0,1,2,3];
		var ArrName = ["(1)","(2)","(3)","(4)"];
		var ArrSalah = ["(1) dan (2)",
						"(1) dan (3)",
						"(1) dan (4)",
						"(2) dan (3)",
						"(2) dan (4)",
						"(3) dan (4)"];
		ArrPlace = RandomMyArray(ArrPlace);
		var Arno=[];
		for(var i=0;i<4;i++)	if(ArrPlace[i]==0)	Arno.push(i);
		for(var i=0;i<4;i++)	if(ArrPlace[i]==1)	Arno.push(i);
		Arno.sort(function(a, b){return a-b});
		//console.log(Arno,Arno[0]==0 && Arno[1]==1);
		var ArrBenar = "";
		if(Arno[0]==0 && Arno[1]==1)		ArrBenar = ArrSalah[0];
		else if(Arno[0]==0 && Arno[1]==2)	ArrBenar = ArrSalah[1];
		else if(Arno[0]==0 && Arno[1]==3)	ArrBenar = ArrSalah[2];
		else if(Arno[0]==1 && Arno[1]==2)	ArrBenar = ArrSalah[3];
		else if(Arno[0]==1 && Arno[1]==3)	ArrBenar = ArrSalah[4];
		else if(Arno[0]==2 && Arno[1]==3)	ArrBenar = ArrSalah[5];
		else								ArrBenar = ArrSalah[0];
		
		
		//11. Manakah garis-garis di bawah ini yang sejajar?
		//(1).2x + 3y = 5
		//(2).3x - 2y = 5
		//(3).2x - 3y = 5
		//(4).-3y + 2x = 5
		var ArrA = [];
		for(var i=2;i<=20;i++)	ArrA.push(i);
		ArrA = RandomMyArray(ArrA);
		var ArrStrA = ["","","",""];//\u{2212}
		ArrStrA[0] = ArrA[0]+"x + "+ArrA[1]+"y = "+ArrA[2]+"<br>";
		ArrStrA[1] = ArrA[1]+"x \u{2212} "+ArrA[0]+"y = "+ArrA[2]+"<br>";
		ArrStrA[2] = ArrA[0]+"x \u{2212} "+ArrA[1]+"y = "+ArrA[2]+"<br>";
		ArrStrA[3] = "\u{2212}"+ArrA[1]+"y + "+ArrA[0]+"x = "+ArrA[2]+"<br>";
		
		var str = "";
		str += "(1). "+ArrStrA[ArrPlace[0]];
		str += "(2). "+ArrStrA[ArrPlace[1]];
		str += "(3). "+ArrStrA[ArrPlace[2]];
		str += "(4). "+ArrStrA[ArrPlace[3]];
		
		//"\u{2212}"
		var benar = ArrBenar;
		var salah1 = ArrSalah[0];
		var salah2 = ArrSalah[1];
		var salah3 = ArrSalah[2];
		var salah4 = ArrSalah[3];
		var salah5 = ArrSalah[4];
		var salah6 = ArrSalah[5];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar)
		
		return [str,benar,arrSalah];
	}
	function MyPersamaanGarisLurus15(){

		//Garis 4x – 5y = 1 dan 3x + ay = 2 tidak berpotongan untuk nilai a = ...
		var ArrAngka = [];
		for(var i=2;i<=10;i++)	ArrAngka.push(i);
		ArrAngka = RandomMyArray(ArrAngka);
		
		
		var garis1 = ArrAngka[0]+"x \u{2212} "+ArrAngka[1]+"y = "+ArrAngka[2];
		var garis2 = ArrAngka[3]+"x + ay = "+ArrAngka[4];
		
		//"\u{2212}"
		var fpb1=CariFPB([ArrAngka[0],(ArrAngka[1]*ArrAngka[3])]);
		var fpb2=CariFPB([ArrAngka[0],ArrAngka[3]]);
		
		var benar = ["\u{2212}"+(ArrAngka[1]*ArrAngka[3]/fpb1)+"/"+ArrAngka[0]/fpb1,[-1,(ArrAngka[1]*ArrAngka[3]/fpb1),ArrAngka[0]/fpb1]];
		if(ArrAngka[0]/fpb1==1)	salah1 = ["\u{2212}"+(ArrAngka[1]*ArrAngka[3]/fpb1),[-1,"\u{2212}"+(ArrAngka[1]*ArrAngka[3]/fpb1),1]];
		
		var salah1 = ["\u{2212}"+ArrAngka[0]/fpb1+"/"+(ArrAngka[1]*ArrAngka[3]/fpb1),[-1,ArrAngka[0]/fpb1,ArrAngka[1]*ArrAngka[3]/fpb1]];
		if(ArrAngka[1]*ArrAngka[3]/fpb1==1)	benar = ["\u{2212}"+ArrAngka[0]/fpb1,[-1,"\u{2212}"+ArrAngka[0]/fpb1,1]];
		
		var salah2 = [ArrAngka[0]/fpb1+"/"+(ArrAngka[1]*ArrAngka[3]/fpb1),[1,ArrAngka[0]/fpb1,ArrAngka[1]*ArrAngka[3]/fpb1]];
		if(ArrAngka[1]*ArrAngka[3]/fpb1==1)	salah2 = [ArrAngka[0]/fpb1,[1,ArrAngka[0]/fpb1,1]];
		
		var salah3 = [(ArrAngka[1]*ArrAngka[3]/fpb1)+"/"+ArrAngka[0]/fpb1,[1,(ArrAngka[1]*ArrAngka[3]/fpb1),ArrAngka[0]/fpb1]];
		if(ArrAngka[0]/fpb1==1)	salah3 = [(ArrAngka[1]*ArrAngka[3]/fpb1),[1,(ArrAngka[1]*ArrAngka[3]/fpb1),1]];
		
		var salah4 = ["\u{2212}"+ArrAngka[0]/fpb2+"/"+ArrAngka[3]/fpb2,[-1,ArrAngka[0]/fpb2,ArrAngka[3]/fpb2]];
		if(ArrAngka[3]/fpb2==1)	salah4 = ["\u{2212}"+ArrAngka[0]/fpb2,[-1,"\u{2212}"+ArrAngka[0]/fpb2,1]];
		
		var salah5 = ["\u{2212}"+ArrAngka[3]/fpb2+"/"+ArrAngka[0]/fpb2,[-1,ArrAngka[3]/fpb2,ArrAngka[0]/fpb2]];
		if(ArrAngka[0]/fpb2==1)	salah5 = ["\u{2212}"+ArrAngka[3]/fpb2,[-1,"\u{2212}"+ArrAngka[3]/fpb2,1]];
		
		var salah6 = [ArrAngka[0]/fpb2+"/"+ArrAngka[3]/fpb2,[1,ArrAngka[0]/fpb2,ArrAngka[3]/fpb2]];
		if(ArrAngka[3]/fpb2==1)	[ArrAngka[0]/fpb2,[1,ArrAngka[0]/fpb2,1]];
		
		var salah7 = [ArrAngka[3]/fpb2+"/"+ArrAngka[0],[1,ArrAngka[3]/fpb2,ArrAngka[0]]];
		if(ArrAngka[0]/fpb2==1)	[ArrAngka[3]/fpb2,[1,ArrAngka[3]/fpb2,1]];
		
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar)
		
		return [garis1,garis2,benar,arrSalah];
	}
	function GambarPG15(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAWCAYAAACcy/8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA3SURBVFhH7c+xAQAgDITAN/vvrBaZgucaas79UmS2NRymc5jOYTqH6Rymc5jOYTqH6Rymc5gteVx4BCiyKILvAAAAAElFTkSuQmCC";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAYAAAClBX6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACXSURBVHhe7dohDoAwEADBHv//MyCwBDCD2TGtapoVNb3ZTyvMdq1BCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFxwqOFRwrOFZwjPzaz8y1u/d0jTdnfPHXsEJjElhPClZwrOBYwbGCYwXHCo4VHCs4VnCs4FjBsYJjBccKjhUcKzhWcKzgWMGxgmMFp9Y6ABe8Ek72fzwkAAAAAElFTkSuQmCC";
		
		base1_image.onload = function () {
			CekJaw();
		}	
		base2_image.onload = function () {
			CekJaw();
		}
		base3_image.onload = function () {
			CekJaw();
		}
		
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==3){
				var dy = -70;
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					if(arrs[i][1][2]==1){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 46+20+46*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arrs[i][1][1],35,-2+46+46+46*i+dy);
						ctx.textAlign = "left";
						ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
					}else{
						if(arrs[i][1][0]>0){
							ctx.textAlign = "left";
							ctx.drawImage(base2_image, 0, 46+20+46*i+dy,base2_image.width, base2_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}else{
							ctx.textAlign = "left";
							ctx.drawImage(base3_image, 0, 46+20+46*i+dy,base3_image.width, base3_image.height);
							ctx.textAlign = "center";
							ctx.fillText(arrs[i][1][1],15+35,-9+46+46+46*i+dy);
							ctx.fillText(arrs[i][1][2],15+35,12+46+46+46*i+dy);
							ctx.textAlign = "left";
							ctx.fillText(Abjad[i]+".",0,46+46+46*i+dy);
						}
					}
				}
			}
		}
		return 0;
	}
	function MyPersamaanGarisLurus16(){
		var ArrAngka=[];
		for(var i=2;i<=10;i++)	ArrAngka.push(i);
		ArrAngka = RandomMyArray(ArrAngka);
		
		var titik1 = "("+ArrAngka[0]+", 0)";
		var titik2 = "(0, "+ArrAngka[1]+")";
		
		//Garis g memotong sumbu koordinat di titik (3,0) dan (0,2). Jika titik (a,b) terletak pada garis g, maka berlaku:
		//(A) 2a+3b=6 
		//(B) 3a+2b=6 
		//(C) 2a-3b=6 
		//(D) 3a-2b=6 

		
		//"\u{2212}"
		var benar = ArrAngka[1]+"a + "+ArrAngka[0]+"b = "+ArrAngka[0]*ArrAngka[1];
		var salah1 = ArrAngka[0]+"a + "+ArrAngka[1]+"b = "+ArrAngka[0]*ArrAngka[1];
		var salah2 = ArrAngka[1]+"a \u{2212} "+ArrAngka[0]+"b = "+ArrAngka[0]*ArrAngka[1];
		var salah3 = ArrAngka[0]+"a \u{2212} "+ArrAngka[1]+"b = "+ArrAngka[0]*ArrAngka[1];
		arrSalah = [salah1,salah2,salah3];
		
		return [titik1,titik2,benar,arrSalah];
	}
	function MyPersamaanGarisLurus17(){
	
		var a1 = RandomAngkaAtoB(6,8);
		var a2 = RandomAngkaAtoB(6,8);
		var a3 = RandomAngkaAtoB(2,4);
		
		var fpb = CariFPB([a1,a2,a3]);
		var a1_c = a1/fpb;
		var a2_c = a2/fpb;
		var a3_c = a3/fpb;
		
		var const1 = a3*a3;
		var const2 = a3*a1;
		var fpb1 = CariFPB([a1,a3,const1]);
		var fpb2 = CariFPB([a1,a3,const2]);
		var a1_f1 = a1/fpb1;
		var a3_f1 = a3/fpb1;
		var const1_f1 = const1/fpb1;
		var a1_f2 = a1/fpb2;
		var a3_f2 = a3/fpb2;
		var const2_f2 = const2/fpb2;
		
		//"(\u{2212}"
		var benar = ""+a3_f1+"x + "+a1_f1+"y = \u{2212}"+const1_f1;		if(a3_f1==1) benar = "x + "+a1_f1+"y = \u{2212}"+const1_f1;		if(a1_f1==1) benar = ""+a3_f1+"x + y = \u{2212}"+const1_f1;		if(a1_f1==1 && a3_f1==1) benar = "x + y = \u{2212}"+const1_f1;
		var salah1 = ""+a3_f2+"x + "+a1_f2+"y = \u{2212}"+const2_f2;		if(a3_f2==1) salah1 = "x + "+a1_f2+"y = \u{2212}"+const2_f2;		if(a1_f2==1) salah1 = ""+a3_f2+"x + y = \u{2212}"+const2_f2;		if(a1_f2==1 && a3_f2==1) salah1 = "x + y = \u{2212}"+const2_f2;
		var salah2 = ""+a3_f1+"x \u{2212} "+a1_f1+"y = \u{2212}"+const1_f1;	if(a3_f1==1) salah2 = "x \u{2212} "+a1_f1+"y = \u{2212}"+const1_f1;	if(a1_f1==1) salah2 = ""+a3_f1+"x \u{2212} y = \u{2212}"+const1_f1;	if(a1_f1==1 && a3_f1==1) salah2 = "x \u{2212} y = \u{2212}"+const1_f1;
		var salah3 = ""+a3_f2+"x \u{2212} "+a1_f2+"y = \u{2212}"+const2_f2;	if(a3_f2==1) salah3 = "x \u{2212} "+a1_f2+"y = \u{2212}"+const2_f2;	if(a1_f2==1) salah3 = ""+a3_f2+"x \u{2212} y = \u{2212}"+const2_f2;	if(a1_f2==1 && a3_f2==1) salah3 = "x \u{2212} y = \u{2212}"+const2_f2;
		var salah4 = ""+a1_f1+"x + "+a3_f1+"y = \u{2212}"+const1_f1;		if(a3_f1==1) salah4 = ""+a1_f1+"x + y = \u{2212}"+const1_f1;		if(a1_f1==1) salah4 = "x + "+a3_f1+"y = \u{2212}"+const1_f1;		if(a1_f1==1 && a3_f1==1) salah4 = "x + y = \u{2212}"+const1_f1;
		var salah5 = ""+a1_f2+"x + "+a3_f2+"y = \u{2212}"+const2_f2;		if(a3_f2==1) salah5 = ""+a1_f2+"x + y = \u{2212}"+const2_f2;		if(a1_f2==1) salah5 = "x + "+a3_f2+"y = \u{2212}"+const2_f2;		if(a1_f2==1 && a3_f2==1) salah5 = "x + y = \u{2212}"+const2_f2;
		var salah6 = ""+a1_f1+"x \u{2212} "+a3_f1+"y = \u{2212}"+const1_f1;	if(a3_f1==1) salah6 = ""+a1_f1+"x \u{2212} y = \u{2212}"+const1_f1;	if(a1_f1==1) salah6 = "x \u{2212} "+a3_f1+"y = \u{2212}"+const1_f1;	if(a1_f1==1 && a3_f1==1) salah6 = "x \u{2212} y = \u{2212}"+const1_f1
		var salah7 = ""+a1_f2+"x \u{2212} "+a3_f2+"y = \u{2212}"+const2_f2;	if(a3_f2==1) salah7 = ""+a1_f2+"x \u{2212} y = \u{2212}"+const2_f2;	if(a1_f2==1) salah7 = "x \u{2212} "+a3_f2+"y = \u{2212}"+const2_f2;	if(a1_f2==1 && a3_f2==1) salah7 = "x \u{2212} y = \u{2212}"+const2_f2;
		
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,"\u{2212}"+a3,benar,arrSalah];
	}
	function GambarPG17(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "left";
			ctx.fillText(arr[0],155,80);
			ctx.textAlign = "center";
			ctx.fillText(arr[1],108,170);
		}
		
		return 0;
	}
	function MyPersamaanGarisLurus18(){
		do{
			var a1 = RandomAngkaAtoB(1,10);
			var a2 = RandomAngkaAtoB(1,10);
		}while(a2>=a1)
		
		var mm = a1+"/"+a2;
		var cc = a1;
		var func = ""+mm+" x + "+cc;
		var noABCD = [0,1,2,3];
		noABCD = RandomMyArray(noABCD);
		//noABCD[0] = 3
		var soal =[]
		soal[0] = ""+mm+" x + "+cc;
		soal[1] = "\u{2212}"+mm+" x + "+cc;
		soal[2] = "\u{2212}"+mm+" x \u{2212} "+cc;
		soal[3] = ""+mm+" x \u{2212} "+cc;
		
		
		var _soal = "Grafik fungsi f(x) = "+soal[noABCD[0]]+", dengan x e R adalah ... "
		//console.log(_soal);
		//"(\u{2212}"
		var benar = noABCD[0];
		var salah1 = 0;
		var salah2 = 1;
		var salah3 = 2;
		var salah4 = 3;
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
		}while(benar==arrSalah[0] || benar==arrSalah[1] || benar==arrSalah[2]);
		
		
		return [a1,a2,_soal,benar,arrSalah];
	}
	
	function GambarPG18(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base01_image = new Image();
		let base02_image = new Image();
		let base1_image = new Image();
		let base2_image = new Image();
		let base3_image = new Image();
		let base4_image = new Image();
		base01_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAArCAYAAACXSwEOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAK+SURBVHhe7dsBcqowEAbg5R3HcJzGHofkOBKPQ7hO3i5EnyJIdDst9P1fh6mk4EyXn2SL0yoxAnjTn/wd4C0IEKggQKCCAIEKAgQqCBCoIECgggCBCgIEKggQqCBAoPKFAYoU/JHqY+BXz0VfFx0H2/dFH6ZG8vUnxeZErTV5bEX0VH9GarqWbB6CHZIAFetc4nxI4Hizqe0uwyYZl3de0dpExqU3zoSNeGEJC3SsHfGUwaHjWUMmmmGyCeR52H4Uzjy3bEOOv3zI+zDBNa9q8hte64sDFL2nYBw1Q3IstZelJwQet/ROfiSBhwNR36Mb2quCAEl/U1Ht+CJHR3XFr29uicABkhQ85Ed6HD62qn1ulmUG431unm8djKEYzr+3oS6sw14VBMjwqtWR44TYNknPRF1zHxdjeBq5w6HzRCeZpWKgc5QQBrIdn9/et8xGpqCnxgBXchEWt61O8+V12K2xFVrTJksmzfXJXIcnDXSXOHjcKNvZcwcbbKSlLJrtUUEdBvm4mff8t81fh59S1gNJn0MHXm7y/kSMfX41ZehDeqaDpcmkdRX7pXN/DtdFtT1ar8NIZvvb95I+0xAH5masW3mP71UUoOEiWzv7vMbyOHfB8z0Mr//DX1hLP2c9T+uzPdTVnpewrKAOe1XURJ9DnOlzMgnWsL7n/QseO/L635z4Hsrrf+CB+9YxSk3HEC6a3pVz27buyjtFddgxvgArpP+hxA30oumDROmLZL0fT7ms6+bxPX75g8TiOixa7j23Yj1AcpHlqXPenSfFkcK88Jt2LplrcWGvVgLUjXdR0S3DxzqbDB+7FqNhxio4DrbvyYep8hj9SL11dGqbJ00u/M/wr82gUvYcCGABAgQqCBCoIECgggCBCgIEKggQqCBAoIIAgQoCBCoIEKggQKCCAIEKAgQqCBAoEP0F1bmwx0iQuEMAAAAASUVORK5CYII=";
		base02_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAArCAYAAACXSwEOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKTSURBVHhe7dtbcqMwEAXQZpaDWE7kLMdiOUZZjuTtaLpBtonNQ3anJuC5J0WF94e47lZwpUqMAF70J/8GeAkCBCoIEKggQKCCAIEKAgQqCBCoIECgggCBCgIEKggQqPxggCL59kDNwfPastg2RefB9v3Ql6mR2uaT4vFEnTV534rYUvMZ6Rg6snkX7JAEqFhwifMhgePFpi5cdptkXN54RmcTGZdeuBI24okW5unQOOKSwaHjqiGFpi82nlrebT8KK8+YPZLjn9bnbdifHKRVUmUmq4WyinSWXqtesAkFFUjmNxU1jqe80VFT8Xp7m/56z+WjrodiNCZzHD63ato8WZYKxts8eR6rjaHov953Ql04DntVECDDXSuQ44TYLknFonD8Hhdj6rx2waFriU4yQY6evqKE0JMNfD2XnDHD4Vs2BLiShzC7NDTK9IaUj8NuDYVoTZcsmTTVaZZbUEgcPG5xdvLa3gYn0jIsmuVRwTj08nkT97wt08/ht5RNorlNeaq53eTtOzGe89o9Qx8y264t3RWtq3ieu/b38Liolkfr4zCQaj99z9sSVu7xbxUFqH/I1k6+r7G8n/j4ZAfh/t//hTV3nJ25rE/Ooa723MKygnHYLU71iqGszrepmfYWeL/l1hRcMv3xwN3K8dljw715bvW+isZhvwoCJAFZfsj3LxJlXiT9frjk0tfN4z3e/EVi8Tjs2HqA5CHLW+e8OU0GRwbmiSjIJ/I6uLBXKwGScsufmqKPDJ/rbDJ87lqM+opVcB5s38KXqZ4O1YHO1tGpOy5McuF/hn9tBpUnvkwFeIQAgQoCBCoIEKggQKCCAIEKAgQqCBCoIECgggCBCgIEKggQqCBAoIIAgQoCBApEfwEP8MM4Tb+wFAAAAABJRU5ErkJggg==";
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAETCAYAAAB0scD6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAw2SURBVHhe7d1diJTl+8Dx23RFTdOEDsRQ6OUkUQIl9CiDTiyDXowyIokg6CAoTzSjgoLKyLQXe4MiJfJETEooqNCTyIOMMAqkKIrSoyxQsFLbv/f9f6afru46M/vs7DWznw8sz+wzG/T7uXy95p6r3XH9pySAYC6orgChiBMQkjgBIYkTEJI4ASGJE7U4dOhQmjt3bho3blxav359Onr0aFq6dGn5yI+hVVYJqE0O1MqVK9O2bdvSrFmz0p49e9KiRYvS1KlTq6+A5pmcqE0O0rJly9LWrVv/m5aEiXaJE7W6/vrr0xdffJEOHDiQZs+eXd2F1okTtVq4cGGaPn16euedd8okBe0SJ2q3YsWKdOmll3pJx7A4EKd233//fbleeeWV5QrtMDlRu88++8xLOoZNnKjNqlWryp5TPgj3ko7h8rIOCMnkBIQkTkBI4gSEJE5ASOIEhCRO1G7Xrl3lA4bDKgG1+vHHH9Pll19e9p1++OGHdNlll1XPQGtMTtTq3nvvTRMmTEjjx48vj6Fd4kRtHnjggTIp5Tjlj/w434N2iBO1ePnll9NXX32V3n777epOKo/zvfwctMqZE8P26aefpltuuSXt3bs3zZs3L02ePLncP3bsWPr222/T4sWL0/vvv19+EB00S5yoxfbt28vPccpOj1N2+nPQLHGidgPjBO1w5gSEJE5ASOIEhCROQEjiBIQkTkBI4gSEJE5ASOIEhCROQEjiBIQkTkBI4gSEJE5ASOIEhCROQEjiBIQkTkBI4gSEJE5ASOIEhCROQEjiBIQkTkBI4gSEJE6MmgsuuCA9/vjj1WdwJnFiVCxZsiTl34Q/Z86c6g6cadypb5D+6jHUYvLkyeV67Nixcj2XcePGpQkTJqTjx49Xd+BMJic6bubMmeUqTAxFnOi4P/74479AwWDEiY7q6+sr199//71cYTDiRMe8/vrr6cSJE2nx4sXVHRicA3FqN9iBeF4dyP79999yhaGYnOiIxurAm2++Wd2BoZmcqN25JierA7TK5MSIszpAO8SJEZdXBy6++OLqM2iOODGiGqsDhw8fLldoljgxYt544w2rA7TNgTi1axyI//333+VqdYB2mJwYETlM+e+9PD1BO0xO1C5PTn/99ZfVAYZFnKhd3mnKfGsxHF7WASGJE7Vq/PdzkyZNKldolzhRmzvuuMNLOWrjzInaNM6aGlPTUD+mF87H5EQtLrzwwnK9/fbbyxWGy+RELfLUlD/ywmUzv+AAzsfkxLD5IXKMBHFi2PLw3ThvgrqIE8NiamKkiBNtu/POO8vUNGXKlOoO1MeBOG0b7D9TcSBOHUxOtKWxOrBixYpyhbqZnGjL6asDA5mcqIPJiZY5BKcTxImW5WHb6gAjTZxoiamJThEnmrZy5UqrA3SMA3GaNtjqwEAOxKmDyYmmLFiwoFw3bNhQrjDSTE40JU9N+bzp5MmT1Z3BmZyog8mJ85o2bVq5NhMmqIs4cV5Hjx5NU6dOrT6DzhAnhjR+/PhyPXLkSLlCp4gTg9q0aVPZZ5o/f351BzrHgTiDanZ1YCAH4tTB5MQ5WR1gtJmcOKdWVgcGMjlRB5MTZ7E6QATixFmsDhCBOHWBVatWlZdZS5cuLeHYt29fevDBB6tnz5afy1/TDqsDRCFOwX344YfpqquuKrGYMWNG2rlzZ3rqqafSM888U33F2datW5fuu+++lgO1ceNGqwOEIU7Bfffdd+WaX2a9++676ZNPPkmvvfbakC+7Zs2alT766KP00ksvlUmrWatXry7X/fv3lyuMJnEKbP369Wnt2rXlY+7cuWnHjh3lfo5Pjk5+mdd4uXfzzTeXx/mfaXxNtnv37nI9n8bqwAsvvFCuMNqsEgTXiM2aNWvOeJzlQC1fvjwtW7asfJ41nssGfv1QhrM6MJBVAupgcupi+aXdtm3b0quvvlo+byZC52J1gIjEqcsdPHiwHJRv3ry57XforA4QkTh1kfyuXeOAPDt06FA59P78889LnG699dZyryF/bf5nhmJ1gKjEKbDTD8Tzofc111xT7ucA5Wkn/8KBPXv2lLBs3749/fLLL2nx4sXl+UakrrvuunI9F6sDROZAvMvkl255hymvCjTekRsoh+vuu+9Ojz32WFq4cGF192z5EDyr+1vAgTh1MDl1mRybt956Kz399NPVnbM98sgj5w2T1QGiMzmNUXWuDgxkcqIOJqcxyOoA3UCcxiCrA3QDcRpjrA7QLcRpDLE6QDdxID6GjNTqwEAOxKmDyWmMsDpAtzE5jREjuTowkMmJOpicxgCrA3QjcRoDrA7QjcSpx1kdoFuJUw+zOkA3cyDewzq1OjCQA3HqYHLqUY1A5F98AN3I5NSj8tSUP/LLuk4zOVEHk1MPyvtM2WiECeoiTj0oD8ON8yboVuLUY0xN9Apx6iH58DtPTZMmTaruQPdyIN5DRmt1YCAH4tTB5NQjrA7Qa0xOPWI0VwcGMjlRB5NTD3AITi8Spx6Qh1+rA/QacepypiYiyT+eJ//q/PyXZb7mM9D8OP9q/VaFidNzzz1XPaJZVgfohBtvvLF6dH7554bt2rUrXXvttWnZsmVpyZIl6dlnn01r1qypvqIF+UB8tN122239p+rav3r16uoOzch/fEH+CM9wKpblg+63cOHC8j02e/bs6k5zDh482D9nzpz+U2Gq7rRu1CenefPmpY8//jjt3LkzbdiwobrL+VgdoBO+/PLLtG7duvTbb7+1NKGfilOaMWNG2rx5c9q3b191t0VVpDpu9+7d/dOnT++/4oor+k+ePFndpVn5jy5PmxGZnHrP8ePH+/v6+sr33MaNG6u755anpnvuuaf/yJEj/R988EGZoPK9Vo3KntMTTzyRnnzyyXJQ1vgxsjTvxIkT5TphwoRyjSb6vx/ta/zZ5jOlPXv2lMenywfiy5cvTz/99FPau3dvWrt2bdq6dWs6Fajy+axZs6qvPD/v1gG1yQfiOVo///xzCdGWLVvKmzaNz1sxahvi+X9APi+55JJL0oEDB/57S5yh5Ukzrw2M0h9bU2yI9548MU2ZMqVc8y9mfeihh6pnRs6oFSHvQPz5559p4sSJ6aKLLkqnXptWzzCYTZs2lTD5hQV00qOPPpr6+vrKAJG//zoRpizEf1u3YsWKtGPHjvTwww97x24I+Ywuizw1ZSan3rFo0aLybtvs2bPTr7/+Wt3tjBCvpbZv314WtYRpcAsWLChX/x/RSXmV4IYbbuh4mDI/laBL5Kkpj9Xd8CvFTU7UwSl0F5g2bVq5dkOYoC7i1AXy7kh+ixbGEnEKrrGkeuTIkXKFsUKcAnvxxRetDjBmORAPrFtWBwZyIE4dTE5BNVYHnn/++XKFscbkFFQ3rQ4MZHKiDiangKwOgDiFZHUAxCkcqwPw/8QpEKsD8D/iFEj+gVzZ/v37yxXGMu/WUTvv1lEHkxMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOAEhiRMQkjgBIYkTEJI4ASGJExCSOFGLm266qXp0tqGeg8GIE8N2//33p127dqVXXnmluvM/+V5+Ln8NtGJc/ynVY2jb1Vdfnb755pv0zz//pKlTp5Z7R48eTRMnTkzz589PX3/9dbkHzRInajNz5sx08uTJEqgsh2n8+PHp8OHD5XNohThRq76+vhKoLIfp+PHj5TG0ypkTtdqyZUvKf9/lj/wY2mVyonZ33XVXub733nvlCu0QJyAkL+uAkMQJCEmcgJDECQhJnICQxAkISZyAkMQJCEmcgJDECQhJnICAUvo/gzPnq8UMQ/4AAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,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";
		base3_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAETCAYAAAB0scD6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAxaSURBVHhe7d1diJRlGwfwe1tX1DTN6ECMhD5OEiNQQo8y6MQy0rIPI7IIgogg90QpIugogz7I1IM+UIk8EYsSCir0JPQgI5ICKYqk9MwCBSvd9t375pn3tV53d2b32d1rZn4/GO5n7xmhmIf/Xs/1XDvTMzgkAQRzSbUChCKcgJCEExCScAJCEk5ASMKJWpw8eTItWrQo9fT0pC1btqQzZ86klStXlkc+hlYZJaA2OaDWr1+f9uzZkxYsWJAOHjyYli1blmbPnl29ApqncqI2OZBWrVqVdu/e/d9qSTAxVsKJWt12223p0KFD6dixY2nhwoXVLrROOFGrpUuXprlz56adO3eWSgrGSjhRu3Xr1qWrrrrKJR3joiFO7b7//vuyXn/99WWFsVA5UbvPP//cJR3jJpyozYYNG8qcU26Eu6RjvFzWASGpnICQhBMQknACQhJOQEjCCQhJOFG7/fv3lweMh1ECavXjjz+ma6+9tsw7/fDDD+maa66pnoHWqJyo1aOPPpqmTZuWent7yzGMlXCiNk888USplHI45Uc+znswFsKJWmzdujV99dVX6Z133ql2UjnOe/k5aJWeE+P22WefpbVr16bDhw+nxYsXp5kzZ5b9s2fPpm+//TYtX748vf/+++WD6KBZwola7N27t3yOU3ZhOGUXPgfNEk7U7t/hBGOh5wSEJJyAkIQTEJJwAkISTkBIwgkISTgBIQknICThBIQknICQhBMQknACQhJOQEjCCQhJOAEhCScgJOEEhCScgJCEExCScAJCEk5ASMIJCEk4ASEJJyAk4QSEJJyAkIQTEJJwAkISTkBIwgkISTgBIQknICThBIQknICQhBMQknACQhJOQEjCCQhJOAEhCScgJOEEhCScgJCEExCScAJCEk5ASMIJCEk4ASEJJyAk4QSEJJyAkIQTEJJwAkISTkBIwgkISTgBIQknICThBIQknICQhBMQknACQhJOQEjCCQhJOAEhCScgJOEEhCScgJCEExCScAJCEk5ASMIJCEk4ASEJJyAk4QSEJJyAkIQTEJJwAkISTkBIwgkISTgBIQknICThBIQknICQ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";
		base4_image.src = "data:image/png;base64,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";
		
		ctx.font = "16px Times New Roman";
		var dy=40
		base01_image.onload = function () {
			CekJawA();
		}	
		base02_image.onload = function () {
			CekJawA();
		}	
		
		var inside=0;
		function CekJawA(){
			inside++;
			if(inside==2){
				
				ctx.textAlign = "left";
				if(arr[0]==1 || arr[0]==0)	ctx.drawImage(base01_image, 82, 0,base01_image.width, base01_image.height);
				else						ctx.drawImage(base02_image, 82, 0,base02_image.width, base02_image.height);
				ctx.fillText("Grafik fungsi",0,25)
				ctx.fillText("dengan x \u{2208} R adalah ... ",218,25)
				if(arr[0]==1){
					ctx.fillText("\u{2212}",140,25)
				}else if(arr[0]==2){
					ctx.fillText("\u{2212}",140,25)
					ctx.fillText("\u{2212}",140,25)
				}
				ctx.textAlign = "center";
				ctx.fillText(arr[1],158,12)
				ctx.fillText(arr[2],158,36)
				ctx.textAlign = "left";
				ctx.fillText(arr[1],195,25)
			}
		}
		
		base1_image.onload = function () {
			CekJawB();
		}	
		base2_image.onload = function () {
			CekJawB();
		}
		base3_image.onload = function () {
			CekJawB();
		}
		base4_image.onload = function () {
			CekJawB();
		}	
		
		var inside=0;
		function CekJawB(){
			inside++;
			if(inside==4){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				//ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				//ctx.drawImage(base2_image, 0, 0,base2_image.width, base2_image.height);
				for(var i=0;i<4;i++){
					if(i==0){
						ctx.textAlign = "left";
						ctx.drawImage(base1_image, 0, 275*i+dy,base1_image.width, base1_image.height);
						ctx.textAlign = "center";
						ctx.fillText("\u{2212}"+arr[2],117,160+275*i+dy);
						ctx.fillText(arr[1],160,80+275*i+dy)
					}else if(i==1){
						ctx.textAlign = "left";
						ctx.drawImage(base2_image, 0, 275*i+dy,base2_image.width, base2_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arr[2],185,160+275*i+dy);
						ctx.fillText(arr[1],160,72+275*i+dy)
					}else if(i==2){
						ctx.textAlign = "left";
						ctx.drawImage(base3_image, 0, 275*i+dy,base3_image.width, base3_image.height);
						ctx.textAlign = "center";
						ctx.fillText("\u{2212}"+arr[2],100,160+275*i+dy);
						ctx.fillText("\u{2212}"+arr[1],165,220+275*i+dy)
					}else{
						ctx.textAlign = "left";
						ctx.drawImage(base4_image, 0, 275*i+dy,base4_image.width, base4_image.height);
						ctx.textAlign = "center";
						ctx.fillText(arr[2],195,160+275*i+dy);
						ctx.fillText("\u{2212}"+arr[1],165,220+275*i+dy)
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,30+275*i+dy);
				}
			}
		}
		return 0;
	}
	function MyPersamaanGarisLurus19(){
		//10. Gradien garis singgung yang mempunyai persamaan 7x - 4y + 9 = 0 adalah...
		
		//(A) 6y-2x=8 a1,b1,c1
		//(B) 3y-x=7  a2,b2,c2
		//(C) 3=y-x   a3,b3,c3
		//(D) x=5+3y  a4,b4,c4
		do{
			var a1 = RandomAngkaAtoB(1,19);
			var a2 = RandomAngkaAtoB(1,19);
			var a3 = RandomAngkaAtoB(1,19);
			var fpb1 = CariFPB([a1,a2]);
			var fpb2 = CariFPB([a1,a3]);
			var fpb3 = CariFPB([a2,a3]);
			var b1 = a1/fpb1;
			var c1 = a2/fpb1;
			var b2 = a1/fpb2;
			var c2 = a3/fpb2;
			var b3 = a2/fpb3;
			var c3 = a3/fpb3;
		}while(a1==a2 || a1==a3 || a2==a3)
		
		//"\u{2212}"
		
		var benar = [b1+"/"+c1,[1,b1,c1]];
		if(c1==1)	benar = [b1,[1,b1,1]];
		var salah1 = ["\u{2212}"+b1+"/"+c1,[-1,b1,c1]];
		if(c1==1)	salah1 = ["\u{2212}"+b1,[-1,"\u{2212}"+b1,1]];
		var salah2 = [c1+"/"+b1,[1,c1,b1]];
		if(b1==1)	salah2 = [c1,[1,c1,1]];
		var salah3 = ["\u{2212}"+c1+"/"+b1,[-1,c1,b1]];
		if(b1==1)	salah3 = ["\u{2212}"+c1,[-1,"\u{2212}"+c1,1]];
		var salah4 = [b2+"/"+c2,[1,b2,c2]];
		if(c2==1)	salah4 = [b2,[1,b2,1]];
		var salah5 = ["\u{2212}"+b2+"/"+c2,[-1,b2,c2]];
		if(c2==1)	salah5 = ["\u{2212}"+b2,[-1,"\u{2212}"+b2,1]];
		var salah6 = [c2+"/"+b2,[1,c2,b2]];
		if(b2==1)	salah6 = [c2,[1,c2,1]];
		var salah7 = ["\u{2212}"+c2+"/"+b2,[-1,c2,b2]];
		if(b2==1)	salah7 = ["\u{2212}"+c2,[-1,"\u{2212}"+c2,1]];
		var salah8 = [b3+"/"+c3,[1,b3,c3]];
		if(c3==1)	salah8 = [b3,[1,b3,1]];
		var salah9 = ["\u{2212}"+b3+"/"+c3,[-1,b3,c3]];
		if(c3==1)	salah9 = ["\u{2212}"+b3,[-1,"\u{2212}"+b3,1]];
		var salah10 = [c3+"/"+b3,[1,c3,b3]];
		if(b3==1)	salah10 = [c3,[1,c3,1]];
		var salah11 = ["\u{2212}"+c3+"/"+b3,[-1,c3,b3]];
		if(b3==1)	salah11 = ["\u{2212}"+c3,[-1,"\u{2212}"+c3,1]];
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11];
		arrSalah = RandomMyArray(arrSalah);
		
		return [a1,a2,a3,benar,arrSalah];
	}
	
	function GambarPG19(nmcanvas,arrs){
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
	function GetSoal1(){
		const Aljabar = MyPersamaanGarisLurus1();
		//[pgl1,pgl2,pgl3,pgl4,benar,arrSalah];
		var pgl1=Aljabar[0];
		var pgl2=Aljabar[1];
		var pgl3=Aljabar[2];
		var pgl4=Aljabar[3];
		var benar=Aljabar[4];
		var arrSalah=Aljabar[5];
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...

		var ss
		ss = "Perhatikan persamaan garis berikut! <br>";
		ss += "(1) "+pgl1+"<br>";
		ss += "(2) "+pgl2+"<br>";
		ss += "(3) "+pgl3+"<br>";
		ss += "(4) "+pgl4+"<br>";
		ss += "Pasangan garis yang sejajar adalah ... ";
		
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
		const Aljabar = MyPersamaanGarisLurus2();
		//[benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		const DrawPGL = GambarPG2(canv,[a1,a2]);
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		
		var ss
		ss = "Perhatikan gambar di atas! ";
		ss = "Koordinat titik potong garis <i>k</i> dengan sumbu-x adalah ... ";
		
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
	function GetSoal3(canv){
		const Aljabar = MyPersamaanGarisLurus3();
		//[dxx,dyy,benar,arrSalah];
		var dxx=Aljabar[0];
		var dyy=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		//const DrawPGL = GambarPG3("myCanvasPGL3",dxx,dyy);
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		var ss
		ss = "Gradien garis PQ adalah... ";
		
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
		const DrawPGL = GambarPG3(canv,dxx,dyy,Ar);
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyPersamaanGarisLurus4();
		//[dxx,dyy,benar,arrSalah];
		var dxx=Aljabar[0];
		var dyy=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		
		var ss
		ss = "Gradien garis yang tegak lurus PQ adalah... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		const DrawPGL = GambarPG4(canv,dxx,dyy,Ar);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MyPersamaanGarisLurus5();
		//[benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var a3=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		const DrawPGL = GambarPG5(canv,[a1,a2,a3]);
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		var ss
		ss = "Perhatikan gambar di atas! ";
		ss = "Persamaan garis <i>k</i> adalah ... ";
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
	function GambarPG5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "right";
			ctx.fillText(arr[0],123,67);
			ctx.textAlign = "center";
			ctx.fillText(arr[1],195,165);
			ctx.fillText(arr[2],91,165);
		}
		return 0;
	}
	function GetSoal6(canv,canv2){
		const Aljabar = MyPersamaanGarisLurus6();
		//[benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		const DrawPGL = GambarPG6(canv,[a1,a2]);
		
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		
		var ss
		ss = "Gambar di atas adalah gambar sebuah tangga yang disandarkan pada dinding tembok. <br>";
		ss += "Gradien tangga tersebut terhadap lantai adalah ... ";
		
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
		
		const DrawPGL2 = GambarPG6b(canv2,Ar);
		
		return ArFix;
	}
	 
	function GetSoal7(){
		const Aljabar = MyPersamaanGarisLurus7();
		//[benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var a3=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		//Persamaan garis yang melalui titik (3,1) dan tegak lurus dengan garis yang bergradien 3 adalah ...
		var ss
		ss = "Persamaan garis yang melalui titik ("+a1+", "+a2+") ";
		ss += "dan tegak lurus dengan garis yang bergradien "+a3+" adalah ... ";
		
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
		const Aljabar = MyPersamaanGarisLurus8();
		//[aa,bb,cc,benar,arrSalah];
		var aa=Aljabar[0];
		var bb=Aljabar[1];
		var cc=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		//8. Diberikan persamaan garis lurus p, q, dan r. 
		//Dimana garis p: y = ax + 1 tegak lurus dengan garis r, 
		//dan gradien garis r merupakan jumlah kuadrat dari gradien garis q dan 1. 
		//Jika garis q: 3y - 6x = 3, maka diperoleh nilai a = ...
		
		var ss
		ss = "Diberikan persamaan garis lurus <i>p</i>, <i>q</i>, dan <i>r</i>. <br>";
		ss += "Dimana garis <i>p</i>: <i>y</i> = <i>ax</i> + 1 tegak lurus dengan garis <i>r</i>, ";
		ss += "dan gradien garis <i>r</i> merupakan jumlah kuadrat dari gradien garis <i>q</i> dan 1. <br>";
		ss += "Jika garis <i>q</i>: "+aa+" <i>y</i> \u{2212} "+bb+" <i>x</i> = "+cc+" , maka diperoleh nilai <i>a</i> = ... ";
		
		
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
	function GetSoal9(canv){
		const Aljabar = MyPersamaanGarisLurus9();
		//[pp,benar,arrSalah];
		var pp=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//9. Semua persamaan garis lurus di bawah ini mempunyai gradien 1/3 kecuali:
		
		var ss
		//ss = "Semua persamaan garis lurus di bawah ini mempunyai gradien 1/"+pp+" kecuali: ";
		ss = "kecuali: ";
		ss = "";
		
		const DrawPGL = GambarPG9(canv,[1,pp]);
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
		const Aljabar = MyPersamaanGarisLurus10();
		//[a1,a2,a3,arrBenar[0],arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var a3=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		//9. Gradien garis singgung yang mempunyai persamaan 7x - 4y + 9 = 0 adalah...
		
		var ss
		ss = "Gradien garis singgung yang mempunyai persamaan "+a1+"x \u{2212} "+a2+"y + "+a3+" = 0 adalah ... ";
		
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
	function GetSoal11(){
		const Aljabar = MyPersamaanGarisLurus11();
		//[str,benar,arrSalah];
		var str=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//11. Manakah garis-garis di bawah ini yang sejajar?
		//garis p: y=3x-2
		//garis q: y=3x-6
		//garis r: y=2x-5
		//garis s: y=5x-2
		var ss
		ss = "Manakah garis-garis di bawah ini yang sejajar?<br>";
		ss+= str;
		
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
		const Aljabar = MyPersamaanGarisLurus12();
		//[str,benar,arrSalah];
		var str=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//12. Garis y = a dan garis x = b akan berpotongan di titik:
		var ss
		ss = "Garis y = a dan garis x = b akan berpotongan di titik:";
		
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
		const Aljabar = MyPersamaanGarisLurus13();
		//[pp,benar,arrSalah];
		var pp=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//9. Semua persamaan garis lurus di bawah ini mempunyai gradien 1/3 kecuali:
		var ss
		ss = "Semua persamaan garis lurus di bawah ini mempunyai gradien "+pp+", <i>kecuali</i>: ";
		
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
	function GetSoal14(){
		const Aljabar = MyPersamaanGarisLurus14();
		//[str,benar,arrSalah];
		var str=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		//11. Manakah garis-garis di bawah ini yang sejajar?
		//garis p: y=3x-2
		//garis q: y=3x-6
		//garis r: y=2x-5
		//garis s: y=5x-2
		var ss
		ss = "Diketahui persamaan-persamaan garis lurus:<br>";
		ss+= str;
		ss+= "Garis-garis yang saling tegak lurus adalah ..."

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
		const Aljabar = MyPersamaanGarisLurus15();
		//[garis1,garis2,benar,arrSalah];
		var garis1=Aljabar[0];
		var garis2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		//15. Garis 4x – 5y = 1 dan 3x + ay = 2 tidak berpotongan untuk nilai a = ...
		
		var ss
		ss = "Garis "+garis1+" dan "+garis2+" tidak berpotongan untuk nilai a = ...";
		
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
	function GetSoal16(){
		const Aljabar = MyPersamaanGarisLurus16();
		//[titik1,titik2,benar,arrSalah];
		var titik1=Aljabar[0];
		var titik2=Aljabar[1];
		var benar=Aljabar[2];
		var arrSalah=Aljabar[3];
		
		var ss
		ss = "Garis g memotong sumbu koordinat di titik "+titik1+" dan "+titik2+". <br>";
		ss+= "Jika titik (a, b) terletak pada garis g, maka berlaku:";

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
		const Aljabar = MyPersamaanGarisLurus17();
		//[benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var a3=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		const DrawPGL = GambarPG17(canv,[a1,a3]);
		
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...

		var ss
		//ss = "Perhatikan gambar di atas! ";
		ss = "Persamaan garis <i>k</i> adalah ... ";
		
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
	function GetSoal18(canv){
		const Aljabar = MyPersamaanGarisLurus18();
		//[a1,a2,benar,arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var soal=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		
		//1. Perhatikan persamaan garis berikut!
		//(1) 4y = 16x + 40
		//(2) 12y = 24x + 36
		//(3) 6y = 24x + 30
		//(4) 6y = -12x + 30
		//Pasangan garis yang sejajar adalah ...
		var ss
		ss = "Grafik fungsi f(x) = 2x + 2, dengan x \u{2208} R adalah ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		Ar.sort(function(a, b){return a-b});
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
		
		const DrawPGL = GambarPG18(canv,[noBenar,a1,a2]);
		
		return ArFix;
	}
	function GetSoal19(){
		const Aljabar = MyPersamaanGarisLurus19();
		//[a1,a2,a3,arrBenar[0],arrSalah];
		var a1=Aljabar[0];
		var a2=Aljabar[1];
		var a3=Aljabar[2];
		var benar=Aljabar[3];
		var arrSalah=Aljabar[4];
		var TheData=Aljabar[5];
		
		//9. Gradien garis dengan persamaan 7x - 4y + 9 = 0 adalah...
		
		var ss
		ss = "Gradien garis dengan persamaan "+a1+"x \u{2212} "+a2+"y + "+a3+" = 0 adalah ... ";
		
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
					GetSoal10,
					GetSoal11,
					GetSoal12,
					GetSoal13,
					GetSoal14,
					GetSoal15,
					GetSoal16,
					GetSoal17,
					GetSoal18,
					GetSoal19];
	
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
	
	
	
	dd1.innerHTML="<p>Bab 8 \u{2192} Persamaan Garis Lurus </p>";
	if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 264;
		cc1.height = 269;
		ss = namefunc[no-1](cc1.id);;
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 200;
		cc1.height = 400;
		ss = namefunc[no-1](cc1.id);;
		//document.write("<p>"+ss[0]+"</p>");
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 200;
		cc1.height = 400;
		ss = namefunc[no-1](cc1.id);;
		//document.write("<p>"+ss[0]+"</p>");
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar di bawah ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar di bawah ini!</p>";
		cc1.width = 300;
		cc1.height = 280;
		ss = namefunc[no-1](cc1.id);;
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 300;
		cc1.height = 220;
		
		dd2.innerHTML="<br>Gambar di atas adalah gambar sebuah tangga yang disandarkan pada dinding tembok. <br>";
		dd2.innerHTML+="Gradien tangga tersebut terhadap lantai adalah ... <br>";
		cc2.width = 300;
		cc2.height = 190;
		
		ss = namefunc[no-1](cc1.id,cc2.id);;
		//document.write("<p>"+ss[0]+"</p>");
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 300;
		cc1.height = 190;
		const DrawPGL8 = GambarPG8(cc1.id,ss[2]);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==9){
		//document.write("<p>"+urut+". Semua persamaan garis lurus di bawah ini mempunyai gradien");
		cc1.width = 520;
		cc1.height = 32;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 300;
		cc1.height = 190;
		const DrawPGL10 = GambarPG10(cc1.id,ss[2]);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==15){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 300;
		cc1.height = 190;
		const DrawPGL15 = GambarPG15(cc1.id,ss[2]);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut :</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut :</p>";
		cc1.width = 300;
		cc1.height = 280;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan fungsi berikut :</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan fungsi berikut :</p>";
		cc1.width = 450;
		cc1.height = 1130;
		ss = namefunc[no-1](cc1.id);
		dd4.innerHTML="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==19){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 179;
		cc1.height = 190;
		const MyGambar19 = GambarPG19(cc1.id,ss[2]);
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
