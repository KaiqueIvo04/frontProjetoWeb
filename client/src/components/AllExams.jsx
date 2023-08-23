import { Box,  IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const AllExams = ({exam}) => {

    return(
       
        <Box 
        bgcolor="grey"
        borderRadius="10px"
        p="10px"
        maxHeight="170px"
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between" 
        whiteSpace="normal" 
        overflow="auto"
    >
         
        <table>
            <thead>
                <th>Nome</th>
                <th>Data</th>
            </thead>
            <tbody>
            <tr> 
               
                {exam.map((exams)=>(
                    <div key={exams.id}>
                        <th>{exams.name}</th>
                        <th>{exams.date}</th>
                    </div>
                    
                ))}
                
                <Box
                display="flex"
                
                >
                    <IconButton><DeleteIcon/></IconButton>
                    <IconButton><EditIcon/></IconButton>
                </Box>
            </tr>
            </tbody>
            
        </table> 
        
       
            
            
       
    </Box>
    )
}

export default AllExams;