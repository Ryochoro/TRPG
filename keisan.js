function intChamge(radios) {
    for(var i=0; i < radios.length; i++) {
        if(radios[i].checked) {
            result = radios[i].value;
            return Number(result);
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
/m発動条件
/n精密レベル

/o詠唱時間  p魔法数  q追加効果
/xサポート適正 1あり 0なし
*/


function SP(A,B,C,D,E,F,G,H,I,J,K,M,N,O,P,Q,X) {
	var sp =0;
	var SA=0;
	SA =
    sp = SA;
	return sp
}

function IP(A,B,C,D,E,F,G,H,I,J,K,M,N,O,P,Q,X) {
	var ip =0;
	var kazu = 0;
	var IA = 0;
	var IB = 0;
	var IC = 0;
	if (X==0){
		IA = (A+1)/2;
		kazu = G*IA/2;
		
		IB = ((0.5*G + 2*O)*(H*0.25+0.75) / ( 2/3*E + 3/4*F ))
		IC = ((A**2) )/( Q * (0.2*J+0.8)* 2*M/3)
		ip =  1.5*(I**2)*IB*IC/(0.25*N);
		
	}else{
		
		IA = (A+1)/2;
		kazu = G*IA/3;
		
		
		ip =  (2/E*(G**2/2)*I*2*(H/2))/4;
	}
    return kazu +"d" + ip
}

function COST(A,B,C,D,E,F,G,H,I,J,K,M,N,O,P,Q,X) {
	var cost = 0;
	cost = (B/2)*C*D*(E/2)*F*((G**2))*((I**2)/2)*H*2;
    return cost
}


function DEX(A,B,C,D,E,F,G,H,I,J,K,M,N,O,P,Q,X) {
	var dex = 0;
	var ps = 0;
	var xps = 0;
	xps = (F+O)/(E*0.75+P**2)
	ps = 1-(1/(xps*N))*0.95;
	if(ps<0){dex=0;}else{dex = ps*100;}
    return dex
}

const btn = () => {
    let docA = document.getElementsByName("a");
    let docB = document.getElementsByName("b");
    let docC = document.getElementsByName("c");
    let docD = document.getElementsByName("d");
    let docE = document.getElementsByName("e");
    let docF = document.getElementsByName("f");
    let docG = document.getElementsByName("g");
    let docH = document.getElementsByName("h");
    let docI = document.getElementsByName("i");
    let docJ = document.getElementsByName("j");
    let docK = document.getElementsByName("k");
    let docM = document.getElementsByName("m");
    let docN = document.getElementsByName("n");
    let docO = document.getElementsByName("o");
    let docP = document.getElementsByName("p");
    let docQ = document.getElementsByName("q");
    let docX = document.getElementsByName("x");

    const numberA = intChamge(docA);
    const numberB = intChamge(docB);
    const numberC = intChamge(docC);
    const numberD = intChamge(docD);
    const numberE = intChamge(docE);
    const numberF = intChamge(docF);
    const numberG = intChamge(docG);
    const numberH = intChamge(docH);
    const numberI = intChamge(docI);
    const numberJ = intChamge(docJ);
    const numberK = intChamge(docK);
    const numberM = intChamge(docM);
    const numberN = intChamge(docN);
    const numberO = intChamge(docO);
    const numberP = intChamge(docP);
    const numberQ = intChamge(docQ);
    const numberX = intChamge(docX);

    document.getElementById("result2").textContent = SP(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberM, numberN,numberO, numberP,numberQ,numberX);
   document.getElementById("result3").textContent = IP(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberM, numberN,numberO, numberP,numberQ,numberX);
 document.getElementById("result4").textContent = COST(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberM, numberN,numberO, numberP,numberQ,numberX);
document.getElementById("result5").textContent = DEX(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberM, numberN,numberO, numberP,numberQ,numberX);

}
