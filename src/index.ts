type Player<T> = {
  name: string;
  extraInfo: T;
};

const young: Player<{ favColor: string }> = {
  name: "young",
  extraInfo: {
    favColor: "yellow",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
