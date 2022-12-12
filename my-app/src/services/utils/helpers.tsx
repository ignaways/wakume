import { DAYS, MONTH, FULLMONTH } from "../constants/date";
// modular function and variables

const dateNow = new Date();
const currentDay = dateNow.getDay();
const currentDate = dateNow.getDate();
const currentMonth = dateNow.getMonth();
const currentYear = dateNow.getFullYear();

const sliceSynopsis = (string: string) => {
  let temp: any = string.split("");
  const result = temp.findIndex((e: string, i: number) => {
    return e === " " && i > 240;
  });
  return result;
};

const getDateRelease = (dayRelease: string) => {
  let gapDay = 0;
  let nextDateRelease = 0;
  DAYS.map((el, i) => {
    if (el === dayRelease) {
      const tempCount = currentDay - (i + 1);
      gapDay = tempCount < 0 ? Math.abs(tempCount) : 7 - tempCount;
      nextDateRelease = currentDate + gapDay;
    }
  });
  return checkMonth(nextDateRelease);
};
const checkMonth = (date: number) => {
  if (currentMonth % 2 === 0) {
    if (currentMonth === 2) {
      if (currentYear % 4 === 0) {
        date = date - 29;
      } else {
        date = date - 28;
      }
    } else if (date >= 30) {
      date = date - 30;
    }
  } else {
    if (date >= 31) {
      date = date - 31;
    }
  }
  return date;
};

// helpers function
export const elipsisHandler = (synopsis: string) => {
  const maxSlice = sliceSynopsis(synopsis);
  let tempSynopsis: any = synopsis.split("").slice(0, maxSlice).join("");
  return tempSynopsis;
};
export const remainingSynopsisHandler = (synopsis: string) => {
  const minSlice = sliceSynopsis(synopsis);
  let tempSynopsis: any = synopsis.split("").slice(minSlice).join("");
  return tempSynopsis;
};

export const episodeOngoing = (date: string) => {
  console.log("🚀 ~ file: helpers.tsx ~ line 62 ~ episodeOngoing ~ date", date)
  const startDate = new Date(date);
  console.log("🚀 ~ file: helpers.tsx ~ line 63 ~ episodeOngoing ~ startDate", startDate)
  const differences = dateNow.getTime() - startDate.getTime();
  const totalDay = Math.ceil(differences / (1000 * 3600 * 24));
  const totalEpisode = Math.ceil(totalDay / 7 + 1);
  console.log("🚀 ~ file: helpers.tsx:67 ~ episodeOngoing ~ totalEpisode", totalEpisode)
  return totalEpisode;
};

interface dateRelease {
  day_of_the_week: string;
  start_time: string;
}
export const countDownEpisode = (dateRelease: dateRelease) => {
  const dayRelease = dateRelease?.day_of_the_week;
  const timeRelease = dateRelease?.start_time;
  const getDay = getDateRelease(dayRelease);
  const countDownDate = new Date(
    `${MONTH[currentMonth]} ${getDay}, ${currentYear} ${timeRelease}`
  );
  const distance = countDownDate.getTime() - dateNow.getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    return "done";
  } else {
    return days + " days, " + hours + " hours " + minutes + "m " + seconds + "s ";
  }
};

export const convertDate = (dateAiring: string) => {
  const date = new Date(dateAiring);
  const getYear = date.getFullYear();
  const getMonth = date.getMonth();
  const getDay = date.getDate();
  return `${getDay} ${FULLMONTH[getMonth]}, ${getYear}`;
};

export const convertUppercase = (text: string) => {
  let splitText = text.split("_");
  return splitText
    .map((e, i) => {
      let tempArr = [];
      let tempStr = "";
      for (let i = 0; i < e.length; i++) {
        i === 0 ? (tempStr += e[i].toUpperCase()) : (tempStr += e[i]);
      }
      tempArr.push(tempStr);
      return tempArr;
    })
    .join(" ");
};
