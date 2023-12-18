'use strict';

export const invalidRequestData = (res, field) => {
  return res
    .status(400)
    .json({
      error: `Invalid request data at '${field}'.`,
    });
};

