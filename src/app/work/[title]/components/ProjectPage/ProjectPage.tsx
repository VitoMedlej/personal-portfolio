"use client"
import Btn from "@/app/Components/Btn/Btn";
import { Container, Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";
import { items } from "../../../../../../items";

const ProjectPage = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(`${title}` || '');
    const project = items.find(
      (proj) => proj.title.toLowerCase() === decodedTitle.toLowerCase()
    );
  
    if (!project) {
      return (
        <Container>
          <Typography variant="h4">Project not found</Typography>
        </Container>
      );
    }
  
    return (
      <Container maxWidth="md" sx={{ pt: 18,pb:4 }}>
        <Box
          component="img"
          src={project.img}
          alt={project.title}
          sx={{ width: '100%', mb: 2 }}
        />
        <Typography variant="h1" sx={{fontSize:{xs:'2em',sm:'3em'},fontWeight:700}} gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="h3" sx={{fontSize:{xs:'.8em',sm:'.9em'},fontWeight:400}} gutterBottom>
        Type: {project?.type}
        </Typography>
        <Box sx={{py:2}}>
  
        {project.text && project?.text?.map(line=>{
          
          
          return     <Typography key={`${line}`} variant="body1" gutterBottom>
            {`${line}`}
        </Typography>
  })
  }
  </Box>
  <a href={`${project.url}`} target='_blank'>

        <Btn variant="contained" color="primary" href={project.url} target="_blank">
          Visit Site
        </Btn>
  </a>
      </Container>
    );
  };
  
  export default ProjectPage;