function timsochinhphuong() {
    const inputA = parseInt(document.getElementById("inputA").value);
    const inputB = parseInt(document.getElementById("inputB").value);
    let result = "";
  
    if (isNaN(inputA) || isNaN(inputB) || inputA >= inputB) {
      result = "Vui lòng nhập lại khoảng a và b hợp lệ.";
    } else {
      for (let i = inputA; i <= inputB; i++) {
        if (kiemtrasochinhphuong(i)) {
          result += i + " - ";
        }
      }
      if (result === "") {
        result = "Không có số chính phương nào trong khoảng từ " + inputA + " đến " + inputB + ".";
      } else {
        result = "Các số chính phương trong khoảng từ " + inputA + " đến " + inputB + " là: " + result.slice(0, -2);
      }
    }
  
    document.getElementById("result").innerHTML = result;
  }
  
  function kiemtrasochinhphuong(num) {
    const sqrtNum = Math.sqrt(num);
    return Number.isInteger(sqrtNum) && sqrtNum * sqrtNum === num;
  }
  