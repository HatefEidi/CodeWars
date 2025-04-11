const whosOnline = (friends) => {
  if (friends.length === 0) return {};
​
  const result = {};
​
  friends.forEach(friend => {
    let state;
    if (friend.status === 'offline') {
      state = 'offline';
    } else if (friend.lastActivity > 10) {
      state = 'away';
    } else {
      state = 'online';
    }
​
    if (!result[state]) {
      result[state] = [];
    }
​
    result[state].push(friend.username);
  });
​
  return result;
};
​