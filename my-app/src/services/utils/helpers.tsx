const sliceSynopsis = (string: string) => {
  let temp: any = string.split("");
  const result = temp.findIndex((e: string, i: number) => {
    return e === " " && i > 240;
  });
  return result;
};

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
