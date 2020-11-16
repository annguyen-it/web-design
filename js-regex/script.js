const ck_phone = /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/
const ck_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/
const ck_usr = /^[\w]{1,20}$/
const ck_pass = /^[\w!@#$%^&*()]{6,20}$/

function checkNull(txt) {
  return txt.value.length == 0
}

function stringMatch(txt, reg) {
  return reg.test(txt.value)
}

function isInteger(txt) {
  return !isNaN(txt.value) && parseInt(txt.value) == Number(txt.value)
}

function notCheck(radios) {
  let rt = true
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      rt = false
      break
    }
  }
  return rt
}

function validateForm(f) {
  if (checkNull(f.fullname)) {
    alert(f.fullname.name + ' must not be null')
    f.fullname.focus()
    return
  }

  if (checkNull(f.age)) {
    alert(f.age.name + ' must not be null')
    f.age.focus()
    return
  }

  if (isNaN(f.age.value)) {
    alert(f.age.name + ' must be a number')
    f.age.value = ''
    f.age.focus()
    return
  }

  if (!isInteger(f.age)) {
    alert(f.age.name + ' must be an integer')
    f.age.value = ''
    f.age.focus()
    return
  }

  if (eval(f.age.value) <= 0 || eval(f.age.value >= 200)) {
    alert(f.age.name + ' must be in (0-200)')
    f.age.value = ''
    f.age.focus()
    return
  }

  if (notCheck(f.gender)) {
    alert('Gender must be choosen')
    return
  }

  if (!stringMatch(f.phone, ck_phone)) {
    alert('Phone is not valid')
    f.phone.value = ''
    f.phone.focus()
    return
  }

  if (!stringMatch(f.email, ck_email)) {
    alert('Email is not valid')
    f.email.value = ''
    f.email.focus()
    return
  }

  alert('All fields are valid!')
}