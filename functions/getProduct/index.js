const { sendResponse } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event) => {
  console.log("event >>>>>>>", event);
  const id = event.pathParameters.id;

  console.log("id >>>>>>>", id);

  try {
    const product = await db
      .get({
        TableName: "berat-db",
        Key: {
          id,
        },
      })
      .promise();

    console.log("product >>>>>>>", product);

    if (product.Item.id === id) {
      return sendResponse(200, {
        success: true,
        message: "Product found with id: " + id,
        product: product.Item,
      });
    } else {
      return sendResponse(404, {
        success: false,
        message: "Product not found with id: " + id,
      });
    }
  } catch (error) {
    console.log(error);
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Could not get product with id: " + id,
    });
  }
};
