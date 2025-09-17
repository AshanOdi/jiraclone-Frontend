const transitions = {
  "TO DO": ["IN PROGRESS"],
  "IN PROGRESS": ["CODE REVIEW", "DONE"],
  "CODE REVIEW": ["IN PROGRESS", "DONE"],
  DONE: [],
};
