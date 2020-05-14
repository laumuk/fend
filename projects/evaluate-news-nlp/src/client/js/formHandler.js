function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

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
        document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity-confidence
    })
}

function validURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      alert("Please enter valid URL.");
      return false;
    } else {
      return true;
    }
  }

export { handleSubmit, validURL }
