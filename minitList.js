let inputText = document.getElementsByClassName("form-control")[0];

let inputSearch = document.getElementsByClassName("inputSearch")[0];


    let productsList =1;
inputText.addEventListener("change",(event)=>{
    let eventTag = event.target.value;
   
    let inputTextContainerTag = document.createElement("div")
         inputTextContainerTag.classList.add("inputTextContainerTag");

    let inputTextListContainer = document.createElement("div");
        inputTextListContainer.classList.add("inputTextListContainer");

    let iconTag  = document.createElement("i");
        iconTag.classList.add("fas","fa-times");
            iconTag.classList.add("iconTag");

            iconTag.addEventListener("click",()=>{
                inputTextContainerTag.remove();
                return ;
            })

    iconTag.addEventListener("click",()=>{
        console.log("hello")
    })

    let inputTextList = document.createElement("span");
        inputTextList.classList.add("inputTextList");
            inputTextList.id = productsList ;
    let numberList  = productsList.toString() +". ";
        inputTextList.append(numberList)
            productsList +=1;

    inputTextListContainer.addEventListener("click",()=>{
        let lineThrough = inputTextListContainer.classList.contains("lineThrough");
            if (lineThrough){
                inputTextListContainer.classList.remove("lineThrough")
                }else{
                    inputTextListContainer.classList.add("lineThrough")
                }
    })

    inputTextList.append(eventTag);
        inputTextListContainer.append(inputTextList);
            inputTextContainerTag.append(inputTextListContainer,iconTag)
                inputSearch.append(inputTextContainerTag);
        


    inputText.value ="";
})