export const formatDate = (time) => {
  let TxDate = new Date(time);
  let FormatedDate =
    TxDate.getFullYear() +
    "/" +
    (TxDate.getMonth() + 1) +
    "/" +
    TxDate.getDate() +
    " " +
    TxDate.getHours() +
    ":" +
    TxDate.getMinutes();

  return FormatedDate;
};
