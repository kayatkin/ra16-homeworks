import { useState } from 'react';
import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList';
import './Portfolio.css';

export const Portfolio = ({ projectsData }) => {

  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects = selectedFilter === 'All' ? projectsData : projectsData.filter(project => project.category === selectedFilter);

  return (
    <div className='container'>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selectedFilter}
        onSelectFilter={handleSelectFilter}
      />

      <div className='gallery'>
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};