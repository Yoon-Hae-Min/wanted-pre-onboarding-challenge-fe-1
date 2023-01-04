const isEmailValidate = (email: string) => {
  const emailRule = new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  return emailRule.test(email);
};

export default isEmailValidate;
