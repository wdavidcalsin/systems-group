export const splitTitle = (title: string) => {
  if (typeof title !== "string") {
    throw new Error("Title must be a string");
  }

  const words = title.split(" ");
  const middleIndex = Math.floor(words.length / 2);

  const firstTitle = words.slice(0, middleIndex).join(" ");
  const secondTitle = words.slice(middleIndex).join(" ");

  return { firstTitle, secondTitle };
};
