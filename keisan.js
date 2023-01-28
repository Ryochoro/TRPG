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
/lサポート適正 1あり 0なし
*/


function SP(A,B,C,D,E,F,G,H,I,J,K) {
	var sp =0;
    sp = (A+B)*C*2*D*((E+1)/2)*F*G*((I+1)/2)*J/H/K;
	return Math.ceil(sp)
}

function IP(A,B,C,D,E,F,G,H,I,J,K) {
	var ip =0;
	ip =  (2/E*(G**2/2)*I*2*(H/2))/2;
    return Math.ceil(ip)
}

function COST(A,B,C,D,E,F,G,H,I,J,K) {
	var cost = 0;
	cost = (B/2)*C*D*(E/2)*F*((G**2))*((I**2)/2)*H*2;
    return Math.ceil(cost)
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
    let docL = document.getElementsByName("l");
    let docM = document.getElementsByName("m");

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
    const numberL = intChamge(docL);
    const numberM = intChamge(docM);

    document.getElementById("result2").textContent = SP(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberL,numberM);
   document.getElementById("result3").textContent = IP(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberL,numberM);
 document.getElementById("result4").textContent = COST(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberL,numberM);
document.getElementById("result5").textContent = COST(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK,numberL,numberM);

}
