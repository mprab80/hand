
Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality:60
})
    camera=document.getElementById("camera");
    Webcam.attach(camera);

       function takeSnapshot(){
           Webcam.snap(function (data_uri){
               document.getElementById("result").innerHTML='<img id="apple" src="'+data_uri+'"/>';
               console.log(data_uri);
           });
       }
       classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l5C-USxgt/model.json",modelLoaded);
       function modelLoaded(){
           console.log("modelLoaded");
       }
       
       function makePrediction(){
        img1=document.getElementById("apple");
        classifier.classify(img1, gotResults);
       }

       function gotResults(error, results){
        if (error){
            console.log(error);
        }
        else{
            console.log(results)
            document.getElementById("gestureicon").innerHTML=results[0].label;
            gesture=results[0].label;
        }
        if (gesture=="Victory"){
            speak="Victory"
            document.getElementById("gestureicon").innerHTML="&#128076;"
        }
        if (gesture=="Best"){
            speak="Best"
            document.getElementById("gestureicon").innerHTML="&#9996;"
        }
        if (gesture=="Amazing"){
            speak="Amazing"
            document.getElementById("gestureicon").innerHTML="&#128077";
        }
        speak1();
    }

    function speak1(){
        var synth=window.speechSynthesis;
        speakData=speak;
        var utterthis=new SpeechSynthesisUtterance(speakData);
        synth.speak(utterthis);
    }
       
