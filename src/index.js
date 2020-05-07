import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext,Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components';
import '@atlaskit/css-reset';
import initialData from "./initialData";
import Column from "./Column";


const Container = styled.div`
display:flex;
`;

class App extends React.Component{
  state=initialData

  onDragStart=(start,provided)=>{
    document.body.style.color='orange'
    document.body.style.transition='background-color 0.2s ease'

    provided.announce('hello')

    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId)

    this.setState({
      homeIndex
    })
  }

  onDragUpdate=(update)=>{
    const {destination} = update
    const opacity = destination
    ? destination.index/Object.keys(this.state.task).length
    :0
    document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
  }

  onDragEnd=result=>{
    document.body.style.color='inherit'
    document.body.style.backgroundColor = `inherit`;

    this.setState({
      homeIndex:null
    })

    console.log("res",result)
    const {destination,source,draggableId,type} = result
    if(!destination){
      return;
    }
    if(destination.droppableId===source.droppableId&&destination.index===source.index){
      return;
    }

    if(type==='column'){
      const newColumnOrder=Array.from(this.state.columnOrder)
      newColumnOrder.splice(source.index,1)
      newColumnOrder.splice(destination.index,0,draggableId)

      const newState={
        ...this.state,
        columnOrder:newColumnOrder
      }

      this.setState(newState)
      return;
    }

const start = this.state.columns[source.droppableId]
const finish = this.state.columns[destination.droppableId]
console.log("start",start,finish)

if(start===finish){
const newTaskIds = Array.from(start.taskIds)
newTaskIds.splice(source.index,1)
newTaskIds.splice(destination.index,0,draggableId)

console.log("newTaskIds",newTaskIds)


const newColumn={
  ...start,
  taskIds:newTaskIds
}

console.log("newColumn",newColumn)


const newState = {
  ...this.state,
  columns:{
    ...this.state.columns,
    [newColumn.id]:newColumn
  }
}
console.log("newState",newState)

this.setState(newState)

return;
}

//move to other column

const startTaskIds=Array.from(start.taskIds);
startTaskIds.splice(source.index,1);
const newStart={
  ...start,
  taskIds:startTaskIds
}

const finishTaskIds=Array.from(finish.taskIds);
finishTaskIds.splice(destination.index,0,draggableId);
const newFinish={
  ...finish,
  taskIds:finishTaskIds
}

const newState={
  ...this.state,
  columns:{
    ...this.state.columns,
    [newStart.id]:newStart,
    [newFinish.id]:newFinish,
  }
}

  this.setState(newState)

  }

    render(){
      console.log("stateaaaaaaaa",this.state)
    return <DragDropContext 
    onDragStart={this.onDragStart}
    onDragUpdate={this.onDragUpdate}
    onDragEnd={this.onDragEnd}
    > 
    <Droppable 
    droppableId="all-column"
    type="column"
    //direction="horizontal"
     >
    {(provided)=>(
        <Container
        ref={provided.innerRef}
        {...provided.droppableProps}
        >
            {this.state.columnOrder.map((columnId,i)=>{
              const column = this.state.columns[columnId]
               //console.log("columnId",columnId)

               console.log("column",column)
              const tasks = column.taskIds.map(taskId=>this.state.task[taskId])
               console.log("task",tasks)

              const isDragDisabled= columnId==="columns-3"

               console.log("isDragDisabled",isDragDisabled)

              return <Column 
                      key={column.id} 
                      column={column} 
                      tasks={tasks} 
                      isDragDisabled={isDragDisabled} 
                      index={i}
                    />
            })}
            {provided.placeholder}
            </Container>
    )}
    </Droppable>
    
    </DragDropContext>
    } 
  }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

