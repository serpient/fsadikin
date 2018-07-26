import * as React from 'react';
import { skillCreator } from '../utils/skillCreator';
import { projectFeatureCreator } from '../utils/projectFeatureCreator';

const removeRelativeLink = (string) => {
    var index = string.search("http");
    return string.substring(index);
}

export const individualProjectPageCreator = (projectData, mainImage) => {
    return (
        <div className="individual-project-container">
            <img
                className="project-image project-image-padding"
                src={require('../assets/' + mainImage)}
                alt="main-project"
            />
            <div className="project-page-title">{projectData.name}</div>
            <div className="project-page-description">{projectData.description}</div>
            <div className="project-page-work">{
                projectData.workDone.map((role, index) => {
                    return (
                    <div className="role-container">
                        <div className="role" key={index}>
                            <div className="role-dot"/> 
                            {role}
                        </div>
                    </div>
                    )
                })
            }</div>
            <div className="project-page-tech">{skillCreator(projectData.tech)}</div>
            <div className="project-page-btns">
                <a href={removeRelativeLink(projectData.liveLink)} rel="external" target="_blank" className="main-navi-btn">Live Link</a>
                <a href={removeRelativeLink(projectData.githubLink)} rel="external" target="_blank" className="main-navi-btn">Github Link</a>
            </div>
            {projectFeatureCreator(projectData.features)}
        </div>
    )
}