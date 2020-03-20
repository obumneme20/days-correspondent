document.getElementById("screen").value = "Give me a number, and i will tell you the day"
function send(){

    var input = Number(document.getElementById("enter").value)

    switch (input) {
        case 1:
            document.getElementById("screen").value = "It's Monday"
            break;

        case 2:
            document.getElementById("screen").value = "It's Tuesday"
            break;

        case 3:
            document.getElementById("screen").value = "It's Wenesday"
            break;

        case 4:
            document.getElementById("screen").value = "It's Thursday"
            break;

        case 5:
            document.getElementById("screen").value = "It's Friday"
            break;

        case 6:
            document.getElementById("screen").value = "It's Saturday"
            break;

        case 7:
            document.getElementById("screen").value = "It's Sunday"
            break;

        default: 
                document.getElementById("screen").value = "You seen to have provided an invalid number"
            break;
    }        
}





