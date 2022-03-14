// select메뉴
$('#location').selectmenu();

// 자동완성 기능
var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "html",
    "css",
    "less",
    "photoshop",
    "sass",
    "scss",
    "jQuery"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });

  // 최소값0 ~ 최대값7 / 1씩 조절 <-html에서 경력 부분
  var spinner = $( "#spinner" ).spinner({
    min:0,
    max:7,
    step:1
  });

  //   누르면 달력나오는 기능 
  $( "#datepicker" ).datepicker({
    showAnim: "fadeIn",
    minDate: new Date(),
    maxDate: "+1m +1w"
  });
  $( "#datepicker" ).datepicker("setDate",new Date() ); //<-오늘날짜를 기본으로
  
  //라디오버튼
  $( "input[type=radio]" ).checkboxradio();

  $('#submit').button({
      disabled:true
  });
  $('#progress').progressbar({
      value:0
  });

//  프로그레스바 진행도 표시
  updateProgress();
  function updateProgress(){
      let progress=0;
      let itemCount=5;
      let itemCompleted=0;

      let $location = $('#location option:selected').val();
      let $tag = $('#tags').val();
      let $spinner = $('#spinner').val();
      let $datepicker = $('#datepicker').val();
      let $refer = $('input[type="radio"]:checked').val();

      if($location) itemCompleted++;
      if($tag) itemCompleted++;
      if($spinner) itemCompleted++;
      if($datepicker) itemCompleted++;
      if($refer) itemCompleted++;
      
      progress = (itemCompleted/itemCount)*100;
      $('#progress').progressbar("value",progress);
      $('.pct span').text(progress);
    //   진행도가 100이 될때 비활성화됐던 submit버튼 활성화
      if(progress==100){
          $('#submit').button({
              disabled:false
          });
      }

  };

//   input내용변경시 함수 실행
  $('input').change(function(){
    updateProgress();
  });
