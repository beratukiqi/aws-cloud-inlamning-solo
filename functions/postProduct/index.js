const { nanoid } = require("nanoid");
const { sendResponse } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event, context) => {
  const { title, price } = JSON.parse(event.body);

  try {
    const id = nanoid();

    await db
      .put({
        TableName: "berat-db",
        Item: {
          id,
          title,
          price,
        },
      })
      .promise();

    return sendResponse(200, {
      success: true,
      productAdded: { id, title, price },
    });
  } catch (error) {
    console.log(error);
    return sendResponse(500, {
      success: false,
      message: "Could not add product",
    });
  }
};
