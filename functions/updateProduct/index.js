const { sendResponse } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event) => {
  const { title, price } = JSON.parse(event.body);
  const id = event.pathParameters.id;
  // Get id from the event body
  // Find the product with that id in the database
  // Update the product with the new title and price
  // Return the updated product

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

    const product = {
      id,
      title,
      price,
    };

    const dbProduct = await db
      .update({
        TableName: "berat-db",
        Key: {
          id,
        },
        UpdateExpression: "set title = :t, price = :p",
        ExpressionAttributeValues: {
          ":t": title,
          ":p": price,
        },
      })
      .promise();

    console.log("event", event);

    return sendResponse(200, {
      success: true,
      updatedProduct: product,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(500, {
      success: false,
      message: "Could not update product widh id: " + id,
    });
  }
};
