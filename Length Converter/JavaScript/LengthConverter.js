var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;

//add event listner
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

function myResult() {
  //when we change input and output type value we need to update inputtypevalue and outputtype value
  //taking initial input
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  //compare input and result type value
  //for input type meter
  if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
    //meter to km formula
    result.value = Number(input.value) * 0.001;
  } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
    //meter to centimeter formula
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
    //meter to meter formula
    result.value = input.value;
  }

  //for input type km
  if (inputTypeValue == "kilometer" && resultTypeValue == "kilometer") {
    //km to km formula
    result.value = input.value;
  } else if (inputTypeValue == "kilometer" && resultTypeValue == "centimeter") {
    //km to centimeter formula
    result.value = Number(input.value) * 100000;
  } else if (inputTypeValue == "kilometer" && resultTypeValue == "meter") {
    //km to meter formula
    result.value = Number(input.value) * 1000;
  }

  //for input type centimeter
  if (inputTypeValue == "centimeter" && resultTypeValue == "kilometer") {
    //km to km formula
    result.value = Number(input.value) * 0.00001;
  } else if (
    inputTypeValue == "centimeter" &&
    resultTypeValue == "centimeter"
  ) {
    //km to centimeter formula
    result.value = input.value;
  } else if (inputTypeValue == "centimeter" && resultTypeValue == "meter") {
    //km to meter formula
    result.value = Number(input.value) * 0.01;
  }
}
