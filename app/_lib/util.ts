import { CurrentSeason, Season } from "../_types/season";

export const getCurrentSeason = (): CurrentSeason => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-11

  let season: Season;
  if (month >= 3 && month <= 5) {
    season = "Spring";
  } else if (month >= 6 && month <= 8) {
    season = "Summer";
  } else if (month >= 9 && month <= 11) {
    season = "Autumn";
  } else {
    season = "Winter";
  }

  return { year, season };
};
