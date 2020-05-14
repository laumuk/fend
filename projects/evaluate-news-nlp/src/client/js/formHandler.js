function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (!validURL(formText)) {
        alert("Please enter valid URL.")
        return false
    }

    console.log("::: Form Submitted :::")
    fetch(
        'http://localhost:8081/article?url=' + encodeURIComponent(formText)
    )
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('text').innerHTML = res.text
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence
    })
}

function validURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    return regex.test(str)
}

export { handleSubmit, validURL }
