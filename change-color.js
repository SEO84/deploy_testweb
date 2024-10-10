document.getElementById("heading").addEventListener("click", function() {
    // 랜덤 색상 생성
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // 텍스트 색상 변경
    this.style.color = randomColor;
});