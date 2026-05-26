function Print72(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
		var Ar = ["Jawa","Sumatera","Sulawesi","Kalimantan","Papua","Riau","Maluku","Sumbawa","Flores"];
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
	
	function CariKPK(ar){
		var min = 1000000;
		var max = 0;
		for(var i=0;i<ar.length;i++){
			min = Math.min(min,ar[i]);
			max = Math.max(max,ar[i]);
		}
		
		var iter = min;
		var kpk = 1;
		var f = [];
		do {
			iter++;
			ff = 1;
			for(var i=0;i<ar.length;i++){
				f[i] = Mods(iter,ar[i])==0;
				ff *= f[i];
			}
			
			if (ff){
				kpk = iter;
			}
		}while (!ff);
		
		return kpk;
	}
	function SortAtoZ(ar){
		ar.sort(function(a, b){return a-b});
		return ar
	}
	function SortZtoA(ar){
		ar.sort(function(a, b){return b-a});
		return ar
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
	//============================================================================
	
	function GambarSoalRasional1(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],98,24);
				ctx.fillText(arr[1],98,48);
				ctx.fillText(arr[2],140,24);
				ctx.fillText(arr[3],140,48);
				
				ctx.fillText(arr[4],98,71);
				ctx.fillText(arr[5],98,95);
				ctx.fillText(arr[6],140,71);
				ctx.fillText(arr[7],140,95);
			}
		}
		return 0;
	}
	function GambarJawabRasional1(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional1(){
		var cc = RandomAngkaAtoB(2,5);
		var aa = 2*cc-1;
		var bb = 2*cc;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xxx = [];
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = [aa+2,aa-2];
			var xx1 = [aa+2+ar_er[0],aa-2];
			var xx2 = [aa+2+ar_er[1],aa-2];
			var xx3 = [aa+2+ar_er[2],aa-2];
			xxx = [xx,xx1,xx2,xx3];
			var ft = xx1[0] < 0 || xx2[0] < 0 || xx3[0] < 0;
		}while(ft);
		
		var xfix = []
		for(var i=0;i<4;i++){
			xfix[i] = [];
			xfix[i][0] = Math.floor(xxx[i][0]/xxx[i][1]);
			xfix[i][1] = xxx[i][0]%xxx[i][1];
			xfix[i][2] = xxx[i][1];
			if(xfix[i][1]==0){
				xfix[i][1] = "";
				xfix[i][2] = "";
			}
		}
		
		var csoal = [2*cc-1,2*cc,1,cc,2*cc-1,2*cc,1,cc]
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal1(canv){
		const Rasional = MyRasional1();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional1(canv,ArSisi[1]);
		var ss
		ss = "Dalam sebuah kotak terdapat "+ArSisi[1][0]+" bola yang bertuliskan angka "+ArSisi[1][1]+". Peluang terambilnya angka "+ArSisi[1][2]+" adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional2(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAAA8CAYAAABRscAOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAS8SURBVHhe7dy/lppMGMfxx/dadIv37BXAFZg0qXIJWGqzXUo7Gy3dLm2qNMEr0CvwbLFwL2RGwIA7KwijPpt8P+fMSfgzMKuZX+CBZJAZAgC4u/+KXwEAd0YgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgA4ASBDIAKEEgo4WNrMKBDAahTFZpsQ6Ab4PMKH4POKWrUEazXbEUSZytZVwsAfBH3RWynfyDgb0am5jrsvY2E9vHtHAlXMMBf4dL53XX/OjazzdHIG9kchhY3ibH0aXFbWveQl+3rptJ7UMYTreSLINiqb3xOpM4KhZ8OBnXv2w4/Sb5VxJItHzi6hg3c+m87pofXfv55gjksayz2NyYmum3TGR9nH1DmW6TfGJGsWynw3z1FQwfHovfXWb0//0/0L/T2Hz3mWTZVtZX/N4Bl0vnddf86NrPp/uXLMZrM9EV1iQVjqu8O/HZPhrXz9C3nVe/Y+zU7lRGc46lZ8N1eQrkVDariYTHLy6slDqM1PyhrpQ7jtsPZYF8uUsFJD055+JHseHozLhq5zb7TYoakp08PccF4D0NWWH0mtfvuqRPKqsyD26cAR4C2daWRzKXL/I9M7e1SSxRsJPneXlVYMJ49En2XxNzxWlve23Zo3hib69COxZ+8yf/e/ma2GPa834T2ZVvAlgN46qc+2WxkNen7xKXNaQe47qm/PPz29rR89qb62fo286zJTx3v9ZtO5V7FHqcY+nZ+mnKCg/z2umSPs8yn/ySz+utOX+eVbNFY9r7Y35ohzgzcWQ/fXeL4mI/t2QZmP0icxQrP1awTA5Lb8SR2TfIapsP68r+LklmsvPNMU2GZhIszVa3+rgM17lL57b9Y/LPrfz+z30vwGXqc9LnvD7/5/RNH8vRr+ncvp29QrYP9cw+lVY81LvIWJ5Mp91sJINwIquNhyus9Jf8MH9pPj7Urzt4qAd8YArn9a3P7aeGbGuwtj4ThqYNKv+IIGdfKbG3CcvHvcw+5cF8k5uAhnGhHV57gzc+5mSXY3yQLOgfyOlKwtFIfj48yXa7NS1zv883HMvU1mWSpUS7Z5n3qUUOH8S+oLJ/rR8jeal8yG3HhRZ47Q0eNM3Ja83rD5QF/QM5eZGduXIyn+ZhMd2s6k9F7RsL4UqqlYq9aae3JVXpq91jLyffS8VYvkQiu9nieFz7ZsTcdis1jQvAbTXOST/z+k1+tMwCV+7U/jJwKl6LPL7aaB8gnltuYAvJdfUHen+e3+UF93L9n8K7WR+VD32CLLLrD8Vxs2yL4ckyCyr97D7Bsjio3XZcXxTTy77VdU4n542TolBvlg9F+BbjOmzLt9eeI7jGBaCnhjnp2ufSee3MjxbndfQ7nre63xtFXlbHb/Pu3eXz+M+FAEAJPw/1AAC9EcgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDABKEMgAoASBDAAqiPwGaQuoVVqXZUgAAAAASUVORK5CYII=";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],95,34);
				ctx.fillText(arr[1],117,23);
				ctx.fillText(arr[2],117,45);
				ctx.fillText(arr[3],95+65,34);
				ctx.fillText(arr[4],117+65,23);
				ctx.fillText(arr[5],117+65,45);
				ctx.fillText(arr[6],95+140,34);
				ctx.fillText(arr[7],117+140,23);
				ctx.fillText(arr[8],117+140,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional2(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20+5, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47+5,12+40*i);
							ctx.fillText(arrs[i+2][2],47+5,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional2(){
		var angka = [2,3,4,5,6,7,8,9,10];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = angka[1];
		var cc = angka[2];
		var dd = angka[3];
		var res1 = (aa*bb+aa)*dd - (cc*dd+1)*(aa+bb);
		var res2 = (aa+bb)*dd;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xxx = [];
			ar_er = RandomMyArray(ar_er);
			var xx = [res1,res2];
			var xx1 = [res1+ar_er[0],res2];
			var xx2 = [res1+ar_er[1],res2];
			var xx3 = [res1+ar_er[2],res2];
			xxx = [xx,xx1,xx2,xx3];
		
		var xfix = []
		for(var i=0;i<4;i++){
			xfix[i] = [];
			//\u{2212} \u{2212}
			xfix[i][0] = Math.floor(Math.abs(xxx[i][0])/xxx[i][1]);
			xfix[i][1] = Math.abs(xxx[i][0])%xxx[i][1];
			xfix[i][2] = xxx[i][1];
			if(xxx[i][0]<0){
				if(xfix[i][0]==0)	xfix[i][0] = "\u{2212}";
				else 				xfix[i][0] = "\u{2212}"+Math.abs(xfix[i][0]);
			}
			var FPB = CariFPB([xfix[i][1],xfix[i][2]]);
			
			if(FPB>1){
				xfix[i][1] = xfix[i][1]/FPB;
				xfix[i][2] = xfix[i][2]/FPB;
			}
		}
		
		var csoal = [aa,aa,bb,1,aa,bb,cc,1,dd];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal2(canv){
		const Rasional = MyRasional2();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional2(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	
	//==================================================================
	
	function GambarSoalRasional3(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],95+90,26);
				ctx.fillText(arr[1],117+90,15);
				ctx.fillText(arr[2],117+90,37);
				ctx.fillText(arr[3],95+90,26+37);
				ctx.fillText(arr[4],117+90,15+37);
				ctx.fillText(arr[5],117+90,37+37);
				ctx.fillText(arr[6],95+90,26+74);
				ctx.fillText(arr[7],117+90,15+74);
				ctx.fillText(arr[8],117+90,37+74);
			}
		}
		return 0;
	}
	function MyRasional3(){
		var angka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			angka = RandomMyArray(angka);
			var ct = RandomAngkaAtoB(1,9);
			var ab = ct*RandomAngkaAtoB(1,5);
			var aa = angka[0];
			var bb = angka[1];
			var cc = angka[2];
			var dd = angka[3];
			var cb = cc-bb;
			var ee = angka[4];
			var ff = angka[5];
			var res1 = aa+dd + 1;
			var res2 = ee*ff + 1;
			var res = (res1/res2) * ff;
			var ft1 = cb <= 0;
			var ft2 = res1%res2!==0;
			var ft = ft1 || ft2 || Math.round(res)==0;
		}while(ft)
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = Math.round(res);
			var xx1 = xx+ar_er[0];
			var xx2 = xx+ar_er[1];
			var xx3 = xx+ar_er[2];
			var ft = xx1<=0 || xx2<=0 || xx3<=0;
		}while(ft)
		
		var xxx = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb,cc,dd,cb,cc,ee,1,ff];
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var ArSisi = csoal;
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal3(canv){
		const Rasional = MyRasional3();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional3(canv,ArSisi);
		var ss
		ss = "Banyak warga yang menerima sumbangan terigu tersebut adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" orang<br>B. "+Ar[1]+" orang<br>C. "+Ar[2]+" orang<br>D. "+Ar[3]+" orang</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional4(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],95+143,26);
				ctx.fillText(arr[1],117+143,15);
				ctx.fillText(arr[2],117+143,37);
				ctx.fillText(arr[3],95+212,26+37);
				ctx.fillText(arr[4],117+212,15+37);
				ctx.fillText(arr[5],117+212,37+37);
				ctx.fillText(arr[6],95+100,26+74);
				ctx.fillText(arr[7],117+100,15+74);
				ctx.fillText(arr[8],117+100,37+74);
			}
		}
		return 0;
	}
	function GambarJawabRasional4(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20+5, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47+5,12+40*i);
							ctx.fillText(arrs[i+2][2],47+5,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional4(){
		var angka = [2,3,4,5,6,7,8,9,10,11,12];
		do{
			angka = RandomMyArray(angka);
			var aa = angka[0];
			var bb = angka[1];
			var cc = angka[2];
			var dd = angka[3];
			var ee = angka[4];
			var ff = angka[5];
			var gg = angka[6];
			var hh = angka[7];
			var ii = angka[8];
			var res1 = (aa*cc+bb)*ff*ii + (dd*ff+ee)*cc*ii - (gg*ii+hh)*cc*ff;
			var res2 = cc*ff*ii;
			var ft1 = bb>cc || ee>ff || hh>ii;
			var ft2 = res2>210;
			var ft = ft1 || ft2;
		}while(res1<=0 || ft);
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xxx = [];
		//do{
			ar_er = RandomMyArray(ar_er);
			var xx = [res1,res2];
			var xx1 = [res1+ar_er[0],res2];
			var xx2 = [res1+ar_er[1],res2];
			var xx3 = [res1+ar_er[2],res2];
			xxx = [xx,xx1,xx2,xx3];
			var ft = xx[0]<0 || xx1[0]<0 || xx2[0]<0 || xx3[0]<0;
		//}while(xx);
		
		var xfix = []
		for(var i=0;i<4;i++){
			xfix[i] = [];
			//\u{2212}
			xfix[i][0] = Math.floor(Math.abs(xxx[i][0])/xxx[i][1]);
			xfix[i][1] = Math.abs(xxx[i][0])%xxx[i][1];
			xfix[i][2] = xxx[i][1];
			if(xxx[i][0]<0){
				if(xfix[i][0]==0)	xfix[i][0] = "\u{2212}";
				else 				xfix[i][0] = "\u{2212}"+Math.abs(xfix[i][0]);
			}
			var FPB = CariFPB([xfix[i][1],xfix[i][2]]);
			
			if(FPB>1){
				xfix[i][1] = xfix[i][1]/FPB;
				xfix[i][2] = xfix[i][2]/FPB;
			}
		}
		
		var csoal = [aa,bb,cc,dd,ee,ff,gg,hh,ii];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal4(canv){
		const Rasional = MyRasional4();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional4(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	
	//==================================================================
	
	function GambarSoalRasional5(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		let a_image1 = new Image();
		let a_image2 = new Image();
		let a_image3 = new Image();
		let a_image4 = new Image();
		//panjang
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAA+CAYAAAA71+DtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGQSURBVHhe7dqxVcJQGIbhP87CsXICmQArt6CkcgMHgFI7N6CSCdjATnaJkZMBKLw5yefzNMm5A7zfPYSuHxQAi3c3PgFYOEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIISgA4QQdIAQgg4QQtABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEFv4XKodddVtz7UZTwCaE3QWT4DCleCDtzOeM6aoLew2tW576s/72o1HgG0JugsnwGFq64fjO8ALJgbOkAIQW/iVFsfjoCJCToBDCj8EvSWHu59pCOM8ZwzQW/hdKz3eqz9y2Y8YBIGlH9O0P/ccIN5rfr8PtdOXaZhQKdnPGfJ3xZZuGFA18d6/nirjcK0d9pW9/RVexeWWRJ04EbGc+4EHSCE39ABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIELVD8M1TBENUuGvAAAAAElFTkSuQmCC";
		//persen
		a_image1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIjSURBVHhe7dsxTuNQFIXhk1lLSIGygpcVQDU7oHsuoaGbko7GLknHJuwdeAVRith78VzbjxCbMAM5npH8dD4pCk7c8MvxvShi0RjIxX6EZ7mQApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQJICkhSQpIAkBSQpICmOgEWGzWaBxaJ9bJAUdXjjozrb2DkJinBMa78XnrUqbZz9Gj6vwqFrv+e24+5wKJzr0v7cKcw+YO7RwKXNe5K88RYJZwp+PJc3849wjcMu/Hh0hWu7zLA72LsnigS3W8D/uscyvDSFOO6B69VfohRIuno5Xm7CSxOJI+D4ahupsyds4ZFPXc/MPOASq7U9lXtU/Qumwr60p7erss5w91Dare8R0+cz4V44X7nvp26YrFV37Jq3QTscHJUd91O6fTjPD5T5BzRV6rv1pAvj/DHeMW4YyP2K45t+46ma1PFTOYqA54VAx3WmX28GO+Doar1EHEPkjDq7w0PpkD6GO199QLvxrFcn8/rqGg4l9u830G+LNGCB525wvOJ+yqXvjCgDFsktti7F67+uZ+IL+NlfHMsV2o1ndzjZGKu9fYA9fjL7TbgXRmI8OIa6lWY8hT8596uiCtivKX+aqhZtsAfm1ArT0r85kKJdY/4XBSQpIEkBSQpIUkCSApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQArwG/fAj/2coimjAAAAAElFTkSuQmCC";
		//pecahan
		a_image2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACrSURBVHhe7dqxDYAwEARBP/33DARU4JVFMpPY8Uqf3dyvxbbre9kkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgdGzeNjPf71+n13v2gZETjgSMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjARM1noAXtQPbqm7uEsAAAAASUVORK5CYII=";
		//koma1
		a_image3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		//koma2
		a_image4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		
		// coba
		//var aarr = [[0,"pct",""],[1,"a","b"],[2,"km1",""],[3,"km2",""]];
		var posxy = [[40-5,37,0],[40,25,47],[40,37,0],[40,37,0]];
		
		
		var ct = 5;
		a_image.onload = function(){CekPic()}
		a_image1.onload = function(){CekPic()}
		a_image2.onload = function(){CekPic()}
		a_image3.onload = function(){CekPic()}
		a_image4.onload = function(){CekPic()}
		
		function CekPic(){
			ct--;
			if(ct==0){
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillStyle = "black";
				ctx.drawImage(a_image, 0, 0);
				for(var i=0;i<4;i++){
					if(arr[i][0]==0)		ctx.drawImage(a_image1, 93*i, 0);
					else if(arr[i][0]==1)	ctx.drawImage(a_image2, 93*i, 0);
					else if(arr[i][0]==2)	ctx.drawImage(a_image3, 93*i, 0);
					else 					ctx.drawImage(a_image4, 93*i, 0);
					
					if(arr[i][0]==1){
						ctx.fillText(arr[i][1],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][1]);
						ctx.fillText(arr[i][2],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][2]);
					}else if(arr[i][0]==0){
						ctx.fillText(arr[i][1],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][1]);
					}else{
						ctx.fillText(arr[i][1],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][1]);
					}
				}
			}
		}
		return 0;
	}
	function GambarJawabRasional5(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		let a_image1 = new Image();
		let a_image2 = new Image();
		let a_image3 = new Image();
		let a_image4 = new Image();
		//panjang
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAA+CAYAAAA71+DtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGQSURBVHhe7dqxVcJQGIbhP87CsXICmQArt6CkcgMHgFI7N6CSCdjATnaJkZMBKLw5yefzNMm5A7zfPYSuHxQAi3c3PgFYOEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIISgA4QQdIAQgg4QQtABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEFv4XKodddVtz7UZTwCaE3QWT4DCleCDtzOeM6aoLew2tW576s/72o1HgG0JugsnwGFq64fjO8ALJgbOkAIQW/iVFsfjoCJCToBDCj8EvSWHu59pCOM8ZwzQW/hdKz3eqz9y2Y8YBIGlH9O0P/ccIN5rfr8PtdOXaZhQKdnPGfJ3xZZuGFA18d6/nirjcK0d9pW9/RVexeWWRJ04EbGc+4EHSCE39ABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIELVD8M1TBENUuGvAAAAAElFTkSuQmCC";
		//persen
		a_image1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIjSURBVHhe7dsxTuNQFIXhk1lLSIGygpcVQDU7oHsuoaGbko7GLknHJuwdeAVRith78VzbjxCbMAM5npH8dD4pCk7c8MvxvShi0RjIxX6EZ7mQApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQJICkhSQpIAkBSQpICmOgEWGzWaBxaJ9bJAUdXjjozrb2DkJinBMa78XnrUqbZz9Gj6vwqFrv+e24+5wKJzr0v7cKcw+YO7RwKXNe5K88RYJZwp+PJc3849wjcMu/Hh0hWu7zLA72LsnigS3W8D/uscyvDSFOO6B69VfohRIuno5Xm7CSxOJI+D4ahupsyds4ZFPXc/MPOASq7U9lXtU/Qumwr60p7erss5w91Dare8R0+cz4V44X7nvp26YrFV37Jq3QTscHJUd91O6fTjPD5T5BzRV6rv1pAvj/DHeMW4YyP2K45t+46ma1PFTOYqA54VAx3WmX28GO+Doar1EHEPkjDq7w0PpkD6GO199QLvxrFcn8/rqGg4l9u830G+LNGCB525wvOJ+yqXvjCgDFsktti7F67+uZ+IL+NlfHMsV2o1ndzjZGKu9fYA9fjL7TbgXRmI8OIa6lWY8hT8596uiCtivKX+aqhZtsAfm1ArT0r85kKJdY/4XBSQpIEkBSQpIUkCSApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQArwG/fAj/2coimjAAAAAElFTkSuQmCC";
		//pecahan
		a_image2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACrSURBVHhe7dqxDYAwEARBP/33DARU4JVFMpPY8Uqf3dyvxbbre9kkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgdGzeNjPf71+n13v2gZETjgSMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjARM1noAXtQPbqm7uEsAAAAASUVORK5CYII=";
		//koma1
		a_image3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		//koma2
		a_image4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		
		var posxy = [[40-5,37,0],[40,25,47],[40,37,0],[40,37,0]];
		// coba
		/*
		var aarr = [
					[[0,"pct",""],[1,"a","b"],[2,"km1",""],[3,"km2",""]],
					[[1,"a","b"],[0,"pct",""],[2,"km1",""],[3,"km2",""]],
					[[0,"pct",""],[3,"km2",""],[2,"km1",""],[1,"a","b"]],
					[[2,"km1",""],[0,"pct",""],[1,"a","b"],[3,"km2",""]]
					];
		*/
		
		var ct = 5;
		a_image.onload = function(){CekPic()}
		a_image1.onload = function(){CekPic()}
		a_image2.onload = function(){CekPic()}
		a_image3.onload = function(){CekPic()}
		a_image4.onload = function(){CekPic()}
		
		function CekPic(){
			ct--;
			if(ct==0){
				//var arimg = [a_image1,a_image2,a_image3,a_image4];
				var ABCD = ["A.","B.","C.","D."];
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillStyle = "black";
				for(var j=0;j<4;j++){
					ctx.drawImage(a_image, 0+10, 0+62*j);
					for(var i=0;i<4;i++){
						if(arrs[j][i][0]==0)		ctx.drawImage(a_image1, 93*i+10, 0+62*j);
						else if(arrs[j][i][0]==1)	ctx.drawImage(a_image2, 93*i+10, 0+62*j);
						else if(arrs[j][i][0]==2)	ctx.drawImage(a_image3, 93*i+10, 0+62*j);
						else 					ctx.drawImage(a_image4, 93*i+10, 0+62*j);
						
						if(arrs[j][i][0]==1){
							ctx.fillText(arrs[j][i][1],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][1]+62*j);
							ctx.fillText(arrs[j][i][2],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][2]+62*j);
						}else if(arrs[j][i][0]==0){
							ctx.fillText(arrs[j][i][1],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][1]+62*j);
						}else{
							ctx.fillText(arrs[j][i][1],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][1]+62*j);
						}
					}
					ctx.fillText(ABCD[j],0+10,38+62*j);
				}
			}
		}
		return 0;
	}
	function MyRasional5(){
		var aaa,bbb,ccc,ddd;
		var ar_tambah = [];
		for(var i=-9;i<=9;i++){
			if(i!==0) ar_tambah.push(i);
		}
		ar_tambah = RandomMyArray(ar_tambah);
		
		
		var ct = RandomAngkaAtoB(0,9);
		aaa = ct*10+ar_tambah[0];
		bbb = ct*10+ar_tambah[1];
		ccc = ct*10;
		ddd = ct*10+ar_tambah[2];
		
		var urut = [aaa,bbb,ccc,ddd];
		urut = SortAtoZ(urut);
		c_urut = getIndex(urut);
		do{
			var c_a = [].concat(c_urut);
			var c_b = [].concat(c_urut);
			var c_c = [].concat(c_urut);
			var c_d = [].concat(c_urut);
			c_a = RandomMyArray(c_a);
			c_b = RandomMyArray(c_b);
			c_c = RandomMyArray(c_c);
			c_d = RandomMyArray(c_d);
			var ft1 = arraysAreEqual(c_a, c_b) || arraysAreEqual(c_a, c_c) || arraysAreEqual(c_a, c_d);
			var ft2 = arraysAreEqual(c_b, c_c) || arraysAreEqual(c_b, c_d) || arraysAreEqual(c_c, c_d);
			var ft3 = arraysAreEqual(c_urut, c_a) || arraysAreEqual(c_urut, c_b) || arraysAreEqual(c_urut, c_c) || arraysAreEqual(c_urut, c_d);
			var ft = ft1 || ft2 || ft3;
		}while(ft);
		
		function getIndex(arrs){
			var index = [0,1,3];
			index = RandomMyArray(index);
			var ars = [];
			var j=-1;
			for(var i=0;i<arrs.length;i++){
				if(arrs[i]%10==0){
					ars.push([2,"0,"+arrs[i]/10,""]);
				}else{
					j++;
					//ar.push(i);
					if(index[j]==0){
						//[0,"pct",""]
						ars.push([index[j],arrs[i],""]);
					}else if(index[j]==1){
						//[1,"a","b"]
						var fpb = CariFPB([arrs[i],100]);
						var bbatas = Math.round(arrs[i]/fpb);
						var bbbawah = Math.round(100/fpb);
						ars.push([index[j],bbatas,bbbawah]);
					}else{
						//[3,"km2",""]],
						ars.push([index[j],"0,"+arrs[i],""]);
					}
				}
			}
			return ars;
		}
		
		//[[0,"pct",""],[1,"a","b"],[2,"km1",""],[3,"km2",""]],
		//------------------
		var csoal = c_a;
		var benar = c_urut;
		var arrSalah = [c_b,c_c,c_d];
	
		var gabungJaw = [c_urut,c_b,c_c,c_d];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenarEqual(gabungJaw, benar); // untuk equal array
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw];
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal5(canv){
		const Rasional = MyRasional5();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional5(canv,ArSisi[1]);
		var ss
		ss = "Urutan pecahan terkecil ke terbesar dari bilangan di atas adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi[2]);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	//==================================================================
	 
	function GambarSoalRasional6(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		let a_image1 = new Image();
		let a_image2 = new Image();
		let a_image3 = new Image();
		let a_image4 = new Image();
		//panjang
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAA+CAYAAAA71+DtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGQSURBVHhe7dqxVcJQGIbhP87CsXICmQArt6CkcgMHgFI7N6CSCdjATnaJkZMBKLw5yefzNMm5A7zfPYSuHxQAi3c3PgFYOEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIISgA4QQdIAQgg4QQtABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEFv4XKodddVtz7UZTwCaE3QWT4DCleCDtzOeM6aoLew2tW576s/72o1HgG0JugsnwGFq64fjO8ALJgbOkAIQW/iVFsfjoCJCToBDCj8EvSWHu59pCOM8ZwzQW/hdKz3eqz9y2Y8YBIGlH9O0P/ccIN5rfr8PtdOXaZhQKdnPGfJ3xZZuGFA18d6/nirjcK0d9pW9/RVexeWWRJ04EbGc+4EHSCE39ABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIELVD8M1TBENUuGvAAAAAElFTkSuQmCC";
		//persen
		a_image1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIjSURBVHhe7dsxTuNQFIXhk1lLSIGygpcVQDU7oHsuoaGbko7GLknHJuwdeAVRith78VzbjxCbMAM5npH8dD4pCk7c8MvxvShi0RjIxX6EZ7mQApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQJICkhSQpIAkBSQpICmOgEWGzWaBxaJ9bJAUdXjjozrb2DkJinBMa78XnrUqbZz9Gj6vwqFrv+e24+5wKJzr0v7cKcw+YO7RwKXNe5K88RYJZwp+PJc3849wjcMu/Hh0hWu7zLA72LsnigS3W8D/uscyvDSFOO6B69VfohRIuno5Xm7CSxOJI+D4ahupsyds4ZFPXc/MPOASq7U9lXtU/Qumwr60p7erss5w91Dare8R0+cz4V44X7nvp26YrFV37Jq3QTscHJUd91O6fTjPD5T5BzRV6rv1pAvj/DHeMW4YyP2K45t+46ma1PFTOYqA54VAx3WmX28GO+Doar1EHEPkjDq7w0PpkD6GO199QLvxrFcn8/rqGg4l9u830G+LNGCB525wvOJ+yqXvjCgDFsktti7F67+uZ+IL+NlfHMsV2o1ndzjZGKu9fYA9fjL7TbgXRmI8OIa6lWY8hT8596uiCtivKX+aqhZtsAfm1ArT0r85kKJdY/4XBSQpIEkBSQpIUkCSApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQArwG/fAj/2coimjAAAAAElFTkSuQmCC";
		//pecahan
		a_image2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACrSURBVHhe7dqxDYAwEARBP/33DARU4JVFMpPY8Uqf3dyvxbbre9kkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgdGzeNjPf71+n13v2gZETjgSMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjARM1noAXtQPbqm7uEsAAAAASUVORK5CYII=";
		//koma1
		a_image3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		//koma2
		a_image4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		
		// coba
		//var aarr = [[0,"pct",""],[1,"a","b"],[2,"km1",""],[3,"km2",""]];
		var posxy = [[40-5,37,0],[40,25,47],[40,37,0],[40,37,0]];
		
		
		var ct = 5;
		a_image.onload = function(){CekPic()}
		a_image1.onload = function(){CekPic()}
		a_image2.onload = function(){CekPic()}
		a_image3.onload = function(){CekPic()}
		a_image4.onload = function(){CekPic()}
		
		function CekPic(){
			ct--;
			if(ct==0){
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillStyle = "black";
				ctx.drawImage(a_image, 0, 0);
				for(var i=0;i<4;i++){
					if(arr[i][0]==0)		ctx.drawImage(a_image1, 93*i, 0);
					else if(arr[i][0]==1)	ctx.drawImage(a_image2, 93*i, 0);
					else if(arr[i][0]==2)	ctx.drawImage(a_image3, 93*i, 0);
					else 					ctx.drawImage(a_image4, 93*i, 0);
					
					if(arr[i][0]==1){
						ctx.fillText(arr[i][1],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][1]);
						ctx.fillText(arr[i][2],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][2]);
					}else if(arr[i][0]==0){
						ctx.fillText(arr[i][1],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][1]);
					}else{
						ctx.fillText(arr[i][1],posxy[arr[i][0]][0]+93*i,posxy[arr[i][0]][1]);
					}
				}
			}
		}
		return 0;
	}
	function GambarJawabRasional6(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		let a_image1 = new Image();
		let a_image2 = new Image();
		let a_image3 = new Image();
		let a_image4 = new Image();
		//panjang
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAA+CAYAAAA71+DtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGQSURBVHhe7dqxVcJQGIbhP87CsXICmQArt6CkcgMHgFI7N6CSCdjATnaJkZMBKLw5yefzNMm5A7zfPYSuHxQAi3c3PgFYOEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIISgA4QQdIAQgg4QQtABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEFv4XKodddVtz7UZTwCaE3QWT4DCleCDtzOeM6aoLew2tW576s/72o1HgG0JugsnwGFq64fjO8ALJgbOkAIQW/iVFsfjoCJCToBDCj8EvSWHu59pCOM8ZwzQW/hdKz3eqz9y2Y8YBIGlH9O0P/ccIN5rfr8PtdOXaZhQKdnPGfJ3xZZuGFA18d6/nirjcK0d9pW9/RVexeWWRJ04EbGc+4EHSCE39ABQgg6QAhBBwgh6AAhBB0ghKADhBB0gBCCDhBC0AFCCDpACEEHCCHoACEEHSCEoAOEEHSAEIIOEELQAUIIOkAIQQcIIegAIQQdIELVD8M1TBENUuGvAAAAAElFTkSuQmCC";
		//persen
		a_image1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIjSURBVHhe7dsxTuNQFIXhk1lLSIGygpcVQDU7oHsuoaGbko7GLknHJuwdeAVRith78VzbjxCbMAM5npH8dD4pCk7c8MvxvShi0RjIxX6EZ7mQApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQJICkhSQpIAkBSQpICmOgEWGzWaBxaJ9bJAUdXjjozrb2DkJinBMa78XnrUqbZz9Gj6vwqFrv+e24+5wKJzr0v7cKcw+YO7RwKXNe5K88RYJZwp+PJc3849wjcMu/Hh0hWu7zLA72LsnigS3W8D/uscyvDSFOO6B69VfohRIuno5Xm7CSxOJI+D4ahupsyds4ZFPXc/MPOASq7U9lXtU/Qumwr60p7erss5w91Dare8R0+cz4V44X7nvp26YrFV37Jq3QTscHJUd91O6fTjPD5T5BzRV6rv1pAvj/DHeMW4YyP2K45t+46ma1PFTOYqA54VAx3WmX28GO+Doar1EHEPkjDq7w0PpkD6GO199QLvxrFcn8/rqGg4l9u830G+LNGCB525wvOJ+yqXvjCgDFsktti7F67+uZ+IL+NlfHMsV2o1ndzjZGKu9fYA9fjL7TbgXRmI8OIa6lWY8hT8596uiCtivKX+aqhZtsAfm1ArT0r85kKJdY/4XBSQpIEkBSQpIUkCSApIUkKSAJAUkKSBJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQArwG/fAj/2coimjAAAAAElFTkSuQmCC";
		//pecahan
		a_image2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACrSURBVHhe7dqxDYAwEARBP/33DARU4JVFMpPY8Uqf3dyvxbbre9kkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgdGzeNjPf71+n13v2gZETjgSMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjARM1noAXtQPbqm7uEsAAAAASUVORK5CYII=";
		//koma1
		a_image3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		//koma2
		a_image4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACbSURBVHhe7dCxAYAwDMCw0P9/BoZeEK/S4t3P+xvWzi1LBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgZGBkYGRgYmMx/sDAR4K5NZAwAAAABJRU5ErkJggg==";
		
		var posxy = [[40-5,37,0],[40,25,47],[40,37,0],[40,37,0]];
		// coba
		/*
		var aarr = [
					[[0,"pct",""],[1,"a","b"],[2,"km1",""],[3,"km2",""]],
					[[1,"a","b"],[0,"pct",""],[2,"km1",""],[3,"km2",""]],
					[[0,"pct",""],[3,"km2",""],[2,"km1",""],[1,"a","b"]],
					[[2,"km1",""],[0,"pct",""],[1,"a","b"],[3,"km2",""]]
					];
		*/
		
		var ct = 5;
		a_image.onload = function(){CekPic()}
		a_image1.onload = function(){CekPic()}
		a_image2.onload = function(){CekPic()}
		a_image3.onload = function(){CekPic()}
		a_image4.onload = function(){CekPic()}
		
		function CekPic(){
			ct--;
			if(ct==0){
				//var arimg = [a_image1,a_image2,a_image3,a_image4];
				var ABCD = ["A.","B.","C.","D."];
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillStyle = "black";
				for(var j=0;j<4;j++){
					ctx.drawImage(a_image, 0+10, 0+62*j);
					for(var i=0;i<4;i++){
						if(arrs[j][i][0]==0)		ctx.drawImage(a_image1, 93*i+10, 0+62*j);
						else if(arrs[j][i][0]==1)	ctx.drawImage(a_image2, 93*i+10, 0+62*j);
						else if(arrs[j][i][0]==2)	ctx.drawImage(a_image3, 93*i+10, 0+62*j);
						else 					ctx.drawImage(a_image4, 93*i+10, 0+62*j);
						
						if(arrs[j][i][0]==1){
							ctx.fillText(arrs[j][i][1],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][1]+62*j);
							ctx.fillText(arrs[j][i][2],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][2]+62*j);
						}else if(arrs[j][i][0]==0){
							ctx.fillText(arrs[j][i][1],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][1]+62*j);
						}else{
							ctx.fillText(arrs[j][i][1],posxy[arrs[j][i][0]][0]+93*i+10,posxy[arrs[j][i][0]][1]+62*j);
						}
					}
					ctx.fillText(ABCD[j],0+10,38+62*j);
				}
			}
		}
		return 0;
	}
	function MyRasional6(){
		var aaa,bbb,ccc,ddd;
		var ar_tambah = [];
		for(var i=-9;i<=9;i++){
			if(i!==0) ar_tambah.push(i);
		}
		ar_tambah = RandomMyArray(ar_tambah);
		
		
		var ct = RandomAngkaAtoB(0,9);
		aaa = ct*10+ar_tambah[0];
		bbb = ct*10+ar_tambah[1];
		ccc = ct*10;
		ddd = ct*10+ar_tambah[2];
		
		var urut = [aaa,bbb,ccc,ddd];
		urut = SortZtoA(urut);
		c_urut = getIndex(urut);
		do{
			var c_a = [].concat(c_urut);
			var c_b = [].concat(c_urut);
			var c_c = [].concat(c_urut);
			var c_d = [].concat(c_urut);
			c_a = RandomMyArray(c_a);
			c_b = RandomMyArray(c_b);
			c_c = RandomMyArray(c_c);
			c_d = RandomMyArray(c_d);
			var ft1 = arraysAreEqual(c_a, c_b) || arraysAreEqual(c_a, c_c) || arraysAreEqual(c_a, c_d);
			var ft2 = arraysAreEqual(c_b, c_c) || arraysAreEqual(c_b, c_d) || arraysAreEqual(c_c, c_d);
			var ft3 = arraysAreEqual(c_urut, c_a) || arraysAreEqual(c_urut, c_b) || arraysAreEqual(c_urut, c_c) || arraysAreEqual(c_urut, c_d);
			var ft = ft1 || ft2 || ft3;
		}while(ft);
		
		function getIndex(arrs){
			var index = [0,1,3];
			index = RandomMyArray(index);
			var ars = [];
			var j=-1;
			for(var i=0;i<arrs.length;i++){
				if(arrs[i]%10==0){
					ars.push([2,"0,"+arrs[i]/10,""]);
				}else{
					j++;
					//ar.push(i);
					if(index[j]==0){
						//[0,"pct",""]
						ars.push([index[j],arrs[i],""]);
					}else if(index[j]==1){
						//[1,"a","b"]
						var fpb = CariFPB([arrs[i],100]);
						var bbatas = Math.round(arrs[i]/fpb);
						var bbbawah = Math.round(100/fpb);
						ars.push([index[j],bbatas,bbbawah]);
					}else{
						//[3,"km2",""]],
						ars.push([index[j],"0,"+arrs[i],""]);
					}
				}
			}
			return ars;
		}
		
		//[[0,"pct",""],[1,"a","b"],[2,"km1",""],[3,"km2",""]],
		//------------------
		var csoal = c_a;
		var benar = c_urut;
		var arrSalah = [c_b,c_c,c_d];
	
		var gabungJaw = [c_urut,c_b,c_c,c_d];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenarEqual(gabungJaw, benar); // untuk equal array
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw];
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal6(canv){
		const Rasional = MyRasional6();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional6(canv,ArSisi[1]);
		var ss
		ss = "Urutan pecahan terbesar ke terkecil dari bilangan di atas adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi[2]);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	//============================================================================
	
	function GambarSoalRasional7(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "20px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],418,53);
			}
		}
		return 0;
	}
	function GambarJawabRasional7(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional7(){
		var aa = RandomAngkaAtoB(50,50);
		
		var ar_er = [];
		for(var i=-2;i<=2;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var xx = ["",1,aa];
		var xx1 = ["",aa+ar_er[0],aa];
		var xx2 = ["",1,aa+ar_er[1]];
		var xx3 = ["",aa+ar_er[0],aa+ar_er[1]];
		
		var csoal = [aa]
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var gabungJaw = [xx,xx1,xx2,xx3];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal7(canv){
		const Rasional = MyRasional7();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional7(canv,ArSisi[1]);
		var ss
		ss = "Maka nilai x = ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional8(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAB3CAYAAAAQN7VhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAU8SURBVHhe7dy/a1TpGsDxZ24vdoKNlT9gEbQSTQpBba6gbHXRykZnbERB7dKZbhUMVkYbK+VWC7JJpWBhYiMirAuJKURQ0Er/gtl5T8648TL7ZDSTuzPj5wMvZ+acpBHz5T3nvOc02h0B8Df+VW8BehIJICUSQEokgJRIACmRAFIiAaREAkiJBJASCSAlEkBKJICUSAApkQBSIgGkRAJIiQSQEgkgJRJASiSAlEgAKZEAUiIBpEQCSInEkHj8+HE0Go24ceNGvQeGg0gAKZEAUiIBpPqKxMOHD6vz5TKePXtW7/3Lx48fq3PpcvzkyZP1XmAcrBuJO3fufPWHf+jQofj8+XP9LarPZ8+ejStXrlTfDx8+XG2B8ZBGoswayiziw4cP1eh6/vx5/Sni+vXrsW/fvvj06VNMTU3F7t276yP9685CBjGAwUoj8ebNm7h27Vps27atGiUCxYsXL6rtgwcP4uXLl9XPbN26tdqeOHGiOgaMhzQSp06dqmYJXQcOHKi2T548qeJw+vTpuHv3brVvIy5fvhztdnsgAxiwzh9W35aWlspfYTU6M4b24uJifYT1dE7LvvzbbXT0o9fvGUavsZ6+7m50rb3eUE4rDh48WH8DxtU3RaI4f/58td2yZUu1pT/rnVI9evSo+rlyIbjX8bWjH71+zzB6jfV8UyTKeoh3795Vn1+9elVtB8HdDRhe3xSJW7dufbmQOT09XW2B8dZ3JMqiquLcuXPVtlheXq4/bYy7GzC8+opEeYy5LKq6cOFC7Nixo94bsbS0VH9aXbpdbosC4+VvI1HO78tMoay6PHr06JdFVUW5uFZ0ZxclDmXp9vbt26vvwPjoGYm3b99W2z179lTPapQr72sXVR07dqzadh/82r9/fywuLn6JCDA+ekbi/fv31bashSh//EeOHKm+d5Vg3L9/v/rc/RlrJmA8Ndqu9g2Fct2nnNaVU7lyIReGhUgAqb5vgQI/JpEAUiIBpEQCSIkE321lZrJaJ9Oar3cwlkQCSIkEkBIJICUSQEokgJRl2fRhPlqN4zFbf+vLxM14/fRi7Ky//i+vGhwe6yXATIJ/RPmPaQzHWI+ZBN+trJPYdWkhmnPtuP3veidjx0wCSIkEkBIJICUSQEokgJS7G0DKTAJIiQSQEgkgJRKMiZWYmWxEo9EKL8oaLJEAUiIBpEQCSIkEkLKYipHUfUy9L825aHuW/buZSfBDK2/IMvK3hJlJMCbKLdBdcWmhGXPt22HeMDhmEkBKJICUSAApkQBSLlwCKTMJICUSQEokgJRIACmRAFIiAaREAgZq/F6jJxJASiSAlEgAKZEAUp7dgA34EV6jZyYB/7Ber5P7f471mEnAQI3fa/TMJICUSAApkQBSIgGkRAIGamdcfNqO9mZetFyZiVb1fEgjJltrnxBZifnW5Opdi6/2b4xIwCjpBGLyTMTVTojmmhELs9Mxs7J6aL51Jn79+V61v/nz4BLlFiiMqvlWNI7PRnOuHVeXJ+NM3IunF3fWBwdHJGBkzUercTxmJyZiYu9UPN2k1ZxON2Bk7YqfJjqbhb0xtYnLvUUCRtbr+KPPx0Y2QiRgRM23piOaZSoxG79u4muwRAJGUHn6dPqne3H76n+iZOL35foWxyYQCRgV5W5Gaz5WVmbilz+mVu9k7NwdezuHFv77W6zU6yQGuERiVbm7AQy/uWaUO5HtieZc+3W9r3h9s9nuzCY6xybazZtrjwyGW6BAyukGkBIJICUSQEokgJRIACmRAFIiAaREAkiJBJCI+BPCQwPGF0sYigAAAABJRU5ErkJggg==";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],75,40);
				ctx.fillText(arr[1],185,26);
				ctx.fillText(arr[0],120,62);
				ctx.fillText(arr[1],205,52);
				ctx.fillText(arr[0],162,78);
				ctx.fillText(arr[1],225,72);
				ctx.fillText(arr[0],198,98);
				ctx.fillText(arr[1],242,90);
			}
		}
		return 0;
	}
	function MyRasional8(){
		var angka = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = aa-1;
		
		var ar_er = [];
		for(var i=-3;i<=3;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var xx = aa;
		var xx1 = aa+ar_er[0];
		var xx2 = aa+ar_er[1];
		var xx3 = aa+ar_er[2];
		
		var xxx = [xx,xx1,xx2,xx3];
		
		var csoal = [bb,aa];
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var ArSisi = csoal;
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal8(canv){
		const Rasional = MyRasional8();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional8(canv,ArSisi);
		var ss
		ss = "Maka nilai x adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional9(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAABpCAYAAAA9Wx9CAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAWGSURBVHhe7d0/cuJIFMfxx57FONjyCeAEOJpojiBCnDib0JkTCHHmdKJNBk4AJ6AcWLqL9rXUAglkC0GL4VHfT1XvWH9a0qz0a7V6SnIvVQLAlH/8nwAMIbiAQQQXMIjgAgYRXMAgggsYRHABgwguYBDBBQwiuIBBBBcwiOACBhFcwCCCCxhEcAGDCC5gEMEFDCK4gEEEFzCI4AIGEVzAIIILGERwAYMILmAQwb05icyGPen1hjJL/CzcHIILGERwAYMILmAQwQUMIrgd6vXcIFG40qW6/Z1T0C1+zWaHQl/A1VO1lHHvUd781PEGMo1XMrnzk163x4rQuON2yF28IUuX6vZ3TkG3CK5ZI5nXBCZNY5kO3HJ3Z61bfni3hT0EFzCI4AIGEVzAIIILGERwAYP4d1zAIO64gEEEFzCI4AIGEVzAIIILGERwAYOuLrjJbOjf6RzL0s87xnLs3wUdzoRvpOHW1QTXvee5eyF6vE1P8fXAvAxDfUJwOdbt7UJ6N1lJnL/e0sponsoi8hMh7B0Xrl/bxvvUm8Sp9UKqCa57XWwhLgODaSzzUT5XIyWTlX9lLFrIqsN3w+7uH/xP7fT/bR943I62jfepN4lT64X097vKo7mk6VybiytzrceFb7VtvE+9SZxaL5RAwU1kORvL0Hej3ce4d11slWj3u9TN3i7PuqP59Ck972Rvn6+//YKtb46rsm9db+y7P66bdeZxAV0LEFz37NuXF/kh7+4LC7F2swdreXspnjM0tP1H2fyM/RcYXHd7nS3J7monPpi654z+00Z+Fl95iH+JrP12Mw3HVdr3x+urfD6/y6Lo/pxxXAip4Yagzmq8v9Smjl5nRaN/yYbevWRwaJHqZetePqgv0cKvV0/7/7pepFtx8m3p83I2dWAR6bqDtLI4m1fUrxOnmrGDbWrWUn0w16X1qsel6vZd+G4ZLqA4x4v8fMZ6Hel0+fzm57N0jtw67vrcrtO8jcNr7Yg6TlZP14uq+2rKRijf3nHd4JSuUyrF94zaGMmzVlo/9bUbOpbZMkCTlPyR33pzfbivDpAxOHVL3GBoKqvJSH9yk3od/dTzu/6QOFueyB+9CAbT9903tHSdH5WOUtM26rSpE8mv+SRfT/+bPfZuPvXIuhfmGdc9I7quxXCopadd2HKXVf9Kk1XWVZ0+bOTpMQ9wY28lhIbjCi3vLlHqSnBX2Hhfct/nBzeZybDfl//un2W1WmlJ64fKteWazF2ApxKt3+TlnIeBu3vJG7fqNuKPUjCPPS5crxAN7ynbuHCDf4rzgxt/iHZY9Ie85UuWs+oAgRuhHc6k3EPeaNlvKcuST7fGRvZyWZJ3idZPr9vtupHgF1et0HRcHag+VlDKpbWmhrerxttKg6//U/f4B3xfds/a/uHbz98NDOn8yA0SuPmDNHLz/YN79kAfT9NBqZ5bxz3451V12Xa+HyAo6pbn1drb7yL2gxU6nQ0kHHFc2bJ8eWUQqu64cFnZuXLnNZ+MF9M0GrjzuTsf2WCkm/bnLtY62bVWDCQdsY38mimd/yPqOAf1VNPgqK5RO3j29fTXaoILXIOGhrdunbaNd/FzVopgHrHfmnrb/ZbXOxAuuHxzCjAozKgygIsiuIBBBBcwiOACBhFcwCCCCxhEcAGDCC5gEMEFDCK4gEEEFzCI4AIGEVzAIIILGERwAYMILmAQL9J3KPTXDbs8VZaOFdxxDav+VsXjC79W5RYQ3A65u07I0qW6/Z1T0C26yoBB3HEBgwguYBDBBQwiuIBBBBcwiOACBhFcwCCCCxhEcAGDCC5gEMEFDCK4gEEEFzCI4AIGEVzAIIILGERwAYMILmAQwQUMIriAQQQXMIjgAgYRXMAgggsYRHABc0T+B5WaE7dHj30GAAAAAElFTkSuQmCC";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],98,24);
				ctx.fillText(arr[1],98,48);
				ctx.fillText(arr[2],140,24);
				ctx.fillText(arr[3],140,48);
				
				ctx.fillText(arr[0],98,71);
				ctx.fillText(arr[1],98,95);
				ctx.fillText(arr[2],140,71);
				ctx.fillText(arr[3],140,95);
			}
		}
		return 0;
	}
	function MyRasional9(){
		var angka = [3,4,5,6,7,8,9,10];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = aa+1;
		var cc = aa+2;
		var dd = aa+3;
		var xx = -(aa*aa + 3*aa + 1);
		
		var ar_er = [];
		for(var i=-3;i<=3;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var xx = xx;
		var xx1 = -xx;
		var xx2 = xx+ar_er[0];
		var xx3 = -xx+ar_er[0];
		
		var xxx = [xx,xx1,xx2,xx3];
		for(var i=0;i<4;i++){
			if(xxx[i]<0)	xxx[i] = "\u{2212}"+Math.abs(xxx[i]);
		}
		
		var csoal = [aa,bb,cc,dd];
		var benar = xxx[0];
		var arrSalah = [xxx[1],xxx[2],xxx[3]];
	
		var ArSisi = csoal;
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal9(canv){
		const Rasional = MyRasional9();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional9(canv,ArSisi);
		var ss
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional10(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],377,24+15);
				ctx.fillText(arr[1],377,48+15);
				ctx.fillText(arr[2],115,18);
			}
		}
		return 0;
	}
	function MyRasional10(){
		var angka = [[1,2],[1,4],[3,4],[1,8],[3,8],[5,8],[7,8]];
		angka = RandomMyArray(angka);
		var aa = angka[0][0];
		var bb = angka[0][1];
		var berat = aa*bb*RandomAngkaAtoB(4,10)
		var xxbenar = Math.round(berat * bb / aa);
		var xxsalah = Math.round(berat * aa / bb);
		
		var ar_er = [];
		for(var i=-3;i<=3;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var xx = xxbenar;
		var xx1 = xxsalah;
		var xx2 = xxbenar+ar_er[0]*bb;
		var xx3 = xxsalah+ar_er[0]*bb;
		
		var csoal = [aa,bb,berat];
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var ArSisi = csoal;
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal10(canv){
		const Rasional = MyRasional10();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional10(canv,ArSisi);
		var ss
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" kantong<br>B. "+Ar[1]+" kantong<br>C. "+Ar[2]+" kantong<br>D. "+Ar[3]+" kantong</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional11(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],95+143+15,28);
				ctx.fillText(arr[1],117+143+15,17);
				ctx.fillText(arr[2],117+143+15,39);
				ctx.fillText(arr[3],91+210,26+39);
				ctx.fillText(arr[4],113+210,15+39);
				ctx.fillText(arr[5],113+210,37+39);
				ctx.fillText(arr[6],97+205,26+98);
				ctx.fillText(arr[7],119+205,15+98);
				ctx.fillText(arr[8],119+205,37+98);
			}
		}
		return 0;
	}
	function MyRasional11(){
		//var angka = [2,3,4,5,6,7,8,9,10,11,12];
		do{
			//angka = RandomMyArray(angka);
			var aa = RandomAngkaAtoB(0,5);
			var bb = 1;
			var cc = RandomAngkaAtoB(1,20);
			var dd = RandomAngkaAtoB(0,5);
			var ee = 1;
			var ff = RandomAngkaAtoB(1,20);
			var gg = RandomAngkaAtoB(0,20);
			var hh = 1;
			var ii = CariKPK([cc,ff]);
			var res1 = (aa*cc+bb)*ff*ii;
			var res2 = (dd*ff+ee)*cc*ii
			var res3 = res1+res2;
			var res4 = (gg*ii+hh)*cc*ff;
			var res = res3/res4;
			var ft = res3 % res4 !== 0;
		}while(ft);
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = res;
			var xx1 = res+ar_er[0];
			var xx2 = res+ar_er[1];
			var xx3 = res+ar_er[2];
			var ft = xx1<=0 || xx2<=0 || xx3<=0
		}while(ft)
		var xxx = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb,cc,dd,ee,ff,gg,hh,ii];
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var gabungJaw = [xx,xx1,xx2,xx3];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal11(canv){
		const Rasional = MyRasional11();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional11(canv,ArSisi[1]);
		
		var ss
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" jenis<br>B. "+Ar[1]+" jenis<br>C. "+Ar[2]+" jenis<br>D. "+Ar[3]+" jenis</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//============================================================================
	
	function GambarSoalRasional12(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],150,22);
				ctx.fillText(arr[1],150,42);
			}
		}
		return 0;
	}
	function GambarJawabRasional12(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional12(){
		do{
			var aa = RandomAngkaAtoB(0,10);
			var ab = RandomAngkaAtoB(0,10);
			var bb = aa+ab;
		}while(ab==aa)
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = ["",aa,ab];
			var xx1 = ["",ab+ar_er[0],aa];
			var xx2 = ["",ab,aa];
			var xx3 = ["",aa+ar_er[0],ab];
			var ft1 = arraysAreEqual(xx, xx1) || arraysAreEqual(xx, xx2) || arraysAreEqual(xx, xx3);
			var ft2 = arraysAreEqual(xx1, xx2) || arraysAreEqual(xx1, xx3) || arraysAreEqual(xx2, xx3);
			var ft3 = ab+ar_er[0]<=0 || aa+ar_er[0]<=0;
			var ft4 = ab+ar_er[0]==aa || aa+ar_er[0]==ab;
			var ft = ft1 || ft2 || ft3;
		}while(ft)
		
		var csoal = [aa,bb]
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var gabungJaw = [xx,xx1,xx2,xx3];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal12(canv){
		const Rasional = MyRasional12();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional12(canv,ArSisi[1]);
		var ss
		ss = "Maka nilai x = ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional13(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "20px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],107,25);
				ctx.fillText(arr[1],107,48);
				ctx.fillText("0,"+arr[2],195,38);
				ctx.fillText(arr[3],217+65,25);
				ctx.fillText(arr[4],217+65,48);
				ctx.fillText(arr[5],275+65,38);
			}
		}
		return 0;
	}
	function GambarJawabRasional13(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20+5, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47+5,12+40*i);
							ctx.fillText(arrs[i+2][2],47+5,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional13(){
		var angka = [2,4,5,8,10,20];
		do{
			angka = RandomMyArray(angka);
			var aa = 1;
			var bb = angka[0];
			var cc = 25*RandomAngkaAtoB(0,3);
			var dd = 1;
			var ee = angka[1];
			var ff = 25*RandomAngkaAtoB(0,3);
			var res1 = aa*cc*ee*ff + bb*dd*10000;
			var res2 = bb*ee*ff*100;
		}while(res1<=res2 || cc==ff)
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xxx = [];
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = [res1,res2];
			var xx1 = [res1+ar_er[0]*res2,res2];
			var xx2 = [res1+ar_er[1]*res2,res2];
			var xx3 = [res1+ar_er[2]*res2,res2];
			xxx = [xx,xx1,xx2,xx3];
			var ft = xx1[0]<0 || xx2[0]<0 || xx3[0]<0;
		}while(ft)
		
		var xfix = []
		for(var i=0;i<4;i++){
			xfix[i] = [];
			//\u{2212}
			xfix[i][0] = Math.floor(Math.abs(xxx[i][0])/xxx[i][1]);
			xfix[i][1] = Math.abs(xxx[i][0])%xxx[i][1];
			xfix[i][2] = xxx[i][1];
			if(xxx[i][0]<0){
				if(xfix[i][0]==0)	xfix[i][0] = "\u{2212}";
				else 				xfix[i][0] = "\u{2212}"+Math.abs(xfix[i][0]);
			}
			var FPB = CariFPB([xfix[i][1],xfix[i][2]]);
			
			if(FPB>1){
				xfix[i][1] = xfix[i][1]/FPB;
				xfix[i][2] = xfix[i][2]/FPB;
			}
		}
		
		var csoal = [aa,bb,cc,dd,ee,ff];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal13(canv){
		const Rasional = MyRasional13();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional13(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional14(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			//for(var i=0;i<4;i++){
				ctx.fillText(arr[0],58,15);
				ctx.fillText(arr[1],58,37);
				ctx.fillText(arr[2],410,27);
				ctx.fillText(arr[3],91+244,26+37);
				ctx.fillText(arr[4],113+244,15+37);
				ctx.fillText(arr[5],113+244,37+37);
			//}
		}
		return 0;
	}
	function MyRasional14(){
		//var angka = [2,3,4,5,6,7,8,9,10,11,12];
		var pecahan1 = [[1,4],[1,2],[3,4]];
		
		pecahan1 = RandomMyArray(pecahan1);
		var aa = pecahan1[0][0];
		var bb = pecahan1[0][1];
		var cc = aa*5000*RandomAngkaAtoB(6,6);
		var dd = RandomAngkaAtoB(0,5);
		var ee = pecahan1[1][0];
		var ff = pecahan1[1][1];
		
		var res1 = (dd*ff+ee)*bb*cc;
		var res2 = aa*ff;
		var res = res1/res2;
		
		var ar_er = [];
		for(var i=-9;i<=9;i++){
			if(i!==0) ar_er.push(i);
		}
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = res;
			var xx1 = res+ar_er[0]*5000;
			var xx2 = res+ar_er[1]*5000;
			var xx3 = res+ar_er[2]*5000;
			var ft = xx1<=0 || xx2<=0 || xx3<=0
		}while(ft)
		
		var xxx = [xx,xx1,xx2,xx3];
		for(var i=0;i<4;i++){
			if(xxx[i]>1000) xxx[i]=StringRibuan(xxx[i]);
		}
		
		var csoal = [aa,bb,StringRibuan(cc),dd,ee,ff];
		var benar = xxx[0];
		var arrSalah = [xxx[1],xxx[2],xxx[3]];
	
		var gabungJaw = xxx;
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal14(canv){
		const Rasional = MyRasional14();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional14(canv,ArSisi[1]);
		
		var ss
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. Rp"+Ar[0]+",00<br>B. Rp"+Ar[1]+",00<br>C. Rp"+Ar[2]+",00<br>D. Rp"+Ar[3]+",00</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText("0,"+Math.floor((arr[0]/arr[1]*100000)),100,26);
			}
		}
		return 0;
	}
	function GambarJawabRasional15(nmcanvas,arrs){
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
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20+5, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47+5,12+40*i);
							ctx.fillText(arrs[i+2][2],47+5,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional15(){
		
		var angka = [1,2,3,4,5,6,7,8];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = 9;
		var res1 = aa*aa + bb*bb;
		var res2 = aa*bb;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xxx = [];
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = [res1,res2];
			var xx1 = [res1+ar_er[0],res2];
			var xx2 = [res1,res2+ar_er[0]];
			var xx3 = [res1+ar_er[0],res2+ar_er[0]];
			xxx = [xx,xx1,xx2,xx3];
			var ft1 = xx1[0]<0 || xx2[0]<0 || xx3[0]<0;
			var ft2 = xx1[1]<0 || xx2[1]<0 || xx3[1]<0;
			var ft = ft1 || ft2;
		}while(ft)
		
		var xfixc = [xx,xx1,xx2,xx3];
		var xfix = [];
		for(var i=0;i<4;i++){
			var in0 = Math.floor(xfixc[i][0]/xfixc[i][1]);
			var in1 = xfixc[i][0]%xfixc[i][1];
			var in2 = xfixc[i][1];
			xfix.push([in0,in1,in2]);
		}
		
		var csoal = [aa,bb];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal15(canv){
		const Rasional = MyRasional15();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional15(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional16(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0][i],150,53+30*i);
				ctx.fillText(arr[1][i],350,53+30*i);
			}
		}
		return 0;
	}
	function MyRasional16(){
		var arra = [];
		var arrb = [];
		var arrbc = [];
		var arrc = [];
		var arrcp = [];
		var arrd = [];
		var arrtxt = [];
		var arrhasil = [];
		
		do{
			// soal 1
			arra[0] = RandomAngkaAtoB(10,30);
			arrb[0] = RandomAngkaAtoB(0,10);
			arrc[0] = RandomAngkaAtoB(0,9);
			arrbc[0] = arrb[0]*arrc[0];
			arrcp[0] = "0,"+arrc[0]
			arrd[0] = RandomAngkaAtoB(0,10);
			arrtxt[0] = "\u{2212}"+arra[0]+" + "+arrbc[0]+" : "+arrcp[0]+" \u{2212} "+arrd[0];
			arrhasil[0] = -arra[0] + 10*arrb[0] - arrd[0];
			if(arrhasil[0]<0) arrhasil[0] = "\u{2212}"+Math.abs(arrhasil[0]);
			
			
			// soal 2
			arra[1] = RandomAngkaAtoB(10,30);
			arrb[1] = RandomAngkaAtoB(0,10);
			arrc[1] = RandomAngkaAtoB(0,9);
			arrbc[1] = arrb[1]*arrc[1];
			arrcp[1] = [1,arrc[1]];
			arrd[1] = RandomAngkaAtoB(0,10);
			arrtxt[1] = arra[1]+" + (\u{2212}"+arrbc[1]+") \u{00D7} 1/"+arrc[1]+" \u{2212} "+arrd[1];
			arrhasil[1] = arra[1] - arrb[1] - arrd[1];
			if(arrhasil[1]<0) arrhasil[1] = "\u{2212}"+Math.abs(arrhasil[1]);
			
			
			// soal 3
			arra[2] = RandomAngkaAtoB(10,30);
			arrb[2] = RandomAngkaAtoB(0,10);
			arrc[2] = RandomAngkaAtoB(0,9);
			arrbc[2] = arrb[2]*arrc[2];
			arrcp[2] = [1,arrc[2]];
			arrd[2] = RandomAngkaAtoB(0,10);
			arrtxt[2] = arra[2]+" + (\u{2212}"+(arrbc[2])+") : (\u{2212}"+arrc[2]+") \u{2212} "+arrd[2];
			arrhasil[2] = arra[2] + arrb[2] - arrd[2];
			if(arrhasil[2]<0) arrhasil[2] = "\u{2212}"+Math.abs(arrhasil[2]);
			
			
			// soal 4
			arra[3] = RandomAngkaAtoB(10,30);
			arrb[3] = RandomAngkaAtoB(0,10);
			arrc[3] = 20*RandomAngkaAtoB(0,4);
			arrbc[3] = 5*arrb[3];
			arrcp[3] = [1,arrc[3]];
			arrd[3] = RandomAngkaAtoB(0,10);
			arrtxt[3] = "\u{2212}"+arra[3]+" \u{2212} "+(arrbc[3])+" \u{00D7} "+arrc[3]+"\u{0025}  + "+arrd[3];
			arrhasil[3] = -arra[3] - arrb[3] + arrd[3];
			if(arrhasil[3]<0) arrhasil[3] = "\u{2212}"+Math.abs(arrhasil[3]);
			
			
			var ft1 = arrhasil[0]==arrhasil[1] || arrhasil[0]==arrhasil[2] || arrhasil[0]==arrhasil[3];
			var ft2 = arrhasil[1]==arrhasil[2] || arrhasil[1]==arrhasil[3] || arrhasil[2]==arrhasil[3];
			var ft = ft1 || ft2;
			
		}while(ft)
		
		var resTrue = [arrhasil[0],arrhasil[1],arrhasil[2],arrhasil[3]];
		var resAsli = [arrhasil[0],arrhasil[1],arrhasil[2],arrhasil[3]];
		var resKopi = [arrhasil[0],arrhasil[1],arrhasil[2],arrhasil[3]];
		resKopi = RandomMyArray(resKopi);
		var num = [1,2,3,4];
		var abj = ["a","b","c","d"];
		var pastrue = "";
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				if(resKopi[j]==resAsli[i]){
					pastrue += num[i] + "\u{2212}" + abj[j];
					if(i<3)	pastrue += ", ";
					break;
				}
			}
		}
		
		var abjacak = ["a","b","c","d"];
		var pasfalse = ["","",""];
		do{
			for(var i=0;i<3;i++){
				pasfalse[i] = "";
				abjacak = RandomMyArray(abjacak);
				for(var k=0;k<4;k++){
					pasfalse[i] += (k+1) + "\u{2212}" + abjacak[k];
					if(k<3)	pasfalse[i] += ", ";
				}
			}
			var ft1 = pastrue == pasfalse[0] || pastrue == pasfalse[1] || pastrue == pasfalse[2];
			var ft2 = pasfalse[0] == pasfalse[1] || pasfalse[0] == pasfalse[2] || pasfalse[1] == pasfalse[2];
			var ft = ft1 || ft2;
		}while(ft)
		
		var csoal = [arrtxt,resKopi];
		var benar = pastrue;
		var arrSalah = pasfalse;
	
		var gabungJaw = benar.concat(arrSalah);
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
		
	}
	function GetSoal16(canv){
		const Rasional = MyRasional16();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional16(canv,ArSisi[1]);
		
		var ss
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional17(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				if(arr[i][0]==1){
					ctx.fillText(arr[i][1],165,68+35*i);
					ctx.fillText(arr[i][2],165,85+35*i);
					ctx.strokeStyle = 'black';
					ctx.beginPath();
					ctx.moveTo(150, 70+35*i);
					ctx.lineTo(180, 70+35*i);
					ctx.stroke(); 
				}else{
					ctx.fillText(arr[i][1],165,76+35*i);
				}
			}
		}
		return 0;
	}
	function MyRasional17(){
		var aaa,bbb,ccc,ddd;
		var ar_tambah = [];
		for(var i=-9;i<=9;i++){
			if(i!==0) ar_tambah.push(i);
		}
		ar_tambah = RandomMyArray(ar_tambah);
		
		
		var ct = RandomAngkaAtoB(0,9);
		aaa = ct*10+ar_tambah[0];
		bbb = ct*10+ar_tambah[1];
		ccc = ct*10;
		ddd = ct*10+ar_tambah[2];
		
		var urut = [aaa,bbb,ccc,ddd];
		
		urut = SortZtoA(urut);
		c_urut = getIndex(urut);
		do{
			var c_a = [].concat(c_urut);
			var c_b = [].concat(c_urut);
			var c_c = [].concat(c_urut);
			var c_d = [].concat(c_urut);
			c_a = RandomMyArray(c_a);
			c_b = RandomMyArray(c_b);
			c_c = RandomMyArray(c_c);
			c_d = RandomMyArray(c_d);
			var ft1 = arraysAreEqual(c_a, c_b) || arraysAreEqual(c_a, c_c) || arraysAreEqual(c_a, c_d);
			var ft2 = arraysAreEqual(c_b, c_c) || arraysAreEqual(c_b, c_d) || arraysAreEqual(c_c, c_d);
			var ft3 = arraysAreEqual(c_urut, c_a) || arraysAreEqual(c_urut, c_b) || arraysAreEqual(c_urut, c_c) || arraysAreEqual(c_urut, c_d);
			var ft = ft1 || ft2 || ft3;
		}while(ft);
		
		function getIndex(arrs){
			var index = [0,1,3];
			index = RandomMyArray(index);
			var ars = [];
			var j=-1;
			for(var i=0;i<arrs.length;i++){
				if(arrs[i]%10==0){
					ars.push([2,"0,"+arrs[i]/10,""]);
				}else{
					j++;
					//ar.push(i);
					if(index[j]==0){
						//[0,"pct",""]
						ars.push([index[j],arrs[i],""]);
					}else if(index[j]==1){
						//[1,"a","b"]
						var fpb = CariFPB([arrs[i],100]);
						var bbatas = Math.round(arrs[i]/fpb);
						var bbbawah = Math.round(100/fpb);
						ars.push([index[j],bbatas,bbbawah]);
					}else{
						//[3,"km2",""]],
						ars.push([index[j],"0,"+arrs[i],""]);
					}
				}
			}
			return ars;
		}
		
		//------------------
		var c_acak = [].concat(c_urut)
		c_acak = RandomMyArray(c_acak);
		
		var arnama = [["Andi",c_acak[0]],["Budi",c_acak[1]],["Candra",c_acak[2]],["Dewi",c_acak[3]]];
		var arnamatrue = [];
		var pastrue = "";
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				if(arnama[j][1] == c_urut[i]){
					arnamatrue.push(arnama[j][0])
					pastrue+=arnama[j][0];
					if(i<3)	pastrue+=" \u{2212} ";
				}
			}
		}
		
		var pasfalse = ["","",""];
		do{
			for(var i=0;i<3;i++){
				pasfalse[i] = "";
				arnamatrue = RandomMyArray(arnamatrue);
				for(var k=0;k<4;k++){
					pasfalse[i] += arnamatrue[k];
					if(k<3)	pasfalse[i] += " \u{2212} ";
				}
			}
			var ft1 = pastrue == pasfalse[0] || pastrue == pasfalse[1] || pastrue == pasfalse[2];
			var ft2 = pasfalse[0] == pasfalse[1] || pasfalse[0] == pasfalse[2] || pasfalse[1] == pasfalse[2];
			var ft = ft1 || ft2;
		}while(ft)
		
		var csoal = c_acak;
		var benar = pastrue;
		var arrSalah = pasfalse;
	
		var gabungJaw = benar.concat(arrSalah);
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal17(canv){
		const Rasional = MyRasional17();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional17(canv,ArSisi[1]);
		
		var ss
		ss = "Urutan juara pertama sampai dengan keempat adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional18(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],190,24);
				ctx.fillText(arr[1],190,48);
			}
		}
		return 0;
	}
	function GambarJawabRasional18(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAxCAYAAABam76bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGTSURBVHhe7dkxcoJAGMXxR84SLBxOgCcwNlS26aA0jffAMunSUtEoJ9ATMBaydzFLxEnKjNE3HzvvN8MIlv9hdj9mo7MHebin4VceTKFJFJpEoUkUmiTY0E0RIYruf90q0NAN6rZE5yfXfnq953WrMEO7E9pkgufh0YIgQ7tthSSbD082BBjaYVslMNY5xNAdjpgiHp6sCC90U6NdLkytz71Rh3bODXc/mrrFcmEt81hDuw2KWYQ4jlE0w3/fHE5tgom9zmN9oxd433coU+Cj/lXabVElGYztgxd+CB+vXe6/INJz6b9Mel2ZnvPd5d6acW+G8ww5Dqi2l7W6OwJTa+PGYPQnLG4zQ/yWYNdlqF9PWO9X5iaOXgBHWQ2K6AVt6hfs5Sf2K4uZg5ij58hy4HDwnQ2OdVcBhPap1yVS2BzrrnQKThLEGz0GCk2i0CTm1+j/nNOx/CWhNkMSLR0kCk2i0CQKTaLQJApNotAkCk2i0CQKTaLQJApNotAkCk2i0CQKTaLQJApNotAkCk2i0BTAF+Vg+QzNKPDaAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, -20, -5+40*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][1],43,15+40*i);
					ctx.fillText(arrs[i+2][2],43,34+40*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional18(){
		
		var angka = [2,3,4,5,6,7,8,9,10];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = angka[1];
		var ab = aa*bb;
		var res1 = bb;
		var res2 = bb;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xxx = [];
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = [res1,res2];
			var xx1 = [res1+ar_er[0],res2];
			var xx2 = [res1,res2+ar_er[0]];
			var xx3 = [res1+ar_er[0],res2+ar_er[0]];
			xxx = [xx,xx1,xx2,xx3];
			var ft1 = xx1[0]<=1 || xx2[0]<=1 || xx3[0]<=1;
			var ft2 = xx1[1]<=1 || xx2[1]<=1 || xx3[1]<=1;
			var ft = ft1 || ft2;
		}while(ft)
		
		var xfixc = [xx,xx1,xx2,xx3];
		var xfix = [];
		for(var i=0;i<4;i++){
			var in0 = "";
			var in1 = xfixc[i][0];
			var in2 = xfixc[i][1];
			xfix.push([in0,in1,in2]);
		}
		
		var csoal = [aa,ab];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal18(canv){
		const Rasional = MyRasional18();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional18(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional19(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],190,24);
				ctx.fillText(arr[1],190,48);
			}
		}
		return 0;
	}
	function GambarJawabRasional19(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAxCAYAAABam76bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGSSURBVHhe7doxjoJAAIXhx55lsTCcAE/g2lDZbgel23gPLHe7balokBPoCYgFzF3YYRmzW5hYKM/EeV8yEbQg+TMZxzhBb0Em9+JeZWIKTaLQJApNotAkCk2i0CQKTaLQJApNotAkCk2i0CQKTaLQJN6HrrMAQXD7uMbz0DXKJkfX9xj+/7hlXON3aNOiiWZ4dbdT8jq0qQpEydLdTcvj0AZVEYHU2efQHU6YI3R3U/M3dF2iWa8o6/PAi9DGGHf1py4brFeszM8e2uyQLQKEYYisdu/9MmibCDNe52ef0St8HjrkMfBV/ittKhRRAtL34Mhuth9mePy9x0X71H4W97n9ZTLo8rhP9+M1y0NntH3+3cdFywQpjiiqca3uTsCctd1wvDl7Z3YLhB8R9l2C8r3F9rCh7TgGHh1yrJEFb2hiu2Cvv3HYMDN7tY9eIkmB49F2Jm7rzjwKbVNvc8TgbuvOdD6axKsZ/UgKTaLQJApNotAkCk2i0CQKTaLQJApNotAkCk2i0CQKTaLQJApNAfwAMhfiFlXheE0AAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, -5+40*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][0],43,15+40*i);
					ctx.fillText(arrs[i+2][1],43,34+40*i);
					ctx.fillText(arrs[i+2][2],73,25+40*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional19(){
		
		var angka = [2,3,5,7,11];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = angka[1];
		var aa2 = aa*aa;
		var a2b = aa2*bb;
		var pch1 = aa2;
		var pch2 = a2b;
		var res0 = aa;
		var res1 = bb;
		var res2 = bb;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i>0) ar_er.push(i);
		}
		
		var xx = [res0,res1,res2];
		var xx1 = [res0,res2,res1];
		var xx2 = [res1,res2,res0];
		var xx3 = [res1,res0,res2];
		
		var xfix = [xx,xx1,xx2,xx3];
		
		var benar = xx;
		var salah = [
		[res0,res2,res1],
		[res1,res2+ar_er[0],res0],
		[res1,res0,res2],
		[res0+ar_er[0],res1,res2],
		[res0+ar_er[0],res2,res1],
		[res1+ar_er[0],res2,res0+1],
		[res1,res0+ar_er[0],res2]
		]
		do{
			salah = RandomMyArray(salah);
			xfix[1] = salah[0];
			xfix[2] = salah[1];
			xfix[3] = salah[2];
			var ft1 = arraysAreEqual(benar, salah[0]) || arraysAreEqual(benar, salah[1]) || arraysAreEqual(benar, salah[2]);
			var ft2 = arraysAreEqual(salah[0], salah[1]) || arraysAreEqual(salah[0], salah[2]) || arraysAreEqual(salah[1], salah[2]);
			var ft = ft1 || ft2;
		}while(ft)
	
		
		var csoal = [aa2,a2b];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		//var noBenar = NoJawabanBenar(gabungJaw, benar);
		var noBenar = NoJawabanBenarEqual(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal19(canv){
		const Rasional = MyRasional19();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional19(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional20(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
					ctx.textAlign = "left";
				ctx.fillText(arr[0],190,22);
					ctx.textAlign = "right";
				ctx.fillText(arr[1],185,45);
					ctx.textAlign = "center";
				ctx.fillText(arr[2],210,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional20(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAxCAYAAABam76bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGSSURBVHhe7doxjoJAAIXhx55lsTCcAE/g2lDZbgel23gPLHe7balokBPoCYgFzF3YYRmzW5hYKM/EeV8yEbQg+TMZxzhBb0Em9+JeZWIKTaLQJApNotAkCk2i0CQKTaLQJApNotAkCk2i0CQKTaLQJN6HrrMAQXD7uMbz0DXKJkfX9xj+/7hlXON3aNOiiWZ4dbdT8jq0qQpEydLdTcvj0AZVEYHU2efQHU6YI3R3U/M3dF2iWa8o6/PAi9DGGHf1py4brFeszM8e2uyQLQKEYYisdu/9MmibCDNe52ef0St8HjrkMfBV/ittKhRRAtL34Mhuth9mePy9x0X71H4W97n9ZTLo8rhP9+M1y0NntH3+3cdFywQpjiiqca3uTsCctd1wvDl7Z3YLhB8R9l2C8r3F9rCh7TgGHh1yrJEFb2hiu2Cvv3HYMDN7tY9eIkmB49F2Jm7rzjwKbVNvc8TgbuvOdD6axKsZ/UgKTaLQJApNotAkCk2i0CQKTaLQJApNotAkCk2i0CQKTaLQJApNAfwAMhfiFlXheE0AAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAxCAYAAABam76bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACWSURBVHhe7dqhAYAwEATBPP33DAhKIAtixiR6xaub87bY7nheNhM6InRE6IjQEaEjQkeEjggdEToidEToiNARoSNCR4SOCB0ROiJ0ROiI0BGhI0JHhI4IHfl0qTQzz+89fx1emYRFnI6I0BGhI0JHhI4IHRE6InRE6IjQEaEjQkeEjggdEToidEToiNARoSNCR4ROrHUBRJMPVHqbh6wAAAAASUVORK5CYII=";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][2]==""){
						ctx.drawImage(base2_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][0],43,15+40*i);
						ctx.fillText(arrs[i+2][1],43,34+40*i);
					}else{
						ctx.drawImage(base1_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][0],43,15+40*i);
						ctx.fillText(arrs[i+2][1],43,34+40*i);
						ctx.fillText(arrs[i+2][2],73,25+40*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional20(){
		
		var angka = [2,3,5,6,7,8,10];
		angka = RandomMyArray(angka);
		var aa = angka[0];
		var bb = angka[1];
		var aa2 = aa*aa;
		var a2b = aa2*bb;
		var pch1 = aa2*bb;
		var pch2 = aa2*bb;
		var res0 = 1;
		var res1 = aa;
		var res2 = bb;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = [res0,res1,""];
		var xx1 = [res0,res2,res1];
		var xx2 = [res0,res2,""];
		var xx3 = [res0,res1,res2];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [pch1,aa2,bb];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal20(canv){
		const Rasional = MyRasional20();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional20(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional21(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
					ctx.textAlign = "left";
				ctx.fillText(arr[0],210,22);
					ctx.textAlign = "right";
				ctx.fillText(arr[1],198,45);
					ctx.textAlign = "center";
				ctx.fillText(arr[2],242,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional21(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAH+SURBVHhe7dsxUttAGIbhTzlLTMH4BOIEHhoqt+nsMmnoUtKlkdscwZUbWzfgBBoKtHdRVkgBkeCEmWTWH+z7zMgeuTK/3pG0Ylx0kQAzH8Z3wAphwhJhwhJhwhJh/qJeFyqK/7O9NylnQ5jP1No1ldquU/+w4l+39yXtbAhzKtyrmZ/p47iLicSzIcyJsN9qfrUY9zCVejaE+Shov52LLl+SfjaE+ajVnc41G/fSC9pcFLrYhHHfSfrZZBPmXw93vVOzvMzy/tJxNtmE2Y7vvRB+PxT1rtHyMs9lz/SvdplNXpfysNE6Xi5ns5nW9fjZg6D7Zq6zPLscuM2my8Shf2nb/qWrSnVaPXwyaKuunO4ncljF7xEPwZ+2ZF/LbDbZhPnMYRUPetlV/bGI2qpMF8BRQxTlzy91KiazyXNVvrjSSrfa7of7qfZOOj/dctyLyWwyfVy00HU8Pd1++aY69P9qWyrTdc8LPGaTaZhxJfr5azwzfNfNp5tsHxMdYzGb8ZKepWHx8XQ/hSennk22Z8ze4rpSqcwfEx1x6tnwYzRYyvqMCV+ECUuECUtv4h7zNb8Rwdvw2txY/MASl3JYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkwYkn4AJkpoVkwwb0kAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHgSURBVHhe7dsxctpAGIbhTzlLcOHRCeQTEBoqjiBKV7mHXDqdWyoa0AnMCTQurL3LRgTZkbEz45kE8YV9nxkNiPKfdyTtAlnsCDDzpX8FrBAmLBEmLBEmLBHmkXqZKcv+zXFpxpwNYb5Ra91UamPUfrPib4/LMu5sCHMoPKvJr/S1P8XAyLMhzIGwWSmfT/szDI09G8J8FbRZ5aLLjxzPJvSvp0OYr1o96VqT/gxDx7M5/Q2dMF/UazWLGc+XHznDbJIMM4T3t6J63WgxI0uX2aQVZrjT8ibTZDLRsu4/+yXoucl1lXKXZrNJ7Io50/1jq6qQfqwH0w8brfK5xl73fGbD+m0kp+Q1m/1mZ3q2ZZSKWLWH07YqYrk9vE+eyWzSXPxM5yq102pzeJ5qn6RrluMHLrPpA03O/koglXHbbmNZVLG/QKDjMJuEf8Fea5l9U1N0D1WLBz3esiL/7fyzSXgfc6p5Ke123ezZJjpy/tkkHGY3/u+VCiW+TfQH554Nf0aDpaSvmPBFmLBEmLD0Xzxj7r+aw2X4bG4sfmCJWzksESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYMST8BDhAE2xSg31IAAAAASUVORK5CYII=";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]=="-"){
						ctx.drawImage(base2_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],50,15+40*i);
						ctx.fillText(arrs[i+2][2],80,15+40*i);
						ctx.fillText(arrs[i+2][3],120,15+40*i);
						ctx.fillText(arrs[i+2][4],147,15+40*i);
						ctx.fillText(arrs[i+2][5],100,34+40*i);
					}else{
						ctx.drawImage(base1_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],50,15+40*i);
						ctx.fillText(arrs[i+2][2],80,15+40*i);
						ctx.fillText(arrs[i+2][3],120,15+40*i);
						ctx.fillText(arrs[i+2][4],147,15+40*i);
						ctx.fillText(arrs[i+2][5],100,34+40*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional21(){
		
		var angka = [2,3,5,6,7,8,10];
		do{
		angka = RandomMyArray(angka);
		var ct = angka[0];
		var aa = angka[1]*ct;
		var cc = angka[2];
		var dd = angka[3]*ct;
		var bb = cc+dd;
		var res0 = angka[1];
		var res1 = bb;
		var res2 = angka[1];
		var res3 = cc;
		var res4 = angka[3];
		var fpb = CariFPB([angka[1],angka[3]])
		}while(fpb!==1);
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = ["-",res0,res1,res2,res3,res4];
		var xx1 = ["-",res0,res3,res2,res1,res4];
		var xx2 = ["-",res4,res1,res4,res3,res0];
		var xx3 = ["-",res4,res3,res2,res1,res0];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb,cc];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal21(canv){
		const Rasional = MyRasional21();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional21(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional22(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAAA4CAYAAAB0dtpFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXpSURBVHhe7d0xduI6FIDhy1sLpMhhBc4KIE2qtNNBmTTpXjnda6CE7rWpaAIrgBVwUsTei0eyBRjj2Ndggu35v3N8BoItdI24loRgOqEhAIBc/7h/AQA5SJYAoECyBAAFkiUAKJAsAUCBZAkACiRLAFAgWQKAAskSABRIlgCgQLIEAAWSJQAokCwBQIFkCQAKJEsAUCBZAoACyRIAFEiWAKBAsgQAhQYny0CmDx3pjFfu/s9bjat6/tvHUkZ1caONyrWPsm3/du+Vb5NlMH2QTsdUKrnxBkGlmnWRwN8tv2fpTcQPQ7H/AWToT8SbD+VhGrgHK7Iam0Q8Ft4uAOpMPwzvvsi/I5HN+4fpDwBV6MrL2lyIZwN3H6ivi+cs08P1w4gqHmLZnmg0h5ExlI/+PpybW3MZRo8/SNxxzR6e5c+FuGPyeqnBVB529cjY7/tYYt/FkVZ8TlaurqflHB178hy7GHdbMobi8x3LKyObLm5N3dJxu2O+LRO3V9xeittH2Tan2z//vXIFZoidyZ94oRmGh2YYHvMnoWd2Hy3dfWM5kuN9lqPQjN3DSfQHP5x45nFzjBf/YV/G/r4VHTMKE8Ua7tjkkxnR8+3/drxP9NhJOUnL0HSMD/W3dUmUnx/Lafnx/cPz7+SXk3FOIppzZfc51Gd/TPp8XFTGKV3cZ9QtUvz8SdHzsp29lVf0umraR1EZWfcvbefXkZ8s3Uk+bMlkZJNPMigrDiSudDrIWHQyk3+rIFnGdU2XkeJOaKpIpyiWVKJ1TmLRnpNkMo1o4j11fEGroow0bdynMuumjBv1dfy6ntc+NO02qYp2XgX9BzxmW47scNkNlYMv2cpGXnvJ7nJPXjcim08/Pv4nzIfSexWZ+DPJnflyc67zoa1nqltfFEv0uCf3Pbf/d7TnpH8nXXeznJWM9+V2TNym4NJKlKGNO6Io9+y4cTs5r6u6fZRtt1W08+qVmrMczJYyMsng/WP3EY9nktQhme63n5ywHy1NErcJqmgexNbf1s+XiefmSI/mOaqK5VrnxDagoWwn/r5Mc8V1j2lVUUaWa5WL27pFm6tvW7rwA56NXKcT2ZW7vrupECdxkwBVk7zuE1jTb5f5wrw0OzmxdO+kr471SufEXcWfHy/om5UtQxt3FXWryNGHDRdudXKTuIpeV037KNs2atSW0koly2D626QkF8h+WHvco7MvavkPprbylVqP1Ls3V5NEMrPlRh+cZxrIrGgdqF3PmajYamEK8+4lGkEUxjKQp9TjmfWp9JxkSfTqg6n8Omt4UqYMZdyRKup2qZUstsdTR5ds9XHLuPJeV237KNs2qm9Ltl6H6TfbezX3d29K8xx2lUzRGvL8ZLl5lV7iitR77csyXMuLS/p2WBvPYx72WTyFUmrEOXgzw+LdPN9u6ZDNO+ujsn/f+/ndcZOo1qa3uHntZSemwUyWMtzXczgfyXL9sp9DK4plMEsM3832XX0qOSdZEvFF5fbe5XliWmoZZ5ShiruKulXB9kraOC96q7gUr2th+yjbNurSljJ0zJWmTpdQ4Gx23d1/d+vLL0w109a4mubCOUugLgL5eO/LU+sSSlvjah6SJVrCl09xc9Ct0ta4modkiXZYLWT7/JiY18uauG6gk7guk/8RBvKQLNE4QXD6ll8ttsfLTYIvd6M5VHFd6Bqr2v4WJEs0RzCV8UNHer30iodAvrZ9uUvmlO6ju9EAZeLCzZAs0SCPMlvbpSoi80UiqwQf8t5/Sn3d9WcyTLx+L38rXmNbJi7cCkuH0Dz2CwbDrUz8eM1va5bWtDWulqBnieYZPB39RoH/Kcof+6i5tsbVEvQs0Ui21xV9o8x/ksWvL3lLfBurydoaVxuQLNFQ7tdpPE/k+X9Z776D23htjav5GIajoeIfcdhsTE6p4S/UnK+tcTUfyRKNNXibiCftW1rT1riajmE4ACjQswQABZIlACiQLAFAgWQJAAokSwBQIFkCgALJEgAUSJYAoECyBAAFkiUAFBL5A0EWUp7iouzmAAAAAElFTkSuQmCC";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "left";
				ctx.fillText(arr[0],210,22);
				ctx.textAlign = "right";
				ctx.fillText(arr[1],198,45);
				ctx.textAlign = "center";
				ctx.fillText(arr[2],242,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional22(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAH+SURBVHhe7dsxUttAGIbhTzlLTMH4BOIEHhoqt+nsMmnoUtKlkdscwZUbWzfgBBoKtHdRVkgBkeCEmWTWH+z7zMgeuTK/3pG0Ylx0kQAzH8Z3wAphwhJhwhJhwhJh/qJeFyqK/7O9NylnQ5jP1No1ldquU/+w4l+39yXtbAhzKtyrmZ/p47iLicSzIcyJsN9qfrUY9zCVejaE+Shov52LLl+SfjaE+ajVnc41G/fSC9pcFLrYhHHfSfrZZBPmXw93vVOzvMzy/tJxNtmE2Y7vvRB+PxT1rtHyMs9lz/SvdplNXpfysNE6Xi5ns5nW9fjZg6D7Zq6zPLscuM2my8Shf2nb/qWrSnVaPXwyaKuunO4ncljF7xEPwZ+2ZF/LbDbZhPnMYRUPetlV/bGI2qpMF8BRQxTlzy91KiazyXNVvrjSSrfa7of7qfZOOj/dctyLyWwyfVy00HU8Pd1++aY69P9qWyrTdc8LPGaTaZhxJfr5azwzfNfNp5tsHxMdYzGb8ZKepWHx8XQ/hSennk22Z8ze4rpSqcwfEx1x6tnwYzRYyvqMCV+ECUuECUtv4h7zNb8Rwdvw2txY/MASl3JYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkwYkn4AJkpoVkwwb0kAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHgSURBVHhe7dsxctpAGIbhTzlLcOHRCeQTEBoqjiBKV7mHXDqdWyoa0AnMCTQurL3LRgTZkbEz45kE8YV9nxkNiPKfdyTtAlnsCDDzpX8FrBAmLBEmLBEmLBHmkXqZKcv+zXFpxpwNYb5Ra91UamPUfrPib4/LMu5sCHMoPKvJr/S1P8XAyLMhzIGwWSmfT/szDI09G8J8FbRZ5aLLjxzPJvSvp0OYr1o96VqT/gxDx7M5/Q2dMF/UazWLGc+XHznDbJIMM4T3t6J63WgxI0uX2aQVZrjT8ibTZDLRsu4/+yXoucl1lXKXZrNJ7Io50/1jq6qQfqwH0w8brfK5xl73fGbD+m0kp+Q1m/1mZ3q2ZZSKWLWH07YqYrk9vE+eyWzSXPxM5yq102pzeJ5qn6RrluMHLrPpA03O/koglXHbbmNZVLG/QKDjMJuEf8Fea5l9U1N0D1WLBz3esiL/7fyzSXgfc6p5Ke123ezZJjpy/tkkHGY3/u+VCiW+TfQH554Nf0aDpaSvmPBFmLBEmLD0Xzxj7r+aw2X4bG4sfmCJWzksESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYMST8BDhAE2xSg31IAAAAASUVORK5CYII=";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]=="-"){
						ctx.drawImage(base2_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],50,15+40*i);
						ctx.fillText(arrs[i+2][2],80,15+40*i);
						ctx.fillText(arrs[i+2][3],120,15+40*i);
						ctx.fillText(arrs[i+2][4],147,15+40*i);
						ctx.fillText(arrs[i+2][5],100,34+40*i);
					}else{
						ctx.drawImage(base1_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],50,15+40*i);
						ctx.fillText(arrs[i+2][2],80,15+40*i);
						ctx.fillText(arrs[i+2][3],120,15+40*i);
						ctx.fillText(arrs[i+2][4],147,15+40*i);
						ctx.fillText(arrs[i+2][5],100,34+40*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional22(){
		
		var angka = [2,3,5,6,7,8,10];
		do{
		angka = RandomMyArray(angka);
		var ct = angka[0];
		var aa = angka[1]*ct;
		var cc = angka[2];
		var dd = angka[3]*ct;
		var bb = cc+dd;
		var res0 = angka[1];
		var res1 = bb;
		var res2 = angka[1];
		var res3 = cc;
		var res4 = angka[3];
		var fpb = CariFPB([angka[1],angka[3]])
		}while(fpb!==1);
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = ["+",res0,res1,res2,res3,res4];
		var xx1 = ["-",res0,res1,res2,res3,res4];
		var xx2 = ["+",res4,res1,res4,res3,res0];
		var xx3 = ["-",res4,res1,res4,res3,res0];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb,cc];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal22(canv){
		const Rasional = MyRasional22();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional22(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional23(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "left";
				ctx.fillText(arr[0],210,22);
				ctx.textAlign = "right";
				ctx.fillText(arr[1],198,45);
				ctx.textAlign = "center";
				ctx.fillText(arr[2],242,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional23(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHgSURBVHhe7dsxbuJAAIXh5z0LpIg4gXMCkiYVbToos026LdNtY9ocgYoGfILkBFaKeO7i2MlE691Ei6Vdhof4P8kgIyQs8zOMDc6algAz3+I9YIUwYYkwYYkwYYkwMVi5yJRl/2fZhTAxUKl1VahuGnUncv512YUwMUx4UTU50yiu7hthYpCwWWlyPY1r+0eYGCBos5ooYZeE6SNoeZHpYhniupNazzrXOK6lcDJhOr7dLnbum3KtanaVbH7ZOZkw63jfCYFM+/rBfbVvynWl2VXKLE8ozP70aDRKu5OPQlhq0U4lxuOxFmV87E3QSzXRWepd1uBgtnN1J/T+usy38cn7VtfdTVPk7ev2X7QumjzZRvxCmDbeo8iLLpAD2s7bD0TefGxGXeTpPhw9HJXjd9NrzfWk1eZ9rlk/S+cpD8cjwsQfprprh+6n7z9Vhu5nyJkSH/e8IUx8Mrr90Y6aD7q/uU9+mugDl1bgS90/iS4fchX1o24ZMeFielco1wFOE0WMmLDEiAlLhAlLhAlLRzHHHHKNCI7D0Nw4+IElvsphiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhiTBhSHoFQMWOCn68DoYAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAG8SURBVHhe7dq9bcJQGEbh15klpkCeACYAGle06XBJGqZIAyXp0rpyQzyBmcCiwHcXgoMRQSBhKeHmS3QeybIuDc3R/YNgtyfAmIfmDZhCmDCJMGESYcIkwkRreRIoCH7muYUw0VKurJyr2u1UX+R897mFMNGO26qMOnpshvdGmGjFrVJF8aAZ3R9hogWnVRrp1KVr3vdDmGih0kZdhc1IHhZ0wsRteaZyPPK2v6wRJs44d7lM51mp8chnloSJI7dQ0g8UhqGSvPnsk9O2jNTx2yVh/qY2F9bnkdzTSMui0rwnvWZfvtStlEax/J3HD/jbG87liYJhqXlVaLqfJd2ir5dOoaXnMpkxcW4Qa6K10tVhr1ltpO7pOO4NMyYu1LNk+BzpvYqVPW01K6ZeT+Q1wsQVuZJgqLK333CO31TUa7pnLOW4YqB4Iq3X+y49XxMdESauGszm6sn/NdERSzlMYsaESYQJkwgTJv2JPWb90xz+h7a5cfiBSSzlMIkwYRJhwiTChEmECZMIEyYRJkwiTJhEmDCJMGESYcIkwoRJhAmTCBMmESZMIkyYRJgwiTBhEmHCJMKESYQJg6QPPOGgJ454p54AAAAASUVORK5CYII=";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]=="-"){
						ctx.drawImage(base2_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],70,15+40*i);
						ctx.fillText(arrs[i+2][2],120,15+40*i);
						ctx.fillText(arrs[i+2][3],147,15+40*i);
						ctx.fillText(arrs[i+2][4],100,34+40*i);
					}else{
						ctx.drawImage(base1_image, 0, -5+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],70,15+40*i);
						ctx.fillText(arrs[i+2][2],120,15+40*i);
						ctx.fillText(arrs[i+2][3],147,15+40*i);
						ctx.fillText(arrs[i+2][4],100,34+40*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional23(){
		var fpb,aa,bb,cc
		var angka = [2,3,4,5,6,7,8,9,10];
		do{
			angka = RandomMyArray(angka);
			aa = angka[0];
			bb = angka[1];
			cc = angka[2];
			fpb = CariFPB([bb*bb-cc,aa]);
		}while(bb*bb-cc<=0 || fpb == 1)
		
		
		var res0 = (aa/fpb) * bb;
		var res1 = (aa/fpb);
		var res2 = cc;
		var res3 = (bb*bb-cc)/fpb;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = ["+",res0,res1,res2,res3];
		var xx1 = ["-",res0,res1,res2,res3];
		var xx2 = ["+",res3,res1,res2,res0];
		var xx3 = ["-",res3,res1,res2,res0];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb,cc];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal23(canv){
		const Rasional = MyRasional23();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional23(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional24(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "center";
				ctx.fillText(arr[0],210,20);
				ctx.fillText(arr[1],235,20);
				ctx.fillText(arr[2],190,45);
				ctx.fillText(arr[3],215,45);
				ctx.fillText(arr[4],255,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional24(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAAAcCAYAAADFnOX2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGtSURBVHhe7duxboJQGAXgQ59FHRqeAJ6AuDi5dsOxLt0c3VxgrI/QicXyBjwBcZD7LrdAaLRDUwOm/Nz/fAkx10VyPEH4Bc/WQDRxT90r0aSxyOQEFpmcwCKbFKHnwXvgptLIObLI1RlIKjTXvI/aVBo5R/VFzrMS6+WsW1FfY+eovMg5stLHgj0eaPwcdRfZXFD6K0TdknoSkKPqIpvTB/yVkBq3F0ub+tg2PRJyVFxkgzp/PM+7JfUkI0fFRa5wxhq8zhtKRo7uF9nk2IQhUtOtv+UZyvUS7PGdhOfodJFNGmJzugBFge3h59lnMy7yOa64yyRytApUSWCBwCZV94atbBLE9rNb/b/m89FM/P/cgutOj05ejlcqimzrqOPbUlSJDWIJ8d9o9gkySvE7uTkqudiLsKq/gWJ7aMdbzbiI44o+5OaoZmoRvSUIcESWm/a2AP4t3Y/UHPWM32av2NVHk+P+BfuSY7fehOaop8i1qP1dLFD4C47dBpCYo7Jn9gzScI7zzuKdN1gMIC9HPnxKTlB1akHuYpHJCSwyOYFFJiewyOQEFpkcAHwBc5RQ+hKVh6oAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 0+28*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][0],40,18+28*i);
					ctx.fillText(arrs[i+2][1],75,18+28*i);
					ctx.fillText(arrs[i+2][2],125,18+28*i);
					ctx.fillText(arrs[i+2][3],155,18+28*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,15+28*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional24(){
		var fpb,aa,bb,cc
		var ft,sisa
		var atas,bawah
		var angka = [2,3,4,5,6,7,8,9,10];
		do{
			angka = RandomMyArray(angka);
			aa = angka[0];
			bb = angka[1];
			cc = angka[2];
			dd = bb;
			ee = cc;
			ff = angka[3];
			atas = aa;
			bawah = dd*dd*ee - ff*ff;
			sisa = atas%bawah;
		}while(sisa!==0 || bawah<=0)
		
		
		var res0 = cc;
		var res1 = bb;
		var res2 = dd;
		var res3 = bb*cc;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i>0) ar_er.push(i);
		}
		
		var xx = [res0,res1,res2,res3];
		var xx1 = [res0,res2+2,res1,res3];
		var xx2 = [res1,res0,res2+2,res3];
		var xx3 = [res1+2,res2,res0,res3];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb*cc,dd,ee,ff];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal24(canv){
		const Rasional = MyRasional24();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional24(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional25(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "center";
				ctx.fillText(arr[0],195,20);
				ctx.fillText(arr[1],250,20);
				ctx.fillText(arr[2],195,45);
				ctx.fillText(arr[3],250,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional25(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAH+SURBVHhe7dsxUttAGIbhTzlLTMH4BOIEHhoqt+nsMmnoUtKlkdscwZUbWzfgBBoKtHdRVkgBkeCEmWTWH+z7zMgeuTK/3pG0Ylx0kQAzH8Z3wAphwhJhwhJhwhJh/qJeFyqK/7O9NylnQ5jP1No1ldquU/+w4l+39yXtbAhzKtyrmZ/p47iLicSzIcyJsN9qfrUY9zCVejaE+Shov52LLl+SfjaE+ajVnc41G/fSC9pcFLrYhHHfSfrZZBPmXw93vVOzvMzy/tJxNtmE2Y7vvRB+PxT1rtHyMs9lz/SvdplNXpfysNE6Xi5ns5nW9fjZg6D7Zq6zPLscuM2my8Shf2nb/qWrSnVaPXwyaKuunO4ncljF7xEPwZ+2ZF/LbDbZhPnMYRUPetlV/bGI2qpMF8BRQxTlzy91KiazyXNVvrjSSrfa7of7qfZOOj/dctyLyWwyfVy00HU8Pd1++aY69P9qWyrTdc8LPGaTaZhxJfr5azwzfNfNp5tsHxMdYzGb8ZKepWHx8XQ/hSennk22Z8ze4rpSqcwfEx1x6tnwYzRYyvqMCV+ECUuECUtv4h7zNb8Rwdvw2txY/MASl3JYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkxYIkwYkn4AJkpoVkwwb0kAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHgSURBVHhe7dsxctpAGIbhTzlLcOHRCeQTEBoqjiBKV7mHXDqdWyoa0AnMCTQurL3LRgTZkbEz45kE8YV9nxkNiPKfdyTtAlnsCDDzpX8FrBAmLBEmLBEmLBHmkXqZKcv+zXFpxpwNYb5Ra91UamPUfrPib4/LMu5sCHMoPKvJr/S1P8XAyLMhzIGwWSmfT/szDI09G8J8FbRZ5aLLjxzPJvSvp0OYr1o96VqT/gxDx7M5/Q2dMF/UazWLGc+XHznDbJIMM4T3t6J63WgxI0uX2aQVZrjT8ibTZDLRsu4/+yXoucl1lXKXZrNJ7Io50/1jq6qQfqwH0w8brfK5xl73fGbD+m0kp+Q1m/1mZ3q2ZZSKWLWH07YqYrk9vE+eyWzSXPxM5yq102pzeJ5qn6RrluMHLrPpA03O/koglXHbbmNZVLG/QKDjMJuEf8Fea5l9U1N0D1WLBz3esiL/7fyzSXgfc6p5Ke123ezZJjpy/tkkHGY3/u+VCiW+TfQH554Nf0aDpaSvmPBFmLBEmLD0Xzxj7r+aw2X4bG4sfmCJWzksESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYsESYMST8BDhAE2xSg31IAAAAASUVORK5CYII=";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					
					ctx.drawImage(base2_image, 0, -5+40*i,base1_image.width, base1_image.height);
					if(arrs[i+2][0]!==1)	ctx.fillText(arrs[i+2][0],50,15+40*i);
											ctx.fillText(arrs[i+2][1],80,15+40*i);
					if(arrs[i+2][2]!==1)	ctx.fillText(arrs[i+2][2],120,15+40*i);
											ctx.fillText(arrs[i+2][3],147,15+40*i);
					ctx.fillText(arrs[i+2][4],100,34+40*i);
					
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+40*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional25(){
		var fpb,aa,bb,cc
		var a1,a2,a3,a4
		var ft,sisa
		var atas,bawah
		var angka = [2,3,5,6];
		do{
			angka = RandomMyArray(angka);
			aa = angka[0];
			bb = angka[1];
			a1 = aa*bb;
			a2 = aa;
			a3 = bb;
			a4 = bb*bb*bb;
		}while(a1<=a2);
		
		var res0 = bb;
		var res1 = aa;
		var res2 = 1;
		var res3 = aa*bb;
		var res4 = (bb+1)*bb;
		
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = [res0,res1,res2,res3,res4];
		var xx1 = [res1,res0,res2,res3,res4];
		var xx2 = [res0,res1,res3,res2,res4];
		var xx3 = [res1,res0,res3,res2,res4];
	
		var xfix = [xx,xx1,xx2,xx3];
		var csoal = [a1,a2,a3,a4];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal25(canv){
		const Rasional = MyRasional25();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional25(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional26(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "center";
				ctx.fillText(arr[0],195,20);
				ctx.fillText(arr[1],235,20);
				ctx.fillText(arr[2],195,45);
				ctx.fillText(arr[3],235,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional26(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGDSURBVHhe7doxcoJAGIbhb3OWYOFwAjwB2lDZ2klpGk+RBkvTpaWiIZwAT7BjIXsXwkYYJckMzCSsf/E9MwyzNBa+s8uuqroBImGe2juRKAyTRGKYJBLDJJEYJo1WxApK/c81hGHSSAUynaCqa9iDnL9eQxgmjWMu0P4Mz+1wagyTRjF5Cj8K29H0GCaNYJCnPm5dmvY+HYYpyNiNgXsVzpjDa0dwsKAzTBpWZNDrlbP3S4thUo8xP5fpItNYr1xmyTCpYw6IFwqe5yEu2mdfDC7ax8xtlwzzkb4fWHfun/UjmdIKx7JCEgBv2d2HmhypH8HdfvyKf3sTpIvzoV9JEUMtNZKqxK6ZJc1hgddZiaPjMjljUl8YYYsT0vz6rlmdgfltO+4MZ0xBRMyYDTtLei8+PqoI2eaCfblzuiO3GKYgUsK0v4vHagkdNC+c63eUdk13jEu5IDZIGfNEiGgLnE5Nl46PiToMk34V7hMEcH9M1OFSTiJxxiSRGCaJxDBJIOATHEyj/XqBvBgAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHWSURBVHhe7do/TttgAIbx1z1LnQH5BOEEIYunrN3wCAun6BJG2Lpm8pL6BM4JLIb4u0uwiy1IixRLJR+vxPOTLMteMuTR9y9JDh0BZr4Nd8AKYcISYcISYcISYWKyqkiUJB9znUKYmKhS2azVHg7qD3L+9zqFMDFN2KvJZvo+PJ4bYWKSsN0oyxfD0/kRJiYI2m4yvXYZhvv5EKaRqRuD+Fo96ULp8KQIEzph4rSqVLNaRltf9ggTR0L4d5quykarZcwsCROjcK/iMlGapiqq4d0fQfsm0yxul4T5mf4+sB69fXccyTkt9VC3Ws+lx/LNh4atNlmuePvxF/ztzcgY56d+JVWh5KrRuq11042S4f5SP2e1HiKXyYiJY4tc19pps31Za7ZP0sXrdjwaRkwjFiNmpx8l09tMv9tc5Y+97uqbqDvyHmEacQmz/128SK7UzLsF5+qX6n5Oj4yp3EgfpMc4sVB+Le12XZeRj4lGhIl3Le7Wmiv+MdGIqRyWGDFhiTBhiTBh6cuuMcejGcQ1NTc2P7DEVA5LhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlLhAlD0jPl0K8h1xReJQAAAABJRU5ErkJggg==";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					if(arrs[i+2][3]==1){
						ctx.drawImage(base1_image, -20, 5+48*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][0],50,25+48*i);
						ctx.fillText(arrs[i+2][1],100,25+48*i);
						ctx.fillText(arrs[i+2][2],130,25+48*i);
					}else{
						ctx.drawImage(base2_image, -20, -5+48*i,base2_image.width, base2_image.height);
						ctx.fillText(arrs[i+2][0],50,15+48*i);
						ctx.fillText(arrs[i+2][1],100,15+48*i);
						ctx.fillText(arrs[i+2][2],130,15+48*i);
						ctx.fillText(arrs[i+2][3],85,35+48*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+48*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional26(){
		var fpb,aa,bb,cc
		var a1,a2,a3,a4
		var ft,sisa
		var atas,bawah
		var angka = [2,3,4,5,6,7,8,9,10];
		do{
			angka = RandomMyArray(angka);
			aa = angka[0];
			bb = angka[1];
			a1 = aa+bb*bb;
			a2 = 2*bb;
			a3 = aa;
			a4 = aa-bb*bb;
			fpb = CariFPB([a1,a2,a4]);
		}while(aa<=bb*bb);
		
		var res0 = a1/fpb;
		var res1 = a2/fpb;
		var res2 = aa;
		var res3 = a4/fpb;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = [res0,res1,res2,res3];
		var xx1 = [res1,res0,res3,res2];
		var xx2 = [res2,res1,res0,res3];
		var xx3 = [res1,res2,res3,res0];
	
		var xfix = [xx,xx1,xx2,xx3];
		var csoal = [aa,bb,aa,bb];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal26(canv){
		const Rasional = MyRasional26();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional26(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional27(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "center";
				ctx.fillText(arr[0],220,20);
				ctx.fillText(arr[1],198,45);
				ctx.fillText(arr[2],248,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional27(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJ4SURBVHhe7Zs9kqMwEIUfexZw4OIEmhOwThxxBDscJ5NNuNkkOLSPQESCOYE5AUVg6S6swNoadvwHNQKLHn1V2BZlqvxaD0ndMk4lgcViGL/Uu8ViFNaYFiOxxrQYiTWmxUisMa+QrR04jp7DJKakyxrzggxJEYFXFeqCxXcPc5iWLsLGFNi+OHjZCtXuiDih8GdwVZMM2nWd4+usM9XWC11jZh/Y5Azhol9XiDSGvwxUiw76dbl4fV8B+z/oe+93gawxs2QPrN7x2suXAmns47P/Boj4UxhIV7DECjniVH+ciBpTrqekL9ncU+2ucJSY4/OqcSf04RKLoXQFWMpBM49T7bcwTWNmCfboP43X1xXhgt76ckBd3pzVzoTuQZOkMcWpkK8+Znd6QojLSGZJ0d/MhjG2Lnfmy9ccJT+3dUHSmLzM1acriC3WMpv0PA//J5QCp+K+mY3mWbq8uZybgOKkd8gkm/zIBWZrTdVmgd2RI5LR3CetHhQpYn8pV03j8bXg/Y/2ue7VGHN06YCuMW/h1kPHZanjGWWiYHe9aN0+t+v6kwzSpQO6xsxLmYve4Uupg5dA7yTeRIjoImnMJlN8SIA3Oe/lmw9kot6uCzHxvEcxsi7p/HpF7+texMrpgh6HlZwXWRVx1b7JoZITX8UYq9jjLw9O3R16umQ8XTxiHWPdD5pTeZMpdtmRUAViecubUCaS/dEc32c8XU0FhOkflWka010gbOq+j3ckgrdImnjCZaIbjKNL7bANULyn+zBatobzu0DEjz33yy2dGTDGhJ+SrP+W5SEOOY7WmQNwju/GP6DqXNPqjn1812IkP6/AbpkAwF8Qoew7IrdKuwAAAABJRU5ErkJggg==";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJpSURBVHhe7Zs9jqswFIUPby2QImIFzAqYNKlYQlJOmummfN00pEyWQEVDvIKwAkQRey88k1iazOTP6Bli7viTSGIpSDmXg33vdfAaCRwOy/ij3h0Oq3DGdFiJM6bDSpwxHVbijHkFtvTgeWYOmxiTLmfMCxjyKgVvGrQNi/897GFcuggbU2D94uFlLdRYE3FAFU7gqyEZjOs6xddbMjU2C11jsk+sygjJrNulEEWGcB6rER3M6/Lx9rEAtn/R9d7XgawxWb4FFh946+RLgSIL8XX9eoj4U+hJVzzHAiWywnyciBpT5lPSl9E0UGNdOGpM8XUWlQW9L10x5nLSLLPC+C1M05gsxxbdl/H2vCqZ0csve9QVTKPWmTA9aZI0pjhU8jXE5M6VEOIykiyvupvZMobW5U9C+Vqi5qexKUgak9el+nQFscZSVpNBEOB7QSlwqO6b2WqepSuYyrUJqA5mp0yyxY9MMM9yqnNm2Ow5UhnNbX52BUWBLJzLrGk4dBre+t0Ye3SZgK4xb+G3U8dlq+MZbaJ4c715fX5sdH+SRbpMQNeYZS1r0Tv8aHXwGuhcxNsIEV0kjXmsFB8S412ue+XqE0y023UJRl73KAbWJZ3fZvSh6SRWLhf02C0amWQ2KVfjm+waufA1URQ10eMvj4jhdPE00ox1N2gu5cdKUWdHQjWI5S0/9jbRd4bTdeyAROZnZZrG9GdIjn3fxzsS8XsqTTziNtENhtGldth6aN7TfRiNLeG9Vkj5vuN+uUObHmNM+CnJ9m9ZAbKEY++c2QOn+K7CHRrtnpY+7vFdh5X8vga7YwQA/wBLpvI1xRb84AAAAABJRU5ErkJggg==";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					if(arrs[i+2][0]=="+"){
						ctx.drawImage(base1_image, 0, 0+25*i,base1_image.width, base1_image.height);
					}else{
						ctx.drawImage(base2_image, 0, 0+25*i,base2_image.width, base2_image.height);
					};
					ctx.fillText(arrs[i+2][1],42,18+25*i);
					ctx.fillText(arrs[i+2][2],75,18+25*i);
					ctx.fillText(arrs[i+2][3],130,18+25*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,18+25*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional27(){
		var fpb,aa,bb,cc
		var ft,sisa
		var atas,bawah
		var angka = [2,3,4,5,6,7,8,9,10];
		do{
			angka = RandomMyArray(angka);
			aa = angka[0];
			bb = angka[1];
			cc = angka[2];
			dd = angka[3];
			ab = aa*bb;
			cd = cc-dd;
		}while(cc-dd!==bb || cc<dd)
		
		var res0 = aa;
		var res1 = cc;
		var res2 = dd;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = ["-",res0,res1,res2];
		var xx1 = ["+",res0,res1,res2];
		var xx2 = ["-",res0,res2,res1];
		var xx3 = ["+",res0,res2,res1];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [ab,cc,dd];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal27(canv){
		const Rasional = MyRasional27();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional27(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	function GambarSoalRasional28(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "center";
				ctx.fillText(arr[0],220,20);
				ctx.fillText(arr[1],198,45);
				ctx.fillText(arr[2],248,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional28(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJ4SURBVHhe7Zs9kqMwEIUfexZw4OIEmhOwThxxBDscJ5NNuNkkOLSPQESCOYE5AUVg6S6swNoadvwHNQKLHn1V2BZlqvxaD0ndMk4lgcViGL/Uu8ViFNaYFiOxxrQYiTWmxUisMa+QrR04jp7DJKakyxrzggxJEYFXFeqCxXcPc5iWLsLGFNi+OHjZCtXuiDih8GdwVZMM2nWd4+usM9XWC11jZh/Y5Azhol9XiDSGvwxUiw76dbl4fV8B+z/oe+93gawxs2QPrN7x2suXAmns47P/Boj4UxhIV7DECjniVH+ciBpTrqekL9ncU+2ucJSY4/OqcSf04RKLoXQFWMpBM49T7bcwTWNmCfboP43X1xXhgt76ckBd3pzVzoTuQZOkMcWpkK8+Znd6QojLSGZJ0d/MhjG2Lnfmy9ccJT+3dUHSmLzM1acriC3WMpv0PA//J5QCp+K+mY3mWbq8uZybgOKkd8gkm/zIBWZrTdVmgd2RI5LR3CetHhQpYn8pV03j8bXg/Y/2ue7VGHN06YCuMW/h1kPHZanjGWWiYHe9aN0+t+v6kwzSpQO6xsxLmYve4Uupg5dA7yTeRIjoImnMJlN8SIA3Oe/lmw9kot6uCzHxvEcxsi7p/HpF7+texMrpgh6HlZwXWRVx1b7JoZITX8UYq9jjLw9O3R16umQ8XTxiHWPdD5pTeZMpdtmRUAViecubUCaS/dEc32c8XU0FhOkflWka010gbOq+j3ckgrdImnjCZaIbjKNL7bANULyn+zBatobzu0DEjz33yy2dGTDGhJ+SrP+W5SEOOY7WmQNwju/GP6DqXNPqjn1812IkP6/AbpkAwF8Qoew7IrdKuwAAAABJRU5ErkJggg==";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJpSURBVHhe7Zs9jqswFIUPby2QImIFzAqYNKlYQlJOmummfN00pEyWQEVDvIKwAkQRey88k1iazOTP6Bli7viTSGIpSDmXg33vdfAaCRwOy/ij3h0Oq3DGdFiJM6bDSpwxHVbijHkFtvTgeWYOmxiTLmfMCxjyKgVvGrQNi/897GFcuggbU2D94uFlLdRYE3FAFU7gqyEZjOs6xddbMjU2C11jsk+sygjJrNulEEWGcB6rER3M6/Lx9rEAtn/R9d7XgawxWb4FFh946+RLgSIL8XX9eoj4U+hJVzzHAiWywnyciBpT5lPSl9E0UGNdOGpM8XUWlQW9L10x5nLSLLPC+C1M05gsxxbdl/H2vCqZ0csve9QVTKPWmTA9aZI0pjhU8jXE5M6VEOIykiyvupvZMobW5U9C+Vqi5qexKUgak9el+nQFscZSVpNBEOB7QSlwqO6b2WqepSuYyrUJqA5mp0yyxY9MMM9yqnNm2Ow5UhnNbX52BUWBLJzLrGk4dBre+t0Ye3SZgK4xb+G3U8dlq+MZbaJ4c715fX5sdH+SRbpMQNeYZS1r0Tv8aHXwGuhcxNsIEV0kjXmsFB8S412ue+XqE0y023UJRl73KAbWJZ3fZvSh6SRWLhf02C0amWQ2KVfjm+waufA1URQ10eMvj4jhdPE00ox1N2gu5cdKUWdHQjWI5S0/9jbRd4bTdeyAROZnZZrG9GdIjn3fxzsS8XsqTTziNtENhtGldth6aN7TfRiNLeG9Vkj5vuN+uUObHmNM+CnJ9m9ZAbKEY++c2QOn+K7CHRrtnpY+7vFdh5X8vga7YwQA/wBLpvI1xRb84AAAAABJRU5ErkJggg==";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					if(arrs[i+2][0]=="+"){
						ctx.drawImage(base1_image, 0, 0+25*i,base1_image.width, base1_image.height);
					}else{
						ctx.drawImage(base2_image, 0, 0+25*i,base2_image.width, base2_image.height);
					};
					ctx.fillText(arrs[i+2][1],42,18+25*i);
					ctx.fillText(arrs[i+2][2],75,18+25*i);
					ctx.fillText(arrs[i+2][3],130,18+25*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,18+25*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional28(){
		var fpb,aa,bb,cc
		var ft,sisa
		var atas,bawah
		var angka = [2,3,4,5,6,7,8,9,10];
		do{
			angka = RandomMyArray(angka);
			aa = angka[0];
			bb = angka[1];
			cc = angka[2];
			dd = angka[3];
			ab = aa*bb;
			cd = dd-cc;
		}while(dd-cc!==bb || cc>dd)
		
		var res0 = aa;
		var res1 = cc;
		var res2 = dd;
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = ["-",res0,res2,res1];
		var xx1 = ["+",res0,res1,res2];
		var xx2 = ["-",res0,res1,res2];
		var xx3 = ["+",res0,res2,res1];
	
		var xfix = [xx,xx1,xx2,xx3];
		
		var csoal = [ab,cc,dd];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal28(canv){
		const Rasional = MyRasional28();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional28(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	//==================================================================
	
	
	function GambarSoalRasional29(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.textAlign = "center";
				ctx.fillText(arr[0],195,20);
				ctx.fillText(arr[1],250,20);
				ctx.fillText(arr[0],195,45);
				ctx.fillText(arr[1],250,45);
			}
		}
		return 0;
	}
	function GambarJawabRasional29(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAFqSURBVHhe7do9boMwAIbhzz1LyRBxAnICwsKUtVsY0yWn6ELGdOvKxEJ9AjiBlQF8FwoNKEWJhKUW18P3SAiZJcsr/ymi7YDIMU/Dm8gpDJOcxDDJSQyTnMQwyZhMBIT4m2cOwyRDErlK0bQt+ouc3z5zGCaZ0TWUv8LzMFwawyQjusjgx+EwWh7DJAMaRebj1qUe3sthmGSgwQVreMMIFhZ0hknzZA61i6ztL3sMkya0vl+mZa6wi2xmyTBppE9INgKe5yGRw7dvGrXysbLbJcP8TyYX1tNIlhThXDZIA+A9//GjukDmx7B3Hr/i395oSiYQW4W0KXHoZkl92uBtVeJsuUzOmDQVxtijQlZc95rNBVjfjuPWcMakO/0s6b36+Gxi5C81juXB6om8xzDpAYlEbKGCbsO5+0DZr+mWcSmnB0LEe6Cqui4tXxONGCY9FB5TBLB/TTTiUk5O4oxJTmKY5CSGSQ4CvgBxSZUDM6QR2wAAAABJRU5ErkJggg==";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAG8SURBVHhe7dq9bcJQGEbh15klpog8AUxgaFzRpsMlaZgijSlJl5bKDfEEZgKLAt9dCA5GBIGEpYSbT8p5JMu6NDRH9w+C3Z4AYx7aN2AKYcIkwoRJhAmTCBOdFWmgIPid5xbCREeF8ipTvdupucj56XMLYaIbt1UV9fTYDu+NMNGJWy0VJXE7uj/CRAdOq2WkU5eufd8PYaKDWhs9KWxH8rCgEyZuK3JV45G3/WWDMHHGuctlusgrjUc+syRMHLm50kGgMAyVFu1nX5y2VaSe3y4J8y91ubA+j+SeRlqUtbK+9JZ/+1K30jJK5O88fsDf3nCuSBUMK2V1qel+lnTzgV57pRaey2TGxLk40URrLVeHvWa9kZ5Ox3FvmDFxoZklw5dIH3Wi/HmrWTn1eiJvECauKJQGQ1X9/YZz/K6yWdM9YynHFbGSibRe77v0fE10RJi4Kp5l6sv/NdERSzlMYsaESYQJkwgTJv3bPWbzcx/865obhx+YxFIOkwgTJhEmTCJMmESYMIkwYRJhwiTChEmECZMIEyYRJkwiTJhEmDCJMGESYcIkwoRJhAmTCBMmESZMIkyYRJgwSPoEO+WgJ7Zx908AAAAASUVORK5CYII=";
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
					ctx.font = "14px Times New Roman";
					ctx.textAlign = "center";
					if(arrs[i+2][3]==1){
												ctx.drawImage(base1_image, -20, 5+48*i,base1_image.width, base1_image.height);
												ctx.fillText(arrs[i+2][0],50,25+48*i);
						if(arrs[i+2][1]!==1)	ctx.fillText(arrs[i+2][1],100,25+48*i);
												ctx.fillText(arrs[i+2][2],130,25+48*i);
					}else{
						ctx.drawImage(base2_image, -20, -5+48*i,base2_image.width, base2_image.height);
												ctx.fillText(arrs[i+2][0],50,15+48*i);
						if(arrs[i+2][1]!==1)	ctx.fillText(arrs[i+2][1],100,15+48*i);
												ctx.fillText(arrs[i+2][2],130,15+48*i);
												ctx.fillText(arrs[i+2][3],85,35+48*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+48*i);
				}
			}
		}
		
		return 0;
	}
	function MyRasional29(){
		var fpb,aa,bb,cc
		var a1,a2,a3,a4
		var ft,sisa
		var atas,bawah
		var angka = [2,3,5,6,7,10,11,13,14,15];
		do{	
			do{
				angka = RandomMyArray(angka);
				aa = angka[0];
				bb = angka[1];
				a1 = aa+bb;
				a2 = 2;
				a3 = aa*bb;
				a4 = aa-bb;
			}while(aa<=bb);
			
			fpb = CariFPB([a1,a2,a4])
			
			var res0 = a1/fpb;
			var res1 = a2/fpb;
			var res2 = a3;
			var res3 = a4/fpb;
		}while(res2==12 || res2==20 || res2==45 || res2==18 || res2==50 || res2==75)
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var xx = [res0,res1,res2,res3];
		var xx1 = [res1,res0,res2,res3];
		var xx2 = [res3,res0,res2,res1];
		var xx3 = [res1,res3,res0,res2];
	
		var xfix = [xx,xx1,xx2,xx3];
		var csoal = [aa,bb];
		var benar = xfix[0];
		var arrSalah = [xfix[1],xfix[2],xfix[3]];
	
		var gabungJaw = [xfix[0],xfix[1],xfix[2],xfix[3]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, benar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal29(canv){
		const Rasional = MyRasional29();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional29(canv,ArSisi[1]);
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	
	
	//==================================================================
	
	function GambarSoalRasional30(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillStyle = "black";
			for(var i=0;i<4;i++){
				ctx.fillText(arr[0],62,43);
				ctx.fillText(arr[1],135,43);
				ctx.fillText(arr[0],62,88);
				ctx.fillText(arr[1],135,88);
				ctx.fillText(arr[1],265,58);
			}
		}
		return 0;
	}
	function MyRasional30(){
		var angka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
		do{
			angka = RandomMyArray(angka);
			var ct = RandomAngkaAtoB(1,9);
			var ab = ct*RandomAngkaAtoB(1,5);
			var aa = angka[0];
			var bb = angka[1];
			var res1 = bb+aa*aa;
			var res2 = 2*aa;
			var res = res1-res2;
			var ft1 = res<=0;
			var ft2 = (bb-aa*aa)!==1;
			var ft = ft1 || ft2;
		}while(ft)
		
		var ar_er = [];
		for(var i=-10;i<=10;i++){
			if(i!==0) ar_er.push(i);
		}
		
		do{
			ar_er = RandomMyArray(ar_er);
			var xx = res;
			var xx1 = xx+ar_er[0];
			var xx2 = xx+ar_er[1];
			var xx3 = xx+ar_er[2];
			var ft = xx1<=0 || xx2<=0 || xx3<=0;
		}while(ft)
		
		var xxx = [xx,xx1,xx2,xx3];
		
		var csoal = [aa,bb];
		var benar = xx;
		var arrSalah = [xx1,xx2,xx3];
	
		var ArSisi = csoal;
		
		var fix = [];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function GetSoal30(canv){
		const Rasional = MyRasional30();
		var ArSisi=Rasional[0];
		var benar=Rasional[1];
		var arrSalah=Rasional[2];
		
		const DrawRasional = GambarSoalRasional30(canv,ArSisi);
		var ss
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar=RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	//==================================================================
	//==================================================================
	//==================================================================
	//==================================================================
	//==================================================================
	//==================================================================
	//==================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	//============================================================================
	
	
	
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
					GetSoal20,
					GetSoal21,
					GetSoal22,
					GetSoal23,
					GetSoal24,
					GetSoal25,
					GetSoal26,
					GetSoal27,
					GetSoal28,
					GetSoal29,
					GetSoal30];
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
		cc1.width = 492;
		cc1.height = 117;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional1 = GambarJawabRasional1(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		cc1.width = 356;
		cc1.height = 60;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional2 = GambarJawabRasional2(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		cc1.width = 255;
		cc1.height = 115;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pada kegiatan sosial menerima sumbangan terigu untuk dibagikan kepada warga, yaitu:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pada kegiatan sosial menerima sumbangan terigu untuk dibagikan kepada warga, yaitu:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		cc1.width = 414;
		cc1.height = 140;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal berikut:</p>";
		const DrawRasional4 = GambarJawabRasional4(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		cc1.width = 372;
		cc1.height = 62;
		cc2.width = 372+20;//untuk ABCD
		cc2.height = 62*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan beberapa bilangan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan beberapa bilangan ini:</p>";
		const DrawRasional5 = GambarJawabRasional5(cc2.id,ss[1]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		cc1.width = 372;
		cc1.height = 62;
		cc2.width = 372+20;//untuk ABCD
		cc2.height = 62*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan beberapa bilangan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan beberapa bilangan ini:</p>";
		const DrawRasional6 = GambarJawabRasional6(cc2.id,ss[1]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		cc1.width = 469;
		cc1.height = 67;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan perkalian pecahan berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan perkalian pecahan berikut:</p>";
		const DrawRasional7 = GambarJawabRasional7(cc2.id,ss[1]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		cc1.width = 265;
		cc1.height = 119;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan bentuk pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan bentuk pecahan ini:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		cc1.width = 492;
		cc1.height = 117;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan bentuk pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan bentuk pecahan ini:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		cc1.width = 429;
		cc1.height = 94;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal berikut:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		cc1.width = 442;
		cc1.height = 182;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal berikut:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		cc1.width = 469;
		cc1.height = 67;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan perkalian pecahan berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan perkalian pecahan berikut:</p>";
		const DrawRasional12 = GambarJawabRasional12(cc2.id,ss[1]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		cc1.width = 474;
		cc1.height = 65;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional13 = GambarJawabRasional13(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		cc1.width = 484;
		cc1.height = 104;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal berikut:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		cc1.width = 383;
		cc1.height = 43;
		cc2.width = 100;
		cc2.height = 180;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan nilai n:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan nilai n:</p>";
		const DrawRasional15 = GambarJawabRasional15(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		cc1.width = 396;
		cc1.height = 155;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal berikut:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		cc1.width = 258;
		cc1.height = 193;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Final lomba Sains diikuti oleh empat orang siswa yaitu Andi, Budi, Candra, dan Dewi. <br>Tabel berikut adalah hasil akhir skor yang diperoleh oleh empat siswa tersebut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Final lomba Sains diikuti oleh empat orang siswa yaitu Andi, Budi, Candra, dan Dewi. <br>Tabel berikut adalah hasil akhir skor yang diperoleh oleh empat siswa tersebut:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		cc1.width = 286;
		cc1.height = 59;
		cc2.width = 90;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional18 = GambarJawabRasional18(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
		cc1.width = 286;
		cc1.height = 59;
		cc2.width = 90;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional19 = GambarJawabRasional19(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==20){
		cc1.width = 286;
		cc1.height = 59;
		cc2.width = 90;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional20 = GambarJawabRasional20(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==21){
		cc1.width = 331;
		cc1.height = 59;
		cc2.width = 166;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional21 = GambarJawabRasional21(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==22){
		cc1.width = 331;
		cc1.height = 59;
		cc2.width = 166;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional22 = GambarJawabRasional22(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==23){
		cc1.width = 331;
		cc1.height = 59;
		cc2.width = 166;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional23 = GambarJawabRasional23(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==24){
		cc1.width = 352;
		cc1.height = 51;
		cc2.width = 178;
		cc2.height = 28*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional24 = GambarJawabRasional24(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==25){
		cc1.width = 343;
		cc1.height = 49;
		cc2.width = 178;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional25 = GambarJawabRasional25(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==26){
		cc1.width = 343;
		cc1.height = 49;
		cc2.width = 178;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional26 = GambarJawabRasional26(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==27){
		cc1.width = 343;
		cc1.height = 49;
		cc2.width = 166;
		cc2.height = 25*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional27 = GambarJawabRasional27(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==28){
		cc1.width = 343;
		cc1.height = 49;
		cc2.width = 166;
		cc2.height = 25*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional28 = GambarJawabRasional28(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==29){
		cc1.width = 343;
		cc1.height = 49;
		cc2.width = 178;
		cc2.height = 49*4;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		const DrawRasional29 = GambarJawabRasional29(cc2.id,ss[1]);
		//dd2.innerHTML="<br>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==30){
		cc1.width = 483;
		cc1.height = 98;
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan ini:</p>";
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else {
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