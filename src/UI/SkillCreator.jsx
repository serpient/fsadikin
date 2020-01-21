import * as React from 'react';

const SkillCreator = ({ techArray }) => {
  return techArray.map((skill, index) => {
    return (
      <div key={'skill' + index} className="project-tech-skill">
        {skill}
      </div>
    );
  });
};

export default SkillCreator;
