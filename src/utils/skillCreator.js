import * as React from 'react';

export const skillCreator = (techArray) => {
    return techArray.map(skill => {
        return (
            <div className="project-tech-skill">{skill}</div>
        )
    })
}