export const getGoals = (req, res) => {
  res.status(200).json({ message: "got it" });
};

export const createGoal = (req, res) => {
  res.status(201).json({ message: "created it" });
};

export const showGoal = (req, res) => {
  res.status(200).json({ message: "got it" });
};

export const updateGoal =  ((req, res) => {
    res.status(200).json({message : "got it"})
})

export const deleteGoal =  ((req, res) => {
    res.status(200).json({message : "got it"})
})