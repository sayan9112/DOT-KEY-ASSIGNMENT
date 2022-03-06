
const PRODUCT_CATEGORY_PRICE_RATING_LIST = [
    ["Vitamin C Serum", "Glow", "INR 1095", 4.3],
    ["Pink Clay Mask", "Glow", "INR 845", 4.7],
    ["Day Cream", "Dry", "INR 845", 4.1],
    ["Night Cream", "Dry", "INR 945", 4.7],
    ["Hyaluronic Acid Serum", "Dry", "INR 975", 4.9],
    ["Acne Busting Serum", "Acne", "INR 975", 4.1],
    ["Green Clay Mask", "Acne", "INR 695", 4.7],
    ["Day Gel", "Dry", "INR 645", 4.9],
    ["AHA Serum", "Glow", "INR 1095", 4.5],
    ["AHA Sleep Mask", "Glow", "INR 995", 4.3],
  ];


  const PRODUCT_CATEGORY_PRICE_RATING_MAP = Object.assign(
    {},
    ...[...PRODUCT_CATEGORY_PRICE_RATING_LIST].map((el) => {
      return { [el[0]]: { category: el[1], price: el[2], rating: el[3] } };
    })
  );

  
  const PRODUCT_SORT_RATING_PRICE = [...PRODUCT_CATEGORY_PRICE_RATING_LIST].sort(
    (a, b) => {
      let _diff = b[3] - a[3];
      if (_diff == 0) {
        return +b[2].replace("INR ", "") - +a[2].replace("INR ", "");
      } else {
        return _diff;
      }
    }
  );


  const recommendProduct = (_product, _rating) => {
    const { category, price, rating } =
      PRODUCT_CATEGORY_PRICE_RATING_MAP[_product];
    if (_rating > 4.5) {
      const _product_above_4p3 = [...PRODUCT_CATEGORY_PRICE_RATING_LIST].filter(
        (el) => el[3] > 4.3 && _product != el[0]
      );
      if (_product_above_4p3.length > 1) {
        const _product_above_4p3_sorted_rating = [..._product_above_4p3].sort(
          (a, b) => b[3] - a[3]
        );
        if (
          _product_above_4p3_sorted_rating[0][3] ==
          _product_above_4p3_sorted_rating[1][3]
        ) {
          const _product_with_same_high_rating = [
            ..._product_above_4p3_sorted_rating,
          ].filter((el) => el[3] == _product_above_4p3_sorted_rating[0][3]);
          const _product_with_same_category = [
            ..._product_with_same_high_rating,
          ].filter((el) => el[1] == category);
          if (_product_with_same_category.length == 0) {
            return _product_with_same_high_rating[0][0];
          } else if (_product_with_same_category.length == 1) {
            return _product_with_same_category[0][0];
          } else {
            const _product_with_high_price = [
              ..._product_with_same_category,
            ].sort(
              (a, b) => +b[2].replace("INR ", "") - +a[2].replace("INR ", "")
            );
            return _product_with_high_price[0][0];
          }
        } else {
          const _product_with_high_price = [..._product_above_4p3].sort(
            (a, b) => +b[2].replace("INR ", "") - +a[2].replace("INR ", "")
          );
          return _product_with_high_price[0][0];
        }
      } else {
        return _product_above_4p3[0][0];
      }
    } else if (_rating >= 4 && _rating <= 4.5) {
      const _product_above_4p5 = [...PRODUCT_CATEGORY_PRICE_RATING_LIST].filter(
        (el) => el[3] > 4.5 && _product != el[0]
      );
      if (_product_above_4p5.length > 1) {
        const _product_above_4p5_sorted_rating = [..._product_above_4p5].sort(
          (a, b) => b[3] - a[3]
        );
        if (
          _product_above_4p5_sorted_rating[0][3] ==
          _product_above_4p5_sorted_rating[1][3]
        ) {
          const _product_with_same_high_rating = [
            ..._product_above_4p5_sorted_rating,
          ].filter((el) => el[3] == _product_above_4p5_sorted_rating[0][3]);
          const _product_with_same_category = [
            ..._product_with_same_high_rating,
          ].filter((el) => el[1] == category);
          if (_product_with_same_category.length == 0) {
            return _product_with_same_high_rating[0][0];
          } else if (_product_with_same_category.length == 1) {
            return _product_with_same_category[0][0];
          } else {
            const _product_with_high_price = [
              ..._product_with_same_category,
            ].sort(
              (a, b) => +b[2].replace("INR ", "") - +a[2].replace("INR ", "")
            );
            return _product_with_high_price[0][0];
          }
        } else {
          const _product_with_high_price = [..._product_above_4p5].sort(
            (a, b) => +b[2].replace("INR ", "") - +a[2].replace("INR ", "")
          );
          return _product_with_high_price[0][0];
        }
      } else {
        return _product_above_4p5[0][0];
      }
    } else {
      const _product_from_other_category = [
        ...PRODUCT_CATEGORY_PRICE_RATING_LIST,
      ].filter((el) => el[1] != category && _product != el[0]);
      const _product_from_other_category_sorted_rating = [
        ..._product_from_other_category,
      ].sort((a, b) => b[3] - a[3]);
      if (_product_from_other_category_sorted_rating.length > 1) {
        if (
          _product_from_other_category_sorted_rating[0][3] ==
          _product_from_other_category_sorted_rating[1][3]
        ) {
          const _product_with_same_high_rating = [
            ..._product_from_other_category_sorted_rating,
          ].filter(
            (el) => el[3] == _product_from_other_category_sorted_rating[0][3]
          );
          const _product_with_low_price = [
            ..._product_with_same_high_rating,
          ].sort((a, b) => +a[2].replace("INR ", "") - +b[2].replace("INR ", ""));
          return _product_with_low_price[0][0];
        } else {
          return _product_from_other_category_sorted_rating[0][0];
        }
      } else {
        return _product_from_other_category_sorted_rating[0][0];
      }
    }
  };