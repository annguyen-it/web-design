const ck_usr = /^[A-Za-z_][\w-@]{4,11}$/
const ck_pass = /[A-Za-z0-9!@#$%^&*()_ ]{7,12}$/
const ck_name = /[A-Za-z-]$/
const ck_zip = /[\d]{5}$/
const ck_email = /^[\w][\w-]+(?:\.[\w-]+)*@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

let [usrMatched, passMatched, nameMatched, zipMatched, emailMatch] = Array(5).fill(false)
let accept = false

const checkRes = document.getElementsByClassName('checkRes')

function checkAll() {
  accept = true

  if (!checkUsr()) accept = false
  if (!checkPass()) accept = false
  if (!checkName()) accept = false
  if (!checkZip()) accept = false
  if (!checkEmail()) accept = false

  showCheck()
  setTimeout(() => {
    accept ? showAccept() : showDeny()
  }, 200)
}

function checkUsr() {
  if (ck_usr.test(txt_usr.value)) {
    usrMatched = true
    return true
  }

  usrMatched = false
  return false
}

function checkPass() {
  if (ck_pass.test(pass.value)) {
    passMatched = true
    return true
  }

  passMatched = false
  return false
}

function checkName() {
  if (ck_name.test(txt_name.value)) {
    nameMatched = true
    return true
  }

  nameMatched = false
  return false
}

function checkZip() {
  if (ck_zip.test(txt_zip.value)) {
    zipMatched = true
    return true
  }

  zipMatched = false
  return false
}

function checkEmail() {
  if (ck_email.test(txt_email.value)) {
    emailMatched = true
    return true
  }

  emailMatched = false
  return false
}

function showCheck() {
  let accept = [usrMatched, passMatched, nameMatched, zipMatched, emailMatched]

  for (let i = 0; i < 5; i++) {
    if (accept[i]) {
      checkRes[i].innerHTML = '<i class="fas fa-check" style="color: lime"></i>'
    }
    else {
      checkRes[i].innerHTML = '<i class="fas fa-times" style="color: red"></i>'
    }
  }
}

function showAccept() {
  alert("Registration successful!")
}

function showDeny() {
  alert("Please try again.")
}