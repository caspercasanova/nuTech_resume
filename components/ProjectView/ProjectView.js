import React, { useState } from 'react';
import ProjectViewSample from './Projects/ProjectViewSample';
import projects from './Projects/ProjectData';

export default function ProjectView() {
  const [proj, setProj] = useState(0);

  return (
    <section>
      <div>
        <button onClick={() => setProj(0)}>
          Project X
        </button>
        <button onClick={() => setProj(1)}>
          Project Y
        </button>
        <button onClick={() => setProj(2)}>
          Project Z
        </button>
        <button onClick={() => setProj('random')}>
          Random
        </button>
      </div>
      {typeof proj == 'number' ? (
        <ProjectViewSample project={projects[proj]} />
      ) : (
        <div>This is coming soon</div>
      )}
    </section>
  );
}
