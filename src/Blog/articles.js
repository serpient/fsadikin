const turtlesTab = {
  id: 1,
  date: 'Nov. 27, 2017',
  associatedProject: `turtle-tab`,
  tags: ['post-mortem'],
  title: `TurtlesTab Chrome Extension — a Chingu Voyage-2 project`,
  mainImage: require('../assets/turtleTab-main.png'),
  article: `
    ![cover-photo](https://cdn-images-1.medium.com/max/2000/1*-j8LlK3ePz15ySOKxUof8A.png)

    # TurtlesTab Chrome Extension — a Chingu Voyage-2 project

    ## Background:
    Chingu is an online community that organizes participants into remote teams that build a 
    real-world web app or site within 5–6 weeks. My team of 4 (Eun Park, thorbw , and milesj76)
    were inspired by the InfinityTab Chrome Extension and decided to create an alternate 
    version with changes that we thought were needed.

    [Link To TurtlesTab Chrome Extension](https://chrome.google.com/webstore/detail/turtletab/imaanfkbpecmdapjnoonjjbofnfplcbd/reviews?hl=en)
    [Link to Github Repo](https://github.com/chingu-coders/Voyage2-Turtles-11)

    ## Workflow:
    - git for our version control. I found it helpful to have many small commits, which made it 
    easier to review the team’s code and revert changes if needed, and the git workflow is well-suited 
    for that since repositories are cloned locally. Every member had their own individual branch from 
    which they would push stable commits into the main development branch.
    - I used Sketch to create the UI mockup, and exported it into Zeplin as a sharing platform for the 
    rest of the team. Zeplin is pretty cool in its ability to parse relative code from each individual 
    element, as well as create a color-palette and font-book from my imported layouts.

    ![style-guide](https://cdn-images-1.medium.com/max/1250/1*vHZ85CB8NIaNpRyt5sihqw.jpeg)
    ![mockup](https://cdn-images-1.medium.com/max/1250/1*Mp8yb--YJBj8W-OzhVsbLQ.jpeg)

    `,
}

export const articles = {
  turtlesTab,
}