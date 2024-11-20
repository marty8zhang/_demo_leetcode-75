function productExceptSelf(nums) {
  const products = [];
  const preProducts = [];
  const sufProducts = [];

  preProducts[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    preProducts[i] = preProducts[i - 1] * nums[i - 1];
  }

  sufProducts[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    sufProducts[i] = sufProducts[i + 1] * nums[i + 1];
    products[i] = preProducts[i] * sufProducts[i] || 0;
  }

  products[nums.length - 1] = preProducts[nums.length - 1] || 0;

  return products;
}

export default productExceptSelf;
