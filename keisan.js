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
*/


function SP(A,B,C,D,E,F,G,H,I,J,K) {
    return (A+B)*C*2*D*((E+1)/2)*F*G*((I+1)/2)*J/H/K
}

function IP(A,B,C,D,E,F,G,H,I,J,K) {
    return 2/E*(1+G/2)*I*2*H
}

function COST(A,B,C,D,E,F,G,H,I,J,K) {
    return (B/2)*C*D*(E/2)*F*G*I
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

    document.getElementById("result2").textContent = SP(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK);
   document.getElementById("result3").textContent = IP(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK);
 document.getElementById("result4").textContent = COST(numberA, numberB,numberC, numberD,numberE, numberF,numberG, numberH,numberI, numberJ,numberK);

}
