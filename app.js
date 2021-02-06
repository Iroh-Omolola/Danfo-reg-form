
var myImage = document.getElementById('choose-file');

       Tesseract.recognize(myImage).then(function(result){

        console.log(result.text);

        alert(result.text);

        });
