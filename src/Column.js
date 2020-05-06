import React from 'react';
import { Droppable,Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components';
import Task from './Task'

const Container = styled.div`
margin:8px;
border:1px solid lightgrey;
background-color:white;
border-radius:2px;
width:220px;
display:flex;
flex-direction:column;
`;
const Title = styled.h3`
padding:8px;
`;

//vertical

const TaskList = styled.div`
padding:8px;
transition:background-color 0.2s ease;
background-color:${props=>(props.isDraggingOver?'skyblue':'inherit')};
flex-grow:1;
min-height:100px;
`;


// horizontal

// const TaskList = styled.div`
// padding:8px;
// transition:background-color 0.2s ease;
// background-color:${props=>(props.isDraggingOver?'skyblue':'white')};

// display:flex;
// `;
export default class Column extends React.Component{

    render(){
    return(
        <Draggable 
        draggableId ={this.props.column.id} 
        index={this.props.index}
       // isDrageDisabled={isDrageDisabled}
        >
        {(provided,snapshot)=>(
        <Container
          {...provided.draggableProps}
         {...provided.dragHandleProps}
        ref={provided.innerRef}
        >
        <Title 
        
        >{this.props.column.title}</Title>
        <Droppable 
        droppableId={this.props.column.id} 
        type="TASK" 
        isDrapDisabled={this.props.isDropDisabled} 
        // direction="horizontal"
        >
        {(provided,snapshot)=>(
        <TaskList
         ref={provided.innerRef}
        {...provided.droppableProps}
        isDraggingOver={snapshot.isDraggingOver}
        >
        {this.props.tasks.map((task,i)=><Task key={task.id} task={task} index={i}/>)}</TaskList>

        )}
        </Droppable>
        </Container>
        )}
        </Draggable>
        
    )
      
  }
}