/* Hash Table */
function myFunction(){
  let inpKeyword = document.getElementById("inpKeyword").value;
  let value = document.getElementById("value").value;
  let searchKey = document.getElementById("searchKey").value;
  let removeKey = document.getElementById("removeKey").value;
}
  var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };

class HashTable {
  constructor() {

    let storage = [];
    const storageLimit = 14;

    this.print = function () {
      console.log(storage);
    };

    this.add = function (inpKeyword, value) {
      var index = hash(inpKeyword, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [inpKeyword, value]
        ];
        document.getElementById("ShowCase").innerHTML = "המשימה נוספה בהצלחה";
      }
      else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === inpKeyword) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([inpKeyword, value]);
        }
        document.getElementById("ShowCase").innerHTML = "המשימה נוספה בהצלחה";
      }
    };

    this.remove = function (removeKey) {
      var index = hash(removeKey, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === removeKey) {
        delete storage[index];
        console.log("The selected mission removed");
      }
      else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === removeKey) {
            delete storage[index][i];
            console.log("The selected mission removed");
          }
        }
      }
    };

    this.lookup = function (searchKey) {
      var index = hash(searchKey, storageLimit);
      if (storage[index] === undefined) {
        return document.getElementById("ShowCase").innerText = ("לא קיימת במערכת משימה כזאת");
      }
      else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === searchKey) {
            return document.getElementById("ShowCase").innerText = (storage[index][i][1]);
          }
        }
      }
    };
    console.log("test");
  }
}
  let ht = new HashTable();

