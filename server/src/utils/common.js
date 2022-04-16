const getCleanUserDate = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    company: user.company,
    city: user.city,
    red_date: user.reg_date,
  };
};

module.exports = {
  getCleanUserDate
}
