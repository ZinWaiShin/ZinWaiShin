let inputText = document.querySelector(".inputText");

let searchBar = document.querySelector(".searchBar");

let timeList = document.querySelector(".timeList");

let timeLogo = document.querySelector(".timeLogo");

timeList.innerHTML  ="";

searchBar.addEventListener("change",(event) => {

        let inputValue  = event.target.value;
            let mainContainer = document.createElement("div");
                mainContainer.classList.add("mainContainer");

                let inputDivContainer = document.createElement("div");
                    inputDivContainer.classList.add("inputDivContainer");

                    let textSpanTag  = document.createElement("span");
                        textSpanTag.classList.add("TextSpanTag")

                        let searchTagInList = document.createElement("i");
                             searchTagInList.classList.add("searchTagInList","fas" ,"fa-search")

                            let closeIconTag = document.createElement("i");
                                closeIconTag.classList.add("closeTag","fas" ,"fa-times");

                                    closeIconTag.addEventListener("click",()=>{
                                        mainContainer.remove();
                                    })
                                    
                           
                        textSpanTag.append(inputValue);
                    inputDivContainer.append(searchTagInList,textSpanTag);
                mainContainer.append(inputDivContainer,closeIconTag);
            inputText.append(mainContainer);

        


        searchBar.value = "";
});

// Time Slectoin .....

timeLogo.addEventListener("click" , () => {
    timeLogo.style.backgroundColor = "rgba(204, 20, 20, 0.418)";
        timeLogo.style.color ="white";
            let startTime =  setInterval(shoppingTime, 1000); 
        
            if (startTime){
                timeLogo.addEventListener("click", ()=>{
                    timeLogo.style.backgroundColor ="white";
                    timeLogo.style.color ="black";
                    clearInterval(startTime)
                    timeList.remove()
                    timeList.innerHTML  =""; 
                    
                })
              
            }
            
            
    });
 let seconds = 0, minutes = 0, hours = 0;
        timeList.innerHTML  ="";
            let shoppingTime = () => {
                seconds += 1;
                    if (seconds === 60){
                        seconds = 0;
                        minutes += 1 ;
                            if (minutes === 60){
                                minutes = 0;
                                hours += 1;
                            };

                    };
                    let secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
                        let minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
                            let hoursText   = hours   < 10 ? "0" + hours  .toString() : hours;

                    timeList.textContent =hoursText+ ":" +minutesText + ":" + secondsText ;

           
            };
        
         
          

