import { toast } from "react-toastify";
const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    return JSON.parse(storedListStr);
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast("already exists in the read list");
  } else {
    storedList.push(id);
    localStorage.setItem("read-list", JSON.stringify(storedList));
    toast("This book is added to you read list");
  }
};

export { addToStoredReadList, getStoredReadList };
