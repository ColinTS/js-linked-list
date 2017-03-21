/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

   var head = null;
   var tail = null;

   function getHead(){
      return head;
    }

    function getTail(){
      return tail;
    }

    function add(book){
      var newNode = {
        value: book,
        next: null
        };

      if(head === null & tail === null){
        head = newNode;
        tail = head;

      } else {
        tail.next = newNode;
        tail = newNode;
      }

      return  newNode;

    }

    function remove(n){
        //removing node
        if(get(n) === false){
          return false;
        }
        else if(get(n) === getTail()){
          get(n-1).next = null;
          tail = get(n-1);
        } else{
            var nodeToRemove = get(n);
            var preNode = get(n-1);
            preNode.next = nodeToRemove.next;
          }
       }

    function get(n){
        var count = 0;
        var currentObject = head;

        while(currentObject !== null){
          if(count === n){
            console.log('current object',currentObject);
            return currentObject;
          }

        count++;
        currentObject = currentObject.next;
      }
      return false;
    }

    function insert(){}




   return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };

}