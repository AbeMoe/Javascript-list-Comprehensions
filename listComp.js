

//This is all test data, you are free to delete/alter it.
list1 = ['yes','no','maybe'];
list2 = ['1','2','3'];
list3 = ['x','y','z','a','b','c'];
listHolder = [list1,list2,list3];


//All you need to do is hand in a list of lists, the parentList
//is there for recursion purposes,so a proper call of this should look like
//compList(listOfLists) and that is all it needs.
function compList(lists,parentList) {
    if(parentList === undefined)
    {
        //this is our basecase
        parentList = lists.pop();
    }
    childList = lists.pop();
    //Clean out returnList to prevent it from holding the stuff from last time
    returnList = [];
    //For each elelment in our childlist...
    for(var elem1 in childList)
    {
        for(var elem2 in parentList)
        {
            //...Append to a parent
            newList = [parentList[elem2],childList[elem1]];

            returnList.push(newList);
        }
    }
    //By the end of this for loop each parent should have a copy of a child linked to it
    if(lists.length === 0)
    {
        //if our list is empty
        return returnList;
    }
    //Recursive case
    else
        return compList(lists,returnList);
}


somevar = compList(listHolder);

for(var x in somevar)
    print(somevar[x]);


