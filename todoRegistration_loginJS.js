//----------------------- Globle variable ------------------------------------------------------------------------------------
let nameInputVal;
let emailInputVal;
let passInputVal;
let cPassInputVal;
// ----------------------------------------------------------------------------------------------------------
//  -----------------------registrationfun run --------------------------------------------------------------
let registrationFun = function () {
  nameInputVal = document.getElementById("nameInputId").value;
  emailInputVal = document.getElementById("emailInputId").value;
  passInputVal = document.getElementById("passInputId").value;
  cPassInputVal = document.getElementById("cPassInputId").value;

  if (localStorage.getItem("person") == null) {
    localStorage.setItem("person", "[]");
  }

  // -------------------- User Name ,Email,Password validation  -----------------
  if (nameInputVal == "") {
    document.getElementById("errorName").innerHTML =
      "** Please Enter valid Name **";
  } else if (
    !emailInputVal.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("errorEmail").innerHTML =
      "** Please Enter valid E-mail Id **";
  } else if (passInputVal != cPassInputVal) {
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorCPass").innerHTML =
      "** Please Enter valid Password **";
  } else if (
    nameInputVal == "" &&
    emailInputVal == "" &&
    passInputVal == "" &&
    cPassInputVal == ""
  ) {
    document.getElementById("errorId").innerHTML =
      "** Please Enter valid Details **";
  } else {
    document.getElementById("errorId").innerHTML = "";
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorCPass").innerHTML = "";

    let personDetailsArr = JSON.parse(localStorage.getItem("person"));
    personDetailsArr.push({
      name: nameInputVal,
      email: emailInputVal,
      password: passInputVal,
    });
    const toJSON = JSON.stringify(personDetailsArr);
    localStorage.setItem("person", toJSON);
    alert(`${nameInputVal} : Registration SuccessFully Completed !`);
  }
  // ---------- click on registration Button all input become Empty------
  document.getElementById("nameInputId").value = "";
  document.getElementById("emailInputId").value = "";
  document.getElementById("passInputId").value = "";
  document.getElementById("cPassInputId").value = "";
};

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------loginFun Function------------------------------
let loginFun = function () {
  emailInputVal = document.getElementById("loginEmailId").value;
  passInputVal = document.getElementById("loginPassId").value;

  var personDetailsArr = JSON.parse(localStorage.getItem("person"));

  let i = 0;
  while (i < personDetailsArr.length) {
    if (
      emailInputVal.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      emailInputVal == personDetailsArr[i].email &&
      passInputVal == personDetailsArr[i].password
    ) {
      document.getElementById("errorEmailID").innerHTML = "";
      document.getElementById("loginPage_ID").style.display = "none";
      document.getElementById("homePage_ID").style.display = "block";
      document.getElementById("personId").innerHTML = emailInputVal;
    } else {
      document.getElementById("errorEmailID").innerHTML =
        "** Please Enter valid E-mail Or Password **";
    }

    i++;
  }
};

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------
let inputClickRemoveError = function () {
  document.getElementById("errorId").innerHTML = "";
  document.getElementById("errorName").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("errorCPass").innerHTML = "";
};
