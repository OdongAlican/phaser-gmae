const getScores = () => Promise.resolve({ user: 'TestUserOne', score: 200 });
const saveScores = () => Promise.resolve({ user: 'TestUserTwo', score: 20 });

export { getScores, saveScores}