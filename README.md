I made a todo app that stores tasks locally using JSON. 

I implemented a drag and sort interface using DNDKit's library. 

For usability, I broke down the tasks and tasks list into two different components,Column and Task. 

In the parent function, App, that is where I stored the elements locally using localStorage, Json, useState and useEffect. Additionally, I added a clearTask button that allows the user to clear all tasks. (Disregard the select all and show completed tasks buttons)

The column component loading the list of elements locally and passing on each element into the component task. 

The component, Task, per call displays each element accordingly, and is what responds to DndKit's useSortable in Column and allows the user to drag and sort each task. 

Also in task, there is a X button that allows the user to delete the tasks they do not want.
