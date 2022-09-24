export const stringES6 = () => {
  /// шаблонизатор, сохраняет пробелы, ', шаблоны, доступны условия

  const stringWrite = (str) => {
    return `${str ?? "Данила"}-топ`;
  };

  console.log(stringWrite());

  //method
  console.log(stringWrite().startsWith("Д"));
  console.log(stringWrite().includes("т"));
  console.log(stringWrite().repeat(3));
  console.log(stringWrite().trim());
  console.log(stringWrite().padEnd(15, 12134));
};
