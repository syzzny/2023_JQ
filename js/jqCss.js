// html head에 cdn으로 값을 가져온 후 다른 js에서도 제이쿼리에 접근할수 있다

// .css()를 이용해서 style 값을 바꿀수있다
$("#header").css("color","pink");
// 값을 여러개 넣고 싶을때는 객체 형태로 작성
// 속성이름을 적을때 -있다면 첫글자 대문자로 작성
// 값안에 변수나 자바스크립트 계산식을 적고싶다면 `${}` 이용가능
$("#header").css({
    "backgroundColor": "black",
    "fontSize": `${3}rem`
});

// 버튼을 클릭했을때, hidden 클래스 추가
$("#btn").on("click", function(){
    // 형제 태그를 통해서 p 태그를 찾고 클래스 추가
    // this를 통해서 현재 이벤트가 실행된 태그를 가져올 수 있다
    $(this).prev().addClass("hidden");
    console.log($(this));
})

// 버튼을 클릭했을때, header가 숨김/보임
$("#toggle-button").on("click",function(){
    $("#header").toggleClass("hidden");
})

// todo의 input을 클릭했을때 체크 유무에 따라서 디자인을 바꾸기
$("#todo input[type='checkbox']").on("click", function(e){
    // jquery를 사용하면서 자바스크립트의 내용 사용가능
    console.log(e.target.checked)

    // this를 통해서 이벤트가 발행한 태그를 가져올 수 있음
    // .prop(속성이름)을 통해서 속성값을 가져올 수 있다
    console.log($(this).prop("checked"));

    if(e.target.checked){
        $("#todo").css("color", "darkgreen").addClass("checked");
    }
    else{
        $("#todo").css("color", "").removeClass("checked");
    }
})