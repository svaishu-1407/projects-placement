const screen=document.getElementById('cal');
function insert(value)
{
    screen.value=screen.value+value;
}
function all_clear()
{
      screen.value="";
}
function calculation()
{
    try{
        screen.value=eval(screen.value);
    }
    catch{
        screen.value="ERROR❌";
    }
}
