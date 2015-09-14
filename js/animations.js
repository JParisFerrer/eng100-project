var e = document.getElementById("about-me");
e.addEventListener("animationend", aboutMeListener, false);
      
function aboutMeListener(e)
{
  if(e.type == "animationend")
    {
      if($("#about-me").hasClass("disappearanimAE"))
      {
        $("#about-me").addClass("hide");
      }
      
      $("#about-me").toggleClass("appearanimAE", false);
      $("#about-me").toggleClass("disappearanimAE", false);
    }
}

function toggleAboutMe()
{
  if($("#about-me").hasClass("hide"))
  {
    $("#about-me").toggleClass("appearanimAE");
  }
  else
  {
    $("#about-me").toggleClass("disappearanimAE");  }
  
  $("#about-me").toggleClass("hide", false);
}


var d = document.getElementById("projects");
e.addEventListener("animationend", projectsListener, false);
      
function projectsListener(e)
{
  if(e.type == "animationend")
    {
      if($("#projects").hasClass("disappearanimP"))
      {
        $("#projects").addClass("hide");
      }
      
      $("#projects").toggleClass("appearanimP", false);
      $("#projects").toggleClass("disappearanimP", false);
    }
}

function toggleProjects()
{
  if($("#about-me").hasClass("hide"))
  {
    $("#about-me").toggleClass("appearanimP");
  }
  else
  {
    $("#about-me").toggleClass("disappearanimP");  }
  
  $("#about-me").toggleClass("hide", false);
}