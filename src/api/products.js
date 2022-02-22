import instance from "./config";

export const getAll = () => {
  const url = "/products?_expand=cate";
  console.log(url);
  return instance.get(url);
};
export const get = (id) => {
  const url = `/products/${id}?_expand=cate`;
  return instance.get(url);
};

export const getw = (id) => {
  const url = `/cates/${id}?_embed=products`;
  return instance.get(url);
};

export const remove = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const add = (product) => {
  const url = `/products`;
  return instance.post(url, product);
};
export const edit = (post) => {
  const url = `/products/${post.id}`;
  return instance.put(url, post);
};

export const getwcate = (id) => {
  const url = `/cates/${id}?_embed=products`;
  console.log(url);
  return instance.get(url);
};

export const getwlike = (name_like) => {
  const url = `/products?name_like=${name_like}`;
  console.log(url);
  return instance.get(url);
};

export const getlistNew = () => {
  const url = `/products?_sort=id&_order=desc&_limit=4`;
  console.log(url);
  return instance.get(url);
};

export const getlistsapxep = () => {
  const url = `/products?_sort=name&_order=asc`;
  console.log(url);
  return instance.get(url);
};
