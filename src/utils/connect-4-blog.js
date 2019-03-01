const connect4Blog = `
  # Lesson 1— Choosing the right data structure to represent a Connect 4 board
  I originally chose a MAP because I thought being able to store a coin’s row and column position as a KEY in a Map data structure would make it easy to insert and retrieve values. After an hour or so in this direction, I quickly hit some obstacles.

  I was generating keys like [0,1] and saving it as part of new entries in a Map. However, when trying to update the value associated with key [0,1], it was adding NEW entries instead of updating the original. This was because the [0,1] I used as a key to get an entry is not the same as I originally inputted during board creation. I had ultimately created entries with keys made up of REFERENCES that I hadn’t stored anywhere — thus, I couldn’t retreat the entries by key anymore!
  
`;

export default connect4Blog;
