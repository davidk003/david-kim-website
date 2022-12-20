function dropdownFunction()
{
    document.getElementsByClassName("dropdowncontent")[0].style.visibility = "hidden";
    console.log("test");

}
function toggleDropdown()
{
    if(document.getElementsByClassName("dropdowncontent")[0].style.display =="initial")
    {
        document.getElementsByClassName("dropdowncontent")[0].style.display = "none";
    }
    else
    {
        document.getElementsByClassName("dropdowncontent")[0].style.display ="initial";
    }
    console.log("test");

}
