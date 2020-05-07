import React from 'react';
import { Draggable} from 'react-beautiful-dnd'

import styled from 'styled-components';

//vertical

const Container = styled.div`
margin-bottom:8px;
padding:8px;
border:1px solid lightgrey;
border-radius:2px;
background-color:${props=>(props.isDrapDisabled?'lightgrey': props.isDragging?'lightgreen':'white')};
display:flex;
`;

// horizontal

// const Container = styled.div`
//  margin-right:8px;
//  padding:8px;
//  border:3px solid lightgrey;
//  border-radius:50px;
//  background-color:${props=>(props.isDrapDisabled?'lightgrey': props.isDragging?'lightgreen':'white')};
//  display:flex;
//  justify-content:center;
//  align-items:center;
//  height:40px;
//  width:40px;

//  &:focus{
//      outline:none;
//      border-color:red;
//  }
//  `;

// const Handle = styled.div`
// width:20px;
// height20px;
// margin-right:8px;
// border-radius:4px;
// background-color:orange;
// `;



export default class Task extends React.Component{

    render(){
        // const isDrageDisabled=this.props.task.id==='task-1'
        // console.log("isDrageDisabled",isDrageDisabled)
    return(
        <Draggable 
        draggableId ={this.props.task.id} 
        index={this.props.index}
        isDragDisabled={this.props.isDragDisabled}
        >
        {(provided,snapshot)=>(
        <Container
        {...provided.draggableProps}
         {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        //isDrageDisabled={isDrageDisabled}

        >
        {/* <Handle  {...provided.dragHandleProps}/> */}
         {/* vertical */}
        {this.props.task.content}

        {/* horizontal */}
        {/* {this.props.task.content[0]} */}
        </Container>
        )}
        </Draggable>
    )
      
  }
}