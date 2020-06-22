let ifPressed = 0;
let showOneCheckbox = 0;
let Remove = 0;
let Search = 0;
localStorage;
let TemporaryObj;
let ifRemoved = 0;
let x = 0
let checkDb;
let maxLength = 1;
let removeCheck;
let checkAdd;
let Missions = "";
class NewMission 
{
    constructor(Number, Mission)
    {
        this.Number = number;
        this.Mission = mission;
    }
    set addMission(mission){
        this.Mission = document.getElementById("inpKey").value;
    }
    set addNumber(number){
        this.Number = document.getElementById("inpNum").value;
    }
    get addMission()
    {
        return this.Mission;
    }
    get addNumber()
    {
        return this.Number;
    }
 }
    //let counter= 0;
    //counter ++;
    x++;
function myFunction() // קולטת משימה ומכניסה ללוקל סטורג
{ 
    checkAdd = document.getElementById("inpKey").value;
    if(checkAdd == null || checkAdd == "" || checkAdd == undefined || checkAdd == NaN) //לא מצליח להבין למה זה לא עובד באמת הרי זה צריך לבדוק אם אין ערך
    {
        document.getElementById("ShowCase").innerHTML = "המשימה לא נוספה אנא בדוק שנית אם המשימה תיקנית";				
    }
    else 
    {
        Object.create (NewMission[Number , Mission]);
        if(ifRemoved > 0)
        {
            x=maxLength;
            Missions =
            {
                number : document.getElementById("inpNum").value ,
                mission : document.getElementById("inpKey").value
            }
            let myMiss_serialized = JSON.stringify(Missions);
            NewMission[number , mission] = myMiss_serialized;
        }
        else
        {
            Missions =
            {
                number : document.getElementById("inpNum").value ,
                mission : document.getElementById("inpKey").value
            }
            let myMiss_serialized = JSON.stringify(Missions);
            NewMission[number , mission] = myMiss_serialized;
            console.log(NewMission[x] + "המשימה שנוספה היא");
            document.getElementById("ShowCase").innerHTML = "המשימה נוספה בהצלחה";	
            x++;
            maxLength = x;
        }
    }
}

function showM() // מציגה את כל המשימות
{
    ifPressed++;
    for (let i = 0; i < x; i++)
    {
        if(ifPressed > 1)//מנסה לפתור את בעיית הכפילויות ברגע שנלחץ הצג משימות יותר 
        {
            for(let r = 0; r < x; r++)//בודק אם נלחץ יותר מפעם אחת הדאטא בייס ואז מחליף את המידע במקום לשכפל אותו
            {
                checkDb += NewMission[r];
                if(document.getElementById("searchKey").value == checkDb)
                {
                    document.getElementById("ShowCase").innerText = (r + " - " + checkDb);
                }
            }								
        }
        else
        {
            if(ifRemoved > 0)
            {
                TemporaryObj = NewMission[i];
                document.getElementById("ShowCase").innerText = (NewMission[i] + " - " + TemporaryObj);
                ifRemoved = 0;
            }
            else
            {		
                // להבין איך אני מציג את כל הלוקל סטורג בצורה נורמלית
                TemporaryObj = NewMission[i];
                document.getElementById("ShowCase").innerText += (NewMission[i] + " - " + TemporaryObj);
                ifRemoved = 0;
            }
        }
    }		
}
function SearchLsMission() // מחפשת משימה מסויימת
{
    showOneCheckbox++;
    if(showOneCheckbox > 0 && ifRemoved == 0) // אמור לבדוק אם לא נמחק משהו מהדאטא בייס 
    {
        Search = document.getElementById("searchKey").value;
        TemporaryObj = NewMission[Search];
        if(TemporaryObj == null || TemporaryObj == "" || TemporaryObj == undefined || TemporaryObj == NaN)
            document.getElementById("ShowCase").innerText = ("לא קיימת במערכת משימה כזאת");		
        else
            document.getElementById("ShowCase").innerText = (TemporaryObj);						
    }
    else // במידה ונמחק משהו מהדאטא בייס זה אמור לבדוק איך המיקומים בדאטא בייס שונו ולחפש על פי השינויים
    {
        Search = document.getElementById("searchKey").value;
        TemporaryObj = NewMission[Search];
        if(TemporaryObj == null || TemporaryObj == "" || TemporaryObj == undefined || TemporaryObj == NaN)
            document.getElementById("ShowCase").innerText = ("לא קיימת במערכת משימה כזאת");		
        else
            document.getElementById("ShowCase").innerText = (TemporaryObj);	
    }
    ifRemoved++;
    maxLength=localStorage.length + 1;//הרעיון הוא ברגע שנמחקת משימה זה לא יחזור לקודמות וישנה אותם זה יקפוץ לאיקס חדש שהוא ההמשך של הלוקל סטורג
    
}

function RemoveLsMission()//מוחקת משימה מסויימת
{
    Remove = document.getElementById("removeKey").value;
    removeCheck = NewMission[Remove];
    if(removeCheck == null || removeCheck == "" || removeCheck == undefined || removeCheck == NaN)
    {
        document.getElementById("ShowCase").innerText = ("לא קיימת במערכת משימה כזאת");		
    }	
    else
    {
        ifRemoved++;
        Object.remove(NewMission[Remove]);
        document.getElementById("ShowCase").innerText = "משימה מס -" + Remove + "- נמחקה";
        console.log("The selected mission removed");
    }	
}
    
function clearLs()//מוחקת את כל המשימות
{
    ifRemoved++;
    Object.remove(NewMission);
    document.getElementById("ShowCase").innerText = "כל המשימות נמחקו";
    console.log("All of the missions removed");	
    maxLength = 1;
}	
//הסברים לכל המשתנים באתר :
//X - משנה המהווה את השם של המיקום בלוקל סטורג
//ifRemoved	- בודק אם נמחקו המשימות ואם כן הוא משנה את הטקסט מחדש על מנת שלא יוסיף אותו לטקסט של כל ההודעות נמחקו + הלוקל סטורג
//counter - בודק את המספר הסיריאלי של כל משימה
//showOneCheckbox - בודק אם נלחץ הצג משימה על משימה אחת ולא כולם ככה שזה יציג רק את המשימה שחיפשו
//Remove - שומר את הערך של המשימה הרצוייה למחיקה כמספר
//Search - שומר את הערך של המשימה הרצוייה למחיקה כמספר
//ifPressed - בודק אם נלחץ כפתור ההצג משימות ככה שאם ילחץ עוד פעם אז זה יציג את המשימות העדכניות ולא יכפיל את הטקסט
//checkDb - מכיל את המידע של כל הדאטא בייס
//maxLength - משתנה שאמור לשמור את האורך המקסימלי שהלולאה הגיעה אליו לפני מחיקה על מנת שיהיה ניתן להוסיף ערך חדש על מקום בלוקל סטורג שלא קיים 
//removeCheck - בודק אם התא קיים בלוקל סטורג אם כן אז יתן למחוק את התא אם לא יחזיר תשובה של התא לא קיים
//checkAdd - בודק אם המשימה היא לא ריקה על מנת שנוכל להוסיף אותה ללוקל סטורג

//משימות להמשך :
//1. לראות מה עושים לגבי בעיית המחיקה והחיפוש בנושא הלוקל סטורג
//2. לראות איך אני מסדר את הטבלה שאם מכניסים עוד ערכים זה לא יוריד שורה ויפריע לי ללחוץ על כפתורים
//3. לעצב את האתר
//4. הצגת הלוקל סטורג בצורה נורמטיבית