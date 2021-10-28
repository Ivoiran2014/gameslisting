const API_KEY = "de7199fd6e614d3bb64996d83e642dc5";
const base_url = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month >= 10) {
    return month;
  } else {
    return `0${month}`;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day >= 10) {
    return day;
  } else {
    return `0${day}`;
  }
};

const year = new Date().getFullYear();

// American date format 2021-10-12
const currentDate = `${year}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYearDate = `${year - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYearDate = `${year + 1}-${getCurrentMonth()}-${getCurrentDay()}`;

// Popular games url
const popular_games = `games?key=${API_KEY}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;

const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;

const new_games = `games?key=${API_KEY}&dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`;

export const popularGames_url = () => `${base_url}${popular_games}`;
export const upcomingGames_url = () => `${base_url}${upcoming_games}`;
export const newGames_url = () => `${base_url}${new_games}`;

// GET DETAILS URL
export const gamesDetail_url = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;

//GAMES SCREENSHOT
export const gameScreenshot_url = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;

// Search Games
export const searchGames_url = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=${API_KEY}`;
