import qs from "qs";

const getFilters = (filter, populate = "*") => {
  const query = qs.stringify(
    {
      filters: filter,
      populate,
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // console.log("filters are", query);
  return query;
};

const URL_LIST = {
  homeCategory: "/categories?populate=thumbnail",
  workList: "/works?populate=thumbnail",
  careerList: "/careers",
  blogList: "/blogs?populate=thumbnail",
  careerDetail: function (slug) {
    // console.log("slug is..", slug)
    return `/careers?${getFilters({ slug: slug })}`;
  },
  blogDetail: function (slug) {
    // console.log("slug is..", slug)
    return `/blogs?${getFilters({ slug: slug })}`;
  },
  careerApply: "/applications",
  contact: "/contacts",
};

export default URL_LIST;
