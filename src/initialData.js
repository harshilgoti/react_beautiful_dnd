//vertical

const initialData = {
    task:{
        "task-1":{id:"task-1",content:"content-1"},
        "task-2":{id:"task-2",content:"content-2"},
        "task-3":{id:"task-3",content:"content-3"},
        "task-4":{id:"task-4",content:"content-4"}
    },
  columns: {
   "columns-1":{
       id:"columns-1",
       title:"To Do",
       taskIds:["task-1","task-2","task-3","task-4"]
   },
   "columns-2":{
       id:"columns-2",
       title:"In Progress",
       taskIds:[]
   },
    "columns-3":{
       id:"columns-3",
       title:"Done",
       taskIds:[]
   },
  },
  columnOrder:["columns-1","columns-2","columns-3"]
};
export default initialData;


//horizontal

// const initialData = {
//     task:{
//         "task-1":{id:"task-1",content:"content-1"},
//         "task-2":{id:"task-2",content:"content-2"},
//         "task-3":{id:"task-3",content:"content-3"},
//         "task-4":{id:"task-4",content:"content-4"}
//     },
//   columns: {
//    "columns-1":{
//        id:"columns-1",
//        title:"To Do",
//        taskIds:["task-1","task-2","task-3","task-4"]
//    },
//   },
//   columnOrder:["columns-1"]
// };
// export default initialData;
