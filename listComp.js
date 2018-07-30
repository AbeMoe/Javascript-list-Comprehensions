

//This is all test data, you are free to delete/alter it.
list1 = ['yes','no','maybe'];
list2 = ['1','2','3'];
list3 = ['x','y','z','a','b','c'];
listHolder = [list1,list2,list3];

function compList(lists,createdLists) 
	{
		if(createdLists === undefined)
		{
			//0..this is our basecase,pop a list and..1
			createdLists = []
			listHolder = lists.pop();
			//1..for each item in the list add it, as its own list to createdLists for later..2
			for (items in listHolder)
			{
				listHolder[items] = [listHolder[items]]
				createdLists.push(listHolder[items])
			}			
		}
		//2..Populate the incomingList and create a new returnList..3
		var incomingList = lists.pop();
		var returnList = [];
		//3..For each "fresh" element..4
		for(var newElements in incomingList)
		{
			//4..Iterate through the lists we already made..5
			for(var list in createdLists)
			{
				//6..copy them using slice add the new item and add that to our return list!..7
				var newList = createdLists[list].slice()
				newList.push(incomingList[newElements])
				returnList.push(newList);
			}
		}
		
		if(lists.length === 0)
		{
			return returnList;
		}
		//7..Recursive case, call the function again with all the lists we've already made and..2
		else
			return compList(lists,returnList);
	}	

somevar = compList(listHolder);

for(var x in somevar)
    print(somevar[x]);


