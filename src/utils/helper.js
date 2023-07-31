export const filterData = (searchText, allRestaurants) => {
  const filterData = allRestaurants.filter((restaurant) =>
  //   restaurant.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  // );
  restaurant.info.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
};
