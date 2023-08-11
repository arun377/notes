import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';


<link href="component/app1.css" rel="stylesheet"></link>
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[id,setId]=useState('')
    const[name,setName]=useState('')
    const[topic,setTopic]=useState('')
    const[notes,setNotes]=useState('')
    const[students,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,topic,notes}
    console.log(student)
    fetch("http://localhost:8080/note/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Note is added")
  })
}




const DeleteDetail = async(id) =>
{
 
 await  axios.delete(`http://localhost:8080/note/${id}`);
 loadDetails();
};
const loadDetails =async()=>
  {
    fetch("http://localhost:8080/note/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  }
  useEffect(() => {
    loadDetails();
  }, []);


  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Notes</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Enter Topic" variant="outlined" fullWidth
      value={topic}
      onChange={(e)=>setTopic(e.target.value)}
      />
      <TextField id="outlined-basic" label="Enter Notes" variant="outlined" fullWidth
      value={notes}
      onChange={(e)=>setNotes(e.target.value)}
      />
      <Button variant="contained"  color="primary" onClick={handleClick}>
  Submit
</Button>

    </form>
   
    </Paper>
    <h1>Students</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Topic:{student.topic}<br/>
         Notes:{student.notes}
         <span> </span>
         
         <Button  onClick={()=>DeleteDetail(student.id)} variant="contained" color="secondary" >
  Delete
</Button>
<span> </span>
<Link to={`/EditUser/${student.id}`}><Button variant="contained" color="warning">edit</Button></Link>
        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}
