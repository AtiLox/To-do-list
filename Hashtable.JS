// הבעיה העיקרית היא שלא הצלחתי לדחוף את הערכים ולהשתמש בקלאס כמו שצריך
function myFunction(){//כביכול אמור להגדיר את הערכים מכיוון שאני לא מצליח להבין איך אני עושה את זה
  let inpKeyword = document.getElementById("inpKeyword").value;
  let value = document.getElementById("value").value;
  let searchKey = document.getElementById("searchKey").value;
  let removeKey = document.getElementById("removeKey").value;
}
  var hash = (inpKeyword, storageLimit) => {// לוקח את הערך המספרי של המילה ומחלק באורך של המערך ובעזרת זה  מגדיר מיקום  
    var hash = 0;
    for (var i = 0; i < inpKeyword.length; i++) {
      hash += inpKeyword.charCodeAt(i);
    }
    return hash / storageLimit;
  };

class HashTable {
  constructor() {

    let storage = [];
    const storageLimit = 14;
    this.add = function (inpKeyword, value) {
      var index = hash(inpKeyword, storageLimit);
      if (storage[index] === undefined) {//בודק אם יש ערכים במערך אם אין זה מחזיר אנא החזר ערכים 
        storage[index] = [
          [inpKeyword, value]
        ];
        document.getElementById("ShowCase").innerHTML = "אנא הכנס ערכים";
      }
      else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {// בודק אם יש ערכים אם אין זה מגדיר את הראשון בתא הראשון ומחזיר שנכנס ערך  לטבלה
          if (storage[index][i][0] === inpKeyword) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {//בודק אם יש בכל זאת ערכים אם אין ערכים זה דוחף ערכים אל המערך
          storage[index].push([inpKeyword, value]);
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


