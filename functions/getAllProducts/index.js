const { sendResponse } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event) => {
  console.log("event >>>>>>>", event);

  try {
    const productList = await db
      .scan({
        TableName: "berat-db",
      })
      .promise();

    return sendResponse(200, {
      success: true,
      products: productList,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Could not get product with id: " + id,
    });
  }
};
