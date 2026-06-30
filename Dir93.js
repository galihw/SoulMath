function Print93(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
		if(gg.length==2)	return gg[0]+", "+gg[1];
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
	
	function GambarTransformasi17(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAAAqCAYAAAAAlATjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAQfSURBVHhe7d2JjtwgEEXRmfz/PycpZZ6EKmAWA6bc90jIY7OaJdXTSpTv3399AQAQwK+fKwAAxyNoAQDCIGgBAMIgaAEAwiBoAQDCIGgBAMIgaAEAwiBoAQDC4B8XAxN8f3///PTP7GO1un3A27HnRvogaAET6PDVjlN6SK2sv69p7Qe4q3evpXtZeuu2lOfrQWATO5jpodR968EGTpUGndX7maAFbOIPs7/PfVIFotj14YugBQAYtvvDFkELeEDuU+muT6rAbDv3M0ELeBhfC+JNVu9nghawUelA81sWItO+tuvqvbw1aK2OwKvbX+nO2CO998qxRpkHO9Q2VqVdAetqfk6fu9PHt8Opc6D9q728epz/BS3rsJSeVBuD5e06/CvsWGycw9ZbCYhu517+L2j5w+TvTe4P19ZnIxSQLPEH+7WV63Aa9sK4HXM32sdJ68rZGZPGi9mGvh5sHdDKgSPvk+ac/TVux9yxPueKvDZDQctHad3bVUn3V2r5raydNxwQe4eWObEySp5/pntfxz9P6VkpT9dcvtTyU2nZXPlSXq5sqtaWz9d9Kf+u2e3VXL1Hy1jS+r687kv5plTHS5/rZ7sq5eSep3V8vu5L+TmlOv55Ss9Kebrm8qWWn0rL5sqX8nJlZ1rZ/pS/iKGAYVelGnupkXL28+oJP5nmQ6k2F5q7tI6kbYlv35LvozaGWn7Kl/Xle9pKqV6q1pcZ7a+F2tzh7nv4+rk27vaRY+3oquSp39SK8VoZXZUkbUtmjKGWn/JlffmetmZSf6tMCVq9NJnok5u3O/OYq9vSXm4MVwfiqs2W/lIt5Uv7q6WuL2P3uw77LDP2yalzdcra7hrDVZst/aV6y59qe9Aqbbqcqw06utlQZ3Obpl5an9a6aV++zkhbV/tLbfW0+alOmysbw+lre3cMT56dKLYHLU1kK026T1jD5tbWKE0jVLe2Vi396XnLul+Vm/Vun+DEubIxnLy2s8aguqV3lZb+9LzWViSPfD3YM4madJ8Qg63VrAPT2tbMPnGWT1rbJ85OBI8ELVObRMuzMiW7F+GEBc+98+pxjbR/Z0yz3q9lf9wZ58lW7JMZczVrXFHWdmQMd8bt654wB6Ouxj4taGkjKbVo2XwtZrXzNHsHe5crfp5r5Y2vc2Wkfa+njVrZnrY81ZU7bUVz911XzVVLu75MjspIS7sjWsYiM8bQ00atbE9bkbzmv9tfvSg7Fv1NG+vT2NqZHXvERNgn7OfYdu61nr4e+3owEg4fAJzhNUHLgoqi9Wy7PmkQGPEGtpfZz1jlVb9pRT4kHHC8he1l9jNW4etBAEAYBC0AQBgELQBAGAQtYCL9JYTZVrUL1KzceyNtv+bfaQEA3o/ftAAAYRC0AABhELQAAGEQtAAAQXx9/QGm1pB9xIz9UgAAAABJRU5ErkJggg==";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.fillStyle = "black";
			ctx.font = "14px Calibri";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],62,27);
			ctx.fillText(arr[1],87,27);
			ctx.fillText(arr[2],222,35);
			ctx.fillText(arr[3],405,35);
		}
		return 0;
	}
	function GetSoal17(canv){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
			var aa = RandomAngkaAtoB(-10,10);
			var bb = RandomAngkaAtoB(-10,10);
			var cc = RandomAngkaAtoB(-10,10);
			var dd = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0 || aa==xx || bb==yy || cc==aa || cc==xx || dd==bb || dd==yy);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		var strc = cc; if(cc<0)	strc="\u{2212}"+Math.abs(cc);
		var strd = dd; if(dd<0)	strd="\u{2212}"+Math.abs(dd);
		
		var ac = aa+cc;
		var strac = ac; if(ac<0)	strac="\u{2212}"+Math.abs(ac);
		var bd = bb+dd;
		var strbd = bd; if(bd<0)	strbd="\u{2212}"+Math.abs(bd);
		
		var arxy = translasi(xx,yy,ac,bd);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		var Gambar = GambarTransformasi17(canv,[strx,stry,strb,strd]);
		
		var ss = "Jika titik A’("+strxb+", "+stryb+") adalah bayangan akhir, maka nilai p dan q adalah ...";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var straa = aa; if(aa<0)					straa="\u{2212}"+Math.abs(aa);
		var strcc = cc; if(cc<0)					strcc="\u{2212}"+Math.abs(cc);
		var strae = aa+ar_er[0]; if(aa+ar_er[0]<0)	strae="\u{2212}"+Math.abs(aa+ar_er[0]);
		var strce = cc+ar_er[0]; if(cc+ar_er[0]<0)	strce="\u{2212}"+Math.abs(cc+ar_er[0]);
		
		ar_er = RandomMyArray(ar_er);
		var Ar = [];
		Ar[0] = (straa)+" dan "+(strcc);
		Ar[1] = (strae)+" dan "+(strce);
		Ar[2] = (strae)+" dan "+(strcc);
		Ar[3] = (straa)+" dan "+(strce);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal16(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
			var kk = RandomAngkaAtoB(-10,10);
			var xx2 = RandomAngkaAtoB(-10,10);
			var yy2 = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0 || kk==0 || kk==xx || xx2==xx || yy2==yy);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var strx2 = xx2; if(xx2<0)	strx2="\u{2212}"+Math.abs(xx2);
		var stry2 = yy2; if(yy2<0)	stry2="\u{2212}"+Math.abs(yy2);
		var strk = kk; if(kk<0)	strk="\u{2212}"+Math.abs(kk);
		
		var arxy = cerminx(xx,yy,kk)
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		var arxy2 = cerminx(xx2,yy2,kk)
		var xb2 = arxy2[0];
		var yb2 = arxy2[1];
		var strxb2 = xb2; if(xb2<0)	strxb2="\u{2212}"+Math.abs(xb2);
		var stryb2 = yb2; if(yb2<0)	stryb2="\u{2212}"+Math.abs(yb2);
		
		var ss = "Sebuah ruas garis AB dimana A("+strx+", "+stry+") dan B(p, "+stry2+"). ";
		ss += "Jika ruas garis tersebut dicerminkan terhadap garis x = a akan diperoleh bayangan A'("+strxb+", "+stryb+") dan B'("+strxb2+", "+stryb2+"). "
		ss += "Nilai p = ...";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var Ar = [];
		Ar[0] = xx2;
		Ar[1] = Ar[0]+ar_er[0]; 
		Ar[2] = Ar[0]+ar_er[1];
		Ar[3] = Ar[0]+ar_er[2];
		
		for(var i=0;i<4;i++){
			if(Ar[i]<0) Ar[i]="\u{2212}"+Math.abs(Ar[i]);
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
	function GambarBangunRuang15(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAsCAYAAAAgoTVPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGKSURBVGhD7ZGBrsIwCEX3/z89g7EJj0fhQus2ak/SqC2Qy/E4N2G2tARbWoIlpB3H8T4WSA1KeWlcRE8KUhMhNGHWPzULLY+8y9ZYwNXRwXeB5EREWkCVVYQRWWkEuqdbRYOqSBsRRqC7QtIqMCqsMSyNBlSQNksGgezsSns6MqOWGanhuO+fz39Qo9d8N1o+eYfUSOjdqum+eI1PoGWUh6O907HwakpL+xZD0n6ZsDTP9C9gOdjSOmxpCba0BNOltXfrVMfaIyyN38vvvR5Jq/XOnVgZ1Fs0NK9B6mfSMs44Gubb5/MPVkND1nj11bAcDEnjePWcNt87d2JlUG+R0Pwdqa+GtVNKmnznv62+SsgdOeqt1UDI9/bb6qmGtU93y5UEZLD2N6VVE9cyayeC17OcNElmB2/3paRpXCqNqC4tm9/rc6VVFpfJjuzsTq0qLZsb6YOkVRSXyYzuCk2uJi2bF+2Dp1cSl8ka6QlNryDu28KI51sIcsUfu5y0K9jSEmxpCba0MOf5AiBA5MyzrdumAAAAAElFTkSuQmCC";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
		}
		return 0;
	}
	function GetSoal15(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
			var kk = RandomAngkaAtoB(-10,10);
			var xP = RandomAngkaAtoB(-10,10);
			var yP = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0 || kk==0 || xP==xx || yP==yy);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var aa = xP;
		var bb = yP;
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		var strk = kk; if(kk<0)	strk="\u{2212}"+Math.abs(kk);
		
		var arxy = dilatasi(xx,yy,aa,bb,kk);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		var ss = "Sebuah titik P("+strx+", "+stry+") didilatasi dengan pusat A(m, "+strb+") dan skala k sehingga diperoleh titik bayangan P("+strxb+", "+stryb+"). Nilai m = ...";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var Ar = [];
		Ar[0] = aa;
		Ar[1] = Ar[0]+ar_er[0]; 
		Ar[2] = Ar[0]+ar_er[1];
		Ar[3] = Ar[0]+ar_er[2];
		
		for(var i=0;i<4;i++){
			if(Ar[i]<0) Ar[i]="\u{2212}"+Math.abs(Ar[i]);
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
	function GetSoal14(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
			var kk = RandomAngkaAtoB(-10,10);
			var xP = RandomAngkaAtoB(-10,10);
			var yP = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0 || kk==0 || xP==xx || yP==yy);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var aa = xP;
		var bb = yP;
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		var strk = kk; if(kk<0)	strk="\u{2212}"+Math.abs(kk);
		
		var arxy = dilatasi(xx,yy,aa,bb,kk);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		arxy = dilatasi(xx,yy,-aa,-bb,kk);
		var xb1 = arxy[0];
		var yb1 = arxy[1];
		var strxb1 = xb1; if(xb1<0)	strxb1="\u{2212}"+Math.abs(xb1);
		var stryb1 = yb1; if(yb1<0)	stryb1="\u{2212}"+Math.abs(yb1);
		
		var ss = "Jika titik P("+strx+", "+stry+") didilatasi dengan pusat ("+stra+", "+strb+") dan skala "+strk+". Koordinat bayangannya adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxb+", "+stryb+")";
		Ar[1] = "("+strxb1+", "+stryb1+")";
		Ar[2] = "("+strxb1+", "+stryb+")";
		Ar[3] = "("+strxb+", "+stryb1+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GambarTransformasi13(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAA5CAYAAACrv5cBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALtSURBVHhe7d2BbtsgEAbgZu//ztvYdhKjYEMSO07u+ySraXxgfKF/025Sbz9/+wJI4Me/jwAfT+ABaQg8IA2BB6Qh8IA0BB6QhsAD0hB4QBoCD0hD4AFpCDwgDYEHpCHwgDQEHpCGwAPSEHhAGgIPSEPgAWkIPCANgQekIfCANC4ZeLfb7c9xtLOu8y4e7ccn9PPMe/iEfj3TGf2Y/jONMwuppyr1s38Bsle7Mr7WW2dvnnvnz+CR3lyhrytr6NWu3kOp79ma4wp9uqoje7P0Dq8sIo7e53tGG+NZolHt0V7XZtvW69kVrazxyPuJvRT7LY7RNe2/bVu9e9RhP9KuvKBefJ7J3mNk+kfa1tZ3qUjn+nyb2HGuV1vU89djt645OlebrWOtp7V2zNbrF+fK8/XjPaNr9uZYqS3K821N0dbV6jG19vlRHd8d0atD3uH1FhnPlY/1+ZkbqsdyLbEp42i158vntRhT17U1PTEuxoT6cVipbdVjeX+HvMMreudHY/Zq965VzNQUK3VnmVnPK+z1qnf+GWP25gijuplrhL3a0bjW7Pwr851lZj2vMNurFZcOvDCzxL31hNk69ns1et0eHbM3RxjVzVwjjGrDzDqK2flHdXx3RK8u/R+Py82Wo96AvJ/y+sXxLuy9z3TpwFuxtTlt2tcpvY/wKEcmce9cx0sCbzWAtsIsiyvef/u67K3xqHtYmXd1DfbeNfdecc+67gq8uNDogqPzsXnq73q92va5Xk1PzN8e9fV4rrrn0efyOOydj8ejj1ti7pi3GI2frW2f69W06pr6qK/FNdz9jxbv7B0349lr9gV7nHfr7SvWe9Q1P+Z3eJ9M+PAqn7b3Ur7DK4TImN4cT4/HjuxN2sArSmMLG+8v/TiXfv/vjH6kDjwgF7/DA9IQeEAaAg9IQ+ABaQg8IA2BB6Qh8IA0BB6QhsAD0hB4QBoCD0hD4AFpCDwgDYEHpCHwgDQEHpCGwAPSEHhAEl9fvwCGZDSRpYKA8AAAAABJRU5ErkJggg==";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0);
			ctx.fillStyle = "black";
			ctx.font = "14px Calibri";
			ctx.textAlign = "center";
			ctx.fillText(arr[0],82,20);
			ctx.fillText(arr[1],82,45);
			ctx.fillText(arr[2],120,32.5);
			ctx.fillText(arr[3],240,20);
			ctx.fillText(arr[4],240,45);
			ctx.fillText(arr[5],279,32.5);
		}
		return 0;
	}
	function GetSoal13(canv){
		var angka = [2,3,4,5,6,7,8,9,10];
		angka = RandomMyArray(angka);
		var angka2 = [1,2,3,4,5,6,7,8,9,10];
		angka2 = RandomMyArray(angka2);
		
		var bb = angka[0];
		var aa = RandomAngkaAtoB(2,bb-1)-2;
		var cc = angka2[0];
		var ee = angka[1];
		var dd = RandomAngkaAtoB(2,ee-1)-2;
		var ff = angka2[1];
		var kk = bb*ee;
		
		var bayC = dilatasi(aa/bb,cc,0,0,kk);
		var bayD = dilatasi(dd/ee,ff,0,0,kk);
		
		var strxC = bayC[0];
		var stryC = bayC[1];
		var strxD = bayD[0];
		var stryD = bayD[1];
		
		var Gambar = GambarTransformasi13(canv,[aa,bb,cc,dd,ee,ff]);
		
		var ss = "Jika titik C didilatasi dengan pusat O(0, 0) dan faktor skala k didapatkan bayangan C'{"+(strxC)+", "+(stryC)+"}. ";
		ss += "Jika titik D didilatasi dengan pusat dan faktor skala yang sama didapatkan bayangan D'. <br>";
		ss += "Koordinat titik D' adalah ...";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		
		var Ar = [];
		do{
			ar_er = RandomMyArray(ar_er);
			Ar[0] = "{"+(strxD)+", "+(stryD)+"}";
			Ar[1] = "{"+(strxD+ar_er[0])+", "+(stryD+ar_er[0])+"}";
			Ar[2] = "{"+(strxD+ar_er[0])+", "+(stryD)+"}";
			Ar[3] = "{"+(strxD)+", "+(stryD+ar_er[0])+"}";
			var ft = strxC+ar_er[0]<=0 || stryD+ar_er[0]<=0;
		}while(ft)
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal12(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
			var kk = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0 || kk==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var aa = 0;
		var bb = 0;
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		var strk = kk; if(kk<0)	strk="\u{2212}"+Math.abs(kk);
		
		var arxy = dilatasi(xx,yy,aa,bb,kk);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		arxy = dilatasi(xx,yy,-aa,-bb,kk);
		var xb1 = arxy[0];
		var yb1 = arxy[1];
		var strxb1 = xb1; if(xb1<0)	strxb1="\u{2212}"+Math.abs(xb1);
		var stryb1 = yb1; if(yb1<0)	stryb1="\u{2212}"+Math.abs(yb1);
		
		var ss = "Sebuah titik M(a, "+stry+") didilatasi dengan pusat O(0,0) dan faktor skala k sehingga diperoleh bayangan M'("+strxb+", "+stryb+"). Nilai a = ...";
		
		var ar_er = [];
		for(var i=-5;i<=5;i++){
			if(i!==0) ar_er.push(i);
		}
		
		ar_er = RandomMyArray(ar_er);
		var Ar = [];
		Ar[0] = xx;
		Ar[1] = Ar[0]+ar_er[0]; 
		Ar[2] = Ar[0]+ar_er[1];
		Ar[3] = Ar[0]+ar_er[2];
		
		for(var i=0;i<4;i++){
			if(Ar[i]<0) Ar[i]="\u{2212}"+Math.abs(Ar[i]);
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
	function GambarJawabTransformasi11(nmcanvas,arrs){
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
		do{
			var kali = RandomAngkaAtoB(1,10);
			var nn = RandomAngkaAtoB(1,10);
			var xx = nn*kali*RandomAngkaAtoB(-10,10);
			var yy = nn*kali*RandomAngkaAtoB(-10,10);
			var kk = nn;
		}while(xx==0 || yy==0 || nn==0 || kali==nn);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var strk = kk; if(kk<0)	strk="\u{2212}"+Math.abs(kk);
		var aa = 0;
		var bb = 0;
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		
		var model = RandomAngkaAtoB(0,2);
		var kk1
		var kk2
		var kk3
		var kk4
		if(model==1){
			//bulat
			kkfix = kk;
			kk1 = [kk,"",""];
			kk2 = ["",1,kk];
			kk3 = ["",1,kali];
			kk4 = [kali,"",""];
		}else{
			//pecahan
			kkfix = 1/kk;
			kk1 = ["",1,kk];
			kk2 = [kk,"",""];
			kk3 = ["",1,kali];
			kk4 = [kali,"",""];
		}
		
		var arxy = dilatasi(xx,yy,aa,bb,kkfix);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		var ss = "Sebuah titik A("+strx+", "+stry+") didilatasi dengan pusat O(0, 0) dan faktor skala k sehingga diperoleh bayangan A'("+strxb+", "+stryb+"). Nilai k = ...";
		
		var Ar = [];
		Ar[0] = kk1;
		Ar[1] = kk2;
		Ar[2] = kk3;
		Ar[3] = kk4;
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss//+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(Ar);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal10(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
			var aa = RandomAngkaAtoB(-10,10);
			var bb = RandomAngkaAtoB(-10,10);
			var kk = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0 || aa==0 || bb==0 || kk==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		var strk = kk; if(kk<0)	strk="\u{2212}"+Math.abs(kk);
		
		var arxy = dilatasi(xx,yy,aa,bb,kk);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		arxy = dilatasi(xx,yy,-aa,-bb,kk);
		var xb1 = arxy[0];
		var yb1 = arxy[1];
		var strxb1 = xb1; if(xb1<0)	strxb1="\u{2212}"+Math.abs(xb1);
		var stryb1 = yb1; if(yb1<0)	stryb1="\u{2212}"+Math.abs(yb1);
		
		var ss = "Bayangan titik P("+strx+", "+stry+") oleh dilatasi dengan faktor skala "+strk+" dan pusat O("+stra+", "+strb+") adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxb+", "+stryb+")";
		Ar[1] = "("+strxb1+", "+stryb+")";
		Ar[2] = "("+strxb+", "+stryb1+")";
		Ar[3] = "("+strxb1+", "+stryb1+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal9(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		
		var arxy = cerminyequalminx(xx,yy)
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		arxy = cerminyequalx(xx,yy);
		var xb1 = arxy[0];
		var yb1 = arxy[1];
		var strxb1 = xb1; if(xb1<0)	strxb1="\u{2212}"+Math.abs(xb1);
		var stryb1 = yb1; if(yb1<0)	stryb1="\u{2212}"+Math.abs(yb1);
		
		var ss = "Sebuah titik P dicerminkan terhadap garis y = \u{2212}x sehingga diperoleh bayangan P'("+strx+", "+stry+"). Koordinat P adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxb+", "+stryb+")";
		Ar[1] = "("+strxb1+", "+stryb+")";
		Ar[2] = "("+strxb+", "+stryb1+")";
		Ar[3] = "("+strxb1+", "+stryb1+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal8(){
		do{
			var xA = RandomAngkaAtoB(-10,10);
			var yA = RandomAngkaAtoB(-10,10);
			var xB = RandomAngkaAtoB(-10,10);
			var yB = RandomAngkaAtoB(-10,10);
		}while(xA==xB || yA==yB || xA==0 || xB==0 || yA==0 || yB==0);
		var strxA = xA; if(xA<0)	strxA="\u{2212}"+Math.abs(xA);
		var stryA = yA; if(yA<0)	stryA="\u{2212}"+Math.abs(yA);
		var strxB = xB; if(xB<0)	strxB="\u{2212}"+Math.abs(xB);
		var stryB = yB; if(yB<0)	stryB="\u{2212}"+Math.abs(yB);
		
		var arxy = rotasi(90,xA,yA)
		var xbA = arxy[0];
		var ybA = arxy[1];
		var strxbA = xbA; if(xbA<0)	strxbA="\u{2212}"+Math.abs(xbA);
		var strybA = ybA; if(ybA<0)	strybA="\u{2212}"+Math.abs(ybA);
		arxy = rotasi(90,xB,yB)
		var xbB = arxy[0];
		var ybB = arxy[1];
		var strxbB = xbB; if(xbB<0)	strxbB="\u{2212}"+Math.abs(xbB);
		var strybB = ybB; if(ybB<0)	strybB="\u{2212}"+Math.abs(ybB);
		
		arxy = rotasi(270,xA,yA)
		var xbA2 = arxy[0];
		var ybA2 = arxy[1];
		var strxbA2 = xbA2; if(xbA2<0)	strxbA2="\u{2212}"+Math.abs(xbA2);
		var strybA2 = ybA2; if(ybA2<0)	strybA2="\u{2212}"+Math.abs(ybA2);
		arxy = rotasi(270,xB,yB)
		var xbB2 = arxy[0];
		var ybB2 = arxy[1];
		var strxbB2 = xbB2; if(xbB2<0)	strxbB2="\u{2212}"+Math.abs(xbB2);
		var strybB2 = ybB2; if(ybB2<0)	strybB2="\u{2212}"+Math.abs(ybB2);
		
		var ss = "Jika titik A("+strxA+", "+stryA+") dan titik B("+strxB+", "+stryB+") diputar sejauh 90\u{00B0} dengan pusat O(0, 0) maka diperoleh bayangan A' dan B'. Koordinat bayangan itu adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxbA+", "+strybA+") dan ("+strxbB+", "+strybB+")";
		Ar[1] = "("+strxbA2+", "+strybA2+") dan ("+strxbB+", "+strybB+")";
		Ar[2] = "("+strxbA+", "+strybA+") dan ("+strxbB2+", "+strybB2+")";
		Ar[3] = "("+strxbA2+", "+strybA2+") dan ("+strxbB2+", "+strybB2+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal7(){
		do{
			var xA = RandomAngkaAtoB(-10,10);
			var yA = RandomAngkaAtoB(-10,10);
		}while(xA==0 || yA==0);
		var strxA = xA; if(xA<0)	strxA="\u{2212}"+Math.abs(xA);
		var stryA = yA; if(yA<0)	stryA="\u{2212}"+Math.abs(yA);
		
		var arxy = rotasi(270,xA,yA)
		var xbA = arxy[0];
		var ybA = arxy[1];
		var strxbA = xbA; if(xbA<0)	strxbA="\u{2212}"+Math.abs(xbA);
		var strybA = ybA; if(ybA<0)	strybA="\u{2212}"+Math.abs(ybA);
		
		arxy = rotasi(90,xA,yA)
		var xbA2 = arxy[0];
		var ybA2 = arxy[1];
		var strxbA2 = xbA2; if(xbA2<0)	strxbA2="\u{2212}"+Math.abs(xbA2);
		var strybA2 = ybA2; if(ybA2<0)	strybA2="\u{2212}"+Math.abs(ybA2);
		
		var ss = "Bayangan titik R(x, y) oleh rotasi dengan pusat di P(0, 0) sejauh 90\u{00B0} adalah R'("+strxA+", "+stryA+"). Maka koordinat R adalah...";
		
		var Ar = [];
		Ar[0] = "("+strxbA+", "+strybA+")";
		Ar[1] = "("+strxbA2+", "+strybA+")";
		Ar[2] = "("+strxbA+", "+strybA2+")";
		Ar[3] = "("+strxbA2+", "+strybA2+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal6(){
		do{
			var xA = RandomAngkaAtoB(-10,10);
			var yA = RandomAngkaAtoB(-10,10);
		}while(xA==0 || yA==0);
		var strxA = xA; if(xA<0)	strxA="\u{2212}"+Math.abs(xA);
		var stryA = yA; if(yA<0)	stryA="\u{2212}"+Math.abs(yA);
		
		var arxy = rotasi(270,xA,yA)
		var xbA = arxy[0];
		var ybA = arxy[1];
		var strxbA = xbA; if(xbA<0)	strxbA="\u{2212}"+Math.abs(xbA);
		var strybA = ybA; if(ybA<0)	strybA="\u{2212}"+Math.abs(ybA);
		
		arxy = rotasi(90,xA,yA)
		var xbA2 = arxy[0];
		var ybA2 = arxy[1];
		var strxbA2 = xbA2; if(xbA2<0)	strxbA2="\u{2212}"+Math.abs(xbA2);
		var strybA2 = ybA2; if(ybA2<0)	strybA2="\u{2212}"+Math.abs(ybA2);
		
		var ss = "Bayangan titik Q("+strxA+", "+stryA+") oleh rotasi dengan pusat P(0, 0) sejauh 270\u{00B0} adalah...";
		
		var Ar = [];
		Ar[0] = "("+strxbA+", "+strybA+")";
		Ar[1] = "("+strxbA2+", "+strybA+")";
		Ar[2] = "("+strxbA+", "+strybA2+")";
		Ar[3] = "("+strxbA2+", "+strybA2+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal5(){
		do{
			var xA = RandomAngkaAtoB(-10,10);
			var yA = RandomAngkaAtoB(-10,10);
			var xB = RandomAngkaAtoB(-10,10);
			var yB = RandomAngkaAtoB(-10,10);
		}while(xA==xB || yA==yB || xA==0 || xB==0 || yA==0 || yB==0);
		var strxA = xA; if(xA<0)	strxA="\u{2212}"+Math.abs(xA);
		var stryA = yA; if(yA<0)	stryA="\u{2212}"+Math.abs(yA);
		var strxB = xB; if(xB<0)	strxB="\u{2212}"+Math.abs(xB);
		var stryB = yB; if(yB<0)	stryB="\u{2212}"+Math.abs(yB);
		
		var arxy = rotasi(90,xA,yA)
		var xbA = arxy[0];
		var ybA = arxy[1];
		var strxbA = xbA; if(xbA<0)	strxbA="\u{2212}"+Math.abs(xbA);
		var strybA = ybA; if(ybA<0)	strybA="\u{2212}"+Math.abs(ybA);
		arxy = rotasi(90,xB,yB)
		var xbB = arxy[0];
		var ybB = arxy[1];
		var strxbB = xbB; if(xbB<0)	strxbB="\u{2212}"+Math.abs(xbB);
		var strybB = ybB; if(ybB<0)	strybB="\u{2212}"+Math.abs(ybB);
		
		arxy = rotasi(270,xA,yA)
		var xbA2 = arxy[0];
		var ybA2 = arxy[1];
		var strxbA2 = xbA2; if(xbA2<0)	strxbA2="\u{2212}"+Math.abs(xbA2);
		var strybA2 = ybA2; if(ybA2<0)	strybA2="\u{2212}"+Math.abs(ybA2);
		arxy = rotasi(270,xB,yB)
		var xbB2 = arxy[0];
		var ybB2 = arxy[1];
		var strxbB2 = xbB2; if(xbB2<0)	strxbB2="\u{2212}"+Math.abs(xbB2);
		var strybB2 = ybB2; if(ybB2<0)	strybB2="\u{2212}"+Math.abs(ybB2);
		
		var ss = "Jika titik A("+strxA+", "+stryA+") dan titik B("+strxB+", "+stryB+") diputar sejauh 90\u{00B0} dengan pusat O(0, 0) maka diperoleh bayangan A' dan B'. Koordinat bayangan itu adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxbA+", "+strybA+") dan ("+strxbB+", "+strybB+")";
		Ar[1] = "("+strxbA2+", "+strybA2+") dan ("+strxbB+", "+strybB+")";
		Ar[2] = "("+strxbA+", "+strybA+") dan ("+strxbB2+", "+strybB2+")";
		Ar[3] = "("+strxbA2+", "+strybA2+") dan ("+strxbB2+", "+strybB2+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal4(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		do{
			var aa = RandomAngkaAtoB(-10,10);
			var bb = RandomAngkaAtoB(-10,10);
		}while(aa==0 || bb==0);
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		
		var arxy = translasi(xx,yy,aa,bb);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		do{
			var xx2 = RandomAngkaAtoB(-10,10);
			var yy2 = RandomAngkaAtoB(-10,10);
		}while(xx2==xx || yy2==yy)
		
		var strx2 = xx2; if(xx2<0)	strx2="\u{2212}"+Math.abs(xx2);
		var stry2 = yy2; if(yy2<0)	stry2="\u{2212}"+Math.abs(yy2);
		
		var arxy2 = translasi(xx2,yy2,aa,bb);
		var xb2 = arxy2[0];
		var yb2 = arxy2[1];
		var strxb2 = xb2; if(xb2<0)	strxb2="\u{2212}"+Math.abs(xb2);
		var stryb2 = yb2; if(yb2<0)	stryb2="\u{2212}"+Math.abs(yb2);
		
		var arxy3 = translasi(xx,yy,-aa,-bb);
		var xb3 = arxy3[0];
		var yb3 = arxy3[1];
		var strxb3 = xb3; if(xb3<0)	strxb3="\u{2212}"+Math.abs(xb3);
		var stryb3 = yb3; if(yb3<0)	stryb3="\u{2212}"+Math.abs(yb3);
		
		var ss = "Bayangan Titik A("+strx+", "+stry+") jika ditranslasikan oleh T = ("+stra+", "+strb+") adalah ...";
		var ss = "Sebuah titik R("+strx+", "+stry+") digeser sehingga diperoleh bayangan R'("+strxb+", "+stryb+"). Dengan translasi yang sama titik S("+strx2+", "+stry2+") akan bergeser menjadi S'. Koordinat S' adalah ..."
		
		var Ar = [];
		Ar[0] = "("+strxb2+", "+stryb2+")";
		Ar[1] = "("+strxb3+", "+stryb2+")";
		Ar[2] = "("+strxb2+", "+stryb3+")";
		Ar[3] = "("+strxb3+", "+stryb3+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal3(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		do{
			var aa = RandomAngkaAtoB(-10,10);
			var bb = RandomAngkaAtoB(-10,10);
		}while(aa==0 || bb==0);
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		
		var aa2 = -aa;
		var bb2 = -bb;
		var stra2 = aa2; if(aa2<0)	stra2="\u{2212}"+Math.abs(aa2);
		var strb2 = bb2; if(bb2<0)	strb2="\u{2212}"+Math.abs(bb2);
		
		var arxy = translasi(xx,yy,aa,bb);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		var ss = "Sebuah titik A("+strx+", "+stry+") ditranslasikan sejauh T sehingga diperoleh peta A'("+strxb+", "+stryb+"). Translasi T tersebut adalah ...";
		
		
		var Ar = [];
		Ar[0] = "("+stra+", "+strb+")";
		Ar[1] = "("+stra+", "+strb2+")";
		Ar[2] = "("+stra2+", "+strb+")";
		Ar[3] = "("+stra2+", "+strb2+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal2(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		do{
			var aa = RandomAngkaAtoB(-10,10);
			var bb = RandomAngkaAtoB(-10,10);
		}while(aa==0 || bb==0);
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		
		arxy = translasi(xx,yy,-aa,-bb);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		var arxy = translasi(xx,yy,aa,bb);
		var xb1 = arxy[0];
		var yb1 = arxy[1];
		var strxb1 = xb1; if(xb1<0)	strxb1="\u{2212}"+Math.abs(xb1);
		var stryb1 = yb1; if(yb1<0)	stryb1="\u{2212}"+Math.abs(yb1);
		
		var ss = "Bayangan Titik A("+strx+", "+stry+") jika ditranslasikan oleh T = ("+stra+", "+strb+") adalah ...";
		var ss = "Sebuah titik P ditranslasikan sejauh T = ("+stra+", "+strb+") sehingga diperoleh titik bayangan P'("+strx+", "+stry+"). Koordinat titik P adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxb+", "+stryb+")";
		Ar[1] = "("+strxb1+", "+stryb+")";
		Ar[2] = "("+strxb+", "+stryb1+")";
		Ar[3] = "("+strxb1+", "+stryb1+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		
		return ArFix;
	}
	function GetSoal1(){
		do{
			var xx = RandomAngkaAtoB(-10,10);
			var yy = RandomAngkaAtoB(-10,10);
		}while(xx==0 || yy==0);
		var strx = xx; if(xx<0)	strx="\u{2212}"+Math.abs(xx);
		var stry = yy; if(yy<0)	stry="\u{2212}"+Math.abs(yy);
		do{
			var aa = RandomAngkaAtoB(-10,10);
			var bb = RandomAngkaAtoB(-10,10);
		}while(aa==0 || bb==0);
		var stra = aa; if(aa<0)	stra="\u{2212}"+Math.abs(aa);
		var strb = bb; if(bb<0)	strb="\u{2212}"+Math.abs(bb);
		
		var arxy = translasi(xx,yy,aa,bb);
		var xb = arxy[0];
		var yb = arxy[1];
		var strxb = xb; if(xb<0)	strxb="\u{2212}"+Math.abs(xb);
		var stryb = yb; if(yb<0)	stryb="\u{2212}"+Math.abs(yb);
		
		arxy = translasi(xx,yy,-aa,-bb);
		var xb1 = arxy[0];
		var yb1 = arxy[1];
		var strxb1 = xb1; if(xb1<0)	strxb1="\u{2212}"+Math.abs(xb1);
		var stryb1 = yb1; if(yb1<0)	stryb1="\u{2212}"+Math.abs(yb1);
		
		var ss = "Bayangan Titik A("+strx+", "+stry+") jika ditranslasikan oleh T = ("+stra+", "+strb+") adalah ...";
		
		var Ar = [];
		Ar[0] = "("+strxb+", "+stryb+")";
		Ar[1] = "("+strxb1+", "+stryb+")";
		Ar[2] = "("+strxb+", "+stryb1+")";
		Ar[3] = "("+strxb1+", "+stryb1+")";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		
		var noBenar = NoJawabanBenar(Ar, jawab);
		var textSoal = ss+" <p>A. "+Ar[0]+" <br>B. "+Ar[1]+" <br>C. "+Ar[2]+" <br>D. "+Ar[3]+"</p>";
		
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
					GetSoal17];
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
	if(no==11){
		ss = namefunc[no-1]();
		cc1.width = 100;
		cc1.height = 180;
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		const DrawRasional1 = GambarJawabTransformasi11(cc1.id,ss[1]);
		dd4.innerHTML+="Jawaban : "+ss[2];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Ada dua buah titik C dan D.</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Ada dua buah titik C dan D.</p>";
		cc1.width = 316;
		cc1.height = 57;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diketahui:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diketahui:</p>";
		cc1.width = 429;
		cc1.height = 42;
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