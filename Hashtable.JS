let ifPressed = 0;
let showOneCheckbox = 0;
let Remove = 0;
let Search = 0;
let TemporaryObj;
let ifRemoved = 0;
let x = 0
let checkDb;
let maxLength = 1;
let removeCheck;
let checkAdd;
let Mission = [14][14];
let myMiss_serialized;
class NewMission 
{
    constructor(Number, Mission)
    {
        this.Number = number;
        this.Mission = mission;
    }
}
function submitValue(){ // קולטת משימה ומכניסה ללוקל סטורג
    checkAdd = document.getElementById("inpKeyword").value;
    if(checkAdd == null || checkAdd == "" || checkAdd == undefined || checkAdd == NaN) //לא מצליח להבין למה זה לא עובד באמת הרי זה צריך לבדוק אם אין ערך
    {
        document.getElementById("ShowCase").innerHTML = "המשימה לא נוספה אנא בדוק שנית אם המשימה תיקנית";				
    }
    else 
    {
        var hash = Math.round(document.getElementById("inpKeyword").value.charCodeAt() / 14);
         // for(let i = 0 ; Mission.length ; i++ ){
        if(Mission[hash][x] == null || Mission[hash][x] == "" || Mission[hash][x] == undefined || Mission[hash][x] == NaN){
          Mission[hash][x] = new NewMission (this.number = x , this.mission = document.getElementById("inpKeyword").value);
          myMiss_serialized = JSON.stringify(document.getElementById("value").value);
          Mission[hash][x] = myMiss_serialized;
          console.log(Mission[hash][x] + "המשימה שנוספה היא");
          document.getElementById("ShowCase").innerHTML = "המשימה נוספה בהצלחה";
        }
        else{
          while(Mission[hash][x] != null || Mission[hash][x] != "" || Mission[hash][x] != undefined || Mission[hash][x] != NaN)
          {
              Mission[hash][x] = new NewMission (this.number = x , this.mission = document.getElementById("inpKeyword").value);
              myMiss_serialized = JSON.stringify(document.getElementById("value").value);
              Mission[hash][x] = myMiss_serialized;
              console.log(Mission[hash][x] + "המשימה שנוספה היא");
              document.getElementById("ShowCase").innerHTML = "המשימה נוספה בהצלחה";
              // הרעיון הוא שברגע שאתה מוסיף משימה יהיה 2 קריטריונים לאחר מכן לחיפושה 1. הערך שלה השני יהיה המספר שלה ככה שנדע מיקום של כל משימה בתוך השרשרת שבהאש טייבל שלנו      
              x++;
          }
          x = 0;
        }
    }
}

function showM() // מציגה את כל המשימות
{
    ifPressed++;
    for (let i = 0; i < mission.length; i++)
    {
        //if(ifPressed > 1)//מנסה לפתור את בעיית הכפילויות ברגע שנלחץ הצג משימות יותר 
      
            for(let r = 0; r < 14; r++)//בודק אם נלחץ יותר מפעם אחת הדאטא בייס ואז מחליף את המידע במקום לשכפל אותו
            {
              while(Mission[i][r] != null || Mission[i][x] != "" || Mission[i][r] != undefined || Mission[i][r] != NaN){
                checkDb += Mission[i][r];
                document.getElementById("ShowCase").innerText =+ (i + " . - " + checkDb);
              }
            }								
        
    }		
}
    
function clearLs()//מוחקת את כל המשימות
{
    ifRemoved++;
    for(let r = 0; r < 14; r++){//עובר תא תא ומוחק את הערך 
      for(let i = 0; i < 14; i++){
        Mission[r][i] = undefined;
      }
    } 
    document.getElementById("ShowCase").innerText =+ ("כל המשימות נמחקו בהצלחה"); 
}	

/*
  class HashTable {
    constructor() {
  
      let storage = [];
      const storageLimit = 14;
      this.add = function (inpKeywordword, value) {
        var index = hash(inpKeywordword, storageLimit);
        if (storage[index] === undefined) {//בודק אם יש ערכים במערך אם אין זה מחזיר אנא החזר ערכים 
          storage[index] = [
            [inpKeywordword, value]
          ];
          document.getElementById("ShowCase").innerHTML = "אנא הכנס ערכים";
        }
        else {
          var inserted = false;
          for (var i = 0; i < storage[index].length; i++) {// בודק אם יש ערכים אם אין זה מגדיר את הראשון בתא הראשון ומחזיר שנכנס ערך  לטבלה
            if (storage[index][i][0] === inpKeywordword) {
              storage[index][i][1] = value;
              inserted = true;
            }
          }
          if (inserted === false) {//בודק אם יש בכל זאת ערכים אם אין ערכים זה דוחף ערכים אל המערך
            storage[index].push([inpKeywordword, value]);
          }
          document.getElementById("ShowCase").innerHTML = "המשימה נוספה בהצלחה";
        }
      };
  
      this.remove = function (removeKey) {
        var index = hash(removeKey, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === removeKey) {//בודק אם העורך של המערך הוא 1 אם כן והערך של המשתמש דומים הערך ימחק
          delete storage[index];
          console.log("The selected mission removed");
        }
        else {
          for (var i = 0; i < storage[index].length; i++) {//בודק את מיקום המשימה שנמחקה בתוך המערך בתוך הערך הנבחר ומוחק אותה
            if (storage[index][i][0] === removeKey) {
              delete storage[index][i];
              console.log("The selected mission removed");
            }
          }
        }
      };
  
      this.lookup = function (searchKey) {
        var index = hash(searchKey, storageLimit);
        if (storage[index] === undefined) {//בודק אם הערך שנכנס תקין
          return document.getElementById("ShowCase").innerText = ("הערך שנכנס אינו תקין אנא בדוק שנית");
        }
        else {
          for (var i = 0; i < storage[index].length; i++) {//בודק בערך שנבחר את המשימה הרצוייה ומחזיר אותה
            if (storage[index][i][0] === searchKey) {
              return document.getElementById("ShowCase").innerText = (storage[index][i][1]);
            }
          }
        }
      };
    }
  }
 */

