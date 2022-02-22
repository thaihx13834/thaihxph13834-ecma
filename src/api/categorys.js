import instance from "./config";

export const getAll = () => {
  const url = "/cates";
  return instance.get(url);
};

export const getAllc = () => {
  const url = "/cates";
  return instance.get(url);
};

export const get = (id) => {
  const url = `/cates/${id}`;
  return instance.get(url);
};

export const remove = (id) => {
  const url = `/cates/${id}`;
  return instance.delete(url);
};

export const add = (post) => {
  const url = `/cates`;
  return instance.post(url, post);
};

export const edit = (post) => {
  const url = `/cates/${post.id}`;
  return instance.put(url, post);
};
