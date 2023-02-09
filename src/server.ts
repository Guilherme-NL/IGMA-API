import app from "./app.js";
import logger from "./logger.js";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}.`);
});
