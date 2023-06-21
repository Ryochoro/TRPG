function extractChecked(radios) {
    for(var i=0; i < radios.length; i++) {
        if(radios[i].checked) {
            return radios[i];
        }
    }
}

/*
/a依り代選択
/b系統付与
/c干渉形態</p>
/d属性付与</p>
/e距離付与</p>
/f魔法効果範囲</p>
/g威力レベル</p>
/h動作回数</p>
/i動作難度</p>
/j持続時間</p>
/kデメリット</p>
/L発動条件
/M精密レベル

/N詠唱時間  O魔法数  p追加効果
/xサポート適正 1あり 0なし
*/


function SP(A,B,C,D,E,F,G,H,Ia,Ib,J,K,L,M,N,O,P,X) {
	var sp =0;
	var SA=0;
	var SB = 0;
	if (B==3){ //与
	
	SA = ( (A)*(3*G-1) + (2*D+(J*0.5+0.5))* F ) * C
    SB = A*(( (Ib**2)+ K*0.7 + H) /3+0.5) 
	
	}else{
	
    SA = ( (A)*(3*G-1) + (2*D+(J*0.7+0.3))* (F*2 -1) ) * C
    SB = A*(( (Ib**2)+ K*0.7 + H) /3+0.5) 
    }
    
    sp = SA/SB;
    
	//return sp
	return Math.ceil(sp)
}

function IP(A,B,C,D,E,F,G,H,Ia,Ib,J,K,L,M,N,O,P,X) {
	var ip =0;
	var kazu = 0;
	var IA = 0;
	var IB = 0;
	var IC = 0;
	var ID = 0;
	var IE = 0;
	var IF = 0;
	var mkazu = 0;
	var mip = 0;
	var HOSEI = 5;
	if (B==1){ //創
		
		//IA = (A+1)/2;
		//kazu = G*IA/2;
		
		//IB = ((G + 2*N) / (  1+2/5*F+3/5 ))
		//IC = ((A*2) )/( P * (0.2*J+0.8)* 2*L/3)
		//ip =  1.5*((Ia**2)/2+0.5)*IB*IC/(0.25*M); // I -> Ia
		
		IA = (A+1)/2;
		kazu = G*IA/2;
		
		IB = (A+1)/2;
		mkazu = G*IB/4;
		
		IC =( 0.8*G + 2*N ) * ( A*1.5 ) * (1.5*((Ia**2)/2+0.5)) * (L/2+0.5);
		ID = ( 2/5*F +3/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M);
		
		IE =( 0.5*G + 1.5*N ) * ( A*1.5 ) * (((Ia**2)/2+0.5)) * (L/2+0.5);
		IF = ( 3/5*F +2/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M)*2;
		
		
		ip = IC / ID;
		mip = IE / IF;
		
	}else if  (B==2){ //壊
	
		//IA = (A+1)/2;
		//kazu = G*IA/3+0.01;
		
		//IB = ((0.5*G + 2*N) / ( 1+2/5*F+3/5 ))
		//IC = ((A*2.5) )/( P * (0.2*J+0.8)* 2*L/3)
		//ip =  0.5*(Ia**2/4+0.75)*IB*IC/(0.25*M); // I -> Ia
		
		
		IA = (A+1)/2;
		kazu = G*IA/2+0.01;
		
		IB = (A+1)/2;
		mkazu = G*IB/4;
		
		IC =( 0.9*G + 2*N ) * ( A*1.5 ) * (1.5*((Ia**2)/2+0.5)) * (L/2+0.5);
		ID = ( 2/5*F +3/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M);
		
		IE =( 0.5*G + 1.5*N ) * ( A*1.5 ) * (((Ia**2)/2+0.5)) * (L/2+0.5);
		IF = ( 3/5*F +2/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M)*2;
		
		ip = IC / ID;
		mip = IE / IF;
	
	}else if (B==3){ //与
		
		
		IA = (A+1)/2;
		kazu = G*IA/3;
		
		IB = (A+1)/2;
		mkazu = G*IB/5;
		
		IC =( 0.4*G + 3*N-1 ) * ( A*1.5 ) * (((Ia**2)/2+0.5)) * (L/2+0.5);
		ID = ( 1/5*F +3/5 ) * ( P * J ) * (0.25*M);
		
		IE =( 0.2*G + 1.5*N ) * ( A*1.5 ) * (0.8*((Ia**2)/2+0.5)) * (L/2+0.5);
		IF = ( 2/5*F +2/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M)*2;
		
		ip = IC / ID;
		mip = IE / IF;
		
	}else if  (B==4){ //動
	
		//IA = (A+1)/2;
		//kazu = G*IA/3+0.01;
		
		//IB = ((0.5*G + 2*N) / ( 1+2/5*F+3/5 ))
		//IC = ((A*2.5) )/( P * (0.2*J+0.8)* 2*L/3)
		//ip =  0.5*(Ia**2/4+0.75)*IB*IC/(0.25*M); // I -> Ia
		
		
		IA = (A+1)/2;
		kazu = G*IA/2;
		
		IB = (A+1)/2;
		mkazu = G*IB/4;
		
		IC =( 0.8*G + 2*N ) * ( A*1.5 ) * (1.5*((Ia**2)/2+0.5)) * (L/2+0.5);
		ID = ( 2/5*F +3/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M);
		
		IE =( 0.5*G + 1.5*N ) * ( A*1.5 ) * (((Ia**2)/2+0.5)) * (L/2+0.5);
		IF = ( 3/5*F +2/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M)*2;
		
		ip = IC / ID;
		mip = IE / IF;
		
	
	
	}else if  (B==5){ //変
	
		//IA = (A+1)/2;
		//kazu = G*IA/3+0.01;
		
		//IB = ((0.5*G + 2*N) / ( 1+2/5*F+3/5 ))
		//IC = ((A*2.5) )/( P * (0.2*J+0.8)* 2*L/3)
		//ip =  0.5*(Ia**2/4+0.75)*IB*IC/(0.25*M); // I -> Ia
		
		
		IA = (A+1)/2;
		kazu = G*IA/2;

		
		IC =( 0.8*G + 2*N ) * ( A*1.5 ) * (1.5*((Ia**2)/2+0.5)) * (L/2+0.5);
		ID = ( 2/5*F +3/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M);
		
		ip = IC / ID;

	
	}else if  (B==6){ //操
	
		//IA = (A+1)/2;
		//kazu = G*IA/3+0.01;
		
		//IB = ((0.5*G + 2*N) / ( 1+2/5*F+3/5 ))
		//IC = ((A*2.5) )/( P * (0.2*J+0.8)* 2*L/3)
		//ip =  0.5*(Ia**2/4+0.75)*IB*IC/(0.25*M); // I -> Ia
		
		
		IA = (A+1)/2;
		kazu = G*IA/2;
		
		IB = (A+1)/2;
		mkazu = G*IB/4;
		
		IC =( 0.8*G + 2*N ) * ( A*1.5 ) * (1.5*((Ia**2)/2+0.5)) * (L/2+0.5);
		ID = ( 2/5*F +3/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M);
		
		IE =( 0.5*G + 1.5*N ) * ( A*1.5 ) * (((Ia**2)/2+0.5)) * (L/2+0.5);
		IF = ( 3/5*F +2/5 ) * ( P * (0.4*J+0.6) ) * (0.25*M)*2;
		
		ip = IC / ID;
		mip = IE / IF;
		
	
	}else if  (B==7){ //呼
	
		//IA = (A+1)/2;
		//kazu = G*IA/3+0.01;
		
		//IB = ((0.5*G + 2*N) / ( 1+2/5*F+3/5 ))
		//IC = ((A*2.5) )/( P * (0.2*J+0.8)* 2*L/3)
		//ip =  0.5*(Ia**2/4+0.75)*IB*IC/(0.25*M); // I -> Ia
	
	}
	
	if (B==6){return Math.ceil(kazu) +"d" + Math.ceil(ip)}
	else{
    return Math.ceil(kazu) +"d" + Math.ceil(ip) + "+" + Math.ceil(mkazu) +"d" + Math.ceil(mip)  + "*" + "1d魔攻" + "/" + HOSEI
	//return kazu +"d" + ip + "+" + kazu +"d" + ip  + "*" + "1d魔攻" + "/" + HOSEI
	}
}

function COST(A,B,C,D,E,F,G,H,Ia,Ib,J,K,L,M,N,O,P,X) {
	var cost = 0;
	var CA = 0;
	var CB = 0;
	
	if (B==3){ //与
	
	
	CA = G*((D*0.25+0.75) +(B*0.5+0.5)*C) * ((F*0.3+0.7)*2+O) *(J*0.5+0.5)*(L*0.4+0.6)
	CB = ((0.35*H+0.65)+(K**2/1.5)/2) * (N*0.25+0.75) * Ib
	
	cost = CA/CB;
    
    }else{
	
	 
	CA = G*((D*0.25+0.75) +(B*0.5+0.5)*C) * ((F*0.5+0.5)*2+O) *(J*0.5+0.5)*(L*0.4+0.6)
	CB = ((0.35*H+0.65)+(K**2/1.5)/2) * (N*0.25+0.75) * Ib
	
	cost = CA/CB;
	
	}
	
	return Math.ceil(cost)
	//return cost
}


function DEX(A,B,C,D,E,F,G,H,Ia,Ib,J,K,L,M,N,O,P,X) {
	var dex = 0;
	var ps = 0;
	var xps = 0;
	var bra = 0;
	if(P==2.5){bra=0.6;}else{bra=1;}
	xps = (F*0.25+0.75+N)/(E*0.75+O**2)
	ps = 1-(1/(xps*M))*0.95;
	if(ps<0.01){dex=1;}else{dex = ps*100*bra;}
    return dex
}

function BP(H) {
	var bp = 0;
	if (H==6){bp=4;}
	else if(H==9){bp=5;}
	else if(H==12){bp=6;}
	else{bp = H-1;}
    return bp
}


const radioList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'IA', 'IB', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'EX'];
const btn = () => {
	let values = [];
	values.length = 0;

	/**
	 * 検索するラジオボタンの名前(A ~ EX)のindexを返す関数
	 * @param Key A ~ EX
	 * @returns radioList index (error:-1)
	 */
	const getValueByKey = (Key) => {
		for(let i = 0; i < radioList.length; i++) {
			if(radioList[i] == Key) {
				return i;
			}
		}
		console.log('"' + Key + '" という名前のラジオボタンは存在しません')
		return -1;
	}
	
	for(let i = 0; i < radioList.length; i++) {
		const doc = extractChecked(document.getElementsByName(radioList[i].toLowerCase()));
		values.push(Number(doc.value));
		getText(doc, radioList[i]);
	}
	
    document.getElementById("result2").textContent = SP(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17]);
 	document.getElementById("result3").textContent = IP(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17]);
 	document.getElementById("result4").textContent = COST(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17]);
	document.getElementById("result5").textContent = DEX(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17]);
	document.getElementById("result6").textContent =BP(values[getValueByKey('H')]);
}

/**
 * ラベルのテキストを取得する関数
 * @param doc checkedのついたimport要素
 * @param name A ~ EX 大文字
 */
const getText = (doc, name) => {
	if(doc) {
		const targetDoc = document.getElementById('conf-' + name);
		targetDoc.textContent = document.querySelector('label[for="' + doc.id + '"]').textContent;
	}
}


/**
 * Bの選択が変更された時の処理を行う関数
 */
const radioB_onChange = () => {
    const radioB = document.getElementsByName("b");
    for(var i=0; i < radioB.length; i++) {
        if(radioB[i].checked) {
			B_selectedIndex = radioB[i].dataset.bindex;
			displayUpdate();
        }
    }
    btn();
}

/**
 * 選択されているBのdata-bindexの値
 * 1: 創
 * 2: 破
 * 3: 与
 * 4: 動
 * 5: 変
 * 6: 操
 * 7: 呼
 */
let B_selectedIndex = 1;

/**
 * Bの選択によって表示、非表示を行う関数
 * @param index 選択されたBのdata-bindexの値
 */
const displayUpdate = () => {
	displayInit();
	if(B_selectedIndex == 1) { // 創

		// ここに表示、非表示とする処理を記述する
		// 計算の値を変える処理をここに書くのは非推奨
		displayOFF("e-4");
		displayOFF("f-5");
		
		
	}else if(B_selectedIndex == 2) { // 破
		/* 例（Cを非表示にする）
		//displayOFF("radio-C"); */
		//displayOFF("d-2");
		displayOFF("f-5");

	}else if(B_selectedIndex == 3) { // 与
		
		displayOFF("radio-O");
		displayOFF("f-5");
	
	}else if(B_selectedIndex == 4) { // 動
	
		displayOFF("e-4");
		displayOFF("f-5");
	
	}else if(B_selectedIndex == 5) { // 変
	
		displayOFF("radio-O");
		displayOFF("f-5");
	
	}else if(B_selectedIndex == 6) { // 操
	
		displayOFF("e-4");
		
	
	}else if(B_selectedIndex == 7) { // 呼

		displayOFF("f-5");
	
	
	}else {
		console.log("Bindex errer. [over 7]");
	}
	
}

// 非表示にする関数
const displayOFF = (id) => {
	let str = id.split('-');
	if(str[0] == 'radio') {
		let target = document.getElementById(id);
		if(target) {
			target.classList.add('display-off');
		}
	}else {
		let target = document.querySelector('label[for="' + id + '"]');
		if(target) {
			target.classList.add('display-off');
		}
	}
}

// 非表示項目の初期化（全て表示）
const displayInit = () => {
	const radioAreas = document.getElementsByClassName("radioArea");
	for(let i = 0; i < radioList.length; i++) {
		document.getElementById("radio-" + radioList[i]).classList.remove('display-off');
		for(let j = 1; j < radioAreas[i].childElementCount; j++) {
			document.querySelector('label[for="' + radioList[i].toLowerCase() + '-' + j + '"]').classList.remove('display-off');
		}
	}
}