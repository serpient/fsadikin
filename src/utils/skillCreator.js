import * as React from 'react';

export const skillCreator = (techArray) => {
    return techArray.map((skill, index) => {
        return (
            <div key={"skill" + index} className="project-tech-skill">{skill}</div>
        )
    })
}