import axios from "axios";

const getUrl = (url) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${url
    ?.toString()
    ?.replace(/^\/?|\/?$/g, "")}`;
};

// get last index element o string in javascript
export const callApi = (url, method = "get", data = {}, formData) => {
  let token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
  )?.token;
  return new Promise((resolve, reject) => {
    let headers = {
      "Content-Type": "application/json",
    };
    if(formData) {
      headers = {
        "Content-Type": "application/form-data"
      };
    }
   
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return axios({
      method: method,
      url: getUrl(url),
      data: data,
      headers: headers,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (token && error?.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          let persistedData = JSON.parse(localStorage.getItem("persist:root"));
          if (persistedData?.user) {
            delete persistedData.user;
            localStorage.setItem("persist:root", JSON.stringify(persistedData));
            window.location.reload();
          }
        }
        reject(error);
      });
  });
};
