function bodyLoad()
{
    document.getElementById("btn").style.fontSize = "15px"; 
    document.getElementById("btn").style.backgroundColor="darkred";    
    document.getElementById("btn").style.borderRadius="20px";    
    document.getElementById("btn").style.color="white";    
    document.getElementById("btn").style.padding="10px";    
    document.getElementById("btn").style.borderStyle="none";    

    document.getElementById("btn2").style.fontSize = "15px"; 
    document.getElementById("btn2").style.backgroundColor="darkred";    
    document.getElementById("btn2").style.borderRadius="20px";    
    document.getElementById("btn2").style.color="white";    
    document.getElementById("btn2").style.padding="10px";    
    document.getElementById("btn2").style.borderStyle="none"; 

}

function reset_all(){
    document.getElementById("body").style.backgroundColor="green";

    document.getElementById("nameheading").style.backgroundColor="green";

    document.getElementById("anchorTag").style.color="white";

    document.getElementById("anchorTag").style.borderStyle="solid";
}


function changeTheme()
{
    document.getElementById("body").style.backgroundColor="blue";

    document.getElementById("nameheading").style.backgroundColor="blue";

    document.getElementById("anchorTag").style.color="white";

    document.getElementById("anchorTag").style.borderWidth="0px";

}

function changeImageOver()
{
    document.getElementById("catroon_img").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviE5JApdFBe_g5V5vSbgBgNO1DezHaA-q55goSCO1IpdYHvGxtxcXT2U7z5DrILBuEF4&usqp=CAU";
}

function changeImageLeave()
{
    document.getElementById("levi_img").src ="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f4bca61-54d2-4724-b6a5-c3b63d4c3050/df29725-183f73d0-18c0-4edf-9c27-43a606b33731.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmNGJjYTYxLTU0ZDItNDcyNC1iNmE1LWMzYjYzZDRjMzA1MFwvZGYyOTcyNS0xODNmNzNkMC0xOGMwLTRlZGYtOWMyNy00M2E2MDZiMzM3MzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7pfZ4cd4jHAIuNV3Ca5b7x9QTgyPxAnBkhv5SaUzkGU";
}