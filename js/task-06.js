const inp = document.getElementById('validation-input')
const val = inp.attributes['data-length'].value

inp.addEventListener('blur', e => {
  if (e.target.value.length == val)
  {
    inp.classList.remove('invalid')
     inp.classList.add('valid')
  }
  else {
     inp.classList.remove('valid')
    inp.classList.add('invalid')
}

})
