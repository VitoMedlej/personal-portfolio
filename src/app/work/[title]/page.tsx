import React from 'react'
import ProjectPage from './components/ProjectPage/ProjectPage';

import { Metadata } from 'next';
import { items } from '../../../../items';

export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const decodedTitle = decodeURIComponent(params.title || '');
  const project = items.find(
    (proj) => proj.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  return {
    title: project ? `Project Case Study | ${project.title}` : 'Vito Medlej Portfolio | Work Page',
    description: project ? `${project.title} | Project Case Study` : '',
  };
}


const page = () => {
  return (
    <>
      <ProjectPage/>
    </>
  )
}

export default page