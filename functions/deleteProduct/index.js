const { sendResponse } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  try {
    const existingProduct = await db
      .get({
        TableName: "berat-db",
        Key: {
          id,
        },
      })
      .promise();

    if (!existingProduct.Item) {
      return sendResponse(404, {
        success: false,
        message: "Product not found with id: " + id,
      });
    }

    await db
      .delete({
        TableName: "berat-db",
        Key: {
          id,
        },
      })
      .promise();

    return sendResponse(200, {
      success: true,
      message: "Product with id " + id + " was deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return sendResponse(500, {
      success: false,
      message: "Could not delete product widh id: " + id,
    });
  }
  console.log("event", event);

  return sendResponse(200, product);
};
