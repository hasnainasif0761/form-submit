  const scriptURL = 'https://script.google.com/macros/s/AKfycbwnUb7kO8CVwIFY7z2qyPwWDHLlTrzpDH2qF8A23LDuCk_jLIGARksylQCrNFpqGgub/exec'
  const form = document.forms['submit-to-google-sheet']
  const success = document.getElementById('success');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success.innerHTML="data successfully Enter";

        setTimeout(function(){
            success.innerHTML="";
        }, 500)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })