function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if( name == "" || email == "" || phone == "" 
        || subject == "" || message == ""){
            return alert("Semua field wajib diisi")
         }
    
    console.log (name)
    console.log (email)
    console.log (phone)
    console.log (subject)
    console.log (message)


    let emailReceiver = "rhomairama.dev@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=Let's Talk&body=Hello my name ${name}, ${message}, Let's Talk with me asap`
    a.click()

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);

    }

