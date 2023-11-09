const inp = document.getElementById('validation-input')
const val = inp.attributes['data-length'].value

inp.addEventListener('blur', e => {
  if (e.target.value.length != val)
  {
     inp.classList.remove('valid')
     inp.classList.add('invalid')
  }
  else {
       inp.classList.remove('invalid')
     inp.classList.add('valid')
}

})
