const { supabase } = require("../../frontend/src/supabaseClient");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (token) {
    try {
      const { user } = await supabase.auth.api.getUser(token);
      req.user = user;
    } catch (error) {
      console.error("Error while verifying token:", error);
    }
  }

  next();
};

module.exports = authMiddleware;
