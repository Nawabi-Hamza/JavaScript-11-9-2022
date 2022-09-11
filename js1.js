const inputs = document.querySelectorAll('input');
const patterns = { 
    telephone: /^\d(10)$/,
    username:/^[a-z\d]
}


function validate(field,regex){
    if (regex.test(field.value)){
        field.className = 'valid'
    }
    else (regex.test(field.value)){
        field.className = 'invalid'
    }

}

inputs.forEach((input)=>{
        input.addEventListener('keyup', (e)=>{
            // console.log(e.target.attributes.name.value)
            validate(e.target,patterns[e.target.attributes.name.value])
        })

})