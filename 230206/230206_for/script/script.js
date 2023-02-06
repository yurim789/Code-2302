// 데이터의 개수에 따라 반복
  // #score라는 것 안쪽에 새로운 행을 만들고
  // 그 행에 데이터 내용을 기입하고
  // 평균점수를 따져서 60점이상이면 pass
    // 그렇지 않으면 fail이라고 쓴다.
  // var jumsu = [
  //   {name:"김태희", math:65, sci:85},
  //   {name:"차인표", math:84, sci:15},
  //   {name:"송혜교", math:95, sci:95},
  //   {name:"송중기", math:91, sci:98}
  // ];
  // var len = jumsu.length;
  // for(i=0; i<len; i++){
  //   var avg = (jumsu[i].math + jumsu[i].sci) / 2;
  //   var passfail;
  //   if(avg >= 60){
  //     passfail = "Pass";
  //   }else{
  //     passfail = "Fail";
  //   }
  //   $("#score").append("<tr><td>"+jumsu[i].name+"</td><td>"+jumsu[i].math+"</td><td>"+jumsu[i].sci+"</td><td>"+passfail+"</td></tr>");
  // }

var apart = [
  ["강해민","김상현","백승호","김지혜","정경민"],
  ["인호성","신창원","이지인","차범근","배현진","김영재"],
  ["차인표","여상현","송혜교","신창원","박진범","김원재"],
  ["김정은","신창원","신보은","조이","박유림","김승빈"],
  ["정재학","조성아","슬기","한지호"]
];

// 전체 수색 계획
  // 5층 건물 각 층을 차례대로 훑는다
    // 각층 수색 계획
      // 해당층 모든 세대를 차례대로 훑는다.
var wanted = window.prompt("찾을 사람의 이름을 입력하세요.");
var floor = apart.length;
var finaladdress = [];
for(i=0; i<5; i++){
  var home = apart[i].length;
  for(j=0; j<home; j++){
    if(apart[i][j] == wanted){
      var cheong = i+1;
      cheong = cheong.toString();
      var ho = j+1;
      if(ho<10){
        ho = "0"+ho;
      }
      finaladdress.push(cheong+ho);
    }
  }
}

var final = "";
for(i=0 ; i<finaladdress.length ; i++){
  final = final + finaladdress[i];
  if(i != finaladdress.length-1){
    final = final + ", ";
  }
}

alert(wanted+"은(는) 총 "+finaladdress.length+"명 발견되었으며 "+final+"에서 발견되었습니다.")









