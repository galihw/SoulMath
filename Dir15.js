function Print15(no,d1,c1,d2,c2,d3,c3,d4,nourut){
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
	function MyPersamaanKuadrat1(){
		var model = RandomAngkaAtoB(-1,4);
		//model = 3;
		var jawab = ["Nyata, rasional, kembar","Nyata, rasional, berlainan","Kompleks","Imaginer"];
		
		var aa,bb,cc,Pers,Dskrm;
		var pp,qq;
		if(model==0){
			//"Nyata, rasional, kembar"
			do{
				pp = -12+RandomAngkaAtoB(1,24);
			}while(pp==0)
			qq = pp;
			aa = 1;
			bb = pp+qq;
			cc = pp*qq;
			Pers = "x\u{00B2} + "+bb+"x + "+cc;
			if(bb<0) Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x + "+cc;
		}else if(model==1){
			//"Nyata, rasional, berlainan"
			do{
				pp = -12+RandomAngkaAtoB(1,24);
				qq = -12+RandomAngkaAtoB(1,24);
			}while(pp+qq==1 || pp+qq==-1 ||pp*qq==0)
			aa = 1;
			bb = pp+qq;
			cc = pp*qq;
			if(pp+qq!==0){
				if(bb>0 && cc>0) Pers = "x\u{00B2} + "+bb+"x + "+cc;
				else if(bb>0 && cc<0) Pers = "x\u{00B2} + "+bb+"x \u{2212} "+Math.abs(cc);
				else if(bb<0 && cc>0) Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x + "+Math.abs(cc);
				else 				  Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc);
			}else{
				Pers = "x\u{00B2} \u{2212} "+Math.abs(cc);
			}
			
		}else if(model==2){
			//"Kompleks"
			do{
				aa = 1;
				bb = -12+RandomAngkaAtoB(1,24);
				cc = RandomAngkaAtoB(1,24);
				Dskrm = bb**2 - 4*aa*cc;
			}while(Dskrm>=0 || Math.abs(bb)<=1)
			Pers = "x\u{00B2} + "+Math.abs(bb)+"x + "+cc;
			if(bb<0) Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x + "+cc;aa = 1;
		}else{
			//"Imaginer"
			aa = 1;
			bb = 0;
			do{
				cc = RandomAngkaAtoB(1,12);
			}while(cc==1 || cc==4 || cc==9)
			Pers = "x\u{00B2} + "+Math.abs(cc);
		}
		
		var ArSisi = [Pers];
		
		var benar = jawab[model];
		var salah1 = jawab[0];
		var salah2 = jawab[1];
		var salah3 = jawab[2];
		var salah4 = jawab[3];
		arrSalah = [salah1,salah2,salah3,salah4];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat2(){
		//x\u{00B2} + 10x + 25
		//x\u{00B2} \u{2212} 10x + 25
		var model = RandomAngkaAtoB(-1,4);
		//model = 3;
		var jawab = ["Nyata, rasional, kembar","Nyata, rasional, berlainan","Kompleks","Imaginer"];
		
		var aa,bb,cc,Pers,Dskrm,Akar;
		var pp,qq,Akar1,Akar2;
		var ArAkar = [];
		if(model==0){
			//"Nyata, rasional, kembar"
			do{
				pp = -12+RandomAngkaAtoB(1,24);
			}while(pp==0)
			qq = pp;
			aa = 1;
			bb = pp+qq;
			cc = pp*qq;
			Pers = "m\u{00B2} + "+bb+"m + "+cc;
			if(bb<0) Pers = "m\u{00B2} \u{2212} "+Math.abs(bb)+"m + "+cc;
			
			if(pp<0){	
				Akar = "m\u{2081} = m\u{2082} = "+Math.abs(pp);
				ArAkar = ["m\u{2081} = m\u{2082} = \u{2212}"+Math.abs(pp),"m\u{2081} = "+Math.abs(pp)+" dan m\u{2082} = \u{2212}"+Math.abs(pp),"m akar imaginer"]
			}else{
				Akar = "m\u{2081} = m\u{2082} = \u{2212}"+Math.abs(pp);
				ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(pp),"m\u{2081} = "+Math.abs(pp)+" dan m\u{2082} = \u{2212}"+Math.abs(pp),"m akar imaginer"]
			}
		}else if(model==1){
			//"Nyata, rasional, berlainan"
			do{
				pp = -12+RandomAngkaAtoB(1,24);
				qq = -12+RandomAngkaAtoB(1,24);
			}while(pp+qq==1 || pp+qq==-1 ||pp*qq==0)
			aa = 1;
			bb = pp+qq;
			cc = pp*qq;
			if(pp+qq!==0){
				if(bb>0 && cc>0) Pers = "m\u{00B2} + "+bb+"m + "+cc;
				else if(bb>0 && cc<0) Pers = "m\u{00B2} + "+bb+"m \u{2212} "+Math.abs(cc);
				else if(bb<0 && cc>0) Pers = "m\u{00B2} \u{2212} "+Math.abs(bb)+"m + "+Math.abs(cc);
				else 				  Pers = "m\u{00B2} \u{2212} "+Math.abs(bb)+"m \u{2212} "+Math.abs(cc);
			}else{
				Pers = "x\u{00B2} \u{2212} "+Math.abs(cc);
			}
			Akar1 = "m\u{2081} = "+pp;
			Akar2 = "m\u{2082} = "+qq;
			if(pp<0)	Akar1 = "m\u{2081} = \u{2212}"+Math.abs(pp);
			if(qq<0)	Akar2 = "m\u{2082} = \u{2212}"+Math.abs(qq);
			Akar = Akar1+" dan "+Akar2;
			ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(pp),"m\u{2081} = "+Math.abs(pp)+" dan m\u{2082} = \u{2212}"+Math.abs(qq),"m akar imaginer"]
			if(pp<0 && qq<0)		ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(pp),"m\u{2081} = "+Math.abs(pp)+" dan m\u{2082} = "+Math.abs(qq),"m akar imaginer"]
			else if(pp<0 && qq>0)	ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(pp),"m\u{2081} = "+Math.abs(pp)+" dan m\u{2082} = \u{2212}"+Math.abs(qq),"m akar imaginer"]
			else if(pp>0 && qq<0)	ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(pp),"m\u{2081} = \u{2212}"+Math.abs(pp)+" dan m\u{2082} = "+Math.abs(qq),"m akar imaginer"]
			else 					ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(pp),"m\u{2081} = \u{2212}"+Math.abs(pp)+" dan m\u{2082} = \u{2212}"+Math.abs(qq),"m akar imaginer"]
		}else if(model==2){
			//"Kompleks"
			do{
				aa = 1;
				bb = -12+RandomAngkaAtoB(1,24);
				cc = RandomAngkaAtoB(1,24);
				Dskrm = bb**2 - 4*aa*cc;
			}while(Dskrm>=0 || Math.abs(bb)<=1)
			Pers = "m\u{00B2} + "+Math.abs(bb)+"m + "+cc;
			if(bb<0) Pers = "m\u{00B2} \u{2212} "+Math.abs(bb)+"m + "+cc;aa = 1;
			Akar = "m akar imaginer";
			ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(cc),"m\u{2081} = \u{00BD}("+Math.abs(bb)+" + \u{221A}"+Math.abs(Dskrm)+") dan m\u{2082} = \u{00BD}("+Math.abs(bb)+" \u{2212} \u{221A}"+Math.abs(Dskrm)+")","m\u{2081} = "+Math.abs(cc)+" m\u{2082} = \u{2212}"+Math.abs(cc)]
		}else{
			//"Imaginer"
			aa = 1;
			do{
				bb = RandomAngkaAtoB(1,2);
				cc = -RandomAngkaAtoB(1,12);
				Dskrm = bb**2 - 4*aa*cc;
			//}while(cc==1 || cc==4 || cc==9)
			}while(Dskrm==1 || Dskrm==4 || Dskrm==9 || Dskrm==16 || Dskrm==25 || Dskrm==49)
			//Dskrm = bb**2 - 4*aa*cc;
			Pers = "m\u{00B2} \u{2212} "+bb+"m \u{2212} "+Math.abs(cc);
			Akar1 = "m\u{2081} = \u{00BD}("+bb+" + \u{221A}"+Dskrm+")";
			Akar2 = "m\u{2082} = \u{00BD}("+bb+" \u{2212} \u{221A}"+Dskrm+")";
			Akar = Akar1+" dan "+Akar2;
			ArAkar = ["m\u{2081} = m\u{2082} = "+Math.abs(cc),"m akar imaginer","m\u{2081} = \u{00BD}(\u{2212}"+Math.abs(bb)+" + \u{221A}"+Math.abs(Dskrm)+") dan m\u{2082} = \u{00BD}(\u{2212}"+Math.abs(bb)+" \u{2212} \u{221A}"+Math.abs(Dskrm)+")"]
		}
		
		var ArSisi = [Pers];
		
		var benar = Akar;
		var salah1 = ArAkar[0];
		var salah2 = ArAkar[1];
		var salah3 = ArAkar[2];
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat3(){
		//x\u{00B2} \u{2212} 25
		
		var jawab = ["Nyata, rasional, kembar","Nyata, rasional, berlainan","Kompleks","Imaginer"];
		
		var aa,bb,cc,Pers,Dskrm,Akar;
		var pp,qq,Akar1,Akar2;
		var ArAkar = [];
		
		aa = 1;
		bb = 0;
		cc = -RandomAngkaAtoB(1,12);
		
		Dskrm = bb**2 - 4*aa*cc;
		Pers = "x\u{00B2}  \u{2212} "+Math.abs(cc);
		Akar1 = "x\u{2081} = \u{221A}"+Math.abs(cc);
		Akar2 = "x\u{2082} = \u{2212}\u{221A}"+Math.abs(cc);
		if(Dskrm==1 || Dskrm==9){
			Akar1 = "x\u{2081} = "+Math.sqrt(Dskrm)+"/2";
			Akar2 = "x\u{2082} = \u{2212}"+Math.sqrt(Dskrm)+"/2";
		}else if(Dskrm==4 || Dskrm==16 || Dskrm==36){
			Akar1 = "x\u{2081} = "+Math.sqrt(Dskrm)/2;
			Akar2 = "x\u{2082} = \u{2212}"+Math.sqrt(Dskrm)/2;
		}
		Akar = Akar1+" dan "+Akar2;
		
		ArAkar[0] = "x\u{2081} = x\u{2082} = "+Math.abs(cc);
		ArAkar[1] = "x\u{2081} = x\u{2082} = \u{2212}\u{221A}"+Math.abs(cc);
		ArAkar[2] = "x\u{2081} = \u{00BD}\u{221A}"+Math.abs(cc)+" dan x\u{2082} = \u{2212}\u{00BD}\u{221A}"+Math.abs(cc);
		
		if(Dskrm==1 || Dskrm==9){
			ArAkar[0] = "x\u{2081} = x\u{2082} = "+Math.abs(cc);
			ArAkar[1] = "x\u{2081} = x\u{2082} = \u{2212}"+Math.sqrt(Dskrm)+"/2";
			ArAkar[2] = "x\u{2081} = "+Math.sqrt(Dskrm)+" dan x\u{2082} = \u{2212}"+Math.sqrt(Dskrm);
		}else if(Dskrm==4 || Dskrm==16 || Dskrm==36){
			ArAkar[0] = "x\u{2081} = x\u{2082} = "+Math.abs(cc);
			ArAkar[1] = "x\u{2081} = x\u{2082} = \u{2212}\u{221A}"+Math.sqrt(Dskrm)/2;
			ArAkar[2] = "x\u{2081} = "+1+Math.sqrt(Dskrm)/2+" dan x\u{2082} = \u{2212}"+1+Math.sqrt(Dskrm)/2;
		}
		
		var ArSisi = [Pers];
		
		var benar = Akar;
		var salah1 = ArAkar[0];
		var salah2 = ArAkar[1];
		var salah3 = ArAkar[2];
		arrSalah = [salah1,salah2,salah3];
		//do{
		//	arrSalah = RandomMyArray(arrSalah);
		//	var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		//}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat4(){
		//x\u{00B2} + 10x + 25
		//x\u{00B2} \u{2212} 10x + 25
		
		var aa,bb,cc,Pers,Dskrm,Akar;
		var pp,qq,Akar1,Akar2;
		var ArAkar = [];
		
		//"Nyata, rasional, berlainan"
		do{
			pp = -12+RandomAngkaAtoB(1,24);
			qq = -12+RandomAngkaAtoB(1,24);
		}while(pp+qq==1 || pp+qq==-1 ||pp*qq==0)
		aa = 1;
		bb = pp+qq;
		cc = pp*qq;
		if(pp+qq!==0){
			if(bb>0 && cc>0) Pers = "x\u{00B2} + "+bb+"x + "+cc;
			else if(bb>0 && cc<0) Pers = "x\u{00B2} + "+bb+"x \u{2212} "+Math.abs(cc);
			else if(bb<0 && cc>0) Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x + "+Math.abs(cc);
			else 				  Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc);
		}else{
			Pers = "x\u{00B2} \u{2212} "+Math.abs(cc);
		}
		Akar1 = "x\u{2081} = "+pp;
		Akar2 = "x\u{2082} = "+qq;
		if(pp<0)	Akar1 = "x\u{2081} = \u{2212}"+Math.abs(pp);
		if(qq<0)	Akar2 = "x\u{2082} = \u{2212}"+Math.abs(qq);
		Akar = Akar1+" dan "+Akar2;
		ArAkar = ["x\u{2081} = x\u{2082} = "+Math.abs(pp),"x\u{2081} = "+Math.abs(pp)+" dan x\u{2082} = \u{2212}"+Math.abs(qq),"x akar imaginer"]
		if(pp<0 && qq<0)		ArAkar = ["x\u{2081} = x\u{2082} = "+Math.abs(pp),"x\u{2081} = "+Math.abs(pp)+" dan x\u{2082} = "+Math.abs(qq),"x\u{2081} = x\u{2082} = "+Math.abs(qq)]
		else if(pp<0 && qq>0)	ArAkar = ["x\u{2081} = x\u{2082} = "+Math.abs(pp),"x\u{2081} = "+Math.abs(pp)+" dan x\u{2082} = \u{2212}"+Math.abs(qq),"x\u{2081} = x\u{2082} = "+Math.abs(qq)]
		else if(pp>0 && qq<0)	ArAkar = ["x\u{2081} = x\u{2082} = "+Math.abs(pp),"x\u{2081} = \u{2212}"+Math.abs(pp)+" dan x\u{2082} = "+Math.abs(qq),"x\u{2081} = x\u{2082} = "+Math.abs(qq)]
		else 					ArAkar = ["x\u{2081} = x\u{2082} = "+Math.abs(pp),"x\u{2081} = \u{2212}"+Math.abs(pp)+" dan x\u{2082} = \u{2212}"+Math.abs(qq),"x\u{2081} = x\u{2082} = "+Math.abs(qq)]
		
		var ArSisi = [Pers];
		
		var benar = Akar;
		var salah1 = ArAkar[0];
		var salah2 = ArAkar[1];
		var salah3 = ArAkar[2];
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat5(){
		//x\u{00B2} + 10x + 25
		//x\u{00B2} \u{2212} 10x + 25
		
		var aa,bb,cc,Pers,Dskrm,Akar,ct;
		var pp,qq,Akar1,Akar2;
		var ArPers = [];
		var Btk1, Btk2;
		var Tp,xp,yp;
		var T1,x1,y1;
		
		var model = RandomAngkaAtoB(0,3);
		//model = 3;
		
		if(model == 1){
			// akar berlawanan
			pp = RandomAngkaAtoB(1,9);
			qq = -pp;
			aa = 1
			bb = 0
			cc = pp*qq;
			Pers = "x\u{00B2} \u{2212} "+Math.abs(cc);
			Btk1 = "(x \u{2212} "+pp+")";
			Btk2 = "(x + "+pp+")";
			xp = pp+qq;
			yp = xp**2 + cc;
			Tp = "("+xp+", \u{2212}"+Math.abs(yp)+")";
			x1 = 1;
			y1 = x1**2 + cc;
			T1 = "("+x1+", \u{2212}"+Math.abs(y1)+")";
			//console.log("Pers",Pers);
			//console.log(Btk1+""+Btk2);
			//console.log(Tp+" "+T1);
			ArPers = ["x\u{00B2} + "+Math.abs(cc),"x\u{00B2} \u{2212} "+2*pp+"x \u{2212} "+Math.abs(cc),"x\u{00B2} + "+2*pp+"x \u{2212} "+Math.abs(cc)]
		}else if(model == 2){
			// akar plus dan minus
			// tapi tidak berlawanan
			do{
				pp = RandomAngkaAtoB(0,6);
				qq = -(2*RandomAngkaAtoB(0,5)+pp);
			}while(pp+qq==0)
			aa = 1;
			bb = pp+qq;
			cc = pp*qq
			Pers = "x\u{00B2} + "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc);
			Btk1 = "(x + "+Math.abs(qq)+")";
			Btk2 = "(x \u{2212} "+Math.abs(pp)+")";
			xp = (pp+qq)/2;
			yp = xp**2 + xp*Math.abs(bb) + cc;
			Tp = "(\u{2212}"+Math.abs(xp)+", \u{2212}"+Math.abs(yp)+")";
			x1 = 1;
			y1 = x1**2 + x1*Math.abs(bb) + cc;
			T1 = "("+x1+", \u{2212}"+Math.abs(y1)+")";
			//console.log("Pers",Pers);
			//console.log(Btk1+""+Btk2);
			//console.log(Tp+" "+T1);
			ArPers = ["x\u{00B2} + "+Math.abs(cc),"x\u{00B2} \u{2212} "+Math.abs(cc),"x\u{00B2} \u{2212} "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc)]
		}else{
			// akar plus dan minus
			// tapi tidak berlawanan
			do{
				qq = RandomAngkaAtoB(0,6);
				pp = -(2*RandomAngkaAtoB(0,5)+qq);
			}while(pp+qq==0)
			aa = 1;
			bb = pp+qq;
			cc = pp*qq
			Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc);
			Btk1 = "(x + "+Math.abs(qq)+")";
			Btk2 = "(x \u{2212} "+Math.abs(pp)+")";
			xp = -(pp+qq)/2;
			yp = xp**2 - xp*Math.abs(bb) + cc;
			Tp = "("+Math.abs(xp)+", \u{2212}"+Math.abs(yp)+")";
			x1 = 1;
			y1 = x1**2 - x1*Math.abs(bb) + cc;
			T1 = "("+x1+", \u{2212}"+Math.abs(y1)+")";
			//console.log("Pers",Pers);
			//console.log(Btk1+""+Btk2);
			//console.log(Tp+" "+T1);
			ArPers = ["x\u{00B2} + "+Math.abs(cc),"x\u{00B2} \u{2212} "+Math.abs(cc),"x\u{00B2} + "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc)]
		}
		
		var ArSisi = [Tp,T1];
		
		var benar = Pers;
		var salah1 = ArPers[0];
		var salah2 = ArPers[1];
		var salah3 = ArPers[2];
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat6(){
		//x\u{00B2} + 10x + 25
		//x\u{00B2} \u{2212} 10x + 25
		
		var aa,bb,cc,Pers,Dskrm,Akar,ct;
		var pp,qq,Akar1,Akar2;
		var ArPers = [];
		var Btk1, Btk2;
		var Tp,xp,yp;
		var T1,x1,y1,x2,y2,x3,y3;
		
		var model = RandomAngkaAtoB(0,3);
		//model = 1;
		
		if(model == 1){
			// akar berlawanan
			pp = RandomAngkaAtoB(1,9);
			qq = -pp;
			aa = 1
			bb = 0
			cc = pp*qq;
			Pers = "x\u{00B2} \u{2212} "+Math.abs(cc);
			Btk1 = "(x \u{2212} "+pp+")";
			Btk2 = "(x + "+pp+")";
			x1 = 1;
			y1 = x1**2 + cc;
			T1 = "("+x1+", \u{2212}"+Math.abs(y1)+")";
			x2 = 2;
			y2 = x2**2 + cc;
			T2 = "("+x2+", \u{2212}"+Math.abs(y2)+")";
			x3 = 3;
			y3 = x3**2 + cc;
			T3 = "("+x3+", \u{2212}"+Math.abs(y3)+")";
			//console.log("Pers",Pers);
			//console.log(Btk1+""+Btk2);
			//console.log(T1+" "+T2+" "+T3);
			ArPers = ["x\u{00B2} + "+Math.abs(cc),"x\u{00B2} \u{2212} "+2*pp+"x \u{2212} "+Math.abs(cc),"x\u{00B2} + "+2*pp+"x \u{2212} "+Math.abs(cc)]
		}else if(model == 1){
			// akar plus dan minus
			// tapi tidak berlawanan
			do{
				pp = RandomAngkaAtoB(0,6);
				qq = -(2*RandomAngkaAtoB(0,5)+pp);
			}while(pp+qq==0)
			aa = 1;
			bb = pp+qq;
			cc = pp*qq
			Pers = "x\u{00B2} + "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc);
			Btk1 = "(x + "+Math.abs(qq)+")";
			Btk2 = "(x \u{2212} "+Math.abs(pp)+")";
			x1 = 1;
			y1 = x1**2 + x1*Math.abs(bb) + cc;
			T1 = "("+x1+", \u{2212}"+Math.abs(y1)+")";
			x2 = 2;
			y2 = x2**2 + x2*Math.abs(bb) + cc;
			T2 = "("+x2+", \u{2212}"+Math.abs(y2)+")";
			x3 = 3;
			y3 = x1**2 + x3*Math.abs(bb) + cc;
			T3 = "("+x3+", \u{2212}"+Math.abs(y3)+")";
			//console.log("Pers",Pers);
			//console.log(Btk1+""+Btk2);
			//console.log(T1+" "+T2+" "+T3);
			ArPers = ["x\u{00B2} + "+Math.abs(cc),"x\u{00B2} \u{2212} "+Math.abs(cc),"x\u{00B2} \u{2212} "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc)]
		}else{
			// akar plus dan minus
			// tapi tidak berlawanan
			do{
				qq = RandomAngkaAtoB(0,6);
				pp = -(2*RandomAngkaAtoB(0,5)+qq);
			}while(pp+qq==0)
			aa = 1;
			bb = pp+qq;
			cc = pp*qq
			Pers = "x\u{00B2} \u{2212} "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc);
			Btk1 = "(x + "+Math.abs(qq)+")";
			Btk2 = "(x \u{2212} "+Math.abs(pp)+")";
			x1 = 1;
			y1 = x1**2 - x1*Math.abs(bb) + cc;
			T1 = "("+x1+", \u{2212}"+Math.abs(y1)+")";
			x2 = 2;
			y2 = x2**2 - x2*Math.abs(bb) + cc;
			T2 = "("+x2+", \u{2212}"+Math.abs(y2)+")";
			x3 = 3;
			y3 = x3**2 - x3*Math.abs(bb) + cc;
			T3 = "("+x3+", \u{2212}"+Math.abs(y3)+")";
			//console.log("Pers",Pers);
			//console.log(Btk1+""+Btk2);
			//console.log(T1+" "+T2+" "+T3);
			ArPers = ["x\u{00B2} + "+Math.abs(cc),"x\u{00B2} \u{2212} "+Math.abs(cc),"x\u{00B2} + "+Math.abs(bb)+"x \u{2212} "+Math.abs(cc)]
		}
		
		var ArSisi = [T1,T2,T3];
		
		var benar = Pers;
		var salah1 = ArPers[0];
		var salah2 = ArPers[1];
		var salah3 = ArPers[2];
		arrSalah = [salah1,salah2,salah3];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat7(){
		
		var aa,bb,cc,Pers,Dskrm,Akar,ct;
		var pp,qq,Akar1,Akar2;
		var ArPers = [];
		var Btk1, Btk2;
		var Tp,xp,yp;
		var T1,x1,y1,x2,y2,x3,y3;
		
		do{
			aa = -9+RandomAngkaAtoB(1,18)
		}while(Math.abs(aa)<=1)
		do{
			bb = -9+RandomAngkaAtoB(1,18)
		}while(Math.abs(bb)<=1)
		do{
			cc = -9+RandomAngkaAtoB(1,18)
		}while(Math.abs(cc)<=1)
		
		Dskrm = bb**2 - 4*aa*cc;
		if(Dskrm<0) Dskrm = "\u{2212}"+Math.abs(Dskrm);
		
		if(aa<0 && bb>0) 		Pers = "\u{2212}"+Math.abs(aa)+"x\u{00B2} + "+Math.abs(bb)+"x + p = 0";
		else if(aa<0 && bb<0)	Pers = "\u{2212}"+Math.abs(aa)+"x\u{00B2} \u{2212} "+Math.abs(bb)+"x + p = 0";
		else if(aa>0 && bb<0)	Pers = ""+Math.abs(aa)+"x\u{00B2} \u{2212} "+Math.abs(bb)+"x + p = 0";
		else 					Pers = ""+Math.abs(aa)+"x\u{00B2} + "+Math.abs(bb)+"x + p = 0";
		
		
		var ArSisi = [Pers,Dskrm];
		
		var benar = cc;					if(cc<0) 	benar = "\u{2212}"+Math.abs(cc);
		var salah1 = "\u{2212}"+cc;		if(cc<0) 	salah1 = ""+Math.abs(cc);
		var salah2 = (cc*4);			if(cc<0) 	salah2 = "\u{2212}"+Math.abs(4*cc);
		var salah3 = "\u{2212}"+(cc*4);	if(cc<0) 	salah3 = ""+Math.abs(4*cc);
		var salah4 = (cc+1);			if(cc+1<0) 	salah4 = "\u{2212}"+Math.abs(cc+1);
		var salah5 = "\u{2212}"+(cc+1);	if(cc+1<0) 	salah5 = ""+Math.abs(cc+1);
		var salah6 = (cc-1);			if(cc-1<0) 	salah6 = "\u{2212}"+Math.abs(cc-1);
		var salah7 = "\u{2212}"+(cc-1);	if(cc-1<0) 	salah7 = ""+Math.abs(cc-1);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	function MyPersamaanKuadrat8(){
		var aa,bb,cc;
		var Pers;
		var xA,yA,xB,yB,xC,yC;
		var TA,TB,TC;
		
		var arxA = [-3,-4,-5,-6,-7,-8];
		var arxB = [0,0,0,0,0,0];
		var arxC = [-1,-1,-1,-1,-1,-1];
		var aryA,aryB,aryC
		
		var model = RandomAngkaAtoB(-1,6);
		var tipe = RandomAngkaAtoB(-1,5);
		if(model==1)		aryA = [5,6,7,8,9];
		else if(model==2)	aryA = [7,8,9,10,11];
		else if(model==3)	aryA = [9,10,11,12,13];
		else if(model==4)	aryA = [11,12,13,14,15];
		else if(model==5)	aryA = [13,14,15,16,17];
		else 				aryA = [15,16,17,18,19];
		
		xA = arxA[tipe];
		xB = arxB[tipe];
		xC = arxC[tipe];
		yA = aryA[tipe];
		yB = yA;
		
		
		aa = 2;
		bb = aa*Math.abs(xA);
		cc = yA;
		
		Pers = "y = "+aa+"x\u{00B2} + "+bb+"x + "+cc;
		yC = aa*xC**2 + bb*xC + cc;
		
		TA = "(\u{2212}"+Math.abs(xA)+", "+yA+")";
		TB = "("+xB+", "+yB+")";
		TC = "(\u{2212}"+Math.abs(xC)+", "+yC+")"; if(yC<0)	TC = "(\u{2212}"+Math.abs(xC)+", \u{2212}"+Math.abs(yC)+")";
		
		var ArSisi = [TA,TB,TC];
		
		//"(\u0006"
		var benar = Pers;
		var salah1 = "y = "+bb+"x\u{00B2} + "+aa+"x + "+cc;
		var salah2 = "y = "+aa+"x\u{00B2} + "+aa+"x + "+cc;
		var salah3 = "y = "+bb+"x\u{00B2} + "+bb+"x + "+cc;
		var salah4 = "y = "+aa+"x\u{00B2} \u{2212} "+bb+"x + "+cc;
		var salah5 = "y = "+bb+"x\u{00B2} \u{2212} "+aa+"x + "+cc;
		var salah6 = "y = \u{2212}"+aa+"x\u{00B2} + "+bb+"x + "+cc;
		var salah7 = "y = \u{2212}"+bb+"x\u{00B2} + "+aa+"x + "+cc;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			var ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		return [ArSisi,benar,arrSalah];
	}
	
	function GambarPersamaanKuadrat8(nmcanvas,arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		base0_image.src = "data:image/png;base64,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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			/*
			ctx.font = "14px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(arr[0]+" cm",115,148);
			ctx.textAlign = "center";
			ctx.fillText(arr[1]+" cm",235,120);
			ctx.textAlign = "center";
			ctx.fillText(arr[2]+" cm",25,109);
			*/
		}
		return 0;
	}
	function GetSoal1(){
		const Aljabar = MyPersamaanKuadrat1();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Sifat dari akar-akar persamaan kuadrat "+ArSisi[0]+" = 0 adalah ..";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MyPersamaanKuadrat2();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Nilai x yang memenuhi persamaan "+ArSisi[0]+" = 0 adalah ..";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(){
		const Aljabar = MyPersamaanKuadrat3();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Nilai x yang memenuhi persamaan "+ArSisi[0]+" = 0 adalah ..";
		
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
		const Aljabar = MyPersamaanKuadrat4();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Nilai x yang memenuhi persamaan "+ArSisi[0]+" = 0 adalah ..";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(){
		const Aljabar = MyPersamaanKuadrat5();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Diketahui suatu grafik fungsi mempunyai titik puncak "+ArSisi[0]+" dan melalui titik "+ArSisi[1]+". <br>";
		ss += "Jadi fungsi kuadrat tersebut adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal6(){
		const Aljabar = MyPersamaanKuadrat6();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Diketahui suatu fungsi kuadrat melalui tiga titik : "+ArSisi[0]+", "+ArSisi[1]+", dan "+ArSisi[2]+". <br>";
		ss += "Fungsi kuadrat tersebut adalah ...";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyPersamaanKuadrat7();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		var ss
		
		ss = "Suatu persamaan kuadrat "+ArSisi[0]+". <br>";
		ss += "Jika diketahui diskriminannya adalah "+ArSisi[1]+", maka nilai p adalah ... ";
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MyPersamaanKuadrat8();
		//[ArSisi,benar,arrSalah];[AB,CD,DE,OC];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		//console.log(ArSisi[0])
		//ArSisi = [fixA2,fixB1,fixC2,fixC1];
		const DrawPGL = GambarPersamaanKuadrat8(canv,ArSisi);
		var ss
		
		ss = "Titik A"+ArSisi[0]+", B"+ArSisi[1]+", dan C"+ArSisi[2]+" melewati kurva tersebut.<br>";
		ss += "Persamaan kuadrat yang sesuai dengan gambar di atas adalah ....";
		
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
					GetSoal8];
	
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
	
	
	
	dd1.innerHTML="<p>Bab 15 \u{2192} Persamaan Kuadrat </p>";
	if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 230;
		cc1.height = 230;
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
