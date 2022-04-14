const constraints = {
  name: {
    presence: true,
    length: { minimum: 2 },
  },
  email: {
    presence: true,
    email: true,
  },
  phone: {
    presence: false,
    format: { pattern: /[0-9-()\s.]*[^A-Za-z]*/, flags: "g" },
    length: {
      minimum: 6,
      maximum: 24,
    },
  },
  message: {
    presence: true,
    length: {
      minimum: 6,
    },
  },
};

export default constraints;
