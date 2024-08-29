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

  //   --------------------------------------------------------------------------------
  // -------------------- User Name validation & set in local Storage -----------------
  if (localStorage.getItem("name") == null) {
    localStorage.setItem("name", "[]");
  }

  var old_nameArr = JSON.parse(localStorage.getItem("name"));
  old_nameArr.push(nameInputVal);

  if (nameInputVal == "") {
    document.getElementById("errorName").innerHTML =
      "** Please Enter valid Name **";
  } else {
    document.getElementById("errorName").innerHTML = "";
    localStorage.setItem("name", JSON.stringify(old_nameArr));
  }

  // ------------------------------------------------------------------------------------
  // --------------------User Email validation & set in local Storage -------------------
  if (localStorage.getItem("email") == null) {
    localStorage.setItem("email", "[]");
  }

  var old_emailArr = JSON.parse(localStorage.getItem("email"));
  old_emailArr.push(emailInputVal);

  if (
    emailInputVal.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    document.getElementById("errorEmail").innerHTML = "";
    localStorage.setItem("email", JSON.stringify(old_emailArr));
  } else {
    document.getElementById("errorEmail").innerHTML =
      "** Please Enter valid E-mail Id **";
  }

  // ---------------------------------------------------------------------------------------
  // --------------------User Password validation & set in local Storage -------------------
  if (localStorage.getItem("password") == null) {
    localStorage.setItem("password", "[]");
  }

  var old_passArr = JSON.parse(localStorage.getItem("password"));
  old_passArr.push(passInputVal);

  if (passInputVal != cPassInputVal) {
    document.getElementById("errorCPass").innerHTML =
      "** Please Enter valid Password **";
  } else {
    localStorage.setItem("password", JSON.stringify(old_passArr));
  }

  // -------------------------------------------------------------------------------------------
  // ------------------------if User All Input Empty -------------------------------------------
  if (
    nameInputVal == "" &&
    emailInputVal == "" &&
    passInputVal == "" &&
    cPassInputVal == ""
  ) {
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorId").innerHTML =
      "** Please Enter valid Details **";
  }
  // ----------------------------------------------------------------------------------------------
  // --------------------After click on registration Button all input become Empty-----------------
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

  var emailArr = JSON.parse(localStorage.getItem("email"));
  var passwordArr = JSON.parse(localStorage.getItem("password"));

  // --------------------User Email validation & set in local Storage -------------------

  let i = 0;
  let j = 0;
  console.log("emailArr", emailArr, typeof emailArr);

  console.log("passwordArr", passwordArr);
  while (i < emailArr.length && j < passwordArr.length) {
    console.log("emailArr[i]", emailArr[i]);
    console.log("passwordArr[j]", passwordArr[j]);

    if (
      emailInputVal.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      emailInputVal == emailArr[i] &&
      passInputVal == passwordArr[j]
    ) {
      document.getElementById("errorEmailID").innerHTML = "";
      document.getElementById("loginPage_ID").style.display = "none";
      document.getElementById("homePage_ID").style.display = "block";
      //   document.getElementById("homePage_ID").style.flex-direction = "column";
      console.log("yes valid");
      // localStorage.setItem("email", JSON.stringify(old_emailArr));
    } else {
      document.getElementById("errorEmailID").innerHTML =
        "** Please Enter valid E-mail Id **";
    }

    i++;
    j++;
  }
};
